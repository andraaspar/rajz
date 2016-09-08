'use strict'
			
const CHAR_TO_ID = {
	'N': 'ceiling-down',
	'Z': 'ceiling-up',
	' ': 'empty',
	'%': 'full',
	'L': 'ramp-down',
	'J': 'ramp-up',
	'*': 'star',
	'#': 'checkers',
	'0': 'dot',
}
const IMAGE = document.querySelector('pre')
const R = render()
const NEXT = R.next.bind(R)

NEXT()
setInterval(NEXT, TIME)

function* render() {
	for (let frameIndex = 0; true; frameIndex+=2) {
		frameIndex = frameIndex % FRAMES.length
		let time = FRAMES[frameIndex]
		let chars = FRAMES[frameIndex + 1]
		let html = ''
		for (let char of chars.replace(/^\n|\n$/, '').split('')) {
			if (char === '\n') html += char
			else html += `<svg class="icon"><use xlink:href="#${CHAR_TO_ID[char]}"></use></svg>`
		}
		IMAGE.innerHTML = html
		
		for (let timeIndex = 0; timeIndex < time; timeIndex++) {
			yield
		}
	}
}