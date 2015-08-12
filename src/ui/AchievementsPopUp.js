AchievementPopUp = function(text, score) {

	achievementManager.popupList.push(this);
	// Liste des sprites du screen 
	this.list = [];
	// Texte 
	this.achievementText = text;
	// Score 
	this.achievementScore = score;
	// Temps d'apparition 
	this.appearTimer = 0;
}

AchievementPopUp.prototype = Object.create(Phaser.Sprite.prototype);
AchievementPopUp.prototype.constructor = AchievementPopUp;

AchievementPopUp.prototype.create = function() {
	// Background 
	this.drawBackground();
	// Texte 
	this.drawText();
}

// Update 
AchievementPopUp.prototype.update = function() {

	this.appearTimer++;

	if (this.appearTimer >= 100 && this.appearTimer < 400) {
		this.appear();
	}
	else if (this.appearTimer >= 400) {
		this.disappear();
	}
}

// Background 
AchievementPopUp.prototype.drawBackground = function() {

	this.background = game.add.sprite(480, 620, 'popup');
	this.list.push(this.background);
}

// Texte 
AchievementPopUp.prototype.drawText = function() {

	this.title = game.add.bitmapText(this.background.x + 30, this.background.y + 40, 'carrier_command', this.achievementText, 10);
	this.list.push(this.title);

	this.points = game.add.bitmapText(this.background.x + 130, this.background.y + 80, 'carrier_command', '+' + this.achievementScore, 16);
	this.list.push(this.points);
}

// Apparition 
AchievementPopUp.prototype.appear = function() {

	if (this.list[0].y > 480) {
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].y -= 3;
		}
	}
}

// Disparition 
AchievementPopUp.prototype.disappear = function() {

	if (this.list[0].y < 630) {
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].y += 3;
		}
	}
	else {
		for (var i = 0; i < this.list.length; i++) {
			this.list[i].destroy();
		}
		achievementManager.popupList.splice(achievementManager.popupList.indexOf(this), 1);
	}
}