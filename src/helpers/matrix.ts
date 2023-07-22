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
  // Background
  ctx!.fillStyle = 'rgba(40, 44, 41, 0.09)';
  ctx!.fillRect(0, 0, canvas.width, canvas.height);

  ctx!.fillStyle = '#C778DD';
  ctx!.font = fontSize + 'px Poppins';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    ctx!.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};
