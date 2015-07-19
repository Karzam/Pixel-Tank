Smoke = function(receiver) {

	this.receiver = receiver;
	this.particles = [];
	this.beginAppearCooldown = 10;
	this.beginAppearTimer = 0;
	this.appearSpeedCooldown = 2;
	this.appearSpeedTimer = 0;
	this.maxRange = 10;

	effectManager.effects.push(this);
}

Smoke.prototype = Object.create(Phaser.Sprite.prototype);
Smoke.prototype.constructor = Smoke;

// Initialisation
Smoke.prototype.create = function() {
}

// Rafraîchissement 
Smoke.prototype.update = function() {

    // Création des particules 
    this.createParticles();

    // Rendu des particules 
    this.renderParticles();

    // Destruction des particules 
    this.destroyParticles();
}

// Création des particules 
Smoke.prototype.createParticles = function() {

	this.beginAppearTimer++;
	this.appearSpeedTimer++;

	if (this.beginAppearTimer > this.beginAppearCooldown && this.receiver.exists) {
		if (this.appearSpeedTimer > this.appearSpeedCooldown) {
			this.randPos = Math.random();
			this.particle = game.add.sprite(this.receiver.x + (Math.random > 0.5 ? this.randPos * this.maxRange : -this.randPos * this.maxRange), 
											this.receiver.y + (Math.random > 0.5 ? this.randPos * this.maxRange : -this.randPos * this.maxRange), "smoke");
			this.particle.alpha = 0.1;
			this.tween = game.add.tween(this.particle).to( { alpha: 1 }, 500, "Linear", true);
			this.particles.push(this.particle);
			this.appearSpeedTimer = 0;
		}
	}
}

// Rendu des particules 
Smoke.prototype.renderParticles = function() {

	for (var i = 0; i < this.particles.length; i++) {
		if (this.particles[i].alpha == 1) {
			game.add.tween(this.particles[i]).to( { alpha: 0 }, 10, "Linear", true);
		}
	}
}

// Destruction des particules 
Smoke.prototype.destroyParticles = function() {

	for (var i = 0; i < this.particles.length; i++) {
		if (this.particles[i].alpha == 0) {
			this.particles[i].destroy();
			this.particles.splice(i, 1);
		}
	}
}