const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}


// ----------------



const numGenInput = document.querySelector("#numGenerator input");
const numGuessedInput = document.querySelector("#guessNum input");

// 생성된 숫자 및 유저가 입력한 숫자를 저장할 변수
function onNumGenGuessSubmit(event) {
  event.preventDefault();
  const numGen = numGenInput.value;
  const numGuess = numGuessedInput.value;
  localStorage.setItem("numGen", numGen);
  localStorage.setItem("numGuess", numGuess);
}

numGen.addEventListener("submit", onNumGenGuessSubmit);

// 생성된 숫자 범위 안에서 랜덤 숫자 생성 후 저장

//랜덤 숫자와 유저가 입력한 숫자 비교

// 비교 결과 출력

