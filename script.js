const weddingDate =
  new Date("September 04, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();

  const distance = weddingDate - now;

  const countdownElement =
    document.getElementById("countdown");

  if (!countdownElement) return;

  if (distance < 0) {
    countdownElement.innerHTML =
      "The Wedding Day Has Arrived ❤️";
    return;
  }

  const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours =
    Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );

  const seconds =
    Math.floor(
      (distance % (1000 * 60)) / 1000
    );

  countdownElement.innerHTML =
    days + " Days · " +
    hours + " Hours · " +
    minutes + " Minutes · " +
    seconds + " Seconds";
}

updateCountdown();

setInterval(updateCountdown, 1000);

function openEnvelope() {
  const envelope =
    document.querySelector(".envelope-scene");

  const intro =
    document.getElementById("envelopeIntro");

  const music =
    document.getElementById("bgMusic");

  const button =
    document.getElementById("musicButton");

  if (envelope) {
    envelope.classList.add("open");
  }

  if (music) {
    music.volume = 0.6;
    music.play().catch(function () {
      console.log("Music autoplay was blocked.");
    });
  }

  if (button) {
    button.innerHTML = "❚❚";
    button.style.display = "block";
  }

  if (intro) {
    setTimeout(function () {
      intro.classList.add("hide");
    }, 2800);
  }
}

function playMusic() {
  const music =
    document.getElementById("bgMusic");

  const button =
    document.getElementById("musicButton");

  if (!music || !button) return;

  music.volume = 0.6;

  if (music.paused) {
    music.play();
    button.innerHTML = "❚❚";
  } else {
    music.pause();
    button.innerHTML = "♪";
  }
}

/* GALLERY SLIDER */

const slides =
  document.querySelectorAll(".slide");

let currentSlide = 0;

if (slides.length > 0) {
  setInterval(function () {
    slides[currentSlide].classList.remove("active");

    currentSlide =
      (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
  }, 3000);
}