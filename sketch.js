/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var clouds;
var mountains;
var trees_x;
var collectables;
var canyons;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
    
    

	// Initialise arrays of scenery objects.
clouds =   //initialisation of clouds
        [
{pos_X: 565,pos_Y:170,width:60,height:50,},
{pos_X: 65,pos_Y:130,width:60,height:50,},
{pos_X: 1065,pos_Y:150,width:60,height:50,}
        ];
    
mountains =  //initialisation of mountains
        [
{pos_x : -400,pos_y : 432,},
{pos_x : 500,pos_y : 432,},
{pos_x : 2100,pos_y : 432,}
        ];
}

  trees_x =   //initialisation of trees
        [-200,350,950,1400]

 collectables =  //initialisation of collectables
        [
          {pos_x:-100,pos_y:floorPos_y,size:30, isFound: false},
          {pos_x:400,pos_y:380,size:30, isFound: false},
          {pos_x:1200,pos_y:380,size:30, isFound: false}
        ];

 canyons =    //initialisation of canyons
        [
          {pos_x:100,width:100,},
          {pos_x:1050,width:100,},
          {pos_x:1700,width:100,}
        ];


function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
  

    
    push();
    translate(scrollPos,0);
	// Draw clouds.
    drawClouds();

	// Draw mountains.
    drawMountains();

	// Draw trees.
    drawTrees();
    

	// Draw canyons.
    for(var i = 0;i < canyons.length;i++)
        {
            drawCanyon(canyons[i]);
        }

	// Draw collectable items.

    
   
    for(var i = 0; i < collectables.length; i++)
    {
       
        if(!collectables[i].isFound)
           {
       checkCollectable(collectables[i]);
       drawt_collectable(collectables[i]);
           }
        
     
        
    }


	// Draw game character.
	pop();
	drawGameChar();

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
     if(gameChar_y < floorPos_y + 7)
        {
            gameChar_y += 1;
            isFalling = true;
        }
    else
        {
            isFalling = false;
        }
    

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
    
    fill(255,255,255);
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

	console.log("press" + keyCode);
	console.log("press" + key);
    if(keyCode == 37)  //move left
        {
            isLeft = true;
        }
    if(keyCode == 39)  //move right
        {
            isRight = true;
        }
    if(keyCode == 32 && gameChar_y == floorPos_y + 7)  // jump
        {
            isFalling = true;
            
            gameChar_y -= 100;
        }
    
    //left and falling
    if(keyCode == 32 && keyCode == 37)
        {
            isLeft = true;
            isFalling = true;
        }
     
    //right and falling
    if(keyCode == 32 && keyCode == 39)
        {
            isRight = true;
            isFalling = true;
        }

}

