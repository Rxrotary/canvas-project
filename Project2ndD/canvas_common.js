let canvasDraft = document.getElementById('canvasDraft');
let contextDraft = canvasDraft.getContext('2d');
let canvasReal = document.getElementById('canvasReal');
let contextReal = canvasReal.getContext('2d');
let currentFunction;
let dragging = false;
let size = {x:document.getElementById('size').value,y:document.getElementById('size').value};
let color = {primary: '#000', secondary: '#fff'};
let shadow = {color: '#000', blur:'0'};


//Color setting 
$('#color-picker').click(function(){
   color.primary = $('#color-label').css('background-color');
})




//Parent PaintFunction for all tools
class PaintFunction{
    constructor(){

    }
    onMouseDown(){
        

    }
    onDragging(){

    }
    onMouseMove(){

    }
    onMouseUp(){

    }
    onMouseLeave(){

    }
    onMouseEnter(){

    }
};

currentFunction = new PaintFunction;

//call draw-functions to "currentFunction" when user click the button 

$('#pen').click(function(){
    reset();
    currentFunction = new DrawPen(contextReal,contextDraft);
    console.log(currentFunction);
});
$('#brush').click(function(){
    reset();
    currentFunction = new DrawBrush(contextReal,contextDraft);
    console.log(currentFunction);
});
$('#smooth').click(function(){
    reset();
    currentFunction = new DrawSmooth(contextReal,contextDraft);
    console.log(currentFunction);
});
$('#rect').click(function(){
     reset();
     currentFunction = new DrawingRectangle(contextReal,contextDraft);
     console.log(currentFunction);
});
$('#circle').click(function(){
    reset();
    currentFunction = new DrawingCircle(contextReal,contextDraft);
    console.log(currentFunction);
});
$('#line').click(function(){
    reset();
    currentFunction = new DrawLine;
});
$('#neon').click(function(){
    reset();
    currentFunction = new DrawNeon(contextReal,contextDraft);
    console.log(currentFunction);
});
$('#spray').click(function(){
    reset();
    currentFunction = new DrawSpray(contextReal,contextDraft);
    console.log(currentFunction);
});
$('#eraser').click(function(){
    reset();
    currentFunction = new Eraser(contextReal);
    console.log(currentFunction);
});
$('#clear').click(() => {
    clearAll();
});
$('#save').click(() => {
    exportCanvasAsPNG();
});



//Apply currentFunction to Canvas

$('#canvasReal').mousedown(function(e){
    let mouse = {
        x: e.pageX - this.offsetLeft,      //Allen: object "mouse" store x-coordinate & y-coordinate of mouse event
        y: e.pageY - this.offsetTop        //instead of [mouseX,mouseY]
    };                                     //I try keep using 'object' to store data, make it more consist.
    size = {x:document.getElementById('size').value,y:document.getElementById('size').value};
    //console.log(mouse.x,mouse.y);

    currentFunction.onMouseDown(mouse,e);
    dragging = true;
});
$('#canvasReal').mousemove(function(e){
    let mouse = {
        x: e.pageX - this.offsetLeft,
        y: e.pageY - this.offsetTop
    };
    
    if (dragging){
     currentFunction.onDragging(mouse,e);
    }else{currentFunction.onMouseMove(mouse,e);}
});

$('#canvasReal').mouseup(function(e){
    dragging = false;
    let mouse = {
        x: e.pageX - this.offsetLeft,
        y: e.pageY - this.offsetTop
    };
    currentFunction.onMouseUp(mouse,e);
    contextReal.drawImage(canvasDraft,0,0);
    contextDraft.clearRect(0, 0, contextDraft.canvas.width, contextDraft.canvas.height);
});

$('#canvasReal').mouseleave(function(e){
    dragging = false;
    let mouse =  {
        x: e.pageX - this.offsetLeft,
        y: e.pageY - this.offsetTop
    }; 
    currentFunction.onMouseLeave(mouse,e);
    contextReal.drawImage(canvasDraft,0,0);
    contextDraft.clearRect(0, 0, contextDraft.canvas.width, contextDraft.canvas.height);
});
$('#canvasReal').mouseenter(function(e){
    let mouse = {
        x: e.pageX - this.offsetLeft,
        y: e.pageY - this.offsetTop
    }; 
    currentFunction.onMouseEnter(mouse,e);
});

function reset(){
    size = {x:document.getElementById('size').value,y:document.getElementById('size').value};
    color.primary = $('#color-label1').css('background-color');
    color.secondary = $('#color-label2').css('background-color');
    shadow = {color: '#000', blur:'0'};  
    contextDraft.lineJoin = contextDraft.lineCap = 'round';
    contextDraft.shadowBlur = shadow.blur;
    contextDraft.shadowColor = shadow.color;
    contextDraft.fillStyle = color.secondary;
    contextDraft.strokeStyle = color.primary;
}