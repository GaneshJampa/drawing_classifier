
let mobileNet;
let canvas;
let img;
let button, reset;
let p1, p2, p3;

function modelReady(){
    console.log('Yay!! Model is Ready...');
}

function gotResults(err, res){
    if(err){
        console.error(err);
    } else {
        console.log(res);
        p1 = createP(res[0].label+" "+res[0].confidence);
        p2 = createP(res[1].label+" "+res[1].confidence);
        p3 = createP(res[2].label+" "+res[2].confidence);
    }
}

function setup(){
    mobileNet = ml5.imageClassifier('MobileNet', modelReady);
    canvas = createCanvas(640, 480);
    canvas.background(220);
    button = createButton('Ok!');
    button.mousePressed(okPressed);
    reset = createButton('reset');
    reset.mousePressed(resetPressed);
}

function draw(){
    if (mouseIsPressed) {
        fill(0);
        ellipse(mouseX, mouseY, 5, 5);
      }
}

function okPressed(){
    mobileNet.classify(canvas, gotResults);
}

function resetPressed() {
    canvas.remove(); // remove whole sketch on mouse press
    p1.remove();
    p2.remove();
    p3.remove();
    canvas = createCanvas(640, 480);
    canvas.background(220);
}