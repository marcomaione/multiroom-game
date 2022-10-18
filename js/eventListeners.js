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