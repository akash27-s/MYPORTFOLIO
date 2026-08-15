// ================================
// Mobile Menu Toggle
// ================================

const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menu.innerHTML = '<i class="ri-close-line"></i>';
    } else {
        menu.innerHTML = '<i class="ri-menu-3-line"></i>';
    }
});

// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menu.innerHTML = '<i class="ri-menu-3-line"></i>';
    });
});


// ================================
// Typed Text Animation
// ================================

new Typed(".typing", {
    strings: [
        "Engineering Student",
        "Web Developer",
        "Java Programmer",
        "Frontend Developer",
        "Tech Enthusiast"
    ],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 1200,
    loop: true
});


// ================================
// Active Navigation Highlight
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// ================================
// Scroll Reveal Animation
// ================================

const revealElements = document.querySelectorAll(
".home-text,.home-img,.about,.skills,.projects,.certifications,.card,.project-card,.cert-card"
);

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================================
// Scroll Reveal Animation
// ================================

const revealElements = document.querySelectorAll(
    ".home-text,.home-img,.about,.skills,.projects,.contact,.card,.project-card"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ================================
// Smooth Button Hover Effect
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-5px) scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0) scale(1)";
    });

});


// ================================
// Footer Year
// ================================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Akash | All Rights Reserved`;
}
