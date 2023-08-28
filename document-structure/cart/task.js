const quantityControls = document.querySelectorAll('.product__quantity-control');
const addToCartButtons = document.querySelectorAll('.product__add');

quantityControls.forEach(control => {
  control.addEventListener('click', () => {
    const quantityValue = control.parentElement.querySelector('.product__quantity-value');
    let quantity = parseInt(quantityValue.textContent);

    if (control.classList.contains('product__quantity-control_dec')) {
      quantity = Math.max(quantity - 1, 1);
    } else if (control.classList.contains('product__quantity-control_inc')) {
      quantity += 1;
    }

    quantityValue.textContent = quantity;
  });
});


addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const productId = product.dataset.id;
    const productTitle = product.querySelector('.product__title').textContent;
    const productImage = product.querySelector('.product__image').src;
    const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);

    let cartProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

    if (cartProduct) {
      const cartProductCount = cartProduct.querySelector('.cart__product-count');
      const currentCount = parseInt(cartProductCount.textContent);
      cartProductCount.textContent = currentCount + productQuantity;
    } else {
      const cartProducts = document.querySelector('.cart__products');
      cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.setAttribute('data-id', productId);

      const cartProductImage = document.createElement('img');
      cartProductImage.classList.add('cart__product-image');
      cartProductImage.src = productImage;

      const cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = productQuantity;

      cartProduct.appendChild(cartProductImage);
      cartProduct.appendChild(cartProductCount);
      cartProducts.appendChild(cartProduct);
    }
  });
});