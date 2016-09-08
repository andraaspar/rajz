'use strict'
			
const CHAR_TO_ID = {
	'N': 'ceiling-down',
	'Z': 'ceiling-up',
	' ': 'empty',
	'#': 'full',
	'L': 'ramp-down',
	'J': 'ramp-up',
	'*': 'star',
}
const IMAGE = document.querySelector('pre')
const R = render()
const NEXT = R.next.bind(R)

NEXT()
setInterval(NEXT, TIME)

function* render() {
	for (let i = 0; true; i++) {
		i = i % FRAMES.length
		let chars = FRAMES[i]
		let html = ''
		for (let char of chars.replace(/^\n|\n$/, '').split('')) {
			if (char === '\n') html += char
			else html += `<svg class="icon"><use xlink:href="#${CHAR_TO_ID[char]}"></use></svg>`
		}
		IMAGE.innerHTML = html
		yield 0
	}
}