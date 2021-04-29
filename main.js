canvas=new fabric.Canvas("myCanvas");
SuperHeroBlock_width=30;
SuperHeroBlock_heigth=30;
SuperHeroX=10;
SuperHeroY=10;
var SuperHeroObject="";
function SuperHeroUpdate(){
fabric.Image.formURL("my-superhero.png",function (Img){
SuperHeroObject=Img;
SuperHeroObject.scaleToWidth(150);
SuperHeroObject.scaleToHeight(140);
SuperHeroObject.set({
top:SuperHeroY,
left:SuperHeroX,
});
canvas.add(SuperHeroObject);
});
}
function newImage(getImage){
fabric.Image.fromURL(getImage,function(Img){
BlockImageObject=Img;
BlockImageObject.scaleToWidth(block_width);
BlockImageObject.scaleToHeight(block_height);
BlockImageObject.set({
top:SuperHeroY,
left:SuperHeroX,
});
canvas.add(BlockImageObject);
});
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
keyPress=e.keyCode;
if(e.shiftKey==true && keyPress=="80"){
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("current_width").innerHTML=SuperHeroBlock_width;
    document.getElementById("current_height").innerHTML=SuperHeroBlock_height;
}
}
if(e.shiftKey==true && keyPress=="77"){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_Width").innerHTML=block_width;
    document.getElementById("current_Height").innerHTML=block_height;
}
if(keyPress=="70"){
console.log("f");
newImage("ironman_face.png");
}
if(keyPress=="66"){
console.log("b");
newImage("spiderman_body.png");
}
if(keyPress=="76"){
console.log("l");
newImage("hulk_legs.png");
}
if(keyPress=="82"){
console.log("r");
newImage("thor_right_hand.png");
}
if(keyPress=="72"){
console.log("h");
newImage("captain_america_left_hand.png");
}
if(keyPress=="38"){
up();
console.log("up");
}
if(keyPress=="40"){
down();
console.log("down");
}
if(keyPress=="37"){
left();
console.log("left");
}
if(keyPress=="39"){
right();
console.log("right");
}