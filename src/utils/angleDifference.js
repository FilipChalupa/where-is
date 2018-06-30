import modulo from './modulo'

export default function angleDifference(input, target) {
	const rawDifference = target - input
	const moduloDifference = modulo(rawDifference, 360)
	if (moduloDifference > 180) {
		return moduloDifference - 360
	} else {
		return moduloDifference
	}
}
