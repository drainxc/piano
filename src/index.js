const Do = document.getElementById('C');
const DoSharp = document.getElementById('Csharp');
const Re = document.getElementById('D');
const ReSharp = document.getElementById('Dsharp');
const Mi = document.getElementById('E');
const Fa = document.getElementById('F');
const FaSharp = document.getElementById('Fsharp');
const So = document.getElementById('G');
const SoSharp = document.getElementById('Gsharp');
const La = document.getElementById('A');
const LaSharp = document.getElementById('Asharp');
const Ti = document.getElementById('B');
const highDo = document.getElementById('highC');
const highDoSharp = document.getElementById('highCsharp');
const highRe = document.getElementById('highD');
const highReSharp = document.getElementById('highDsharp');
const highMi = document.getElementById('highE');

function soundStart(event) {
    if (event.key == 'a') {
        let music = new Audio('../asset/do.wav');
        Do.classList.add("decrease");
        music.play();
    }
    if (event.key == 'w') {
        let music = new Audio('../asset/doSharp.wav');
        DoSharp.classList.add("decrease");
        music.play();
    }
    if (event.key == 's') {
        let music = new Audio('../asset/re.wav');
        Re.classList.add("decrease");
        music.play();
    }
    if (event.key == 'e') {
        let music = new Audio('../asset/reSharp.wav');
        ReSharp.classList.add("decrease");
        music.play();
    }
    if (event.key == 'd') {
        let music = new Audio('../asset/mi.wav');
        Mi.classList.add("decrease");
        music.play();
    }
    if (event.key == 'f') {
        let music = new Audio('../asset/fa.wav');
        Fa.classList.add("decrease");
        music.play();
    }
    if (event.key == 't') {
        let music = new Audio('../asset/faSharp.wav');
        FaSharp.classList.add("decrease");
        music.play();
    }
    if (event.key == 'g') {
        let music = new Audio('../asset/so.wav');
        So.classList.add("decrease");
        music.play();
    }
    if (event.key == 'y') {
        let music = new Audio('../asset/soSharp.wav');
        SoSharp.classList.add("decrease");
        music.play();
    }
    if (event.key == 'h') {
        let music = new Audio('../asset/la.wav');
        La.classList.add("decrease");
        music.play();
    }
    if (event.key == 'u') {
        let music = new Audio('../asset/laSharp.wav');
        LaSharp.classList.add("decrease");
        music.play();
    }
    if (event.key == 'j') {
        let music = new Audio('../asset/ti.wav');
        Ti.classList.add("decrease");
        music.play();
    }
    if (event.key == 'k') {
        let music = new Audio('../asset/highDo.wav');
        highDo.classList.add("decrease");
        music.play();
    }
    if (event.key == 'o') {
        let music = new Audio('../asset/highDoSharp.wav');
        highDoSharp.classList.add("decrease");
        music.play();
    }
    if (event.key == 'l') {
        let music = new Audio('../asset/highRe.wav');
        highRe.classList.add("decrease");
        music.play();
    }
    if (event.key == 'p') {
        let music = new Audio('../asset/highReSharp.wav');
        highReSharp.classList.add("decrease");
        music.play();
    }
    if (event.key == ';') {
        let music = new Audio('../asset/highMi.wav');
        highMi.classList.add("decrease");
        music.play();
    }
}

function soundStop(event) {
    if (event.key == 'a') {
        let music = new Audio('../asset/do.wav');
        Do.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'w') {
        let music = new Audio('../asset/doSharp.wav');
        DoSharp.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 's') {
        let music = new Audio('../asset/re.wav');
        Re.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'e') {
        let music = new Audio('../asset/reSharp.wav');
        ReSharp.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'd') {
        let music = new Audio('../asset/mi.wav');
        Mi.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'f') {
        let music = new Audio('../asset/fa.wav');
        Fa.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 't') {
        let music = new Audio('../asset/faSharp.wav');
        FaSharp.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'g') {
        let music = new Audio('../asset/so.wav');
        So.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'y') {
        let music = new Audio('../asset/soSharp.wav');
        SoSharp.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'h') {
        let music = new Audio('../asset/la.wav');
        La.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'u') {
        let music = new Audio('../asset/laSharp.wav');
        LaSharp.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'j') {
        let music = new Audio('../asset/ti.wav');
        Ti.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'k') {
        let music = new Audio('../asset/highDo.wav');
        highDo.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'o') {
        let music = new Audio('../asset/highDoSharp.wav');
        highDoSharp.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'l') {
        let music = new Audio('../asset/highRe.wav');
        highRe.classList.remove("decrease");
        music.pause();
    }
    if (event.key == 'p') {
        let music = new Audio('../asset/highReSharp.wav');
        highReSharp.classList.remove("decrease");
        music.pause();
    }
    if (event.key == ';') {
        let music = new Audio('../asset/highMi.wav');
        highMi.classList.remove("decrease");
        music.pause();
    }
}

document.addEventListener('keydown', soundStart);
document.addEventListener('keyup', soundStop);