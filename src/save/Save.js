Save = function() {
	// Clés de stockage des variables 
	this.levelsUnlocked = "levelsunlocked";
	this.soundLevel = "soundlevel";
	this.currentSkin = "currentskin";
	this.achievmentsUnlocked = [
		this.3enemiesRegularDestroyed = "3enemiesregulardestroyed";
		this.10enemiesRegularDestroyed = "10enemiesregulardestroyed";
		this.30enemiesRegularDestroyed = "30enemiesregulardestroyed";
		this.3enemiesTripleDestroyed = "3enemiestripledestroyed";
		this.10enemiesTripleDestroyed = "10enemiestripledestroyed";
		this.30enemiesTripleDestroyed = "30enemiestripledestroyed";
		this.3enemiesSniperDestroyed = "3enemiessniperdestroyed";
		this.10enemiesSniperDestroyed = "10enemiessniperdestroyed";
		this.30enemiesSniperDestroyed = "30enemiessniperdestroyed";
		this.1000MetersTraveled = "this.1000meterstraveled";
		this.3000MetersTraveled = "this.3000meterstraveled";
		this.10000MetersTraveled = "this.10000meterstraveled";
		this.destroyed3Times = "this.destroyed3Times";
		this.destroyed10Times = "this.destroyed10Times";
		this.destroyed50Times = "this.destroyed50Times";
		this.3BonusLifeUsed = "3bonuslifeused";
		this.10BonusLifeUsed = "10bonuslifeused";
		this.30BonusLifeUsed = "30bonuslifeused";
		this.3BonusShieldUsed = "3bonusshieldused";
		this.10BonusShieldUsed = "10bonusshieldused";
		this.30BonusShieldUsed = "30bonusshieldused";
		this.3BonusSpeedUsed = "3bonusspeedused";
		this.10BonusSpeedUsed = "10bonusspeedused";
		this.30BonusSpeedUsed = "30bonusspeedused";
		this.3BonusTimeidleUsed = "3bonustimeidleused";
		this.10BonusTimeidleUsed = "10bonustimeidleused";
		this.30BonusTimeidleUsed = "30bonustimeidleused";
		this.3BonusTimerbombUsed = "3bonustimerbombused";
		this.10BonusTimerbombUsed = "10bonustimerbombused";
		this.30BonusTimerbombUsed = "30bonustimerbombused";
		this.desertBossDestroyed = "desertbossdestroyed";
		this.forestBossDestroyed = "desertbossdestroyed";
		this.snowBossDestroyed = "desertbossdestroyed";
		this.campaignFinished = "campaignfinished";
		this.gameLaunched1Time = "gamelaunched1time";
		this.gameLaunched3Times = "gamelaunched3times";
		this.gameLaunched10Times = "gamelaunched10times";
		this.gameLaunched50Times = "gamelaunched50times";
	];
	this.skinsUnlocked = [

	];
}

Save.prototype = Object.create(Phaser.Sprite.prototype);
Save.prototype.constructor = Save;

// Update de variables
Save.prototype.updateItem = function(key, value) {

	localStorage.setItem(key, value);
}

// Récupère une variable 
Save.prototype.getItem = function(key) {

	return localStorage.getItem(key);
}