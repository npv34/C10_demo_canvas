class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    move() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.x -= 5;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
    }
}
