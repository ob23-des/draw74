var choice = '1';

function setup() {
createCanvas(600,400);
background(250);
}

function draw() {
  if (keyIsPressed === true) {
    choice = key;
    clear_print();
}
  
  if (mouseIsPressed === true) {
  newkeyChoice(choice);
  }
}

function newkeyChoice(toolChoice){
  
  if (toolChoice == '1') {
  stroke(20);
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  if (toolChoice == '2') {
  fill(300,100,0,80);
  rect(mouseX, mouseY, 40, 40);
  }
}

function clear_print(){
if (key == 'x' || key == 'X') {
  background(250);
} else {
  if (key == 'p' || key == 'P') {
    saveCanvas();
    }
  }
}
