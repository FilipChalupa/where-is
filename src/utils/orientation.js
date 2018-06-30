export default function orientation() {
	if ('screen' in window && 'orientation' in window.screen) {
		return window.screen.orientation.angle
	}
	return 0
}
