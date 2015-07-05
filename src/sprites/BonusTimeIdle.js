BonusTimeIdle = function(x, y) {
    
    Phaser.Sprite.call(this, game, x, y, 'bonus_timeidle');
    this.anchor.setTo(0.5, 0.5);
    // Durée 
    this.timer = 400; 
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    game.add.existing(this);
    bonus.add(this);
}
 
BonusTimeIdle.prototype = Object.create(Phaser.Sprite.prototype);
BonusTimeIdle.prototype.constructor = BonusTimeIdle;

// Méthodes appelées dans la boucle de jeu 
BonusTimeIdle.prototype.update = function() {

    // Activation de l'effet 
    this.activateEffect();

    // Collision avec les tanks
    game.physics.arcade.collide(this, tank1, this.collisionTank, null, this); 
}

// Collision avec les tanks 
BonusTimeIdle.prototype.collisionTank = function() {

    this.activate = true;
    // Disparition du bonus 
    this.x = 10000;
}

// Activation de l'effet
BonusTimeIdle.prototype.activateEffect = function() {

    if (this.activate) {
        bombs.setAll("speed", 100);
        this.timer--;
        // Destruction
        if (this.timer === 0) {
            this.destroy();
        }
    }
}