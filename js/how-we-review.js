/* =========================================================
   ReviewNest — How We Review
   File: js/how-we-review.js
   Purpose: Page interactions and accessibility
   ========================================================= */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* ---------- Helper: Find elements safely ---------- */

    function selectAll(selectors, root = document) {
        return root.querySelectorAll(selectors);
    }

    /* ---------- Mobile Menu ---------- */

    const menuToggle = document.querySelector(
        ".hwr-menu-toggle, .how-we-review-menu-toggle, [data-hwr-menu-toggle]"
    );

    const mobileMenu = document.querySelector(
        ".hwr-mobile-menu, .how-we-review-mobile-menu, [data-hwr-mobile-menu]"
    );

    const menuOverlay = document.querySelector(
        ".hwr-menu-overlay, .how-we-review-menu-overlay, [data-hwr-menu-overlay]"
    );

    function closeMobileMenu() {
        if (!menuToggle || !mobileMenu) return;

        mobileMenu.classList.remove("is-open");
        menuToggle.classList.remove("is-active");

        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");

        if (menuOverlay) {
            menuOverlay.classList.remove("is-visible");
        }

        document.body.classList.remove("hwr-menu-open");
    }

    function openMobileMenu() {
        if (!menuToggle || !mobileMenu) return;

        mobileMenu.classList.add("is-open");
        menuToggle.classList.add("is-active");

        menuToggle.setAttribute("aria-expanded", "true");
        mobileMenu.setAttribute("aria-hidden", "false");

        if (menuOverlay) {
            menuOverlay.classList.add("is-visible");
        }

        document.body.classList.add("hwr-menu-open");
    }

    if (menuToggle && mobileMenu) {
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", function () {
            const isOpen = mobileMenu.classList.contains("is-open");

            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        if (menuOverlay) {
            menuOverlay.addEventListener("click", closeMobileMenu);
        }

        selectAll("a", mobileMenu).forEach(function (link) {
            link.addEventListener("click", closeMobileMenu);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMobileMenu();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
    }

    /* ---------- Smooth Scrolling ---------- */

    selectAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            let target;

            try {
                target = document.querySelector(targetId);
            } catch (error) {
                return;
            }

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });

            if (targetId.length > 1) {
                history.replaceState(null, "", targetId);
            }
        });
    });

    /* ---------- FAQ Accordion ---------- */

    const faqButtons = selectAll(
        ".hwr-faq-question, .how-we-review-faq-question, [data-hwr-faq]"
    );

    faqButtons.forEach(function (button) {
        const answerId = button.getAttribute("aria-controls");
        let answer = answerId ? document.getElementById(answerId) : null;

        if (!answer) {
            answer = button.nextElementSibling;
        }

        if (!answer) return;

        button.setAttribute("aria-expanded", "false");
        answer.hidden = true;

        button.addEventListener("click", function () {
            const isExpanded =
                button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", String(!isExpanded));
            answer.hidden = isExpanded;

            button.classList.toggle("is-open", !isExpanded);
            answer.classList.toggle("is-open", !isExpanded);
        });
    });

    /* ---------- Back to Top ---------- */

    const backToTop = document.querySelector(
        ".hwr-back-to-top, .how-we-review-back-to-top, [data-hwr-back-to-top]"
    );

    if (backToTop) {
        backToTop.hidden = true;

        function updateBackToTop() {
            backToTop.hidden = window.scrollY < 400;
        }

        window.addEventListener("scroll", updateBackToTop, {
            passive: true
        });

        updateBackToTop();

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth"
            });
        });
    }

    /* ---------- Scroll Reveal ---------- */

    const revealElements = selectAll(
        ".hwr-reveal, .how-we-review-reveal, [data-hwr-reveal]"
    );

    if ("IntersectionObserver" in window && revealElements.length > 0) {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) {
            revealElements.forEach(function (element) {
                element.classList.add("is-visible");
            });
        } else {
            const observer = new IntersectionObserver(
                function (entries, currentObserver) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("is-visible");
                            currentObserver.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -35px 0px"
                }
            );

            revealElements.forEach(function (element) {
                observer.observe(element);
            });
        }
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("is-visible");
        });
    }

    /* ---------- Current Year ---------- */

    selectAll("[data-current-year], .hwr-current-year").forEach(
        function (element) {
            element.textContent = new Date().getFullYear();
        }
    );

    /* ---------- External Links Safety ---------- */

    selectAll('a[target="_blank"]').forEach(function (link) {
        const relValues = new Set(
            (link.getAttribute("rel") || "")
                .split(/\s+/)
                .filter(Boolean)
        );

        relValues.add("noopener");
        relValues.add("noreferrer");

        link.setAttribute("rel", Array.from(relValues).join(" "));
    });

});