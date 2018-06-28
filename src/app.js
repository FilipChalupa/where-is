import styles from './app.css'
import bearing from './utils/bearing'

// Google analytics
;(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r
	;(i[r] =
		i[r] ||
		function() {
			;(i[r].q = i[r].q || []).push(arguments)
		}),
		(i[r].l = 1 * new Date())
	;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
	a.async = 1
	a.src = g
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga')
ga('create', 'UA-52555251-5', 'auto')
ga('send', 'pageview')

function component(type, className, children = []) {
	const element = document.createElement(type)
	element.classList.add(className)

	children.forEach(child => {
		element.appendChild(child)
	})

	return element
}

const titleElement = component('h1', styles.title)
const arrowElement = component('div', styles.arrow)
const compasssElement = component('div', styles.compass, [arrowElement])

titleElement.textContent = 'Kde je Brno?'

document.body.appendChild(
	component('div', styles.layout, [titleElement, compasssElement])
)

let targetAngle = 0
let currentAngle = 0

const loop = () => {
	currentAngle += (targetAngle - currentAngle) / 2
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
				targetAngle = northDir + angleDiff
			}
		})
	} else {
		alert('Compass not supported.')
	}
}

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(
		event => {
			resolvePosition(event)
		},
		() => {
			alert('Nepodařilo se zjistit vaši polohu. :(')
		}
	)
} else {
	alert('Vaše zařízení nepodporuje zjišťování polohy.')
}
