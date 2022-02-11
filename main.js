canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEmpty="empty";
var shape="";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
shape=document.getElementById("input_shape").value;
console.log(shape);
raduis=document.getElementById("input_raduis").value;
color=document.getElementById("input_color").value;
width=document.getElementById("input_width").value;
height=document.getElementById("input_height").value;
mouseEvent="mouseDown";    
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_x = e.clientX - canvas.offsetLeft;
current_position_y = e.clientY - canvas.offsetTop;    
if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
if(shape=="Rectangle"){
ctx.rect(current_position_x,current_position_y,width,height);
ctx.stroke();
}
if(shape=="rectangle"){
    ctx.rect(current_position_x,current_position_y,width,height);
    ctx.stroke();}
if(shape=="Circle"){
ctx.arc(current_position_x,current_position_y,raduis,0,2*Math.PI);
ctx.stroke();    
}
if(shape=="circle"){
    ctx.arc(current_position_x,current_position_y,raduis,0,2*Math.PI);
    ctx.stroke();    
    }
}   
}
function change(){
ctx.clearRect(0,0,canvas.width,canvas.height);    
}