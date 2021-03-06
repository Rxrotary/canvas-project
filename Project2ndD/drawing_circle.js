class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;  
    }
    
    onMouseDown(mouse,event){
        this.contextReal.strokeStyle = color.primary;
        this.orig = mouse;
        this.contextReal.beginPath();
    }

    onDragging(mouse,event){
        var r = (mouse.x- this.orig.x);
        this.contextDraft.strokeStyle = color.primary;
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.arc(this.orig.x,this.orig.y, r, 0, Math.PI*2, true);
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(mouse){
        var r = (mouse.x- this.orig.x);
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.arc(this.orig.x,this.orig.y, r, 0, Math.PI*2, true);
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
