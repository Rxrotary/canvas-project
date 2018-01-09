class DrawNeon extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
        this.points = [];
    }
    onMouseDown(mouse,e){
        this.contextDraft.lineWidth = size.x*0.5;
        this.contextDraft.lineJoin = this.contextDraft.lineCap = 'round';
        this.points.push(mouse);
        this.contextDraft.strokeStyle= '#fff';
        this.contextDraft.shadowBlur = 30;
        this.contextDraft.shadowColor = color.primary;
    }
    onDragging(mouse,e){
        
        this.contextDraft.clearRect(0, 0, this.contextDraft.canvas.width, this.contextDraft.canvas.height);
        this.points.push(mouse);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 1; i < this.points.length; i++) {
          contextDraft.lineTo(this.points[i].x, this.points[i].y);
        }
        this.contextDraft.stroke();

    }
    onMouseMove(){

    }
    onMouseUp(){
        this.points.length = 0;
    }
    onMouseLeave(){

    }
    onMouseEnter(){

    }
}