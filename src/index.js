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

let num = 0;

function soundStart(event) {
    let music;
    if (event.key == 'a') {
        music = new Audio('../asset/do.wav');
        Do.classList.add("decrease");
    }
    if (event.key == 'w') {
        music = new Audio('../asset/doSharp.wav');
        DoSharp.classList.add("decrease");
    }
    if (event.key == 's') {
        music = new Audio('../asset/re.wav');
        Re.classList.add("decrease");
    }
    if (event.key == 'e') {
        music = new Audio('../asset/reSharp.wav');
        ReSharp.classList.add("decrease");
    }
    if (event.key == 'd') {
        music = new Audio('../asset/mi.wav');
        Mi.classList.add("decrease");
    }
    if (event.key == 'f') {
        music = new Audio('../asset/fa.wav');
        Fa.classList.add("decrease");
    }
    if (event.key == 't') {
        music = new Audio('../asset/faSharp.wav');
        FaSharp.classList.add("decrease");
    }
    if (event.key == 'g') {
        music = new Audio('../asset/so.wav');
        So.classList.add("decrease");
    }
    if (event.key == 'y') {
        music = new Audio('../asset/soSharp.wav');
        SoSharp.classList.add("decrease");
    }
    if (event.key == 'h') {
        music = new Audio('../asset/la.wav');
        La.classList.add("decrease");
    }
    if (event.key == 'u') {
        music = new Audio('../asset/laSharp.wav');
        LaSharp.classList.add("decrease");
    }
    if (event.key == 'j') {
        music = new Audio('../asset/ti.wav');
        Ti.classList.add("decrease");
    }
    if (event.key == 'k') {
        music = new Audio('../asset/highDo.wav');
        highDo.classList.add("decrease");
    }
    if (event.key == 'o') {
        music = new Audio('../asset/highDoSharp.wav');
        highDoSharp.classList.add("decrease");
    }
    if (event.key == 'l') {
        music = new Audio('../asset/highRe.wav');
        highRe.classList.add("decrease");
    }
    if (event.key == 'p') {
        music = new Audio('../asset/highReSharp.wav');
        highReSharp.classList.add("decrease");
    }
    if (event.key == ';') {
        music = new Audio('../asset/highMi.wav');
        highMi.classList.add("decrease");
    }
    music.play();
    num++;
    if (num > 50) {
        location.reload();
    }
}

function soundStop(event) {
    if (event.key == 'a') {
        Do.classList.remove("decrease");
    }
    if (event.key == 'w') {
        DoSharp.classList.remove("decrease");
    }
    if (event.key == 's') {
        Re.classList.remove("decrease");
    }
    if (event.key == 'e') {
        ReSharp.classList.remove("decrease");
    }
    if (event.key == 'd') {
        Mi.classList.remove("decrease");
    }
    if (event.key == 'f') {
        Fa.classList.remove("decrease");
    }
    if (event.key == 't') {
        FaSharp.classList.remove("decrease");
    }
    if (event.key == 'g') {
        So.classList.remove("decrease");
    }
    if (event.key == 'y') {
        SoSharp.classList.remove("decrease");
    }
    if (event.key == 'h') {
        La.classList.remove("decrease");
    }
    if (event.key == 'u') {
        LaSharp.classList.remove("decrease");
    }
    if (event.key == 'j') {
        Ti.classList.remove("decrease");
    }
    if (event.key == 'k') {
        highDo.classList.remove("decrease");
    }
    if (event.key == 'o') {
        highDoSharp.classList.remove("decrease");
    }
    if (event.key == 'l') {
        highRe.classList.remove("decrease");
    }
    if (event.key == 'p') {
        highReSharp.classList.remove("decrease");
    }
    if (event.key == ';') {
        highMi.classList.remove("decrease");
    }
}

document.addEventListener('keydown', soundStart);
document.addEventListener('keyup', soundStop);