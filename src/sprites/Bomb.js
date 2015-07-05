Bomb = function(x, y, direction, speed) {
    
    Phaser.Sprite.call(this, game, x, y, 'bomb');
    this.anchor.setTo(0.5, 0.5);
    // Direction du sprite
    this.angle = direction;
    // Direction de déplacement 
    this.direction = this.angle * (Math.PI / 180);
    // Vitesse de déplacement 
    this.speed = speed;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    game.add.existing(this);
    bombs.add(this);
}
 
Bomb.prototype = Object.create(Phaser.Sprite.prototype);
Bomb.prototype.constructor = Bomb;

// Méthodes appelées dans la boucle de jeu 
Bomb.prototype.update = function() {

    if (!gameManager.pause) {

        // Déplacement 
        this.move();

        // Collision avec les blocs
        game.physics.arcade.collide(this, blocs, this.collisionBloc, null, this); 

        // Collision avec les tanks
        game.physics.arcade.collide(this, tank1, this.collisionTank, null, this); 

        // Collision avec les ennemis 
        game.physics.arcade.collide(this, enemies, this.collisionEnemies, null, this);
    }
}

// Déplacement
Bomb.prototype.move = function() {

   this.body.velocity.x = Math.cos(this.direction) * this.speed;
   this.body.velocity.y = Math.sin(this.direction) * this.speed;
}

// Collision avec les blocs 
Bomb.prototype.collisionBloc = function() {
    
    var explosion = new Explosion(this.x, this.y);
    this.kill();
}

// Collision avec les tanks 
Bomb.prototype.collisionTank = function() {

    tank1.damage();
    var explosion = new Explosion(this.x, this.y);
    this.destroy();
}

// Collision avec les ennemis 
Bomb.prototype.collisionEnemies = function(bomb, enemy) {

    // Retirement d'un point de vie 
    enemy.damage();
    var explosion = new Explosion(this.x, this.y);
    this.kill();
    // Test de victoire 
    if (enemies.length == 0) {
        levelManager.isWin = true;
    }
}