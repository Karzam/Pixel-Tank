AchievementsManager = function() {

	// Liste des pop-up 
	this.popupList = [];

	// Achievements : nom, objectif, texte, points, 
	this.achievements = [
		this.enemiesRegularDestroyed3 = ["enemiesregulardestroyed3", 3, "3 red enemies destroyed !", 3],
		this.enemiesRegularDestroyed10 = ["enemiesregulardestroyed10", 10, "10 red enemies destroyed !", 6],
		this.enemiesRegularDestroyed30 = ["enemiesregulardestroyed30", 30, "30 red enemies destroyed !", 10],
		this.enemiesTripleDestroyed3 = ["enemiestripledestroyed3", 3, "3 blue enemies destroyed !", 3],
		this.enemiesTripleDestroyed10 = ["enemiestripledestroyed10", 10, "10 blue enemies destroyed !", 6],
		this.enemiesTripleDestroyed30 = ["enemiestripledestroyed30", 30, "30 blue enemies destroyed !", 10],
		this.enemiesSniperDestroyed3 = ["enemiessniperdestroyed3", 3, "3 green enemies destroyed !", 3],
		this.enemiesSniperDestroyed10 = ["enemiessniperdestroyed10", 10, "3 green enemies destroyed !", 6],
		this.enemiesSniperDestroyed30 = ["enemiessniperdestroyed30", 30, "3 green enemies destroyed !", 10],
		this.metersTraveled1000 = ["meterstraveled1000", 1000, "1000 meters traveled !", 3],
		this.metersTraveled3000 = ["meterstraveled3000", 3000, "3000 meters traveled !", 6],
		this.metersTraveled10000 = ["meterstraveled10000", 10000, "10000 meters traveled !", 10],
		this.bombsFired30 = ["bombsFired30", 30, "30 bombs fired !", 3],
		this.bombsFired100 = ["bombsFired100", 100, "100 bombs fired !", 6],
		this.bombsFired1000 = ["bombsFired500", 500, "1000 bombs fired !", 10],
		this.destroyed3Times = ["destroyed3Times", 3, "destroyed 3 times !", 3],
		this.destroyed10Times = ["destroyed10Times", 10, "destroyed 10 times !", 6],
		this.destroyed50Times = ["destroyed50Times", 50, "destroyed 50 times !", 10],
		this.bonusLifeUsed3 = ["bonuslifeused3", 3, "3 life bonus used !", 3],
		this.bonusLifeUsed10 = ["bonuslifeused10", 10, "10 life bonus used !", 6],
		this.bonusLifeUsed30 = ["bonuslifeused30", 30, "30 life bonus used !", 10],
		this.bonusShieldUsed3 = ["bonusshieldused3", 3, "3 shield bonus used !", 3],
		this.bonusShieldUsed10 = ["bonusshieldused10", 10, "10 shield bonus used !", 6],
		this.bonusShieldUsed30 = ["bonusshieldused30", 30, "30 shield bonus used !", 10],
		this.bonusSpeedUsed3 = ["bonusspeedused3", 3, "3 speed bonus used !", 3],
		this.bonusSpeedUsed10 = ["bonusspeedused10", 10, "10 speed bonus used !", 6],
		this.bonusSpeedUsed30 = ["bonusspeedused30", 30, "30 speed bonus used !", 10],
		this.bonusTimeidleUsed3 = ["bonustimeidleused3", 3, "3 time bonus used !", 3],
		this.bonusTimeidleUsed10 = ["bonustimeidleused10", 10, "10 time bonus used !", 6],
		this.bonusTimeidleUsed30 = ["bonustimeidleused30", 30, "30 time bonus used !", 10],
		this.bonusTimerbombUsed3 = ["bonustimerbombused3", 3, "3 bomb bonus used !", 3],
		this.bonusTimerbombUsed10 = ["bonustimerbombused10", 10, "10 bomb bonus used !", 6],
		this.bonusTimerbombUsed30 = ["bonustimerbombused30", 30, "30 bomb bonus used !", 10],
		this.desertBossDestroyed = ["desertbossdestroyed", 1, "desert boss destroyed !", 10],
		this.forestBossDestroyed = ["forestbossdestroyed", 1, "forest boss destroyed !", 10],
		this.snowBossDestroyed = ["snowbossdestroyed", 1, "snow boss destroyed !", 10],
		this.campaignFinished = ["campaignfinished", 1, "campaign finished !", 10],
		this.gameLaunched3Times = ["gamelaunched3times", 3, "game launched 3 times !", 3],
		this.gameLaunched10Times = ["gamelaunched10times", 10, "game launched 10 times !", 6],
		this.gameLaunched50Times = ["gamelaunched30times", 30, "game launched 30 times !", 10]
	];
}

AchievementsManager.prototype = Object.create(Phaser.Sprite.prototype);
AchievementsManager.prototype.constructor = AchievementsManager;

// Update 
AchievementsManager.prototype.update = function() {

	for (var i = 0; i < this.popupList.length; i++) {
		this.popupList[i].update();
	}
}

// Met à jour un achievement 
AchievementsManager.prototype.updateAchievement = function(achievement) {

	var save = new Save();

	if (save.getItem(achievement) == null) {
		save.setItem(achievement, 0);
	}
	else {
		save.setItem(achievement, parseInt(save.getItem(achievement)) + 1);
	}

	// Test si l'achievement est terminé 
	for (var i = 0; i < this.achievements.length; i++) {
		if (achievement == this.achievements[i][0]) {
			if (save.getItem(achievement) == this.achievements[i][1]) {
				this.popup = new AchievementPopUp(this.achievements[i][2], this.achievements[i][3]);
				this.popup.create();
			}
		}
	}
}