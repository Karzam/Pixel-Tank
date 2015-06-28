Gun = function(x, y, image, angleRange) {
    
    Phaser.Sprite.call(this, game, x, y, image);
    this.anchor.setTo(0.3281, 0.4844);
    // Variation de l'angle de tir 
    this.angleRange = angleRange;
    // Animations
    this.animations.add('damage', [1, 2, 3, 4]);
    this.animations.add('static', [0]);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    game.add.existing(this);
}
 
Gun.prototype = Object.create(Phaser.Sprite.prototype);
Gun.prototype.constructor = Gun;

// Méthodes appelées dans la boucle de jeu 
Gun.prototype.update = function() {

    if (!gameManager.pause) {
        
        this.angle = Math.atan2((tank1.y + this.angleRange) - this.y, (tank1.x + this.angleRange) - this.x) / (Math.PI / 180);
    }
}