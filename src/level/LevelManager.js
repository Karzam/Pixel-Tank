LevelManager = function() {

	// Level sélectionné 
	this.levelSelected = null;
	this.worldSelected = null;
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

LevelManager.prototype = Object.create(Phaser.Sprite.prototype);
LevelManager.prototype.constructor = LevelManager;

LevelManager.prototype.create = function() {

	// Réinitialisation des paramètres 
	this.isLose = false;
	this.loseTimer = 100;
	this.isWin = false;
	this.winTimer = 100;

	// Affiche le background du level 
	background = game.add.sprite(0, 0, 'background' + '_' + this.worldSelected);

	// Liste des blocs 
    blocs = game.add.group();
    blocs.enableBody = true;
    blocs.physicsBodyType = Phaser.Physics.ARCADE;

    // Liste des bombes 
    bombs = game.add.group();
    bombs.enableBody = true;

    // Liste des ennemis 
    enemies = game.add.group();
    enemies.enableBody = true;

    // Liste des bonus 
    bonus = game.add.group();
    bonus.enableBody = true;

	// Construits les objets du level  
	tilemap = new Tilemap(this.worldSelected + "_" + this.levelSelected);

	// Affiche le HUD
	hud = new Hud();

	// Effets de rendu 
    effectManager = new EffectManager();
}

LevelManager.prototype.update = function() {

	// Victoire 
	this.win();

	// Défaite 
	this.lose();

	// Effets de rendu 
    effectManager.update();
}

// Victoire 
LevelManager.prototype.win = function() {

    if (this.isWin) this.winTimer--;
    if (this.winTimer === 0) uiManager.displayWin();
}

// Défaite 
LevelManager.prototype.lose = function() {

    if (this.isLose) this.loseTimer--;
    if (this.loseTimer === 0) uiManager.displayLose();
}