var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

//States
var startState = true;
var startScreenIMG = document.getElementById("startScreen");
var introState = false;
//var introScreenIMG = document.getElementById("introScreen");
var gameState = false;

var intro1 = new Image();
intro1.src = 'img/intro1.png';
var intro2 = new Image();
intro2.src = 'img/intro2.png';
var intro3 = new Image();
intro3.src = 'img/intro3.png';
var intro4 = new Image();
intro4.src = 'img/intro4.png';
var intro5 = new Image();
intro5.src = 'img/intro5.png';
var intro6 = new Image();
intro6.src = 'img/intro6.png';
var introText = document.getElementById("introText")

var startButton = document.getElementById("startButton");

// De zwaartekracht blijft hetzelfde. Hoe hoger de waarde, hoe sneller de speler zou vallen

const gravity = 0.5;
var playerStands = false;
const attackRange = 0;

var ground = new Image();
ground.src = 'img/Ground.png'


var backGround = new Image();
backGround.src = 'img/Background.png'
var foreGround = new Image();
foreGround.src = 'img/Foreground.png'
var farBackGround = new Image();
farBackGround.src = 'img/FarBackground.png'


var RatLeft = new Image();
RatLeft.src = 'img/RatLeft.png'
var RatRight = new Image();
RatRight.src = 'img/RatRight.png'
var enemyEncounter = 0;


var enemy2 = new Image();
enemy2.src = 'img/Enemy2.png'
var enemyprojectile = new Image();
enemyprojectile.src = 'img/EnemyProjectile.png'
var enemyprojectileright = new Image();
enemyprojectileright.src = 'img/EnemyProjectileRight.png'

var enemyLooptRechts = false;
var enemyLoopTimer = 3000;

var gear = new Image();
gear.src = 'img/CogSpinning.png'

var gearAmount = 0;
var gearLogo = document.getElementById("gearLogo");
var gearAmountTekst = document.getElementById("gearAmountTekst");

var blocks = new Image();
blocks.src = 'img/Block.png';

//Speler sprites
var SpriteStandRight = new Image();
SpriteStandRight.src = 'img/SpriteStandRight.png'
var SpriteStandLeft = new Image();
SpriteStandLeft.src = 'img/SpriteStandLeft.png'
var SpriteAttackRight = new Image();
SpriteAttackRight.src = 'img/SpriteAttackRight.png'
var SpriteAttackLeft = new Image();
SpriteAttackLeft.src = 'img/SpriteAttackLeft.png'
var SpriteRunRight = new Image();
SpriteRunRight.src = 'img/SpriteRunRight.png'
var SpriteRunLeft = new Image();
SpriteRunLeft.src = 'img/SpriteRunLeft.png'

var UIInformation = document.getElementById("UIInformation");

var healthIcon = document.getElementById("healthIcon");
var healthBar = document.getElementById("healthBar");
var healthBarWidth = 200;
var healthBarChange = 20;
var damageRat = 30;
var damageProjectile = 45;
var ratsKilled = 0;
var soupsKilled = 0;
var shotCounter = 0;


var manaBar = document.getElementById("manaBar");
var manaIcon = document.getElementById("manaIcon");

var hpPotion = new Image();
hpPotion.src = 'img/hpPotion.png';

var extraPotion = new Image();
extraPotion.src = 'img/hpUpPotion.png';

var upgradePotion = new Image();
upgradePotion.src = 'img/UpgradePotion.png';
var playerHasUpgrade = false;

var swordUpgradeLinks = new Image();
swordUpgradeLinks.src = 'img/SwordUpgradeLinks.png';
var swordUpgradeRechts = new Image();
swordUpgradeRechts.src = 'img/SwordUpgradeRechts.png';

var silhouette = new Image();
silhouette.src = 'img/Silhouette.png'
var silhouetteCounter = 0


//Spike plants
var spikeHorizontal = new Image();
spikeHorizontal.src = 'img/PlantHorizontal.png';
var spikeVertical = new Image();
spikeVertical.src = 'img/PlantVertical.png';
var spikeBL = new Image();
spikeBL.src = 'img/PlantBL.png';
var spikeBR = new Image();
spikeBR.src = 'img/PlantBR.png';
var spikeOL = new Image();
spikeOL.src = 'img/PlantOL.png';
var spikeOR = new Image();
spikeOR.src = 'img/PlantOR.png';

var textBlock = document.getElementById("textBlock");
var gameText1 = document.getElementById("gameText1");
var gameText2 = document.getElementById("gameText2");

//Endscreen
var endScreen = document.getElementById("endScreen")
var gearsEnd = document.getElementById("gearsEnd")
var gearsScore = document.getElementById("gearsCollectedEnd")
var ratsEnd = document.getElementById("ratsEnd")
var ratsScore = document.getElementById("ratsKilledEnd")
var soupsEnd = document.getElementById("soupsEnd")
var soupsScore = document.getElementById("soupsKilledEnd")
var endState = false;

//SFX
var beamToEarthSFX = new Audio();
beamToEarthSFX.src = 'sfx/beamToEarth.mp3';
beamToEarthSFX.volume = 0.5;
var levelTheme = new Audio();
levelTheme.src = 'sfx/LevelTheme.mp3';
levelTheme.volume = 0.2;
levelTheme.loop = true;
var gearPickupSFX = new Audio();
gearPickupSFX.src = 'sfx/gearPickup.mp3';
gearPickupSFX.volume = 0.2;

var ratDeathSFX = new Audio();
ratDeathSFX.src = 'sfx/ratDeath.mp3';

var soupDeathSFX = new Audio();
soupDeathSFX.src = 'sfx/soupDeath.mp3';
soupDeathSFX.volume = 0.2;


var swordKillSFX = new Audio();
swordKillSFX.src = 'sfx/swordKill.mp3';
var swordAttackSFX = new Audio();
swordAttackSFX.src = 'sfx/swordAttack.mp3';
var swordProjectileSFX = new Audio();
swordProjectileSFX.src = 'sfx/swordProjectile.mp3';
var potionSFX = new Audio();
potionSFX.src = 'sfx/potionPickup.mp3';
var jumpSFX = new Audio();
jumpSFX.src = 'sfx/jump.mp3';
var jumpscareSFX = new Audio();
jumpscareSFX.src = 'sfx/jumpscare.mp3';

var gotHit1 = new Audio();
gotHit1.src = 'sfx/gotHit.mp3';
var gotHit2 = new Audio();
gotHit2.src = 'sfx/gotHit2.mp3';
var gotHit3 = new Audio();
gotHit3.src = 'sfx/gotHit3.mp3';
var gotHit4 = new Audio();
gotHit4.src = 'sfx/gotHit4.mp3';
var hitRandom;

