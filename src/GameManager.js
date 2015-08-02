GameManager = function() {
}

GameManager.prototype = Object.create(Phaser.Sprite.prototype);
GameManager.prototype.constructor = GameManager;

// Initialisation
GameManager.prototype.create = function() {

	// Moteur physique
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Initialisation clavier 
    cursor = game.input.keyboard.createCursorKeys();

    // Construction du level
    levelManager.create();

    // Viseur sur la souris 
    sight = game.add.sprite(game.input.mousePointer.x, game.input.mousePointer.y, 'sight');
    sight.anchor.set(0.5, 0.5);
}

// Rafraîchissement 
GameManager.prototype.update = function() {

    // Evènements de level gagné / perdu 
	levelManager.update();

    sight.x = game.input.mousePointer.x;
    sight.y = game.input.mousePointer.y;
}

// Fin de la partie 
GameManager.prototype.destroy = function() {

	background.destroy();
	tank.destroy();
	blocs.destroy();
	bombs.destroy();
	enemies.destroy();
	bonus.destroy();
}