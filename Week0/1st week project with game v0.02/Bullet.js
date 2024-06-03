export default class Bullet{

 //colors = ["red","blue", "green", "yellow", "orange", "pink", "purple"]; // possible colors of bullets

    constructor(x,y,speed,damage) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;

        this.width = 5;
        this.height = 15;
        this.color = "yellow";
        //this.color = this.colors[Math.floor(Math.random() * this.colors.length)]; // bullet color randomiser
    }

    draw(ctx) {

        ctx.fillStyle = this.color;
        this.y -= this.speed;  // TEST IT, TRY TO COMMENT, YOU HAVE TO FIGURE HOW EXACTLY BULLETS DRAW!!! Yes, it's works!
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    collideWith(sprite) {
        if(this.x < sprite.x + sprite.width && 
           this.x + this.width > sprite.x &&
           this.y < sprite.y + sprite.height &&
           this.y + this.height > sprite.y) {
               
             sprite.takeDamage(this.damage);
             return true;
            
           }
           return false;
    }
}