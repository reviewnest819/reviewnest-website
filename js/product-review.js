/* =========================================================
   REVIEWNEST
   PHASE 2 — PREMIUM INTERACTION SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const loader =
        document.getElementById("reviewLoader");

    const productImage =
        document.getElementById("productReviewImage");

    const placeholder =
        document.getElementById(
            "productImagePlaceholder"
        );

    const menuButton =
        document.getElementById(
            "temporaryMenuButton"
        );

    const menu =
        document.getElementById(
            "temporaryMobileMenu"
        );

    const overlay =
        document.getElementById(
            "mobileReviewOverlay"
        );

    const closeMenu =
        document.getElementById(
            "closeTemporaryMenu"
        );

    const backTop =
        document.getElementById(
            "reviewBackTop"
        );


    /* =====================================================
       LOADER
    ====================================================== */

    window.addEventListener(
        "load",
        () => {

            setTimeout(() => {

                if (loader) {
                    loader.classList.add(
                        "loaded"
                    );
                }

            }, 250);

        }
    );


    /* =====================================================
       PRODUCT IMAGE FALLBACK
    ====================================================== */

    function showPlaceholder() {

        if (!productImage || !placeholder) {
            return;
        }

        productImage.style.display =
            "none";

        placeholder.classList.add(
            "visible"
        );

    }


    function showImage() {

        if (!productImage || !placeholder) {
            return;
        }

        productImage.style.display =
            "block";

        placeholder.classList.remove(
            "visible"
        );

    }


    if (productImage) {

        productImage.addEventListener(
            "error",
            showPlaceholder
        );

        if (
            !productImage.src ||
            productImage.src.endsWith(
                "/undefined"
            )
        ) {

            showPlaceholder();

        }

    }


    /* =====================================================
       HERO IMAGE MOVEMENT
       Very subtle — premium feel without being distracting.
    ====================================================== */

    const heroVisual =
        document.querySelector(
            ".hero-product-visual"
        );


    const hoverSupported =
        window.matchMedia(
            "(hover: hover)"
        ).matches;


    if (
        heroVisual &&
        productImage &&
        hoverSupported
    ) {

        heroVisual.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    heroVisual.getBoundingClientRect();

                const x =
                    (
                        event.clientX -
                        rect.left
                    ) / rect.width;

                const y =
                    (
                        event.clientY -
                        rect.top
                    ) / rect.height;

                const moveX =
                    (x - .5) * 8;

                const moveY =
                    (y - .5) * 8;

                productImage.style.transform =
                    `translate(${moveX}px, ${moveY}px) scale(1.025)`;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                productImage.style.transform =
                    "";

            }
        );

    }


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    function openMenu() {

        if (!menu || !overlay) {
            return;
        }

        menu.classList.add(
            "active"
        );

        overlay.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeMobileMenu() {

        if (!menu || !overlay) {
            return;
        }

        menu.classList.remove(
            "active"
        );

        overlay.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";

    }


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            openMenu
        );

    }


    if (closeMenu) {

        closeMenu.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {
                closeMobileMenu();
            }

        }
    );


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    function updateBackTop() {

        if (!backTop) {
            return;
        }

        if (window.scrollY > 700) {

            backTop.classList.add(
                "visible"
            );

        } else {

            backTop.classList.remove(
                "visible"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackTop,
        { passive: true }
    );


    if (backTop) {

        backTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       AMAZON CTA PLACEHOLDER
    ====================================================== */

    document
        .querySelectorAll(
            ".amazon-review-cta"
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const href =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !href ||
                        href === "#"
                    ) {

                        event.preventDefault();

                        alert(
                            "Replace this button with the real Amazon affiliate link."
                        );

                    }

                }
            );

        });


    /* =====================================================
       SIMPLE REVEAL SYSTEM
       Gives sections a smooth entrance while scrolling.
    ====================================================== */

    const revealItems =
        document.querySelectorAll(
            `
            .editorial-decision-card,
            .editorial-point,
            .buyer-fit-row,
            .fact-editorial-row,
            .real-world-card
            `
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "review-visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: .12
                }
            );


        revealItems.forEach(
            (item) => {

                item.style.opacity =
                    "0";

                item.style.transform =
                    "translateY(18px)";

                item.style.transition =
                    "opacity 500ms ease, transform 500ms ease";

                observer.observe(item);

            }
        );

    }


    /* =====================================================
       GLOBAL REVEAL CLASS
    ====================================================== */

    const revealStyle =
        document.createElement(
            "style"
        );

    revealStyle.textContent = `

        .review-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

    `;

    document.head.appendChild(
        revealStyle
    );


    /* =====================================================
       INITIAL STATE
    ====================================================== */

    updateBackTop();

});






