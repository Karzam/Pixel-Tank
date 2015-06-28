MultiplayerScreen = function() {
	// Liste des sprites du screen 
	this.list = [];
}

MultiplayerScreen.prototype = Object.create(Phaser.Sprite.prototype);
MultiplayerScreen.prototype.constructor = MultiplayerScreen;

MultiplayerScreen.prototype.create = function() {
	// Background 
	this.drawBackground();
	// Bouton de retour
	this.drawButtonReturn();
}

// Background 
MultiplayerScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'multiplayer');
	this.list.push(this.background);
}

// Bouton de retour 
MultiplayerScreen.prototype.drawButtonReturn = function() {

	this.btnReturn = new Button(60, 60, 'small', '<', 'carrier_command', 30);
	this.list.push(this.btnReturn);
	this.btnReturn.events.onInputDown.add(uiManager.displayTitle, uiManager);
}