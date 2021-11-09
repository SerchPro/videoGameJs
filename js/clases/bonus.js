class Pig {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = './images/common/bonusSlug.png';
        this.spriteIndex = 0;
        this.count = 0;
        this.numSprites = 19;
        this.sx = 35.3;
        this.ad = 0;
    }

    draw() {
        this.count += 1;
        if (this.count > 12) {
            this.count = 0;
            if (this.spriteIndex < this.numSprites - 1) {
                this.spriteIndex += 1;
            } else {
                this.spriteIndex = 0;
            }
        }
        ctx.drawImage(this.image,
            (this.spriteIndex * this.sx), 865,
            this.sx, 30,
            this.x, this.y,
            this.width, this.height);

    }
}

class Fish {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = './images/common/bonusSlug.png';
        this.spriteIndex = 0;
        this.count = 0;
        this.numSprites = 6;
        this.sx = 33;
    }

    draw() {
        this.count += 1;
        if (this.count > 12) {
            this.count = 0;
            if (this.spriteIndex < this.numSprites - 1) {
                this.spriteIndex += 1;
            } else {
                this.spriteIndex = 0;
            }
        }
        ctx.drawImage(this.image,
            0, 437,
            this.sx, 16,
            this.x, this.y,
            this.width, this.height);

    }
}

class NewGun {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = './images/common/bonusSlug.png';

    }

    draw() {

        ctx.drawImage(this.image,
            26, 240,
            24, 30,
            this.x, this.y,
            this.width, this.height);

    }
}