var Component = require('./component')
var $ = window.jQuery
var bearing = require('../utils/bearing')

/**
 * Compass component class
 */
class Compass extends Component {
	constructor(element, data) {
		super(element, data)

		this.angleDiff = 0

		this.target = data.target

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((e) => {this.resolvePosition(e)}, (e) => {
				alert('Geolocation failed.')
			})
		} else {
			alert('Geolocation not supported.')
		}
	}

	resolvePosition(position) {
		this.angleDiff = bearing.angle(
			position.coords.latitude,
			position.coords.longitude,
			this.target.latitude,
			this.target.longitude
		)
		this.$el.addClass('is-ready')


		if (window.DeviceMotionEvent) {
			$(window).on('deviceorientation', (e) => {
				var northDir
				var orientation = window.orientation
				if (e.originalEvent.webkitCompassHeading) {
					// Apple has it's own way
					northDir = e.originalEvent.webkitCompassHeading
				} else {
					northDir = e.originalEvent.alpha
				}
				this.$el.css('transform', 'rotate('+(northDir+this.angleDiff-orientation)+'deg)')
			})
		} else {
			alert('Compass not supported.')
		}
	}

}

module.exports = Compass
