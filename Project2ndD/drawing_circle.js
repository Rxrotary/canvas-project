class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(mouse, event) {
        this.contextReal.strokeStyle = color.current;
        this.contextReal.lineWidth = size.x * 0.1;
        this.orig = mouse;
        this.contextReal.beginPath();
    }

    onDragging(mouse, event) {
        var r = Math.sqrt((mouse.x - this.orig.x)**2 + (mouse.y - this.orig.y)**2);
        this.contextDraft.strokeStyle = color.current;
        this.contextReal.lineWidth = size.x * 0.1;
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.arc(this.orig.x, this.orig.y, r, 0, Math.PI * 2, true);
        this.contextDraft.stroke();
    }

    onMouseMove() { }
    onMouseUp(mouse) {
        var r = Math.sqrt((mouse.x - this.orig.x)**2 + (mouse.y - this.orig.y)**2);
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.arc(this.orig.x, this.orig.y, r, 0, Math.PI * 2, true);
        this.contextReal.stroke();
        this.contextDraft.strokeStyle = color.current;
        this.contextDraft.strokeWidth = size.x * 0.1;
    }
    onMouseLeave() { }
    onMouseEnter() { }
}