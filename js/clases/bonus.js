class Bonus extends Sprite {
    constructor(x, y, width, height, row) {

        const src = './images/common/common.png';

        super(x, y, 57, 50, width, height, 18, src, 18, row);
    }


    collision(marco) {
        return (
            this.x < marco.x + marco.width &&
            this.x + this.width > marco.x &&
            this.y < marco.y + marco.height &&
            this.y + this.height > marco.y
        )
    }
}

class Rock {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = './images/common/common.png';
    }

    draw() {
        ctx.drawImage(this.image,
            0, 216,
            75, 65,
            this.x, this.y,
            this.width, this.height);
    }
}


class Header {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = './images/common/common.png';
    }

    draw() {
        ctx.drawImage(this.image,
            92, 226,
            75, 40,
            this.x, this.y,
            this.width, this.height);
    }
}

class Counter {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = './images/common/common.png';
    }

    draw(number) {
        ctx.drawImage(this.image,
            (52.5 * number), 165,
            45, 45,
            this.x, this.y,
            this.width, this.height);
    }
}
class Life {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = './images/common/common.png';
    }

    draw(number) {
        ctx.drawImage(this.image,
            (40 * number), 286,
            45, 45,
            this.x, this.y,
            this.width, this.height);

    }
}