/* =========================================
   REVIEWNEST
   PHASE 16 — REUSABLE PRODUCT DATA
========================================= */

const REVIEWNEST_PRODUCT = {

    /* ---------- BASIC INFORMATION ---------- */

    id: "featured-product",

    name: "Featured Product",

    brand: "Brand Name",

    category: "Electronics",

    model: "Model Name",

    /* ---------- PRODUCT VISUAL ---------- */

    image: "images/product-main.webp",

    imageAlt: "Featured product",

    /* ---------- REVIEW ---------- */

    rating: 4.7,

    reviewCount: 128,

    reviewLabel: "ReviewNest Review",

    /* ---------- PRICE ---------- */

    price: "$299.99",

    previousPrice: "$349.99",

    discount: "14% OFF",

    currency: "USD",

    /* ---------- AMAZON ---------- */

    amazonUrl: "#",

    /* ---------- QUICK INFORMATION ---------- */

    availability: "Check current availability",

    /* ---------- PRODUCT HIGHLIGHTS ---------- */

    highlights: [
        "Strong everyday performance",
        "Premium overall design",
        "Useful features for everyday users"
    ],

    /* ---------- PROS ---------- */

    pros: [
        "Premium design",
        "Good everyday performance",
        "Useful feature set"
    ],

    /* ---------- CONS ---------- */

    cons: [
        "Some features may not suit every user",
        "Price can vary by seller"
    ],

    /* ---------- PRODUCT FIT ---------- */

    idealFor: [
        "Everyday users",
        "Productivity",
        "General entertainment"
    ],

    notIdealFor: [
        "Users looking for the lowest possible price",
        "Buyers needing highly specialized features"
    ]

};


/* =========================================
   SAFE GLOBAL ACCESS
========================================= */

window.REVIEWNEST_PRODUCT = REVIEWNEST_PRODUCT;


/* =========================================
   END PHASE 16 PRODUCT DATA
========================================= */