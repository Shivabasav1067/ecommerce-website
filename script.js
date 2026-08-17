/* =========================
   VELORA STORE JAVASCRIPT
========================= */

let cart = [];

const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");


/* =========================
   CART
========================= */

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

document.getElementById("cartToggle").addEventListener("click", openCart);

document.getElementById("closeCart").addEventListener("click", closeCart);

cartOverlay.addEventListener("click", closeCart);


/* =========================
   ADD TO CART
========================= */

document.querySelectorAll(".add-button").forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = Number(button.dataset.price);
        const image = button.dataset.image;

        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id,
                name,
                price,
                image,
                quantity: 1
            });
        }

        updateCart();

        showToast(
            "Added to cart",
            `${name} is now in your bag.`
        );

    });

});


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    cartCount.textContent = totalItems;

    cartTotal.textContent = formatPrice(totalPrice);

    renderCart();
}


/* =========================
   RENDER CART
========================= */

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="cart-empty">

                <div class="empty-bag">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>

                <h3>Your bag is empty</h3>

                <p>
                    Add something you love and it will appear here.
                </p>

            </div>
        `;

        return;
    }

    cartItems.innerHTML = cart.map(item => {

        return `
            <div class="cart-item">

                <div class="cart-item-image">
                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >
                </div>

                <div class="cart-item-info">

                    <strong>${item.name}</strong>

                    <span class="cart-item-price">
                        ${formatPrice(item.price)}
                    </span>

                    <div class="quantity-controls">

                        <button
                            onclick="changeQuantity('${item.id}', -1)"
                            aria-label="Decrease quantity"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity('${item.id}', 1)"
                            aria-label="Increase quantity"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove-item"
                    onclick="removeItem('${item.id}')"
                    aria-label="Remove item"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>
        `;

    }).join("");

}


/* =========================
   CHANGE QUANTITY
========================= */

function changeQuantity(id, amount) {

    const item = cart.find(item => item.id === id);

    if (!item) {
        return;
    }

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    updateCart();
}


/* =========================
   REMOVE ITEM
========================= */

function removeItem(id) {

    const item = cart.find(item => item.id === id);

    cart = cart.filter(item => item.id !== id);

    updateCart();

    if (item) {
        showToast(
            "Removed from cart",
            `${item.name} was removed.`
        );
    }
}


/* =========================
   PRICE FORMAT
========================= */

function formatPrice(price) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);

}


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(title, message) {

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);

}


/* =========================
   WISHLIST
========================= */

document.querySelectorAll(".wishlist").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("liked");

        const icon = button.querySelector("i");

        if (button.classList.contains("liked")) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            showToast(
                "Saved",
                "Product added to your wishlist."
            );

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

        }

    });

});


/* =========================
   CATEGORY FILTER
========================= */

const categoryButtons =
    document.querySelectorAll(".category");

const productCards =
    document.querySelectorAll(".product-card");

const resultCount =
    document.getElementById("resultCount");

const emptyState =
    document.getElementById("emptyState");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
            button.dataset.category;

        let visibleProducts = 0;

        productCards.forEach(card => {

            const matches =
                category === "all" ||
                card.dataset.category === category;

            if (matches) {
                card.classList.remove("hidden");
                visibleProducts++;
            } else {
                card.classList.add("hidden");
            }

        });

        resultCount.textContent = visibleProducts;

        if (visibleProducts === 0) {
            emptyState.classList.add("show");
        } else {
            emptyState.classList.remove("show");
        }

    });

});


/* =========================
   SEARCH
========================= */

const searchToggle =
    document.getElementById("searchToggle");

const searchPanel =
    document.getElementById("searchPanel");

const searchInput =
    document.getElementById("searchInput");

const closeSearch =
    document.getElementById("closeSearch");


searchToggle.addEventListener("click", () => {

    searchPanel.classList.toggle("open");

    if (searchPanel.classList.contains("open")) {
        setTimeout(() => {
            searchInput.focus();
        }, 100);
    }

});


closeSearch.addEventListener("click", () => {
    searchPanel.classList.remove("open");
    searchInput.value = "";
    filterProducts("");
});


searchInput.addEventListener("input", () => {

    const query =
        searchInput.value.toLowerCase().trim();

    filterProducts(query);

});


function filterProducts(query) {

    let visibleProducts = 0;

    productCards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const category =
            card.dataset.category.toLowerCase();

        const matches =
            !query ||
            name.includes(query) ||
            category.includes(query);

        if (matches) {

            card.classList.remove("hidden");
            visibleProducts++;

        } else {

            card.classList.add("hidden");

        }

    });

    resultCount.textContent =
        visibleProducts;

    emptyState.classList.toggle(
        "show",
        visibleProducts === 0
    );

}


/* =========================
   MOBILE MENU
========================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileMenuToggle =
    document.getElementById("mobileMenuToggle");


mobileMenuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    const icon =
        mobileMenuToggle.querySelector("i");

    if (mobileMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        const icon =
            mobileMenuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   NEWSLETTER
========================= */

document
    .getElementById("newsletterForm")
    .addEventListener("submit", event => {

        event.preventDefault();

        const email =
            document.getElementById("emailInput").value.trim();

        if (!email) {
            return;
        }

        showToast(
            "You're on the list",
            "Thanks for subscribing to VELORA."
        );

        event.target.reset();

    });


/* =========================
   CHECKOUT
========================= */

document
    .getElementById("checkoutButton")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            showToast(
                "Your bag is empty",
                "Add a product before checking out."
            );

            return;
        }

        showToast(
            "Checkout coming soon",
            "This demo doesn't process real payments."
        );

    });


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeCart();

        searchPanel.classList.remove("open");

        mobileMenu.classList.remove("open");

    }

});


/* =========================
   INITIAL STATE
========================= */

updateCart();
