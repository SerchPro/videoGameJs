class MarcoRossi extends Sprite {
    constructor(x, y, width, height, row) {

        const src = './images/players/MarcoRossi/marcor.png';

        super(x, y, 51, 48, width, height, 16, src, 4, row);
    }

    vanish() {
        this.row = 0;
    }

    stay() {
        console.log("stay")
        this.numSprites = 4;
        this.spriteIndex = 0;
        this.row = 0;
        this.speed = 16;

    }

    shootingDown() {
        console.log("shooting");
        this.numSprites = 9;
        this.spriteIndex = 0;
        this.row = 5;
        this.speed = 16;
    }

    walking(sideWalk) {
        if (sideWalk === 'right' && walking == 1) {
            console.log("walking right")
            this.numSprites = 7;
            this.spriteIndex = 0;
            this.row = 1;
            this.speed = 10;
        }
    }

    up() {
        this.numSprites = 4;
        this.spriteIndex = 0;
        this.row = 2;
        this.speed = 10;
    }
    down() {
        this.numSprites = 11;
        this.spriteIndex = 0;
        this.row = 3;
        this.speed = 10;
    }

    deadKnife() {
        this.numSprites = 13;
        this.spriteIndex = 0;
        this.row = 6;
        this.speed = 8;
    }
    shoot() {
        this.numSprites = 10;
        this.spriteIndex = 0;
        this.row = 7;
        this.speed = 5;

    }
    jump() {
        this.numSprites = 6;
        this.spriteIndex = 0;
        this.row = 8;
        this.speed = 8;
    }

    fire() {
        this.numSprites = 61;
        this.spriteIndex = 0;
        this.row = 9;
        this.speed = 16;
    }


}
// 50 100