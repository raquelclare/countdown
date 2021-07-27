(function() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let targetDate = "Aug 10, 2021 00:00:00",
    countDown = new Date(targetDate).getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
        timeLeft = countDown - now;

      (document.getElementById("days").innerText = Math.floor(timeLeft / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (timeLeft % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (timeLeft % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (timeLeft % minute) / second
        ));

      // When date is reached
      if (timeLeft < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "I get to see mi amor today";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      // Seconds
    }, 0);
})();
