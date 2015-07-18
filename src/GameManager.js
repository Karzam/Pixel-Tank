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
}

// Rafraîchissement 
GameManager.prototype.update = function() {

    // Evènements de level gagné / perdu 
	levelManager.update();
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