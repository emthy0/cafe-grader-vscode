function i() {
}
function O(t) {
  return t();
}
function E() {
  return /* @__PURE__ */ Object.create(null);
}
function p(t) {
  t.forEach(O);
}
function S(t) {
  return typeof t == "function";
}
function M(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function P(t) {
  return Object.keys(t).length === 0;
}
function z(t, e, n) {
  t.insertBefore(e, n || null);
}
function C(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function B(t) {
  return document.createElement(t);
}
function F(t) {
  return Array.from(t.childNodes);
}
let h;
function d(t) {
  h = t;
}
function L() {
  if (!h)
    throw new Error("Function called outside component initialization");
  return h;
}
function q(t) {
  L().$$.on_mount.push(t);
}
const a = [], v = [];
let f = [];
const j = [], D = /* @__PURE__ */ Promise.resolve();
let $ = !1;
function G() {
  $ || ($ = !0, D.then(N));
}
function y(t) {
  f.push(t);
}
const m = /* @__PURE__ */ new Set();
let u = 0;
function N() {
  if (u !== 0)
    return;
  const t = h;
  do {
    try {
      for (; u < a.length; ) {
        const e = a[u];
        u++, d(e), H(e.$$);
      }
    } catch (e) {
      throw a.length = 0, u = 0, e;
    }
    for (d(null), a.length = 0, u = 0; v.length; )
      v.pop()();
    for (let e = 0; e < f.length; e += 1) {
      const n = f[e];
      m.has(n) || (m.add(n), n());
    }
    f.length = 0;
  } while (a.length);
  for (; j.length; )
    j.pop()();
  $ = !1, m.clear(), d(t);
}
function H(t) {
  if (t.fragment !== null) {
    t.update(), p(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(y);
  }
}
function I(t) {
  const e = [], n = [];
  f.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), f = e;
}
const J = /* @__PURE__ */ new Set();
function K(t, e) {
  t && t.i && (J.delete(t), t.i(e));
}
function Q(t, e, n, r) {
  const { fragment: c, after_update: g } = t.$$;
  c && c.m(e, n), r || y(() => {
    const l = t.$$.on_mount.map(O).filter(S);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : p(l), t.$$.on_mount = [];
  }), g.forEach(y);
}
function R(t, e) {
  const n = t.$$;
  n.fragment !== null && (I(n.after_update), p(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function T(t, e) {
  t.$$.dirty[0] === -1 && (a.push(t), G(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function U(t, e, n, r, c, g, l, A = [-1]) {
  const _ = h;
  d(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: g,
    update: i,
    not_equal: c,
    bound: E(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (_ ? _.$$.context : [])),
    // everything else
    callbacks: E(),
    dirty: A,
    skip_bound: !1,
    root: e.target || _.$$.root
  };
  l && l(o.root);
  let b = !1;
  if (o.ctx = n ? n(t, e.props || {}, (s, x, ...w) => {
    const k = w.length ? w[0] : x;
    return o.ctx && c(o.ctx[s], o.ctx[s] = k) && (!o.skip_bound && o.bound[s] && o.bound[s](k), b && T(t, s)), x;
  }) : [], o.update(), b = !0, p(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const s = F(e.target);
      o.fragment && o.fragment.l(s), s.forEach(C);
    } else
      o.fragment && o.fragment.c();
    e.intro && K(t.$$.fragment), Q(t, e.target, e.anchor, e.customElement), N();
  }
  d(_);
}
class V {
  $destroy() {
    R(this, 1), this.$destroy = i;
  }
  $on(e, n) {
    if (!S(n))
      return i;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !P(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function W(t) {
  let e;
  return {
    c() {
      e = B("h1"), e.textContent = "Sidebar Panel";
    },
    m(n, r) {
      z(n, e, r);
    },
    p: i,
    i,
    o: i,
    d(n) {
      n && C(e);
    }
  };
}
function X(t) {
  return q(() => {
    window.addEventListener("message", (e) => {
      switch (e.data.type) {
      }
    });
  }), [];
}
class Y extends V {
  constructor(e) {
    super(), U(this, e, X, W, M, {});
  }
}
const Z = new Y({
  target: document.body
});
export {
  Z as default
};
