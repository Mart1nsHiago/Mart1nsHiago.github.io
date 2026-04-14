// Intersection Observer for fade-in elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animate skill bars
      const fills = e.target.querySelectorAll ? e.target.querySelectorAll('.skill-fill') : [];
      fills.forEach(f => {
        f.style.width = f.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in, .timeline-item').forEach(el => observer.observe(el));

// Animate skill bars when skills section enters viewport
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach((f, i) => {
        setTimeout(() => {
          f.style.width = f.dataset.width + '%';
        }, i * 80);
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => skillsObserver.observe(el));
