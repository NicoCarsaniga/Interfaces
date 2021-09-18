// ejercicio 1
var size = 10;

var matriz = new Array(size);

var num = 0;

for (i = 0; i < size; i++) {
    matriz[i] = new Array(size);
}

for (var x = 0; x < size; x++) {
    for (var y = 0; y < size; y++) {
        num = Math.floor((Math.random() * 100));
        matriz[x][y] = num;
    }
}

console.log(matriz);

//ejercicio 2

let canv2 = document.getElementById('rectangulo');
let ctx2 = canv2.getContext('2d');

ctx2.fillStyle = "#0000FF";
ctx2.fillRect(0, 0, 500, 200);
ctx2.stroke();

ctx2.fillStyle = "#FFFF00";
ctx2.fillRect(0, 70, 500, 50);
ctx2.stroke();

//ejercicio 2.1

let canv2_1 = document.getElementById('piramide');
let ctx2_1 = canv2_1.getContext('2d');

ctx2_1.fillStyle = "#0000FF";
ctx2_1.fillRect(210, 20, 70, 70);
ctx2_1.fillRect(0, 230, 70, 70);
ctx2_1.fillRect(140, 230, 70, 70);
ctx2_1.fillRect(280, 230, 70, 70);
ctx2_1.fillRect(420, 230, 70, 70);
ctx2_1.stroke();

ctx2_1.fillStyle = "#FFFF00";
ctx2_1.fillRect(140, 90, 70, 70);
ctx2_1.fillRect(280, 90, 70, 70);
ctx2_1.fillRect(70, 160, 70, 70);
ctx2_1.fillRect(210, 160, 70, 70);
ctx2_1.fillRect(350, 160, 70, 70);
ctx2_1.stroke();

//ejercicio 3

let canv3 = document.getElementById('rec_con_imgData');
let ctx3 = canv3.getContext('2d');
let r3 = 255, g3 = 255, b3 = 255, a3 = 255;
let imageData3 = ctx3.createImageData(canv3.clientWidth, canv3.clientHeight);

for (let x3 = 0; x3 < imageData3.width; x3++) {
    for (let y3 = 0; y3 < imageData3.height; y3++) {
        setPixel3(x3, y3, r3, g3, b3, a3);
    }
}
ctx3.putImageData(imageData3, 0, 0);

function setPixel3(x3, y3, r3, g3, b3, a3) {
    let index = (x3 + y3 * imageData3.width) * 4;
    imageData3.data[index] = r3;
    imageData3.data[index + 1] = g3;
    imageData3.data[index + 2] = b3;
    imageData3.data[index + 3] = a3;
}

//ejercicio 3

let canv4 = document.getElementById('gradBlancoYNegro');
let ctx4 = canv4.getContext('2d');
let r = 0, g = 0, b = 0, a = 255;
let w = canv4.clientWidth, h = canv4.clientHeight;
let imageData4 = ctx4.createImageData(w, h);

function drawRect(imageData4, r, g, b, a) {
    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            let cof = 255 / h;
            let r = cof * y
            let g = cof * y
            let b = cof * y
            let a = 255
            setPixel(imageData4, x, y, r, g, b, a);
        }
    }
}

function setPixel(imageData4, x, y, r, g, b, a) {
    let index = (x + y * imageData4.width) * 4;
    imageData4.data[index] = r;
    imageData4.data[index + 1] = g;
    imageData4.data[index + 2] = b;
    imageData4.data[index + 3] = a;
}

drawRect(imageData4, r, g, b, a);
ctx4.putImageData(imageData4, 0, 0);