class DrawPen extends PaintFunction{
    constructor(contextDraft){
        super();
        this.contextDraft = contextDraft;   
    }
    draw(x,y){ 
        contextDraft.lineTo(x+1,y+1);
        contextDraft.moveTo(x+1,y+1);
        contextDraft.stroke();
    }
    onMouseDown(mouse,e){

        contextDraft.strokeStyle = color.primary;
        contextDraft.lineWidth = size.x * 0.1;
        contextDraft.lineJoin = contextDraft.lineCap = 'round';
        contextDraft.shadowBlur = 0;
        contextDraft.beginPath();
        contextDraft.moveTo(mouse.x, mouse.y);
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

