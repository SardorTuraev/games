// GRID AND LIST

var elCatigory = document.querySelector(".catigory__form-dad");
var elCatigoryBtnGrid = document.querySelector(".catigory__btn-grid");
var elCatigoryBtnList = document.querySelector(".catigory__btn-list");

if (elCatigoryBtnGrid) {
  elCatigoryBtnGrid.addEventListener('click', function() {
    elCatigoryBtnGrid.classList.add('catigory__btn--active');
    elCatigoryBtnList.classList.remove('catigory__btn--active');
    elCatigory.classList.add('catigory__product-grid-stile');
  });
};

if (elCatigoryBtnList) {
  elCatigoryBtnList.addEventListener('click', function() {
    elCatigoryBtnGrid.classList.remove('catigory__btn--active');
    elCatigoryBtnList.classList.add('catigory__btn--active');
    elCatigory.classList.remove('catigory__product-grid-stile');
  });
};


//MODAL SEARCH

var elHeaderMainMobileSearch = document.querySelector(".header-main__mobile-search");
var elHeaderMainForm = document.querySelector(".header-main__modal");

if (elHeaderMainMobileSearch) {
  elHeaderMainMobileSearch.addEventListener('click', function (evt) {
    evt.preventDefault();

    elHeaderMainForm.classList.add('header-main__modal--open');
  });
}

if (elHeaderMainForm) {
  elHeaderMainForm.addEventListener('click', function (evt) {
    if (evt.target.matches('.header-main__modal')) {
      elHeaderMainForm.classList.remove('header-main__modal--open');
    }
  });
}

// MODAL SHOPPING

var elShopping = document.querySelector('.shopping');
var elHeaderMainCart = document.querySelector('.header-main__cart');
var elShoppingHeaderClose = document.querySelector('.shopping__header-close');
if (elHeaderMainCart) {
  elHeaderMainCart.addEventListener('click', function (evt) {
    evt.preventDefault();

    elShopping.classList.add('shopping--open');
  });
}

if (elShoppingHeaderClose) {
  elShoppingHeaderClose.addEventListener('click', function () {
    elShopping.classList.remove('shopping--open');
  });
}


// MENU GAMBURGER

var elHeaderMenuLink = document.querySelector(".header-menu__link");
var elHeaderMenuBox = document.querySelector(".header-menu__box");

if (elHeaderMenuLink) {
  elHeaderMenuLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    elHeaderMenuBox.classList.toggle('header-menu__box--open');
  });
}

// CLOSE CATIGORY BTN

var elsCatigoryCheckBtn = document.querySelectorAll(".catigory__check-btn");

elsCatigoryCheckBtn.forEach(function (list) {
  list.addEventListener('click', function () {
    list.closest("p").remove();
  });  
});


var elCatigoryProductMobileBtn = document.querySelector('.catigory__product-mobile-btn');
var elCatigoryProductsLeft = document.querySelector('.catigory__products-left');

if (elCatigoryProductMobileBtn) {
  elCatigoryProductMobileBtn.addEventListener('click', function () {
    elCatigoryProductsLeft.classList.toggle('catigory__settings--open');
  });
}



// SHOPPING ACTIVE

var elsShoppingCartWish = document.querySelectorAll('.shopping__cart-left-wish');
var elsShoppingCartClose = document.querySelectorAll('.shopping__cart-left-remove');
var elShoppingItem = document.querySelector('.shopping__item');

elsShoppingCartWish.forEach(function (w) {
  w.addEventListener('click', function () {
    w.classList.toggle("shopping__cart-wish--active");
  });
});


elsShoppingCartClose.forEach(function (c) {
  c.addEventListener('click', function () {
    c.closest("li").parentElement.parentElement.parentElement.remove();
  });
});  