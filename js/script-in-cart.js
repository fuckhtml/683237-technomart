var products = document.querySelectorAll(".buy-button");
var cart_popup = document.querySelector(".modal-product-in-cart");
var cart_close = cart_popup.querySelector(".modal-close");

for (var i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cart_popup.classList.add("modal-show");
  });
}

cart_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  cart_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cart_popup.classList.contains("modal-show")) {
      evt.preventDefault();
      cart_popup.classList.remove("modal-show");
    }
  }
});
