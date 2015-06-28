// ------------------------------------------------------------------------------------------------
//                                              
//                                              Pixel Tank 
//  
//                                     Developed by Baptiste Ménard 
// 
// ------------------------------------------------------------------------------------------------

// Initialisation de Phaser 
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'window', { preload: preload, create: create, update: update });


// Chargement des assets 
function preload() {
    game.load.image('title', 'assets/title.jpg');
    game.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    game.load.bitmapFont('carrier_command_black', 'assets/fonts/carrier_command_black.png', 'assets/fonts/carrier_command_black.xml');
    game.load.image('selectWorld', 'assets/selectWorld.jpg');
    game.load.image('selectLevel', 'assets/selectLevel.jpg');
    game.load.image('win', 'assets/win.jpg');
    game.load.image('lose', 'assets/lose.jpg');
    game.load.image('help', 'assets/help.jpg');
    game.load.image('multiplayer', 'assets/multiplayer.jpg');
    game.load.image('btnSettings', 'assets/btnSettings.png');
    game.load.image('btnShop', 'assets/btnShop.png');
    game.load.spritesheet('bg_button_large', 'assets/bg_button_large.png', 241, 75, 2);
    game.load.spritesheet('bg_button_medium', 'assets/bg_button_medium.png', 102, 102, 2);
    game.load.spritesheet('bg_button_small', 'assets/bg_button_small.png', 62, 62, 2);
    game.load.image('btnReturnSelect', 'assets/btnReturnSelect.png');
    game.load.image('btnHelp', 'assets/btnHelp.png');
    game.load.image('btnRestartLevel', 'assets/btnRestartLevel.png');
    game.load.image('bgHud', 'assets/hud.jpg');
    game.load.spritesheet('life', 'assets/life.png', 132, 30, 8);
    game.load.image('txtLife', 'assets/txtLife.png');
    game.load.image('txtBonus', 'assets/txtBonus.png');
    game.load.image('backgroundDesert', 'assets/backgroundDesert.png');
    game.load.image('bloc', 'assets/bloc.png'); 
    game.load.spritesheet('tank1', 'assets/tank1.png', 32, 32, 5);
    game.load.spritesheet('enemyRegular_base', 'assets/enemyRegular_base.png', 32, 32, 5);
    game.load.spritesheet('enemyRegular_gun', 'assets/enemyRegular_gun.png', 32, 32, 5);
    game.load.spritesheet('enemyTriple_base', 'assets/enemyTriple_base.png', 32, 32, 5);
    game.load.spritesheet('enemyTriple_gun', 'assets/enemyTriple_gun.png', 32, 32, 5);
    game.load.spritesheet('enemySniper_base', 'assets/enemySniper_base.png', 32, 32, 5);
    game.load.spritesheet('enemySniper_gun', 'assets/enemySniper_gun.png', 32, 32, 5);
    game.load.spritesheet('bossSand_base', 'assets/bossSand_base.png', 128, 48, 5);
    game.load.spritesheet('bossSand_gun', 'assets/bossSand_gun.png', 32, 32, 5);
    game.load.image('bomb', 'assets/bomb.png');
    game.load.spritesheet('explosion', 'assets/explosion.png', 42, 42, 7);
    game.load.image('bonusTimerBomb', 'assets/bonusTimerBomb.png');
    game.load.image('bonusSpeed', 'assets/bonusSpeed.png');
    game.load.image('bonusLife', 'assets/bonusLife.png');
    game.load.image('bonusShield', 'assets/bonusShield.png');
    game.load.image('shield', 'assets/shield.png');
    game.load.image('bonusTimeIdle', 'assets/bonusTimeIdle.png');
}

// Initialisation 
function create() {

    // Affichage du title screen 
    uiManager = new UIManager();
    uiManager.create();
}

// Rafraîchissement
function update() {

    if (gameManager != null) {
        gameManager.update();
    }
}