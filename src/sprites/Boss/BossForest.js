BossForest = function(x, y) {

    Phaser.Sprite.call(this, game, x, y, 'boss_forest_base');
    this.anchor.setTo(0.5, 0.5);
    // Animation de dégats 
    this.animations.add('damage', [1, 2, 3, 4]);
    // Vitesse de déplacement 
    this.speed = 180;
    // Cadence de tir 
    this.timerBomb = 100;
    // Vitesse des bombes 
    this.bombSpeed = 80;
    // Points de vie 
    this.life = 20;
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    game.add.existing(this);
    enemies.add(this);
    // Positions des canons 
    this.gunsPos = [-30, 0, 30];
    // Ajout des canons
    this.guns = [];
    for (var i = 0; i < 3; i++) {
        this.gun = new Gun(this.x + this.gunsPos[i], this.y, 'boss_forest_gun', this.gunsPos[i]);
        this.guns.push(this.gun);
    }
    // Animation de base 
    this.animations.add('static', [0]);
}

BossForest.prototype = Object.create(Phaser.Sprite.prototype);    
BossForest.prototype.constructor = BossForest;

// Méthodes appelées dans la boucle de jeu 
BossForest.prototype.update = function() {

    if (!levelManager.pause) {

        // Déplacement 
        this.move();

        // Tir de bombes 
        this.fireBomb();

        // Collision avec le player
        game.physics.arcade.collide(this, tank); 
    }
}

// Déplacement 
BossForest.prototype.move = function() {

    if (this.x < 200) {
        this.body.velocity.x = this.speed;
        for (var i = 0; i < 3; i++) {
            this.guns[i].body.velocity.x = this.speed;
        }
    }
    else if (this.x > 600) {
        this.body.velocity.x = -this.speed;
        for (var i = 0; i < 3; i++) {
            this.guns[i].body.velocity.x = -this.speed;
        }
    }
}

// Tir de bombes
BossForest.prototype.fireBomb = function() {

    // Décrémentation du timer de tir 
    if (this.timerBomb > 0) this.timerBomb--;

    // Si timer de tir à 0
    if (this.timerBomb === 0 && !gameManager.isLose) {
        for (var i = 0; i < 3; i++) {
            var bomb = new BossForestBomb(this.guns[i].x, this.guns[i].y, this.guns[i].angle, this.bombSpeed);
        }
        this.timerBomb = 100;
    }
}

// Animation de dégats et retirement des points de vie  
BossForest.prototype.damage = function() {

    this.life --;

    // Animation de dégats
    this.play('damage', 40, false);
    this.gun.play('damage', 40, false);

    // Si points de vie à 0, destruction
    if (this.life === 0) {
        var explosion = new Explosion(this.x, this.y);
        explosion.scale.x = 2;
        explosion.scale.y = 2;
        for (var i = 0; i < 3; i++) {
            this.guns[i].destroy();
        }
        this.destroy();
    }
}