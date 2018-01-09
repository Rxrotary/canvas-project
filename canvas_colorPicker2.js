//Secondary Color

var colorBlock2 = document.getElementById('color-block2');  //square canvas
var ctx1_sec = colorBlock2.getContext('2d');
var width1_sec = colorBlock2.width;
var height1_sec = colorBlock2.height;


var colorStrip2 = document.getElementById('color-strip2');  //long canvas
var ctx2_sec = colorStrip2.getContext('2d');
var width2_sec = colorStrip2.width;
var height2_sec = colorStrip2.height;

var colorLabel2 = document.getElementById('color-label2');  //Label

var x = 0;
var y = 0;
var drag = false;
var rgbaColor = 'rgba(255,0,0,1)';

ctx1_sec.rect(0, 0, width1_sec, height1_sec);
fillGradient();

ctx2_sec.rect(0, 0, width2_sec, height2_sec);                            //Long Canvas Gradient
var grd2 = ctx2_sec.createLinearGradient(0, 0, 0, height1_sec);
grd2.addColorStop(0, 'rgba(255, 0, 0, 1)');
grd2.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
grd2.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
grd2.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
grd2.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
grd2.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
grd2.addColorStop(1, 'rgba(255, 0, 0, 1)');
ctx2_sec.fillStyle = grd2;
ctx2_sec.fill();


colorStrip2.addEventListener("click", click, false);
colorBlock2.addEventListener("mousedown", mousedown, false);
colorBlock2.addEventListener("mouseup", mouseup, false);
colorBlock2.addEventListener("mousemove", mousemove, false);


function click(e) {                                                
    x = e.offsetX;
    y = e.offsetY;
    var imageData = ctx2_sec.getImageData(x, y, 1, 1).data;
    rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
    fillGradient();
  }

function fillGradient() {                                     //Fill Gradient of Spuare Canvas
    ctx1_sec.fillStyle = rgbaColor;
    ctx1_sec.fillRect(0, 0, width1_sec, height1_sec);
  
    var grdWhite = ctx2_sec.createLinearGradient(0, 0, width1_sec, 0);
    grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
    grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
    ctx1_sec.fillStyle = grdWhite;
    ctx1_sec.fillRect(0, 0, width1_sec, height1_sec);
  
    var grdBlack = ctx2_sec.createLinearGradient(0, 0, 0, height1_sec);
    grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
    grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
    ctx1_sec.fillStyle = grdBlack;
    ctx1_sec.fillRect(0, 0, width1_sec, height1_sec);
  }

  function mousedown(e) {
    drag = true;
    changeColor(e,colorLabel2);
  }
  
  function mousemove(e) {
    if (drag) {
      changeColor(e,colorLabel2);
    }
  }
  
  function mouseup(e) {
    drag = false;
  }
  
  function changeColor(e,label) {
    x = e.offsetX;
    y = e.offsetY;
    var imageData = ctx1_prim.getImageData(x, y, 1, 1).data;
    color.data = imageData;
    rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
    label.style.backgroundColor = rgbaColor;
  }