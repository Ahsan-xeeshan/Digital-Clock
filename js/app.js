function currentTime() {
  const date = new Date();
  //24 hours formate
  let hours = date.getHours();

  //formatting minutes
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let amPm = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  formattedHours = hours >= 10 ? hours : "0" + hours;
  formattedMinutes = minutes >= 10 ? minutes : "0" + minutes;
  formattedSeconds = seconds >= 10 ? seconds : "0" + seconds;
  document.getElementById(
    "clock"
  ).innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
}

//set Timeout
setTimeout(() => {
  return currentTime();
}, 1000);

//set interval
const timer = setInterval(() => {
  return currentTime();
});
