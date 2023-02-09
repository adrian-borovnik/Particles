class Particle {
	constructor(position, velocity, size, color) {
		this.pos = position
		this.vel = velocity
		this.size = size
		this.color = color

		this.gravity = 0.7
	}

	update() {
		this.pos.x += this.vel.x

		this.vel.y += this.gravity
		this.pos.y += this.vel.y
	}

	draw() {
		c.fillStyle = this.color
		c.beginPath()
		c.arc(this.pos.x, this.pos.y, this.size / 2, 0, Math.PI * 2)
		c.fill()
	}
}
