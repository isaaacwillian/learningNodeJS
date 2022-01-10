let tela = document.getElementsByTagName("canvas")[0].getContext("2d");

let square = {
    x: 50,
    y: 50,
}
function drawSquare(s) {

    tela.beginPath();
    tela.rect(0, 0, 500, 500);
    tela.fillStyle = "white";
    tela.fill();

    tela.beginPath();
    tela.moveTo(s.x, s.y);
    tela.lineTo(s.x + 50, s.y)
    tela.lineTo(s.x + 50, s.y + 50)
    tela.lineTo(s.x, s.y + 50)
    tela.lineTo(s.x, s.y)
    tela.strokeStyle = "red";
    tela.fillStyle = "blue";
    tela.fill();
    tela.stroke();
}
let a = 0;
let b = 1;
let c = 0;
let d = 1;
setInterval(function () {
    drawSquare(square);
    if (a > 450) {
        b = -2;
    }
    if (a < 0) {
        b = 3;
    }
    a += b;
    if (c > 450) {
        d = -1;

    }
    if (c < 0) {
        d = 2;
    }
    if (b == -2 && d == -1) {
        tela.fillStyle = "red";
        tela.fill();
    }
    if (b == 3 && d == 2) {
        tela.fillStyle = "green";
        tela.fill();
    }
    if (d == -1 && b == 3) {
        tela.fillStyle = "blue";
        tela.fill();
    }
    if (d == 2 && b == -2) {
        tela.fillStyle = "yellow";
        tela.fill();
    }
    c += d;
    square.x = a;
    square.y = c;
})

