class DrawSmooth extends PaintFunction {
  constructor(contextDraft){
    super();
    this.contextDraft = contextDraft;
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
    this.contextDraft.lineJoin = 'round';
    this.contextDraft.lineCap = 'round' ; 
  };

  onDragging(mouse,e){
    this.currentPoint = mouse;
    var dist = this.distanceBetween(this.lastPoint,this.currentPoint);
    var angle = this.angleBetween(this.lastPoint,this.currentPoint);

    for (var i = 0; i < dist; i += 5) {
      var x = this.lastPoint.x + (Math.sin(angle) * i);
      var y = this.lastPoint.y + (Math.cos(angle) * i);
      var colorData = color.data;
      console.log(colorData)
      var colorStop0 = 'rgba(' + colorData[0] + ',' + colorData[1] + ',' + colorData[2] + ',1)';
      var colorStop1 = 'rgba(' + colorData[0] + ',' + colorData[1] + ',' + colorData[2] + ',0.5)';
      var colorStop2 = 'rgba(' + colorData[0] + ',' + colorData[1] + ',' + colorData[2] + ',0)'
      var radgrad = this.contextDraft.createRadialGradient(x, y, (size.x/5), x, y, (size.x*2/5));  
      radgrad.addColorStop(0, colorStop0);
      radgrad.addColorStop(0.5, colorStop1);
      radgrad.addColorStop(1, colorStop2);
  
      this.contextDraft.fillStyle = radgrad;
      this.contextDraft.fillRect(x - 20, y - 20, size.x, size.y);
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