
document.addEventListener("DOMContentLoaded", function () {
"use strict";

/* =========================================================  
   REVIEWNEST - ELECTRONICS PAGE  
   Step 1-7:  
   Product Data + Cards + Grid + Pagination  
   + Search + Sorting + Filter System  
   ========================================================= */  


/* =========================================================  
   1. PRODUCT DATA  
   ========================================================= */  

const products = [  
    {
    id: 1,
    name: "Apple AirPods 3rd Generation (Renewed)",
    type: "Audio",
    rating: 4.3,
    reviews: 6785,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Apple",
    description: "Open-fit wireless earbuds with Apple ecosystem features, Spatial Audio and Adaptive EQ.",
    keywords: "Apple AirPods 3rd Generation, AirPods 3, renewed, wireless earbuds, Spatial Audio, Adaptive EQ",
    url: "product-review.html"
},
    {
    id: 2,
    name: "Apple AirPods 4 with Active Noise Cancellation (Renewed)",
    type: "Audio",
    rating: 4.3,
    reviews: 870,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Apple",
    description: "Wireless earbuds with Active Noise Cancellation, Apple H2 chip, Adaptive Audio, and other smart Apple features.",
    keywords: "Apple AirPods 4, AirPods 4 ANC, Active Noise Cancellation, H2 chip, wireless earbuds, Renewed, Apple",
    url: "product-review-1.html"
},
    
{
    id: 3,
    name: "Tukio Air Tracker Tags - 4 Pack",
    type: "Accessories",
    rating: 4.1,
    reviews: 4575,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Tukio",
    description: "Four Apple Find My-compatible tracker tags with replaceable CR2032 batteries, IP67 protection, silicone cases, key rings and lanyards. iOS only.",
    keywords: "Tukio Air Tracker Tags, Lucid Tag, 4 Pack, Apple Find My, Bluetooth tracker, CR2032, IP67, iOS tracker, luggage tracker, key finder",
    url: "product-review-2.html"
},
    
{
    id: 4,
    name: "Apple Watch Series 11 [GPS, 46mm] (Renewed Premium)",
    type: "Smartwatches",
    rating: 5.0,
    reviews: 6,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Apple",
    description: "46mm Jet Black aluminum smartwatch with watchOS 26, 64GB storage, built-in GPS and Bluetooth. Renewed Premium condition; listing states battery capacity exceeds 80% of new.",
    keywords: "Apple Watch Series 11, 46mm GPS, Renewed Premium, Jet Black Aluminum, Black Sport Band M/L, watchOS 26, 64GB, Bluetooth, smartwatch",
    url: "product-review-3.html"
},


{
    id: 5,
    name: "Apple Watch Ultra 3 [GPS + Cellular, 49mm] (Renewed)",
    type: "Smartwatches",
    rating: 4.6,
    reviews: 101,
    price: 150421.80,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Apple",
    description: "49mm black titanium Apple Watch with GPS + Cellular connectivity and Black Ocean Band. Amazon Renewed condition; customer feedback highlights functionality, appearance and battery life.",
    keywords: "Apple Watch Ultra 3, GPS Cellular, 49mm, Black Titanium, Black Ocean Band, Renewed, rugged smartwatch, outdoor watch",
    url: "product-review-4.html"
},

{
    id: 6,
    name: "Samsung Galaxy Watch 7 [Bluetooth, 40mm] - Cream",
    type: "Smartwatches",
    rating: 4.6,
    reviews: 7958,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Samsung",
    description: "40mm Cream smartwatch with Armor Aluminum construction, Bluetooth connectivity, 32GB storage, 2GB memory, dual-frequency GPS, Galaxy AI health features and sleep tracking. Battery life varies considerably with usage.",
    keywords: "Samsung Galaxy Watch 7, Galaxy Watch 7 40mm, Bluetooth smartwatch, Cream, Armor Aluminum, Galaxy AI, Energy Score, Wellness Tips, dual-frequency GPS, 32GB storage, 300mAh battery, health tracking, sleep monitoring",
    url: "product-review-5.html"
},

{
    id: 7,
    name: "Sony WH-1000XM6 Wireless Over-Ear Headphones - Black",
    type: "Audio",
    rating: 4.2,
    reviews: 3809,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Sony",
    description: "Premium wireless over-ear headphones featuring the QN3 noise-cancelling processor, 12 microphones, Active Noise Cancellation, LDAC, High-Resolution Audio and up to 30 hours of advertised battery life. Fit and comfort may vary between users.",
    keywords: "Sony WH-1000XM6, Sony headphones, wireless over-ear headphones, Black, Active Noise Cancellation, QN3 processor, 12 microphones, LDAC, High-Resolution Audio, 30-hour battery life, noise cancelling headphones",
    url: "product-review-6.html"
},
    
{
    id: 8,
    name: "Bose QuietComfort Wireless Headphones - Black",
    type: "Audio",
    rating: 4.5,
    reviews: 22002,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Bose",
    description: "Black wireless over-ear headphones featuring active noise cancellation, Quiet and Aware modes, adjustable EQ, multipoint Bluetooth, wired listening and up to 24 hours of advertised battery life.",
    keywords: "Bose QuietComfort, Bose QuietComfort Headphones, wireless headphones, over-ear headphones, Black, Active Noise Cancellation, ANC, Quiet Mode, Aware Mode, adjustable EQ, multipoint Bluetooth, USB-C charging, 24-hour battery life",
    url: "product-review-7.html"
},

{
    id: 9,
    name: "JBL Charge 6 Portable Bluetooth Speaker - Black",
    type: "Speakers",
    rating: 4.6,
    reviews: 7016,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "JBL",
    description: "Rugged portable Bluetooth speaker with IP68 water and dust resistance, drop protection, Auracast connectivity, built-in powerbank, customizable 7-band EQ and up to 28 hours of advertised playtime.",
    keywords: "JBL Charge 6, JBL Charge 6 Black, portable Bluetooth speaker, IP68 waterproof speaker, dustproof speaker, Auracast, built-in powerbank, 28-hour battery, 7-band EQ, outdoor speaker, camping speaker",
    url: "product-review-8.html"
},

{
    id: 10,
    name: "BolaButty 20W Portable Bluetooth Speaker - Black",
    type: "Audio",
    rating: 4.5,
    reviews: 39266,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "BolaButty",
    description: "Compact 20W stereo Bluetooth speaker featuring Bluetooth 5.3, IPX5 water resistance, TWS pairing, LED lighting, a built-in microphone, AUX connectivity and up to 24 hours of advertised battery life.",
    keywords: "BolaButty Bluetooth Speaker, 20W Portable Speaker, Black, Bluetooth 5.3, IPX5, TWS Pairing, LED Lights, AUX Input, Built-in Microphone, USB-C Charging, 24-Hour Battery, Portable Wireless Speaker",
    url: "product-review-9.html"
},


{
    id: 11,
    name: "Roku Streaming Stick 4K (Renewed)",
    type: "Streaming Devices",
    rating: 4.4,
    reviews: 6014,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Roku",
    description: "Compact 4K streaming stick supporting Dolby Vision, HDR10+, HDR10, HLG, long-range dual-band Wi-Fi, voice control and AirPlay 2. Renewed condition; accessories and cosmetic appearance may vary.",
    keywords: "Roku Streaming Stick 4K, Roku 3820, Renewed Streaming Device, 4K Ultra HD, Dolby Vision, HDR10+, HDR10, HLG, 60fps, Long-Range Wi-Fi, Voice Remote, AirPlay 2, Alexa, Google Assistant",
    url: "product-review-10.html"
},


{
    id: 12,
    name: "Amazon Fire TV Stick 4K Max (2nd Gen)",
    type: "Streaming Devices",
    rating: 4.6,
    reviews: 157,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Amazon",
    description: "Premium 4K streaming stick with Dolby Vision, HDR10+, HDR10, HLG, Dolby Atmos, Wi-Fi 6E, 16GB storage, Alexa voice control and Fire TV Ambient Experience.",
    keywords: "Amazon Fire TV Stick 4K Max, 2nd Gen, B0CHH6Y67Y, 4K Streaming Device, Dolby Vision, HDR10+, Dolby Atmos, Wi-Fi 6E, 16GB Storage, Alexa Voice Remote Enhanced, Ambient Experience, Cloud Gaming, Amazon Luna, Xbox Game Pass, NVIDIA GeForce NOW",
    url: "product-review-11.html"
},

{
    id: 13,
    name: "Roku Streaming Stick 4K (Renewed)",
    type: "Streaming Devices",
    rating: 4.4,
    reviews: 6017,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Roku",
    description: "Compact 4K streaming stick supporting Dolby Vision, HDR10, HDR10+, HLG, long-range dual-band Wi-Fi, voice control and AirPlay 2. Renewed condition; check the listing for included accessories and return coverage.",
    keywords: "Roku Streaming Stick 4K, Roku 3820, Renewed Streaming Device, 4K Ultra HD, Dolby Vision, HDR10, HDR10+, HLG, 60fps, Long-Range Wi-Fi, Voice Remote, AirPlay 2, Alexa, Google Assistant",
    url: "product-review-12.html"
},


{
    id: 14,
    name: "Kindle Essentials Bundle — 2024 Release, Matcha",
    type: "E-Readers",
    rating: 4.8,
    reviews: 462,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Amazon",
    description: "2024 Kindle bundle featuring a 6-inch glare-free 300 ppi display, adjustable front light, dark mode, 16GB storage, USB-C charging and up to 6 weeks of advertised battery life. Includes a Matcha fabric cover and 9W power adapter.",
    keywords: "Amazon Kindle Essentials Bundle, Kindle 2024, Matcha, E-Reader, 6-inch Display, 300 PPI, 16GB Storage, USB-C, Dark Mode, Adjustable Front Light, Matcha Fabric Cover, 9W Power Adapter",
    url: "product-review-13.html"
},


{
    id: 15,
    name: "typecase Edge iPad Keyboard Case — A16 11th/10th Gen, Black",
    type: "Accessories",
    rating: 4.4,
    reviews: 1228,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "typecase",
    description: "iPad keyboard case featuring a floating magnetic stand, precision Multi-Touch trackpad, 64-key QWERTY keyboard with 11-color backlighting, rechargeable Bluetooth connectivity and an Apple Pencil holder. Compatible with listed iPad A16 11th-generation and iPad 10th-generation models.",
    keywords: "typecase Edge, iPad Keyboard Case, iPad A16 11th Gen, iPad 10th Gen, Black, Floating Magnetic Stand, Multi-Touch Trackpad, 64-Key QWERTY, 11-Color Backlit Keyboard, Bluetooth, Rechargeable Keyboard, Apple Pencil Holder",
    url: "product-review-14.html"
},

{
    id: 16,
    name: "Samsung Galaxy Tab A11+ 6GB/128GB — Gray",
    type: "Tablets",
    rating: 4.6,
    reviews: 2590,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Samsung",
    description: "11-inch Android tablet featuring a 1920 × 1200 LCD display with up to 90Hz refresh rate, MediaTek Dimensity 7300 processor, 6GB RAM, 128GB expandable storage, quad Dolby Atmos speakers, a 7,040mAh battery and Android 16. This is the Wi-Fi configuration without LTE or 5G.",
    keywords: "Samsung Galaxy Tab A11+, 6GB RAM, 128GB Storage, Gray, Android 16, 11-inch Tablet, 1920x1200 Display, 90Hz Refresh Rate, TFT LCD, MediaTek Dimensity 7300, microSD Expansion, Dolby Atmos, Quad Speakers, 7040mAh Battery, Wi-Fi Tablet",
    url: "product-review-15.html"
},

{
    id: 17,
    name: "Apple MacBook Air 13-inch M5 — 16GB/512GB, Midnight",
    type: "Laptops",
    rating: 4.7,
    reviews: 1174,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Apple",
    description: "13-inch MacBook Air featuring the Apple M5 chip, 16GB unified memory, 512GB SSD and a 13.6-inch Liquid Retina display with 2560 × 1664 resolution. Includes Wi-Fi 7, Bluetooth 6, a 12MP Center Stage camera and a fanless design, with up to 18 hours of rated video-streaming battery life.",
    keywords: "Apple MacBook Air M5, 13-inch MacBook, 16GB Unified Memory, 512GB SSD, Midnight, Liquid Retina Display, 2560x1664, Apple M5 Chip, 10-Core CPU, 8-Core GPU, Wi-Fi 7, Bluetooth 6, 12MP Center Stage Camera, Thunderbolt 4, MagSafe 3, macOS Laptop",
    url: "product-review-16.html"
},

{
    id: 18,
    name: "SPIDERCASE Magnetic Clear Case for Samsung Galaxy S26 Ultra",
    type: "Accessories",
    rating: 4.5,
    reviews: 10639,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "SPIDERCASE",
    description: "Clear protective case for the Samsung Galaxy S26 Ultra featuring a built-in magnetic ring, foldable aluminum kickstand, reinforced corners and raised screen and camera edges. The manufacturer claims drop protection up to 12 feet. The case is not water resistant, and magnetic performance and kickstand durability may vary with use.",
    keywords: "SPIDERCASE, Samsung Galaxy S26 Ultra Case, Clear Magnetic Case, Built-in Aluminum Kickstand, 12-Foot Drop Protection Claim, Raised Camera Protection, Raised Screen Edges, Reinforced Corners, Magnetic Wireless Charging, Magnetic Accessories, Slim Protective Case",
    url: "ptoduct-review-17.html"
},




{
    id: 19,
    name: "Nintendo Switch 2 Pro Controller",
    type: "Accessories",
    rating: 4.8,
    reviews: 3687,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "Nintendo",
    description: "Official wireless controller for Nintendo Switch 2 featuring HD Rumble 2, motion controls, programmable GL/GR rear buttons, built-in amiibo functionality, a dedicated GameChat button and a 3.5mm audio jack. Nintendo rates the battery for approximately 40 hours of use. Its premium price and traditional stick design are worth considering before buying.",
    keywords: "Nintendo Switch 2 Pro Controller, Nintendo Controller, Wireless Gaming Controller, HD Rumble 2, Motion Controls, GL GR Programmable Buttons, Amiibo Support, GameChat C Button, 40 Hour Battery, 3.5mm Audio Jack, Switch 2 Accessories",
    url: "product-review-18.html"
},


{
    id: 20,
    name: "Meta Quest 3S 256GB — Batman: Arkham Shadow + 16FT Link Cable",
    type: "VR Headsets",
    rating: 5.0,
    reviews: 10,
    price: null,
    featured: false,
    date: "",
    image: "images/products/product-01.webp",
    brand: "XTRIZ",
    description: "XTRIZ bundle featuring the Meta Quest 3S 256GB standalone VR headset, Batman: Arkham Shadow and a 16FT (4.8m) Link Cable for compatible PC VR gaming. The headset uses LCD displays with 1832 × 1920 resolution per eye and Fresnel lenses, with refresh rates up to 120Hz. Typical battery life is around 2–2.5 hours. Customer review text was not available in the supplied listing.",
    keywords: "XTRIZ, Meta Quest 3S 256GB, VR Headset, Virtual Reality, Batman Arkham Shadow, 16FT Link Cable, 4.8m PC VR Cable, Standalone VR Gaming, PC VR, LCD Display, Fresnel Lenses, 120Hz Refresh Rate, Snapdragon XR2 Gen 2, 8GB RAM, Meta Quest Accessories",
    url: "product-review-20.html"
},



  /* {  
        id: 21,  
        name: "JBL Bluetooth Speaker",  
        type: "Audio",  
        rating: 4.5,  
        reviews: 5430,  
        price: 89.99,  
        featured: false,  
        date: "2026-08-02",  
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80"  
    },  
    {  
        id: 22,  
        name: "HP Wireless Printer",  
        type: "Printers",  
        rating: 4.3,  
        reviews: 2890,  
        price: 179.99,  
        featured: false,  
        date: "2026-07-30",  
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=80"  
    },  
    {  
        id: 23,  
        name: "Microsoft Surface Laptop",  
        type: "Computers",  
        rating: 4.6,  
        reviews: 4910,  
        price: 999.99,  
        featured: false,  
        date: "2026-07-27",  
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80"  
    },  
    {  
        id: 24,  
        name: "Google Nest Hub",  
        type: "Smart Home",  
        rating: 4.4,  
        reviews: 3720,  
        price: 99.99,  
        featured: false,  
        date: "2026-07-24",  
        image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=900&q=80"  
    },  
    {  
        id: 25,  
        name: "Sony 4K Blu-ray Player",  
        type: "Home Entertainment",  
        rating: 4.5,  
        reviews: 2180,  
        price: 249.99,  
        featured: false,  
        date: "2026-07-21",  
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80"  
    },  
    {  
        id: 26,  
        name: "Fitbit Charge",  
        type: "Wearables",  
        rating: 4.4,  
        reviews: 6240,  
        price: 149.99,  
        featured: false,  
        date: "2026-07-18",  
        image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=900&q=80"  
    },  
    {  
        id: 27,  
        name: "ASUS Gaming Monitor",  
        type: "Monitors",  
        rating: 4.7,  
        reviews: 3980,  
        price: 299.99,  
        featured: false,  
        date: "2026-07-15",  
        image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=900&q=80"  
    },  
    {  
        id: 28,  
        name: "Anker Wireless Charger",  
        type: "Accessories",  
        rating: 4.3,  
        reviews: 4470,  
        price: 39.99,  
        featured: false,  
        date: "2026-07-12",  
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80"  
    },  
    {  
        id: 29,  
        name: "Canon Mirrorless Camera",  
        type: "Cameras",  
        rating: 4.8,  
        reviews: 5610,  
        price: 1299.99,  
        featured: true,  
        date: "2026-07-09",  
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"  
    },  
    {  
        id: 30,  
        name: "Amazon Fire TV Stick",  
        type: "Streaming",  
        rating: 4.5,  
        reviews: 15840,  
        price: 39.99,  
        featured: false,  
        date: "2026-07-06",  
        image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=900&q=80"  
    }  */
];  


/* =========================================================  
   2. PAGE ELEMENTS  
   ========================================================= */  

const productsGrid = document.getElementById("productsGrid");  
const productsResultCount = document.getElementById("productsResultCount");  
const productsPagination = document.getElementById("productsPagination");  
const productsEmptyState = document.getElementById("productsEmptyState");  

const clearProductsButton = document.getElementById("clearProductsButton");  

const electronicsSearch = document.getElementById("electronicsSearch");  
const electronicsSearchButton = document.getElementById("electronicsSearchButton");  
  
const electronicsSearchSuggestions =  
document.getElementById("electronicsSearchSuggestions");  
  
const searchSuggestionButtons =  
document.querySelectorAll(".search-suggestion");

if (electronicsSearch) {

electronicsSearch.addEventListener(  
    "input",  
    function () {  
        performSearch();  
    }  
);  

electronicsSearch.addEventListener(  
    "keydown",  
    function (event) {  

        if (  
            event.key === "Enter" ||  
            event.key === "Search" ||  
            event.key === "Go"  
        ) {  

            event.preventDefault();  

            if (electronicsSearchButton) {  
                electronicsSearchButton.click();  
            }  

        }  

    }  
);

}

/* =========================================

SEARCH SUGGESTION CLICK
========================================= */

if (searchSuggestionButtons.length > 0) {

searchSuggestionButtons.forEach(function (button) {  

    button.addEventListener(  
        "click",  
        function (event) {  

            event.preventDefault();  

            var selectedSearch =  
                button.getAttribute("data-search");  

            if (!selectedSearch) {  
                return;  
            }  

            /* Put suggestion text into search input */  

            if (electronicsSearch) {  
                electronicsSearch.value =  
                    selectedSearch;  
            }  

            /* Close suggestions */  

            if (electronicsSearchSuggestions) {  
                electronicsSearchSuggestions.hidden = true;  
            }  

            /* Run the search */  

            if (electronicsSearchButton) {  
                electronicsSearchButton.click();  
            }  

        }  
    );  

});

}

const sortButton = document.getElementById("sortButton");  
const sortMenu = document.getElementById("sortMenu");  
const sortButtonLabel = document.getElementById("sortButtonLabel");  
const sortOptions = document.querySelectorAll(".sort-option");  

const filterButton = document.getElementById("filterButton");  

const mobileFilterButton = document.getElementById("mobileFilterButton");

const filterPanel = document.getElementById("filterPanel");  
const filterCloseButton = document.getElementById("filterCloseButton");  
const filterApplyButton = document.getElementById("filterApplyButton");  
const filterClearButton = document.getElementById("filterClearButton");  
const filterActiveCount = document.getElementById("filterActiveCount");  
const filterBackdrop = document.getElementById("filterBackdrop");  

const featuredFilter = document.getElementById("featuredFilter");  

const productTypeFilters =  
    document.querySelectorAll('input[name="productType"]');  

const ratingFilters =  
    document.querySelectorAll('input[name="rating"]');  

const priceFilters =  
    document.querySelectorAll('input[name="price"]');  


/* =========================================================  
   3. STATE  
   ========================================================= */  

let currentPage = 1;  
let searchTerm = "";  
let currentSort = "relevant";  
  
const PRODUCTS_PER_PAGE = 12;  

let currentFilters = {  
    productType: "all",  
    rating: 0,  
    price: "all",  
    featured: false  
};  


/* =========================================================  
   4. PRODUCTS PER PAGE  
   ========================================================= */  

function getProductsPerPage() {  

    if (window.innerWidth <= 760) {  
        return 10;  
    }  

    return 15;  
}  



/* =========================================================
   5. PRICE FORMAT
   ========================================================= */

function formatPrice(price) {

    // Price missing ho to error ya fake price show na karein
    if (price === null || price === undefined || price === "") {
        return "Price unavailable";
    }

    // Invalid price se bachao
    const numericPrice = Number(price);

    if (!Number.isFinite(numericPrice)) {
        return "Price unavailable";
    }

    // Valid price format karein
    return "$" + numericPrice.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}



/* =========================================================  
   6. RATING HTML  
   ========================================================= */  

function createRating(rating) {  

    let stars = "";  

    for (let i = 1; i <= 5; i++) {  

        if (rating >= i) {  

            stars += "★";  

        } else if (rating >= i - 0.5) {  

            stars += "½";  

        } else {  

            stars += "☆";  
        }  
    }  

    return (  
        '<div class="product-rating">' +  
            '<span class="rating-stars">' +  
                stars +  
            "</span>" +  
            '<span class="rating-number">' +  
                rating.toFixed(1) +  
            "</span>" +  
        "</div>"  
    );  
}  


/* =========================================================  
   7. PRODUCT CARD  
   ========================================================= */  

function createProductCard(product) {  

    const featuredBadge = product.featured  
        ? '<span class="product-badge">Featured</span>'  
        : "";  

    return (  
        '<article class="product-card" data-product-id="' +  
            product.id +  
        '">' +  

            '<div class="product-image-wrap">' +  
                featuredBadge +  

                '<img ' +  
                    'class="product-image" ' +  
                    'src="' + product.image + '" ' +  
                    'alt="' + product.name + '" ' +  
                    'loading="lazy"' +  
                ">" +  

            "</div>" +  

            '<div class="product-card-content">' +  

                '<span class="product-type">' +  
                    product.type +  
                "</span>" +  

                '<h3 class="product-title">' +  
                    product.name +  
                "</h3>" +  

                createRating(product.rating) +  

                '<div class="product-review-count">' +  
                    product.reviews.toLocaleString("en-US") +  
                    " reviews" +  
                "</div>" +  

               '<div class="product-card-bottom">' +

    '<div class="product-price">' +
        formatPrice(product.price) +
    "</div>" +

    '<a ' +
        'class="product-review-button" ' +
        'href="' + product.url + '"' +
    '>' +
        "Read Review" +
    "</a>" +

"</div>" +

            "</div>" +  

        "</article>"  
    );  
}  


/* =========================================================  
   8. CHECKED VALUE HELPER  
   ========================================================= */  

function getCheckedValue(list, fallback) {  

    for (let i = 0; i < list.length; i++) {  

        if (list[i].checked) {  
            return list[i].value;  
        }  
    }  

    return fallback;  
}  


/* =========================================================  
   9. SET CHECKED VALUE  
   ========================================================= */  

function setCheckedValue(list, value) {  

    for (let i = 0; i < list.length; i++) {  

        list[i].checked =  
            String(list[i].value) === String(value);  
    }  
}  


/* =========================================================  
   10. PRICE FILTER CHECK  
   ========================================================= */  

function matchesPriceFilter(price, priceRange) {  

    if (priceRange === "all") {  
        return true;  
    }  

    if (priceRange === "0-100") {  
        return price < 100;  
    }  

    if (priceRange === "100-300") {  
        return price >= 100 && price < 300;  
    }  

    if (priceRange === "300-700") {  
        return price >= 300 && price < 700;  
    }  

    if (priceRange === "700-1200") {  
        return price >= 700 && price < 1200;  
    }  

    if (priceRange === "1200-plus") {  
        return price >= 1200;  
    }  

    return true;  
}  


/* =========================================================  
   11. GET FILTERED + SORTED PRODUCTS  
   ========================================================= */  

function getVisibleProducts() {  

    let visibleProducts = products.filter(function (product) {  

        /* Search */  

        if (searchTerm !== "") {  

            const searchableText = (  
product.name +  
" " +  
product.type +  
" " +  
(product.brand || "") +  
" " +  
(product.description || "") +  
" " +  
(product.keywords || "")

).toLowerCase();

if (  
                searchableText.indexOf(searchTerm) === -1  
            ) {  
                return false;  
            }  
        }  


        /* Product Type */  

        if (  
            currentFilters.productType !== "all" &&  
            product.type !== currentFilters.productType  
        ) {  
            return false;  
        }  


        /* Rating */  

        if (  
            product.rating <  
            currentFilters.rating  
        ) {  
            return false;  
        }  


        /* Price */  

        if (  
            !matchesPriceFilter(  
                product.price,  
                currentFilters.price  
            )  
        ) {  
            return false;  
        }  


        /* Featured */  

        if (  
            currentFilters.featured &&  
            !product.featured  
        ) {  
            return false;  
        }  


        return true;  
    });  


    /* =====================================================  
       SORTING  
       ===================================================== */  

    if (currentSort === "highest-rated") {  

        visibleProducts.sort(function (a, b) {  
            return b.rating - a.rating;  
        });  

    } else if (currentSort === "most-reviewed") {  

        visibleProducts.sort(function (a, b) {  
            return b.reviews - a.reviews;  
        });  

    } else if (currentSort === "price-low") {  

        visibleProducts.sort(function (a, b) {  
            return a.price - b.price;  
        });  

    } else if (currentSort === "price-high") {  

        visibleProducts.sort(function (a, b) {  
            return b.price - a.price;  
        });  

    } else if (currentSort === "newest") {  

        visibleProducts.sort(function (a, b) {  
            return new Date(b.date) - new Date(a.date);  
        });  
    }  


    return visibleProducts;  
}  







/* =========================================================
   STEP 12 — MOBILE FILTER SCROLL FIX
   Preserve existing filter functionality
   ========================================================= */

(function () {
    "use strict";

    var filterButton = document.getElementById("filterButton");
    var filterPanel = document.getElementById("filterPanel");
    var filterCloseButton = document.getElementById("filterCloseButton");
    var filterBackdrop = document.getElementById("filterBackdrop");
    var applyButton = document.getElementById("filterApplyButton");
    var clearButton = document.getElementById("filterClearButton");

    if (!filterButton || !filterPanel) {
        return;
    }

    /*
     * Restore page scrolling without changing
     * the existing filter or product logic.
     */
    function restorePageScroll() {
        document.body.classList.remove("filter-panel-open");
        document.body.classList.remove("filter-open");

        document.documentElement.style.removeProperty("overflow");
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("position");
        document.body.style.removeProperty("top");
        document.body.style.removeProperty("height");
    }

    /*
     * Filter close button
     */
    if (filterCloseButton) {
        filterCloseButton.addEventListener("click", function () {
            window.setTimeout(function () {
                if (filterPanel.hidden) {
                    restorePageScroll();
                }
            }, 100);
        });
    }

    /*
     * Filter backdrop
     */
    if (filterBackdrop) {
        filterBackdrop.addEventListener("click", function () {
            window.setTimeout(function () {
                if (filterPanel.hidden) {
                    restorePageScroll();
                }
            }, 100);
        });
    }

    /*
     * Apply filters
     */
    if (applyButton) {
        applyButton.addEventListener("click", function () {
            window.setTimeout(function () {
                if (filterPanel.hidden) {
                    restorePageScroll();
                }
            }, 100);
        });
    }

    /*
     * Clear filters
     */
    if (clearButton) {
        clearButton.addEventListener("click", function () {
            window.setTimeout(function () {
                if (filterPanel.hidden) {
                    restorePageScroll();
                }
            }, 100);
        });
    }

    /*
     * Restore scrolling when a filter option changes
     * and the existing code closes the filter panel.
     */
    filterPanel.addEventListener("change", function () {
        window.setTimeout(function () {
            if (filterPanel.hidden) {
                restorePageScroll();
            }
        }, 100);
    });

    /*
     * Escape key
     */
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            window.setTimeout(function () {
                if (filterPanel.hidden) {
                    restorePageScroll();
                }
            }, 100);
        }
    });

    /*
     * Restore scrolling after switching to desktop width
     */
    window.addEventListener("resize", function () {
        if (window.innerWidth > 760) {
            restorePageScroll();
        }
    });

})();
























