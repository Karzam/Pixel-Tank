UIManager = function() {
	// Game Manager 
	gameManager = null;
	// Screen en cours d'affichage 
	this.currentScreen = null;
}

UIManager.prototype = Object.create(Phaser.Sprite.prototype);
UIManager.prototype.constructor = UIManager;

UIManager.prototype.create = function() {

	this.openScreen(TitleScreen);
}

// Affichage de screen
UIManager.prototype.openScreen = function(Screen) {

	// Ferme l'écran précédent 
	if (this.currentScreen != null) this.closeScreen();
	this.currentScreen = new Screen();
	this.currentScreen.create();
}

// Fermeture de screen
UIManager.prototype.closeScreen = function() {

	for (var i = 0; i < this.currentScreen.list.length; i++) {
		this.currentScreen.list[i].destroy();
		// Efface le texte des boutons 
		if (this.currentScreen.list[i].displayedText) {
			this.currentScreen.list[i].displayedText.destroy();
		} 
	}
}

// Titlescreen
UIManager.prototype.displayTitle = function() {

	this.openScreen(TitleScreen);
}

// Website
UIManager.prototype.displayWebsite = function() {

	header = location.href="http://www.baptistemenard.com";
}

// Multiplayer 
UIManager.prototype.displayMultiplayer = function() {

	this.openScreen(MultiplayerScreen);
}

// Screen de sélection de monde  
UIManager.prototype.displaySelectWorld = function() {

	this.openScreen(SelectWorldScreen);
}

// Screen de sélection de level  
UIManager.prototype.displaySelectLevel = function() {

	this.openScreen(SelectLevelScreen);
}

// Récupération du monde sélectionné 
UIManager.prototype.getWorldSelected = function() {

	// Créé le level manager et stock le monde sélectionné  
	levelManager = new LevelManager();
	levelManager.worldSelected = this.worldSelected
	uiManager.closeScreen();

	// Affiche l'écran de sélection de level 
	uiManager.displaySelectLevel();
}

// Récupération du level sélectionné 
UIManager.prototype.getLevelSelected = function() {

	// Stock le level sélectionné 
	levelManager.levelSelected = this.levelSelected;
	uiManager.closeScreen();
	
	// Démarrage du level 
	uiManager.startLevel();
}

// Démarre le level
UIManager.prototype.startLevel = function() {

	gameManager = new GameManager();
	gameManager.create();
}

// Quitte le level en cours 
UIManager.prototype.exitLevel = function() {

	gameManager.destroy();
	if (this.returnScreen == "TitleScreen") uiManager.openScreen(TitleScreen);
	else if (this.returnScreen == "SelectLevelScreen") uiManager.openScreen(SelectLevelScreen);
}

// Démarre le level suivant 
UIManager.prototype.startNextLevel = function() {

	gameManager.destroy();
	levelManager.levelSelected++;
	gameManager = new GameManager();
	gameManager.create();
}

// Affiche le screen d'aide
UIManager.prototype.displayHelp = function() {

	levelManager.pause = true;
	this.openScreen(HelpScreen);
}

// Cache le screen d'aide 
UIManager.prototype.exitHelp = function() {

	levelManager.pause = false;
	this.currentScreen.btnReturn.text.destroy();
	this.closeScreen();
}

// Winscreen 
UIManager.prototype.displayWin = function() {

	gameManager.destroy();
	this.openScreen(WinScreen);
}

// Losescreen
UIManager.prototype.displayLose = function() {

	gameManager.destroy();
	this.openScreen(LoseScreen);
}