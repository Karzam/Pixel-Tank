UIManager = function() {
	// Game Manager 
	gameManager = null;
	// Screen en cours d'affichage 
	this.currentScreen = null;
}

UIManager.prototype = Object.create(Phaser.Sprite.prototype);
UIManager.prototype.constructor = UIManager;

UIManager.prototype.create = function() {

	// Animations d'interface 
    animationManager = new AnimationManager();

	this.openScreen(TitleScreen);
}

// Update 
UIManager.prototype.update = function() {

	animationManager.update();
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

	this.btnReturn.events.onInputDown.add(location.href="http://www.baptistemenard.com", this);
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
	this.closeScreen();
}

// Winscreen 
UIManager.prototype.displayWin = function() {

	gameManager.destroy();
	this.openScreen(WinScreen);

	// Sauvegarde 
	var save = new Save();

	switch (levelManager.worldSelected) {
		case "desert": 
			if (parseInt(save.getItem(save.desertLevelsUnlocked)) + 1 == levelManager.levelSelected) {
				save.setItem(save.desertLevelsUnlocked, parseInt(save.getItem(save.desertLevelsUnlocked)) + 1);
				if (levelManager.levelSelected == 12) save.setItem(save.forestLevelsUnlocked, 0); 
			}
			else if (save.getItem(save.desertLevelsUnlocked) == null) {
				save.setItem(save.desertLevelsUnlocked, 1);
			}
		break;
		case "forest": 
			if (parseInt(save.getItem(save.forestLevelsUnlocked)) + 1 == levelManager.levelSelected) {
				save.setItem(save.forestLevelsUnlocked, parseInt(save.getItem(save.forestLevelsUnlocked)) + 1);
				if (levelManager.levelSelected == 12) save.setItem(save.snowLevelsUnlocked, 0); 
			}
			else if (save.getItem(save.forestLevelsUnlocked) == null) {
				save.setItem(save.forestLevelsUnlocked, 1);
			}
		break;
		case "snow": 
			if (parseInt(save.getItem(save.snowLevelsUnlocked)) + 1 == levelManager.levelSelected) {
				save.setItem(save.snowLevelsUnlocked, parseInt(save.getItem(save.snowLevelsUnlocked)) + 1);
			}
			else if (save.getItem(save.snowLevelsUnlocked) == null) {
				save.setItem(save.snowLevelsUnlocked, 1);
			}
	}
}

// Losescreen
UIManager.prototype.displayLose = function() {

	gameManager.destroy();
	this.openScreen(LoseScreen);
}