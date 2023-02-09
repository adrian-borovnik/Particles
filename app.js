const canvas = document.querySelector('#canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let colors = ['#00261C', '#044D29', '#168039', '#45BF55', '#97ED8A']

let mouse = null
canvas.addEventListener('mousemove', (e) => {
	mouse = {
		x: e.offsetX,
		y: e.offsetY,
	}
})

let particleCount = 10
let particles = []
canvas.addEventListener('mousemove', (e) => {
	if (e.buttons != 0) {
		for (let i = 0; i < particleCount; i++) {
			let position = {
				x: mouse.x,
				y: mouse.y,
			}
			let speed = Math.random() * 15
			let velocity = {
				x: (Math.random() - 0.5) * speed,
				y: (Math.random() - 0.7) * speed,
			}
			let size = Math.random() * 20 + 10
			let color = colors[Math.floor(Math.random() * colors.length)]
			let particle = new Particle(position, velocity, size, color)
			particles.push(particle)
		}
	}
})

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
})

loop()
function loop() {
	drawBackground()
	for (let i = particles.length - 1; i >= 0; i--) {
		let particle = particles[i]
		particle.update()
		particle.draw()
		if (particle.pos.y - particle.size > canvas.height) {
			particles.splice(i, 1)
		}
	}
	requestAnimationFrame(loop)
}

function drawBackground() {
	c.fillStyle = 'white'
	c.fillRect(0, 0, canvas.width, canvas.height)
}