/* =========================================
   PHASE 3 — QUICK DECISION INTERACTIONS
========================================= */

(function () {
    "use strict";

    const decisionCenter = document.querySelector("#decision-center");

    if (!decisionCenter) return;


    /* -----------------------------------------
       Subtle reveal on scroll
    ----------------------------------------- */

    const revealItems = decisionCenter.querySelectorAll(
        ".pr3-decision-card, .pr3-bottom-line, .pr3-fact"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, obs) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("pr3-is-visible");

                    obs.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealItems.forEach((item) => {
            observer.observe(item);
        });

    } else {

        revealItems.forEach((item) => {
            item.classList.add("pr3-is-visible");
        });

    }


    /* -----------------------------------------
       Keyboard accessibility
    ----------------------------------------- */

    const cards = decisionCenter.querySelectorAll(
        ".pr3-decision-card"
    );

    cards.forEach((card) => {

        card.setAttribute("tabindex", "0");

        card.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                card.classList.toggle("pr3-card-focused");
            }

        });

    });


    /* -----------------------------------------
       Smooth decision-center navigation
    ----------------------------------------- */

    const decisionLinks = document.querySelectorAll(
        'a[href="#decision-center"]'
    );

    decisionLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            decisionCenter.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

})();





/* =========================================
   PHASE 4 — PROS & CONS INTERACTION
========================================= */

(function () {
    "use strict";

    const section = document.querySelector("#pros-cons");

    if (!section) return;

    const panels = section.querySelectorAll(".pr4-panel");


    /* -----------------------------------------
       Keyboard accessibility
    ----------------------------------------- */

    panels.forEach((panel) => {

        panel.setAttribute("tabindex", "0");

        panel.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {
                panel.classList.toggle("pr4-panel-active");
            }

        });

    });


    /* -----------------------------------------
       Reveal when visible
    ----------------------------------------- */

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, obs) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("pr4-visible");

                    obs.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        panels.forEach((panel) => {
            observer.observe(panel);
        });

    } else {

        panels.forEach((panel) => {
            panel.classList.add("pr4-visible");
        });

    }

})();




/* =========================================
   PHASE 5 — EDITORIAL MICRO INTERACTIONS
========================================= */

(function () {
    "use strict";

    const section = document.querySelector("#editorial-review");

    if (!section) return;

    const visual = section.querySelector(".pr5-feature-visual");

    if (!visual) return;

    /* -----------------------------------------
       Very subtle desktop visual movement
    ----------------------------------------- */

    if (
        window.matchMedia("(min-width: 901px)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {

        visual.addEventListener("mousemove", (event) => {

            const rect = visual.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) / rect.width - 0.5) * 4;

            const y =
                ((event.clientY - rect.top) / rect.height - 0.5) * 4;

            visual.style.transform =
                `translate3d(${x}px, ${y}px, 0)`;

        });

        visual.addEventListener("mouseleave", () => {

            visual.style.transform =
                "translate3d(0, 0, 0)";

        });

    }

})();








