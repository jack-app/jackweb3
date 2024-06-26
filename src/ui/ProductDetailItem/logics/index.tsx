function rgbToHsl(r: number, g: number, b: number) {
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

function decreaseLightness(h: number, s: number, l: number, decreaseAmount: number) {
  l = Math.max(0, l - decreaseAmount);
  return `hsl(${h * 360},${s * 100}%,${l * 100}%)`;
}

export function color_change(data: any) {
  let [r, g, b] = data;
  const [h, s, l] = rgbToHsl(r, g, b);
  const color = decreaseLightness(h, s, l, 0); // decrease lightness by 20%
  return color;
}
