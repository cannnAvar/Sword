var canvas = document.getElementById("game");
canvas.height = innerHeight
canvas.width = innerWidth;
var ctx = canvas.getContext("2d");


const player = new Player(100, 100, 20, 20, 'Assets/atom.jpg');
const input = new Input();

function update(progress)
{
     // Update the state of the world for the elapsed time since last render
     ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw()
{
     // Draw the state of the world
     player.draw()
     if (input.leftPressed == true) 
     {
          player.move(-10)
     } 
     if (input.rightPressed == true) 
     {
          player.move(10)
     } 
     if (input.upPressed == true) 
     {
          player.move(0, -10)
     } 
     if (input.downPressed == true) 
     {
          player.move(0, 10)
     }
     
}


function loop(timestamp)
{
     var progress = timestamp - lastRender
     
     update(progress)
     draw()
     
     lastRender = timestamp
     window.requestAnimationFrame(loop)
}

function start()
{
     //input.setInput();
     console.log("Wake The Fuck Up Samurai\nWe Got City To Burn");
     input.setInput()
}

var lastRender = 0
start();
window.requestAnimationFrame(loop)