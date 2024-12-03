(MinimogTheme.pubSubEvents = {
  cartError: "cart-error",
  cartUpdate: "cart-update",
}),
  (MinimogTheme.productSlideCommonConfigs = { loop: !0 }),
  (MinimogTheme.productSlideConfigs = {
    mobile: { autoHeight: !0, loop: !0 },
    "quick-view": { autoHeight: !0 },
    "layout-4": {},
    "layout-5": {
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      watchSlidesVisibility: !0,
      breakpoints: {
        768: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 10 },
      },
    },
    "layout-6": {},
    "layout-7": { slidesPerView: 3, speed: 500, centeredSlides: !0 },
  });
const requestDefaultConfigs = {
  mode: "same-origin",
  credentials: "same-origin",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
};
(MinimogTheme.config = {
  mqlMobile: !1,
  mediaQueryMobile: "screen and (max-width: 767px)",
}),
  (MinimogTheme.initWhenVisible = function (e) {
    const t = e.threshold ? e.threshold : 0;
    new IntersectionObserver(
      (t, s) => {
        t.forEach((t) => {
          t.isIntersecting &&
            "function" == typeof e.callback &&
            (e.callback(), s.unobserve(t.target));
        });
      },
      { rootMargin: `0px 0px ${t}px 0px` }
    ).observe(e.element);
  }),
  (function () {
    const e = window.matchMedia(MinimogTheme.config.mediaQueryMobile);
    (MinimogTheme.config.mqlMobile = e.matches),
      (e.onchange = (e) => {
        e.matches
          ? ((MinimogTheme.config.mqlMobile = !0),
            document.dispatchEvent(new CustomEvent("matchMobile")))
          : ((MinimogTheme.config.mqlMobile = !1),
            document.dispatchEvent(new CustomEvent("unmatchMobile")));
      });
  })();
