function SprayCanTool() {
    
    this.name = "sprayCanTool",
    this.icon = "assets/sprayCan.jpg";
    
    let points = 13;
    let spread = 10;

    this.draw = function(){
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.

        let r = random(5, 10);
        if(mouseIsPressed){
            for(var i = 0; i < points; i++){
                point(random(mouseX-spread, mouseX + spread), 
                    random(mouseY-spread, mouseY+spread));
            }
        }
    }
};