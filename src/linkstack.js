import * as CM from './colorme.js'

const style = getComputedStyle(document.documentElement);
const stack = document.querySelector('.linkstack');
const blocks = Array.from(stack.children);

let type = '';
blocks.forEach( block => {
  type = block.className;
  if (type == 'about') type = 'base'
  CM.colorme(type, block);
});
