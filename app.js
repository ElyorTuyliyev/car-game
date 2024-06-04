const car = document.getElementById("car");
const counter = 0;
let movementCounter;
document.body.onkeydown = function (e) {
  e.preventDefault();
  if (e.key == "ArrowLeft") {
    keyA();
  } else if (e.key == "ArrowRight") {
    keyD();
  } else if (e.key == "ArrowUp") {
    keyW();
  } else if (e.key == "ArrowDown") {
    keyS();
  } else if (e.key == e.ctrlKey && "r") {
    console.log("0");
  }
};

function keyA() {
  movementCounter -= 1;
  car.style.transform = "translateX(-100px)";
}
function keyD() {
  car.style.transform = "translateX(100px)";
}

function keyW() {
  car.style.transform = "translateY(-100px)";
}

function keyS() {
  car.style.transform = `translateY(${counter})`;
}
