Explosion = function(x, y, receiver) {
	
    Phaser.Sprite.call(this, game, x, y, 'explosion');
    this.animations.add('explose', [0, 1, 2, 3, 4, 5, 6, 7]);
    (receiver != null ? this.receiver = receiver : null);
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
}

Explosion.prototype = Object.create(Phaser.Sprite.prototype);
Explosion.prototype.constructor = Explosion;

// Méthodes appelées dans la boucle de jeu 
Explosion.prototype.update = function() {

	if (!levelManager.pause) {

	    // Animation 
	    this.animations.play('explose', 40, false, true);
	    (this.receiver != null ? this.receiver.destroy() : null);
	}
}