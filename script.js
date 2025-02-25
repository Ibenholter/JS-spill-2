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

const offset = 50

tegnLinje(WIDTH / 2 - offset, 0, WIDTH / 2 - offset, HEIGHT, "black")
tegnLinje(WIDTH / 2 - offset, 0, WIDTH - offset, 0, "blak")
tegnLinje(WIDTH - offset, 0, WIDTH - offset, HEIGHT / 5, "black")
tegnLinje(WIDTH / 2 - offset, HEIGHT / 6, WIDTH / 1.5 - offset, 0, "black");