class CountdownTimer {
  constructor(e, t, s, i = {}) {
    (this.times = ["day", "hour", "min", "sec"]),
      (this.selectors = {
        day: ".countdown-timer-day",
        hour: ".countdown-timer-hour",
        min: ".countdown-timer-minute",
        sec: ".countdown-timer-sec",
      }),
      (this.DAY_IN_MS = 864e5),
      (this.HOUR_IN_MS = 36e5),
      (this.MIN_IN_MS = 6e4),
      (this.container = e),
      (this.startTime = t),
      (this.savedStartTime = t),
      (this.endTime = s),
      (this.options = Object.assign(
        {},
        { addZeroPrefix: !0, loop: !1, callback: () => {} },
        i
      )),
      (this.intervalTime = 1e3),
      (this.timer = null),
      (this.domNodes = queryDomNodes(this.selectors, e)),
      this.start();
  }
  start() {
    (this.timer = setInterval(() => {
      this.startTime > this.endTime ? this.stop() : this.update();
    }, this.intervalTime)),
      this.container.classList.add("opacity-100"),
      this.container.classList.remove("opacity-0");
  }
  update() {
    const e = this.format(this.endTime - this.startTime);
    this.times.forEach((t) => {
      this.domNodes[t] &&
        (this.domNodes[t].textContent = this.addZeroPrefix(e[t]));
    }),
      (this.startTime += this.intervalTime);
  }
  stop() {
    clearInterval(this.timer),
      this.options.loop
        ? ((this.startTime = this.savedStartTime), this.start())
        : ((this.timer = null), this.options.callback());
  }
  clear() {
    clearInterval(this.timer),
      (this.timer = null),
      (this.startTime = this.savedStartTime),
      this.times.forEach((e) => {
        this.domNodes[e] && (this.domNodes[e].textContent = "00");
      });
  }
  addZeroPrefix(e) {
    return this.options.addZeroPrefix && e < 10 ? `0${e}` : e.toString();
  }
  format(e) {
    return {
      day: Math.floor(e / this.DAY_IN_MS),
      hour: Math.floor(e / this.HOUR_IN_MS) % 24,
      min: Math.floor(e / this.MIN_IN_MS) % 60,
      sec: Math.floor(e / 1e3) % 60,
    };
  }
}
window.MinimogTheme.CountdownTimer = CountdownTimer;
class Tabs {
  constructor(e, t = () => {}) {
    (this.selectors = {
      tabHeaders: [".sf-tab-header"],
      tabContents: [".sf-tab-content"],
    }),
      (this.activeClass = "active"),
      (this.currentActiveIndex = -1),
      (this.currentTab = null),
      (this.container = e),
      (this.cb = t),
      (this.domNodes = queryDomNodes(this.selectors, e)),
      (this.customSelect = this.container.querySelector("m-select-component")),
      this.init(),
      this.setActiveTab(0);
  }
  init() {
    addEventDelegate({
      context: this.container,
      selector: this.selectors.tabHeaders[0],
      handler: (e, t) => {
        let s;
        e.preventDefault(),
          t && (s = Number(t.dataset.index)),
          this.setActiveTab(s),
          this.cb(t);
      },
    });
  }
  setActiveTab(e) {
    const { tabHeaders: t, tabContents: s } = this.domNodes;
    if (s.length && -1 !== e && this.currentActiveIndex !== e) {
      let i, o, n;
      t &&
        ((i = t[this.currentActiveIndex]),
        (o = t[e]),
        this.customSelect &&
          o &&
          this.customSelect.updateCustomSelectChecked(e, o.innerHTML)),
        s && (n = s[e]),
        i && i.classList.remove(this.activeClass),
        this.currentTab &&
          (this.currentTab.classList.remove(this.activeClass, "opacity-100"),
          this.currentTab.style.removeProperty("opacity")),
        o && o.classList.add(this.activeClass),
        n && n.classList.add(this.activeClass),
        setTimeout(() => (n.style.opacity = 1)),
        (this.currentActiveIndex = e),
        (this.currentTab = n);
    }
  }
}
function getRequestDefaultConfigs() {
  return JSON.parse(JSON.stringify(requestDefaultConfigs));
}
function getFocusableElements(e) {
  return Array.from(
    e.querySelectorAll(
      "summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
    )
  );
}
window.MinimogTheme.Tabs = Tabs;
const trapFocusHandlers = {};
function trapFocus(e, t = e) {
  var s = getFocusableElements(e),
    i = s[0],
    o = s[s.length - 1];
  removeTrapFocus(),
    (trapFocusHandlers.focusin = (t) => {
      (t.target !== e && t.target !== o && t.target !== i) ||
        document.addEventListener("keydown", trapFocusHandlers.keydown);
    }),
    (trapFocusHandlers.focusout = function () {
      document.removeEventListener("keydown", trapFocusHandlers.keydown);
    }),
    (trapFocusHandlers.keydown = function (t) {
      "TAB" === t.code.toUpperCase() &&
        (t.target !== o || t.shiftKey || (t.preventDefault(), i.focus()),
        (t.target !== e && t.target !== i) ||
          !t.shiftKey ||
          (t.preventDefault(), o.focus()));
    }),
    document.addEventListener("focusout", trapFocusHandlers.focusout),
    document.addEventListener("focusin", trapFocusHandlers.focusin),
    t.focus(),
    "INPUT" === t.tagName &&
      ["search", "text", "email", "url"].includes(t.type) &&
      t.value &&
      t.setSelectionRange(0, t.value.length);
}
function removeTrapFocus(e = null) {
  document.removeEventListener("focusin", trapFocusHandlers.focusin),
    document.removeEventListener("focusout", trapFocusHandlers.focusout),
    document.removeEventListener("keydown", trapFocusHandlers.keydown),
    e && e.focus();
}
function fetchJSON(e, t = getRequestDefaultConfigs()) {
  return fetch(e, t).then(function (e) {
    if (!e.ok) throw e;
    return e.json();
  });
}
const cache = new Map();
function fetchCache(e, t = getRequestDefaultConfigs()) {
  return new Promise((s, i) => {
    let o = cache.get(e);
    if (o) return s(o);
    fetch(e, t)
      .then((t) => {
        (o = t.text()), cache.set(e, o), s(o);
      })
      .catch(i);
  });
}
const sectionCache = new Map();
function fetchSection(e, t = {}) {
  const { url: s, fromCache: i = !1, params: o = {} } = t;
  return new Promise((t, n) => {
    const r = new URL(s || window.location.href);
    if (
      (r.searchParams.set("section_id", e),
      Object.entries(o).forEach(([e, t]) => r.searchParams.set(e, t)),
      i)
    ) {
      const e = sectionCache.get(r);
      if (e) return t(e);
    }
    fetch(r, getRequestDefaultConfigs())
      .then((t) => {
        if (t.ok) return t.text();
        n(`Failed to load section: ${e}`);
      })
      .then((e) => {
        const s = generateDomFromString(e);
        sectionCache.set(r, s), t(s);
      })
      .catch(n);
  });
}
const cache2 = new Map();
function fetchJsonCache(e, t = requestDefaultConfigs) {
  return new Promise((s, i) => {
    if (cache2.get(e)) return s(cache2.get(e));
    fetch(e, t)
      .then((t) => {
        if (t.ok) {
          const i = t.json();
          return s(i), cache2.set(e, i), i;
        }
        i(t);
      })
      .catch(i);
  });
}
function formatMoney(e, t) {
  "string" == typeof e && (e = e.replace(".", ""));
  let s = "";
  const i = /\{\{\s*(\w+)\s*\}\}/,
    o = t || "${{amount}}";
  function n(e, t = 2, s = ",", i = ".") {
    if (isNaN(e) || null == e) return 0;
    const o = (e = (e / 100).toFixed(t)).split(".");
    return (
      o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${s}`) +
      (o[1] ? i + o[1] : "")
    );
  }
  switch (o.match(i)[1]) {
    case "amount":
      s = n(e, 2);
      break;
    case "amount_no_decimals":
      s = n(e, 0);
      break;
    case "amount_with_comma_separator":
      s = n(e, 2, ".", ",");
      break;
    case "amount_no_decimals_with_comma_separator":
      s = n(e, 0, ".", ",");
  }
  return o.replace(i, s);
}
function validateForm(e) {
  const t = [];
  if (!e) return t;
  return (
    e
      .querySelectorAll(
        '[data-product-custom-field] [name][required]:not([hidden]):not([type="hidden"])'
      )
      .forEach((s) => {
        if ((s.classList.remove("form-control--warning"), "radio" === s.type)) {
          const i = e.querySelectorAll(`input[name="${s.name}"]`);
          Array.from(i).some((e) => e.checked) ||
            (t.push(s), s.classList.add("form-control--warning"));
        } else s.value || (t.push(s), s.classList.add("form-control--warning"));
      }),
    t
  );
}
function generateDomFromString(e, t = "div") {
  const s = document.createElement(t);
  return (s.innerHTML = e), s;
}
function generateDomeFromStringNew(e, t = "div") {
  return new DOMParser().parseFromString(e, "text/html").querySelector(t);
}
function fetchCountDown(e) {
  const t = MinimogSettings.foxKitBaseUrl
    ? `https://${MinimogSettings.foxKitBaseUrl}`
    : "";
  return new Promise((s, i) => {
    let o = `${t}/api/public/countdown?shop=${window.data.shop}&collectionIds=${e}`;
    fetch(o)
      .then((e) => e.json())
      .then(s)
      .catch(i);
  });
}
function loadAssetsNew(e = [], t, s = () => {}, i = {}) {
  const o = t || Math.random().toString(36).slice(2);
  window.MinimogLibs.loadjs.isDefined(t) || window.MinimogLibs.loadjs(e, o),
    window.MinimogLibs.loadjs.ready(o, s);
}
function pauseAllMedia() {
  document.querySelectorAll(".js-youtube").forEach((e) => {
    e.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  }),
    document.querySelectorAll(".js-vimeo").forEach((e) => {
      e.contentWindow.postMessage('{"method":"pause"}', "*");
    }),
    document.querySelectorAll("video").forEach((e) => e.pause()),
    document.querySelectorAll("product-model").forEach((e) => {
      e.modelViewerUI && e.modelViewerUI.pause();
    });
}
function getProductSliderConfig(e) {
  const t =
    MinimogTheme.productSlideConfigs[e] ||
    MinimogTheme.productSlideConfigs["layout-4"];
  return Object.assign({}, MinimogTheme.productSlideCommonConfigs, t);
}
function loadJS(e, t = document.body, s = !1, i = !0) {
  return new Promise((o, n) => {
    const r = t.ownerDocument,
      a = r.querySelector(`script[src="${e}"]`);
    if (a)
      return a.dataset.loaded
        ? o(!0)
        : void a.addEventListener("load", () => {
            (a.dataset.loaded = !0), o(!0);
          });
    const l = r.createElement("script");
    (l.src = e),
      (l.async = s),
      (l.defer = i),
      l.addEventListener("load", () => {
        (l.dataset.loaded = !0), o(!0);
      }),
      (l.onerror = n),
      t.appendChild(l);
  });
}
function loadCSS(e, t = document.head) {
  return new Promise((s, i) => {
    const o = t.ownerDocument,
      n = o.querySelector(`link[href="${e}"]`);
    if (n)
      return n.dataset.loaded
        ? s(!0)
        : void n.addEventListener("load", () => {
            (n.dataset.loaded = !0), s(!0);
          });
    const r = o.createElement("link");
    (r.rel = "stylesheet"),
      (r.href = e),
      r.addEventListener("load", () => {
        (r.dataset.loaded = !0), s(!0);
      }),
      (r.onerror = i),
      t.appendChild(r);
  });
}
function addEventDelegate({
  context: e = document.documentElement,
  event: t = "click",
  selector: s,
  handler: i,
  capture: o = !1,
}) {
  const n = function (e) {
    for (let t = e.target; t && t !== this; t = t.parentNode)
      if (t.matches(s)) {
        i.call(t, e, t);
        break;
      }
  };
  return (
    e.addEventListener(t, n, o),
    () => {
      e.removeEventListener(t, n, o);
    }
  );
}
function debounce(e, t) {
  let s;
  return (...i) => {
    clearTimeout(s), (s = setTimeout(() => e.apply(this, i), t));
  };
}
function createSearchLink(e) {
  const t = new URLSearchParams({
    type: "product",
    "options[unavailable_products]": "last",
    "options[prefix]": "last",
    q: e,
  });
  return `${window.MinimogSettings.routes.search_url}?${t.toString()}`;
}
!(function () {
  const e = document.querySelectorAll("[data-ps-item]");
  e && e.forEach((e) => (e.href = createSearchLink(e.dataset.psQuery)));
})();
const { themeScriptURLs, themeStyleURLs } = window,
  themeAssets = {
    js: { urls: themeScriptURLs, load: loadJS },
    css: { urls: themeStyleURLs, load: loadCSS },
  };
function log(e) {}
function loadAssets(e, ...t) {
  return new Promise((s, i) => {
    const o = "string" == typeof e ? [e] : e;
    Promise.all(
      o.map(async (e) => {
        try {
          const [, s, i] = e.match(/(.*)\.(js|css)$/) || [, e, "js"],
            {
              urls: {
                [s]: { url: o },
              },
              load: n,
            } = themeAssets[i];
          await n(o, ...t), log(`${s}.${i}`);
        } catch (e) {}
      })
    )
      .then(s)
      .catch(i);
  });
}
function queryDomNodes(e = {}, t = document) {
  return Object.entries(e).reduce((e, [s, i]) => {
    const o = "string" == typeof i,
      n = o ? "querySelector" : "querySelectorAll",
      r = o ? i : i[0];
    return t && (e[s] = t[n](r)), !o && e[s] && (e[s] = [...e[s]]), e;
  }, {});
}
function saleProgress(e, t, s) {
  const { total_quantity: i, sold_to: o, sold_from: n } = e;
  let r;
  if (s) r = parseInt(s);
  else {
    const e = o - n;
    let s = 4 / 24 + (Number(t.split("").pop()) + 1) / 10;
    s > 1 && (s -= 1);
    r = n + Math.ceil(s * e);
  }
  const a = i - r;
  return `\n    <div class="pcard-sale">\n      <div class="pcard-sale__progress" data-flash-sale>\n        <span data-sale-progress style="width: ${
    (100 * r) / i
  }%;" />\n      </div>\n      <div class="pcard-sale__text flex justify-between mt-2">\n        <div>\n          <span>${
    MinimogStrings.sold
  }: </span>\n          <strong data-sale-number>${
    r || 0
  }</strong>\n        </div>\n        <div>\n          <span>${
    MinimogStrings.available
  }: </span>\n          <strong data-available-number>${
    a || 0
  }</strong>\n        </div>\n      </div>\n    </div>\n  `;
}
function spinner(e = "") {
  return `<svg class="animate-spin hidden w-[20px] h-[20px] ${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">\n    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n  </svg>`;
}
function fetchConfig(e = "json") {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: `application/${e}` },
  };
}
class DeferredMedia extends HTMLElement {
  constructor() {
    super();
    const e = this.querySelector('[id^="Deferred-Poster-"]');
    e && e.addEventListener("click", this.loadContent.bind(this));
  }
  loadContent(e = !0) {
    if (
      ((this.autoPlay = "true" === this.dataset.autoPlay),
      this.autoPlay || window.pauseAllMedia(),
      !this.getAttribute("loaded"))
    ) {
      const t = document.createElement("div");
      t.appendChild(
        this.querySelector("template").content.firstElementChild.cloneNode(!0)
      ),
        this.setAttribute("loaded", !0);
      const s = this.appendChild(
        t.querySelector("video, model-viewer, iframe")
      );
      (this.deferredElement = s), e && s.focus(), this.playVideo(s);
    }
  }
  playVideo(e) {
    if (!this.autoPlay)
      if (e.classList.contains("js-youtube")) {
        const t = e.src.indexOf("?") > -1 ? "&" : "?";
        e.src += t + "autoplay=1&mute=1";
      } else if (e.classList.contains("js-vimeo")) {
        const t = e.src.indexOf("?") > -1 ? "&" : "?";
        e.src += t + "autoplay=1&muted=1";
      } else e.setAttribute("autoplay", "autoplay"), e.play();
  }
}
customElements.define("deferred-media", DeferredMedia);
class ResponsiveImage extends HTMLElement {
  get intersecting() {
    return this.hasAttribute("intersecting");
  }
  constructor() {
    super(),
      (this.img = this.querySelector("img")),
      (this.src = this.img.src),
      (this.observerCallback = this.observerCallback.bind(this)),
      this.img &&
        ((this.loadImage = this.loadImage.bind(this)),
        (this.img.onload = this.onLoad.bind(this))),
      this.img.complete &&
        (this.removeAttribute("data-image-loading"),
        this.img.classList.add("f-img-loaded"));
  }
  connectedCallback() {
    (this.img.src = ""),
      "IntersectionObserver" in window
        ? this.initIntersectionObserver()
        : this.loadImage();
  }
  disconnectedCallback() {
    this.disconnectObserver();
  }
  loadImage() {
    this.setAttribute("intersecting", "true"),
      this.img &&
        ((this.img.src = this.src),
        (this.img.width = this.clientWidth),
        (this.img.height = this.clientHeight),
        (this.img.sizes = this.clientWidth + "px"));
  }
  onLoad() {
    this.removeAttribute("data-image-loading"),
      this.img.classList.add("f-img-loaded");
  }
  observerCallback(e, t) {
    e[0].isIntersecting && (t.unobserve(this), this.loadImage());
  }
  initIntersectionObserver() {
    if (this.observer) return;
    (this.observer = new IntersectionObserver(this.observerCallback, {
      rootMargin: "10px",
    })),
      this.observer.observe(this);
  }
  disconnectObserver() {
    this.observer &&
      (this.observer.disconnect(),
      (this.observer = null),
      delete this.observer);
  }
}
customElements.define("responsive-image", ResponsiveImage);
class QuantityInput extends HTMLElement {
  constructor() {
    super(),
      (this.input = this.querySelector("input")),
      (this.changeEvent = new Event("change", { bubbles: !0 })),
      (this.productId = this.dataset.productId),
      this.querySelectorAll("button").forEach((e) =>
        e.addEventListener("click", this.onButtonClick.bind(this))
      ),
      this.input.addEventListener("change", () => {
        window.MinimogEvents.emit(
          `${this.productId}__QUANTITY_CHANGE`,
          this.input.value,
          this
        );
      });
  }
  onButtonClick(e) {
    e.preventDefault();
    const t = this.input.value;
    "plus" === e.target.closest("button").getAttribute("name")
      ? this.input.stepUp()
      : this.input.stepDown(),
      t !== this.input.value && this.input.dispatchEvent(this.changeEvent);
  }
}
customElements.define("quantity-input", QuantityInput);
class ProductRecommendations extends HTMLElement {
  constructor() {
    super(),
      (this.selectors = {
        gridContainer: ".sf-grid",
        swiperWrapper: ".swiper-wrapper",
        slideControls: ".sf-slider__controls",
      }),
      (this.enableSlider = "true" === this.dataset.enableSlider),
      (this.useScrollMobile = "true" === this.dataset.useScrollMobile),
      (this.itemsPerPage = this.dataset.itemsPerPage);
  }
  connectedCallback() {
    "IntersectionObserver" in window &&
      new IntersectionObserver(
        ((e, t) => {
          e[0].isIntersecting &&
            (t.unobserve(this),
            fetch(this.dataset.url)
              .then((e) => e.text())
              .then((e) => {
                const t = generateDomFromString(e).querySelector(
                  "product-recommendations"
                );
                t &&
                  t.innerHTML.trim().length &&
                  ((this.innerHTML = t.innerHTML),
                  (this.totalProducts =
                    t.querySelectorAll(".sf__pcard").length),
                  this.initByScreenSize(),
                  document.addEventListener("matchMobile", () => {
                    this.initByScreenSize();
                  }),
                  document.addEventListener("unmatchMobile", () => {
                    this.initByScreenSize();
                  }));
              })
              .catch((e) => {}));
        }).bind(this),
        { rootMargin: "0px 0px 400px 0px" }
      ).observe(this);
  }
  initByScreenSize() {
    const {
      gridContainer: e,
      swiperWrapper: t,
      slideControls: s,
    } = queryDomNodes(this.selectors, this);
    if (MinimogTheme.config.mqlMobile) {
      if ((this.initSlider(), !this.useScrollMobile)) return;
      e?.classList.remove("swiper-container"),
        s.classList.add("hidden"),
        this.swiper && this.swiper.destroy(!1, !0),
        t && e?.classList.remove("sf__ms-wrapper"),
        e?.parentNode.classList.add("sf__ms"),
        t?.classList.add("sf__ms-wrapper");
    } else
      e?.parentNode.classList.remove("sf__ms"),
        t?.classList.remove("sf__ms-wrapper"),
        s.classList.remove("hidden"),
        this.initSlider();
  }
  initSlider() {
    const { gridContainer: e, slideControls: t } = queryDomNodes(
      this.selectors,
      this
    );
    if (this.enableSlider && this.totalProducts > this.itemsPerPage) {
      if (
        (e?.classList.add("swiper-container"),
        (this.slider = new MinimogLibs.Swiper(e, {
          slidesPerView: 2,
          loop: !0,
          autoplay: !1,
          breakpoints: { 1280: { slidesPerView: this.itemsPerPage } },
        })),
        this.slider)
      ) {
        t.classList.remove("hidden");
        const e = this.querySelector(".sf-slider__controls-prev"),
          s = this.querySelector(".sf-slider__controls-next");
        e && e.addEventListener("click", () => this.slider.slidePrev()),
          s && s.addEventListener("click", () => this.slider.slideNext());
      }
      this.swiper = e?.swiper;
    } else t.classList.add("hidden");
  }
}
if (
  (customElements.define("product-recommendations", ProductRecommendations),
  customElements.get("video-component") ||
    customElements.define(
      "video-component",
      class extends HTMLElement {
        constructor() {
          super(),
            MinimogTheme.initWhenVisible({
              element: this,
              callback: this.init.bind(this),
              threshold: 0,
            });
        }
        init() {
          (this.autoPlay = "true" === this.dataset.autoPlay),
            (this.muted = "true" === this.dataset.muted);
          const e = this.querySelector('[id^="Deferred-Poster-"]');
          this.autoPlay
            ? this.loadContent()
            : e.addEventListener("click", this.loadContent.bind(this));
        }
        loadContent() {
          if (!this.getAttribute("loaded")) {
            const e = document.createElement("div");
            e.appendChild(
              this.querySelector(
                "template"
              ).content.firstElementChild.cloneNode(!0)
            ),
              this.setAttribute("loaded", !0);
            const t = this.appendChild(
              e.querySelector("video, model-viewer, iframe")
            );
            if (((this.deferredElement = t), this.autoPlay)) return;
            if (this.deferredElement.classList.contains("js-youtube")) {
              const e = this.deferredElement.src.indexOf("?") > -1 ? "&" : "?";
              this.deferredElement.src +=
                e + "autoplay=1" + (this.muted ? "&mute=1" : "");
            } else if (this.deferredElement.classList.contains("js-vimeo")) {
              const e = this.deferredElement.src.indexOf("?") > -1 ? "&" : "?";
              this.deferredElement.src +=
                e + "autoplay=1" + (this.muted ? "&mute=1" : "");
            } else this.deferredElement.play();
          }
        }
      }
    ),
  !customElements.get("collapsible-tab"))
) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.init();
    }
    disconnectedCallback() {
      this.destroy();
    }
    init() {
      "true" === this.dataset.destroy ||
        (this.setDefaultData(),
        this.attachEvents(),
        "true" === this.getAttribute("open")
          ? ((this.selected = !0),
            this.classList.add(this.expandedClass),
            this.setExpandedAria())
          : ((this.content.style.height = this.collapsedHeight),
            this.classList.add(this.collapsedClass),
            this.setCollapsedAria()),
        this.content.removeAttribute("hidden"));
    }
    transitionendEventName() {
      let e,
        t = document.createElement("div"),
        s = {
          transition: "transitionend",
          OTransition: "otransitionend",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd",
        };
      for (e in s)
        if (s.hasOwnProperty(e) && void 0 !== t.style[e]) return s[e];
    }
    expand() {
      const e = ((t) => {
        t.target === this.content &&
          (this.content.removeEventListener(this.transitionendevent, e),
          this.isOpen &&
            requestAnimationFrame(() => {
              (this.content.style.transition = "0"),
                (this.content.style.height = "auto"),
                requestAnimationFrame(() => {
                  (this.content.style.height = null),
                    (this.content.style.transition = null),
                    this.setExpandedAria(),
                    this.classList.add(this.expandedClass),
                    this.trySetTabIndex(this.content, 0),
                    this.fire("tabOpened");
                });
            }));
      }).bind(this);
      this.content.addEventListener(this.transitionendevent, e),
        (this.isOpen = !0),
        this.classList.remove(this.collapsedClass),
        (this.content.style.height = this.content.scrollHeight + "px");
    }
    collapse() {
      const e = ((t) => {
        t.target === this.content &&
          (this.content.removeEventListener(this.transitionendevent, e),
          this.isOpen ||
            (this.fire("elementClosed"),
            this.setCollapsedAria(),
            this.classList.add(this.collapsedClass),
            this.trySetTabIndex(this.content, -1)));
      }).bind(this);
      this.content.addEventListener(this.transitionendevent, e),
        (this.isOpen = !1),
        this.classList.remove(this.expandedClass),
        requestAnimationFrame(() => {
          (this.content.style.transition = "0"),
            (this.content.style.height = this.content.scrollHeight + "px"),
            requestAnimationFrame(() => {
              (this.content.style.transition = null),
                (this.content.style.height = this.collapsedHeight);
            });
        });
    }
    open() {
      (this.selected = !0),
        this.fire("elementSelected"),
        this.expand(),
        this.setAttribute("open", !0);
    }
    close() {
      (this.selected = !1),
        this.fire("elementUnselected"),
        this.collapse(),
        this.removeAttribute("open");
    }
    toggle(e) {
      if ((e.preventDefault(), this.selected)) this.close();
      else if ((this.open(), this.oneAtATime)) {
        const e = document.querySelectorAll("collapsible-tab"),
          t = this.closest("[data-first-level]");
        e.length &&
          e.forEach((e) => {
            e !== this && e.selected && t !== e && e.close();
          });
      }
    }
    trySetTabIndex(e, t) {
      const s = e.querySelectorAll(this.defaultElements);
      s &&
        s.forEach((e) => {
          e.setAttribute("tabindex", t);
        });
    }
    setExpandedAria() {
      this.trigger.setAttribute("aria-expanded", "true"),
        this.content.setAttribute("aria-hidden", "false");
    }
    setCollapsedAria(e) {
      this.trigger.setAttribute("aria-expanded", "false"),
        this.content.setAttribute("aria-hidden", "true");
    }
    attachEvents() {
      this.trigger.addEventListener("click", (e) => this.toggle(e));
    }
    setDefaultData() {
      (this.events = {
        elementSelected: [],
        tabOpened: [],
        elementUnselected: [],
        elementClosed: [],
      }),
        (this.transitionendevent = this.transitionendEventName()),
        (this.expandedClass = "is-expanded"),
        (this.collapsedClass = "is-collapsed"),
        (this.trigger = this.querySelector("[data-trigger]")),
        (this.content = this.querySelector("[data-content]")),
        (this.collapsedHeight = "0px"),
        (this.defaultElements = [
          "a",
          "button",
          "input:not(.focus-none)",
          "[data-trigger]",
        ]),
        (this.oneAtATime = !0),
        this.dataset.oneOpen &&
          (this.oneAtATime = "true" === this.dataset.oneOpen);
    }
    fire(e) {
      let t = this.events[e];
      if (t) for (let e = 0; e < t.length; e++) t[e](this);
    }
    on(e, t) {
      this.events[e] && this.events[e].push(t);
    }
    destroy() {
      this.trigger.removeEventListener("click", (e) => this.toggle(e)),
        this.content.removeAttribute("aria-hidden"),
        (this.content.style.height = "auto"),
        this.classList.remove(this.expandedClass, this.collapsedClass),
        this.removeAttribute("open");
    }
  }
  customElements.define("collapsible-tab", e);
}
if (!customElements.get("m-slideshow")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      (this.autoplay = "true" === this.dataset.autoplay),
        (this.autoplaySpeed = parseInt(this.dataset.autoplaySpeed)),
        (this.showArrows = "true" === this.dataset.enableArrows),
        (this.showDots = "true" === this.dataset.enableDots),
        (this.adaptHeight = "adapt" === this.dataset.slideHeight),
        (this.id = this.dataset.id),
        (this.lastVideo = null),
        (this.lastActive = null),
        (this.timeout = null),
        this.initSlider();
    }
    initSlider() {
      const e = ".sf__slide-content";
      (this.slider = new MinimogLibs.Swiper(`#sf-slider-${this.id}`, {
        init: !1,
        autoplay: !!this.autoplay && {
          delay: 1e3 * this.autoplaySpeed,
          disableOnInteraction: !0,
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: !0,
        effect: "fade",
        fadeEffect: { crossFade: !0 },
        speed: 1e3,
        navigation: !!this.showArrows && {
          nextEl: this.querySelector(".sf-slider__controls-next"),
          prevEl: this.querySelector(".sf-slider__controls-prev"),
        },
        pagination: !!this.showDots && {
          el: this.querySelector(".swiper-pagination"),
          clickable: !0,
          bulletClass: "sf__dot",
          bulletActiveClass: "sf__dot-active",
          renderBullet: function (e, t) {
            return (
              '<span class="' +
              t +
              '"><svg width="65px" height="65px" viewBox="0 0 72 72" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle class="time" stroke-width="5" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg></span>'
            );
          },
        },
        breakpoints: { 992: { threshold: 2 } },
      })),
        (this.lastSlide = null),
        (this.currentSlide = null),
        this.slider &&
          this.slider.on("slideChangeTransitionStart", () => {
            this.lastSlide && this.lastSlide.classList.remove("slide-in"),
              this.lastSlide && this.lastSlide.classList.add("slide-out");
          }),
        this.slider &&
          this.slider.on(
            "slideChangeTransitionEnd",
            ({ activeIndex: t, slides: s }) => {
              const i = s[t];
              (this.currentSlide = i.querySelector(e)),
                this.currentSlide &&
                  this.currentSlide.classList.add("slide-in"),
                this.lastSlide &&
                  this.lastSlide.classList.remove("slide-out", "slide-in"),
                (this.lastSlide = this.currentSlide);
            }
          ),
        this.slider && this.slider.on("init", this.handleChange.bind(this)),
        this.slider &&
          this.slider.on("slideChange", this.handleChange.bind(this)),
        this.slider.init(),
        document.addEventListener("shopify:block:select", (e) =>
          this.onBlockSelect(e)
        );
    }
    handleChange(e) {
      const { activeIndex: t, slides: s } = e,
        i = s[t].dataset.slideType;
      if (
        (this.lastActive && this.slider.slideToLoop(this.lastActive),
        "video_slide" === i)
      ) {
        const e = s[t].querySelector("video");
        if (e) {
          let t = e.play();
          this.lastVideo && this.lastVideo.pause(),
            void 0 !== t &&
              t.then(() => {
                this.lastVideo = e;
              });
        }
      } else this.lastVideo && this.lastVideo.pause(), (this.lastVideo = null);
    }
    setSlideshowHeight() {
      const e = this.dataset.minAspectRatio;
      document.documentElement.offsetWidth;
    }
    onBlockSelect(e) {
      const t = e.target,
        s = Number(t.dataset.slide);
      (this.lastActive = s), this.slider && this.slider.slideToLoop(s);
    }
  }
  customElements.define("m-slideshow", e);
}
if (!customElements.get("m-testimonials")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      let e, t;
      if (
        (this.dataset.design && (this.design = this.dataset.design),
        this.dataset.container && (e = this.dataset.container),
        this.dataset.autoplay && (t = "true" === this.dataset.autoplay),
        (this.container = this.closest(".sf-testimonials")),
        !this.design)
      )
        return;
      if (
        ((this.sliderContainer = this.querySelector(".swiper-container")),
        !this.sliderContainer)
      )
        return void this.classList.add("opacity-100");
      (this.defaultSettings = {
        pagination: {
          el: this.container.querySelector(".swiper-pagination"),
          clickable: !0,
        },
        navigation: {
          nextEl: this.container.querySelector(".sf-slider__controls-next"),
          prevEl: this.container.querySelector(".sf-slider__controls-prev"),
        },
        autoHeight: !0,
        autoplay: !!t && { delay: 5e3, pauseOnMouseEnter: !1 },
        loop: !0,
        slidesPerView: 1,
      }),
        (this.settings = {});
      let s = 400;
      switch (this.design) {
        case "testimonials-1":
          this.settings = {
            centeredSlides: !0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
            speed: 300,
            slideToClickedSlide: !0,
            loop: !0,
            breakpoints: {
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
                speed: 1e3,
              },
              1280: { slidesPerView: 5, slidesPerGroup: 3, spaceBetween: 30 },
              2560: { slidesPerView: 7, slidesPerGroup: 3 },
            },
          };
          break;
        case "testimonials-2":
          this.settings = {
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: { 768: { slidesPerView: 3, slidesPerGroup: 3 } },
          };
          break;
        case "testimonials-3":
          this.settings = {
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: { 768: { slidesPerView: "w-full" === e ? 3 : 2 } },
          };
          break;
        case "testimonials-4":
          "container-fluid" === e && (s = 200),
            "container" === e && (s = 150),
            (this.settings = {
              slidesPerView: 1,
              centeredSlides: !0,
              slideToClickedSlide: !0,
              breakpoints: {
                768: { spaceBetween: parseInt(s / 4), slidesPerView: 3 },
                992: { spaceBetween: s / 2, slidesPerView: 3 },
                1920: { spaceBetween: s, slidesPerView: 3 },
              },
            });
          break;
        case "testimonials-6":
          this.settings = {
            slidesPerView: 1,
            loop: !0,
            pagination:
              "fraction" == this.dataset.paginationType
                ? {
                    el: this.container.querySelector(".swiper-pagination"),
                    clickable: !0,
                    type: "fraction",
                  }
                : {
                    el: this.container.querySelector(".swiper-pagination"),
                    clickable: !0,
                  },
            breakpoints: {
              768: { slidesPerView: 2 },
              1366: { slidesPerView: "container" === e ? 2 : 3 },
              1600: { slidesPerView: "container" === e ? 2 : 4 },
            },
          };
          break;
        case "testimonials-5":
          this.settings = { fade: { crossFade: !0 } };
      }
      const i = this.querySelector(".sf-tabs");
      if (i) {
        const e = setInterval(() => {
          MinimogTheme.Tabs &&
            (clearInterval(e), (this.imagesTab = new MinimogTheme.Tabs(i)));
        }, 50);
      }
      this.initSlider();
    }
    initSlider() {
      (this.slider = new MinimogLibs.Swiper(this.sliderContainer, {
        ...this.defaultSettings,
        ...this.settings,
      })),
        "testimonials-4" === this.design &&
          this.slider.on("activeIndexChange", (e) => {
            const { realIndex: t } = e;
            this.querySelector(".sf-slider-index").innerHTML = parseInt(t) + 1;
          }),
        "testimonials-5" === this.design &&
          this.slider.on("slideChange", (e) => {
            const { realIndex: t } = e;
            this.imagesTab.setActiveTab(t);
          }),
        document.addEventListener("shopify:block:select", (e) =>
          this.onBlockSelect(e)
        );
    }
    onBlockSelect(e) {
      const t = e.target,
        s = Number(t.dataset.index);
      this.slider && this.slider.slideToLoop(s);
    }
  }
  customElements.define("m-testimonials", e);
}
if (!customElements.get("m-collection-list")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      (this.selectors = {
        slideControls: ".sf-slider__controls",
        collectionListWrapper: ".m-collection-list__wrapper",
      }),
        (this.domNodes = queryDomNodes(this.selectors, this)),
        (this.enableSlider = "true" === this.dataset.enableSlider),
        (this.items = this.dataset.items),
        (this.autoplay = "true" === this.dataset.autoplay),
        (this.autoplaySpeed = this.dataset.autoplaySpeed),
        (this.paginationType = this.dataset.paginationType),
        (this.expanded = "true" === this.dataset.expanded),
        (this.mobileDisableSlider =
          "true" === this.dataset.mobileDisableSlider),
        this.initByScreenSize(),
        document.addEventListener("matchMobile", () => {
          this.initByScreenSize();
        }),
        document.addEventListener("unmatchMobile", () => {
          this.initByScreenSize();
        });
    }
    initByScreenSize() {
      if (!this.enableSlider) return;
      const { collectionListWrapper: e, slideControls: t } = queryDomNodes(
        this.selectors,
        this
      );
      MinimogTheme.config.mqlMobile && this.mobileDisableSlider
        ? (t?.classList.add("hidden"),
          e.classList.remove("swiper-container"),
          this.swiper && this.swiper.destroy(!1, !0))
        : (t?.classList.remove("hidden"), this.initSlider());
    }
    initSlider() {
      const { collectionListWrapper: e } = queryDomNodes(this.selectors, this);
      e?.classList.add("swiper-container");
      this.slider = new MinimogLibs.Swiper(e, {
        slidesPerView: 2,
        loop: !0,
        slidesPerGroup: 1,
        showNavigation: !0,
        showPagination: !0,
        parallax: !0,
        autoplay: !!this.autoplay && {
          delay: 1e3 * parseInt(this.autoplaySpeed),
        },
        pagination:
          "fraction" == this.paginationType
            ? {
                el: this.querySelector(".swiper-pagination"),
                clickable: !0,
                type: "fraction",
              }
            : {
                el: this.querySelector(".swiper-pagination"),
                clickable: !0,
                bulletClass: "sf__dot",
                bulletActiveClass: "sf__dot-active",
                renderBullet: function (e, t) {
                  return (
                    '<span class="' +
                    t +
                    '"><svg width="65px" height="65px" viewBox="0 0 72 72" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle class="time" stroke-width="5" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg></span>'
                  );
                },
              },
        autoHeight: !0,
        breakpoints: {
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1280: {
            slidesPerView: this.expanded
              ? parseInt(this.items) + 1
              : parseInt(this.items),
          },
        },
      });
      const t = this.querySelector(".sf-slider__controls"),
        s = t && t.querySelector(".sf-slider__controls-prev"),
        i = t && t.querySelector(".sf-slider__controls-next");
      this.slider &&
        s &&
        i &&
        (s && s.addEventListener("click", () => this.slider.slidePrev()),
        i && i.addEventListener("click", () => this.slider.slideNext())),
        (this.swiper = e?.swiper);
    }
  }
  customElements.define("m-collection-list", e);
}
if (
  (customElements.get("product-form") ||
    customElements.define(
      "product-form",
      class extends HTMLElement {
        constructor() {
          super(),
            (this.selectors = {
              form: "form",
              inputId: "[name=id]",
              submitButton: '[name="add"]',
              errorWrapper: ".prod__form-error",
              customFields: ["[data-product-custom-field]"],
              dynamicCheckout: ".prod__dynamic_checkout",
            });
        }
        connectedCallback() {
          (this.domNodes = queryDomNodes(this.selectors, this)),
            (this.form = this.domNodes.form),
            (this.submitButton = this.domNodes.submitButton),
            (this.domNodes.inputId.disabled = !1),
            (this.cart = document.querySelector("m-cart-drawer")),
            (this.customFields = document.querySelectorAll(
              this.selectors.customFields
            )),
            this.domNodes.dynamicCheckout &&
              (this.enable_dynamic_checkout = !0),
            this.form.addEventListener(
              "submit",
              this.onSubmitHandler.bind(this)
            ),
            this.domNodes.dynamicCheckout &&
              this.customFields &&
              this.domNodes.dynamicCheckout.addEventListener(
                "click",
                (e) => {
                  const t = validateForm(
                    this.form.closest(".main-product__blocks")
                  );
                  t &&
                    t.length > 0 &&
                    (e.stopPropagation(),
                    window.MinimogTheme.Notification.show({
                      target: this.domNodes.errorWrapper,
                      method: "appendChild",
                      type: "warning",
                      message: window.MinimogStrings.requiredField,
                      delay: 100,
                    }));
                },
                !0
              );
        }
        toggleSpinner(e) {
          const t = e ? "add" : "remove";
          this.form.closest(".product-form").classList[t]("adding");
        }
        onSubmitHandler(e) {
          e.preventDefault(), this.toggleSpinner(!0);
          const t = validateForm(this.form.closest(".main-product__blocks"));
          if (t && t.length > 0)
            return (
              this.toggleSpinner(!1),
              window.MinimogTheme.Notification.show({
                target: this.domNodes.errorWrapper,
                method: "appendChild",
                type: "warning",
                message: window.MinimogStrings.requiredField,
              })
            );
          const s = fetchConfig("javascript");
          (s.headers["X-Requested-With"] = "XMLHttpRequest"),
            delete s.headers["Content-Type"];
          const i = new FormData(this.form);
          this.cart &&
            (i.append(
              "sections",
              this.cart.getSectionsToRender().map((e) => e.id)
            ),
            i.append("sections_url", window.location.pathname)),
            (s.body = i);
          const { MinimogSettings: o, MinimogStrings: n } = window;
          o.use_ajax_atc
            ? fetch(`${o.routes.cart_add_url}`, s)
                .then((e) => e.json())
                .then((e) => {
                  if (e.status)
                    return (
                      window.MinimogEvents.emit(
                        MinimogTheme.pubSubEvents.cartError,
                        {
                          source: "product-form",
                          productVariantId: i.get("id"),
                          errors: e.description,
                          message: e.message,
                        }
                      ),
                      (this.error = !0),
                      window.MinimogTheme.Notification.show({
                        target: this.domNodes.errorWrapper
                          ? this.domNodes.errorWrapper
                          : document.body,
                        method: "appendChild",
                        type: "warning",
                        message: e.description,
                        last: 3e3,
                        sticky: !this.domNodes.errorWrapper,
                      })
                    );
                  o.enable_cart_drawer ||
                    window.MinimogTheme.Notification.show({
                      target: this.domNodes.errorWrapper
                        ? this.domNodes.errorWrapper
                        : document.body,
                      method: "appendChild",
                      type: "success",
                      message: n.itemAdded,
                      last: 3e3,
                      sticky: !this.domNodes.errorWrapper,
                    }),
                    (this.error = !1),
                    this.cart &&
                      o.enable_cart_drawer &&
                      (this.cart.renderContents(e),
                      MinimogTheme.Notification.show({
                        target: this.cart.querySelector("m-cart-drawer-items"),
                        method: "prepend",
                        type: "success",
                        message: n.itemAdded,
                        delay: 400,
                      })),
                    window.MinimogEvents.emit(
                      MinimogTheme.pubSubEvents.cartUpdate,
                      e
                    );
                })
                .catch((e) => {})
                .finally(() => {
                  this.toggleSpinner(!1);
                  const e = this.cart.querySelector("m-cart-drawer-items");
                  this.cart &&
                    this.cart.classList.contains("m-cart--empty") &&
                    this.cart.classList.remove("m-cart--empty"),
                    this.cart &&
                      e &&
                      e.classList.contains("m-cart--empty") &&
                      e.classList.remove("m-cart--empty");
                })
            : fetch(`${o.routes.cart_add_url}`, s)
                .then((e) => e.json())
                .then((e) => {
                  if (e.status)
                    return window.MinimogTheme.Notification.show({
                      target: this.domNodes.errorWrapper,
                      method: "appendChild",
                      type: "warning",
                      message: e.description,
                      last: 3e3,
                    });
                  (window.location = o.routes.cart),
                    window.MinimogEvents.emit(
                      MinimogTheme.pubSubEvents.cartUpdate,
                      e
                    );
                })
                .catch((e) => {})
                .finally(() => {
                  this.toggleSpinner(!1);
                });
        }
      }
    ),
  !customElements.get("m-press"))
) {
  class e extends HTMLElement {
    constructor() {
      super(), (this.prevSlideIndex = 0);
    }
    connectedCallback() {
      this.initSlider();
    }
    initSlider() {
      const e = this.querySelector(".press-content"),
        t = this.querySelector(".press-list .swiper-container"),
        s = "true" === this.dataset.autoplay;
      (this.items = parseInt(this.dataset.items)),
        (this.canLoop =
          window.innerWidth < 1300 ? this.items > 3 : this.items > 5),
        (this.contentSlider = new MinimogLibs.Swiper(e, {
          slidesPerView: 1,
          allowTouchMove: !1,
          fadeEffect: { crossFade: !0 },
        })),
        (this.navSlider = new MinimogLibs.Swiper(t, {
          autoplay: !!s && { delay: 5e3 },
          items: 1,
          loop: this.canLoop,
          centeredSlides: this.canLoop,
          threshold: 2,
          pagination: {
            el: this.querySelector(".swiper-pagination"),
            clickable: !0,
          },
          slideToClickedSlide: !0,
          breakpoints: {
            768: { slidesPerView: 3, navigation: !1 },
            1280: { slidesPerView: 5, navigation: !1 },
          },
          on: {
            init: function (e) {
              const t = e.slides[e.activeIndex];
              t && t.classList.add("press-logo--active");
            },
          },
        })),
        !this.canLoop &&
          this.navSlider.on("click", this._handleClick.bind(this)),
        this.navSlider.on("slideChange", this._handleChange.bind(this)),
        document.addEventListener("shopify:block:select", (e) =>
          this.onBlockSelect(e)
        );
    }
    _handleChange(e) {
      const { realIndex: t, activeIndex: s, slides: i } = e || {},
        o = this.querySelector(
          '.press-logo--active[data-index="' + this.prevSlideIndex + '"]'
        ),
        n = i[s];
      n && n.classList.add("press-logo--active"),
        o && o.classList.remove("press-logo--active"),
        this.contentSlider.slideTo(t),
        (this.prevSlideIndex = t);
    }
    _handleClick(e) {
      const { clickedIndex: t, clickedSlide: s } = e || {},
        i = this.querySelector(
          '.press-logo--active[data-index="' + this.prevSlideIndex + '"]'
        );
      s && s.classList.add("press-logo--active"),
        i && i.classList.remove("press-logo--active"),
        this.contentSlider.slideTo(t),
        (this.prevSlideIndex = t);
    }
    onBlockSelect(e) {
      const t = e.target,
        s = Number(t.dataset.index);
      this.contentSlider && this.contentSlider.slideTo(s),
        this.navSlider && this.navSlider.slideTo(s);
    }
  }
  customElements.define("m-press", e);
}
if (!customElements.get("m-featured-slider")) {
  class e extends HTMLElement {
    constructor() {
      super(),
        (this.selectors = {
          sliderContainer: ".featured-slider__products",
          slideImages: ["featured-slider__img"],
          slideImagesContainer: ".featured-slider__images",
          sliderControls: ".sf-slider__controls",
          prevBtn: ".sf-slider__controls-prev",
          nextBtn: ".sf-slider__controls-next",
        }),
        (this.domNodes = queryDomNodes(this.selectors, this));
    }
    connectedCallback() {
      this.initSlider();
    }
    initSlider() {
      const e = "true" === this.dataset.showNavigation,
        t = "true" === this.dataset.showPagination,
        s = "true" === this.dataset.autoplay,
        i = this.dataset.timeout;
      (this.slider = new MinimogLibs.Swiper(this.domNodes.sliderContainer, {
        speed: 400,
        loop: !0,
        autoplay: !!s && { delay: parseInt(i), disableOnInteraction: !1 },
        pagination: !!t && {
          el: this.querySelector(".swiper-pagination"),
          type: "bullets",
          clickable: !0,
        },
        on: {
          init: () => {
            if (
              (e &&
                (this.domNodes.prevBtn &&
                  this.domNodes.prevBtn.addEventListener("click", () =>
                    this.slider.slidePrev()
                  ),
                this.domNodes.nextBtn &&
                  this.domNodes.nextBtn.addEventListener("click", () =>
                    this.slider.slideNext()
                  )),
              "w-full" === this.dataset.container)
            ) {
              const e =
                this.domNodes.sliderContainer.querySelector(".sf-image");
              if (e && this.domNodes.sliderControls) {
                let t;
                const s = e.clientHeight;
                this.domNodes.sliderContainer.querySelector(
                  ".featured-slider__product-content"
                ) &&
                  (t = this.domNodes.sliderContainer.querySelector(
                    ".featured-slider__product-content"
                  ).clientHeight),
                  this.domNodes.sliderControls.style.setProperty(
                    "--offset-top",
                    parseInt(s) / 2 + parseInt(t) + 24 + "px"
                  );
              }
            }
          },
        },
      })),
        (this.imageSlider = new MinimogLibs.Swiper(
          this.domNodes.slideImagesContainer,
          {
            speed: 500,
            loop: !0,
            effect: "fade",
            fadeEffect: { crossFade: !0 },
          }
        )),
        this.slider.on("activeIndexChange", (e) => {
          const { realIndex: t } = e;
          this.imageSlider.slideToLoop(t);
        }),
        this.imageSlider.on("activeIndexChange", (e) => {
          const { realIndex: t } = e;
          this.slider.slideToLoop(t);
        }),
        document.addEventListener("shopify:block:select", (e) =>
          this.onBlockSelect(e)
        );
    }
    onBlockSelect(e) {
      const t = e.target,
        s = Number(t.dataset.index);
      this.slider && this.slider.slideToLoop(s),
        this.imageSlider && this.imageSlider.slideToLoop(s);
    }
  }
  customElements.define("m-featured-slider", e);
}
if (!customElements.get("m-scrolling-promotion")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      (this.promotion = this.querySelector(".m-promotion")), this.init();
    }
    init() {
      if (1 === this.childElementCount) {
        this.promotion.classList.add("m-promotion--animated");
        for (let e = 0; e < 10; e++)
          (this.clone = this.promotion.cloneNode(!0)),
            this.clone.setAttribute("aria-hidden", !0),
            this.appendChild(this.clone);
        new IntersectionObserver(
          (e, t) => {
            e.forEach((e) => {
              e.isIntersecting ? this.scrollingPlay() : this.scrollingPause();
            });
          },
          { rootMargin: "0px 0px 50px 0px" }
        ).observe(this);
      }
    }
    scrollingPlay() {
      this.classList.remove("m-scrolling-promotion--paused");
    }
    scrollingPause() {
      this.classList.add("m-scrolling-promotion--paused");
    }
  }
  customElements.define("m-scrolling-promotion", e);
}
if (!customElements.get("m-featured-collection")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      (this.selectors = {
        loadMoreBtn: "[data-load-more]",
        productsContainer: "[data-products-container]",
        products: [".sf__pcard"],
        soldNumber: ["[data-sold-number]"],
        availableNumber: ["[data-available-number]"],
        countDown: "[data-flashsale-countdown]",
        slideControls: ".sf-slider__controls",
        productListWrapper: ".m-product-list__wrapper",
      }),
        (this.domNodes = queryDomNodes(this.selectors, this)),
        (this.buttonType = this.dataset.buttonType),
        (this.infiniteLoad = this.dataset.infiniteLoad),
        (this.enableSlider = "true" === this.dataset.enableSlider),
        (this.showPagination = "true" === this.dataset.showPagination),
        (this.showNavigation = "true" === this.dataset.showNavigation),
        (this.enableFlashsale = "true" === this.dataset.enableFlashsale),
        (this.enableCountdown = "true" === this.dataset.enableCountdown),
        (this.id = this.dataset.id),
        (this.items = this.dataset.items),
        (this.mobileDisableSlider =
          "true" === this.dataset.mobileDisableSlider),
        this.initByScreenSize(),
        document.addEventListener("matchMobile", () => {
          this.initByScreenSize();
        }),
        document.addEventListener("unmatchMobile", () => {
          this.initByScreenSize();
        }),
        this.enableFlashsale && this.initFlashSale(),
        (this.canLoad = !0),
        (this.currentPage = 1),
        (this.spinner = spinner()),
        "true" === this.infiniteLoad && this.initInfiniteLoad(),
        "load" === this.buttonType &&
          this.domNodes.loadMoreBtn &&
          this.initLoadMore();
    }
    initByScreenSize() {
      if (!this.enableSlider) return;
      const { productListWrapper: e, slideControls: t } = queryDomNodes(
        this.selectors,
        this
      );
      MinimogTheme.config.mqlMobile && this.mobileDisableSlider
        ? (t?.classList.add("hidden"),
          e.classList.remove("swiper-container"),
          this.swiper && this.swiper.destroy(!1, !0))
        : (this.initSlider(), t?.classList.remove("hidden"));
    }
    initSlider() {
      const { productListWrapper: e } = queryDomNodes(this.selectors, this),
        t = this.querySelector(".sf-slider__controls"),
        s = t && t.querySelector(".sf-slider__controls-prev"),
        i = t && t.querySelector(".sf-slider__controls-next"),
        o = e.querySelector(".swiper-wrapper").childElementCount,
        n = this;
      e?.classList.add("swiper-container"),
        (this.slider = new MinimogLibs.Swiper(e, {
          slidesPerView: 2,
          showPagination: this.showPagination,
          showNavigation: this.showNavigation,
          loop: !this.enableFlashsale,
          pagination: !!this.showPagination && {
            el: this.querySelector(".swiper-pagination"),
            clickable: !0,
          },
          breakpoints: {
            768: {
              slidesPerView:
                parseInt(this.items) >= 3 ? 3 : parseInt(this.items),
            },
            1024: {
              slidesPerView:
                parseInt(this.items) >= 4 ? 4 : parseInt(this.items),
            },
            1280: { slidesPerView: parseInt(this.items) },
          },
          threshold: 2,
          on: {
            init: function () {
              setTimeout(() => {
                const e = n.querySelector(".sf-image");
                if (e && t) {
                  const s = e.clientHeight;
                  t.style.setProperty("--offset-top", parseInt(s) / 2 + "px");
                }
              }, 200);
            },
            breakpoint: (e, s) => {
              if (t) {
                const { slidesPerView: i } = s;
                o > i
                  ? (t.classList.remove("hidden"), (e.allowTouchMove = !0))
                  : (t.classList.add("hidden"), (e.allowTouchMove = !1));
              }
            },
          },
        })),
        this.slider &&
          this.showNavigation &&
          (s && s.addEventListener("click", () => this.slider.slidePrev()),
          i && i.addEventListener("click", () => this.slider.slideNext())),
        (this.swiper = e?.swiper);
    }
    initLoadMore() {
      (this.triggerLoad = !1),
        (this.totalPages = parseInt(this.dataset.totalPages)),
        addEventDelegate({
          context: this.container,
          selector: this.selectors.loadMoreBtn,
          handler: (e) => {
            e.preventDefault(), this.handleLoadMore();
          },
        });
    }
    initInfiniteLoad() {
      const e = this.dataset.maxPages;
      window.addEventListener("scroll", (t) => {
        (this.canLoad = this.currentPage < parseInt(e)),
          this.canLoad &&
            this.offsetTop + this.clientHeight - window.innerHeight <
              window.scrollY &&
            !this.triggerLoad &&
            ((this.triggerLoad = !0), this.handleLoadMore());
      });
    }
    async handleLoadMore() {
      this.currentPage++,
        (this.canLoad = this.currentPage < this.totalPages),
        this.toggleLoading(!0);
      const e = this.dataset.collectionId,
        t = await fetchCountDown(e);
      fetchCache(
        `${this.dataset.url}?page=${this.currentPage}&section_id=${this.id}`
      ).then((e) => {
        this.toggleLoading(!1);
        const s = generateDomFromString(e).querySelector(
            this.selectors.productsContainer
          ),
          i = this.domNodes.productsContainer.childElementCount;
        let o = !1;
        if (
          (s &&
            Array.from(s.childNodes).forEach((e) => {
              this.domNodes.productsContainer.appendChild(e);
              const t = setInterval(() => {
                this.domNodes.productsContainer.childElementCount > i &&
                  (clearInterval(t), (o = !0));
              }, 50);
            }),
          this.enableFlashsale && t.ok && t.payload && t.payload.length)
        ) {
          const { expires_date: e } = t.payload[0];
          this.expires_date = e;
          const s = setInterval(() => {
            if (o) {
              clearInterval(s);
              this.domNodes.productsContainer
                .querySelectorAll(".sf__pcard")
                .forEach((e) => {
                  const s = e.querySelector(".sf__pcard-content");
                  if (!e.querySelector(".pcard-sale")) {
                    let i;
                    e.dataset.soldNumber && (i = e.dataset.soldNumber);
                    const o = generateDomFromString(
                      saleProgress(t.payload[0], e.dataset.productId, i)
                    );
                    s.appendChild(o);
                  }
                });
            }
          }, 50);
        }
        (this.triggerLoad = !1),
          this.canLoad ||
            (this.domNodes.loadMoreBtn &&
              this.domNodes.loadMoreBtn.classList.add("hidden"));
      });
    }
    toggleLoading(e) {
      this.domNodes.loadMoreBtn &&
        (e
          ? ((this.newSpinner = generateDomeFromStringNew(this.spinner, "svg")),
            this.domNodes.loadMoreBtn.appendChild(this.newSpinner),
            this.domNodes.loadMoreBtn.classList.add("sf-spinner-loading"))
          : (this.domNodes.loadMoreBtn.removeChild(this.newSpinner),
            this.domNodes.loadMoreBtn.classList.remove("sf-spinner-loading")));
    }
    async initFlashSale() {
      const e = this.dataset.collectionId,
        t = await fetchCountDown(e);
      if (t.ok && t.payload && t.payload.length) {
        const { expires_date: e } = t.payload[0];
        (this.expires_date = e),
          this.domNodes.products.forEach((e) => {
            const s = e.querySelector(".sf__pcard-content"),
              i = e.querySelector(".pcard-sale");
            let o;
            e.dataset.soldNumber && (o = e.dataset.soldNumber);
            const n = generateDomFromString(
              saleProgress(t.payload[0], e.dataset.productId, o)
            );
            i || s.appendChild(n);
          }),
          this.initCountDown();
      }
    }
    initCountDown() {
      const e = new Date(this.expires_date).getTime();
      this.countDownTimer = new CountdownTimer(
        this.domNodes.countDown,
        Date.now(),
        e,
        { loop: !0 }
      );
    }
  }
  customElements.define("m-featured-collection", e);
}
if (!customElements.get("m-banner-with-slide")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      (this.lastActive = null), this.initSlider();
    }
    initSlider() {
      (this.slider = new MinimogLibs.Swiper(`.sf-slider-${this.dataset.id}`, {
        autoplay: "true" === this.dataset.autoplay && {
          delay: this.dataset.timeout,
          disableOnInteraction: !0,
        },
        slidesPerView: 1,
        loop: !0,
        fadeEffect: { crossFade: !0 },
        pagination: {
          el: this.querySelector(".swiper-pagination"),
          clickable: !0,
          bulletClass: "sf__dot",
          bulletActiveClass: "sf__dot-active",
          renderBullet: function (e, t) {
            return (
              '<span class="' +
              t +
              '"><svg width="65px" height="65px" viewBox="0 0 72 72" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle class="time" stroke-width="5" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg></span>'
            );
          },
        },
        on: {
          init: function () {
            this.slideToLoop(this.lastActive);
          },
        },
      })),
        document.addEventListener("shopify:block:select", (e) =>
          this.onBlockSelect(e)
        );
    }
    onBlockSelect(e) {
      const t = e.target,
        s = Number(t.dataset.slide);
      (this.lastActive = s), this.slider && this.slider.slideToLoop(s);
    }
  }
  customElements.define("m-banner-with-slide", e);
}
if (!customElements.get("m-brand-list")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      if (!("true" === this.dataset.enableSlider)) return;
      const e = this.querySelector("[data-wrapper]");
      MinimogTheme.config.mqlMobile
        ? (e.classList.add("swiper-wrapper"), this.initSlider())
        : (e.classList.remove("swiper-wrapper"),
          this.slider && this.slider.destroy(!0, !0)),
        document.addEventListener("matchMobile", () => {
          e.classList.add("swiper-wrapper"), this.initSlider();
        }),
        document.addEventListener("unmatchMobile", () => {
          e.classList.remove("swiper-wrapper"),
            this.slider && this.slider.destroy(!0, !0);
        });
    }
    initSlider() {
      const e = "true" === this.dataset.enableAutoplay,
        t = this.dataset.autoplaySpeed,
        s = parseInt(this.dataset.items),
        i = this.querySelector(".swiper-container");
      i &&
        (this.slider = new MinimogLibs.Swiper(i, {
          slidesPerView: s,
          slidesPerGroup: s,
          autoplay: !!e && { delay: 1e3 * parseInt(t) },
          loop: !0,
          navigation: {
            nextEl: this.querySelector(".swiper-button-next"),
            prevEl: this.querySelector(".swiper-button-prev"),
          },
          pagination: {
            el: this.querySelector(".swiper-pagination"),
            clickable: !0,
          },
        }));
    }
  }
  customElements.define("m-brand-list", e);
}
if (!customElements.get("m-custom-content")) {
  class e extends HTMLElement {
    constructor() {
      super(),
        (this.selectors = {
          cdtContainer: [".countdown-timer-container"],
          bundleError: ".product-bundles__error",
          productBundles: [".product-bundles"],
          productVariantSelects: ".sf-product-variant-option-dropdown",
          totalPrice: "[data-total-price]",
          submitBundle: "[data-add-bundle]",
          errorWrapper: ".product-bundles__error",
        }),
        (this.domNodes = queryDomNodes(this.selectors, this)),
        (this.spinner =
          '<svg class=\'animate-spin hidden w-[20px] h-[20px] m-0.5\' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">\n\t\t\t<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n\t\t\t<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n\t\t  </svg>');
    }
    connectedCallback() {
      this.initCountDown(),
        this.domNodes.productBundles && this.initProductBundles();
    }
    initCountDown() {
      const e = this.domNodes.cdtContainer;
      if (e.length)
        for (let t of e) {
          const e = t.dataset.time,
            s = Date.parse(e.split(" ").join("T"));
          s && new CountdownTimer(t, Date.now(), s);
        }
    }
    initProductBundles() {
      this.domNodes.productBundles.length &&
        this.domNodes.productBundles.map((e) => {
          let t = [],
            s = [];
          const i = e.querySelectorAll(".product-bundles__item");
          for (let e of i) {
            let i = e.nextElementSibling.innerHTML;
            (i = JSON.parse(i)),
              s.push(i),
              t.push(e),
              addEventDelegate({
                context: e,
                event: "change",
                selector: this.selectors.productVariantSelects,
                handler: (s) => this._handleChangePrice(s, e, i, t),
              });
          }
          addEventDelegate({
            context: e,
            selector: this.selectors.submitBundle,
            handler: (t) => this._handleAddItems(t, e),
          });
        });
    }
    _handleChangePrice(e, t, s, i) {
      const o = t.querySelector("[data-regular-price]");
      let n = t.querySelector("[data-compare-price]"),
        r = t.querySelector("[data-saved-price]");
      const a = e.target.value,
        l = s.find((e) => e.id === parseInt(a));
      (o.innerHTML = formatMoney(l.price, MinimogSettings.money_format)),
        (o.dataset.price = l.price),
        l.compare_at_price && l.compare_at_price > l.price
          ? (n &&
              (n.classList.remove("hidden"),
              (n.innerHTML = formatMoney(
                l.compare_at_price,
                MinimogSettings.money_format
              ))),
            r &&
              (r.classList.remove("hidden"),
              (r.innerHTML = formatMoney(
                l.compare_at_price - l.price,
                MinimogSettings.money_format
              ))))
          : (n && n.classList.add("hidden"), r && r.classList.add("hidden"));
      const d = i
          .map((e) => {
            let t = e.nextElementSibling.innerHTML;
            t = JSON.parse(t);
            let s = e.querySelector('[name="id"]');
            if (t && s) return t.find((e) => e.id === Number(s.value));
          })
          .filter(Boolean),
        c = d.reduce((e, t) => e + t.price, 0);
      t
        .closest(".product-bundles")
        .querySelector(this.selectors.totalPrice).innerHTML = formatMoney(
        c,
        MinimogSettings.money_format
      );
    }
    _handleAddItems(e, t) {
      e.preventDefault();
      const s = t.querySelectorAll('[name="id"]'),
        i = t.querySelector(this.selectors.errorWrapper),
        o = t.querySelector(this.selectors.submitBundle),
        n = {
          items: [...s]
            .map((e) => e.value)
            .map((e) => ({ id: e, quantity: 1 })),
        },
        r = getRequestDefaultConfigs();
      (r.method = "POST"),
        (r.body = JSON.stringify(n)),
        this._toggleLoading(!0, o),
        fetch("/cart/add.js", r)
          .then(async (e) => {
            if (e.ok) {
              const e = document.querySelector("m-cart-drawer"),
                { MinimogSettings: t, MinimogStrings: s } = window;
              t.use_ajax_atc
                ? e &&
                  (e.onCartDrawerUpdate(),
                  t.enable_cart_drawer
                    ? (e.open(),
                      MinimogTheme.Notification.show({
                        target: e.querySelector("m-cart-drawer-items"),
                        method: "prepend",
                        type: "success",
                        message: s.itemAdded,
                        delay: 400,
                      }))
                    : window.MinimogTheme.Notification.show({
                        target: i || document.body,
                        method: "appendChild",
                        type: "success",
                        message: s.itemAdded,
                        last: 3e3,
                        sticky: !this.domNodes.errorWrapper,
                      }))
                : (window.location = t.routes.cart);
            } else {
              const t = await e.json();
              t &&
                this._showError(
                  t.description || "Failed to add all items to cart!",
                  i
                );
            }
            setTimeout(() => {
              this._toggleLoading(!1, o);
            }, 300);
          })
          .catch((e) => {
            e && this._showError(e.toString(), i), this._toggleLoading(!1, o);
          });
    }
    _showError(e, t) {
      MinimogTheme.Notification.show({
        target: t,
        method: "appendChild",
        type: "warning",
        message: e,
      });
    }
    _toggleLoading(e, t) {
      if (e)
        t.insertAdjacentHTML("beforeend", this.spinner),
          t.classList.add("sf-spinner-loading");
      else {
        const e = t.querySelector("svg.animate-spin");
        e && e.remove(), t.classList.remove("sf-spinner-loading");
      }
    }
  }
  customElements.define("m-custom-content", e);
}
if (!customElements.get("m-hero")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const e = this.querySelector(".sf-hero__bg");
      e &&
        ("IntersectionObserver" in window
          ? this._initIntersectionObserver(e)
          : this._initBackground(e));
    }
    _initIntersectionObserver(e) {
      const t = this;
      new IntersectionObserver(
        (e, s) => {
          e[0].isIntersecting && t._initBackground(e[0].target);
        },
        { rootMargin: "10px" }
      ).observe(e);
    }
    _initBackground(e) {
      const t = e.dataset.src;
      t && (e.style.backgroundImage = "url(" + t + ")");
      "true" === this.dataset.parallax &&
        window.innerWidth > 767 &&
        this._initParallax(e);
    }
    _initParallax(e) {
      loadAssets("parallax.js")
        .then(() => {
          new MinimogLibs.simpleParallax(e, {
            scale: 1.3,
            delay: 0.6,
            transition: "cubic-bezier(0,0,0,1)",
          });
        })
        .catch(console.error);
    }
  }
  customElements.define("m-hero", e);
}
if (!customElements.get("m-gmaps")) {
  class e extends HTMLElement {
    constructor() {
      super(),
        (this.mapElm = this.querySelector("#sf__map")),
        (this.mapAddress = this.mapElm.dataset.mapTitle),
        (this.mapZoom = this.mapElm.dataset.mapZoom),
        (this.mapX = this.mapElm.dataset.mapX),
        (this.mapY = this.mapElm.dataset.mapY),
        (this.key = this.mapElm.dataset.key),
        this.mapElm.dataset.key;
    }
    connectedCallback() {
      this.prepMapApi();
    }
    prepMapApi() {
      this.loadScript().then(this.initMap.bind(this));
    }
    loadScript() {
      return new Promise((e, t) => {
        const s = document.createElement("script");
        document.body.appendChild(s),
          (s.onload = e),
          (s.onerror = t),
          (s.async = !0),
          (s.src =
            "https://maps.googleapis.com/maps/api/js?key=" +
            this.mapElm.dataset.key);
      });
    }
    initMap() {
      new google.maps.Geocoder().geocode(
        { address: this.mapAddress },
        (e, t) => {
          if (t !== google.maps.GeocoderStatus.OK) data.designMode;
          else {
            const e = {
                zoom: parseInt(this.mapZoom),
                center: new google.maps.LatLng(this.mapX, this.mapY),
                draggable: !0,
                clickableIcons: !1,
                scrollwheel: !1,
                disableDoubleClickZoom: !0,
                disableDefaultUI: !0,
                styles: [
                  {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
                  },
                  {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
                  },
                  {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ffffff" }, { lightness: 17 }],
                  },
                  {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [
                      { color: "#ffffff" },
                      { lightness: 29 },
                      { weight: 0.2 },
                    ],
                  },
                  {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{ color: "#ffffff" }, { lightness: 18 }],
                  },
                  {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{ color: "#ffffff" }, { lightness: 16 }],
                  },
                  {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
                  },
                  {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#dedede" }, { lightness: 21 }],
                  },
                  {
                    elementType: "labels.text.stroke",
                    stylers: [
                      { visibility: "on" },
                      { color: "#ffffff" },
                      { lightness: 16 },
                    ],
                  },
                  {
                    elementType: "labels.text.fill",
                    stylers: [
                      { saturation: 36 },
                      { color: "#333333" },
                      { lightness: 40 },
                    ],
                  },
                  {
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                  },
                  {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
                  },
                  {
                    featureType: "administrative",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#fefefe" }, { lightness: 20 }],
                  },
                  {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [
                      { color: "#fefefe" },
                      { lightness: 17 },
                      { weight: 1.2 },
                    ],
                  },
                ],
              },
              t = new google.maps.Map(this.mapElm, e);
            new google.maps.Marker({
              map: t,
              position: new google.maps.LatLng(this.mapX, this.mapY),
              title: this.mapAddress,
            }),
              google.maps.event.addDomListener(window, "resize", function () {
                google.maps.event.trigger(t, "resize");
              });
          }
        }
      );
    }
  }
  customElements.define("m-gmaps", e);
}
if (
  !customElements.get("m-countdown-timer") &&
  !customElements.get("m-countdown-timer")
) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const e = this.dataset.time,
        t = Date.parse(e.split(" ").join("T"));
      t &&
        (new CountdownTimer(this, Date.now(), t),
        t > Date.now() && this.classList.remove("hidden"));
    }
  }
  customElements.define("m-countdown-timer", e);
}
if (!customElements.get("m-image-comparison")) {
  class e extends HTMLElement {
    constructor() {
      super(),
        (this.active = !1),
        (this.button = this.querySelector("button")),
        (this.horizontal = "horizontal" === this.dataset.layout),
        this.init(),
        MinimogTheme.initWhenVisible({
          element: this.querySelector(".sf-image-comparison-slider__animation"),
          callback: this.animation.bind(this),
          threshold: 0,
        });
    }
    init() {
      this.button.addEventListener("touchstart", this.start.bind(this)),
        document.body.addEventListener("touchend", this.end.bind(this)),
        document.body.addEventListener("touchmove", this.onStart.bind(this)),
        this.button.addEventListener("mousedown", this.start.bind(this)),
        document.body.addEventListener("mouseup", this.end.bind(this)),
        document.body.addEventListener("mousemove", this.onStart.bind(this));
    }
    animation() {
      this.hasAttribute("data-animation") &&
        (this.setAttribute("is-visible", ""),
        this.classList.add("sf-animating"),
        setTimeout(() => {
          this.classList.remove("sf-animating");
        }, 1e3));
    }
    start() {
      document.documentElement.style.setProperty("overflow", "hidden"),
        (this.active = !0),
        this.classList.add("image-comparing");
    }
    end() {
      document.documentElement.style.removeProperty("overflow"),
        (this.active = !1),
        this.classList.remove("image-comparing");
    }
    onStart(e) {
      const t = document.querySelector(".sf-topbar"),
        s = document.querySelector(".announcement-bar");
      let i = 0,
        o = 0;
      if ((t && (i = t.offsetHeight), s && (o = s.offsetHeight), !this.active))
        return;
      const n = (e.touches && e.touches[0]) || e,
        r = this.horizontal
          ? n.pageX - this.offsetLeft
          : n.pageY - this.offsetTop - i - o;
      this.scroll(r);
    }
    scroll(e) {
      const t = this.horizontal ? this.clientWidth : this.clientHeight,
        s = t - 20,
        i = (100 * Math.max(20, Math.min(e, s))) / t;
      this.style.setProperty("--percent", i + "%");
    }
  }
  customElements.define("m-image-comparison", e);
}
if (!customElements.get("m-video-component")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.init();
    }
    init() {
      switch (
        ((this.parentSelector = this.dataset.parent || ".sf-hero__bg"),
        (this.parent = this.closest(this.parentSelector)),
        this.dataset.type)
      ) {
        case "youtube":
          this.initYoutubeVideo();
          break;
        case "vimeo":
          this.initVimeoVideo();
          break;
        case "mp4":
          this.initMp4Video();
      }
    }
    initYoutubeVideo() {
      this.setAsLoading(),
        this.loadScript("youtube").then(this.setupYoutubePlayer.bind(this));
    }
    initVimeoVideo() {
      this.setAsLoading(),
        this.loadScript("vimeo").then(this.setupVimeoPlayer.bind(this));
    }
    initMp4Video() {
      const e = this.querySelector("video");
      if (e) {
        const t = e.play();
        void 0 !== t &&
          t
            .then(function () {})
            .catch(function () {
              e.setAttribute("controls", "");
            });
      }
    }
    loadScript(e) {
      return new Promise((t, s) => {
        const i = document.createElement("script");
        document.body.appendChild(i),
          (i.onload = t),
          (i.onerror = s),
          (i.async = !0),
          (i.src =
            "youtube" === e
              ? "//www.youtube.com/iframe_api"
              : "//player.vimeo.com/api/player.js");
      });
    }
    setAsLoading() {
      this.parent.setAttribute("loading", !0);
    }
    setAsLoaded() {
      this.parent.removeAttribute("loading"),
        this.parent.setAttribute("loaded", !0);
    }
    setupYoutubePlayer() {
      const e = this.dataset.videoId,
        t = setInterval(() => {
          window.YT &&
            window.YT.ready(() => {
              const s = document.createElement("div");
              this.appendChild(s),
                (this.player = new YT.Player(s, {
                  videoId: e,
                  playerVars: {
                    showinfo: 0,
                    controls: !1,
                    fs: 0,
                    rel: 0,
                    height: "100%",
                    width: "100%",
                    iv_load_policy: 3,
                    html5: 1,
                    loop: 1,
                    playsinline: 1,
                    modestbranding: 1,
                    disablekb: 1,
                  },
                  events: {
                    onReady: this.onYoutubeReady.bind(this),
                    onStateChange: this.onYoutubeStateChange.bind(this),
                  },
                })),
                clearInterval(t);
            });
        }, 50);
    }
    onYoutubeReady() {
      if (
        ((this.iframe = this.querySelector("iframe")),
        this.iframe.setAttribute("tabindex", "-1"),
        this.player && this.player.mute(),
        "function" == typeof this.player.playVideo && this.player.playVideo(),
        this.setAsLoaded(),
        "IntersectionObserver" in window)
      ) {
        new IntersectionObserver(
          (e, t) => {
            e.forEach((e) => {
              e.isIntersecting ? this.youtubePlay() : this.youtubePause();
            });
          },
          { rootMargin: "0px 0px 50px 0px" }
        ).observe(this.iframe);
      }
    }
    onYoutubeStateChange(e) {
      switch (e.data) {
        case -1:
          this.attemptedToPlay && this.setAsLoaded();
          break;
        case 0:
          this.youtubePlay();
          break;
        case 1:
          this.setAsLoaded();
          break;
        case 3:
          this.attemptedToPlay = !0;
      }
    }
    youtubePlay() {
      this.player &&
        "function" == typeof this.player.playVideo &&
        this.player.playVideo();
    }
    youtubePause() {
      this.player &&
        "function" == typeof this.player.pauseVideo &&
        this.player.pauseVideo();
    }
    setupVimeoPlayer() {
      const e = this.dataset.videoId,
        t = setInterval(() => {
          window.Vimeo &&
            ((this.player = new Vimeo.Player(this, {
              id: e,
              autoplay: !0,
              autopause: !1,
              background: !1,
              controls: !1,
              loop: !0,
              height: "100%",
              width: "100%",
            })),
            this.player.ready().then(this.onVimeoReady.bind(this)),
            clearInterval(t));
        }, 50);
    }
    onVimeoReady() {
      (this.iframe = this.querySelector("iframe")),
        this.iframe.setAttribute("tabindex", "-1"),
        this.player.setMuted(!0),
        this.setAsLoaded();
      new IntersectionObserver(
        (e, t) => {
          e.forEach((e) => {
            e.isIntersecting ? this.vimeoPlay() : this.vimeoPause();
          });
        },
        { rootMargin: "0px 0px 50px 0px" }
      ).observe(this.iframe);
    }
    vimeoPlay() {
      this.player &&
        "function" == typeof this.player.play &&
        this.player.play();
    }
    vimeoPause() {
      this.player &&
        "function" == typeof this.player.pause &&
        this.player.pause();
    }
  }
  customElements.define("m-video-component", e);
}
if (!customElements.get("m-search-popup")) {
  class e extends HTMLElement {
    constructor() {
      super(),
        (this.selectors = {
          container: "[data-search-container]",
          form: "form",
          input: "[data-search-input]",
          submit: 'button[type="submit"]',
          loading: "[data-spinner]",
          close: "[data-close-search]",
        });
      const e = document.querySelector("[data-search-popup]");
      if (!e) return;
      (this.domNodes = queryDomNodes(this.selectors, e)),
        (this.domNodes.searchPopup = e),
        document.body.appendChild(e),
        addEventDelegate({
          selector: "[data-open-search-popup]",
          handler: () => this.openSearchPopup(),
        });
      const { input: t, submit: s, close: i, form: o } = this.domNodes;
      t &&
        t.addEventListener("keydown", (e) => {
          27 === e.keyCode && this.closeSearchPopup();
        }),
        s.addEventListener("click", (e) => {
          e.preventDefault(), t.value && o.submit();
        }),
        i.addEventListener("click", (e) => {
          this.closeSearchPopup();
        }),
        e.addEventListener("click", (t) => {
          t.target === e && this.closeSearchPopup();
        }),
        MinimogEvents.subscribe?.("ON_OPEN_DRAWER_CART", () => {
          this.closeSearchPopup();
        });
    }
    openSearchPopup() {
      const { searchPopup: e, input: t, container: s } = this.domNodes;
      e.classList.remove("invisible"),
        e.classList.add("opacity-100"),
        s.classList.add("md:translate-y-0"),
        setTimeout(() => {
          s.classList.remove("duration-300");
        }, 350),
        t.focus(),
        MinimogEvents.emit("ON_OPEN_SEARCH_POPUP", this);
    }
    closeSearchPopup() {
      const { searchPopup: e, container: t } = this.domNodes;
      t.classList.remove("md:translate-y-0"),
        e.classList.remove("opacity-100"),
        setTimeout(() => {
          e.classList.add("invisible"), t.classList.add("duration-300");
        }, 350);
    }
  }
  customElements.define("m-search-popup", e);
}
if (!customElements.get("m-icon-box")) {
  class e extends HTMLElement {
    constructor() {
      super(),
        (this.enableSlider = "true" === this.dataset.enableSlider),
        (this.items = this.dataset.items),
        (this.showPagination = "true" === this.dataset.showPagination),
        (this.showNavigation = "true" === this.dataset.showNavigation),
        (this.slideContainer = this.querySelector(".swiper-container"));
    }
    connectedCallback() {
      (this.lastActive = null), this.enableSlider && this.initSlider();
    }
    initSlider() {
      const e = this.querySelector(".sf-slider__controls"),
        t = e && e.querySelector(".sf-slider__controls-prev"),
        s = e && e.querySelector(".sf-slider__controls-next"),
        i = this.querySelector(".swiper-wrapper").childElementCount;
      let o = this;
      (this.slider = new MinimogLibs.Swiper(this.slideContainer, {
        slidesPerView: 1,
        navigation: this.showNavigation,
        loop: !0,
        autoHeight: !0,
        pagination: !!this.showPagination && {
          el: this.querySelector(".swiper-pagination"),
          clickable: !0,
        },
        breakpoints: {
          480: { slidesPerView: 2 },
          768: { slidesPerView: parseInt(this.items) - 1 },
          1280: { slidesPerView: parseInt(this.items) },
        },
        on: {
          init: function () {
            this.slideToLoop(this.lastActive),
              setTimeout(() => {
                const t = o.querySelector(".sf-image");
                if (t && e) {
                  const s = t.clientHeight;
                  e.style.setProperty("--offset-top", parseInt(s) / 2 + "px");
                }
              }, 200);
          },
          breakpoint: (t, s) => {
            if (e) {
              const { slidesPerView: o } = s;
              i > o
                ? (e.classList.remove("hidden"), (t.allowTouchMove = !0))
                : (e.classList.add("hidden"), (t.allowTouchMove = !1));
            }
          },
        },
      })),
        this.slider &&
          this.showNavigation &&
          (t && t.addEventListener("click", () => this.slider.slidePrev()),
          s && s.addEventListener("click", () => this.slider.slideNext())),
        document.addEventListener("shopify:block:select", (e) =>
          this.onBlockSelect(e)
        );
    }
    onBlockSelect(e) {
      const t = e.target,
        s = Number(t.dataset.slide);
      (this.lastActive = s), this.slider && this.slider.slideToLoop(s);
    }
  }
  customElements.define("m-icon-box", e);
}
if (!customElements.get("m-handpicked-products")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      (this.selectors = {
        products: [".sf__pcard"],
        slideContainer: ".swiper-container",
      }),
        (this.domNodes = queryDomNodes(this.selectors, this)),
        (this.enableSlider = "true" === this.dataset.enableSlider),
        (this.showPagination = "true" === this.dataset.showPagination),
        (this.showNavigation = "true" === this.dataset.showNavigation),
        (this.paginationType = this.dataset.paginationType || "bullets"),
        (this.items = this.dataset.items),
        this.enableSlider &&
          (MinimogTheme.config.mqlMobile
            ? this.slider && this.slider.destroy(!0, !0)
            : this.initSlider(),
          document.addEventListener("matchMobile", () => {
            this.slider && this.slider.destroy(!0, !0);
          }),
          document.addEventListener("unmatchMobile", () => {
            this.initSlider();
          }));
    }
    initSlider() {
      const e = this.querySelector(".sf-slider__controls"),
        t = e && e.querySelector(".sf-slider__controls-prev"),
        s = e && e.querySelector(".sf-slider__controls-next"),
        i =
          this.domNodes.slideContainer.querySelector(
            ".swiper-wrapper"
          ).childElementCount;
      this.slider = new MinimogLibs.Swiper(this.domNodes.slideContainer, {
        slidesPerView: 2,
        showPagination: this.showPagination,
        showNavigation: this.showNavigation,
        loop: !1,
        pagination: !!this.showPagination && {
          el: this.querySelector(".swiper-pagination"),
          clickable: !0,
          type: this.paginationType,
        },
        navigation: { nextEl: s && s, prevEl: t && t },
        breakpoints: {
          480: {
            slidesPerView: parseInt(this.items) >= 3 ? 3 : parseInt(this.items),
          },
          768: {
            slidesPerView: parseInt(this.items) >= 4 ? 4 : parseInt(this.items),
          },
          1280: { slidesPerView: parseInt(this.items) },
        },
        threshold: 2,
        on: {
          breakpoint: (t, s) => {
            if (e) {
              const { slidesPerView: o } = s;
              i > o
                ? (e.classList.remove("hidden"), (t.allowTouchMove = !0))
                : (e.classList.add("hidden"), (t.allowTouchMove = !1));
            }
          },
        },
      });
    }
  }
  customElements.define("m-handpicked-products", e);
}
if (!customElements.get("m-lookbook-slider")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      (this.selectors = {
        lookbookSlider: ".sf-lookbook-slider__products",
        lookbookIcons: [".sf__hover-lookbook-icon"],
      }),
        (this.domNodes = queryDomNodes(this.selectors, this)),
        (this.enableSlider =
          "true" === this.domNodes.lookbookSlider.dataset.enableSlider),
        (this.showPagination =
          "true" === this.domNodes.lookbookSlider.dataset.showPagination),
        (this.showNavigation =
          "true" === this.domNodes.lookbookSlider.dataset.showNavigation),
        (this.paginationType =
          this.domNodes.lookbookSlider.dataset.paginationType || "bullets"),
        (this.items = this.domNodes.lookbookSlider.dataset.items),
        (this.slideContainer =
          this.domNodes.lookbookSlider.querySelector(".swiper-container")),
        this.enableSlider && this.initSlider(),
        Array.from(this.domNodes.lookbookIcons).forEach((e) => {
          e.addEventListener("mouseover", this.onMouseOver.bind(this)),
            e.addEventListener("mouseleave", this.onMouseLeave.bind(this));
        });
    }
    disconnectedCallback() {
      Array.from(this.domNodes.lookbookIcons).forEach((e) => {
        e.removeEventListener("mouseover", this.onMouseOver.bind(this)),
          e.removeEventListener("mouseleave", this.onMouseLeave.bind(this));
      });
    }
    initSlider() {
      const e = this.domNodes.lookbookSlider.querySelector(
          ".sf-slider__controls"
        ),
        t = e && e.querySelector(".sf-slider__controls-prev"),
        s = e && e.querySelector(".sf-slider__controls-next"),
        i =
          this.slideContainer.querySelector(
            ".swiper-wrapper"
          ).childElementCount;
      let o = {
        slidesPerView: 1,
        showPagination: this.showPagination,
        showNavigation: this.showNavigation,
        loop: !0,
        pagination: !!this.showPagination && {
          el: this.domNodes.lookbookSlider.querySelector(".swiper-pagination"),
          clickable: !0,
          type: this.paginationType,
        },
        breakpoints: {
          1280: { slidesPerView: i < this.items ? i : parseInt(this.items) },
        },
        threshold: 2,
        on: {
          slideChange: (e) => {
            const t = e.realIndex;
            Array.from(this.domNodes.lookbookIcons).forEach((e) =>
              e.classList.remove("is-active")
            ),
              this.domNodes.lookbookIcons[t] &&
                this.domNodes.lookbookIcons[t].classList.add("is-active");
          },
        },
      };
      i < this.items && ((o.simulateTouch = !1), (o.allowTouchMove = !1)),
        (this.slider = new MinimogLibs.Swiper(this.slideContainer, o)),
        this.slider &&
          this.showNavigation &&
          (t && t.addEventListener("click", () => this.slider.slidePrev()),
          s && s.addEventListener("click", () => this.slider.slideNext()));
    }
    onMouseOver(e) {
      const t = Number(
        e.target.closest(".sf__hover-lookbook-icon").dataset.index
      );
      e.target.dataset.index && this.slider && this.slider.slideToLoop(t);
      const s = this.domNodes.lookbookSlider.querySelectorAll(
        `[data-swiper-slide-index="${t}"]`
      );
      Array.from(s).forEach((e) =>
        e.querySelector(".sf__pcard").classList.add("is-active")
      ),
        this.domNodes.lookbookIcons[t].classList.add("is-active"),
        this.classList.add("is-hovering");
    }
    onMouseLeave(e) {
      Array.from(this.slider.slides).forEach((e) =>
        e.querySelector(".sf__pcard").classList.remove("is-active")
      ),
        Array.from(this.domNodes.lookbookIcons).forEach((e) =>
          e.classList.remove("is-active")
        ),
        this.classList.remove("is-hovering");
    }
  }
  customElements.define("m-lookbook-slider", e);
}
if (!customElements.get("favorite-product-slider")) {
  class e extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      (this.selectors = {
        mainImages: ".sf-favorite-product-slider__images",
        thumbs: ".sf-favorite-product-slider__thumbs",
      }),
        (this.domNodes = queryDomNodes(this.selectors, this)),
        (this.mediaSize = parseInt(this.dataset.mediaSize)),
        (this.mainImagesContainer =
          this.domNodes.mainImages.querySelector(".swiper-container")),
        (this.thumbsContainer =
          this.domNodes.thumbs.querySelector(".swiper-container")),
        this.initSlider();
    }
    initSlider() {
      this.initMainImagesSlider(),
        this.initThumbsSlider(),
        this.thumbsSlider.on("slideChange", (e) => {
          const { realIndex: t } = e;
          let s = t - 1;
          s < 0 && (s = this.mediaSize - 1),
            this.mainImagesSlider.slideToLoop(s);
        }),
        this.mainImagesSlider.on("slideChange", (e) => {
          const { slides: t, realIndex: s } = e;
          let i = s + 1;
          i > this.mediaSize && (i = 0), this.playActiveMedia(t[i]);
        });
    }
    initMainImagesSlider() {
      const e = this.domNodes.mainImages.querySelector(
          ".sf-slider__controls-wrapper"
        ),
        t = e && e.querySelector(".sf-slider__controls-prev"),
        s = e && e.querySelector(".sf-slider__controls-next");
      (this.mainImagesSlider = new MinimogLibs.Swiper(
        this.mainImagesContainer,
        {
          slidesPerView: 1,
          showPagination: !0,
          showNavigation: !0,
          loop: !0,
          pagination: {
            el: this.domNodes.mainImages.querySelector(".swiper-pagination"),
            clickable: !0,
            type: "fraction",
          },
          autoplay: !1,
          threshold: 2,
          effect: "fade",
          fadeEffect: { crossFade: !0 },
          breakpoints: {
            768: {
              simulateTouch: !1,
              allowTouchMove: !1,
              showPagination: !1,
              showNavigation: !1,
            },
          },
          simulateTouch: !0,
          allowTouchMove: !0,
        }
      )),
        this.mainImagesSlider &&
          (t &&
            t.addEventListener("click", () =>
              this.mainImagesSlider.slidePrev()
            ),
          s &&
            s.addEventListener("click", () =>
              this.mainImagesSlider.slideNext()
            ));
    }
    initThumbsSlider() {
      const e = this.domNodes.thumbs.querySelector(".sf-slider__controls"),
        t = e && e.querySelector(".sf-slider__controls-prev"),
        s = e && e.querySelector(".sf-slider__controls-next"),
        i =
          this.domNodes.thumbs.querySelector(
            ".swiper-wrapper"
          ).childElementCount;
      (this.thumbsSlider = new MinimogLibs.Swiper(this.thumbsContainer, {
        initialSlide: i > 1 ? 1 : 0,
        slidesPerView: 2 == i ? 1 : 2,
        showPagination: !0,
        showNavigation: !0,
        loop: !0,
        autoplay: !1,
        pagination: {
          el: this.domNodes.thumbs.querySelector(".swiper-pagination"),
          clickable: !0,
          type: "fraction",
        },
        spaceBetween: 15,
        breakpoints: { 1024: { spaceBetween: 30 } },
        threshold: 2,
      })),
        this.thumbsSlider &&
          (t &&
            t.addEventListener("click", () => this.thumbsSlider.slidePrev()),
          s &&
            s.addEventListener("click", () => this.thumbsSlider.slideNext()));
    }
    playActiveMedia(e) {
      const t = e.querySelector(".deferred-media");
      if (t) {
        "true" === t.dataset.autoPlay && t.loadContent(!1);
      }
    }
  }
  customElements.define("favorite-product-slider", e);
}
if (!customElements.get("m-select-component")) {
  class e extends HTMLElement {
    constructor() {
      super(),
        (this.selectors = {
          elSelectNative: ".js-selectNative",
          elSelectCustom: ".js-selectCustom",
          elSelectCustomBox: ".sf-select-custom--trigger",
          elSelectCustomOpts: ".sf-select-custom--options",
          elSelectCustomTriggerText: ".sf-select-custom--trigger-text",
          customOptionList: [".sf-select-custom--option"],
        }),
        (this.domNodes = queryDomNodes(this.selectors, this)),
        (this.optionChecked = ""),
        window.addEventListener("DOMContentLoaded", () => {
          this.classList.remove("hidden");
        }),
        this.setDefaultValue(),
        this.initSelect();
    }
    setDefaultValue() {
      const { elSelectNative: e } = this.domNodes,
        t = e.options[e.selectedIndex].value,
        s = e.options[e.selectedIndex].text;
      this.updateCustomSelectChecked(t, s);
    }
    initSelect() {
      this.classList.remove("hidden");
      const {
        elSelectNative: e,
        elSelectCustom: t,
        elSelectCustomBox: s,
      } = this.domNodes;
      s.addEventListener("click", () => {
        !t.classList.contains("isActive")
          ? this.openSelect()
          : this.closeSelect();
      }),
        this.domNodes.customOptionList.forEach((t) => {
          t.addEventListener("click", (t) => {
            const s = t.target.getAttribute("data-value");
            (e.value = s),
              this.closeSelect(),
              this.updateCustomSelectChecked(s, t.target.textContent),
              e.dispatchEvent(new Event("change")),
              e.dispatchEvent(new Event("click"));
          });
        });
    }
    openSelect() {
      const e = document.querySelectorAll("m-select-component");
      document.addEventListener("click", (e) => this.handleClickOutside(e)),
        e.length > 0 &&
          e.forEach((e) => {
            e.closeSelect();
          }),
        this.domNodes.elSelectCustom.classList.add("isActive");
    }
    closeSelect() {
      this.domNodes.elSelectCustom.classList.remove("isActive");
    }
    updateCustomSelectChecked(e, t) {
      const { elSelectCustomOpts: s, elSelectCustomTriggerText: i } =
          this.domNodes,
        o = this.optionChecked,
        n = s.querySelector(`[data-value="${o}"`),
        r = s.querySelector(`[data-value="${e}"`);
      n && n.classList.remove("isActive"),
        r && r.classList.add("isActive"),
        (i.textContent = t),
        (this.optionChecked = e);
    }
    handleClickOutside(e) {
      const { elSelectCustom: t } = this.domNodes;
      !t.contains(e.target) && this.closeSelect();
    }
  }
  customElements.define("m-select-component", e);
}
class MQuantityInput extends HTMLElement {
  constructor() {
    super(), this.init();
  }
  init() {
    (this.input = this.querySelector("input")),
      (this.changeEvent = new Event("change", { bubbles: !0 })),
      this.input.addEventListener("change", this.onInputChange.bind(this)),
      this.querySelectorAll("button").forEach((e) =>
        e.addEventListener("click", this.onButtonClick.bind(this))
      ),
      (this.quantityUpdateUnsubscriber = void 0);
  }
  onInputChange(e) {
    this.validateQtyRules();
  }
  onButtonClick(e) {
    e.preventDefault();
    const t = this.input.value;
    "plus" === e.target.name ? this.input.stepUp() : this.input.stepDown(),
      t !== this.input.value && this.input.dispatchEvent(this.changeEvent);
  }
  validateQtyRules() {
    const e = parseInt(this.input.value);
    if (this.input.min) {
      const t = parseInt(this.input.min);
      this.querySelector(
        ".m-cart-quantity--button[name='minus']"
      ).classList.toggle("disabled", e <= t);
    }
    if (this.input.max) {
      const t = parseInt(this.input.max);
      this.querySelector(
        ".m-cart-quantity--button[name='plus']"
      ).classList.toggle("disabled", e >= t);
    }
  }
}
customElements.define("m-quantity-input", MQuantityInput);
