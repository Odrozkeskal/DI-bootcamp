import EnemyBullet from "./EnemyBullet.js";

export default class EnemyBulletController {

    bullets = [];
    timerTillNextBullet = 0;

    constructor(canvas){
        this.canvas = canvas;
    }

    
    enemyShoot(x, y, speed, damage, delay) {

        if(this.timerTillNextBullet <=0) {
            if(this.bullets.length < 3) {  // <--- it's prohibits to shoot more than 3 bullets at time
            this.bullets.push(new EnemyBullet(x, y, speed, damage)); // comment string above and bottom of this line to make lazer gun!
            }
           this.timerTillNextBullet = delay;
              }

        this.timerTillNextBullet--;
    }

    draw(ctx) {

        // removing out of screen bullets

        this.bullets.forEach((bullet)=> {    
            
            if(this.isBulletOffScreen(bullet)) {

                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index,1);
            }
                bullet.draw(ctx);
        });
    }

     // Collide system

     collideWith(sprite) {

        return this.bullets.some(bullet=>{
            if(bullet.collideWith(sprite)) {
                this.bullets.splice(this.bullets.indexOf(bullet),1);  // <--- removing a bullet which collide with enemy
                return true;
            }
            return false;
        });
    }

    isBulletOffScreen(bullet) {

        return bullet.y <= -bullet.height;
    }
}
