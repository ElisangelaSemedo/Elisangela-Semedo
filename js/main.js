// Declarando Variavéis
var btnContact = document.querySelector(".eli-btn-contact");
var toggleModal = document.querySelectorAll(".eli-toggle-modal");
var toggleMenu = document.querySelectorAll(".eli-toggle-menu");
var menuMobile = document.querySelector(".eli-menu-mobile");
var btnMenuMobIcon = document.querySelector(".eli-btn-menu-mobile ion-icon");

//Page pre-loader
window.addEventListener("load", function () {
  var pagePreloader = document.querySelector(".eli-preloader");
  pagePreloader.classList.add("eli-fade-out");

  setTimeout(function () {
    pagePreloader.style.display = "none";
  }, 4000);
});

// Abrindo e Fechando Informações de contacto
btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".eli-contact-info");
  boxContact.classList.toggle("eli-is-open");

  this.classList.toggle("eli-change-icon");
});

// Abrindo e Fechando o modal de orçamento

for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    var modalBudget = document.querySelector("#eli-modal-budget");
    var overlay = document.querySelector(".eli-overlay");
    overlay.classList.toggle("eli-is-open");
    modalBudget.classList.toggle("eli-is-open");
    //modalBudget.classList.toggle('eli-slide-top-in');
  });
}

// Open and close Moble Menu
for (var m = 0; m < toggleMenu.length; m++) {
  toggleMenu[m].addEventListener("click", function () {
    var overlay = document.querySelector(".eli-menu-overlay");
    overlay.classList.toggle("eli-is-open");
    menuMobile.classList.toggle("eli-menu-is-closed");
    menuMobile.classList.toggle("eli-menu-is-open");

    var icon = btnMenuMobIcon.getAttribute("name");

    if (icon === "menu-outline") {
      btnMenuMobIcon.setAttribute("name", "close");
    } else {
      btnMenuMobIcon.setAttribute("name", "menu-outline");
    }
  });
}

// Topbar's elements animation
var triggerTopbar = document.querySelector(".eli-trigger-topbar");
var topbar = document.querySelector(".eli-topbar");
var logo = document.querySelector(".eli-logo");
var waypoint = new Waypoint({
  element: triggerTopbar,
  handler: function () {
    topbar.classList.toggle("eli-topbar-bg");
    logo.classList.toggle('eli-logo-shorten');
    logo.classList.toggle('eli-logo-big');
  },
  offset: "50px",
});
