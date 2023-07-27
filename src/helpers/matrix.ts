import Swal from 'sweetalert2';
import { stopAnimation } from './konamicode';

/* eslint-disable @typescript-eslint/restrict-plus-operands */
let canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D | null,
  rainDrops: number[],
  alphabet: string,
  fontSize: number;

window.addEventListener('load', function () {
  canvas = document.getElementById('matrixCanvas') as HTMLCanvasElement;

  ctx = canvas.getContext('2d');

  canvas.width = this.window.innerWidth;
  canvas.height = this.window.innerHeight;
  const katakana =
    'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';

  alphabet = katakana + latin + nums;

  fontSize = 16;
  const columns = canvas.width / fontSize;

  rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }
});

export const matrix = () => {
  try {
    // Background
    ctx!.fillStyle = 'rgba(40, 44, 41, 0.09)';
    ctx!.fillRect(0, 0, canvas.width, canvas.height);

    ctx!.fillStyle = '#C778DD';
    ctx!.font = fontSize + 'px Poppins';
  } catch (error) {
    void Swal.fire({
      background: '#282c33',
      color: '#ffffff',
      confirmButtonColor: '#c778dd',
      footer: 'If you are in incognito mode, that may be the problem.',
      icon: 'error',
      iconColor: '#c778dd',
      text: 'You found the easter egg 🥚 but I can not show you the result.',
      title: 'Oops...',
    });
    stopAnimation();
    return;
  }

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    ctx!.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};
