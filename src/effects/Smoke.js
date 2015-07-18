Smoke = function() {
}

Smoke.prototype = Object.create(Phaser.Sprite.prototype);
Smoke.prototype.constructor = Smoke;

// Initialisation
Smoke.prototype.create = function() {

	
}

// Rafraîchissement 
Smoke.prototype.update = function() {

    // Evènements de level gagné / perdu 
	levelManager.update();
}