var cart_link = document.querySelector(".buy-button");
var cart_popup= document.querySelector(".modal-product-in-cart");
var cart_close = cart_popup.querySelector(".modal-close");

cart_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  cart_popup.classList.add("modal-show");
});

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
