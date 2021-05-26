// function draw() {
const cvs = document.getElementById("pong");
if (cvs !== null) {
    console.log("Enter");
    const ctx = cvs.getContext("2d");
}
// create user paddle
const user = {
    x: 0,
    y: (cvs.height / 2) - 50,
    width: 10,
    height: 100,
    color: "#fff",
    score: 0
}
const com = {
    x: cvs.width - 10,
    y: cvs.height / 2 - 50,
    width: 10,
    height: 100,
    color: "#fff",
    score: 0
}
const ball = {
        x: cvs.width / 2,
        y: cvs.height / 2,
        r: 10,
        speed: 5,
        velocityX: 5,
        velocityY: 5,
        color: "#fff"
    }
    // draw Rectangle
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

// draw Circle
function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false); //arc(x,y,radius,0degree, 360degree,direction)
    ctx.closePath();
    ctx.fill();
}

// draw Text
function drawText(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "75px fantasy";
    ctx.fillText(text, x, y);
}

// draw Net function
function drawNet() {
    console.log("Draw Net");
    for (i = 0; i < cvs.height; i += 15) {
        drawRect((cvs.width / 2) - 1, 0 + i, 2, 10, "#fff");
    }
}

function render() {
    // draw Table
    drawRect(0, 0, 600, 400, "#000");

    // draw Net
    drawNet();

    // draw Score
    drawText(user.score, cvs.width / 4, cvs.height / 5, "#fff");
    drawText(com.score, 3 * (cvs.width / 4), cvs.height / 5, "#fff");

    // draw ball
    drawCircle(ball.x, ball.y, ball.r, ball.color);
}

function update() {

}

function game() {
    update(); //movement, collision detection, score update...
    render();
}
const framePerSecond = 50;
setInterval(game, 1000 / framePerSecond); //call game() 50 times every 1000ms=1sec