class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(mouse,event){
        this.contextReal.fillStyle = color.primary;
        this.contextReal.strokeStyle = color.secondary;
        this.contextReal.stroke
        this.orig = mouse;      //mouse = {x:   , y:   } , the coordinate of mouse event
    }
    onDragging(mouse,event){
        this.contextDraft.fillStyle = color.primary;
        this.contextDraft.strokeStyle = color.secondary;
        this.contextDraft.clearRect(0,0,canvasReal.width,canvasReal.height);
        this.contextDraft.fillRect(this.orig.x,this.orig.y,mouse.x- this.orig.x,mouse.y - this.orig.y)
    }

    onMouseMove(){}
    onMouseUp(mouse){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(this.orig.x,this.orig.y,mouse.x- this.orig.x,mouse.y - this.orig.y)
    }
    onMouseLeave(){}
    onMouseEnter(){}
}