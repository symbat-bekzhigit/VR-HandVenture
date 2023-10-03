# VR-HandVenture
“VR” gloves project that allows users to explore Kazakhstan through the panorama images using hand gestures.


# Description:

As the name of the project suggests, for my final project I created the “VR” gloves that allows the user to control the hand movement and explore different places of Kazakhstan through their panorama images. I have always been fascinated by the beauty of my country, and I want other people to see those beautiful places as well. The destination points that the user can explore include a variety of landscapes, starting from dense forests and mountain lakes, and ending with deserts and canyons.

The reason I named this project “VR HandVenture” is because moving inside the panorama image closely resembles the movement inside a VR world and our right hand is the main instrument through which we can explore the place ( “HandVenture” comes from the word “Adventure”; shoutout to Saamia and Sanjana who helped me come up with this project name that I think perfectly encapsulates the project’s main idea).

After the welcome page and following the instructions page, the user will be prompted to enter the main page, a page displaying Kazakhstan’s map,  where he/she later can choose the destination he/she wants to visit.  Before clicking on the corresponding destination, a small information about the place, including the name of the place and a short description, will be displayed to the user. The user can explore each destination through moving inside panorama  image using the hand movements. The movements that are available to the user are moving left, right and zooming in, out. When the user bends his/her hand to the right the image will move right, when bends to the left the image will move left, and bending index finger will allow the user to zoom in, while bending the thumb will allow to zoom out. When zooming out of the image, after reaching a certain threshold, the user exits the image and reaches a 3d space where the image will now be displayed in form of a sphere.

# Implementation:

I attached flex sensors to the glove and used analog input received from them to detect the user’s hand movement. I attached two flex sensors to both sides the glove which are used to sense when the user bends his/her hand right or left and move the panorama image accordingly. I also attached two sensors to the index finger and to the thumb which are used to zoom in and zoom out inside the image.  I’ve used pretty useful feedback from the user-testing so I set the limit to how much the user an zoom in and out, as this has been creating problems with the experience because the sensors are too sensitive for detecting when the user continuously bended his/her hand.

INSERT IMG1


# Arduino:

Arduino is used to read analog input from the flex sensors which it then  sends to p5.js through serial communication.

# p5.js:

p5.js is handling the main functions of the code such as creating visuals and a panorama-like experience, moving the image according to the value received from the Arduino, creating user interactivity with the map, popping text boxes when the user hovers over the destination rectangles, etc.

# Communication between Arduino and p5.js:

Arduino gets the analog input from the flex sensors and sends them to p5.js, which measures that value, and if it exceeds a certain threshold, it moves the panorama image accordingly.

# Demo:

INSERT link to DEMO VIDEO


# Aspects that I’m proud of:

I’m really proud with how everything in this project turned out. I wasn’t really expecting initially that this will resemble a VR experience, so this was a pleasant surprise for me that I discovered during the process of making. I’m also proud with the idea of using gloves to move inside the image as I think that is a pretty cool and novel idea. In terms of the hardware part, I’m glad with how sensors are working as they’re giving pretty accurate answers since they have been placed on right locations on the glove.

# Areas for future improvement:

One of the areas for future improvements include adding more destination points to the map, because I have only 6 places so far. Also, I used hot glue to attach the flex sensors to the glove. Even though the connection is  good, it may not be long-term so one of the improvements could be sewing the flex senosors to the glove, as it is made of sewable material. In addition to that, it’s highly recommended for the user to hold the hand in a certain position initially (palm facing left side of the body and fingers pointing outwards) so that sensors would work best, and I’m planning on explaining it to user by demonstrating the hand position. One of the better ways to do this for the future would be recording a demo and attaching a video to the instructions page or adding a picture/gif with the corresponding hand posture.
