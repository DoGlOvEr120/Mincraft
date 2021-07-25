var canvas=new fabric.Canvas("myCanvas");
var block_width=20;
var block_height=20;
var player_x=10;
var player_y=10;
var player_object="";
var block_image_object="";

function player_update() {
fabric.Image.fromURL("player.png",function(img){
player_object=img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(120);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
});
}

function new_image(image) {
    fabric.Image.fromURL(image, function(img){
    block_image_object=img;
    block_image_object.scaleToWidth(block_width);
    block_image_object.scaleToHeight(block_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
    });
    }

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e) {
 var key=e.keyCode;
 console.log(key);
 if (e.shiftKey==true && key=="80"){
     block_width=block_width+10;
     block_height=block_height+10;
     document.getElementById("current_width").innerHTML=block_width;
     document.getElementById("current_height").innerHTML=block_height;
 }
 if (e.shiftKey==true && key=="77"){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
 }
 if (key=="37") {
     left();
 }
 if (key=="38") {
    up();
}
if (key=="39") {
    right();
}
if (key=="40") {
    down();
}
if (key=="87"){
    new_image("wall.jpg");   
    console.log("w key is pressed");
}
if (key=="71"){
    new_image("ground.png");
    console.log("g key is pressed");
}
if (key=="76"){
    new_image("light_green.png");   
    console.log("l key is pressed");
}
if (key=="84"){
    new_image("trunk.jpg"); 
    console.log("t key is pressed");  
}
if (key=="82"){
    new_image("roof.jpg");
    console.log("r key is pressed");
}
if (key=="89"){
    new_image("yellow_wall.png");   
    console.log("y key is pressed");
}
if (key=="68"){
    new_image("dark_green.png");
    console.log("d key is pressed");
}
if (key=="85"){
    new_image("unique.png");
    console.log("u key is pressed");
}
if (key=="67"){
    new_image("cloud.jpg");
    console.log("c key is pressed");
}
    }

    function up() {
        if (player_y>0){
            player_y=player_y-block_height;
            console.log("new coordinates- x= " +player_x+" , y= " +player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function down() {
        if (player_y<480){
            player_y=player_y+block_height;
            console.log("new coordinates- x= " +player_x+" , y= " +player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function left() {
        if (player_x>0){
            player_x=player_x-block_width;
            console.log("new coordinates- x= " +player_x+" , y= " +player_y);
            canvas.remove(player_object);
            player_update();
        }
    }

    function right() {
        if (player_x<650){
            player_x=player_x+block_width;
            console.log("new coordinates- x= " +player_x+" , y= " +player_y);
            canvas.remove(player_object);
            player_update();
        }
    }