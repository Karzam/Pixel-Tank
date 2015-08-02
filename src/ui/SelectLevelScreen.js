SelectLevelScreen = function() {
	// Liste des sprites du screen 
	this.list = [];
	// Positions des boutons de levels 
	this.btnPositions = {
		"1":  [160, 200], 
		"2":  [320, 200], 
		"3":  [480, 200], 
		"4":  [640, 200], 
		"5":  [160, 350], 
		"6":  [320, 350], 
		"7":  [480, 350], 
		"8":  [640, 350], 
		"9":  [160, 500], 
		"10": [320, 500], 
		"11": [480, 500], 
		"12": [640, 500], 
	};
	// Level sélectionné 
	this.levelSelected = null;
}

SelectLevelScreen.prototype = Object.create(Phaser.Sprite.prototype);
SelectLevelScreen.prototype.constructor = SelectLevelScreen;

SelectLevelScreen.prototype.create = function() {
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
SelectLevelScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'background');
	this.list.push(this.background);
}

// Titre 
SelectLevelScreen.prototype.drawTitle = function() {

	this.title = game.add.sprite(160, 60, 'select_level');
	var anim = new Float(this.title);
	this.list.push(this.title);
}

// Bouton de retour 
SelectLevelScreen.prototype.drawButtonReturn = function() {

	this.btnReturn = new Button(60, 60, 'small', '<', 'carrier_command', 30);
	this.list.push(this.btnReturn);
	this.btnReturn.events.onInputDown.add(uiManager.displaySelectWorld, uiManager);
}

// Boutons de levels 
SelectLevelScreen.prototype.drawButtons = function() {

	for (var i = 1; i <= 12; i++) {
		this.btnLevel = new Button(this.btnPositions[i.toString()][0], this.btnPositions[i.toString()][1], 'medium', i.toString(), 'carrier_command', 30);
		this.btnLevel.levelSelected = i;
		this.list.push(this.btnLevel);
		this.btnLevel.events.onInputDown.add(uiManager.getLevelSelected, this.btnLevel);
	}
}