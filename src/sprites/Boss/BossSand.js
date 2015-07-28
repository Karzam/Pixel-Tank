BossSand = function(x, y) {

    Phaser.Sprite.call(this, game, x, y, 'boss_sand_base');
    this.anchor.setTo(0.5, 0.5);
    // Animation de dégats 
    this.animations.add('damage', [1, 2, 3, 4]);
    // Vitesse de déplacement 
    this.speed = 80;
    // Cadence de tir 
    this.timerBomb = 100;
    // Vitesse des bombes 
    this.bombSpeed = 400;
    // Points de vie 
    this.life = 20;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    game.add.existing(this);
    enemies.add(this);
    // Positions des canons 
    this.gunsPos = [-40, -20, 0, 20, 40];
    // Ajout des canons
    this.guns = [];
    for (var i = 0; i < 5; i++) {
        this.gun = new Gun(this.x + this.gunsPos[i], this.y, 'boss_sand_gun', this.gunsPos[i]);
        this.guns.push(this.gun);
    }
    // Animation de base 
    this.animations.add('static', [0]);
}

BossSand.prototype = Object.create(Phaser.Sprite.prototype);    
BossSand.prototype.constructor = BossSand;

// Méthodes appelées dans la boucle de jeu 
BossSand.prototype.update = function() {

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
BossSand.prototype.move = function() {

    // Vitesse nulle 
    this.body.velocity.setTo(0,0);

    for (var i = 0; i < 5; i++) {
        this.guns[i].body.velocity.setTo(0,0);
    }

    if (this.x < 700 && this.y > 500) {
        this.angle = 0;
        this.body.velocity.x = this.speed;
        for (var i = 0; i < 5; i++) {
            this.guns[i].body.velocity.x = this.speed;
            this.guns[i].x = this.x + this.gunsPos[i];
            this.guns[i].y = this.y;
        }
    }
    else if (this.x > 700 && this.y > 100) {
        this.angle = 270;
        this.body.velocity.y = -this.speed;
        for (var i = 0; i < 5; i++) {
            this.guns[i].body.velocity.y = -this.speed;
            this.guns[i].x = this.x;
            this.guns[i].y = this.y + this.gunsPos[i];
        }
    }
    else if (this.x > 100 && this.y < 100) {
        this.angle = 180;
        this.body.velocity.x = -this.speed;
        for (var i = 0; i < 5; i++) {
            this.guns[i].body.velocity.x = -this.speed;
            this.guns[i].x = this.x + this.gunsPos[i];
            this.guns[i].y = this.y;
        }
    }
    else if (this.x < 100 && this.y < 500) {
        this.angle = 90;
        this.body.velocity.y = this.speed;
        for (var i = 0; i < 5; i++) {
            this.guns[i].body.velocity.y = this.speed;
            this.guns[i].x = this.x;
            this.guns[i].y = this.y + this.gunsPos[i];
        }
    }
}

// Tir de bombes
BossSand.prototype.fireBomb = function() {

    // Décrémentation du timer de tir 
    if (this.timerBomb > 0) this.timerBomb--;

    // Si timer de tir à 0
    if (this.timerBomb === 0 && !gameManager.isLose) {
        for (var i = 0; i < 5; i++) {
            this.guns[i].body.velocity.x = this.speed;
            var bomb = new Bomb(this.guns[i].x, this.guns[i].y, this.guns[i].angle, this.bombSpeed);
        }
        this.timerBomb = 140;
    }
}

// Animation de dégats et retirement des points de vie  
BossSand.prototype.damage = function() {

    this.life --;

    // Animation de dégats
    this.play('damage', 40, false);
    for (var i = 0; i < 5; i++) {
            this.guns[i].play('damage', 40, false);
    }

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