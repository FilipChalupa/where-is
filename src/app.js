import styles from './app.css'
import bearing from './utils/bearing'
import angleDifference from './utils/angleDifference'
import googleAnalytics from './utils/googleAnalytics'

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

let targetAngle = 0
let currentAngle = 0

const loop = () => {
	const difference = angleDifference(currentAngle, targetAngle)

	currentAngle = Math.round((currentAngle + difference / 20) * 1000) / 1000
	compasssElement.style.transform = `rotate(${currentAngle}deg)`
	requestAnimationFrame(loop)
}

const resolvePosition = position => {
	const angleDiff = bearing.angle(
		position.coords.latitude,
		position.coords.longitude,
		49.2020489,
		16.5079214
	)

	loop()

	if (window.DeviceMotionEvent) {
		window.addEventListener('deviceorientation', event => {
			let northDir
			if (typeof event.webkitCompassHeading === 'undefined') {
				northDir = event.alpha
			} else {
				// Apple has it's own way
				northDir = event.webkitCompassHeading
			}
			if (northDir) {
				arrowElement.style.transform = 'none'
				targetAngle = northDir + angleDiff - window.screen.orientation.angle
			}
		})
	} else {
		addNote('Compass není podporován.')
	}
}

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(
		event => {
			resolvePosition(event)
		},
		() => {
			addNote('Nepodařilo se zjistit vaši polohu. :(')
		}
	)
} else {
	addNote('Vaše zařízení nepodporuje zjišťování polohy.')
}
