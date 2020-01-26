// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/webflow.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var i = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) {
      n.d(r, i, function (e) {
        return t[e];
      }.bind(null, i));
    }
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 100);
}([function (t, e) {
  t.exports = function (t) {
    return t && t.__esModule ? t : {
      default: t
    };
  };
}, function (t, e) {
  var n = Array.isArray;
  t.exports = n;
}, function (t, e, n) {
  "use strict";

  var r = n(16);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2Interactions = e.IX2Events = e.IX2ElementsReducer = e.IX2EngineConstants = e.IX2EngineItemTypes = e.IX2EngineEventTypes = e.IX2EngineActionTypes = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
  var i = r(n(30));
  e.IX2BrowserSupport = i;
  var o = r(n(83));
  e.IX2Easings = o;
  var a = r(n(85));
  e.IX2EasingUtils = a;
  var u = r(n(87));
  e.IX2EngineActionTypes = u;
  var c = r(n(88));
  e.IX2EngineEventTypes = c;
  var s = r(n(47));
  e.IX2EngineItemTypes = s;
  var f = r(n(48));
  e.IX2EngineConstants = f;
  var l = r(n(189));
  e.IX2ElementsReducer = l;
  var d = r(n(190));
  e.IX2Events = d;
  var E = r(n(191));
  e.IX2Interactions = E;
  var p = r(n(89));
  e.IX2VanillaPlugins = p;
  var v = r(n(193));
  e.IX2VanillaUtils = v;
}, function (t, e, n) {
  var r = n(65),
      i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      o = r || i || Function("return this")();
  t.exports = o;
}, function (t, e) {
  t.exports = function (t) {
    var e = _typeof(t);

    return null != t && ("object" == e || "function" == e);
  };
}, function (t, e, n) {
  var r = n(121),
      i = n(175),
      o = n(44),
      a = n(1),
      u = n(182);

  t.exports = function (t) {
    return "function" == typeof t ? t : null == t ? o : "object" == _typeof(t) ? a(t) ? i(t[0], t[1]) : r(t) : u(t);
  };
}, function (t, e, n) {
  var r = n(133),
      i = n(138);

  t.exports = function (t, e) {
    var n = i(t, e);
    return r(n) ? n : void 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    return null != t && "object" == _typeof(t);
  };
}, function (t, e, n) {
  var r = n(12),
      i = n(134),
      o = n(135),
      a = "[object Null]",
      u = "[object Undefined]",
      c = r ? r.toStringTag : void 0;

  t.exports = function (t) {
    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t);
  };
}, function (t, e, n) {
  var r = n(64),
      i = n(38);

  t.exports = function (t) {
    return null != t && i(t.length) && !r(t);
  };
}, function (t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  function r(e) {
    return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function r(t) {
      return n(t);
    } : t.exports = r = function r(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t);
    }, r(e);
  }

  t.exports = r;
}, function (t, e, n) {
  "use strict";

  var r = {},
      i = {},
      o = [],
      a = window.Webflow || [],
      u = window.jQuery,
      c = u(window),
      s = u(document),
      f = u.isFunction,
      l = r._ = n(103),
      d = r.tram = n(53) && u.tram,
      E = !1,
      p = !1;

  function v(t) {
    r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
      if (E) return void t.ready();
      if (l.contains(o, t.ready)) return;
      o.push(t.ready);
    }(t);
  }

  function _(t) {
    f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
      o = l.filter(o, function (e) {
        return e !== t.ready;
      });
    }(t);
  }

  d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function (t, e, n) {
    i[t] && _(i[t]);
    var r = i[t] = e(u, l, n) || {};
    return v(r), r;
  }, r.require = function (t) {
    return i[t];
  }, r.push = function (t) {
    E ? f(t) && t() : a.push(t);
  }, r.env = function (t) {
    var e = window.__wf_design,
        n = void 0 !== e;
    return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n;
  };
  var h,
      I = navigator.userAgent.toLowerCase(),
      T = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      g = r.env.chrome = /chrome/.test(I) && /Google/.test(navigator.vendor) && parseInt(I.match(/chrome\/(\d+)\./)[1], 10),
      O = r.env.ios = /(ipod|iphone|ipad)/.test(I);
  r.env.safari = /safari/.test(I) && !g && !O, T && s.on("touchstart mousedown", function (t) {
    h = t.target;
  }), r.validClick = T ? function (t) {
    return t === h || u.contains(t, h);
  } : function () {
    return !0;
  };
  var y,
      m = "resize.webflow orientationchange.webflow load.webflow";

  function A(t, e) {
    var n = [],
        r = {};
    return r.up = l.throttle(function (t) {
      l.each(n, function (e) {
        e(t);
      });
    }), t && e && t.on(e, r.up), r.on = function (t) {
      "function" == typeof t && (l.contains(n, t) || n.push(t));
    }, r.off = function (t) {
      n = arguments.length ? l.filter(n, function (e) {
        return e !== t;
      }) : [];
    }, r;
  }

  function S(t) {
    f(t) && t();
  }

  function R() {
    y && (y.reject(), c.off("load", y.resolve)), y = new u.Deferred(), c.on("load", y.resolve);
  }

  r.resize = A(c, m), r.scroll = A(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = A(), r.location = function (t) {
    window.location = t;
  }, r.env() && (r.location = function () {}), r.ready = function () {
    E = !0, p ? (p = !1, l.each(i, v)) : l.each(o, S), l.each(a, S), r.resize.up();
  }, r.load = function (t) {
    y.then(t);
  }, r.destroy = function (t) {
    t = t || {}, p = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (E = t.domready), l.each(i, _), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === y.state() && R();
  }, u(r.ready), R(), t.exports = window.Webflow = r;
}, function (t, e, n) {
  var r = n(3).Symbol;
  t.exports = r;
}, function (t, e, n) {
  var r = n(25),
      i = 1 / 0;

  t.exports = function (t) {
    if ("string" == typeof t || r(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -i ? "-0" : e;
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  };
  e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = E, e.removeFirst = p, e.insert = v, e.removeAt = _, e.replaceAt = h, e.getIn = I, e.set = T, e.setIn = g, e.update = O, e.updateIn = y, e.merge = m, e.mergeDeep = A, e.mergeIn = S, e.omit = R, e.addDefaults = N;
  /*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   */

  var i = "INVALID_ARGS";

  function o(t) {
    throw new Error(t);
  }

  function a(t) {
    var e = Object.keys(t);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
  }

  var u = {}.hasOwnProperty;

  function c(t) {
    if (Array.isArray(t)) return t.slice();

    for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
      var i = e[r];
      n[i] = t[i];
    }

    return n;
  }

  function s(t, e, n) {
    var r = n;
    null == r && o(i);

    for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), E = 3; E < l; E++) {
      d[E - 3] = arguments[E];
    }

    for (var p = 0; p < d.length; p++) {
      var v = d[p];

      if (null != v) {
        var _ = a(v);

        if (_.length) for (var h = 0; h <= _.length; h++) {
          var I = _[h];

          if (!t || void 0 === r[I]) {
            var T = v[I];
            e && f(r[I]) && f(T) && (T = s(t, e, r[I], T)), void 0 !== T && T !== r[I] && (u || (u = !0, r = c(r)), r[I] = T);
          }
        }
      }
    }

    return r;
  }

  function f(t) {
    var e = void 0 === t ? "undefined" : r(t);
    return null != t && ("object" === e || "function" === e);
  }

  function l(t, e) {
    return Array.isArray(e) ? t.concat(e) : t.concat([e]);
  }

  function d(t, e) {
    return Array.isArray(e) ? e.concat(t) : [e].concat(t);
  }

  function E(t) {
    return t.length ? t.slice(0, t.length - 1) : t;
  }

  function p(t) {
    return t.length ? t.slice(1) : t;
  }

  function v(t, e, n) {
    return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e));
  }

  function _(t, e) {
    return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
  }

  function h(t, e, n) {
    if (t[e] === n) return t;

    for (var r = t.length, i = Array(r), o = 0; o < r; o++) {
      i[o] = t[o];
    }

    return i[e] = n, i;
  }

  function I(t, e) {
    if (!Array.isArray(e) && o(i), null != t) {
      for (var n = t, r = 0; r < e.length; r++) {
        var a = e[r];
        if (void 0 === (n = null != n ? n[a] : void 0)) return n;
      }

      return n;
    }
  }

  function T(t, e, n) {
    var r = null == t ? "number" == typeof e ? [] : {} : t;
    if (r[e] === n) return r;
    var i = c(r);
    return i[e] = n, i;
  }

  function g(t, e, n) {
    return e.length ? function t(e, n, r, i) {
      var o = void 0,
          a = n[i];
      o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
      return T(e, a, o);
    }(t, e, n, 0) : n;
  }

  function O(t, e, n) {
    return T(t, e, n(null == t ? void 0 : t[e]));
  }

  function y(t, e, n) {
    return g(t, e, n(I(t, e)));
  }

  function m(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) {
      u[c - 6] = arguments[c];
    }

    return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o);
  }

  function A(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) {
      u[c - 6] = arguments[c];
    }

    return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o);
  }

  function S(t, e, n, r, i, o, a) {
    var u = I(t, e);
    null == u && (u = {});

    for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) {
      f[l - 7] = arguments[l];
    }

    return g(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a));
  }

  function R(t, e) {
    for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++) {
      if (u.call(t, n[i])) {
        r = !0;
        break;
      }
    }

    if (!r) return t;

    for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
      var f = c[s];
      n.indexOf(f) >= 0 || (o[f] = t[f]);
    }

    return o;
  }

  function N(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) {
      u[c - 6] = arguments[c];
    }

    return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o);
  }

  var b = {
    clone: c,
    addLast: l,
    addFirst: d,
    removeLast: E,
    removeFirst: p,
    insert: v,
    removeAt: _,
    replaceAt: h,
    getIn: I,
    set: T,
    setIn: g,
    update: O,
    updateIn: y,
    merge: m,
    mergeDeep: A,
    mergeIn: S,
    omit: R,
    addDefaults: N
  };
  e.default = b;
}, function (t, e) {
  t.exports = function (t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  };
}, function (t, e) {
  t.exports = function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) {
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
        r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n];
      }
    }
    return e.default = t, e;
  };
}, function (t, e, n) {
  var r = n(123),
      i = n(124),
      o = n(125),
      a = n(126),
      u = n(127);

  function c(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c;
}, function (t, e, n) {
  var r = n(31);

  t.exports = function (t, e) {
    for (var n = t.length; n--;) {
      if (r(t[n][0], e)) return n;
    }

    return -1;
  };
}, function (t, e, n) {
  var r = n(6)(Object, "create");
  t.exports = r;
}, function (t, e, n) {
  var r = n(147);

  t.exports = function (t, e) {
    var n = t.__data__;
    return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
  };
}, function (t, e, n) {
  var r = n(72),
      i = n(39),
      o = n(9);

  t.exports = function (t) {
    return o(t) ? r(t) : i(t);
  };
}, function (t, e, n) {
  var r = n(165),
      i = n(7),
      o = Object.prototype,
      a = o.hasOwnProperty,
      u = o.propertyIsEnumerable,
      c = r(function () {
    return arguments;
  }()) ? r : function (t) {
    return i(t) && a.call(t, "callee") && !u.call(t, "callee");
  };
  t.exports = c;
}, function (t, e, n) {
  var r = n(42);

  t.exports = function (t, e, n) {
    var i = null == t ? void 0 : r(t, e);
    return void 0 === i ? n : i;
  };
}, function (t, e, n) {
  var r = n(1),
      i = n(43),
      o = n(176),
      a = n(78);

  t.exports = function (t, e) {
    return r(t) ? t : i(t, e) ? [t] : o(a(t));
  };
}, function (t, e, n) {
  var r = n(8),
      i = n(7),
      o = "[object Symbol]";

  t.exports = function (t) {
    return "symbol" == _typeof(t) || i(t) && r(t) == o;
  };
}, function (t, e, n) {
  var r = n(15);

  t.exports = function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      }))), i.forEach(function (e) {
        r(t, e, n[e]);
      });
    }

    return t;
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "ActionTypes", function () {
    return o;
  }), n.d(e, "default", function () {
    return a;
  });
  var r = n(55),
      i = n(116),
      o = {
    INIT: "@@redux/INIT"
  };

  function a(t, e, n) {
    var u;

    if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
      if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
      return n(a)(t, e);
    }

    if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
    var c = t,
        s = e,
        f = [],
        l = f,
        d = !1;

    function E() {
      l === f && (l = f.slice());
    }

    function p() {
      return s;
    }

    function v(t) {
      if ("function" != typeof t) throw new Error("Expected listener to be a function.");
      var e = !0;
      return E(), l.push(t), function () {
        if (e) {
          e = !1, E();
          var n = l.indexOf(t);
          l.splice(n, 1);
        }
      };
    }

    function _(t) {
      if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
      if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (d) throw new Error("Reducers may not dispatch actions.");

      try {
        d = !0, s = c(s, t);
      } finally {
        d = !1;
      }

      for (var e = f = l, n = 0; n < e.length; n++) {
        e[n]();
      }

      return t;
    }

    return _({
      type: o.INIT
    }), (u = {
      dispatch: _,
      subscribe: v,
      getState: p,
      replaceReducer: function replaceReducer(t) {
        if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
        c = t, _({
          type: o.INIT
        });
      }
    })[i.default] = function () {
      var t,
          e = v;
      return (t = {
        subscribe: function subscribe(t) {
          if ("object" != _typeof(t)) throw new TypeError("Expected the observer to be an object.");

          function n() {
            t.next && t.next(p());
          }

          return n(), {
            unsubscribe: e(n)
          };
        }
      })[i.default] = function () {
        return this;
      }, t;
    }, u;
  }
}, function (t, e) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  t.exports = n;
}, function (t, e, n) {
  "use strict";

  function r() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
      e[n] = arguments[n];
    }

    if (0 === e.length) return function (t) {
      return t;
    };
    if (1 === e.length) return e[0];
    var r = e[e.length - 1],
        i = e.slice(0, -1);
    return function () {
      return i.reduceRight(function (t, e) {
        return e(t);
      }, r.apply(void 0, arguments));
    };
  }

  n.r(e), n.d(e, "default", function () {
    return r;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
  var i = r(n(61)),
      o = "undefined" != typeof window;
  e.IS_BROWSER_ENV = o;

  var a = function a(t, e) {
    return o ? t() : e;
  };

  e.withBrowser = a;
  var u = a(function () {
    return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
      return t in Element.prototype;
    });
  });
  e.ELEMENT_MATCHES = u;
  var c = a(function () {
    var t = document.createElement("i"),
        e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];

    try {
      for (var n = e.length, r = 0; r < n; r++) {
        var i = e[r];
        if (t.style.display = i, t.style.display === i) return i;
      }

      return "";
    } catch (t) {
      return "";
    }
  }, "flex");
  e.FLEX_PREFIXED = c;
  var s = a(function () {
    var t = document.createElement("i");
    if (null == t.style.transform) for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
      var i = e[r] + "Transform";
      if (void 0 !== t.style[i]) return i;
    }
    return "transform";
  }, "transform");
  e.TRANSFORM_PREFIXED = s;
  var f = s.split("transform")[0],
      l = f ? f + "TransformStyle" : "transformStyle";
  e.TRANSFORM_STYLE_PREFIXED = l;
}, function (t, e) {
  t.exports = function (t, e) {
    return t === e || t != t && e != e;
  };
}, function (t, e, n) {
  var r = n(6)(n(3), "Map");
  t.exports = r;
}, function (t, e, n) {
  var r = n(139),
      i = n(146),
      o = n(148),
      a = n(149),
      u = n(150);

  function c(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c;
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = e.length, i = t.length; ++n < r;) {
      t[i + n] = e[n];
    }

    return t;
  };
}, function (t, e, n) {
  (function (t) {
    var r = n(3),
        i = n(166),
        o = e && !e.nodeType && e,
        a = o && "object" == _typeof(t) && t && !t.nodeType && t,
        u = a && a.exports === o ? r.Buffer : void 0,
        c = (u ? u.isBuffer : void 0) || i;
    t.exports = c;
  }).call(this, n(73)(t));
}, function (t, e) {
  var n = 9007199254740991,
      r = /^(?:0|[1-9]\d*)$/;

  t.exports = function (t, e) {
    var i = _typeof(t);

    return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e;
  };
}, function (t, e, n) {
  var r = n(167),
      i = n(168),
      o = n(169),
      a = o && o.isTypedArray,
      u = a ? i(a) : r;
  t.exports = u;
}, function (t, e) {
  var n = 9007199254740991;

  t.exports = function (t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
  };
}, function (t, e, n) {
  var r = n(40),
      i = n(170),
      o = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    if (!r(t)) return i(t);
    var e = [];

    for (var n in Object(t)) {
      o.call(t, n) && "constructor" != n && e.push(n);
    }

    return e;
  };
}, function (t, e) {
  var n = Object.prototype;

  t.exports = function (t) {
    var e = t && t.constructor;
    return t === ("function" == typeof e && e.prototype || n);
  };
}, function (t, e, n) {
  var r = n(171),
      i = n(32),
      o = n(172),
      a = n(173),
      u = n(75),
      c = n(8),
      s = n(66),
      f = s(r),
      l = s(i),
      d = s(o),
      E = s(a),
      p = s(u),
      v = c;
  (r && "[object DataView]" != v(new r(new ArrayBuffer(1))) || i && "[object Map]" != v(new i()) || o && "[object Promise]" != v(o.resolve()) || a && "[object Set]" != v(new a()) || u && "[object WeakMap]" != v(new u())) && (v = function v(t) {
    var e = c(t),
        n = "[object Object]" == e ? t.constructor : void 0,
        r = n ? s(n) : "";
    if (r) switch (r) {
      case f:
        return "[object DataView]";

      case l:
        return "[object Map]";

      case d:
        return "[object Promise]";

      case E:
        return "[object Set]";

      case p:
        return "[object WeakMap]";
    }
    return e;
  }), t.exports = v;
}, function (t, e, n) {
  var r = n(24),
      i = n(13);

  t.exports = function (t, e) {
    for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) {
      t = t[i(e[n++])];
    }

    return n && n == o ? t : void 0;
  };
}, function (t, e, n) {
  var r = n(1),
      i = n(25),
      o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;

  t.exports = function (t, e) {
    if (r(t)) return !1;

    var n = _typeof(t);

    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e);
  };
}, function (t, e) {
  t.exports = function (t) {
    return t;
  };
}, function (t, e, n) {
  var r = n(185);

  t.exports = function (t) {
    var e = r(t),
        n = e % 1;
    return e == e ? n ? e - n : e : 0;
  };
}, function (t, e, n) {
  var r = n(4),
      i = n(25),
      o = NaN,
      a = /^\s+|\s+$/g,
      u = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      s = /^0o[0-7]+$/i,
      f = parseInt;

  t.exports = function (t) {
    if ("number" == typeof t) return t;
    if (i(t)) return o;

    if (r(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = r(e) ? e + "" : e;
    }

    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(a, "");
    var n = c.test(t);
    return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t;
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.PLUGIN_LOTTIE = e.PLUGIN_LOTTIE_EFFECT = e.JELLO_EFFECT = e.RUBBER_BAND_EFFECT = e.FLIP_RIGHT_TO_LEFT_EFFECT = e.FLIP_LEFT_TO_RIGHT_EFFECT = e.BOUNCE_EFFECT = e.BLINK_EFFECT = e.DROP_EFFECT = e.PULSE_EFFECT = e.JIGGLE_EFFECT = e.FLIP_EFFECT = e.POP_EFFECT = e.FLY_EFFECT = e.SPIN_EFFECT = e.SHRINK_BIG_EFFECT = e.SHRINK_EFFECT = e.GROW_BIG_EFFECT = e.GROW_EFFECT = e.BLUR_EFFECT = e.SLIDE_EFFECT = e.FADE_EFFECT = e.OBJECT_VALUE = e.GENERAL_LOOP = e.GENERAL_STOP_ACTION = e.GENERAL_START_ACTION = e.GENERAL_CONTINUOUS_ACTION = e.GENERAL_DISPLAY = e.GENERAL_COMBO_CLASS = e.STYLE_TEXT_COLOR = e.STYLE_BORDER = e.STYLE_BACKGROUND_COLOR = e.STYLE_FILTER = e.STYLE_BOX_SHADOW = e.STYLE_SIZE = e.STYLE_OPACITY = e.TRANSFORM_SKEW = e.TRANSFORM_ROTATE = e.TRANSFORM_SCALE = e.TRANSFORM_MOVE = void 0;
  e.TRANSFORM_MOVE = "TRANSFORM_MOVE";
  e.TRANSFORM_SCALE = "TRANSFORM_SCALE";
  e.TRANSFORM_ROTATE = "TRANSFORM_ROTATE";
  e.TRANSFORM_SKEW = "TRANSFORM_SKEW";
  e.STYLE_OPACITY = "STYLE_OPACITY";
  e.STYLE_SIZE = "STYLE_SIZE";
  e.STYLE_BOX_SHADOW = "STYLE_BOX_SHADOW";
  e.STYLE_FILTER = "STYLE_FILTER";
  e.STYLE_BACKGROUND_COLOR = "STYLE_BACKGROUND_COLOR";
  e.STYLE_BORDER = "STYLE_BORDER";
  e.STYLE_TEXT_COLOR = "STYLE_TEXT_COLOR";
  e.GENERAL_COMBO_CLASS = "GENERAL_COMBO_CLASS";
  e.GENERAL_DISPLAY = "GENERAL_DISPLAY";
  e.GENERAL_CONTINUOUS_ACTION = "GENERAL_CONTINUOUS_ACTION";
  e.GENERAL_START_ACTION = "GENERAL_START_ACTION";
  e.GENERAL_STOP_ACTION = "GENERAL_STOP_ACTION";
  e.GENERAL_LOOP = "GENERAL_LOOP";
  e.OBJECT_VALUE = "OBJECT_VALUE";
  e.FADE_EFFECT = "FADE_EFFECT";
  e.SLIDE_EFFECT = "SLIDE_EFFECT";
  e.BLUR_EFFECT = "BLUR_EFFECT";
  e.GROW_EFFECT = "GROW_EFFECT";
  e.GROW_BIG_EFFECT = "GROW_BIG_EFFECT";
  e.SHRINK_EFFECT = "SHRINK_EFFECT";
  e.SHRINK_BIG_EFFECT = "SHRINK_BIG_EFFECT";
  e.SPIN_EFFECT = "SPIN_EFFECT";
  e.FLY_EFFECT = "FLY_EFFECT";
  e.POP_EFFECT = "POP_EFFECT";
  e.FLIP_EFFECT = "FLIP_EFFECT";
  e.JIGGLE_EFFECT = "JIGGLE_EFFECT";
  e.PULSE_EFFECT = "PULSE_EFFECT";
  e.DROP_EFFECT = "DROP_EFFECT";
  e.BLINK_EFFECT = "BLINK_EFFECT";
  e.BOUNCE_EFFECT = "BOUNCE_EFFECT";
  e.FLIP_LEFT_TO_RIGHT_EFFECT = "FLIP_LEFT_TO_RIGHT_EFFECT";
  e.FLIP_RIGHT_TO_LEFT_EFFECT = "FLIP_RIGHT_TO_LEFT_EFFECT";
  e.RUBBER_BAND_EFFECT = "RUBBER_BAND_EFFECT";
  e.JELLO_EFFECT = "JELLO_EFFECT";
  e.PLUGIN_LOTTIE_EFFECT = "PLUGIN_LOTTIE_EFFECT";
  e.PLUGIN_LOTTIE = "PLUGIN_LOTTIE";
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
  e.IX2_ID_DELIMITER = "|";
  e.WF_PAGE = "data-wf-page";
  e.W_MOD_JS = "w-mod-js";
  e.W_MOD_IX = "w-mod-ix";
  e.BOUNDARY_SELECTOR = ".w-dyn-item";
  e.CONFIG_X_VALUE = "xValue";
  e.CONFIG_Y_VALUE = "yValue";
  e.CONFIG_Z_VALUE = "zValue";
  e.CONFIG_VALUE = "value";
  e.CONFIG_X_UNIT = "xUnit";
  e.CONFIG_Y_UNIT = "yUnit";
  e.CONFIG_Z_UNIT = "zUnit";
  e.CONFIG_UNIT = "unit";
  e.TRANSFORM = "transform";
  e.TRANSLATE_X = "translateX";
  e.TRANSLATE_Y = "translateY";
  e.TRANSLATE_Z = "translateZ";
  e.TRANSLATE_3D = "translate3d";
  e.SCALE_X = "scaleX";
  e.SCALE_Y = "scaleY";
  e.SCALE_Z = "scaleZ";
  e.SCALE_3D = "scale3d";
  e.ROTATE_X = "rotateX";
  e.ROTATE_Y = "rotateY";
  e.ROTATE_Z = "rotateZ";
  e.SKEW = "skew";
  e.SKEW_X = "skewX";
  e.SKEW_Y = "skewY";
  e.OPACITY = "opacity";
  e.FILTER = "filter";
  e.WIDTH = "width";
  e.HEIGHT = "height";
  e.BACKGROUND_COLOR = "backgroundColor";
  e.BACKGROUND = "background";
  e.BORDER_COLOR = "borderColor";
  e.COLOR = "color";
  e.DISPLAY = "display";
  e.FLEX = "flex";
  e.WILL_CHANGE = "willChange";
  e.AUTO = "AUTO";
  e.COMMA_DELIMITER = ",";
  e.COLON_DELIMITER = ":";
  e.BAR_DELIMITER = "|";
  e.CHILDREN = "CHILDREN";
  e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
  e.SIBLINGS = "SIBLINGS";
  e.PARENT = "PARENT";
  e.PRESERVE_3D = "preserve-3d";
  e.HTML_ELEMENT = "HTML_ELEMENT";
  e.PLAIN_OBJECT = "PLAIN_OBJECT";
  e.ABSTRACT_NODE = "ABSTRACT_NODE";
  e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
  e.RENDER_GENERAL = "RENDER_GENERAL";
  e.RENDER_STYLE = "RENDER_STYLE";
  e.RENDER_PLUGIN = "RENDER_PLUGIN";
}, function (t, e, n) {
  "use strict";

  var r = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
  var i = r(n(26)),
      o = n(2),
      a = o.IX2EngineActionTypes,
      u = a.IX2_RAW_DATA_IMPORTED,
      c = a.IX2_SESSION_INITIALIZED,
      s = a.IX2_SESSION_STARTED,
      f = a.IX2_SESSION_STOPPED,
      l = a.IX2_PREVIEW_REQUESTED,
      d = a.IX2_PLAYBACK_REQUESTED,
      E = a.IX2_STOP_REQUESTED,
      p = a.IX2_CLEAR_REQUESTED,
      v = a.IX2_EVENT_LISTENER_ADDED,
      _ = a.IX2_TEST_FRAME_RENDERED,
      h = a.IX2_EVENT_STATE_CHANGED,
      I = a.IX2_ANIMATION_FRAME_CHANGED,
      T = a.IX2_PARAMETER_CHANGED,
      g = a.IX2_INSTANCE_ADDED,
      O = a.IX2_INSTANCE_STARTED,
      y = a.IX2_INSTANCE_REMOVED,
      m = a.IX2_ELEMENT_STATE_CHANGED,
      A = a.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      S = a.IX2_VIEWPORT_WIDTH_CHANGED,
      R = a.IX2_MEDIA_QUERIES_DEFINED,
      N = o.IX2EngineItemTypes.GENERAL_START_ACTION,
      b = o.IX2VanillaUtils.reifyState;

  e.rawDataImported = function (t) {
    return {
      type: u,
      payload: (0, i.default)({}, b(t))
    };
  };

  e.sessionInitialized = function (t) {
    var e = t.hasBoundaryNodes;
    return {
      type: c,
      payload: {
        hasBoundaryNodes: e
      }
    };
  };

  e.sessionStarted = function () {
    return {
      type: s,
      payload: {}
    };
  };

  e.sessionStopped = function () {
    return {
      type: f,
      payload: {}
    };
  };

  e.previewRequested = function (t) {
    var e = t.rawData,
        n = t.defer;
    return {
      type: l,
      payload: {
        defer: n,
        rawData: e
      }
    };
  };

  e.playbackRequested = function (t) {
    var e = t.actionTypeId,
        n = void 0 === e ? N : e,
        r = t.actionListId,
        i = t.actionItemId,
        o = t.eventId,
        a = t.allowEvents,
        u = t.immediate,
        c = t.testManual,
        s = t.verbose,
        f = t.rawData;
    return {
      type: d,
      payload: {
        actionTypeId: n,
        actionListId: r,
        actionItemId: i,
        testManual: c,
        eventId: o,
        allowEvents: a,
        immediate: u,
        verbose: s,
        rawData: f
      }
    };
  };

  e.stopRequested = function (t) {
    return {
      type: E,
      payload: {
        actionListId: t
      }
    };
  };

  e.clearRequested = function () {
    return {
      type: p,
      payload: {}
    };
  };

  e.eventListenerAdded = function (t, e) {
    return {
      type: v,
      payload: {
        target: t,
        listenerParams: e
      }
    };
  };

  e.testFrameRendered = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return {
      type: _,
      payload: {
        step: t
      }
    };
  };

  e.eventStateChanged = function (t, e) {
    return {
      type: h,
      payload: {
        stateKey: t,
        newState: e
      }
    };
  };

  e.animationFrameChanged = function (t, e) {
    return {
      type: I,
      payload: {
        now: t,
        parameters: e
      }
    };
  };

  e.parameterChanged = function (t, e) {
    return {
      type: T,
      payload: {
        key: t,
        value: e
      }
    };
  };

  e.instanceAdded = function (t) {
    return {
      type: g,
      payload: (0, i.default)({}, t)
    };
  };

  e.instanceStarted = function (t, e) {
    return {
      type: O,
      payload: {
        instanceId: t,
        time: e
      }
    };
  };

  e.instanceRemoved = function (t) {
    return {
      type: y,
      payload: {
        instanceId: t
      }
    };
  };

  e.elementStateChanged = function (t, e, n, r) {
    return {
      type: m,
      payload: {
        elementId: t,
        actionTypeId: e,
        current: n,
        actionItem: r
      }
    };
  };

  e.actionListPlaybackChanged = function (t) {
    var e = t.actionListId,
        n = t.isPlaying;
    return {
      type: A,
      payload: {
        actionListId: e,
        isPlaying: n
      }
    };
  };

  e.viewportWidthChanged = function (t) {
    var e = t.width,
        n = t.mediaQueries;
    return {
      type: S,
      payload: {
        width: e,
        mediaQueries: n
      }
    };
  };

  e.mediaQueriesDefined = function () {
    return {
      type: R,
      payload: {}
    };
  };
}, function (t, e, n) {
  var r = n(97),
      i = n(51);

  function o(t, e) {
    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0;
  }

  o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o;
}, function (t, e) {
  t.exports = function () {};
}, function (t, e, n) {
  var r = n(97),
      i = n(51),
      o = 4294967295;

  function a(t) {
    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = [];
  }

  a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a;
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(10));

  window.tram = function (t) {
    function e(t, e) {
      return new G.Bare().init(t, e);
    }

    function n(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }

    function i(t) {
      var e = parseInt(t.slice(1), 16);
      return [e >> 16 & 255, e >> 8 & 255, 255 & e];
    }

    function o(t, e, n) {
      return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1);
    }

    function a() {}

    function u(t, e, n) {
      s("Units do not match [" + t + "]: " + e + ", " + n);
    }

    function c(t, e, n) {
      if (void 0 !== e && (n = e), void 0 === t) return n;
      var r = n;
      return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n;
    }

    function s(t) {
      k.debug && window && window.console.warn(t);
    }

    var f = function (t, e, n) {
      function i(t) {
        return "object" == (0, r.default)(t);
      }

      function o(t) {
        return "function" == typeof t;
      }

      function a() {}

      return function r(u, c) {
        function s() {
          var t = new f();
          return o(t.init) && t.init.apply(t, arguments), t;
        }

        function f() {}

        c === n && (c = u, u = Object), s.Bare = f;
        var l,
            d = a[t] = u[t],
            E = f[t] = s[t] = new a();
        return E.constructor = s, s.mixin = function (e) {
          return f[t] = s[t] = r(s, e)[t], s;
        }, s.open = function (t) {
          if (l = {}, o(t) ? l = t.call(s, E, d, s, u) : i(t) && (l = t), i(l)) for (var n in l) {
            e.call(l, n) && (E[n] = l[n]);
          }
          return o(E.init) || (E.init = u), s;
        }, s.open(c);
      };
    }("prototype", {}.hasOwnProperty),
        l = {
      ease: ["ease", function (t, e, n, r) {
        var i = (t /= r) * t,
            o = i * t;
        return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t);
      }],
      "ease-in": ["ease-in", function (t, e, n, r) {
        var i = (t /= r) * t,
            o = i * t;
        return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
      }],
      "ease-out": ["ease-out", function (t, e, n, r) {
        var i = (t /= r) * t,
            o = i * t;
        return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t);
      }],
      "ease-in-out": ["ease-in-out", function (t, e, n, r) {
        var i = (t /= r) * t,
            o = i * t;
        return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
      }],
      linear: ["linear", function (t, e, n, r) {
        return n * t / r + e;
      }],
      "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, r) {
        return n * (t /= r) * t + e;
      }],
      "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, r) {
        return -n * (t /= r) * (t - 2) + e;
      }],
      "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e;
      }],
      "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, r) {
        return n * (t /= r) * t * t + e;
      }],
      "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, r) {
        return n * ((t = t / r - 1) * t * t + 1) + e;
      }],
      "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e;
      }],
      "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, r) {
        return n * (t /= r) * t * t * t + e;
      }],
      "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, r) {
        return -n * ((t = t / r - 1) * t * t * t - 1) + e;
      }],
      "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e;
      }],
      "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, r) {
        return n * (t /= r) * t * t * t * t + e;
      }],
      "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, r) {
        return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
      }],
      "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e;
      }],
      "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, r) {
        return -n * Math.cos(t / r * (Math.PI / 2)) + n + e;
      }],
      "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, r) {
        return n * Math.sin(t / r * (Math.PI / 2)) + e;
      }],
      "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, r) {
        return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e;
      }],
      "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, r) {
        return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
      }],
      "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, r) {
        return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e;
      }],
      "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, r) {
        return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e;
      }],
      "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, r) {
        return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
      }],
      "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, r) {
        return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
      }],
      "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, r) {
        return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
      }],
      "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, r, i) {
        return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e;
      }],
      "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, r, i) {
        return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e;
      }],
      "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, r, i) {
        return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e;
      }]
    },
        d = {
      "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
      "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
      "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
    },
        E = document,
        p = window,
        v = "bkwld-tram",
        _ = /[\-\.0-9]/g,
        h = /[A-Z]/,
        I = "number",
        T = /^(rgb|#)/,
        g = /(em|cm|mm|in|pt|pc|px)$/,
        O = /(em|cm|mm|in|pt|pc|px|%)$/,
        y = /(deg|rad|turn)$/,
        m = "unitless",
        A = /(all|none) 0s ease 0s/,
        S = /^(width|height)$/,
        R = " ",
        N = E.createElement("a"),
        b = ["Webkit", "Moz", "O", "ms"],
        C = ["-webkit-", "-moz-", "-o-", "-ms-"],
        L = function L(t) {
      if (t in N.style) return {
        dom: t,
        css: t
      };
      var e,
          n,
          r = "",
          i = t.split("-");

      for (e = 0; e < i.length; e++) {
        r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
      }

      for (e = 0; e < b.length; e++) {
        if ((n = b[e] + r) in N.style) return {
          dom: n,
          css: C[e] + t
        };
      }
    },
        w = e.support = {
      bind: Function.prototype.bind,
      transform: L("transform"),
      transition: L("transition"),
      backface: L("backface-visibility"),
      timing: L("transition-timing-function")
    };

    if (w.transition) {
      var P = w.timing.dom;
      if (N.style[P] = l["ease-in-back"][0], !N.style[P]) for (var D in d) {
        l[D][0] = d[D];
      }
    }

    var x = e.frame = function () {
      var t = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
      return t && w.bind ? t.bind(p) : function (t) {
        p.setTimeout(t, 16);
      };
    }(),
        M = e.now = function () {
      var t = p.performance,
          e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
      return e && w.bind ? e.bind(t) : Date.now || function () {
        return +new Date();
      };
    }(),
        F = f(function (e) {
      function i(t, e) {
        var n = function (t) {
          for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
            var i = t[e];
            i && r.push(i);
          }

          return r;
        }(("" + t).split(R)),
            r = n[0];

        e = e || {};
        var i = Q[r];
        if (!i) return s("Unsupported property: " + r);

        if (!e.weak || !this.props[r]) {
          var o = i[0],
              a = this.props[r];
          return a || (a = this.props[r] = new o.Bare()), a.init(this.$el, n, i, e), a;
        }
      }

      function o(t, e, n) {
        if (t) {
          var o = (0, r.default)(t);
          if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new W({
            duration: t,
            context: this,
            complete: a
          }), void (this.active = !0);

          if ("string" == o && e) {
            switch (t) {
              case "hide":
                f.call(this);
                break;

              case "stop":
                u.call(this);
                break;

              case "redraw":
                l.call(this);
                break;

              default:
                i.call(this, t, n && n[1]);
            }

            return a.call(this);
          }

          if ("function" == o) return void t.call(this, this);

          if ("object" == o) {
            var s = 0;
            E.call(this, t, function (t, e) {
              t.span > s && (s = t.span), t.stop(), t.animate(e);
            }, function (t) {
              "wait" in t && (s = c(t.wait, 0));
            }), d.call(this), s > 0 && (this.timer = new W({
              duration: s,
              context: this
            }), this.active = !0, e && (this.timer.complete = a));
            var p = this,
                v = !1,
                _ = {};
            x(function () {
              E.call(p, t, function (t) {
                t.active && (v = !0, _[t.name] = t.nextStyle);
              }), v && p.$el.css(_);
            });
          }
        }
      }

      function a() {
        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
          var t = this.queue.shift();
          o.call(this, t.options, !0, t.args);
        }
      }

      function u(t) {
        var e;
        this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, E.call(this, e, p), d.call(this);
      }

      function f() {
        u.call(this), this.el.style.display = "none";
      }

      function l() {
        this.el.offsetHeight;
      }

      function d() {
        var t,
            e,
            n = [];

        for (t in this.upstream && n.push(this.upstream), this.props) {
          (e = this.props[t]).active && n.push(e.string);
        }

        n = n.join(","), this.style !== n && (this.style = n, this.el.style[w.transition.dom] = n);
      }

      function E(t, e, r) {
        var o,
            a,
            u,
            c,
            s = e !== p,
            f = {};

        for (o in t) {
          u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (h.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
        }

        for (o in f) {
          if (u = f[o], !(a = this.props[o])) {
            if (!s) continue;
            a = i.call(this, o);
          }

          e.call(this, a, u);
        }

        r && c && r.call(this, c);
      }

      function p(t) {
        t.stop();
      }

      function _(t, e) {
        t.set(e);
      }

      function I(t) {
        this.$el.css(t);
      }

      function T(t, n) {
        e[t] = function () {
          return this.children ? function (t, e) {
            var n,
                r = this.children.length;

            for (n = 0; r > n; n++) {
              t.apply(this.children[n], e);
            }

            return this;
          }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this);
        };
      }

      e.init = function (e) {
        if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, k.keepInherited && !k.fallback) {
          var n = K(this.el, "transition");
          n && !A.test(n) && (this.upstream = n);
        }

        w.backface && k.hideBackface && Y(this.el, w.backface.css, "hidden");
      }, T("add", i), T("start", o), T("wait", function (t) {
        t = c(t, 0), this.active ? this.queue.push({
          options: t
        }) : (this.timer = new W({
          duration: t,
          context: this,
          complete: a
        }), this.active = !0);
      }), T("then", function (t) {
        return this.active ? (this.queue.push({
          options: t,
          args: arguments
        }), void (this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().");
      }), T("next", a), T("stop", u), T("set", function (t) {
        u.call(this, t), E.call(this, t, _, I);
      }), T("show", function (t) {
        "string" != typeof t && (t = "block"), this.el.style.display = t;
      }), T("hide", f), T("redraw", l), T("destroy", function () {
        u.call(this), t.removeData(this.el, v), this.$el = this.el = null;
      });
    }),
        G = f(F, function (e) {
      function n(e, n) {
        var r = t.data(e, v) || t.data(e, v, new F.Bare());
        return r.el || r.init(e), n ? r.start(n) : r;
      }

      e.init = function (e, r) {
        var i = t(e);
        if (!i.length) return this;
        if (1 === i.length) return n(i[0], r);
        var o = [];
        return i.each(function (t, e) {
          o.push(n(e, r));
        }), this.children = o, this;
      };
    }),
        j = f(function (t) {
      function e() {
        var t = this.get();
        this.update("auto");
        var e = this.get();
        return this.update(t), e;
      }

      function n(t) {
        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
        return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
      }

      var i = 500,
          a = "ease",
          u = 0;
      t.init = function (t, e, n, r) {
        this.$el = t, this.el = t[0];
        var o = e[0];
        n[2] && (o = n[2]), z[o] && (o = z[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function (t, e, n) {
          return void 0 !== e && (n = e), t in l ? t : n;
        }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = S.test(this.name), this.unit = r.unit || this.unit || k.defaultUnit, this.angle = r.angle || this.angle || k.defaultAngle, k.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + R + this.duration + "ms" + ("ease" != this.ease ? R + l[this.ease][0] : "") + (this.delay ? R + this.delay + "ms" : ""));
      }, t.set = function (t) {
        t = this.convert(t, this.type), this.update(t), this.redraw();
      }, t.transition = function (t) {
        this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t;
      }, t.fallback = function (t) {
        var n = this.el.style[this.name] || this.convert(this.get(), this.type);
        t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new B({
          from: n,
          to: t,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          update: this.update,
          context: this
        });
      }, t.get = function () {
        return K(this.el, this.name);
      }, t.update = function (t) {
        Y(this.el, this.name, t);
      }, t.stop = function () {
        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Y(this.el, this.name, this.get()));
        var t = this.tween;
        t && t.context && t.destroy();
      }, t.convert = function (t, e) {
        if ("auto" == t && this.auto) return t;
        var i,
            o = "number" == typeof t,
            a = "string" == typeof t;

        switch (e) {
          case I:
            if (o) return t;
            if (a && "" === t.replace(_, "")) return +t;
            i = "number(unitless)";
            break;

          case T:
            if (a) {
              if ("" === t && this.original) return this.original;
              if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t);
            }

            i = "hex or rgb string";
            break;

          case g:
            if (o) return t + this.unit;
            if (a && e.test(t)) return t;
            i = "number(px) or string(unit)";
            break;

          case O:
            if (o) return t + this.unit;
            if (a && e.test(t)) return t;
            i = "number(px) or string(unit or %)";
            break;

          case y:
            if (o) return t + this.angle;
            if (a && e.test(t)) return t;
            i = "number(deg) or string(angle)";
            break;

          case m:
            if (o) return t;
            if (a && O.test(t)) return t;
            i = "number(unitless) or string(unit or %)";
        }

        return function (t, e) {
          s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e);
        }(i, t), t;
      }, t.redraw = function () {
        this.el.offsetHeight;
      };
    }),
        V = f(j, function (t, e) {
      t.init = function () {
        e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), T));
      };
    }),
        X = f(j, function (t, e) {
      t.init = function () {
        e.init.apply(this, arguments), this.animate = this.fallback;
      }, t.get = function () {
        return this.$el[this.name]();
      }, t.update = function (t) {
        this.$el[this.name](t);
      };
    }),
        U = f(j, function (t, e) {
      function n(t, e) {
        var n, r, i, o, a;

        for (n in t) {
          i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i);
        }
      }

      t.init = function () {
        e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && k.perspective && (this.current.perspective = k.perspective, Y(this.el, this.name, this.style(this.current)), this.redraw()));
      }, t.set = function (t) {
        n.call(this, t, function (t, e) {
          this.current[t] = e;
        }), Y(this.el, this.name, this.style(this.current)), this.redraw();
      }, t.transition = function (t) {
        var e = this.values(t);
        this.tween = new H({
          current: this.current,
          values: e,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease
        });
        var n,
            r = {};

        for (n in this.current) {
          r[n] = n in e ? e[n] : this.current[n];
        }

        this.active = !0, this.nextStyle = this.style(r);
      }, t.fallback = function (t) {
        var e = this.values(t);
        this.tween = new H({
          current: this.current,
          values: e,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          update: this.update,
          context: this
        });
      }, t.update = function () {
        Y(this.el, this.name, this.style(this.current));
      }, t.style = function (t) {
        var e,
            n = "";

        for (e in t) {
          n += e + "(" + t[e] + ") ";
        }

        return n;
      }, t.values = function (t) {
        var e,
            r = {};
        return n.call(this, t, function (t, n, i) {
          r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i));
        }), r;
      };
    }),
        B = f(function (e) {
      function n() {
        var t,
            e,
            r,
            i = c.length;
        if (i) for (x(n), e = M(), t = i; t--;) {
          (r = c[t]) && r.render(e);
        }
      }

      var r = {
        ease: l.ease[1],
        from: 0,
        to: 1
      };
      e.init = function (t) {
        this.duration = t.duration || 0, this.delay = t.delay || 0;
        var e = t.ease || r.ease;
        l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
        var n = t.from,
            i = t.to;
        void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play();
      }, e.play = function () {
        var t;
        this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && x(n));
      }, e.stop = function () {
        var e, n, r;
        this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))));
      }, e.render = function (t) {
        var e,
            n = t - this.start;

        if (this.delay) {
          if (n <= this.delay) return;
          n -= this.delay;
        }

        if (n < this.duration) {
          var r = this.ease(n, 0, 1, this.duration);
          return e = this.startRGB ? function (t, e, n) {
            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]));
          }(this.startRGB, this.endRGB, r) : function (t) {
            return Math.round(t * s) / s;
          }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value);
        }

        e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
      }, e.format = function (t, e) {
        if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void (this.change = 1);

        if (!this.unit) {
          var n = e.replace(_, "");
          n !== t.replace(_, "") && u("tween", e, t), this.unit = n;
        }

        e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e;
      }, e.destroy = function () {
        this.stop(), this.context = null, this.ease = this.update = this.complete = a;
      };
      var c = [],
          s = 1e3;
    }),
        W = f(B, function (t) {
      t.init = function (t) {
        this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play();
      }, t.render = function (t) {
        t - this.start < this.duration || (this.complete.call(this.context), this.destroy());
      };
    }),
        H = f(B, function (t, e) {
      t.init = function (t) {
        var e, n;

        for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) {
          n = t.values[e], this.current[e] !== n && this.tweens.push(new B({
            name: e,
            from: this.current[e],
            to: n,
            duration: t.duration,
            delay: t.delay,
            ease: t.ease,
            autoplay: !1
          }));
        }

        this.play();
      }, t.render = function (t) {
        var e,
            n,
            r = !1;

        for (e = this.tweens.length; e--;) {
          (n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
        }

        return r ? void (this.update && this.update.call(this.context)) : this.destroy();
      }, t.destroy = function () {
        if (e.destroy.call(this), this.tweens) {
          var t;

          for (t = this.tweens.length; t--;) {
            this.tweens[t].destroy();
          }

          this.tweens = null, this.current = null;
        }
      };
    }),
        k = e.config = {
      debug: !1,
      defaultUnit: "px",
      defaultAngle: "deg",
      keepInherited: !1,
      hideBackface: !1,
      perspective: "",
      fallback: !w.transition,
      agentTests: []
    };

    e.fallback = function (t) {
      if (!w.transition) return k.fallback = !0;
      k.agentTests.push("(" + t + ")");
      var e = new RegExp(k.agentTests.join("|"), "i");
      k.fallback = e.test(navigator.userAgent);
    }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
      return new B(t);
    }, e.delay = function (t, e, n) {
      return new W({
        complete: e,
        duration: t,
        context: n
      });
    }, t.fn.tram = function (t) {
      return e.call(null, this, t);
    };
    var Y = t.style,
        K = t.css,
        z = {
      transform: w.transform && w.transform.css
    },
        Q = {
      color: [V, T],
      background: [V, T, "background-color"],
      "outline-color": [V, T],
      "border-color": [V, T],
      "border-top-color": [V, T],
      "border-right-color": [V, T],
      "border-bottom-color": [V, T],
      "border-left-color": [V, T],
      "border-width": [j, g],
      "border-top-width": [j, g],
      "border-right-width": [j, g],
      "border-bottom-width": [j, g],
      "border-left-width": [j, g],
      "border-spacing": [j, g],
      "letter-spacing": [j, g],
      margin: [j, g],
      "margin-top": [j, g],
      "margin-right": [j, g],
      "margin-bottom": [j, g],
      "margin-left": [j, g],
      padding: [j, g],
      "padding-top": [j, g],
      "padding-right": [j, g],
      "padding-bottom": [j, g],
      "padding-left": [j, g],
      "outline-width": [j, g],
      opacity: [j, I],
      top: [j, O],
      right: [j, O],
      bottom: [j, O],
      left: [j, O],
      "font-size": [j, O],
      "text-indent": [j, O],
      "word-spacing": [j, O],
      width: [j, O],
      "min-width": [j, O],
      "max-width": [j, O],
      height: [j, O],
      "min-height": [j, O],
      "max-height": [j, O],
      "line-height": [j, m],
      "scroll-top": [X, I, "scrollTop"],
      "scroll-left": [X, I, "scrollLeft"]
    },
        q = {};
    w.transform && (Q.transform = [U], q = {
      x: [O, "translateX"],
      y: [O, "translateY"],
      rotate: [y],
      rotateX: [y],
      rotateY: [y],
      scale: [I],
      scaleX: [I],
      scaleY: [I],
      skew: [y],
      skewX: [y],
      skewY: [y]
    }), w.transform && w.backface && (q.z = [O, "translateZ"], q.rotateZ = [y], q.scaleZ = [I], q.perspective = [g]);
    var $ = /ms/,
        Z = /s|\./;
    return t.tram = e;
  }(window.jQuery);
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(27);
  n.d(e, "createStore", function () {
    return r.default;
  });
  var i = n(57);
  n.d(e, "combineReducers", function () {
    return i.default;
  });
  var o = n(59);
  n.d(e, "bindActionCreators", function () {
    return o.default;
  });
  var a = n(60);
  n.d(e, "applyMiddleware", function () {
    return a.default;
  });
  var u = n(29);
  n.d(e, "compose", function () {
    return u.default;
  });
  n(58);
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(108),
      i = n(113),
      o = n(115),
      a = "[object Object]",
      u = Function.prototype,
      c = Object.prototype,
      s = u.toString,
      f = c.hasOwnProperty,
      l = s.call(Object);

  e.default = function (t) {
    if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
    var e = Object(i.default)(t);
    if (null === e) return !0;
    var n = f.call(e, "constructor") && e.constructor;
    return "function" == typeof n && n instanceof n && s.call(n) == l;
  };
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(109).default.Symbol;
  e.default = r;
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return o;
  });
  var r = n(27);
  n(55), n(58);

  function i(t, e) {
    var n = e && e.type;
    return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
  }

  function o(t) {
    for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
      var a = e[o];
      0, "function" == typeof t[a] && (n[a] = t[a]);
    }

    var u,
        c = Object.keys(n);

    try {
      !function (t) {
        Object.keys(t).forEach(function (e) {
          var n = t[e];
          if (void 0 === n(void 0, {
            type: r.ActionTypes.INIT
          })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          if (void 0 === n(void 0, {
            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
          })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.');
        });
      }(n);
    } catch (t) {
      u = t;
    }

    return function () {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          e = arguments[1];
      if (u) throw u;

      for (var r = !1, o = {}, a = 0; a < c.length; a++) {
        var s = c[a],
            f = n[s],
            l = t[s],
            d = f(l, e);

        if (void 0 === d) {
          var E = i(s, e);
          throw new Error(E);
        }

        o[s] = d, r = r || d !== l;
      }

      return r ? o : t;
    };
  }
}, function (t, e, n) {
  "use strict";

  function r(t) {
    "undefined" != typeof console && "function" == typeof console.error && console.error(t);

    try {
      throw new Error(t);
    } catch (t) {}
  }

  n.r(e), n.d(e, "default", function () {
    return r;
  });
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    return function () {
      return e(t.apply(void 0, arguments));
    };
  }

  function i(t, e) {
    if ("function" == typeof t) return r(t, e);
    if ("object" != _typeof(t) || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : _typeof(t)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');

    for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
      var a = n[o],
          u = t[a];
      "function" == typeof u && (i[a] = r(u, e));
    }

    return i;
  }

  n.r(e), n.d(e, "default", function () {
    return i;
  });
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return o;
  });

  var r = n(29),
      i = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  };

  function o() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
      e[n] = arguments[n];
    }

    return function (t) {
      return function (n, o, a) {
        var u,
            c = t(n, o, a),
            s = c.dispatch,
            f = {
          getState: c.getState,
          dispatch: function dispatch(t) {
            return s(t);
          }
        };
        return u = e.map(function (t) {
          return t(f);
        }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {
          dispatch: s
        });
      };
    };
  }
}, function (t, e, n) {
  var r = n(62)(n(184));
  t.exports = r;
}, function (t, e, n) {
  var r = n(5),
      i = n(9),
      o = n(21);

  t.exports = function (t) {
    return function (e, n, a) {
      var u = Object(e);

      if (!i(e)) {
        var c = r(n, 3);
        e = o(e), n = function n(t) {
          return c(u[t], t, u);
        };
      }

      var s = t(e, n, a);
      return s > -1 ? u[c ? e[s] : s] : void 0;
    };
  };
}, function (t, e, n) {
  var r = n(17),
      i = n(128),
      o = n(129),
      a = n(130),
      u = n(131),
      c = n(132);

  function s(t) {
    var e = this.__data__ = new r(t);
    this.size = e.size;
  }

  s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s;
}, function (t, e, n) {
  var r = n(8),
      i = n(4),
      o = "[object AsyncFunction]",
      a = "[object Function]",
      u = "[object GeneratorFunction]",
      c = "[object Proxy]";

  t.exports = function (t) {
    if (!i(t)) return !1;
    var e = r(t);
    return e == a || e == u || e == o || e == c;
  };
}, function (t, e, n) {
  (function (e) {
    var n = "object" == _typeof(e) && e && e.Object === Object && e;
    t.exports = n;
  }).call(this, n(28));
}, function (t, e) {
  var n = Function.prototype.toString;

  t.exports = function (t) {
    if (null != t) {
      try {
        return n.call(t);
      } catch (t) {}

      try {
        return t + "";
      } catch (t) {}
    }

    return "";
  };
}, function (t, e, n) {
  var r = n(151),
      i = n(7);

  t.exports = function t(e, n, o, a, u) {
    return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u));
  };
}, function (t, e, n) {
  var r = n(152),
      i = n(155),
      o = n(156),
      a = 1,
      u = 2;

  t.exports = function (t, e, n, c, s, f) {
    var l = n & a,
        d = t.length,
        E = e.length;
    if (d != E && !(l && E > d)) return !1;
    var p = f.get(t);
    if (p && f.get(e)) return p == e;

    var v = -1,
        _ = !0,
        h = n & u ? new r() : void 0;

    for (f.set(t, e), f.set(e, t); ++v < d;) {
      var I = t[v],
          T = e[v];
      if (c) var g = l ? c(T, I, v, e, t, f) : c(I, T, v, t, e, f);

      if (void 0 !== g) {
        if (g) continue;
        _ = !1;
        break;
      }

      if (h) {
        if (!i(e, function (t, e) {
          if (!o(h, e) && (I === t || s(I, t, n, c, f))) return h.push(e);
        })) {
          _ = !1;
          break;
        }
      } else if (I !== T && !s(I, T, n, c, f)) {
        _ = !1;
        break;
      }
    }

    return f.delete(t), f.delete(e), _;
  };
}, function (t, e, n) {
  var r = n(34),
      i = n(1);

  t.exports = function (t, e, n) {
    var o = e(t);
    return i(t) ? o : r(o, n(t));
  };
}, function (t, e, n) {
  var r = n(163),
      i = n(71),
      o = Object.prototype.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols,
      u = a ? function (t) {
    return null == t ? [] : (t = Object(t), r(a(t), function (e) {
      return o.call(t, e);
    }));
  } : i;
  t.exports = u;
}, function (t, e) {
  t.exports = function () {
    return [];
  };
}, function (t, e, n) {
  var r = n(164),
      i = n(22),
      o = n(1),
      a = n(35),
      u = n(36),
      c = n(37),
      s = Object.prototype.hasOwnProperty;

  t.exports = function (t, e) {
    var n = o(t),
        f = !n && i(t),
        l = !n && !f && a(t),
        d = !n && !f && !l && c(t),
        E = n || f || l || d,
        p = E ? r(t.length, String) : [],
        v = p.length;

    for (var _ in t) {
      !e && !s.call(t, _) || E && ("length" == _ || l && ("offset" == _ || "parent" == _) || d && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || u(_, v)) || p.push(_);
    }

    return p;
  };
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function get() {
        return t.l;
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function get() {
        return t.i;
      }
    }), t.webpackPolyfill = 1), t;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return t(e(n));
    };
  };
}, function (t, e, n) {
  var r = n(6)(n(3), "WeakMap");
  t.exports = r;
}, function (t, e, n) {
  var r = n(4);

  t.exports = function (t) {
    return t == t && !r(t);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return null != n && n[t] === e && (void 0 !== e || t in Object(n));
    };
  };
}, function (t, e, n) {
  var r = n(79);

  t.exports = function (t) {
    return null == t ? "" : r(t);
  };
}, function (t, e, n) {
  var r = n(12),
      i = n(80),
      o = n(1),
      a = n(25),
      u = 1 / 0,
      c = r ? r.prototype : void 0,
      s = c ? c.toString : void 0;

  t.exports = function t(e) {
    if ("string" == typeof e) return e;
    if (o(e)) return i(e, t) + "";
    if (a(e)) return s ? s.call(e) : "";
    var n = e + "";
    return "0" == n && 1 / e == -u ? "-0" : n;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) {
      i[n] = e(t[n], n, t);
    }

    return i;
  };
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return null == e ? void 0 : e[t];
    };
  };
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) {
      if (e(t[o], o, t)) return o;
    }

    return -1;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.inQuad = function (t) {
    return Math.pow(t, 2);
  }, e.outQuad = function (t) {
    return -(Math.pow(t - 1, 2) - 1);
  }, e.inOutQuad = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
    return -.5 * ((t -= 2) * t - 2);
  }, e.inCubic = function (t) {
    return Math.pow(t, 3);
  }, e.outCubic = function (t) {
    return Math.pow(t - 1, 3) + 1;
  }, e.inOutCubic = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
    return .5 * (Math.pow(t - 2, 3) + 2);
  }, e.inQuart = function (t) {
    return Math.pow(t, 4);
  }, e.outQuart = function (t) {
    return -(Math.pow(t - 1, 4) - 1);
  }, e.inOutQuart = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
    return -.5 * ((t -= 2) * Math.pow(t, 3) - 2);
  }, e.inQuint = function (t) {
    return Math.pow(t, 5);
  }, e.outQuint = function (t) {
    return Math.pow(t - 1, 5) + 1;
  }, e.inOutQuint = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
    return .5 * (Math.pow(t - 2, 5) + 2);
  }, e.inSine = function (t) {
    return 1 - Math.cos(t * (Math.PI / 2));
  }, e.outSine = function (t) {
    return Math.sin(t * (Math.PI / 2));
  }, e.inOutSine = function (t) {
    return -.5 * (Math.cos(Math.PI * t) - 1);
  }, e.inExpo = function (t) {
    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
  }, e.outExpo = function (t) {
    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
  }, e.inOutExpo = function (t) {
    if (0 === t) return 0;
    if (1 === t) return 1;
    if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
    return .5 * (2 - Math.pow(2, -10 * --t));
  }, e.inCirc = function (t) {
    return -(Math.sqrt(1 - t * t) - 1);
  }, e.outCirc = function (t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2));
  }, e.inOutCirc = function (t) {
    if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
    return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  }, e.outBounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }, e.inBack = function (t) {
    return t * t * ((o + 1) * t - o);
  }, e.outBack = function (t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1;
  }, e.inOutBack = function (t) {
    var e = o;
    if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
    return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
  }, e.inElastic = function (t) {
    var e = o,
        n = 0,
        r = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    n || (n = .3);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n);
  }, e.outElastic = function (t) {
    var e = o,
        n = 0,
        r = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    n || (n = .3);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1;
  }, e.inOutElastic = function (t) {
    var e = o,
        n = 0,
        r = 1;
    if (0 === t) return 0;
    if (2 == (t /= .5)) return 1;
    n || (n = .3 * 1.5);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
    return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1;
  }, e.swingFromTo = function (t) {
    var e = o;
    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
  }, e.swingFrom = function (t) {
    return t * t * ((o + 1) * t - o);
  }, e.swingTo = function (t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1;
  }, e.bounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }, e.bouncePast = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
  }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
  var i = r(n(84)),
      o = 1.70158,
      a = (0, i.default)(.25, .1, .25, 1);
  e.ease = a;
  var u = (0, i.default)(.42, 0, 1, 1);
  e.easeIn = u;
  var c = (0, i.default)(0, 0, .58, 1);
  e.easeOut = c;
  var s = (0, i.default)(.42, 0, .58, 1);
  e.easeInOut = s;
}, function (t, e) {
  var n = 4,
      r = .001,
      i = 1e-7,
      o = 10,
      a = 11,
      u = 1 / (a - 1),
      c = "function" == typeof Float32Array;

  function s(t, e) {
    return 1 - 3 * e + 3 * t;
  }

  function f(t, e) {
    return 3 * e - 6 * t;
  }

  function l(t) {
    return 3 * t;
  }

  function d(t, e, n) {
    return ((s(e, n) * t + f(e, n)) * t + l(e)) * t;
  }

  function E(t, e, n) {
    return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e);
  }

  t.exports = function (t, e, s, f) {
    if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
    var l = c ? new Float32Array(a) : new Array(a);
    if (t !== e || s !== f) for (var p = 0; p < a; ++p) {
      l[p] = d(p * u, t, s);
    }

    function v(e) {
      for (var c = 0, f = 1, p = a - 1; f !== p && l[f] <= e; ++f) {
        c += u;
      }

      var v = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
          _ = E(v, t, s);

      return _ >= r ? function (t, e, r, i) {
        for (var o = 0; o < n; ++o) {
          var a = E(e, r, i);
          if (0 === a) return e;
          e -= (d(e, r, i) - t) / a;
        }

        return e;
      }(e, v, t, s) : 0 === _ ? v : function (t, e, n, r, a) {
        var u,
            c,
            s = 0;

        do {
          (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c;
        } while (Math.abs(u) > i && ++s < o);

        return c;
      }(e, c, c + u, t, s);
    }

    return function (n) {
      return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(v(n), e, f);
    };
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(86)),
      i = n(0),
      o = n(16);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.optimizeFloat = c, e.createBezierEasing = function (t) {
    return u.default.apply(void 0, (0, r.default)(t));
  }, e.applyEasing = function (t, e, n) {
    if (0 === e) return 0;
    if (1 === e) return 1;
    if (n) return c(e > 0 ? n(e) : e);
    return c(e > 0 && t && a[t] ? a[t](e) : e);
  };
  var a = o(n(83)),
      u = i(n(84));

  function c(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        r = Math.pow(n, e),
        i = Number(Math.round(t * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
}, function (t, e, n) {
  var r = n(186),
      i = n(187),
      o = n(188);

  t.exports = function (t) {
    return r(t) || i(t) || o();
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
  e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
  e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
  e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
  e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
  e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
  e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
  e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
  e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
  e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
  e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
  e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
  e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
  e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
  e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
  e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
  e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
  e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
  e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
  e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
  e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ECOMMERCE_CART_CLOSE = e.ECOMMERCE_CART_OPEN = e.PAGE = e.VIEWPORT = e.ELEMENT = e.PAGE_SCROLL = e.PAGE_SCROLL_DOWN = e.PAGE_SCROLL_UP = e.PAGE_FINISH = e.PAGE_START = e.COMPONENT_INACTIVE = e.COMPONENT_ACTIVE = e.DROPDOWN_CLOSE = e.DROPDOWN_OPEN = e.SLIDER_INACTIVE = e.SLIDER_ACTIVE = e.NAVBAR_CLOSE = e.NAVBAR_OPEN = e.TAB_INACTIVE = e.TAB_ACTIVE = e.SCROLLING_IN_VIEW = e.SCROLL_OUT_OF_VIEW = e.SCROLL_INTO_VIEW = e.MOUSE_MOVE = e.MOUSE_OUT = e.MOUSE_OVER = e.MOUSE_UP = e.MOUSE_DOWN = e.MOUSE_SECOND_CLICK = e.MOUSE_CLICK = void 0;
  e.MOUSE_CLICK = "MOUSE_CLICK";
  e.MOUSE_SECOND_CLICK = "MOUSE_SECOND_CLICK";
  e.MOUSE_DOWN = "MOUSE_DOWN";
  e.MOUSE_UP = "MOUSE_UP";
  e.MOUSE_OVER = "MOUSE_OVER";
  e.MOUSE_OUT = "MOUSE_OUT";
  e.MOUSE_MOVE = "MOUSE_MOVE";
  e.SCROLL_INTO_VIEW = "SCROLL_INTO_VIEW";
  e.SCROLL_OUT_OF_VIEW = "SCROLL_OUT_OF_VIEW";
  e.SCROLLING_IN_VIEW = "SCROLLING_IN_VIEW";
  e.TAB_ACTIVE = "TAB_ACTIVE";
  e.TAB_INACTIVE = "TAB_INACTIVE";
  e.NAVBAR_OPEN = "NAVBAR_OPEN";
  e.NAVBAR_CLOSE = "NAVBAR_CLOSE";
  e.SLIDER_ACTIVE = "SLIDER_ACTIVE";
  e.SLIDER_INACTIVE = "SLIDER_INACTIVE";
  e.DROPDOWN_OPEN = "DROPDOWN_OPEN";
  e.DROPDOWN_CLOSE = "DROPDOWN_CLOSE";
  e.COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
  e.COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
  e.PAGE_START = "PAGE_START";
  e.PAGE_FINISH = "PAGE_FINISH";
  e.PAGE_SCROLL_UP = "PAGE_SCROLL_UP";
  e.PAGE_SCROLL_DOWN = "PAGE_SCROLL_DOWN";
  e.PAGE_SCROLL = "PAGE_SCROLL";
  e.ELEMENT = "ELEMENT";
  e.VIEWPORT = "VIEWPORT";
  e.PAGE = "PAGE";
  e.ECOMMERCE_CART_OPEN = "ECOMMERCE_CART_OPEN";
  e.ECOMMERCE_CART_CLOSE = "ECOMMERCE_CART_CLOSE";
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(15));
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.isPluginType = function (t) {
    return t === o.PLUGIN_LOTTIE;
  }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
  var i = n(192),
      o = n(47),
      a = n(30),
      u = (0, r.default)({}, o.PLUGIN_LOTTIE, {
    getConfig: i.getPluginConfig,
    getOrigin: i.getPluginOrigin,
    getDuration: i.getPluginDuration,
    getDestination: i.getPluginDestination,
    createInstance: i.createPluginInstance,
    render: i.renderPlugin,
    clear: i.clearPlugin
  });

  var c = function c(t) {
    return function (e) {
      if (!a.IS_BROWSER_ENV) return function () {
        return null;
      };
      var n = u[e];
      if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
      var r = n[t];
      if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
      return r;
    };
  },
      s = c("getConfig");

  e.getPluginConfig = s;
  var f = c("getOrigin");
  e.getPluginOrigin = f;
  var l = c("getDuration");
  e.getPluginDuration = l;
  var d = c("getDestination");
  e.getPluginDestination = d;
  var E = c("createInstance");
  e.createPluginInstance = E;
  var p = c("render");
  e.renderPlugin = p;
  var v = c("clear");
  e.clearPlugin = v;
}, function (t, e, n) {
  var r = n(91),
      i = n(199)(r);
  t.exports = i;
}, function (t, e, n) {
  var r = n(197),
      i = n(21);

  t.exports = function (t, e) {
    return t && r(t, e, i);
  };
}, function (t, e, n) {
  "use strict";

  e.__esModule = !0;
  var r,
      i = n(203),
      o = (r = i) && r.__esModule ? r : {
    default: r
  };
  e.default = o.default;
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(86)),
      i = n(16),
      o = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.observeRequests = function (t) {
    j({
      store: t,
      select: function select(t) {
        var e = t.ixRequest;
        return e.preview;
      },
      onChange: ot
    }), j({
      store: t,
      select: function select(t) {
        var e = t.ixRequest;
        return e.playback;
      },
      onChange: ct
    }), j({
      store: t,
      select: function select(t) {
        var e = t.ixRequest;
        return e.stop;
      },
      onChange: st
    }), j({
      store: t,
      select: function select(t) {
        var e = t.ixRequest;
        return e.clear;
      },
      onChange: ft
    });
  }, e.startEngine = lt, e.stopEngine = dt, e.stopAllActionGroups = gt, e.stopActionGroup = Ot, e.startActionGroup = yt;

  var a = o(n(26)),
      u = o(n(208)),
      c = o(n(61)),
      s = o(n(23)),
      f = o(n(210)),
      l = o(n(216)),
      d = o(n(228)),
      E = o(n(229)),
      p = o(n(230)),
      v = o(n(233)),
      _ = o(n(234)),
      h = o(n(92)),
      I = n(2),
      T = n(49),
      g = i(n(237)),
      O = o(n(238)),
      y = I.IX2EngineEventTypes,
      m = y.MOUSE_CLICK,
      A = y.MOUSE_SECOND_CLICK,
      S = I.IX2EngineConstants,
      R = S.COLON_DELIMITER,
      N = S.BOUNDARY_SELECTOR,
      b = S.HTML_ELEMENT,
      C = S.RENDER_GENERAL,
      L = S.W_MOD_IX,
      w = I.IX2EngineItemTypes,
      P = w.GENERAL_START_ACTION,
      D = w.GENERAL_CONTINUOUS_ACTION,
      x = I.IX2VanillaUtils,
      M = x.getAffectedElements,
      F = x.getElementId,
      G = x.getDestinationValues,
      j = x.observeStore,
      V = x.getInstanceId,
      X = x.renderHTMLElement,
      U = x.clearAllStyles,
      B = x.getMaxDurationItemIndex,
      W = x.getComputedStyle,
      H = x.getInstanceOrigin,
      k = x.reduceListToGroup,
      Y = x.shouldNamespaceEventParameter,
      K = x.getNamespacedParameterId,
      z = x.shouldAllowMediaQuery,
      Q = x.cleanupHTMLElement,
      q = x.stringifyTarget,
      $ = x.mediaQueriesEqual,
      Z = I.IX2VanillaPlugins,
      J = Z.isPluginType,
      tt = Z.createPluginInstance,
      et = Z.getPluginDuration,
      nt = navigator.userAgent,
      rt = nt.match(/iPad/i) || nt.match(/iPhone/),
      it = 12;

  function ot(t, e) {
    var n = t.rawData,
        r = function r() {
      lt({
        store: e,
        rawData: n,
        allowEvents: !0
      }), at();
    };

    t.defer ? setTimeout(r, 0) : r();
  }

  function at() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }

  function ut(t) {
    return t && (0, v.default)(t, "_EFFECT");
  }

  function ct(t, e) {
    var n = t.actionTypeId,
        r = t.actionListId,
        i = t.actionItemId,
        o = t.eventId,
        a = t.allowEvents,
        u = t.immediate,
        c = t.testManual,
        s = t.verbose,
        f = void 0 === s || s,
        l = t.rawData;

    if (r && i && l && u && (l = k({
      actionListId: r,
      actionItemId: i,
      rawData: l
    })), lt({
      store: e,
      rawData: l,
      allowEvents: a,
      testManual: c
    }), r && n === P || ut(n)) {
      Ot({
        store: e,
        actionListId: r
      }), Tt({
        store: e,
        actionListId: r,
        eventId: o
      });
      var d = yt({
        store: e,
        eventId: o,
        actionListId: r,
        immediate: u,
        verbose: f
      });
      f && d && e.dispatch((0, T.actionListPlaybackChanged)({
        actionListId: r,
        isPlaying: !u
      }));
    }
  }

  function st(t, e) {
    var n = t.actionListId;
    n ? Ot({
      store: e,
      actionListId: n
    }) : gt({
      store: e
    }), dt(e);
  }

  function ft(t, e) {
    dt(e), U({
      store: e,
      elementApi: g
    });
  }

  function lt(t) {
    var e,
        n = t.store,
        i = t.rawData,
        o = t.allowEvents,
        a = t.testManual,
        u = n.getState().ixSession;
    i && n.dispatch((0, T.rawDataImported)(i)), u.active || (n.dispatch((0, T.sessionInitialized)({
      hasBoundaryNodes: Boolean(document.querySelector(N))
    })), o && (function (t) {
      var e = t.getState().ixData.eventTypeMap;
      vt(t), (0, p.default)(e, function (e, n) {
        var i = O.default[n];
        i ? function (t) {
          var e = t.logic,
              n = t.store,
              i = t.events;
          !function (t) {
            if (rt) {
              var e = {},
                  n = "";

              for (var r in t) {
                var i = t[r],
                    o = i.eventTypeId,
                    a = i.target,
                    u = g.getQuerySelector(a);
                e[u] || o !== m && o !== A || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}");
              }

              if (n) {
                var c = document.createElement("style");
                c.textContent = n, document.body.appendChild(c);
              }
            }
          }(i);

          var o = e.types,
              a = e.handler,
              u = n.getState().ixData,
              l = u.actionLists,
              d = _t(i, It);

          if ((0, f.default)(d)) {
            (0, p.default)(d, function (t, e) {
              var o = i[e],
                  a = o.action,
                  f = o.id,
                  d = o.mediaQueries,
                  E = void 0 === d ? u.mediaQueryKeys : d,
                  p = a.config.actionListId;

              if ($(E, u.mediaQueryKeys) || n.dispatch((0, T.mediaQueriesDefined)()), a.actionTypeId === D) {
                var v = Array.isArray(o.config) ? o.config : [o.config];
                v.forEach(function (e) {
                  var i = e.continuousParameterGroupId,
                      o = (0, s.default)(l, "".concat(p, ".continuousParameterGroups"), []),
                      a = (0, c.default)(o, function (t) {
                    var e = t.id;
                    return e === i;
                  }),
                      u = (e.smoothing || 0) / 100,
                      d = (e.restingState || 0) / 100;
                  a && t.forEach(function (t, i) {
                    var o = f + R + i;
                    !function (t) {
                      var e = t.store,
                          n = t.eventStateKey,
                          i = t.eventTarget,
                          o = t.eventId,
                          a = t.eventConfig,
                          u = t.actionListId,
                          c = t.parameterGroup,
                          f = t.smoothing,
                          l = t.restingValue,
                          d = e.getState(),
                          E = d.ixData,
                          p = d.ixSession,
                          v = E.events[o],
                          _ = v.eventTypeId,
                          h = {},
                          I = {},
                          T = [],
                          O = c.continuousActionGroups,
                          y = c.id;
                      Y(_, a) && (y = K(n, y));
                      var m = p.hasBoundaryNodes && i ? g.getClosestElement(i, N) : null;
                      O.forEach(function (t) {
                        var e = t.keyframe,
                            n = t.actionItems;
                        n.forEach(function (t) {
                          var n = t.actionTypeId,
                              o = t.config.target;

                          if (o) {
                            var a = o.boundaryMode ? m : null,
                                u = q(o) + R + n;

                            if (I[u] = function () {
                              var t,
                                  e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                  n = arguments.length > 1 ? arguments[1] : void 0,
                                  i = arguments.length > 2 ? arguments[2] : void 0,
                                  o = (0, r.default)(e);
                              return o.some(function (e, r) {
                                return e.keyframe === n && (t = r, !0);
                              }), null == t && (t = o.length, o.push({
                                keyframe: n,
                                actionItems: []
                              })), o[t].actionItems.push(i), o;
                            }(I[u], e, t), !h[u]) {
                              h[u] = !0;
                              var c = t.config;
                              M({
                                config: c,
                                event: v,
                                eventTarget: i,
                                elementRoot: a,
                                elementApi: g
                              }).forEach(function (t) {
                                T.push({
                                  element: t,
                                  key: u
                                });
                              });
                            }
                          }
                        });
                      }), T.forEach(function (t) {
                        var n = t.element,
                            r = t.key,
                            i = I[r],
                            a = (0, s.default)(i, "[0].actionItems[0]", {}),
                            c = a.actionTypeId,
                            d = J(c) ? tt(c)(n, a) : null,
                            E = G({
                          element: n,
                          actionItem: a,
                          elementApi: g
                        }, d);
                        mt({
                          store: e,
                          element: n,
                          eventId: o,
                          actionListId: u,
                          actionItem: a,
                          destination: E,
                          continuous: !0,
                          parameterId: y,
                          actionGroups: i,
                          smoothing: f,
                          restingValue: l,
                          pluginInstance: d
                        });
                      });
                    }({
                      store: n,
                      eventStateKey: o,
                      eventTarget: t,
                      eventId: f,
                      eventConfig: e,
                      actionListId: p,
                      parameterGroup: a,
                      smoothing: u,
                      restingValue: d
                    });
                  });
                });
              }

              (a.actionTypeId === P || ut(a.actionTypeId)) && Tt({
                store: n,
                actionListId: p,
                eventId: f
              });
            });

            var E = function E(t) {
              var e = n.getState(),
                  r = e.ixSession;
              ht(d, function (e, o, c) {
                var s = i[o],
                    f = r.eventState[c],
                    l = s.action,
                    d = s.mediaQueries,
                    E = void 0 === d ? u.mediaQueryKeys : d;

                if (z(E, r.mediaQueryKey)) {
                  var p = function p() {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = a({
                      store: n,
                      element: e,
                      event: s,
                      eventConfig: r,
                      nativeEvent: t,
                      eventStateKey: c
                    }, f);
                    (0, h.default)(i, f) || n.dispatch((0, T.eventStateChanged)(c, i));
                  };

                  if (l.actionTypeId === D) {
                    var v = Array.isArray(s.config) ? s.config : [s.config];
                    v.forEach(p);
                  } else p();
                }
              });
            },
                v = (0, _.default)(E, it),
                I = function I(t) {
              var e = t.target,
                  r = void 0 === e ? document : e,
                  i = t.types,
                  o = t.throttle;
              i.split(" ").filter(Boolean).forEach(function (t) {
                var e = o ? v : E;
                r.addEventListener(t, e), n.dispatch((0, T.eventListenerAdded)(r, [t, e]));
              });
            };

            Array.isArray(o) ? o.forEach(I) : "string" == typeof o && I(e);
          }
        }({
          logic: i,
          store: t,
          events: e
        }) : console.warn("IX2 event type not configured: ".concat(n));
      }), t.getState().ixSession.eventListeners.length && function (t) {
        var e = function e() {
          vt(t);
        };

        pt.forEach(function (n) {
          window.addEventListener(n, e), t.dispatch((0, T.eventListenerAdded)(window, [n, e]));
        }), e();
      }(t);
    }(n), -1 === (e = document.documentElement).className.indexOf(L) && (e.className += " ".concat(L)), n.getState().ixSession.hasDefinedMediaQueries && function (t) {
      j({
        store: t,
        select: function select(t) {
          return t.ixSession.mediaQueryKey;
        },
        onChange: function onChange() {
          dt(t), U({
            store: t,
            elementApi: g
          }), lt({
            store: t,
            allowEvents: !0
          }), at();
        }
      });
    }(n)), n.dispatch((0, T.sessionStarted)()), function (t, e) {
      !function n(r) {
        var i = t.getState(),
            o = i.ixSession,
            a = i.ixParameters;
        o.active && (t.dispatch((0, T.animationFrameChanged)(r, a)), e ? function (t, e) {
          var n = j({
            store: t,
            select: function select(t) {
              return t.ixSession.tick;
            },
            onChange: function onChange(t) {
              e(t), n();
            }
          });
        }(t, n) : requestAnimationFrame(n));
      }(window.performance.now());
    }(n, a));
  }

  function dt(t) {
    var e = t.getState().ixSession;
    e.active && (e.eventListeners.forEach(Et), t.dispatch((0, T.sessionStopped)()));
  }

  function Et(t) {
    var e = t.target,
        n = t.listenerParams;
    e.removeEventListener.apply(e, n);
  }

  var pt = ["resize", "orientationchange"];

  function vt(t) {
    var e = t.getState(),
        n = e.ixSession,
        r = e.ixData,
        i = window.innerWidth;

    if (i !== n.viewportWidth) {
      var o = r.mediaQueries;
      t.dispatch((0, T.viewportWidthChanged)({
        width: i,
        mediaQueries: o
      }));
    }
  }

  var _t = function _t(t, e) {
    return (0, l.default)((0, E.default)(t, e), d.default);
  },
      ht = function ht(t, e) {
    (0, p.default)(t, function (t, n) {
      t.forEach(function (t, r) {
        e(t, n, n + R + r);
      });
    });
  },
      It = function It(t) {
    var e = {
      target: t.target
    };
    return M({
      config: e,
      elementApi: g
    });
  };

  function Tt(t) {
    var e = t.store,
        n = t.actionListId,
        r = t.eventId,
        i = e.getState(),
        o = i.ixData,
        a = i.ixSession,
        u = o.actionLists,
        c = o.events[r],
        f = u[n];

    if (f && f.useFirstGroupAsInitialState) {
      var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
          d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
      if (!z(d, a.mediaQueryKey)) return;
      l.forEach(function (t) {
        var i = t.config,
            o = t.actionTypeId,
            a = M({
          config: i,
          event: c,
          elementApi: g
        }),
            u = J(o);
        a.forEach(function (i) {
          var a = u ? tt(o)(i, t) : null;
          mt({
            destination: G({
              element: i,
              actionItem: t,
              elementApi: g
            }, a),
            immediate: !0,
            store: e,
            element: i,
            eventId: r,
            actionItem: t,
            actionListId: n,
            pluginInstance: a
          });
        });
      });
    }
  }

  function gt(t) {
    var e = t.store,
        n = e.getState().ixInstances;
    (0, p.default)(n, function (t) {
      if (!t.continuous) {
        var n = t.actionListId,
            r = t.verbose;
        At(t, e), r && e.dispatch((0, T.actionListPlaybackChanged)({
          actionListId: n,
          isPlaying: !1
        }));
      }
    });
  }

  function Ot(t) {
    var e = t.store,
        n = t.eventId,
        r = t.eventTarget,
        i = t.eventStateKey,
        o = t.actionListId,
        a = e.getState(),
        u = a.ixInstances,
        c = a.ixSession.hasBoundaryNodes && r ? g.getClosestElement(r, N) : null;
    (0, p.default)(u, function (t) {
      var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
          a = !i || t.eventStateKey === i;

      if (t.actionListId === o && t.eventId === n && a) {
        if (c && r && !g.elementContains(c, t.element)) return;
        At(t, e), t.verbose && e.dispatch((0, T.actionListPlaybackChanged)({
          actionListId: o,
          isPlaying: !1
        }));
      }
    });
  }

  function yt(t) {
    var e = t.store,
        n = t.eventId,
        r = t.eventTarget,
        i = t.eventStateKey,
        o = t.actionListId,
        a = t.groupIndex,
        u = void 0 === a ? 0 : a,
        c = t.immediate,
        f = t.verbose,
        l = e.getState(),
        d = l.ixData,
        E = l.ixSession,
        p = d.events[n] || {},
        v = p.mediaQueries,
        _ = void 0 === v ? d.mediaQueryKeys : v,
        h = (0, s.default)(d, "actionLists.".concat(o), {}),
        I = h.actionItemGroups,
        T = h.useFirstGroupAsInitialState;

    u >= I.length && (0, s.default)(p, "config.loop") && (u = 0), 0 === u && T && u++;
    var O = (0 === u || 1 === u && T) && ut(p.action && p.action.actionTypeId) ? p.config.delay : void 0,
        y = (0, s.default)(I, [u, "actionItems"], []);
    if (!y.length) return !1;
    if (!z(_, E.mediaQueryKey)) return !1;
    var m = E.hasBoundaryNodes && r ? g.getClosestElement(r, N) : null,
        A = B(y),
        S = !1;
    return y.forEach(function (t, a) {
      var s = t.config,
          l = t.actionTypeId,
          d = J(l),
          E = s.target;

      if (E) {
        var v = E.boundaryMode ? m : null;
        M({
          config: s,
          event: p,
          eventTarget: r,
          elementRoot: v,
          elementApi: g
        }).forEach(function (s, E) {
          var p = d ? tt(l)(s, t) : null,
              v = d ? et(l)(s, t) : null;
          S = !0;

          var _ = A === a && 0 === E,
              h = W({
            element: s,
            actionItem: t
          }),
              I = G({
            element: s,
            actionItem: t,
            elementApi: g
          }, p);

          mt({
            store: e,
            element: s,
            actionItem: t,
            eventId: n,
            eventTarget: r,
            eventStateKey: i,
            actionListId: o,
            groupIndex: u,
            isCarrier: _,
            computedStyle: h,
            destination: I,
            immediate: c,
            verbose: f,
            pluginInstance: p,
            pluginDuration: v,
            instanceDelay: O
          });
        });
      }
    }), S;
  }

  function mt(t) {
    var e = t.store,
        n = t.computedStyle,
        r = (0, u.default)(t, ["store", "computedStyle"]),
        i = !r.continuous,
        o = r.element,
        c = r.actionItem,
        s = r.immediate,
        f = r.pluginInstance,
        l = V(),
        d = e.getState(),
        E = d.ixElements,
        p = d.ixSession,
        v = F(E, o),
        _ = (E[v] || {}).refState,
        h = g.getRefType(o),
        I = H(o, _, n, c, g, f);
    e.dispatch((0, T.instanceAdded)((0, a.default)({
      instanceId: l,
      elementId: v,
      origin: I,
      refType: h
    }, r))), St(document.body, "ix2-animation-started", l), s ? function (t, e) {
      var n = t.getState().ixParameters;
      t.dispatch((0, T.instanceStarted)(e, 0)), t.dispatch((0, T.animationFrameChanged)(performance.now(), n)), Rt(t.getState().ixInstances[e], t);
    }(e, l) : (j({
      store: e,
      select: function select(t) {
        return t.ixInstances[l];
      },
      onChange: Rt
    }), i && e.dispatch((0, T.instanceStarted)(l, p.tick)));
  }

  function At(t, e) {
    St(document.body, "ix2-animation-stopping", {
      instanceId: t.id,
      state: e.getState()
    });
    var n = t.elementId,
        r = t.actionItem,
        i = e.getState().ixElements[n] || {},
        o = i.ref;
    i.refType === b && Q(o, r, g), e.dispatch((0, T.instanceRemoved)(t.id));
  }

  function St(t, e, n) {
    var r = document.createEvent("CustomEvent");
    r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
  }

  function Rt(t, e) {
    var n = t.active,
        r = t.continuous,
        i = t.complete,
        o = t.elementId,
        a = t.actionItem,
        u = t.actionTypeId,
        c = t.renderType,
        s = t.current,
        f = t.groupIndex,
        l = t.eventId,
        d = t.eventTarget,
        E = t.eventStateKey,
        p = t.actionListId,
        v = t.isCarrier,
        _ = t.styleProp,
        h = t.verbose,
        I = t.pluginInstance,
        O = e.getState(),
        y = O.ixData,
        m = O.ixSession,
        A = (y.events[l] || {}).mediaQueries,
        S = void 0 === A ? y.mediaQueryKeys : A;

    if (z(S, m.mediaQueryKey) && (r || n || i)) {
      if (s || c === C && i) {
        e.dispatch((0, T.elementStateChanged)(o, u, s, a));
        var R = e.getState().ixElements[o] || {},
            N = R.ref,
            L = R.refType,
            w = R.refState,
            P = w && w[u];

        switch (L) {
          case b:
            X(N, w, P, l, a, _, g, c, I);
        }
      }

      if (i) {
        if (v) {
          var D = yt({
            store: e,
            eventId: l,
            eventTarget: d,
            eventStateKey: E,
            actionListId: p,
            groupIndex: f + 1,
            verbose: h
          });
          h && !D && e.dispatch((0, T.actionListPlaybackChanged)({
            actionListId: p,
            isPlaying: !1
          }));
        }

        At(t, e);
      }
    }
  }
}, function (t, e, n) {
  var r = n(95);

  t.exports = function (t, e, n) {
    "__proto__" == e && r ? r(t, e, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : t[e] = n;
  };
}, function (t, e, n) {
  var r = n(6),
      i = function () {
    try {
      var t = r(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch (t) {}
  }();

  t.exports = i;
}, function (t, e) {
  t.exports = function (t, e, n) {
    return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t;
  };
}, function (t, e, n) {
  var r = n(4),
      i = Object.create,
      o = function () {
    function t() {}

    return function (e) {
      if (!r(e)) return {};
      if (i) return i(e);
      t.prototype = e;
      var n = new t();
      return t.prototype = void 0, n;
    };
  }();

  t.exports = o;
}, function (t, e, n) {
  var r = n(251),
      i = n(252),
      o = r ? function (t) {
    return r.get(t);
  } : i;
  t.exports = o;
}, function (t, e, n) {
  var r = n(253),
      i = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
      var a = n[o],
          u = a.func;
      if (null == u || u == t) return a.name;
    }

    return e;
  };
}, function (t, e, n) {
  n(101), n(102), n(104), n(106), n(259), n(260), t.exports = n(261);
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(10));
  !function () {
    if ("undefined" != typeof window) {
      var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
          e = !!t && parseInt(t[1], 10) >= 16;

      if (!("objectFit" in document.documentElement.style != !1) || e) {
        var n = function n(t) {
          var e = t.parentNode;
          !function (t) {
            var e = window.getComputedStyle(t, null),
                n = e.getPropertyValue("position"),
                r = e.getPropertyValue("overflow"),
                i = e.getPropertyValue("display");
            n && "static" !== n || (t.style.position = "relative"), "hidden" !== r && (t.style.overflow = "hidden"), i && "inline" !== i || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className += " object-fit-polyfill");
          }(e), function (t) {
            var e = window.getComputedStyle(t, null),
                n = {
              "max-width": "none",
              "max-height": "none",
              "min-width": "0px",
              "min-height": "0px",
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              "margin-top": "0px",
              "margin-right": "0px",
              "margin-bottom": "0px",
              "margin-left": "0px"
            };

            for (var r in n) {
              e.getPropertyValue(r) !== n[r] && (t.style[r] = n[r]);
            }
          }(t), t.style.position = "absolute", t.style.height = "100%", t.style.width = "auto", t.clientWidth > e.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", t.style.left = "50%", t.style.marginLeft = t.clientWidth / -2 + "px") : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", t.style.top = "50%", t.style.marginTop = t.clientHeight / -2 + "px");
        },
            i = function i(t) {
          if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");else if (t && t.nodeName) t = [t];else {
            if ("object" !== (0, r.default)(t) || !t.length || !t[0].nodeName) return !1;
            t = t;
          }

          for (var i = 0; i < t.length; i++) {
            if (t[i].nodeName) {
              var o = t[i].nodeName.toLowerCase();

              if ("img" === o) {
                if (e) continue;
                t[i].complete ? n(t[i]) : t[i].addEventListener("load", function () {
                  n(this);
                });
              } else "video" === o ? t[i].readyState > 0 ? n(t[i]) : t[i].addEventListener("loadedmetadata", function () {
                n(this);
              }) : n(t[i]);
            }
          }

          return !0;
        };

        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i(), window.addEventListener("resize", i), window.objectFitPolyfill = i;
      } else window.objectFitPolyfill = function () {
        return !1;
      };
    }
  }();
}, function (t, e, n) {
  "use strict";

  var r = n(11);
  r.define("brand", t.exports = function (t) {
    var e,
        n = {},
        i = document,
        o = t("html"),
        a = t("body"),
        u = ".w-webflow-badge",
        c = window.location,
        s = /PhantomJS/i.test(navigator.userAgent),
        f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

    function l() {
      var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
      t(e).attr("style", n ? "display: none !important;" : "");
    }

    function d() {
      var t = a.children(u),
          n = t.length && t.get(0) === e,
          i = r.env("editor");
      n ? i && t.remove() : (t.length && t.remove(), i || a.append(e));
    }

    return n.ready = function () {
      var n,
          r,
          a,
          u = o.attr("data-wf-status"),
          E = o.attr("data-wf-domain") || "";
      /\.webflow\.io$/i.test(E) && c.hostname !== E && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
        marginRight: "8px",
        width: "16px"
      }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l));
    }, n;
  });
}, function (t, e, n) {
  "use strict";

  var r = window.$,
      i = n(53) && r.tram;
  /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (webflow)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */

  t.exports = function () {
    var t = {
      VERSION: "1.6.0-Webflow"
    },
        e = {},
        n = Array.prototype,
        r = Object.prototype,
        o = Function.prototype,
        a = (n.push, n.slice),
        u = (n.concat, r.toString, r.hasOwnProperty),
        c = n.forEach,
        s = n.map,
        f = (n.reduce, n.reduceRight, n.filter),
        l = (n.every, n.some),
        d = n.indexOf,
        E = (n.lastIndexOf, Array.isArray, Object.keys),
        p = (o.bind, t.each = t.forEach = function (n, r, i) {
      if (null == n) return n;
      if (c && n.forEach === c) n.forEach(r, i);else if (n.length === +n.length) {
        for (var o = 0, a = n.length; o < a; o++) {
          if (r.call(i, n[o], o, n) === e) return;
        }
      } else {
        var u = t.keys(n);

        for (o = 0, a = u.length; o < a; o++) {
          if (r.call(i, n[u[o]], u[o], n) === e) return;
        }
      }
      return n;
    });
    t.map = t.collect = function (t, e, n) {
      var r = [];
      return null == t ? r : s && t.map === s ? t.map(e, n) : (p(t, function (t, i, o) {
        r.push(e.call(n, t, i, o));
      }), r);
    }, t.find = t.detect = function (t, e, n) {
      var r;
      return v(t, function (t, i, o) {
        if (e.call(n, t, i, o)) return r = t, !0;
      }), r;
    }, t.filter = t.select = function (t, e, n) {
      var r = [];
      return null == t ? r : f && t.filter === f ? t.filter(e, n) : (p(t, function (t, i, o) {
        e.call(n, t, i, o) && r.push(t);
      }), r);
    };

    var v = t.some = t.any = function (n, r, i) {
      r || (r = t.identity);
      var o = !1;
      return null == n ? o : l && n.some === l ? n.some(r, i) : (p(n, function (t, n, a) {
        if (o || (o = r.call(i, t, n, a))) return e;
      }), !!o);
    };

    t.contains = t.include = function (t, e) {
      return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : v(t, function (t) {
        return t === e;
      }));
    }, t.delay = function (t, e) {
      var n = a.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, n);
      }, e);
    }, t.defer = function (e) {
      return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
    }, t.throttle = function (t) {
      var e, n, r;
      return function () {
        e || (e = !0, n = arguments, r = this, i.frame(function () {
          e = !1, t.apply(r, n);
        }));
      };
    }, t.debounce = function (e, n, r) {
      var i,
          o,
          a,
          u,
          c,
          s = function s() {
        var f = t.now() - u;
        f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null));
      };

      return function () {
        a = this, o = arguments, u = t.now();
        var f = r && !i;
        return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c;
      };
    }, t.defaults = function (e) {
      if (!t.isObject(e)) return e;

      for (var n = 1, r = arguments.length; n < r; n++) {
        var i = arguments[n];

        for (var o in i) {
          void 0 === e[o] && (e[o] = i[o]);
        }
      }

      return e;
    }, t.keys = function (e) {
      if (!t.isObject(e)) return [];
      if (E) return E(e);
      var n = [];

      for (var r in e) {
        t.has(e, r) && n.push(r);
      }

      return n;
    }, t.has = function (t, e) {
      return u.call(t, e);
    }, t.isObject = function (t) {
      return t === Object(t);
    }, t.now = Date.now || function () {
      return new Date().getTime();
    }, t.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };

    var _ = /(.)^/,
        h = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
        I = /\\|'|\r|\n|\u2028|\u2029/g,
        T = function T(t) {
      return "\\" + h[t];
    };

    return t.template = function (e, n, r) {
      !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
      var i = RegExp([(n.escape || _).source, (n.interpolate || _).source, (n.evaluate || _).source].join("|") + "|$", "g"),
          o = 0,
          a = "__p+='";
      e.replace(i, function (t, n, r, i, u) {
        return a += e.slice(o, u).replace(I, T), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t;
      }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";

      try {
        var u = new Function(n.variable || "obj", "_", a);
      } catch (t) {
        throw t.source = a, t;
      }

      var c = function c(e) {
        return u.call(this, e, t);
      },
          s = n.variable || "obj";

      return c.source = "function(" + s + "){\n" + a + "}", c;
    }, t;
  }();
}, function (t, e, n) {
  "use strict";

  var r = n(105);

  function i(t, e) {
    var n = document.createEvent("CustomEvent");
    n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
  }

  var o = window.jQuery,
      a = {},
      u = {
    reset: function reset(t, e) {
      r.triggers.reset(t, e);
    },
    intro: function intro(t, e) {
      r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE");
    },
    outro: function outro(t, e) {
      r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE");
    }
  };
  a.triggers = {}, a.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, o.extend(a.triggers, u), t.exports = a;
}, function (t, e, n) {
  "use strict";

  var r = window.jQuery,
      i = {},
      o = [],
      a = {
    reset: function reset(t, e) {
      e.__wf_intro = null;
    },
    intro: function intro(t, e) {
      e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO));
    },
    outro: function outro(t, e) {
      e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO));
    }
  };
  i.triggers = {}, i.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, i.init = function () {
    for (var t = o.length, e = 0; e < t; e++) {
      var n = o[e];
      n[0](0, n[1]);
    }

    o = [], r.extend(i.triggers, a);
  }, i.async = function () {
    for (var t in a) {
      var e = a[t];
      a.hasOwnProperty(t) && (i.triggers[t] = function (t, n) {
        o.push([e, n]);
      });
    }
  }, i.async(), t.exports = i;
}, function (t, e, n) {
  "use strict";

  var r = n(11),
      i = n(107);
  i.setEnv(r.env), r.define("ix2", t.exports = function () {
    return i;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(16),
      i = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.setEnv = function (t) {
    t() && (0, u.observeRequests)(s);
  }, e.init = function (t) {
    f(), (0, u.startEngine)({
      store: s,
      rawData: t,
      allowEvents: !0
    });
  }, e.destroy = f, e.actions = e.store = void 0;
  var o = n(54),
      a = i(n(119)),
      u = n(93),
      c = r(n(49));
  e.actions = c;
  var s = (0, o.createStore)(a.default);

  function f() {
    (0, u.stopEngine)(s);
  }

  e.store = s;
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(56),
      i = n(111),
      o = n(112),
      a = "[object Null]",
      u = "[object Undefined]",
      c = r.default ? r.default.toStringTag : void 0;

  e.default = function (t) {
    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t);
  };
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(110),
      i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      o = r.default || i || Function("return this")();
  e.default = o;
}, function (t, e, n) {
  "use strict";

  n.r(e), function (t) {
    var n = "object" == _typeof(t) && t && t.Object === Object && t;
    e.default = n;
  }.call(this, n(28));
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(56),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r.default ? r.default.toStringTag : void 0;

  e.default = function (t) {
    var e = o.call(t, u),
        n = t[u];

    try {
      t[u] = void 0;
      var r = !0;
    } catch (t) {}

    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i;
  };
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = Object.prototype.toString;

  e.default = function (t) {
    return r.call(t);
  };
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var r = n(114),
      i = Object(r.default)(Object.getPrototypeOf, Object);
  e.default = i;
}, function (t, e, n) {
  "use strict";

  n.r(e), e.default = function (t, e) {
    return function (n) {
      return t(e(n));
    };
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), e.default = function (t) {
    return null != t && "object" == _typeof(t);
  };
}, function (t, e, n) {
  "use strict";

  n.r(e), function (t, r) {
    var i,
        o = n(118);
    i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
    var a = Object(o.default)(i);
    e.default = a;
  }.call(this, n(28), n(117)(t));
}, function (t, e) {
  t.exports = function (t) {
    if (!t.webpackPolyfill) {
      var e = Object.create(t);
      e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function get() {
          return e.l;
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function get() {
          return e.i;
        }
      }), Object.defineProperty(e, "exports", {
        enumerable: !0
      }), e.webpackPolyfill = 1;
    }

    return e;
  };
}, function (t, e, n) {
  "use strict";

  function r(t) {
    var e,
        n = t.Symbol;
    return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e;
  }

  n.r(e), n.d(e, "default", function () {
    return r;
  });
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = n(54),
      i = n(120),
      o = n(204),
      a = n(205),
      u = n(2),
      c = n(206),
      s = n(207),
      f = u.IX2ElementsReducer.ixElements,
      l = (0, r.combineReducers)({
    ixData: i.ixData,
    ixRequest: o.ixRequest,
    ixSession: a.ixSession,
    ixElements: f,
    ixInstances: c.ixInstances,
    ixParameters: s.ixParameters
  });
  e.default = l;
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixData = void 0;
  var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;

  e.ixData = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;

    switch (e.type) {
      case r:
        return e.payload.ixData || Object.freeze({});

      default:
        return t;
    }
  };
}, function (t, e, n) {
  var r = n(122),
      i = n(174),
      o = n(77);

  t.exports = function (t) {
    var e = i(t);
    return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (n) {
      return n === t || r(n, t, e);
    };
  };
}, function (t, e, n) {
  var r = n(63),
      i = n(67),
      o = 1,
      a = 2;

  t.exports = function (t, e, n, u) {
    var c = n.length,
        s = c,
        f = !u;
    if (null == t) return !s;

    for (t = Object(t); c--;) {
      var l = n[c];
      if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
    }

    for (; ++c < s;) {
      var d = (l = n[c])[0],
          E = t[d],
          p = l[1];

      if (f && l[2]) {
        if (void 0 === E && !(d in t)) return !1;
      } else {
        var v = new r();
        if (u) var _ = u(E, p, d, t, e, v);
        if (!(void 0 === _ ? i(p, E, o | a, u, v) : _)) return !1;
      }
    }

    return !0;
  };
}, function (t, e) {
  t.exports = function () {
    this.__data__ = [], this.size = 0;
  };
}, function (t, e, n) {
  var r = n(18),
      i = Array.prototype.splice;

  t.exports = function (t) {
    var e = this.__data__,
        n = r(e, t);
    return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0));
  };
}, function (t, e, n) {
  var r = n(18);

  t.exports = function (t) {
    var e = this.__data__,
        n = r(e, t);
    return n < 0 ? void 0 : e[n][1];
  };
}, function (t, e, n) {
  var r = n(18);

  t.exports = function (t) {
    return r(this.__data__, t) > -1;
  };
}, function (t, e, n) {
  var r = n(18);

  t.exports = function (t, e) {
    var n = this.__data__,
        i = r(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
  };
}, function (t, e, n) {
  var r = n(17);

  t.exports = function () {
    this.__data__ = new r(), this.size = 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n;
  };
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.get(t);
  };
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t);
  };
}, function (t, e, n) {
  var r = n(17),
      i = n(32),
      o = n(33),
      a = 200;

  t.exports = function (t, e) {
    var n = this.__data__;

    if (n instanceof r) {
      var u = n.__data__;
      if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
      n = this.__data__ = new o(u);
    }

    return n.set(t, e), this.size = n.size, this;
  };
}, function (t, e, n) {
  var r = n(64),
      i = n(136),
      o = n(4),
      a = n(66),
      u = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      s = Object.prototype,
      f = c.toString,
      l = s.hasOwnProperty,
      d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  t.exports = function (t) {
    return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
  };
}, function (t, e, n) {
  var r = n(12),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r ? r.toStringTag : void 0;

  t.exports = function (t) {
    var e = o.call(t, u),
        n = t[u];

    try {
      t[u] = void 0;
      var r = !0;
    } catch (t) {}

    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i;
  };
}, function (t, e) {
  var n = Object.prototype.toString;

  t.exports = function (t) {
    return n.call(t);
  };
}, function (t, e, n) {
  var r,
      i = n(137),
      o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";

  t.exports = function (t) {
    return !!o && o in t;
  };
}, function (t, e, n) {
  var r = n(3)["__core-js_shared__"];
  t.exports = r;
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t ? void 0 : t[e];
  };
}, function (t, e, n) {
  var r = n(140),
      i = n(17),
      o = n(32);

  t.exports = function () {
    this.size = 0, this.__data__ = {
      hash: new r(),
      map: new (o || i)(),
      string: new r()
    };
  };
}, function (t, e, n) {
  var r = n(141),
      i = n(142),
      o = n(143),
      a = n(144),
      u = n(145);

  function c(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }

  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c;
}, function (t, e, n) {
  var r = n(19);

  t.exports = function () {
    this.__data__ = r ? r(null) : {}, this.size = 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  };
}, function (t, e, n) {
  var r = n(19),
      i = "__lodash_hash_undefined__",
      o = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    var e = this.__data__;

    if (r) {
      var n = e[t];
      return n === i ? void 0 : n;
    }

    return o.call(e, t) ? e[t] : void 0;
  };
}, function (t, e, n) {
  var r = n(19),
      i = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    var e = this.__data__;
    return r ? void 0 !== e[t] : i.call(e, t);
  };
}, function (t, e, n) {
  var r = n(19),
      i = "__lodash_hash_undefined__";

  t.exports = function (t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this;
  };
}, function (t, e, n) {
  var r = n(20);

  t.exports = function (t) {
    var e = r(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = _typeof(t);

    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
  };
}, function (t, e, n) {
  var r = n(20);

  t.exports = function (t) {
    return r(this, t).get(t);
  };
}, function (t, e, n) {
  var r = n(20);

  t.exports = function (t) {
    return r(this, t).has(t);
  };
}, function (t, e, n) {
  var r = n(20);

  t.exports = function (t, e) {
    var n = r(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
  };
}, function (t, e, n) {
  var r = n(63),
      i = n(68),
      o = n(157),
      a = n(161),
      u = n(41),
      c = n(1),
      s = n(35),
      f = n(37),
      l = 1,
      d = "[object Arguments]",
      E = "[object Array]",
      p = "[object Object]",
      v = Object.prototype.hasOwnProperty;

  t.exports = function (t, e, n, _, h, I) {
    var T = c(t),
        g = c(e),
        O = T ? E : u(t),
        y = g ? E : u(e),
        m = (O = O == d ? p : O) == p,
        A = (y = y == d ? p : y) == p,
        S = O == y;

    if (S && s(t)) {
      if (!s(e)) return !1;
      T = !0, m = !1;
    }

    if (S && !m) return I || (I = new r()), T || f(t) ? i(t, e, n, _, h, I) : o(t, e, O, n, _, h, I);

    if (!(n & l)) {
      var R = m && v.call(t, "__wrapped__"),
          N = A && v.call(e, "__wrapped__");

      if (R || N) {
        var b = R ? t.value() : t,
            C = N ? e.value() : e;
        return I || (I = new r()), h(b, C, n, _, I);
      }
    }

    return !!S && (I || (I = new r()), a(t, e, n, _, h, I));
  };
}, function (t, e, n) {
  var r = n(33),
      i = n(153),
      o = n(154);

  function a(t) {
    var e = -1,
        n = null == t ? 0 : t.length;

    for (this.__data__ = new r(); ++e < n;) {
      this.add(t[e]);
    }
  }

  a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a;
}, function (t, e) {
  var n = "__lodash_hash_undefined__";

  t.exports = function (t) {
    return this.__data__.set(t, n), this;
  };
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) {
      if (e(t[n], n, t)) return !0;
    }

    return !1;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return t.has(e);
  };
}, function (t, e, n) {
  var r = n(12),
      i = n(158),
      o = n(31),
      a = n(68),
      u = n(159),
      c = n(160),
      s = 1,
      f = 2,
      l = "[object Boolean]",
      d = "[object Date]",
      E = "[object Error]",
      p = "[object Map]",
      v = "[object Number]",
      _ = "[object RegExp]",
      h = "[object Set]",
      I = "[object String]",
      T = "[object Symbol]",
      g = "[object ArrayBuffer]",
      O = "[object DataView]",
      y = r ? r.prototype : void 0,
      m = y ? y.valueOf : void 0;

  t.exports = function (t, e, n, r, y, A, S) {
    switch (n) {
      case O:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        t = t.buffer, e = e.buffer;

      case g:
        return !(t.byteLength != e.byteLength || !A(new i(t), new i(e)));

      case l:
      case d:
      case v:
        return o(+t, +e);

      case E:
        return t.name == e.name && t.message == e.message;

      case _:
      case I:
        return t == e + "";

      case p:
        var R = u;

      case h:
        var N = r & s;
        if (R || (R = c), t.size != e.size && !N) return !1;
        var b = S.get(t);
        if (b) return b == e;
        r |= f, S.set(t, e);
        var C = a(R(t), R(e), r, y, A, S);
        return S.delete(t), C;

      case T:
        if (m) return m.call(t) == m.call(e);
    }

    return !1;
  };
}, function (t, e, n) {
  var r = n(3).Uint8Array;
  t.exports = r;
}, function (t, e) {
  t.exports = function (t) {
    var e = -1,
        n = Array(t.size);
    return t.forEach(function (t, r) {
      n[++e] = [r, t];
    }), n;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = -1,
        n = Array(t.size);
    return t.forEach(function (t) {
      n[++e] = t;
    }), n;
  };
}, function (t, e, n) {
  var r = n(162),
      i = 1,
      o = Object.prototype.hasOwnProperty;

  t.exports = function (t, e, n, a, u, c) {
    var s = n & i,
        f = r(t),
        l = f.length;
    if (l != r(e).length && !s) return !1;

    for (var d = l; d--;) {
      var E = f[d];
      if (!(s ? E in e : o.call(e, E))) return !1;
    }

    var p = c.get(t);
    if (p && c.get(e)) return p == e;
    var v = !0;
    c.set(t, e), c.set(e, t);

    for (var _ = s; ++d < l;) {
      var h = t[E = f[d]],
          I = e[E];
      if (a) var T = s ? a(I, h, E, e, t, c) : a(h, I, E, t, e, c);

      if (!(void 0 === T ? h === I || u(h, I, n, a, c) : T)) {
        v = !1;
        break;
      }

      _ || (_ = "constructor" == E);
    }

    if (v && !_) {
      var g = t.constructor,
          O = e.constructor;
      g != O && "constructor" in t && "constructor" in e && !("function" == typeof g && g instanceof g && "function" == typeof O && O instanceof O) && (v = !1);
    }

    return c.delete(t), c.delete(e), v;
  };
}, function (t, e, n) {
  var r = n(69),
      i = n(70),
      o = n(21);

  t.exports = function (t) {
    return r(t, o, i);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
      var a = t[n];
      e(a, n, t) && (o[i++] = a);
    }

    return o;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = Array(t); ++n < t;) {
      r[n] = e(n);
    }

    return r;
  };
}, function (t, e, n) {
  var r = n(8),
      i = n(7),
      o = "[object Arguments]";

  t.exports = function (t) {
    return i(t) && r(t) == o;
  };
}, function (t, e) {
  t.exports = function () {
    return !1;
  };
}, function (t, e, n) {
  var r = n(8),
      i = n(38),
      o = n(7),
      a = {};
  a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
    return o(t) && i(t.length) && !!a[r(t)];
  };
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return t(e);
    };
  };
}, function (t, e, n) {
  (function (t) {
    var r = n(65),
        i = e && !e.nodeType && e,
        o = i && "object" == _typeof(t) && t && !t.nodeType && t,
        a = o && o.exports === i && r.process,
        u = function () {
      try {
        var t = o && o.require && o.require("util").types;

        return t || a && a.binding && a.binding("util");
      } catch (t) {}
    }();

    t.exports = u;
  }).call(this, n(73)(t));
}, function (t, e, n) {
  var r = n(74)(Object.keys, Object);
  t.exports = r;
}, function (t, e, n) {
  var r = n(6)(n(3), "DataView");
  t.exports = r;
}, function (t, e, n) {
  var r = n(6)(n(3), "Promise");
  t.exports = r;
}, function (t, e, n) {
  var r = n(6)(n(3), "Set");
  t.exports = r;
}, function (t, e, n) {
  var r = n(76),
      i = n(21);

  t.exports = function (t) {
    for (var e = i(t), n = e.length; n--;) {
      var o = e[n],
          a = t[o];
      e[n] = [o, a, r(a)];
    }

    return e;
  };
}, function (t, e, n) {
  var r = n(67),
      i = n(23),
      o = n(179),
      a = n(43),
      u = n(76),
      c = n(77),
      s = n(13),
      f = 1,
      l = 2;

  t.exports = function (t, e) {
    return a(t) && u(e) ? c(s(t), e) : function (n) {
      var a = i(n, t);
      return void 0 === a && a === e ? o(n, t) : r(e, a, f | l);
    };
  };
}, function (t, e, n) {
  var r = n(177),
      i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      o = /\\(\\)?/g,
      a = r(function (t) {
    var e = [];
    return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function (t, n, r, i) {
      e.push(r ? i.replace(o, "$1") : n || t);
    }), e;
  });
  t.exports = a;
}, function (t, e, n) {
  var r = n(178),
      i = 500;

  t.exports = function (t) {
    var e = r(t, function (t) {
      return n.size === i && n.clear(), t;
    }),
        n = e.cache;
    return e;
  };
}, function (t, e, n) {
  var r = n(33),
      i = "Expected a function";

  function o(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);

    var n = function n() {
      var r = arguments,
          i = e ? e.apply(this, r) : r[0],
          o = n.cache;
      if (o.has(i)) return o.get(i);
      var a = t.apply(this, r);
      return n.cache = o.set(i, a) || o, a;
    };

    return n.cache = new (o.Cache || r)(), n;
  }

  o.Cache = r, t.exports = o;
}, function (t, e, n) {
  var r = n(180),
      i = n(181);

  t.exports = function (t, e) {
    return null != t && i(t, e, r);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return null != t && e in Object(t);
  };
}, function (t, e, n) {
  var r = n(24),
      i = n(22),
      o = n(1),
      a = n(36),
      u = n(38),
      c = n(13);

  t.exports = function (t, e, n) {
    for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
      var d = c(e[s]);
      if (!(l = null != t && n(t, d))) break;
      t = t[d];
    }

    return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t));
  };
}, function (t, e, n) {
  var r = n(81),
      i = n(183),
      o = n(43),
      a = n(13);

  t.exports = function (t) {
    return o(t) ? r(a(t)) : i(t);
  };
}, function (t, e, n) {
  var r = n(42);

  t.exports = function (t) {
    return function (e) {
      return r(e, t);
    };
  };
}, function (t, e, n) {
  var r = n(82),
      i = n(5),
      o = n(45),
      a = Math.max;

  t.exports = function (t, e, n) {
    var u = null == t ? 0 : t.length;
    if (!u) return -1;
    var c = null == n ? 0 : o(n);
    return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
  };
}, function (t, e, n) {
  var r = n(46),
      i = 1 / 0,
      o = 1.7976931348623157e308;

  t.exports = function (t) {
    return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    if (Array.isArray(t)) {
      for (var e = 0, n = new Array(t.length); e < t.length; e++) {
        n[e] = t[e];
      }

      return n;
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
  };
}, function (t, e) {
  t.exports = function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.createElementState = c, e.mergeActionState = s, e.ixElements = void 0;
  var r = n(14),
      i = n(48),
      o = n(87),
      a = {},
      u = "refState";

  function c(t, e, n, o, a) {
    var u = n === i.PLAIN_OBJECT ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
    return (0, r.mergeIn)(t, [o], {
      id: o,
      ref: e,
      refId: u,
      refType: n
    });
  }

  function s(t, e, n, i, o) {
    var a = function (t) {
      var e = t.config;
      return f.reduce(function (t, n) {
        var r = n[0],
            i = n[1],
            o = e[r],
            a = e[i];
        return null != o && null != a && (t[i] = a), t;
      }, {});
    }(o),
        c = [e, u, n];

    return (0, r.mergeIn)(t, c, i, a);
  }

  e.ixElements = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

    switch (e.type) {
      case o.IX2_SESSION_STOPPED:
        return a;

      case o.IX2_INSTANCE_ADDED:
        var n = e.payload,
            i = n.elementId,
            u = n.element,
            f = n.origin,
            l = n.actionItem,
            d = n.refType,
            E = l.actionTypeId,
            p = t;
        return (0, r.getIn)(p, [i, u]) !== u && (p = c(p, u, d, i, l)), s(p, i, E, f, l);

      case o.IX2_ELEMENT_STATE_CHANGED:
        var v = e.payload;
        return s(t, v.elementId, v.actionTypeId, v.current, v.actionItem);

      default:
        return t;
    }
  };

  var f = [[i.CONFIG_X_VALUE, i.CONFIG_X_UNIT], [i.CONFIG_Y_VALUE, i.CONFIG_Y_UNIT], [i.CONFIG_Z_VALUE, i.CONFIG_Z_UNIT], [i.CONFIG_VALUE, i.CONFIG_UNIT]];
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2_EVENT_ENGINE_EVENT_TYPES = e.DIRECTIONS = e.EVENT_APPLIES_TO = e.EVENT_ACTION_TYPES = e.BASED_ON_TYPES = e.AXES = void 0;
  e.AXES = {
    X_AXIS: "X_AXIS",
    Y_AXIS: "Y_AXIS"
  };
  e.BASED_ON_TYPES = {
    ELEMENT: "ELEMENT",
    VIEWPORT: "VIEWPORT",
    PAGE: "PAGE"
  };
  e.EVENT_ACTION_TYPES = {
    START: "START",
    STOP: "STOP",
    CONTINUOUS: "CONTINUOUS",
    CHANGE_COMBO: "CHANGE_COMBO"
  };
  e.EVENT_APPLIES_TO = {
    ELEMENT: "ELEMENT",
    CLASS: "CLASS",
    PAGE: "PAGE"
  };
  e.DIRECTIONS = {
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    BOTTOM: "BOTTOM",
    TOP: "TOP",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM_RIGHT: "BOTTOM_RIGHT",
    TOP_RIGHT: "TOP_RIGHT",
    TOP_LEFT: "TOP_LEFT",
    CLOCKWISE: "CLOCKWISE",
    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
  };
  e.IX2_EVENT_ENGINE_EVENT_TYPES = {
    MOUSE_CLICK: "MOUSE_CLICK",
    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
    MOUSE_DOWN: "MOUSE_DOWN",
    MOUSE_UP: "MOUSE_UP",
    MOUSE_OVER: "MOUSE_OVER",
    MOUSE_OUT: "MOUSE_OUT",
    MOUSE_MOVE: "MOUSE_MOVE",
    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
    TAB_ACTIVE: "TAB_ACTIVE",
    TAB_INACTIVE: "TAB_INACTIVE",
    NAVBAR_OPEN: "NAVBAR_OPEN",
    NAVBAR_CLOSE: "NAVBAR_CLOSE",
    SLIDER_ACTIVE: "SLIDER_ACTIVE",
    SLIDER_INACTIVE: "SLIDER_INACTIVE",
    DROPDOWN_OPEN: "DROPDOWN_OPEN",
    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
    COMPONENT_ACTIVE: "COMPONENT_ACTIVE",
    COMPONENT_INACTIVE: "COMPONENT_INACTIVE",
    PAGE_START: "PAGE_START",
    PAGE_FINISH: "PAGE_FINISH",
    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
    PAGE_SCROLL: "PAGE_SCROLL",
    ELEMENT: "ELEMENT",
    VIEWPORT: "VIEWPORT",
    PAGE: "PAGE",
    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE"
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.IX2_INTERACTION_TYPES = void 0;
  e.IX2_INTERACTION_TYPES = {
    MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
    MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
    SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
    PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
    PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
    MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
    SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
    MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
    PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
    DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
    NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
    TAB_INTERACTION: "TAB_INTERACTION",
    SLIDER_INTERACTION: "SLIDER_INTERACTION",
    ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION"
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;

  e.getPluginConfig = function (t) {
    return t.value;
  };

  e.getPluginDuration = function (t, e) {
    if ("auto" !== e.config.duration) return null;
    var n = parseFloat(t.getAttribute("data-duration"));
    return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"));
  };

  e.getPluginOrigin = function (t) {
    return t || {
      value: 0
    };
  };

  e.getPluginDestination = function (t) {
    return {
      value: t.value
    };
  };

  e.createPluginInstance = function (t) {
    var e = window.Webflow.require("lottie").createInstance(t);

    return e.stop(), e.setSubframe(!0), e;
  };

  e.renderPlugin = function (t, e, n) {
    if (t) {
      var r = e[n.actionTypeId].value / 100;
      t.goToFrame(t.frames * r);
    }
  };

  e.clearPlugin = function (t) {
    window.Webflow.require("lottie").createInstance(t).stop();
  };
}, function (t, e, n) {
  "use strict";

  var r,
      i,
      o,
      a = n(0),
      u = a(n(10)),
      c = a(n(15)),
      s = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getInstanceId = function () {
    return "i" + R++;
  }, e.getElementId = function (t, e) {
    for (var n in t) {
      var r = t[n];
      if (r && r.ref === e) return r.id;
    }

    return "e" + N++;
  }, e.reifyState = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.events,
        n = t.actionLists,
        r = t.site,
        i = (0, l.default)(e, function (t, e) {
      var n = e.eventTypeId;
      return t[n] || (t[n] = {}), t[n][e.id] = e, t;
    }, {}),
        o = r && r.mediaQueries,
        a = [];
    o ? a = o.map(function (t) {
      return t.key;
    }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
    return {
      ixData: {
        events: e,
        actionLists: n,
        eventTypeMap: i,
        mediaQueries: o,
        mediaQueryKeys: a
      }
    };
  }, e.observeStore = function (t) {
    var e = t.store,
        n = t.select,
        r = t.onChange,
        i = t.comparator,
        o = void 0 === i ? b : i,
        a = e.getState,
        u = (0, e.subscribe)(function () {
      var t = n(a());
      if (null == t) return void u();
      o(t, c) || r(c = t, e);
    }),
        c = n(a());
    return u;
  }, e.getAffectedElements = L, e.getComputedStyle = function (t) {
    var e = t.element,
        n = t.actionItem;
    if (!O.IS_BROWSER_ENV) return {};

    switch (n.actionTypeId) {
      case g.STYLE_SIZE:
      case g.STYLE_BACKGROUND_COLOR:
      case g.STYLE_BORDER:
      case g.STYLE_TEXT_COLOR:
      case g.GENERAL_DISPLAY:
        return window.getComputedStyle(e);

      default:
        return {};
    }
  }, e.getInstanceOrigin = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
        o = r.actionTypeId,
        a = r.config;
    if ((0, h.isPluginType)(o)) return (0, h.getPluginOrigin)(o)(e[o]);

    switch (o) {
      case g.TRANSFORM_MOVE:
      case g.TRANSFORM_SCALE:
      case g.TRANSFORM_ROTATE:
      case g.TRANSFORM_SKEW:
        return e[o] || M[o];

      case g.STYLE_FILTER:
        return P(e[o], r.config.filters);

      case g.STYLE_OPACITY:
        return {
          value: (0, f.default)(parseFloat(i(t, I.OPACITY)), 1)
        };

      case g.STYLE_SIZE:
        var u,
            c,
            s = i(t, I.WIDTH),
            l = i(t, I.HEIGHT);
        return u = a.widthUnit === I.AUTO ? w.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === I.AUTO ? w.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f.default)(parseFloat(l), parseFloat(n.height)), {
          widthValue: u,
          heightValue: c
        };

      case g.STYLE_BACKGROUND_COLOR:
      case g.STYLE_BORDER:
      case g.STYLE_TEXT_COLOR:
        return function (t) {
          var e = t.element,
              n = t.actionTypeId,
              r = t.computedStyle,
              i = t.getStyle,
              o = m[n],
              a = i(e, o),
              u = V.test(a) ? a : r[o],
              c = function (t, e) {
            var n = t.exec(e);
            return n ? n[1] : "";
          }(X, u).split(I.COMMA_DELIMITER);

          return {
            rValue: (0, f.default)(parseInt(c[0], 10), 255),
            gValue: (0, f.default)(parseInt(c[1], 10), 255),
            bValue: (0, f.default)(parseInt(c[2], 10), 255),
            aValue: (0, f.default)(parseFloat(c[3]), 1)
          };
        }({
          element: t,
          actionTypeId: o,
          computedStyle: n,
          getStyle: i
        });

      case g.GENERAL_DISPLAY:
        return {
          value: (0, f.default)(i(t, I.DISPLAY), n.display)
        };

      case g.OBJECT_VALUE:
        return e[o] || {
          value: 0
        };

      default:
        return;
    }
  }, e.getDestinationValues = function (t) {
    var e = t.element,
        n = t.actionItem,
        r = t.elementApi,
        i = n.actionTypeId;
    if ((0, h.isPluginType)(i)) return (0, h.getPluginDestination)(i)(n.config);

    switch (i) {
      case g.TRANSFORM_MOVE:
      case g.TRANSFORM_SCALE:
      case g.TRANSFORM_ROTATE:
      case g.TRANSFORM_SKEW:
        var o = n.config,
            a = o.xValue,
            u = o.yValue,
            c = o.zValue;
        return {
          xValue: a,
          yValue: u,
          zValue: c
        };

      case g.STYLE_SIZE:
        var s = r.getStyle,
            f = r.setStyle,
            l = r.getProperty,
            d = n.config,
            E = d.widthUnit,
            p = d.heightUnit,
            v = n.config,
            _ = v.widthValue,
            T = v.heightValue;
        if (!O.IS_BROWSER_ENV) return {
          widthValue: _,
          heightValue: T
        };

        if (E === I.AUTO) {
          var y = s(e, I.WIDTH);
          f(e, I.WIDTH, ""), _ = l(e, "offsetWidth"), f(e, I.WIDTH, y);
        }

        if (p === I.AUTO) {
          var m = s(e, I.HEIGHT);
          f(e, I.HEIGHT, ""), T = l(e, "offsetHeight"), f(e, I.HEIGHT, m);
        }

        return {
          widthValue: _,
          heightValue: T
        };

      case g.STYLE_BACKGROUND_COLOR:
      case g.STYLE_BORDER:
      case g.STYLE_TEXT_COLOR:
        var A = n.config,
            S = A.rValue,
            R = A.gValue,
            N = A.bValue,
            b = A.aValue;
        return {
          rValue: S,
          gValue: R,
          bValue: N,
          aValue: b
        };

      case g.STYLE_FILTER:
        return n.config.filters.reduce(D, {});

      default:
        var C = n.config.value;
        return {
          value: C
        };
    }
  }, e.getRenderType = x, e.getStyleProp = function (t, e) {
    return t === I.RENDER_STYLE ? e.replace("STYLE_", "").toLowerCase() : null;
  }, e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
    switch (u) {
      case I.RENDER_TRANSFORM:
        return function (t, e, n, r, i) {
          var o = j.map(function (t) {
            var n = M[t],
                r = e[t] || {},
                i = r.xValue,
                o = void 0 === i ? n.xValue : i,
                a = r.yValue,
                u = void 0 === a ? n.yValue : a,
                c = r.zValue,
                s = void 0 === c ? n.zValue : c,
                f = r.xUnit,
                l = void 0 === f ? "" : f,
                d = r.yUnit,
                E = void 0 === d ? "" : d,
                p = r.zUnit,
                v = void 0 === p ? "" : p;

            switch (t) {
              case g.TRANSFORM_MOVE:
                return "".concat(I.TRANSLATE_3D, "(").concat(o).concat(l, ", ").concat(u).concat(E, ", ").concat(s).concat(v, ")");

              case g.TRANSFORM_SCALE:
                return "".concat(I.SCALE_3D, "(").concat(o).concat(l, ", ").concat(u).concat(E, ", ").concat(s).concat(v, ")");

              case g.TRANSFORM_ROTATE:
                return "".concat(I.ROTATE_X, "(").concat(o).concat(l, ") ").concat(I.ROTATE_Y, "(").concat(u).concat(E, ") ").concat(I.ROTATE_Z, "(").concat(s).concat(v, ")");

              case g.TRANSFORM_SKEW:
                return "".concat(I.SKEW, "(").concat(o).concat(l, ", ").concat(u).concat(E, ")");

              default:
                return "";
            }
          }).join(" "),
              a = i.setStyle;
          U(t, O.TRANSFORM_PREFIXED, i), a(t, O.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === g.TRANSFORM_MOVE && void 0 !== d || s === g.TRANSFORM_SCALE && void 0 !== d || s === g.TRANSFORM_ROTATE && (void 0 !== f || void 0 !== l)) && a(t, O.TRANSFORM_STYLE_PREFIXED, I.PRESERVE_3D);
          var u, c, s, f, l, d;
        }(t, e, n, i, a);

      case I.RENDER_STYLE:
        return function (t, e, n, r, i, o) {
          var a = o.setStyle,
              u = r.actionTypeId,
              c = r.config;

          switch (u) {
            case g.STYLE_SIZE:
              var s = r.config,
                  f = s.widthUnit,
                  d = void 0 === f ? "" : f,
                  E = s.heightUnit,
                  p = void 0 === E ? "" : E,
                  v = n.widthValue,
                  _ = n.heightValue;
              void 0 !== v && (d === I.AUTO && (d = "px"), U(t, I.WIDTH, o), a(t, I.WIDTH, v + d)), void 0 !== _ && (p === I.AUTO && (p = "px"), U(t, I.HEIGHT, o), a(t, I.HEIGHT, _ + p));
              break;

            case g.STYLE_FILTER:
              !function (t, e, n, r) {
                var i = (0, l.default)(e, function (t, e, r) {
                  return "".concat(t, " ").concat(r, "(").concat(e).concat(G(r, n), ")");
                }, ""),
                    o = r.setStyle;
                U(t, I.FILTER, r), o(t, I.FILTER, i);
              }(t, n, c, o);
              break;

            case g.STYLE_BACKGROUND_COLOR:
            case g.STYLE_BORDER:
            case g.STYLE_TEXT_COLOR:
              var h = m[u],
                  T = Math.round(n.rValue),
                  O = Math.round(n.gValue),
                  y = Math.round(n.bValue),
                  A = n.aValue;
              U(t, h, o), a(t, h, A >= 1 ? "rgb(".concat(T, ",").concat(O, ",").concat(y, ")") : "rgba(".concat(T, ",").concat(O, ",").concat(y, ",").concat(A, ")"));
              break;

            default:
              var S = c.unit,
                  R = void 0 === S ? "" : S;
              U(t, i, o), a(t, i, n.value + R);
          }
        }(t, 0, n, i, o, a);

      case I.RENDER_GENERAL:
        return function (t, e, n) {
          var r = n.setStyle;

          switch (e.actionTypeId) {
            case g.GENERAL_DISPLAY:
              var i = e.config.value;
              return void (i === I.FLEX && O.IS_BROWSER_ENV ? r(t, I.DISPLAY, O.FLEX_PREFIXED) : r(t, I.DISPLAY, i));
          }
        }(t, i, a);

      case I.RENDER_PLUGIN:
        var s = i.actionTypeId;
        if ((0, h.isPluginType)(s)) return (0, h.renderPlugin)(s)(c, e, i);
    }
  }, e.clearAllStyles = function (t) {
    var e = t.store,
        n = t.elementApi,
        r = e.getState().ixData,
        i = r.events,
        o = void 0 === i ? {} : i,
        a = r.actionLists,
        u = void 0 === a ? {} : a;
    Object.keys(o).forEach(function (t) {
      var e = o[t],
          r = e.action.config,
          i = r.actionListId,
          a = u[i];
      a && W({
        actionList: a,
        event: e,
        elementApi: n
      });
    }), Object.keys(u).forEach(function (t) {
      W({
        actionList: u[t],
        elementApi: n
      });
    });
  }, e.cleanupHTMLElement = function (t, e, n) {
    var r = n.setStyle,
        i = n.getStyle,
        o = e.actionTypeId;

    if (o === g.STYLE_SIZE) {
      var a = e.config;
      a.widthUnit === I.AUTO && r(t, I.WIDTH, ""), a.heightUnit === I.AUTO && r(t, I.HEIGHT, "");
    }

    i(t, I.WILL_CHANGE) && k({
      effect: B,
      actionTypeId: o,
      elementApi: n
    })(t);
  }, e.getMaxDurationItemIndex = K, e.getActionListProgress = function (t, e) {
    var n = t.actionItemGroups,
        r = t.useFirstGroupAsInitialState,
        i = e.actionItem,
        o = e.verboseTimeElapsed,
        a = void 0 === o ? 0 : o,
        u = 0,
        c = 0;
    return n.forEach(function (t, e) {
      if (!r || 0 !== e) {
        var n = t.actionItems,
            o = n[K(n)],
            s = o.config,
            f = o.actionTypeId;
        i.id === o.id && (c = u + a);
        var l = x(f) === I.RENDER_GENERAL ? 0 : s.duration;
        u += s.delay + l;
      }
    }), u > 0 ? (0, _.optimizeFloat)(c / u) : 0;
  }, e.reduceListToGroup = function (t) {
    var e = t.actionListId,
        n = t.actionItemId,
        r = t.rawData,
        i = r.actionLists[e];
    if (!i) throw new Error(["IX2VanillaUtils: Could not find action list with ID ".concat(JSON.stringify(e)), "", "Raw Data:", JSON.stringify(r)].join("\n"));

    var o = i.actionItemGroups,
        a = i.continuousParameterGroups,
        u = [],
        s = function s(t) {
      return u.push((0, p.mergeIn)(t, ["config"], {
        delay: 0,
        duration: 0
      })), t.id === n;
    };

    return o && o.some(function (t) {
      return t.actionItems.some(s);
    }), a && a.some(function (t) {
      return t.continuousActionGroups.some(function (t) {
        return t.actionItems.some(s);
      });
    }), (0, p.setIn)(r, ["actionLists"], (0, c.default)({}, e, {
      id: e,
      actionItemGroups: [{
        actionItems: u
      }]
    }));
  }, e.shouldNamespaceEventParameter = function (t, e) {
    var n = e.basedOn;
    return t === T.SCROLLING_IN_VIEW && (n === T.ELEMENT || null == n) || t === T.MOUSE_MOVE && n === T.ELEMENT;
  }, e.getNamespacedParameterId = function (t, e) {
    return t + I.COLON_DELIMITER + e;
  }, e.shouldAllowMediaQuery = function (t, e) {
    if (null == e) return !0;
    return -1 !== t.indexOf(e);
  }, e.mediaQueriesEqual = function (t, e) {
    return (0, v.default)(t && t.sort(), e && e.sort());
  }, e.stringifyTarget = function (t) {
    if ("string" == typeof t) return t;
    var e = t.id,
        n = void 0 === e ? "" : e,
        r = t.selector,
        i = void 0 === r ? "" : r,
        o = t.useEventTarget,
        a = void 0 === o ? "" : o;
    return n + I.BAR_DELIMITER + i + I.BAR_DELIMITER + a;
  }, e.getItemConfigByKey = void 0;

  var f = s(n(194)),
      l = s(n(195)),
      d = s(n(201)),
      E = s(n(23)),
      p = n(14),
      v = s(n(92)),
      _ = n(85),
      h = n(89),
      I = n(48),
      T = n(88),
      g = n(47),
      O = n(30),
      y = function y(t) {
    return t.trim();
  },
      m = Object.freeze((r = {}, (0, c.default)(r, g.STYLE_BACKGROUND_COLOR, I.BACKGROUND_COLOR), (0, c.default)(r, g.STYLE_BORDER, I.BORDER_COLOR), (0, c.default)(r, g.STYLE_TEXT_COLOR, I.COLOR), r)),
      A = Object.freeze((i = {}, (0, c.default)(i, O.TRANSFORM_PREFIXED, I.TRANSFORM), (0, c.default)(i, I.BACKGROUND_COLOR, I.BACKGROUND), (0, c.default)(i, I.OPACITY, I.OPACITY), (0, c.default)(i, I.FILTER, I.FILTER), (0, c.default)(i, I.WIDTH, I.WIDTH), (0, c.default)(i, I.HEIGHT, I.HEIGHT), i)),
      S = {},
      R = 1;

  var N = 1;

  var b = function b(t, e) {
    return t === e;
  };

  function C(t) {
    var e = (0, u.default)(t);
    return "string" === e ? {
      id: t
    } : null != t && "object" === e ? {
      id: t.id,
      objectId: t.objectId,
      selector: t.selector,
      selectorGuids: t.selectorGuids,
      appliesTo: t.appliesTo,
      useEventTarget: t.useEventTarget
    } : {};
  }

  function L(t) {
    var e = t.config,
        n = t.event,
        r = t.eventTarget,
        i = t.elementRoot,
        o = t.elementApi;
    if (!o) throw new Error("IX2 missing elementApi");
    var a = o.getValidDocument,
        u = o.getQuerySelector,
        c = o.queryDocument,
        s = o.getChildElements,
        f = o.getSiblingElements,
        l = o.matchSelector,
        d = o.elementContains,
        p = o.isSiblingNode,
        v = e.target;
    if (!v) return [];

    var _ = C(v),
        h = _.id,
        g = _.objectId,
        y = _.selector,
        m = _.selectorGuids,
        A = _.appliesTo,
        R = _.useEventTarget;

    if (g) return [S[g] || (S[g] = {})];

    if (A === T.PAGE) {
      var N = a(h);
      return N ? [N] : [];
    }

    var b,
        L,
        w,
        P = (0, E.default)(n, "action.config.affectedElements", {})[h || y] || {},
        D = Boolean(P.id || P.selector),
        x = n && u(C(n.target));

    if (D ? (b = P.limitAffectedElements, L = x, w = u(P)) : L = w = u({
      id: h,
      selector: y,
      selectorGuids: m
    }), n && R) {
      var M = r && (w || !0 === R) ? [r] : c(x);

      if (w) {
        if (R === I.PARENT) return c(w).filter(function (t) {
          return M.some(function (e) {
            return d(t, e);
          });
        });
        if (R === I.CHILDREN) return c(w).filter(function (t) {
          return M.some(function (e) {
            return d(e, t);
          });
        });
        if (R === I.SIBLINGS) return c(w).filter(function (t) {
          return M.some(function (e) {
            return p(e, t);
          });
        });
      }

      return M;
    }

    return null == L || null == w ? [] : O.IS_BROWSER_ENV && i ? c(w).filter(function (t) {
      return i.contains(t);
    }) : b === I.CHILDREN ? c(L, w) : b === I.IMMEDIATE_CHILDREN ? s(c(L)).filter(l(w)) : b === I.SIBLINGS ? f(c(L)).filter(l(w)) : c(w);
  }

  var w = /px/,
      P = function P(t, e) {
    return e.reduce(function (t, e) {
      return null == t[e.type] && (t[e.type] = F[e.type]), t;
    }, t || {});
  };

  var D = function D(t, e) {
    return e && (t[e.type] = e.value || 0), t;
  };

  function x(t) {
    return /^TRANSFORM_/.test(t) ? I.RENDER_TRANSFORM : /^STYLE_/.test(t) ? I.RENDER_STYLE : /^GENERAL_/.test(t) ? I.RENDER_GENERAL : /^PLUGIN_/.test(t) ? I.RENDER_PLUGIN : void 0;
  }

  e.getItemConfigByKey = function (t, e, n) {
    if ((0, h.isPluginType)(t)) return (0, h.getPluginConfig)(t)(n, e);

    switch (t) {
      case g.STYLE_FILTER:
        var r = (0, d.default)(n.filters, function (t) {
          return t.type === e;
        });
        return r ? r.value : 0;

      default:
        return n[e];
    }
  };

  var M = (o = {}, (0, c.default)(o, g.TRANSFORM_MOVE, Object.freeze({
    xValue: 0,
    yValue: 0,
    zValue: 0
  })), (0, c.default)(o, g.TRANSFORM_SCALE, Object.freeze({
    xValue: 1,
    yValue: 1,
    zValue: 1
  })), (0, c.default)(o, g.TRANSFORM_ROTATE, Object.freeze({
    xValue: 0,
    yValue: 0,
    zValue: 0
  })), (0, c.default)(o, g.TRANSFORM_SKEW, Object.freeze({
    xValue: 0,
    yValue: 0
  })), o),
      F = Object.freeze({
    blur: 0,
    "hue-rotate": 0,
    invert: 0,
    grayscale: 0,
    saturate: 100,
    sepia: 0,
    contrast: 100,
    brightness: 100
  }),
      G = function G(t, e) {
    var n = (0, d.default)(e.filters, function (e) {
      return e.type === t;
    });
    if (n && n.unit) return n.unit;

    switch (t) {
      case "blur":
        return "px";

      case "hue-rotate":
        return "deg";

      default:
        return "%";
    }
  },
      j = Object.keys(M);

  var V = /^rgb/,
      X = RegExp("rgba?".concat("\\(([^)]+)\\)"));

  function U(t, e, n) {
    if (O.IS_BROWSER_ENV) {
      var r = A[e];

      if (r) {
        var i = n.getStyle,
            o = n.setStyle,
            a = i(t, I.WILL_CHANGE);

        if (a) {
          var u = a.split(I.COMMA_DELIMITER).map(y);
          -1 === u.indexOf(r) && o(t, I.WILL_CHANGE, u.concat(r).join(I.COMMA_DELIMITER));
        } else o(t, I.WILL_CHANGE, r);
      }
    }
  }

  function B(t, e, n) {
    if (O.IS_BROWSER_ENV) {
      var r = A[e];

      if (r) {
        var i = n.getStyle,
            o = n.setStyle,
            a = i(t, I.WILL_CHANGE);
        a && -1 !== a.indexOf(r) && o(t, I.WILL_CHANGE, a.split(I.COMMA_DELIMITER).map(y).filter(function (t) {
          return t !== r;
        }).join(I.COMMA_DELIMITER));
      }
    }
  }

  function W(t) {
    var e = t.actionList,
        n = void 0 === e ? {} : e,
        r = t.event,
        i = t.elementApi,
        o = n.actionItemGroups,
        a = n.continuousParameterGroups;
    o && o.forEach(function (t) {
      H({
        actionGroup: t,
        event: r,
        elementApi: i
      });
    }), a && a.forEach(function (t) {
      t.continuousActionGroups.forEach(function (t) {
        H({
          actionGroup: t,
          event: r,
          elementApi: i
        });
      });
    });
  }

  function H(t) {
    var e = t.actionGroup,
        n = t.event,
        r = t.elementApi;
    e.actionItems.forEach(function (t) {
      var e,
          i = t.actionTypeId,
          o = t.config;
      e = (0, h.isPluginType)(i) ? (0, h.clearPlugin)(i) : k({
        effect: Y,
        actionTypeId: i,
        elementApi: r
      }), L({
        config: o,
        event: n,
        elementApi: r
      }).forEach(e);
    });
  }

  var k = function k(t) {
    var e = t.effect,
        n = t.actionTypeId,
        r = t.elementApi;
    return function (t) {
      switch (n) {
        case g.TRANSFORM_MOVE:
        case g.TRANSFORM_SCALE:
        case g.TRANSFORM_ROTATE:
        case g.TRANSFORM_SKEW:
          e(t, O.TRANSFORM_PREFIXED, r);
          break;

        case g.STYLE_FILTER:
          e(t, I.FILTER, r);
          break;

        case g.STYLE_OPACITY:
          e(t, I.OPACITY, r);
          break;

        case g.STYLE_SIZE:
          e(t, I.WIDTH, r), e(t, I.HEIGHT, r);
          break;

        case g.STYLE_BACKGROUND_COLOR:
        case g.STYLE_BORDER:
        case g.STYLE_TEXT_COLOR:
          e(t, m[n], r);
          break;

        case g.GENERAL_DISPLAY:
          e(t, I.DISPLAY, r);
      }
    };
  };

  function Y(t, e, n) {
    var r = n.setStyle;
    B(t, e, n), r(t, e, ""), e === O.TRANSFORM_PREFIXED && r(t, O.TRANSFORM_STYLE_PREFIXED, "");
  }

  function K(t) {
    var e = 0,
        n = 0;
    return t.forEach(function (t, r) {
      var i = t.config,
          o = i.delay + i.duration;
      o >= e && (e = o, n = r);
    }), n;
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t || t != t ? e : t;
  };
}, function (t, e, n) {
  var r = n(196),
      i = n(90),
      o = n(5),
      a = n(200),
      u = n(1);

  t.exports = function (t, e, n) {
    var c = u(t) ? r : a,
        s = arguments.length < 3;
    return c(t, o(e, 4), n, s, i);
  };
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    var i = -1,
        o = null == t ? 0 : t.length;

    for (r && o && (n = t[++i]); ++i < o;) {
      n = e(n, t[i], i, t);
    }

    return n;
  };
}, function (t, e, n) {
  var r = n(198)();
  t.exports = r;
}, function (t, e) {
  t.exports = function (t) {
    return function (e, n, r) {
      for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
        var c = a[t ? u : ++i];
        if (!1 === n(o[c], c, o)) break;
      }

      return e;
    };
  };
}, function (t, e, n) {
  var r = n(9);

  t.exports = function (t, e) {
    return function (n, i) {
      if (null == n) return n;
      if (!r(n)) return t(n, i);

      for (var o = n.length, a = e ? o : -1, u = Object(n); (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);) {
        ;
      }

      return n;
    };
  };
}, function (t, e) {
  t.exports = function (t, e, n, r, i) {
    return i(t, function (t, i, o) {
      n = r ? (r = !1, t) : e(n, t, i, o);
    }), n;
  };
}, function (t, e, n) {
  var r = n(62)(n(202));
  t.exports = r;
}, function (t, e, n) {
  var r = n(82),
      i = n(5),
      o = n(45),
      a = Math.max,
      u = Math.min;

  t.exports = function (t, e, n) {
    var c = null == t ? 0 : t.length;
    if (!c) return -1;
    var s = c - 1;
    return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0);
  };
}, function (t, e, n) {
  "use strict";

  var r = Object.prototype.hasOwnProperty;

  function i(t, e) {
    return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
  }

  t.exports = function (t, e) {
    if (i(t, e)) return !0;
    if ("object" != _typeof(t) || null === t || "object" != _typeof(e) || null === e) return !1;
    var n = Object.keys(t),
        o = Object.keys(e);
    if (n.length !== o.length) return !1;

    for (var a = 0; a < n.length; a++) {
      if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
    }

    return !0;
  };
}, function (t, e, n) {
  "use strict";

  var r,
      i = n(0)(n(15)),
      o = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixRequest = void 0;
  var a = o(n(26)),
      u = n(2),
      c = n(14),
      s = u.IX2EngineActionTypes,
      f = s.IX2_PREVIEW_REQUESTED,
      l = s.IX2_PLAYBACK_REQUESTED,
      d = s.IX2_STOP_REQUESTED,
      E = s.IX2_CLEAR_REQUESTED,
      p = {
    preview: {},
    playback: {},
    stop: {},
    clear: {}
  },
      v = Object.create(null, (r = {}, (0, i.default)(r, f, {
    value: "preview"
  }), (0, i.default)(r, l, {
    value: "playback"
  }), (0, i.default)(r, d, {
    value: "stop"
  }), (0, i.default)(r, E, {
    value: "clear"
  }), r));

  e.ixRequest = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
        e = arguments.length > 1 ? arguments[1] : void 0;

    if (e.type in v) {
      var n = [v[e.type]];
      return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload));
    }

    return t;
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixSession = void 0;
  var r = n(2),
      i = n(14),
      o = r.IX2EngineActionTypes,
      a = o.IX2_SESSION_INITIALIZED,
      u = o.IX2_SESSION_STARTED,
      c = o.IX2_TEST_FRAME_RENDERED,
      s = o.IX2_SESSION_STOPPED,
      f = o.IX2_EVENT_LISTENER_ADDED,
      l = o.IX2_EVENT_STATE_CHANGED,
      d = o.IX2_ANIMATION_FRAME_CHANGED,
      E = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      p = o.IX2_VIEWPORT_WIDTH_CHANGED,
      v = o.IX2_MEDIA_QUERIES_DEFINED,
      _ = {
    active: !1,
    tick: 0,
    eventListeners: [],
    eventState: {},
    playbackState: {},
    viewportWidth: 0,
    mediaQueryKey: null,
    hasBoundaryNodes: !1,
    hasDefinedMediaQueries: !1
  };

  e.ixSession = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
        e = arguments.length > 1 ? arguments[1] : void 0;

    switch (e.type) {
      case a:
        var n = e.payload.hasBoundaryNodes;
        return (0, i.set)(t, "hasBoundaryNodes", n);

      case u:
        return (0, i.set)(t, "active", !0);

      case c:
        var r = e.payload.step,
            o = void 0 === r ? 20 : r;
        return (0, i.set)(t, "tick", t.tick + o);

      case s:
        return _;

      case d:
        var h = e.payload.now;
        return (0, i.set)(t, "tick", h);

      case f:
        var I = (0, i.addLast)(t.eventListeners, e.payload);
        return (0, i.set)(t, "eventListeners", I);

      case l:
        var T = e.payload,
            g = T.stateKey,
            O = T.newState;
        return (0, i.setIn)(t, ["eventState", g], O);

      case E:
        var y = e.payload,
            m = y.actionListId,
            A = y.isPlaying;
        return (0, i.setIn)(t, ["playbackState", m], A);

      case p:
        for (var S = e.payload, R = S.width, N = S.mediaQueries, b = N.length, C = null, L = 0; L < b; L++) {
          var w = N[L],
              P = w.key,
              D = w.min,
              x = w.max;

          if (R >= D && R <= x) {
            C = P;
            break;
          }
        }

        return (0, i.merge)(t, {
          viewportWidth: R,
          mediaQueryKey: C
        });

      case v:
        return (0, i.set)(t, "hasDefinedMediaQueries", !0);

      default:
        return t;
    }
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixInstances = void 0;

  var r = n(2),
      i = n(14),
      o = r.IX2EngineActionTypes,
      a = o.IX2_RAW_DATA_IMPORTED,
      u = o.IX2_SESSION_STOPPED,
      c = o.IX2_INSTANCE_ADDED,
      s = o.IX2_INSTANCE_STARTED,
      f = o.IX2_INSTANCE_REMOVED,
      l = o.IX2_ANIMATION_FRAME_CHANGED,
      d = r.IX2EasingUtils,
      E = d.optimizeFloat,
      p = d.applyEasing,
      v = d.createBezierEasing,
      _ = r.IX2EngineConstants.RENDER_GENERAL,
      h = r.IX2VanillaUtils,
      I = h.getItemConfigByKey,
      T = h.getRenderType,
      g = h.getStyleProp,
      O = function O(t, e) {
    var n = t.position,
        r = t.parameterId,
        o = t.actionGroups,
        a = t.destinationKeys,
        u = t.smoothing,
        c = t.restingValue,
        s = t.actionTypeId,
        f = t.customEasingFn,
        l = e.payload.parameters,
        d = Math.max(1 - u, .01),
        v = l[r];
    null == v && (d = 1, v = c);

    var _,
        h,
        T,
        g,
        O = Math.max(v, 0) || 0,
        y = E(O - n),
        m = E(n + y * d),
        A = 100 * m;

    if (m === n && t.current) return t;

    for (var S = 0, R = o.length; S < R; S++) {
      var N = o[S],
          b = N.keyframe,
          C = N.actionItems;

      if (0 === S && (_ = C[0]), A >= b) {
        _ = C[0];
        var L = o[S + 1],
            w = L && A !== b;
        h = w ? L.actionItems[0] : null, w && (T = b / 100, g = (L.keyframe - b) / 100);
      }
    }

    var P = {};
    if (_ && !h) for (var D = 0, x = a.length; D < x; D++) {
      var M = a[D];
      P[M] = I(s, M, _.config);
    } else if (_ && h) for (var F = (m - T) / g, G = _.config.easing, j = p(G, F, f), V = 0, X = a.length; V < X; V++) {
      var U = a[V],
          B = I(s, U, _.config),
          W = (I(s, U, h.config) - B) * j + B;
      P[U] = W;
    }
    return (0, i.merge)(t, {
      position: m,
      current: P
    });
  },
      y = function y(t, e) {
    var n = t,
        r = n.active,
        o = n.origin,
        a = n.start,
        u = n.immediate,
        c = n.renderType,
        s = n.verbose,
        f = n.actionItem,
        l = n.destination,
        d = n.destinationKeys,
        v = n.pluginDuration,
        h = n.instanceDelay,
        I = n.customEasingFn,
        T = f.config.easing,
        g = f.config,
        O = g.duration,
        y = g.delay;
    null != v && (O = v), y = null != h ? h : y, c === _ ? O = 0 : u && (O = y = 0);
    var m = e.payload.now;

    if (r && o) {
      var A = m - (a + y);

      if (s) {
        var S = m - a,
            R = O + y,
            N = E(Math.min(Math.max(0, S / R), 1));
        t = (0, i.set)(t, "verboseTimeElapsed", R * N);
      }

      if (A < 0) return t;
      var b = E(Math.min(Math.max(0, A / O), 1)),
          C = p(T, b, I),
          L = {},
          w = null;
      return d.length && (w = d.reduce(function (t, e) {
        var n = l[e],
            r = parseFloat(o[e]) || 0,
            i = (parseFloat(n) - r) * C + r;
        return t[e] = i, t;
      }, {})), L.current = w, L.position = b, 1 === b && (L.active = !1, L.complete = !0), (0, i.merge)(t, L);
    }

    return t;
  };

  e.ixInstances = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;

    switch (e.type) {
      case a:
        return e.payload.ixInstances || Object.freeze({});

      case u:
        return Object.freeze({});

      case c:
        var n = e.payload,
            r = n.instanceId,
            o = n.elementId,
            d = n.actionItem,
            E = n.eventId,
            p = n.eventTarget,
            _ = n.eventStateKey,
            h = n.actionListId,
            I = n.groupIndex,
            m = n.isCarrier,
            A = n.origin,
            S = n.destination,
            R = n.immediate,
            N = n.verbose,
            b = n.continuous,
            C = n.parameterId,
            L = n.actionGroups,
            w = n.smoothing,
            P = n.restingValue,
            D = n.pluginInstance,
            x = n.pluginDuration,
            M = n.instanceDelay,
            F = d.actionTypeId,
            G = T(F),
            j = g(G, F),
            V = Object.keys(S).filter(function (t) {
          return null != S[t];
        }),
            X = d.config.easing;
        return (0, i.set)(t, r, {
          id: r,
          elementId: o,
          active: !1,
          position: 0,
          start: 0,
          origin: A,
          destination: S,
          destinationKeys: V,
          immediate: R,
          verbose: N,
          current: null,
          actionItem: d,
          actionTypeId: F,
          eventId: E,
          eventTarget: p,
          eventStateKey: _,
          actionListId: h,
          groupIndex: I,
          renderType: G,
          isCarrier: m,
          styleProp: j,
          continuous: b,
          parameterId: C,
          actionGroups: L,
          smoothing: w,
          restingValue: P,
          pluginInstance: D,
          pluginDuration: x,
          instanceDelay: M,
          customEasingFn: Array.isArray(X) && 4 === X.length ? v(X) : void 0
        });

      case s:
        var U = e.payload,
            B = U.instanceId,
            W = U.time;
        return (0, i.mergeIn)(t, [B], {
          active: !0,
          complete: !1,
          start: W
        });

      case f:
        var H = e.payload.instanceId;
        if (!t[H]) return t;

        for (var k = {}, Y = Object.keys(t), K = Y.length, z = 0; z < K; z++) {
          var Q = Y[z];
          Q !== H && (k[Q] = t[Q]);
        }

        return k;

      case l:
        for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
          var tt = $[J],
              et = t[tt],
              nt = et.continuous ? O : y;
          q = (0, i.set)(q, tt, nt(et, e));
        }

        return q;

      default:
        return t;
    }
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ixParameters = void 0;
  var r = n(2).IX2EngineActionTypes,
      i = r.IX2_RAW_DATA_IMPORTED,
      o = r.IX2_SESSION_STOPPED,
      a = r.IX2_PARAMETER_CHANGED;

  e.ixParameters = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 ? arguments[1] : void 0;

    switch (e.type) {
      case i:
        return e.payload.ixParameters || {};

      case o:
        return {};

      case a:
        var n = e.payload,
            r = n.key,
            u = n.value;
        return t[r] = u, t;

      default:
        return t;
    }
  };
}, function (t, e, n) {
  var r = n(209);

  t.exports = function (t, e) {
    if (null == t) return {};
    var n,
        i,
        o = r(t, e);

    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);

      for (i = 0; i < a.length; i++) {
        n = a[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
      }
    }

    return o;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    if (null == t) return {};
    var n,
        r,
        i = {},
        o = Object.keys(t);

    for (r = 0; r < o.length; r++) {
      n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
    }

    return i;
  };
}, function (t, e, n) {
  var r = n(39),
      i = n(41),
      o = n(9),
      a = n(211),
      u = n(212),
      c = "[object Map]",
      s = "[object Set]";

  t.exports = function (t) {
    if (null == t) return 0;
    if (o(t)) return a(t) ? u(t) : t.length;
    var e = i(t);
    return e == c || e == s ? t.size : r(t).length;
  };
}, function (t, e, n) {
  var r = n(8),
      i = n(1),
      o = n(7),
      a = "[object String]";

  t.exports = function (t) {
    return "string" == typeof t || !i(t) && o(t) && r(t) == a;
  };
}, function (t, e, n) {
  var r = n(213),
      i = n(214),
      o = n(215);

  t.exports = function (t) {
    return i(t) ? o(t) : r(t);
  };
}, function (t, e, n) {
  var r = n(81)("length");
  t.exports = r;
}, function (t, e) {
  var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

  t.exports = function (t) {
    return n.test(t);
  };
}, function (t, e) {
  var n = "[\\ud800-\\udfff]",
      r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      i = "\\ud83c[\\udffb-\\udfff]",
      o = "[^\\ud800-\\udfff]",
      a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      c = "(?:" + r + "|" + i + ")" + "?",
      s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
      f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
      l = RegExp(i + "(?=" + i + ")|" + f + s, "g");

  t.exports = function (t) {
    for (var e = l.lastIndex = 0; l.test(t);) {
      ++e;
    }

    return e;
  };
}, function (t, e, n) {
  var r = n(5),
      i = n(217),
      o = n(218);

  t.exports = function (t, e) {
    return o(t, i(r(e)));
  };
}, function (t, e) {
  var n = "Expected a function";

  t.exports = function (t) {
    if ("function" != typeof t) throw new TypeError(n);
    return function () {
      var e = arguments;

      switch (e.length) {
        case 0:
          return !t.call(this);

        case 1:
          return !t.call(this, e[0]);

        case 2:
          return !t.call(this, e[0], e[1]);

        case 3:
          return !t.call(this, e[0], e[1], e[2]);
      }

      return !t.apply(this, e);
    };
  };
}, function (t, e, n) {
  var r = n(80),
      i = n(5),
      o = n(219),
      a = n(222);

  t.exports = function (t, e) {
    if (null == t) return {};
    var n = r(a(t), function (t) {
      return [t];
    });
    return e = i(e), o(t, n, function (t, n) {
      return e(t, n[0]);
    });
  };
}, function (t, e, n) {
  var r = n(42),
      i = n(220),
      o = n(24);

  t.exports = function (t, e, n) {
    for (var a = -1, u = e.length, c = {}; ++a < u;) {
      var s = e[a],
          f = r(t, s);
      n(f, s) && i(c, o(s, t), f);
    }

    return c;
  };
}, function (t, e, n) {
  var r = n(221),
      i = n(24),
      o = n(36),
      a = n(4),
      u = n(13);

  t.exports = function (t, e, n, c) {
    if (!a(t)) return t;

    for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
      var E = u(e[s]),
          p = n;

      if (s != l) {
        var v = d[E];
        void 0 === (p = c ? c(v, E, d) : void 0) && (p = a(v) ? v : o(e[s + 1]) ? [] : {});
      }

      r(d, E, p), d = d[E];
    }

    return t;
  };
}, function (t, e, n) {
  var r = n(94),
      i = n(31),
      o = Object.prototype.hasOwnProperty;

  t.exports = function (t, e, n) {
    var a = t[e];
    o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n);
  };
}, function (t, e, n) {
  var r = n(69),
      i = n(223),
      o = n(225);

  t.exports = function (t) {
    return r(t, o, i);
  };
}, function (t, e, n) {
  var r = n(34),
      i = n(224),
      o = n(70),
      a = n(71),
      u = Object.getOwnPropertySymbols ? function (t) {
    for (var e = []; t;) {
      r(e, o(t)), t = i(t);
    }

    return e;
  } : a;
  t.exports = u;
}, function (t, e, n) {
  var r = n(74)(Object.getPrototypeOf, Object);
  t.exports = r;
}, function (t, e, n) {
  var r = n(72),
      i = n(226),
      o = n(9);

  t.exports = function (t) {
    return o(t) ? r(t, !0) : i(t);
  };
}, function (t, e, n) {
  var r = n(4),
      i = n(40),
      o = n(227),
      a = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    if (!r(t)) return o(t);
    var e = i(t),
        n = [];

    for (var u in t) {
      ("constructor" != u || !e && a.call(t, u)) && n.push(u);
    }

    return n;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = [];
    if (null != t) for (var n in Object(t)) {
      e.push(n);
    }
    return e;
  };
}, function (t, e, n) {
  var r = n(39),
      i = n(41),
      o = n(22),
      a = n(1),
      u = n(9),
      c = n(35),
      s = n(40),
      f = n(37),
      l = "[object Map]",
      d = "[object Set]",
      E = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    if (null == t) return !0;
    if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
    var e = i(t);
    if (e == l || e == d) return !t.size;
    if (s(t)) return !r(t).length;

    for (var n in t) {
      if (E.call(t, n)) return !1;
    }

    return !0;
  };
}, function (t, e, n) {
  var r = n(94),
      i = n(91),
      o = n(5);

  t.exports = function (t, e) {
    var n = {};
    return e = o(e, 3), i(t, function (t, i, o) {
      r(n, i, e(t, i, o));
    }), n;
  };
}, function (t, e, n) {
  var r = n(231),
      i = n(90),
      o = n(232),
      a = n(1);

  t.exports = function (t, e) {
    return (a(t) ? r : i)(t, o(e));
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);) {
      ;
    }

    return t;
  };
}, function (t, e, n) {
  var r = n(44);

  t.exports = function (t) {
    return "function" == typeof t ? t : r;
  };
}, function (t, e, n) {
  var r = n(96),
      i = n(79),
      o = n(45),
      a = n(78);

  t.exports = function (t, e, n) {
    t = a(t), e = i(e);
    var u = t.length,
        c = n = void 0 === n ? u : r(o(n), 0, u);
    return (n -= e.length) >= 0 && t.slice(n, c) == e;
  };
}, function (t, e, n) {
  var r = n(235),
      i = n(4),
      o = "Expected a function";

  t.exports = function (t, e, n) {
    var a = !0,
        u = !0;
    if ("function" != typeof t) throw new TypeError(o);
    return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
      leading: a,
      maxWait: e,
      trailing: u
    });
  };
}, function (t, e, n) {
  var r = n(4),
      i = n(236),
      o = n(46),
      a = "Expected a function",
      u = Math.max,
      c = Math.min;

  t.exports = function (t, e, n) {
    var s,
        f,
        l,
        d,
        E,
        p,
        v = 0,
        _ = !1,
        h = !1,
        I = !0;

    if ("function" != typeof t) throw new TypeError(a);

    function T(e) {
      var n = s,
          r = f;
      return s = f = void 0, v = e, d = t.apply(r, n);
    }

    function g(t) {
      var n = t - p;
      return void 0 === p || n >= e || n < 0 || h && t - v >= l;
    }

    function O() {
      var t = i();
      if (g(t)) return y(t);
      E = setTimeout(O, function (t) {
        var n = e - (t - p);
        return h ? c(n, l - (t - v)) : n;
      }(t));
    }

    function y(t) {
      return E = void 0, I && s ? T(t) : (s = f = void 0, d);
    }

    function m() {
      var t = i(),
          n = g(t);

      if (s = arguments, f = this, p = t, n) {
        if (void 0 === E) return function (t) {
          return v = t, E = setTimeout(O, e), _ ? T(t) : d;
        }(p);
        if (h) return clearTimeout(E), E = setTimeout(O, e), T(p);
      }

      return void 0 === E && (E = setTimeout(O, e)), d;
    }

    return e = o(e) || 0, r(n) && (_ = !!n.leading, l = (h = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, I = "trailing" in n ? !!n.trailing : I), m.cancel = function () {
      void 0 !== E && clearTimeout(E), v = 0, s = p = f = E = void 0;
    }, m.flush = function () {
      return void 0 === E ? d : y(i());
    }, m;
  };
}, function (t, e, n) {
  var r = n(3);

  t.exports = function () {
    return r.Date.now();
  };
}, function (t, e, n) {
  "use strict";

  var r = n(0)(n(10));
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.setStyle = function (t, e, n) {
    t.style[e] = n;
  }, e.getStyle = function (t, e) {
    return t.style[e];
  }, e.getProperty = function (t, e) {
    return t[e];
  }, e.matchSelector = function (t) {
    return function (e) {
      return e[o](t);
    };
  }, e.getQuerySelector = function (t) {
    var e = t.id,
        n = t.selector;

    if (e) {
      var r = e;

      if (-1 !== e.indexOf(u)) {
        var i = e.split(u),
            o = i[0];
        if (r = i[1], o !== document.documentElement.getAttribute(f)) return null;
      }

      return '[data-w-id^="'.concat(r, '"]');
    }

    return n;
  }, e.getValidDocument = function (t) {
    if (null == t || t === document.documentElement.getAttribute(f)) return document;
    return null;
  }, e.queryDocument = function (t, e) {
    return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t));
  }, e.elementContains = function (t, e) {
    return t.contains(e);
  }, e.isSiblingNode = function (t, e) {
    return t !== e && t.parentNode === e.parentNode;
  }, e.getChildElements = function () {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = 0, r = t.length; n < r; n++) {
      var i = t[n].children,
          o = i.length;
      if (o) for (var a = 0; a < o; a++) {
        e.push(i[a]);
      }
    }

    return e;
  }, e.getSiblingElements = function () {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
      var o = t[r].parentNode;

      if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
        n.push(o);

        for (var a = o.firstElementChild; null != a;) {
          -1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling;
        }
      }
    }

    return e;
  }, e.getRefType = function (t) {
    if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? c : s;
    return null;
  }, e.getClosestElement = void 0;
  var i = n(2),
      o = i.IX2BrowserSupport.ELEMENT_MATCHES,
      a = i.IX2EngineConstants,
      u = a.IX2_ID_DELIMITER,
      c = a.HTML_ELEMENT,
      s = a.PLAIN_OBJECT,
      f = a.WF_PAGE;
  var l = Element.prototype.closest ? function (t, e) {
    return document.documentElement.contains(t) ? t.closest(e) : null;
  } : function (t, e) {
    if (!document.documentElement.contains(t)) return null;
    var n = t;

    do {
      if (n[o] && n[o](e)) return n;
      n = n.parentNode;
    } while (null != n);

    return null;
  };
  e.getClosestElement = l;
}, function (t, e, n) {
  "use strict";

  var r,
      i = n(0),
      o = i(n(15)),
      a = i(n(10)),
      u = n(0);
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;

  var c,
      s,
      f,
      l = u(n(26)),
      d = u(n(239)),
      E = u(n(23)),
      p = u(n(258)),
      v = n(93),
      _ = n(49),
      h = n(2),
      I = h.IX2EngineEventTypes,
      T = I.MOUSE_CLICK,
      g = I.MOUSE_SECOND_CLICK,
      O = I.MOUSE_DOWN,
      y = I.MOUSE_UP,
      m = I.MOUSE_OVER,
      A = I.MOUSE_OUT,
      S = I.DROPDOWN_CLOSE,
      R = I.DROPDOWN_OPEN,
      N = I.SLIDER_ACTIVE,
      b = I.SLIDER_INACTIVE,
      C = I.TAB_ACTIVE,
      L = I.TAB_INACTIVE,
      w = I.NAVBAR_CLOSE,
      P = I.NAVBAR_OPEN,
      D = I.MOUSE_MOVE,
      x = I.PAGE_SCROLL_DOWN,
      M = I.SCROLL_INTO_VIEW,
      F = I.COMPONENT_ACTIVE,
      G = I.COMPONENT_INACTIVE,
      j = I.SCROLL_OUT_OF_VIEW,
      V = I.PAGE_SCROLL_UP,
      X = I.SCROLLING_IN_VIEW,
      U = I.PAGE_FINISH,
      B = I.ECOMMERCE_CART_CLOSE,
      W = I.ECOMMERCE_CART_OPEN,
      H = I.PAGE_START,
      k = I.PAGE_SCROLL,
      Y = I.ELEMENT,
      K = I.VIEWPORT,
      z = I.PAGE,
      Q = h.IX2EngineConstants.COLON_DELIMITER,
      q = h.IX2VanillaUtils.getNamespacedParameterId,
      $ = function $(t) {
    return function (e) {
      return !("object" !== (0, a.default)(e) || !t(e)) || e;
    };
  },
      Z = $(function (t) {
    return t.element === t.nativeEvent.target;
  }),
      J = $(function (t) {
    var e = t.element,
        n = t.nativeEvent;
    return e.contains(n.target);
  }),
      tt = (0, d.default)([Z, J]),
      et = function et(t, e) {
    if (e) {
      var n = t.getState().ixData.events[e];
      if (n && !ct[n.eventTypeId]) return n;
    }

    return null;
  },
      nt = function nt(t, e) {
    var n = t.store,
        r = t.event,
        i = t.element,
        o = t.eventStateKey,
        a = r.action,
        u = r.id,
        c = a.config,
        s = c.actionListId,
        f = c.autoStopEventId,
        l = et(n, f);
    return l && (0, v.stopActionGroup)({
      store: n,
      eventId: f,
      eventTarget: i,
      eventStateKey: f + Q + o.split(Q)[1],
      actionListId: (0, E.default)(l, "action.config.actionListId")
    }), (0, v.stopActionGroup)({
      store: n,
      eventId: u,
      eventTarget: i,
      eventStateKey: o,
      actionListId: s
    }), (0, v.startActionGroup)({
      store: n,
      eventId: u,
      eventTarget: i,
      eventStateKey: o,
      actionListId: s
    }), e;
  },
      rt = function rt(t, e) {
    return function (n, r) {
      return !0 === t(n, r) ? e(n, r) : r;
    };
  },
      it = {
    handler: rt(tt, nt)
  },
      ot = (0, l.default)({}, it, {
    types: [F, G].join(" ")
  }),
      at = [{
    target: window,
    types: "resize orientationchange",
    throttle: !0
  }, {
    target: document,
    types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
    throttle: !0
  }],
      ut = {
    types: at
  },
      ct = {
    PAGE_START: H,
    PAGE_FINISH: U
  },
      st = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
    return {
      scrollLeft: c ? window.pageXOffset : s.scrollLeft,
      scrollTop: c ? window.pageYOffset : s.scrollTop,
      stiffScrollTop: (0, p.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
      scrollWidth: s.scrollWidth,
      scrollHeight: s.scrollHeight,
      clientWidth: s.clientWidth,
      clientHeight: s.clientHeight,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }),
      ft = function ft(t) {
    var e = t.element,
        n = t.nativeEvent,
        r = n.type,
        i = n.target,
        o = n.relatedTarget,
        a = e.contains(i);
    if ("mouseover" === r && a) return !0;
    var u = e.contains(o);
    return !("mouseout" !== r || !a || !u);
  },
      lt = function lt(t) {
    var e,
        n,
        r = t.element,
        i = t.event.config,
        o = st(),
        a = o.clientWidth,
        u = o.clientHeight,
        c = i.scrollOffsetValue,
        s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
    return e = r.getBoundingClientRect(), n = {
      left: 0,
      top: s,
      right: a,
      bottom: u - s
    }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top);
  },
      dt = function dt(t) {
    return function (e, n) {
      var r = e.nativeEvent.type,
          i = -1 !== [F, G].indexOf(r) ? r === F : n.isActive,
          o = (0, l.default)({}, n, {
        isActive: i
      });
      return n && o.isActive === n.isActive ? o : t(e, o) || o;
    };
  },
      Et = function Et(t) {
    return function (e, n) {
      var r = {
        elementHovered: ft(e)
      };
      return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r;
    };
  },
      pt = function pt(t) {
    return function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = st(),
          i = r.stiffScrollTop,
          o = r.scrollHeight,
          a = r.innerHeight,
          u = e.event,
          c = u.config,
          s = u.eventTypeId,
          f = c.scrollOffsetValue,
          d = "PX" === c.scrollOffsetUnit,
          E = o - a,
          p = Number((i / E).toFixed(2));
      if (n && n.percentTop === p) return n;

      var v,
          _,
          h = (d ? f : a * (f || 0) / 100) / E,
          I = 0;

      n && (v = p > n.percentTop, I = (_ = n.scrollingDown !== v) ? p : n.anchorTop);
      var T = s === x ? p >= I + h : p <= I - h,
          g = (0, l.default)({}, n, {
        percentTop: p,
        inBounds: T,
        anchorTop: I,
        scrollingDown: v
      });
      return n && T && (_ || g.inBounds !== n.inBounds) && t(e, g) || g;
    };
  },
      vt = function vt(t) {
    return function (e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        clickCount: 0
      },
          r = {
        clickCount: n.clickCount % 2 + 1
      };
      return r.clickCount !== n.clickCount && t(e, r) || r;
    };
  },
      _t = function _t() {
    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return (0, l.default)({}, ot, {
      handler: rt(t ? tt : Z, dt(function (t, e) {
        return e.isActive ? it.handler(t, e) : e;
      }))
    });
  },
      ht = function ht() {
    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
    return (0, l.default)({}, ot, {
      handler: rt(t ? tt : Z, dt(function (t, e) {
        return e.isActive ? e : it.handler(t, e);
      }))
    });
  },
      It = (0, l.default)({}, ut, {
    handler: (f = function f(t, e) {
      var n = e.elementVisible,
          r = t.event;
      return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === M === n ? (nt(t), (0, l.default)({}, e, {
        triggered: !0
      })) : e;
    }, function (t, e) {
      var n = (0, l.default)({}, e, {
        elementVisible: lt(t)
      });
      return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n;
    })
  }),
      Tt = (r = {}, (0, o.default)(r, N, _t()), (0, o.default)(r, b, ht()), (0, o.default)(r, R, _t()), (0, o.default)(r, S, ht()), (0, o.default)(r, P, _t(!1)), (0, o.default)(r, w, ht(!1)), (0, o.default)(r, C, _t()), (0, o.default)(r, L, ht()), (0, o.default)(r, W, {
    types: "ecommerce-cart-open",
    handler: rt(tt, nt)
  }), (0, o.default)(r, B, {
    types: "ecommerce-cart-close",
    handler: rt(tt, nt)
  }), (0, o.default)(r, T, {
    types: "click",
    handler: rt(tt, vt(function (t, e) {
      var n,
          r,
          i,
          o = e.clickCount;
      r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(et(r, i)) ? 1 === o && nt(t) : nt(t);
    }))
  }), (0, o.default)(r, g, {
    types: "click",
    handler: rt(tt, vt(function (t, e) {
      2 === e.clickCount && nt(t);
    }))
  }), (0, o.default)(r, O, (0, l.default)({}, it, {
    types: "mousedown"
  })), (0, o.default)(r, y, (0, l.default)({}, it, {
    types: "mouseup"
  })), (0, o.default)(r, m, {
    types: "mouseover mouseout",
    handler: rt(tt, Et(function (t, e) {
      e.elementHovered && nt(t);
    }))
  }), (0, o.default)(r, A, {
    types: "mouseover mouseout",
    handler: rt(tt, Et(function (t, e) {
      e.elementHovered || nt(t);
    }))
  }), (0, o.default)(r, D, {
    types: "mousemove mouseout scroll",
    handler: function handler(t) {
      var e = t.store,
          n = t.element,
          r = t.eventConfig,
          i = t.nativeEvent,
          o = t.eventStateKey,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0
      },
          u = r.basedOn,
          c = r.selectedAxis,
          s = r.continuousParameterGroupId,
          f = r.reverse,
          l = r.restingState,
          d = void 0 === l ? 0 : l,
          E = i.clientX,
          p = void 0 === E ? a.clientX : E,
          v = i.clientY,
          h = void 0 === v ? a.clientY : v,
          I = i.pageX,
          T = void 0 === I ? a.pageX : I,
          g = i.pageY,
          O = void 0 === g ? a.pageY : g,
          y = "X_AXIS" === c,
          m = "mouseout" === i.type,
          A = d / 100,
          S = s,
          R = !1;

      switch (u) {
        case K:
          A = y ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
          break;

        case z:
          var N = st(),
              b = N.scrollLeft,
              C = N.scrollTop,
              L = N.scrollWidth,
              w = N.scrollHeight;
          A = y ? Math.min(b + T, L) / L : Math.min(C + O, w) / w;
          break;

        case Y:
        default:
          S = q(o, s);
          var P = 0 === i.type.indexOf("mouse");
          if (P && !0 !== tt({
            element: n,
            nativeEvent: i
          })) break;
          var D = n.getBoundingClientRect(),
              x = D.left,
              M = D.top,
              F = D.width,
              G = D.height;
          if (!P && !function (t, e) {
            return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom;
          }({
            left: p,
            top: h
          }, D)) break;
          R = !0, A = y ? (p - x) / F : (h - M) / G;
      }

      return m && (A > .95 || A < .05) && (A = Math.round(A)), (u !== Y || R || R !== a.elementHovered) && (A = f ? 1 - A : A, e.dispatch((0, _.parameterChanged)(S, A))), {
        elementHovered: R,
        clientX: p,
        clientY: h,
        pageX: T,
        pageY: O
      };
    }
  }), (0, o.default)(r, k, {
    types: at,
    handler: function handler(t) {
      var e = t.store,
          n = t.eventConfig,
          r = n.continuousParameterGroupId,
          i = n.reverse,
          o = st(),
          a = o.scrollTop / (o.scrollHeight - o.clientHeight);
      a = i ? 1 - a : a, e.dispatch((0, _.parameterChanged)(r, a));
    }
  }), (0, o.default)(r, X, {
    types: at,
    handler: function handler(t) {
      var e = t.element,
          n = t.store,
          r = t.eventConfig,
          i = t.eventStateKey,
          o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        scrollPercent: 0
      },
          a = st(),
          u = a.scrollLeft,
          c = a.scrollTop,
          s = a.scrollWidth,
          f = a.scrollHeight,
          l = a.clientHeight,
          d = r.basedOn,
          E = r.selectedAxis,
          p = r.continuousParameterGroupId,
          v = r.startsEntering,
          h = r.startsExiting,
          I = r.addEndOffset,
          T = r.addStartOffset,
          g = r.addOffsetValue,
          O = void 0 === g ? 0 : g,
          y = r.endOffsetValue,
          m = void 0 === y ? 0 : y;

      if (d === K) {
        var A = "X_AXIS" === E ? u / s : c / f;
        return A !== o.scrollPercent && n.dispatch((0, _.parameterChanged)(p, A)), {
          scrollPercent: A
        };
      }

      var S = q(i, p),
          R = e.getBoundingClientRect(),
          N = (T ? O : 0) / 100,
          b = (I ? m : 0) / 100;
      N = v ? N : 1 - N, b = h ? b : 1 - b;
      var C = R.top + Math.min(R.height * N, l),
          L = R.top + R.height * b - C,
          w = Math.min(l + L, f),
          P = Math.min(Math.max(0, l - C), w) / w;
      return P !== o.scrollPercent && n.dispatch((0, _.parameterChanged)(S, P)), {
        scrollPercent: P
      };
    }
  }), (0, o.default)(r, M, It), (0, o.default)(r, j, It), (0, o.default)(r, x, (0, l.default)({}, ut, {
    handler: pt(function (t, e) {
      e.scrollingDown && nt(t);
    })
  })), (0, o.default)(r, V, (0, l.default)({}, ut, {
    handler: pt(function (t, e) {
      e.scrollingDown || nt(t);
    })
  })), (0, o.default)(r, U, {
    types: "readystatechange IX2_PAGE_UPDATE",
    handler: rt(Z, function (t) {
      return function (e, n) {
        var r = {
          finished: "complete" === document.readyState
        };
        return !r.finished || n && n.finshed || t(e), r;
      };
    }(nt))
  }), (0, o.default)(r, H, {
    types: "readystatechange IX2_PAGE_UPDATE",
    handler: rt(Z, function (t) {
      return function (e, n) {
        return n || t(e), {
          started: !0
        };
      };
    }(nt))
  }), r);

  e.default = Tt;
}, function (t, e, n) {
  var r = n(240)();
  t.exports = r;
}, function (t, e, n) {
  var r = n(50),
      i = n(241),
      o = n(98),
      a = n(99),
      u = n(1),
      c = n(254),
      s = "Expected a function",
      f = 8,
      l = 32,
      d = 128,
      E = 256;

  t.exports = function (t) {
    return i(function (e) {
      var n = e.length,
          i = n,
          p = r.prototype.thru;

      for (t && e.reverse(); i--;) {
        var v = e[i];
        if ("function" != typeof v) throw new TypeError(s);
        if (p && !_ && "wrapper" == a(v)) var _ = new r([], !0);
      }

      for (i = _ ? i : n; ++i < n;) {
        v = e[i];
        var h = a(v),
            I = "wrapper" == h ? o(v) : void 0;
        _ = I && c(I[0]) && I[1] == (d | f | l | E) && !I[4].length && 1 == I[9] ? _[a(I[0])].apply(_, I[3]) : 1 == v.length && c(v) ? _[h]() : _.thru(v);
      }

      return function () {
        var t = arguments,
            r = t[0];
        if (_ && 1 == t.length && u(r)) return _.plant(r).value();

        for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) {
          o = e[i].call(this, o);
        }

        return o;
      };
    });
  };
}, function (t, e, n) {
  var r = n(242),
      i = n(245),
      o = n(247);

  t.exports = function (t) {
    return o(i(t, void 0, r), t + "");
  };
}, function (t, e, n) {
  var r = n(243);

  t.exports = function (t) {
    return null != t && t.length ? r(t, 1) : [];
  };
}, function (t, e, n) {
  var r = n(34),
      i = n(244);

  t.exports = function t(e, n, o, a, u) {
    var c = -1,
        s = e.length;

    for (o || (o = i), u || (u = []); ++c < s;) {
      var f = e[c];
      n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f);
    }

    return u;
  };
}, function (t, e, n) {
  var r = n(12),
      i = n(22),
      o = n(1),
      a = r ? r.isConcatSpreadable : void 0;

  t.exports = function (t) {
    return o(t) || i(t) || !!(a && t && t[a]);
  };
}, function (t, e, n) {
  var r = n(246),
      i = Math.max;

  t.exports = function (t, e, n) {
    return e = i(void 0 === e ? t.length - 1 : e, 0), function () {
      for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) {
        c[a] = o[e + a];
      }

      a = -1;

      for (var s = Array(e + 1); ++a < e;) {
        s[a] = o[a];
      }

      return s[e] = n(c), r(t, this, s);
    };
  };
}, function (t, e) {
  t.exports = function (t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);

      case 1:
        return t.call(e, n[0]);

      case 2:
        return t.call(e, n[0], n[1]);

      case 3:
        return t.call(e, n[0], n[1], n[2]);
    }

    return t.apply(e, n);
  };
}, function (t, e, n) {
  var r = n(248),
      i = n(250)(r);
  t.exports = i;
}, function (t, e, n) {
  var r = n(249),
      i = n(95),
      o = n(44),
      a = i ? function (t, e) {
    return i(t, "toString", {
      configurable: !0,
      enumerable: !1,
      value: r(e),
      writable: !0
    });
  } : o;
  t.exports = a;
}, function (t, e) {
  t.exports = function (t) {
    return function () {
      return t;
    };
  };
}, function (t, e) {
  var n = 800,
      r = 16,
      i = Date.now;

  t.exports = function (t) {
    var e = 0,
        o = 0;
    return function () {
      var a = i(),
          u = r - (a - o);

      if (o = a, u > 0) {
        if (++e >= n) return arguments[0];
      } else e = 0;

      return t.apply(void 0, arguments);
    };
  };
}, function (t, e, n) {
  var r = n(75),
      i = r && new r();
  t.exports = i;
}, function (t, e) {
  t.exports = function () {};
}, function (t, e) {
  t.exports = {};
}, function (t, e, n) {
  var r = n(52),
      i = n(98),
      o = n(99),
      a = n(255);

  t.exports = function (t) {
    var e = o(t),
        n = a[e];
    if ("function" != typeof n || !(e in r.prototype)) return !1;
    if (t === n) return !0;
    var u = i(n);
    return !!u && t === u[0];
  };
}, function (t, e, n) {
  var r = n(52),
      i = n(50),
      o = n(51),
      a = n(1),
      u = n(7),
      c = n(256),
      s = Object.prototype.hasOwnProperty;

  function f(t) {
    if (u(t) && !a(t) && !(t instanceof r)) {
      if (t instanceof i) return t;
      if (s.call(t, "__wrapped__")) return c(t);
    }

    return new i(t);
  }

  f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f;
}, function (t, e, n) {
  var r = n(52),
      i = n(50),
      o = n(257);

  t.exports = function (t) {
    if (t instanceof r) return t.clone();
    var e = new i(t.__wrapped__, t.__chain__);
    return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    var n = -1,
        r = t.length;

    for (e || (e = Array(r)); ++n < r;) {
      e[n] = t[n];
    }

    return e;
  };
}, function (t, e, n) {
  var r = n(96),
      i = n(46);

  t.exports = function (t, e, n) {
    return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(11);
  r.define("links", t.exports = function (t, e) {
    var n,
        i,
        o,
        a = {},
        u = t(window),
        c = r.env(),
        s = window.location,
        f = document.createElement("a"),
        l = "w--current",
        d = /index\.(html|php)$/,
        E = /\/$/;

    function p(e) {
      var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");

      if (f.href = r, !(r.indexOf(":") >= 0)) {
        var a = t(e);

        if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
          if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
          var u = t(f.hash);
          u.length && i.push({
            link: a,
            sec: u,
            active: !1
          });
        } else if ("#" !== r && "" !== r) {
          var c = f.href === s.href || r === o || d.test(r) && E.test(o);

          _(a, l, c);
        }
      }
    }

    function v() {
      var t = u.scrollTop(),
          n = u.height();
      e.each(i, function (e) {
        var r = e.link,
            i = e.sec,
            o = i.offset().top,
            a = i.outerHeight(),
            u = .5 * n,
            c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
        e.active !== c && (e.active = c, _(r, l, c));
      });
    }

    function _(t, e, n) {
      var r = t.hasClass(e);
      n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e));
    }

    return a.ready = a.design = a.preview = function () {
      n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(v), i = [];

      for (var t = document.links, e = 0; e < t.length; ++e) {
        p(t[e]);
      }

      i.length && (r.scroll.on(v), v());
    }, a;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(11);
  r.define("scroll", t.exports = function (t) {
    var e = t(document),
        n = window,
        i = n.location,
        o = function () {
      try {
        return Boolean(n.frameElement);
      } catch (t) {
        return !0;
      }
    }() ? null : n.history,
        a = /^[a-zA-Z0-9][\w:.-]*$/;
    return {
      ready: function ready() {
        var u = i.href.split("#")[0];
        e.on("click", "a", function (e) {
          if (!(r.env("design") || window.$.mobile && t(e.currentTarget).hasClass("ui-link"))) if ("#" !== this.getAttribute("href")) {
            var c = this.href.split("#"),
                s = c[0] === u ? c[1] : null;
            s && function (e, u) {
              if (a.test(e)) {
                var c = t("#" + e);

                if (c.length) {
                  if (u && (u.preventDefault(), u.stopPropagation()), i.hash !== e && o && o.pushState && (!r.env.chrome || "file:" !== i.protocol)) {
                    var s = o.state && o.state.hash;
                    s !== e && o.pushState({
                      hash: e
                    }, "", "#" + e);
                  }

                  var f = r.env("editor") ? ".w-editor-body" : "body",
                      l = t("header, " + f + " > .header, " + f + " > .w-nav:not([data-no-scroll])"),
                      d = "fixed" === l.css("position") ? l.outerHeight() : 0;
                  n.setTimeout(function () {
                    !function (e, r) {
                      var i = t(n).scrollTop(),
                          o = e.offset().top - r;

                      if ("mid" === e.data("scroll")) {
                        var a = t(n).height() - r,
                            u = e.outerHeight();
                        u < a && (o -= Math.round((a - u) / 2));
                      }

                      var c = 1;
                      t("body").add(e).each(function () {
                        var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                        !isNaN(e) && (0 === e || e > 0) && (c = e);
                      }), Date.now || (Date.now = function () {
                        return new Date().getTime();
                      });

                      var s = Date.now(),
                          f = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || function (t) {
                        n.setTimeout(t, 15);
                      },
                          l = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * c;

                      !function t() {
                        var e = Date.now() - s;
                        n.scroll(0, function (t, e, n, r) {
                          return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                          var i;
                        }(i, o, e, l)), e <= l && f(t);
                      }();
                    }(c, d);
                  }, u ? 0 : 300);
                }
              }
            }(s, e);
          } else e.preventDefault();
        });
      }
    };
  });
}, function (t, e, n) {
  "use strict";

  n(11).define("touch", t.exports = function (t) {
    var e = {},
        n = window.getSelection;

    function r(e) {
      var r,
          i,
          o = !1,
          a = !1,
          u = Math.min(Math.round(.04 * window.innerWidth), 40);

      function c(t) {
        var e = t.touches;
        e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r);
      }

      function s(e) {
        if (o) {
          if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
          var r = e.touches,
              c = r ? r[0].clientX : e.clientX,
              s = c - i;
          i = c, Math.abs(s) > u && n && "" === String(n()) && (!function (e, n, r) {
            var i = t.Event(e, {
              originalEvent: n
            });
            t(n.target).trigger(i, r);
          }("swipe", e, {
            direction: s > 0 ? "right" : "left"
          }), l());
        }
      }

      function f(t) {
        if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void (a = !1)) : void 0;
      }

      function l() {
        o = !1;
      }

      e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", f, !1), e.addEventListener("touchcancel", l, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", f, !1), e.addEventListener("mouseout", l, !1), this.destroy = function () {
        e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", f, !1), e.removeEventListener("touchcancel", l, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", f, !1), e.removeEventListener("mouseout", l, !1), e = null;
      };
    }

    return t.event.special.tap = {
      bindType: "click",
      delegateType: "click"
    }, e.init = function (e) {
      return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null;
    }, e.instance = e.init(document), e;
  });
}]);
/**
* ----------------------------------------------------------------------
* Webflow: Interactions 2.0: Init
*/

