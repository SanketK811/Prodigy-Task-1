const navbar = document.getElementById("navbar");

const navLinks =
    document.querySelectorAll(".nav-link");

const menuToggle =
    document.getElementById("menuToggle");

const navLinksContainer =
    document.getElementById("navLinks");

const sections =
    document.querySelectorAll(".section");


// =====================================
// CHANGE NAVBAR WHEN SCROLLING
// =====================================

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }


    // =================================
    // ACTIVE MENU ITEM
    // =================================

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// =====================================
// MOBILE MENU
// =====================================

menuToggle.addEventListener("click", function () {

    navLinksContainer.classList.toggle("show");

});


// =====================================
// CLOSE MOBILE MENU AFTER CLICK
// =====================================

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinksContainer.classList.remove("show");

    });

});