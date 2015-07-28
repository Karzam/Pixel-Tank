BossSnow = function(x, y) {

    Phaser.Sprite.call(this, game, x, y, 'boss_snow_base');
    this.anchor.setTo(0.5, 0.5);
    // Animation de dégats 
    this.animations.add('damage', [1, 2, 3, 4]);
    // Vitesse de déplacement 
    this.speed = 100;
    // Cadence de tir 
    this.timerBomb = 100;
    // Vitesse des bombes 
    this.bombSpeed = 300;
    // Points de vie 
    this.life = 20;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    game.add.existing(this);
    enemies.add(this);
     // Ajout du canon
    this.gun = new Gun(this.x, this.y, 'boss_snow_gun', 0);
    // Animation de base 
    this.animations.add('static', [0]);
}

BossSnow.prototype = Object.create(Phaser.Sprite.prototype);    
BossSnow.prototype.constructor = BossSnow;

// Méthodes appelées dans la boucle de jeu 
BossSnow.prototype.update = function() {

    if (!gameManager.pause) {

        // Déplacement 
        this.move();

        // Tir de bombes 
        this.fireBomb();

        // Collision avec le player
        game.physics.arcade.collide(this, tank); 
    }
}

// Déplacement 
BossSnow.prototype.move = function() {

    if (this.x < 200 && this.y < 100) {
        this.angle = 45;
        this.body.velocity.x = this.speed / 1.4;
        this.body.velocity.y = this.speed / 1.4;
        this.gun.body.velocity.x = this.speed / 1.4;
        this.gun.body.velocity.y = this.speed / 1.4;
    }
    if (this.x > 600 && this.y > 500) {
        this.angle = 270;
        this.body.velocity.x = 0;
        this.body.velocity.y = -this.speed;
        this.gun.body.velocity.x = 0;
        this.gun.body.velocity.y = -this.speed;
    }
    if (this.x > 600 && this.y < 100) {
        this.angle = 135;
        this.body.velocity.x = -this.speed / 1.4;
        this.body.velocity.y = this.speed / 1.4;
        this.gun.body.velocity.x = -this.speed / 1.4;
        this.gun.body.velocity.y = this.speed / 1.4;
    }
    if (this.x < 200 && this.y > 500) {
        this.angle = 270;
        this.body.velocity.x = 0;
        this.body.velocity.y = -this.speed;
        this.gun.body.velocity.x = 0;
        this.gun.body.velocity.y = -this.speed;
    }
}

// Tir de bombes
BossSnow.prototype.fireBomb = function() {

    // Décrémentation du timer de tir 
    if (this.timerBomb > 0) this.timerBomb--;

    // Si timer de tir à 0
    if (this.timerBomb === 0 && !gameManager.isLose) {
        var bomb = new BossSnowBomb(this.gun.x, this.gun.y, this.gun.angle, this.bombSpeed);
        this.timerBomb = 140;
    }
}

// Animation de dégats et retirement des points de vie  
BossSnow.prototype.damage = function() {

    this.life --;

    // Animation de dégats
    this.play('damage', 40, false);
    this.gun.play('damage', 40, false);

    // Si points de vie à 0, destruction
    if (this.life === 0) {
        var explosion = new Explosion(this.x, this.y);
        explosion.scale.x = 2;
        explosion.scale.y = 2;
        for (var i = 0; i < 5; i++) {
            this.guns[i].destroy();
        }
        this.destroy();
    }
}