class Player {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.speed = 7
        this.width = 66
        this.height = 78
        this.sprites = {
            stand: {
                left: SpriteStandLeft,
                right: SpriteStandRight,
                cropWidth: 66,
                cropHeight: 78,
                width: 66,
                height: 78,
                delay: 20,
            },
            attack: {
                left: SpriteAttackLeft,
                right: SpriteAttackRight,
                cropWidth: 137,
                cropHeight: 74,
                width: 137,
                height: 78,
                delay: 5,
            },
            run: {
                left: SpriteRunLeft,
                right: SpriteRunRight,
                cropWidth: 87,
                cropHeight: 80,
                width: 87,
                height: 78,
                delay: 5,
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = this.sprites.stand.cropWidth
        this.currentCropHeight = this.sprites.stand.cropHeight

        this.frames = 0
        this.frameDelay = this.sprites.stand.delay; // Number of updates to wait before changing frames
        this.currentDelay = 0; // Current delay count
        this.attack = {
            active: false
        }
    }

    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            this.currentCropHeight,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.currentDelay++;

        if (this.currentDelay >= this.frameDelay) {
            this.currentDelay = 0;
            this.frames++;
            if (this.frames >= 2 && this.currentSprite === this.sprites.stand.right ||
                this.frames >= 2 && this.currentSprite === this.sprites.stand.left)
                this.frames = 0;
            else if (this.frames >= 5 && this.currentSprite === this.sprites.attack.right)
                this.frames = 0;
            else if (this.frames >= 5 && this.currentSprite === this.sprites.attack.left)
                this.frames = 0;
            else if (this.frames >= 6 && this.currentSprite === this.sprites.run.left)
                this.frames = 0;
            else if (this.frames >= 6 && this.currentSprite === this.sprites.run.right)
                this.frames = 0;

        }

        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <=
            canvas.height)
            this.velocity.y += gravity //gravity zorgt ervoor dat de speler steeds sneller valt
    }
}



class Rat {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: -1.5,
            y: 0,
        }
        this.width = 109
        this.height = 32

        this.sprites = {
            run: {
                left: RatLeft,
                right: RatRight,
            }
        }

        this.frames = 0;
        this.frameDelay = 5; // Number of updates to wait before changing frames
        this.currentDelay = 0; // Current delay count
        this.currentSprite = this.sprites.run.left
    }

    draw() {
        c.drawImage(
            this.currentSprite,
            109 * this.frames,
            0,
            109,
            32,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.currentDelay++;

        if (this.currentDelay >= this.frameDelay) {
            this.currentDelay = 0;

            this.frames++
            if (this.frames >= 3) {
                this.frames = 0
            }
        }
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

    }
}

class Soup {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = 81
        this.height = 72

        this.sprites = {
            run: {
                left: enemy2,
                right: enemy2,
            }
        }

        this.frames = 0;
        this.frameDelay = 10.9; // Number of updates to wait before changing frames
        this.currentDelay = 0; // Current delay count
        this.currentSprite = this.sprites.run.left
    }

    draw() {
        c.drawImage(
            this.currentSprite,
            54 * this.frames,
            0,
            54,
            48,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.currentDelay++;

        if (this.currentDelay >= this.frameDelay) {
            this.currentDelay = 0;

            this.frames++
            if (this.frames >= 11) {
                this.frames = 0
            }
        }
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

    }
}

class EnemyProjectile {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: -5,
            y: 0,
        }
        this.width = enemyprojectile.width
        this.height = enemyprojectile.height

    }

    draw() {
        c.drawImage(
            enemyprojectile,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

    }
}

class EnemyProjectileRight {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 5,
            y: 0,
        }
        this.width = enemyprojectile.width
        this.height = enemyprojectile.height

    }

    draw() {
        c.drawImage(
            enemyprojectileright,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

    }
}





class Silhouette {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 8,
            y: 0,
        }
        this.width = 66
        this.height = 83

        this.sprites = {
            run: {
                left: silhouette,
                right: silhouette,
            }
        }

        this.frames = 0;
        this.frameDelay = 10; // Number of updates to wait before changing frames
        this.currentDelay = 0; // Current delay count
        this.currentSprite = this.sprites.run.left
    }

    draw() {
        c.drawImage(
            this.currentSprite,
            66 * this.frames,
            0,
            66,
            83,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.currentDelay++;

        if (this.currentDelay >= this.frameDelay) {
            this.currentDelay = 0;

            this.frames++
            if (this.frames >= 6) {
                this.frames = 0
            }
        }
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.velocity.y = player.velocity.y
    }
}

class Platform {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = 20000
        this.height = ground.height
    }

    draw() {
        c.drawImage(ground, this.position.x, this.position.y, this.width, this.height)
    }
}


class BackGround {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = backGround.width
        this.height = backGround.height
    }

    draw() {
        c.drawImage(backGround, this.position.x, this.position.y)
    }
}

class ForeGround {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = foreGround.width
        this.height = foreGround.height
    }

    draw() {
        c.drawImage(foreGround, this.position.x, this.position.y)
    }
}

class FarBackGround {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = farBackGround.width
        this.height = farBackGround.height
    }

    draw() {
        c.drawImage(farBackGround, this.position.x, this.position.y)
    }
}

class HealthPotion {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = hpPotion.width;
        this.height = hpPotion.height;
    }
    draw() {
        c.drawImage(hpPotion, this.position.x, this.position.y);
    }
}

class ExtraPotion {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = extraPotion.width;
        this.height = extraPotion.height;
    }
    draw() {
        c.drawImage(extraPotion, this.position.x, this.position.y);
    }
}

class UpgradePotion {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = upgradePotion.width;
        this.height = upgradePotion.height;
    }
    draw() {
        c.drawImage(upgradePotion, this.position.x, this.position.y);
    }
}

class SwordUpgradeRechts {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 8,
            y: 0,
        }
        this.width = swordUpgradeRechts.width
        this.height = swordUpgradeRechts.height
    }



    draw() {
        c.drawImage(
            swordUpgradeRechts,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

    }
}


class SwordUpgradeLinks {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: -8,
            y: 0,
        }
        this.width = swordUpgradeLinks.width
        this.height = swordUpgradeLinks.height
    }

    draw() {
        c.drawImage(
            swordUpgradeLinks,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

    }
}


class Gear {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.width = 35;
        this.height = 35;
        this.frames = 0;
        this.frameDelay = 8; // Number of updates to wait before changing frames
        this.currentDelay = 0; // Current delay count
    }
    draw() {
        c.drawImage(
            gear,
            35 * this.frames,
            0,
            35,
            35,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        );
    }

    update() {
        this.currentDelay++;

        if (this.currentDelay >= this.frameDelay) {
            this.currentDelay = 0;

            this.frames++
            if (this.frames >= 6) {
                this.frames = 0
            }
        }

        this.draw()
    }
}

class SpikeHorizontal {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.width = spikeHorizontal.width;
        this.height = spikeHorizontal.height;
    }
    draw() {
        c.drawImage(spikeHorizontal, this.position.x, this.position.y, this.width, this.height);
    }
}

class SpikeVertical {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.width = spikeVertical.width;
        this.height = spikeVertical.height;
    }
    draw() {
        c.drawImage(spikeVertical, this.position.x, this.position.y, this.width, this.height);
    }
}

