EnemyRegular = function(x, y) {

    //Phaser.Sprite.call(this, game, x, y, 'enemy_regular_base');
    this.sprite = game.add.sprite(x, y, 'enemy_regular_base');
    // Cadence de tir 
    this.bombDelay = 100;
    this.timer = 0;
    // Vitesse des bombes 
    this.bombSpeed = 400;
    // Points de vie 
    this.life = 2;
    // Ajout du canon
    this.gun = new Gun(this.x, this.y, 'enemy_regular_gun', 0); 
}

EnemyRegular.prototype = Object.create(Enemy.prototype);
EnemyRegular.prototype.constructor = EnemyRegular;