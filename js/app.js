/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  const e = {};
  let t = !0,
    i = (e = 500) => {
      let i = document.querySelector("body");
      if (t) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (i.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    },
    s = (e = 500) => {
      let i = document.querySelector("body");
      if (t) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (i.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    };
  function n(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  let r = (e, t = !1, s = 500, r = 0) => {
    const o = document.querySelector(e);
    if (o) {
      let a = "",
        l = 0;
      t &&
        ((a = "header.header"), (l = document.querySelector(a).offsetHeight));
      let d = {
        speedAsDuration: !0,
        speed: s,
        header: a,
        offset: r,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (i(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(o, "", d);
      else {
        let e = o.getBoundingClientRect().top + scrollY;
        (e = l ? e - l : e),
          (e = r ? e - r : e),
          window.scrollTo({ top: e, behavior: "smooth" });
      }
      n(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else n(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  let o = {
    getErrors(e) {
      let t = 0,
        i = e.querySelectorAll("*[data-required]");
      return (
        i.length &&
          i.forEach((e) => {
            (null === e.offsetParent && "SELECT" !== e.tagName) ||
              e.disabled ||
              (t += this.validateInput(e));
          }),
        t
      );
    },
    validateInput(e) {
      let t = 0;
      return (
        "email" === e.dataset.required
          ? ((e.value = e.value.replace(" ", "")),
            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
          : ("checkbox" !== e.type || e.checked) && e.value
          ? this.removeError(e)
          : (this.addError(e), t++),
        t
      );
    },
    addError(e) {
      e.classList.add("_form-error"),
        e.parentElement.classList.add("_form-error");
      let t = e.parentElement.querySelector(".form__error");
      t && e.parentElement.removeChild(t),
        e.dataset.error &&
          e.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${e.dataset.error}</div>`
          );
    },
    removeError(e) {
      e.classList.remove("_form-error"),
        e.parentElement.classList.remove("_form-error"),
        e.parentElement.querySelector(".form__error") &&
          e.parentElement.removeChild(
            e.parentElement.querySelector(".form__error")
          );
    },
    formClean(t) {
      t.reset(),
        setTimeout(() => {
          let i = t.querySelectorAll("input,textarea");
          for (let e = 0; e < i.length; e++) {
            const t = i[e];
            t.parentElement.classList.remove("_form-focus"),
              t.classList.remove("_form-focus"),
              o.removeError(t);
          }
          let s = t.querySelectorAll(".checkbox__input");
          if (s.length > 0)
            for (let e = 0; e < s.length; e++) {
              s[e].checked = !1;
            }
          if (e.select) {
            let i = t.querySelectorAll(".select");
            if (i.length)
              for (let t = 0; t < i.length; t++) {
                const s = i[t].querySelector("select");
                e.select.selectBuild(s);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  function a(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function l(e = {}, t = {}) {
    Object.keys(t).forEach((i) => {
      void 0 === e[i]
        ? (e[i] = t[i])
        : a(t[i]) && a(e[i]) && Object.keys(t[i]).length > 0 && l(e[i], t[i]);
    });
  }
  const d = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function c() {
    const e = "undefined" != typeof document ? document : {};
    return l(e, d), e;
  }
  const u = {
    document: d,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function p() {
    const e = "undefined" != typeof window ? window : {};
    return l(e, u), e;
  }
  class h extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function g(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...g(e)) : t.push(e);
      }),
      t
    );
  }
  function m(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function f(e, t) {
    const i = p(),
      s = c();
    let n = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(n);
    if ("string" == typeof e) {
      const i = e.trim();
      if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
        let e = "div";
        0 === i.indexOf("<li") && (e = "ul"),
          0 === i.indexOf("<tr") && (e = "tbody"),
          (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
          0 === i.indexOf("<tbody") && (e = "table"),
          0 === i.indexOf("<option") && (e = "select");
        const t = s.createElement(e);
        t.innerHTML = i;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const i = [],
            s = t.querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) i.push(s[e]);
          return i;
        })(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      n = e;
    }
    return new h(
      (function (e) {
        const t = [];
        for (let i = 0; i < e.length; i += 1)
          -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
      })(n)
    );
  }
  f.fn = h.prototype;
  const v = "resize scroll".split(" ");
  function y(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          v.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : f(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  y("click"),
    y("blur"),
    y("focus"),
    y("focusin"),
    y("focusout"),
    y("keyup"),
    y("keydown"),
    y("keypress"),
    y("submit"),
    y("change"),
    y("mousedown"),
    y("mousemove"),
    y("mouseup"),
    y("mouseenter"),
    y("mouseleave"),
    y("mouseout"),
    y("mouseover"),
    y("touchstart"),
    y("touchend"),
    y("touchmove"),
    y("resize"),
    y("scroll");
  const w = {
    addClass: function (...e) {
      const t = g(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = g(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = g(e.map((e) => e.split(" ")));
      return (
        m(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = g(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let i = 0; i < this.length; i += 1)
        if (2 === arguments.length) this[i].setAttribute(e, t);
        else
          for (const t in e) (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, i, s, n] = e;
      function r(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), f(t).is(i))) s.apply(t, n);
        else {
          const e = f(t).parents();
          for (let t = 0; t < e.length; t += 1)
            f(e[t]).is(i) && s.apply(e[t], n);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
      }
      "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
        n || (n = !1);
      const a = t.split(" ");
      let l;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (i)
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: s, proxyListener: r }),
              t.addEventListener(e, r, n);
          }
        else
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: s, proxyListener: o }),
              t.addEventListener(e, o, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, i, s, n] = e;
      "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
        n || (n = !1);
      const r = t.split(" ");
      for (let e = 0; e < r.length; e += 1) {
        const t = r[e];
        for (let e = 0; e < this.length; e += 1) {
          const r = this[e];
          let o;
          if (
            (!i && r.dom7Listeners
              ? (o = r.dom7Listeners[t])
              : i && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
            o && o.length)
          )
            for (let e = o.length - 1; e >= 0; e -= 1) {
              const i = o[e];
              (s && i.listener === s) ||
              (s &&
                i.listener &&
                i.listener.dom7proxy &&
                i.listener.dom7proxy === s)
                ? (r.removeEventListener(t, i.proxyListener, n), o.splice(e, 1))
                : s ||
                  (r.removeEventListener(t, i.proxyListener, n),
                  o.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = p(),
        i = e[0].split(" "),
        s = e[1];
      for (let n = 0; n < i.length; n += 1) {
        const r = i[n];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i];
          if (t.CustomEvent) {
            const i = new t.CustomEvent(r, {
              detail: s,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(i),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function i(s) {
            s.target === this && (e.call(this, s), t.off("transitionend", i));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = p();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = p(),
          t = c(),
          i = this[0],
          s = i.getBoundingClientRect(),
          n = t.body,
          r = i.clientTop || n.clientTop || 0,
          o = i.clientLeft || n.clientLeft || 0,
          a = i === e ? e.scrollY : i.scrollTop,
          l = i === e ? e.scrollX : i.scrollLeft;
        return { top: s.top + a - r, left: s.left + l - o };
      }
      return null;
    },
    css: function (e, t) {
      const i = p();
      let s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1)
            for (const t in e) this[s].style[t] = e[t];
          return this;
        }
        if (this[0])
          return i.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, i) => {
            e.apply(t, [t, i]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = p(),
        i = c(),
        s = this[0];
      let n, r;
      if (!s || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (s.matches) return s.matches(e);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
        if (s.msMatchesSelector) return s.msMatchesSelector(e);
        for (n = f(e), r = 0; r < n.length; r += 1) if (n[r] === s) return !0;
        return !1;
      }
      if (e === i) return s === i;
      if (e === t) return s === t;
      if (e.nodeType || e instanceof h) {
        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
          if (n[r] === s) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return f([]);
      if (e < 0) {
        const i = t + e;
        return f(i < 0 ? [] : [this[i]]);
      }
      return f([this[e]]);
    },
    append: function (...e) {
      let t;
      const i = c();
      for (let s = 0; s < e.length; s += 1) {
        t = e[s];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const s = i.createElement("div");
            for (s.innerHTML = t; s.firstChild; )
              this[e].appendChild(s.firstChild);
          } else if (t instanceof h)
            for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = c();
      let i, s;
      for (i = 0; i < this.length; i += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
            this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
        } else if (e instanceof h)
          for (s = 0; s < e.length; s += 1)
            this[i].insertBefore(e[s], this[i].childNodes[0]);
        else this[i].insertBefore(e, this[i].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(e)
            ? f([this[0].nextElementSibling])
            : f([])
          : this[0].nextElementSibling
          ? f([this[0].nextElementSibling])
          : f([])
        : f([]);
    },
    nextAll: function (e) {
      const t = [];
      let i = this[0];
      if (!i) return f([]);
      for (; i.nextElementSibling; ) {
        const s = i.nextElementSibling;
        e ? f(s).is(e) && t.push(s) : t.push(s), (i = s);
      }
      return f(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && f(t.previousElementSibling).is(e)
            ? f([t.previousElementSibling])
            : f([])
          : t.previousElementSibling
          ? f([t.previousElementSibling])
          : f([]);
      }
      return f([]);
    },
    prevAll: function (e) {
      const t = [];
      let i = this[0];
      if (!i) return f([]);
      for (; i.previousElementSibling; ) {
        const s = i.previousElementSibling;
        e ? f(s).is(e) && t.push(s) : t.push(s), (i = s);
      }
      return f(t);
    },
    parent: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1)
        null !== this[i].parentNode &&
          (e
            ? f(this[i].parentNode).is(e) && t.push(this[i].parentNode)
            : t.push(this[i].parentNode));
      return f(t);
    },
    parents: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        let s = this[i].parentNode;
        for (; s; ) e ? f(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
      }
      return f(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? f([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        const s = this[i].querySelectorAll(e);
        for (let e = 0; e < s.length; e += 1) t.push(s[e]);
      }
      return f(t);
    },
    children: function (e) {
      const t = [];
      for (let i = 0; i < this.length; i += 1) {
        const s = this[i].children;
        for (let i = 0; i < s.length; i += 1)
          (e && !f(s[i]).is(e)) || t.push(s[i]);
      }
      return f(t);
    },
    filter: function (e) {
      return f(m(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(w).forEach((e) => {
    Object.defineProperty(f.fn, e, { value: w[e], writable: !0 });
  });
  const b = f;
  function S(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function C() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = "x");
    const i = p();
    let s, n, r;
    const o = (function (e) {
      const t = p();
      let i;
      return (
        t.getComputedStyle && (i = t.getComputedStyle(e, null)),
        !i && e.currentStyle && (i = e.currentStyle),
        i || (i = e.style),
        i
      );
    })(e);
    return (
      i.WebKitCSSMatrix
        ? ((n = o.transform || o.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((r =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (s = r.toString().split(","))),
      "x" === t &&
        (n = i.WebKitCSSMatrix
          ? r.m41
          : 16 === s.length
          ? parseFloat(s[12])
          : parseFloat(s[4])),
      "y" === t &&
        (n = i.WebKitCSSMatrix
          ? r.m42
          : 16 === s.length
          ? parseFloat(s[13])
          : parseFloat(s[5])),
      n || 0
    );
  }
  function E(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function x(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function I() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (null != s && !x(s)) {
        const i = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, n = i.length; t < n; t += 1) {
          const n = i[t],
            r = Object.getOwnPropertyDescriptor(s, n);
          void 0 !== r &&
            r.enumerable &&
            (E(e[n]) && E(s[n])
              ? s[n].__swiper__
                ? (e[n] = s[n])
                : I(e[n], s[n])
              : !E(e[n]) && E(s[n])
              ? ((e[n] = {}), s[n].__swiper__ ? (e[n] = s[n]) : I(e[n], s[n]))
              : (e[n] = s[n]));
        }
      }
    }
    return e;
  }
  function L(e, t, i) {
    e.style.setProperty(t, i);
  }
  function M(e) {
    let { swiper: t, targetPosition: i, side: s } = e;
    const n = p(),
      r = -t.translate;
    let o,
      a = null;
    const l = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(t.cssModeFrameID);
    const d = i > r ? "next" : "prev",
      c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      u = () => {
        (o = new Date().getTime()), null === a && (a = o);
        const e = Math.max(Math.min((o - a) / l, 1), 0),
          d = 0.5 - Math.cos(e * Math.PI) / 2;
        let p = r + d * (i - r);
        if ((c(p, i) && (p = i), t.wrapperEl.scrollTo({ [s]: p }), c(p, i)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [s]: p });
            }),
            void n.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = n.requestAnimationFrame(u);
      };
    u();
  }
  let k, O, P;
  function A() {
    return (
      k ||
        (k = (function () {
          const e = p(),
            t = c();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const i = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, i);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      k
    );
  }
  function $(e) {
    return (
      void 0 === e && (e = {}),
      O ||
        (O = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const i = A(),
            s = p(),
            n = s.navigator.platform,
            r = t || s.navigator.userAgent,
            o = { ios: !1, android: !1 },
            a = s.screen.width,
            l = s.screen.height,
            d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = r.match(/(iPad).*OS\s([\d_]+)/);
          const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            g = "Win32" === n;
          let m = "MacIntel" === n;
          return (
            !c &&
              m &&
              i.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${a}x${l}`) >= 0 &&
              ((c = r.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (m = !1)),
            d && !g && ((o.os = "android"), (o.android = !0)),
            (c || h || u) && ((o.os = "ios"), (o.ios = !0)),
            o
          );
        })(e)),
      O
    );
  }
  function z() {
    return (
      P ||
        (P = (function () {
          const e = p();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      P
    );
  }
  const D = {
    on(e, t, i) {
      const s = this;
      if ("function" != typeof t) return s;
      const n = i ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          s.eventsListeners[e] || (s.eventsListeners[e] = []),
            s.eventsListeners[e][n](t);
        }),
        s
      );
    },
    once(e, t, i) {
      const s = this;
      if ("function" != typeof t) return s;
      function n() {
        s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++)
          r[o] = arguments[o];
        t.apply(s, r);
      }
      return (n.__emitterProxy = t), s.on(e, n, i);
    },
    onAny(e, t) {
      const i = this;
      if ("function" != typeof e) return i;
      const s = t ? "unshift" : "push";
      return (
        i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const i = t.eventsAnyListeners.indexOf(e);
      return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
    },
    off(e, t) {
      const i = this;
      return i.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (i.eventsListeners[e] = [])
              : i.eventsListeners[e] &&
                i.eventsListeners[e].forEach((s, n) => {
                  (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                    i.eventsListeners[e].splice(n, 1);
                });
          }),
          i)
        : i;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners) return e;
      let t, i, s;
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      "string" == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e))
        : ((t = r[0].events), (i = r[0].data), (s = r[0].context || e)),
        i.unshift(s);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(s, [t, ...i]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(s, i);
              });
        }),
        e
      );
    },
  };
  const G = {
    updateSize: function () {
      const e = this;
      let t, i;
      const s = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : s[0].clientWidth),
        (i =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : s[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === i && e.isVertical()) ||
          ((t =
            t -
            parseInt(s.css("padding-left") || 0, 10) -
            parseInt(s.css("padding-right") || 0, 10)),
          (i =
            i -
            parseInt(s.css("padding-top") || 0, 10) -
            parseInt(s.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(i) && (i = 0),
          Object.assign(e, {
            width: t,
            height: i,
            size: e.isHorizontal() ? t : i,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function i(e, i) {
        return parseFloat(e.getPropertyValue(t(i)) || 0);
      }
      const s = e.params,
        { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: a } = e,
        l = e.virtual && s.virtual.enabled,
        d = l ? e.virtual.slides.length : e.slides.length,
        c = n.children(`.${e.params.slideClass}`),
        u = l ? e.virtual.slides.length : c.length;
      let p = [];
      const h = [],
        g = [];
      let m = s.slidesOffsetBefore;
      "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
      let f = s.slidesOffsetAfter;
      "function" == typeof f && (f = s.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        y = e.slidesGrid.length;
      let w = s.spaceBetween,
        b = -m,
        S = 0,
        C = 0;
      if (void 0 === r) return;
      "string" == typeof w &&
        w.indexOf("%") >= 0 &&
        (w = (parseFloat(w.replace("%", "")) / 100) * r),
        (e.virtualSize = -w),
        o
          ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        s.centeredSlides &&
          s.cssMode &&
          (L(e.wrapperEl, "--swiper-centered-offset-before", ""),
          L(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const T = s.grid && s.grid.rows > 1 && e.grid;
      let E;
      T && e.grid.initSlides(u);
      const x =
        "auto" === s.slidesPerView &&
        s.breakpoints &&
        Object.keys(s.breakpoints).filter(
          (e) => void 0 !== s.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < u; n += 1) {
        E = 0;
        const o = c.eq(n);
        if (
          (T && e.grid.updateSlide(n, o, u, t), "none" !== o.css("display"))
        ) {
          if ("auto" === s.slidesPerView) {
            x && (c[n].style[t("width")] = "");
            const r = getComputedStyle(o[0]),
              a = o[0].style.transform,
              l = o[0].style.webkitTransform;
            if (
              (a && (o[0].style.transform = "none"),
              l && (o[0].style.webkitTransform = "none"),
              s.roundLengths)
            )
              E = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
            else {
              const e = i(r, "width"),
                t = i(r, "padding-left"),
                s = i(r, "padding-right"),
                n = i(r, "margin-left"),
                a = i(r, "margin-right"),
                l = r.getPropertyValue("box-sizing");
              if (l && "border-box" === l) E = e + n + a;
              else {
                const { clientWidth: i, offsetWidth: r } = o[0];
                E = e + t + s + n + a + (r - i);
              }
            }
            a && (o[0].style.transform = a),
              l && (o[0].style.webkitTransform = l),
              s.roundLengths && (E = Math.floor(E));
          } else
            (E = (r - (s.slidesPerView - 1) * w) / s.slidesPerView),
              s.roundLengths && (E = Math.floor(E)),
              c[n] && (c[n].style[t("width")] = `${E}px`);
          c[n] && (c[n].swiperSlideSize = E),
            g.push(E),
            s.centeredSlides
              ? ((b = b + E / 2 + S / 2 + w),
                0 === S && 0 !== n && (b = b - r / 2 - w),
                0 === n && (b = b - r / 2 - w),
                Math.abs(b) < 0.001 && (b = 0),
                s.roundLengths && (b = Math.floor(b)),
                C % s.slidesPerGroup == 0 && p.push(b),
                h.push(b))
              : (s.roundLengths && (b = Math.floor(b)),
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                  e.params.slidesPerGroup ==
                  0 && p.push(b),
                h.push(b),
                (b = b + E + w)),
            (e.virtualSize += E + w),
            (S = E),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + f),
        o &&
          a &&
          ("slide" === s.effect || "coverflow" === s.effect) &&
          n.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
        s.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
        T && e.grid.updateWrapperSize(E, p, t),
        !s.centeredSlides)
      ) {
        const t = [];
        for (let i = 0; i < p.length; i += 1) {
          let n = p[i];
          s.roundLengths && (n = Math.floor(n)),
            p[i] <= e.virtualSize - r && t.push(n);
        }
        (p = t),
          Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
            p.push(e.virtualSize - r);
      }
      if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
        const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        c.filter((e, t) => !s.cssMode || t !== c.length - 1).css({
          [i]: `${w}px`,
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        g.forEach((t) => {
          e += t + (s.spaceBetween ? s.spaceBetween : 0);
        }),
          (e -= s.spaceBetween);
        const t = e - r;
        p = p.map((e) => (e < 0 ? -m : e > t ? t + f : e));
      }
      if (s.centerInsufficientSlides) {
        let e = 0;
        if (
          (g.forEach((t) => {
            e += t + (s.spaceBetween ? s.spaceBetween : 0);
          }),
          (e -= s.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          p.forEach((e, i) => {
            p[i] = e - t;
          }),
            h.forEach((e, i) => {
              h[i] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: p,
          slidesGrid: h,
          slidesSizesGrid: g,
        }),
        s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
      ) {
        L(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
          L(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - g[g.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          i = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + i));
      }
      if (
        (u !== d && e.emit("slidesLengthChange"),
        p.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== y && e.emit("slidesGridLengthChange"),
        s.watchSlidesProgress && e.updateSlidesOffset(),
        !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
      ) {
        const t = `${s.containerModifierClass}backface-hidden`,
          i = e.$el.hasClass(t);
        u <= s.maxBackfaceHiddenSlides
          ? i || e.$el.addClass(t)
          : i && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        i = [],
        s = t.virtual && t.params.virtual.enabled;
      let n,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const o = (e) =>
        s
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            i.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !s) break;
            i.push(o(e));
          }
      else i.push(o(t.activeIndex));
      for (n = 0; n < i.length; n += 1)
        if (void 0 !== i[n]) {
          const e = i[n].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset = e.isHorizontal()
          ? t[i].offsetLeft
          : t[i].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        i = t.params,
        { slides: s, rtlTranslate: n, snapGrid: r } = t;
      if (0 === s.length) return;
      void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
      let o = -e;
      n && (o = e),
        s.removeClass(i.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < s.length; e += 1) {
        const a = s[e];
        let l = a.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
        const d =
            (o + (i.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + i.spaceBetween),
          c =
            (o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + i.spaceBetween),
          u = -(o - l),
          p = u + t.slidesSizesGrid[e];
        ((u >= 0 && u < t.size - 1) ||
          (p > 1 && p <= t.size) ||
          (u <= 0 && p >= t.size)) &&
          (t.visibleSlides.push(a),
          t.visibleSlidesIndexes.push(e),
          s.eq(e).addClass(i.slideVisibleClass)),
          (a.progress = n ? -d : d),
          (a.originalProgress = n ? -c : c);
      }
      t.visibleSlides = b(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const i = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * i) || 0;
      }
      const i = t.params,
        s = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: r, isEnd: o } = t;
      const a = r,
        l = o;
      0 === s
        ? ((n = 0), (r = !0), (o = !0))
        : ((n = (e - t.minTranslate()) / s), (r = n <= 0), (o = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: r, isEnd: o }),
        (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !a && t.emit("reachBeginning toEdge"),
        o && !l && t.emit("reachEnd toEdge"),
        ((a && !r) || (l && !o)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: i,
          $wrapperEl: s,
          activeIndex: n,
          realIndex: r,
        } = e,
        o = e.virtual && i.virtual.enabled;
      let a;
      t.removeClass(
        `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
      ),
        (a = o
          ? e.$wrapperEl.find(
              `.${i.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
        a.addClass(i.slideActiveClass),
        i.loop &&
          (a.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                )
                .addClass(i.slideDuplicateActiveClass));
      let l = a.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(i.slideNextClass));
      let d = a.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
      i.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(i.slidePrevClass)),
        i.loop &&
          (l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${
                    i.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  `.${i.slideClass}.${
                    i.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicateNextClass),
          d.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  `.${i.slideClass}:not(.${
                    i.slideDuplicateClass
                  })[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  `.${i.slideClass}.${
                    i.slideDuplicateClass
                  }[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(i.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        i = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: s,
          snapGrid: n,
          params: r,
          activeIndex: o,
          realIndex: a,
          snapIndex: l,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < s.length; e += 1)
          void 0 !== s[e + 1]
            ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
              ? (c = e)
              : i >= s[e] && i < s[e + 1] && (c = e + 1)
            : i >= s[e] && (c = e);
        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (n.indexOf(i) >= 0) d = n.indexOf(i);
      else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup);
      }
      if ((d >= n.length && (d = n.length - 1), c === o))
        return void (d !== l && ((t.snapIndex = d), t.emit("snapIndexChange")));
      const u = parseInt(
        t.slides.eq(c).attr("data-swiper-slide-index") || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: u,
        previousIndex: o,
        activeIndex: c,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        a !== u && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        i = t.params,
        s = b(e).closest(`.${i.slideClass}`)[0];
      let n,
        r = !1;
      if (s)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === s) {
            (r = !0), (n = e);
            break;
          }
      if (!s || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = s),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              b(s).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        i.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const _ = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: i, translate: s, $wrapperEl: n } = this;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      let r = T(n[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const i = this,
        {
          rtlTranslate: s,
          params: n,
          $wrapperEl: r,
          wrapperEl: o,
          progress: a,
        } = i;
      let l,
        d = 0,
        c = 0;
      i.isHorizontal() ? (d = s ? -e : e) : (c = e),
        n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        n.cssMode
          ? (o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
              ? -d
              : -c)
          : n.virtualTranslate ||
            r.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (i.previousTranslate = i.translate),
        (i.translate = i.isHorizontal() ? d : c);
      const u = i.maxTranslate() - i.minTranslate();
      (l = 0 === u ? 0 : (e - i.minTranslate()) / u),
        l !== a && i.updateProgress(e),
        i.emit("setTranslate", i.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, i, s, n) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        void 0 === s && (s = !0);
      const r = this,
        { params: o, wrapperEl: a } = r;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      const l = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = s && e > l ? l : s && e < d ? d : e),
        r.updateProgress(c),
        o.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              M({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            i &&
              (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            i &&
              (r.emit("beforeTransitionStart", t, n),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    i && r.emit("transitionEnd"));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function B(e) {
    let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
    const { activeIndex: r, previousIndex: o } = t;
    let a = s;
    if (
      (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
      t.emit(`transition${n}`),
      i && r !== o)
    ) {
      if ("reset" === a) return void t.emit(`slideResetTransition${n}`);
      t.emit(`slideChangeTransition${n}`),
        "next" === a
          ? t.emit(`slideNextTransition${n}`)
          : t.emit(`slidePrevTransition${n}`);
    }
  }
  const N = {
    slideTo: function (e, t, i, s, n) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        "number" != typeof e && "string" != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const r = this;
      let o = e;
      o < 0 && (o = 0);
      const {
        params: a,
        snapGrid: l,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: u,
        rtlTranslate: p,
        wrapperEl: h,
        enabled: g,
      } = r;
      if ((r.animating && a.preventInteractionOnTransition) || (!g && !s && !n))
        return !1;
      const m = Math.min(r.params.slidesPerGroupSkip, o);
      let f = m + Math.floor((o - m) / r.params.slidesPerGroup);
      f >= l.length && (f = l.length - 1),
        (u || a.initialSlide || 0) === (c || 0) &&
          i &&
          r.emit("beforeSlideChangeStart");
      const v = -l[f];
      if ((r.updateProgress(v), a.normalizeSlideIndex))
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            i = Math.floor(100 * d[e]),
            s = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= i && t < s - (s - i) / 2
              ? (o = e)
              : t >= i && t < s && (o = e + 1)
            : t >= i && (o = e);
        }
      if (r.initialized && o !== u) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          v > r.translate &&
          v > r.maxTranslate() &&
          (u || 0) !== o
        )
          return !1;
      }
      let y;
      if (
        ((y = o > u ? "next" : o < u ? "prev" : "reset"),
        (p && -v === r.translate) || (!p && v === r.translate))
      )
        return (
          r.updateActiveIndex(o),
          a.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== a.effect && r.setTranslate(v),
          "reset" !== y && (r.transitionStart(i, y), r.transitionEnd(i, y)),
          !1
        );
      if (a.cssMode) {
        const e = r.isHorizontal(),
          i = p ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            (h[e ? "scrollLeft" : "scrollTop"] = i),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              M({ swiper: r, targetPosition: i, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(o),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, s),
        r.transitionStart(i, y),
        0 === t
          ? r.transitionEnd(i, y)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(i, y));
              }),
            r.$wrapperEl[0].addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            ),
            r.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, i, s) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0);
      const n = this;
      let r = e;
      return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s);
    },
    slideNext: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const s = this,
        { animating: n, enabled: r, params: o } = s;
      if (!r) return s;
      let a = o.slidesPerGroup;
      "auto" === o.slidesPerView &&
        1 === o.slidesPerGroup &&
        o.slidesPerGroupAuto &&
        (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
      const l = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
      if (o.loop) {
        if (n && o.loopPreventsSlide) return !1;
        s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
      }
      return o.rewind && s.isEnd
        ? s.slideTo(0, e, t, i)
        : s.slideTo(s.activeIndex + l, e, t, i);
    },
    slidePrev: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const s = this,
        {
          params: n,
          animating: r,
          snapGrid: o,
          slidesGrid: a,
          rtlTranslate: l,
          enabled: d,
        } = s;
      if (!d) return s;
      if (n.loop) {
        if (r && n.loopPreventsSlide) return !1;
        s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = c(l ? s.translate : -s.translate),
        p = o.map((e) => c(e));
      let h = o[p.indexOf(u) - 1];
      if (void 0 === h && n.cssMode) {
        let e;
        o.forEach((t, i) => {
          u >= t && (e = i);
        }),
          void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
      }
      let g = 0;
      if (
        (void 0 !== h &&
          ((g = a.indexOf(h)),
          g < 0 && (g = s.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((g = g - s.slidesPerViewDynamic("previous", !0) + 1),
            (g = Math.max(g, 0)))),
        n.rewind && s.isBeginning)
      ) {
        const n =
          s.params.virtual && s.params.virtual.enabled && s.virtual
            ? s.virtual.slides.length - 1
            : s.slides.length - 1;
        return s.slideTo(n, e, t, i);
      }
      return s.slideTo(g, e, t, i);
    },
    slideReset: function (e, t, i) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, i)
      );
    },
    slideToClosest: function (e, t, i, s) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === s && (s = 0.5);
      const n = this;
      let r = n.activeIndex;
      const o = Math.min(n.params.slidesPerGroupSkip, r),
        a = o + Math.floor((r - o) / n.params.slidesPerGroup),
        l = n.rtlTranslate ? n.translate : -n.translate;
      if (l >= n.snapGrid[a]) {
        const e = n.snapGrid[a];
        l - e > (n.snapGrid[a + 1] - e) * s && (r += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[a - 1];
        l - e <= (n.snapGrid[a] - e) * s && (r -= n.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, n.slidesGrid.length - 1)),
        n.slideTo(r, e, t, i)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: i } = e,
        s =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(b(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - s / 2 ||
              r > e.slides.length - e.loopedSlides + s / 2
              ? (e.loopFix(),
                (r = i
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                S(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - s
            ? (e.loopFix(),
              (r = i
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              S(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  const H = {
    loopCreate: function () {
      const e = this,
        t = c(),
        { params: i, $wrapperEl: s } = e,
        n = s.children().length > 0 ? b(s.children()[0].parentNode) : s;
      n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
      let r = n.children(`.${i.slideClass}`);
      if (i.loopFillGroupWithBlank) {
        const e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
        if (e !== i.slidesPerGroup) {
          for (let s = 0; s < e; s += 1) {
            const e = b(t.createElement("div")).addClass(
              `${i.slideClass} ${i.slideBlankClass}`
            );
            n.append(e);
          }
          r = n.children(`.${i.slideClass}`);
        }
      }
      "auto" !== i.slidesPerView ||
        i.loopedSlides ||
        (i.loopedSlides = r.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(i.loopedSlides || i.slidesPerView, 10)
        )),
        (e.loopedSlides += i.loopAdditionalSlides),
        e.loopedSlides > r.length && (e.loopedSlides = r.length);
      const o = [],
        a = [];
      r.each((t, i) => {
        const s = b(t);
        i < e.loopedSlides && a.push(t),
          i < r.length && i >= r.length - e.loopedSlides && o.push(t),
          s.attr("data-swiper-slide-index", i);
      });
      for (let e = 0; e < a.length; e += 1)
        n.append(b(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (let e = o.length - 1; e >= 0; e -= 1)
        n.prepend(b(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: i,
        loopedSlides: s,
        allowSlidePrev: n,
        allowSlideNext: r,
        snapGrid: o,
        rtlTranslate: a,
      } = e;
      let l;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -o[t] - e.getTranslate();
      if (t < s) {
        (l = i.length - 3 * s + t), (l += s);
        e.slideTo(l, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((a ? -e.translate : e.translate) - d);
      } else if (t >= i.length - s) {
        (l = -i.length + t + s), (l += s);
        e.slideTo(l, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((a ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: i } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        i.removeAttr("data-swiper-slide-index");
    },
  };
  function F(e) {
    const t = this,
      i = c(),
      s = p(),
      n = t.touchEventsData,
      { params: r, touches: o, enabled: a } = t;
    if (!a) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let d = b(l.target);
    if ("wrapper" === r.touchEventsTarget && !d.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === l.type),
      !n.isTouchEvent && "which" in l && 3 === l.which)
    )
      return;
    if (!n.isTouchEvent && "button" in l && l.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!r.noSwipingClass &&
      "" !== r.noSwipingClass &&
      l.target &&
      l.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (d = b(e.path[0]));
    const u = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      h = !(!l.target || !l.target.shadowRoot);
    if (
      r.noSwiping &&
      (h
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(i) {
                return i && i !== c() && i !== p()
                  ? (i.assignedSlot && (i = i.assignedSlot),
                    i.closest(e) || t(i.getRootNode().host))
                  : null;
              })(t)
            );
          })(u, l.target)
        : d.closest(u)[0])
    )
      return void (t.allowClick = !0);
    if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
    (o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
      (o.currentY =
        "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
    const g = o.currentX,
      m = o.currentY,
      f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (f && (g <= v || g >= s.innerWidth - v)) {
      if ("prevent" !== f) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (o.startX = g),
      (o.startY = m),
      (n.touchStartTime = C()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== l.type)
    ) {
      let e = !0;
      d.is(n.focusableElements) &&
        ((e = !1), "SELECT" === d[0].nodeName && (n.isTouched = !1)),
        i.activeElement &&
          b(i.activeElement).is(n.focusableElements) &&
          i.activeElement !== d[0] &&
          i.activeElement.blur();
      const s = e && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !s) ||
        d[0].isContentEditable ||
        l.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", l);
  }
  function V(e) {
    const t = c(),
      i = this,
      s = i.touchEventsData,
      { params: n, touches: r, rtlTranslate: o, enabled: a } = i;
    if (!a) return;
    let l = e;
    if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
      return void (
        s.startMoving &&
        s.isScrolling &&
        i.emit("touchMoveOpposite", l)
      );
    if (s.isTouchEvent && "touchmove" !== l.type) return;
    const d =
        "touchmove" === l.type &&
        l.targetTouches &&
        (l.targetTouches[0] || l.changedTouches[0]),
      u = "touchmove" === l.type ? d.pageX : l.pageX,
      p = "touchmove" === l.type ? d.pageY : l.pageY;
    if (l.preventedByNestedSwiper) return (r.startX = u), void (r.startY = p);
    if (!i.allowTouchMove)
      return (
        b(l.target).is(s.focusableElements) || (i.allowClick = !1),
        void (
          s.isTouched &&
          (Object.assign(r, { startX: u, startY: p, currentX: u, currentY: p }),
          (s.touchStartTime = C()))
        )
      );
    if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (i.isVertical()) {
        if (
          (p < r.startY && i.translate <= i.maxTranslate()) ||
          (p > r.startY && i.translate >= i.minTranslate())
        )
          return (s.isTouched = !1), void (s.isMoved = !1);
      } else if (
        (u < r.startX && i.translate <= i.maxTranslate()) ||
        (u > r.startX && i.translate >= i.minTranslate())
      )
        return;
    if (
      s.isTouchEvent &&
      t.activeElement &&
      l.target === t.activeElement &&
      b(l.target).is(s.focusableElements)
    )
      return (s.isMoved = !0), void (i.allowClick = !1);
    if (
      (s.allowTouchCallbacks && i.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (r.currentX = u), (r.currentY = p);
    const h = r.currentX - r.startX,
      g = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(h ** 2 + g ** 2) < i.params.threshold)
      return;
    if (void 0 === s.isScrolling) {
      let e;
      (i.isHorizontal() && r.currentY === r.startY) ||
      (i.isVertical() && r.currentX === r.startX)
        ? (s.isScrolling = !1)
        : h * h + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(h))) / Math.PI),
          (s.isScrolling = i.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (s.isScrolling && i.emit("touchMoveOpposite", l),
      void 0 === s.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (s.startMoving = !0)),
      s.isScrolling)
    )
      return void (s.isTouched = !1);
    if (!s.startMoving) return;
    (i.allowClick = !1),
      !n.cssMode && l.cancelable && l.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
      s.isMoved ||
        (n.loop && !n.cssMode && i.loopFix(),
        (s.startTranslate = i.getTranslate()),
        i.setTransition(0),
        i.animating &&
          i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (s.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
          i.setGrabCursor(!0),
        i.emit("sliderFirstMove", l)),
      i.emit("sliderMove", l),
      (s.isMoved = !0);
    let m = i.isHorizontal() ? h : g;
    (r.diff = m),
      (m *= n.touchRatio),
      o && (m = -m),
      (i.swipeDirection = m > 0 ? "prev" : "next"),
      (s.currentTranslate = m + s.startTranslate);
    let f = !0,
      v = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (v = 0),
      m > 0 && s.currentTranslate > i.minTranslate()
        ? ((f = !1),
          n.resistance &&
            (s.currentTranslate =
              i.minTranslate() -
              1 +
              (-i.minTranslate() + s.startTranslate + m) ** v))
        : m < 0 &&
          s.currentTranslate < i.maxTranslate() &&
          ((f = !1),
          n.resistance &&
            (s.currentTranslate =
              i.maxTranslate() +
              1 -
              (i.maxTranslate() - s.startTranslate - m) ** v)),
      f && (l.preventedByNestedSwiper = !0),
      !i.allowSlideNext &&
        "next" === i.swipeDirection &&
        s.currentTranslate < s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !i.allowSlidePrev &&
        "prev" === i.swipeDirection &&
        s.currentTranslate > s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      i.allowSlidePrev ||
        i.allowSlideNext ||
        (s.currentTranslate = s.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(m) > n.threshold || s.allowThresholdMove))
        return void (s.currentTranslate = s.startTranslate);
      if (!s.allowThresholdMove)
        return (
          (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          void (r.diff = i.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
        n.watchSlidesProgress) &&
        (i.updateActiveIndex(), i.updateSlidesClasses()),
      i.params.freeMode &&
        n.freeMode.enabled &&
        i.freeMode &&
        i.freeMode.onTouchMove(),
      i.updateProgress(s.currentTranslate),
      i.setTranslate(s.currentTranslate));
  }
  function j(e) {
    const t = this,
      i = t.touchEventsData,
      { params: s, touches: n, rtlTranslate: r, slidesGrid: o, enabled: a } = t;
    if (!a) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", l),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = C(),
      c = d - i.touchStartTime;
    if (t.allowClick) {
      const e = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((e && e[0]) || l.target),
        t.emit("tap click", l),
        c < 300 &&
          d - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((i.lastClickTime = C()),
      S(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    let u;
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (u = s.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      s.cssMode)
    )
      return;
    if (t.params.freeMode && s.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: u });
    let p = 0,
      h = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
    ) {
      const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      void 0 !== o[e + t]
        ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
        : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
    }
    let g = null,
      m = null;
    s.rewind &&
      (t.isBeginning
        ? (m =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (g = 0));
    const f = (u - o[p]) / h,
      v = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (c > s.longSwipesMs) {
      if (!s.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (f >= s.longSwipesRatio
          ? t.slideTo(s.rewind && t.isEnd ? g : p + v)
          : t.slideTo(p)),
        "prev" === t.swipeDirection &&
          (f > 1 - s.longSwipesRatio
            ? t.slideTo(p + v)
            : null !== m && f < 0 && Math.abs(f) > s.longSwipesRatio
            ? t.slideTo(m)
            : t.slideTo(p));
    } else {
      if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(p + v)
          : t.slideTo(p)
        : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : p + v),
          "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
    }
  }
  function W() {
    const e = this,
      { params: t, el: i } = e;
    if (i && 0 === i.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = s),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function q(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function R() {
    const e = this,
      { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
    if (!s) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let Y = !1;
  function X() {}
  const U = (e, t) => {
    const i = c(),
      {
        params: s,
        touchEvents: n,
        el: r,
        wrapperEl: o,
        device: a,
        support: l,
      } = e,
      d = !!s.nested,
      u = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    if (l.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !l.passiveListener ||
        !s.passiveListeners
      ) && { passive: !0, capture: !1 };
      r[u](n.start, e.onTouchStart, t),
        r[u](
          n.move,
          e.onTouchMove,
          l.passiveListener ? { passive: !1, capture: d } : d
        ),
        r[u](n.end, e.onTouchEnd, t),
        n.cancel && r[u](n.cancel, e.onTouchEnd, t);
    } else
      r[u](n.start, e.onTouchStart, !1),
        i[u](n.move, e.onTouchMove, d),
        i[u](n.end, e.onTouchEnd, !1);
    (s.preventClicks || s.preventClicksPropagation) &&
      r[u]("click", e.onClick, !0),
      s.cssMode && o[u]("scroll", e.onScroll),
      s.updateOnWindowResize
        ? e[p](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            W,
            !0
          )
        : e[p]("observerUpdate", W, !0);
  };
  const K = {
      attachEvents: function () {
        const e = this,
          t = c(),
          { params: i, support: s } = e;
        (e.onTouchStart = F.bind(e)),
          (e.onTouchMove = V.bind(e)),
          (e.onTouchEnd = j.bind(e)),
          i.cssMode && (e.onScroll = R.bind(e)),
          (e.onClick = q.bind(e)),
          s.touch && !Y && (t.addEventListener("touchstart", X), (Y = !0)),
          U(e, "on");
      },
      detachEvents: function () {
        U(this, "off");
      },
    },
    Z = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const J = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: i,
          loopedSlides: s = 0,
          params: n,
          $el: r,
        } = e,
        o = n.breakpoints;
      if (!o || (o && 0 === Object.keys(o).length)) return;
      const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
      if (!a || e.currentBreakpoint === a) return;
      const l = (a in o ? o[a] : void 0) || e.originalParams,
        d = Z(e, n),
        c = Z(e, l),
        u = n.enabled;
      d && !c
        ? (r.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !d &&
          c &&
          (r.addClass(`${n.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === n.grid.fill)) &&
            r.addClass(`${n.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const p = l.direction && l.direction !== n.direction,
        h = n.loop && (l.slidesPerView !== n.slidesPerView || p);
      p && i && e.changeDirection(), I(e.params, l);
      const g = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        u && !g ? e.disable() : !u && g && e.enable(),
        (e.currentBreakpoint = a),
        e.emit("_beforeBreakpoint", l),
        h &&
          i &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - s + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t, i) {
      if ((void 0 === t && (t = "window"), !e || ("container" === t && !i)))
        return;
      let s = !1;
      const n = p(),
        r = "window" === t ? n.innerHeight : i.clientHeight,
        o = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: r * t, point: e };
          }
          return { value: e, point: e };
        });
      o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < o.length; e += 1) {
        const { point: r, value: a } = o[e];
        "window" === t
          ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
          : a <= i.clientWidth && (s = r);
      }
      return s || "max";
    },
  };
  const Q = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: i, rtl: s, $el: n, device: r, support: o } = e,
        a = (function (e, t) {
          const i = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((s) => {
                    e[s] && i.push(t + s);
                  })
                : "string" == typeof e && i.push(t + e);
            }),
            i
          );
        })(
          [
            "initialized",
            i.direction,
            { "pointer-events": !o.touch },
            { "free-mode": e.params.freeMode && i.freeMode.enabled },
            { autoheight: i.autoHeight },
            { rtl: s },
            { grid: i.grid && i.grid.rows > 1 },
            {
              "grid-column":
                i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
            },
            { android: r.android },
            { ios: r.ios },
            { "css-mode": i.cssMode },
            { centered: i.cssMode && i.centeredSlides },
          ],
          i.containerModifierClass
        );
      t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const ee = {
    loadImage: function (e, t, i, s, n, r) {
      const o = p();
      let a;
      function l() {
        r && r();
      }
      b(e).parent("picture")[0] || (e.complete && n)
        ? l()
        : t
        ? ((a = new o.Image()),
          (a.onload = l),
          (a.onerror = l),
          s && (a.sizes = s),
          i && (a.srcset = i),
          t && (a.src = t))
        : l();
    },
    preloadImages: function () {
      const e = this;
      function t() {
        null != e &&
          e &&
          !e.destroyed &&
          (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
          e.imagesLoaded === e.imagesToLoad.length &&
            (e.params.updateOnImagesReady && e.update(),
            e.emit("imagesReady")));
      }
      e.imagesToLoad = e.$el.find("img");
      for (let i = 0; i < e.imagesToLoad.length; i += 1) {
        const s = e.imagesToLoad[i];
        e.loadImage(
          s,
          s.currentSrc || s.getAttribute("src"),
          s.srcset || s.getAttribute("srcset"),
          s.sizes || s.getAttribute("sizes"),
          !0,
          t
        );
      }
    },
  };
  const te = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function ie(e, t) {
    return function (i) {
      void 0 === i && (i = {});
      const s = Object.keys(i)[0],
        n = i[s];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
            !0 === e[s] &&
            (e[s] = { auto: !0 }),
          s in e && "enabled" in n
            ? (!0 === e[s] && (e[s] = { enabled: !0 }),
              "object" != typeof e[s] ||
                "enabled" in e[s] ||
                (e[s].enabled = !0),
              e[s] || (e[s] = { enabled: !1 }),
              I(t, i))
            : I(t, i))
        : I(t, i);
    };
  }
  const se = {
      eventsEmitter: D,
      update: G,
      translate: _,
      transition: {
        setTransition: function (e, t) {
          const i = this;
          i.params.cssMode || i.$wrapperEl.transition(e),
            i.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const i = this,
            { params: s } = i;
          s.cssMode ||
            (s.autoHeight && i.updateAutoHeight(),
            B({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const i = this,
            { params: s } = i;
          (i.animating = !1),
            s.cssMode ||
              (i.setTransition(0),
              B({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: N,
      loop: H,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const i =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (i.style.cursor = "move"),
            (i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (i.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (i.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: K,
      breakpoints: J,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: i } = e,
            { slidesOffsetBefore: s } = i;
          if (s) {
            const t = e.slides.length - 1,
              i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
            e.isLocked = e.size > i;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: Q,
      images: ee,
    },
    ne = {};
  class re {
    constructor() {
      let e, t;
      for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
        s[n] = arguments[n];
      if (
        (1 === s.length &&
        s[0].constructor &&
        "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
          ? (t = s[0])
          : ([e, t] = s),
        t || (t = {}),
        (t = I({}, t)),
        e && !t.el && (t.el = e),
        t.el && b(t.el).length > 1)
      ) {
        const e = [];
        return (
          b(t.el).each((i) => {
            const s = I({}, t, { el: i });
            e.push(new re(s));
          }),
          e
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = A()),
        (r.device = $({ userAgent: t.userAgent })),
        (r.browser = z()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
      const o = {};
      r.modules.forEach((e) => {
        e({
          swiper: r,
          extendParams: ie(t, o),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const a = I({}, te, o);
      return (
        (r.params = I({}, a, ne, t)),
        (r.originalParams = I({}, r.params)),
        (r.passedParams = I({}, t)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((e) => {
            r.on(e, r.params.on[e]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = b),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: e,
          classNames: [],
          slides: b(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === r.params.direction,
          isVertical: () => "vertical" === r.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (r.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              r.support.touch || !r.params.simulateTouch
                ? r.touchEventsTouch
                : r.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: C(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        r.emit("_swiper"),
        r.params.init && r.init(),
        r
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const s = i.minTranslate(),
        n = (i.maxTranslate() - s) * e + s;
      i.translateTo(n, void 0 === t ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((i) => {
        const s = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: i,
        slides: s,
        slidesGrid: n,
        slidesSizesGrid: r,
        size: o,
        activeIndex: a,
      } = this;
      let l = 1;
      if (i.centeredSlides) {
        let e,
          t = s[a].swiperSlideSize;
        for (let i = a + 1; i < s.length; i += 1)
          s[i] &&
            !e &&
            ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
        for (let i = a - 1; i >= 0; i -= 1)
          s[i] &&
            !e &&
            ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
      } else if ("current" === e)
        for (let e = a + 1; e < s.length; e += 1) {
          (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
        }
      else
        for (let e = a - 1; e >= 0; e -= 1) {
          n[a] - n[e] < o && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      function s() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      i.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (s(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || s()),
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const i = this,
        s = i.params.direction;
      return (
        e || (e = "horizontal" === s ? "vertical" : "horizontal"),
        e === s ||
          ("horizontal" !== e && "vertical" !== e) ||
          (i.$el
            .removeClass(`${i.params.containerModifierClass}${s}`)
            .addClass(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const i = b(e || t.params.el);
      if (!(e = i[0])) return !1;
      e.swiper = t;
      const s = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = b(e.shadowRoot.querySelector(s()));
          return (t.children = (e) => i.children(e)), t;
        }
        return i.children(s());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = c().createElement("div");
        (n = b(e)),
          (e.className = t.params.wrapperClass),
          i.append(e),
          i.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: i,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const i = this,
        { params: s, $el: n, $wrapperEl: r, slides: o } = i;
      return (
        void 0 === i.params ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          s.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            n.removeAttr("style"),
            r.removeAttr("style"),
            o &&
              o.length &&
              o
                .removeClass(
                  [
                    s.slideVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((e) => {
            i.off(e);
          }),
          !1 !== e &&
            ((i.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      I(ne, e);
    }
    static get extendedDefaults() {
      return ne;
    }
    static get defaults() {
      return te;
    }
    static installModule(e) {
      re.prototype.__modules__ || (re.prototype.__modules__ = []);
      const t = re.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => re.installModule(e)), re)
        : (re.installModule(e), re);
    }
  }
  Object.keys(se).forEach((e) => {
    Object.keys(se[e]).forEach((t) => {
      re.prototype[t] = se[e][t];
    });
  }),
    re.use([
      function (e) {
        let { swiper: t, on: i, emit: s } = e;
        const n = p();
        let r = null,
          o = null;
        const a = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (s("beforeResize"), s("resize"));
          },
          l = () => {
            t && !t.destroyed && t.initialized && s("orientationchange");
          };
        i("init", () => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((r = new ResizeObserver((e) => {
                o = n.requestAnimationFrame(() => {
                  const { width: i, height: s } = t;
                  let n = i,
                    r = s;
                  e.forEach((e) => {
                    let { contentBoxSize: i, contentRect: s, target: o } = e;
                    (o && o !== t.el) ||
                      ((n = s ? s.width : (i[0] || i).inlineSize),
                      (r = s ? s.height : (i[0] || i).blockSize));
                  }),
                    (n === i && r === s) || a();
                });
              })),
              r.observe(t.el))
            : (n.addEventListener("resize", a),
              n.addEventListener("orientationchange", l));
        }),
          i("destroy", () => {
            o && n.cancelAnimationFrame(o),
              r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
              n.removeEventListener("resize", a),
              n.removeEventListener("orientationchange", l);
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: s, emit: n } = e;
        const r = [],
          o = p(),
          a = function (e, t) {
            void 0 === t && (t = {});
            const i = new (o.MutationObserver || o.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void n("observerUpdate", e[0]);
                const t = function () {
                  n("observerUpdate", e[0]);
                };
                o.requestAnimationFrame
                  ? o.requestAnimationFrame(t)
                  : o.setTimeout(t, 0);
              }
            );
            i.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              r.push(i);
          };
        i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) a(e[t]);
              }
              a(t.$el[0], { childList: t.params.observeSlideChildren }),
                a(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            r.forEach((e) => {
              e.disconnect();
            }),
              r.splice(0, r.length);
          });
      },
    ]);
  const oe = re;
  function ae(e) {
    let { swiper: t, extendParams: i, on: s, emit: n } = e;
    function r(e) {
      let i;
      return (
        e &&
          ((i = b(e)),
          t.params.uniqueNavElements &&
            "string" == typeof e &&
            i.length > 1 &&
            1 === t.$el.find(e).length &&
            (i = t.$el.find(e))),
        i
      );
    }
    function o(e, i) {
      const s = t.params.navigation;
      e &&
        e.length > 0 &&
        (e[i ? "addClass" : "removeClass"](s.disabledClass),
        e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i),
        t.params.watchOverflow &&
          t.enabled &&
          e[t.isLocked ? "addClass" : "removeClass"](s.lockClass));
    }
    function a() {
      if (t.params.loop) return;
      const { $nextEl: e, $prevEl: i } = t.navigation;
      o(i, t.isBeginning && !t.params.rewind),
        o(e, t.isEnd && !t.params.rewind);
    }
    function l(e) {
      e.preventDefault(),
        (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
    }
    function d(e) {
      e.preventDefault(),
        (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
    }
    function u() {
      const e = t.params.navigation;
      if (
        ((t.params.navigation = (function (e, t, i, s) {
          const n = c();
          return (
            e.params.createElements &&
              Object.keys(s).forEach((r) => {
                if (!i[r] && !0 === i.auto) {
                  let o = e.$el.children(`.${s[r]}`)[0];
                  o ||
                    ((o = n.createElement("div")),
                    (o.className = s[r]),
                    e.$el.append(o)),
                    (i[r] = o),
                    (t[r] = o);
                }
              }),
            i
          );
        })(t, t.originalParams.navigation, t.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        })),
        !e.nextEl && !e.prevEl)
      )
        return;
      const i = r(e.nextEl),
        s = r(e.prevEl);
      i && i.length > 0 && i.on("click", d),
        s && s.length > 0 && s.on("click", l),
        Object.assign(t.navigation, {
          $nextEl: i,
          nextEl: i && i[0],
          $prevEl: s,
          prevEl: s && s[0],
        }),
        t.enabled ||
          (i && i.addClass(e.lockClass), s && s.addClass(e.lockClass));
    }
    function p() {
      const { $nextEl: e, $prevEl: i } = t.navigation;
      e &&
        e.length &&
        (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)),
        i &&
          i.length &&
          (i.off("click", l), i.removeClass(t.params.navigation.disabledClass));
    }
    i({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    }),
      (t.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      s("init", () => {
        u(), a();
      }),
      s("toEdge fromEdge lock unlock", () => {
        a();
      }),
      s("destroy", () => {
        p();
      }),
      s("enable disable", () => {
        const { $nextEl: e, $prevEl: i } = t.navigation;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.navigation.lockClass
          ),
          i &&
            i[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            );
      }),
      s("click", (e, i) => {
        const { $nextEl: s, $prevEl: r } = t.navigation,
          o = i.target;
        if (t.params.navigation.hideOnClick && !b(o).is(r) && !b(o).is(s)) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === o || t.pagination.el.contains(o))
          )
            return;
          let e;
          s
            ? (e = s.hasClass(t.params.navigation.hiddenClass))
            : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
            n(!0 === e ? "navigationShow" : "navigationHide"),
            s && s.toggleClass(t.params.navigation.hiddenClass),
            r && r.toggleClass(t.params.navigation.hiddenClass);
        }
      }),
      Object.assign(t.navigation, { update: a, init: u, destroy: p });
  }
  function le(e) {
    let t,
      { swiper: i, extendParams: s, on: n, emit: r } = e;
    function o() {
      const e = i.slides.eq(i.activeIndex);
      let s = i.params.autoplay.delay;
      e.attr("data-swiper-autoplay") &&
        (s = e.attr("data-swiper-autoplay") || i.params.autoplay.delay),
        clearTimeout(t),
        (t = S(() => {
          let e;
          i.params.autoplay.reverseDirection
            ? i.params.loop
              ? (i.loopFix(),
                (e = i.slidePrev(i.params.speed, !0, !0)),
                r("autoplay"))
              : i.isBeginning
              ? i.params.autoplay.stopOnLastSlide
                ? l()
                : ((e = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0)),
                  r("autoplay"))
              : ((e = i.slidePrev(i.params.speed, !0, !0)), r("autoplay"))
            : i.params.loop
            ? (i.loopFix(),
              (e = i.slideNext(i.params.speed, !0, !0)),
              r("autoplay"))
            : i.isEnd
            ? i.params.autoplay.stopOnLastSlide
              ? l()
              : ((e = i.slideTo(0, i.params.speed, !0, !0)), r("autoplay"))
            : ((e = i.slideNext(i.params.speed, !0, !0)), r("autoplay")),
            ((i.params.cssMode && i.autoplay.running) || !1 === e) && o();
        }, s));
    }
    function a() {
      return (
        void 0 === t &&
        !i.autoplay.running &&
        ((i.autoplay.running = !0), r("autoplayStart"), o(), !0)
      );
    }
    function l() {
      return (
        !!i.autoplay.running &&
        void 0 !== t &&
        (t && (clearTimeout(t), (t = void 0)),
        (i.autoplay.running = !1),
        r("autoplayStop"),
        !0)
      );
    }
    function d(e) {
      i.autoplay.running &&
        (i.autoplay.paused ||
          (t && clearTimeout(t),
          (i.autoplay.paused = !0),
          0 !== e && i.params.autoplay.waitForTransition
            ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                i.$wrapperEl[0].addEventListener(e, p);
              })
            : ((i.autoplay.paused = !1), o())));
    }
    function u() {
      const e = c();
      "hidden" === e.visibilityState && i.autoplay.running && d(),
        "visible" === e.visibilityState &&
          i.autoplay.paused &&
          (o(), (i.autoplay.paused = !1));
    }
    function p(e) {
      i &&
        !i.destroyed &&
        i.$wrapperEl &&
        e.target === i.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach((e) => {
          i.$wrapperEl[0].removeEventListener(e, p);
        }),
        (i.autoplay.paused = !1),
        i.autoplay.running ? o() : l());
    }
    function h() {
      i.params.autoplay.disableOnInteraction ? l() : (r("autoplayPause"), d()),
        ["transitionend", "webkitTransitionEnd"].forEach((e) => {
          i.$wrapperEl[0].removeEventListener(e, p);
        });
    }
    function g() {
      i.params.autoplay.disableOnInteraction ||
        ((i.autoplay.paused = !1), r("autoplayResume"), o());
    }
    (i.autoplay = { running: !1, paused: !1 }),
      s({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      }),
      n("init", () => {
        if (i.params.autoplay.enabled) {
          a();
          c().addEventListener("visibilitychange", u),
            i.params.autoplay.pauseOnMouseEnter &&
              (i.$el.on("mouseenter", h), i.$el.on("mouseleave", g));
        }
      }),
      n("beforeTransitionStart", (e, t, s) => {
        i.autoplay.running &&
          (s || !i.params.autoplay.disableOnInteraction
            ? i.autoplay.pause(t)
            : l());
      }),
      n("sliderFirstMove", () => {
        i.autoplay.running &&
          (i.params.autoplay.disableOnInteraction ? l() : d());
      }),
      n("touchEnd", () => {
        i.params.cssMode &&
          i.autoplay.paused &&
          !i.params.autoplay.disableOnInteraction &&
          o();
      }),
      n("destroy", () => {
        i.$el.off("mouseenter", h),
          i.$el.off("mouseleave", g),
          i.autoplay.running && l();
        c().removeEventListener("visibilitychange", u);
      }),
      Object.assign(i.autoplay, { pause: d, run: o, start: a, stop: l });
  }
  window.addEventListener("load", function (e) {
    document.querySelector(".swiper-gallery") &&
      new oe(".swiper-gallery", {
        modules: [ae, le],
        effect: "fade",
        autoplay: { delay: 3e3, disableOnInteraction: !1 },
        observer: !0,
        observeParents: !0,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        autoHeight: !0,
        autoplay: { delay: 5e3 },
        loop: !0,
        speed: 800,
        preloadImages: !1,
        lazy: !0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 15, autoHeight: !0 },
          480: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 3, spaceBetween: 30 },
        },
      });
  });
  let de = !1;
  setTimeout(() => {
    if (de) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  var ce = function () {
    return (
      (ce =
        Object.assign ||
        function (e) {
          for (var t, i = 1, s = arguments.length; i < s; i++)
            for (var n in (t = arguments[i]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }),
      ce.apply(this, arguments)
    );
  };
  var ue = "lgAfterAppendSlide",
    pe = "lgInit",
    he = "lgHasVideo",
    ge = "lgContainerResize",
    me = "lgUpdateSlides",
    fe = "lgAfterAppendSubHtml",
    ve = "lgBeforeOpen",
    ye = "lgAfterOpen",
    we = "lgSlideItemLoad",
    be = "lgBeforeSlide",
    Se = "lgAfterSlide",
    Ce = "lgPosterClick",
    Te = "lgDragStart",
    Ee = "lgDragMove",
    xe = "lgDragEnd",
    Ie = "lgBeforeNextSlide",
    Le = "lgBeforePrevSlide",
    Me = "lgBeforeClose",
    ke = "lgAfterClose",
    Oe = {
      mode: "lg-slide",
      easing: "ease",
      speed: 400,
      licenseKey: "0000-0000-000-0000",
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 300,
      container: "",
      startAnimationDuration: 400,
      zoomFromOrigin: !0,
      hideBarsDelay: 0,
      showBarsAfter: 1e4,
      slideDelay: 0,
      supportLegacyBrowser: !0,
      allowMediaOverlap: !1,
      videoMaxSize: "1280-720",
      loadYouTubePoster: !0,
      defaultCaptionHeight: 0,
      ariaLabelledby: "",
      ariaDescribedby: "",
      closable: !0,
      swipeToClose: !0,
      closeOnTap: !0,
      showCloseIcon: !0,
      showMaximizeIcon: !1,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimation: !0,
      hideControlOnEnd: !1,
      mousewheel: !1,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 2,
      numberOfSlideItemsInDom: 10,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: 0,
      iframeWidth: "100%",
      iframeHeight: "100%",
      iframeMaxWidth: "100%",
      iframeMaxHeight: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      extraProps: [],
      exThumbImage: "",
      isMobile: void 0,
      mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
      plugins: [],
      strings: {
        closeGallery: "Close gallery",
        toggleMaximize: "Toggle maximize",
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        download: "Download",
        playVideo: "Play video",
      },
    };
  var Pe = (function () {
    function e(e) {
      return (
        (this.cssVenderPrefixes = [
          "TransitionDuration",
          "TransitionTimingFunction",
          "Transform",
          "Transition",
        ]),
        (this.selector = this._getSelector(e)),
        (this.firstElement = this._getFirstEl()),
        this
      );
    }
    return (
      (e.generateUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          }
        );
      }),
      (e.prototype._getSelector = function (e, t) {
        return (
          void 0 === t && (t = document),
          "string" != typeof e
            ? e
            : ((t = t || document),
              "#" === e.substring(0, 1)
                ? t.querySelector(e)
                : t.querySelectorAll(e))
        );
      }),
      (e.prototype._each = function (e) {
        return this.selector
          ? (void 0 !== this.selector.length
              ? [].forEach.call(this.selector, e)
              : e(this.selector, 0),
            this)
          : this;
      }),
      (e.prototype._setCssVendorPrefix = function (e, t, i) {
        var s = t.replace(/-([a-z])/gi, function (e, t) {
          return t.toUpperCase();
        });
        -1 !== this.cssVenderPrefixes.indexOf(s)
          ? ((e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
            (e.style["webkit" + s] = i),
            (e.style["moz" + s] = i),
            (e.style["ms" + s] = i),
            (e.style["o" + s] = i))
          : (e.style[s] = i);
      }),
      (e.prototype._getFirstEl = function () {
        return this.selector && void 0 !== this.selector.length
          ? this.selector[0]
          : this.selector;
      }),
      (e.prototype.isEventMatched = function (e, t) {
        var i = t.split(".");
        return e
          .split(".")
          .filter(function (e) {
            return e;
          })
          .every(function (e) {
            return -1 !== i.indexOf(e);
          });
      }),
      (e.prototype.attr = function (e, t) {
        return void 0 === t
          ? this.firstElement
            ? this.firstElement.getAttribute(e)
            : ""
          : (this._each(function (i) {
              i.setAttribute(e, t);
            }),
            this);
      }),
      (e.prototype.find = function (e) {
        return Ae(this._getSelector(e, this.selector));
      }),
      (e.prototype.first = function () {
        return this.selector && void 0 !== this.selector.length
          ? Ae(this.selector[0])
          : Ae(this.selector);
      }),
      (e.prototype.eq = function (e) {
        return Ae(this.selector[e]);
      }),
      (e.prototype.parent = function () {
        return Ae(this.selector.parentElement);
      }),
      (e.prototype.get = function () {
        return this._getFirstEl();
      }),
      (e.prototype.removeAttr = function (e) {
        var t = e.split(" ");
        return (
          this._each(function (e) {
            t.forEach(function (t) {
              return e.removeAttribute(t);
            });
          }),
          this
        );
      }),
      (e.prototype.wrap = function (e) {
        if (!this.firstElement) return this;
        var t = document.createElement("div");
        return (
          (t.className = e),
          this.firstElement.parentNode.insertBefore(t, this.firstElement),
          this.firstElement.parentNode.removeChild(this.firstElement),
          t.appendChild(this.firstElement),
          this
        );
      }),
      (e.prototype.addClass = function (e) {
        return (
          void 0 === e && (e = ""),
          this._each(function (t) {
            e.split(" ").forEach(function (e) {
              e && t.classList.add(e);
            });
          }),
          this
        );
      }),
      (e.prototype.removeClass = function (e) {
        return (
          this._each(function (t) {
            e.split(" ").forEach(function (e) {
              e && t.classList.remove(e);
            });
          }),
          this
        );
      }),
      (e.prototype.hasClass = function (e) {
        return !!this.firstElement && this.firstElement.classList.contains(e);
      }),
      (e.prototype.hasAttribute = function (e) {
        return !!this.firstElement && this.firstElement.hasAttribute(e);
      }),
      (e.prototype.toggleClass = function (e) {
        return this.firstElement
          ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
          : this;
      }),
      (e.prototype.css = function (e, t) {
        var i = this;
        return (
          this._each(function (s) {
            i._setCssVendorPrefix(s, e, t);
          }),
          this
        );
      }),
      (e.prototype.on = function (t, i) {
        var s = this;
        return this.selector
          ? (t.split(" ").forEach(function (t) {
              Array.isArray(e.eventListeners[t]) || (e.eventListeners[t] = []),
                e.eventListeners[t].push(i),
                s.selector.addEventListener(t.split(".")[0], i);
            }),
            this)
          : this;
      }),
      (e.prototype.once = function (e, t) {
        var i = this;
        return (
          this.on(e, function () {
            i.off(e), t(e);
          }),
          this
        );
      }),
      (e.prototype.off = function (t) {
        var i = this;
        return this.selector
          ? (Object.keys(e.eventListeners).forEach(function (s) {
              i.isEventMatched(t, s) &&
                (e.eventListeners[s].forEach(function (e) {
                  i.selector.removeEventListener(s.split(".")[0], e);
                }),
                (e.eventListeners[s] = []));
            }),
            this)
          : this;
      }),
      (e.prototype.trigger = function (e, t) {
        if (!this.firstElement) return this;
        var i = new CustomEvent(e.split(".")[0], { detail: t || null });
        return this.firstElement.dispatchEvent(i), this;
      }),
      (e.prototype.load = function (e) {
        var t = this;
        return (
          fetch(e)
            .then(function (e) {
              return e.text();
            })
            .then(function (e) {
              t.selector.innerHTML = e;
            }),
          this
        );
      }),
      (e.prototype.html = function (e) {
        return void 0 === e
          ? this.firstElement
            ? this.firstElement.innerHTML
            : ""
          : (this._each(function (t) {
              t.innerHTML = e;
            }),
            this);
      }),
      (e.prototype.append = function (e) {
        return (
          this._each(function (t) {
            "string" == typeof e
              ? t.insertAdjacentHTML("beforeend", e)
              : t.appendChild(e);
          }),
          this
        );
      }),
      (e.prototype.prepend = function (e) {
        return (
          this._each(function (t) {
            t.insertAdjacentHTML("afterbegin", e);
          }),
          this
        );
      }),
      (e.prototype.remove = function () {
        return (
          this._each(function (e) {
            e.parentNode.removeChild(e);
          }),
          this
        );
      }),
      (e.prototype.empty = function () {
        return (
          this._each(function (e) {
            e.innerHTML = "";
          }),
          this
        );
      }),
      (e.prototype.scrollTop = function (e) {
        return void 0 !== e
          ? ((document.body.scrollTop = e),
            (document.documentElement.scrollTop = e),
            this)
          : window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
      }),
      (e.prototype.scrollLeft = function (e) {
        return void 0 !== e
          ? ((document.body.scrollLeft = e),
            (document.documentElement.scrollLeft = e),
            this)
          : window.pageXOffset ||
              document.documentElement.scrollLeft ||
              document.body.scrollLeft ||
              0;
      }),
      (e.prototype.offset = function () {
        if (!this.firstElement) return { left: 0, top: 0 };
        var e = this.firstElement.getBoundingClientRect(),
          t = Ae("body").style().marginLeft;
        return {
          left: e.left - parseFloat(t) + this.scrollLeft(),
          top: e.top + this.scrollTop(),
        };
      }),
      (e.prototype.style = function () {
        return this.firstElement
          ? this.firstElement.currentStyle ||
              window.getComputedStyle(this.firstElement)
          : {};
      }),
      (e.prototype.width = function () {
        var e = this.style();
        return (
          this.firstElement.clientWidth -
          parseFloat(e.paddingLeft) -
          parseFloat(e.paddingRight)
        );
      }),
      (e.prototype.height = function () {
        var e = this.style();
        return (
          this.firstElement.clientHeight -
          parseFloat(e.paddingTop) -
          parseFloat(e.paddingBottom)
        );
      }),
      (e.eventListeners = {}),
      e
    );
  })();
  function Ae(e) {
    return (
      (function () {
        if ("function" == typeof window.CustomEvent) return !1;
        window.CustomEvent = function (e, t) {
          t = t || { bubbles: !1, cancelable: !1, detail: null };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
        };
      })(),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      new Pe(e)
    );
  }
  var $e = [
    "src",
    "sources",
    "subHtml",
    "subHtmlUrl",
    "html",
    "video",
    "poster",
    "slideName",
    "responsive",
    "srcset",
    "sizes",
    "iframe",
    "downloadUrl",
    "download",
    "width",
    "facebookShareUrl",
    "tweetText",
    "iframeTitle",
    "twitterShareUrl",
    "pinterestShareUrl",
    "pinterestText",
    "fbHtml",
    "disqusIdentifier",
    "disqusUrl",
  ];
  function ze(e) {
    return "href" === e
      ? "src"
      : (e = (e =
          (e = e.replace("data-", "")).charAt(0).toLowerCase() +
          e.slice(1)).replace(/-([a-z])/g, function (e) {
          return e[1].toUpperCase();
        }));
  }
  var De = function (e, t, i, s) {
      void 0 === i && (i = 0);
      var n = Ae(e).attr("data-lg-size") || s;
      if (n) {
        var r = n.split(",");
        if (r[1])
          for (var o = window.innerWidth, a = 0; a < r.length; a++) {
            var l = r[a];
            if (parseInt(l.split("-")[2], 10) > o) {
              n = l;
              break;
            }
            a === r.length - 1 && (n = l);
          }
        var d = n.split("-"),
          c = parseInt(d[0], 10),
          u = parseInt(d[1], 10),
          p = t.width(),
          h = t.height() - i,
          g = Math.min(p, c),
          m = Math.min(h, u),
          f = Math.min(g / c, m / u);
        return { width: c * f, height: u * f };
      }
    },
    Ge = function (e, t, i, s, n) {
      if (n) {
        var r = Ae(e).find("img").first();
        if (r.get()) {
          var o = t.get().getBoundingClientRect(),
            a = o.width,
            l = t.height() - (i + s),
            d = r.width(),
            c = r.height(),
            u = r.style(),
            p =
              (a - d) / 2 -
              r.offset().left +
              (parseFloat(u.paddingLeft) || 0) +
              (parseFloat(u.borderLeft) || 0) +
              Ae(window).scrollLeft() +
              o.left,
            h =
              (l - c) / 2 -
              r.offset().top +
              (parseFloat(u.paddingTop) || 0) +
              (parseFloat(u.borderTop) || 0) +
              Ae(window).scrollTop() +
              i;
          return (
            "translate3d(" +
            (p *= -1) +
            "px, " +
            (h *= -1) +
            "px, 0) scale3d(" +
            d / n.width +
            ", " +
            c / n.height +
            ", 1)"
          );
        }
      }
    },
    _e = function (e, t, i, s, n, r) {
      return (
        '<div class="lg-video-cont lg-has-iframe" style="width:' +
        e +
        "; max-width:" +
        i +
        "; height: " +
        t +
        "; max-height:" +
        s +
        '">\n                    <iframe class="lg-object" frameborder="0" ' +
        (r ? 'title="' + r + '"' : "") +
        ' src="' +
        n +
        '"  allowfullscreen="true"></iframe>\n                </div>'
      );
    },
    Be = function (e, t, i, s, n, r) {
      var o =
          "<img " +
          i +
          " " +
          (s ? 'srcset="' + s + '"' : "") +
          "  " +
          (n ? 'sizes="' + n + '"' : "") +
          ' class="lg-object lg-image" data-index="' +
          e +
          '" src="' +
          t +
          '" />',
        a = "";
      r &&
        (a = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
          var t = "";
          return (
            Object.keys(e).forEach(function (i) {
              t += " " + i + '="' + e[i] + '"';
            }),
            "<source " + t + "></source>"
          );
        }));
      return "" + a + o;
    },
    Ne = function (e) {
      for (var t = [], i = [], s = "", n = 0; n < e.length; n++) {
        var r = e[n].split(" ");
        "" === r[0] && r.splice(0, 1), i.push(r[0]), t.push(r[1]);
      }
      for (var o = window.innerWidth, a = 0; a < t.length; a++)
        if (parseInt(t[a], 10) > o) {
          s = i[a];
          break;
        }
      return s;
    },
    He = function (e) {
      return !!e && !!e.complete && 0 !== e.naturalWidth;
    },
    Fe = function (e, t, i, s, n) {
      return (
        '<div class="lg-video-cont ' +
        (n && n.youtube
          ? "lg-has-youtube"
          : n && n.vimeo
          ? "lg-has-vimeo"
          : "lg-has-html5") +
        '" style="' +
        i +
        '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
        s +
        '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
        s +
        '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
        (t || "") +
        '\n            <img class="lg-object lg-video-poster" src="' +
        e +
        '" />\n        </div>'
      );
    },
    Ve = function (e, t, i, s) {
      var n = [],
        r = (function () {
          for (var e = 0, t = 0, i = arguments.length; t < i; t++)
            e += arguments[t].length;
          var s = Array(e),
            n = 0;
          for (t = 0; t < i; t++)
            for (var r = arguments[t], o = 0, a = r.length; o < a; o++, n++)
              s[n] = r[o];
          return s;
        })($e, t);
      return (
        [].forEach.call(e, function (e) {
          for (var t = {}, o = 0; o < e.attributes.length; o++) {
            var a = e.attributes[o];
            if (a.specified) {
              var l = ze(a.name),
                d = "";
              r.indexOf(l) > -1 && (d = l), d && (t[d] = a.value);
            }
          }
          var c = Ae(e),
            u = c.find("img").first().attr("alt"),
            p = c.attr("title"),
            h = s ? c.attr(s) : c.find("img").first().attr("src");
          (t.thumb = h),
            i && !t.subHtml && (t.subHtml = p || u || ""),
            (t.alt = u || p || ""),
            n.push(t);
        }),
        n
      );
    },
    je = function () {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    We = function (e, t, i) {
      if (!e)
        return t
          ? { html5: !0 }
          : void console.error(
              "lightGallery :- data-src is not provided on slide item " +
                (i + 1) +
                ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
            );
      var s = e.match(
          /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
        ),
        n = e.match(
          /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
        ),
        r = e.match(
          /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
        );
      return s ? { youtube: s } : n ? { vimeo: n } : r ? { wistia: r } : void 0;
    },
    qe = 0,
    Re = (function () {
      function e(e, t) {
        if (
          ((this.lgOpened = !1),
          (this.index = 0),
          (this.plugins = []),
          (this.lGalleryOn = !1),
          (this.lgBusy = !1),
          (this.currentItemsInDom = []),
          (this.prevScrollTop = 0),
          (this.isDummyImageRemoved = !1),
          (this.dragOrSwipeEnabled = !1),
          (this.mediaContainerPosition = { top: 0, bottom: 0 }),
          !e)
        )
          return this;
        if (
          (qe++,
          (this.lgId = qe),
          (this.el = e),
          (this.LGel = Ae(e)),
          this.generateSettings(t),
          this.buildModules(),
          this.settings.dynamic &&
            void 0 !== this.settings.dynamicEl &&
            !Array.isArray(this.settings.dynamicEl))
        )
          throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        return (
          (this.galleryItems = this.getItems()),
          this.normalizeSettings(),
          this.init(),
          this.validateLicense(),
          this
        );
      }
      return (
        (e.prototype.generateSettings = function (e) {
          if (
            ((this.settings = ce(ce({}, Oe), e)),
            this.settings.isMobile &&
            "function" == typeof this.settings.isMobile
              ? this.settings.isMobile()
              : je())
          ) {
            var t = ce(
              ce({}, this.settings.mobileSettings),
              this.settings.mobileSettings
            );
            this.settings = ce(ce({}, this.settings), t);
          }
        }),
        (e.prototype.normalizeSettings = function () {
          this.settings.slideEndAnimation &&
            (this.settings.hideControlOnEnd = !1),
            this.settings.closable || (this.settings.swipeToClose = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            this.settings.dynamic && (this.zoomFromOrigin = !1),
            this.settings.container ||
              (this.settings.container = document.body),
            (this.settings.preload = Math.min(
              this.settings.preload,
              this.galleryItems.length
            ));
        }),
        (e.prototype.init = function () {
          var e = this;
          this.addSlideVideoInfo(this.galleryItems),
            this.buildStructure(),
            this.LGel.trigger(pe, { instance: this }),
            this.settings.keyPress && this.keyPress(),
            setTimeout(function () {
              e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
            }, 50),
            this.arrow(),
            this.settings.mousewheel && this.mousewheel(),
            this.settings.dynamic || this.openGalleryOnItemClick();
        }),
        (e.prototype.openGalleryOnItemClick = function () {
          for (
            var e = this,
              t = function (t) {
                var s = i.items[t],
                  n = Ae(s),
                  r = Pe.generateUUID();
                n.attr("data-lg-id", r).on(
                  "click.lgcustom-item-" + r,
                  function (i) {
                    i.preventDefault();
                    var n = e.settings.index || t;
                    e.openGallery(n, s);
                  }
                );
              },
              i = this,
              s = 0;
            s < this.items.length;
            s++
          )
            t(s);
        }),
        (e.prototype.buildModules = function () {
          var e = this;
          this.settings.plugins.forEach(function (t) {
            e.plugins.push(new t(e, Ae));
          });
        }),
        (e.prototype.validateLicense = function () {
          this.settings.licenseKey
            ? "0000-0000-000-0000" === this.settings.licenseKey &&
              console.warn(
                "lightGallery: " +
                  this.settings.licenseKey +
                  " license key is not valid for production use"
              )
            : console.error("Please provide a valid license key");
        }),
        (e.prototype.getSlideItem = function (e) {
          return Ae(this.getSlideItemId(e));
        }),
        (e.prototype.getSlideItemId = function (e) {
          return "#lg-item-" + this.lgId + "-" + e;
        }),
        (e.prototype.getIdName = function (e) {
          return e + "-" + this.lgId;
        }),
        (e.prototype.getElementById = function (e) {
          return Ae("#" + this.getIdName(e));
        }),
        (e.prototype.manageSingleSlideClassName = function () {
          this.galleryItems.length < 2
            ? this.outer.addClass("lg-single-item")
            : this.outer.removeClass("lg-single-item");
        }),
        (e.prototype.buildStructure = function () {
          var e = this;
          if (!(this.$container && this.$container.get())) {
            var t = "",
              i = "";
            this.settings.controls &&
              (t =
                '<button type="button" id="' +
                this.getIdName("lg-prev") +
                '" aria-label="' +
                this.settings.strings.previousSlide +
                '" class="lg-prev lg-icon"> ' +
                this.settings.prevHtml +
                ' </button>\n                <button type="button" id="' +
                this.getIdName("lg-next") +
                '" aria-label="' +
                this.settings.strings.nextSlide +
                '" class="lg-next lg-icon"> ' +
                this.settings.nextHtml +
                " </button>"),
              ".lg-item" !== this.settings.appendSubHtmlTo &&
                (i =
                  '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
            var s = "";
            this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
            var n = this.settings.ariaLabelledby
                ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                : "",
              r = this.settings.ariaDescribedby
                ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                : "",
              o =
                "lg-container " +
                this.settings.addClass +
                " " +
                (document.body !== this.settings.container ? "lg-inline" : ""),
              a =
                this.settings.closable && this.settings.showCloseIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.closeGallery +
                    '" id="' +
                    this.getIdName("lg-close") +
                    '" class="lg-close lg-icon"></button>'
                  : "",
              l = this.settings.showMaximizeIcon
                ? '<button type="button" aria-label="' +
                  this.settings.strings.toggleMaximize +
                  '" id="' +
                  this.getIdName("lg-maximize") +
                  '" class="lg-maximize lg-icon"></button>'
                : "",
              d =
                '\n        <div class="' +
                o +
                '" id="' +
                this.getIdName("lg-container") +
                '" tabindex="-1" aria-modal="true" ' +
                n +
                " " +
                r +
                ' role="dialog"\n        >\n            <div id="' +
                this.getIdName("lg-backdrop") +
                '" class="lg-backdrop"></div>\n\n            <div id="' +
                this.getIdName("lg-outer") +
                '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                s +
                ' ">\n\n              <div id="' +
                this.getIdName("lg-content") +
                '" class="lg-content">\n                <div id="' +
                this.getIdName("lg-inner") +
                '" class="lg-inner">\n                </div>\n                ' +
                t +
                '\n              </div>\n                <div id="' +
                this.getIdName("lg-toolbar") +
                '" class="lg-toolbar lg-group">\n                    ' +
                l +
                "\n                    " +
                a +
                "\n                    </div>\n                    " +
                (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                '\n                <div id="' +
                this.getIdName("lg-components") +
                '" class="lg-components">\n                    ' +
                (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") +
                "\n                </div>\n            </div>\n        </div>\n        ";
            Ae(this.settings.container).append(d),
              document.body !== this.settings.container &&
                Ae(this.settings.container).css("position", "relative"),
              (this.outer = this.getElementById("lg-outer")),
              (this.$lgComponents = this.getElementById("lg-components")),
              (this.$backdrop = this.getElementById("lg-backdrop")),
              (this.$container = this.getElementById("lg-container")),
              (this.$inner = this.getElementById("lg-inner")),
              (this.$content = this.getElementById("lg-content")),
              (this.$toolbar = this.getElementById("lg-toolbar")),
              this.$backdrop.css(
                "transition-duration",
                this.settings.backdropDuration + "ms"
              );
            var c = this.settings.mode + " ";
            this.manageSingleSlideClassName(),
              this.settings.enableDrag && (c += "lg-grab "),
              this.outer.addClass(c),
              this.$inner.css(
                "transition-timing-function",
                this.settings.easing
              ),
              this.$inner.css(
                "transition-duration",
                this.settings.speed + "ms"
              ),
              this.settings.download &&
                this.$toolbar.append(
                  '<a id="' +
                    this.getIdName("lg-download") +
                    '" target="_blank" rel="noopener" aria-label="' +
                    this.settings.strings.download +
                    '" download class="lg-download lg-icon"></a>'
                ),
              this.counter(),
              Ae(window).on(
                "resize.lg.global" +
                  this.lgId +
                  " orientationchange.lg.global" +
                  this.lgId,
                function () {
                  e.refreshOnResize();
                }
              ),
              this.hideBars(),
              this.manageCloseGallery(),
              this.toggleMaximize(),
              this.initModules();
          }
        }),
        (e.prototype.refreshOnResize = function () {
          if (this.lgOpened) {
            var e = this.galleryItems[this.index].__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var t = this.mediaContainerPosition,
              i = t.top,
              s = t.bottom;
            if (
              ((this.currentImageSize = De(
                this.items[this.index],
                this.outer,
                i + s,
                e && this.settings.videoMaxSize
              )),
              e && this.resizeVideoSlide(this.index, this.currentImageSize),
              this.zoomFromOrigin && !this.isDummyImageRemoved)
            ) {
              var n = this.getDummyImgStyles(this.currentImageSize);
              this.outer
                .find(".lg-current .lg-dummy-img")
                .first()
                .attr("style", n);
            }
            this.LGel.trigger(ge);
          }
        }),
        (e.prototype.resizeVideoSlide = function (e, t) {
          var i = this.getVideoContStyle(t);
          this.getSlideItem(e).find(".lg-video-cont").attr("style", i);
        }),
        (e.prototype.updateSlides = function (e, t) {
          if (
            (this.index > e.length - 1 && (this.index = e.length - 1),
            1 === e.length && (this.index = 0),
            e.length)
          ) {
            var i = this.galleryItems[t].src;
            (this.galleryItems = e),
              this.updateControls(),
              this.$inner.empty(),
              (this.currentItemsInDom = []);
            var s = 0;
            this.galleryItems.some(function (e, t) {
              return e.src === i && ((s = t), !0);
            }),
              (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
              this.loadContent(s, !0),
              this.getSlideItem(s).addClass("lg-current"),
              (this.index = s),
              this.updateCurrentCounter(s),
              this.LGel.trigger(me);
          } else this.closeGallery();
        }),
        (e.prototype.getItems = function () {
          if (((this.items = []), this.settings.dynamic))
            return this.settings.dynamicEl || [];
          if ("this" === this.settings.selector) this.items.push(this.el);
          else if (this.settings.selector)
            if ("string" == typeof this.settings.selector)
              if (this.settings.selectWithin) {
                var e = Ae(this.settings.selectWithin);
                this.items = e.find(this.settings.selector).get();
              } else
                this.items = this.el.querySelectorAll(this.settings.selector);
            else this.items = this.settings.selector;
          else this.items = this.el.children;
          return Ve(
            this.items,
            this.settings.extraProps,
            this.settings.getCaptionFromTitleOrAlt,
            this.settings.exThumbImage
          );
        }),
        (e.prototype.openGallery = function (e, t) {
          var i = this;
          if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
            (this.lgOpened = !0),
              this.outer.get().focus(),
              this.outer.removeClass("lg-hide-items"),
              this.$container.addClass("lg-show");
            var s = this.getItemsToBeInsertedToDom(e, e);
            this.currentItemsInDom = s;
            var n = "";
            s.forEach(function (e) {
              n = n + '<div id="' + e + '" class="lg-item"></div>';
            }),
              this.$inner.append(n),
              this.addHtml(e);
            var r = "";
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var o = this.mediaContainerPosition,
              a = o.top,
              l = o.bottom;
            this.settings.allowMediaOverlap ||
              this.setMediaContainerPosition(a, l);
            var d = this.galleryItems[e].__slideVideoInfo;
            this.zoomFromOrigin &&
              t &&
              ((this.currentImageSize = De(
                t,
                this.outer,
                a + l,
                d && this.settings.videoMaxSize
              )),
              (r = Ge(t, this.outer, a, l, this.currentImageSize))),
              (this.zoomFromOrigin && r) ||
                (this.outer.addClass(this.settings.startClass),
                this.getSlideItem(e).removeClass("lg-complete"));
            var c = this.settings.zoomFromOrigin
              ? 100
              : this.settings.backdropDuration;
            setTimeout(function () {
              i.outer.addClass("lg-components-open");
            }, c),
              (this.index = e),
              this.LGel.trigger(ve),
              this.getSlideItem(e).addClass("lg-current"),
              (this.lGalleryOn = !1),
              (this.prevScrollTop = Ae(window).scrollTop()),
              setTimeout(function () {
                if (i.zoomFromOrigin && r) {
                  var t = i.getSlideItem(e);
                  t.css("transform", r),
                    setTimeout(function () {
                      t
                        .addClass("lg-start-progress lg-start-end-progress")
                        .css(
                          "transition-duration",
                          i.settings.startAnimationDuration + "ms"
                        ),
                        i.outer.addClass("lg-zoom-from-image");
                    }),
                    setTimeout(function () {
                      t.css("transform", "translate3d(0, 0, 0)");
                    }, 100);
                }
                setTimeout(function () {
                  i.$backdrop.addClass("in"),
                    i.$container.addClass("lg-show-in");
                }, 10),
                  (i.zoomFromOrigin && r) ||
                    setTimeout(function () {
                      i.outer.addClass("lg-visible");
                    }, i.settings.backdropDuration),
                  i.slide(e, !1, !1, !1),
                  i.LGel.trigger(ye);
              }),
              document.body === this.settings.container &&
                Ae("html").addClass("lg-on");
          }
        }),
        (e.prototype.getMediaContainerPosition = function () {
          if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
          var e = this.$toolbar.get().clientHeight || 0,
            t = this.outer.find(".lg-components .lg-sub-html").get(),
            i =
              this.settings.defaultCaptionHeight || (t && t.clientHeight) || 0,
            s = this.outer.find(".lg-thumb-outer").get();
          return { top: e, bottom: (s ? s.clientHeight : 0) + i };
        }),
        (e.prototype.setMediaContainerPosition = function (e, t) {
          void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            this.$content.css("top", e + "px").css("bottom", t + "px");
        }),
        (e.prototype.hideBars = function () {
          var e = this;
          setTimeout(function () {
            e.outer.removeClass("lg-hide-items"),
              e.settings.hideBarsDelay > 0 &&
                (e.outer.on("mousemove.lg click.lg touchstart.lg", function () {
                  e.outer.removeClass("lg-hide-items"),
                    clearTimeout(e.hideBarTimeout),
                    (e.hideBarTimeout = setTimeout(function () {
                      e.outer.addClass("lg-hide-items");
                    }, e.settings.hideBarsDelay));
                }),
                e.outer.trigger("mousemove.lg"));
          }, this.settings.showBarsAfter);
        }),
        (e.prototype.initPictureFill = function (e) {
          if (this.settings.supportLegacyBrowser)
            try {
              picturefill({ elements: [e.get()] });
            } catch (e) {
              console.warn(
                "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
              );
            }
        }),
        (e.prototype.counter = function () {
          if (this.settings.counter) {
            var e =
              '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
              this.getIdName("lg-counter-current") +
              '" class="lg-counter-current">' +
              (this.index + 1) +
              ' </span> /\n                <span id="' +
              this.getIdName("lg-counter-all") +
              '" class="lg-counter-all">' +
              this.galleryItems.length +
              " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(e);
          }
        }),
        (e.prototype.addHtml = function (e) {
          var t, i;
          if (
            (this.galleryItems[e].subHtmlUrl
              ? (i = this.galleryItems[e].subHtmlUrl)
              : (t = this.galleryItems[e].subHtml),
            !i)
          )
            if (t) {
              var s = t.substring(0, 1);
              ("." !== s && "#" !== s) ||
                (t =
                  this.settings.subHtmlSelectorRelative &&
                  !this.settings.dynamic
                    ? Ae(this.items).eq(e).find(t).first().html()
                    : Ae(t).first().html());
            } else t = "";
          if (".lg-item" !== this.settings.appendSubHtmlTo)
            i
              ? this.outer.find(".lg-sub-html").load(i)
              : this.outer.find(".lg-sub-html").html(t);
          else {
            var n = Ae(this.getSlideItemId(e));
            i
              ? n.load(i)
              : n.append('<div class="lg-sub-html">' + t + "</div>");
          }
          null != t &&
            ("" === t
              ? this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
            this.LGel.trigger(fe, { index: e });
        }),
        (e.prototype.preload = function (e) {
          for (
            var t = 1;
            t <= this.settings.preload && !(t >= this.galleryItems.length - e);
            t++
          )
            this.loadContent(e + t, !1);
          for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++)
            this.loadContent(e - i, !1);
        }),
        (e.prototype.getDummyImgStyles = function (e) {
          return e
            ? "width:" +
                e.width +
                "px;\n                margin-left: -" +
                e.width / 2 +
                "px;\n                margin-top: -" +
                e.height / 2 +
                "px;\n                height:" +
                e.height +
                "px"
            : "";
        }),
        (e.prototype.getVideoContStyle = function (e) {
          return e
            ? "width:" +
                e.width +
                "px;\n                height:" +
                e.height +
                "px"
            : "";
        }),
        (e.prototype.getDummyImageContent = function (e, t, i) {
          var s;
          if ((this.settings.dynamic || (s = Ae(this.items).eq(t)), s)) {
            var n = void 0;
            if (
              !(n = this.settings.exThumbImage
                ? s.attr(this.settings.exThumbImage)
                : s.find("img").first().attr("src"))
            )
              return "";
            var r =
              "<img " +
              i +
              ' style="' +
              this.getDummyImgStyles(this.currentImageSize) +
              '" class="lg-dummy-img" src="' +
              n +
              '" />';
            return (
              e.addClass("lg-first-slide"),
              this.outer.addClass("lg-first-slide-loading"),
              r
            );
          }
          return "";
        }),
        (e.prototype.setImgMarkup = function (e, t, i) {
          var s = this.galleryItems[i],
            n = s.alt,
            r = s.srcset,
            o = s.sizes,
            a = s.sources,
            l = n ? 'alt="' + n + '"' : "",
            d =
              '<picture class="lg-img-wrap"> ' +
              (this.isFirstSlideWithZoomAnimation()
                ? this.getDummyImageContent(t, i, l)
                : Be(i, e, l, r, o, a)) +
              "</picture>";
          t.prepend(d);
        }),
        (e.prototype.onSlideObjectLoad = function (e, t, i, s) {
          var n = e.find(".lg-object").first();
          He(n.get()) || t
            ? i()
            : (n.on("load.lg error.lg", function () {
                i && i();
              }),
              n.on("error.lg", function () {
                s && s();
              }));
        }),
        (e.prototype.onLgObjectLoad = function (e, t, i, s, n, r) {
          var o = this;
          this.onSlideObjectLoad(
            e,
            r,
            function () {
              o.triggerSlideItemLoad(e, t, i, s, n);
            },
            function () {
              e.addClass("lg-complete lg-complete_"),
                e.html(
                  '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                );
            }
          );
        }),
        (e.prototype.triggerSlideItemLoad = function (e, t, i, s, n) {
          var r = this,
            o = this.galleryItems[t],
            a = n && "video" === this.getSlideType(o) && !o.poster ? s : 0;
          setTimeout(function () {
            e.addClass("lg-complete lg-complete_"),
              r.LGel.trigger(we, { index: t, delay: i || 0, isFirstSlide: n });
          }, a);
        }),
        (e.prototype.isFirstSlideWithZoomAnimation = function () {
          return !(
            this.lGalleryOn ||
            !this.zoomFromOrigin ||
            !this.currentImageSize
          );
        }),
        (e.prototype.addSlideVideoInfo = function (e) {
          var t = this;
          e.forEach(function (e, i) {
            (e.__slideVideoInfo = We(e.src, !!e.video, i)),
              e.__slideVideoInfo &&
                t.settings.loadYouTubePoster &&
                !e.poster &&
                e.__slideVideoInfo.youtube &&
                (e.poster =
                  "//img.youtube.com/vi/" +
                  e.__slideVideoInfo.youtube[1] +
                  "/maxresdefault.jpg");
          });
        }),
        (e.prototype.loadContent = function (e, t) {
          var i = this,
            s = this.galleryItems[e],
            n = Ae(this.getSlideItemId(e)),
            r = s.poster,
            o = s.srcset,
            a = s.sizes,
            l = s.sources,
            d = s.src,
            c = s.video,
            u = c && "string" == typeof c ? JSON.parse(c) : c;
          if (s.responsive) {
            var p = s.responsive.split(",");
            d = Ne(p) || d;
          }
          var h = s.__slideVideoInfo,
            g = "",
            m = !!s.iframe,
            f = !this.lGalleryOn,
            v = 0;
          if (
            (f &&
              (v =
                this.zoomFromOrigin && this.currentImageSize
                  ? this.settings.startAnimationDuration + 10
                  : this.settings.backdropDuration + 10),
            !n.hasClass("lg-loaded"))
          ) {
            if (h) {
              var y = this.mediaContainerPosition,
                w = y.top,
                b = y.bottom,
                S = De(
                  this.items[e],
                  this.outer,
                  w + b,
                  h && this.settings.videoMaxSize
                );
              g = this.getVideoContStyle(S);
            }
            if (m) {
              var C = _e(
                this.settings.iframeWidth,
                this.settings.iframeHeight,
                this.settings.iframeMaxWidth,
                this.settings.iframeMaxHeight,
                d,
                s.iframeTitle
              );
              n.prepend(C);
            } else if (r) {
              var T = "";
              f &&
                this.zoomFromOrigin &&
                this.currentImageSize &&
                (T = this.getDummyImageContent(n, e, ""));
              C = Fe(r, T || "", g, this.settings.strings.playVideo, h);
              n.prepend(C);
            } else if (h) {
              C = '<div class="lg-video-cont " style="' + g + '"></div>';
              n.prepend(C);
            } else if ((this.setImgMarkup(d, n, e), o || l)) {
              var E = n.find(".lg-object");
              this.initPictureFill(E);
            }
            (r || h) &&
              this.LGel.trigger(he, {
                index: e,
                src: d,
                html5Video: u,
                hasPoster: !!r,
              }),
              this.LGel.trigger(ue, { index: e }),
              this.lGalleryOn &&
                ".lg-item" === this.settings.appendSubHtmlTo &&
                this.addHtml(e);
          }
          var x = 0;
          v && !Ae(document.body).hasClass("lg-from-hash") && (x = v),
            this.isFirstSlideWithZoomAnimation() &&
              (setTimeout(function () {
                n.removeClass(
                  "lg-start-end-progress lg-start-progress"
                ).removeAttr("style");
              }, this.settings.startAnimationDuration + 100),
              n.hasClass("lg-loaded") ||
                setTimeout(function () {
                  if (
                    "image" === i.getSlideType(s) &&
                    (n
                      .find(".lg-img-wrap")
                      .append(Be(e, d, "", o, a, s.sources)),
                    o || l)
                  ) {
                    var t = n.find(".lg-object");
                    i.initPictureFill(t);
                  }
                  ("image" === i.getSlideType(s) ||
                    ("video" === i.getSlideType(s) && r)) &&
                    (i.onLgObjectLoad(n, e, v, x, !0, !1),
                    i.onSlideObjectLoad(
                      n,
                      !(!h || !h.html5 || r),
                      function () {
                        i.loadContentOnFirstSlideLoad(e, n, x);
                      },
                      function () {
                        i.loadContentOnFirstSlideLoad(e, n, x);
                      }
                    ));
                }, this.settings.startAnimationDuration + 100)),
            n.addClass("lg-loaded"),
            (this.isFirstSlideWithZoomAnimation() &&
              ("video" !== this.getSlideType(s) || r)) ||
              this.onLgObjectLoad(n, e, v, x, f, !(!h || !h.html5 || r)),
            (this.zoomFromOrigin && this.currentImageSize) ||
              !n.hasClass("lg-complete_") ||
              this.lGalleryOn ||
              setTimeout(function () {
                n.addClass("lg-complete");
              }, this.settings.backdropDuration),
            (this.lGalleryOn = !0),
            !0 === t &&
              (n.hasClass("lg-complete_")
                ? this.preload(e)
                : n
                    .find(".lg-object")
                    .first()
                    .on("load.lg error.lg", function () {
                      i.preload(e);
                    }));
        }),
        (e.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
          var s = this;
          setTimeout(function () {
            t.find(".lg-dummy-img").remove(),
              t.removeClass("lg-first-slide"),
              s.outer.removeClass("lg-first-slide-loading"),
              (s.isDummyImageRemoved = !0),
              s.preload(e);
          }, i + 300);
        }),
        (e.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
          var s = this;
          void 0 === i && (i = 0);
          var n = [],
            r = Math.max(i, 3);
          r = Math.min(r, this.galleryItems.length);
          var o = "lg-item-" + this.lgId + "-" + t;
          if (this.galleryItems.length <= 3)
            return (
              this.galleryItems.forEach(function (e, t) {
                n.push("lg-item-" + s.lgId + "-" + t);
              }),
              n
            );
          if (e < (this.galleryItems.length - 1) / 2) {
            for (var a = e; a > e - r / 2 && a >= 0; a--)
              n.push("lg-item-" + this.lgId + "-" + a);
            var l = n.length;
            for (a = 0; a < r - l; a++)
              n.push("lg-item-" + this.lgId + "-" + (e + a + 1));
          } else {
            for (a = e; a <= this.galleryItems.length - 1 && a < e + r / 2; a++)
              n.push("lg-item-" + this.lgId + "-" + a);
            for (l = n.length, a = 0; a < r - l; a++)
              n.push("lg-item-" + this.lgId + "-" + (e - a - 1));
          }
          return (
            this.settings.loop &&
              (e === this.galleryItems.length - 1
                ? n.push("lg-item-" + this.lgId + "-0")
                : 0 === e &&
                  n.push(
                    "lg-item-" +
                      this.lgId +
                      "-" +
                      (this.galleryItems.length - 1)
                  )),
            -1 === n.indexOf(o) && n.push("lg-item-" + this.lgId + "-" + t),
            n
          );
        }),
        (e.prototype.organizeSlideItems = function (e, t) {
          var i = this,
            s = this.getItemsToBeInsertedToDom(
              e,
              t,
              this.settings.numberOfSlideItemsInDom
            );
          return (
            s.forEach(function (e) {
              -1 === i.currentItemsInDom.indexOf(e) &&
                i.$inner.append('<div id="' + e + '" class="lg-item"></div>');
            }),
            this.currentItemsInDom.forEach(function (e) {
              -1 === s.indexOf(e) && Ae("#" + e).remove();
            }),
            s
          );
        }),
        (e.prototype.getPreviousSlideIndex = function () {
          var e = 0;
          try {
            var t = this.outer.find(".lg-current").first().attr("id");
            e = parseInt(t.split("-")[3]) || 0;
          } catch (t) {
            e = 0;
          }
          return e;
        }),
        (e.prototype.setDownloadValue = function (e) {
          if (this.settings.download) {
            var t = this.galleryItems[e];
            if (!1 === t.downloadUrl || "false" === t.downloadUrl)
              this.outer.addClass("lg-hide-download");
            else {
              var i = this.getElementById("lg-download");
              this.outer.removeClass("lg-hide-download"),
                i.attr("href", t.downloadUrl || t.src),
                t.download && i.attr("download", t.download);
            }
          }
        }),
        (e.prototype.makeSlideAnimation = function (e, t, i) {
          var s = this;
          this.lGalleryOn && i.addClass("lg-slide-progress"),
            setTimeout(
              function () {
                s.outer.addClass("lg-no-trans"),
                  s.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-next-slide"),
                  "prev" === e
                    ? (t.addClass("lg-prev-slide"), i.addClass("lg-next-slide"))
                    : (t.addClass("lg-next-slide"),
                      i.addClass("lg-prev-slide")),
                  setTimeout(function () {
                    s.outer.find(".lg-item").removeClass("lg-current"),
                      t.addClass("lg-current"),
                      s.outer.removeClass("lg-no-trans");
                  }, 50);
              },
              this.lGalleryOn ? this.settings.slideDelay : 0
            );
        }),
        (e.prototype.slide = function (e, t, i, s) {
          var n = this,
            r = this.getPreviousSlideIndex();
          if (
            ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
            !this.lGalleryOn || r !== e)
          ) {
            var o = this.galleryItems.length;
            if (!this.lgBusy) {
              this.settings.counter && this.updateCurrentCounter(e);
              var a = this.getSlideItem(e),
                l = this.getSlideItem(r),
                d = this.galleryItems[e],
                c = d.__slideVideoInfo;
              if (
                (this.outer.attr("data-lg-slide-type", this.getSlideType(d)),
                this.setDownloadValue(e),
                c)
              ) {
                var u = this.mediaContainerPosition,
                  p = u.top,
                  h = u.bottom,
                  g = De(
                    this.items[e],
                    this.outer,
                    p + h,
                    c && this.settings.videoMaxSize
                  );
                this.resizeVideoSlide(e, g);
              }
              if (
                (this.LGel.trigger(be, {
                  prevIndex: r,
                  index: e,
                  fromTouch: !!t,
                  fromThumb: !!i,
                }),
                (this.lgBusy = !0),
                clearTimeout(this.hideBarTimeout),
                this.arrowDisable(e),
                s || (e < r ? (s = "prev") : e > r && (s = "next")),
                t)
              ) {
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-prev-slide lg-current lg-next-slide");
                var m = void 0,
                  f = void 0;
                o > 2
                  ? ((m = e - 1),
                    (f = e + 1),
                    ((0 === e && r === o - 1) || (e === o - 1 && 0 === r)) &&
                      ((f = 0), (m = o - 1)))
                  : ((m = 0), (f = 1)),
                  "prev" === s
                    ? this.getSlideItem(f).addClass("lg-next-slide")
                    : this.getSlideItem(m).addClass("lg-prev-slide"),
                  a.addClass("lg-current");
              } else this.makeSlideAnimation(s, a, l);
              this.lGalleryOn
                ? setTimeout(function () {
                    n.loadContent(e, !0),
                      ".lg-item" !== n.settings.appendSubHtmlTo && n.addHtml(e);
                  }, this.settings.speed +
                    50 +
                    (t ? 0 : this.settings.slideDelay))
                : this.loadContent(e, !0),
                setTimeout(function () {
                  (n.lgBusy = !1),
                    l.removeClass("lg-slide-progress"),
                    n.LGel.trigger(Se, {
                      prevIndex: r,
                      index: e,
                      fromTouch: t,
                      fromThumb: i,
                    });
                }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                  (t ? 0 : this.settings.slideDelay));
            }
            this.index = e;
          }
        }),
        (e.prototype.updateCurrentCounter = function (e) {
          this.getElementById("lg-counter-current").html(e + 1 + "");
        }),
        (e.prototype.updateCounterTotal = function () {
          this.getElementById("lg-counter-all").html(
            this.galleryItems.length + ""
          );
        }),
        (e.prototype.getSlideType = function (e) {
          return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
        }),
        (e.prototype.touchMove = function (e, t, i) {
          var s = t.pageX - e.pageX,
            n = t.pageY - e.pageY,
            r = !1;
          if (
            (this.swipeDirection
              ? (r = !0)
              : Math.abs(s) > 15
              ? ((this.swipeDirection = "horizontal"), (r = !0))
              : Math.abs(n) > 15 &&
                ((this.swipeDirection = "vertical"), (r = !0)),
            r)
          ) {
            var o = this.getSlideItem(this.index);
            if ("horizontal" === this.swipeDirection) {
              null == i || i.preventDefault(),
                this.outer.addClass("lg-dragging"),
                this.setTranslate(o, s, 0);
              var a = o.get().offsetWidth,
                l = (15 * a) / 100 - Math.abs((10 * s) / 100);
              this.setTranslate(
                this.outer.find(".lg-prev-slide").first(),
                -a + s - l,
                0
              ),
                this.setTranslate(
                  this.outer.find(".lg-next-slide").first(),
                  a + s + l,
                  0
                );
            } else if (
              "vertical" === this.swipeDirection &&
              this.settings.swipeToClose
            ) {
              null == i || i.preventDefault(),
                this.$container.addClass("lg-dragging-vertical");
              var d = 1 - Math.abs(n) / window.innerHeight;
              this.$backdrop.css("opacity", d);
              var c = 1 - Math.abs(n) / (2 * window.innerWidth);
              this.setTranslate(o, 0, n, c, c),
                Math.abs(n) > 100 &&
                  this.outer
                    .addClass("lg-hide-items")
                    .removeClass("lg-components-open");
            }
          }
        }),
        (e.prototype.touchEnd = function (e, t, i) {
          var s,
            n = this;
          "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
            setTimeout(function () {
              n.$container.removeClass("lg-dragging-vertical"),
                n.outer
                  .removeClass("lg-dragging lg-hide-items")
                  .addClass("lg-components-open");
              var r = !0;
              if ("horizontal" === n.swipeDirection) {
                s = e.pageX - t.pageX;
                var o = Math.abs(e.pageX - t.pageX);
                s < 0 && o > n.settings.swipeThreshold
                  ? (n.goToNextSlide(!0), (r = !1))
                  : s > 0 &&
                    o > n.settings.swipeThreshold &&
                    (n.goToPrevSlide(!0), (r = !1));
              } else if ("vertical" === n.swipeDirection) {
                if (
                  ((s = Math.abs(e.pageY - t.pageY)),
                  n.settings.closable && n.settings.swipeToClose && s > 100)
                )
                  return void n.closeGallery();
                n.$backdrop.css("opacity", 1);
              }
              if (
                (n.outer.find(".lg-item").removeAttr("style"),
                r && Math.abs(e.pageX - t.pageX) < 5)
              ) {
                var a = Ae(i.target);
                n.isPosterElement(a) && n.LGel.trigger(Ce);
              }
              n.swipeDirection = void 0;
            }),
            setTimeout(function () {
              n.outer.hasClass("lg-dragging") ||
                "lg-slide" === n.settings.mode ||
                n.outer.removeClass("lg-slide");
            }, this.settings.speed + 100);
        }),
        (e.prototype.enableSwipe = function () {
          var e = this,
            t = {},
            i = {},
            s = !1,
            n = !1;
          this.settings.enableSwipe &&
            (this.$inner.on("touchstart.lg", function (i) {
              e.dragOrSwipeEnabled = !0;
              var s = e.getSlideItem(e.index);
              (!Ae(i.target).hasClass("lg-item") &&
                !s.get().contains(i.target)) ||
                e.outer.hasClass("lg-zoomed") ||
                e.lgBusy ||
                1 !== i.targetTouches.length ||
                ((n = !0),
                (e.touchAction = "swipe"),
                e.manageSwipeClass(),
                (t = {
                  pageX: i.targetTouches[0].pageX,
                  pageY: i.targetTouches[0].pageY,
                }));
            }),
            this.$inner.on("touchmove.lg", function (r) {
              n &&
                "swipe" === e.touchAction &&
                1 === r.targetTouches.length &&
                ((i = {
                  pageX: r.targetTouches[0].pageX,
                  pageY: r.targetTouches[0].pageY,
                }),
                e.touchMove(t, i, r),
                (s = !0));
            }),
            this.$inner.on("touchend.lg", function (r) {
              if ("swipe" === e.touchAction) {
                if (s) (s = !1), e.touchEnd(i, t, r);
                else if (n) {
                  var o = Ae(r.target);
                  e.isPosterElement(o) && e.LGel.trigger(Ce);
                }
                (e.touchAction = void 0), (n = !1);
              }
            }));
        }),
        (e.prototype.enableDrag = function () {
          var e = this,
            t = {},
            i = {},
            s = !1,
            n = !1;
          this.settings.enableDrag &&
            (this.outer.on("mousedown.lg", function (i) {
              e.dragOrSwipeEnabled = !0;
              var n = e.getSlideItem(e.index);
              (Ae(i.target).hasClass("lg-item") ||
                n.get().contains(i.target)) &&
                (e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  (i.preventDefault(),
                  e.lgBusy ||
                    (e.manageSwipeClass(),
                    (t = { pageX: i.pageX, pageY: i.pageY }),
                    (s = !0),
                    (e.outer.get().scrollLeft += 1),
                    (e.outer.get().scrollLeft -= 1),
                    e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                    e.LGel.trigger(Te))));
            }),
            Ae(window).on("mousemove.lg.global" + this.lgId, function (r) {
              s &&
                e.lgOpened &&
                ((n = !0),
                (i = { pageX: r.pageX, pageY: r.pageY }),
                e.touchMove(t, i),
                e.LGel.trigger(Ee));
            }),
            Ae(window).on("mouseup.lg.global" + this.lgId, function (r) {
              if (e.lgOpened) {
                var o = Ae(r.target);
                n
                  ? ((n = !1), e.touchEnd(i, t, r), e.LGel.trigger(xe))
                  : e.isPosterElement(o) && e.LGel.trigger(Ce),
                  s &&
                    ((s = !1),
                    e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
              }
            }));
        }),
        (e.prototype.triggerPosterClick = function () {
          var e = this;
          this.$inner.on("click.lg", function (t) {
            !e.dragOrSwipeEnabled &&
              e.isPosterElement(Ae(t.target)) &&
              e.LGel.trigger(Ce);
          });
        }),
        (e.prototype.manageSwipeClass = function () {
          var e = this.index + 1,
            t = this.index - 1;
          this.settings.loop &&
            this.galleryItems.length > 2 &&
            (0 === this.index
              ? (t = this.galleryItems.length - 1)
              : this.index === this.galleryItems.length - 1 && (e = 0)),
            this.outer
              .find(".lg-item")
              .removeClass("lg-next-slide lg-prev-slide"),
            t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
            this.getSlideItem(e).addClass("lg-next-slide");
        }),
        (e.prototype.goToNextSlide = function (e) {
          var t = this,
            i = this.settings.loop;
          e && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy ||
              (this.index + 1 < this.galleryItems.length
                ? (this.index++,
                  this.LGel.trigger(Ie, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : i
                ? ((this.index = 0),
                  this.LGel.trigger(Ie, { index: this.index }),
                  this.slide(this.index, !!e, !1, "next"))
                : this.settings.slideEndAnimation &&
                  !e &&
                  (this.outer.addClass("lg-right-end"),
                  setTimeout(function () {
                    t.outer.removeClass("lg-right-end");
                  }, 400)));
        }),
        (e.prototype.goToPrevSlide = function (e) {
          var t = this,
            i = this.settings.loop;
          e && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy ||
              (this.index > 0
                ? (this.index--,
                  this.LGel.trigger(Le, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : i
                ? ((this.index = this.galleryItems.length - 1),
                  this.LGel.trigger(Le, { index: this.index, fromTouch: e }),
                  this.slide(this.index, !!e, !1, "prev"))
                : this.settings.slideEndAnimation &&
                  !e &&
                  (this.outer.addClass("lg-left-end"),
                  setTimeout(function () {
                    t.outer.removeClass("lg-left-end");
                  }, 400)));
        }),
        (e.prototype.keyPress = function () {
          var e = this;
          Ae(window).on("keydown.lg.global" + this.lgId, function (t) {
            e.lgOpened &&
              !0 === e.settings.escKey &&
              27 === t.keyCode &&
              (t.preventDefault(),
              e.settings.allowMediaOverlap &&
              e.outer.hasClass("lg-can-toggle") &&
              e.outer.hasClass("lg-components-open")
                ? e.outer.removeClass("lg-components-open")
                : e.closeGallery()),
              e.lgOpened &&
                e.galleryItems.length > 1 &&
                (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
          });
        }),
        (e.prototype.arrow = function () {
          var e = this;
          this.getElementById("lg-prev").on("click.lg", function () {
            e.goToPrevSlide();
          }),
            this.getElementById("lg-next").on("click.lg", function () {
              e.goToNextSlide();
            });
        }),
        (e.prototype.arrowDisable = function (e) {
          if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var t = this.getElementById("lg-prev"),
              i = this.getElementById("lg-next");
            e + 1 === this.galleryItems.length
              ? i.attr("disabled", "disabled").addClass("disabled")
              : i.removeAttr("disabled").removeClass("disabled"),
              0 === e
                ? t.attr("disabled", "disabled").addClass("disabled")
                : t.removeAttr("disabled").removeClass("disabled");
          }
        }),
        (e.prototype.setTranslate = function (e, t, i, s, n) {
          void 0 === s && (s = 1),
            void 0 === n && (n = 1),
            e.css(
              "transform",
              "translate3d(" +
                t +
                "px, " +
                i +
                "px, 0px) scale3d(" +
                s +
                ", " +
                n +
                ", 1)"
            );
        }),
        (e.prototype.mousewheel = function () {
          var e = this,
            t = 0;
          this.outer.on("wheel.lg", function (i) {
            if (i.deltaY && !(e.galleryItems.length < 2)) {
              i.preventDefault();
              var s = new Date().getTime();
              s - t < 1e3 ||
                ((t = s),
                i.deltaY > 0
                  ? e.goToNextSlide()
                  : i.deltaY < 0 && e.goToPrevSlide());
            }
          });
        }),
        (e.prototype.isSlideElement = function (e) {
          return (
            e.hasClass("lg-outer") ||
            e.hasClass("lg-item") ||
            e.hasClass("lg-img-wrap")
          );
        }),
        (e.prototype.isPosterElement = function (e) {
          var t = this.getSlideItem(this.index)
            .find(".lg-video-play-button")
            .get();
          return (
            e.hasClass("lg-video-poster") ||
            e.hasClass("lg-video-play-button") ||
            (t && t.contains(e.get()))
          );
        }),
        (e.prototype.toggleMaximize = function () {
          var e = this;
          this.getElementById("lg-maximize").on("click.lg", function () {
            e.$container.toggleClass("lg-inline"), e.refreshOnResize();
          });
        }),
        (e.prototype.invalidateItems = function () {
          for (var e = 0; e < this.items.length; e++) {
            var t = Ae(this.items[e]);
            t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
          }
        }),
        (e.prototype.manageCloseGallery = function () {
          var e = this;
          if (this.settings.closable) {
            var t = !1;
            this.getElementById("lg-close").on("click.lg", function () {
              e.closeGallery();
            }),
              this.settings.closeOnTap &&
                (this.outer.on("mousedown.lg", function (i) {
                  var s = Ae(i.target);
                  t = !!e.isSlideElement(s);
                }),
                this.outer.on("mousemove.lg", function () {
                  t = !1;
                }),
                this.outer.on("mouseup.lg", function (i) {
                  var s = Ae(i.target);
                  e.isSlideElement(s) &&
                    t &&
                    (e.outer.hasClass("lg-dragging") || e.closeGallery());
                }));
          }
        }),
        (e.prototype.closeGallery = function (e) {
          var t = this;
          if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
          this.LGel.trigger(Me), Ae(window).scrollTop(this.prevScrollTop);
          var i,
            s = this.items[this.index];
          if (this.zoomFromOrigin && s) {
            var n = this.mediaContainerPosition,
              r = n.top,
              o = n.bottom,
              a = this.galleryItems[this.index],
              l = a.__slideVideoInfo,
              d = a.poster,
              c = De(
                s,
                this.outer,
                r + o,
                l && d && this.settings.videoMaxSize
              );
            i = Ge(s, this.outer, r, o, c);
          }
          this.zoomFromOrigin && i
            ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
              this.getSlideItem(this.index)
                .addClass("lg-start-end-progress")
                .css(
                  "transition-duration",
                  this.settings.startAnimationDuration + "ms"
                )
                .css("transform", i))
            : (this.outer.addClass("lg-hide-items"),
              this.outer.removeClass("lg-zoom-from-image")),
            this.destroyModules(),
            (this.lGalleryOn = !1),
            (this.isDummyImageRemoved = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            clearTimeout(this.hideBarTimeout),
            (this.hideBarTimeout = !1),
            Ae("html").removeClass("lg-on"),
            this.outer.removeClass("lg-visible lg-components-open"),
            this.$backdrop.removeClass("in").css("opacity", 0);
          var u =
            this.zoomFromOrigin && i
              ? Math.max(
                  this.settings.startAnimationDuration,
                  this.settings.backdropDuration
                )
              : this.settings.backdropDuration;
          return (
            this.$container.removeClass("lg-show-in"),
            setTimeout(function () {
              t.zoomFromOrigin &&
                i &&
                t.outer.removeClass("lg-zoom-from-image"),
                t.$container.removeClass("lg-show"),
                t.$backdrop
                  .removeAttr("style")
                  .css(
                    "transition-duration",
                    t.settings.backdropDuration + "ms"
                  ),
                t.outer.removeClass("lg-closing " + t.settings.startClass),
                t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                t.$inner.empty(),
                t.lgOpened && t.LGel.trigger(ke, { instance: t }),
                t.outer.get() && t.outer.get().blur(),
                (t.lgOpened = !1);
            }, u + 100),
            u + 100
          );
        }),
        (e.prototype.initModules = function () {
          this.plugins.forEach(function (e) {
            try {
              e.init();
            } catch (e) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly initiated"
              );
            }
          });
        }),
        (e.prototype.destroyModules = function (e) {
          this.plugins.forEach(function (t) {
            try {
              e ? t.destroy() : t.closeGallery && t.closeGallery();
            } catch (e) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly destroyed"
              );
            }
          });
        }),
        (e.prototype.refresh = function (e) {
          this.settings.dynamic || this.invalidateItems(),
            (this.galleryItems = e || this.getItems()),
            this.updateControls(),
            this.openGalleryOnItemClick(),
            this.LGel.trigger(me);
        }),
        (e.prototype.updateControls = function () {
          this.addSlideVideoInfo(this.galleryItems),
            this.updateCounterTotal(),
            this.manageSingleSlideClassName();
        }),
        (e.prototype.destroy = function () {
          var e = this,
            t = this.closeGallery(!0);
          return (
            setTimeout(function () {
              e.destroyModules(!0),
                e.settings.dynamic || e.invalidateItems(),
                Ae(window).off(".lg.global" + e.lgId),
                e.LGel.off(".lg"),
                e.$container.remove();
            }, t),
            t
          );
        }),
        e
      );
    })();
  const Ye = function (e, t) {
      return new Re(e, t);
    },
    Xe = document.querySelectorAll("[data-gallery]");
  if (Xe.length) {
    let t = [];
    Xe.forEach((e) => {
      t.push({
        gallery: e,
        galleryClass: Ye(e, {
          selector: "img",
          licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
          speed: 500,
        }),
      });
    }),
      (e.gallery = t);
  }
  let Ue = !1;
  const Ke = document.querySelectorAll("._animate"),
    Ze = () => {
      Ke.forEach((e) => {
        ((e, t = 0) =>
          e.getBoundingClientRect().top <=
          (window.innerHeight || document.documentElement.clientHeight) - t)(
          e,
          100
        )
          ? ((e) => {
              e.classList.add("_active");
            })(e)
          : ((e) => {
              e.classList.remove("_active");
            })(e);
      });
    };
  document.addEventListener("scroll", () => {
    ((e, t) => {
      Ue ||
        ((Ue = !0),
        setTimeout(() => {
          e(), (Ue = !1);
        }, t));
    })(Ze, 250);
  }),
    Ze();
  const Je = document.querySelector(".header");
  new IntersectionObserver(function (e, t) {
    e[0].isIntersecting
      ? Je.classList.remove("header_scrolled")
      : Je.classList.add("header_scrolled");
  }).observe(Je),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.documentElement.classList.add("loaded");
      }, 0);
    }),
    document.querySelector(".icon-menu") &&
      document.addEventListener("click", function (e) {
        t &&
          e.target.closest(".icon-menu") &&
          (((e = 500) => {
            document.documentElement.classList.contains("lock") ? i(e) : s(e);
          })(),
          document.documentElement.classList.toggle("menu-open"));
      }),
    (function (t) {
      e.popup && e.popup.open("some");
      const i = document.forms;
      if (i.length)
        for (const e of i)
          e.addEventListener("submit", function (e) {
            s(e.target, e);
          }),
            e.addEventListener("reset", function (e) {
              const t = e.target;
              o.formClean(t);
            });
      async function s(e, i) {
        if (0 === (t ? o.getErrors(e) : 0)) {
          if (e.hasAttribute("data-ajax")) {
            i.preventDefault();
            const t = e.getAttribute("action")
                ? e.getAttribute("action").trim()
                : "#",
              s = e.getAttribute("method")
                ? e.getAttribute("method").trim()
                : "GET",
              n = new FormData(e);
            e.classList.add("_sending");
            const r = await fetch(t, { method: s, body: n });
            if (r.ok) {
              await r.json();
              e.classList.remove("_sending"), a(e);
            } else alert("Ошибка"), e.classList.remove("_sending");
          } else e.hasAttribute("data-dev") && (i.preventDefault(), a(e));
        } else {
          i.preventDefault();
          const t = e.querySelector("._form-error");
          t && e.hasAttribute("data-goto-error") && r(t, !0, 1e3);
        }
      }
      function a(t) {
        document.dispatchEvent(
          new CustomEvent("formSent", { detail: { form: t } })
        ),
          setTimeout(() => {
            if (e.popup) {
              const i = t.dataset.popupMessage;
              i && e.popup.open(i);
            }
          }, 0),
          o.formClean(t),
          n(`[Формы]: ${"Форма отправлена!"}`);
      }
    })(!0);
})();