/* =========================================================  
   12. FILTER ACTIVE COUNT  
   ========================================================= */  

function updateFilterCount() {  

    if (!filterActiveCount) {  
        return;  
    }  

    let count = 0;  


    if (currentFilters.productType !== "all") {  
        count++;  
    }  


    if (Number(currentFilters.rating) > 0) {  
        count++;  
    }  


    if (currentFilters.price !== "all") {  
        count++;  
    }  


    if (currentFilters.featured) {  
        count++;  
    }  


    filterActiveCount.textContent = count;  


    if (count === 0) {  

        filterActiveCount.hidden = true;  

    } else {  

        filterActiveCount.hidden = false;  
    }  
}  


/* =========================================================  
   13. UPDATE RESULT COUNT  
   ========================================================= */  

function updateResultCount(total) {  

    if (!productsResultCount) {  
        return;  
    }  

    productsResultCount.textContent =  
        total.toLocaleString("en-US") +  
        (total === 1 ? " product" : " products");  
}  


/* =========================================================  
   14. RENDER PRODUCTS  
   ========================================================= */  

function renderProducts() {  
var filteredProducts = getVisibleProducts();  

var totalProducts = filteredProducts.length;  
var totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);  

if (totalPages < 1) {  
    totalPages = 1;  
}  

