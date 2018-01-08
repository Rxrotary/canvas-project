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
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.stroke();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.stroke();
        this.contextDraft.closePath();
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
                this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
                this.contextReal.moveTo(this.origX,this.origY);
                this.contextReal.stroke();
                this.contextReal.moveTo(this.origX,this.origY);
                this.contextReal.stroke();
                this.contextReal.closePath();
                this.contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}