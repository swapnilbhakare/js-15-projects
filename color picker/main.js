const colors = [
  "green",
  "dordgerblue",
  "	#FF0000",
  "	#800000",
  "darkblue",
  "dodgerblue",
  "skyblue",
  "rebeccapurple",
  "salmon",
  "  rgba(0, 0, 0, 0.1)",
  "tomato",
  "transparent",
];
const btn = document.getElementById("btn");
var color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number btween 0-3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
