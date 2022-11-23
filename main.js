let rect = new Rectangle(175, 450, 150, 10, "blue");
rect.draw()
let ball = new Ball(175, 100, 20, 'red')

function init() {
    rect.move();
    ball.draw();
    rect.draw();
}
setInterval(() => {
    init()
}, 100)

