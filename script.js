document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-name');
            const productPrice = e.target.getAttribute('data-price');
            
            // Simple visual confirmation that the item was "added"
            e.target.textContent = `Added! (PKR ${productPrice})`;
            e.target.disabled = true;

            // Optional: Revert button text after a short delay
            setTimeout(() => {
                e.target.textContent = 'Add to Cart';
                e.target.disabled = false;
            }, 1500);

            // In a real e-commerce site, this is where you would update 
            // the user's shopping cart data on the server or in local storage.
            
            console.log(`Product Added: ${productName} for PKR ${productPrice}`);
        });
    });
});