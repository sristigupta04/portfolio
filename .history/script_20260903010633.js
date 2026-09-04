// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});


// Close mobile menu after clicking a link

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});


// =========================
// HERO ANIMATION
// =========================

window.addEventListener("load", () => {

    const heroTag = document.getElementById("heroTag");
    const heroTitle = document.getElementById("heroTitle");
    const heroDescription =
        document.getElementById("heroDescription");
    const heroButtons =
        document.getElementById("heroButtons");


    // Tag

    setTimeout(() => {

        heroTag.style.transition =
            "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";

        heroTag.style.opacity = "1";
        heroTag.style.transform = "translateY(0)";

    }, 200);


    // Heading

    setTimeout(() => {

        heroTitle.style.transition =
            "all 1s cubic-bezier(0.16, 1, 0.3, 1)";

        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";

    }, 400);


    // Description

    setTimeout(() => {

        heroDescription.style.transition =
            "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";

        heroDescription.style.opacity = "1";
        heroDescription.style.transform = "translateY(0)";

    }, 700);


    // Buttons

    setTimeout(() => {

        heroButtons.style.transition =
            "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";

        heroButtons.style.opacity = "1";
        heroButtons.style.transform = "translateY(0)";

    }, 850);

});