:root {
    --bg: #f7f5f1;
    --surface: #ffffff;
    --surface-soft: #eeece6;
    --text: #171717;
    --muted: #77736d;
    --line: #dedbd4;
    --accent: #d65a2f;
    --accent-dark: #b84721;
    --dark: #181817;
    --radius: 18px;
    --shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family: "DM Sans", sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

button,
input {
    font: inherit;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    max-width: 100%;
    display: block;
}

.section {
    padding: 120px 7%;
}

.eyebrow {
    display: inline-block;
    margin-bottom: 12px;
    color: var(--accent);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
}

/* =========================
   ANNOUNCEMENT
========================= */

.announcement {
    background: var(--dark);
    color: white;
    text-align: center;
    padding: 9px 20px;
    font-size: 12px;
    letter-spacing: 0.02em;
}

.announcement p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    height: 80px;
    padding: 0 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(247, 245, 241, 0.92);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.08em;
}

.brand-mark {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    background: var(--text);
    color: white;
    border-radius: 9px;
    font-size: 14px;
}

.desktop-nav {
    display: flex;
    gap: 34px;
}

.desktop-nav a {
    position: relative;
    color: #5f5c58;
    font-size: 14px;
    transition: 0.25s;
}

.desktop-nav a:hover {
    color: var(--text);
}

.desktop-nav a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 0;
    height: 1px;
    background: var(--text);
    transition: 0.25s;
}

.desktop-nav a:hover::after {
    width: 100%;
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 8px;
}

.icon-button,
.mobile-menu-button {
    position: relative;
    width: 42px;
    height: 42px;
    border: 0;
    background: transparent;
    border-radius: 50%;
    transition: 0.25s;
}

.icon-button:hover,
.mobile-menu-button:hover {
    background: var(--surface-soft);
}

.cart-icon span {
    position: absolute;
    top: 2px;
    right: 0;
    min-width: 17px;
    height: 17px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--accent);
    color: white;
    font-size: 9px;
    font-weight: 700;
}

.mobile-menu-button {
    display: none;
}


/* =========================
   SEARCH
========================= */

.search-panel {
    position: fixed;
    top: 122px;
    left: 50%;
    z-index: 120;
    width: min(720px, calc(100% - 40px));
    transform: translate(-50%, -20px);
    opacity: 0;
    pointer-events: none;
    transition: 0.25s;
}

.search-panel.open {
    opacity: 1;
    transform: translate(-50%, 0);
    pointer-events: auto;
}

.search-inner {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 15px 18px;
    background: white;
    border: 1px solid var(--line);
    border-radius: 14px;
    box-shadow: var(--shadow);
}

.search-inner > i {
    color: var(--muted);
}

.search-inner input {
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 15px;
}

.search-inner button {
    width: 34px;
    height: 34px;
    border: 0;
    background: var(--surface-soft);
    border-radius: 50%;
}


/* =========================
   MOBILE MENU
========================= */

.mobile-menu {
    display: none;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: calc(100vh - 122px);
    padding: 80px 7%;
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: 70px;
    overflow: hidden;
}

.hero-content {
    max-width: 680px;
}

.hero-label {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    color: var(--muted);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
}

.hero-label span {
    width: 28px;
    height: 1px;
    background: var(--accent);
}

.hero h1 {
    font-family: "Playfair Display", serif;
    font-size: clamp(60px, 7vw, 100px);
    line-height: 0.98;
    letter-spacing: -0.05em;
    font-weight: 700;
}

.hero h1 em {
    display: block;
    color: var(--accent);
    font-style: italic;
}

.hero-content > p {
    max-width: 540px;
    margin: 28px 0;
    color: var(--muted);
    font-size: 17px;
}

.hero-buttons {
    display: flex;
    align-items: center;
    gap: 14px;
}

.primary-button,
.secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 15px 23px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    transition: 0.25s;
}

.primary-button {
    background: var(--text);
    color: white;
}

.primary-button:hover {
    transform: translateY(-2px);
    background: var(--accent);
}

.secondary-button {
    border: 1px solid var(--line);
}

.secondary-button:hover {
    background: white;
}

.hero-stats {
    display: flex;
    gap: 35px;
    margin-top: 60px;
}

.hero-stats div {
    display: flex;
    flex-direction: column;
}

.hero-stats strong {
    font-size: 21px;
}

.hero-stats span {
    color: var(--muted);
    font-size: 11px;
    margin-top: 2px;
}

.hero-visual {
    position: relative;
}

.hero-glow {
    position: absolute;
    inset: 10% 5%;
    border-radius: 50%;
    background: rgba(214, 90, 47, 0.16);
    filter: blur(80px);
}

.hero-image-card {
    position: relative;
    overflow: hidden;
    aspect-ratio: 0.88;
    border-radius: 28px;
    box-shadow: var(--shadow);
}

