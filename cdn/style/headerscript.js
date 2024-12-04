
var fader = document.querySelector(".sf-page-transition");
function __fadeInPage() {
  if (!window.AnimationEvent || !fader) return;

  // Page transition
  window.addEventListener("beforeunload", () => {
    fader.classList.add("fade-in");
  });
  window.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");

    fader.classList.remove("fade-in");
    fader.classList.add("fade-out");

    document.dispatchEvent(new CustomEvent("page:loaded"));
  });
  window.addEventListener("pageshow", (event) => {
    // Removes unload class when returning to page via history
    if (event.persisted) {
      fader.classList.remove("fade-in");
      fader.classList.add("fade-out");
    }
  });
}

__fadeInPage();




// Set header height
var _mh = document.querySelector("header.sf-header__mobile");
var _dh = document.querySelector("header.sf-header__desktop");

function _shh() {
  if (!_mh || !_dh) {
    _mh = document.querySelector("header.sf-header__mobile");
    _dh = document.querySelector("header.sf-header__desktop");
  }
  // Header
  var _hd = window.innerWidth < 1024 ? _mh : _dh;
  if (_hd) {
    document.documentElement.style.setProperty(
      "--sf-header-height",
      _hd.offsetHeight + "px"
    );
    window.MinimogSettings.headerHeight = _hd.offsetHeight;
  }
}
// setMainContentPadding
function _smcp() {
  // pageTemplate
  var _pt = document.documentElement.dataset.template;
  if (window.innerWidth >= 1024) {
    if (_dh && _dh.dataset.transparent === "true") {
      if (_pt === "index" || _pt === "collection") {
        document.documentElement.style.setProperty(
          "--main-content-padding-top",
          "0px"
        );
      }
    }
  } else {
    document.documentElement.style.removeProperty(
      "--main-content-padding-top"
    );
  }
}

      
window.MinimogTheme = {};
window.MinimogTheme.version = "3.3.0";
window.MinimogLibs = {};

 

window.MinimogSettings = {
  
  
  
  


 
  routes: {
    root: "\/",
    cart: "\/cart",
   
  },
  
  
  enable_cart_drawer: true,
 
};

window.themeScriptURLs = {

  collection: {
    url: "//ghorerbazar.com/cdn/shop/t/2/assets/collection.min.js?v=30728561818773925521707765654",
    required: false,
  },
  
 
  
 
};

// setTopbarHeight
function _stbh() {
  // Topbar
  var _tb = document.querySelector(".sf-topbar");
  if (_tb) {
    document.documentElement.style.setProperty(
      "--sf-topbar-height",
      _tb.offsetHeight + "px"
    );
    window.MinimogSettings.topbarHeight = _tb.offsetHeight;
  }
}
// Calc all height
function _calcHeights() {
  _stbh();
  _shh();
  _smcp();
}
_calcHeights();
document.addEventListener("matchMobile", () => {
  _calcHeights();
});
document.addEventListener("unmatchMobile", () => {
  _calcHeights();
});





