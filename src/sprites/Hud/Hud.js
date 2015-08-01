Hud = function() {
	// Liste des coeurs de vie 
	this.lifeIcons = [];
	// Vie 
	this.drawLife();
	// Boutons de navigation
	this.drawButtons();
}

Hud.prototype = Object.create(Phaser.Sprite.prototype);
Hud.prototype.constructor = Hud;

// Affiche les boutons de navigation
Hud.prototype.drawButtons = function() {

	this.btnHelp = new Button(560, 80, 'small', '#btn_help', 'carrier_command', 30);
	this.btnHelp.events.onInputDown.add(uiManager.displayHelp, uiManager);

	this.btnSelect = new Button(640, 80, 'small', '#btn_return_select', 'carrier_command', 30);
	this.btnSelect.returnScreen = "SelectLevelScreen";
	this.btnSelect.events.onInputDown.add(uiManager.exitLevel, this.btnSelect);

	this.btnExit = new Button(720, 80, 'small', 'X', 'carrier_command', 30);
	this.btnExit.returnScreen = "TitleScreen";
	this.btnExit.events.onInputDown.add(uiManager.exitLevel, this.btnExit);
}

// Affiche la vie 
Hud.prototype.drawLife = function() {

	// Texte 
	this.lifeText = game.add.sprite(70, 64, 'txt_life');
	
	// Icônes
    for (var i = 0; i < 3; i++) {
    	this.life = game.add.sprite(200 + (40 * i), 64, 'life');
    	this.lifeIcons.push(this.life);
    }
}

// Retire un point de vie
Hud.prototype.removeLife = function() {

	this.lifeIcons[this.lifeIcons.length - 1].destroy();
	this.lifeIcons.splice(this.lifeIcons.length - 1, 1);
}

// Ajoute un point de vie
Hud.prototype.addLife = function() {

	this.life = game.add.sprite(200 + (40 * this.lifeIcons.length - 1), 64, 'life');
	this.lifeIcons.push(this.life);
}