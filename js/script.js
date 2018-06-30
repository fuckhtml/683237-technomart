var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var user_name = popup.querySelector(".write-us-name");
var email = popup.querySelector(".write-us-email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("user_name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    user_name.value = storage;
    email.focus();
  } else {
    user_name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!user_name.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user_name", user_name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});



var map_link = document.querySelector(".modal-map-button");

var map_popup = document.querySelector(".modal-large-map");
var map_close = map_popup.querySelector(".modal-close");

map_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.add("modal-show");
});

map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map_popup.classList.contains("modal-show")) {
      evt.preventDefault();
      map_popup.classList.remove("modal-show");
    }
  }
});



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
