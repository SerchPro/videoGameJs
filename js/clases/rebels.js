class Rebel extends Sprite {
    constructor(x, y, width, height) {

        const src = './images/rebels/rebel.png';

        super(x, y, 62, 65, width, height, 14, src, 9, 0);
    }

    deadKnife() {
        this.numSprites = 9;
        this.spriteIndex = 0;
        this.row = 0;
        this.speed = 10;
    }

    dead() {
        this.numSprites = 8;
        this.spriteIndex = 0;
        this.row = 1;
        this.speed = 10;
    }

    walkingSlow() {
        this.numSprites = 11;
        this.spriteIndex = 0;
        this.row = 2;
        this.speed = 10;
    }

    knife() {
        this.numSprites = 11;
        this.spriteIndex = 0;
        this.row = 3;
        this.speed = 10;
    }

    walking() {
        this.numSprites = 15;
        this.spriteIndex = 0;
        this.row = 4;
        this.speed = 10;
    }



}