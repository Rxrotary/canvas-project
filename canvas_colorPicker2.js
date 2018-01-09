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

var x_sec = 0;
var y_sec = 0;
var drag_sec = false;
var rgbaColor_sec = 'rgba(255,0,0,1)';

ctx1_sec.rect(0, 0, width1_sec, height1_sec);
fillGradientSec();

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
    x_sec = e.offsetX;
    y_sec = e.offsetY;
    var imageDataSec = ctx2_sec.getImageData(x_sec, y_sec, 1, 1).data;
    rgbaColor_sec = 'rgba(' + imageDataSec[0] + ',' + imageDataSec[1] + ',' + imageDataSec[2] + ',1)';
    fillGradientSec();
  }

function fillGradientSec() {                                     //Fill Gradient of Spuare Canvas
    ctx1_sec.fillStyle = rgbaColor_sec;
    ctx1_sec.fillRect(0, 0, width1_sec, height1_sec);
  
    var grdWhiteSec = ctx2_sec.createLinearGradient(0, 0, width1_sec, 0);
    grdWhiteSec.addColorStop(0, 'rgba(255,255,255,1)');
    grdWhiteSec.addColorStop(1, 'rgba(255,255,255,0)');
    ctx1_sec.fillStyle = grdWhiteSec;
    ctx1_sec.fillRect(0, 0, width1_sec, height1_sec);
  
    var grdBlackSec = ctx2_sec.createLinearGradient(0, 0, 0, height1_sec);
    grdBlackSec.addColorStop(0, 'rgba(0,0,0,0)');
    grdBlackSec.addColorStop(1, 'rgba(0,0,0,1)');
    ctx1_sec.fillStyle = grdBlackSec;
    ctx1_sec.fillRect(0, 0, width1_sec, height1_sec);
  }

  function mousedown(e) {
    drag_sec = true;
    changeColorSec(e,colorLabel2);
  }
  
  function mousemove(e) {
    if (drag_sec) {
      changeColorSec(e,colorLabel2);
    }
  }
  
  function mouseup(e) {
    drag_sec = false;
  }
  
  function changeColorSec(e,label) {
    x_sec = e.offsetX;
    y_sec = e.offsetY;
    var imageDataSec = ctx1_sec.getImageData(x_sec, y_sec, 1, 1).data;
    color.dataSec = imageDataSec;
    rgbaColor_sec = 'rgba(' + imageDataSec[0] + ',' + imageDataSec[1] + ',' + imageDataSec[2] + ',1)';
    label.style.backgroundColor = rgbaColor_sec;
  }