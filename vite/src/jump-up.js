export function convertHeadingsToSpans() {
  let headings = document.querySelectorAll('h1, h2');
  headings.forEach(heading => {
    let headingText = heading.textContent;
    // deletes text content and replaces with spans
    heading.textContent = '';
    heading.className += 'jump-heading';
    headingText.split(' ').forEach(word => {
      let wSpan = document.createElement('span');
      wSpan.className += 'jump-word';
      word.split('').forEach(char => {
        let cSpan = document.createElement('span');
        // add the classes
        cSpan.className += 'jump_up';
        if (isVowel(char)){
            cSpan.className += ' accented';
        }
        cSpan.textContent = char;
        wSpan.appendChild(cSpan);
      });
      heading.appendChild(wSpan);
    });
  });
}

export function initialiseJumpUpRotations() {
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
