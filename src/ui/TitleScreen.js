TitleScreen = function() {
	// Liste des sprites du screen 
	this.list = [];
}

TitleScreen.prototype = Object.create(Phaser.Sprite.prototype);
TitleScreen.prototype.constructor = TitleScreen;

TitleScreen.prototype.create = function() {
	// Background 
	this.drawBackground();
	// Boutons de menus
	this.drawButtons();
}

// Background 
TitleScreen.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'title');
	this.list.push(this.background);
}

// Boutons de menus
TitleScreen.prototype.drawButtons = function() {

	this.btnCampaign = new Button(400, 300, 'large', 'Campaign', 'carrier_command', 15);
    this.list.push(this.btnCampaign);
	this.btnCampaign.events.onInputDown.add(uiManager.displaySelectWorld, uiManager);	

	this.btnMultiplayer = new Button(400, 390, 'large', 'Multiplayer', 'carrier_command', 15);
	this.list.push(this.btnMultiplayer);
	this.btnMultiplayer.events.onInputDown.add(uiManager.displayMultiplayer, uiManager);

	this.btnAchievements = new Button(400, 480, 'large', 'Achievements', 'carrier_command', 14);
	this.list.push(this.btnAchievements);

	this.btnCredits = game.add.bitmapText(400, 580, 'carrier_command_black', 'Developed by Baptiste Menard', 8);
	this.btnCredits.anchor.setTo(0.5, 0.5);
	this.list.push(this.btnCredits);
	this.btnCredits.events.onInputDown.add(uiManager.displayWebsite, uiManager);

	this.btnSettings = new Button(80, 520, 'medium', '#btn_settings', 'carrier_command', 60);
	this.list.push(this.btnSettings);

	this.btnShop = new Button(720, 520, 'medium', '#btn_shop', 'carrier_command', 60);
	this.list.push(this.btnShop);
}