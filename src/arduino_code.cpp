const int flexPin1 = A1; //controls movement right
const int flexPin0 = A0;  //controls movement left

const int flexPin5 = A5; //controls zooming in
const int flexPin4 = A4; //controls zooming out

int value_left; //save analog value
int value_right;
int value_zoomIn;
int value_zoomOut;

void setup(){

  Serial.begin(9600);

  //start the handshake
  while (Serial.available() <= 0) {
    Serial.println("0,0,0,0"); // send a starting message
    delay(300);
    delay(50);
  }
}

void loop(){
  
  // wait for data from p5 before doing something
  while (Serial.available()) {
    int isMoving = Serial.parseInt();
    if (Serial.read() == '\n') {

      //read the inputs from flex sensors
      value_right = analogRead(flexPin1); 
      value_left = analogRead(flexPin0);

      value_zoomIn = analogRead(flexPin5);
      value_zoomOut = analogRead(flexPin4); 
      delay(5);

      //send them to p5.js
      Serial.print(value_right);
      Serial.print(',');
      Serial.print(value_left);
      Serial.print(',');
      Serial.print(value_zoomIn);
      Serial.print(',');
      Serial.println(value_zoomOut);
   }
  }
  
}