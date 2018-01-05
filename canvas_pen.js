class DrawPen extends PaintFunction{
    constructor(context){
        super();
        this.context = context;   
    }
    draw(x,y){ 
        context.lineTo(x+1,y+1);
        context.moveTo(x+1,y+1);
        context.stroke();
    }
    onMouseDown(mouse,e){
        context.beginPath();
        context.moveTo(mouse.x, mouse.y);
        //console.log(mouse.x,mouse.y);
        this.draw(mouse.x,mouse.y);
        dragging = true;
    }
    onDragging(mouse,e){
        this.draw(mouse.x,mouse.y);
    }
    onMouseMove(mouse,e){

    }
    onMouseUp(mouse,e){

    }
    onMouseLeave(mouse,e){

    }
    onMouseEnter(mouse,e){

    }


};

