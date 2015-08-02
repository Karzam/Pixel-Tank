MultiplayerScreen = function() {
	// Liste des sprites du screen 
	this.list = [];
}

MultiplayerScreen.prototype = Object.create(Phaser.Sprite.prototype);
MultiplayerScreen.prototype.constructor = MultiplayerScreen;

MultiplayerScreen.prototype.create = function() {
	// Background 
	this.drawBackground();
	// Titre 
	this.drawTitle();
	// Bouton de retour
	this.drawButtonReturn();
}

// Background 
MultiplayerScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'background');
	this.list.push(this.background);
}

// Titre 
MultiplayerScreen.prototype.drawTitle = function() {

	this.title = game.add.sprite(120, 60, 'multiplayer');
	var anim = new Float(this.title);
	this.list.push(this.title);
}

// Bouton de retour 
MultiplayerScreen.prototype.drawButtonReturn = function() {

	this.btnReturn = new Button(60, 60, 'small', '<', 'carrier_command', 30);
	this.list.push(this.btnReturn);
	this.btnReturn.events.onInputDown.add(uiManager.displayTitle, uiManager);
}