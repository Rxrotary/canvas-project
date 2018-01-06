class DrawNeon extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
        this.points = [];
    }
    onMouseDown(mouse,e){
        this.contextDraft.lineWidth = 15;
        this.contextDraft.lineJoin = this.contextDraft.lineCap = 'round';
        this.points.push(mouse);
        this.contextDraft.strokeStyle="rgba(255,255,255,1)";
        this.contextDraft.shadowBlur = 30;
        this.contextDraft.shadowColor = '#ff0000';
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






/*
var el = document.getElementById('c');
var contextDraft = el.getContext('2d');

contextDraft.lineWidth = 10;
contextDraft.lineJoin = contextDraft.lineCap = 'round';
contextDraft.shadowBlur = 10;
contextDraft.shadowColor = 'rgb(0, 0, 0)';

var isDrawing, points = [ ];

el.onmousedown = function(e) {
  isDrawing = true;
  points.push({ x: e.clientX, y: e.clientY });
};

el.onmousemove = function(e) {
  if (!isDrawing) return;

  contextDraft.clearRect(0, 0, contextDraft.canvas.width, contextDraft.canvas.height);
  points.push({ x: e.clientX, y: e.clientY });

  contextDraft.beginPath();
  contextDraft.moveTo(points[0].x, points[0].y);
  for (var i = 1; i < points.length; i++) {
    contextDraft.lineTo(points[i].x, points[i].y);
  }
  contextDraft.stroke();
};

el.onmouseup = function() {
  isDrawing = false;
  points.length = 0;
};
*/