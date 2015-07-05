LoseScreen = function() {
	// Liste des sprites du screen 
	this.list = [];
}

LoseScreen.prototype = Object.create(Phaser.Sprite.prototype);
LoseScreen.prototype.constructor = LoseScreen;

LoseScreen.prototype.create = function() {
	// Background 
	this.drawBackground();
	// Boutons 
	this.drawButtons();
}

// Background 
LoseScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'lose');
	this.list.push(this.background);
}

// Boutons
LoseScreen.prototype.drawButtons = function() {

	this.btnRestart = new Button(320, 340, 'medium', '#btn_restart_level', 'carrier_command', 50);
	this.list.push(this.btnRestart);
	this.btnRestart.events.onInputDown.add(uiManager.startLevel, uiManager);

	this.btnSelect = new Button(480, 340, 'medium', '#btn_return_select', 'carrier_command', 50);
	this.btnSelect.returnScreen = "SelectLevelScreen";
	this.list.push(this.btnSelect);
	this.btnSelect.events.onInputDown.add(uiManager.exitLevel, this.btnSelect);
}