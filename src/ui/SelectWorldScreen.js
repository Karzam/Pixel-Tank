SelectWorldScreen = function() {
	// Liste des sprites du screen 
	this.list = [];
	// Monde sélectionné 
	this.worldSelected = null;
}

SelectWorldScreen.prototype = Object.create(Phaser.Sprite.prototype);
SelectWorldScreen.prototype.constructor = SelectWorldScreen;

SelectWorldScreen.prototype.create = function() {
	// Background 
	this.drawBackground();
	// Bouton de retour
	this.drawButtonReturn();
	// Boutons de levels
	this.drawButtons();
}

// Background 
SelectWorldScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'selectWorld');
	this.list.push(this.background);
}

// Bouton de retour 
SelectWorldScreen.prototype.drawButtonReturn = function() {

	this.btnReturn = new Button(60, 60, 'small', '<', 'carrier_command', 30);
	this.list.push(this.btnReturn);
	this.btnReturn.events.onInputDown.add(uiManager.displayTitle, uiManager);
}

// Boutons de mondes 
SelectWorldScreen.prototype.drawButtons = function() {

	this.btnDesert = new Button(400, 220, 'large', 'Desert', 'carrier_command', 20);
	this.btnDesert.worldSelected = "Desert";
	this.list.push(this.btnDesert);
	this.btnDesert.events.onInputDown.add(uiManager.getWorldSelected, this.btnDesert);

	this.btnForest = new Button(400, 310, 'large', 'Forest', 'carrier_command', 20);
	this.btnForest.worldSelected = "Forest";
	this.list.push(this.btnForest);
	//this.btnForest.events.onInputDown.add(uiManager.getWorldSelected, this.btnForest);

	this.btnSnow = new Button(400, 400, 'large', 'Snow', 'carrier_command', 20);
	this.btnSnow.worldSelected = "Snow";
	this.list.push(this.btnSnow);
	//this.btnSnow.events.onInputDown.add(uiManager.getWorldSelected, this.btnSnow);

	this.btnIsland = new Button(400, 490, 'large', 'Island', 'carrier_command', 20);
	this.btnIsland.worldSelected = "Island";
	this.list.push(this.btnIsland);
	//this.btnIsland.events.onInputDown.add(uiManager.getWorldSelected, this.btnIsland);
}