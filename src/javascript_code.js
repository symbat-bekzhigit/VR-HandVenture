let h = 0, v = 0, f = 0;
let sharyn, kzmap;
let moveRight;
let RES_W = 600;
let RES_H = 400;
let mapPage = false;
let welcomePage = true;
let instructionsPage = false;
let insidePanorama = false;

let rect_size;
let rect1_color;
let rect2_color;

let instructionsFontSize;
let onFullScreen = false;

let destination1 = false;
let destination2 = false;
let destination3 = false;
let destination4 = false;
let destination5 = false;
let destination6 = false;

let clickCnt = 0;


//load all the images, fonts, etc.
function preload(){
  kzmap = loadImage('images/map.jpg');
  welcomeImage = loadImage('images/welcomepage.jpeg');
  
  sharyn = loadImage('images/sharyn.jpg');
  altay = loadImage('images/altay.jpg');
  astana = loadImage('images/astana.jpg');
  caspiansea = loadImage('images/caspiansea.jpg');
  burabay = loadImage('images/burabay.jpg');
  kaindy = loadImage('images/kaindy.jpg');
  
  myFont = loadFont('fonts/KaushanScript-Regular.ttf');
  myFont2 = loadFont('fonts/Lora-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
   rect_size = windowWidth/((windowWidth+windowHeight)/25);
  instructionsFontSize = (windowWidth*0.7)/35;
}

function draw() {
  
  if (!serialActive) {
    text("Press Space Bar to select Serial Port", 20, 30);
  } else {
    
    print("Serial Connected");
   
    
    //the display changes based on which page we're in
    if(welcomePage == true){
      welcomePageDisplay();
    }
  
    if(instructionsPage == true){
      instructionsPageDisplay();
    }
  
    if(mapPage == true){
      mapPageDisplay();
    }
  
    //the display changes based on which page we're in
    //destination 1 - Sharyn 
  if(insidePanorama == true && destination1 == true){
    panorama(sharyn);
    
    //go back to welcome page if ENTER is pressed
    //the keyCode for ENTER is 13
    if (keyIsDown(13)){
      destination1 = false;
      insidePanorama = false;
      mapPage = true;
  }
  }
  
  //destination 2 - Altay
  if(insidePanorama == true && destination2 == true){
    panorama(altay);
    
    //go back to welcome page if ENTER is pressed
    if (keyIsDown(13)){
      destination2 = false;
      insidePanorama = false;
      mapPage = true;
    }
  }
  
  //destination 3 - Astana
  if(insidePanorama == true && destination3 == true){
    panorama(astana);
    
    //go back to welcome page if ENTER is pressed
    if (keyIsDown(13)){
      destination3 = false;
      insidePanorama = false;
      mapPage = true;
    }
  }
  
  //destination 4 - Caspian sea
  if(insidePanorama == true && destination4 == true){
    panorama(caspiansea);
    
    //go back to welcome page if ENTER is pressed
    if (keyIsDown(13)){
      destination4 = false;
      insidePanorama = false;
      mapPage = true;
    }
  }
  
  
  //destination 5 - Burabay
  if(insidePanorama == true && destination5 == true){
    panorama(burabay);
    
    //go back to welcome page if ENTER is pressed
    if (keyIsDown(13)){
      destination5 = false;
      insidePanorama = false;
      mapPage = true;
    }
  }
  
  
  //destination 6 - Kaindy
  if(insidePanorama == true && destination6 == true){
    panorama(kaindy);
    
    //go back to welcome page if ENTER is pressed
    if (keyIsDown(13)){
      destination6 = false;
      insidePanorama = false;
      mapPage = true;
    }
  }
  
 
    
    
  }
}
  

//display for a welcome page
function welcomePageDisplay(){
  
  //the center of the image corresponds to coordinates 0,0
  image(welcomeImage, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight);
  
  textAlign(CENTER)
  
  fill(255)
 
  textSize(instructionsFontSize*2);
  let msg1 = "Welcome to "
  let tWidth1 = textWidth(msg1)
  // text(msg1, - (tWidth1 / 2), RES_H / 9)
  text(msg1, 0, -windowHeight/30)
  
  textFont(myFont, instructionsFontSize*2.3) 
  let msg2 = "KAZAKHSTAN"
  let tWidth2 = textWidth(msg2)
  text(msg2, 0, windowHeight/12)
  
  textSize(instructionsFontSize);
  let msg3 = "Click anywhere to continue to the instructions page"
  let tWidth3 = textWidth(msg3)
  text(msg3, 0, windowHeight/2 - 50)
}



//display for instructions page
function instructionsPageDisplay(){
  
  //the center of the image corresponds to coordinates 0,0
  image(welcomeImage, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight);
  
  textAlign(CENTER)

  
  textFont(myFont2,instructionsFontSize) 
  
  fill("white");
  // rect(-RES_W*0.35, -RES_H*0.3, RES_W*0.7, RES_H*0.6);
   rect(-windowWidth*0.3, -windowHeight*0.3, windowWidth*0.6, windowHeight*0.6);
  
    let msg2 = "On the next page you will see a map of Kazakhstan where some places are marked with rectangular boxes"
    let tWidth2 = textWidth(msg2)
    
    let msg3 = "Click on the boxes to see the panoramic view of the corresponding destination"
    let tWidth3 = textWidth(msg3)
    
    let msg6 = "You can exit the destination and return to the main page by pressing ENTER"
    let tWidth6 = textWidth(msg6)
    
     let msg5 = "You can move inside the panorama by moving your hand right and left"
    let tWidth5 = textWidth(msg5)
    
     let msg7 = "To zoom in the image bend your index finger, to zoom out - your thumb"
    let tWidth7 = textWidth(msg7)

    fill("black");
  
  //display the instructions 
    text(msg2, -windowWidth*0.3 + instructionsFontSize*3,
         -windowHeight*0.3 + instructionsFontSize*3, windowWidth*0.5)
   text(msg3, -windowWidth*0.3 + instructionsFontSize*3,
        -windowHeight*0.2 + instructionsFontSize*3, windowWidth*0.5)
   text(msg5, -windowWidth*0.3 + instructionsFontSize*3,
          -windowHeight*0.1 + instructionsFontSize*3, windowWidth*0.5)
  text(msg7, -windowWidth*0.3 + instructionsFontSize*3,
          instructionsFontSize*3, windowWidth*0.5)
  
   text(msg6, -windowWidth*0.3 + instructionsFontSize*3,
         windowHeight*0.1 + instructionsFontSize*3, windowWidth*0.5)
  
  
}



//display for the map page
function mapPageDisplay(){

  //the center of the image corresponds to coordinates 0,0
  image(kzmap, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight);
  
  //FORMULA for the ratio between x and y of rect and mouseX and mouseY:
  // x + windowWidth/2 = mouseX, 
  // y + windowHeight/2 = mouseY 
  
  
  //destination 1 - Sharyn
  
   // mouseX and mouseY here work in correspondance to real coordinates
  
  //change the color of the rectangle when the user hovers over it
  if(mouseX >=  3*windowWidth/4 && mouseX <=  3*windowWidth/4 + rect_size && mouseY >= 3*windowHeight/4 && mouseY <= 3*windowHeight/4 + rect_size){
    rect1_color = "yellow";
    fill("white");
    rect(windowWidth/4 +rect_size, windowHeight/4, 200,150);
    
    //display the name of the place and a small descripton when the user hovers over the rectangle
    fill("black")
    textFont(myFont2,instructionsFontSize*1.5) 
    text("Sharyn", windowWidth/4 +rect_size +100, windowHeight/4+50)
    
    let txt = "Picturesque canyon located near Almaty"
    let txtWidth = textWidth(txt);
    textSize(instructionsFontSize*0.6);
    text(txt, windowWidth/4 +rect_size + 30, windowHeight/4+100, 150)
    
  }else{
    rect1_color = "purple";
  } 
  
  // x and y cordinates of the location rectangles drawn here work in correspondance to origin translated into (windowWidth/2, windowHeight/2)
  
  //draw location rectangle
  fill(rect1_color);
  rect(windowWidth/4, windowHeight/4, rect_size, rect_size);
  
  
  
  //destination 2 - Altay
  
  if(mouseX >= 5*windowWidth/6 && mouseX <=  5*windowWidth/6 +rect_size && mouseY >= 11*windowHeight/20 && mouseY <=  11*windowHeight/20 + rect_size){
    rect2_color="yellow";
    fill("white");
    rect(windowWidth/3 +rect_size, windowHeight/20, 200,150);
    
    fill("black")
    textFont(myFont2,instructionsFontSize*1.5) 
    text("Altay", windowWidth/3 +rect_size +100, windowHeight/20+50)
    
    let txt = "Moutain range with untouched nature"
    let txtWidth = textWidth(txt);
    textSize(instructionsFontSize*0.6);
    text(txt, windowWidth/3 +rect_size + 30, windowHeight/20+100, 150)
    
    
   }else{
      rect2_color="green";
   }
  
  //draw location rectangle
  fill(rect2_color);
  rect(windowWidth/3, windowHeight/20, rect_size,rect_size);
  
  
  
   //destination 3 - Astana
  
  if(mouseX >= 8*windowWidth/14 && mouseX <=  8*windowWidth/14 +rect_size && mouseY >= 3*windowHeight/10 && mouseY <=  3*windowHeight/10 + rect_size){
    rect2_color="yellow";
    fill("white");
    rect(windowWidth/14 +rect_size, -windowHeight/5, 200,150);
    
    fill("black")
    textFont(myFont2,instructionsFontSize*1.5) 
    text("Astana", windowWidth/14 +rect_size +100, -windowHeight/5+50)
    
    let txt = "Capital city of Kazakhstan"
    let txtWidth = textWidth(txt);
    textSize(instructionsFontSize*0.6);
    text(txt, windowWidth/14 +rect_size + 30, -windowHeight/5+100, 150)
    
   }else{
      rect2_color="purple";
   }
  
  //draw location rectangle
  fill(rect2_color);
  rect(windowWidth/14, -windowHeight/5, rect_size,rect_size);
  
  
  
  
  //destination 4 - Caspian Sea
  
  if(mouseX >= windowWidth/6 && mouseX <=  windowWidth/6 +rect_size && mouseY >= 3*windowHeight/4 && mouseY <=  3*windowWidth/4 + rect_size){
    rect2_color="yellow";
    fill("white");
    rect(-windowWidth/3 +rect_size, windowHeight/4, 200,150);
    
    fill("black")
    textFont(myFont2,instructionsFontSize*1.3) 
    text("Caspian Sea", -windowWidth/3 +rect_size +100, windowHeight/4+50)
    
    let txt = "Blue Lagoon in the Caspian Sea"
    let txtWidth = textWidth(txt);
    textSize(instructionsFontSize*0.6);
    text(txt, -windowWidth/3 +rect_size + 30, windowHeight/4+100, 150)
    
   }else{
      rect2_color="brown";
   }
  
  //draw location rectangle
  fill(rect2_color);
  rect(-windowWidth/3, windowHeight/4, rect_size,rect_size);
  
  
  
  //destination 5 - Burabay
  
    //change the color of the rectangle when the user hovers over it
  if(mouseX >= 6*windowWidth/10 && mouseX <=  6*windowWidth/10 +rect_size && mouseY >= 1.5*windowHeight/7 && mouseY <=   1.5*windowHeight/7   + rect_size){
    rect2_color="yellow";
    fill("white");
    rect(windowWidth/10 +rect_size, -windowHeight/3.5, 200,150);
    
    fill("black")
    textFont(myFont2,instructionsFontSize*1.3) 
    text("Burabay", windowWidth/10 +rect_size +100, -windowHeight/3.5+50)
    
    let txt = "The natural “pearl” of Kazakhstan"
    let txtWidth = textWidth(txt);
    textSize(instructionsFontSize*0.6);
    text(txt, windowWidth/10 +rect_size + 30, -windowHeight/3.5+100, 150)
    
   }else{
      rect2_color="purple";
   }
  
  //draw location rectangle
  fill(rect2_color);
  rect(windowWidth/10, -windowHeight/3.5, rect_size,rect_size);
 
  
  
  
  
  
  //destination 6 - Kaindy
  

  if(mouseX >= 7*windowWidth/10 && mouseX <=  7*windowWidth/10 +rect_size && mouseY >= 5.5*windowHeight/7 && mouseY <=   5.5*windowHeight/7   + rect_size){
    rect2_color="yellow";
    fill("white");
    rect(windowWidth/5 +rect_size, windowHeight/3.5, 200,150);
    

    fill("black")
    textFont(myFont2,instructionsFontSize*1.3) 
    text("Kaindy Lake", windowWidth/5 +rect_size +100,windowHeight/3.5+50)
    
    let txt = "Striking deep water lake with a sunken forest"
    let txtWidth = textWidth(txt);
    textSize(instructionsFontSize*0.6);
    text(txt, windowWidth/5 +rect_size + 30, windowHeight/3.5+100, 150)
    
   }else{
      rect2_color="purple";
   }
  
  //draw location rectangle
  fill(rect2_color);
  rect(windowWidth/5, windowHeight/3.5, rect_size,rect_size);
 
}



function mouseClicked(){
  
  //counter is used to display the welcome page after the second click
  clickCnt++;
  
  //if the user clicks on the mouse while being on the welcome page, move to instructions page
  if(welcomePage == true && clickCnt==2){
    welcomePage = false;
    instructionsPage = true;
    print("swtiched to instructions page")
  }
  
    //if the user clicks on the mouse while being on the instructions page, move to the map page
  else if(instructionsPage == true){
    instructionsPage = false;
    mapPage = true;
    print("swtiched to map page")
  }
  
  if(mapPage == true){
  
      //print(mouseX +" and " + mouseY);
      
      //rect 1(Sharyn) is drawn on the coordinates (3*windowWidth/4, 3*windowHeight/4)
      if(mouseX >=  3*windowWidth/4 && mouseX <=  3*windowWidth/4 + rect_size && mouseY >= 3*windowHeight/4 && mouseY <= 3*windowHeight/4 + rect_size){
        //if uses clicks on the destination 1 rectangle, open the respective panorama
        mapPage = false
        destination1 = true
        insidePanorama = true
      }
      
      
      //rect 2(Altay) is drawn on the coordinates (5*windowWidth/6,11*windowHeight/20)
      if(mouseX >=  5*windowWidth/6 && mouseX <=  5*windowWidth/6 + rect_size && mouseY >= 11*windowHeight/20 && mouseY <= 11*windowHeight/20 + rect_size){
        //if uses clicks on the destination 2 rectangle, open the respective panorama
        mapPage = false
        destination2 = true
        insidePanorama = true
      }
    
    
    //rect 3(Astana) is drawn on the coordinates (8*windowWidth/14,3*windowHeight/10)
      if(mouseX >=  8*windowWidth/14 && mouseX <=  8*windowWidth/14 + rect_size && mouseY >= 3*windowHeight/10 && mouseY <= 3*windowHeight/10 + rect_size){
        //if uses clicks on the destination 3 rectangle, open the respective panorama
        mapPage = false
        destination3 = true
        insidePanorama = true
      }
    
    
    //rect 4 (Caspian Sea) is drawn on the coordinates (8*windowWidth/14,3*windowHeight/10)
      if(mouseX >=  windowWidth/6 && mouseX <=  windowWidth/6 + rect_size && mouseY >= 3*windowHeight/4 && mouseY <= 3*windowHeight/4 + rect_size){
        //if uses clicks on the destination 4 rectangle, open the respective panorama
        mapPage = false
        destination4 = true
        insidePanorama = true
      }
    

    
    //rect 5 (Burabay) is drawn on the coordinates (8*windowWidth/14,3*windowHeight/10)
      if(mouseX >=  6*windowWidth/10 && mouseX <=  6*windowWidth/10 + rect_size && mouseY >=  1.5*windowHeight/7 && mouseY <=  1.5*windowHeight/7 + rect_size){
        //if uses clicks on the destination 5 rectangle, open the respective panorama
        mapPage = false
        destination5 = true
        insidePanorama = true
      }
    
    
    
    //rect 6 (Kaindy) is drawn on the coordinates (8*windowWidth/14,3*windowHeight/10)
      if(mouseX >=  7*windowWidth/10 && mouseX <=  7*windowWidth/10 + rect_size && mouseY >=      5.5*windowHeight/7 && mouseY <=     5.5*windowHeight/7 + rect_size){
        //if uses clicks on the destination 6 rectangle, open the respective panorama
        mapPage = false
        destination6 = true
        insidePanorama = true
      }
 
    }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyTyped() {
  // For some reason on Chrome/Mac you may have to press f twice to toggle. Works correctly on Firefox/Mac
  if (key === 'f') {
    toggleFullscreen();
    onFullScreen = true;
    instructionsFontSize =  (windowWidth*0.7)/20;
  }
}

// Toggle fullscreen state. Must be called in response
// to a user event (i.e. keyboard, mouse click)
function toggleFullscreen() {
  let fs = fullscreen(); // Get the current state
  fullscreen(!fs); // Flip it!
  instructionsFontSize =  (windowWidth*0.7)/35;
}


//code used to draw panorama image
function panorama(image) {
  noStroke();
  
  //camera allows us to change the angle at which we look at the image
  camera();
 
  scale(-1, 1, 1);
  translate(0,0,10*f); //zoom the image based on the f value (10 is the factor of the scale)
  rotateX(radians(v)); //rotate horizontally
  rotateY(radians(h)); //rotate vertically

  //since i'm using WEBGL, i'm using texture() and sphere() funtions to display the image 
  texture(image);
  sphere(1000);

  //move right inside the panorama
    if(value_right > 800){
      print("value right is "+value_right);
      h--; 
    }
    //move left
    if(value_left > 800){
      print("value left is "+value_left);
      h++; 
    }

  //when f will increase, the image will zoom in
   if(value_zoomIn > 820){
      print("zoom in "+value_zoomIn);
     
     //limit the value till which the user can zoom out
      if(f <= 140) f++;
  }
   
    //when f will decrease, the image will zoom in
   if(value_zoomOut > 820){
      print("zoom out "+value_zoomOut);
     
      //limit the value till which the user can zoom out
     if(f >= -170) f--; 
     print("f is "+f)
    }

}

function keyPressed() {
  if (key == " ") {
    // important to have in order to start the serial connection!!
    setUpSerial();
  }
}

function readSerial(data) {
  ////////////////////////////////////
  //READ FROM ARDUINO HERE
  
  if (data != null) {
    
    let fromArduino = split(trim(data), ",");
    if (fromArduino.length == 4) {
      value_right = fromArduino[0];
      value_left = fromArduino[1];
      value_zoomIn = fromArduino[2];
      value_zoomOut = fromArduino[3];
    }
    //////////////////////////////////
    //SEND TO ARDUINO HERE (handshake)
    //////////////////////////////////
    
    let sendToArduino = 1 + "," + 1 + "," + 1 + "," + 1 + "\n";
    writeSerial(sendToArduino);
  }
}


