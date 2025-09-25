export function colorme(type) {
  const root = document.documentElement;
  const styles = getComputedStyle(root);
  root.style.setProperty('--clr-accent', styles.getPropertyValue(`--clr-${type}-blood`));
  root.style.setProperty('--clr-accent2', styles.getPropertyValue(`--clr-${type}-water`));
}
