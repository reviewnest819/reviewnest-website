/* =========================================================
ReviewNest — Main JavaScript
Homepage + Professional Mobile Sidebar
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
"use strict";

/* 1. Automatic footer year */

const currentYear = document.getElementById("current-year");

if (currentYear) {
currentYear.textContent = new Date().getFullYear();
}











/* 4. Homepage content search */

const searchForm = document.querySelector(".product-search");

const searchableCards = Array.from(
document.querySelectorAll(
"#reviews .review-card, " +
"#categories .category-card, " +
"#buying-guides .guide-card"
)
);

if (searchForm && searchInput) {
const searchStatus = document.createElement("p");

searchStatus.className = "search-status";
searchStatus.setAttribute("role", "status");
searchStatus.setAttribute("aria-live", "polite");
searchStatus.hidden = true;

searchForm.insertAdjacentElement("afterend", searchStatus);

function resetSearch() {
searchableCards.forEach((card) => {
card.hidden = false;
card.style.display = "";
});

searchStatus.textContent = "";
searchStatus.hidden = true;

}

searchForm.addEventListener("submit", (event) => {
event.preventDefault();

const query = searchInput.value.trim().toLowerCase();

if (!query) {
  resetSearch();
  searchStatus.hidden = false;
  searchStatus.textContent = "Please enter a product or category to search.";
  searchInput.focus();
  return;
}

let matches = 0;
let firstMatch = null;

searchableCards.forEach((card) => {
  const searchableText = card.textContent.toLowerCase();
  const found = searchableText.includes(query);

  card.hidden = !found;
  card.style.display = found ? "" : "none";

  if (found) {
    matches++;

    if (!firstMatch) {
      firstMatch = card;
    }
  }
});

searchStatus.hidden = false;

if (matches > 0) {
  searchStatus.textContent =
    `Found ${matches} matching item${matches === 1 ? "" : "s"} on this homepage.`;

  firstMatch.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "center"
  });
} else {
  searchStatus.textContent =
    `No matching items found for "${searchInput.value.trim()}". Try another keyword.`;
}

});

searchInput.addEventListener("input", () => {
if (!searchInput.value.trim()) {
resetSearch();
}
});
}

/* 5. Respect reduced-motion preferences */

const reduceMotion = window.matchMedia(
"(prefers-reduced-motion: reduce)"
);

function updateMotionPreference(event) {
document.documentElement.classList.toggle(
"reduce-motion",
event.matches
);
}

updateMotionPreference(reduceMotion);

if (reduceMotion.addEventListener) {
reduceMotion.addEventListener("change", updateMotionPreference);
}
});




/* =========================================
   ReviewNest Floating Back To Top
========================================= */

(function () {
    "use strict";

    const button = document.getElementById("rnFloatingTop");

    if (!button) return;

    let ticking = false;

    function updateButton() {
        button.classList.toggle(
            "is-visible",
            window.scrollY > 300
        );

        ticking = false;
    }

    window.addEventListener(
        "scroll",
        function () {
            if (!ticking) {
                window.requestAnimationFrame(updateButton);
                ticking = true;
            }
        },
        { passive: true }
    );

    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ? "auto" : "smooth"
        });
    });

    updateButton();

})();











// ReviewNest: Header, Mobile Menu and Footer Navigation

document.addEventListener("click", function (event) {
    const link = event.target.closest(
        '.rn-desktop-nav a, .rn-mobile-nav a, .rn-footer a, .rn-footer-cta-button'
    );

    if (!link) return;

    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) return;

    const target = document.getElementById(href.slice(1));

    if (!target) {
        console.warn("ReviewNest: Target section not found:", href);
        return;
    }

    event.preventDefault();

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    history.replaceState(null, "", href);
});







