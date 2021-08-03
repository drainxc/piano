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
    if (event.key == 'a') {
        new Audio('../asset/do.wav').play();
        Do.classList.add("decrease");
    }
    if (event.key == 'w') {
        new Audio('../asset/doSharp.wav');
        DoSharp.classList.add("decrease");
    }
    if (event.key == 's') {
        new Audio('../asset/re.wav').play();
        Re.classList.add("decrease");
    }
    if (event.key == 'e') {
        new Audio('../asset/reSharp.wav').play();
        ReSharp.classList.add("decrease");
    }
    if (event.key == 'd') {
        new Audio('../asset/mi.wav').play();
        Mi.classList.add("decrease");
    }
    if (event.key == 'f') {
        new Audio('../asset/fa.wav').play();
        Fa.classList.add("decrease");
    }
    if (event.key == 't') {
        new Audio('../asset/faSharp.wav').play();
        FaSharp.classList.add("decrease");
    }
    if (event.key == 'g') {
        new Audio('../asset/so.wav').play();
        So.classList.add("decrease");
    }
    if (event.key == 'y') {
        new Audio('../asset/soSharp.wav').play();
        SoSharp.classList.add("decrease");
    }
    if (event.key == 'h') {
        new Audio('../asset/la.wav').play();
        La.classList.add("decrease");
    }
    if (event.key == 'u') {
        new Audio('../asset/laSharp.wav').play();
        LaSharp.classList.add("decrease");
    }
    if (event.key == 'j') {
        new Audio('../asset/ti.wav').play();
        Ti.classList.add("decrease");
    }
    if (event.key == 'k') {
        new Audio('../asset/highDo.wav').play();
        highDo.classList.add("decrease");
    }
    if (event.key == 'o') {
        new Audio('../asset/highDoSharp.wav').play();
        highDoSharp.classList.add("decrease");
    }
    if (event.key == 'l') {
        new Audio('../asset/highRe.wav').play();
        highRe.classList.add("decrease");
    }
    if (event.key == 'p') {
        new Audio('../asset/highReSharp.wav').play();
        highReSharp.classList.add("decrease");
    }
    if (event.key == ';') {
        new Audio('../asset/highMi.wav').play();
        highMi.classList.add("decrease");
    }
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