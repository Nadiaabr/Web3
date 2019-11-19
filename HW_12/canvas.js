var canvas = document.getElementById('Game');
var ballRadius = 60;
var ballX = canvas.width / 2 - ballRadius;
var ballY = canvas.height / 2 - ballRadius;
var ballStep = 4; // ball's speed
var ballStepX = getRandomNumber(-ballStep, ballStep);
var ballStepY = getRandomSign() * Math.sqrt(ballStep * ballStep - ballStepX * ballStepX);
var ballColorR = 0;
var ballColorG = 128;
var ballColorB = 128;
var ballRadiusStep = 10;
var speedStep = 0.5;
var colorStep = 10;
var clickCount = 0;

function getSign(number) {
  if (number < 0)
    return -1;
  else
    return 1;
}

function getRandomNumber(min, max) {
  return min + Math.random() * (max - min);
}

function getRandomSign() {
  return getSign(Math.random() - 0.5);
}

function updateBallsSpeedInfo() {
  var speedInfoElem = document.getElementById('BallSpeedInfo');
  var speedInfo = 'Ball\'s speed: ' + ballStep + ' (' + clickCount;
  if (clickCount == 1)
    speedInfo += ' click)';
  else
    speedInfo += ' clicks)';
  speedInfoElem.innerText = speedInfo;
}

canvas.addEventListener('click', function (event) {
  var x = event.pageX - canvas.offsetLeft;
  var y = event.pageY - canvas.offsetTop;
  if (x > ballX - ballRadius && x < ballX + ballRadius && y > ballY - ballRadius && y < ballY + ballRadius) {
    // Increase speed and change color
    var c = (ballStep + speedStep) / ballStep;
    ballStepX = c * ballStepX;
    ballStepY = c * ballStepY;
    ballStep += speedStep;
    clickCount++;
    ballColorR = Math.min(255, ballColorR + colorStep);
    ballColorG = Math.max(0, ballColorG - colorStep);
    ballColorB = Math.max(0, ballColorB - colorStep);
    updateBallsSpeedInfo();
  }  
});

function animate() {
  var boundsLeft = ballRadius;
  var boundsTop = ballRadius;
  var boundsRight = canvas.width - ballRadius;
  var boundsBottom = canvas.height - ballRadius;
  var boundsWidth = boundsRight - boundsLeft;
  var boundsHeight = boundsBottom - boundsTop;

  var ctx = canvas.getContext('2d');
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgb(' + ballColorR + ',' + ballColorG + ',' + ballColorB + ')';
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.beginPath();
  ctx.rect(0,0, canvas.width, canvas.height);
  ctx.closePath();
  ctx.setLineDash([5, 15]);
  ctx.lineWidth = 5;
  ctx.stroke();
  ballX += ballStepX;
  ballY += ballStepY;
  if (ballX < boundsLeft || ballX > boundsRight) {
    var overshootX = ballX < boundsLeft ? ballX - boundsLeft : ballX - boundsRight;
    var overshoot = overshootX / ballStepX * ballStep;
    ballStepX = -getSign(ballStepX) * getRandomNumber(0.1, 0.9) * ballStep;
    ballStepY = getSign(ballStepY) * Math.sqrt(ballStep * ballStep - ballStepX * ballStepX);
    ballX += overshoot / ballStep * ballStepX;
    ballY += overshoot / ballStep * ballStepY;
  }
  if (ballY < boundsTop || ballY > boundsBottom) {
    var overshootY = ballY < boundsTop ? ballY - boundsTop : ballY - boundsBottom;
    var overshoot = overshootY / ballStepY * ballStep;
    ballStepY = -getSign(ballStepY) * getRandomNumber(0.1, 0.9) * ballStep;
    ballStepX = getSign(ballStepX) * Math.sqrt(ballStep * ballStep - ballStepY * ballStepY);
    ballY += overshoot / ballStep * ballStepY;
    ballX += overshoot / ballStep * ballStepX;
  }
  window.requestAnimationFrame(animate);
}
updateBallsSpeedInfo();
window.requestAnimationFrame(animate);

function inflateBall() {
  ballRadius = Math.min(120, ballRadius + ballRadiusStep);
}

function deflateBall() {
  ballRadius = Math.max(10, ballRadius - ballRadiusStep);
}

function changeBallColor() {
  ballColorR = getRandomNumber(0, 255);
  ballColorG = getRandomNumber(0, 255);
  ballColorB = getRandomNumber(0, 255);
}