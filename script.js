// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle with persistence
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});

// Typing effect
const phrases = [
    "DevOps Engineer @ WPP Production Bangladesh",
    "CNCF Kubestronaut (all 5 K8s exams)",
    "AWS Certified Solutions Architect",
    "CI/CD | IaC | GitOps | Progressive Delivery",
];
const typedEl = document.getElementById("typed");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const current = phrases[phraseIndex];
    typedEl.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
        charIndex++;
        setTimeout(type, 55);
    } else if (!deleting && charIndex === current.length) {
        deleting = true;
        setTimeout(type, 1600);
    } else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 30);
    } else {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 250);
    }
}
type();

// Count-up metrics on scroll
const metrics = document.querySelectorAll(".metric__value");
const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const isFloat = !Number.isInteger(target);
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = (isFloat ? target.toFixed(1) : target) + suffix;
    };
    requestAnimationFrame(step);
};

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);
metrics.forEach((m) => observer.observe(m));
