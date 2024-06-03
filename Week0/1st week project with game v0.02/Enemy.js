export default class Enemy {

    // Enemy parameter's
    
    constructor(x,y,color,health,enemyBulletController) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.health = health;
        this.width = 50;
        this.height = 50;
        this.enemyBulletController = enemyBulletController;

    }
    
    draw(ctx) {

        ctx.fillStyle = this.color;
        if(this.health > 1) {   // <--- shield's

            ctx.strokeStyle = "white";
        }
        else{
            ctx.strokeStyle = this.color;
        }

        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeRect(this.x, this.y, this.width, this.height)

        //Draw Text

     /* ctx.fillStyle = 'black';
        ctx.font = "25px Arial";
        ctx.fillText(this.health, this.x+this.width/3.5, this.y+this.height/1.5);  */
    }

    takeDamage(damage) {
        this.health -= damage;
    }

    enemyShoot() {

        const speed = 5;
        const delay = 7;
        const damage = 1;

        // Bullets spawn point set

        const bulletX = this.x - this.width/2;
        const bulletY = this.y;

        // Shooting function

        this.enemyBulletController.shoot(bulletX, bulletY, speed, damage, delay); 
    }
}