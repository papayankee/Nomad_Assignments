  const numGenInput = document.querySelector("#numGenerator input");
  const numGuessedInput = document.querySelector("#guessNum input");
  const outcomeDiv = document.querySelector("#outcome");
  const outcomeHeader = document.querySelector("#outcome h5");
  const outcomeResult = document.querySelector("#result");
  const HIDDEN_CLASSNAME = "hidden";

  // 생성된 숫자 및 유저가 입력한 숫자를 저장할 변수
  function onNumGenGuessSubmit(event) {
    event.preventDefault();
    const numGen = numGenInput.value;
    const numGuess = numGuessedInput.value;
    localStorage.setItem("Generated Number", numGen);
    localStorage.setItem("Guessed Number", numGuess);
    const ranNum = Math.ceil(Math.random() * (parseInt(numGen)));
    savedRandomNumber(ranNum, numGuess);
  }

  function savedRandomNumber(ranNum, numGuess) {
    if (ranNum === numGuess) {
      outcomeResult.innerText = "You Won!";
    } else {
      outcomeResult.innerText = "You Lost!";
    }
    outcomeHeader.innerText = `You chose: ${numGuess}, the machine chose: ${ranNum}.`;
    outcomeDiv.classList.remove(HIDDEN_CLASSNAME);
  }


  const guessForm = document.querySelector("#guessNum");
  guessForm.addEventListener("submit", onNumGenGuessSubmit);