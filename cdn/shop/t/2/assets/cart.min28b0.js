(() => {
  var e = {
      4558: (e, t, n) => {
        "use strict";
        n.d(t, {
          GQ: () => a,
          LE: () => o,
          gM: () => c,
          rZ: () => s,
          s0: () => i,
        });
        var r = n(8971);
        n(9280);
        (window.MinimogEvents = window.MinimogEvents || new r.Z()),
          (window._ThemeEvent = window.MinimogEvents),
          (window.MinimogLibs.loadjs = __loadjs);
        const i = window.MinimogEvents,
          o = window.MinimogTheme || {},
          a = window.MinimogSettings || {},
          s = window.MinimogStrings || {},
          c = window.MinimogLibs || {};
      },
      9280: () => {
        __loadjs = (function () {
          var e = function () {},
            t = {},
            n = {},
            r = {};
          function i(e, t) {
            if (e) {
              var i = r[e];
              if (((n[e] = t), i))
                for (; i.length; ) i[0](e, t), i.splice(0, 1);
            }
          }
          function o(t, n) {
            t.call && (t = { success: t }),
              n.length ? (t.error || e)(n) : (t.success || e)(t);
          }
          function a(t, n, r, i) {
            var o,
              s,
              c = document,
              d = r.async,
              l = (r.numRetries || 0) + 1,
              u = r.before || e,
              m = t.replace(/[\?|#].*$/, ""),
              p = t.replace(/^(css|img)!/, "");
            (i = i || 0),
              /(^css!|\.css$)/.test(m)
                ? (((s = c.createElement("link")).rel = "stylesheet"),
                  (s.href = p),
                  (o = "hideFocus" in s) &&
                    s.relList &&
                    ((o = 0), (s.rel = "preload"), (s.as = "style")))
                : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(m)
                ? ((s = c.createElement("img")).src = p)
                : (((s = c.createElement("script")).src = t),
                  (s.async = void 0 === d || d)),
              !(s.onload =
                s.onerror =
                s.onbeforeload =
                  function (e) {
                    var c = e.type[0];
                    if (o)
                      try {
                        s.sheet.cssText.length || (c = "e");
                      } catch (e) {
                        18 != e.code && (c = "e");
                      }
                    if ("e" == c) {
                      if ((i += 1) < l) return a(t, n, r, i);
                    } else if ("preload" == s.rel && "style" == s.as)
                      return (s.rel = "stylesheet");
                    n(t, c, e.defaultPrevented);
                  }) !== u(t, s) && c.head.appendChild(s);
          }
          function s(e, n, r) {
            var s, c;
            if ((n && n.trim && (s = n), (c = (s ? r : n) || {}), s)) {
              if (s in t) throw "LoadJS";
              t[s] = !0;
            }
            function d(t, n) {
              !(function (e, t, n) {
                var r,
                  i,
                  o = (e = e.push ? e : [e]).length,
                  s = o,
                  c = [];
                for (
                  r = function (e, n, r) {
                    if (("e" == n && c.push(e), "b" == n)) {
                      if (!r) return;
                      c.push(e);
                    }
                    --o || t(c);
                  },
                    i = 0;
                  i < s;
                  i++
                )
                  a(e[i], r, n);
              })(
                e,
                function (e) {
                  o(c, e), t && o({ success: t, error: n }, e), i(s, e);
                },
                c
              );
            }
            if (c.returnPromise) return new Promise(d);
            d();
          }
          return (
            (s.ready = function (e, t) {
              return (
                (function (e, t) {
                  e = e.push ? e : [e];
                  var i,
                    o,
                    a,
                    s = [],
                    c = e.length,
                    d = c;
                  for (
                    i = function (e, n) {
                      n.length && s.push(e), --d || t(s);
                    };
                    c--;

                  )
                    (o = e[c]),
                      (a = n[o]) ? i(o, a) : (r[o] = r[o] || []).push(i);
                })(e, function (e) {
                  o(t, e);
                }),
                s
              );
            }),
            (s.done = function (e) {
              i(e, []);
            }),
            (s.reset = function () {
              (t = {}), (n = {}), (r = {});
            }),
            (s.isDefined = function (e) {
              return e in t;
            }),
            s
          );
        })();
      },
      6295: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => r });
        n(2422);
        const r = new (class {
          constructor() {
            return (this.component = this.component.bind(this)), this.component;
          }
          component(e, t) {
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
              i < n;
              i++
            )
              r[i - 2] = arguments[i];
            if ("function" == typeof e) return e({ ...t, children: r });
            r && (r = r.filter((e) => null !== e)),
              t && (t.class && (t.className = t.class), delete t.children);
            let o =
              "fragment" !== e
                ? (function (e, t) {
                    t = t || {};
                    let n = document.createElement(e);
                    try {
                      n = Object.assign(n, t);
                    } catch {
                      const e = Object.keys(t);
                      for (let r = 0; r < e.length; r++)
                        "dataSet" !== t[r] && n.setAttribute(e[r], t[e[r]]);
                    }
                    return n;
                  })(e, t)
                : document.createDocumentFragment();
            if (
              -1 !== ["svg", "path", "rect", "text", "circle", "g"].indexOf(e)
            ) {
              o = document.createElementNS("http://www.w3.org/2000/svg", e);
              for (const e in t) {
                const n = "className" === e ? "class" : e;
                o.setAttribute(n, t[e]);
              }
            }
            for (const e of r) Array.isArray(e) ? o.append(...e) : o.append(e);
            if (null != t && t.dataSet)
              for (const e in t.dataSet)
                Object.prototype.hasOwnProperty.call(t.dataSet, e) &&
                  (o.dataset[e] = t.dataSet[e]);
            return (
              t &&
                !window.__aleartedJSXData &&
                Object.keys(t).find((e) => e.match(/^data-/)) &&
                (alert(
                  "Do not use data-* in your JSX component! Use dataSet instead!! - Check the console.trace for more info"
                ),
                (window.__aleartedJSXData = !0)),
              null != t &&
                t.ref &&
                ("function" == typeof t.ref ? t.ref(o) : (t.ref = o)),
              null != t &&
                t.on &&
                Object.entries(t.on).forEach((e) => {
                  let [t, n] = e;
                  o.addEventListener(t, n);
                }),
              null != t &&
                t.style &&
                Object.entries(t.style).forEach((e) => {
                  let [t, n] = e;
                  o.style.setProperty(t, n);
                }),
              o
            );
          }
        })();
      },
      8971: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => r });
        class r {
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
            const n = this.events[e];
            if (n && Array.isArray(n))
              for (let e = 0; e < n.length; e++)
                if (n[e] === t) {
                  n.splice(e, 1);
                  break;
                }
          }
          emit(e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            (this.events[e] || []).forEach((e) => {
              e(...n);
            });
          }
        }
      },
      2422: () => {
        !(function () {
          function e() {
            var e = Array.prototype.slice.call(arguments),
              t = document.createDocumentFragment();
            e.forEach(function (e) {
              var n = e instanceof Node;
              t.appendChild(n ? e : document.createTextNode(String(e)));
            }),
              this.appendChild(t);
          }
          [
            Element.prototype,
            Document.prototype,
            DocumentFragment.prototype,
          ].forEach(function (t) {
            t.hasOwnProperty("append") ||
              Object.defineProperty(t, "append", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: e,
              });
          });
        })();
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e =
          "query countries($locale: SupportedLocale!) {  countries(locale: $locale) {    name    code    labels {      address1      address2      city      company      country      firstName      lastName      phone      postalCode      zone    }    formatting {      edit    }    zones {      name      code    }  }}",
        t = "https://country-service.shopifycloud.com/graphql";
      var r = "EN",
        i = ["DA", "DE", "EN", "ES", "FR", "IT", "JA", "NL", "PT", "PT_BR"];
      function o(e) {
        var t = e.replace(/-/, "_").toUpperCase();
        return -1 !== i.indexOf(t)
          ? t
          : -1 !== i.indexOf(t.substring(0, 2))
          ? t.substring(0, 2)
          : r;
      }
      var a = /({\w+})/g,
        s = "_",
        c = {
          lastName: '[name="address[last_name]"]',
          firstName: '[name="address[first_name]"]',
          company: '[name="address[company]"]',
          address1: '[name="address[address1]"]',
          address2: '[name="address[address2]"]',
          country: '[name="address[country]"]',
          zone: '[name="address[province]"]',
          postalCode: '[name="address[zip]"]',
          city: '[name="address[city]"]',
          phone: '[name="address[phone]"]',
        };
      function d(n, r, i) {
        r = r || "en";
        var a = (function (e, t) {
          var n = {};
          return (
            Object.keys(c).forEach(function (r) {
              var i = e.querySelector(t[r]);
              n[r] = i
                ? {
                    wrapper: i.parentElement,
                    input: i,
                    labels: document.querySelectorAll('[for="' + i.id + '"]'),
                  }
                : {};
            }),
            n
          );
        })(
          n,
          (function () {
            for (var e = Object({}), t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n)
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          })(c, (i = i || { inputSelectors: {} }).inputSelectors)
        );
        return (
          (function (e) {
            Object.keys(e).forEach(function (t) {
              var n = e[t].input,
                r = e[t].labels;
              if (n) {
                if ("object" != typeof n)
                  throw new TypeError(e[t] + " is missing an input or select.");
                if ("object" != typeof r)
                  throw new TypeError(e[t] + " is missing a label.");
              }
            });
          })(a),
          (function (e) {
            if (!e) return Promise.resolve(null);
            return fetch(location.origin + "/meta.json")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return -1 !== e.ships_to_countries.indexOf("*")
                  ? null
                  : e.ships_to_countries;
              })
              .catch(function () {
                return null;
              });
          })(i.shippingCountriesOnly).then(function (i) {
            return (function (n) {
              return fetch(t, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                  query: e,
                  operationName: "countries",
                  variables: { locale: o(n) },
                }),
              })
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return e.data.countries;
                });
            })(r).then(function (e) {
              !(function (e, t, n) {
                !(function (e, t) {
                  var n = e.country.input,
                    r = n.cloneNode(!0);
                  t.forEach(function (e) {
                    var t = document.createElement("option");
                    (t.value = e.code),
                      (t.textContent = e.name),
                      r.appendChild(t);
                  }),
                    (n.innerHTML = r.innerHTML),
                    n.dataset.default && (n.value = n.dataset.default);
                })(t, n);
                var r = t.country.input ? t.country.input.value : null;
                (function (e, t, n) {
                  t.country.input.addEventListener("change", function (r) {
                    l(e, t, r.target.value, n);
                  });
                })(e, t, n),
                  l(e, t, r, n);
              })(
                n,
                a,
                (function (e, t) {
                  if (!t) return e;
                  return e.filter(function (e) {
                    return -1 !== t.indexOf(e.code);
                  });
                })(e, i)
              );
            });
          })
        );
      }
      function l(e, t, n, r) {
        var i = (function (e, t) {
          return (
            (e = e || "CA"),
            t.filter(function (t) {
              return t.code === e;
            })[0]
          );
        })(n, r);
        !(function (e, t) {
          Object.keys(e).forEach(function (n) {
            e[n].labels.forEach(function (e) {
              e.textContent = t.labels[n];
            });
          });
        })(t, i),
          (function (e, t, n) {
            var r = n.formatting.edit,
              i = t.country.wrapper,
              o = !1;
            ((c = r),
            c.split(s).map(function (e) {
              var t = e.match(a);
              return t
                ? t.map(function (e) {
                    var t = e.replace(/[{}]/g, "");
                    switch (t) {
                      case "zip":
                        return "postalCode";
                      case "province":
                        return "zone";
                      default:
                        return t;
                    }
                  })
                : [];
            })).forEach(function (n) {
              n.forEach(function (r) {
                (t[r].wrapper.dataset.lineCount = n.length),
                  t[r].wrapper &&
                    ("country" !== r
                      ? o
                        ? e.append(t[r].wrapper)
                        : e.insertBefore(t[r].wrapper, i)
                      : (o = !0));
              });
            });
            var c;
          })(e, t, i),
          (function (e, t) {
            var n = e.zone;
            if (!n) return;
            if (0 === t.zones.length)
              return (
                (n.wrapper.dataset.ariaHidden = "true"),
                void (n.input.innerHTML = "")
              );
            n.wrapper.dataset.ariaHidden = "false";
            var r = n.input,
              i = r.cloneNode(!0);
            (i.innerHTML = ""),
              t.zones.forEach(function (e) {
                var t = document.createElement("option");
                (t.value = e.code), (t.textContent = e.name), i.appendChild(t);
              }),
              (r.innerHTML = i.innerHTML),
              r.dataset.default && (r.value = r.dataset.default);
          })(t, i);
      }
      var u = n(4558).GQ,
        m = n(4558).gM,
        p = n(4558).s0,
        h = n(4558).LE,
        g = n(4558).rZ,
        f = n(6295).Z;
      class y extends HTMLElement {
        constructor() {
          super(),
            this.addEventListener("click", (e) => {
              e.preventDefault();
              (
                this.closest("m-cart-template") ||
                this.closest("m-cart-drawer-items")
              ).updateQuantity(this.dataset.index, 0);
            });
        }
      }
      customElements.define("m-cart-remove-button", y);
      class v extends HTMLElement {
        constructor() {
          super(),
            (this.cartUpdateUnsubscriber = void 0),
            (this.isCartPage = "cart" === u.templateName),
            (this.cartDrawerWrapper = document.querySelector("m-cart-drawer")),
            (this.cartDrawerInner = document.querySelector(
              ".m-cart-drawer--inner"
            )),
            (this.mainCartItems = this.querySelector(
              "[data-minimog-cart-items]"
            )),
            (this.cartSubTotal = this.querySelector("[data-cart-subtotal]")),
            (this.cartDiscount = this.querySelector(
              "[data-minimog-cart-discounts]"
            )),
            (this.giftWrapping = this.querySelector(
              "[data-minimog-gift-wrapping]"
            ));
          let e = this.cartDrawerInner;
          this.isCartPage && (e = document.body),
            (this.loading = new m.AnimateLoading(e, { overlay: e })),
            (this.rootUrl = window.data.routes.root);
          const t = debounce((e) => {
            "id" !== e.target.name && this.onChange(e);
          }, 300);
          this.isCartPage
            ? this.mainCartItems.addEventListener("change", t.bind(this))
            : this.addEventListener("change", t.bind(this)),
            p.subscribe(h.pubSubEvents.cartUpdate, (e) => {
              this.getCart().then((e) => {
                this.updateCartCount(e.item_count);
              });
            });
        }
        updateCartCount(e) {
          document.querySelectorAll(".m-cart-count-bubble").forEach((t) => {
            e > 0
              ? ((t.textContent = e), t.classList.remove("hidden"))
              : t.classList.add("hidden");
          });
        }
        getCart() {
          return fetchJSON(this.rootUrl + "cart.json");
        }
        connectedCallback() {
          this.cartUpdateUnsubscriber = p.subscribe(
            h.pubSubEvents.cartUpdate,
            (e) => {
              "main-cart-items" !== e.source && this.onCartUpdate();
            }
          );
        }
        disconnectedCallback() {
          this.cartUpdateUnsubscriber && this.cartUpdateUnsubscriber();
        }
        onCartUpdate() {
          let e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          const { routes: t } = window.MinimogSettings;
          fetch(`${t.cart}?section_id=cart-template`)
            .then((e) => e.text())
            .then((t) => {
              const n = new DOMParser().parseFromString(t, "text/html"),
                r = n.querySelector("[data-minimog-cart-items]"),
                i = n.querySelector("[data-cart-subtotal]"),
                o = n.querySelector("[data-minimog-cart-discounts]"),
                a = n.querySelector("[data-minimog-gift-wrapping]");
              this.isCartPage &&
                ((this.mainCartItems.innerHTML = r.innerHTML),
                e &&
                  ((this.cartSubTotal.innerHTML = i.innerHTML),
                  (this.cartDiscount.innerHTML = o.innerHTML),
                  (this.giftWrapping.innerHTML = a.innerHTML)),
                window.FoxKitV2 &&
                  window.FoxKitV2.Modules.InCart &&
                  window.FoxKitV2.Modules.InCart.getCart());
            })
            .catch((e) => {});
        }
        onChange(e) {
          this.updateQuantity(
            e.target.dataset.index,
            e.target.value,
            document.activeElement.getAttribute("name")
          );
        }
        updateQuantity(e, t, n) {
          this.loading.start();
          const { routes: r } = window.MinimogSettings,
            i = JSON.stringify({
              line: e,
              quantity: t,
              sections: this.getSectionsToRender().map((e) => e.section),
              sections_url: window.location.pathname,
            });
          fetch(`${r.cart_change_url}`, { ...fetchConfig(), body: i })
            .then((e) => e.text())
            .then((t) => {
              const n = JSON.parse(t);
              let r = document.getElementById(`MinimogDrawer-quantity-${e}`);
              this.isCartPage &&
                (r = h.config.mqlMobile
                  ? document.querySelector(
                      `.MinimogQuantity-${e}.MinimogQuantity-mobile`
                    )
                  : document.querySelector(
                      `.MinimogQuantity-${e}.MinimogQuantity-desktop`
                    ));
              const i = document.querySelectorAll(".m-cart--item");
              if (n.errors)
                return (
                  this.loading.finish(),
                  (r.value = r.getAttribute("value")),
                  void this.updateLiveRegions(e, n.errors)
                );
              this.classList.toggle("m-cart--empty", 0 === n.item_count),
                this.cartDrawerWrapper &&
                  this.cartDrawerWrapper.classList.toggle(
                    "m-cart--empty",
                    0 === n.item_count
                  ),
                this.getSectionsToRender().forEach((e) => {
                  (
                    document.getElementById(e.id).querySelector(e.selector) ||
                    document.getElementById(e.id)
                  ).innerHTML = this.getSectionInnerHTML(
                    n.sections[e.section],
                    e.selector
                  );
                });
              const o = n.items[e - 1] ? n.items[e - 1].quantity : void 0;
              let a = "";
              i.length === n.items.length &&
                o !== parseInt(r.value) &&
                (a =
                  void 0 === o
                    ? window.MinimogStrings.cartError
                    : window.MinimogStrings.quantityError.replace(
                        "[quantity]",
                        o
                      )),
                this.updateLiveRegions(e, a),
                p.emit(h.pubSubEvents.cartUpdate, {
                  ...n,
                  source: "main-cart-items",
                });
            })
            .catch(() => {})
            .finally(() => {
              this.loading.finish();
            });
        }
        updateLiveRegions(e, t) {
          let n = document.getElementById(`MinimogCartDrawer-Item-${e}`);
          this.isCartPage &&
            (n = document.getElementById(`MinimogCart-Item-${e}`)),
            "" !== t &&
              n &&
              h.Notification.show({ target: n, type: "warning", message: t });
        }
        getSectionInnerHTML(e, t) {
          return new DOMParser()
            .parseFromString(e, "text/html")
            .querySelector(t).innerHTML;
        }
        getSectionsToRender() {
          return [
            {
              id: "MinimogCart",
              section: "cart-template",
              selector: "[data-minimog-cart-items]",
            },
            {
              id: "MinimogCart",
              section: "cart-template",
              selector: "[data-cart-subtotal]",
            },
            {
              id: "MinimogCart",
              section: "cart-template",
              selector: "[data-minimog-cart-discounts]",
            },
            {
              id: "MinimogCart",
              section: "cart-template",
              selector: "[data-minimog-gift-wrapping]",
            },
          ];
        }
      }
      customElements.define("m-cart-template", v);
      class w extends HTMLElement {
        constructor() {
          super(),
            (this.cartDrawerInner = this.querySelector(
              ".m-cart-drawer--inner"
            )),
            (this.cartDrawerCloseIcon = this.querySelector(
              ".m-cart-drawer--close-icon"
            )),
            (this.cartOverlay = this.querySelector(".m-cart--overlay")),
            (this.rootUrl = window.data.routes.root),
            this.setHeaderCartIconAccessibility(),
            this.cartDrawerCloseIcon.addEventListener(
              "click",
              this.close.bind(this)
            ),
            this.addEventListener("click", (e) => {
              e.target.closest(".m-cart-drawer--inner") !==
                this.cartDrawerInner && this.close();
            });
        }
        setHeaderCartIconAccessibility() {
          document.querySelectorAll(".m-cart-icon-bubble").forEach((e) => {
            e.setAttribute("role", "button"),
              e.setAttribute("aria-haspopup", "dialog"),
              e.addEventListener("click", (t) => {
                u.enable_cart_drawer && (t.preventDefault(), this.open(e));
              });
          });
        }
        open(e) {
          e && this.setActiveElement(e),
            this.classList.add("m-cart-drawer--active"),
            requestAnimationFrame(() => {
              this.style.setProperty("--cart-drawer-overlay-alpha", "0.5"),
                this.cartDrawerInner.style.setProperty(
                  "--cart-drawer-inner-translate-x",
                  "0"
                );
            }),
            document.documentElement.classList.add("prevent-scroll");
        }
        close() {
          this.style.setProperty("--cart-drawer-overlay-alpha", "0"),
            this.cartDrawerInner.style.setProperty(
              "--cart-drawer-inner-translate-x",
              "100%"
            ),
            setTimeout(() => {
              this.classList.remove("m-cart-drawer--active"),
                document.documentElement.classList.remove("prevent-scroll");
            }, 300);
        }
        renderContents(e) {
          this.classList.contains("m-cart--empty") &&
            this.classList.remove("m-cart--empty"),
            (this.productId = e.id),
            this.getSectionsToRender().forEach((t) => {
              (t.selector
                ? document.querySelector(t.selector)
                : document.getElementById(t.id)
              ).innerHTML = this.getSectionInnerHTML(
                e.sections[t.id],
                t.selector
              );
            }),
            setTimeout(() => {
              this.open(),
                window.FoxKitV2 &&
                  window.FoxKitV2.Modules.InCart &&
                  window.FoxKitV2.Modules.InCart.getCart();
            });
        }
        updateCartCount(e) {
          document.querySelectorAll(".m-cart-count-bubble").forEach((t) => {
            e > 0
              ? ((t.textContent = e), t.classList.remove("hidden"))
              : t.classList.add("hidden");
          });
        }
        getCart() {
          return fetchJSON(this.rootUrl + "cart.json");
        }
        onCartDrawerUpdate() {
          let e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          fetch(`${u.routes.cart}?section_id=cart-drawer`)
            .then((e) => e.text())
            .then((t) => {
              this.getSectionsToRender().forEach((n) => {
                if ("cart-items" === n.block) {
                  ((n.selector
                    ? document.querySelector(n.selector)
                    : document.getElementById(n.id)
                  ).innerHTML = this.getSectionInnerHTML(t, n.selector)),
                    window.FoxKitV2 &&
                      window.FoxKitV2.Modules.InCart &&
                      window.FoxKitV2.Modules.InCart.getCart();
                } else if (e) {
                  (n.selector
                    ? document.querySelector(n.selector)
                    : document.getElementById(n.id)
                  ).innerHTML = this.getSectionInnerHTML(t, n.selector);
                }
              });
            })
            .catch((e) => {}),
            this.getCart().then((e) => {
              this.classList.toggle("m-cart--empty", 0 === e.item_count),
                this.updateCartCount(e.item_count);
            });
        }
        getSectionInnerHTML(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ".shopify-section";
          return new DOMParser()
            .parseFromString(e, "text/html")
            .querySelector(t).innerHTML;
        }
        getSectionsToRender() {
          return [
            {
              id: "cart-drawer",
              selector: "[data-minimog-cart-items]",
              block: "cart-items",
            },
            {
              id: "cart-drawer",
              selector: "[data-minimog-cart-discounts]",
              block: "cart-footer",
            },
            {
              id: "cart-drawer",
              selector: "[data-cart-subtotal]",
              block: "cart-footer",
            },
            {
              id: "cart-drawer",
              selector: "[data-minimog-gift-wrapping]",
              block: "cart-footer",
            },
          ];
        }
        getSectionDOM(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ".shopify-section";
          return new DOMParser()
            .parseFromString(e, "text/html")
            .querySelector(t);
        }
        setActiveElement(e) {
          this.activeElement = e;
        }
      }
      customElements.define("m-cart-drawer", w);
      customElements.define(
        "m-cart-drawer-items",
        class extends v {
          getSectionsToRender() {
            return [
              {
                id: "MinimogCartDrawer",
                section: "cart-drawer",
                selector: "[data-minimog-cart-items]",
              },
              {
                id: "MinimogCartDrawer",
                section: "cart-drawer",
                selector: "[data-minimog-cart-discounts]",
              },
              {
                id: "MinimogCartDrawer",
                section: "cart-drawer",
                selector: "[data-cart-subtotal]",
              },
              {
                id: "MinimogCartDrawer",
                section: "cart-drawer",
                selector: "[data-minimog-gift-wrapping]",
              },
            ];
          }
        }
      );
      class b extends HTMLElement {
        constructor() {
          super(),
            (this.selectors = {
              zipCode: '[name="address[zip]"]',
              province: '[name="address[province]"]',
              country: '[name="address[country]"]',
              addressForm: '[data-address="root"]',
              shippingMessage: ".m-cart-shipping--message",
              cartDiscountCode: '[name="discount"]',
              cartDiscountCodeNoti: "[data-discount-noti]",
              cartNote: '[name="note"]',
              saveAddonButton: ".m-cart-addon--save-button",
              closeAddonButton: ".m-cart-addon--close-button",
              calcShippingButton: ".m-cart-addon--calc-shipping-button",
              triggerAddonButton: ".m-cart-addon--trigger-button",
            }),
            (this.cartWrapper = document.querySelector(".m-cart-drawer")),
            (this.isCartPage = "cart" === u.templateName),
            this.isCartPage &&
              (this.cartWrapper = document.querySelector("m-cart-template")),
            (this.cartOverlay =
              this.cartWrapper.querySelector(".m-cart--overlay")),
            (this.domNodes = queryDomNodes(this.selectors, this)),
            (this.rootUrl = window.data.routes.root),
            (this.discountCodeKey = "minimog-discount-code"),
            this.init();
        }
        init() {
          const {
            addressForm: e,
            cartDiscountCode: t,
            cartDiscountCodeNoti: n,
          } = this.domNodes;
          if (
            (addEventDelegate({
              selector: this.selectors.triggerAddonButton,
              handler: (t, n) => {
                var r;
                if ((t.preventDefault(), this.isCartPage)) {
                  const e = document.querySelector(
                    ".m-cart-addon--content.open"
                  );
                  e && e.classList.remove("open");
                }
                const { open: i } = n.dataset,
                  o = this.cartWrapper.querySelector(`#m-addons-${i}`);
                n.classList.add("active"),
                  null == o || o.classList.add("open"),
                  null === (r = this.cartOverlay) ||
                    void 0 === r ||
                    r.classList.add("open"),
                  (this.openAddon = o),
                  "shipping" === i && d(e, window.data.locale);
              },
            }),
            addEventDelegate({
              selector: this.selectors.closeAddonButton,
              context: this.cartWrapper,
              handler: this.close.bind(this),
            }),
            addEventDelegate({
              selector: this.selectors.calcShippingButton,
              context: this.cartWrapper,
              handler: this.calcShipping.bind(this),
            }),
            t)
          ) {
            const e = localStorage.getItem(this.discountCodeKey);
            e && ((t.value = e), n && (n.style.display = "inline"));
          }
          this.saveAddonValue();
        }
        close(e) {
          e.preventDefault(),
            this.openAddon.classList.remove("open"),
            this.cartOverlay.classList.remove("open"),
            (this.openAddon = null);
        }
        calcShipping(e) {
          var t;
          e.preventDefault();
          const n = e.target.closest(".m-cart-addon--actions");
          n.classList.add("shipping-calculating");
          const r =
              null === (t = this.domNodes.zipCode.value) || void 0 === t
                ? void 0
                : t.trim(),
            i = this.domNodes.country.value,
            o = this.domNodes.province.value;
          this.domNodes.shippingMessage.classList.remove("error"),
            (this.domNodes.shippingMessage.innerHTML = "");
          const a = "true" === n.dataset.showDeliveryDays;
          fetch(
            `${this.rootUrl}cart/shipping_rates.json?shipping_address%5Bzip%5D=${r}&shipping_address%5Bcountry%5D=${i}&shipping_address%5Bprovince%5D=${o}`
          )
            .then((e) => e.json())
            .then((e) => {
              if (e && e.shipping_rates) {
                const { shipping_rates: t } = e,
                  { shippingRatesResult: r, noShippingRate: i } = g;
                t.length > 0
                  ? (n.classList.remove("shipping-calculating"),
                    this.domNodes.shippingMessage.appendChild(
                      f(
                        "p",
                        { className: "mb-3 text-base" },
                        r.replace("{{count}}", t.length),
                        ":"
                      )
                    ),
                    t.map((e) => {
                      const {
                        deliveryOne: t = "Day",
                        deliveryOther: r = "Days",
                      } = n.dataset;
                      let i = "";
                      if (e.delivery_days.length > 0 && a) {
                        let n = t;
                        const o = e.delivery_days[0],
                          a = e.delivery_days.at(-1);
                        o > 1 && (n = r),
                          (i = o === a ? `(${o} ${n})` : `(${o} - ${a} ${n})`);
                      }
                      const o = f("span", null);
                      (o.innerHTML = formatMoney(e.price, u.money_format)),
                        this.domNodes.shippingMessage.appendChild(
                          f("p", null, e.name, ": ", o, " ", i)
                        );
                    }))
                  : (n.classList.remove("shipping-calculating"),
                    (this.domNodes.shippingMessage.innerHTML = `<p>${i}</p>`));
              } else
                n.classList.remove("shipping-calculating"),
                  Object.entries(e).map((e) => {
                    var t;
                    this.domNodes.shippingMessage.classList.add(
                      null === (t = e[0]) || void 0 === t
                        ? void 0
                        : t.toLowerCase()
                    );
                    const n = `${e[1][0]}`;
                    this.domNodes.shippingMessage.appendChild(f("p", null, n));
                  });
            })
            .catch(console.error);
        }
        saveAddonValue() {
          addEventDelegate({
            event: "click",
            context: this.cartWrapper,
            selector: this.selectors.saveAddonButton,
            handler: (e, t) => {
              e.preventDefault();
              const { cartDiscountCode: n, cartDiscountCodeNoti: r } =
                this.domNodes;
              if ("coupon" === t.dataset.action && n) {
                const e = this.domNodes.cartDiscountCode.value;
                localStorage.setItem(this.discountCodeKey, e),
                  (r.style.display = "" !== e && r ? "inline" : "none");
              }
              "note" === t.dataset.action && this.updateCartNote(),
                this.close(e);
            },
          });
        }
        updateCartNote() {
          const e = this.domNodes.cartNote.value,
            t = JSON.stringify({ note: e });
          fetch(`${window.MinimogSettings.routes.cart_update_url}`, {
            ...fetchConfig(),
            body: t,
          });
        }
      }
      customElements.define("m-cart-addons", b);
    })();
})();
