BonusTimerBomb = function(x, y) {
    
    Phaser.Sprite.call(this, game, x, y, 'bonus_timerbomb');
    this.anchor.setTo(0.5, 0.5);
    // Durée 
    this.timer = 400; 
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    game.add.existing(this);
    bonus.add(this);
}
 
BonusTimerBomb.prototype = Object.create(Phaser.Sprite.prototype);
BonusTimerBomb.prototype.constructor = BonusTimerBomb;

// Méthodes appelées dans la boucle de jeu 
BonusTimerBomb.prototype.update = function() {

    // Activation de l'effet 
    this.activateEffect();

    // Collision avec les tanks
    game.physics.arcade.collide(this, tank1, this.collisionTank, null, this); 
}

// Collision avec les tanks 
BonusTimerBomb.prototype.collisionTank = function() {

    this.activate = true;
    // Disparition du bonus 
    this.x = 10000;
}

// Activation de l'effet
BonusTimerBomb.prototype.activateEffect = function() {

    if (this.activate) {
        tank1.bonusTimerBomb = true;
        this.timer--;
        // Destruction
        if (this.timer === 0) {
            tank1.bonusTimerBomb = false;
            this.destroy();
        }
    }
}