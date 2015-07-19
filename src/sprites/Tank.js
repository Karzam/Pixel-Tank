Tank = function(sprite, x, y) {
    
    Phaser.Sprite.call(this, game, x, y, sprite + '_base');
    this.width = 32;
    this.height = 32;
    this.anchor.setTo(0.5, 0.5);
    // Animation de dégats 
    this.animations.add('damage', [1, 2, 3, 4]);
    // Vitesse de déplacement 
    this.speed = 140;
    // Cadence de tir 
    this.timerBomb = 40;
    // Vitesse des bombes 
    this.bombSpeed = 400;
    // Points de vie 
    this.life = 3;
    // Bonus 
    this.bonusTimerBomb = false;
    this.bonusSpeed = false;
    this.bonusShield = false;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    game.add.existing(this);
    // Ajout du canon
    this.gun = new TankGun(this.x, this.y, sprite + '_gun', 0); 
    // Animation de base 
    this.animations.add('static', [0]);
    this.gun.animations.add('static', [0]);
}

Tank.prototype = Object.create(Phaser.Sprite.prototype);
Tank.prototype.constructor = Tank;

// Méthodes appelées dans la boucle de jeu 
Tank.prototype.update = function() {

    if (!gameManager.pause) {

        // Déplacement 
        this.move();

        // Collision avec les blocs
        game.physics.arcade.collide(this, blocs); 

        // Tir de bombes 
        this.fireBomb();
    }
}

// Déplacement 
Tank.prototype.move = function() {

    // Vitesse nulle 
    this.body.velocity.setTo(0,0);

    // Si bonus de vitesse 
    this.bonusSpeed ? this.speed = 280 : this.speed = 140;

    if (cursor.left.isDown) {
        this.body.velocity.x = -this.speed;
        this.angle = 180;
    }
    else if (cursor.down.isDown) {
        this.body.velocity.y = this.speed;
        this.angle = 90;
    }
    else if (cursor.right.isDown) {
        this.body.velocity.x = this.speed;
        this.angle = 0;
    }
    else if (cursor.up.isDown) {
        this.body.velocity.y = -this.speed;
        this.angle = 270;
    }
}

// Tir de bombes 
Tank.prototype.fireBomb = function() {

    // Décrémentation du timer de tir 
    if (this.timerBomb > 0) this.timerBomb--;

    // Si timer à 0 et touche de tir appuyée 
    if (this.timerBomb === 0 && game.input.activePointer.isDown) {
        var bomb = new Bomb(this.x, this.y, this.gun.angle, this.bombSpeed);
        // Réinitialisation du timer de tir 
        (this.bonusTimerBomb) ? this.timerBomb = 10 : this.timerBomb = 40;
    }
}

// Vérification des points de vie 
Tank.prototype.damage = function() {

    // Retirement d'un point de vie 
    if (!this.bonusShield) {
        this.life --;
        this.play('damage', 40, false);
        hud.removeLife();
    }

    // Si points de vie à 0, destruction
    if (this.life === 0) {
        var explosion = new Explosion(this.x, this.y);
        this.gun.destroy();
        this.destroy();
        levelManager.isLose = true;
    }
}