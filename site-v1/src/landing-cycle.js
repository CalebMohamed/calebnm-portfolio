const root = document.documentElement;
const home = document.querySelector('.home');

// gets all the colors for the switching on cycle rotate
const styles = getComputedStyle(root);
const clr_bg = styles.getPropertyValue('--clr-bg').trim();
const base_blood = styles.getPropertyValue('--clr-base-blood').trim();
const base_water = styles.getPropertyValue('--clr-base-water').trim();
const poem_blood = styles.getPropertyValue('--clr-poem-blood').trim();
const poem_water = styles.getPropertyValue('--clr-poem-water').trim();
const blog_blood = styles.getPropertyValue('--clr-blog-blood').trim();
const blog_water = styles.getPropertyValue('--clr-blog-water').trim();
const comp_blood = styles.getPropertyValue('--clr-comp-blood').trim();
const comp_water = styles.getPropertyValue('--clr-comp-water').trim();
const work_blood = styles.getPropertyValue('--clr-work-blood').trim();
const work_water = styles.getPropertyValue('--clr-work-water').trim();
const game_blood = styles.getPropertyValue('--clr-game-blood').trim();
const game_water = styles.getPropertyValue('--clr-game-water').trim();

// variables for the selector behaviour
const cycle = home.querySelector('.cycle-icon');
let dragging = false;
let startAngle = 0;
let currentAngle = 0;
let segNo = 6;
let segmentAngle = 2*Math.PI/segNo;
let currentSegment = 0;
let segments = [];

// gets a reference to all landing segments and activates the first
for (let i = 0; i < segNo; i++) {
  segments.push(home.querySelector(`.seg${i}`));
}
segments[currentSegment].classList.add('active');


// computes angle between the current mouse position,
// and the center of a bounding client rect
function getAngle(e, bounds) {
  const centerX = bounds.left + bounds.width/2;
  const centerY = bounds.top + bounds.height/2;
  return Math.atan2(e.clientY - centerY, e.clientX - centerX);
}

// calculates the closest segement to the current angle
function closestNotch(angle) {
  const tp = 2 * Math.PI;
  angle = angle % tp;
  if (angle < 0) { angle += tp; }
  return Math.round(segNo*angle / (2*Math.PI)) % segNo;
}

// stores the starting angle so dragging is relative
function startSelection(e) {
  const bounds = cycle.getBoundingClientRect();
  startAngle = getAngle(e, bounds) - currentAngle;
  dragging = true;
  cycle.style.color = 'var(--clr-accent2)';
}

function updateSelection(e) {
  const bounds = cycle.getBoundingClientRect();
  const targetAngle = getAngle(e, bounds) - startAngle;
  currentAngle = targetAngle;
  // console.log(`current angle: ${currentAngle}`);
  cycle.style.transform = `rotate(${targetAngle}rad)`;
}

function endSelection() {
  dragging = false;
  cycle.style.color = 'var(--clr-h1)';
  setSegment(closestNotch(currentAngle));
  // clicks the segment into place
  currentAngle = currentSegment * segmentAngle;
  cycle.style.transform = `rotate(${currentAngle}rad)`;
}

function setSegment(seg) {
  currentSegment = seg;
  // makes only the current segment active
  segments.forEach(div => div.classList.remove('active'));
  segments[currentSegment].classList.add('active');
  setSegmentColors(currentSegment);
}

function setSegmentColors(seg) {
  switch (seg) {
    case 0:
      home.style.setProperty('--clr-accent', base_blood);
      home.style.setProperty('--clr-accent2', base_water);
    break;
    case 1:
      home.style.setProperty('--clr-accent', poem_blood);
      home.style.setProperty('--clr-accent2', poem_water);
    break;
    case 2:
      home.style.setProperty('--clr-accent', blog_blood);
      home.style.setProperty('--clr-accent2', blog_water);
    break;
    case 3:
      home.style.setProperty('--clr-accent', comp_blood);
      home.style.setProperty('--clr-accent2', comp_water);
    break;
    case 4:
      home.style.setProperty('--clr-accent', work_blood);
      home.style.setProperty('--clr-accent2', work_water);
    break;
    case 5:
      home.style.setProperty('--clr-accent', game_blood);
      home.style.setProperty('--clr-accent2', game_water);
    break;
  }
}

// on drag start, start selection
cycle.addEventListener('mousedown', e => startSelection(e));
cycle.addEventListener('touchstart', e => startSelection(e.touches[0]));

// on drag end, end selection
window.addEventListener('mouseup', () => {
  if (!dragging) return;
  endSelection();
});
window.addEventListener('touchend', () => {
  if (!dragging) return;
  endSelection();
});

// if dragging then update the current rotation and change the segment
window.addEventListener('mousemove', e => {
  if (!dragging) return;
  updateSelection(e);
  setSegment(closestNotch(currentAngle));
});
window.addEventListener('touchmove', e => {
  if (!dragging) return;
  e.preventDefault();
  updateSelection(e.touches[0]);
  setSegment(closestNotch(currentAngle));
});
