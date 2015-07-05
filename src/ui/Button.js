Button = function(x, y, bg, content, font, size) {
	Phaser.Sprite.call(this, game, x, y, "bg_button_" + bg);
	this.anchor.setTo(0.5, 0.5);
	this.x = x;
	this.y = y;
	// Paramètres du contenu 
	this.font = font;
	this.textSize = size;
	this.content = content;
	// Animations 
	this.animations.add('over', [1]);
	this.animations.add('static', [0]); 
	this.size = size;
	// Input 
	this.inputEnabled = true;
	this.events.onInputOver.add(this.onMouseOver, this);
	this.events.onInputOut.add(this.onMouseOut, this);
	game.add.existing(this);
	// Affiche le texte ou l'image sélectionnée 
	this.drawContent();
}

Button.prototype = Object.create(Phaser.Sprite.prototype);
Button.prototype.constructor = Button;

Button.prototype.drawContent = function() {

	// Image
	if (this.content[0] == "#")  {
		this.image = game.add.sprite(this.x, this.y, this.content.slice(1, this.content.length));
		this.image.width = this.size;
		this.image.height = this.size;
		this.image.anchor.setTo(0.5, 0.5);
	}
	// Texte 
	else {
		this.displayedText = game.add.bitmapText(this.x, this.y, this.font, this.content, this.textSize);
    	this.displayedText.anchor.setTo(0.5, 0.5);
	}
}

// Bouton over 
Button.prototype.onMouseOver = function() {

	this.play('over', 0, true);
}

// Bouton out
Button.prototype.onMouseOut = function() {

	this.play('static', 0, true);
}