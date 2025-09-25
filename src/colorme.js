const root = document.documentElement;
const styles = getComputedStyle(root);

export function colorme(type, element) {
  element.style.setProperty('--clr-accent', styles.getPropertyValue(`--clr-${type}-blood`));
  element.style.setProperty('--clr-accent2', styles.getPropertyValue(`--clr-${type}-water`));
}
