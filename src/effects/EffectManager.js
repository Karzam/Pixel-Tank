EffectManager = function() {

	this.effects = [];
}

EffectManager.prototype = Object.create(Phaser.Sprite.prototype);
EffectManager.prototype.constructor = EffectManager;

// Rafraîchissement 
EffectManager.prototype.update = function() {

	this.updateEffects();
}

// Update des particules 
EffectManager.prototype.updateEffects = function() {

	for (var i = 0; i < this.effects.length; i++) {
		this.effects[i].update();
	}
}