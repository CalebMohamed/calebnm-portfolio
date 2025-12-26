const btn = document.getElementById("theme-toggle");
btn.addEventListener("click", () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  html.setAttribute("data-theme", next);
});
