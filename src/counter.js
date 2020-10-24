const numDiv = document.querySelector(".number");
let number = +JSON.parse(localStorage.getItem("counter")) || 0;
numDiv.innerText = number;

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");

increment.addEventListener("click", () => {
  number++;
  numDiv.innerText = number;
  localStorage.setItem("counter", JSON.stringify(number));
});

decrement.addEventListener("click", () => {
  number--;
  numDiv.innerText = number;
  localStorage.setItem("counter", JSON.stringify(number));
});