/*  
 * Important:  
 * Filters/search/sort change hone ke baad  
 * current page available range se bahar nahi jayega.  
 */  
if (currentPage > totalPages) {  
    currentPage = totalPages;  
}  

if (currentPage < 1) {  
    currentPage = 1;  
}  

/*  
 * Result count  
 */  
if (productsResultCount) {  
    productsResultCount.textContent = totalProducts + " products";  
}  

/*  
 * Empty state  
 */

if (totalProducts === 0) {

if (productsGrid) {  
    productsGrid.innerHTML = "";  
}  

if (productsPagination) {  
    productsPagination.innerHTML = "";  
}  

if (productsEmptyState) {  

    productsEmptyState.hidden = false;  
    productsEmptyState.style.display = "block";  

      
}  

return;

}

if (productsEmptyState) {  
productsEmptyState.hidden = true;  
productsEmptyState.style.display = "none";

}

/*  
 * Pagination slice  
 */  
var startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;  
var endIndex = startIndex + PRODUCTS_PER_PAGE;  

var pageProducts = filteredProducts.slice(  
    startIndex,  
    endIndex  
);  

/*  
 * Render products  
 */  
if (productsGrid) {  
    productsGrid.innerHTML = "";  

    for (var i = 0; i < pageProducts.length; i++) {  
        productsGrid.insertAdjacentHTML(  
            "beforeend",  
            createProductCard(pageProducts[i])  
        );  
    }  
}  