class SpikeBL {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.width = spikeBL.width;
        this.height = spikeBL.height;
    }
    draw() {
        c.drawImage(spikeBL, this.position.x, this.position.y, this.width, this.height);
    }
}

class SpikeBR {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.width = spikeBR.width;
        this.height = spikeBR.height;
    }
    draw() {
        c.drawImage(spikeBR, this.position.x, this.position.y, this.width, this.height);
    }
}

class SpikeOL {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.width = spikeOL.width;
        this.height = spikeOL.height;
    }
    draw() {
        c.drawImage(spikeOL, this.position.x, this.position.y, this.width, this.height);
    }
}

class SpikeOR {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.width = spikeOR.width;
        this.height = spikeOR.height;
    }
    draw() {
        c.drawImage(spikeOR, this.position.x, this.position.y, this.width, this.height);
    }
}

class Brick {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.width = blocks.width;
        this.height = blocks.height;
    }
    draw() {
        c.drawImage(blocks, this.position.x, this.position.y);
    }
}



// Deze vars zijn leeg want ze worden later ingevuld bij de functie 'init', deze functie wordt aan het begin
// van het spel geladen en wanneer het spel reset wordt (bv. waneer de speler in een gat valt)

// De keys zijn const want die veranderen niet. Je gaat niet ineens andere toetsen in moeten drukken

var obstacles = []

var background = []

var farbackground = []

var foreground = []

var player = new Player({
    x: 100,
    y: 2000
})

var enemies = []

var soups = []

var silhouettes = []

var platforms = []

var healthpotions = [];

var extrapotions = [];

var upgradepotions = [];

var gears = [];

var spikes = [];

var swordprojectile = [];

var enemyprojectiles = [];


var keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

var scrollOffset = 0
var lastKey = 'right'



function init() {
    introState = false;
    gameState = true;
    beamToEarthSFX.play();
    levelTheme.play();

    background = [
        new BackGround({
            x: 0,
            y: 0,
        }),
    ]

    farbackground = [
        new FarBackGround({
            x: 0,
            y: 0,
        }),
    ]

    foreground = [
        new ForeGround({
            x: 0,
            y: 0,
        }),
    ]

    player = new Player({
        x: 100,
        y: 300
    })

    enemies = [
        new Rat({
            x: 1700,
            y: 418.5
        }),

        new Rat({
            x: 3100,
            y: 418.5
        }),
        new Rat({
            x: 3300,
            y: 418.5
        }),
        new Rat({
            x: 4300,
            y: 418.5
        }),
        new Rat({
            x: 5800,
            y: 418.5
        }),
        new Rat({
            x: 6000,
            y: 418.5
        }),
        new Rat({
            x: 5600,
            y: 418.5
        }),
        new Rat({
            x: 7400,
            y: 418.5
        }),
        new Rat({
            x: 7500,
            y: 418.5
        }),
        new Rat({
            x: 7600,
            y: 418.5
        }),
        new Rat({
            x: 7700,
            y: 418.5
        }),
        new Rat({
            x: 7800,
            y: 418.5
        }),
    ]

    soups = [
        new Soup({
            x: 7830,
            y: 179.5
        })
    ]

    silhouettes = []

    healthpotions = [
        new HealthPotion({
            x: 2100,
            y: 180
        }),
        new HealthPotion({
            x: 5000,
            y: 390
        })
    ]

    extrapotions = [
        new ExtraPotion({
            x: 3930,
            y: 120
        })
    ]

    upgradepotions = [
        new UpgradePotion({
            x: 3770,
            y: 390
        }),
        new UpgradePotion({
            x: 5240,
            y: 180
        }),
    ]


    gears = [
        new Gear({
            x: 1000,
            y: 250
        }),
        new Gear({
            x: 1050,
            y: 250
        }),
        new Gear({
            x: 1100,
            y: 250
        }),
        new Gear({
            x: 2000,
            y: 400
        }),
        new Gear({
            x: 2100,
            y: 400
        }),
        new Gear({
            x: 2200,
            y: 400
        }),

        new Gear({
            x: 3650,
            y: 400
        }),
        new Gear({
            x: 3700,
            y: 400
        }),

        new Gear({
            x: 3850,
            y: 400
        }),
        new Gear({
            x: 3900,
            y: 400
        }),

        new Gear({
            x: 4475,
            y: 280
        }),
        new Gear({
            x: 4525,
            y: 250
        }),
        new Gear({
            x: 4575,
            y: 250
        }),
        new Gear({
            x: 4625,
            y: 250
        }),
        new Gear({
            x: 4675,
            y: 280
        }),

        new Gear({
            x: 5600,
            y: 100
        }),
        new Gear({
            x: 5670,
            y: 100
        }),
        new Gear({
            x: 5740,
            y: 100
        }),

        new Gear({
            x: 6168,
            y: 200
        }),
        new Gear({
            x: 6218,
            y: 200
        }),
        new Gear({
            x: 6268,
            y: 200
        }),

        new Gear({
            x: 6655,
            y: 230
        }),
        new Gear({
            x: 6700,
            y: 230
        }),

        new Gear({
            x: 7300,
            y: 230
        }),
        new Gear({
            x: 7300,
            y: 280
        }),
        new Gear({
            x: 7300,
            y: 330
        }),



        new Gear({
            x: 7600,
            y: 190
        }),
        new Gear({
            x: 7640,
            y: 190
        }),
        new Gear({
            x: 7710,
            y: 190
        }),
        new Gear({
            x: 7750,
            y: 190
        }),


    ]

    spikes = [
        new SpikeOR({
            x: 876,
            y: 523
        }),
        new SpikeHorizontal({
            x: 930,
            y: 520
        }),
        new SpikeBL({
            x: 999,
            y: 511
        }),
        new SpikeVertical({
            x: 1005,
            y: 442
        }),
        new SpikeOR({
            x: 1010,
            y: 386
        }),
        new SpikeOL({
            x: 1065,
            y: 389
        }),
        new SpikeVertical({
            x: 1074,
            y: 442
        }),
        new SpikeVertical({
            x: 1074,
            y: 510
        }),


        new SpikeOR({
            x: 4376,
            y: 523
        }),
        new SpikeHorizontal({
            x: 4430,
            y: 520
        }),
        new SpikeBL({
            x: 4499,
            y: 511
        }),
        new SpikeVertical({
            x: 4505,
            y: 442
        }),
        new SpikeOR({
            x: 4510,
            y: 386
        }),
        new SpikeHorizontal({
            x: 4565,
            y: 384
        }),
        new SpikeOL({
            x: 4634,
            y: 389
        }),
        new SpikeVertical({
            x: 4643,
            y: 442
        }),
        new SpikeVertical({
            x: 4643,
            y: 510
        }),


        new SpikeVertical({
            x: 6005,
            y: 437
        }),
        new SpikeOR({
            x: 6010,
            y: 381
        }),
        new SpikeHorizontal({
            x: 6065,
            y: 379
        }),
        new SpikeHorizontal({
            x: 6134,
            y: 379
        }),
        new SpikeHorizontal({
            x: 6203,
            y: 379
        }),
        new SpikeHorizontal({
            x: 6272,
            y: 379
        }),
        new SpikeHorizontal({
            x: 6341,
            y: 379
        }),
        new SpikeHorizontal({
            x: 6410,
            y: 379
        }),
        new SpikeHorizontal({
            x: 6479,
            y: 379
        }),
        new SpikeOL({
            x: 6548,
            y: 384
        }),
        new SpikeBR({
            x: 6558,
            y: 438
        }),
        new SpikeHorizontal({
            x: 6616,
            y: 446
        }),
        new SpikeHorizontal({
            x: 6685,
            y: 446
        }),
        new SpikeHorizontal({
            x: 6754,
            y: 446
        }),
        new SpikeHorizontal({
            x: 6823,
            y: 446
        }),
        new SpikeHorizontal({
            x: 6892,
            y: 446
        }),
        new SpikeHorizontal({
            x: 6961,
            y: 446
        }),
        new SpikeOL({
            x: 7030,
            y: 451
        }),
        new SpikeVertical({
            x: 7036,
            y: 506
        }),

    ]

    platforms = [
        new Platform({
            x: -30,
            y: 450
        }),
    ]

    obstacles = [
        new Brick({
            x: 500,
            y: 250
        }),
        new Brick({
            x: 560,
            y: 250
        }),
        new Brick({
            x: 620,
            y: 250
        }),
        new Brick({
            x: 680,
            y: 250
        }),
        new Brick({
            x: 740,
            y: 250
        }),

        new Brick({
            x: 2000,
            y: 250
        }),
        new Brick({
            x: 2060,
            y: 250
        }),
        new Brick({
            x: 2120,
            y: 250
        }),
        new Brick({
            x: 2180,
            y: 250
        }),

        new Brick({
            x: 3100,
            y: 250
        }),
        new Brick({
            x: 3160,
            y: 250
        }),
        new Brick({
            x: 3220,
            y: 250
        }),
        new Brick({
            x: 3400,
            y: 190
        }),
        new Brick({
            x: 3460,
            y: 190
        }),
        new Brick({
            x: 3860,
            y: 190
        }),
        new Brick({
            x: 3920,
            y: 190
        }),
        new Brick({
            x: 3980,
            y: 190
        }),

        new Brick({
            x: 5170,
            y: 250
        }),
        new Brick({
            x: 5230,
            y: 250
        }),
        new Brick({
            x: 5290,
            y: 250
        }),

        new Brick({
            x: 6150,
            y: 250
        }),
        new Brick({
            x: 6210,
            y: 250
        }),
        new Brick({
            x: 6270,
            y: 250
        }),

        new Brick({
            x: 6650,
            y: 320
        }),
        new Brick({
            x: 6710,
            y: 320
        }),

        new Brick({
            x: 7000,
            y: 150
        }),


        new Brick({
            x: 7590,
            y: 250
        }),
        new Brick({
            x: 7650,
            y: 250
        }),
        new Brick({
            x: 7710,
            y: 250
        }),
        new Brick({
            x: 7770,
            y: 250
        }),
        new Brick({
            x: 7830,
            y: 250
        }),



    ]

    swordprojectile = []

    enemyprojectiles = []

    silhouetteCounter = 0
    scrollOffset = 0
    introText.classList.remove("appear");
    healthBar.style.width = "300px";
    healthBar.max = 100;
    healthBar.value = healthBar.max;
    manaBar.classList.add("appear");
    healthBar.classList.add("appear");
    gearLogo.classList.add("appear");
    gearAmountTekst.classList.add("appear");
    healthIcon.classList.add("appear");
    manaIcon.classList.add("appear");
    textBlock.style.opacity = "0.5";

    manaBar.value = 0;
    manaBar.classList.add("appear");

    gearAmount = 0;
    gearAmountTekst.textContent = gearAmount;
    ratsKilled = 0;
    soupsKilled = 0

    showText();
    gameText1.textContent = "Wow, so this is Earth. Looks far greener than I’ve seen in those old movies,";
    gameText2.textContent = "Nature seems to be doing fine without us humans. It restored really well.";
    setTimeout(() => {
        gameText1.textContent = "The task was clear, I just have to get the information we need and get out of here";
        gameText2.textContent = "as soon as possible. I don't want to overstay my welcome.";
        setTimeout(() => {
            gameText1.textContent = "Oxygen levels seem… normal. I’m not taking off my mask though.";
            gameText2.textContent = "I don’t want to risk exposing myself to the possible radiation that’s still lingering.";
            setTimeout(() => {
                hideText();
            }, 6000);
        }, 6000);
    }, 6000);

}




