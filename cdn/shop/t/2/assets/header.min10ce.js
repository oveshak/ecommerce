(() => {
  var e = {
      4558: (e, t, s) => {
        "use strict";
        s.d(t, { LE: () => o, gM: () => r, s0: () => i });
        var n = s(8971);
        s(9280);
        (window.MinimogEvents = window.MinimogEvents || new n.Z()),
          (window._ThemeEvent = window.MinimogEvents),
          (window.MinimogLibs.loadjs = __loadjs);
        const i = window.MinimogEvents,
          o = window.MinimogTheme || {},
          r =
            (window.MinimogSettings,
            window.MinimogStrings,
            window.MinimogLibs || {});
      },
      9280: () => {
        __loadjs = (function () {
          var e = function () {},
            t = {},
            s = {},
            n = {};
          function i(e, t) {
            if (e) {
              var i = n[e];
              if (((s[e] = t), i))
                for (; i.length; ) i[0](e, t), i.splice(0, 1);
            }
          }
          function o(t, s) {
            t.call && (t = { success: t }),
              s.length ? (t.error || e)(s) : (t.success || e)(t);
          }
          function r(t, s, n, i) {
            var o,
              a,
              c = document,
              l = n.async,
              d = (n.numRetries || 0) + 1,
              u = n.before || e,
              h = t.replace(/[\?|#].*$/, ""),
              m = t.replace(/^(css|img)!/, "");
            (i = i || 0),
              /(^css!|\.css$)/.test(h)
                ? (((a = c.createElement("link")).rel = "stylesheet"),
                  (a.href = m),
                  (o = "hideFocus" in a) &&
                    a.relList &&
                    ((o = 0), (a.rel = "preload"), (a.as = "style")))
                : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)
                ? ((a = c.createElement("img")).src = m)
                : (((a = c.createElement("script")).src = t),
                  (a.async = void 0 === l || l)),
              !(a.onload =
                a.onerror =
                a.onbeforeload =
                  function (e) {
                    var c = e.type[0];
                    if (o)
                      try {
                        a.sheet.cssText.length || (c = "e");
                      } catch (e) {
                        18 != e.code && (c = "e");
                      }
                    if ("e" == c) {
                      if ((i += 1) < d) return r(t, s, n, i);
                    } else if ("preload" == a.rel && "style" == a.as)
                      return (a.rel = "stylesheet");
                    s(t, c, e.defaultPrevented);
                  }) !== u(t, a) && c.head.appendChild(a);
          }
          function a(e, s, n) {
            var a, c;
            if ((s && s.trim && (a = s), (c = (a ? n : s) || {}), a)) {
              if (a in t) throw "LoadJS";
              t[a] = !0;
            }
            function l(t, s) {
              !(function (e, t, s) {
                var n,
                  i,
                  o = (e = e.push ? e : [e]).length,
                  a = o,
                  c = [];
                for (
                  n = function (e, s, n) {
                    if (("e" == s && c.push(e), "b" == s)) {
                      if (!n) return;
                      c.push(e);
                    }
                    --o || t(c);
                  },
                    i = 0;
                  i < a;
                  i++
                )
                  r(e[i], n, s);
              })(
                e,
                function (e) {
                  o(c, e), t && o({ success: t, error: s }, e), i(a, e);
                },
                c
              );
            }
            if (c.returnPromise) return new Promise(l);
            l();
          }
          return (
            (a.ready = function (e, t) {
              return (
                (function (e, t) {
                  e = e.push ? e : [e];
                  var i,
                    o,
                    r,
                    a = [],
                    c = e.length,
                    l = c;
                  for (
                    i = function (e, s) {
                      s.length && a.push(e), --l || t(a);
                    };
                    c--;

                  )
                    (o = e[c]),
                      (r = s[o]) ? i(o, r) : (n[o] = n[o] || []).push(i);
                })(e, function (e) {
                  o(t, e);
                }),
                a
              );
            }),
            (a.done = function (e) {
              i(e, []);
            }),
            (a.reset = function () {
              (t = {}), (s = {}), (n = {});
            }),
            (a.isDefined = function (e) {
              return e in t;
            }),
            a
          );
        })();
      },
      8971: (e, t, s) => {
        "use strict";
        s.d(t, { Z: () => n });
        class n {
          constructor() {
            this.events = {};
          }
          get evts() {
            return Object.keys(this.events);
          }
          subscribe(e, t) {
            return (
              (this.events[e] = this.events[e] || []),
              this.events[e].push(t),
              () => this.unSubscribe(e, t)
            );
          }
          unSubscribe(e, t) {
            const s = this.events[e];
            if (s && Array.isArray(s))
              for (let e = 0; e < s.length; e++)
                if (s[e] === t) {
                  s.splice(e, 1);
                  break;
                }
          }
          emit(e) {
            for (
              var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              s[n - 1] = arguments[n];
            (this.events[e] || []).forEach((e) => {
              e(...s);
            });
          }
        }
      },
    },
    t = {};
  function s(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var o = (t[n] = { exports: {} });
    return e[n](o, o.exports, s), o.exports;
  }
 
    (s.d = (e, t) => {
      for (var n in t)
        s.o(t, n) &&
          !s.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      function e(t) {
        return (
          (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          e(t)
        );
      }
      function t(t) {
        var s = (function (t, s) {
          if ("object" !== e(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, s || "default");
            if ("object" !== e(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === s ? String : Number)(t);
        })(t, "string");
        return "symbol" === e(s) ? s : String(s);
      }
      function n(e, s, n) {
        return (
          (s = t(s)) in e
            ? Object.defineProperty(e, s, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = n),
          e
        );
      }
      var i = s(4558).LE,
        o = s(4558).s0,
        r = s(4558).gM;
      class a {
        constructor(e) {
          n(this, "selectors", {
            announcementBar: ".announcement-bar",
            hamburgerButtons: ".sf-menu-button",
            desktopMenuItems: [".sf-menu-item"],
            desktopSubMenus: ".sf-menu__desktop-sub-menu",
            headerMobile: ".sf-header__mobile",
            menuDrawer: "#m-menu-drawer",
            menuDrawerContent: ".m-menu-drawer__content",
            menu: ".m-menu-mobile",
            menuItems: [".m-menu-mobile__item"],
            megaMenuMobile: [".m-megamenu-mobile"],
          }),
            n(this, "menuSelectors", { subMenu: ".sf-menu__desktop-sub-menu" }),
            n(this, "activeDesktopMenuItem", null),
            n(this, "sliders", {}),
            n(this, "closeDesktopSubmenu", (e) => {
              var t;
              const s = this.menuData[e],
                { header: n } = s;
              null == n ||
                null === (t = n.classList) ||
                void 0 === t ||
                t.remove("show-menu");
            }),
            (this.container = e),
            (this.transitionDuration = 0),
            (this.domNodes = queryDomNodes(this.selectors)),
            (this.menuData = [...this.domNodes.desktopMenuItems].map((e) => ({
              header: e.closest("header"),
              item: e,
              ...queryDomNodes(this.menuSelectors, e),
              active: !1,
            }))),
            this.init(),
            ((i = i || {}).headerSliders = this.sliders);
        }
        init() {
          var e, t, s, n;
          this.domNodes.hamburgerButtons.addEventListener("click", (e) => {
            this.domNodes.hamburgerButtons.classList.contains("active")
              ? this.closeMenu()
              : this.openMenu(),
              this.domNodes.hamburgerButtons.classList.toggle("active");
          }),
            this.domNodes.menuDrawer.addEventListener("click", (e) => {
              e.target === this.domNodes.menuDrawer && this.closeMenu();
            }),
            this.initMobileMegaMenu(),
            this.initDesktopMegaMenu(),
            null === (e = (t = o).subscribe) ||
              void 0 === e ||
              e.call(t, "ON_OPEN_DRAWER_CART", () => {
                this.closeMenu();
              }),
            null === (s = (n = o).subscribe) ||
              void 0 === s ||
              s.call(n, "ON_OPEN_SEARCH_POPUP", () => {
                this.closeMenu();
              });
        }
        initDesktopMegaMenu() {
          [...this.menuData].forEach((e) => {
            const { item: t, subMenu: s } = e;
            if (s) {
              const t = s.querySelector(".sf-mega-menu-products");
              var n;
              if (t)
                null !== (n = window) && void 0 !== n && n.__sfWindowLoaded
                  ? (e.productsBannerSlider = this.initProductsBanner(t))
                  : window.addEventListener("load", () => {
                      e.productsBannerSlider = this.initProductsBanner(t);
                    });
            }
          });
        }
        initProductsBanner(e) {
          var t;
          const s = e.closest("header"),
            n = e.closest(".sf-menu-item"),
            i =
              `.${
                null == s || null === (t = s.dataset) || void 0 === t
                  ? void 0
                  : t.screen
              }` || "",
            o = e.dataset.id,
            a = document.querySelector(`.sf-slider-${o}`).dataset.column;
          let c;
          if (
            ((c = new r.Swiper(`${i} .sf-slider-${o}`, {
              slidesPerView: 1,
              loop: !1,
              autoplay: !1,
              breakpoints: {
                1200: { slidesPerView: a },
                992: { slidesPerView: a >= 2 ? 2 : a },
              },
            })),
            (this.sliders[n.dataset.index] = c),
            c)
          ) {
            const e = document.querySelector(
                `#sf-slider-controls-${o} .sf-slider__controls-prev`
              ),
              t = document.querySelector(
                `#sf-slider-controls-${o} .sf-slider__controls-next`
              );
            e && e.addEventListener("click", () => c.slidePrev()),
              t && t.addEventListener("click", () => c.slideNext());
          }
        }
        initMobileMegaMenu() {
          [...this.domNodes.menuItems].forEach((e) => {
            const t = e.querySelector(".m-megamenu-mobile"),
              s = e.querySelector(".m-menu-mobile__back-button");
            t &&
              addEventDelegate({
                context: e,
                selector: "[data-toggle-submenu]",
                handler: (e, s) => {
                  e.preventDefault();
                  const n = s.dataset.toggleSubmenu,
                    i = e.target.parentNode;
                  e.target.classList.contains("m-menu-mobile__back-button") ||
                    i.classList.contains("m-menu-mobile__back-button") ||
                    this.openSubMenu(t, n);
                },
              }),
              s &&
                (addEventDelegate({
                  context: e,
                  selector: "[data-toggle-submenu]",
                  handler: (e, s) => {
                    e.preventDefault();
                    const n = s.dataset.toggleSubmenu,
                      i = e.target.parentNode;
                    e.target.classList.contains("m-menu-mobile__back-button") ||
                      i.classList.contains("m-menu-mobile__back-button") ||
                      this.openSubMenu(t, n);
                  },
                }),
                s.addEventListener("click", (e) => {
                  const s = e.target.dataset.level;
                  this.closeSubMenu(t, s);
                }));
          }),
            this.setMenuHeight(),
            document.addEventListener("matchMobile", () =>
              this.setMenuHeight()
            ),
            document.addEventListener("unmatchMobile", () =>
              this.setMenuHeight()
            );
        }
        openMenu() {
          document.documentElement.classList.add("prevent-scroll"),
            this.domNodes.menuDrawer.classList.add("open");
        }
        closeMenu() {
          const {
            menuDrawer: e,
            menu: t,
            megaMenuMobile: s,
            hamburgerButtons: n,
          } = this.domNodes;
          setTimeout(() => {
            s.forEach((e) => {
              e.classList.remove("open");
            }),
              t.classList.remove(
                "m-submenu-open",
                "m-submenu-open--level-1",
                "m-submenu-open--level-2"
              ),
              e.classList.remove("open"),
              document.documentElement.classList.remove("prevent-scroll"),
              n.classList.remove("active");
          }, this.transitionDuration);
        }
        openSubMenu(e, t) {
          let s = `m-submenu-open--level-${t}`;
          this.domNodes.menuDrawerContent.classList.add("open-submenu"),
            this.domNodes.menu.classList.add("m-submenu-open"),
            this.domNodes.menu.classList.add(s),
            e.classList.add("open");
        }
        closeSubMenu(e, t) {
          let s = `m-submenu-open--level-${t}`;
          "1" === t && this.domNodes.menu.classList.remove("m-submenu-open"),
            this.domNodes.menu.classList.remove(s),
            e.classList.remove("open"),
            this.domNodes.menuDrawerContent.classList.remove("open-submenu");
        }
        setMenuHeight() {
          const { menuDrawer: e, headerMobile: t } = this.domNodes,
            s = t.getBoundingClientRect().top,
            n = window.innerHeight - t.offsetHeight - s;
          e.style.setProperty("--menu-drawer-height", `${n}px`);
        }
      }
      var c = "data-section-id";
      function l(e, t) {
        (this.container = (function (e) {
          if (!(e instanceof Element))
            throw new TypeError(
              "Theme Sections: Attempted to load section. The section container provided is not a DOM element."
            );
          if (null === e.getAttribute(c))
            throw new Error(
              "Theme Sections: The section container provided does not have an id assigned to the " +
                c +
                " attribute."
            );
          return e;
        })(e)),
          (this.id = e.getAttribute(c)),
          (this.extensions = []),
          Object.assign(
            this,
            (function (e) {
              if ((void 0 !== e && "object" != typeof e) || null === e)
                throw new TypeError(
                  "Theme Sections: The properties object provided is not a valid"
                );
              return e;
            })(t)
          ),
          this.onLoad();
      }
      (l.prototype = {
        onLoad: Function.prototype,
        onUnload: Function.prototype,
        onSelect: Function.prototype,
        onDeselect: Function.prototype,
        onBlockSelect: Function.prototype,
        onBlockDeselect: Function.prototype,
        extend: function (e) {
          this.extensions.push(e);
          var t = Object.assign({}, e);
          delete t.init,
            Object.assign(this, t),
            "function" == typeof e.init && e.init.apply(this);
        },
      }),
        "function" != typeof Object.assign &&
          Object.defineProperty(Object, "assign", {
            value: function (e) {
              if (null == e)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var t = Object(e), s = 1; s < arguments.length; s++) {
                var n = arguments[s];
                if (null != n)
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
              }
              return t;
            },
            writable: !0,
            configurable: !0,
          });
      var d = "data-section-type",
        u = "data-section-id";
      (window.data = window.data || {}),
        (window.data.theme = window.data.theme || {}),
        (window.data.theme.sections = window.data.theme.sections || {});
      var h = (window.data.theme.sections.registered =
          window.data.theme.sections.registered || {}),
        m = (window.data.theme.sections.instances =
          window.data.theme.sections.instances || []);
      function v(e, t) {
        (e = g(e)),
          void 0 === t && (t = document.querySelectorAll("[" + d + "]")),
          (t = y(t)),
          e.forEach(function (e) {
            var s = h[e];
            void 0 !== s &&
              (t = t.filter(function (t) {
                return (
                  !(p(t).length > 0) &&
                  null !== t.getAttribute(d) &&
                  (t.getAttribute(d) !== e || (m.push(new s(t)), !1))
                );
              }));
          });
      }
      function p(e) {
        var t = [];
        if (NodeList.prototype.isPrototypeOf(e) || Array.isArray(e))
          var s = e[0];
        if (e instanceof Element || s instanceof Element)
          y(e).forEach(function (e) {
            t = t.concat(
              m.filter(function (t) {
                return t.container === e;
              })
            );
          });
        else if ("string" == typeof e || "string" == typeof s) {
          g(e).forEach(function (e) {
            t = t.concat(
              m.filter(function (t) {
                return t.type === e;
              })
            );
          });
        }
        return t;
      }
      function f(e) {
        for (var t, s = 0; s < m.length; s++)
          if (m[s].id === e) {
            t = m[s];
            break;
          }
        return t;
      }
      function g(e) {
        return (
          "*" === e
            ? (e = Object.keys(h))
            : "string" == typeof e
            ? (e = [e])
            : e.constructor === l
            ? (e = [e.prototype.type])
            : Array.isArray(e) &&
              e[0].constructor === l &&
              (e = e.map(function (e) {
                return e.prototype.type;
              })),
          (e = e.map(function (e) {
            return e.toLowerCase();
          }))
        );
      }
      function y(e) {
        return (
          NodeList.prototype.isPrototypeOf(e) && e.length > 0
            ? (e = Array.prototype.slice.call(e))
            : (NodeList.prototype.isPrototypeOf(e) && 0 === e.length) ||
              null === e
            ? (e = [])
            : !Array.isArray(e) && e instanceof Element && (e = [e]),
          e
        );
      }
      window.data.designMode &&
        (document.addEventListener("shopify:section:load", function (e) {
          var t = e.detail.sectionId,
            s = e.target.querySelector("[" + u + '="' + t + '"]');
          null !== s && v(s.getAttribute(d), s);
        }),
        document.addEventListener("shopify:section:unload", function (e) {
          var t = e.detail.sectionId,
            s = e.target.querySelector("[" + u + '="' + t + '"]');
          "object" == typeof p(s)[0] &&
            p(s).forEach(function (e) {
              var t = m
                .map(function (e) {
                  return e.id;
                })
                .indexOf(e.id);
              m.splice(t, 1), e.onUnload();
            });
        }),
        document.addEventListener("shopify:section:select", function (e) {
          var t = f(e.detail.sectionId);
          "object" == typeof t && t.onSelect(e);
        }),
        document.addEventListener("shopify:section:deselect", function (e) {
          var t = f(e.detail.sectionId);
          "object" == typeof t && t.onDeselect(e);
        }),
        document.addEventListener("shopify:block:select", function (e) {
          var t = f(e.detail.sectionId);
          "object" == typeof t && t.onBlockSelect(e);
        }),
        document.addEventListener("shopify:block:deselect", function (e) {
          var t = f(e.detail.sectionId);
          "object" == typeof t && t.onBlockDeselect(e);
        }));
      var b = s(4558).LE;
      class w {
        constructor(e) {
          n(this, "selectors", {
            menuItems: [".sf-nav .sf-menu-item"],
            dropdowns: [".sf-menu__submenu"],
            subMenu: ".sf-menu__submenu",
            dropdownBg: ".sf-nav__bg",
            overlay: ".sf-header__overlay",
            swiper: ".swiper-container",
          }),
            n(this, "classes", {
              slideFromRight: "slide-from-right",
              slideReveal: "slide-reveal",
              active: "sf-mega-active",
            }),
            n(this, "headerSticky", !1),
            n(this, "attachEvents", () => {
              this.domNodes.menuItems.forEach((e, t) => {
                e.addEventListener("mouseenter", (e) =>
                  this.onMenuItemEnter(e, t)
                ),
                  e.addEventListener("mouseleave", (e) =>
                    this.onMenuItemLeave(e, t)
                  );
              });
            }),
            n(this, "initDropdownSize", () => {
              var e, t;
              null === (e = this.container) ||
                void 0 === e ||
                e.style.setProperty("--sf-dropdown-width", this.windowWidth()),
                null === (t = this.container) ||
                  void 0 === t ||
                  t.style.setProperty(
                    "--sf-dropdown-height",
                    this.windowHeight()
                  );
            }),
            n(this, "onMenuItemEnter", (e, t) => {
              var s, n, i, o, r, a;
              const { target: c } = e;
              c.classList.contains("sf-menu-item--no-mega") ||
                (clearTimeout(this.timeoutLeave),
                (this.activeIndex = Number(
                  null === (s = c.dataset) || void 0 === s ? void 0 : s.index
                )),
                (this.headerSticky =
                  "true" ===
                  (null === (n = this.container) || void 0 === n
                    ? void 0
                    : n.dataset.sticky)),
                this.reInitSlider(c),
                this.visited
                  ? null === (i = this.container) ||
                    void 0 === i ||
                    i.classList.remove(this.classes.slideReveal)
                  : null === (o = this.container) ||
                    void 0 === o ||
                    o.classList.add(this.classes.slideReveal),
                (this.visited = !0),
                this.lastActiveIndex >= 0 &&
                  this.activeIndex >= 0 &&
                  (this.lastActiveIndex < this.activeIndex
                    ? null === (r = this.container) ||
                      void 0 === r ||
                      r.classList.add(this.classes.slideFromRight)
                    : this.lastActiveIndex > this.activeIndex &&
                      (null === (a = this.container) ||
                        void 0 === a ||
                        a.classList.remove(this.classes.slideFromRight))),
                this.getElementBoundingRect(c).then((e) => {
                  var t, s;
                  e &&
                    (null === (t = this.container) ||
                      void 0 === t ||
                      t.style.setProperty("--sf-dropdown-width", e.width),
                    null === (s = this.container) ||
                      void 0 === s ||
                      s.style.setProperty("--sf-dropdown-height", e.height));
                  this.timeoutEnter = setTimeout(() => {
                    var e;
                    this.activeIndex === Number(c.dataset.index) &&
                      (null === (e = this.container) ||
                        void 0 === e ||
                        e.classList.add(this.classes.active),
                      c
                        .closest(".sf-menu-item")
                        .classList.add("sf-menu-item--active"));
                  }, 120);
                }));
            }),
            n(this, "onMenuItemLeave", (e, t) => {
              (this.activeIndex = -1),
                (this.lastActiveIndex = t),
                e.target
                  .closest(".sf-menu-item")
                  .classList.remove("sf-menu-item--active"),
                (this.timeoutLeave = setTimeout(() => {
                  (-1 === this.activeIndex || this.activeIndex < 0) &&
                    (this.visited = !1),
                    this.resetMegaMenu(e.target);
                }, 80));
            }),
            n(this, "reInitSlider", (e) => {
              var t;
              if (!e.querySelector(this.selectors.swiper)) return;
              const s = e.dataset.index,
                n =
                  null === (t = b) || void 0 === t
                    ? void 0
                    : t.headerSliders[s];
              null == n || n.update();
            }),
            n(this, "getElementBoundingRect", async (e) => {
              const t = e.querySelector(this.selectors.subMenu);
              if (t) {
                const e = t.getBoundingClientRect();
                return {
                  width: e.width,
                  height: e.height,
                  left: e.left,
                  top: e.top,
                };
              }
            }),
            n(this, "resetMegaMenu", () => {
              var e;
              (this.activeIndex = -1),
                clearTimeout(this.timeoutEnter),
                null === (e = this.container) ||
                  void 0 === e ||
                  e.classList.remove(
                    this.classes.active,
                    this.classes.slideFromRight,
                    this.classes.slideReveal,
                    "sf-header--bg-black",
                    "sf-header--bg-white"
                  );
            }),
            n(this, "windowWidth", () => window.innerWidth),
            n(this, "windowHeight", () => window.innerHeight),
            n(this, "destroy", () => {
              this.domNodes.menuItems.forEach((e, t) => {
                e.removeEventListener("mouseenter", (e) =>
                  this.onMenuItemEnter(e, t)
                ),
                  e.removeEventListener("mouseleave", (e) =>
                    this.onMenuItemLeave(e, t)
                  );
              });
            }),
            e &&
              ((this.container = e),
              (this.domNodes = queryDomNodes(this.selectors, this.container)),
              (this.activeIndex = -1),
              (this.lastActiveIndex = -1),
              (this.visited = !1),
              (this.timeoutEnter = null),
              (this.timeoutLeave = null),
              this.attachEvents());
        }
      }
      var L = s(4558).LE;
      !(function (e, t) {
        if ("string" != typeof e)
          throw new TypeError(
            "Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered"
          );
        if (void 0 !== h[e])
          throw new Error(
            'Theme Sections: A section of type "' +
              e +
              '" has already been registered. You cannot register the same section type twice'
          );
        function s(e) {
          l.call(this, e, t);
        }
        (s.constructor = l),
          (s.prototype = Object.create(l.prototype)),
          (s.prototype.type = e),
          (h[e] = s);
      })("header", {
        onLoad: function () {
          var e, t, s, n;
          (this.isDesignMode =
            "true" ===
            (null === (e = this.container) ||
            void 0 === e ||
            null === (t = e.dataset) ||
            void 0 === t
              ? void 0
              : t.designMode)),
            (this.selectors = {
              headers: ["header"],
              logos: [".sf-logo"],
              topbar: ".sf-topbar",
              headerWrapper: ".header__wrapper",
              topbarClose: ".sf-topbar__close",
            }),
            (this.domNodes = queryDomNodes(this.selectors, this.container)),
            (this.innerWidth = window.innerWidth),
            (this.offsetTop = this.domNodes.headerWrapper.offsetTop),
            (this.headerHeight = this.domNodes.headerWrapper.offsetHeight),
            (this.stickyEnabled =
              "true" ===
                (null === (s = this.container) ||
                void 0 === s ||
                null === (n = s.dataset) ||
                void 0 === n
                  ? void 0
                  : n.sticky) || !1),
            (this.classes = {
              scrollUp: "scroll-up",
              scrollDown: "scroll-down",
              stuck: "stuck",
            });
          try {
            var i, o, r, a, c, l, d, u;
            if (
              ((this.transparentHeader =
                "true" ===
                (null === (i = this.domNodes) ||
                void 0 === i ||
                null === (o = i.headers) ||
                void 0 === o ||
                null === (r = o[0]) ||
                void 0 === r ||
                null === (a = r.dataset) ||
                void 0 === a
                  ? void 0
                  : a.transparent)),
              this.initAddon(),
              this.handleSticky(),
              document.addEventListener("matchMobile", () =>
                this.handleSticky()
              ),
              document.addEventListener("unmatchMobile", () =>
                this.handleSticky()
              ),
              (this.siteNav = new w(this.container)),
              (window.__sfHeader = this),
              window.addEventListener("resize", () => {
                this.innerWidth = window.innerWidth;
              }),
              this.transparentHeader && this.innerWidth > 1280)
            )
              null === (c = this.domNodes.headerWrapper) ||
                void 0 === c ||
                null === (l = c.classList) ||
                void 0 === l ||
                l.add("transparent-on-top");
            else
              null === (d = this.domNodes.headerWrapper) ||
                void 0 === d ||
                null === (u = d.classList) ||
                void 0 === u ||
                u.remove("transparent-on-top");
          } catch (e) {}
        },
        initAddon: function () {
          var e, t, s, n, i, o;
          ((this.megamenu = new a(this.container)), this.isDesignMode) &&
            (null === (e = L = L || {}) ||
              void 0 === e ||
              null === (t = e.Wishlist) ||
              void 0 === t ||
              null === (s = t.updateWishlistCount) ||
              void 0 === s ||
              s.call(t),
            null === (n = L) ||
              void 0 === n ||
              null === (i = n.Search) ||
              void 0 === i ||
              null === (o = i.init) ||
              void 0 === o ||
              o.call(i));
        },
        handleSticky: function () {
          let e = 20;
          document
            .querySelectorAll(".shopify-section-group-header-group")
            .forEach((t) => {
              t.classList.contains("m-section-header") || (e += t.offsetHeight);
            });
          const t = document.querySelector(".sf-topbar");
          if ((t && (e += t.offsetHeight), !this.stickyEnabled)) return;
          let s = 0;
          window.addEventListener("scroll", () => {
            const t = window.pageYOffset;
            if (t <= e) {
              var n, i, o;
              this.container.classList.remove(
                this.classes.scrollUp,
                this.classes.stuck
              ),
                this.transparentHeader &&
                  this.innerWidth > 1279 &&
                  (null === (n = this.domNodes.headerWrapper) ||
                    void 0 === n ||
                    null === (i = n.classList) ||
                    void 0 === i ||
                    null === (o = i.add) ||
                    void 0 === o ||
                    o.call(i, "transparent-on-top"));
            } else {
              if (
                (this.container.classList.add(this.classes.stuck),
                t > this.headerHeight + e &&
                  t > s &&
                  !this.container.classList.contains(this.classes.scrollDown))
              )
                this.container.classList.remove(this.classes.scrollUp),
                  this.container.classList.add(this.classes.scrollDown);
              else if (
                t < s &&
                this.container.classList.contains(this.classes.scrollDown)
              ) {
                var r, a, c;
                if (
                  (this.container.classList.remove(this.classes.scrollDown),
                  this.container.classList.add(this.classes.scrollUp),
                  this.transparentHeader && this.innerWidth > 1279)
                )
                  null === (r = this.domNodes.headerWrapper) ||
                    void 0 === r ||
                    null === (a = r.classList) ||
                    void 0 === a ||
                    null === (c = a.remove) ||
                    void 0 === c ||
                    c.call(a, "transparent-on-top");
              }
              s = t;
            }
          });
        },
        onUnload: function () {
          this.siteNav.destroy();
        },
      }),
        v("header");
    })();
})();
