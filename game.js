let start=[];
let buttonColor=["red","green","blue","yellow"];
let gamePattern=[];
let userPattern=[];
let level=1;
let index=0;
function gameOver()
{
    start=[];
    gamePattern=[];
    userPattern=[];
    level=1;
    $("body").addClass("game-over");
    playSound("wrong");
    $('h1').text("Game Over! Press A Key to Start");
    setTimeout(function(){$("body").removeClass("game-over");},100);
}
function playSound(e)
{
    let audio =new Audio("sounds/"+e+".mp3");
    audio.play();
}
function generateNextSequence(){
    let randomNumber=Math.floor(Math.random()*4);
    let randomColor=buttonColor[randomNumber];
    gamePattern.push(randomColor);
    console.log(gamePattern);
    $("#"+randomColor).fadeOut(100).fadeIn(100);
    playSound(randomColor);
    $('h1').text("level "+level++);
    userPattern=[];
    index=0;
}
let buttons=document.querySelectorAll(".btn");
for (let j=0;j<buttons.length;j++)
{
    buttons[j].addEventListener("click",function(element){
        if(start.length==0)
        return;
        userPattern.push(buttons[j].id);
        playSound(buttons[j].id);
        if(userPattern[index]==gamePattern[index])
        {
            console.log(index);
            index++;
            if(index==gamePattern.length)
            {
                setTimeout(function(){generateNextSequence()},200);
            }
        }
        else{
            gameOver();
        }
        $('#'+buttons[j].id).addClass("pressed");
        setTimeout(function(){$('#'+buttons[j].id).removeClass("pressed");},100);});
}
document.addEventListener("keydown",function(e){
        if(start.length==0)
        {
            start.push(e);
            generateNextSequence();
        }
})

