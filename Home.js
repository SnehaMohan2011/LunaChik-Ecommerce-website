let cart = [
    {
        id: 0,
        image:'w2.jpg',
        title:'Womens Skinny High Jeans',
        price:200,
    },
    {
        id: 1,
        image: 'c8.jpg',
        title: 'Liquid Lipstick of 2 by Kylie Cosmetics',
        price: 80,
    },
    {
        id: 2,
        image: 'E5.jpg',
        title: 'White Lehenga Set with Blouse',
        price: 500,
    },
    {
        id: 3,
        image: 'E1.jpg',
        title: 'Anarkali Floral Printed Set',
        price:  400,
    },
    {
        id: 4,
        image: 'z5.jpg',
        title: 'Fit me matte combo from Maybelline',
        price:  350,
    },
    {
        id:5,
        image:'z12.jpg',
        title:'Cera Ve Moisturising Lotion and Foaming Cleanser',
        price:600,
    }
];

document.querySelectorAll('.cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));

        cart.push({ product, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        updateCartCount();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    cartItems.innerHTML = '';
    let total = 0;

    cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `<h4>${item.product}</h4><p>$${item.price.toFixed(2)}</p>`;
        cartItems.appendChild(itemElement);
        total += item.price;
    });

    totalAmount.textContent = total.toFixed(2);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsCount = cart.length;

    if (cartItemsCount > 0) {
        cartCount.textContent = cartItemsCount;
        cartCount.style.display = 'block';
    } else {
        cartCount.style.display = 'none';
    }
}

window.addEventListener('load', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart();
    updateCartCount();
});
document.addEventListener('DOMContentLoaded', () => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    const cartCountElement = document.getElementById('cart-count');

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalAmount = 0;

        cartItems.forEach((item, index) => {
            totalAmount += item.price;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <span>${item.name}</span>
                    <span>$${item.price.toFixed(2)}</span>
                </div>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        totalAmountElement.textContent = totalAmount.toFixed(2);
        cartCountElement.textContent = cartItems.length;

        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const itemIndex = e.target.getAttribute('data-index');
                cartItems.splice(itemIndex, 1);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                updateCart();
            });
        });
    }

    updateCart();
});
function addToWishlist(name, image, price) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push({ name, image, price });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    // Redirect to wishlist page
    window.location.href = "wishlist.html";
}
