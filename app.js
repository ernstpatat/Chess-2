const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");
i = 0
j = 0

ctx.fillRect(10, 10, 1000, 800)
ctx.fillStyle = "white"
ctx.fillRect(10, 10, 800, 800)
ctx.fillStyle = "ForestGreen"
while (i < 8) {
    j = 0
    while (j < 8) {
        if (i % 2 == 0 && j % 2 == 0 || i % 2 != 0 && j % 2 != 0) [ctx.fillRect(i*100+10, j*100+10, 100, 100)]
        j += 1
    }
    i += 1
}