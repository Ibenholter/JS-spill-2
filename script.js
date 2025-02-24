const HEIGHT = 500
const WIDTH = 500
const canvas = document.querySelector("canvas")
canvas.width = WIDTH
canvas.height = HEIGHT

const ctx = canvas.getContext("2d")

function tegnLinje(startx, starty, stopx, stopy, farge) {
    ctx.beginPath()
    ctx.moveTo(startx, starty);
    ctx.lineTo(stopx, stopy);
    ctx.strokeStyle = farge
    ctx.lineWidth = 5
    ctx.stroke();
}

tegnLinje(WIDTH / 2, 0, WIDTH / 2, HEIGHT, "black")
tegnLinje(WIDTH / 2, 0, WIDTH, 0, "blak")
tegnLinje(0, 500, WIDTH, HEIGHT, "black")
tegnLinje(WIDTH, 0, WIDTH, HEIGHT / 5, "black")
tegnLinje(WIDTH / 2, HEIGHT / 6, WIDTH / 1.5, 0, "black");







