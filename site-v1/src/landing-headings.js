const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
function measureTextWidth(text, element) {
  const style = getComputedStyle(element);
  ctx.font = `${style.fontStyle} ${style.fontVariant} ${style.fontWeight} ${style.fontSize} / ${style.lineHeight} ${style.fontFamily}`;
  return ctx.measureText(text).width;
}

export function updateHeadingWidths(texts, headings) {
  let hwidth = 0;
  for (let i = 0; i < headings.length; i++) {
    hwidth = measureTextWidth(texts[i], headings[i]);
    headings[i].style.setProperty('--original-width', `${hwidth}px`);
  }
}
