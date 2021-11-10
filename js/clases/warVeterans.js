class Heroe extends Sprite {
    constructor(x, y, width, height, row) {

        const src = './images/heroes/heroe.png';

        super(x, y, 58, 55, width, height, 16, src, 5, row);
    }

    freeVeteran() {
        this.numSprites = 9;
        this.spriteIndex = 0;
        this.row = 0;
        this.speed = 10;
    }

    stay() {
        this.numSprites = 9;
        this.spriteIndex = 0;
        this.row = 1;
        this.speed = 10;
    }
    showing() {
        this.numSprites = 10;
        this.spriteIndex = 0;
        this.row = 2;
        this.speed = 10;
    }

    thankYou() {
        this.numSprites = 14;
        this.spriteIndex = 0;
        this.row = 3;
        this.speed = 10;
    }

    running() {
        this.numSprites = 8;
        this.spriteIndex = 0;
        this.row = 4;
        this.speed = 10;
    }

    walking() {
        this.numSprites = 12;
        this.spriteIndex = 0;
        this.row = 5;
        this.speed = 10;
    }

    free() {
        this.numSprites = 10;
        this.spriteIndex = 0;
        this.row = 6;
        this.speed = 10;
    }

    collision(marco) {
        //console.log(this.x, marco.x, marco.width, this.y, marco.y, marco.height)
        return (
            this.x < marco.x + marco.width &&
            this.x + this.width > marco.x &&
            this.y < marco.y + marco.height &&
            this.y + this.height > marco.y
        );
    }


}