// ------------------------------------------------------------------------------------------------
//                                              
//                                              Pixel Tank 
//  
//                                     Developed by Baptiste Ménard 
// 
// ------------------------------------------------------------------------------------------------

// Initialisation de Phaser 
var game = new Phaser.Game(800, 608, Phaser.CANVAS, 'window', { preload: preload, create: create, update: update });


// Chargement du jeu  
function preload() {

    // Chargement des assets 
    game.load.image('background', 'assets/sprites/ui/background.jpg');
    game.load.image('title', 'assets/sprites/ui/title.png');
    game.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    game.load.bitmapFont('carrier_command_black', 'assets/fonts/carrier_command_black.png', 'assets/fonts/carrier_command_black.xml');
    game.load.image('select_world', 'assets/sprites/ui/select_world.png');
    game.load.image('select_level', 'assets/sprites/ui/select_level.png');
    game.load.image('win', 'assets/sprites/ui/win.png');
    game.load.image('lose', 'assets/sprites/ui/lose.png');
    game.load.image('help', 'assets/sprites/ui/help.png');
    game.load.image('txtHelp', 'assets/sprites/ui/txtHelp.png');
    game.load.image('multiplayer', 'assets/sprites/ui/multiplayer.png');
    game.load.image('btn_settings', 'assets/sprites/ui/btn_settings.png');
    game.load.image('btn_shop', 'assets/sprites/ui/btn_shop.png');
    game.load.spritesheet('bg_button_large', 'assets/sprites/ui/bg_button_large.png', 241, 75, 2);
    game.load.spritesheet('bg_button_medium', 'assets/sprites/ui/bg_button_medium.png', 102, 102, 2);
    game.load.spritesheet('bg_button_small', 'assets/sprites/ui/bg_button_small.png', 62, 62, 2);
    game.load.spritesheet('btn_desert', 'assets/sprites/ui/btn_desert.png', 280, 480);
    game.load.spritesheet('btn_forest', 'assets/sprites/ui/btn_forest.png', 280, 480);
    game.load.spritesheet('btn_snow', 'assets/sprites/ui/btn_snow.png', 280, 480);
    game.load.image('btn_return_select', 'assets/sprites/ui/btn_returnSelect.png');
    game.load.image('btn_help', 'assets/sprites/ui/btn_help.png');
    game.load.image('btn_restart_level', 'assets/sprites/ui/btn_restartLevel.png');
    game.load.image('life', 'assets/sprites/ui/life.png');
    game.load.image('txt_life', 'assets/sprites/ui/txtLife.png');
    game.load.image('sight', 'assets/sprites/ui/sight.png');
    game.load.image('background_desert', 'assets/sprites/backgrounds/background_desert.png');
    game.load.image('background_forest', 'assets/sprites/backgrounds/background_forest.png');
    game.load.image('background_snow', 'assets/sprites/backgrounds/background_snow.png');
    game.load.image('bloc_desert', 'assets/sprites/level/bloc_desert.png'); 
    game.load.image('bloc_forest', 'assets/sprites/level/bloc_forest.png'); 
    game.load.image('bloc_snow', 'assets/sprites/level/bloc_snow.png'); 
    game.load.spritesheet('tank_base', 'assets/sprites/level/tank_base.png', 32, 32, 5);
    game.load.spritesheet('tank_gun', 'assets/sprites/level/tank_gun.png', 32, 32, 5);
    game.load.spritesheet('enemy_regular_base', 'assets/sprites/level/enemy_regular_base.png', 32, 32, 5);
    game.load.spritesheet('enemy_regular_gun', 'assets/sprites/level/enemy_regular_gun.png', 32, 32, 5);
    game.load.spritesheet('enemy_triple_base', 'assets/sprites/level/enemy_triple_base.png', 32, 32, 5);
    game.load.spritesheet('enemy_triple_gun', 'assets/sprites/level/enemy_triple_gun.png', 32, 32, 5);
    game.load.spritesheet('enemy_sniper_base', 'assets/sprites/level/enemy_sniper_base.png', 32, 32, 5);
    game.load.spritesheet('enemy_sniper_gun', 'assets/sprites/level/enemy_sniper_gun.png', 32, 32, 5);
    game.load.spritesheet('boss_sand_base', 'assets/sprites/level/boss_sand_base.png', 128, 48, 5);
    game.load.spritesheet('boss_sand_gun', 'assets/sprites/level/boss_sand_gun.png', 32, 32, 5);
    game.load.spritesheet('boss_snow_base', 'assets/sprites/level/boss_snow_base.png', 65, 60, 5);
    game.load.spritesheet('boss_snow_gun', 'assets/sprites/level/boss_snow_gun.png', 60, 60, 5);
    game.load.spritesheet('boss_forest_base', 'assets/sprites/level/boss_forest_base.png', 140, 48, 5);
    game.load.spritesheet('boss_forest_gun', 'assets/sprites/level/boss_forest_gun.png', 46, 21, 5);
    game.load.image('bomb', 'assets/sprites/level/bomb.png');
    game.load.spritesheet('explosion', 'assets/sprites/level/explosion.png', 42, 42, 7);
    game.load.image('smoke', 'assets/sprites/effects/smoke.png');
    game.load.image('bonus_timerbomb', 'assets/sprites/level/bonus_timerbomb.png');
    game.load.image('bonus_speed', 'assets/sprites/level/bonus_speed.png');
    game.load.image('bonus_life', 'assets/sprites/level/bonus_life.png');
    game.load.image('bonus_shield', 'assets/sprites/level/bonus_shield.png');
    game.load.image('shield', 'assets/sprites/level/shield.png');
    game.load.image('bonus_timeidle', 'assets/sprites/level/bonus_timeidle.png');
}

// Initialisation 
function create() {

    // Affichage du title screen 
    uiManager = new UIManager();
    uiManager.create();
}

// Rafraîchissement
function update() {

    if (uiManager != null) {

        uiManager.update();
    }

    if (gameManager != null) {

        gameManager.update();
    }
}