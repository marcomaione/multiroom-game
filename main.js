// indico dove prendere il canvas dall html
const canvas = document.querySelector('canvas')
// indico che sara un gioco in 2d
const c = canvas.getContext('2d')
// indico le misure in altezza e larghezza del canvas
canvas.width = 1024
canvas.height = 576

const player = new Player()
const keys = {
    ArrowUp : {
        pressed: false,
    },
    ArrowLeft : {
        pressed: false,
    },
    ArrowRigth : {
        pressed: false,
    },

}

function animate() {
    window.requestAnimationFrame(animate)
    // do il colore al canvas
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.velocity.x = 0
    if (keys.ArrowRigth.pressed) {
        player.velocity.x = 5
    }else if (keys.ArrowLeft.pressed) {
        player.velocity.x = -5
    }
    player.draw()
    player.update()
    
}
animate()

// aggiungo la tastiera al gioco
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if ( player.velocity.y === 0) player.velocity.y = -20
        break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
        break
        case 'ArrowRight':
            keys.ArrowRigth.pressed = true
        break
    }

})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
        break
        case 'ArrowRight':
            keys.ArrowRigth.pressed = false
        break
    }

})