// indico dove prendere il canvas dall html
const canvas = document.querySelector('canvas')
// indico che sara un gioco in 2d
const c = canvas.getContext('2d')
// indico le misure in altezza e larghezza del canvas
canvas.width = 1024
canvas.height = 576
// creo una classe personaggio
class Player {
    constructor() {
        this.position = {
            x: 100,
            y:100,
        }
        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height
        }
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
    // movimento personaggio all interno del canvas
        if (this.sides.bottom < canvas.height)  {
            this.position.y++
            this.sides.bottom = this.position.y + this.height
        }
    }
}
const player = new Player()

// let bottom = y + 100
function animate() {
    window.requestAnimationFrame(animate)
    // do il colore al canvas
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    player.update()
    
}
animate()