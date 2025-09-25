const style = getComputedStyle(document.documentElement);
const stack = document.querySelector('.linkstack');
const blocks = Array.from(stack.children);

let type = '';
blocks.forEach( block => {
  type = block.className;
  if (type == 'about') type = 'base'
  const blood = style.getPropertyValue(`--clr-${type}-blood`).trim();
  const water = style.getPropertyValue(`--clr-${type}-water`).trim();
  block.style.setProperty('--clr-accent', blood);
  block.style.setProperty('--clr-accent2', water); 
});
