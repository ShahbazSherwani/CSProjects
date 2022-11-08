/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var treePos_x;
var treePos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;


var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    
    canyon = {x_pos:40, y_pos:430, width:75};
    
    cloud = {x_pos: 100, y_pos: 120, width: 100, height: 50};
    
    collectable = {_X: 250, _Y: floorPos_y-10, size: 50, isFound: false};

    
    mountain = {x_pos: 100, y_pos: 100, size: 50};
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
    //draw cloud
    
    fill(255,255,255);
    ellipse(cloud.x_pos,cloud.y_pos -50, cloud.width, cloud.height);
    ellipse(cloud.x_pos + 50, cloud.y_pos -50, cloud.width, cloud.height);
    ellipse(cloud.x_pos +25 ,cloud.y_pos -70, cloud.width, cloud.height);
    
    //draw canyon
    
    fill(100, 155, 255);
    rect(canyon.x_pos,canyon.y_pos,canyon.width,150);
    
    //draw mountain
    fill(73,36,0);
    triangle(mountain.x_pos + 40, mountain.y_pos +333, mountain.x_pos +300, mountain.y_pos +333, mountain.x_pos +160, mountain.y_pos);
    
    fill(109,57,6);
    triangle(mountain.x_pos + 70, mountain.y_pos +333, mountain.x_pos +340, mountain.y_pos +333, mountain.x_pos +200, mountain.y_pos +70);
    
    //draw tree
    
    fill(120, 100,40);
    rect(treePos_x, treePos_y, 60, 150);
    
    //branches
    fill(0,155,0);
    triangle(treePos_x -50,treePos_y +50, treePos_x +30,treePos_y - 50,treePos_x+110,treePos_y +50);
    triangle(treePos_x -50,treePos_y , treePos_x +30,treePos_y - 100,treePos_x+110,treePos_y);
    
    //draw collectable item
       if(dist(gameChar_x, gameChar_y,collectable._X, collectable._Y) < 20)
    {
            collectable.isFound = true;
    }
    
    if(collectable.isFound == false)
        {
    fill(133, 100 ,4);
    ellipse(collectable._X, collectable._Y, collectable.size-10);
    fill(222, 166, 0);
    ellipse(collectable._X, collectable._Y, collectable.size-15);
    fill(185, 138, 4);
    ellipse(collectable._X, collectable._Y, collectable.size-20);
    fill(185, 138, 4);
    ellipse(collectable._X, collectable._Y, collectable.size-20);
        }

    
    
    


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        fill(234,199,157);
        rect(gameChar_x -12, gameChar_y - 70,25, 25);
        //band
        fill(255,0,0);
        rect(gameChar_x -12, gameChar_y - 68,25, 5);
        //ear
        fill(184,155,120);
        rect(gameChar_x -2, gameChar_y - 60,5, 10);
        //neck
        fill(234,199,157);
        rect(gameChar_x -5 , gameChar_y - 45, 10, 10);
        //body
        fill(255,0,0);
        rect(gameChar_x - 12.5, gameChar_y -40, 26,26);
        //rightlet
        fill(184,155,120);
        rect(gameChar_x -3, gameChar_y -14, 8, 15);

        //leftarm
        fill(184,155,120);
        rect(gameChar_x -4, gameChar_y -58, 8, 18);


	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        //head
        fill(234,199,157);
        rect(gameChar_x -12, gameChar_y - 70,25, 25);
        //band
        fill(255,0,0);
        rect(gameChar_x -12, gameChar_y - 68,25, 5);
        //ear
        fill(184,155,120);
        rect(gameChar_x -2, gameChar_y - 60,5, 10);
        //neck
        fill(234,199,157);
        rect(gameChar_x -5 , gameChar_y - 45, 10, 10);
        //body
        fill(255,0,0);
        rect(gameChar_x - 12.5, gameChar_y -40, 26,26);
        //rightleg
        fill(184,155,120);
        rect(gameChar_x -3, gameChar_y -14, 8, 15);

        //leftarm
        fill(184,155,120);
        rect(gameChar_x -4, gameChar_y -58, 8, 18);


	}
	else if(isLeft)
	{
		// add your walking left code
        fill(234,199,157);
        rect(gameChar_x -12, gameChar_y - 70,25, 25);
        //band
        fill(255,0,0);
        rect(gameChar_x -12, gameChar_y - 68,25, 5);
        //ear
        fill(184,155,120);
        rect(gameChar_x -2, gameChar_y - 60,5, 10);
        //neck
        fill(234,199,157);
        rect(gameChar_x -5 , gameChar_y - 45, 10, 10);
        //body
        fill(255,0,0);
        rect(gameChar_x - 12.5, gameChar_y -40, 26,26);
        //rightlet
        fill(184,155,120);
        rect(gameChar_x -3, gameChar_y -14, 8, 15);

        //leftarm
        fill(184,155,120);
        rect(gameChar_x -4, gameChar_y -40, 8, 18);

	}
	else if(isRight)
	{
		// add your walking right code
        //head
        fill(234,199,157);
        rect(gameChar_x -12, gameChar_y - 70,25, 25);
        //band
        fill(255,0,0);
        rect(gameChar_x -12, gameChar_y - 68,25, 5);
        //ear
        fill(184,155,120);
        rect(gameChar_x -2, gameChar_y - 60,5, 10);
        //neck
        fill(234,199,157);
        rect(gameChar_x -5 , gameChar_y - 45, 10, 10);
        //body
        fill(255,0,0);
        rect(gameChar_x - 12.5, gameChar_y -40, 26,26);
        //rightlet
        fill(184,155,120);
        rect(gameChar_x -3, gameChar_y -14, 8, 15);

        //leftarm
        fill(184,155,120);
        rect(gameChar_x -4, gameChar_y -40, 8, 18);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        //head
        fill(234,199,157);
        rect(gameChar_x -12, gameChar_y - 70,25, 25);
        //band
        fill(255,0,0);
        rect(gameChar_x -12, gameChar_y - 68,25, 5);
        //lefteye
        fill(0);
        rect(gameChar_x -8, gameChar_y - 60,5, 5);
        //righteye
        fill(0);
        rect(gameChar_x + 3, gameChar_y - 60,5, 5);
        //mouth
        fill(255,255,255);
        rect(gameChar_x -5, gameChar_y - 52,10, 10);
        //neck
        fill(184,155,120);
        rect(gameChar_x -5 , gameChar_y - 45, 10, 8);
        //body
        fill(255,0,0);
        rect(gameChar_x - 12.5, gameChar_y -40, 26,26);
        //leftleg
        fill(184,155,120);
        rect(gameChar_x -10, gameChar_y -14, 8, 15);
        //rightleg
        fill(184,155,120);
        rect(gameChar_x + 2, gameChar_y -14, 8, 15);
        //rightarm
        fill(184,155,120); 
        rect(gameChar_x + 13.5, gameChar_y -55, 8, 18);
        //leftarm
        fill(184,155,120);
        rect(gameChar_x -20.5, gameChar_y -55, 8, 18);
        

	}
	else
	{
		// add your standing front facing code
        //head
        fill(234,199,157);
        rect(gameChar_x -12, gameChar_y - 70,25, 25);
        //band
        fill(255,0,0);
        rect(gameChar_x -12, gameChar_y - 68,25, 5);
        //lefteye
        fill(0);
        rect(gameChar_x -8, gameChar_y - 60,5, 5);
        //righteye
        fill(0);
        rect(gameChar_x + 3, gameChar_y - 60,5, 5);
        //mouth
        fill(255,255,255);
        rect(gameChar_x -5, gameChar_y - 52,10, 3);
        //neck
        fill(184,155,120);
        rect(gameChar_x -5 , gameChar_y - 45, 10, 10);
        //body
        fill(255,0,0);
        rect(gameChar_x - 13, gameChar_y -40, 26,26);
        //leftleg
        fill(184,155,120);
        rect(gameChar_x -10, gameChar_y -14, 8, 15);
        //rightleg
        fill(184,155,120);
        rect(gameChar_x + 2, gameChar_y -14, 8, 15);
        //rightarm
        fill(184,155,120);
        rect(gameChar_x + 13, gameChar_y -40, 8, 18);
        //leftarm
        fill(184,155,120);
        rect(gameChar_x -21, gameChar_y -40, 8, 18);
        }

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if(isLeft == true)
        {
            gameChar_x -= 5;
        }
    if(isRight == true)
        {
            gameChar_x += 5;
        }
    
    if(isFalling == true && floorPos_y == gameChar_y )
        {
            gameChar_y = gameChar_y -100;
        } 
    if(floorPos_y > gameChar_y)
        {
            gameChar_y += 2; 
           
        }
    else
        {
            isFalling = false;
        }

    if(gameChar_x > canyon.x_pos + 20 && gameChar_x < canyon.x_pos + 80)
        {
            isPlummeting = true;
        }
    if (isPlummeting == true) 
        {
            gameChar_y += 3;
        }
}

 



function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    if(keyCode == 37)  
        {
            console.log("left arrow");
            isLeft = true;
        }
    else if(keyCode == 39)
        {
            console.log("right Arrow");
            isRight = true;
        }
   if(keyCode == 32)
        {
            console.log("space-bar");
            isFalling = true;
        }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
    if(keyCode == 37)
        {
            console.log("left arrow");
            isLeft = false;
        }
    else if(keyCode ==39)
        {
            console.log("right Arrow");
            isRight = false;
        }
   if(keyCode == 32)
        {
            console.log("space-bar");
            isFalling = false;
        }
}