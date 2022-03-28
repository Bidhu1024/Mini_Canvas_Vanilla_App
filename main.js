const ctx = document.getElementById('canvas').getContext('2d');
window.addEventListener('resize', resize);
resize();


let mousePos = {
    x:0,
    y:0
}
window.addEventListener('mousemove',draw);
window.addEventListener('mousedown',mousePosition);
window.addEventListener('mouseenter',mousePosition);

var c = document.getElementById("myCanvas");
var ctx1 = c.getContext("2d");
ctx.beginPath();
ctx1.moveTo(0,0);
ctx1.lineTo(x,y);
ctx1.lineTo(x,y);
ctx1.stroke();
function mousePosition(e){
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
}

function resize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function draw(e){
    if(e.buttons !== 1)
        return;
    

    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;

    ctx.moveTo(mousePos.x,mousePos.y);
    mousePosition(e);

    ctx.lineTo(mousePos.x,mousePos.y);
    ctx.stroke();
}