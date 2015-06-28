WinScreen = function() {
	// Liste des sprites du screen 
	this.list = [];
}

WinScreen.prototype = Object.create(Phaser.Sprite.prototype);
WinScreen.prototype.constructor = WinScreen;

WinScreen.prototype.create = function() {
	// Background 
	this.drawBackground();
	// Boutons 
	this.drawButtons();
}

// Background 
WinScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'win');
	this.list.push(this.background);
}

// Boutons
WinScreen.prototype.drawButtons = function() {

	this.btnRestart = new Button(200, 340, 'small', '#btnRestartLevel', 'carrier_command', 30);
	this.list.push(this.btnRestart);
	this.btnRestart.events.onInputDown.add(uiManager.startLevel, uiManager);

	this.btnSelect = new Button(350, 340, 'small', '#btnRestartSelect', 'carrier_command', 30);
	this.btnSelect.returnScreen = "SelectLevelScreen";
	this.list.push(this.btnSelect);
	this.btnSelect.events.onInputDown.add(uiManager.exitLevel, this.btnSelect);

	// Si le niveau terminé n'est pas le dernier niveau 
	if (uiManager.levelSelected != 12) {
		this.btnNext = new Button(500, 340, 'small', '>', 'carrier_command', 30);
		this.list.push(this.btnNext);
		this.btnNext.events.onInputDown.add(uiManager.startNextLevel, uiManager);
	}
}