.hero-image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.floating-card {
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 16px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    box-shadow: 0 12px 35px rgba(0,0,0,0.12);
}

.floating-icon {
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--accent);
    color: white;
    font-size: 12px;
}

.floating-card div {
    display: flex;
    flex-direction: column;
}

.floating-card strong {
    font-size: 12px;
}

.floating-card span:last-child {
    color: var(--muted);
    font-size: 11px;
}


/* =========================
   TRUST
========================= */

.trust-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 28px 7%;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: var(--surface);
}

.trust-item {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 12px 20px;
    border-right: 1px solid var(--line);
}

.trust-item:last-child {
    border-right: 0;
}

.trust-item > i {
    color: var(--accent);
    font-size: 18px;
}

.trust-item div {
    display: flex;
    flex-direction: column;
}

.trust-item strong {
    font-size: 12px;
}

.trust-item span {
    color: var(--muted);
    font-size: 10px;
}


/* =========================
   SECTION HEADING
========================= */

.section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 55px;
}

.section-heading h2,
.about-heading h2 {
    font-family: "Playfair Display", serif;
    font-size: clamp(42px, 5vw, 68px);
    line-height: 1;
    letter-spacing: -0.045em;
}

.section-heading h2 span,
.about-heading h2 span {
    color: var(--accent);
    font-style: italic;
}

.section-heading > p {
    max-width: 370px;
    color: var(--muted);
    font-size: 14px;
}


/* =========================
   SHOP TOOLBAR
========================= */

.shop-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 25px;
}

.categories {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.category {
    padding: 9px 15px;
    border: 1px solid var(--line);
    background: transparent;
    border-radius: 100px;
    font-size: 12px;
    color: var(--muted);
    transition: 0.2s;
}

.category:hover,
.category.active {
    background: var(--text);
    color: white;
    border-color: var(--text);
}

.result-count {
    color: var(--muted);
    font-size: 12px;
}


/* =========================
   PRODUCT GRID
========================= */

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.product-card {
    min-width: 0;
}

.product-image {
    position: relative;
    overflow: hidden;
    aspect-ratio: 0.9;
    border-radius: 16px;
    background: #e9e6e0;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(.2,.7,.2,1);
}

.product-card:hover .product-image img {
    transform: scale(1.06);
}

.product-badge {
    position: absolute;
    z-index: 2;
    top: 13px;
    left: 13px;
    padding: 6px 9px;
    background: var(--dark);
    color: white;
    border-radius: 100px;
    font-size: 9px;
    font-weight: 700;
}

.product-badge.new {
    background: var(--accent);
}

.wishlist {
    position: absolute;
    z-index: 3;
    top: 12px;
    right: 12px;
    width: 34px;
    height: 34px;
    border: 0;
    background: rgba(255,255,255,0.88);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    transition: 0.25s;
}

.wishlist:hover {
    color: var(--accent);
    transform: scale(1.08);
}

.wishlist.liked {
    color: var(--accent);
}

.product-info {
    padding: 17px 3px 0;
}

.product-category {
    color: var(--muted);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.13em;
}

.product-info h3 {
    margin: 5px 0;
    font-size: 14px;
    line-height: 1.3;
}

.rating {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 7px;
}

.rating span {
    font-size: 10px;
    letter-spacing: 1px;
}

.rating small {
    color: var(--muted);
    font-size: 10px;
}

.product-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-top: 13px;
}

.price {
    font-size: 14px;
    font-weight: 700;
}

.price del {
    margin-left: 5px;
    color: var(--muted);
    font-size: 10px;
    font-weight: 400;
}

.add-button {
    width: 38px;
    height: 38px;
    border: 1px solid var(--line);
    background: transparent;
    border-radius: 50%;
    transition: 0.25s;
}

.add-button:hover {
    border-color: var(--text);
    background: var(--text);
    color: white;
    transform: rotate(90deg);
}

.product-card.hidden {
    display: none;
}

.empty-state {
    display: none;
    text-align: center;
    padding: 70px 20px;
}

.empty-state.show {
    display: block;
}

.empty-state i {
    font-size: 35px;
    margin-bottom: 15px;
    color: var(--muted);
}

.empty-state h3 {
    margin-bottom: 5px;
}

.empty-state p {
    color: var(--muted);
    font-size: 13px;
}


/* =========================
   FEATURE BANNER
========================= */

.feature-section {
    margin: 40px 7% 0;
    padding: 0;
    display: grid;
    grid-template-columns: 0.82fr 1.18fr;
    min-height: 600px;
    overflow: hidden;
    border-radius: 25px;
    background: var(--dark);
    color: white;
}

