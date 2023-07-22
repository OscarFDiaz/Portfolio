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
  // w = canvas.width;
  // h = canvas.height;

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
  ctx!.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx!.fillRect(0, 0, canvas.width, canvas.height);

  ctx!.fillStyle = '#0F0';
  ctx!.font = fontSize + 'px Poppins';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    ctx!.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }

  //
  // ctx.fill = '#0001';
  // ctx!.fillRect(0, 0, w, h);

  // ctx!.fillStyle = '#0f0';
  // ctx!.font = '15pt Poppins';

  // pos_y.forEach((y, ind) => {
  //   const text = String.fromCharCode(Math.random() * 128);
  //   const x = ind * 20;
  //   ctx?.fillText(text, x, y);

  //   if (y > 100 + Math.random() * 10000) {
  //     pos_y[ind] = 0;
  //   } else {
  //     pos_y[ind] = y + 20;
  //   }
  // });
};

// const katakana =
//   'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
// const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const nums = '0123456789';

// const alphabet = katakana + latin + nums;

// const fontSize = 16;
// const columns = canvas.width / fontSize;

// const rainDrops = [];

// for (let x = 0; x < columns; x++) {
//   rainDrops[x] = 1;
// }

// const draw = () => {
//   context.fillStyle = 'rgba(0, 0, 0, 0.05)';
//   context.fillRect(0, 0, canvas.width, canvas.height);

//   context.fillStyle = '#0F0';
//   context.font = fontSize + 'px monospace';

//   for (let i = 0; i < rainDrops.length; i++) {
//     const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
//     context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

//     if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//       rainDrops[i] = 0;
//     }
//     rainDrops[i]++;
//   }
// };

// setInterval(draw, 30);
