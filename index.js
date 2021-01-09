const nav = document.querySelector('.nav');
const move = document.querySelector('.move-up');
const audio = document.querySelector('#myAudio');

document.addEventListener('click', () => {
  // Start the Song
  audio.play();
});

document.addEventListener('scroll', () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 250) {
    nav.classList.add('nav--scroll');
    move.classList.add('move-up--vis');
  } else {
    nav.classList.remove('nav--scroll');
    move.classList.remove('move-up--vis');
  }

  move.addEventListener("click", function () {
    scrollToTop(1000);
  });

  // Start the Song
  audio.play();
});

function scrollToTop(duration) {
  // Cancel if already on top
  if (document.scrollingElement.scrollTop === 0) return;

  const totalScrollDistance = document.scrollingElement.scrollTop;
  let scrollY = totalScrollDistance, oldTimestamp = null;

  function step(newTimestamp) {
    if (oldTimestamp !== null) {
      // If duration is 0 scrollY will be -Infinity
      scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
      if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
      document.scrollingElement.scrollTop = scrollY;
    }
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}