function start(event) {
    if (event.key == 'a') {
        let music = new Audio('');
        music.play();
    }
}

document.addEventListener('keydown', start);