//Op canvas zetten, de update functies hebben hun eigen bewegingen in een class zitten
// zoals de speler die beinvloed wordt door zwaartekracht en de vlag die naar beneden gaat.
function animate() {

    startScherm();
    requestAnimationFrame(animate)

    farbackground.forEach((farbackground) => {
        farbackground.draw()
    })
    background.forEach((background) => {
        background.draw()
    })
    obstacles.forEach((obstacles) => {
        obstacles.draw()
    })
    enemyprojectiles.forEach((enemyprojectiles) => {
        enemyprojectiles.update();
    })
    enemies.forEach((enemies) => {
        enemies.update()
    })
    soups.forEach((enemies2) => {
        enemies2.update()
    })
    silhouettes.forEach((silhouettes) => {
        silhouettes.update()
    })
    healthpotions.forEach((healthpotions) => {
        healthpotions.draw();
    })
    extrapotions.forEach((extrapotions) => {
        extrapotions.draw();
    })
    upgradepotions.forEach((upgradepotions) => {
        upgradepotions.draw();
    })
    gears.forEach((gears) => {
        gears.update();
    })
    spikes.forEach((spikes) => {
        spikes.draw();
    })
    swordprojectile.forEach((swordprojectile) => {
        swordprojectile.update();
    })
    player.update()
    foreground.forEach((foreground) => {
        foreground.draw()
    })

    console.log(player.position.x)
    // Speler besturen (links en rechts)
    // Rechts
    if (player.position.x + player.width >= 1024) {
        player.position.x = 1024 - player.width
    }
    if (keys.right.pressed && player.position.x < 500 ||
        (keys.right.pressed && scrollOffset > 8000)) {
        player.velocity.x = player.speed
        // Links
    } else if (
        (keys.left.pressed && player.position.x > 300) ||
        (keys.left.pressed && scrollOffset === 0 &&
            player.position.x > 0)
    ) {
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0

        //Platforms en achtergronden mee laten gaan
        if (keys.right.pressed) {
            scrollOffset += player.speed
            platforms.forEach((platform) => {
                platform.position.x -= player.speed
            })
            obstacles.forEach((obstacles) => {
                obstacles.position.x -= player.speed
            })
            enemies.forEach((enemies) => {
                enemies.position.x -= player.speed
            })
            soups.forEach((enemies2) => {
                enemies2.position.x -= player.speed
            })
            silhouettes.forEach((silhouettes) => {
                silhouettes.position.x -= player.speed
            })
            background.forEach((background) => {
                background.position.x -= player.speed
            })
            farbackground.forEach((farbackground) => {
                farbackground.position.x -= player.speed * 0.8
            })
            foreground.forEach((foreground) => {
                foreground.position.x -= player.speed * 1.3
            })
            healthpotions.forEach((potions) => {
                potions.position.x -= player.speed
            })
            extrapotions.forEach((extrapotions) => {
                extrapotions.position.x -= player.speed
            })
            upgradepotions.forEach((upgradepotions) => {
                upgradepotions.position.x -= player.speed
            })
            swordprojectile.forEach((swordprojectile) => {
                swordprojectile.position.x -= player.speed
            })
            enemyprojectiles.forEach((enemyprojectiles) => {
                enemyprojectiles.position.x -= player.speed
            })
            gears.forEach((gears) => {
                gears.position.x -= player.speed
            })
            spikes.forEach((spikes) => {
                spikes.position.x -= player.speed
            })
        } else if (keys.left.pressed && scrollOffset > 0 &&
            player.position.x) {
            scrollOffset -= player.speed
            platforms.forEach((platform) => {
                platform.position.x += player.speed
            })
            obstacles.forEach((obstacles) => {
                obstacles.position.x += player.speed
            })
            enemies.forEach((enemies) => {
                enemies.position.x += player.speed
            })
            soups.forEach((enemies2) => {
                enemies2.position.x += player.speed
            })
            silhouettes.forEach((silhouettes) => {
                silhouettes.position.x += player.speed
            })
            background.forEach((background) => {
                background.position.x += player.speed
            })
            farbackground.forEach((farbackground) => {
                farbackground.position.x += player.speed * 0.8
            })
            foreground.forEach((foreground) => {
                foreground.position.x += player.speed * 1.3
            })
            healthpotions.forEach((potions) => {
                potions.position.x += player.speed
            })
            extrapotions.forEach((extrapotions) => {
                extrapotions.position.x += player.speed
            })
            upgradepotions.forEach((upgradepotions) => {
                upgradepotions.position.x += player.speed
            })
            swordprojectile.forEach((swordprojectile) => {
                swordprojectile.position.x += player.speed
            })
            enemyprojectiles.forEach((enemyprojectiles) => {
                enemyprojectiles.position.x += player.speed
            })
            gears.forEach((gears) => {
                gears.position.x += player.speed
            })
            spikes.forEach((spikes) => {
                spikes.position.x += player.speed
            })
        }
    }

    // Platform collision (alleen de bovenkant)
    platforms.forEach((platform) => {
        if (player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0
        }
    })



    // Obstakel collision
    obstacles.forEach((obstacles) => {
        // Obstakel collision bovenkant
        if (player.position.y + player.height <= obstacles.position.y &&
            player.position.y + player.height + player.velocity.y >= obstacles.position.y &&
            player.position.x + player.width >= obstacles.position.x &&
            player.position.x <= obstacles.position.x + obstacles.width
        ) {
            player.velocity.y = 0
        }

        // Obstakel collision linkerkant
        if (player.position.x + player.width <= obstacles.position.x &&
            player.position.x + player.width + player.velocity.x >= obstacles.position.x &&
            player.position.y + player.height >= obstacles.position.y &&
            player.position.y <= obstacles.position.y + obstacles.height
        ) {
            player.velocity.x = 0
        }

        // Obstakel collision rechterkant
        if (player.position.x >= obstacles.position.x + obstacles.width &&
            player.position.x + player.velocity.x <= obstacles.position.x + obstacles.width &&
            player.position.y + player.height >= obstacles.position.y &&
            player.position.y <= obstacles.position.y + obstacles.height
        ) {
            player.velocity.x = 0
        }

        // Obstakel collision onderkant
        if (player.position.y >= obstacles.position.y + obstacles.height &&
            player.position.y + player.velocity.y <= obstacles.position.y + obstacles.height &&
            player.position.x + player.width >= obstacles.position.x &&
            player.position.x <= obstacles.position.x + obstacles.width
        ) {
            player.velocity.y = 0
        }
    })

    // Animatie triggers
    if (player.attack.active &&
        lastKey === 'right' && player.currentSprite !==
        player.sprites.attack.right) {
        player.frames = 1
        player.currentSprite = player.sprites.attack.right
        player.currentCropWidth = player.sprites.attack.cropWidth
        player.currentCropHeight = player.sprites.attack.cropHeight
        player.width = player.sprites.attack.width
        player.height = player.sprites.attack.height
        player.frameDelay = player.sprites.attack.delay
    } else if (player.attack.active &&
        lastKey === 'left' && player.currentSprite !==
        player.sprites.attack.left) {
        player.frames = 1
        player.currentSprite = player.sprites.attack.left
        player.currentCropWidth = player.sprites.attack.cropWidth
        player.currentCropHeight = player.sprites.attack.cropHeight
        player.width = player.sprites.attack.width
        player.height = player.sprites.attack.height
        player.frameDelay = player.sprites.attack.delay
        player.position.x -= 16
    } else if (keys.right.pressed && !player.attack.active &&
        lastKey === 'right' && player.currentSprite !==
        player.sprites.run.right) {
        player.frames = 1
        player.currentSprite = player.sprites.run.right
        player.currentCropWidth = player.sprites.run.cropWidth
        player.currentCropHeight = player.sprites.run.cropHeight
        player.width = player.sprites.run.width
        player.height = player.sprites.run.height
        player.frameDelay = player.sprites.run.delay
    } else if (!keys.right.pressed && !player.attack.active &&
        lastKey === 'right' && player.currentSprite !==
        player.sprites.stand.right) {
        player.frames = 1
        player.currentSprite = player.sprites.stand.right
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.currentCropHeight = player.sprites.stand.cropHeight
        player.width = player.sprites.stand.width
        player.height = player.sprites.stand.height
        player.frameDelay = player.sprites.stand.delay
    } else if (keys.left.pressed && !player.attack.active &&
        lastKey === 'left' && player.currentSprite !==
        player.sprites.run.left) {
        player.frames = 1
        player.currentSprite = player.sprites.run.left
        player.currentCropWidth = player.sprites.run.cropWidth
        player.currentCropHeight = player.sprites.run.cropHeight
        player.width = player.sprites.run.width
        player.height = player.sprites.run.height
        player.frameDelay = player.sprites.run.delay
    } else if (!keys.left.pressed && !player.attack.active &&
        lastKey === 'left' && player.currentSprite !==
        player.sprites.stand.left) {
        player.frames = 1
        player.currentSprite = player.sprites.stand.left
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.currentCropHeight = player.sprites.stand.cropHeight
        player.width = player.sprites.stand.width
        player.height = player.sprites.stand.height
        player.frameDelay = player.sprites.stand.delay
        player.position.x += 16
    }



    // Vijanden (ratten)
    enemies.forEach((enemies) => {
        // Bovenop vijand springen > vijand weg en speler gaat omhoog
        if (player.position.y + player.height <= enemies.position.y &&
            player.position.y + player.height + player.velocity.y >= enemies.position.y &&
            player.position.x + player.width >= enemies.position.x &&
            player.position.x <= enemies.position.x + enemies.width
        ) {
            enemies.position.y = 2000, player.velocity.y = -15
            ratsKilled += 1;
            ratDeathSFX.load();
            ratDeathSFX.play();
            ratText();
        }

        // Sword attack op vijand RAT
        if (player.attack.active &&
            player.position.x + player.width >= enemies.position.x &&
            player.position.x <= enemies.position.x + enemies.width &&
            player.position.y + player.height >= enemies.position.y &&
            player.position.y <= enemies.position.y + enemies.height
        ) {
            enemies.position.y = 2000
            ratsKilled += 1;
            ratDeathSFX.load();
            ratDeathSFX.play();
            swordKillSFX.load();
            swordKillSFX.play();
            ratText();
        }


        // Vijand rechterkant damage
        if (player.position.x >= enemies.position.x + enemies.width &&
            player.position.x + player.velocity.x <= enemies.position.x + enemies.width &&
            player.position.y + player.height >= enemies.position.y &&
            player.position.y <= enemies.position.y + enemies.height &&
            player.attack.active == false
        ) {
            healthBar.value -= damageRat;
            randomHit();
            if (healthBar.value <= 0) {
                init();
            }
        }


        // Vijand linkerkant damage
        if (player.position.x + player.width <= enemies.position.x &&
            player.position.x + player.width + player.velocity.x - enemies.velocity.x >= enemies.position.x &&
            player.position.y + player.height >= enemies.position.y &&
            player.position.y <= enemies.position.y + enemies.height &&
            player.attack.active == false
        ) {
            healthBar.value -= damageRat;
            randomHit();
            if (healthBar.value <= 0) {
                init();
            }
        }


        // Vijand dialoog
        if (player.position.x >= enemies.position.x - 300) {
            enemyEncounter++
            if (enemyEncounter == 1) {
                showText();
                setTimeout(() => {
                    hideText();
                }, 6000);
                gameText1.textContent = "What the hell is that!? It does NOT look friendly..";
                gameText2.textContent = "I could probably stab it or jump on it!";
            }
        }

        // Ervoor zorgen dat enemy heen en weer loopt
        if (enemyLooptRechts == true) {
            enemies.currentSprite = enemies.sprites.run.right
            enemies.velocity.x = 1.5;
            setTimeout(function () {
                enemyLooptRechts = false;
            }, enemyLoopTimer)
        }
        if (enemyLooptRechts == false) {
            enemies.currentSprite = enemies.sprites.run.left
            enemies.velocity.x = -1.5;
            setTimeout(function () {
                enemyLooptRechts = true;
            }, enemyLoopTimer);
        }

    })

    // Sword beam op enemy (ratten)
    enemies.forEach((enemies) => {
        swordprojectile.forEach((swordprojectile) => {
            if (swordprojectile.position.x >= enemies.position.x + enemies.width &&
                swordprojectile.position.x + swordprojectile.velocity.x <= enemies.position.x + enemies.width &&
                swordprojectile.position.y + swordprojectile.height >= enemies.position.y &&
                swordprojectile.position.y <= enemies.position.y + enemies.height
            ) {
                swordprojectile.position.y = 2000, enemies.position.y = 2000
                ratsKilled += 1;
                ratDeathSFX.load();
                ratDeathSFX.play();
                ratText();
            } else if (swordprojectile.position.x + swordprojectile.width <= enemies.position.x &&
                swordprojectile.position.x + swordprojectile.width + swordprojectile.velocity.x - enemies.velocity.x >= enemies.position.x &&
                swordprojectile.position.y + swordprojectile.height >= enemies.position.y &&
                swordprojectile.position.y <= enemies.position.y + enemies.height
            ) {
                swordprojectile.position.y = 2000, enemies.position.y = 2000
                ratsKilled += 1;
                ratDeathSFX.load();
                ratDeathSFX.play();
                ratText();
            } else if (swordprojectile.position.x >= player.position.x + 300 || swordprojectile.position.x <= player.position.x - 300) {
                swordprojectile.position.y = 3000;
            }

        })
    })


    // Vijanden (enemy2)
    soups.forEach((enemies2) => {
        // Bovenop vijand springen > vijand weg en speler gaat omhoog
        if (player.position.y + player.height <= enemies2.position.y &&
            player.position.y + player.height + player.velocity.y >= enemies2.position.y &&
            player.position.x + player.width >= enemies2.position.x &&
            player.position.x <= enemies2.position.x + enemies2.width
        ) {
            enemies2.position.y = 2000, player.velocity.y = -15
            soupsKilled += 1;
            soupDeathSFX.load();
            soupDeathSFX.play();
        }

        // Sword attack op vijand SOEP
        if (player.attack.active &&
            player.position.x + player.width >= enemies2.position.x &&
            player.position.x <= enemies2.position.x + enemies2.width &&
            player.position.y + player.height >= enemies2.position.y &&
            player.position.y <= enemies2.position.y + enemies2.height
        ) {
            enemies2.position.y = 2000
            soupsKilled += 1;
            soupDeathSFX.load();
            soupDeathSFX.play();
            swordKillSFX.load();
            swordKillSFX.play();
        }


        // Vijand rechterkant damage
        if (player.position.x >= enemies2.position.x + enemies2.width &&
            player.position.x + player.velocity.x <= enemies2.position.x + enemies2.width &&
            player.position.y + player.height >= enemies2.position.y &&
            player.position.y <= enemies2.position.y + enemies2.height &&
            player.attack.active == false
        ) {
            healthBar.value -= damageRat;
            randomHit();
            if (healthBar.value <= 0) {
                init();
            }
        }


        // Vijand linkerkant damage
        if (player.position.x + player.width <= enemies2.position.x &&
            player.position.x + player.width + player.velocity.x - enemies2.velocity.x >= enemies2.position.x &&
            player.position.y + player.height >= enemies2.position.y &&
            player.position.y <= enemies2.position.y + enemies2.height &&
            player.attack.active == false
        ) {
            healthBar.value -= damageRat;
            randomHit();
            if (healthBar.value <= 0) {
                init();
            }
        }


        // Vijand dialoog
        if (player.position.x >= enemies2.position.x - 300) {
            enemyEncounter++
            if (enemyEncounter == 1) {
                showText();
                setTimeout(() => {
                    hideText();
                }, 6000);
                gameText1.textContent = "What the hell is that!? It does NOT look friendly..";
                gameText2.textContent = "I could probably stab it or jump on it!";
            }
        }

    })

    // Sword beam op enemy (enemy2)
    soups.forEach((enemies2) => {
        swordprojectile.forEach((swordprojectile) => {
            if (swordprojectile.position.x >= enemies2.position.x + enemies2.width &&
                swordprojectile.position.x + swordprojectile.velocity.x <= enemies2.position.x + enemies2.width &&
                swordprojectile.position.y + swordprojectile.height >= enemies2.position.y &&
                swordprojectile.position.y <= enemies2.position.y + enemies2.height
            ) {
                swordprojectile.position.y = 2000, enemies2.position.y = 2000
                soupsKilled += 1;
                soupDeathSFX.load();
                soupDeathSFX.play();
                ratText();
            } else if (swordprojectile.position.x + swordprojectile.width <= enemies2.position.x &&
                swordprojectile.position.x + swordprojectile.width + swordprojectile.velocity.x - enemies2.velocity.x >= enemies2.position.x &&
                swordprojectile.position.y + swordprojectile.height >= enemies2.position.y &&
                swordprojectile.position.y <= enemies2.position.y + enemies2.height
            ) {
                swordprojectile.position.y = 2000, enemies2.position.y = 2000
                soupsKilled += 1;
                soupDeathSFX.load();
                soupDeathSFX.play();
                ratText();
            } else if (swordprojectile.position.x >= player.position.x + 300 || swordprojectile.position.x <= player.position.x - 300) {
                swordprojectile.position.y = 3000;
            }

        })
    })


    // Enemy2 schiet projectielen
    soups.forEach((enemies2) => {
        if (player.position.x < enemies2.position.x && shotCounter === 0) {
            shotCounter += 1
            enemyprojectiles = [
                new EnemyProjectile({
                    x: enemies2.position.x,
                    y: enemies2.position.y + 10
                }),
            ]
            setTimeout(() => {
                shotCounter = 0
            }, 2000);
        } else if (player.position.x > enemies2.position.x && shotCounter === 0) {
            shotCounter += 1
            enemyprojectiles = [
                new EnemyProjectileRight({
                    x: enemies2.position.x + 4,
                    y: enemies2.position.y + 10
                })
            ]
            setTimeout(() => {
                shotCounter = 0
            }, 2000);
        }
    })

    // Projectielen damage naar de speler
    enemyprojectiles.forEach((enemyprojectiles) => {
        // Vijand rechterkant damage
        if (enemyprojectiles.position.x + enemyprojectiles.width <= player.position.x &&
            enemyprojectiles.position.x + enemyprojectiles.width + enemyprojectiles.velocity.x - player.velocity.x >= player.position.x &&
            player.position.y + player.height >= enemyprojectiles.position.y &&
            player.position.y <= enemyprojectiles.position.y + enemyprojectiles.height
        ) {
            healthBar.value -= damageProjectile;
            randomHit();
            if (healthBar.value <= 0) {
                init();
            }
        }


        // Vijand linkerkant damage
        if (player.position.x + player.width <= enemyprojectiles.position.x &&
            player.position.x + player.width + player.velocity.x - enemyprojectiles.velocity.x >= enemyprojectiles.position.x &&
            player.position.y + player.height >= enemyprojectiles.position.y &&
            player.position.y <= enemyprojectiles.position.y + enemyprojectiles.height
        ) {
            healthBar.value -= damageProjectile;
            randomHit();
            if (healthBar.value <= 0) {
                init();
            }
        }
    })

    healthpotions.forEach((healthpotions) => {
        // Oppakken van een healthpotion
        if (player.position.x + player.width >= healthpotions.position.x &&
            player.position.x <= healthpotions.position.x + healthpotions.width &&
            player.position.y + player.height >= healthpotions.position.y &&
            player.position.y <= healthpotions.position.y + healthpotions.height
        ) {
            healthBar.value += 50;
            healthpotions.position.y = 2000;
            potionSFX.load();
            potionSFX.play();
            showText();
            setTimeout(() => {
                hideText();
            }, 2000);
            gameText1.textContent = "Ah!";
            gameText2.textContent = "much better";
        }
    })

    extrapotions.forEach((extrapotions) => {
        // Oppakken van een extra hp potion
        if (player.position.x + player.width >= extrapotions.position.x &&
            player.position.x <= extrapotions.position.x + extrapotions.width &&
            player.position.y + player.height >= extrapotions.position.y &&
            player.position.y <= extrapotions.position.y + extrapotions.height
        ) {
            healthBar.max += 50;
            healthBar.value += 50;
            extrapotions.position.y = 2000;
            healthBar.style.width = "450px";
            potionSFX.load();
            potionSFX.play();
            showText();
            setTimeout(() => {
                hideText();
            }, 2000);
            gameText1.textContent = "I feel ... stronger";
            gameText2.textContent = "Somehow";
        }
    })

    upgradepotions.forEach((upgradepotions) => {
        // Oppakken van een extra hp potion
        if (player.position.x + player.width >= upgradepotions.position.x &&
            player.position.x <= upgradepotions.position.x + upgradepotions.width &&
            player.position.y + player.height >= upgradepotions.position.y &&
            player.position.y <= upgradepotions.position.y + upgradepotions.height
        ) {
            playerHasUpgrade = true;
            manaBar.value += 50;
            upgradepotions.position.y = 2000;
            potionSFX.load();
            potionSFX.play();
            showText();
            setTimeout(() => {
                hideText();
            }, 3000);
            gameText1.textContent = "Now this is what I'm talking about";
            gameText2.textContent = "My sword has power now!";
        }
    })

    gears.forEach((gears) => {
        // Oppakken van een extra hp potion
        if (player.position.x + player.width >= gears.position.x &&
            player.position.x <= gears.position.x + gears.width &&
            player.position.y + player.height >= gears.position.y &&
            player.position.y <= gears.position.y + gears.height
        ) {
            gearPickupSFX.load();
            gearPickupSFX.play();
            gearAmount += 1;
            gears.position.y = 2000;
            gearAmountTekst.textContent = gearAmount;
            if (gearAmount == 1) {
                showText();
                setTimeout(() => {
                    hideText();
                }, 6000);
                gameText1.textContent = "Collectibles! This looks like something I could sell for a lot of cash back home.";
                gameText2.textContent = "I’m gonna take as many as I can on this trip.";
            } else if (gearAmount == 10) {
                showText();
                setTimeout(() => {
                    hideText();
                }, 3000);
                gameText1.textContent = "10 gears already?!";
                gameText2.textContent = "I’m gonna hit the casino when I get back.";
            }
        }
    })

    spikes.forEach((spikes) => {
        if (player.position.x + player.width >= spikes.position.x &&
            player.position.x <= spikes.position.x + spikes.width &&
            player.position.y + player.height >= spikes.position.y &&
            player.position.y <= spikes.position.y + spikes.height
        ) {
            init();
        }
    })

    // Als je voorbij 1030 pixels komt de silhouette
    if (player.position.x > 600 && silhouetteCounter == 0) {
        silhouetteCounter = 1
        levelTheme.pause();
        jumpscareSFX.load();
        jumpscareSFX.play();
        silhouettes = [
            new Silhouette({
                x: -100,
                y: player.position.y
            })
        ]
    }

    silhouettes.forEach((silhouettes) => {
        if (silhouettes.position.x + silhouettes.width > player.position.x) {
            scoreScreen();
        }
    })

    if (scrollOffset == 1995) {
        showText();
        setTimeout(() => {
            hideText();
        }, 3000);
        gameText1.textContent = "Is that a car?";
        gameText2.textContent = "Crazy to think these things used to run on gas.";
    }
}



