let button;


function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);

    textSize(32);
    textAlign(CENTER, CENTER);
}


function draw() {
  background(0);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  if(mn < 10) {
    mn = "0" + mn;
  }

  if(sc < 10) {
    sc = "0" + sc;
}

  fill(255);
  text(hr + ":" + mn + ":" + sc, 200, 200);

  translate(200, 200);
  rotate(-90);
  
  //Seconds
  push();
  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);
  pop();

  //Minutes
  push();
  strokeWeight(8);
  stroke(100, 255, 150);  
  noFill();
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 270, 270, 0, minuteAngle);
  pop();

  //Hours
  push()
  strokeWeight(8);
  stroke(100, 150, 255);  
  noFill();
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 240, 240, 0, hourAngle);
  pop();
}