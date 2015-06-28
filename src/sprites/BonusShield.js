BonusShield = function(x, y) {
    
    Phaser.Sprite.call(this, game, x, y, 'bonusShield');
    this.anchor.setTo(0.5, 0.5);
    // Durée 
    this.timer = 400; 
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    game.add.existing(this);
    bonus.add(this);
}
 
BonusShield.prototype = Object.create(Phaser.Sprite.prototype);
BonusShield.prototype.constructor = BonusShield;

// Méthodes appelées dans la boucle de jeu 
BonusShield.prototype.update = function() {

    // Activation de l'effet 
    this.activateEffect();

    // Collision avec les tanks
    game.physics.arcade.collide(this, tank1, this.collisionTank, null, this); 
}

// Collision avec les tanks 
BonusShield.prototype.collisionTank = function() {

    this.activate = true;
    // Disparition du bonus 
    this.x = 10000;
}

// Activation de l'effet
BonusShield.prototype.activateEffect = function() {

    if (this.activate) {
        // Création du sprite du bouclier 
        if (!this.shield) {
            tank1.bonusShield = true;
            this.shield = game.add.sprite(tank1.x, tank1.y, 'shield');
            this.shield.anchor.setTo(0.5, 0.5);
        }
        this.shield.x = tank1.x;
        this.shield.y = tank1.y;
        this.timer--;
        // Destruction
        if (this.timer === 0) {
            tank1.bonusShield = false;
            this.shield.destroy();
            this.destroy();
        }
    }
}