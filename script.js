
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
    } else {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    }

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".about, .hero-content, .hero-image, .icon-grid img, .socials a, .tool-icons img"
).forEach((element) => {

    element.classList.add("hidden");
    observer.observe(element);

});

const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} Sugish Devkota • Built with HTML, CSS & JavaScript`;
}