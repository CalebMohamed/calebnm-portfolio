// makes an observer which will tag elements with
// in-view class when it sees them:

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      obs.unobserve(entry.target); // means won't observe again
    }
  });
}, { threshold: 0.75 });

document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));