/*  
 * Render pagination  
 */  
renderPagination(  
    totalPages,  
    currentPage  
);

}

/* =========================================================  
   15. PAGINATION  
   ========================================================= */  

function renderPagination(totalPages) {  

    if (!productsPagination) {  
        return;  
    }  


    if (totalPages <= 1) {  

        productsPagination.innerHTML = "";  

        return;  
    }  


    let html = "";  


    /* Previous */  

    html +=  
        '<button ' +  
            'type="button" ' +  
            'class="pagination-button pagination-prev" ' +  
            'data-page="' +  
                (currentPage - 1) +  
            '"' +  
            (  
                currentPage === 1  
                    ? " disabled"  
                    : ""  
            ) +  
        ">" +  
            "<span>←</span>" +  
            "<span>Previous</span>" +  
        "</button>";  


    /* Page Numbers */  

    for (  
        let page = 1;  
        page <= totalPages;  
        page++  
    ) {  

        html +=  
            '<button ' +  
                'type="button" ' +  
                'class="pagination-button ' +  
                    (  
                        page === currentPage  
                            ? "active"  
                            : ""  
                    ) +  
                '" ' +  
                'data-page="' +  
                    page +  
                '"' +  
                ' aria-label="Page ' +  
                    page +  
                '"' +  
            ">" +  
                page +  
            "</button>";  
    }  


    /* Next */  

    html +=  
        '<button ' +  
            'type="button" ' +  
            'class="pagination-button pagination-next" ' +  
            'data-page="' +  
                (currentPage + 1) +  
            '"' +  
            (  
                currentPage === totalPages  
                    ? " disabled"  
                    : ""  
            ) +  
        ">" +  
            "<span>Next</span>" +  
            "<span>→</span>" +  
        "</button>";  


    productsPagination.innerHTML = html;  
}  


