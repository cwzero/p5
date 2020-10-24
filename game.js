let brush, pressed;
let sizeX = 25;
let sizeY = 25;
let colorR = 0;
let colorG = 255;
let colorB = 0;
let shape = 0;
let state = 0;
let scale = 0;
let xa = 0;
let ya = 0;

function setColor(r, g, b) {
    colorR = r;
    colorG = g;
    colorB = b;
}

function setSize(x, y) {
    sizeX = x;
    sizeY = y;
}

function setup() {
    let canvas = createCanvas(1280, 720);
    canvas.parent('container');    

    createButton('Clear').position(19, 19).mousePressed(clearScreen);

    createButton('Brush 1').position(19, 59).mousePressed(setBrush1);
    createButton('Brush 2').position(19, 79).mousePressed(setBrush2);
    createButton('Brush 3').position(19, 99).mousePressed(setBrush3);

    createButton('Ellipse').position(19, 139).mousePressed(() => {shape = 0});
    createButton('Rectangle').position(19, 159).mousePressed(() => {shape = 1});

    createButton('Red').position(19, 199).mousePressed(() => {setColor(255, 0, 0);});
    createButton('Green').position(19, 219).mousePressed(() => {setColor(0, 255, 0);});
    createButton('Blue').position(19, 239).mousePressed(() => {setColor(0, 0, 255);});
    createButton('Yellow').position(19, 259).mousePressed(() => {setColor(255, 255, 0);});
    createButton('Cyan').position(19, 279).mousePressed(() => {setColor(0, 255, 255);});
    createButton('Magenta').position(19, 299).mousePressed(() => {setColor(255, 0, 255);});
    createButton('Black').position(19, 319).mousePressed(() => {setColor(0, 0, 0);});
    createButton('White').position(19, 339).mousePressed(() => {setColor(255, 255, 255);});

    createButton('Small').position(19, 379).mousePressed(() => setSize(10, 10));
    createButton('Medium').position(19, 399).mousePressed(() => setSize(20, 20));
    createButton('Large').position(19, 419).mousePressed(() => setSize(30, 30));

    brush = brush1;
    pressed = pressed1;
}

function clearScreen() {
    state = 0;
    scale = 0;
    background(255);
}

function setBrush1() {
    state = 0;
    scale = 0;
    brush = brush1;
    pressed = pressed1;
}

function setBrush2() {
    state = 0;
    scale = 0;
    brush = brush2;
    pressed = pressed2;
}

function setBrush3() {
    state = 0;
    scale = 0;
    brush = brush3;
    pressed = pressed3;
}

function pressed1(event) {
    if (state == 0) {
        state = 1;
    } else {
        state = 0;
    }
}

function pressed2(event) {
    if (state == 0) {
        state = 1;
    } else if (state == 1) {  
        scale = 0;
        state = 0;
    }
}

function pressed3(event) {
    if (state == 0) {
        xa = mouseX;
        ya = mouseY;
        state = 1;
    } else if (state == 1) {
        strokeWeight(15);
        stroke(colorR, colorG, colorB);
        line(xa, ya, mouseX, mouseY);
        state = 0;
    }
}

function mousePressed(event) {
    if (mouseX > 100) {
        pressed(event);
    }
}

function brush1() {
    if (mouseIsPressed && mouseX > 100) {
        noStroke();
        fill(colorR, colorG, colorB);
        switch(shape) {
        case 0:
            ellipse(mouseX, mouseY, sizeX, sizeY);
            break;
        case 1:
            rect(mouseX, mouseY, sizeX, sizeY);
            break;
        }
    }
}

function brush2() {
    if (state == 1) {        
        noStroke();
        fill(colorR, colorG, colorB);
        switch(shape) {
        case 0:
            ellipse(mouseX, mouseY, sizeX + scale, sizeY + scale);
            break;
        case 1:
            rect(mouseX, mouseY, sizeX + scale, sizeY + scale);
            break;
        }
    }
}

function brush3() {
}

function draw() {
    if (state == 1) {
        scale++;
    }

    brush();
}