class Input 
{
     constructor ()
     {
          this.rightPressed = false;
          this.leftPressed = false;
          this.upPressed = false;
          this.downPressed = false;
     }


     setInput()
     {
          document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
          document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
     }

     keyDownHandler(event)
     {
          switch (event.keyCode) 
          {
               case 39:
                    this.rightPressed = true;
                    return;
               
               case 37:
                    this.leftPressed = true;
                    return;
               
               case 40:
                    this.downPressed = true;
                    break;
               
               case 38:
                    this.upPressed = true;
                    break;
          }
               
     } 

     keyUpHandler(event)
     {
          switch (event.keyCode) 
          {
               case 39:
                    this.rightPressed = false;
                    break;
               
               case 37:
                    this.leftPressed = false;
                    break;
               
               case 40:
                    this.downPressed = false;
                    break;
               
               case 38:
                    this.upPressed = false;
                    break;
          }
     }
} 