function keyReleased()
{

	console.log("release" + keyCode);
	console.log("release" + key);
      if(keyCode == 37)  //move left
        {
            isLeft = false;
        }
    if(keyCode == 39)  //move right
        {
            isRight = false;
        }
      if(keyCode == 32)  // jump
        {
            isFalling = false;
            
        }
    if(keyCode == 32 && keyCode == 37)  // left and falling
        {
            isLeft = false;
            isFalling = false;
        }
    if(keyCode == 32 && keyCode == 39) // right and falling
        {
            isRight = false;
            isFalling = false;
        }
   

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
// draw game character
if(isLeft && isFalling)
{
    // add your jumping-left code
     //head
 fill(244,164,96);
 ellipse(gameChar_x,gameChar_y-60,18);
 //right arm
 fill(0,0,139);
 rect(gameChar_x-18,gameChar_y-51,18,6);
 //left arm 
 quad(gameChar_x,gameChar_y-51,gameChar_x+18,gameChar_y-40,gameChar_x+18,gameChar_y-34,gameChar_x,gameChar_y-46);
 fill(178,34,34);
 triangle(gameChar_x,gameChar_y-51,gameChar_x-15,gameChar_y-17,gameChar_x+15,gameChar_y-17);
 //right leg 
 fill(0);
 rect(gameChar_x+2,gameChar_y-17,8,10);
 //left leg
 quad(gameChar_x-3,gameChar_y-17,gameChar_x-11,gameChar_y-17,gameChar_x-19,gameChar_y-10,gameChar_x-9,gameChar_y-10,);
   // gameChar_x -= 3

}
else if(isRight && isFalling)
{
    // add your jumping-right code
     //head
 fill(244,164,96);
 ellipse(gameChar_x,gameChar_y-60,18);
 fill(0,0,139);
 rect(gameChar_x,gameChar_y-51,18,6);
 quad(gameChar_x,gameChar_y-51,gameChar_x-18,gameChar_y-40,gameChar_x-18,gameChar_y-34,gameChar_x,gameChar_y-46);
 fill(178,34,34);
 triangle(gameChar_x,gameChar_y-51,gameChar_x-15,gameChar_y-17,gameChar_x+15,gameChar_y-17);
 //left leg
 fill(0);
 rect(gameChar_x-10,gameChar_y-17,8,10);
 //right leg
 quad(gameChar_x+3,gameChar_y-17,gameChar_x+11,gameChar_y-17,gameChar_x+19,gameChar_y-10,gameChar_x+9,gameChar_y-10,);
    //gameChar_x += 3;

}
else if(isLeft)
{
    // add your walking left code
    fill(244,164,96);
//head
ellipse(gameChar_x,gameChar_y-60,13,18);
//right arm 
fill(0,0,139);
quad(gameChar_x,gameChar_y-51,gameChar_x+16,gameChar_y-34,gameChar_x+16,gameChar_y-28,gameChar_x,gameChar_y-46)	;
//left arm 
quad(gameChar_x-18,gameChar_y-51,gameChar_x,gameChar_y-51,gameChar_x,gameChar_y-46,gameChar_x-18,gameChar_y-46);
fill(178,34,34);
//body
triangle(gameChar_x,gameChar_y-51,gameChar_x-10,gameChar_y-17,gameChar_x+10,gameChar_y-17);
fill(0);
//left leg
rect(gameChar_x+2,gameChar_y-17,5,10);
//right leg
quad(gameChar_x-1,gameChar_y-17,gameChar_x-6,gameChar_y-17,gameChar_x-12,gameChar_y-7,gameChar_x-7,gameChar_y-7,);

    //gameChar_x -= 5


}
else if(isRight)
{
    // add your walking right code
    //head
fill(244,164,96);
ellipse(gameChar_x,gameChar_y-60,13,18);
//right arm 
fill(0,0,139);
quad(gameChar_x,gameChar_y-51,gameChar_x-16,gameChar_y-34,gameChar_x-16,gameChar_y-28,gameChar_x,gameChar_y-46)	;
//left arm 
quad(gameChar_x+18,gameChar_y-51,gameChar_x,gameChar_y-51,gameChar_x,gameChar_y-46,gameChar_x+18,gameChar_y-46);
fill(178,34,34);
//body
triangle(gameChar_x,gameChar_y-51,gameChar_x-10,gameChar_y-17,gameChar_x+10,gameChar_y-17);
fill(0);
//left leg
rect(gameChar_x-8,gameChar_y-17,5,10);
//right leg
quad(gameChar_x+1,gameChar_y-17,gameChar_x+6,gameChar_y-17,gameChar_x+12,gameChar_y-7,gameChar_x+7,gameChar_y-7,);

  //  gameChar_x += 5

}
else if(isFalling || isPlummeting)
{
    // add your jumping facing forwards code
    fill(244,164,96);
//head
ellipse(gameChar_x,gameChar_y-60,18);

fill(0,0,139);
//left arm 
quad(gameChar_x-18,gameChar_y-60,gameChar_x-18,gameChar_y-54,gameChar_x,gameChar_y-45,gameChar_x,gameChar_y-51,);
//right arm 
quad(gameChar_x+18,gameChar_y-60,gameChar_x+18,gameChar_y-54,gameChar_x,gameChar_y-45,gameChar_x,gameChar_y-51,);
fill(178,34,34);
//body
triangle(gameChar_x,gameChar_y-51,gameChar_x-15,gameChar_y-17,gameChar_x+15,gameChar_y-17);
fill(0);
//left leg
quad(gameChar_x-3,gameChar_y-17,gameChar_x-11,gameChar_y-17,gameChar_x-19,gameChar_y-10,gameChar_x-9,gameChar_y-10,);
//right leg
quad(gameChar_x+3,gameChar_y-17,gameChar_x+11,gameChar_y-17,gameChar_x+19,gameChar_y-10,gameChar_x+9,gameChar_y-10,);

}
else
{
    // add your standing front facing code
    fill(244,164,96);
//head
ellipse(gameChar_x,gameChar_y-60,18);
//right arm
fill(0,0,139);
//Arms
rect(gameChar_x-18,gameChar_y-51,36,6);
fill(178,34,34);
//body
triangle(gameChar_x,gameChar_y-51,gameChar_x-15,gameChar_y-17,gameChar_x+15,gameChar_y-17);
fill(0);
//left leg
rect(gameChar_x-10,gameChar_y-17,8,10);
//right leg
rect(gameChar_x+3,gameChar_y-17,8,10);

}
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
 /* for(var i = 0; i < 3; i++)
    
    {
	
	ellipse(clouds[i].pos_X+35, clouds[i].pos_Y-10, clouds[i].width+10, clouds[i].height+10)

	ellipse(clouds[i].pos_X+70,clouds[i].pos_Y,clouds[i].width,clouds[i].height)
	
	ellipse(clouds[i].pos_X,clouds[i].pos_Y,clouds[i].width, clouds[i].height)
    }

// Function to draw mountains objects.
  for(var i= 0; i < mountains.length; i++)   //loop for mountains
    {
        strokeWeight(0.2)
	stroke(0)
	fill(192,192,192)
	triangle(mountains[i].pos_x -100,mountains[i].pos_y,mountains[i].pos_x-30,mountains[i].pos_y-232,mountains[i].pos_x+100,mountains[i].pos_y)
	fill(160,160,160)
	triangle(mountains[i].pos_x-50,mountains[i].pos_y,mountains[i].pos_x+20,mountains[i].pos_y-272,mountains[i].pos_x+100,mountains[i].pos_y)
	fill(160,160,160)
	triangle(mountains[i].pos_x-200,mountains[i].pos_y,mountains[i].pos_x-100,mountains[i].pos_y-332,mountains[i].pos_x,mountains[i].pos_y)
    }

*/ // Function to draw trees objects.


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    noStroke();
	fill(100,155,255);
	rect(t_canyon.pos_x,432,t_canyon.width,144);
	
	fill(255,0,0);
	triangle(t_canyon.pos_x,576,t_canyon.pos_x+25,540,t_canyon.pos_x+50,576);
	triangle(t_canyon.pos_x+50,576,t_canyon.pos_x+75,540,t_canyon.pos_x+100,576);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawt_collectable(t_collectable)
{
    fill(139,0,139);
	rect(t_collectable.pos_x,t_collectable.pos_y,t_collectable.size,t_collectable.size);
	fill(75,0,130);
	rect(t_collectable.pos_x+10,t_collectable.pos_y,t_collectable.size-20,t_collectable.size-20);
}



// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
   if(dist(gameChar_world_x, gameChar_y, t_collectable.pos_x, t_collectable.pos_y)<70)
        {
            t_collectable.isFound = true;
        }
}
  



