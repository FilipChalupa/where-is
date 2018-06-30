import styles from './app.css'
import bearing from './utils/bearing'
import angleDifference from './utils/angleDifference'
import googleAnalytics from './utils/googleAnalytics'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

OfflinePluginRuntime.install()

googleAnalytics('UA-52555251-5')

function component(type, className, children = []) {
	const element = document.createElement(type)
	element.classList.add(className)

	children.forEach(child => {
		element.appendChild(child)
	})

	return element
}

const titleElement = component('h1', styles.title)
const noteElement = component('p', styles.note)
const noteToggleElement = component('button', styles.noteToggle)
const arrowElement = component('div', styles.arrow)
const compasssElement = component('div', styles.compass, [arrowElement])

titleElement.textContent = 'Kde je Brno?'

document.body.appendChild(
	component('div', styles.layout, [
		titleElement,
		noteElement,
		noteToggleElement,
		compasssElement,
	])
)

const toggleNote = () => {
	if (noteElement.classList.contains(styles.isActive)) {
		noteElement.classList.remove(styles.isActive)
	} else {
		if (updateNote()) {
			noteElement.classList.add(styles.isActive)
		}
	}
}

const pendingNotes = []
const addNote = text => {
	pendingNotes.push(text)
}
const updateNote = () => {
	if (pendingNotes.length > 0) {
		const text = pendingNotes.shift()
		noteElement.textContent = text
		return true
	}
	return false
}

noteToggleElement.addEventListener('click', toggleNote)

let currentArrowAngle = 0
let deviceNorthOffset = null
let targetNorthOffset = null
let currentLocation = null

const loop = () => {
	let targetArrowAngle = null
	if (deviceNorthOffset !== null && targetNorthOffset !== null) {
		targetArrowAngle =
			deviceNorthOffset + targetNorthOffset - window.screen.orientation.angle
	}
	const difference = angleDifference(
		currentArrowAngle,
		typeof targetArrowAngle === 'number'
			? targetArrowAngle
			: currentArrowAngle + 40
	)

	currentArrowAngle =
		Math.round((currentArrowAngle + difference / 20) * 1000) / 1000
	compasssElement.style.transform = `rotate(${currentArrowAngle}deg)`
	requestAnimationFrame(loop)
}

loop()

const resolveTargetAngle = () => {
	targetNorthOffset = bearing.angle(
		currentLocation.latitude,
		currentLocation.longitude,
		TARGET_LOCATION.latitude,
		TARGET_LOCATION.longitude
	)
}

const fallBackToDefaultNorthOffset = () => {
	addNote(
		'Vaše zařízení nemá kompas. Pro správné fungování miřte zařízením na sever. Sever poznáte podle lišejníků.'
	)
	deviceNorthOffset = 0
	arrowElement.style.opacity = '1'
}

if (window.DeviceMotionEvent) {
	const updateOrientation = event => {
		let offset
		if (typeof event.webkitCompassHeading === 'undefined') {
			offset = event.alpha
		} else {
			offset = event.webkitCompassHeading
		}
		if (typeof offset === 'number') {
			deviceNorthOffset = offset
			arrowElement.style.opacity = '1'
		}
	}

	window.addEventListener('deviceorientation', updateOrientation)
	setTimeout(() => {
		if (deviceNorthOffset === null) {
			window.removeEventListener('deviceorientation', updateOrientation)
			fallBackToDefaultNorthOffset()
		}
	}, 2000)
} else {
	fallBackToDefaultNorthOffset()
}

const fallBackToDefaultLocation = () => {
	addNote(
		'Nepodařilo se zjistit vaši polohu. 🤔 Předpokládejme, že jste v Praze.'
	)
	currentLocation = DEFAULT_LOCATION
	resolveTargetAngle()
}

if ('geolocation' in navigator) {
	navigator.geolocation.getCurrentPosition(event => {
		currentLocation = {
			latitude: event.coords.latitude,
			longitude: event.coords.longitude,
		}
		resolveTargetAngle()
	}, fallBackToDefaultLocation)
} else {
	fallBackToDefaultLocation()
}