/* =========================================
   REVIEWNEST HEADER — JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("rnHeader");

  if (!header) return;

  /* -----------------------------------------
     ELEMENTS
  ----------------------------------------- */

  const menuToggle = document.getElementById("rnMenuToggle");
  const mobileMenu = document.getElementById("rnMobileMenu");
  const menuClose = document.getElementById("rnMenuClose");
  const menuOverlay = document.getElementById("rnMenuOverlay");

  const searchToggle = document.getElementById("rnSearchToggle");
  const searchPanel = document.getElementById("rnSearchPanel");
  const searchClose = document.getElementById("rnSearchClose");
  const searchInput = document.getElementById("rnSearchInput");

  const desktopNav = document.getElementById("rnDesktopNav");

  /* -----------------------------------------
     DETECT CURRENT PAGE
  ----------------------------------------- */

  function getCurrentPage() {
    const pathname = window.location.pathname.toLowerCase();
    const filename = pathname.split("/").pop() || "index.html";

    if (
      filename === "electronics.html" ||
      filename === "electronics"
    ) {
      return "electronics";
    }

    if (
      filename === "reviews.html" ||
      filename === "reviews"
    ) {
      return "reviews";
    }

    if (
      filename === "buying-guides.html" ||
      filename === "buying-guides"
    ) {
      return "buying-guides";
    }

    return "home";
  }

  const currentPage = getCurrentPage();

  /* -----------------------------------------
     ACTIVE DESKTOP NAVIGATION
  ----------------------------------------- */

  if (desktopNav) {
    desktopNav.querySelectorAll(".rn-nav-link").forEach(function (link) {
      const linkPage = link.dataset.nav;

      const isActive =
        linkPage === currentPage ||
        (currentPage === "home" && linkPage === "home");

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  /* -----------------------------------------
     SELECT PAGE-SPECIFIC MOBILE MENU
  ----------------------------------------- */

  if (mobileMenu) {
    const homeMenu = mobileMenu.querySelector('[data-page-menu="home"]');
    const electronicsMenu = mobileMenu.querySelector(
      '[data-page-menu="electronics"]'
    );

    if (homeMenu && electronicsMenu) {
      if (currentPage === "electronics") {
        homeMenu.hidden = true;
        electronicsMenu.hidden = false;
      } else {
        homeMenu.hidden = false;
        electronicsMenu.hidden = true;
      }
    }

    mobileMenu.querySelectorAll(".rn-mobile-nav-link").forEach(function (link) {
      const href = link.getAttribute("href");

      if (!href) return;

      const linkFilename = href.split("/").pop().split("#")[0].toLowerCase();

      let linkPage = "home";

      if (linkFilename === "electronics.html") {
        linkPage = "electronics";
      } else if (linkFilename === "reviews.html") {
        linkPage = "reviews";
      } else if (linkFilename === "buying-guides.html") {
        linkPage = "buying-guides";
      }

      const isActive =
        linkPage === currentPage &&
        !href.includes("#");

      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  /* -----------------------------------------
     MOBILE MENU — OPEN / CLOSE
  ----------------------------------------- */

  function openMenu() {
    if (!mobileMenu || !menuOverlay || !menuToggle) return;

    closeSearch(false);

    mobileMenu.removeAttribute("inert");
    mobileMenu.setAttribute("aria-hidden", "false");

    mobileMenu.classList.add("is-open");
    menuOverlay.classList.add("is-visible");

    menuOverlay.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation menu");

    document.body.classList.add("menu-open");

    if (menuClose) {
      menuClose.focus();
    }
  }

  function closeMenu(returnFocus = false) {
    if (!mobileMenu || !menuOverlay || !menuToggle) return;

    mobileMenu.classList.remove("is-open");
    menuOverlay.classList.remove("is-visible");

    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.setAttribute("inert", "");

    menuOverlay.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

    document.body.classList.remove("menu-open");

    if (returnFocus) {
      menuToggle.focus();
    }
  }

  if (menuToggle && mobileMenu && menuOverlay) {
    menuToggle.addEventListener("click", function () {
      if (mobileMenu.classList.contains("is-open")) {
        closeMenu(true);
      } else {
        openMenu();
      }
    });

    if (menuClose) {
      menuClose.addEventListener("click", function () {
        closeMenu(true);
      });
    }

    menuOverlay.addEventListener("click", function () {
      closeMenu(true);
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu(false);
      });
    });
  }


  /* -----------------------------------------
     HEADER SEARCH — FOCUS EXISTING HERO SEARCH
  ----------------------------------------- */

function openSearch() {
  // Pehle mobile menu band karein
  closeMenu(false);

  // Homepage ke existing hero search ko select karein
  var heroSearch = document.getElementById("product-search-input");

  // Agar search doosre page par maujood nahi,
  // homepage par hero search tak jayein
  if (!heroSearch) {
    window.location.href = "index.html#product-search-input";
    return;
  }

  // Hero search tak scroll karein
  heroSearch.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  // Input par cursor le aayein
  window.setTimeout(function () {
    heroSearch.focus({
      preventScroll: true
    });
  }, 400);
}


  
  function closeSearch() {
    // Ab alag search panel istemal nahi hota
  }

  if (searchToggle) {
    searchToggle.addEventListener("click", function () {
      openSearch();
    });
  }

  /* -----------------------------------------
     ESCAPE KEY
  ----------------------------------------- */

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (mobileMenu && mobileMenu.classList.contains("is-open")) {
        closeMenu(true);
      }
    }
  });

  /* -----------------------------------------
     CLOSE MOBILE MENU ON DESKTOP RESIZE
  ----------------------------------------- */

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
      closeMenu(false);
    }
  });

  /* -----------------------------------------
     INITIAL ACCESSIBILITY STATE
  ----------------------------------------- */

  closeMenu(false);
});