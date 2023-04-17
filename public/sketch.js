let location1;  
let velocity1;  
let gravity1;   

let location2;  
let velocity2;  
let gravity2;   

function setup() {
  createCanvas(640,360);
  location1 = createVector(100,100);
  velocity1 = createVector(1.5,2.1);
  gravity1 = createVector(0,0.2);
  
  location2 = createVector(150,50);
  velocity2 = createVector(2.0,2.1);
  gravity2 = createVector(0,0.4);
    
}

function draw() {
  background(0);
  
  location1.add(velocity1);
  velocity1.add(gravity1);
  
  location2.add(velocity2);
  velocity2.add(gravity2);
  
  if ((location1.x > width) || (location1.x < 0)) {
    velocity1.x = velocity1.x * -1;
  }
  
  if (location1.y > height) {
    velocity1.y = velocity1.y * -0.95; 
    location1.y = height;
  }
  
  if ((location2.x > width) || (location2.x < 0)) {
    velocity2.x = velocity2.x * -1;
  }
  
  if (location2.y > height) {
    velocity2.y = velocity2.y * -0.95; 
    location2.y = height;
  }

  stroke(255);
  strokeWeight(2);
  fill(127);
  ellipse(location1.x,location1.y,48,48);
  fill(color(11,75,156));
  ellipse(location2.x,location2.y,57,57);
}