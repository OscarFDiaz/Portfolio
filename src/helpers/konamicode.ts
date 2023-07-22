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
  intervalID: number | undefined;

document.addEventListener('keydown', (e) => {
  e.key === konami_code[cursor] ? cursor++ : (cursor = 0);

  // Leave animation
  if (animating) {
    stopAnimation();
    enableScroll();
  }

  if (cursor === konami_code.length) {
    cursor = 0;
    animating = true;
    startAnimation();
  }
});

const startAnimation = () => {
  const konami_container = document.getElementById('konami_container');

  if (konami_container) {
    konami_container.style.display = 'flex';
  }

  intervalID = setInterval(matrix, 50);
  window.scrollTo(0, 0);
  disableScroll();
};

const stopAnimation = () => {
  clearInterval(intervalID);
  const konami_container = document.getElementById('konami_container');

  if (konami_container) {
    konami_container.style.display = 'none';
  }
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';
};

const enableScroll = () => {
  document.body.removeAttribute('style');
};
