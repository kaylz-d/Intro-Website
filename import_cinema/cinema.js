const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var direction = 1;
var x = 200;
var y = 200;
var otherX = 0;
var otherY = 0;
var eyeY = 0;
var z = 0.1;
var time = 0;
var scene = 3;

//plan
//scene 1: boat in the ocean
// "!" --> "I caught something!"
// scene 2: big fish covers screen
// scene 3: man goes like :0
// THE END

function drawStuff() {

    // reset
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (scene == 1) {
        // sky
        ctx.beginPath();
        ctx.fillStyle = "rgb(170, 209, 235)";
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.closePath();

        // sea
        ctx.beginPath();
        ctx.fillStyle = "rgb(22, 153, 183)";
        ctx.rect(0, canvas.height - 300, canvas.width, 300);
        ctx.fill();
        ctx.closePath();

        // sun
        const sun = new Path2D();
        sun.arc(0, 0, 100, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(255, 252, 60)";
        ctx.fill(sun);

        // fisherman
        // body
        ctx.beginPath();
        ctx.fillStyle = "rgb(60, 15, 86)";
        ctx.rect(x - 15, y, 30, 80);
        ctx.fill();
        ctx.closePath();
        // face
        const face = new Path2D();
        face.arc(x, y, 25, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(225, 182, 139)";
        ctx.fill(face);
        // hat
        ctx.beginPath();
        ctx.fillStyle = "rgb(50, 48, 113)";
        ctx.rect(x - 24, y - 54, 48, 40);
        ctx.rect(x, y - 24, 40, 10);
        ctx.fill();
        ctx.closePath();
        //rod
        ctx.beginPath();
        ctx.moveTo(x + 100, y + 130 - 200);
        ctx.lineTo(x + 40, y + 300 - 200);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(x + 100, y + 130 - 200);
        if (time > 100) {
            otherX++;
            if (time > 200) {
                ctx.font = "20px arial";
                ctx.fillStyle = "black";
                ctx.fillText("?", 400, 100);
            }
        }
        ctx.lineTo(x + 300 + otherX, y + 500 - 200);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
        // boat
        ctx.beginPath();
        ctx.fillStyle = "rgb(153, 109, 66)";
        ctx.arc(x, y + 60, 100, 0, Math.PI, false);
        ctx.fill();
        ctx.closePath();
        if (time == 300) {
            otherX = 0;
        }
    }
    else if (scene == 2) {
        // lol
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = "rgb(22, 153, 183)";
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.closePath();

        //line
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(300, 0);
        ctx.lineTo(0 + otherX, 200);
        otherX += 4;
        ctx.stroke();
        ctx.closePath();

        //fish
        ctx.beginPath();
        ctx.fillStyle = "rgb(27, 62, 152)";
        ctx.ellipse(otherX - 100, 200, 100, 50, 0, 0, 2 * Math.PI, false);
        ctx.moveTo(otherX - 200, 200);
        ctx.lineTo(otherX - 300, 150);
        ctx.lineTo(otherX - 300, 250);
        ctx.fill();
        ctx.closePath();
    }
    else if (scene == 3) {
        // idk
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = "rgb(170, 209, 235)";
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.closePath();

        const sun2 = new Path2D();
        sun2.arc(300, 300, 100, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(255, 252, 60)";
        ctx.fill(sun2);

        //fish
        ctx.beginPath();
        ctx.fillStyle = "rgb(27, 62, 152)";
        // ctx.ellipse(otherX - 100, 200, 100, 50, 0, 90, 2*Math.PI, false);
        // ctx.moveTo(otherX - 200, 200);
        // ctx.lineTo(otherX - 300, 150);
        // ctx.lineTo (otherX - 300, 250);
        ctx.ellipse(300, 500 - otherY, 150, 300, 0, 0, 2 * Math.PI, false);
        ctx.moveTo(300, 800 - otherY);
        ctx.lineTo(200, 800 - otherY + 150);
        ctx.lineTo(400, 800 - otherY + 150);
        otherY += 10;
        ctx.fill();
        ctx.closePath();
    }
    else if (scene == 4) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = "rgb(225, 182, 139)";
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.closePath();

        const eye1 = new Path2D();
        eye1.arc(100, 200, 50, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill(eye1);
        const eye1dot = new Path2D();
        eye1dot.arc(100, 200 - eyeY, 20, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fill(eye1dot);


        const eye2 = new Path2D();
        eye2.arc(500, 200, 50, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill(eye2);
        const eye2dot = new Path2D();
        eye2dot.arc(500, 200 - eyeY, 20, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fill(eye2dot);


        //mouth
        ctx.beginPath();
        ctx.fillStyle = "rgb(255, 83, 83)";
        ctx.rect(200, 300, 200, 50 + (eyeY * 2));
        ctx.fill();
        ctx.closePath();


        if (eyeY < 30) {
            eyeY++;
        }

        if (time >= 780) {
            ctx.font = "20px arial";
            ctx.fillStyle = "black";
            ctx.fillText("That's...", 100, 500);
            if (time >= 840) {
                ctx.fillText("one really huge fish.", 100, 520);
            }
        }
    }

}

function animations() {
    // oh so this does a bouncy thing
    y += direction;
    if (y < 190 || y > 210) {
        direction = -direction;
    }

    if (time < 300) {
        scene = 1;
        time++;
    }
    if (time >= 300 && time < 600) {
        scene = 2;
        time += 2;
    }
    if (time >= 600 && time < 720) {
        scene = 3;
        time++;
    }
    if (time >= 720 && time < 900) {
        scene = 4;
        time++;
    }

}

drawStuff();

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animations();
    drawStuff();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

draw();