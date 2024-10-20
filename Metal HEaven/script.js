document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const albumName = this.parentElement.getAttribute('data-album');
            addToCart(albumName);
        });
    });

    function addToCart(album) {
        const cartItem = document.createElement('li');
        cartItem.textContent = album;
        cartItems.appendChild(cartItem);
    }
});
