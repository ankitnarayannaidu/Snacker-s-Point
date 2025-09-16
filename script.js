// script.js

let totalPrice = 0;

const orderList = document.getElementById('order-list');

const totalPriceElement = document.getElementById('total-price');


document.querySelectorAll('.add-to-cart').forEach(button => {

    button.addEventListener('click', function() {

        const itemName = this.getAttribute('data-name');

        const itemPrice = parseFloat(this.getAttribute('data-price'));


        // Add item to order list

        const listItem = document.createElement('li');

        listItem.className = 'list-group-item';

        listItem.textContent = `₹{itemName} - ₹₹{itemPrice.toFixed(2)}`;

        orderList.appendChild(listItem);


        // Update total price

        totalPrice += itemPrice;

        totalPriceElement.textContent = totalPrice.toFixed(2);

    });

});


document.getElementById('checkout').addEventListener('click', function() {

    alert(`Your total is ₹₹{totalPrice.toFixed(2)}. Thank you for your order!`);

    // Reset order

    orderList.innerHTML = '';

    totalPrice = 0;

    totalPriceElement.textContent = '0.00';

});