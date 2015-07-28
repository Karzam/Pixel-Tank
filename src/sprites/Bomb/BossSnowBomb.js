BossSnowBomb = function(x, y, direction, speed) {
    
    Phaser.Sprite.call(this, game, x, y, 'bomb');
    this.anchor.setTo(0.5, 0.5);
    // Direction du sprite
    this.angle = direction;
    // Direction de déplacement 
    this.direction = this.angle * (Math.PI / 180);
    // Vitesse de déplacement 
    this.speed = speed;
    // Temps entre les divisions 
    this.splitCooldown = 30;
    // Angle entre les bombes 
    this.angleBetweenBombs = 20;
    this.splitTimer = 0;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    game.add.existing(this);
    bombs.add(this);
    // Effet de rendu 
    this.effect = new Smoke(this);
    this.effect.create();
}
 
BossSnowBomb.prototype = Object.create(Phaser.Sprite.prototype);
BossSnowBomb.prototype.constructor = BossSnowBomb;

// Méthodes appelées dans la boucle de jeu 
BossSnowBomb.prototype.update = function() {

    if (!gameManager.pause) {

        // Déplacement 
        this.move();

        // Division des bombes 
        this.splitBombs();

        // Collision avec les blocs
        game.physics.arcade.collide(this, blocs, this.collisionBloc, null, this); 

        // Collision avec les tanks
        game.physics.arcade.collide(this, tank, this.collisionTank, null, this); 

        // Collision avec les ennemis 
        game.physics.arcade.collide(this, enemies, this.collisionEnemies, null, this);
    }
}

// Déplacement
BossSnowBomb.prototype.move = function() {

   this.body.velocity.x = Math.cos(this.direction) * this.speed;
   this.body.velocity.y = Math.sin(this.direction) * this.speed;
}

// Division
BossSnowBomb.prototype.splitBombs = function() {

    this.splitTimer++;

    if (this.splitTimer == this.splitCooldown) {
        var bomb = new BossSnowBomb(this.x, this.y, this.angle - this.angleBetweenBombs, this.speed);
        var bomb = new BossSnowBomb(this.x, this.y, this.angle + this.angleBetweenBombs, this.speed);
        var explosion = new Explosion(this.x, this.y, this);
        this.splitTimer = 0;
    }
}

// Collision avec les blocs 
BossSnowBomb.prototype.collisionBloc = function() {
    
    var explosion = new Explosion(this.x, this.y, this);
}

// Collision avec les tanks 
BossSnowBomb.prototype.collisionTank = function() {

    tank.damage();
    var explosion = new Explosion(this.x, this.y, this);
}

// Collision avec les ennemis 
BossSnowBomb.prototype.collisionEnemies = function(bomb, enemy) {

    // Retirement d'un point de vie 
    enemy.damage();
    var explosion = new Explosion(this.x, this.y, this);
    // Test de victoire 
    if (enemies.length == 0) {
        levelManager.isWin = true;
    }
}