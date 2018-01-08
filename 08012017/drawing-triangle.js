class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;  
        var r = (coord[0]- this.origX);
    }
    
    onMouseDown(coord,event){
        this.contextReal.fillStyle = "#f44";
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
    }

    onDragging(coord,event){
               this.contextDraft.fillStyle = "#f44";
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.arc(this.origX,this.origY, r, 0, Math.PI*2, true);
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
                this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.arc(this.origX,this.origY, r, 0, Math.PI*2, true);
        this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}