//  new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
const displayedDays = document.querySelector(".value1");
const displayedHours = document.querySelector(".value2");
const displayedMinutes = document.querySelector(".value3");
const displayedSeconds = document.querySelector(".value4");

const targetDate = new Date("Jul 17, 2026");
const trueTargetDate = targetDate.getTime();
console.log(targetDate);
console.log(trueTargetDate);
// let thisMomentTime = Date.now()
// console.log(thisMomentTime)

// let timeLeft = trueTargetDate - thisMomentTime;
// console.log(timeLeft)

// let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
// console.log(days)

// let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// console.log(hours)

// let mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
// console.log(mins)

// let secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
// console.log(secs)

const refreshDisplay = () => {
  let thisMomentTime = Date.now();

  let timeLeft = trueTargetDate - thisMomentTime;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  let secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

  displayedDays.textContent = days;
displayedHours.textContent = hours;
displayedMinutes.textContent = mins;
displayedSeconds.textContent = secs;

if(timeLeft <= 0){
    clearInterval(intervalId)
}
};

const intervalId = setInterval(refreshDisplay , 1000);


