//Primary Color

var colorBlock1 = document.getElementById('color-block1');  //square canvas
var ctx1_prim = colorBlock1.getContext('2d');
var width1_prim = colorBlock1.width;
var height1_prim = colorBlock1.height;


var colorStrip1 = document.getElementById('color-strip1');  //long canvas
var ctx2_prim = colorStrip1.getContext('2d');
var width2_prim = colorStrip1.width;
var height2_prim = colorStrip1.height;

var colorLabel1 = document.getElementById('color-label1');  //Label

var x = 0;
var y = 0;
var drag = false;
var rgbaColor = 'rgba(255,0,0,1)';

ctx1_prim.rect(0, 0, width1_prim, height1_prim);
fillGradient();

ctx2_prim.rect(0, 0, width2_prim, height2_prim);                            //Long Canvas Gradient
var grd1 = ctx2_prim.createLinearGradient(0, 0, 0, height1_prim);
grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
ctx2_prim.fillStyle = grd1;
ctx2_prim.fill();


colorStrip1.addEventListener("click", click, false);
colorBlock1.addEventListener("mousedown", mousedown, false);
colorBlock1.addEventListener("mouseup", mouseup, false);
colorBlock1.addEventListener("mousemove", mousemove, false);


//Reusable Functions

function click(e) {                                                
  x = e.offsetX;
  y = e.offsetY;
  var imageData = ctx2_prim.getImageData(x, y, 1, 1).data;
  rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
  fillGradient();
}

function fillGradient() {                                     //Fill Gradient of Spuare Canvas
  ctx1_prim.fillStyle = rgbaColor;
  ctx1_prim.fillRect(0, 0, width1_prim, height1_prim);

  var grdWhite = ctx2_prim.createLinearGradient(0, 0, width1_prim, 0);
  grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
  grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
  ctx1_prim.fillStyle = grdWhite;
  ctx1_prim.fillRect(0, 0, width1_prim, height1_prim);

  var grdBlack = ctx2_prim.createLinearGradient(0, 0, 0, height1_prim);
  grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
  grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
  ctx1_prim.fillStyle = grdBlack;
  ctx1_prim.fillRect(0, 0, width1_prim, height1_prim);
}

function mousedown(e) {
  drag = true;
  changeColor(e,colorLabel1);
}

function mousemove(e) {
  if (drag) {
    changeColor(e,colorLabel1);
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