Hud = function() {
	// Background 
	this.drawBackground();
	// Textes de vie / bonus
	this.drawInformations();
	// Boutons de navigation
	this.drawButtons();
	// Barre de vie 
	this.drawLife();
}

Hud.prototype = Object.create(Phaser.Sprite.prototype);
Hud.prototype.constructor = Hud;

// Affiche le background 
Hud.prototype.drawBackground = function() {

	this.background = game.add.sprite(0, 0, 'bgHud');
}

// Affiche les textes de vie / bonus 
Hud.prototype.drawInformations = function() {

	// Vie 
	this.life = game.add.sprite(40, 20, 'txtLife');
	// Bonus
	this.bonus = game.add.sprite(300, 20, 'txtBonus');
}

// Affiche les boutons de navigation
Hud.prototype.drawButtons = function() {

	this.btnHelp = new Button(560, 32, 'small', '#btnHelp', 'carrier_command', 30);
	this.btnHelp.events.onInputDown.add(uiManager.displayHelp, uiManager);

	this.btnSelect = new Button(640, 32, 'small', '#btnReturnSelect', 'carrier_command', 30);
	this.btnSelect.returnScreen = "SelectLevelScreen";
	this.btnSelect.events.onInputDown.add(uiManager.exitLevel, this.btnSelect);

	this.btnExit = new Button(720, 32, 'small', 'X', 'carrier_command', 30);
	this.btnExit.returnScreen = "TitleScreen";
	this.btnExit.events.onInputDown.add(uiManager.exitLevel, this.btnExit);
}

// Affiche la barre de vie 
Hud.prototype.drawLife = function() {

	this.life = game.add.sprite(120, 20, 'life');
	// Animations
    this.life.animations.add('life1', [6]);
    this.life.animations.add('life2', [5]);
    this.life.animations.add('life3', [4]);
    this.life.animations.add('life4', [3]);
    this.life.animations.add('life5', [2]);
    this.life.animations.add('life6', [1]);
    this.life.animations.add('life7', [0]);
}