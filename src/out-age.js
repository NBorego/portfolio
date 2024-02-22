const $outAge = document.querySelector(".out-age");

const data = new Date();
const currentYear = data.getFullYear();
const currentMonth = data.getMonth() + 1;
const currentDay = data.getDate();

const currentAge = () => {
  const day = 30;
  const month = 7;
  const age = currentYear - 2005;
  if (currentMonth > month) {
    return age;
  }
  if (currentMonth === month && currentDay >= day) {
    return age;
  }

  return age - 1;
};

$outAge.innerHTML = `Tenho ${currentAge()} anos`;
