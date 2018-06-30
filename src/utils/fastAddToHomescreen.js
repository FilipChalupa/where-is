export default function fastAddToHomescreen() {
	window.addEventListener('beforeinstallprompt', event => {
		event.preventDefault()
		window.addEventListener('click', () => {
			event.prompt()
		})
	})
}
