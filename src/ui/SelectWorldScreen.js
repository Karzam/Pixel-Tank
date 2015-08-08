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
	// Titre 
	this.drawTitle();
	// Bouton de retour
	this.drawButtonReturn();
	// Boutons de levels
	this.drawButtons();
}

// Background 
SelectWorldScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'background');
	this.list.push(this.background);
}

// Titre 
SelectWorldScreen.prototype.drawTitle = function() {

	this.title = game.add.sprite(160, 60, 'select_world');
	var anim = new Float(this.title);
	this.list.push(this.title);
}

// Bouton de retour 
SelectWorldScreen.prototype.drawButtonReturn = function() {

	this.btnReturn = new Button(60, 60, 'small', '<', 'carrier_command', 30);
	this.list.push(this.btnReturn);
	this.btnReturn.events.onInputDown.add(uiManager.displayTitle, uiManager);
}

// Boutons de mondes 
SelectWorldScreen.prototype.drawButtons = function() {

	this.btnDesert = new Button(140, 340, 'desert', '', 'carrier_command', 30);
	this.btnDesert.worldSelected = "desert";
	this.list.push(this.btnDesert);
	this.btnDesert.events.onInputDown.add(uiManager.getWorldSelected, this.btnDesert);

	this.btnForest = new Button(400, 340, 'forest', '', 'carrier_command', 30);
	this.btnForest.worldSelected = "forest";
	this.list.push(this.btnForest);
	this.btnForest.events.onInputDown.add(uiManager.getWorldSelected, this.btnForest);

	this.btnSnow = new Button(660, 340, 'snow', '', 'carrier_command', 30);
	this.btnSnow.worldSelected = "snow";
	this.list.push(this.btnSnow);
	this.btnSnow.events.onInputDown.add(uiManager.getWorldSelected, this.btnSnow);
}