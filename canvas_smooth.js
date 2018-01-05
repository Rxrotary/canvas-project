class DrawSmooth extends PaintFunction {
  constructor(context){
    super();
    this.context = context;
    this.lastPoint = {};
    this.currentPoint = {};
  }
  distanceBetween(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  };
  angleBetween(p1, p2) {
    return Math.atan2(p2.x - p1.x, p2.y - p1.y);
  };
  onMouseDown(mouse,e){
    this.lastPoint = mouse;
    this.context.lineJoin = 'round';
    this.context.lineCap = 'round' ; 
    console.log('Here!');
  };

  onDragging(mouse,e){
    this.currentPoint = mouse;
    var dist = this.distanceBetween(this.lastPoint,this.currentPoint);
    var angle = this.angleBetween(this.lastPoint,this.currentPoint);

    for (var i = 0; i < dist; i += 5) {
      var x = this.lastPoint.x + (Math.sin(angle) * i);
      var y = this.lastPoint.y + (Math.cos(angle) * i);
      var radgrad = this.context.createRadialGradient(x, y, 10, x, y, 20);  
      radgrad.addColorStop(0, '#000');
      radgrad.addColorStop(0.5, 'rgba(0,0,0,0.5');
      radgrad.addColorStop(1, 'rgba(0,0,0,0)');
      console.log(radgrad);
  
      this.context.fillStyle = radgrad;
      this.context.fillRect(x - 20, y - 20, size.x, size.y);
    }
    this.lastPoint = this.currentPoint;
  }
  onMouseMove(){

  }
  onMouseUp(){

  }
  onMouseLeave(){

  }
  onMouseEnter(){

  }


}