/* =========================================
   PHASE 16 — PRODUCT DATA BINDING
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const product = window.REVIEWNEST_PRODUCT;

    if (!product) {
        console.warn("ReviewNest product data was not found.");
        return;
    }


    /* ---------- DATA ATTRIBUTES ---------- */

    document.querySelectorAll("[data-product-name]")
        .forEach((element) => {
            element.textContent = product.name;
        });


    document.querySelectorAll("[data-product-brand]")
        .forEach((element) => {
            element.textContent = product.brand;
        });


    document.querySelectorAll("[data-product-model]")
        .forEach((element) => {
            element.textContent = product.model;
        });


    document.querySelectorAll("[data-product-price]")
        .forEach((element) => {
            element.textContent = product.price;
        });


    document.querySelectorAll("[data-product-old-price]")
        .forEach((element) => {
            element.textContent = product.previousPrice;
        });


    document.querySelectorAll("[data-product-discount]")
        .forEach((element) => {
            element.textContent = product.discount;
        });


    document.querySelectorAll("[data-product-rating]")
        .forEach((element) => {
            element.textContent = product.rating;
        });


    document.querySelectorAll("[data-product-review-count]")
        .forEach((element) => {
            element.textContent = product.reviewCount;
        });


    document.querySelectorAll("[data-product-category]")
        .forEach((element) => {
            element.textContent = product.category;
        });


    /* ---------- PRODUCT IMAGES ---------- */

    document.querySelectorAll("[data-product-image]")
        .forEach((image) => {

            image.src = product.image;
            image.alt = product.imageAlt;

        });


    /* ---------- AMAZON LINKS ---------- */

    document.querySelectorAll("[data-amazon-link]")
        .forEach((link) => {

            link.href = product.amazonUrl;

            link.target = "_blank";
            link.rel = "nofollow sponsored noopener";

        });


    /* ---------- AVAILABILITY ---------- */

    document.querySelectorAll("[data-product-availability]")
        .forEach((element) => {
            element.textContent = product.availability;
        });


    /* ---------- PRODUCT HIGHLIGHTS ---------- */

    document.querySelectorAll("[data-product-highlights]")
        .forEach((container) => {

            container.innerHTML = "";

            product.highlights.forEach((item) => {

                const li = document.createElement("li");

                li.textContent = item;

                container.appendChild(li);

            });

        });


    /* ---------- PROS ---------- */

    document.querySelectorAll("[data-product-pros]")
        .forEach((container) => {

            container.innerHTML = "";

            product.pros.forEach((item) => {

                const li = document.createElement("li");

                li.textContent = item;

                container.appendChild(li);

            });

        });


    /* ---------- CONS ---------- */

    document.querySelectorAll("[data-product-cons]")
        .forEach((container) => {

            container.innerHTML = "";

            product.cons.forEach((item) => {

                const li = document.createElement("li");

                li.textContent = item;

                container.appendChild(li);

            });

        });


    /* ---------- IDEAL FOR ---------- */

    document.querySelectorAll("[data-product-ideal-for]")
        .forEach((container) => {

            container.innerHTML = "";

            product.idealFor.forEach((item) => {

                const li = document.createElement("li");

                li.textContent = item;

                container.appendChild(li);

            });

        });


    /* ---------- NOT IDEAL FOR ---------- */

    document.querySelectorAll("[data-product-not-ideal]")
        .forEach((container) => {

            container.innerHTML = "";

            product.notIdealFor.forEach((item) => {

                const li = document.createElement("li");

                li.textContent = item;

                container.appendChild(li);

            });

        });


    console.log(
        "ReviewNest product loaded:",
        product.name
    );

});


/* =========================================
   END PHASE 16 DATA BINDING
========================================= */







/* =========================================
   PHASE 16 — FINAL PAGE DIAGNOSTICS
========================================= */

window.addEventListener("load", () => {

    const brokenImages = [];

    document.querySelectorAll("img").forEach((image) => {

        if (!image.complete || image.naturalWidth === 0) {

            brokenImages.push(
                image.getAttribute("src")
            );

        }

    });


    const brokenLinks = [];

    document.querySelectorAll("a").forEach((link) => {

        const href = link.getAttribute("href");

        if (
            !href ||
            href === "#" ||
            href === "javascript:void(0)"
        ) {

            brokenLinks.push(link.textContent.trim());

        }

    });


    console.group("ReviewNest Phase 16 Diagnostics");

    console.log(
        "Images checked:",
        document.images.length
    );

    console.log(
        "Broken images:",
        brokenImages.length,
        brokenImages
    );

    console.log(
        "Placeholder / empty links:",
        brokenLinks.length,
        brokenLinks
    );

    console.log(
        "Product data:",
        window.REVIEWNEST_PRODUCT
    );

    console.groupEnd();

});


/* =========================================
   END PHASE 16 DIAGNOSTICS
========================================= */