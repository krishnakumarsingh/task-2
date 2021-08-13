(function ($) {
  console.log(
    "%c KKS ",
    "font-weight: bold; font-size: 8px;color: #ccc; text-shadow: 1px 1px 0 rgb(187 31 217 / 34%), 2px 2px 0 rgb(226 91 14 / 29%), 3px 3px 0 rgb(245 221 8 / 76%), 4px 4px 0 rgb(5 148 68 / 43%), 5px 5px 0 rgb(2 135 206 / 42%), 6px 6px 0 rgb(4 77 145 / 41%), 7px 7px 0 rgb(42 21 113 / 31%)"
  );
  $("body").hide();
  $.getJSON("../../assets/json/header.json", function (data) {
    const { logo, navBar, slider } = data?.header;
    /* Logo */
    var $logo = $("#logo");
    var _indexPage =
      window.location.pathname === "/" ||
      window.location.pathname === "/index.html";
    $logo.append(
      `<a class="navbar-caption text-white display-2" href="/index.html" ctrl=${
        logo.text
      }>${
        !logo.logoPath
          ? logo.text
          : `${
              _indexPage ? `<img class="logo-top" src=${logo.logoPath} />` : ""
            }<img class="logo-rest" src=${logo.logoPath1} />`
      }</a>`
    );
    /* Nav bar */
    var $menu = $("#navbarSupportedContent ul");
    var $menuScroll = $("#navbarSupportedContentScroll ul");
    for (var item in navBar) {
      var _menu = "";
      var _submenuNavBar = navBar[item];
      if (_submenuNavBar.length > 0) {
        var _submenu = "";

        for (var i = 0; i < _submenuNavBar.length; i++) {
          _submenu += `<a
          class="text-white dropdown-item display-4"
          aria-expanded="false"
          href=${_submenuNavBar[i]["link"]}
      >
        ${_submenuNavBar[i]["type"]}
        </a>`;
        }
        _menu = `<li class="nav-item dropdown">
          <a class="nav-link link text-white dropdown-toggle display-4" href="/" aria-expanded="false" data-toggle="dropdown-submenu">
            ${item}
          </a>
          <div class="dropdown-menu">${_submenu}</div>
        </li>`;
      } else if (!Array.isArray(_submenuNavBar)) {
        _menu = `<li class='nav-item'>
          <a class='nav-link link text-white display-4' href=${
            !_indexPage ? "/" : ""
          }${_submenuNavBar.link}>
            ${item}
          </a>
      </li>`;
      }
      $menu.append(_menu);
      $menuScroll.append(_menu);
    }
    /* Nav bar */
    /* Slider */
    var $slider = $("#custom-id-slider");
    if (slider.length > 0) {
      var _slider = "";
      for (var item in slider) {
        // console.log(slider[item]);
        _slider += `<div class="row ${slider[item].className}-data">
                <div class="custom-white col-md-12 col-lg-12 block-title">
                    <div class="line line-title-big"></div>
                    <h1 class="custom-section-title align-left custom-semibold pb-3 custom-fonts-style display-1">${slider[item].sliderText}</h1>
                    <div class="custom-section-btn align-left">
                        <a class="btn btn-custom-outline display-7" href=${slider[item].button.href}>${slider[item].button.text}</a>
                    </div>
                </div>
            </div>`;
      }
      // console.log(_slider);
    }
    $slider.prepend(_slider);
    /* Slider */
    $("body").show();
  }).fail(function () {
    return "An error has occurred.";
  });
  setInterval(() => {
    var hasClassSlider1 = $(".custom-id-slider").hasClass("slider-1");
    var hasClassSlider2 = $(".custom-id-slider").hasClass("slider-2");
    var hasClassSlider3 = $(".custom-id-slider").hasClass("slider-3");
    if (hasClassSlider1) {
      $(".custom-id-slider")
        .removeClass("slider-1")
        .addClass("slider-2")
        .fadeIn(1000);
    } else if (hasClassSlider2) {
      $(".custom-id-slider")
        .removeClass("slider-2")
        .addClass("slider-3")
        .fadeIn(1000);
    } else if (hasClassSlider3) {
      $(".custom-id-slider")
        .removeClass("slider-3")
        .addClass("slider-1")
        .fadeIn(1000);
    }
  }, 5000);
  /* back to top */
  $(window).scroll(function () {
    let bodyOffHt = document.body.offsetHeight;
    let docScrollPos = document.documentElement.scrollTop;
    if (bodyOffHt / 2 < docScrollPos) {
      $("#back-to-top").addClass("active");
    } else {
      $("#back-to-top").removeClass("active");
    }
  });
  $("#back-to-top").on("click", () => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });

  /* Active on scroll bar */
  let mainNavLinks = document.getElementsByClassName("nav-link");
  let mainSections = document.querySelectorAll("section");

  let lastId;
  let cur = [];

  window.addEventListener("scroll", (event) => {
    let fromTop = window.scrollY;

    $(".nav-link").each((index, link) => {
      let section = document.querySelector(link.hash);

      if (
        section &&
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
  /* Active on scroll bar */
  $("form input, form textarea").on("change", function () {
    if ($(this).val() !== "") $(this).addClass("active");
  });
})(jQuery);
