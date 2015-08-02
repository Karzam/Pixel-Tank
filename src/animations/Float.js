Float = function(receiver) {

    this.receiver = receiver;
    this.moveState = "UP"
    this.moveCooldown = 30;
    this.moveTimer = 30;
    this.moveSpeed = 0.02;

    animationManager.animations.push(this);
}

Float.prototype = Object.create(Phaser.Sprite.prototype);
Float.prototype.constructor = Float;

// Initialisation
Float.prototype.create = function() {
	
}

// Rafraîchissement 
Float.prototype.update = function() {

    this.moveTimer--;

    if (this.moveState == "UP") {
        this.receiver.y -= this.moveTimer * this.moveSpeed;
    }
    else {
        this.receiver.y += this.moveTimer * this.moveSpeed;
    }

    if (this.moveTimer == 0) { 
        this.moveState == "UP" ? this.moveState = "DOWN" : this.moveState = "UP";
        this.moveTimer = this.moveCooldown;
    }
}