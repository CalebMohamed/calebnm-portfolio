import '../../styles/modern-normalize.css'
import '../../styles/style.css'
import '../../styles/components/generic_section.css'
import '../../styles/components/home.css'
import '../../styles/components/display_cards.css'
import '../../styles/components/header.css'
import '../../styles/components/footer.css'
import '../../styles/utils.css'
import '../../src/titlehop.js'

const root = document.documentElement;
// gets the background colour to reset home
const styles = getComputedStyle(root);
const clr_bg = styles.getPropertyValue('--clr-bg').trim();
const clr_accent = styles.getPropertyValue('--clr-accent').trim();


const home = document.querySelector('.home');
const text = home.querySelector('.hover-text');

text.addEventListener('mouseenter', () => {
  home.style.backgroundColor = clr_accent;
  console.log('I am registering the enter');
});

text.addEventListener('mouseleave', () => {
  home.style.backgroundColor = clr_bg;
  console.log('I am registering the leave');
});