function drawClouds()
{
    for(var i = 0; i < clouds.length; i++)
    
    {
	fill(255,255,255);
	ellipse(clouds[i].pos_X+35, clouds[i].pos_Y-10, clouds[i].width+10, clouds[i].height+10);

	ellipse(clouds[i].pos_X+70,clouds[i].pos_Y,clouds[i].width,clouds[i].height);
	
	ellipse(clouds[i].pos_X,clouds[i].pos_Y,clouds[i].width, clouds[i].height);
    }
}

	// Draw mountains.
function drawMountains()
   { for(var i= 0; i < mountains.length; i++)   //loop for mountains
    {
        strokeWeight(0.2);
	stroke(0);
	fill(192,192,192);
	triangle(mountains[i].pos_x -100,mountains[i].pos_y,mountains[i].pos_x-30,mountains[i].pos_y-232,mountains[i].pos_x+100,mountains[i].pos_y);
	fill(160,160,160);
	triangle(mountains[i].pos_x-50,mountains[i].pos_y,mountains[i].pos_x+20,mountains[i].pos_y-272,mountains[i].pos_x+100,mountains[i].pos_y);
	fill(160,160,160);
	triangle(mountains[i].pos_x-200,mountains[i].pos_y,mountains[i].pos_x-100,mountains[i].pos_y-332,mountains[i].pos_x,mountains[i].pos_y);
    }
   }

    
function drawTrees()
{
     for(var i =0; i < trees_x.length; i++)   //loop for trees
        {
        
    fill(139,69,19);
	rect(trees_x[i],floorPos_y -100,30,100);
    fill(34,139,34);
	ellipse(trees_x[i]+15,floorPos_y-120,70);
	fill(34,120,34);
	ellipse(trees_x[i]-10,floorPos_y-100,60);
	fill(34,150,34);
	ellipse(trees_x[i]+35,floorPos_y-100,50);
        }
}
