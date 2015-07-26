BonusLife = function(x, y) {
    
    Phaser.Sprite.call(this, game, x, y, 'bonus_life');
    this.anchor.setTo(0.5, 0.5);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    game.add.existing(this);
    bonus.add(this);
}
 
BonusLife.prototype = Object.create(Phaser.Sprite.prototype);
BonusLife.prototype.constructor = BonusLife;

// Méthodes appelées dans la boucle de jeu 
BonusLife.prototype.update = function() {

    // Collision avec les tanks
    game.physics.arcade.collide(this, tank, this.collisionTank, null, this); 
}

// Collision avec les tanks 
BonusLife.prototype.collisionTank = function() {

    if (tank.life < 3) {
        tank.life ++;
        hud.addLife();
    }

    this.destroy();
}