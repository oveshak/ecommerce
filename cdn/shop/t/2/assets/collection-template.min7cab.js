(() => {
  var e = {
      4558: (e, t, n) => {
        "use strict";
        n.d(t, { LE: () => i });
        var o = n(8971);
        n(9280);
        (window.MinimogEvents = window.MinimogEvents || new o.Z()),
          (window._ThemeEvent = window.MinimogEvents),
          (window.MinimogLibs.loadjs = __loadjs);
        window.MinimogEvents;
        const i = window.MinimogTheme || {};
        window.MinimogSettings, window.MinimogStrings, window.MinimogLibs;
      },
      9280: () => {
        __loadjs = (function () {
          var e = function () {},
            t = {},
            n = {},
            o = {};
          function i(e, t) {
            if (e) {
              var i = o[e];
              if (((n[e] = t), i))
                for (; i.length; ) i[0](e, t), i.splice(0, 1);
            }
          }
          function r(t, n) {
            t.call && (t = { success: t }),
              n.length ? (t.error || e)(n) : (t.success || e)(t);
          }
          function s(t, n, o, i) {
            var r,
              c,
              a = document,
              f = o.async,
              u = (o.numRetries || 0) + 1,
              l = o.before || e,
              d = t.replace(/[\?|#].*$/, ""),
              p = t.replace(/^(css|img)!/, "");
            (i = i || 0),
              /(^css!|\.css$)/.test(d)
                ? (((c = a.createElement("link")).rel = "stylesheet"),
                  (c.href = p),
                  (r = "hideFocus" in c) &&
                    c.relList &&
                    ((r = 0), (c.rel = "preload"), (c.as = "style")))
                : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)
                ? ((c = a.createElement("img")).src = p)
                : (((c = a.createElement("script")).src = t),
                  (c.async = void 0 === f || f)),
              !(c.onload =
                c.onerror =
                c.onbeforeload =
                  function (e) {
                    var a = e.type[0];
                    if (r)
                      try {
                        c.sheet.cssText.length || (a = "e");
                      } catch (e) {
                        18 != e.code && (a = "e");
                      }
                    if ("e" == a) {
                      if ((i += 1) < u) return s(t, n, o, i);
                    } else if ("preload" == c.rel && "style" == c.as)
                      return (c.rel = "stylesheet");
                    n(t, a, e.defaultPrevented);
                  }) !== l(t, c) && a.head.appendChild(c);
          }
          function c(e, n, o) {
            var c, a;
            if ((n && n.trim && (c = n), (a = (c ? o : n) || {}), c)) {
              if (c in t) throw "LoadJS";
              t[c] = !0;
            }
            function f(t, n) {
              !(function (e, t, n) {
                var o,
                  i,
                  r = (e = e.push ? e : [e]).length,
                  c = r,
                  a = [];
                for (
                  o = function (e, n, o) {
                    if (("e" == n && a.push(e), "b" == n)) {
                      if (!o) return;
                      a.push(e);
                    }
                    --r || t(a);
                  },
                    i = 0;
                  i < c;
                  i++
                )
                  s(e[i], o, n);
              })(
                e,
                function (e) {
                  r(a, e), t && r({ success: t, error: n }, e), i(c, e);
                },
                a
              );
            }
            if (a.returnPromise) return new Promise(f);
            f();
          }
          return (
            (c.ready = function (e, t) {
              return (
                (function (e, t) {
                  e = e.push ? e : [e];
                  var i,
                    r,
                    s,
                    c = [],
                    a = e.length,
                    f = a;
                  for (
                    i = function (e, n) {
                      n.length && c.push(e), --f || t(c);
                    };
                    a--;

                  )
                    (r = e[a]),
                      (s = n[r]) ? i(r, s) : (o[r] = o[r] || []).push(i);
                })(e, function (e) {
                  r(t, e);
                }),
                c
              );
            }),
            (c.done = function (e) {
              i(e, []);
            }),
            (c.reset = function () {
              (t = {}), (n = {}), (o = {});
            }),
            (c.isDefined = function (e) {
              return e in t;
            }),
            c
          );
        })();
      },
      8971: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        class o {
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
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              n[o - 1] = arguments[o];
            (this.events[e] || []).forEach((e) => {
              e(...n);
            });
          }
        }
      },
    },
    t = {};
  function n(o) {
    var i = t[o];
    if (void 0 !== i) return i.exports;
    var r = (t[o] = { exports: {} });
    return e[o](r, r.exports, n), r.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = "data-section-id";
      function t(t, n) {
        (this.container = (function (t) {
          if (!(t instanceof Element))
            throw new TypeError(
              "Theme Sections: Attempted to load section. The section container provided is not a DOM element."
            );
          if (null === t.getAttribute(e))
            throw new Error(
              "Theme Sections: The section container provided does not have an id assigned to the " +
                e +
                " attribute."
            );
          return t;
        })(t)),
          (this.id = t.getAttribute(e)),
          (this.extensions = []),
          Object.assign(
            this,
            (function (e) {
              if ((void 0 !== e && "object" != typeof e) || null === e)
                throw new TypeError(
                  "Theme Sections: The properties object provided is not a valid"
                );
              return e;
            })(n)
          ),
          this.onLoad();
      }
      (t.prototype = {
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
              for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                if (null != o)
                  for (var i in o)
                    Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
              }
              return t;
            },
            writable: !0,
            configurable: !0,
          });
      var o = "data-section-type",
        i = "data-section-id";
      (window.data = window.data || {}),
        (window.data.theme = window.data.theme || {}),
        (window.data.theme.sections = window.data.theme.sections || {});
      var r = (window.data.theme.sections.registered =
          window.data.theme.sections.registered || {}),
        s = (window.data.theme.sections.instances =
          window.data.theme.sections.instances || []);
      function c(e, t) {
        (e = u(e)),
          void 0 === t && (t = document.querySelectorAll("[" + o + "]")),
          (t = l(t)),
          e.forEach(function (e) {
            var n = r[e];
            void 0 !== n &&
              (t = t.filter(function (t) {
                return (
                  !(a(t).length > 0) &&
                  null !== t.getAttribute(o) &&
                  (t.getAttribute(o) !== e || (s.push(new n(t)), !1))
                );
              }));
          });
      }
      function a(e) {
        var t = [];
        if (NodeList.prototype.isPrototypeOf(e) || Array.isArray(e))
          var n = e[0];
        if (e instanceof Element || n instanceof Element)
          l(e).forEach(function (e) {
            t = t.concat(
              s.filter(function (t) {
                return t.container === e;
              })
            );
          });
        else if ("string" == typeof e || "string" == typeof n) {
          u(e).forEach(function (e) {
            t = t.concat(
              s.filter(function (t) {
                return t.type === e;
              })
            );
          });
        }
        return t;
      }
      function f(e) {
        for (var t, n = 0; n < s.length; n++)
          if (s[n].id === e) {
            t = s[n];
            break;
          }
        return t;
      }
      function u(e) {
        return (
          "*" === e
            ? (e = Object.keys(r))
            : "string" == typeof e
            ? (e = [e])
            : e.constructor === t
            ? (e = [e.prototype.type])
            : Array.isArray(e) &&
              e[0].constructor === t &&
              (e = e.map(function (e) {
                return e.prototype.type;
              })),
          (e = e.map(function (e) {
            return e.toLowerCase();
          }))
        );
      }
      function l(e) {
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
            n = e.target.querySelector("[" + i + '="' + t + '"]');
          null !== n && c(n.getAttribute(o), n);
        }),
        document.addEventListener("shopify:section:unload", function (e) {
          var t = e.detail.sectionId,
            n = e.target.querySelector("[" + i + '="' + t + '"]');
          "object" == typeof a(n)[0] &&
            a(n).forEach(function (e) {
              var t = s
                .map(function (e) {
                  return e.id;
                })
                .indexOf(e.id);
              s.splice(t, 1), e.onUnload();
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
      var d = n(4558).LE;
      !(function (e, n) {
        if ("string" != typeof e)
          throw new TypeError(
            "Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered"
          );
        if (void 0 !== r[e])
          throw new Error(
            'Theme Sections: A section of type "' +
              e +
              '" has already been registered. You cannot register the same section type twice'
          );
        function o(e) {
          t.call(this, e, n);
        }
        (o.constructor = t),
          (o.prototype = Object.create(t.prototype)),
          (o.prototype.type = e),
          (r[e] = o);
      })("collection-template", {
        onLoad: () => {
          loadAssets("collection.js")
            .then(() => d.Collection.init())
            .catch(console.error);
        },
      }),
        c("collection-template");
    })();
})();
