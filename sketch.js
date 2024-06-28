function setup() {
    createCanvas(500,500);
    background("Black");
  }
  
  function draw() {
    
    stroke("Blue")
    fill("White")
    
   // console.log(mouseIsPressed)
    
    if (mouseIsPressed){
    rect(mouseX,mouseY,30,45);  
    }
  }