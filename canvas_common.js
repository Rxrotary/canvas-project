let canvas = document.getElementById('canvas_draft');
let context = canvas.getContext('2d');
let canvas_real = document.getElementById('canvas_real');
let context_real = canvas_real.getContext('2d');
let currentFunction;
let dragging = false;
let size = {x:document.getElementById('size').value,y:document.getElementById('size').value};






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
    currentFunction = new DrawPen(context);
    console.log(currentFunction);
});
$('#brush').click(function(){
    currentFunction = new DrawBrush(context);
    console.log(currentFunction);
});
$('#smooth').click(function(){
    currentFunction = new DrawSmooth(context);
    console.log(currentFunction);
});
$('#rects').click(function(){

});
$('#line').click(function(){
    currentFunction = new DrawLine;
});
$('#neon').click(function(){
    currentFunction = new DrawNeon(context,context_real);
    console.log(currentFunction);
});




//Apply currentFunction to Canvas

$('#canvas_real').mousedown(function(e){
    let mouse = {
        x: e.pageX - this.offsetLeft,      //object "mouse" store x-coordinate & y-coordinate of mouse event
        y: e.pageY - this.offsetTop
    };
    size = {x:document.getElementById('size').value,y:document.getElementById('size').value};
    //console.log(mouse.x,mouse.y);
    currentFunction.onMouseDown(mouse,e);
    dragging = true;
});
$('#canvas_real').mousemove(function(e){
    let mouse = {
        x: e.pageX - this.offsetLeft,
        y: e.pageY - this.offsetTop
    };
    
    if (dragging){
     currentFunction.onDragging(mouse,e);
     console.log(dragging);
    }else{currentFunction.onMouseMove(mouse,e);}
});

$('#canvas_real').mouseup(function(e){
    dragging = false;
    let mouse = {
        x: e.pageX - this.offsetLeft,
        y: e.pageY - this.offsetTop
    };
    currentFunction.onMouseUp(mouse,e);
    context_real.drawImage(canvas,0,0);
});

$('#canvas_real').mouseleave(function(e){
    dragging = false;
    let mouse =  {
        x: e.pageX - this.offsetLeft,
        y: e.pageY - this.offsetTop
    }; 
    currentFunction.onMouseLeave(mouse,e);
    context_real.drawImage(canvas,0,0);
});
$('#canvas_real').mouseenter(function(e){
    let mouse = {
        x: e.pageX - this.offsetLeft,
        y: e.pageY - this.offsetTop
    }; 
    currentFunction.onMouseEnter(mouse,e);
});



