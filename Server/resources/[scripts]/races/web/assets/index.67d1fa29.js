(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerpolicy && (o.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
function A() {}
const we = (t) => t;
function be(t) {
  return t();
}
function ie() {
  return Object.create(null);
}
function D(t) {
  t.forEach(be);
}
function Y(t) {
  return typeof t == "function";
}
function Pe(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
function Te(t) {
  return Object.keys(t).length === 0;
}
const Le = typeof window < "u";
let Se = Le ? () => window.performance.now() : () => Date.now(),
  Z = Le ? (t) => requestAnimationFrame(t) : A;
const M = new Set();
function xe(t) {
  M.forEach((e) => {
    e.c(t) || (M.delete(e), e.f());
  }),
    M.size !== 0 && Z(xe);
}
function Fe(t) {
  let e;
  return (
    M.size === 0 && Z(xe),
    {
      promise: new Promise((n) => {
        M.add((e = { c: t, f: n }));
      }),
      abort() {
        M.delete(e);
      },
    }
  );
}
function c(t, e) {
  t.appendChild(e);
}
function $e(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Ie(t) {
  const e = v("style");
  return Ke($e(t), e), e.sheet;
}
function Ke(t, e) {
  return c(t.head || t, e), e.sheet;
}
function P(t, e, n) {
  t.insertBefore(e, n || null);
}
function N(t) {
  t.parentNode.removeChild(t);
}
function De(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function v(t) {
  return document.createElement(t);
}
function C(t) {
  return document.createTextNode(t);
}
function O() {
  return C(" ");
}
function _(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function We(t) {
  return Array.from(t.childNodes);
}
function R(t, e) {
  (e = "" + e), t.wholeText !== e && (t.data = e);
}
function ze(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(t, n, r, e), s;
}
const B = new Map();
let H = 0;
function Ve(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function qe(t, e) {
  const n = { stylesheet: Ie(e), rules: {} };
  return B.set(t, n), n;
}
function se(t, e, n, r, s, o, i, l = 0) {
  const a = 16.666 / r;
  let u = `{
`;
  for (let w = 0; w <= 1; w += a) {
    const x = e + (n - e) * o(w);
    u +=
      w * 100 +
      `%{${i(x, 1 - x)}}
`;
  }
  const p =
      u +
      `100% {${i(n, 1 - n)}}
}`,
    f = `__svelte_${Ve(p)}_${l}`,
    d = $e(t),
    { stylesheet: g, rules: h } = B.get(d) || qe(d, t);
  h[f] ||
    ((h[f] = !0), g.insertRule(`@keyframes ${f} ${p}`, g.cssRules.length));
  const L = t.style.animation || "";
  return (
    (t.style.animation = `${
      L ? `${L}, ` : ""
    }${f} ${r}ms linear ${s}ms 1 both`),
    (H += 1),
    f
  );
}
function Be(t, e) {
  const n = (t.style.animation || "").split(", "),
    r = n.filter(
      e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf("__svelte") === -1
    ),
    s = n.length - r.length;
  s && ((t.style.animation = r.join(", ")), (H -= s), H || He());
}
function He() {
  Z(() => {
    H ||
      (B.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && N(e);
      }),
      B.clear());
  });
}
let I;
function F(t) {
  I = t;
}
function Ue() {
  if (!I) throw new Error("Function called outside component initialization");
  return I;
}
function Ge(t) {
  Ue().$$.on_destroy.push(t);
}
const S = [],
  oe = [],
  V = [],
  le = [],
  Je = Promise.resolve();
let Q = !1;
function Qe() {
  Q || ((Q = !0), Je.then(ke));
}
function K(t) {
  V.push(t);
}
const G = new Set();
let W = 0;
function ke() {
  const t = I;
  do {
    for (; W < S.length; ) {
      const e = S[W];
      W++, F(e), Xe(e.$$);
    }
    for (F(null), S.length = 0, W = 0; oe.length; ) oe.pop()();
    for (let e = 0; e < V.length; e += 1) {
      const n = V[e];
      G.has(n) || (G.add(n), n());
    }
    V.length = 0;
  } while (S.length);
  for (; le.length; ) le.pop()();
  (Q = !1), G.clear(), F(t);
}
function Xe(t) {
  if (t.fragment !== null) {
    t.update(), D(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(K);
  }
}
let T;
function Ye() {
  return (
    T ||
      ((T = Promise.resolve()),
      T.then(() => {
        T = null;
      })),
    T
  );
}
function J(t, e, n) {
  t.dispatchEvent(ze(`${e ? "intro" : "outro"}${n}`));
}
const Ze = new Set();
let fe;
function et(t, e) {
  t && t.i && (Ze.delete(t), t.i(e));
}
const tt = { duration: 0 };
function ue(t, e, n, r) {
  let s = e(t, n),
    o = r ? 0 : 1,
    i = null,
    l = null,
    a = null;
  function u() {
    a && Be(t, a);
  }
  function p(d, g) {
    const h = d.b - o;
    return (
      (g *= Math.abs(h)),
      {
        a: o,
        b: d.b,
        d: h,
        duration: g,
        start: d.start,
        end: d.start + g,
        group: d.group,
      }
    );
  }
  function f(d) {
    const {
        delay: g = 0,
        duration: h = 300,
        easing: L = we,
        tick: w = A,
        css: x,
      } = s || tt,
      $ = { start: Se() + g, b: d };
    d || (($.group = fe), (fe.r += 1)),
      i || l
        ? (l = $)
        : (x && (u(), (a = se(t, o, d, h, g, L, x))),
          d && w(0, 1),
          (i = p($, h)),
          K(() => J(t, d, "start")),
          Fe((k) => {
            if (
              (l &&
                k > l.start &&
                ((i = p(l, h)),
                (l = null),
                J(t, i.b, "start"),
                x && (u(), (a = se(t, o, i.b, i.duration, 0, L, s.css)))),
              i)
            ) {
              if (k >= i.end)
                w((o = i.b), 1 - o),
                  J(t, i.b, "end"),
                  l || (i.b ? u() : --i.group.r || D(i.group.c)),
                  (i = null);
              else if (k >= i.start) {
                const y = k - i.start;
                (o = i.a + i.d * L(y / i.duration)), w(o, 1 - o);
              }
            }
            return !!(i || l);
          }));
  }
  return {
    run(d) {
      Y(s)
        ? Ye().then(() => {
            (s = s()), f(d);
          })
        : f(d);
    },
    end() {
      u(), (i = l = null);
    },
  };
}
function nt(t, e, n, r) {
  const { fragment: s, after_update: o } = t.$$;
  s && s.m(e, n),
    r ||
      K(() => {
        const i = t.$$.on_mount.map(be).filter(Y);
        t.$$.on_destroy ? t.$$.on_destroy.push(...i) : D(i),
          (t.$$.on_mount = []);
      }),
    o.forEach(K);
}
function rt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (D(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function it(t, e) {
  t.$$.dirty[0] === -1 && (S.push(t), Qe(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function st(t, e, n, r, s, o, i, l = [-1]) {
  const a = I;
  F(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: A,
    not_equal: s,
    bound: ie(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: ie(),
    dirty: l,
    skip_bound: !1,
    root: e.target || a.$$.root,
  });
  i && i(u.root);
  let p = !1;
  if (
    ((u.ctx = n
      ? n(t, e.props || {}, (f, d, ...g) => {
          const h = g.length ? g[0] : d;
          return (
            u.ctx &&
              s(u.ctx[f], (u.ctx[f] = h)) &&
              (!u.skip_bound && u.bound[f] && u.bound[f](h), p && it(t, f)),
            d
          );
        })
      : []),
    u.update(),
    (p = !0),
    D(u.before_update),
    (u.fragment = r ? r(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const f = We(e.target);
      u.fragment && u.fragment.l(f), f.forEach(N);
    } else u.fragment && u.fragment.c();
    e.intro && et(t.$$.fragment),
      nt(t, e.target, e.anchor, e.customElement),
      ke();
  }
  F(a);
}
class ot {
  $destroy() {
    rt(this, 1), (this.$destroy = A);
  }
  $on(e, n) {
    if (!Y(n)) return A;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      r.push(n),
      () => {
        const s = r.indexOf(n);
        s !== -1 && r.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Te(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
function ae(t, { delay: e = 0, duration: n = 400, easing: r = we } = {}) {
  const s = +getComputedStyle(t).opacity;
  return { delay: e, duration: n, easing: r, css: (o) => `opacity: ${o * s}` };
}
var ee = { exports: {} },
  j = typeof Reflect == "object" ? Reflect : null,
  ce =
    j && typeof j.apply == "function"
      ? j.apply
      : function (e, n, r) {
          return Function.prototype.apply.call(e, n, r);
        },
  q;
j && typeof j.ownKeys == "function"
  ? (q = j.ownKeys)
  : Object.getOwnPropertySymbols
  ? (q = function (e) {
      return Object.getOwnPropertyNames(e).concat(
        Object.getOwnPropertySymbols(e)
      );
    })
  : (q = function (e) {
      return Object.getOwnPropertyNames(e);
    });
function lt(t) {
  console && console.warn && console.warn(t);
}
var Ee =
  Number.isNaN ||
  function (e) {
    return e !== e;
  };
function m() {
  m.init.call(this);
}
ee.exports = m;
ee.exports.once = ct;
m.EventEmitter = m;
m.prototype._events = void 0;
m.prototype._eventsCount = 0;
m.prototype._maxListeners = void 0;
var de = 10;
function U(t) {
  if (typeof t != "function")
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof t
    );
}
Object.defineProperty(m, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return de;
  },
  set: function (t) {
    if (typeof t != "number" || t < 0 || Ee(t))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          t +
          "."
      );
    de = t;
  },
});
m.init = function () {
  (this._events === void 0 ||
    this._events === Object.getPrototypeOf(this)._events) &&
    ((this._events = Object.create(null)), (this._eventsCount = 0)),
    (this._maxListeners = this._maxListeners || void 0);
};
m.prototype.setMaxListeners = function (e) {
  if (typeof e != "number" || e < 0 || Ee(e))
    throw new RangeError(
      'The value of "n" is out of range. It must be a non-negative number. Received ' +
        e +
        "."
    );
  return (this._maxListeners = e), this;
};
function Oe(t) {
  return t._maxListeners === void 0 ? m.defaultMaxListeners : t._maxListeners;
}
m.prototype.getMaxListeners = function () {
  return Oe(this);
};
m.prototype.emit = function (e) {
  for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
  var s = e === "error",
    o = this._events;
  if (o !== void 0) s = s && o.error === void 0;
  else if (!s) return !1;
  if (s) {
    var i;
    if ((n.length > 0 && (i = n[0]), i instanceof Error)) throw i;
    var l = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
    throw ((l.context = i), l);
  }
  var a = o[e];
  if (a === void 0) return !1;
  if (typeof a == "function") ce(a, this, n);
  else
    for (var u = a.length, p = je(a, u), r = 0; r < u; ++r) ce(p[r], this, n);
  return !0;
};
function Ce(t, e, n, r) {
  var s, o, i;
  if (
    (U(n),
    (o = t._events),
    o === void 0
      ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
      : (o.newListener !== void 0 &&
          (t.emit("newListener", e, n.listener ? n.listener : n),
          (o = t._events)),
        (i = o[e])),
    i === void 0)
  )
    (i = o[e] = n), ++t._eventsCount;
  else if (
    (typeof i == "function"
      ? (i = o[e] = r ? [n, i] : [i, n])
      : r
      ? i.unshift(n)
      : i.push(n),
    (s = Oe(t)),
    s > 0 && i.length > s && !i.warned)
  ) {
    i.warned = !0;
    var l = new Error(
      "Possible EventEmitter memory leak detected. " +
        i.length +
        " " +
        String(e) +
        " listeners added. Use emitter.setMaxListeners() to increase limit"
    );
    (l.name = "MaxListenersExceededWarning"),
      (l.emitter = t),
      (l.type = e),
      (l.count = i.length),
      lt(l);
  }
  return t;
}
m.prototype.addListener = function (e, n) {
  return Ce(this, e, n, !1);
};
m.prototype.on = m.prototype.addListener;
m.prototype.prependListener = function (e, n) {
  return Ce(this, e, n, !0);
};
function ft() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function Ne(t, e, n) {
  var r = { fired: !1, wrapFn: void 0, target: t, type: e, listener: n },
    s = ft.bind(r);
  return (s.listener = n), (r.wrapFn = s), s;
}
m.prototype.once = function (e, n) {
  return U(n), this.on(e, Ne(this, e, n)), this;
};
m.prototype.prependOnceListener = function (e, n) {
  return U(n), this.prependListener(e, Ne(this, e, n)), this;
};
m.prototype.removeListener = function (e, n) {
  var r, s, o, i, l;
  if ((U(n), (s = this._events), s === void 0)) return this;
  if (((r = s[e]), r === void 0)) return this;
  if (r === n || r.listener === n)
    --this._eventsCount === 0
      ? (this._events = Object.create(null))
      : (delete s[e],
        s.removeListener && this.emit("removeListener", e, r.listener || n));
  else if (typeof r != "function") {
    for (o = -1, i = r.length - 1; i >= 0; i--)
      if (r[i] === n || r[i].listener === n) {
        (l = r[i].listener), (o = i);
        break;
      }
    if (o < 0) return this;
    o === 0 ? r.shift() : ut(r, o),
      r.length === 1 && (s[e] = r[0]),
      s.removeListener !== void 0 && this.emit("removeListener", e, l || n);
  }
  return this;
};
m.prototype.off = m.prototype.removeListener;
m.prototype.removeAllListeners = function (e) {
  var n, r, s;
  if (((r = this._events), r === void 0)) return this;
  if (r.removeListener === void 0)
    return (
      arguments.length === 0
        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
        : r[e] !== void 0 &&
          (--this._eventsCount === 0
            ? (this._events = Object.create(null))
            : delete r[e]),
      this
    );
  if (arguments.length === 0) {
    var o = Object.keys(r),
      i;
    for (s = 0; s < o.length; ++s)
      (i = o[s]), i !== "removeListener" && this.removeAllListeners(i);
    return (
      this.removeAllListeners("removeListener"),
      (this._events = Object.create(null)),
      (this._eventsCount = 0),
      this
    );
  }
  if (((n = r[e]), typeof n == "function")) this.removeListener(e, n);
  else if (n !== void 0)
    for (s = n.length - 1; s >= 0; s--) this.removeListener(e, n[s]);
  return this;
};
function Re(t, e, n) {
  var r = t._events;
  if (r === void 0) return [];
  var s = r[e];
  return s === void 0
    ? []
    : typeof s == "function"
    ? n
      ? [s.listener || s]
      : [s]
    : n
    ? at(s)
    : je(s, s.length);
}
m.prototype.listeners = function (e) {
  return Re(this, e, !0);
};
m.prototype.rawListeners = function (e) {
  return Re(this, e, !1);
};
m.listenerCount = function (t, e) {
  return typeof t.listenerCount == "function"
    ? t.listenerCount(e)
    : Me.call(t, e);
};
m.prototype.listenerCount = Me;
function Me(t) {
  var e = this._events;
  if (e !== void 0) {
    var n = e[t];
    if (typeof n == "function") return 1;
    if (n !== void 0) return n.length;
  }
  return 0;
}
m.prototype.eventNames = function () {
  return this._eventsCount > 0 ? q(this._events) : [];
};
function je(t, e) {
  for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
  return n;
}
function ut(t, e) {
  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
  t.pop();
}
function at(t) {
  for (var e = new Array(t.length), n = 0; n < e.length; ++n)
    e[n] = t[n].listener || t[n];
  return e;
}
function ct(t, e) {
  return new Promise(function (n, r) {
    function s(i) {
      t.removeListener(e, o), r(i);
    }
    function o() {
      typeof t.removeListener == "function" && t.removeListener("error", s),
        n([].slice.call(arguments));
    }
    Ae(t, e, o, { once: !0 }), e !== "error" && dt(t, s, { once: !0 });
  });
}
function dt(t, e, n) {
  typeof t.on == "function" && Ae(t, "error", e, n);
}
function Ae(t, e, n, r) {
  if (typeof t.on == "function") r.once ? t.once(e, n) : t.on(e, n);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(o) {
      r.once && t.removeEventListener(e, s), n(o);
    });
  else
    throw new TypeError(
      'The "emitter" argument must be of type EventEmitter. Received type ' +
        typeof t
    );
}
const X = new ee.exports.EventEmitter();
window.addEventListener("message", (t) => X.emit(t.data.name, t.data.payload));
function z(t, e) {
  X.on(t, e), Ge(() => X.removeListener(t, e));
}
const pe = (t) => {
  let e = parseInt(t / 1e3),
    n = Math.floor(e / 86400);
  e = e - n * 86400;
  let r = Math.floor(e / 3600);
  e = e - r * 3600;
  let s = Math.floor(e / 60);
  e = e - s * 60;
  const [o, i, l, a] = [n, r, s, e].map((u) => u.toString().padStart(2, "0"));
  return n > 0
    ? `${o}:${i}`
    : r > 0
    ? `${i}:${l}`
    : s > 0
    ? `${l}:${a}`
    : e > 0
    ? `00:${a}`
    : "00:00";
};
function me(t, e, n) {
  const r = t.slice();
  return (r[9] = e[n]), (r[11] = n), r;
}
function he(t) {
  let e,
    n,
    r,
    s,
    o,
    i = pe(t[2]) + "",
    l,
    a,
    u,
    p,
    f,
    d,
    g,
    h,
    L,
    w,
    x,
    $,
    k,
    y = t[3] !== !1 && ge(t);
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (r = v("span")),
        (r.textContent = "Tempo"),
        (s = O()),
        (o = v("span")),
        (l = C(i)),
        (a = O()),
        y && y.c(),
        (u = O()),
        (p = v("div")),
        (f = v("span")),
        (f.textContent = "Checkpoints"),
        (d = O()),
        (g = v("div")),
        (h = v("span")),
        (L = C(t[4])),
        (w = C("/")),
        (x = O()),
        ($ = v("span")),
        (k = C(t[1])),
        _(
          r,
          "class",
          "py-[0.125rem] px-[0.5625rem] text-sm leading-[1.3125rem] tracking-wider bg-white/10 uppercase rounded"
        ),
        _(o, "class", "text-4xl leading-[3.375rem] font-medium tracking-wider"),
        _(n, "class", "flex flex-col items-start"),
        _(f, "class", "text-sm leading-[1.3125rem] tracking-wider uppercase"),
        _(
          h,
          "class",
          "text-[2.5rem] leading-[3.75rem] font-medium tracking-wider"
        ),
        _(
          $,
          "class",
          "text-[2.5rem] text-white/50 leading-[3.75rem] font-medium tracking-wider"
        ),
        _(g, "class", "flex flex-row items-center"),
        _(p, "class", "flex flex-col items-start"),
        _(
          e,
          "class",
          "w-[10.1875rem] h-[11.25rem] absolute top-10 left-10 flex flex-col gap-5"
        );
    },
    m(b, E) {
      P(b, e, E),
        c(e, n),
        c(n, r),
        c(n, s),
        c(n, o),
        c(o, l),
        c(e, a),
        y && y.m(e, null),
        c(e, u),
        c(e, p),
        c(p, f),
        c(p, d),
        c(p, g),
        c(g, h),
        c(h, L),
        c(h, w),
        c(g, x),
        c(g, $),
        c($, k);
    },
    p(b, E) {
      E & 4 && i !== (i = pe(b[2]) + "") && R(l, i),
        b[3] !== !1
          ? y
            ? y.p(b, E)
            : ((y = ge(b)), y.c(), y.m(e, u))
          : y && (y.d(1), (y = null)),
        E & 16 && R(L, b[4]),
        E & 2 && R(k, b[1]);
    },
    d(b) {
      b && N(e), y && y.d();
    },
  };
}
function ge(t) {
  let e,
    n,
    r,
    s,
    o = t[7](t[3]) + "",
    i;
  return {
    c() {
      (e = v("div")),
        (n = v("span")),
        (n.textContent = "Regressiva"),
        (r = O()),
        (s = v("span")),
        (i = C(o)),
        _(
          n,
          "class",
          "py-[0.125rem] px-[0.5625rem] text-sm leading-[1.3125rem] tracking-wider bg-white/10 uppercase rounded"
        ),
        _(s, "class", "text-4xl leading-[3.375rem] font-medium tracking-wider"),
        _(e, "class", "flex flex-col items-start");
    },
    m(l, a) {
      P(l, e, a), c(e, n), c(e, r), c(e, s), c(s, i);
    },
    p(l, a) {
      a & 8 && o !== (o = l[7](l[3]) + "") && R(i, o);
    },
    d(l) {
      l && N(e);
    },
  };
}
function ve(t) {
  let e,
    n,
    r,
    s,
    o,
    i = t[5],
    l = [];
  for (let u = 0; u < i.length; u += 1) l[u] = ye(me(t, i, u));
  let a = null;
  return (
    i.length || (a = _e()),
    {
      c() {
        (e = v("div")),
          (n = v("div")),
          (r = v("div")),
          (s = v("div")),
          (s.innerHTML = `<span class="w-[1.1875rem] text-base font-medium tracking-wider uppercase">N\xB0</span> 
            <span class="w-[11.3125rem] text-base font-medium tracking-wider uppercase">Nome</span> 
            <span class="w-[4.1875rem] text-base font-medium tracking-wider uppercase">Tempo</span> 
            <span class="w-[10rem] text-base font-medium tracking-wider uppercase">Nome do Ve\xEDculo</span>`),
          (o = O());
        for (let u = 0; u < l.length; u += 1) l[u].c();
        a && a.c(),
          _(
            s,
            "class",
            "w-[48rem] h-[3.1875rem] px-10 flex flex-row items-center justify-between bg-white/10"
          ),
          _(r, "class", "flex flex-col"),
          _(n, "class", "w-[48rem] h-[9.5rem] grid place-items-center gap-6"),
          _(
            e,
            "class",
            "w-full h-[35rem] absolute bottom-0 grid place-items-center bg-gradient-to-b from-transparent to-black"
          );
      },
      m(u, p) {
        P(u, e, p), c(e, n), c(n, r), c(r, s), c(r, o);
        for (let f = 0; f < l.length; f += 1) l[f].m(r, null);
        a && a.m(r, null);
      },
      p(u, p) {
        if (p & 32) {
          i = u[5];
          let f;
          for (f = 0; f < i.length; f += 1) {
            const d = me(u, i, f);
            l[f] ? l[f].p(d, p) : ((l[f] = ye(d)), l[f].c(), l[f].m(r, null));
          }
          for (; f < l.length; f += 1) l[f].d(1);
          (l.length = i.length),
            !i.length && a
              ? a.p(u, p)
              : i.length
              ? a && (a.d(1), (a = null))
              : ((a = _e()), a.c(), a.m(r, null));
        }
      },
      d(u) {
        u && N(e), De(l, u), a && a.d();
      },
    }
  );
}
function _e(t) {
  let e;
  return {
    c() {
      (e = v("span")),
        (e.textContent =
          "N\xE3o possui membros participantes do ranking no momento."),
        _(e, "class", "h-[4.75rem] grid place-items-center");
    },
    m(n, r) {
      P(n, e, r);
    },
    p: A,
    d(n) {
      n && N(e);
    },
  };
}
function ye(t) {
  var $, k, y;
  let e,
    n,
    r = t[11] + 1 + "",
    s,
    o,
    i,
    l = (($ = t[9]) == null ? void 0 : $.Name) + "",
    a,
    u,
    p,
    f = ((k = t[9]) == null ? void 0 : pe(k.Points)) + "",
    d,
    g,
    h,
    L = ((y = t[9]) == null ? void 0 : y.Vehicle) + "",
    w,
    x;
  return {
    c() {
      (e = v("div")),
        (n = v("span")),
        (s = C(r)),
        (o = O()),
        (i = v("span")),
        (a = C(l)),
        (u = O()),
        (p = v("span")),
        (d = C(f)),
        (g = O()),
        (h = v("span")),
        (w = C(L)),
        (x = O()),
        _(
          n,
          "class",
          "w-[1.1875rem] text-base font-medium tracking-wider uppercase"
        ),
        _(
          i,
          "class",
          "w-[11.3125rem] text-base font-medium tracking-wider truncate uppercase"
        ),
        _(
          p,
          "class",
          "w-[4.1875rem] text-base font-medium tracking-wider uppercase"
        ),
        _(
          h,
          "class",
          "w-[10rem] text-base font-medium tracking-wider truncate uppercase"
        ),
        _(
          e,
          "class",
          "w-[48rem] h-[3.1875rem] px-10 flex flex-row items-center justify-between"
        );
    },
    m(b, E) {
      P(b, e, E),
        c(e, n),
        c(n, s),
        c(e, o),
        c(e, i),
        c(i, a),
        c(e, u),
        c(e, p),
        c(p, d),
        c(e, g),
        c(e, h),
        c(h, w),
        c(e, x);
    },
    p(b, E) {
      var te, ne, re;
      E & 32 &&
        l !== (l = ((te = b[9]) == null ? void 0 : te.Runner) + "") &&
        R(a, l),
        E & 32 &&
          f !== (f = ((ne = b[9]) == null ? void 0 : pe(ne.Points)) + "") &&
          R(d, f),
        E & 32 &&
          L !== (L = ((re = b[9]) == null ? void 0 : re.Vehicle) + "") &&
          R(w, L);
    },
    d(b) {
      b && N(e);
    },
  };
}
function pt(t) {
  let e,
    n,
    r,
    s,
    o = t[0] && he(t),
    i = t[6] && ve(t);
  return {
    c() {
      (e = v("div")),
        o && o.c(),
        (n = O()),
        i && i.c(),
        _(
          e,
          "class",
          "fixed inset-0 grid place-items-center text-white font-poppins " +
            (location.port === "5173" && "bg-black/80") +
            " select-none"
        );
    },
    m(l, a) {
      P(l, e, a), o && o.m(e, null), c(e, n), i && i.m(e, null), (s = !0);
    },
    p(l, [a]) {
      l[0]
        ? o
          ? o.p(l, a)
          : ((o = he(l)), o.c(), o.m(e, n))
        : o && (o.d(1), (o = null)),
        l[6]
          ? i
            ? i.p(l, a)
            : ((i = ve(l)), i.c(), i.m(e, null))
          : i && (i.d(1), (i = null));
    },
    i(l) {
      s ||
        (K(() => {
          r || (r = ue(e, ae, {}, !0)), r.run(1);
        }),
        (s = !0));
    },
    o(l) {
      r || (r = ue(e, ae, {}, !1)), r.run(0), (s = !1);
    },
    d(l) {
      l && N(e), o && o.d(), i && i.d(), l && r && r.end();
    },
  };
}
function mt(t, e, n) {
  let r = location.port === "5173" || !1,
    s = 0,
    o = null,
    i = null,
    l = 1,
    a = [],
    u = !1;
  z("Display", (f) => {
    n(1, (s = f[1])), n(0, (r = f[0]));
  }),
    z("Progress", (f) => {
      n(2, (o = f[0])), n(3, (i = f[1]));
    }),
    z("Checkpoint", () => n(4, (l += 1))),
    z("Ranking", (f) => {
      n(5, (a = f[1])), n(6, (u = f[0]));
    });
  const p = (f) => {
    const d = Math.floor(f / 86400);
    f = f - d * 86400;
    const g = Math.floor(f / 3600);
    f = f - g * 3600;
    const h = Math.floor(f / 60);
    f = f - h * 60;
    const [L, w, x, $] = [d, g, h, f].map((k) => k.toString().padStart(2, "0"));
    return d > 0
      ? `${L}:${w}`
      : g > 0
      ? `${w}:${x}`
      : h > 0
      ? `${x}:${$}`
      : f > 0
      ? `00:${$}`
      : "00:00";
  };
  return (
    (t.$$.update = () => {
      t.$$.dirty & 1 && r === !1 && n(4, (l = 1));
    }),
    [r, s, o, i, l, a, u, p]
  );
}
class ht extends ot {
  constructor(e) {
    super(), st(this, e, mt, pt, Pe, {});
  }
}
new ht({ target: document.getElementById("app") });
