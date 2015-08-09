Save = function() {
	// Clés de stockage des variables 
	this.achevementsPoints = "achievementspoints";
	this.desertLevelsUnlocked = "desertlevelsunlocked";
	this.forestLevelsUnlocked = "forestlevelsunlocked";
	this.snowLevelsUnlocked = "snowlevelsunlocked";
	this.soundLevel = "soundlevel";
	this.currentSkin = "currentskin";
	this.enemiesRegularDestroyed3 = "enemiesregulardestroyed3";
	this.enemiesRegularDestroyed10 = "enemiesregulardestroyed10";
	this.enemiesRegularDestroyed30 = "enemiesregulardestroyed30";
	this.enemiesTripleDestroyed3 = "enemiestripledestroyed3";
	this.enemiesTripleDestroyed10 = "enemiestripledestroyed10";
	this.enemiesTripleDestroyed30 = "enemiestripledestroyed30";
	this.enemiesSniperDestroyed3 = "enemiessniperdestroyed3";
	this.enemiesSniperDestroyed10 = "enemiessniperdestroyed10";
	this.enemiesSniperDestroyed30 = "enemiessniperdestroyed30";
	this.metersTraveled1000 = "meterstraveled1000";
	this.metersTraveled3000 = "meterstraveled3000";
	this.metersTraveled10000 = "meterstraveled10000";
	this.bombsFired30 = "bombsFired30";
	this.bombsFired100 = "bombsFired100";
	this.bombsFired1000 = "bombsFired1000";
	this.destroyed3Times = "destroyed3Times";
	this.destroyed10Times = "destroyed10Times";
	this.destroyed50Times = "destroyed50Times";
	this.bonusLifeUsed3 = "bonuslifeused3";
	this.bonusLifeUsed10 = "bonuslifeused10";
	this.bonusLifeUsed30 = "bonuslifeused30";
	this.bonusShieldUsed3 = "bonusshieldused3";
	this.bonusShieldUsed10 = "bonusshieldused10";
	this.bonusShieldUsed30 = "bonusshieldused30";
	this.bonusSpeedUsed3 = "bonusspeedused3";
	this.bonusSpeedUsed10 = "bonusspeedused10";
	this.bonusSpeedUsed30 = "bonusspeedused30";
	this.bonusTimeidleUsed3 = "bonustimeidleused3";
	this.bonusTimeidleUsed10 = "bonustimeidleused10";
	this.bonusTimeidleUsed30 = "bonustimeidleused30";
	this.bonusTimerbombUsed3 = "bonustimerbombused3";
	this.bonusTimerbombUsed10 = "bonustimerbombused10";
	this.bonusTimerbombUsed30 = "bonustimerbombused30";
	this.desertBossDestroyed = "desertbossdestroyed";
	this.forestBossDestroyed = "forestbossdestroyed";
	this.snowBossDestroyed = "snowbossdestroyed";
	this.campaignFinished = "campaignfinished";
	this.gameLaunched3Times = "gamelaunched3times";
	this.gameLaunched10Times = "gamelaunched10times";
	this.gameLaunched50Times = "gamelaunched50times";
}

Save.prototype = Object.create(Phaser.Sprite.prototype);
Save.prototype.constructor = Save;

// Update de variables
Save.prototype.setItem = function(key, value) {

	localStorage.setItem(key, value);
}

// Récupère une variable 
Save.prototype.getItem = function(key) {

	return localStorage.getItem(key);
}