.feature-content {
    padding: 85px 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.feature-content h2 {
    font-family: "Playfair Display", serif;
    font-size: clamp(45px, 5vw, 70px);
    line-height: 1;
    letter-spacing: -0.04em;
    margin-bottom: 25px;
}

.feature-content h2 em {
    color: #e87950;
}

.feature-content p {
    max-width: 380px;
    color: rgba(255,255,255,0.65);
    font-size: 14px;
    margin-bottom: 32px;
}

.primary-button.light {
    background: white;
    color: var(--dark);
}

.primary-button.light:hover {
    background: var(--accent);
    color: white;
}

.feature-image {
    min-height: 100%;
}

.feature-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


/* =========================
   ABOUT
========================= */

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;
}

.about-copy {
    max-width: 520px;
}

.about-copy p {
    color: var(--muted);
    margin-bottom: 20px;
    font-size: 16px;
}

.text-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    font-size: 13px;
    font-weight: 700;
}

.text-link i {
    transition: 0.25s;
}

.text-link:hover i {
    transform: translateX(5px);
}


/* =========================
   NEWSLETTER
========================= */

.newsletter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding: 70px 7%;
    background: var(--surface-soft);
}

.newsletter h2 {
    margin-bottom: 7px;
    font-family: "Playfair Display", serif;
    font-size: 43px;
    line-height: 1;
}

.newsletter p {
    color: var(--muted);
    font-size: 13px;
}

.newsletter form {
    width: min(470px, 100%);
    display: flex;
    border: 1px solid var(--line);
    background: white;
    border-radius: 10px;
    padding: 4px;
}

.newsletter input {
    min-width: 0;
    flex: 1;
    padding: 13px;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 13px;
}

.newsletter button {
    padding: 0 19px;
    border: 0;
    border-radius: 7px;
    background: var(--text);
    color: white;
    font-size: 12px;
    font-weight: 700;
}

.newsletter button i {
    margin-left: 7px;
}


/* =========================
   FOOTER
========================= */

footer {
    padding: 70px 7% 28px;
    background: var(--dark);
    color: white;
}

.footer-main {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 50px;
    padding-bottom: 60px;
    border-bottom: 1px solid rgba(255,255,255,0.13);
}

.footer-brand p {
    max-width: 250px;
    margin: 18px 0;
    color: rgba(255,255,255,0.55);
    font-size: 13px;
}

.footer-brand .brand-mark {
    background: white;
    color: var(--dark);
}

.footer-column {
    display: flex;
    flex-direction: column;
    gap: 11px;
}

.footer-column h4 {
    margin-bottom: 8px;
    font-size: 12px;
}

.footer-column a {
    width: fit-content;
    color: rgba(255,255,255,0.55);
    font-size: 12px;
    transition: 0.2s;
}

.footer-column a:hover {
    color: white;
}

.socials {
    display: flex;
    gap: 8px;
}

.socials a {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 50%;
    color: rgba(255,255,255,0.65);
    transition: 0.2s;
}

.socials a:hover {
    background: white;
    color: var(--dark);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    color: rgba(255,255,255,0.4);
    font-size: 10px;
}


/* =========================
   CART DRAWER
========================= */

.cart-overlay {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(0,0,0,0.35);
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
}

.cart-overlay.open {
    opacity: 1;
    pointer-events: auto;
}

.cart-drawer {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 201;
    width: min(430px, 100%);
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--surface);
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(.2,.8,.2,1);
    box-shadow: -20px 0 50px rgba(0,0,0,0.12);
}

.cart-drawer.open {
    transform: translateX(0);
}

.cart-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px;
    border-bottom: 1px solid var(--line);
}

.cart-header h2 {
    font-family: "Playfair Display", serif;
    font-size: 35px;
    line-height: 1;
}

.cart-header button {
    width: 38px;
    height: 38px;
    border: 0;
    background: var(--surface-soft);
    border-radius: 50%;
}

.cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 25px 30px;
}

.cart-empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.empty-bag {
    width: 65px;
    height: 65px;
    display: grid;
    place-items: center;
    margin-bottom: 15px;
    border-radius: 50%;
    background: var(--surface-soft);
}

.empty-bag i {
    font-size: 22px;
    color: var(--muted);
}

.cart-empty h3 {
    margin-bottom: 5px;
}

.cart-empty p {
    max-width: 250px;
    color: var(--muted);
    font-size: 12px;
}

.cart-item {
    display: grid;
    grid-template-columns: 78px 1fr auto;
    gap: 13px;
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
}

.cart-item-image {
    width: 78px;
    height: 92px;
    overflow: hidden;
    border-radius: 10px;
}

.cart-item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cart-item-info {
    display: flex;
    flex-direction: column;
}

.cart-item-info strong {
    font-size: 13px;
    line-height: 1.3;
}

.cart-item-price {
    margin-top: 5px;
    font-size: 12px;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
}

.quantity-controls button {
    width: 24px;
    height: 24px;
    border: 1px solid var(--line);
    background: transparent;
    border-radius: 5px;
}

