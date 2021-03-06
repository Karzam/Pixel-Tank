EnemySniper = function(x, y) {

    Phaser.Sprite.call(this, game, x, y, 'enemy_sniper_base');
    this.width = 32;
    this.height = 32;
    this.anchor.setTo(0.5, 0.5);
    // Animation de dégats 
    this.animations.add('damage', [1, 2, 3, 4]);
    // Cadence de tir 
    this.bombDelay = 200;
    this.timer = 0; 
    // Vitesse des bombes 
    this.bombSpeed = 400;
    // Points de vie 
    this.life = 3;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    game.add.existing(this);
    // Ajout du canon
    this.gun = new Gun(this.x, this.y, 'enemy_sniper_gun', 0); 
    enemies.add(this);
    // Animations de base 
    this.animations.add('static', [0]);
    this.gun.animations.add('static', [0]);
}

EnemySniper.prototype = Object.create(Phaser.Sprite.prototype);
EnemySniper.prototype.constructor = EnemySniper;

// Méthodes appelées dans la boucle de jeu 
EnemySniper.prototype.update = function() {

    if (!levelManager.pause) {
        
        // Rotation 
        this.rotate();

        // Tir de bombes 
        this.fireBomb();

        // Collision avec le player
        game.physics.arcade.collide(this, tank); 
    }
}

// Rotation du canon 
EnemySniper.prototype.rotate = function() {

    this.gun.angle = Math.atan2(tank.y - this.y, tank.x - this.x) / (Math.PI / 180);
}

// Tir de bombes
EnemySniper.prototype.fireBomb = function() {

    // Décrémentation du timer de tir 
    this.timer++;

    // Si timer de tir à 0
    if ((this.timer === this.bombDelay - 20 || this.timer === this.bombDelay - 10 || this.timer === this.bombDelay) && 
        !gameManager.isLose) {
        var bomb = new Bomb(this.gun.x, this.gun.y, this.gun.angle, this.bombSpeed);
        // Réinitialisation du timer
        if (this.timer === this.bombDelay) this.timer = 0;
    }
}

// Animation de dégats et retirement des points de vie  
EnemySniper.prototype.damage = function() {

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
EnemySniper.prototype.createBonus = function() {

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