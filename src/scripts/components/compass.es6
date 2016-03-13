var Component = require('./component')
var $ = window.jQuery

/**
 * Compass component class
 */
class Compass extends Component {
	constructor(element, data) {
		super(element, data)

		if (window.DeviceMotionEvent) {
			$(window).on('deviceorientation', (e) => {
				var northDir
				if (e.originalEvent.webkitCompassHeading) {
					// Apple has it's own way
					northDir = e.originalEvent.webkitCompassHeading
				} else {
					northDir = e.originalEvent.alpha
				}
				this.$el.css('transform', 'rotate('+northDir+'deg)')
			})
		}
	}

}

module.exports = Compass
