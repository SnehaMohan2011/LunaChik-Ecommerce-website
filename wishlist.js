document.addEventListener("DOMContentLoaded", function () {
    displayWishlist();
});

function addToWishlist(name, image, price) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Check if item already exists in wishlist
    if (!wishlist.some(item => item.name === name)) {
        wishlist.push({ name, image, price });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(name + " added to wishlist!");
    } else {
        alert(name + " is already in your wishlist!");
    }
}


function addToWishlist(name, image, price) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Check if item already exists in wishlist
    if (!wishlist.some(item => item.name === name)) {
        wishlist.push({ name, image, price });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(name + " added to wishlist!");
    } else {
        alert(name + " is already in your wishlist!");
    }
}

function displayWishlist() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let wishlistContainer = document.getElementById("wishlistItems");
    let wishlistCount = document.getElementById("wishlist-count");

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "Your wishlist is empty";
        wishlistCount.innerText = "0";
    } else {
        wishlistContainer.innerHTML = wishlist.map((item, index) => `
            <div class="wishlist-item">
                <img src="${item.image}" alt="${item.name}" width="100px">
                <p>${item.name} - $${item.price}</p>
                <button class="delete-btn" onclick="removeFromWishlist(${index})">Delete</button>
            </div>
        `).join("");
        wishlistCount.innerText = wishlist.length;
    }
}

function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
}
function loadWishlist() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let wishlistContainer = document.getElementById("wishlistItems");

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "Your wishlist is empty";
    } else {
        wishlistContainer.innerHTML = "";
        wishlist.forEach((item, index) => {
            wishlistContainer.innerHTML += `
                <div class="wishlist-item">
                    <img src="${item.image}" width="100px">
                    <p>${item.name} - $${item.price}</p>
                    <button onclick="removeFromWishlist(${index})">Remove</button>
                </div>
            `;
        });
    }
}

function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    loadWishlist();
}

window.onload = loadWishlist;