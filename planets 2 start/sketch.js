//var sizes = [4, 9, 10, 5, 110, 95, 40, 40];
//var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
//var colours = ["grey", "brown", "blue", "red", "sienna", "pink", "blue", "cyan"];
//
function setup()
{
	createCanvas(1000, 600);
}

//
//var planets = [
//    {
//        size: 4,
//        name: "Mercury",
//        colour: "grey"
//    },
//    
//    {
//        size: 9,
//        name: "Venus",
//        colour: "brown",
//    },
//    
//    {
//        size: 10,
//        name: "Earth",
//        colour: "blue",
//    },
//    
//    {
//        size: 5,
//        name: "Mars",
//        colour: "red",
//    },
//    
//    {
//        size: 110,
//        name: "Jupiter",
//        colour: "sienna",
//    },
//    
//    {
//        size: 95,
//        name: "Saturn",
//        colour: "pink",
//    },
//    
//    {
//        size: 40,
//        name: "Uranus",
//        colour: "blue",
//    },
//    
//    {
//        size: 40,
//        name: "Neptune",
//        colour: "cyan",
//    },
//]

function draw()
{
//	background(0);
//	textAlign(CENTER);
//	fill(255);

//	fill(colours[0]);
//	ellipse(50, height / 2, sizes[0]);
//	fill(255);
//	text(names[0], 50, height / 2 + 150);
//
//	fill(colours[1]);
//	ellipse(175, height / 2, sizes[1]);
//	fill(255);
//	text(names[1], 175, height / 2 + 150);
//
//	fill(colours[2]);
//	ellipse(300, height / 2, sizes[2]);
//	fill(255);
//	text(names[2], 300, height / 2 + 150);
//
//	fill(colours[3]);
//	ellipse(425, height / 2, sizes[3]);
//	fill(255);
//	text(names[3], 425, height / 2 + 150);
//
//	fill(colours[4]);
//	ellipse(550, height / 2, sizes[4]);
//	fill(255);
//	text(names[4], 550, height / 2 + 150);
//
//	fill(colours[5]);
//	ellipse(675, height / 2, sizes[5]);
//	fill(255);
//	text(names[5], 675, height / 2 + 150);
//
//	fill(colours[6]);
//	ellipse(800, height / 2, sizes[6]);
//	fill(255);
//	text(names[6], 800, height / 2 + 150);
//
//	fill(colours[7]);
//	ellipse(925, height / 2, sizes[7]);
//	fill(255);
//	text(names[7], 925, height / 2 + 150);
    
//    for (var i = 0; i < 8; i++)
//        {
//            fill(planets[i].colour);
//            ellipse(50 + i*125, height/2, planets[i].size);
//            fill(255);
//            text(planets[i].name, 50 + i*125, height/2 + 150);
//        }
    
ellipseMode(CORNER);

for(var i = 0; i < 10; i++){
  for(var j = 0; j < 10; j++){
    if(random(100) > 50){
      rect(i * 30, j * 30, 20, 20);
    }else{
      ellipse(i * 30, j * 30, 20, 20);  
    } 
  } 
}

}