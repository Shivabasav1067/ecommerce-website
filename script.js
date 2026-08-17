let cartCount = 0;

const cartCountElement = document.getElementById("cart-count");
const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountElement.textContent = cartCount;

        const productName = button.dataset.name;

        alert(productName + " added to cart!");
    });
});
