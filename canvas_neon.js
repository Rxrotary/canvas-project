class DrawNeon extends PaintFunction{
    constructor(context,context_real){
        super();
        this.context = context;
        this.context_real = context_real;
        this.points = [];
    }
    onMouseDown(mouse,e){
        this.context.lineWidth = 15;
        this.context.lineJoin = this.context.lineCap = 'round';
        this.points.push(mouse);
        this.context.strokeStyle="rgba(255,255,255,1)";
        this.context.shadowBlur = 30;
        this.context.shadowColor = '#ff0000';
    }
    onDragging(mouse,e){
        
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.points.push(mouse);
        this.context.beginPath();
        this.context.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 1; i < this.points.length; i++) {
          context.lineTo(this.points[i].x, this.points[i].y);
        }
        this.context.stroke();

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
var context = el.getContext('2d');

context.lineWidth = 10;
context.lineJoin = context.lineCap = 'round';
context.shadowBlur = 10;
context.shadowColor = 'rgb(0, 0, 0)';

var isDrawing, points = [ ];

el.onmousedown = function(e) {
  isDrawing = true;
  points.push({ x: e.clientX, y: e.clientY });
};

el.onmousemove = function(e) {
  if (!isDrawing) return;

  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  points.push({ x: e.clientX, y: e.clientY });

  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for (var i = 1; i < points.length; i++) {
    context.lineTo(points[i].x, points[i].y);
  }
  context.stroke();
};

el.onmouseup = function() {
  isDrawing = false;
  points.length = 0;
};
*/