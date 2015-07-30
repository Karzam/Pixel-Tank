BossForestBomb = function(x, y, direction, speed) {
    
    Phaser.Sprite.call(this, game, x, y, 'bomb');
    this.anchor.setTo(0.5, 0.5);
    // Direction du sprite
    this.angle = direction;
    // Direction de déplacement 
    this.direction = this.angle * (Math.PI / 180);
    // Vitesse de déplacement 
    this.speed = speed;
    // Etat de rebond 
    this.hasBounced = false;
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

    if (!gameManager.pause) {

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

   this.body.velocity.x = Math.cos(this.direction) * this.speed;
   this.body.velocity.y = Math.sin(this.direction) * this.speed;
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