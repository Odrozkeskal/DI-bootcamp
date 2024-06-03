import Player from "./Player.js"; // Connection with other scripts
import Enemy from "./Enemy.js";
import BulletController from "./BulletController.js";
//import EnemyBullet from "./EnemyBullet.js";
import EnemyBulletController from "./EnemyBulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Game field size

canvas.width = 550;
canvas.height = 600;

const bulletController = new BulletController(canvas);
const enemyBulletController = new EnemyBulletController(canvas);
const player = new Player(canvas.width/2.2, canvas.height/1.3, bulletController);

// An array of enemies (x pos, y pos, color, health)

const enemies = [      
                
      new Enemy (50, 20, 'green', 5, enemyBulletController),
      new Enemy (150, 20, "red", 5, enemyBulletController),
      new Enemy (250, 20, "gold", 2, enemyBulletController),
      new Enemy (350, 20, "green", 2, enemyBulletController),
      new Enemy (450, 20, "gold", 10, enemyBulletController),
      new Enemy (50, 100, "green", 5, enemyBulletController),
      new Enemy (150, 100, "red", 5, enemyBulletController),
      new Enemy (250, 100, "gold", 2, enemyBulletController),
      new Enemy (350, 100, "green", 2, enemyBulletController),
      new Enemy (450, 100, "gold", 20, enemyBulletController),
];

// Game field

function gameLoop() {

    setCommonStyle();
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    player.draw(ctx);
    bulletController.draw(ctx);
    enemyBulletController.draw(ctx);
    // Enemy death
    enemies.forEach(enemy => {
        if(bulletController.collideWith(enemy)) { 
            if(enemy.health <= 0) {
                const index = enemies.indexOf(enemy);
                enemies.splice(index,1);
            }

        } 
        
        else {

        enemy.draw(ctx);

        }

        if(enemyBulletController.collideWith(player)) {
            if(player.health <=0){
                const index = player;
                player.splice(index,1);
            }
        }
        else {

            //player.draw(ctx);

        }
    });
   
}

// Player's style

function setCommonStyle() {

    ctx.shadowColor = "#d53";
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 5;
}

// Player's position
setInterval(gameLoop, 1000 / 60);