/* =========================================================  
   16. PAGINATION CLICK  
   ========================================================= */  

if (productsPagination) {  

    productsPagination.addEventListener(  
        "click",  
        function (event) {  

            const button =  
                event.target.closest(  
                    ".pagination-button"  
                );  


            if (!button) {  
                return;  
            }  


            if (button.disabled) {  
                return;  
            }  


            const page =  
                Number(  
                    button.getAttribute(  
                        "data-page"  
                    )  
                );  


            if (!page) {  
                return;  
            }  


            currentPage = page;  

            renderProducts();  


            const productsSection =  
                document.querySelector(  
                    ".electronics-products-section"  
                );  


            if (productsSection) {  

                productsSection.scrollIntoView({  
                    behavior: "smooth",  
                    block: "start"  
                });  
            }  
        }  
    );  
}  


/* =========================================================  
   17. SEARCH  
   ========================================================= */  

function performSearch() {  

    if (!electronicsSearch) {  
        return;  
    }  


    searchTerm =  
        electronicsSearch.value  
            .trim()  
            .toLowerCase();  


    currentPage = 1;  

    renderProducts();  
}  


if (electronicsSearch) {  

    electronicsSearch.addEventListener(  
        "input",  
        function () {  
            performSearch();  
        }  
    );  


    electronicsSearch.addEventListener(  
        "keydown",  
        function (event) {  

            if (event.key === "Enter") {  

                event.preventDefault();  

                performSearch();  
            }  
        }  
    );  
}  