animate()


//Hotkeys (A, S, D, W)
addEventListener('keydown', ({
    keyCode
}) => {
    if (gameState == true) {


        switch (keyCode) {
            case 65: // A
                keys.left.pressed = true
                lastKey = 'left'
                break

            case 83: // S
                break

            case 68: // D
                keys.right.pressed = true
                lastKey = 'right'
                break

            case 87: // W
                platforms.forEach((platforms) => {
                    obstacles.forEach((obstacles) => {
                        if (player.velocity.y === 0 &&
                            player.position.y + player.height == platforms.position.y - 0.5 ||
                            player.velocity.y === 0 &&
                            player.position.y + player.height == obstacles.position.y - 0.5) {
                            player.velocity.y -= 15;
                            jumpSFX.load();
                            jumpSFX.play();
                        }
                    })
                })
                break

            case 70: // F
                player.attack.active = true
                swordAttackSFX.load();
                swordAttackSFX.play();
                if (manaBar.value >= 20 && lastKey === 'right') {
                    manaBar.value -= 20;
                    swordProjectileSFX.load();
                    swordProjectileSFX.play();
                    swordprojectile = [
                        new SwordUpgradeRechts({
                            x: player.position.x + player.width + 10,
                            y: player.position.y
                        })
                    ]
                } else if (manaBar.value >= 20 && lastKey === 'left') {
                    manaBar.value -= 20;
                    swordProjectileSFX.load();
                    swordProjectileSFX.play();
                    swordprojectile = [
                        new SwordUpgradeLinks({
                            x: player.position.x,
                            y: player.position.y
                        })
                    ]
                }

                setTimeout(() => {
                    player.attack.active = false;
                }, 300);

                break



        }
    }
})

