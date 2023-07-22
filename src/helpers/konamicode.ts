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
let cursor = 0;
document.addEventListener('keydown', (e) => {
  e.key === konami_code[cursor] ? cursor++ : (cursor = 0);
  if (cursor === konami_code.length) {
    console.log('Konami!');
    setInterval(matrix, 50);
    window.scrollTo(0, 0);
    cursor = 0;
  }
});
