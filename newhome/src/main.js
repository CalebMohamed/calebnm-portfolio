import '../../styles/modern-normalize.css'
import '../../styles/style.css'
import '../../styles/components/generic_section.css'
import '../../styles/components/home.css'
import '../../styles/components/display_cards.css'
import '../../styles/components/header.css'
import '../../styles/components/footer.css'
import '../../styles/utils.css'
import '../../src/jump-up.js'

const root = document.documentElement;
const home = document.querySelector('.home');

// gets all the colors for the switching on cycle rotate
const styles = getComputedStyle(root);
const clr_bg = styles.getPropertyValue('--clr-bg').trim();
const base_acc1 = styles.getPropertyValue('--clr-base-accent').trim();
const base_acc2 = styles.getPropertyValue('--clr-base-water').trim();
const poem_acc1 = styles.getPropertyValue('--clr-poem-accent').trim();
const poem_acc2 = styles.getPropertyValue('--clr-poem-water').trim();
const blog_acc1 = styles.getPropertyValue('--clr-blog-accent').trim();
const blog_acc2 = styles.getPropertyValue('--clr-blog-water').trim();
const comp_acc1 = styles.getPropertyValue('--clr-comp-accent').trim();
const comp_acc2 = styles.getPropertyValue('--clr-comp-water').trim();
const work_acc1 = styles.getPropertyValue('--clr-work-accent').trim();
const work_acc2 = styles.getPropertyValue('--clr-work-water').trim();
const game_acc1 = styles.getPropertyValue('--clr-game-accent').trim();
const game_acc2 = styles.getPropertyValue('--clr-game-water').trim();

let dragging = false;
let startAngle = 0;
let currentAngle = 0;
let segNo = 6;
let segmentAngle = 2*Math.PI/segNo;
let tol = segmentAngle/12;
let currentSegment = 0;
let segments = [];

for (let i = 0; i < segNo; i++) {
  segments.push(home.querySelector(`.seg${i}`));
}

const cycle = home.querySelector('.cycle-icon');

// computes angle between the current mouse position,
// and the center of a bounding client rect
function getAngle(e, bounds) {
  const centerX = bounds.left + bounds.width/2;
  const centerY = bounds.top + bounds.height/2;
  return Math.atan2(e.clientY - centerY, e.clientX - centerX);
}

function closestNotch(angle) {
  const tp = 2 * Math.PI;
  angle = angle % tp;
  if (angle < 0) { angle += tp; }
  return Math.round(segNo*angle / (2*Math.PI));
}

// function atIthNotch(i, angle) {
//   const tp = 2 * Math.PI;
//   let a = angle % tp;
//   if (a < 0) { a += tp; }
//   return Math.abs(i*segmentAngle - a) <= tol;
// }

// mousedown starts dragging process, and stores the original
// angle so that new drags add to the starting transform
cycle.addEventListener('mousedown', e => {
  const bounds = cycle.getBoundingClientRect();
  startAngle = getAngle(e, bounds) - currentAngle;
  dragging = true;
});

// on mouseup the dragging stops
window.addEventListener('mouseup', () => {
  dragging = false

  const nextSegment = closestNotch(currentAngle);
  // hides current landing text and shows next
  segments[currentSegment].style.display = 'none';
  segments[nextSegment].style.display = 'flex';
  // then updates the current segment
  currentSegment = nextSegment;
  // then updates the color variables and clicks the cycle
  // to the correct location
  switch (currentSegment) {
    case 0:
      home.style.setProperty('--clr-accent', base_acc1);
      home.style.setProperty('--clr-accent2', base_acc2);
    break;
    case 1:
      home.style.setProperty('--clr-accent', poem_acc1);
      home.style.setProperty('--clr-accent2', poem_acc2);
    break;
    case 2:
      home.style.setProperty('--clr-accent', blog_acc1);
      home.style.setProperty('--clr-accent2', blog_acc2);
    break;
    case 3:
      home.style.setProperty('--clr-accent', comp_acc1);
      home.style.setProperty('--clr-accent2', comp_acc2);
    break;
    case 4:
      home.style.setProperty('--clr-accent', work_acc1);
      home.style.setProperty('--clr-accent2', work_acc2);
    break;
    case 5:
      home.style.setProperty('--clr-accent', game_acc1);
      home.style.setProperty('--clr-accent2', game_acc2);
    break;
  }
  currentAngle = currentSegment * segmentAngle;
  cycle.style.transform = `rotate(${currentAngle}rad)`;
});

// if dragging then update the current rotation
window.addEventListener('mousemove', e => {
  if (!dragging) return;
  
  const bounds = cycle.getBoundingClientRect();
  const targetAngle = getAngle(e, bounds) - startAngle;
  currentAngle = targetAngle;
  // console.log(`current angle: ${currentAngle}`);
  cycle.style.transform = `rotate(${targetAngle}rad)`;

  // if (atIthNotch(0, currentAngle)) {
  //   nextSegment = 0;
  // } else if (atIthNotch(1, currentAngle)) {
  //   nextSegment = 1;
  // } else if (atIthNotch(2, currentAngle)) {
  //   nextSegment = 2;
  // } else if (atIthNotch(3, currentAngle)) {
  //   nextSegment = 3;
  // } else if (atIthNotch(4, currentAngle)) {
  //   nextSegment = 4;
  // } else if (atIthNotch(5, currentAngle)) {
  //   nextSegment = 5;
  // }
});

// const text = home.querySelector('.hover-text');
//
// text.addEventListener('mouseenter', () => {
//   home.style.backgroundColor = clr_accent;
// });
//
// text.addEventListener('mouseleave', () => {
//   home.style.backgroundColor = clr_bg;
// });
