HelpScreen = function() {
	// Liste des sprites du screen 
	this.list = [];
}

HelpScreen.prototype = Object.create(Phaser.Sprite.prototype);
HelpScreen.prototype.constructor = HelpScreen;

HelpScreen.prototype.create = function() {
	// Background 
	this.drawBackground();
	// Titre 
	this.drawTitle();
	// Texte 
	this.drawText();
	// Bouton de retour
	this.drawButtonExit();
}

// Background 
HelpScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'background');
	this.list.push(this.background);
}

// Titre 
HelpScreen.prototype.drawTitle = function() {

	this.title = game.add.sprite(300, 60, 'help');
	var anim = new Float(this.title);
	this.list.push(this.title);
}

// Texte 
HelpScreen.prototype.drawText = function() {

	this.title = game.add.sprite(40, 140, 'txtHelp');
	this.list.push(this.title);
}

// Bouton de retour 
HelpScreen.prototype.drawButtonExit = function() {

	this.btnReturn = new Button(740, 50, 'small', 'X', 'carrier_command', 30);
	this.list.push(this.btnReturn);
	this.btnReturn.events.onInputDown.add(uiManager.exitHelp, uiManager);
}