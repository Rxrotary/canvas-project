class DrawLine extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
    }

    // draw(x,y){ 
    //     contextDraft.lineTo(x+1,y+1);
    //     contextDraft.moveTo(x+1,y+1);
    //     contextDraft.stroke();
    // }

    onMouseDown(mouse,e){
        this.contextDraft.strokeStyle = color.current;
        this.contextDraft.lineWidth = size.x * 0.1;
        this.contextDraft.lineJoin = contextDraft.lineCap = 'round';
        this.contextReal.strokeStyle = color.current;
        this.contextReal.lineWidth = size.x * 0.1;
        this.contextReal.lineJoin = contextDraft.lineCap = 'round';
        this.contextReal.shadowBlur = 0;

        this.storeX = mouse.x
        this.storeY = mouse.y  //find way to store value of current coordinates

        this.contextDraft.beginPath();
        this.contextDraft.moveTo(mouse.x, mouse.y);
        this.contextReal.beginPath();
        
        dragging = true;
        console.log("drawing line");
    }

    onDragging(mouse,event){
        dragging = true;
        
        // this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0, canvasDraft.width, canvasDraft.height);

        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.storeX, this.storeY);
        this.contextDraft.lineTo(mouse.x, mouse.y);
        this.contextDraft.closePath();     // use new begin path to start new line - otherwise it will not store
        this.contextDraft.stroke();  

    }

    onMouseUp(mouse,e) {
        // this.contextDraft.clearRect(0,0, canvasDraft.width, canvasDraft.height)
        dragging = false;

        this.contextDraft.clearRect(0,0, canvasDraft.width, canvasDraft.height);
        this.contextReal.moveTo(this.storeX, this.storeY)
        this.contextReal.lineTo(mouse.x, mouse.y);
        this.contextReal.closePath();
        this.contextReal.stroke();
        
    }
}