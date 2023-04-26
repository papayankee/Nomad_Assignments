const clockTitle = document.querySelector(".js-clock");

// Use Date and setInterval functions to create a clock that tells you how many days are left before Christmas. (December 25)

function getTimeUntilChristmas() {
  const christmasDay = new Date("2023-12-25:00:00:00");
  const now = new Date();
  const timeDiff = christmasDay - now;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  console.log(timeDiff);

  clockTitle.innerText = `${days}d ${hours.toString().padStart(2, "0")}h ${minutes.toString().padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`;
}

// function updateClock() {
//   getTimeUntilChristmas();
//   setInterval(getTimeUntilChristmas, 1000);
// }

// updateClock();

getTimeUntilChristmas();
setInterval(getTimeUntilChristmas, 1000);