addEventListener('keyup', ({
    keyCode
}) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = false

            break

        case 83:

            break

        case 68:
            keys.right.pressed = false

            break

        case 87:

            break

        case 70:

            break

        case 222: 
            init()
            break


            //R
        case 82:
            if (endState == true) {
                location.reload()
            }

            break
    }
})

function showText() {
    textBlock.style.opacity = "0.8";
    gameText1.style.opacity = "1";
    gameText2.style.opacity = "1";
}

function hideText() {
    textBlock.style.opacity = "0";
    gameText1.style.opacity = "0";
    gameText2.style.opacity = "0";
}

function ratText() {
    if (ratsKilled == 1) {
        showText();
        setTimeout(() => {
            hideText();
        }, 2000);
        gameText1.textContent = "Where did he go?";
        gameText2.textContent = "Bingo?";
    }
}

function startScherm() {
    if (startState == true) {
        startButton.classList.add("appear");
        startButton.addEventListener("click", introScherm);
        c.drawImage(startScreenIMG, 0, 0);
    }
}

function introScherm() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(intro1, 0, 0);
    startButton.classList.remove("appear");
    gameText1.classList.add("appear");
    gameText2.classList.add("appear");
    introText.classList.add("appear")
    textBlock.style.opacity = "0.8";

    introState = true;
    startState = false;
    if (introState == true) {
        gameText1.textContent = "High Commander: Alright, Lieutenant. This is a special moment for humanity."
        gameText2.textContent = "Your job is to land, assess the current state it's in and report back to us";
        setTimeout(() => {
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.drawImage(intro2, 0, 0);
            gameText1.textContent = "Lieutenant: Ayay, commander";
            gameText2.textContent = "Consider this misson accomplished";
            setTimeout(() => {
                c.clearRect(0, 0, canvas.width, canvas.height);
                c.drawImage(intro3, 0, 0);
                gameText1.textContent = "High Commander: Earth is still a dangerous place.";
                gameText2.textContent = "Things have really changed over there. Be carefull of hostiles";
                setTimeout(() => {
                    c.clearRect(0, 0, canvas.width, canvas.height);
                    c.drawImage(intro4, 0, 0);
                    gameText1.textContent = "Lieutenant: You trained me for this Commander.";
                    gameText2.textContent = "I promise I won't disappoint!";
                    setTimeout(() => {
                        c.clearRect(0, 0, canvas.width, canvas.height);
                        c.drawImage(intro5, 0, 0);
                        gameText1.textContent = "High Commander: Wonderful, Oh, and most importantly, Lieutenant ...";
                        gameText2.textContent = "Please don't die.";
                        setTimeout(() => {
                            c.clearRect(0, 0, canvas.width, canvas.height);
                            c.drawImage(intro4, 0, 0);
                            gameText1.textContent = "Lieutenant: I wasn't planning on it."
                            gameText2.textContent = "Wish me luck!"
                            setTimeout(() => {
                                c.clearRect(0, 0, canvas.width, canvas.height);
                                c.drawImage(intro5, 0, 0);
                                gameText1.textContent = "High Commander: Good luck"
                                gameText2.textContent = "my son"
                                setTimeout(() => {
                                    init();
                                }, 2500)
                            }, 3000)
                        }, 4000)
                    }, 4000);
                }, 5000);
            }, 3000);
        }, 7000);
    }
}

