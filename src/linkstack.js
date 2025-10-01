import * as CM from './colorme.js'

const style = getComputedStyle(document.documentElement);
const stack = document.querySelector('.linkstack');
const blocks = Array.from(stack.children);

let type = '';
blocks.forEach( block => {
  CM.colorme(block.className, block);
});
