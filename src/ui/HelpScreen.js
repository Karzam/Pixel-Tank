HelpScreen = function() {
	// Liste des sprites du screen 
	this.list = [];
}

HelpScreen.prototype = Object.create(Phaser.Sprite.prototype);
HelpScreen.prototype.constructor = HelpScreen;

HelpScreen.prototype.create = function() {
	// Background 
	this.drawBackground();
	// Bouton de retour
	this.drawButtonExit();
}

// Background 
HelpScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'help');
	this.list.push(this.background);
}

// Bouton de retour 
HelpScreen.prototype.drawButtonExit = function() {

	this.btnReturn = new Button(740, 50, 'small', 'X', 'carrier_command', 30);
	this.list.push(this.btnReturn);
	this.btnReturn.events.onInputDown.add(uiManager.exitHelp, uiManager);
}