Webflow.require('ix2').init({
  "events": {
    "e": {
      "id": "e",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-2"
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|a62b8a80-882c-4736-3b40-dab9cf782a18"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579458899727
    },
    "e-2": {
      "id": "e-2",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-2",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e"
        }
      },
      "mediaQueries": ["main"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|a62b8a80-882c-4736-3b40-dab9cf782a18"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579458899730
    },
    "e-5": {
      "id": "e-5",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-5",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-6"
        }
      },
      "mediaQueries": ["main", "medium"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|ecf89f0a-d53b-73c4-665c-67bd3134ab1e"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579472572581
    },
    "e-7": {
      "id": "e-7",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-8"
        },
        "instant": false
      },
      "mediaQueries": ["small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|f2a09543-ebfb-b3d8-8bd2-a37322b4078a"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579472947365
    },
    "e-9": {
      "id": "e-9",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-10"
        },
        "instant": false
      },
      "mediaQueries": ["small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|f2a09543-ebfb-b3d8-8bd2-a37322b4078b"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579472964767
    },
    "e-11": {
      "id": "e-11",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-12"
        },
        "instant": false
      },
      "mediaQueries": ["small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|74d53744-d205-831a-2af2-56b33c0b1feb"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579472976485
    },
    "e-13": {
      "id": "e-13",
      "eventTypeId": "PAGE_START",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-6",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-14"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc"
      },
      "config": {
        "loop": true,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579539269389
    },
    "e-15": {
      "id": "e-15",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-7",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-16"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|61f3ac02-4fbf-dacd-1136-07008d58590c"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579539632054
    },
    "e-16": {
      "id": "e-16",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-9",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-15"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|61f3ac02-4fbf-dacd-1136-07008d58590c"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579539632056
    },
    "e-17": {
      "id": "e-17",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-7",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-18"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|876e9cc1-4f96-72a1-d135-27ac5ec7a344"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579541615255
    },
    "e-18": {
      "id": "e-18",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-9",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-17"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|876e9cc1-4f96-72a1-d135-27ac5ec7a344"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579541615255
    },
    "e-19": {
      "id": "e-19",
      "eventTypeId": "PAGE_START",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-10",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-20"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea"
      },
      "config": {
        "loop": true,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579544154601
    },
    "e-21": {
      "id": "e-21",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-22"
        },
        "instant": false
      },
      "mediaQueries": ["small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|f65a27b2-19cf-548b-842f-db28ae024a1f"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579560725008
    },
    "e-23": {
      "id": "e-23",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-24"
        },
        "instant": false
      },
      "mediaQueries": ["small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|f65a27b2-19cf-548b-842f-db28ae024a26"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579560725008
    },
    "e-25": {
      "id": "e-25",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-26"
        },
        "instant": false
      },
      "mediaQueries": ["small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|f65a27b2-19cf-548b-842f-db28ae024a2d"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579560725008
    },
    "e-27": {
      "id": "e-27",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-28"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|5fb0b633-de60-cf1c-b122-a8a463ed4e72"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 900,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579561471494
    },
    "e-29": {
      "id": "e-29",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-12",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-30"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|b4f4fd92-82da-0e1c-fc90-f5496855bc25"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "LEFT",
        "effectIn": true
      },
      "createdOn": 1579563163261
    },
    "e-33": {
      "id": "e-33",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SHRINK_BIG_EFFECT",
        "config": {
          "actionListId": "shrinkBigIn",
          "autoStopEventId": "e-34"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|4fb1dc16-3fe1-b3fd-21f3-cea6b983c518"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579565252111
    },
    "e-38": {
      "id": "e-38",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-39"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|99ec43be-8c98-269d-2478-7ab409587794"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 900,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579611761909
    },
    "e-40": {
      "id": "e-40",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SHRINK_BIG_EFFECT",
        "config": {
          "actionListId": "shrinkBigIn",
          "autoStopEventId": "e-41"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|fa933378-2336-330a-90e1-68f24719b33a"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579644028644
    },
    "e-42": {
      "id": "e-42",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-7",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-43"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|7d26cb82-e8d9-67d0-70f7-b35423b59d92"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579648052619
    },
    "e-43": {
      "id": "e-43",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-9",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-42"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|7d26cb82-e8d9-67d0-70f7-b35423b59d92"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579648052619
    },
    "e-44": {
      "id": "e-44",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SHRINK_BIG_EFFECT",
        "config": {
          "actionListId": "shrinkBigIn",
          "autoStopEventId": "e-45"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|7d26cb82-e8d9-67d0-70f7-b35423b59d95"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579648052619
    },
    "e-46": {
      "id": "e-46",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-47"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|7d26cb82-e8d9-67d0-70f7-b35423b59d9c"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 900,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579648052619
    },
    "e-48": {
      "id": "e-48",
      "eventTypeId": "PAGE_START",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-13",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-49"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "PAGE",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9"
      },
      "config": {
        "loop": true,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579649162934
    },
    "e-54": {
      "id": "e-54",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-55"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|1d9a95e0-daf7-35f8-607e-5a3bde4376f0"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579789618772
    },
    "e-58": {
      "id": "e-58",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-59"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|f65a27b2-19cf-548b-842f-db28ae024a1e"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579789657572
    },
    "e-60": {
      "id": "e-60",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-61"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|3845de37-440d-900e-02a5-c91310c8777b"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579789666119
    },
    "e-64": {
      "id": "e-64",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-65"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|b2df9ed7-28ea-fe7a-c259-da3d92149609"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579789684222
    },
    "e-66": {
      "id": "e-66",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-67"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|209aa39f-931a-5c45-264c-b4b74622a785"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579789694382
    },
    "e-68": {
      "id": "e-68",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-69"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|9d1edb80-aca1-d45f-ef54-088490d097d6"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579790137494
    },
    "e-70": {
      "id": "e-70",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-71"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|072f9ec6-fd8a-b0cf-a0ff-ec14cb7d94f6"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579790560677
    },
    "e-74": {
      "id": "e-74",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-75"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|fef7aa2e-1159-ea80-cf39-92e6042ca22a"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 3,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579793467712
    },
    "e-76": {
      "id": "e-76",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GROW_EFFECT",
        "config": {
          "actionListId": "growIn",
          "autoStopEventId": "e-77"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|fada6466-7cd0-3c2a-dc31-81949d736f62"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 17,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579795001992
    },
    "e-78": {
      "id": "e-78",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-79"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|48734036-a377-1811-c891-4aca7c9695f4"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 45,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579795175511
    },
    "e-80": {
      "id": "e-80",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GROW_EFFECT",
        "config": {
          "actionListId": "growIn",
          "autoStopEventId": "e-81"
        },
        "instant": false
      },
      "mediaQueries": ["small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|fa933378-2336-330a-90e1-68f24719b33a"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579823542851
    },
    "e-82": {
      "id": "e-82",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GROW_EFFECT",
        "config": {
          "actionListId": "growIn",
          "autoStopEventId": "e-83"
        },
        "instant": false
      },
      "mediaQueries": ["small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|4fb1dc16-3fe1-b3fd-21f3-cea6b983c518"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579826384083
    },
    "e-84": {
      "id": "e-84",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GROW_EFFECT",
        "config": {
          "actionListId": "growIn",
          "autoStopEventId": "e-85"
        },
        "instant": false
      },
      "mediaQueries": ["small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|7d26cb82-e8d9-67d0-70f7-b35423b59d95"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579826411178
    },
    "e-86": {
      "id": "e-86",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-87"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|1ac9e762-0c3e-9a37-0406-b9684d357500"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579826666922
    },
    "e-88": {
      "id": "e-88",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-89"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|cd33958c-1cab-b44b-685b-4a32b2b1d00f"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579826715277
    },
    "e-90": {
      "id": "e-90",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-91"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|3dfe1395-dffd-feac-644e-a81de44ea5b3"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579826725641
    },
    "e-92": {
      "id": "e-92",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-93"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|143e1fdd-713e-5aef-80b7-4b3576e4aa8f"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579826734314
    },
    "e-94": {
      "id": "e-94",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-95"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|a9c5a15b-ce52-fe0d-14d3-cdd79ddcd6d3"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579826744799
    },
    "e-96": {
      "id": "e-96",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-97"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|e8b288a7-8ace-6d34-64e2-b5c7eea3d2e1"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579826797157
    },
    "e-98": {
      "id": "e-98",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-99"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|b6dca8a5-95aa-7b35-808a-32725f200614"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579826807035
    },
    "e-100": {
      "id": "e-100",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-101"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|56f4ac90-45c1-523b-aceb-2724d96b7f73"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579826812828
    },
    "e-102": {
      "id": "e-102",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-103"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|6bab417d-e782-69de-40a2-7523db1e1d8c"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579826822918
    },
    "e-104": {
      "id": "e-104",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-105"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|9ce0ea09-e4c5-6bc3-546a-98d621a56710"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579832205464
    },
    "e-106": {
      "id": "e-106",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-107"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|04fc7dc0-ee4c-802c-d0dd-7551930ca9c9"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579832230635
    },
    "e-108": {
      "id": "e-108",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-109"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|489077de-e55c-8002-d067-0e324f215d38"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579832243324
    },
    "e-110": {
      "id": "e-110",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-111"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|bbadca1b-4cc5-fcd5-8746-173f2c7e4ad4"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579832252847
    },
    "e-112": {
      "id": "e-112",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-113"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|a2266cf1-07a8-ef16-ef74-2c849d279792"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579832301345
    },
    "e-114": {
      "id": "e-114",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-115"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|3d6f101a-d610-da93-4dca-82f3f24ea7e4"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579876850873
    },
    "e-116": {
      "id": "e-116",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-117"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|ede4231e-5d39-68df-663d-bddb14e8b588"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579876866024
    },
    "e-120": {
      "id": "e-120",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-121"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|a62b8a80-882c-4736-3b40-dab9cf782a17"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579876911030
    },
    "e-122": {
      "id": "e-122",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-123"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|a7491920-24b9-2133-fce0-eb78c7e91186"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579876925013
    },
    "e-124": {
      "id": "e-124",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-125"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|f2a09543-ebfb-b3d8-8bd2-a37322b40789"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579876943654
    },
    "e-126": {
      "id": "e-126",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-127"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|727b67fd-cdfe-6e43-dfe1-d224811fa903"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579886618050
    },
    "e-128": {
      "id": "e-128",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "FADE_EFFECT",
        "config": {
          "actionListId": "fadeIn",
          "autoStopEventId": "e-129"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|4430a2cb-ade1-1d8a-bd6e-d508d661a949"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579888439776
    },
    "e-130": {
      "id": "e-130",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-131"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|92464b3e-6c0b-73d0-c931-388cd5bbc5ce"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579888727266
    },
    "e-132": {
      "id": "e-132",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-133"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|4430a2cb-ade1-1d8a-bd6e-d508d661a94c"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579889408870
    },
    "e-134": {
      "id": "e-134",
      "eventTypeId": "SCROLLING_IN_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
        "config": {
          "actionListId": "a-14",
          "affectedElements": {},
          "duration": 0
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|18b37f98-a71f-6509-b621-29902e7ca386"
      },
      "config": [{
        "continuousParameterGroupId": "a-14-p",
        "smoothing": 50,
        "startsEntering": true,
        "addStartOffset": false,
        "addOffsetValue": 50,
        "startsExiting": false,
        "addEndOffset": false,
        "endOffsetValue": 50
      }],
      "createdOn": 1579890536249
    },
    "e-135": {
      "id": "e-135",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "SLIDE_EFFECT",
        "config": {
          "actionListId": "slideInBottom",
          "autoStopEventId": "e-136"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|62adb8e2-46c9-0077-dfed-2dcf3781c384"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 200,
        "direction": "BOTTOM",
        "effectIn": true
      },
      "createdOn": 1579902932130
    },
    "e-137": {
      "id": "e-137",
      "eventTypeId": "SCROLL_INTO_VIEW",
      "action": {
        "id": "",
        "actionTypeId": "GROW_EFFECT",
        "config": {
          "actionListId": "growIn",
          "autoStopEventId": "e-138"
        },
        "instant": false
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|5a2d0ea9-c33f-a9aa-484e-2a1b3c01c6f0"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": 0,
        "scrollOffsetUnit": "%",
        "delay": 0,
        "direction": null,
        "effectIn": true
      },
      "createdOn": 1579903153075
    },
    "e-139": {
      "id": "e-139",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-15",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-140"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e27840f42775110e174caf9|ac9c4d6e-f337-f477-2159-13338a4522e0"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579910921992
    },
    "e-141": {
      "id": "e-141",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-15",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-142"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e259e015cbbd69b3628b7ea|c0b9870e-7372-6871-ec65-e520b40e847c"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579962812763
    },
    "e-143": {
      "id": "e-143",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-15",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-144"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "appliesTo": "ELEMENT",
        "styleBlockIds": [],
        "id": "5e247a6ab966d995c38c35bc|b412540e-602e-93c7-cbde-d84ec6c0e7ad"
      },
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1579962832082
    }
  },
  "actionLists": {
    "a": {
      "id": "a",
      "title": "Green to gray",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-n-2",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 100,
            "target": {
              "useEventTarget": true,
              "id": "5e247a6ab966d995c38c35bc|a62b8a80-882c-4736-3b40-dab9cf782a18"
            },
            "rValue": 220,
            "gValue": 179,
            "bValue": 177,
            "aValue": 1
          }
        }, {
          "id": "a-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 100,
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".column-4",
              "selectorGuids": ["2ee0f0ee-d2e7-c525-2d4b-8a0847b07f5a"]
            },
            "rValue": 247,
            "gValue": 247,
            "bValue": 247,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1579458904519,
      "useFirstGroupAsInitialState": false
    },
    "a-2": {
      "id": "a-2",
      "title": "Green to gray 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-2-n",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 100,
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".column-4",
              "selectorGuids": ["2ee0f0ee-d2e7-c525-2d4b-8a0847b07f5a"]
            },
            "rValue": 178,
            "gValue": 220,
            "bValue": 177,
            "aValue": 1
          }
        }, {
          "id": "a-2-n-2",
          "actionTypeId": "STYLE_BACKGROUND_COLOR",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 100,
            "target": {
              "useEventTarget": true,
              "id": "5e247a6ab966d995c38c35bc|a62b8a80-882c-4736-3b40-dab9cf782a18"
            },
            "rValue": 247,
            "gValue": 247,
            "bValue": 247,
            "aValue": 1
          }
        }]
      }],
      "createdOn": 1579458904519,
      "useFirstGroupAsInitialState": false
    },
    "a-5": {
      "id": "a-5",
      "title": "The The The",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-5-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column",
              "selectorGuids": ["ce4cab38-c835-e18c-3941-02a64d501b52"]
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-5-n",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column",
              "selectorGuids": ["ce4cab38-c835-e18c-3941-02a64d501b52"]
            },
            "yValue": 30,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-5-n-5",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column-2",
              "selectorGuids": ["c8298eeb-f519-54e9-59c7-986e3a112ad4"]
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-5-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column-2",
              "selectorGuids": ["c8298eeb-f519-54e9-59c7-986e3a112ad4"]
            },
            "yValue": 30,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-5-n-7",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column-3",
              "selectorGuids": ["f8f38dcf-5e57-d7ba-32a9-6bdff345b3e7"]
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-5-n-8",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column-3",
              "selectorGuids": ["f8f38dcf-5e57-d7ba-32a9-6bdff345b3e7"]
            },
            "yValue": 30,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-5-n-4",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 200,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column",
              "selectorGuids": ["ce4cab38-c835-e18c-3941-02a64d501b52"]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-5-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 200,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column",
              "selectorGuids": ["ce4cab38-c835-e18c-3941-02a64d501b52"]
            },
            "value": 1,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-5-n-10",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 200,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column-2",
              "selectorGuids": ["c8298eeb-f519-54e9-59c7-986e3a112ad4"]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-5-n-9",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 200,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column-2",
              "selectorGuids": ["c8298eeb-f519-54e9-59c7-986e3a112ad4"]
            },
            "value": 1,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-5-n-12",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 200,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column-3",
              "selectorGuids": ["f8f38dcf-5e57-d7ba-32a9-6bdff345b3e7"]
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-5-n-11",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 200,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".column-3",
              "selectorGuids": ["f8f38dcf-5e57-d7ba-32a9-6bdff345b3e7"]
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1579472579263,
      "useFirstGroupAsInitialState": true
    },
    "a-6": {
      "id": "a-6",
      "title": "Menu",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-6-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 1200,
            "target": {
              "id": "5e247a6ab966d995c38c35bc|53933777-6bd0-24b0-38cd-d72245b40e2e"
            },
            "xValue": 1,
            "yValue": 1,
            "locked": true
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-6-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 1200,
            "target": {
              "id": "5e247a6ab966d995c38c35bc|53933777-6bd0-24b0-38cd-d72245b40e2e"
            },
            "xValue": 0.7,
            "yValue": 0.7,
            "locked": true
          }
        }]
      }],
      "createdOn": 1579539272940,
      "useFirstGroupAsInitialState": false
    },
    "a-7": {
      "id": "a-7",
      "title": "Menu hover",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-7-n-3",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".image-14",
              "selectorGuids": ["bc08711d-4386-b6a2-d1c3-57e809dd8fcf"]
            },
            "xValue": 0.4,
            "yValue": 0.4,
            "locked": true
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-7-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".div-block-8-copy",
              "selectorGuids": ["88434276-6beb-e2e1-009b-692b1bb87075"]
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-7-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".image-14",
              "selectorGuids": ["bc08711d-4386-b6a2-d1c3-57e809dd8fcf"]
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-7-n-4",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".image-14",
              "selectorGuids": ["bc08711d-4386-b6a2-d1c3-57e809dd8fcf"]
            },
            "xValue": 1,
            "yValue": 1,
            "locked": true
          }
        }]
      }],
      "createdOn": 1579539512426,
      "useFirstGroupAsInitialState": true
    },
    "a-9": {
      "id": "a-9",
      "title": "Menu hover 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-9-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".div-block-8-copy",
              "selectorGuids": ["88434276-6beb-e2e1-009b-692b1bb87075"]
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-9-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".image-14",
              "selectorGuids": ["bc08711d-4386-b6a2-d1c3-57e809dd8fcf"]
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-9-n-3",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 300,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".image-14",
              "selectorGuids": ["bc08711d-4386-b6a2-d1c3-57e809dd8fcf"]
            },
            "xValue": 0.4,
            "yValue": 0.4,
            "locked": true
          }
        }]
      }],
      "createdOn": 1579539512426,
      "useFirstGroupAsInitialState": false
    },
    "a-10": {
      "id": "a-10",
      "title": "Menu 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-10-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 1200,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|876e9cc1-4f96-72a1-d135-27ac5ec7a346"
            },
            "xValue": 1,
            "yValue": 1,
            "locked": true
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-10-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 1200,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|876e9cc1-4f96-72a1-d135-27ac5ec7a346"
            },
            "xValue": 0.7,
            "yValue": 0.7,
            "locked": true
          }
        }]
      }],
      "createdOn": 1579539272940,
      "useFirstGroupAsInitialState": false
    },
    "a-12": {
      "id": "a-12",
      "title": "The The The 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-12-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|b4f4fd92-82da-0e1c-fc90-f5496855bc26"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-12-n-2",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|b4f4fd92-82da-0e1c-fc90-f5496855bc26"
            },
            "yValue": 30,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-12-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|b4f4fd92-82da-0e1c-fc90-f5496855bc27"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-12-n-4",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|b4f4fd92-82da-0e1c-fc90-f5496855bc27"
            },
            "yValue": 30,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-12-n-5",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|b4f4fd92-82da-0e1c-fc90-f5496855bc27"
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-12-n-6",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|338390c0-b627-6b5a-794a-84c7f8a1dba1"
            },
            "yValue": 30,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-12-n-13",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|338390c0-b627-6b5a-794a-84c7f8a1dba1"
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-12-n-7",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 800,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|b4f4fd92-82da-0e1c-fc90-f5496855bc26"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-12-n-8",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 800,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|b4f4fd92-82da-0e1c-fc90-f5496855bc26"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-12-n-9",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 700,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|b4f4fd92-82da-0e1c-fc90-f5496855bc27"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-12-n-10",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 700,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|b4f4fd92-82da-0e1c-fc90-f5496855bc27"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-12-n-11",
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 700,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|338390c0-b627-6b5a-794a-84c7f8a1dba1"
            },
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "id": "a-12-n-12",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 700,
            "easing": "",
            "duration": 500,
            "target": {
              "id": "5e259e015cbbd69b3628b7ea|338390c0-b627-6b5a-794a-84c7f8a1dba1"
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1579472579263,
      "useFirstGroupAsInitialState": true
    },
    "a-13": {
      "id": "a-13",
      "title": "Menu 3",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-13-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 1200,
            "target": {
              "id": "5e27840f42775110e174caf9|7d26cb82-e8d9-67d0-70f7-b35423b59d94"
            },
            "xValue": 1,
            "yValue": 1,
            "locked": true
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-13-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "easeInOut",
            "duration": 1200,
            "target": {
              "id": "5e27840f42775110e174caf9|7d26cb82-e8d9-67d0-70f7-b35423b59d94"
            },
            "xValue": 0.7,
            "yValue": 0.7,
            "locked": true
          }
        }]
      }],
      "createdOn": 1579539272940,
      "useFirstGroupAsInitialState": false
    },
    "a-14": {
      "id": "a-14",
      "title": "Compare",
      "continuousParameterGroups": [{
        "id": "a-14-p",
        "type": "SCROLL_PROGRESS",
        "parameterLabel": "Scroll",
        "continuousActionGroups": [{
          "keyframe": 0,
          "actionItems": [{
            "id": "a-14-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".image-41",
                "selectorGuids": ["bdea9a71-6eb4-1299-c02f-7a804c490754"]
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "keyframe": 100,
          "actionItems": [{
            "id": "a-14-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".image-41",
                "selectorGuids": ["bdea9a71-6eb4-1299-c02f-7a804c490754"]
              },
              "yValue": -413,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      }],
      "createdOn": 1579890539554
    },
    "a-15": {
      "id": "a-15",
      "title": "Close",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-15-n",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "none",
            "target": {
              "useEventTarget": "PARENT",
              "selector": ".div-block-24",
              "selectorGuids": ["d68927e6-f6d0-001e-cdb1-ab1b740c3569"]
            }
          }
        }]
      }],
      "createdOn": 1579910929287,
      "useFirstGroupAsInitialState": false
    },
    "slideInBottom": {
      "id": "slideInBottom",
      "useFirstGroupAsInitialState": true,
      "actionItemGroups": [{
        "actionItems": [{
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 0
          }
        }]
      }, {
        "actionItems": [{
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 0,
            "yValue": 100,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }]
      }, {
        "actionItems": [{
          "actionTypeId": "TRANSFORM_MOVE",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 0,
            "yValue": 0,
            "xUnit": "PX",
            "yUnit": "PX",
            "zUnit": "PX"
          }
        }, {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 1
          }
        }]
      }]
    },
    "shrinkBigIn": {
      "id": "shrinkBigIn",
      "useFirstGroupAsInitialState": true,
      "actionItemGroups": [{
        "actionItems": [{
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "duration": 0,
            "delay": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 0
          }
        }]
      }, {
        "actionItems": [{
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 4,
            "yValue": 4
          }
        }]
      }, {
        "actionItems": [{
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 1,
            "yValue": 1
          }
        }, {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 1
          }
        }]
      }]
    },
    "fadeIn": {
      "id": "fadeIn",
      "useFirstGroupAsInitialState": true,
      "actionItemGroups": [{
        "actionItems": [{
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 0
          }
        }]
      }, {
        "actionItems": [{
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 1
          }
        }]
      }]
    },
    "growIn": {
      "id": "growIn",
      "useFirstGroupAsInitialState": true,
      "actionItemGroups": [{
        "actionItems": [{
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 0
          }
        }]
      }, {
        "actionItems": [{
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "duration": 0,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 0.7500000000000001,
            "yValue": 0.7500000000000001
          }
        }]
      }, {
        "actionItems": [{
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "xValue": 1,
            "yValue": 1
          }
        }, {
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "outQuart",
            "duration": 1000,
            "target": {
              "id": "N/A",
              "appliesTo": "TRIGGER_ELEMENT",
              "useEventTarget": true
            },
            "value": 1
          }
        }]
      }]
    }
  },
  "site": {
    "mediaQueries": [{
      "key": "main",
      "min": 992,
      "max": 10000
    }, {
      "key": "medium",
      "min": 768,
      "max": 991
    }, {
      "key": "small",
      "min": 480,
      "max": 767
    }, {
      "key": "tiny",
      "min": 0,
      "max": 479
    }]
  }
});
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50087" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/webflow.js"], null)
//# sourceMappingURL=/webflow.f4258b2d.js.map