if (electronicsSearchButton) {  

electronicsSearchButton.addEventListener(  
    "click",  
    function () {  

        if (!electronicsSearch) {  
            return;  
        }  

        var query =  
            electronicsSearch.value.trim();  
              
          
        if (electronicsSearchSuggestions) {  
electronicsSearchSuggestions.hidden = true;

}

/* Start searching animation */  

        electronicsSearchButton.disabled = true;  

        electronicsSearchButton.classList.add(  
            "searching"  
        );  

        electronicsSearchButton.textContent =  
            "Searching...";  

        /* Small delay makes the search feel intentional */  

        setTimeout(function () {  

            performSearch();  
              
              
              
            setTimeout(function () {  

if (  
    productsEmptyState &&  
    productsEmptyState.hidden === false  
) {  

    productsEmptyState.scrollIntoView({  
        behavior: "smooth",  
        block: "center"  
    });  

}

}, 100);

electronicsSearchButton.classList.remove(  
                "searching"  
            );  

            electronicsSearchButton.disabled = false;  

            electronicsSearchButton.textContent =  
                "Search";  

            /* Scroll to first result */  

            if (query !== "") {  

                setTimeout(function () {  

                    var firstProduct =  
                        document.querySelector(  
                            "#productsGrid .product-card"  
                        );  

                    if (firstProduct) {  

                        firstProduct.scrollIntoView({  
                            behavior: "smooth",  
                            block: "start"  
                        });  

                    }  

                }, 100);  

            }  

        }, 500);  

    }  
);

}

