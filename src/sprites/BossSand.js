BossSand = function(x, y) {

    Phaser.Sprite.call(this, game, x, y, 'bossSand_base');
    this.anchor.setTo(0.5, 0.5);
    // Animation de dégats 
    this.animations.add('damage', [1, 2, 3, 4]);
    // Vitesse de déplacement 
    this.speed = 20;
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
    // Ajout des canons
    this.gun1 = new Gun(this.x - 40, this.y, 'bossSand_gun', -20); 
    this.gun2 = new Gun(this.x, this.y, 'bossSand_gun', 0); 
    this.gun3 = new Gun(this.x + 40, this.y, 'bossSand_gun', 20); 
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
        game.physics.arcade.collide(this, tank1); 
    }
}

// Déplacement 
BossSand.prototype.move = function() {

    // Vitesse nulle 
    this.body.velocity.setTo(0,0);
    this.gun1.body.velocity.setTo(0,0);
    this.gun2.body.velocity.setTo(0,0);
    this.gun3.body.velocity.setTo(0,0);

    if (tank1.x > this.x && this.x < 430) {
        this.angle = 0;
        this.body.velocity.x = this.speed;
        this.gun1.body.velocity.x = this.speed;
        this.gun2.body.velocity.x = this.speed;
        this.gun3.body.velocity.x = this.speed;
    }
    else if (tank1.x < this.x && this.x > 200) {
        this.angle = 180;
        this.body.velocity.x = -this.speed;
        this.gun1.body.velocity.x = -this.speed;
        this.gun2.body.velocity.x = -this.speed;
        this.gun3.body.velocity.x = -this.speed;
    }
}

// Tir de bombes
BossSand.prototype.fireBomb = function() {

    // Décrémentation du timer de tir 
    if (this.timerBomb > 0) this.timerBomb--;

    // Si timer de tir à 0
    if (this.timerBomb === 0 && !gameManager.isLose) {
        var bomb = new Bomb(this.gun1.x, this.gun1.y, this.gun1.angle, this.bombSpeed);
        var bomb = new Bomb(this.gun2.x, this.gun2.y, this.gun2.angle, this.bombSpeed);
        var bomb = new Bomb(this.gun3.x, this.gun3.y, this.gun3.angle, this.bombSpeed);
        this.timerBomb = 140;
    }
}

// Animation de dégats et retirement des points de vie  
BossSand.prototype.damage = function() {

    this.life --;

    // Animation de dégats
    this.play('damage', 40, false);
    this.gun1.play('damage', 40, false);
    this.gun2.play('damage', 40, false);
    this.gun3.play('damage', 40, false);

    // Si points de vie à 0, destruction
    if (this.life === 0) {
        var explosion = new Explosion(this.x, this.y);
        explosion.scale.x = 2;
        explosion.scale.y = 2;
        this.gun1.destroy();
        this.gun2.destroy();
        this.gun3.destroy();
        this.destroy();
    }
}