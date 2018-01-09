class Eraser extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;            
        $('#line-width').show();
    }
    onMouseDown(mouse,event){
        this.contextReal.beginPath();
        this.contextReal.moveTo(mouse.x,mouse.y);
    }
    onDragging(mouse,event){
        contextReal.globalCompositeOperation = "destination-out";
        this.contextReal.lineWidth = size.x * 0.3;
        this.contextReal.strokeStyle = "rgba(0,0,0,1)";
        this.contextReal.lineTo(mouse.x,mouse.y);
        this.contextReal.moveTo(mouse.x,mouse.y);
        this.contextReal.closePath();
        this.contextReal.stroke();  
    }
    onMouseMove(){}
    onMouseUp(){
        this.context.globalCompositeOperation="destination-over";
    }
    onMouseLeave(){
        contextReal.globalCompositeOperation = "source-over";

    }
    onMouseEnter(){}
 }