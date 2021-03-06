Enemy = function() {

    this.width = 32;
    this.height = 32;
    this.anchor.setTo(0.5, 0.5);
    // Animation de dégats 
    this.animations.add('damage', [1, 2, 3, 4]);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    game.add.existing(this);
    enemies.add(this);
    // Animations de base 
    this.animations.add('static', [0]);
    this.gun.animations.add('static', [0]);
}

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

// Méthodes appelées dans la boucle de jeu 
Enemy.prototype.update = function() {

    if (!levelManager.pause) { 

        // Tir de bombes 
        this.fireBomb();

        // Collision avec le player
        game.physics.arcade.collide(this, tank); 
    }
}

// Tir de bombes
Enemy.prototype.fireBomb = function() {

    // Décrémentation du timer de tir 
    this.timer++;

    // Si timer de tir à 0
    if (this.timer === this.bombDelay && !gameManager.isLose) {
        var bomb = new Bomb(this.gun.x, this.gun.y, this.gun.angle, this.bombSpeed);
        this.timer = 0;
    }
}

// Animation de dégats et retirement des points de vie  
Enemy.prototype.damage = function() {

    this.life --;

    // Animation de dégats
    this.play('damage', 40, false);
    this.gun.play('damage', 40, false);

    // Si points de vie à 0 
    if (this.life === 0) {
        var explosion = new Explosion(this.x, this.y);
        // Apparition d'un bonus 
        this.createBonus();
        this.gun.destroy();
        // Destruction
        this.destroy();
    }
}

// Apparition d'un bonus lors de la destruction
Enemy.prototype.createBonus = function() {

    var rd = Math.random();

    // Vie 
    if (rd < 0.2) { 
        var life = new BonusLife(this.x, this.y);
    }
    // Shield  
    else if (rd < 0.4) {
        var shield = new BonusShield(this.x, this.y);
    }
    // Vitesse 
    else if (rd < 0.6) {
        var speed = new BonusSpeed(this.x, this.y);
    }
    // Ralenti 
    else if (rd < 0.8) {
        var timeIdle = new BonusTimeIdle(this.x, this.y);
    }
    // Cadence de tir 
    else {
        var timerBomb = new BonusTimerBomb(this.x, this.y);
    }
}