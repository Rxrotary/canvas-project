class DrawBrush extends PaintFunction {
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
    onMouseDown(mouse,e) {
        this.lastPoint = mouse;
    }
    onDragging(mouse,e) {
        var img = new Image();
        img.src = 'http://www.tricedesigns.com/wp-content/uploads/2012/01/brush2.png';
        
        this.currentPoint = mouse;
        var dist = this.distanceBetween(this.lastPoint,this.currentPoint);
        var angle = this.angleBetween(this.lastPoint,this.currentPoint);

        for (var i = 0; i < dist; i++) {
            var x = this.lastPoint.x + (Math.sin(angle) * i) - 25;
            var y = this.lastPoint.y + (Math.cos(angle) * i) - 25;
            this.contextDraft.drawImage(img, x, y, size.x, size.y);
        }
        this.lastPoint = this.currentPoint;
    }
    onMouseMove() {

    }
    onMouseUp() {

    }
    onMouseLeave() {

    }
    onMouseEnter() {

    }
    
}