/* =========================================================  
   18. CLEAR SEARCH + FILTERS  
   ========================================================= */  

function clearAllResults() {  

    searchTerm = "";  


    if (electronicsSearch) {  
        electronicsSearch.value = "";  
    }  


    currentFilters = {  
        productType: "all",  
        rating: 0,  
        price: "all",  
        featured: false  
    };  


    resetFilterControls();  


    currentPage = 1;  


    updateFilterCount();  

    renderProducts();  
}  


if (clearProductsButton) {  

    clearProductsButton.addEventListener(  
        "click",  
        function () {  
            clearAllResults();  
        }  
    );  
}  


/* =========================================================  
   19. STEP 7 — PROFESSIONAL SORTING SYSTEM  
   ========================================================= */  

const sortLabels = {  
    "relevant": "Relevant",  
    "highest-rated": "Highest Rated",  
    "most-reviewed": "Most Reviewed",  
    "price-low": "Price: Low to High",  
    "price-high": "Price: High to Low",  
    "newest": "Newest"  
};  


/* ---------------------------------------------------------  
   UPDATE SORT UI  
   --------------------------------------------------------- */  

function updateSortUI() {  

    if (sortButtonLabel) {  

        if (sortLabels[currentSort]) {  

            sortButtonLabel.textContent =  
                sortLabels[currentSort];  
        }  
    }  


    for (  
        let i = 0;  
        i < sortOptions.length;  
        i++  
    ) {  

        const option =  
            sortOptions[i];  

        const optionValue =  
            option.getAttribute(  
                "data-sort"  
            );  


        if (  
            optionValue ===  
            currentSort  
        ) {  

            option.classList.add("active");  

        } else {  

            option.classList.remove("active");  
        }  
    }  
}  


/* ---------------------------------------------------------  
   OPEN SORT MENU  
   --------------------------------------------------------- */  

function openSortMenu() {  

    if (!sortMenu) {  
        return;  
    }  


    sortMenu.hidden = false;  


    if (sortButton) {  

        sortButton.setAttribute(  
            "aria-expanded",  
            "true"  
        );  
    }  
}  


/* ---------------------------------------------------------  
   CLOSE SORT MENU  
   --------------------------------------------------------- */  

function closeSortMenu() {  

    if (!sortMenu) {  
        return;  
    }  


    sortMenu.hidden = true;  


    if (sortButton) {  

        sortButton.setAttribute(  
            "aria-expanded",  
            "false"  
        );  
    }  
}  


/* ---------------------------------------------------------  
   SORT BUTTON  
   --------------------------------------------------------- */  

if (sortButton) {  

    sortButton.addEventListener(  
        "click",  
        function (event) {  

            event.stopPropagation();  


            if (  
                sortMenu &&  
                sortMenu.hidden  
            ) {  

                openSortMenu();  

            } else {  

                closeSortMenu();  
            }  
        }  
    );  
}  


/* ---------------------------------------------------------  
   SORT OPTIONS  
   --------------------------------------------------------- */  

for (  
    let i = 0;  
    i < sortOptions.length;  
    i++  
) {  

    sortOptions[i].addEventListener(  
"click",  
function (event) {  

    const selectedSort =  
        this.getAttribute("data-sort");  


            if (!selectedSort) {  
                return;  
            }  


            currentSort =  
                selectedSort;  


            currentPage = 1;  


            updateSortUI();  

            renderProducts();  

            closeSortMenu();  
        }  
    );  
}  


/* ---------------------------------------------------------  
   CLICK OUTSIDE  
   --------------------------------------------------------- */  

document.addEventListener(  
    "click",  
    function (event) {  

        if (  
            !sortMenu ||  
            sortMenu.hidden  
        ) {  
            return;  
        }  


        const sortWrap =  
            event.target.closest(  
                ".electronics-sort-wrap"  
            );  


        if (!sortWrap) {  
            closeSortMenu();  
        }  
    }  
);  


/* ---------------------------------------------------------  
   ESCAPE KEY  
   --------------------------------------------------------- */  

document.addEventListener(  
    "keydown",  
    function (event) {  

        if (event.key === "Escape") {  

            closeSortMenu();  
        }  
    }  
);  


/* =========================================================
   20. FILTER PANEL OPEN
   ========================================================= */

function openFilterPanel() {
    if (!filterPanel) {
        return;
    }

    filterPanel.hidden = false;

    if (filterBackdrop) {
        filterBackdrop.hidden = false;
    }

    [filterButton, mobileFilterButton].forEach(function (button) {
    if (button) {
        button.setAttribute("aria-expanded", "true");
    }
});

    document.body.classList.add("filter-open");
}


/* =========================================================
   21. FILTER PANEL CLOSE
   ========================================================= */

function closeFilterPanel() {
    if (!filterPanel) {
        return;
    }

    filterPanel.hidden = true;

    if (filterBackdrop) {
        filterBackdrop.hidden = true;
    }

    [filterButton, mobileFilterButton].forEach(function (button) {
    if (button) {
        button.setAttribute("aria-expanded", "false");
    }
});

    document.body.classList.remove("filter-open");
}


/* =========================================================
   22. FILTER BUTTON — CLICK FIX
   ========================================================= */

[filterButton, mobileFilterButton].forEach(function (button) {
    if (!button || !filterPanel) return;

    button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (filterPanel.hidden) {
            openFilterPanel();
        } else {
            closeFilterPanel();
        }
    });
});



/* =========================================================  
   23. FILTER CLOSE BUTTON  
   ========================================================= */  

if (filterCloseButton) {  

    filterCloseButton.addEventListener(  
        "click",  
        function () {  
            closeFilterPanel();  
        }  
    );  
}  


/* =========================================================  
   24. FILTER BACKDROP  
   ========================================================= */  

if (filterBackdrop) {  

    filterBackdrop.addEventListener(  
        "click",  
        function () {  
            closeFilterPanel();  
        }  
    );  
}  


/* =========================================================  
   25. ESCAPE KEY  
   ========================================================= */  

