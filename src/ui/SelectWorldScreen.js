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

	this.btnDesert = game.add.sprite(20, 200, 'btn_desert');
	this.btnDesert.worldSelected = "desert";
	this.list.push(this.btnDesert);
	this.btnDesert.events.onInputDown.add(uiManager.getWorldSelected, this.btnDesert);

	this.btnForest = game.add.sprite(200, 200, 'btn_desert');
	this.btnForest.worldSelected = "forest";
	this.list.push(this.btnForest);
	this.btnForest.events.onInputDown.add(uiManager.getWorldSelected, this.btnForest);

	this.btnSnow = game.add.sprite(400, 200, 'btn_desert');
	this.btnSnow.worldSelected = "snow";
	this.list.push(this.btnSnow);
	this.btnSnow.events.onInputDown.add(uiManager.getWorldSelected, this.btnSnow);
}