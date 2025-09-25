import * as CM from './colorme.js'
const root = document.documentElement;
const home = document.querySelector('.home');

// variables for the selector behaviour
const cycle = home.querySelector('.cycle-icon');
const left = home.querySelector('.left-icon');
const right = home.querySelector('.right-icon');
let dragging = false;
let startAngle = 0;
let currentAngle = 0;
let segNo = 6;
let segTypes = ['base','poem','blog','comp','work','game']
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
  snapToSegment(currentSegment);
}

function setSegment(seg) {
  currentSegment = seg;
  // makes only the current segment active
  segments.forEach(div => div.classList.remove('active'));
  segments[currentSegment].classList.add('active');
  CM.colorme(segTypes[currentSegment], home);
}

function snapToSegment(seg) {
  currentAngle = seg * segmentAngle;
  cycle.style.transform = `rotate(${currentAngle}rad)`;
}

// on drag start, start selection
cycle.addEventListener('mousedown', e => startSelection(e));
cycle.addEventListener('touchstart', e => startSelection(e.touches[0]));

// on click on the arrows go to next segment
left.addEventListener('click', () => {
  setSegment((currentSegment - 1 + segNo) % segNo);
  snapToSegment(currentSegment);
});

right.addEventListener('click', () => {
  setSegment((currentSegment + 1) % segNo);
  snapToSegment(currentSegment);
});

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
}, { passive: false });
