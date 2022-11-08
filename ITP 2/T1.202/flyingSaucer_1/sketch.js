//Topic 1.1 
//Object orientation revisted
//part one

var flyingSaucers;

function setup()
{
    createCanvas(1200,600);
    noStroke();

    flyingSaucers = [];

    for (var i = 0; i < 5; i++)
    {
        flyingSaucers.push(new FlyingSaucer(100 + i * 250, 100));
    }

}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0, height - 100, width, 100);


    for (var i = 0; i < flyingSaucers.length; i++)
    {
        if (flyingSaucers[i].beam_on)
        {
            flyingSaucers[i].beam();
        }

        flyingSaucers[i].draw();
        flyingSaucers[i].hover();
    }
}

function keyPressed()
{
    flying_saucer.beam_on = true;

}

function keyReleased()
{
    flying_saucer.beam_on = false;
}

function FlyingSaucer(x, y)
{
    this.x = x;
    this.y = y;
    this.width = random(250,100);
    this.height = random(250,70);
    this.window_width = random(0.5,0.85);
    this.window_height = 0.85;
    this.base_height = 0.45;
    this.num_lights = round(random(5,16));
    this.brightnessess = [];
    this.beam_on = false,

    this.hover = function ()
    {
        this.x += random(-1, 1);
        this.y += random(-1, 1);

        if (this.beam_on == false && random() > 0.95)
        {
            this.beam_on = true;
        }
        
        else if (this.beam_on == true && random() > 0.99)
        {
            this.beam_on = false;
        }
        
    },
    
    this.beam = function ()
    {
        if(random()> 0.1)

        {
            fill(255, 255, 100, 150)
            beginShape();
            vertex(this.x - this.width * 0.25, this.y)
            vertex(this.x + this.width * 0.25, this.y)
            vertex(this.x + this.width * 0.35, height - 100)
            vertex(this.x - this.width * 0.35, height - 100)
            endShape(CLOSE);
        }
    }

    this.draw = function ()
    {
        //draw the flying saucer

        //draw the window
        fill(175,238,238);
        arc(this.x,
            this.y,
            this.width * this.window_width,
            this.height * this.window_height, PI, TWO_PI)

        //draw the body
        fill(150);
        arc(this.x,
            this.y,
            this.width,
            this.height/2, PI, TWO_PI);

        //draw the base
        fill(50);
        arc(this.x,
            this.y,
            this.width,
            this.height * this.base_height, 0, PI);

        this.hover();


        //draw the lights

        var incr = (this.width/(this.num_lights -1)); 

        for(var i = 0; i < this.num_lights; i++)
        {
            
            var x = this.x - this.width/2 + i * incr;
            fill(this.brightnessess[i]);
            ellipse(
                x,
                this.y,
                5,
                5
            )
            this.brightnessess[i] += 5;
            if(this.brightnessess[i] > 255)
            {
                this.brightnessess[i] = 100;
            }
        }
            
    }
    
    for(var i = 0; i < this.num_lights; i++)
    {
        this.brightnessess.push((i * 20)%255);
    }
}