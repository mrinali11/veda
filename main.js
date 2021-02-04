canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
mars_array=["1.jpg","2.jpg","3.jpg","4.jpg"];
Random_num= Math.floor(Math.random()*4);
console.log(Random_num);
rwidth=100;
rheight=90;
canvass_image=mars_array[Random_num];
console.log("background image="+canvass_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;
function Add(){
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadbg;
    bg_imgtag.src=canvass_image;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}
function uploadbg(){
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rwidth,rheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38'){
        up();
        console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
    if (keypressed=='37'){
        left();
        console.log("left");
    }if (keypressed=='39'){
        right();
        console.log("right");
    }

}
function up(){
    if (rover_y >=0){
        rover_y=rover_y-10;
        uploadbg();
        uploadrover();
        console.log("when up arrow is pressed,x = "+rover_x+"and y = "+rover_y);
    
    }
}
function down(){
    if (rover_y <=500){
        rover_y=rover_y+10;
        uploadbg();
        uploadrover();
        console.log("when down arrow is pressed,x = "+rover_x+"and y = "+rover_y);
    
    }
}
function left(){
    if (rover_x >=0){
        rover_x=rover_x-10;
        uploadbg();
        uploadrover();
        console.log("when left arrow is pressed,x = "+rover_x+"and y = "+rover_y);
    
    }
}
function right(){
    if (rover_x <=700){
        rover_x=rover_x+10;
        uploadbg();
        uploadrover();
        console.log("when right arrow is pressed,x = "+rover_x+"and y = "+rover_y);
    
    }
}