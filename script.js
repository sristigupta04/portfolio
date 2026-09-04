// =========================================================
// PORTFOLIO JAVASCRIPT
// Sristi Gupta
// =========================================================


// =========================================================
// DOM READY
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    initPreloader();

    initMobileMenu();

    initNavbar();

    initHeroAnimation();

    initCustomCursor();

    initMagneticButtons();

    initScrollReveal();

    initProjectInteractions();

    initActiveNavigation();

});


// =========================================================
// PRELOADER
// =========================================================

function initPreloader() {

    const preloader = document.getElementById("preloader");

    if (!preloader) return;


    window.addEventListener("load", () => {

        setTimeout(() => {

            preloader.classList.add("loaded");

        }, 700);

    });

}


// =========================================================
// MOBILE MENU
// =========================================================

function initMobileMenu() {

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const menuIcon =
        document.getElementById("menuIcon");


    if (!menuButton || !mobileMenu) return;


    let menuOpen = false;


    menuButton.addEventListener("click", () => {

        menuOpen = !menuOpen;


        if (menuOpen) {

            mobileMenu.classList.remove("hidden");

            if (menuIcon) {
                menuIcon.textContent = "×";
            }

        } else {

            mobileMenu.classList.add("hidden");

            if (menuIcon) {
                menuIcon.textContent = "+";
            }

        }

    });


    // Close menu when clicking a link

    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            menuOpen = false;

            mobileMenu.classList.add("hidden");

            if (menuIcon) {
                menuIcon.textContent = "+";
            }

        });

    });


    // Close if screen becomes desktop

    window.addEventListener("resize", () => {

        if (window.innerWidth >= 768) {

            menuOpen = false;

            mobileMenu.classList.add("hidden");

            if (menuIcon) {
                menuIcon.textContent = "+";
            }

        }

    });

}


// =========================================================
// NAVBAR
// =========================================================

function initNavbar() {

    const navbar =
        document.getElementById("navbar");

    if (!navbar) return;


    function updateNavbar() {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    updateNavbar();


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

}


// =========================================================
// HERO ANIMATION
// =========================================================

function initHeroAnimation() {

    const eyebrow =
        document.getElementById("heroEyebrow");

    const title =
        document.getElementById("heroTitle");

    const description =
        document.getElementById("heroDescription");

    const actions =
        document.getElementById("heroActions");


    if (!title) return;


    // Eyebrow

    setTimeout(() => {

        if (!eyebrow) return;

        eyebrow.style.transition =
            "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";

        eyebrow.style.opacity = "1";

        eyebrow.style.transform =
            "translateY(0)";

    }, 850);


    // Title

    setTimeout(() => {

        title.style.transition =
            "opacity 1.2s ease, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 1.2s ease";

        title.style.opacity = "1";

        title.style.transform =
            "translateY(0)";

        title.style.filter =
            "blur(0)";

    }, 1000);


    // Description

    setTimeout(() => {

        if (!description) return;

        description.style.transition =
            "opacity 0.9s ease, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)";

        description.style.opacity = "1";

        description.style.transform =
            "translateY(0)";

    }, 1250);


    // Buttons

    setTimeout(() => {

        if (!actions) return;

        actions.style.transition =
            "opacity 0.9s ease, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)";

        actions.style.opacity = "1";

        actions.style.transform =
            "translateY(0)";

    }, 1400);

}


// =========================================================
// CUSTOM CURSOR
// =========================================================

function initCustomCursor() {

    const cursor =
        document.getElementById("cursor");

    const follower =
        document.getElementById("cursorFollower");


    if (!cursor || !follower) return;


    // Don't use custom cursor on touch devices

    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {
        return;
    }


    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let followerX = mouseX;
    let followerY = mouseY;


    document.addEventListener(
        "mousemove",
        (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;


            cursor.style.left =
                `${mouseX}px`;

            cursor.style.top =
                `${mouseY}px`;

        }
    );


    function animateFollower() {

        followerX +=
            (mouseX - followerX) * 0.12;

        followerY +=
            (mouseY - followerY) * 0.12;


        follower.style.left =
            `${followerX}px`;

        follower.style.top =
            `${followerY}px`;


        requestAnimationFrame(
            animateFollower
        );

    }


    animateFollower();


    // Interactive elements

    const interactiveElements =
        document.querySelectorAll(
            "a, button, .project-card, .tech-tag"
        );


    interactiveElements.forEach((element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                document.body.classList.add(
                    "cursor-hover"
                );

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                document.body.classList.remove(
                    "cursor-hover"
                );

            }
        );

    });

}


// =========================================================
// MAGNETIC BUTTONS
// =========================================================

function initMagneticButtons() {

    // Disable on mobile

    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) {
        return;
    }


    const buttons =
        document.querySelectorAll(
            ".magnetic-btn"
        );


    buttons.forEach((button) => {

        button.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const moveX =
                    (x - centerX) * 0.15;

                const moveY =
                    (y - centerY) * 0.15;


                button.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;


                button.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                button.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0, 0)";

            }
        );

    });

}


// =========================================================
// SCROLL REVEAL
// =========================================================

function initScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".project-card, .stack-box, #about > div, #stack > div, #contact > div"
        );


    elements.forEach((element) => {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    elements.forEach((element) => {

        observer.observe(element);

    });

}


// =========================================================
// PROJECT INTERACTIONS
// =========================================================

function initProjectInteractions() {

    const projects =
        document.querySelectorAll(
            ".project-card"
        );


    projects.forEach((project) => {

        const arrow =
            project.querySelector(
                ".project-arrow"
            );


        project.addEventListener(
            "mouseenter",
            () => {

                if (arrow) {

                    arrow.style.transform =
                        "translate(8px, -8px)";

                }

            }
        );


        project.addEventListener(
            "mouseleave",
            () => {

                if (arrow) {

                    arrow.style.transform =
                        "translate(0, 0)";

                }

            }
        );

    });

}


// =========================================================
// ACTIVE NAVIGATION
// =========================================================

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    if (
        !sections.length ||
        !navLinks.length
    ) {
        return;
    }


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        const id =
                            entry.target.id;


                        navLinks.forEach(
                            (link) => {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) === `#${id}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }

                });

            },
            {
                threshold: 0.35
            }
        );


    sections.forEach((section) => {

        observer.observe(section);

    });

}


// =========================================================
// SMOOTH ANCHOR OFFSET
// =========================================================

document.addEventListener(
    "click",
    (event) => {

        const link =
            event.target.closest(
                'a[href^="#"]'
            );


        if (!link) return;


        const targetId =
            link.getAttribute("href");


        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(
                targetId
            );


        if (!target) return;


        event.preventDefault();


        const navbar =
            document.getElementById(
                "navbar"
            );


        const offset =
            navbar
                ? navbar.offsetHeight
                : 0;


        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            offset;


        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    }
);


// =========================================================
// KEYBOARD ACCESSIBILITY
// =========================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            const mobileMenu =
                document.getElementById(
                    "mobileMenu"
                );

            const menuIcon =
                document.getElementById(
                    "menuIcon"
                );


            if (mobileMenu) {

                mobileMenu.classList.add(
                    "hidden"
                );

            }


            if (menuIcon) {

                menuIcon.textContent =
                    "+";

            }

        }

    }
);