let cart = [];
let cartCount = document.getElementById("cartCount");
let cartTotal = document.getElementById("cartTotal");
let cartModal = document.getElementById("cartModal");
let cartItems = document.getElementById("cartItems");

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartUI();
}

function updateCartUI() {
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        total += item.price;
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `<p>${item.productName} - $${item.price.toFixed(2)}</p>`;
        cartItems.appendChild(itemElement);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    alert("Checkout not implemented in this demo.");
}

function openCart() {
    cartModal.style.display = "flex";
}

function closeCart() {
    cartModal.style.display = "none";
}

document.getElementById("cartButton").addEventListener("click", openCart);

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == cartModal) {
        closeCart();
    }
}
