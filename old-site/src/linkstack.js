const style = getComputedStyle(document.documentElement);
const stack = document.querySelector('.linkstack');
const blocks = Array.from(stack.children);

let type = '';
blocks.forEach( block => {
  type = block.className;
  console.log(type);
  if (type == 'about') type = 'base'
  const blood = style.getPropertyValue(`--clr-${type}-blood`).trim();
  const water = style.getPropertyValue(`--clr-${type}-water`).trim();
  console.log(blood);
  block.style.setProperty('--clr-accent', blood);
  block.style.setProperty('--clr-accent2', water); 
});
