// indico dove prendere il canvas dall html
const canvas = document.querySelector('canvas')
// indico che sara un gioco in 2d
const c = canvas.getContext('2d')
// indico le misure in altezza e larghezza del canvas
canvas.width = 1024
canvas.height = 576

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: 'img/backgroundLevel1.png'
})
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

    backgroundLevel1.draw()
    player.velocity.x = 0
    if (keys.ArrowRigth.pressed) player.velocity.x = 5
    else if (keys.ArrowLeft.pressed) player.velocity.x = -5

    player.draw()
    player.update()
        
}
    
animate()

