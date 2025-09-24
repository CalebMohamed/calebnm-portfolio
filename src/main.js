import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/generic_section.css'
import '../styles/components/hero.css'
import '../styles/components/display_cards.css'
import '../styles/components/header.css'
import '../styles/components/footer.css'
import '../styles/utils.css'
import './jump-up.js'
import * as LH from '../../src/landing-headings.js'
import * as JU from '../../src/jump-up.js'

const lheadings = document.querySelectorAll('.landing-words h1, .landing-words h2');
const ltexts = Array.from(lheadings).map(h => h.textContent);

window.onload = function() {
    LH.updateHeadingWidths(ltexts, lheadings);
    JU.convertHeadingsToSpans();
    JU.initialiseJumpUpRotations();
}

window.addEventListener('resize', () => {
  LH.updateHeadingWidths(ltexts, lheadings);
});