.quantity-controls span {
    min-width: 14px;
    text-align: center;
    font-size: 11px;
}

.remove-item {
    align-self: start;
    border: 0;
    background: transparent;
    color: var(--muted);
}

.cart-footer {
    padding: 25px 30px 30px;
    border-top: 1px solid var(--line);
}

.cart-subtotal {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
}

.cart-subtotal span {
    color: var(--muted);
    font-size: 13px;
}

.cart-subtotal strong {
    font-size: 18px;
}

.cart-note {
    color: var(--muted);
    font-size: 10px;
    margin-bottom: 18px;
}

.checkout-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px;
    border: 0;
    border-radius: 9px;
    background: var(--dark);
    color: white;
    font-size: 13px;
    font-weight: 700;
    transition: 0.2s;
}

.checkout-button:hover {
    background: var(--accent);
}


/* =========================
   TOAST
========================= */

.toast {
    position: fixed;
    right: 25px;
    bottom: 25px;
    z-index: 500;
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 280px;
    padding: 14px;
    background: var(--dark);
    color: white;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transform: translateY(120px);
    opacity: 0;
    transition: 0.3s;
}

.toast.show {
    transform: translateY(0);
    opacity: 1;
}

.toast-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--accent);
    font-size: 12px;
}

.toast div:last-child {
    display: flex;
    flex-direction: column;
}

.toast strong {
    font-size: 12px;
}

.toast span {
    color: rgba(255,255,255,0.6);
    font-size: 10px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1100px) {

    .hero {
        grid-template-columns: 1fr;
        padding-top: 60px;
    }

    .hero-content {
        max-width: 800px;
    }

    .hero-visual {
        max-width: 550px;
    }

    .trust-section {
        grid-template-columns: repeat(2, 1fr);
    }

    .trust-item:nth-child(2) {
        border-right: 0;
    }

    .trust-item:nth-child(-n+2) {
        border-bottom: 1px solid var(--line);
    }

    .product-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .feature-section {
        grid-template-columns: 1fr;
    }

    .feature-image {
        min-height: 450px;
    }

    .about-grid {
        gap: 50px;
    }
}


@media (max-width: 800px) {

    .navbar {
        height: 68px;
    }

    .announcement {
        font-size: 10px;
    }

    .desktop-nav,
    .search-panel {
        display: none;
    }

    .mobile-menu-button {
        display: block;
    }

    .mobile-menu {
        position: fixed;
        top: 68px;
        left: 0;
        right: 0;
        z-index: 90;
        display: flex;
        flex-direction: column;
        background: white;
        border-bottom: 1px solid var(--line);
        transform: translateY(-120%);
        transition: 0.25s;
    }

    .mobile-menu.open {
        transform: translateY(0);
    }

    .mobile-menu a {
        padding: 16px 7%;
        border-bottom: 1px solid var(--line);
        font-size: 13px;
    }

    .hero {
        min-height: auto;
        padding: 65px 7%;
        gap: 45px;
    }

    .hero h1 {
        font-size: clamp(50px, 13vw, 78px);
    }

    .hero-stats {
        margin-top: 40px;
    }

    .section {
        padding: 80px 7%;
    }

    .section-heading {
        align-items: flex-start;
        flex-direction: column;
        gap: 18px;
    }

    .product-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px 14px;
    }

    .shop-toolbar {
        align-items: flex-start;
        flex-direction: column;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .newsletter {
        align-items: flex-start;
        flex-direction: column;
    }

    .newsletter form {
        width: 100%;
    }

    .footer-main {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-brand {
        grid-column: span 2;
    }

    .feature-section {
        margin: 0 5%;
    }
}


@media (max-width: 500px) {

    .navbar {
        padding: 0 5%;
    }

    .hero {
        padding-left: 5%;
        padding-right: 5%;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: stretch;
    }

    .primary-button,
    .secondary-button {
        width: 100%;
    }

    .hero-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }

    .trust-section {
        grid-template-columns: 1fr;
        padding: 15px 5%;
    }

    .trust-item {
        border-right: 0 !important;
        border-bottom: 1px solid var(--line) !important;
    }

    .trust-item:last-child {
        border-bottom: 0 !important;
    }

    .section {
        padding-left: 5%;
        padding-right: 5%;
    }

    .product-grid {
        grid-template-columns: 1fr 1fr;
    }

    .product-info h3 {
        font-size: 13px;
    }

    .feature-content {
        padding: 55px 35px;
    }

    .feature-image {
        min-height: 330px;
    }

    .footer-main {
        grid-template-columns: 1fr 1fr;
        gap: 35px 20px;
    }

    .footer-brand {
        grid-column: span 2;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 7px;
    }

    .toast {
        right: 15px;
        left: 15px;
        min-width: 0;
    }
}
