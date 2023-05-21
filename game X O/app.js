let title = document.querySelector(".title");
let turn = "x";

function game(id) {
  let ele = document.getElementById(id);
  ele.style.boxShadow='5px 5px 5px black'



  if (turn === "x" && ele.innerHTML == "") {
    ele.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o";
  } else if (turn == "o" && ele.innerHTML == "") {
    ele.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x";
  }
  winner();
}

let squares = [];
function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    point(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[5] != ""
  ) {
    point(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[8] != ""
  ) {
    point(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[4] != ""
  ) {
    point(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[5] != ""
  ) {
    point(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[6] != ""
  ) {
    point(3, 6, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[5] != ""
  ) {
    point(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[5] != ""
  ) {
    point(3, 5, 7);
  }
}

function point(num1, num2, num3) {
  title.innerHTML = `${squares[num2]} winner`;

  document.getElementById("item" + num1).style.background = "black";
  document.getElementById("item" + num2).style.background = "black";
  document.getElementById("item" + num3).style.background = "black";
  title.style.background = "green";

  setInterval(function () {
    title.innerHTML += ".";
    title.style.background = "green";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 4000);
}

function isa(id){
  let ele = document.getElementById(id);
  ele.style.boxShadow='2px 2px 2px black'

}

 
