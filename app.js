const car = document.getElementById("car");
const counter = 0;
document.body.onkeydown = function (e) {
  console.log(e.key);
  if (e.key == "ArrowLeft") {
    keyA();
  } else if (e.key == "ArrowRight") {
    keyD();
  } else if (e.key == "ArrowUp") {
    keyW();
  } else if (e.key == "ArrowDown") {
    keyS();
  }
};

function keyA() {
  car.style.transform = "translateX(-100px)";
}

function keyD() {
  car.style.transform = "translateX(100px)";
}

function keyW() {
  car.style.transform = "translateY(-100px)";
}

function keyS() {
  car.style.transform = "translateY(100px)";
}
