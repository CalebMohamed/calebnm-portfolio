import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/generic_section.css'
import '../styles/components/display.css'
import '../styles/components/linkstack.css'
import '../styles/components/header.css'
import '../styles/components/footer.css'
import '../styles/utils.css'
import './theme-toggle.js'
import './slide-in.js'
import './mouse-tracker.js'
import * as JU from './jump-up.js'

window.onload = function() {
    JU.convertHeadingsToSpans();
    JU.initialiseJumpUpRotations();
}
