BossForestBomb = function(x, y, direction, speed) {
    
    Phaser.Sprite.call(this, game, x, y, 'bomb');
    this.anchor.setTo(0.5, 0.5);
    // Direction du sprite
    this.angle = direction;
    // Direction initiale de déplacement 
    this.initialDirection = this.angle * (Math.PI / 180);
    // Direction finale de déplacement 
    this.finalDirection = 0;
    // Arrêt avant effet
    this.stopCooldown = 100;  
    this.stopTimer = 0;
    // Vitesse de déplacement de départ  
    this.initialSpeed = speed;
    // Vitesse de déplacement finale 
    this.finalSpeed = speed * 6;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    game.add.existing(this);
    bombs.add(this);
    // Effet de rendu 
    this.effect = new Smoke(this);
    this.effect.create();
}
 
BossForestBomb.prototype = Object.create(Phaser.Sprite.prototype);
BossForestBomb.prototype.constructor = BossForestBomb;

// Méthodes appelées dans la boucle de jeu 
BossForestBomb.prototype.update = function() {

    if (!levelManager.pause) {

        // Déplacement 
        this.move();

        // Collision avec les blocs
        game.physics.arcade.collide(this, blocs, this.collisionBloc, null, this); 

        // Collision avec les tanks
        game.physics.arcade.collide(this, tank, this.collisionTank, null, this); 

        // Collision avec les ennemis 
        game.physics.arcade.collide(this, enemies, this.collisionEnemies, null, this);
    }
}

// Déplacement
BossForestBomb.prototype.move = function() {

    this.stopTimer++;

    if (this.stopTimer >= this.stopCooldown) {
        if (this.finalDirection == 0) {
            this.finalDirection = Math.atan2(tank.y - this.y, tank.x - this.x);
            this.angle = Math.atan2(tank.y - this.y, tank.x - this.x) / (Math.PI / 180);
        }
        
        this.body.velocity.x = Math.cos(this.finalDirection) * this.finalSpeed;
        this.body.velocity.y = Math.sin(this.finalDirection) * this.finalSpeed;
    }
    else {
        this.body.velocity.x = Math.cos(this.initialDirection) * this.initialSpeed;
        this.body.velocity.y = Math.sin(this.initialDirection) * this.initialSpeed;
    }
}

// Collision avec les blocs 
BossForestBomb.prototype.collisionBloc = function() {

    var explosion = new Explosion(this.x, this.y, this);

}

// Collision avec les tanks 
BossForestBomb.prototype.collisionTank = function() {

    tank.damage();
    var explosion = new Explosion(this.x, this.y, this);
}

// Collision avec les ennemis 
BossForestBomb.prototype.collisionEnemies = function(bomb, enemy) {

    // Retirement d'un point de vie 
    enemy.damage();
    var explosion = new Explosion(this.x, this.y, this);
    // Test de victoire 
    if (enemies.length == 0) {
        levelManager.isWin = true;
    }
}