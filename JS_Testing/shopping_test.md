Testing a simple JavaScript function that calculates the total price of items in a shopping cart.

Suppose you have a shopping cart with items, and you want to write tests for a `calculateTotal` function that calculates the total price of all items in the cart. Here's a simple example using Mocha and Chai:

```javascript
const assert = require('chai').assert;

// Function to calculate the total price of items in the shopping cart
function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price, 0);
}

// Sample shopping cart items
const shoppingCart = [
  { name: 'Item 1', price: 10 },
  { name: 'Item 2', price: 20 },
  { name: 'Item 3', price: 30 },
];

describe('Shopping Cart', function() {
  it('should calculate the total price correctly', function() {
    const totalPrice = calculateTotal(shoppingCart);
    assert.equal(totalPrice, 60); // The total price should be 60 (10 + 20 + 30).
  });

  it('should return 0 for an empty cart', function() {
    const totalPrice = calculateTotal([]);
    assert.equal(totalPrice, 0); // The total price should be 0 for an empty cart.
  });
});
```

In this Example:

1. We have a `calculateTotal` function that takes an array of items in the shopping cart and calculates the total price using the `reduce` method.

2. We define a sample shopping cart with three items, each having a `name` and `price`.

3. In the Mocha test suite, we have two test cases:
   - The first test case checks if the `calculateTotal` function correctly calculates the total price for the provided shopping cart.
   - The second test case checks if the function returns 0 when the cart is empty.

