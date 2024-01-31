(function() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let targetDate = "Feb 14, 2024 00:00:00",
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
          subtext = document.getElementById("subtext"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "BFFs unite day!";
        subtext.style.display = "none";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      // Seconds
    }, 0);
})();
