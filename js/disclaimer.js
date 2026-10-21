"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // Elements
    const pageLoader = document.getElementById("page-loader");
    const sidebar = document.getElementById("sidebar");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const sidebarClose = document.getElementById("sidebar-close");
    const mobileOverlay = document.getElementById("mobile-overlay");
    const currentYear = document.getElementById("current-year");

    // Update copyright year
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Hide page loader
    function hidePageLoader() {
        if (pageLoader) {
            pageLoader.classList.add("loaded");
            pageLoader.setAttribute("aria-hidden", "true");
        }
    }

    if (document.readyState === "complete") {
        hidePageLoader();
    } else {
        window.addEventListener("load", hidePageLoader, { once: true });
    }

    // Fallback: prevent loader from staying visible indefinitely
    window.setTimeout(hidePageLoader, 2500);

    // Mobile sidebar controls
    function openSidebar() {
        body.classList.add("menu-open");

        if (sidebar) {
            sidebar.setAttribute("aria-hidden", "false");
        }

        if (mobileMenuToggle) {
            mobileMenuToggle.setAttribute("aria-expanded", "true");
        }

        if (mobileOverlay) {
            mobileOverlay.setAttribute("aria-hidden", "false");
            mobileOverlay.style.visibility = "visible";
            mobileOverlay.style.opacity = "1";
            mobileOverlay.style.pointerEvents = "auto";
        }
    }

    function closeSidebar() {
        body.classList.remove("menu-open");

        if (sidebar) {
            sidebar.setAttribute("aria-hidden", "true");
        }

        if (mobileMenuToggle) {
            mobileMenuToggle.setAttribute("aria-expanded", "false");
        }

        if (mobileOverlay) {
            mobileOverlay.setAttribute("aria-hidden", "true");
            mobileOverlay.style.opacity = "0";
            mobileOverlay.style.pointerEvents = "none";
            mobileOverlay.style.visibility = "hidden";
        }
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener("click", function () {
            if (body.classList.contains("menu-open")) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    if (sidebarClose) {
        sidebarClose.addEventListener("click", closeSidebar);
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener("click", closeSidebar);
    }

    // Close sidebar after selecting a navigation link
    if (sidebar) {
        const sidebarLinks = sidebar.querySelectorAll("a");

        sidebarLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth <= 960) {
                    closeSidebar();
                }
            });
        });
    }

    // Close sidebar with Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && body.classList.contains("menu-open")) {
            closeSidebar();

            if (mobileMenuToggle) {
                mobileMenuToggle.focus();
            }
        }
    });

    // Close mobile sidebar when returning to desktop width
    window.addEventListener("resize", function () {
        if (window.innerWidth > 960 && body.classList.contains("menu-open")) {
            closeSidebar();
        }
    });

    // Smooth scrolling for on-page links
    const pageLinks = document.querySelectorAll(
        '.disclaimer-page a[href^="#"]'
    );

    pageLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (!targetElement) {
                return;
            }

            event.preventDefault();

            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            targetElement.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
                block: "start"
            });

            // Keep the URL hash in sync with the selected section
            if (history.replaceState) {
                history.replaceState(null, "", targetId);
            }
        });
    });

});