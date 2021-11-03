
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
width_of_line=1;
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if (width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchStart);
function my_touchStart(e) {
    console.log ("my_touchStart");
    last_position_of_x=e.touches[0].clientX-canvasoffsetLeft;
    last_position_of_y=e.touches[0].clientY-canvasoffsetTop;
    }
    canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
        ctx.stroke();
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}






