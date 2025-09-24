window.onload = function() {
    convertHeadingsToSpans();
    initialiseJumpUpRotations();
}

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
function measureTextWidth(text, element) {
  const style = getComputedStyle(element);
  ctx.font = `${style.fontStyle} ${style.fontVariant} ${style.fontWeight} ${style.fontSize} / ${style.lineHeight} ${style.fontFamily}`;
  return ctx.measureText(text).width;
}

function convertHeadingsToSpans() {
    let headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        let headingText = heading.textContent;
        // calculate text width and update variable
        const hwidth = measureTextWidth(headingText, heading);
        heading.style.setProperty('--original-width', `${hwidth}px`);

        // deletes text content and replaces with spans
        heading.textContent = '';
        headingText.split('').forEach(char => {
            let newSpan = document.createElement('span');
            // add the classes
            newSpan.className += 'jump_up';
            if (isVowel(char)){
                newSpan.className += ' accented';
            }
            // adds in invisible i's for the spaces as the spaces are ignored
            if (char == ' '){
                newSpan.textContent = 'i';
                newSpan.style.visibility = 'hidden';
            } else {
                newSpan.textContent = char;
            }
            // adds the span
            heading.appendChild(newSpan);
        });
    });
}

function initialiseJumpUpRotations() {
    let jump_ups = document.querySelectorAll('.jump_up');
    jump_ups.forEach(span => {
        var rotation = Math.random()*20 - 10;
        span.style.setProperty('--random-rotation', rotation + 'deg');
    });
}

function isVowel(char) {
    char = char.toLowerCase();
    return ("aeiou".indexOf(char) != -1);
}