document.addEventListener(  
    "keydown",  
    function (event) {  

        if (event.key === "Escape") {  

            if (  
                filterPanel &&  
                !filterPanel.hidden  
            ) {  

                closeFilterPanel();  
            }  
        }  
    }  
);  


/* =========================================================  
   26. RESET FILTER CONTROLS  
   ========================================================= */  

function resetFilterControls() {  

    setCheckedValue(  
        productTypeFilters,  
        "all"  
    );  


    setCheckedValue(  
        ratingFilters,  
        "0"  
    );  


    setCheckedValue(  
        priceFilters,  
        "all"  
    );  


    if (featuredFilter) {  
        featuredFilter.checked = false;  
    }  
}  


/* =========================================================  
   27. APPLY FILTERS  
   ========================================================= */  

function applyFilters() {  

    currentFilters.productType =  
        getCheckedValue(  
            productTypeFilters,  
            "all"  
        );  


    currentFilters.rating =  
        Number(  
            getCheckedValue(  
                ratingFilters,  
                "0"  
            )  
        );  


    currentFilters.price =  
        getCheckedValue(  
            priceFilters,  
            "all"  
        );  


    currentFilters.featured =  
        featuredFilter  
            ? featuredFilter.checked  
            : false;  


    currentPage = 1;  


    updateFilterCount();  

    renderProducts();  

    closeFilterPanel();  
}  


if (filterApplyButton) {  

    filterApplyButton.addEventListener(  
        "click",  
        function () {  
            applyFilters();  
        }  
    );  
}  


/* =========================================================  
   28. CLEAR FILTERS  
   ========================================================= */  

if (filterClearButton) {  

    filterClearButton.addEventListener(  
        "click",  
        function () {  

            currentFilters = {  
                productType: "all",  
                rating: 0,  
                price: "all",  
                featured: false  
            };  


            resetFilterControls();  


            currentPage = 1;  


            updateFilterCount();  

            renderProducts();  
        }  
    );  
}  


/* =========================================================  
   29. FILTER CONTROLS  
   ========================================================= */  

for (  
    let i = 0;  
    i < productTypeFilters.length;  
    i++  
) {  

    productTypeFilters[i].addEventListener(  
        "change",  
        function () {  
            /* Waiting for Show Results */  
        }  
    );  
}  


for (  
    let i = 0;  
    i < ratingFilters.length;  
    i++  
) {  

    ratingFilters[i].addEventListener(  
        "change",  
        function () {  
            /* Waiting for Show Results */  
        }  
    );  
}  


for (  
    let i = 0;  
    i < priceFilters.length;  
    i++  
) {  

    priceFilters[i].addEventListener(  
        "change",  
        function () {  
            /* Waiting for Show Results */  
        }  
    );  
}  


if (featuredFilter) {  

    featuredFilter.addEventListener(  
        "change",  
        function () {  
            /* Waiting for Show Results */  
        }  
    );  
}  


/* =========================================================  
   30. PRODUCT REVIEW BUTTON  
   ========================================================= */  

if (productsGrid) {  

    productsGrid.addEventListener(  
        "click",  
        function (event) {  

            const reviewButton =  
                event.target.closest(  
                    ".product-review-button"  
                );  


            if (!reviewButton) {  
                return;  
            }  


            const productId =  
                Number(  
                    reviewButton.getAttribute(  
                        "data-product-id"  
                    )  
                );  


            const product =  
                products.find(  
                    function (item) {  
                        return item.id === productId;  
                    }  
                );  


            if (!product) {  
                return;  
            }  


            /*  
             * Future Step:  
             * Individual product review pages  
             */  

            console.log(  
                "Product selected:",  
                product.name  
            );  
        }  
    );  
}  


/* =========================================================  
   31. RESPONSIVE PAGE UPDATE  
   ========================================================= */  

let resizeTimer = null;  


window.addEventListener(  
    "resize",  
    function () {  

        clearTimeout(resizeTimer);  


        resizeTimer =  
            setTimeout(  
                function () {  

                    const productsPerPage =  
                        getProductsPerPage();  


                    const totalProducts =  
                        getVisibleProducts().length;  


                    const totalPages =  
                        Math.max(  
                            1,  
                            Math.ceil(  
                                totalProducts /  
                                productsPerPage  
                            )  
                        );  


                    if (  
                        currentPage >  
                        totalPages  
                    ) {  

                        currentPage =  
                            totalPages;  
                    }  


                    renderProducts();  

                },  
                150  
            );  
    }  
);  


/* =========================================================  
   32. INITIAL PAGE SETUP  
   ========================================================= */  

updateSortUI();  

updateFilterCount();  

renderProducts();  


/* =========================================================  
   33. DEBUG MESSAGE  
   ========================================================= */  

console.log(  
    "ReviewNest Electronics — Step 7 loaded successfully."  
);

});










/* =========================================================
   STEP 11 — PERFORMANCE & FAST LOADING
   ========================================================= */

(function initStep11Performance() {

    var productsGrid = document.getElementById("productsGrid");

    if (!productsGrid) {
        return;
    }

    /*
     * Optimise every product image after JavaScript renders it.
     */
    function optimizeProductImages() {

        var images = productsGrid.querySelectorAll("img");

        images.forEach(function (image, index) {

            image.decoding = "async";

            /*
             * First product on the current page loads immediately.
             * Other product images use native lazy loading.
             */
            if (index === 0) {
                image.loading = "eager";
                image.setAttribute("fetchpriority", "high");
            } else {
                image.loading = "lazy";
                image.setAttribute("fetchpriority", "auto");
            }

            /*
             * Prevent broken-image icon from damaging the card.
             */
            if (!image.dataset.step11ErrorHandler) {

                image.dataset.step11ErrorHandler = "true";

                image.addEventListener("error", function () {

                    var imageContainer = image.closest(".product-card-image");

                    if (imageContainer) {
                        imageContainer.classList.add("image-error");
                    }

                });

            }

        });

    }

    /*
     * Run after the current product cards exist.
     */
    optimizeProductImages();

    /*
     * Product cards are re-rendered by search,
     * filters, sorting and pagination.
     *
     * This observer automatically optimizes newly
     * created images without adding duplicate listeners.
     */
    var observer = new MutationObserver(function () {
        optimizeProductImages();
    });

    observer.observe(productsGrid, {
        childList: true,
        subtree: true
    });

})();