function randomHit() {
    hitRandom = Math.random() * 4;
    hitRandom = Math.floor(hitRandom);
    switch (hitRandom) {
        case 0:
            gotHit1.load();
            gotHit1.play();
            break;
        case 1:
            gotHit2.load();
            gotHit2.play();
            break;
        case 2:
            gotHit3.load();
            gotHit3.play();
            break;
        case 3:
            gotHit4.load();
            gotHit4.play();
            break;
    }
}

function scoreScreen() {
    gameState = false;
    endState = true;
    c.clearRect(0, 0, canvas.width, canvas.height);

    endScreen.classList.add("appear");
    manaBar.classList.remove("appear");
    healthBar.classList.remove("appear");
    gearLogo.classList.remove("appear");
    gearAmountTekst.classList.remove("appear");
    healthIcon.classList.remove("appear");
    manaIcon.classList.remove("appear");

    gearsScore.textContent = "= " + gearAmount;
    ratsScore.textContent = "= " + ratsKilled;
    soupsScore.textContent = "= " + soupsKilled;

    setTimeout(() => {
        gearsEnd.classList.add("appear")
    }, 1000)
    setTimeout(() => {
        ratsEnd.classList.add("appear")
    }, 2000)
    setTimeout(() => {
        soupsEnd.classList.add("appear")
    }, 3000)
}

