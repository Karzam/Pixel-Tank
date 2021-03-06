WinScreen = function() {
	// Liste des sprites du screen 
	this.list = [];
}

WinScreen.prototype = Object.create(Phaser.Sprite.prototype);
WinScreen.prototype.constructor = WinScreen;

WinScreen.prototype.create = function() {
	// Background 
	this.drawBackground();
	// Titre 
	this.drawTitle();
	// Boutons 
	this.drawButtons();
}

// Background 
WinScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'background');
	this.list.push(this.background);
}

// Titre 
WinScreen.prototype.drawTitle = function() {

	this.title = game.add.sprite(160, 120, 'win');
	var anim = new Float(this.title);
	this.list.push(this.title);
}

// Boutons
WinScreen.prototype.drawButtons = function() {

	this.btnRestart = new Button(250, 340, 'medium', '#btn_restart_level', 'carrier_command', 50);
	this.list.push(this.btnRestart);
	this.btnRestart.events.onInputDown.add(uiManager.startLevel, uiManager);

	this.btnSelect = new Button(400, 340, 'medium', '#btn_return_select', 'carrier_command', 50);
	this.btnSelect.returnScreen = "SelectLevelScreen";
	this.list.push(this.btnSelect);
	this.btnSelect.events.onInputDown.add(uiManager.exitLevel, this.btnSelect);

	// Si le niveau terminé n'est pas le dernier niveau 
	if (levelManager.levelSelected != 12) {
		this.btnNext = new Button(550, 340, 'medium', '>', 'carrier_command', 50);
		this.list.push(this.btnNext);
		this.btnNext.events.onInputDown.add(uiManager.startNextLevel, uiManager);
	}
}