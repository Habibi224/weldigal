const reveals = document.querySelectorAll(
    ".presentation, .presentation_geii, .bloc, .bloc_geii, .schema_text, .box-contact"
);

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

reveals.forEach(el => el.classList.add("reveal"));

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();



const sections = document.querySelectorAll("header, main section, footer section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});



document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(0.5)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(0.5)";
    });
});
