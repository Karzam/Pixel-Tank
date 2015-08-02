TankGun = function(x, y, image, angleRange) {
    
    Phaser.Sprite.call(this, game, x, y, image);
    this.anchor.setTo(0.234, 0.48);
    // Variation de l'angle de tir 
    this.angleRange = angleRange;
    // Animations
    this.animations.add('damage', [1, 2, 3, 4]);
    this.animations.add('static', [0]);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    game.add.existing(this);
}
 
TankGun.prototype = Object.create(Phaser.Sprite.prototype);
TankGun.prototype.constructor = TankGun;

// Méthodes appelées dans la boucle de jeu 
TankGun.prototype.update = function() {

    if (!levelManager.pause) {
        
        this.x = tank.x + this.getPosX();
        this.y = tank.y + this.getPosY();

        this.angle = Math.atan2((game.input.mousePointer.y + this.angleRange) - this.y, (game.input.mousePointer.x + this.angleRange) - this.x) / (Math.PI / 180);
    }
}

// Récupère l'angle du tank et renvoi les coordonnées à appliquer en X
TankGun.prototype.getPosX = function() {

    switch(tank.angle) {
        case 0: 
            return 4;
        case 90: 
            return 0;
        case -180: 
            return -4;
        default: 
            return 0;
    }
}

// Récupère l'angle du tank et renvoi les coordonnées à appliquer en Y
TankGun.prototype.getPosY = function() {

    switch(tank.angle) {
        case 0: 
            return 0;
        case 90: 
            return 4;
        case -180: 
            return 0;
        default: 
            return -4;
    }
}