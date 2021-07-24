function sound(event) {
    if (event.key == 'a') {
        let music = new Audio('../asset/do.wav');
        music.play();
    }
    if (event.key == 's') {
        let music = new Audio('../asset/re.wav');
        music.play();
    }
    if (event.key == 'd') {
        let music = new Audio('../asset/mi.wav');
        music.play();
    }
    if (event.key == 'f') {
        let music = new Audio('../asset/fa.wav');
        music.play();
    }
    if (event.key == 'g') {
        let music = new Audio('../asset/so.wav');
        music.play();
    }
    if (event.key == 'h') {
        let music = new Audio('../asset/la.wav');
        music.play();
    }
    if (event.key == 'j') {
        let music = new Audio('../asset/ti.wav');
        music.play();
    }
}

document.addEventListener('keydown', sound);