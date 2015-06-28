Tilemap = function(map) {

    for (var y = 0; y < (game.height - 64) / 32; y++) {

    	for (var x = 0; x < game.width / 32; x++) {
    		// Création de la tile 
    		switch(tilemaps[map]['map'][y][x]) {
    			// Blocs 
                case '#': 
    				var bloc = blocs.create(x * 32, (y * 32) + 64, 'bloc');
                    bloc.body.immovable = true;
                    blocs.enableBody = true;
                    blocs.physicsBodyType = Phaser.Physics.ARCADE;
    			break;
                // Tank 1 
                case '1': 
                    tank1 = new Tank('tank1', x * 32, (y * 32) + 64);
                break;
                // Ennemi "Regular" 
                case '+':
                    var enemy = new EnemyRegular(x * 32, (y * 32) + 64); 
                break;
                // Ennemi "Triple"
                case '$':
                    var enemy = new EnemyTriple(x * 32, (y * 32) + 64); 
                break;
                // Ennemi "Sniper"
                case '@':
                    var enemy = new EnemySniper(x * 32, (y * 32) + 64); 
                break;
                // Boss
                case 'B':
                    var bossSand = new BossSand(x * 32, (y * 32) + 64); 
                break;
    		}
    	}
    }
}

Tilemap.prototype = Object.create(Phaser.Sprite.prototype);
Tilemap.prototype.constructor = Tilemap;