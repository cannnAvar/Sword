class Player
{
     constructor (x, y, w, h, imgSrc)
     {
          this.img = new Image();
          this.img.src = imgSrc;
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          this.isDead = false;
          this.hp = 100
     }

     dead()
     {
          this.isDead = true
     }
     
     draw()
     {
          ctx.drawImage(this.img, player.x, player.y)
          if (this.isDead == true) 
          {
                 
          }
     }

     drawRect(color)
     {
          ctx.fillStyle = color
          ctx.fillRect(this.x, this.y, this.w, this.h);
     }

     move(dx = 0, dy = 0)
     {
          this.x += dx; 
          this.y += dy; 
     }
}
