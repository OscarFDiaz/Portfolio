import { matrix } from './matrix';

const konami_code = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

let cursor = 0,
  animating = false,
  intervalID: number | undefined,
  scrollPosition: number;

document.addEventListener('keydown', (e) => {
  e.key === konami_code[cursor] ? cursor++ : (cursor = 0);

  // Leave animation
  if (animating) {
    stopAnimation();
  }

  if (cursor === konami_code.length) {
    cursor = 0;
    animating = true;
    startAnimation();
  }
});

const startAnimation = () => {
  const konami_container = document.getElementById('konami_container');

  scrollPosition = window.scrollY;

  if (konami_container) {
    konami_container.style.display = 'flex';
  }

  intervalID = setInterval(matrix, 50);
  window.scrollTo(0, 0);
  disableScroll();
};

export const stopAnimation = () => {
  clearInterval(intervalID);
  const konami_container = document.getElementById('konami_container');

  if (konami_container) {
    konami_container.style.display = 'none';
  }

  window.scrollTo(0, scrollPosition);
  enableScroll();
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';
};

const enableScroll = () => {
  document.body.removeAttribute('style');

  // To hide the overflow of the home gradient
  document.body.style.overflowX = 'hidden';
};
