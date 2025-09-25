import '../../styles/modern-normalize.css'
import '../../styles/style.css'
import '../../styles/components/generic_section.css'
import '../../styles/components/display_cards.css'
import '../../styles/components/linkstack.css'
import '../../styles/components/header.css'
import '../../styles/components/footer.css'
import '../../styles/utils.css'
import '../../src/linkstack.js'
import * as JU from '../../src/jump-up.js'
import * as CM from '../../src/colorme.js'

window.onload = function() {
    CM.colorme('comp');
    JU.convertHeadingsToSpans();
    JU.initialiseJumpUpRotations();
}
