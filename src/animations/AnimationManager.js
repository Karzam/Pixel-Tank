AnimationManager = function() {

	this.animations = [];
}

AnimationManager.prototype = Object.create(Phaser.Sprite.prototype);
AnimationManager.prototype.constructor = AnimationManager;

// Rafraîchissement 
AnimationManager.prototype.update = function() {

	this.updateAnimations();
}

// Update des particules 
AnimationManager.prototype.updateAnimations = function() {

	for (var i = 0; i < this.animations.length; i++) {
		this.animations[i].update();
	}
}