const buttonPlayer1 = document.querySelector("#btn-player1");
const buttonPlayer2 = document.querySelector("#btn-player2");
const reset = document.querySelector("#reset");
const select = document.querySelector("#max-score");

const scorePlayer1 = document.querySelector("#player1");
const scorePlayer2 = document.querySelector("#player2");

let score1 = 0;
let score2 = 0;

buttonPlayer1.setAttribute("disabled", true);
buttonPlayer2.setAttribute("disabled", true);
reset.setAttribute("disabled", true);

let checkWinner = () => {
  if (score1 === maxScore) {
    buttonPlayer1.setAttribute("disabled", true);
    buttonPlayer2.setAttribute("disabled", true);
    scorePlayer1.style.color = "green";
    scorePlayer2.style.color = "red";
  }
  if (score2 === maxScore) {
    buttonPlayer1.setAttribute("disabled", true);
    buttonPlayer2.setAttribute("disabled", true);
    scorePlayer2.style.color = "green";
    scorePlayer1.style.color = "red";
  }
};

buttonPlayer1.addEventListener("click", () => {
  score1++;
  scorePlayer1.innerText = score1;
  checkWinner();
});

buttonPlayer2.addEventListener("click", () => {
  score2++;
  scorePlayer2.innerText = score2;
  checkWinner();
});

reset.addEventListener("click", () => {
  score1 = 0;
  score2 = 0;
  scorePlayer1.innerText = score1;
  scorePlayer2.innerText = score2;
  buttonPlayer1.setAttribute("disabled", true);
  buttonPlayer2.setAttribute("disabled", true);
  reset.setAttribute("disabled", true);
  select.disabled = false;
  select.value = "0";
  scorePlayer1.style.color = "";
  scorePlayer2.style.color = "";
});

select.addEventListener("change", () => {
  maxScore = parseInt(select.value);
  buttonPlayer1.disabled = false;
  buttonPlayer2.disabled = false;
  reset.disabled = false;
  select.disabled = true;
});
