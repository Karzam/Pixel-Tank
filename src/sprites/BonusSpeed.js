BonusSpeed = function(x, y) {
    
    Phaser.Sprite.call(this, game, x, y, 'bonusSpeed');
    this.anchor.setTo(0.5, 0.5);
    // Durée 
    this.timer = 400; 
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    game.add.existing(this);
    bonus.add(this);
}
 
BonusSpeed.prototype = Object.create(Phaser.Sprite.prototype);
BonusSpeed.prototype.constructor = BonusSpeed;

// Méthodes appelées dans la boucle de jeu 
BonusSpeed.prototype.update = function() {

    // Activation de l'effet 
    this.activateEffect();

    // Collision avec les tanks
    game.physics.arcade.collide(this, tank1, this.collisionTank, null, this); 
}

// Collision avec les tanks 
BonusSpeed.prototype.collisionTank = function() {

    this.activate = true;
    // Disparition du bonus 
    this.x = 10000;
}

// Activation de l'effet
BonusSpeed.prototype.activateEffect = function() {

    if (this.activate) {
        tank1.bonusSpeed = true;
        this.timer--;
        // Destruction
        if (this.timer === 0) {
            tank1.bonusSpeed = false;
            this.destroy();
        }
    }
}