GameManager = function() {

	// Level sélectionné 
	this.levelSelected = uiManager.levelSelected;
	this.worldSelected = uiManager.worldSelected;
	// Partie perdue 
	this.isLose = false;
	// Partie gagnée
	this.isWin = false;
	// Jeu en pause 
	this.pause = false;
	// Temps de déclenchement de défaite
    this.loseTimer = 100;
    // Temps de déclenchement de victoire
    this.winTimer = 100;
}

GameManager.prototype = Object.create(Phaser.Sprite.prototype);
GameManager.prototype.constructor = GameManager;

// Initialisation
GameManager.prototype.create = function() {

	// Moteur physique
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Initialisation clavier 
    cursor = game.input.keyboard.createCursorKeys();
    bombKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    // Ajout du background 
    background = game.add.sprite(0, 0, 'background' + this.worldSelected);

    // Liste des blocs 
    blocs = game.add.group();
    blocs.enableBody = true;

    // Liste des bombes 
    bombs = game.add.group();

    // Liste des ennemis 
    enemies = game.add.group();
    enemies.enableBody = true;

    // Liste des bonus 
    bonus = game.add.group();
    bonus.enableBody = true;

    // Afichage du hud
    hud = new Hud();

    // Construction du level
    tilemap = new Tilemap(this.worldSelected + this.levelSelected);
}

// Rafraîchissement 
GameManager.prototype.update = function() {

	// Test de victoire 
	this.win();

	// Test de défaite 
	this.lose();
}

// Victoire 
GameManager.prototype.win = function() {

    if (this.isWin) this.winTimer--;
    if (this.winTimer === 0) uiManager.displayWin();
}

// Défaite 
GameManager.prototype.lose = function() {

    if (this.isLose) this.loseTimer--;
    if (this.loseTimer === 0) uiManager.displayLose();
}

// Destruction du jeu 
GameManager.prototype.destroy = function() {

	background.destroy();
	tank1.destroy();
	blocs.destroy();
	bombs.destroy();
	enemies.destroy();
	bonus.destroy();
}