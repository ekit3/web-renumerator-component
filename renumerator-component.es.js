var hi = Object.defineProperty;
var mi = (n, e, t) => e in n ? hi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var pt = (n, e, t) => (mi(n, typeof e != "symbol" ? e + "" : e, t), t);
function nt() {
}
function j(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Is(n) {
  return n();
}
function Fn() {
  return /* @__PURE__ */ Object.create(null);
}
function ze(n) {
  n.forEach(Is);
}
function Te(n) {
  return typeof n == "function";
}
function Ce(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function pi(n) {
  return Object.keys(n).length === 0;
}
function gi(n, ...e) {
  if (n == null) {
    for (const s of e)
      s(void 0);
    return nt;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function $t(n, e, t) {
  n.$$.on_destroy.push(gi(e, t));
}
function Le(n, e, t, s) {
  if (n) {
    const i = bs(n, e, t, s);
    return n[0](i);
  }
}
function bs(n, e, t, s) {
  return n[1] && s ? j(t.ctx.slice(), n[1](s(e))) : t.ctx;
}
function Me(n, e, t, s) {
  if (n[2] && s) {
    const i = n[2](s(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const a = [], l = Math.max(e.dirty.length, i.length);
      for (let r = 0; r < l; r += 1)
        a[r] = e.dirty[r] | i[r];
      return a;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function Oe(n, e, t, s, i, a) {
  if (i) {
    const l = bs(e, t, s, a);
    n.p(l, i);
  }
}
function Re(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let s = 0; s < t; s++)
      e[s] = -1;
    return e;
  }
  return -1;
}
function Ke(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function re(n, e) {
  const t = {};
  e = new Set(e);
  for (const s in n)
    !e.has(s) && s[0] !== "$" && (t[s] = n[s]);
  return t;
}
function _i(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function cn(n, e, t) {
  return n.set(t), e;
}
function ce(n) {
  return n && Te(n.destroy) ? n.destroy : nt;
}
const Ii = ["", !0, 1, "true", "contenteditable"], bi = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function H(n, e) {
  n.appendChild(e);
}
function Mn(n, e, t) {
  const s = Ei(n);
  if (!s.getElementById(e)) {
    const i = J("style");
    i.id = e, i.textContent = t, vi(s, i);
  }
}
function Ei(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function vi(n, e) {
  return H(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function Y(n, e, t) {
  n.insertBefore(e, t || null);
}
function Q(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Ai(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function J(n) {
  return document.createElement(n);
}
function Qt(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function at(n) {
  return document.createTextNode(n);
}
function Se() {
  return at(" ");
}
function ct() {
  return at("");
}
function $e(n, e, t, s) {
  return n.addEventListener(e, t, s), () => n.removeEventListener(e, t, s);
}
function W(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Si = ["width", "height"];
function fe(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const s in e)
    e[s] == null ? n.removeAttribute(s) : s === "style" ? n.style.cssText = e[s] : s === "__value" ? n.value = n[s] = e[s] : t[s] && t[s].set && Si.indexOf(s) === -1 ? n[s] = e[s] : W(n, s, e[s]);
}
function dn(n, e) {
  for (const t in e)
    W(n, t, e[t]);
}
function yi(n, e) {
  Object.keys(e).forEach((t) => {
    Ci(n, t, e[t]);
  });
}
function Ci(n, e, t) {
  const s = e.toLowerCase();
  s in n ? n[s] = typeof n[s] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : W(n, e, t);
}
function fn(n) {
  return /-/.test(n) ? yi : fe;
}
function Ti(n) {
  return Array.from(n.childNodes);
}
function Bt(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Li(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = /** @type {string} */
  e);
}
function Mi(n, e, t) {
  ~Ii.indexOf(t) ? Li(n, e) : Bt(n, e);
}
function Oi(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
function Et(n, e) {
  return new n(e);
}
let en;
function Yt(n) {
  en = n;
}
function ke() {
  if (!en)
    throw new Error("Function called outside component initialization");
  return en;
}
function vt(n) {
  ke().$$.on_mount.push(n);
}
function Ht(n) {
  ke().$$.on_destroy.push(n);
}
function Ge(n, e) {
  return ke().$$.context.set(n, e), e;
}
function Pe(n) {
  return ke().$$.context.get(n);
}
function Nn(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((s) => s.call(this, e));
}
const zt = [], le = [];
let Xt = [];
const vn = [], Ri = /* @__PURE__ */ Promise.resolve();
let An = !1;
function Di() {
  An || (An = !0, Ri.then(I));
}
function Sn(n) {
  Xt.push(n);
}
function Ot(n) {
  vn.push(n);
}
const gn = /* @__PURE__ */ new Set();
let wt = 0;
function I() {
  if (wt !== 0)
    return;
  const n = en;
  do {
    try {
      for (; wt < zt.length; ) {
        const e = zt[wt];
        wt++, Yt(e), ki(e.$$);
      }
    } catch (e) {
      throw zt.length = 0, wt = 0, e;
    }
    for (Yt(null), zt.length = 0, wt = 0; le.length; )
      le.pop()();
    for (let e = 0; e < Xt.length; e += 1) {
      const t = Xt[e];
      gn.has(t) || (gn.add(t), t());
    }
    Xt.length = 0;
  } while (zt.length);
  for (; vn.length; )
    vn.pop()();
  An = !1, gn.clear(), Yt(n);
}
function ki(n) {
  if (n.fragment !== null) {
    n.update(), ze(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Sn);
  }
}
function ji(n) {
  const e = [], t = [];
  Xt.forEach((s) => n.indexOf(s) === -1 ? e.push(s) : t.push(s)), t.forEach((s) => s()), Xt = e;
}
const ln = /* @__PURE__ */ new Set();
let Pt;
function et() {
  Pt = {
    r: 0,
    c: [],
    p: Pt
    // parent group
  };
}
function tt() {
  Pt.r || ze(Pt.c), Pt = Pt.p;
}
function R(n, e) {
  n && n.i && (ln.delete(n), n.i(e));
}
function N(n, e, t, s) {
  if (n && n.o) {
    if (ln.has(n))
      return;
    ln.add(n), Pt.c.push(() => {
      ln.delete(n), s && (t && n.d(1), s());
    }), n.o(e);
  } else
    s && s();
}
function Pn(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function ee(n, e) {
  const t = {}, s = {}, i = { $$scope: 1 };
  let a = n.length;
  for (; a--; ) {
    const l = n[a], r = e[a];
    if (r) {
      for (const o in l)
        o in r || (s[o] = 1);
      for (const o in r)
        i[o] || (t[o] = r[o], i[o] = 1);
      n[a] = r;
    } else
      for (const o in l)
        i[o] = 1;
  }
  for (const l in s)
    l in t || (t[l] = void 0);
  return t;
}
function ie(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Rt(n, e, t) {
  const s = n.$$.props[e];
  s !== void 0 && (n.$$.bound[s] = t, t(n.$$.ctx[s]));
}
function ye(n) {
  n && n.c();
}
function Ie(n, e, t) {
  const { fragment: s, after_update: i } = n.$$;
  s && s.m(e, t), Sn(() => {
    const a = n.$$.on_mount.map(Is).filter(Te);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : ze(a), n.$$.on_mount = [];
  }), i.forEach(Sn);
}
function be(n, e) {
  const t = n.$$;
  t.fragment !== null && (ji(t.after_update), ze(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Fi(n, e) {
  n.$$.dirty[0] === -1 && (zt.push(n), Di(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function je(n, e, t, s, i, a, l = null, r = [-1]) {
  const o = en;
  Yt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: nt,
    not_equal: i,
    bound: Fn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Fn(),
    dirty: r,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  l && l(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (d, f, ...m) => {
    const h = m.length ? m[0] : f;
    return u.ctx && i(u.ctx[d], u.ctx[d] = h) && (!u.skip_bound && u.bound[d] && u.bound[d](h), c && Fi(n, d)), f;
  }) : [], u.update(), c = !0, ze(u.before_update), u.fragment = s ? s(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Ti(e.target);
      u.fragment && u.fragment.l(d), d.forEach(Q);
    } else
      u.fragment && u.fragment.c();
    e.intro && R(n.$$.fragment), Ie(n, e.target, e.anchor), I();
  }
  Yt(o);
}
let Es;
typeof HTMLElement == "function" && (Es = class extends HTMLElement {
  constructor(e, t, s) {
    super();
    /** The Svelte component constructor */
    pt(this, "$$ctor");
    /** Slots */
    pt(this, "$$s");
    /** The Svelte component instance */
    pt(this, "$$c");
    /** Whether or not the custom element is connected */
    pt(this, "$$cn", !1);
    /** Component props data */
    pt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    pt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    pt(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    pt(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    pt(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, s) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const i = this.$$c.$on(e, t);
      this.$$l_u.set(t, i);
    }
    super.addEventListener(e, t, s);
  }
  removeEventListener(e, t, s) {
    if (super.removeEventListener(e, t, s), this.$$c) {
      const i = this.$$l_u.get(t);
      i && (i(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(l) {
        return () => {
          let r;
          return {
            c: function() {
              r = J("slot"), l !== "default" && W(r, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, d) {
              Y(c, r, d);
            },
            d: function(c) {
              c && Q(r);
            }
          };
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const s = {}, i = Oi(this);
      for (const l of this.$$s)
        l in i && (s[l] = [t(l)]);
      for (const l of this.attributes) {
        const r = this.$$g_p(l.name);
        r in this.$$d || (this.$$d[r] = on(r, l.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: s,
          $$scope: {
            ctx: []
          }
        }
      });
      const a = () => {
        this.$$r = !0;
        for (const l in this.$$p_d)
          if (this.$$d[l] = this.$$c.$$.ctx[this.$$c.$$.props[l]], this.$$p_d[l].reflect) {
            const r = on(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            r == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, r);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(a), a();
      for (const l in this.$$l)
        for (const r of this.$$l[l]) {
          const o = this.$$c.$on(l, r);
          this.$$l_u.set(r, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, s) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = on(e, s, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function on(n, e, t, s) {
  var a;
  const i = (a = t[n]) == null ? void 0 : a.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !s || !t[n])
    return e;
  if (s === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Fe(n, e, t, s, i, a) {
  let l = class extends Es {
    constructor() {
      super(n, t, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (r) => (e[r].attribute || r).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((r) => {
    Object.defineProperty(l.prototype, r, {
      get() {
        return this.$$c && r in this.$$c ? this.$$c[r] : this.$$d[r];
      },
      set(o) {
        var u;
        o = on(r, o, e), this.$$d[r] = o, (u = this.$$c) == null || u.$set({ [r]: o });
      }
    });
  }), s.forEach((r) => {
    Object.defineProperty(l.prototype, r, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[r];
      }
    });
  }), a && (l = a(l)), n.element = /** @type {any} */
  l, l;
}
class Ne {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    pt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    pt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    be(this, 1), this.$destroy = nt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Te(t))
      return nt;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return s.push(t), () => {
      const i = s.indexOf(t);
      i !== -1 && s.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !pi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ni = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ni);
class vs {
  constructor(e) {
    pt(this, "config");
    this.config = e;
  }
  getRate(e) {
    return this.config.jobs.find((t) => t.name === e);
  }
  getRateList() {
    return this.config.jobs.sort((e, t) => e.name > t.name ? 1 : e.name < t.name ? -1 : 0);
  }
  getMinExperienceValue() {
    return this.config.min_experience;
  }
  getMinTJMValue() {
    return this.config.tjm_base;
  }
  getSalary(e, t, s) {
    const i = this.getRate(t);
    if (i) {
      const a = Math.min(i.tjmGrid.length, e) - this.config.min_experience, l = i.tjmGrid[a], r = s || l.tjm, o = this.config.fixed_salary * 12 + (r - this.config.tjm_base) / 2 * (251 - 35 - this.config.group_days) * (1 + 0.1 / (52 * 5 / 12) * 25);
      return Math.round(o);
    }
    return this.config.min_salary;
  }
  updateTJM(e, t) {
    const s = this.getRate(t);
    if (s) {
      const i = Math.min(s.tjmGrid.length, e) - this.config.min_experience;
      return s.tjmGrid[i].tjm;
    }
    return this.config.tjm_base;
  }
  getJoinUsLink() {
    return this.config.join_link;
  }
  getAvantagesLink() {
    return this.config.avantages_link;
  }
}
const Pi = 2900, Ui = 2, Bi = 0, Hi = 20, xi = 380, wi = "https://ekite.info/#NousContacter", Vi = "https://ekite.info/simulateur/#avantages", Gi = [
  {
    name: "Product Owner",
    tjmGrid: [
      {
        xp: 2,
        tjm: 470
      },
      {
        xp: 3,
        tjm: 490
      },
      {
        xp: 4,
        tjm: 510
      },
      {
        xp: 5,
        tjm: 530
      },
      {
        xp: 6,
        tjm: 550
      },
      {
        xp: 7,
        tjm: 570
      },
      {
        xp: 8,
        tjm: 590
      },
      {
        xp: 9,
        tjm: 610
      },
      {
        xp: 10,
        tjm: 630
      }
    ]
  },
  {
    name: "Coach agile",
    tjmGrid: [
      {
        xp: 2,
        tjm: 520
      },
      {
        xp: 3,
        tjm: 540
      },
      {
        xp: 4,
        tjm: 560
      },
      {
        xp: 5,
        tjm: 580
      },
      {
        xp: 6,
        tjm: 600
      },
      {
        xp: 7,
        tjm: 620
      },
      {
        xp: 8,
        tjm: 640
      },
      {
        xp: 9,
        tjm: 660
      },
      {
        xp: 10,
        tjm: 680
      }
    ]
  },
  {
    name: "Architecte Solution",
    tjmGrid: [
      {
        xp: 2,
        tjm: 520
      },
      {
        xp: 3,
        tjm: 540
      },
      {
        xp: 4,
        tjm: 560
      },
      {
        xp: 5,
        tjm: 580
      },
      {
        xp: 6,
        tjm: 600
      },
      {
        xp: 7,
        tjm: 620
      },
      {
        xp: 8,
        tjm: 640
      },
      {
        xp: 9,
        tjm: 660
      },
      {
        xp: 10,
        tjm: 680
      }
    ]
  },
  {
    name: "Ingénieur devops",
    tjmGrid: [
      {
        xp: 2,
        tjm: 440
      },
      {
        xp: 3,
        tjm: 460
      },
      {
        xp: 4,
        tjm: 480
      },
      {
        xp: 5,
        tjm: 500
      },
      {
        xp: 6,
        tjm: 520
      },
      {
        xp: 7,
        tjm: 540
      },
      {
        xp: 8,
        tjm: 560
      },
      {
        xp: 9,
        tjm: 580
      },
      {
        xp: 10,
        tjm: 600
      }
    ]
  },
  {
    name: "UX Designer",
    tjmGrid: [
      {
        xp: 2,
        tjm: 440
      },
      {
        xp: 3,
        tjm: 460
      },
      {
        xp: 4,
        tjm: 480
      },
      {
        xp: 5,
        tjm: 500
      },
      {
        xp: 6,
        tjm: 520
      },
      {
        xp: 7,
        tjm: 540
      },
      {
        xp: 8,
        tjm: 560
      },
      {
        xp: 9,
        tjm: 580
      },
      {
        xp: 10,
        tjm: 600
      }
    ]
  },
  {
    name: "UI Designer",
    tjmGrid: [
      {
        xp: 2,
        tjm: 380
      },
      {
        xp: 3,
        tjm: 400
      },
      {
        xp: 4,
        tjm: 420
      },
      {
        xp: 5,
        tjm: 440
      },
      {
        xp: 6,
        tjm: 460
      },
      {
        xp: 7,
        tjm: 480
      },
      {
        xp: 8,
        tjm: 500
      },
      {
        xp: 9,
        tjm: 520
      },
      {
        xp: 10,
        tjm: 540
      }
    ]
  },
  {
    name: "Facilitateur/Coordinateur de projet",
    tjmGrid: [
      {
        xp: 2,
        tjm: 480
      },
      {
        xp: 3,
        tjm: 500
      },
      {
        xp: 4,
        tjm: 520
      },
      {
        xp: 5,
        tjm: 540
      },
      {
        xp: 6,
        tjm: 560
      },
      {
        xp: 7,
        tjm: 580
      },
      {
        xp: 8,
        tjm: 600
      },
      {
        xp: 9,
        tjm: 620
      },
      {
        xp: 10,
        tjm: 640
      }
    ]
  },
  {
    name: "Développeur Back",
    tjmGrid: [
      {
        xp: 2,
        tjm: 420
      },
      {
        xp: 3,
        tjm: 440
      },
      {
        xp: 4,
        tjm: 460
      },
      {
        xp: 5,
        tjm: 480
      },
      {
        xp: 6,
        tjm: 500
      },
      {
        xp: 7,
        tjm: 520
      },
      {
        xp: 8,
        tjm: 540
      },
      {
        xp: 9,
        tjm: 560
      },
      {
        xp: 10,
        tjm: 580
      }
    ]
  },
  {
    name: "Développeur Front",
    tjmGrid: [
      {
        xp: 2,
        tjm: 420
      },
      {
        xp: 3,
        tjm: 440
      },
      {
        xp: 4,
        tjm: 460
      },
      {
        xp: 5,
        tjm: 480
      },
      {
        xp: 6,
        tjm: 500
      },
      {
        xp: 7,
        tjm: 520
      },
      {
        xp: 8,
        tjm: 540
      },
      {
        xp: 9,
        tjm: 560
      },
      {
        xp: 10,
        tjm: 580
      }
    ]
  },
  {
    name: "Développeur FullStack",
    tjmGrid: [
      {
        xp: 2,
        tjm: 420
      },
      {
        xp: 3,
        tjm: 440
      },
      {
        xp: 4,
        tjm: 460
      },
      {
        xp: 5,
        tjm: 480
      },
      {
        xp: 6,
        tjm: 500
      },
      {
        xp: 7,
        tjm: 520
      },
      {
        xp: 8,
        tjm: 540
      },
      {
        xp: 9,
        tjm: 560
      },
      {
        xp: 10,
        tjm: 580
      }
    ]
  },
  {
    name: "Tech Lead",
    tjmGrid: [
      {
        xp: 2,
        tjm: 480
      },
      {
        xp: 3,
        tjm: 500
      },
      {
        xp: 4,
        tjm: 520
      },
      {
        xp: 5,
        tjm: 540
      },
      {
        xp: 6,
        tjm: 560
      },
      {
        xp: 7,
        tjm: 580
      },
      {
        xp: 8,
        tjm: 600
      },
      {
        xp: 9,
        tjm: 620
      },
      {
        xp: 10,
        tjm: 640
      }
    ]
  }
], qi = {
  fixed_salary: Pi,
  min_experience: Ui,
  min_salary: Bi,
  group_days: Hi,
  tjm_base: xi,
  join_link: wi,
  avantages_link: Vi,
  jobs: Gi
};
class Un extends vs {
  constructor() {
    super(qi);
  }
}
const zi = 3400, Wi = 2, Xi = 0, Ki = 15, Ji = 450, Zi = "#", Qi = [], Yi = {
  fixed_salary: zi,
  min_experience: Wi,
  min_salary: Xi,
  group_days: Ki,
  tjm_base: Ji,
  join_link: Zi,
  jobs: Qi
};
class $i extends vs {
  constructor() {
    super(Yi);
  }
}
var yn = /* @__PURE__ */ ((n) => (n.EKITE = "EKITE", n.STORM = "STORM", n))(yn || {});
class er {
  static create(e) {
    switch (e) {
      case yn.EKITE:
        return new Un();
      case yn.STORM:
        return new $i();
      default:
        return console.warn(
          "No company props props defined in component initialisation : default EKITE"
        ), new Un();
    }
  }
}
var Cn = function(n, e) {
  return Cn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
    t.__proto__ = s;
  } || function(t, s) {
    for (var i in s)
      Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
  }, Cn(n, e);
};
function Ct(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Cn(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var xe = function() {
  return xe = Object.assign || function(e) {
    for (var t, s = 1, i = arguments.length; s < i; s++) {
      t = arguments[s];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, xe.apply(this, arguments);
};
function Zt(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], s = 0;
  if (t)
    return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && s >= n.length && (n = void 0), { value: n && n[s++], done: !n };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bn(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var s = t.call(n), i, a = [], l;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = s.next()).done; )
      a.push(i.value);
  } catch (r) {
    l = { error: r };
  } finally {
    try {
      i && !i.done && (t = s.return) && t.call(s);
    } finally {
      if (l)
        throw l.error;
    }
  }
  return a;
}
function tr(n, e, t) {
  if (t || arguments.length === 2)
    for (var s = 0, i = e.length, a; s < i; s++)
      (a || !(s in e)) && (a || (a = Array.prototype.slice.call(e, 0, s)), a[s] = e[s]);
  return n.concat(a || Array.prototype.slice.call(e));
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Tt = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(n, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.init = function() {
    }, n.prototype.destroy = function() {
    }, n;
  }()
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function nr(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (As(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function As(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function sr(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var s = t.scrollWidth;
  return document.documentElement.removeChild(t), s;
}
const On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: nr,
  estimateScrollWidth: sr,
  matches: As
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ir = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var rr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, xe(xe({}, e.defaultAdapter), t)) || this;
      return s.shakeAnimationEndHandler = function() {
        s.handleShakeAnimationEnd();
      }, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ir;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(t) {
      var s = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(s) : this.adapter.removeClass(s);
    }, e.prototype.float = function(t) {
      var s = e.cssClasses, i = s.LABEL_FLOAT_ABOVE, a = s.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(t) {
      var s = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(s) : this.adapter.removeClass(s);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(Tt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var jt = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ar = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, xe(xe({}, e.defaultAdapter), t)) || this;
      return s.transitionEndHandler = function(i) {
        s.handleTransitionEnd(i);
      }, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return jt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(jt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(jt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(jt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var s = this.adapter.hasClass(jt.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && s && (this.adapter.removeClass(jt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(jt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Tt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var lr = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, or = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, Jt = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
}, He;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(He || (He = {}));
var Ut;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(Ut || (Ut = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Lt, At, oe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Lt = {}, Lt["" + oe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Lt["" + oe.LIST_ITEM_CLASS] = "mdc-list-item", Lt["" + oe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Lt["" + oe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Lt["" + oe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Lt["" + oe.ROOT] = "mdc-list";
var Vt = (At = {}, At["" + oe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", At["" + oe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", At["" + oe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", At["" + oe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", At["" + oe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", At["" + oe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", At["" + oe.ROOT] = "mdc-deprecated-list", At), Mt = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + oe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + oe.LIST_ITEM_CLASS + ` a,
    .` + Vt[oe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Vt[oe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + oe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + oe.LIST_ITEM_CLASS + ` a,
    .` + oe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + oe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Vt[oe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Vt[oe.LIST_ITEM_CLASS] + ` a,
    .` + Vt[oe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Vt[oe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Be = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var te = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, lt = /* @__PURE__ */ new Set();
lt.add(te.BACKSPACE);
lt.add(te.ENTER);
lt.add(te.SPACEBAR);
lt.add(te.PAGE_UP);
lt.add(te.PAGE_DOWN);
lt.add(te.END);
lt.add(te.HOME);
lt.add(te.ARROW_LEFT);
lt.add(te.ARROW_UP);
lt.add(te.ARROW_RIGHT);
lt.add(te.ARROW_DOWN);
lt.add(te.DELETE);
lt.add(te.ESCAPE);
lt.add(te.TAB);
var dt = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, ot = /* @__PURE__ */ new Map();
ot.set(dt.BACKSPACE, te.BACKSPACE);
ot.set(dt.ENTER, te.ENTER);
ot.set(dt.SPACEBAR, te.SPACEBAR);
ot.set(dt.PAGE_UP, te.PAGE_UP);
ot.set(dt.PAGE_DOWN, te.PAGE_DOWN);
ot.set(dt.END, te.END);
ot.set(dt.HOME, te.HOME);
ot.set(dt.ARROW_LEFT, te.ARROW_LEFT);
ot.set(dt.ARROW_UP, te.ARROW_UP);
ot.set(dt.ARROW_RIGHT, te.ARROW_RIGHT);
ot.set(dt.ARROW_DOWN, te.ARROW_DOWN);
ot.set(dt.DELETE, te.DELETE);
ot.set(dt.ESCAPE, te.ESCAPE);
ot.set(dt.TAB, te.TAB);
var Dt = /* @__PURE__ */ new Set();
Dt.add(te.PAGE_UP);
Dt.add(te.PAGE_DOWN);
Dt.add(te.END);
Dt.add(te.HOME);
Dt.add(te.ARROW_LEFT);
Dt.add(te.ARROW_UP);
Dt.add(te.ARROW_RIGHT);
Dt.add(te.ARROW_DOWN);
function Ve(n) {
  var e = n.key;
  if (lt.has(e))
    return e;
  var t = ot.get(n.keyCode);
  return t || te.UNKNOWN;
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ur = ["input", "button", "textarea", "select"], bt = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    ur.indexOf(t) === -1 && n.preventDefault();
  }
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function cr() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function dr(n, e) {
  for (var t = /* @__PURE__ */ new Map(), s = 0; s < n; s++) {
    var i = e(s).trim();
    if (i) {
      var a = i[0].toLowerCase();
      t.has(a) || t.set(a, []), t.get(a).push({ text: i.toLowerCase(), index: s });
    }
  }
  return t.forEach(function(l) {
    l.sort(function(r, o) {
      return r.index - o.index;
    });
  }), t;
}
function Tn(n, e) {
  var t = n.nextChar, s = n.focusItemAtIndex, i = n.sortedIndexByFirstChar, a = n.focusedItemIndex, l = n.skipFocus, r = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    ys(e);
  }, Be.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = fr(i, a, r, e) : o = hr(i, r, e), o !== -1 && !l && s(o), o;
}
function fr(n, e, t, s) {
  var i = s.typeaheadBuffer[0], a = n.get(i);
  if (!a)
    return -1;
  if (i === s.currentFirstChar && a[s.sortedIndexCursor].index === e) {
    s.sortedIndexCursor = (s.sortedIndexCursor + 1) % a.length;
    var l = a[s.sortedIndexCursor].index;
    if (!t(l))
      return l;
  }
  s.currentFirstChar = i;
  var r = -1, o;
  for (o = 0; o < a.length; o++)
    if (!t(a[o].index)) {
      r = o;
      break;
    }
  for (; o < a.length; o++)
    if (a[o].index > e && !t(a[o].index)) {
      r = o;
      break;
    }
  return r !== -1 ? (s.sortedIndexCursor = r, a[s.sortedIndexCursor].index) : -1;
}
function hr(n, e, t) {
  var s = t.typeaheadBuffer[0], i = n.get(s);
  if (!i)
    return -1;
  var a = i[t.sortedIndexCursor];
  if (a.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var l = (t.sortedIndexCursor + 1) % i.length, r = -1; l !== t.sortedIndexCursor; ) {
    var o = i[l], u = o.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, c = !e(o.index);
    if (u && c) {
      r = l;
      break;
    }
    l = (l + 1) % i.length;
  }
  return r !== -1 ? (t.sortedIndexCursor = r, i[t.sortedIndexCursor].index) : -1;
}
function Ss(n) {
  return n.typeaheadBuffer.length > 0;
}
function ys(n) {
  n.typeaheadBuffer = "";
}
function Hn(n, e) {
  var t = n.event, s = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, l = n.sortedIndexByFirstChar, r = n.isItemAtIndexDisabled, o = Ve(t) === "ArrowLeft", u = Ve(t) === "ArrowUp", c = Ve(t) === "ArrowRight", d = Ve(t) === "ArrowDown", f = Ve(t) === "Home", m = Ve(t) === "End", h = Ve(t) === "Enter", p = Ve(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || u || c || d || f || m || h)
    return -1;
  var _ = !p && t.key.length === 1;
  if (_) {
    bt(t);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: r
    };
    return Tn(E, e);
  }
  if (!p)
    return -1;
  s && bt(t);
  var b = s && Ss(e);
  if (b) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: r
    };
    return Tn(E, e);
  }
  return -1;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function mr(n) {
  return n instanceof Array;
}
var pr = ["Alt", "Control", "Meta", "Shift"];
function xn(n) {
  var e = new Set(n ? pr.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(s) {
      return e.has(s);
    }) && t.length === e.size;
  };
}
var gr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, xe(xe({}, e.defaultAdapter), t)) || this;
      return s.wrapFocus = !1, s.isVertical = !0, s.isSingleSelectionList = !1, s.areDisabledItemsFocusable = !0, s.selectedIndex = Be.UNSET_INDEX, s.focusedItemIndex = Be.UNSET_INDEX, s.useActivatedClass = !1, s.useSelectedAttr = !1, s.ariaCurrentAttrValue = null, s.isCheckboxList = !1, s.isRadioList = !1, s.lastSelectedIndex = null, s.hasTypeahead = !1, s.typeaheadState = cr(), s.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), s;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Mt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return oe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Be;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
          },
          focusItemAtIndex: function() {
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return !1;
          },
          hasRadioAtIndex: function() {
            return !1;
          },
          isCheckboxCheckedAtIndex: function() {
            return !1;
          },
          isFocusInsideList: function() {
            return !1;
          },
          isRootFocused: function() {
            return !1;
          },
          listItemAtIndexHasClass: function() {
            return !1;
          },
          notifyAction: function() {
          },
          notifySelectionChange: function() {
          },
          removeClassForElementIndex: function() {
          },
          setAttributeForElementIndex: function() {
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
          },
          setTabIndexForListItemChildren: function() {
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
    }, e.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    }, e.prototype.setWrapFocus = function(t) {
      this.wrapFocus = t;
    }, e.prototype.setVerticalOrientation = function(t) {
      this.isVertical = t;
    }, e.prototype.setSingleSelection = function(t) {
      this.isSingleSelectionList = t, t && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(t) {
      this.areDisabledItemsFocusable = t;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var t = this.getSelectedIndexFromDOM();
      if (t !== Be.UNSET_INDEX) {
        var s = this.adapter.listItemAtIndexHasClass(t, oe.LIST_ITEM_ACTIVATED_CLASS);
        s && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = Be.UNSET_INDEX, s = this.adapter.getListItemCount(), i = 0; i < s; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, oe.LIST_ITEM_SELECTED_CLASS), l = this.adapter.listItemAtIndexHasClass(i, oe.LIST_ITEM_ACTIVATED_CLASS);
        if (a || l) {
          t = i;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Ss(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(t) {
      this.useActivatedClass = t;
    }, e.prototype.setUseSelectedAttribute = function(t) {
      this.useSelectedAttr = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t, s) {
      s === void 0 && (s = {}), this.isIndexValid(t) && (this.isCheckboxList ? this.setCheckboxAtIndex(t, s) : this.isRadioList ? this.setRadioAtIndex(t, s) : this.setSingleSelectionAtIndex(t, s));
    }, e.prototype.handleFocusIn = function(t) {
      t >= 0 && (this.focusedItemIndex = t, this.adapter.setAttributeForElementIndex(t, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(t, "0"));
    }, e.prototype.handleFocusOut = function(t) {
      var s = this;
      t >= 0 && (this.adapter.setAttributeForElementIndex(t, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(t, "-1")), setTimeout(function() {
        s.adapter.isFocusInsideList() || s.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(t) {
      return this.adapter.listItemAtIndexHasClass(t, oe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, s, i) {
      var a = this, l, r = Ve(t) === "ArrowLeft", o = Ve(t) === "ArrowUp", u = Ve(t) === "ArrowRight", c = Ve(t) === "ArrowDown", d = Ve(t) === "Home", f = Ve(t) === "End", m = Ve(t) === "Enter", h = Ve(t) === "Spacebar", p = this.isVertical && c || !this.isVertical && u, _ = this.isVertical && o || !this.isVertical && r, E = t.key === "A" || t.key === "a", b = xn(t);
      if (this.adapter.isRootFocused()) {
        if ((_ || f) && b([]))
          t.preventDefault(), this.focusLastElement();
        else if ((p || d) && b([]))
          t.preventDefault(), this.focusFirstElement();
        else if (_ && b(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var M = this.focusLastElement();
          M !== -1 && this.setSelectedIndexOnAction(M, !1);
        } else if (p && b(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var M = this.focusFirstElement();
          M !== -1 && this.setSelectedIndexOnAction(M, !1);
        }
        if (this.hasTypeahead) {
          var S = {
            event: t,
            focusItemAtIndex: function(L) {
              a.focusItemAtIndex(L);
            },
            focusedItemIndex: -1,
            isTargetListItem: s,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(L) {
              return a.isIndexDisabled(L);
            }
          };
          Hn(S, this.typeaheadState);
        }
        return;
      }
      var T = this.adapter.getFocusedElementIndex();
      if (!(T === -1 && (T = i, T < 0))) {
        if (p && b([]))
          bt(t), this.focusNextElement(T);
        else if (_ && b([]))
          bt(t), this.focusPrevElement(T);
        else if (p && b(["Shift"]) && this.isCheckboxList) {
          bt(t);
          var M = this.focusNextElement(T);
          M !== -1 && this.setSelectedIndexOnAction(M, !1);
        } else if (_ && b(["Shift"]) && this.isCheckboxList) {
          bt(t);
          var M = this.focusPrevElement(T);
          M !== -1 && this.setSelectedIndexOnAction(M, !1);
        } else if (d && b([]))
          bt(t), this.focusFirstElement();
        else if (f && b([]))
          bt(t), this.focusLastElement();
        else if (d && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (bt(t), this.isIndexDisabled(T))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, T, T);
        } else if (f && b(["Control", "Shift"]) && this.isCheckboxList) {
          if (bt(t), this.isIndexDisabled(T))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(T, this.adapter.getListItemCount() - 1, T);
        } else if (E && b(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Be.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || h) && b([])) {
          if (s) {
            var F = t.target;
            if (F && F.tagName === "A" && m || (bt(t), this.isIndexDisabled(T)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(T, !1), this.adapter.notifyAction(T));
          }
        } else if ((m || h) && b(["Shift"]) && this.isCheckboxList) {
          var F = t.target;
          if (F && F.tagName === "A" && m || (bt(t), this.isIndexDisabled(T)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((l = this.lastSelectedIndex) !== null && l !== void 0 ? l : T, T, T), this.adapter.notifyAction(T));
        }
        if (this.hasTypeahead) {
          var S = {
            event: t,
            focusItemAtIndex: function(G) {
              a.focusItemAtIndex(G);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: s,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(G) {
              return a.isIndexDisabled(G);
            }
          };
          Hn(S, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, s, i) {
      var a, l = xn(i);
      t !== Be.UNSET_INDEX && (this.isIndexDisabled(t) || (l([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, s), this.adapter.notifyAction(t)) : this.isCheckboxList && l(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
    }, e.prototype.focusNextElement = function(t) {
      var s = this.adapter.getListItemCount(), i = t, a = null;
      do {
        if (i++, i >= s)
          if (this.wrapFocus)
            i = 0;
          else
            return t;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusPrevElement = function(t) {
      var s = this.adapter.getListItemCount(), i = t, a = null;
      do {
        if (i--, i < 0)
          if (this.wrapFocus)
            i = s - 1;
          else
            return t;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(t), t;
    }, e.prototype.setEnabled = function(t, s) {
      this.isIndexValid(t, !1) && (s ? (this.adapter.removeClassForElementIndex(t, oe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Mt.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, oe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Mt.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, s) {
      if (s === void 0 && (s = {}), !(this.selectedIndex === t && !s.forceUpdate)) {
        var i = oe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = oe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Be.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== Be.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, s.isUserInteraction && !s.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === Be.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Mt.ARIA_CURRENT));
      var s = this.ariaCurrentAttrValue !== null, i = s ? Mt.ARIA_CURRENT : Mt.ARIA_SELECTED;
      if (this.selectedIndex !== Be.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== Be.UNSET_INDEX) {
        var a = s ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Mt.ARIA_SELECTED : Mt.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, s) {
      s === void 0 && (s = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !s.forceUpdate) && (this.selectedIndex !== Be.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(t, i, "true"), this.selectedIndex = t, s.isUserInteraction && !s.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, s) {
      s === void 0 && (s = {});
      for (var i = this.selectedIndex, a = s.isUserInteraction ? new Set(i === Be.UNSET_INDEX ? [] : i) : null, l = this.getSelectionAttribute(), r = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var u = a == null ? void 0 : a.has(o), c = t.indexOf(o) >= 0;
        c !== u && r.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, l, c ? "true" : "false");
      }
      this.selectedIndex = t, s.isUserInteraction && r.length && this.adapter.notifySelectionChange(r);
    }, e.prototype.toggleCheckboxRange = function(t, s, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === Be.UNSET_INDEX ? [] : this.selectedIndex), l = !(a != null && a.has(i)), r = Bn([t, s].sort(), 2), o = r[0], u = r[1], c = this.getSelectionAttribute(), d = [], f = o; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          l !== m && (d.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, l), this.adapter.setAttributeForElementIndex(f, c, "" + l), l ? a.add(f) : a.delete(f));
        }
      d.length && (this.selectedIndex = tr([], Bn(a)), this.adapter.notifySelectionChange(d));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === Be.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== Be.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Be.UNSET_INDEX ? this.selectedIndex : mr(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, s) {
        return Math.min(t, s);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(t, s) {
      var i = this;
      if (s === void 0 && (s = !0), t instanceof Array) {
        if (!this.isCheckboxList && s)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return t.length === 0 ? !0 : t.some(function(a) {
          return i.isIndexInRange(a);
        });
      } else if (typeof t == "number") {
        if (this.isCheckboxList && s)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === Be.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(t) {
      var s = this.adapter.getListItemCount();
      return t >= 0 && t < s;
    }, e.prototype.setSelectedIndexOnAction = function(t, s) {
      this.lastSelectedIndex = t, this.isCheckboxList ? (this.toggleCheckboxAtIndex(t, s), this.adapter.notifySelectionChange([t])) : this.setSelectedIndex(t, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(t, s) {
      var i = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(t), l;
      s ? l = a : (l = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, l)), this.adapter.setAttributeForElementIndex(t, i, l ? "true" : "false");
      var r = this.selectedIndex === Be.UNSET_INDEX ? [] : this.selectedIndex.slice();
      l ? r.push(t) : r = r.filter(function(o) {
        return o !== t;
      }), this.selectedIndex = r;
    }, e.prototype.focusItemAtIndex = function(t) {
      this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t;
    }, e.prototype.checkboxListToggleAll = function(t, s) {
      var i = this.adapter.getListItemCount();
      if (t.length === i)
        this.setCheckboxAtIndex([], { isUserInteraction: s });
      else {
        for (var a = [], l = 0; l < i; l++)
          (!this.isIndexDisabled(l) || t.indexOf(l) > -1) && a.push(l);
        this.setCheckboxAtIndex(a, { isUserInteraction: s });
      }
    }, e.prototype.typeaheadMatchItem = function(t, s, i) {
      var a = this;
      i === void 0 && (i = !1);
      var l = {
        focusItemAtIndex: function(r) {
          a.focusItemAtIndex(r);
        },
        focusedItemIndex: s || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(r) {
          return a.isIndexDisabled(r);
        }
      };
      return Tn(l, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return dr(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      ys(this.typeaheadState);
    }, e;
  }(Tt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Cs = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, xe(xe({}, e.defaultAdapter), t)) || this;
      return s.isSurfaceOpen = !1, s.isQuickOpen = !1, s.isHoistedElement = !1, s.isFixedPosition = !1, s.isHorizontallyCenteredOnViewport = !1, s.maxHeight = 0, s.openBottomBias = 0, s.openAnimationEndTimerId = 0, s.closeAnimationEndTimerId = 0, s.animationRequestId = 0, s.anchorCorner = Ut.TOP_START, s.originCorner = Ut.TOP_START, s.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, s.position = { x: 0, y: 0 }, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return or;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Jt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Ut;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          hasAnchor: function() {
            return !1;
          },
          isElementInContainer: function() {
            return !1;
          },
          isFocused: function() {
            return !1;
          },
          isRtl: function() {
            return !1;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
          },
          setMaxHeight: function() {
          },
          setTransformOrigin: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          notifyClose: function() {
          },
          notifyClosing: function() {
          },
          notifyOpen: function() {
          },
          notifyOpening: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = e.cssClasses, s = t.ROOT, i = t.OPEN;
      if (!this.adapter.hasClass(s))
        throw new Error(s + " class required in root element.");
      this.adapter.hasClass(i) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(t) {
      this.anchorCorner = t;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ He.RIGHT;
    }, e.prototype.setAnchorMargin = function(t) {
      this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0;
    }, e.prototype.setIsHoisted = function(t) {
      this.isHoistedElement = t;
    }, e.prototype.setFixedPosition = function(t) {
      this.isFixedPosition = t;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(t, s) {
      this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(s) ? s : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(t) {
      this.isHorizontallyCenteredOnViewport = t;
    }, e.prototype.setQuickOpen = function(t) {
      this.isQuickOpen = t;
    }, e.prototype.setMaxHeight = function(t) {
      this.maxHeight = t;
    }, e.prototype.setOpenBottomBias = function(t) {
      this.openBottomBias = t;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var t = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.adapter.addClass(e.cssClasses.OPEN), t.openAnimationEndTimerId = setTimeout(function() {
          t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen();
        }, Jt.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(t) {
      var s = this;
      if (t === void 0 && (t = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          s.adapter.removeClass(e.cssClasses.OPEN), s.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), s.closeAnimationEndTimerId = setTimeout(function() {
            s.closeAnimationEndTimerId = 0, s.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), s.adapter.notifyClose();
          }, Jt.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(t) {
      var s = t.target;
      this.adapter.isElementInContainer(s) || this.close();
    }, e.prototype.handleKeydown = function(t) {
      var s = t.keyCode, i = t.key, a = i === "Escape" || s === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var t;
      this.measurements = this.getAutoLayoutmeasurements();
      var s = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(s), a = this.hasBit(s, He.BOTTOM) ? "bottom" : "top", l = this.hasBit(s, He.RIGHT) ? "right" : "left", r = this.getHorizontalOriginOffset(s), o = this.getVerticalOriginOffset(s), u = this.measurements, c = u.anchorSize, d = u.surfaceSize, f = (t = {}, t[l] = r, t[a] = o, t);
      c.width / d.width > Jt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (l = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(l + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(s, He.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var t = this.adapter.getAnchorDimensions(), s = this.adapter.getBodyDimensions(), i = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return t || (t = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: t,
        bodySize: s,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: t.top,
          right: i.width - t.right,
          bottom: i.height - t.bottom,
          left: t.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: i,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var t = this.originCorner, s = this.measurements, i = s.viewportDistance, a = s.anchorSize, l = s.surfaceSize, r = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, He.BOTTOM), u, c;
      o ? (u = i.top - r + this.anchorMargin.bottom, c = i.bottom - r - this.anchorMargin.bottom) : (u = i.top - r + this.anchorMargin.top, c = i.bottom - r + a.height - this.anchorMargin.top);
      var d = c - l.height > 0;
      !d && u > c + this.openBottomBias && (t = this.setBit(t, He.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, He.FLIP_RTL), h = this.hasBit(this.anchorCorner, He.RIGHT) || this.hasBit(t, He.RIGHT), p = !1;
      f && m ? p = !h : p = h;
      var _, E;
      p ? (_ = i.left + a.width + this.anchorMargin.right, E = i.right - this.anchorMargin.right) : (_ = i.left + this.anchorMargin.left, E = i.right + a.width - this.anchorMargin.left);
      var b = _ - l.width > 0, M = E - l.width > 0, S = this.hasBit(t, He.FLIP_RTL) && this.hasBit(t, He.RIGHT);
      return M && S && f || !b && S ? t = this.unsetBit(t, He.RIGHT) : (b && p && f || b && !p && h || !M && _ >= E) && (t = this.setBit(t, He.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var s = this.measurements.viewportDistance, i = 0, a = this.hasBit(t, He.BOTTOM), l = this.hasBit(this.anchorCorner, He.BOTTOM), r = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = s.top + this.anchorMargin.top - r, l || (i += this.measurements.anchorSize.height)) : (i = s.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - r, l && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var s = this.measurements.anchorSize, i = this.hasBit(t, He.RIGHT), a = this.hasBit(this.anchorCorner, He.RIGHT);
      if (i) {
        var l = a ? s.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? l - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : l;
      }
      return a ? s.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var s = this.measurements.anchorSize, i = this.hasBit(t, He.BOTTOM), a = this.hasBit(this.anchorCorner, He.BOTTOM), l = 0;
      return i ? l = a ? s.height - this.anchorMargin.top : -this.anchorMargin.bottom : l = a ? s.height + this.anchorMargin.bottom : this.anchorMargin.top, l;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var s, i, a = this.measurements, l = a.windowScroll, r = a.viewportDistance, o = a.surfaceSize, u = a.viewportSize, c = Object.keys(t);
      try {
        for (var d = Zt(c), f = d.next(); !f.done; f = d.next()) {
          var m = f.value, h = t[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            t[m] = (u.width - o.width) / 2;
            continue;
          }
          h += r[m], this.isFixedPosition || (m === "top" ? h += l.y : m === "bottom" ? h -= l.y : m === "left" ? h += l.x : h -= l.x), t[m] = h;
        }
      } catch (p) {
        s = { error: p };
      } finally {
        try {
          f && !f.done && (i = d.return) && i.call(d);
        } finally {
          if (s)
            throw s.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, s = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (s || a) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, Jt.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, s) {
      return !!(t & s);
    }, e.prototype.setBit = function(t, s) {
      return t | s;
    }, e.prototype.unsetBit = function(t, s) {
      return t ^ s;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(Tt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Kt = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Gt = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, _r = {
  FOCUS_ROOT_INDEX: -1
}, Wt;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Wt || (Wt = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ir = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, xe(xe({}, e.defaultAdapter), t)) || this;
      return s.closeAnimationEndTimerId = 0, s.defaultFocusState = Wt.LIST_ROOT, s.selectedIndex = -1, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Kt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return _r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
          },
          removeClassFromElementAtIndex: function() {
          },
          addAttributeToElementAtIndex: function() {
          },
          removeAttributeFromElementAtIndex: function() {
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return !1;
          },
          closeSurface: function() {
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
          },
          focusListRoot: function() {
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return !1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
    }, e.prototype.handleKeydown = function(t) {
      var s = t.key, i = t.keyCode, a = s === "Tab" || i === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(t) {
      var s = this, i = this.adapter.getElementIndex(t);
      if (!(i < 0)) {
        this.adapter.notifySelected({ index: i });
        var a = this.adapter.getAttributeFromElementAtIndex(i, Gt.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var l = s.adapter.getElementIndex(t);
          l >= 0 && s.adapter.isSelectableItemAtIndex(l) && s.setSelectedIndex(l);
        }, Cs.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Wt.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Wt.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Wt.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(t) {
      this.defaultFocusState = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t) {
      if (this.validatedIndex(t), !this.adapter.isSelectableItemAtIndex(t))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var s = this.adapter.getSelectedSiblingOfItemAtIndex(t);
      s >= 0 && (this.adapter.removeAttributeFromElementAtIndex(s, Gt.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(s, Kt.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Kt.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Gt.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, s) {
      this.validatedIndex(t), s ? (this.adapter.removeClassFromElementAtIndex(t, oe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Gt.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, oe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Gt.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var s = this.adapter.getMenuItemCount(), i = t >= 0 && t < s;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Tt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var br = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, wn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Er = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var vr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      return n.call(this, xe(xe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return br;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Er;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return wn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(t) {
      var s = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += wn.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(s);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Tt)
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Ar(n) {
  return n === void 0 && (n = window), Sr(n) ? { passive: !0 } : !1;
}
function Sr(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, s = function() {
    };
    n.document.addEventListener("test", s, t), n.document.removeEventListener("test", s, t);
  } catch {
    e = !1;
  }
  return e;
}
const yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Ar
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Cr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Tr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Vn = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, sn;
function Lr(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, s = sn;
  if (typeof sn == "boolean" && !e)
    return sn;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var a = t.supports("--css-vars", "yes"), l = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return s = a || l, e || (sn = s), s;
}
function Mr(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var s = e.x, i = e.y, a = s + t.left, l = i + t.top, r, o;
  if (n.type === "touchstart") {
    var u = n;
    r = u.changedTouches[0].pageX - a, o = u.changedTouches[0].pageY - l;
  } else {
    var c = n;
    r = c.pageX - a, o = c.pageY - l;
  }
  return { x: r, y: o };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Gn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], qn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], rn = [], Or = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, xe(xe({}, e.defaultAdapter), t)) || this;
      return s.activationAnimationHasEnded = !1, s.activationTimer = 0, s.fgDeactivationRemovalTimer = 0, s.fgScale = "0", s.frame = { width: 0, height: 0 }, s.initialSize = 0, s.layoutFrame = 0, s.maxRadius = 0, s.unboundedCoords = { left: 0, top: 0 }, s.activationState = s.defaultActivationState(), s.activationTimerCallback = function() {
        s.activationAnimationHasEnded = !0, s.runDeactivationUXLogicIfReady();
      }, s.activateHandler = function(i) {
        s.activateImpl(i);
      }, s.deactivateHandler = function() {
        s.deactivateImpl();
      }, s.focusHandler = function() {
        s.handleFocus();
      }, s.blurHandler = function() {
        s.handleBlur();
      }, s.resizeHandler = function() {
        s.layout();
      }, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Cr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Tr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Vn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = this, s = this.supportsPressRipple();
      if (this.registerRootHandlers(s), s) {
        var i = e.cssClasses, a = i.ROOT, l = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(l), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var s = e.cssClasses, i = s.ROOT, a = s.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(i), t.adapter.removeClass(a), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var s = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(s) : this.adapter.removeClass(s);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(t) {
      var s, i;
      if (t) {
        try {
          for (var a = Zt(Gn), l = a.next(); !l.done; l = a.next()) {
            var r = l.value;
            this.adapter.registerInteractionHandler(r, this.activateHandler);
          }
        } catch (o) {
          s = { error: o };
        } finally {
          try {
            l && !l.done && (i = a.return) && i.call(a);
          } finally {
            if (s)
              throw s.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var s, i;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Zt(qn), l = a.next(); !l.done; l = a.next()) {
            var r = l.value;
            this.adapter.registerDocumentInteractionHandler(r, this.deactivateHandler);
          }
        } catch (o) {
          s = { error: o };
        } finally {
          try {
            l && !l.done && (i = a.return) && i.call(a);
          } finally {
            if (s)
              throw s.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, s;
      try {
        for (var i = Zt(Gn), a = i.next(); !a.done; a = i.next()) {
          var l = a.value;
          this.adapter.deregisterInteractionHandler(l, this.activateHandler);
        }
      } catch (r) {
        t = { error: r };
      } finally {
        try {
          a && !a.done && (s = i.return) && s.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, s;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Zt(qn), a = i.next(); !a.done; a = i.next()) {
          var l = a.value;
          this.adapter.deregisterDocumentInteractionHandler(l, this.deactivateHandler);
        }
      } catch (r) {
        t = { error: r };
      } finally {
        try {
          a && !a.done && (s = i.return) && s.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, s = e.strings, i = Object.keys(s);
      i.forEach(function(a) {
        a.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(s[a], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var s = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var a = this.previousActivationEvent, l = a && t !== void 0 && a.type !== t.type;
          if (!l) {
            i.isActivated = !0, i.isProgrammatic = t === void 0, i.activationEvent = t, i.wasActivatedByPointer = i.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var r = t !== void 0 && rn.length > 0 && rn.some(function(o) {
              return s.adapter.containsEventTarget(o);
            });
            if (r) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (rn.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              rn = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = s.checkElementMadeActive(t), i.wasElementMadeActive && s.animateActivation()), i.wasElementMadeActive || (s.activationState = s.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, s = e.strings, i = s.VAR_FG_TRANSLATE_START, a = s.VAR_FG_TRANSLATE_END, l = e.cssClasses, r = l.FG_DEACTIVATION, o = l.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", d = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, h = f.endPoint;
        c = m.x + "px, " + m.y + "px", d = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(a, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, s = t.activationEvent, i = t.wasActivatedByPointer, a;
      i ? a = Mr(s, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var l = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: l };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, s = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, l = i.isActivated, r = a || !l;
      r && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(s), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(s);
      }, Vn.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, s = this.activationState;
      if (s.isActivated) {
        var i = xe({}, s);
        s.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(i), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var s = t.wasActivatedByPointer, i = t.wasElementMadeActive;
      (s || i) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var s = Math.max(this.frame.height, this.frame.width), i = function() {
        var l = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return l + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? s : i();
      var a = Math.floor(s * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, s = t.VAR_FG_SIZE, i = t.VAR_LEFT, a = t.VAR_TOP, l = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(s, this.initialSize + "px"), this.adapter.updateCssVariable(l, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(Tt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var De = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, _n = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
}, Ft = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Rr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t, s) {
      s === void 0 && (s = {});
      var i = n.call(this, xe(xe({}, e.defaultAdapter), t)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Ft.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = s.leadingIcon, i.helperText = s.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return De;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ft;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return _n;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          activateBottomLine: function() {
          },
          deactivateBottomLine: function() {
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
          },
          hasLabel: function() {
            return !1;
          },
          floatLabel: function() {
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          },
          setRippleCenter: function() {
          },
          notifyChange: function() {
          },
          setSelectedText: function() {
          },
          isSelectAnchorFocused: function() {
            return !1;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
          },
          removeSelectAnchorAttr: function() {
          },
          addMenuClass: function() {
          },
          removeMenuClass: function() {
          },
          openMenu: function() {
          },
          closeMenu: function() {
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
          },
          setMenuAnchorCorner: function() {
          },
          setMenuWrapFocus: function() {
          },
          focusMenuItemAtIndex: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return !1;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    }, e.prototype.setSelectedIndex = function(t, s, i) {
      s === void 0 && (s = !1), i === void 0 && (i = !1), !(t >= this.adapter.getMenuItemCount()) && (t === Ft.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), s && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
    }, e.prototype.setValue = function(t, s) {
      s === void 0 && (s = !1);
      var i = this.adapter.getMenuItemValues().indexOf(t);
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        s
      );
    }, e.prototype.getValue = function() {
      var t = this.adapter.getSelectedIndex(), s = this.adapter.getMenuItemValues();
      return t !== Ft.UNSET_INDEX ? s[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(De.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(De.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(De.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, s = this.adapter.hasClass(De.FOCUSED), i = t || s, a = this.adapter.hasClass(De.REQUIRED);
        this.notchOutline(i), this.adapter.floatLabel(i), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var t = this.adapter.getMenuItemValues(), s = t.indexOf(this.getValue());
      this.setSelectedIndex(
        s,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var t = this.getSelectedIndex(), s = t >= 0 ? t : 0;
        this.adapter.focusMenuItemAtIndex(s);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(De.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(De.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(De.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(t) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(t), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(t) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(De.FOCUSED))) {
        var s = Ve(t) === te.ENTER, i = Ve(t) === te.SPACEBAR, a = Ve(t) === te.ARROW_UP, l = Ve(t) === te.ARROW_DOWN, r = t.ctrlKey || t.metaKey;
        if (!r && (!i && t.key && t.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var o = i ? " " : t.key, u = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), t.preventDefault();
          return;
        }
        !s && !i && !a && !l || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var s = this.adapter.hasClass(De.FOCUSED);
        if (t) {
          var i = Ft.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
          this.adapter.notchOutline(a);
        } else
          s || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(t) {
      this.useDefaultValidation = t;
    }, e.prototype.setValid = function(t) {
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(De.INVALID), this.adapter.removeMenuClass(De.MENU_INVALID)) : (this.adapter.addClass(De.INVALID), this.adapter.addMenuClass(De.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(De.REQUIRED) && !this.adapter.hasClass(De.DISABLED) ? this.getSelectedIndex() !== Ft.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(De.REQUIRED) : this.adapter.removeClass(De.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Ut.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(De.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(De.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(De.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(De.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var s = this.helperText.isVisible(), i = this.helperText.getId();
        s && i ? this.adapter.setSelectAnchorAttr(_n.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(_n.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, Ft.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Tt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Nt = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, St = {
  HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
  HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Dr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      return n.call(this, xe(xe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return St;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Nt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setAttr: function() {
          },
          getAttr: function() {
            return null;
          },
          removeAttr: function() {
          },
          setContent: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getId = function() {
      return this.adapter.getAttr("id");
    }, e.prototype.isVisible = function() {
      return this.adapter.getAttr(Nt.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(St.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(St.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(St.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(St.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(St.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(St.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var s = this.adapter.hasClass(St.HELPER_TEXT_VALIDATION_MSG);
      if (s) {
        var i = this.adapter.hasClass(St.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || i;
        if (a) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(Nt.ROLE) : this.adapter.setAttr(Nt.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Nt.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Nt.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Nt.ARIA_HIDDEN, "true");
    }, e;
  }(Tt)
);
const qt = [];
function Ln(n, e = nt) {
  let t;
  const s = /* @__PURE__ */ new Set();
  function i(r) {
    if (Ce(n, r) && (n = r, t)) {
      const o = !qt.length;
      for (const u of s)
        u[1](), qt.push(u, n);
      if (o) {
        for (let u = 0; u < qt.length; u += 2)
          qt[u][0](qt[u + 1]);
        qt.length = 0;
      }
    }
  }
  function a(r) {
    i(r(n));
  }
  function l(r, o = nt) {
    const u = [r, o];
    return s.add(u), s.size === 1 && (t = e(i, a) || nt), r(n), () => {
      s.delete(u), s.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: l };
}
function X(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function qe(n, e, t, s = { bubbles: !0 }, i = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const a = new CustomEvent(e, Object.assign(Object.assign({}, s), { detail: t }));
  if (n == null || n.dispatchEvent(a), i && e.startsWith("SMUI")) {
    const l = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, s), { detail: t }));
    n == null || n.dispatchEvent(l), l.defaultPrevented && a.preventDefault();
  }
  return a;
}
function hn(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const s = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i], l = a.indexOf("$");
    l !== -1 && e.indexOf(a.substring(0, l + 1)) !== -1 || e.indexOf(a) === -1 && (s[a] = n[a]);
  }
  return s;
}
const zn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, kr = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Je(n) {
  let e, t = [];
  n.$on = (i, a) => {
    let l = i, r = () => {
    };
    return e ? r = e(l, a) : t.push([l, a]), l.match(zn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', l), () => {
      r();
    };
  };
  function s(i) {
    const a = n.$$.callbacks[i.type];
    a && a.slice().forEach((l) => l.call(this, i));
  }
  return (i) => {
    const a = [], l = {};
    e = (r, o) => {
      let u = r, c = o, d = !1;
      const f = u.match(zn), m = u.match(kr), h = f || m;
      if (u.match(/^SMUI:\w+:/)) {
        const E = u.split(":");
        let b = "";
        for (let M = 0; M < E.length; M++)
          b += M === E.length - 1 ? ":" + E[M] : E[M].split("-").map((S) => S.slice(0, 1).toUpperCase() + S.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${b.split("$")[0]}.`), u = b;
      }
      if (h) {
        const E = u.split(f ? ":" : "$");
        u = E[0];
        const b = E.slice(1).reduce((M, S) => (M[S] = !0, M), {});
        b.passive && (d = d || {}, d.passive = !0), b.nonpassive && (d = d || {}, d.passive = !1), b.capture && (d = d || {}, d.capture = !0), b.once && (d = d || {}, d.once = !0), b.preventDefault && (c = jr(c)), b.stopPropagation && (c = Fr(c)), b.stopImmediatePropagation && (c = Nr(c)), b.self && (c = Pr(i, c)), b.trusted && (c = Ur(c));
      }
      const p = Wn(i, u, c, d), _ = () => {
        p();
        const E = a.indexOf(_);
        E > -1 && a.splice(E, 1);
      };
      return a.push(_), u in l || (l[u] = Wn(i, u, s)), _;
    };
    for (let r = 0; r < t.length; r++)
      e(t[r][0], t[r][1]);
    return {
      destroy: () => {
        for (let r = 0; r < a.length; r++)
          a[r]();
        for (let r of Object.entries(l))
          r[1]();
      }
    };
  };
}
function Wn(n, e, t, s) {
  return n.addEventListener(e, t, s), () => n.removeEventListener(e, t, s);
}
function jr(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Fr(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Nr(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function Pr(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function Ur(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Ae(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const s = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    a.substring(0, e.length) === e && (s[a.substring(e.length)] = n[a]);
  }
  return s;
}
function Xe(n, e) {
  let t = [];
  if (e)
    for (let s = 0; s < e.length; s++) {
      const i = e[s], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? t.push(a(n, i[1])) : t.push(a(n));
    }
  return {
    update(s) {
      if ((s && s.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (s)
        for (let i = 0; i < s.length; i++) {
          const a = t[i];
          if (a && a.update) {
            const l = s[i];
            Array.isArray(l) && l.length > 1 ? a.update(l[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        i && i.destroy && i.destroy();
      }
    }
  };
}
const { applyPassive: an } = yr, { matches: Br } = On;
function un(n, { ripple: e = !0, surface: t = !1, unbounded: s = !1, disabled: i = !1, color: a, active: l, rippleElement: r, eventTarget: o, activeTarget: u, addClass: c = (h) => n.classList.add(h), removeClass: d = (h) => n.classList.remove(h), addStyle: f = (h, p) => n.style.setProperty(h, p), initPromise: m = Promise.resolve() } = {}) {
  let h, p = Pe("SMUI:addLayoutListener"), _, E = l, b = o, M = u;
  function S() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : a === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), h && E !== l && (E = l, l ? h.activate() : l === !1 && h.deactivate()), e && !h ? (h = new Or({
      addClass: c,
      browserSupportsCssVars: () => Lr(window),
      computeBoundingRect: () => (r || n).getBoundingClientRect(),
      containsEventTarget: (F) => n.contains(F),
      deregisterDocumentInteractionHandler: (F, L) => document.documentElement.removeEventListener(F, L, an()),
      deregisterInteractionHandler: (F, L) => (o || n).removeEventListener(F, L, an()),
      deregisterResizeHandler: (F) => window.removeEventListener("resize", F),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => l ?? Br(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!s,
      registerDocumentInteractionHandler: (F, L) => document.documentElement.addEventListener(F, L, an()),
      registerInteractionHandler: (F, L) => (o || n).addEventListener(F, L, an()),
      registerResizeHandler: (F) => window.addEventListener("resize", F),
      removeClass: d,
      updateCssVariable: f
    }), m.then(() => {
      h && (h.init(), h.setUnbounded(s));
    })) : h && !e && m.then(() => {
      h && (h.destroy(), h = void 0);
    }), h && (b !== o || M !== u) && (b = o, M = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(s));
    })), !e && s && c("mdc-ripple-upgraded--unbounded");
  }
  S(), p && (_ = p(T));
  function T() {
    h && h.layout();
  }
  return {
    update(F) {
      ({
        ripple: e,
        surface: t,
        unbounded: s,
        disabled: i,
        color: a,
        active: l,
        rippleElement: r,
        eventTarget: o,
        activeTarget: u,
        addClass: c,
        removeClass: d,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (L) => n.classList.add(L), removeClass: (L) => n.classList.remove(L), addStyle: (L, G) => n.style.setProperty(L, G), initPromise: Promise.resolve() }, F)), S();
    },
    destroy() {
      h && (h.destroy(), h = void 0, d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
const { document: Hr } = bi;
function xr(n) {
  let e, t, s, i, a, l, r, o;
  const u = (
    /*#slots*/
    n[34].default
  ), c = Le(
    u,
    n,
    /*$$scope*/
    n[33],
    null
  );
  let d = [
    {
      class: s = X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": (
          /*fixed*/
          n[4]
        ),
        "mdc-menu-surface--open": (
          /*isStatic*/
          n[3]
        ),
        "smui-menu-surface--static": (
          /*isStatic*/
          n[3]
        ),
        "mdc-menu-surface--fullwidth": (
          /*fullWidth*/
          n[5]
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(Xn).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let m = 0; m < d.length; m += 1)
    f = j(f, d[m]);
  return {
    c() {
      e = Se(), t = J("div"), c && c.c(), fe(t, f);
    },
    m(m, h) {
      Y(m, e, h), Y(m, t, h), c && c.m(t, null), n[35](t), l = !0, r || (o = [
        $e(
          Hr.body,
          "click",
          /*handleBodyClick*/
          n[11],
          !0
        ),
        ce(a = Xe.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[10].call(null, t)
        ),
        $e(t, "keydown", function() {
          Te(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleKeydown.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleKeydown.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        })
      ], r = !0);
    },
    p(m, h) {
      n = m, c && c.p && (!l || h[1] & /*$$scope*/
      4) && Oe(
        c,
        u,
        n,
        /*$$scope*/
        n[33],
        l ? Me(
          u,
          /*$$scope*/
          n[33],
          h,
          null
        ) : Re(
          /*$$scope*/
          n[33]
        ),
        null
      ), fe(t, f = ee(d, [
        (!l || h[0] & /*className, fixed, isStatic, fullWidth, internalClasses*/
        314 && s !== (s = X({
          [
            /*className*/
            n[1]
          ]: !0,
          "mdc-menu-surface": !0,
          "mdc-menu-surface--fixed": (
            /*fixed*/
            n[4]
          ),
          "mdc-menu-surface--open": (
            /*isStatic*/
            n[3]
          ),
          "smui-menu-surface--static": (
            /*isStatic*/
            n[3]
          ),
          "mdc-menu-surface--fullwidth": (
            /*fullWidth*/
            n[5]
          ),
          .../*internalClasses*/
          n[8]
        }))) && { class: s },
        (!l || h[0] & /*internalStyles, style*/
        516 && i !== (i = Object.entries(
          /*internalStyles*/
          n[9]
        ).map(Xn).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: i },
        h[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        n[12]
      ])), a && Te(a.update) && h[0] & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(m) {
      l || (R(c, m), l = !0);
    },
    o(m) {
      N(c, m), l = !1;
    },
    d(m) {
      m && (Q(e), Q(t)), c && c.d(m), n[35](null), r = !1, ze(o);
    }
  };
}
const Xn = ([n, e]) => `${n}: ${e};`;
function wr(n, e, t) {
  const s = [
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "openBottomBias",
    "neverRestoreFocus",
    "isOpen",
    "setOpen",
    "setAbsolutePosition",
    "setIsHoisted",
    "isFixed",
    "getElement"
  ];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  var r, o, u;
  const c = Je(ke());
  let { use: d = [] } = e, { class: f = "" } = e, { style: m = "" } = e, { static: h = !1 } = e, { anchor: p = !0 } = e, { fixed: _ = !1 } = e, { open: E = h } = e, { managed: b = !1 } = e, { fullWidth: M = !1 } = e, { quickOpen: S = !1 } = e, { anchorElement: T = void 0 } = e, { anchorCorner: F = void 0 } = e, { anchorMargin: L = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: G = 0 } = e, { horizontallyCenteredOnViewport: ne = !1 } = e, { openBottomBias: P = 0 } = e, { neverRestoreFocus: D = !1 } = e, U, x, y = {}, k = {}, w;
  Ge("SMUI:list:role", "menu"), Ge("SMUI:list:item:role", "menuitem");
  const ge = Ut;
  vt(() => (t(7, x = new Cs({
    addClass: ue,
    removeClass: Ee,
    hasClass: O,
    hasAnchor: () => !!T,
    notifyClose: () => {
      b || t(13, E = h), E || qe(U, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      b || t(13, E = h), E || qe(U, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      b || t(13, E = !0), E && qe(U, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      E || qe(U, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (se) => U.contains(se),
    isRtl: () => getComputedStyle(U).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (se) => {
      t(9, k["transform-origin"] = se, k);
    },
    isFocused: () => document.activeElement === U,
    saveFocus: () => {
      var se;
      w = (se = document.activeElement) !== null && se !== void 0 ? se : void 0;
    },
    restoreFocus: () => {
      !D && (!U || U.contains(document.activeElement)) && w && document.contains(w) && "focus" in w && w.focus();
    },
    getInnerDimensions: () => ({
      width: U.offsetWidth,
      height: U.offsetHeight
    }),
    getAnchorDimensions: () => T ? T.getBoundingClientRect() : null,
    getWindowDimensions: () => ({
      width: window.innerWidth,
      height: window.innerHeight
    }),
    getBodyDimensions: () => ({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }),
    getWindowScroll: () => ({
      x: window.pageXOffset,
      y: window.pageYOffset
    }),
    setPosition: (se) => {
      t(9, k.left = "left" in se ? `${se.left}px` : "", k), t(9, k.right = "right" in se ? `${se.right}px` : "", k), t(9, k.top = "top" in se ? `${se.top}px` : "", k), t(9, k.bottom = "bottom" in se ? `${se.bottom}px` : "", k);
    },
    setMaxHeight: (se) => {
      t(9, k["max-height"] = se, k);
    }
  })), qe(U, "SMUIMenuSurface:mount", {
    get open() {
      return E;
    },
    set open(se) {
      t(13, E = se);
    },
    closeProgrammatic: We
  }), x.init(), () => {
    var se;
    const Ue = x.isHoistedElement;
    x.destroy(), Ue && ((se = U.parentNode) === null || se === void 0 || se.removeChild(U));
  })), Ht(() => {
    var C;
    p && U && ((C = U.parentElement) === null || C === void 0 || C.classList.remove("mdc-menu-surface--anchor"));
  });
  function O(C) {
    return C in y ? y[C] : de().classList.contains(C);
  }
  function ue(C) {
    y[C] || t(8, y[C] = !0, y);
  }
  function Ee(C) {
    (!(C in y) || y[C]) && t(8, y[C] = !1, y);
  }
  function We(C) {
    x.close(C), t(13, E = !1);
  }
  function ae(C) {
    x && E && !b && x.handleBodyClick(C);
  }
  function st() {
    return E;
  }
  function rt(C) {
    t(13, E = C);
  }
  function V(C, se) {
    return x.setAbsolutePosition(C, se);
  }
  function me(C) {
    return x.setIsHoisted(C);
  }
  function he() {
    return x.isFixed();
  }
  function de() {
    return U;
  }
  function we(C) {
    le[C ? "unshift" : "push"](() => {
      U = C, t(6, U);
    });
  }
  return n.$$set = (C) => {
    e = j(j({}, e), Ke(C)), t(12, i = re(e, s)), "use" in C && t(0, d = C.use), "class" in C && t(1, f = C.class), "style" in C && t(2, m = C.style), "static" in C && t(3, h = C.static), "anchor" in C && t(15, p = C.anchor), "fixed" in C && t(4, _ = C.fixed), "open" in C && t(13, E = C.open), "managed" in C && t(16, b = C.managed), "fullWidth" in C && t(5, M = C.fullWidth), "quickOpen" in C && t(17, S = C.quickOpen), "anchorElement" in C && t(14, T = C.anchorElement), "anchorCorner" in C && t(18, F = C.anchorCorner), "anchorMargin" in C && t(19, L = C.anchorMargin), "maxHeight" in C && t(20, G = C.maxHeight), "horizontallyCenteredOnViewport" in C && t(21, ne = C.horizontallyCenteredOnViewport), "openBottomBias" in C && t(22, P = C.openBottomBias), "neverRestoreFocus" in C && t(23, D = C.neverRestoreFocus), "$$scope" in C && t(33, l = C.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | n.$$.dirty[1] & /*_b, _c*/
    3 && U && p && !(!(t(30, r = U.parentElement) === null || r === void 0) && r.classList.contains("mdc-menu-surface--anchor")) && (t(31, o = U.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), t(14, T = t(32, u = U.parentElement) !== null && u !== void 0 ? u : void 0)), n.$$.dirty[0] & /*instance, open*/
    8320 && x && x.isOpen() !== E && (E ? x.open() : x.close()), n.$$.dirty[0] & /*instance, quickOpen*/
    131200 && x && x.setQuickOpen(S), n.$$.dirty[0] & /*instance, fixed*/
    144 && x && x.setFixedPosition(_), n.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && x && x.setMaxHeight(G), n.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && x && x.setIsHorizontallyCenteredOnViewport(ne), n.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && x && F != null && (typeof F == "string" ? x.setAnchorCorner(ge[F]) : x.setAnchorCorner(F)), n.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && x && x.setAnchorMargin(L), n.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && x && x.setOpenBottomBias(P);
  }, [
    d,
    f,
    m,
    h,
    _,
    M,
    U,
    x,
    y,
    k,
    c,
    ae,
    i,
    E,
    T,
    p,
    b,
    S,
    F,
    L,
    G,
    ne,
    P,
    D,
    st,
    rt,
    V,
    me,
    he,
    de,
    r,
    o,
    u,
    l,
    a,
    we
  ];
}
class Ts extends Ne {
  constructor(e) {
    super(), je(
      this,
      e,
      wr,
      xr,
      Ce,
      {
        use: 0,
        class: 1,
        style: 2,
        static: 3,
        anchor: 15,
        fixed: 4,
        open: 13,
        managed: 16,
        fullWidth: 5,
        quickOpen: 17,
        anchorElement: 14,
        anchorCorner: 18,
        anchorMargin: 19,
        maxHeight: 20,
        horizontallyCenteredOnViewport: 21,
        openBottomBias: 22,
        neverRestoreFocus: 23,
        isOpen: 24,
        setOpen: 25,
        setAbsolutePosition: 26,
        setIsHoisted: 27,
        isFixed: 28,
        getElement: 29
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(e) {
    this.$$set({ style: e }), I();
  }
  get static() {
    return this.$$.ctx[3];
  }
  set static(e) {
    this.$$set({ static: e }), I();
  }
  get anchor() {
    return this.$$.ctx[15];
  }
  set anchor(e) {
    this.$$set({ anchor: e }), I();
  }
  get fixed() {
    return this.$$.ctx[4];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), I();
  }
  get open() {
    return this.$$.ctx[13];
  }
  set open(e) {
    this.$$set({ open: e }), I();
  }
  get managed() {
    return this.$$.ctx[16];
  }
  set managed(e) {
    this.$$set({ managed: e }), I();
  }
  get fullWidth() {
    return this.$$.ctx[5];
  }
  set fullWidth(e) {
    this.$$set({ fullWidth: e }), I();
  }
  get quickOpen() {
    return this.$$.ctx[17];
  }
  set quickOpen(e) {
    this.$$set({ quickOpen: e }), I();
  }
  get anchorElement() {
    return this.$$.ctx[14];
  }
  set anchorElement(e) {
    this.$$set({ anchorElement: e }), I();
  }
  get anchorCorner() {
    return this.$$.ctx[18];
  }
  set anchorCorner(e) {
    this.$$set({ anchorCorner: e }), I();
  }
  get anchorMargin() {
    return this.$$.ctx[19];
  }
  set anchorMargin(e) {
    this.$$set({ anchorMargin: e }), I();
  }
  get maxHeight() {
    return this.$$.ctx[20];
  }
  set maxHeight(e) {
    this.$$set({ maxHeight: e }), I();
  }
  get horizontallyCenteredOnViewport() {
    return this.$$.ctx[21];
  }
  set horizontallyCenteredOnViewport(e) {
    this.$$set({ horizontallyCenteredOnViewport: e }), I();
  }
  get openBottomBias() {
    return this.$$.ctx[22];
  }
  set openBottomBias(e) {
    this.$$set({ openBottomBias: e }), I();
  }
  get neverRestoreFocus() {
    return this.$$.ctx[23];
  }
  set neverRestoreFocus(e) {
    this.$$set({ neverRestoreFocus: e }), I();
  }
  get isOpen() {
    return this.$$.ctx[24];
  }
  get setOpen() {
    return this.$$.ctx[25];
  }
  get setAbsolutePosition() {
    return this.$$.ctx[26];
  }
  get setIsHoisted() {
    return this.$$.ctx[27];
  }
  get isFixed() {
    return this.$$.ctx[28];
  }
  get getElement() {
    return this.$$.ctx[29];
  }
}
Fe(Ts, { use: {}, class: {}, style: {}, static: {}, anchor: { type: "Boolean" }, fixed: { type: "Boolean" }, open: {}, managed: { type: "Boolean" }, fullWidth: { type: "Boolean" }, quickOpen: { type: "Boolean" }, anchorElement: {}, anchorCorner: {}, anchorMargin: {}, maxHeight: {}, horizontallyCenteredOnViewport: { type: "Boolean" }, openBottomBias: {}, neverRestoreFocus: { type: "Boolean" } }, ["default"], ["isOpen", "setOpen", "setAbsolutePosition", "setIsHoisted", "isFixed", "getElement"], !0);
function Vr(n, { addClass: e = (s) => n.classList.add(s), removeClass: t = (s) => n.classList.remove(s) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Gr(n) {
  let e;
  const t = (
    /*#slots*/
    n[17].default
  ), s = Le(
    t,
    n,
    /*$$scope*/
    n[22],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(i, a) {
      s && s.m(i, a), e = !0;
    },
    p(i, a) {
      s && s.p && (!e || a & /*$$scope*/
      4194304) && Oe(
        s,
        t,
        i,
        /*$$scope*/
        i[22],
        e ? Me(
          t,
          /*$$scope*/
          i[22],
          a,
          null
        ) : Re(
          /*$$scope*/
          i[22]
        ),
        null
      );
    },
    i(i) {
      e || (R(s, i), e = !0);
    },
    o(i) {
      N(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function qr(n) {
  let e, t, s;
  const i = [
    { use: (
      /*usePass*/
      n[5]
    ) },
    {
      class: X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-menu": !0
      })
    },
    /*$$restProps*/
    n[9]
  ];
  function a(r) {
    n[19](r);
  }
  let l = {
    $$slots: { default: [Gr] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < i.length; r += 1)
    l = j(l, i[r]);
  return (
    /*open*/
    n[0] !== void 0 && (l.open = /*open*/
    n[0]), e = new Ts({ props: l }), n[18](e), le.push(() => Rt(e, "open", a)), e.$on(
      "SMUIMenuSurface:mount",
      /*handleMenuSurfaceAccessor*/
      n[7]
    ), e.$on(
      "SMUIList:mount",
      /*handleListAccessor*/
      n[8]
    ), e.$on(
      "SMUIMenuSurface:opened",
      /*SMUIMenuSurface_opened_handler*/
      n[20]
    ), e.$on(
      "keydown",
      /*handleKeydown*/
      n[6]
    ), e.$on(
      "SMUIList:action",
      /*SMUIList_action_handler*/
      n[21]
    ), {
      c() {
        ye(e.$$.fragment);
      },
      m(r, o) {
        Ie(e, r, o), s = !0;
      },
      p(r, [o]) {
        const u = o & /*usePass, className, $$restProps*/
        546 ? ee(i, [
          o & /*usePass*/
          32 && { use: (
            /*usePass*/
            r[5]
          ) },
          o & /*className*/
          2 && {
            class: X({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-menu": !0
            })
          },
          o & /*$$restProps*/
          512 && ie(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        o & /*$$scope*/
        4194304 && (u.$$scope = { dirty: o, ctx: r }), !t && o & /*open*/
        1 && (t = !0, u.open = /*open*/
        r[0], Ot(() => t = !1)), e.$set(u);
      },
      i(r) {
        s || (R(e.$$.fragment, r), s = !0);
      },
      o(r) {
        N(e.$$.fragment, r), s = !1;
      },
      d(r) {
        n[18](null), be(e, r);
      }
    }
  );
}
function zr(n, e, t) {
  let s;
  const i = [
    "use",
    "class",
    "open",
    "isOpen",
    "setOpen",
    "setDefaultFocusState",
    "getSelectedIndex",
    "getMenuSurface",
    "getElement"
  ];
  let a = re(e, i), { $$slots: l = {}, $$scope: r } = e;
  const { closest: o } = On, u = Je(ke());
  let { use: c = [] } = e, { class: d = "" } = e, { open: f = !1 } = e, m, h, p, _;
  vt(() => (t(3, h = new Ir({
    addClassToElementAtIndex: (y, k) => {
      _.addClassForElementIndex(y, k);
    },
    removeClassFromElementAtIndex: (y, k) => {
      _.removeClassForElementIndex(y, k);
    },
    addAttributeToElementAtIndex: (y, k, w) => {
      _.setAttributeForElementIndex(y, k, w);
    },
    removeAttributeFromElementAtIndex: (y, k) => {
      _.removeAttributeForElementIndex(y, k);
    },
    getAttributeFromElementAtIndex: (y, k) => _.getAttributeFromElementIndex(y, k),
    elementContainsClass: (y, k) => y.classList.contains(k),
    closeSurface: (y) => {
      p.closeProgrammatic(y), qe(ne(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (y) => _.getOrderedList().map((k) => k.element).indexOf(y),
    notifySelected: (y) => qe(
      ne(),
      "SMUIMenu:selected",
      {
        index: y.index,
        item: _.getOrderedList()[y.index].element
      },
      void 0,
      !0
    ),
    getMenuItemCount: () => _.items.length,
    focusItemAtIndex: (y) => _.focusItemAtIndex(y),
    focusListRoot: () => "focus" in _.element && _.element.focus(),
    isSelectableItemAtIndex: (y) => !!o(_.getOrderedList()[y].element, `.${Kt.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (y) => {
      const k = _.getOrderedList(), w = o(k[y].element, `.${Kt.MENU_SELECTION_GROUP}`), ge = w == null ? void 0 : w.querySelector(`.${Kt.MENU_SELECTED_LIST_ITEM}`);
      return ge ? k.map((O) => O.element).indexOf(ge) : -1;
    }
  })), qe(ne(), "SMUIMenu:mount", h), h.init(), () => {
    h.destroy();
  }));
  function E(y) {
    h && h.handleKeydown(y);
  }
  function b(y) {
    p || (p = y.detail);
  }
  function M(y) {
    _ || t(4, _ = y.detail);
  }
  function S() {
    return f;
  }
  function T(y) {
    t(0, f = y);
  }
  function F(y) {
    h.setDefaultFocusState(y);
  }
  function L() {
    return h.getSelectedIndex();
  }
  function G() {
    return m;
  }
  function ne() {
    return m.getElement();
  }
  function P(y) {
    le[y ? "unshift" : "push"](() => {
      m = y, t(2, m);
    });
  }
  function D(y) {
    f = y, t(0, f);
  }
  const U = () => h && h.handleMenuSurfaceOpened(), x = (y) => h && h.handleItemAction(_.getOrderedList()[y.detail.index].element);
  return n.$$set = (y) => {
    e = j(j({}, e), Ke(y)), t(9, a = re(e, i)), "use" in y && t(10, c = y.use), "class" in y && t(1, d = y.class), "open" in y && t(0, f = y.open), "$$scope" in y && t(22, r = y.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    1024 && t(5, s = [u, ...c]);
  }, [
    f,
    d,
    m,
    h,
    _,
    s,
    E,
    b,
    M,
    a,
    c,
    S,
    T,
    F,
    L,
    G,
    ne,
    l,
    P,
    D,
    U,
    x,
    r
  ];
}
class Ls extends Ne {
  constructor(e) {
    super(), je(this, e, zr, qr, Ce, {
      use: 10,
      class: 1,
      open: 0,
      isOpen: 11,
      setOpen: 12,
      setDefaultFocusState: 13,
      getSelectedIndex: 14,
      getMenuSurface: 15,
      getElement: 16
    });
  }
  get use() {
    return this.$$.ctx[10];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get open() {
    return this.$$.ctx[0];
  }
  set open(e) {
    this.$$set({ open: e }), I();
  }
  get isOpen() {
    return this.$$.ctx[11];
  }
  get setOpen() {
    return this.$$.ctx[12];
  }
  get setDefaultFocusState() {
    return this.$$.ctx[13];
  }
  get getSelectedIndex() {
    return this.$$.ctx[14];
  }
  get getMenuSurface() {
    return this.$$.ctx[15];
  }
  get getElement() {
    return this.$$.ctx[16];
  }
}
Fe(
  Ls,
  { use: {}, class: {}, open: { type: "Boolean" } },
  ["default"],
  [
    "isOpen",
    "setOpen",
    "setDefaultFocusState",
    "getSelectedIndex",
    "getMenuSurface",
    "getElement"
  ],
  !0
);
function Wr(n) {
  let e, t, s, i, a, l, r, o;
  const u = (
    /*#slots*/
    n[8].default
  ), c = Le(
    u,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let d = [
    {
      class: s = X({
        [
          /*list$class*/
          n[2]
        ]: !0,
        "mdc-menu__selection-group": !0
      })
    },
    Ae(
      /*$$restProps*/
      n[5],
      "list$"
    )
  ], f = {};
  for (let p = 0; p < d.length; p += 1)
    f = j(f, d[p]);
  let m = [hn(
    /*$$restProps*/
    n[5],
    ["list$"]
  )], h = {};
  for (let p = 0; p < m.length; p += 1)
    h = j(h, m[p]);
  return {
    c() {
      e = J("li"), t = J("ul"), c && c.c(), fe(t, f), fe(e, h);
    },
    m(p, _) {
      Y(p, e, _), H(e, t), c && c.m(t, null), n[9](e), l = !0, r || (o = [
        ce(i = Xe.call(
          null,
          t,
          /*list$use*/
          n[1]
        )),
        ce(a = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(p, [_]) {
      c && c.p && (!l || _ & /*$$scope*/
      128) && Oe(
        c,
        u,
        p,
        /*$$scope*/
        p[7],
        l ? Me(
          u,
          /*$$scope*/
          p[7],
          _,
          null
        ) : Re(
          /*$$scope*/
          p[7]
        ),
        null
      ), fe(t, f = ee(d, [
        (!l || _ & /*list$class*/
        4 && s !== (s = X({
          [
            /*list$class*/
            p[2]
          ]: !0,
          "mdc-menu__selection-group": !0
        }))) && { class: s },
        _ & /*$$restProps*/
        32 && Ae(
          /*$$restProps*/
          p[5],
          "list$"
        )
      ])), i && Te(i.update) && _ & /*list$use*/
      2 && i.update.call(
        null,
        /*list$use*/
        p[1]
      ), fe(e, h = ee(m, [_ & /*$$restProps*/
      32 && hn(
        /*$$restProps*/
        p[5],
        ["list$"]
      )])), a && Te(a.update) && _ & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      l || (R(c, p), l = !0);
    },
    o(p) {
      N(c, p), l = !1;
    },
    d(p) {
      p && Q(e), c && c.d(p), n[9](null), r = !1, ze(o);
    }
  };
}
function Xr(n, e, t) {
  const s = ["use", "list$use", "list$class", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Je(ke());
  let { use: o = [] } = e, { list$use: u = [] } = e, { list$class: c = "" } = e, d;
  Ge("SMUI:list:graphic:menu-selection-group", !0);
  function f() {
    return d;
  }
  function m(h) {
    le[h ? "unshift" : "push"](() => {
      d = h, t(3, d);
    });
  }
  return n.$$set = (h) => {
    e = j(j({}, e), Ke(h)), t(5, i = re(e, s)), "use" in h && t(0, o = h.use), "list$use" in h && t(1, u = h.list$use), "list$class" in h && t(2, c = h.list$class), "$$scope" in h && t(7, l = h.$$scope);
  }, [
    o,
    u,
    c,
    d,
    r,
    i,
    f,
    l,
    a,
    m
  ];
}
class Kr extends Ne {
  constructor(e) {
    super(), je(this, e, Xr, Wr, Ce, {
      use: 0,
      list$use: 1,
      list$class: 2,
      getElement: 6
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get list$use() {
    return this.$$.ctx[1];
  }
  set list$use(e) {
    this.$$set({ list$use: e }), I();
  }
  get list$class() {
    return this.$$.ctx[2];
  }
  set list$class(e) {
    this.$$set({ list$class: e }), I();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Fe(Kr, { use: {}, list$use: {}, list$class: {} }, ["default"], ["getElement"], !0);
function Jr(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].default
  ), s = Le(
    t,
    n,
    /*$$scope*/
    n[12],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(i, a) {
      s && s.m(i, a), e = !0;
    },
    p(i, a) {
      s && s.p && (!e || a & /*$$scope*/
      4096) && Oe(
        s,
        t,
        i,
        /*$$scope*/
        i[12],
        e ? Me(
          t,
          /*$$scope*/
          i[12],
          a,
          null
        ) : Re(
          /*$$scope*/
          i[12]
        ),
        null
      );
    },
    i(i) {
      e || (R(s, i), e = !0);
    },
    o(i) {
      N(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function Zr(n) {
  let e, t, s;
  const i = [
    { tag: (
      /*tag*/
      n[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[5],
        .../*use*/
        n[0]
      ]
    },
    {
      class: X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-button__label": (
          /*context*/
          n[6] === "button"
        ),
        "mdc-fab__label": (
          /*context*/
          n[6] === "fab"
        ),
        "mdc-tab__text-label": (
          /*context*/
          n[6] === "tab"
        ),
        "mdc-image-list__label": (
          /*context*/
          n[6] === "image-list"
        ),
        "mdc-snackbar__label": (
          /*context*/
          n[6] === "snackbar"
        ),
        "mdc-banner__text": (
          /*context*/
          n[6] === "banner"
        ),
        "mdc-segmented-button__label": (
          /*context*/
          n[6] === "segmented-button"
        ),
        "mdc-data-table__pagination-rows-per-page-label": (
          /*context*/
          n[6] === "data-table:pagination"
        ),
        "mdc-data-table__header-cell-label": (
          /*context*/
          n[6] === "data-table:sortable-header-cell"
        )
      })
    },
    /*context*/
    n[6] === "snackbar" ? { "aria-atomic": "false" } : {},
    { tabindex: (
      /*tabindex*/
      n[7]
    ) },
    /*$$restProps*/
    n[8]
  ];
  var a = (
    /*component*/
    n[2]
  );
  function l(r, o) {
    let u = {
      $$slots: { default: [Jr] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491)
      u = ee(i, [
        o & /*tag*/
        8 && { tag: (
          /*tag*/
          r[3]
        ) },
        o & /*forwardEvents, use*/
        33 && {
          use: [
            /*forwardEvents*/
            r[5],
            .../*use*/
            r[0]
          ]
        },
        o & /*className, context*/
        66 && {
          class: X({
            [
              /*className*/
              r[1]
            ]: !0,
            "mdc-button__label": (
              /*context*/
              r[6] === "button"
            ),
            "mdc-fab__label": (
              /*context*/
              r[6] === "fab"
            ),
            "mdc-tab__text-label": (
              /*context*/
              r[6] === "tab"
            ),
            "mdc-image-list__label": (
              /*context*/
              r[6] === "image-list"
            ),
            "mdc-snackbar__label": (
              /*context*/
              r[6] === "snackbar"
            ),
            "mdc-banner__text": (
              /*context*/
              r[6] === "banner"
            ),
            "mdc-segmented-button__label": (
              /*context*/
              r[6] === "segmented-button"
            ),
            "mdc-data-table__pagination-rows-per-page-label": (
              /*context*/
              r[6] === "data-table:pagination"
            ),
            "mdc-data-table__header-cell-label": (
              /*context*/
              r[6] === "data-table:sortable-header-cell"
            )
          })
        },
        o & /*context*/
        64 && ie(
          /*context*/
          r[6] === "snackbar" ? { "aria-atomic": "false" } : {}
        ),
        o & /*tabindex*/
        128 && { tabindex: (
          /*tabindex*/
          r[7]
        ) },
        o & /*$$restProps*/
        256 && ie(
          /*$$restProps*/
          r[8]
        )
      ]);
    else
      for (let c = 0; c < i.length; c += 1)
        u = j(u, i[c]);
    return { props: u };
  }
  return a && (e = Et(a, l(n)), n[11](e)), {
    c() {
      e && ye(e.$$.fragment), t = ct();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), s = !0;
    },
    p(r, [o]) {
      if (o & /*component*/
      4 && a !== (a = /*component*/
      r[2])) {
        if (e) {
          et();
          const u = e;
          N(u.$$.fragment, 1, 0, () => {
            be(u, 1);
          }), tt();
        }
        a ? (e = Et(a, l(r, o)), r[11](e), ye(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? ee(i, [
          o & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          o & /*forwardEvents, use*/
          33 && {
            use: [
              /*forwardEvents*/
              r[5],
              .../*use*/
              r[0]
            ]
          },
          o & /*className, context*/
          66 && {
            class: X({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-button__label": (
                /*context*/
                r[6] === "button"
              ),
              "mdc-fab__label": (
                /*context*/
                r[6] === "fab"
              ),
              "mdc-tab__text-label": (
                /*context*/
                r[6] === "tab"
              ),
              "mdc-image-list__label": (
                /*context*/
                r[6] === "image-list"
              ),
              "mdc-snackbar__label": (
                /*context*/
                r[6] === "snackbar"
              ),
              "mdc-banner__text": (
                /*context*/
                r[6] === "banner"
              ),
              "mdc-segmented-button__label": (
                /*context*/
                r[6] === "segmented-button"
              ),
              "mdc-data-table__pagination-rows-per-page-label": (
                /*context*/
                r[6] === "data-table:pagination"
              ),
              "mdc-data-table__header-cell-label": (
                /*context*/
                r[6] === "data-table:sortable-header-cell"
              )
            })
          },
          o & /*context*/
          64 && ie(
            /*context*/
            r[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          o & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            r[7]
          ) },
          o & /*$$restProps*/
          256 && ie(
            /*$$restProps*/
            r[8]
          )
        ]) : {};
        o & /*$$scope*/
        4096 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      s || (e && R(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Q(t), n[11](null), e && be(e, r);
    }
  };
}
function Qr(n, e, t) {
  const s = ["use", "class", "component", "tag", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Je(ke());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: d = gt } = e, { tag: f = d === gt ? "span" : void 0 } = e;
  const m = Pe("SMUI:label:context"), h = Pe("SMUI:label:tabindex");
  function p() {
    return c.getElement();
  }
  function _(E) {
    le[E ? "unshift" : "push"](() => {
      c = E, t(4, c);
    });
  }
  return n.$$set = (E) => {
    e = j(j({}, e), Ke(E)), t(8, i = re(e, s)), "use" in E && t(0, o = E.use), "class" in E && t(1, u = E.class), "component" in E && t(2, d = E.component), "tag" in E && t(3, f = E.tag), "$$scope" in E && t(12, l = E.$$scope);
  }, [
    o,
    u,
    d,
    f,
    c,
    r,
    m,
    h,
    i,
    p,
    a,
    _,
    l
  ];
}
class Yr extends Ne {
  constructor(e) {
    super(), je(this, e, Qr, Zr, Ce, {
      use: 0,
      class: 1,
      component: 2,
      tag: 3,
      getElement: 9
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), I();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), I();
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
Fe(Yr, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function $r(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), s = Le(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(i, a) {
      s && s.m(i, a), e = !0;
    },
    p(i, a) {
      s && s.p && (!e || a & /*$$scope*/
      8192) && Oe(
        s,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? Me(
          t,
          /*$$scope*/
          i[13],
          a,
          null
        ) : Re(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (R(s, i), e = !0);
    },
    o(i) {
      N(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function ea(n) {
  let e, t, s;
  const i = [
    { tag: (
      /*tag*/
      n[4]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[6],
        .../*use*/
        n[0]
      ]
    },
    {
      class: X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-button__icon": (
          /*context*/
          n[8] === "button"
        ),
        "mdc-fab__icon": (
          /*context*/
          n[8] === "fab"
        ),
        "mdc-icon-button__icon": (
          /*context*/
          n[8] === "icon-button"
        ),
        "mdc-icon-button__icon--on": (
          /*context*/
          n[8] === "icon-button" && /*on*/
          n[2]
        ),
        "mdc-tab__icon": (
          /*context*/
          n[8] === "tab"
        ),
        "mdc-banner__icon": (
          /*context*/
          n[8] === "banner"
        ),
        "mdc-segmented-button__icon": (
          /*context*/
          n[8] === "segmented-button"
        )
      })
    },
    { "aria-hidden": "true" },
    /*svg*/
    n[7] ? { focusable: "false", tabindex: "-1" } : {},
    /*$$restProps*/
    n[9]
  ];
  var a = (
    /*component*/
    n[3]
  );
  function l(r, o) {
    let u = {
      $$slots: { default: [$r] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983)
      u = ee(i, [
        o & /*tag*/
        16 && { tag: (
          /*tag*/
          r[4]
        ) },
        o & /*forwardEvents, use*/
        65 && {
          use: [
            /*forwardEvents*/
            r[6],
            .../*use*/
            r[0]
          ]
        },
        o & /*className, context, on*/
        262 && {
          class: X({
            [
              /*className*/
              r[1]
            ]: !0,
            "mdc-button__icon": (
              /*context*/
              r[8] === "button"
            ),
            "mdc-fab__icon": (
              /*context*/
              r[8] === "fab"
            ),
            "mdc-icon-button__icon": (
              /*context*/
              r[8] === "icon-button"
            ),
            "mdc-icon-button__icon--on": (
              /*context*/
              r[8] === "icon-button" && /*on*/
              r[2]
            ),
            "mdc-tab__icon": (
              /*context*/
              r[8] === "tab"
            ),
            "mdc-banner__icon": (
              /*context*/
              r[8] === "banner"
            ),
            "mdc-segmented-button__icon": (
              /*context*/
              r[8] === "segmented-button"
            )
          })
        },
        i[3],
        o & /*svg*/
        128 && ie(
          /*svg*/
          r[7] ? { focusable: "false", tabindex: "-1" } : {}
        ),
        o & /*$$restProps*/
        512 && ie(
          /*$$restProps*/
          r[9]
        )
      ]);
    else
      for (let c = 0; c < i.length; c += 1)
        u = j(u, i[c]);
    return { props: u };
  }
  return a && (e = Et(a, l(n)), n[12](e)), {
    c() {
      e && ye(e.$$.fragment), t = ct();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), s = !0;
    },
    p(r, [o]) {
      if (o & /*component*/
      8 && a !== (a = /*component*/
      r[3])) {
        if (e) {
          et();
          const u = e;
          N(u.$$.fragment, 1, 0, () => {
            be(u, 1);
          }), tt();
        }
        a ? (e = Et(a, l(r, o)), r[12](e), ye(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
        983 ? ee(i, [
          o & /*tag*/
          16 && { tag: (
            /*tag*/
            r[4]
          ) },
          o & /*forwardEvents, use*/
          65 && {
            use: [
              /*forwardEvents*/
              r[6],
              .../*use*/
              r[0]
            ]
          },
          o & /*className, context, on*/
          262 && {
            class: X({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-button__icon": (
                /*context*/
                r[8] === "button"
              ),
              "mdc-fab__icon": (
                /*context*/
                r[8] === "fab"
              ),
              "mdc-icon-button__icon": (
                /*context*/
                r[8] === "icon-button"
              ),
              "mdc-icon-button__icon--on": (
                /*context*/
                r[8] === "icon-button" && /*on*/
                r[2]
              ),
              "mdc-tab__icon": (
                /*context*/
                r[8] === "tab"
              ),
              "mdc-banner__icon": (
                /*context*/
                r[8] === "banner"
              ),
              "mdc-segmented-button__icon": (
                /*context*/
                r[8] === "segmented-button"
              )
            })
          },
          i[3],
          o & /*svg*/
          128 && ie(
            /*svg*/
            r[7] ? { focusable: "false", tabindex: "-1" } : {}
          ),
          o & /*$$restProps*/
          512 && ie(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      s || (e && R(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Q(t), n[12](null), e && be(e, r);
    }
  };
}
function ta(n, e, t) {
  const s = ["use", "class", "on", "component", "tag", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Je(ke());
  let { use: o = [] } = e, { class: u = "" } = e, { on: c = !1 } = e, d, { component: f = gt } = e, { tag: m = f === gt ? "i" : void 0 } = e;
  const h = f === Ms, p = Pe("SMUI:icon:context");
  function _() {
    return d.getElement();
  }
  function E(b) {
    le[b ? "unshift" : "push"](() => {
      d = b, t(5, d);
    });
  }
  return n.$$set = (b) => {
    e = j(j({}, e), Ke(b)), t(9, i = re(e, s)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "on" in b && t(2, c = b.on), "component" in b && t(3, f = b.component), "tag" in b && t(4, m = b.tag), "$$scope" in b && t(13, l = b.$$scope);
  }, [
    o,
    u,
    c,
    f,
    m,
    d,
    r,
    h,
    p,
    i,
    _,
    a,
    E,
    l
  ];
}
class na extends Ne {
  constructor(e) {
    super(), je(this, e, ta, ea, Ce, {
      use: 0,
      class: 1,
      on: 2,
      component: 3,
      tag: 4,
      getElement: 10
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get on() {
    return this.$$.ctx[2];
  }
  set on(e) {
    this.$$set({ on: e }), I();
  }
  get component() {
    return this.$$.ctx[3];
  }
  set component(e) {
    this.$$set({ component: e }), I();
  }
  get tag() {
    return this.$$.ctx[4];
  }
  set tag(e) {
    this.$$set({ tag: e }), I();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
Fe(na, { use: {}, class: {}, on: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function sa(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, s, i = (
    /*tag*/
    n[1] && In(n)
  );
  return {
    c() {
      i && i.c(), t = ct();
    },
    m(a, l) {
      i && i.m(a, l), Y(a, t, l), s = !0;
    },
    p(a, l) {
      /*tag*/
      a[1] ? e ? Ce(
        e,
        /*tag*/
        a[1]
      ) ? (i.d(1), i = In(a), e = /*tag*/
      a[1], i.c(), i.m(t.parentNode, t)) : i.p(a, l) : (i = In(a), e = /*tag*/
      a[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      a[1]);
    },
    i(a) {
      s || (R(i, a), s = !0);
    },
    o(a) {
      N(i, a), s = !1;
    },
    d(a) {
      a && Q(t), i && i.d(a);
    }
  };
}
function ia(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, s = (
    /*tag*/
    n[1] && bn(n)
  );
  return {
    c() {
      s && s.c(), t = ct();
    },
    m(i, a) {
      s && s.m(i, a), Y(i, t, a);
    },
    p(i, a) {
      /*tag*/
      i[1] ? e ? Ce(
        e,
        /*tag*/
        i[1]
      ) ? (s.d(1), s = bn(i), e = /*tag*/
      i[1], s.c(), s.m(t.parentNode, t)) : s.p(i, a) : (s = bn(i), e = /*tag*/
      i[1], s.c(), s.m(t.parentNode, t)) : e && (s.d(1), s = null, e = /*tag*/
      i[1]);
    },
    i: nt,
    o: nt,
    d(i) {
      i && Q(t), s && s.d(i);
    }
  };
}
function ra(n) {
  let e, t, s, i, a;
  const l = (
    /*#slots*/
    n[8].default
  ), r = Le(
    l,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let o = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = j(u, o[c]);
  return {
    c() {
      e = Qt("svg"), r && r.c(), dn(e, u);
    },
    m(c, d) {
      Y(c, e, d), r && r.m(e, null), n[9](e), s = !0, i || (a = [
        ce(t = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, d) {
      r && r.p && (!s || d & /*$$scope*/
      128) && Oe(
        r,
        l,
        c,
        /*$$scope*/
        c[7],
        s ? Me(
          l,
          /*$$scope*/
          c[7],
          d,
          null
        ) : Re(
          /*$$scope*/
          c[7]
        ),
        null
      ), dn(e, u = ee(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && Te(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (R(r, c), s = !0);
    },
    o(c) {
      N(r, c), s = !1;
    },
    d(c) {
      c && Q(e), r && r.d(c), n[9](null), i = !1, ze(a);
    }
  };
}
function In(n) {
  let e, t, s, i, a;
  const l = (
    /*#slots*/
    n[8].default
  ), r = Le(
    l,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let o = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = j(u, o[c]);
  return {
    c() {
      e = J(
        /*tag*/
        n[1]
      ), r && r.c(), fn(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, d) {
      Y(c, e, d), r && r.m(e, null), n[11](e), s = !0, i || (a = [
        ce(t = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, d) {
      r && r.p && (!s || d & /*$$scope*/
      128) && Oe(
        r,
        l,
        c,
        /*$$scope*/
        c[7],
        s ? Me(
          l,
          /*$$scope*/
          c[7],
          d,
          null
        ) : Re(
          /*$$scope*/
          c[7]
        ),
        null
      ), fn(
        /*tag*/
        c[1]
      )(e, u = ee(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && Te(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (R(r, c), s = !0);
    },
    o(c) {
      N(r, c), s = !1;
    },
    d(c) {
      c && Q(e), r && r.d(c), n[11](null), i = !1, ze(a);
    }
  };
}
function bn(n) {
  let e, t, s, i, a = [
    /*$$restProps*/
    n[5]
  ], l = {};
  for (let r = 0; r < a.length; r += 1)
    l = j(l, a[r]);
  return {
    c() {
      e = J(
        /*tag*/
        n[1]
      ), fn(
        /*tag*/
        n[1]
      )(e, l);
    },
    m(r, o) {
      Y(r, e, o), n[10](e), s || (i = [
        ce(t = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], s = !0);
    },
    p(r, o) {
      fn(
        /*tag*/
        r[1]
      )(e, l = ee(a, [o & /*$$restProps*/
      32 && /*$$restProps*/
      r[5]])), t && Te(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        r[0]
      );
    },
    d(r) {
      r && Q(e), n[10](null), s = !1, ze(i);
    }
  };
}
function aa(n) {
  let e, t, s, i;
  const a = [ra, ia, sa], l = [];
  function r(o, u) {
    return (
      /*tag*/
      o[1] === "svg" ? 0 : (
        /*selfClosing*/
        o[3] ? 1 : 2
      )
    );
  }
  return e = r(n), t = l[e] = a[e](n), {
    c() {
      t.c(), s = ct();
    },
    m(o, u) {
      l[e].m(o, u), Y(o, s, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = r(o), e === c ? l[e].p(o, u) : (et(), N(l[c], 1, 1, () => {
        l[c] = null;
      }), tt(), t = l[e], t ? t.p(o, u) : (t = l[e] = a[e](o), t.c()), R(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      i || (R(t), i = !0);
    },
    o(o) {
      N(t), i = !1;
    },
    d(o) {
      o && Q(s), l[e].d(o);
    }
  };
}
function la(n, e, t) {
  let s;
  const i = ["use", "tag", "getElement"];
  let a = re(e, i), { $$slots: l = {}, $$scope: r } = e, { use: o = [] } = e, { tag: u } = e;
  const c = Je(ke());
  let d;
  function f() {
    return d;
  }
  function m(_) {
    le[_ ? "unshift" : "push"](() => {
      d = _, t(2, d);
    });
  }
  function h(_) {
    le[_ ? "unshift" : "push"](() => {
      d = _, t(2, d);
    });
  }
  function p(_) {
    le[_ ? "unshift" : "push"](() => {
      d = _, t(2, d);
    });
  }
  return n.$$set = (_) => {
    e = j(j({}, e), Ke(_)), t(5, a = re(e, i)), "use" in _ && t(0, o = _.use), "tag" in _ && t(1, u = _.tag), "$$scope" in _ && t(7, r = _.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*tag*/
    2 && t(3, s = [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ].indexOf(u) > -1);
  }, [
    o,
    u,
    d,
    s,
    c,
    a,
    f,
    r,
    l,
    m,
    h,
    p
  ];
}
class gt extends Ne {
  constructor(e) {
    super(), je(this, e, la, aa, Ce, { use: 0, tag: 1, getElement: 6 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get tag() {
    return this.$$.ctx[1];
  }
  set tag(e) {
    this.$$set({ tag: e }), I();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Fe(gt, { use: {}, tag: {} }, ["default"], ["getElement"], !0);
function oa(n) {
  let e, t, s, i, a;
  const l = (
    /*#slots*/
    n[6].default
  ), r = Le(
    l,
    n,
    /*$$scope*/
    n[5],
    null
  );
  let o = [
    /*$$restProps*/
    n[3]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = j(u, o[c]);
  return {
    c() {
      e = Qt("svg"), r && r.c(), dn(e, u);
    },
    m(c, d) {
      Y(c, e, d), r && r.m(e, null), n[7](e), s = !0, i || (a = [
        ce(t = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[2].call(null, e)
        )
      ], i = !0);
    },
    p(c, [d]) {
      r && r.p && (!s || d & /*$$scope*/
      32) && Oe(
        r,
        l,
        c,
        /*$$scope*/
        c[5],
        s ? Me(
          l,
          /*$$scope*/
          c[5],
          d,
          null
        ) : Re(
          /*$$scope*/
          c[5]
        ),
        null
      ), dn(e, u = ee(o, [d & /*$$restProps*/
      8 && /*$$restProps*/
      c[3]])), t && Te(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (R(r, c), s = !0);
    },
    o(c) {
      N(r, c), s = !1;
    },
    d(c) {
      c && Q(e), r && r.d(c), n[7](null), i = !1, ze(a);
    }
  };
}
function ua(n, e, t) {
  const s = ["use", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let { use: r = [] } = e;
  const o = Je(ke());
  let u;
  function c() {
    return u;
  }
  function d(f) {
    le[f ? "unshift" : "push"](() => {
      u = f, t(1, u);
    });
  }
  return n.$$set = (f) => {
    e = j(j({}, e), Ke(f)), t(3, i = re(e, s)), "use" in f && t(0, r = f.use), "$$scope" in f && t(5, l = f.$$scope);
  }, [
    r,
    u,
    o,
    i,
    c,
    l,
    a,
    d
  ];
}
class Ms extends Ne {
  constructor(e) {
    super(), je(this, e, ua, oa, Ce, { use: 0, getElement: 4 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
Fe(Ms, { use: {} }, ["default"], ["getElement"], !0);
function ca(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), s = Le(
    t,
    n,
    /*$$scope*/
    n[3],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(i, a) {
      s && s.m(i, a), e = !0;
    },
    p(i, [a]) {
      s && s.p && (!e || a & /*$$scope*/
      8) && Oe(
        s,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? Me(
          t,
          /*$$scope*/
          i[3],
          a,
          null
        ) : Re(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (R(s, i), e = !0);
    },
    o(i) {
      N(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function da(n, e, t) {
  let s, { $$slots: i = {}, $$scope: a } = e, { key: l } = e, { value: r } = e;
  const o = Ln(r);
  return $t(n, o, (u) => t(5, s = u)), Ge(l, o), Ht(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, l = u.key), "value" in u && t(2, r = u.value), "$$scope" in u && t(3, a = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && cn(o, s = r, s);
  }, [o, l, r, a, i];
}
class fa extends Ne {
  constructor(e) {
    super(), je(this, e, da, ca, Ce, { key: 1, value: 2 });
  }
  get key() {
    return this.$$.ctx[1];
  }
  set key(e) {
    this.$$set({ key: e }), I();
  }
  get value() {
    return this.$$.ctx[2];
  }
  set value(e) {
    this.$$set({ value: e }), I();
  }
}
Fe(fa, { key: {}, value: {} }, ["default"], [], !0);
function ha(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), s = Le(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(i, a) {
      s && s.m(i, a), e = !0;
    },
    p(i, a) {
      s && s.p && (!e || a & /*$$scope*/
      8192) && Oe(
        s,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? Me(
          t,
          /*$$scope*/
          i[13],
          a,
          null
        ) : Re(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (R(s, i), e = !0);
    },
    o(i) {
      N(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function ma(n) {
  let e, t, s;
  const i = [
    { tag: (
      /*tag*/
      n[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[8],
        .../*use*/
        n[0]
      ]
    },
    {
      class: X({
        [
          /*className*/
          n[1]
        ]: !0,
        [
          /*smuiClass*/
          n[6]
        ]: !0,
        .../*smuiClassMap*/
        n[5]
      })
    },
    /*props*/
    n[7],
    /*$$restProps*/
    n[9]
  ];
  var a = (
    /*component*/
    n[2]
  );
  function l(r, o) {
    let u = {
      $$slots: { default: [ha] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003)
      u = ee(i, [
        o & /*tag*/
        8 && { tag: (
          /*tag*/
          r[3]
        ) },
        o & /*forwardEvents, use*/
        257 && {
          use: [
            /*forwardEvents*/
            r[8],
            .../*use*/
            r[0]
          ]
        },
        o & /*className, smuiClass, smuiClassMap*/
        98 && {
          class: X({
            [
              /*className*/
              r[1]
            ]: !0,
            [
              /*smuiClass*/
              r[6]
            ]: !0,
            .../*smuiClassMap*/
            r[5]
          })
        },
        o & /*props*/
        128 && ie(
          /*props*/
          r[7]
        ),
        o & /*$$restProps*/
        512 && ie(
          /*$$restProps*/
          r[9]
        )
      ]);
    else
      for (let c = 0; c < i.length; c += 1)
        u = j(u, i[c]);
    return { props: u };
  }
  return a && (e = Et(a, l(n)), n[12](e)), {
    c() {
      e && ye(e.$$.fragment), t = ct();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), s = !0;
    },
    p(r, [o]) {
      if (o & /*component*/
      4 && a !== (a = /*component*/
      r[2])) {
        if (e) {
          et();
          const u = e;
          N(u.$$.fragment, 1, 0, () => {
            be(u, 1);
          }), tt();
        }
        a ? (e = Et(a, l(r, o)), r[12](e), ye(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? ee(i, [
          o & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          o & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              r[8],
              .../*use*/
              r[0]
            ]
          },
          o & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: X({
              [
                /*className*/
                r[1]
              ]: !0,
              [
                /*smuiClass*/
                r[6]
              ]: !0,
              .../*smuiClassMap*/
              r[5]
            })
          },
          o & /*props*/
          128 && ie(
            /*props*/
            r[7]
          ),
          o & /*$$restProps*/
          512 && ie(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      s || (e && R(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Q(t), n[12](null), e && be(e, r);
    }
  };
}
const yt = {
  component: gt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function pa(n, e, t) {
  const s = ["use", "class", "component", "tag", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e, { use: r = [] } = e, { class: o = "" } = e, u;
  const c = yt.class, d = {}, f = [], m = yt.contexts, h = yt.props;
  let { component: p = yt.component } = e, { tag: _ = p === gt ? yt.tag : void 0 } = e;
  Object.entries(yt.classMap).forEach(([S, T]) => {
    const F = Pe(T);
    F && "subscribe" in F && f.push(F.subscribe((L) => {
      t(5, d[S] = L, d);
    }));
  });
  const E = Je(ke());
  for (let S in m)
    m.hasOwnProperty(S) && Ge(S, m[S]);
  Ht(() => {
    for (const S of f)
      S();
  });
  function b() {
    return u.getElement();
  }
  function M(S) {
    le[S ? "unshift" : "push"](() => {
      u = S, t(4, u);
    });
  }
  return n.$$set = (S) => {
    e = j(j({}, e), Ke(S)), t(9, i = re(e, s)), "use" in S && t(0, r = S.use), "class" in S && t(1, o = S.class), "component" in S && t(2, p = S.component), "tag" in S && t(3, _ = S.tag), "$$scope" in S && t(13, l = S.$$scope);
  }, [
    r,
    o,
    p,
    _,
    u,
    d,
    c,
    h,
    E,
    i,
    b,
    a,
    M,
    l
  ];
}
class Os extends Ne {
  constructor(e) {
    super(), je(this, e, pa, ma, Ce, {
      use: 0,
      class: 1,
      component: 2,
      tag: 3,
      getElement: 10
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get component() {
    return this.$$.ctx[2];
  }
  set component(e) {
    this.$$set({ component: e }), I();
  }
  get tag() {
    return this.$$.ctx[3];
  }
  set tag(e) {
    this.$$set({ tag: e }), I();
  }
  get getElement() {
    return this.$$.ctx[10];
  }
}
Fe(Os, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
const Kn = Object.assign({}, yt);
function xt(n) {
  return new Proxy(Os, {
    construct: function(e, t) {
      return Object.assign(yt, Kn, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(yt, Kn, n), e[t];
    }
  });
}
function ga(n) {
  let e;
  const t = (
    /*#slots*/
    n[42].default
  ), s = Le(
    t,
    n,
    /*$$scope*/
    n[44],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(i, a) {
      s && s.m(i, a), e = !0;
    },
    p(i, a) {
      s && s.p && (!e || a[1] & /*$$scope*/
      8192) && Oe(
        s,
        t,
        i,
        /*$$scope*/
        i[44],
        e ? Me(
          t,
          /*$$scope*/
          i[44],
          a,
          null
        ) : Re(
          /*$$scope*/
          i[44]
        ),
        null
      );
    },
    i(i) {
      e || (R(s, i), e = !0);
    },
    o(i) {
      N(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function _a(n) {
  let e, t, s;
  const i = [
    { tag: (
      /*tag*/
      n[13]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[16],
        .../*use*/
        n[0]
      ]
    },
    {
      class: X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-deprecated-list": !0,
        "mdc-deprecated-list--non-interactive": (
          /*nonInteractive*/
          n[2]
        ),
        "mdc-deprecated-list--dense": (
          /*dense*/
          n[3]
        ),
        "mdc-deprecated-list--textual-list": (
          /*textualList*/
          n[4]
        ),
        "mdc-deprecated-list--avatar-list": (
          /*avatarList*/
          n[5] || /*selectionDialog*/
          n[17]
        ),
        "mdc-deprecated-list--icon-list": (
          /*iconList*/
          n[6]
        ),
        "mdc-deprecated-list--image-list": (
          /*imageList*/
          n[7]
        ),
        "mdc-deprecated-list--thumbnail-list": (
          /*thumbnailList*/
          n[8]
        ),
        "mdc-deprecated-list--video-list": (
          /*videoList*/
          n[9]
        ),
        "mdc-deprecated-list--two-line": (
          /*twoLine*/
          n[10]
        ),
        "smui-list--three-line": (
          /*threeLine*/
          n[11] && !/*twoLine*/
          n[10]
        )
      })
    },
    { role: (
      /*role*/
      n[15]
    ) },
    /*$$restProps*/
    n[25]
  ];
  var a = (
    /*component*/
    n[12]
  );
  function l(r, o) {
    let u = {
      $$slots: { default: [ga] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095)
      u = ee(i, [
        o[0] & /*tag*/
        8192 && { tag: (
          /*tag*/
          r[13]
        ) },
        o[0] & /*forwardEvents, use*/
        65537 && {
          use: [
            /*forwardEvents*/
            r[16],
            .../*use*/
            r[0]
          ]
        },
        o[0] & /*className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine*/
        135166 && {
          class: X({
            [
              /*className*/
              r[1]
            ]: !0,
            "mdc-deprecated-list": !0,
            "mdc-deprecated-list--non-interactive": (
              /*nonInteractive*/
              r[2]
            ),
            "mdc-deprecated-list--dense": (
              /*dense*/
              r[3]
            ),
            "mdc-deprecated-list--textual-list": (
              /*textualList*/
              r[4]
            ),
            "mdc-deprecated-list--avatar-list": (
              /*avatarList*/
              r[5] || /*selectionDialog*/
              r[17]
            ),
            "mdc-deprecated-list--icon-list": (
              /*iconList*/
              r[6]
            ),
            "mdc-deprecated-list--image-list": (
              /*imageList*/
              r[7]
            ),
            "mdc-deprecated-list--thumbnail-list": (
              /*thumbnailList*/
              r[8]
            ),
            "mdc-deprecated-list--video-list": (
              /*videoList*/
              r[9]
            ),
            "mdc-deprecated-list--two-line": (
              /*twoLine*/
              r[10]
            ),
            "smui-list--three-line": (
              /*threeLine*/
              r[11] && !/*twoLine*/
              r[10]
            )
          })
        },
        o[0] & /*role*/
        32768 && { role: (
          /*role*/
          r[15]
        ) },
        o[0] & /*$$restProps*/
        33554432 && ie(
          /*$$restProps*/
          r[25]
        )
      ]);
    else
      for (let c = 0; c < i.length; c += 1)
        u = j(u, i[c]);
    return { props: u };
  }
  return a && (e = Et(a, l(n)), n[43](e), e.$on(
    "keydown",
    /*handleKeydown*/
    n[20]
  ), e.$on(
    "focusin",
    /*handleFocusin*/
    n[21]
  ), e.$on(
    "focusout",
    /*handleFocusout*/
    n[22]
  ), e.$on(
    "click",
    /*handleClick*/
    n[23]
  ), e.$on(
    "SMUIListItem:mount",
    /*handleItemMount*/
    n[18]
  ), e.$on(
    "SMUIListItem:unmount",
    /*handleItemUnmount*/
    n[19]
  ), e.$on(
    "SMUI:action",
    /*handleAction*/
    n[24]
  )), {
    c() {
      e && ye(e.$$.fragment), t = ct();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), s = !0;
    },
    p(r, o) {
      if (o[0] & /*component*/
      4096 && a !== (a = /*component*/
      r[12])) {
        if (e) {
          et();
          const u = e;
          N(u.$$.fragment, 1, 0, () => {
            be(u, 1);
          }), tt();
        }
        a ? (e = Et(a, l(r, o)), r[43](e), e.$on(
          "keydown",
          /*handleKeydown*/
          r[20]
        ), e.$on(
          "focusin",
          /*handleFocusin*/
          r[21]
        ), e.$on(
          "focusout",
          /*handleFocusout*/
          r[22]
        ), e.$on(
          "click",
          /*handleClick*/
          r[23]
        ), e.$on(
          "SMUIListItem:mount",
          /*handleItemMount*/
          r[18]
        ), e.$on(
          "SMUIListItem:unmount",
          /*handleItemUnmount*/
          r[19]
        ), e.$on(
          "SMUI:action",
          /*handleAction*/
          r[24]
        ), ye(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
        33796095 ? ee(i, [
          o[0] & /*tag*/
          8192 && { tag: (
            /*tag*/
            r[13]
          ) },
          o[0] & /*forwardEvents, use*/
          65537 && {
            use: [
              /*forwardEvents*/
              r[16],
              .../*use*/
              r[0]
            ]
          },
          o[0] & /*className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine*/
          135166 && {
            class: X({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-deprecated-list": !0,
              "mdc-deprecated-list--non-interactive": (
                /*nonInteractive*/
                r[2]
              ),
              "mdc-deprecated-list--dense": (
                /*dense*/
                r[3]
              ),
              "mdc-deprecated-list--textual-list": (
                /*textualList*/
                r[4]
              ),
              "mdc-deprecated-list--avatar-list": (
                /*avatarList*/
                r[5] || /*selectionDialog*/
                r[17]
              ),
              "mdc-deprecated-list--icon-list": (
                /*iconList*/
                r[6]
              ),
              "mdc-deprecated-list--image-list": (
                /*imageList*/
                r[7]
              ),
              "mdc-deprecated-list--thumbnail-list": (
                /*thumbnailList*/
                r[8]
              ),
              "mdc-deprecated-list--video-list": (
                /*videoList*/
                r[9]
              ),
              "mdc-deprecated-list--two-line": (
                /*twoLine*/
                r[10]
              ),
              "smui-list--three-line": (
                /*threeLine*/
                r[11] && !/*twoLine*/
                r[10]
              )
            })
          },
          o[0] & /*role*/
          32768 && { role: (
            /*role*/
            r[15]
          ) },
          o[0] & /*$$restProps*/
          33554432 && ie(
            /*$$restProps*/
            r[25]
          )
        ]) : {};
        o[1] & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      s || (e && R(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Q(t), n[43](null), e && be(e, r);
    }
  };
}
function Ia(n, e, t) {
  const s = [
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "disabledItemsFocusable",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "tag",
    "layout",
    "setEnabled",
    "getTypeaheadInProgress",
    "getSelectedIndex",
    "getFocusedItemIndex",
    "focusItemAtIndex",
    "getElement"
  ];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  var r;
  const { closest: o, matches: u } = On, c = Je(ke());
  let { use: d = [] } = e, { class: f = "" } = e, { nonInteractive: m = !1 } = e, { dense: h = !1 } = e, { textualList: p = !1 } = e, { avatarList: _ = !1 } = e, { iconList: E = !1 } = e, { imageList: b = !1 } = e, { thumbnailList: M = !1 } = e, { videoList: S = !1 } = e, { twoLine: T = !1 } = e, { threeLine: F = !1 } = e, { vertical: L = !0 } = e, { wrapFocus: G = (r = Pe("SMUI:list:wrapFocus")) !== null && r !== void 0 ? r : !1 } = e, { singleSelection: ne = !1 } = e, { disabledItemsFocusable: P = !1 } = e, { selectedIndex: D = -1 } = e, { radioList: U = !1 } = e, { checkList: x = !1 } = e, { hasTypeahead: y = !1 } = e, k, w, ge = [], O = Pe("SMUI:list:role"), ue = Pe("SMUI:list:nav");
  const Ee = /* @__PURE__ */ new WeakMap();
  let We = Pe("SMUI:dialog:selection"), ae = Pe("SMUI:addLayoutListener"), st, { component: rt = gt } = e, { tag: V = rt === gt ? ue ? "nav" : "ul" : void 0 } = e;
  Ge("SMUI:list:nonInteractive", m), Ge("SMUI:separator:context", "list"), O || (ne ? (O = "listbox", Ge("SMUI:list:item:role", "option")) : U ? (O = "radiogroup", Ge("SMUI:list:item:role", "radio")) : x ? (O = "group", Ge("SMUI:list:item:role", "checkbox")) : (O = "list", Ge("SMUI:list:item:role", void 0))), ae && (st = ae(It)), vt(() => {
    t(41, w = new gr({
      addClassForElementIndex: A,
      focusItemAtIndex: B,
      getAttributeForElementIndex: (z, q) => {
        var ve, kt;
        return (kt = (ve = _e()[z]) === null || ve === void 0 ? void 0 : ve.getAttr(q)) !== null && kt !== void 0 ? kt : null;
      },
      getFocusedElementIndex: () => document.activeElement ? _e().map((z) => z.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => ge.length,
      getPrimaryTextAtIndex: ft,
      hasCheckboxAtIndex: (z) => {
        var q, ve;
        return (ve = (q = _e()[z]) === null || q === void 0 ? void 0 : q.hasCheckbox) !== null && ve !== void 0 ? ve : !1;
      },
      hasRadioAtIndex: (z) => {
        var q, ve;
        return (ve = (q = _e()[z]) === null || q === void 0 ? void 0 : q.hasRadio) !== null && ve !== void 0 ? ve : !1;
      },
      isCheckboxCheckedAtIndex: (z) => {
        var q;
        const ve = _e()[z];
        return (q = (ve == null ? void 0 : ve.hasCheckbox) && ve.checked) !== null && q !== void 0 ? q : !1;
      },
      isFocusInsideList: () => k != null && Ye() !== document.activeElement && Ye().contains(document.activeElement),
      isRootFocused: () => k != null && document.activeElement === Ye(),
      listItemAtIndexHasClass: ut,
      notifyAction: (z) => {
        t(26, D = z), k != null && qe(Ye(), "SMUIList:action", { index: z }, void 0, !0);
      },
      notifySelectionChange: (z) => {
        k != null && qe(Ye(), "SMUIList:selectionChange", { changedIndices: z });
      },
      removeClassForElementIndex: Z,
      setAttributeForElementIndex: $,
      setCheckedCheckboxOrRadioAtIndex: (z, q) => {
        _e()[z].checked = q;
      },
      setTabIndexForListItemChildren: (z, q) => {
        const ve = _e()[z], kt = "button:not(:disabled), a";
        Array.prototype.forEach.call(ve.element.querySelectorAll(kt), (pn) => {
          pn.setAttribute("tabindex", q);
        });
      }
    }));
    const v = {
      get element() {
        return Ye();
      },
      get items() {
        return ge;
      },
      get typeaheadInProgress() {
        return w.isTypeaheadInProgress();
      },
      typeaheadMatchItem(z, q) {
        return w.typeaheadMatchItem(
          z,
          q,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: _e,
      focusItemAtIndex: B,
      addClassForElementIndex: A,
      removeClassForElementIndex: Z,
      setAttributeForElementIndex: $,
      removeAttributeForElementIndex: _t,
      getAttributeFromElementIndex: Ze,
      getPrimaryTextAtIndex: ft
    };
    return qe(Ye(), "SMUIList:mount", v), w.init(), w.layout(), () => {
      w.destroy();
    };
  }), Ht(() => {
    st && st();
  });
  function me(v) {
    ge.push(v.detail), Ee.set(v.detail.element, v.detail), ne && v.detail.selected && t(26, D = ht(v.detail.element)), v.stopPropagation();
  }
  function he(v) {
    var z;
    const q = (z = v.detail && ge.indexOf(v.detail)) !== null && z !== void 0 ? z : -1;
    q !== -1 && (ge.splice(q, 1), ge = ge, Ee.delete(v.detail.element)), v.stopPropagation();
  }
  function de(v) {
    w && v.target && w.handleKeydown(v, v.target.classList.contains("mdc-deprecated-list-item"), ht(v.target));
  }
  function we(v) {
    w && v.target && w.handleFocusIn(ht(v.target));
  }
  function C(v) {
    w && v.target && w.handleFocusOut(ht(v.target));
  }
  function se(v) {
    w && v.target && w.handleClick(ht(v.target), !u(v.target, 'input[type="checkbox"], input[type="radio"]'), v);
  }
  function Ue(v) {
    if (U || x) {
      const z = ht(v.target);
      if (z !== -1) {
        const q = _e()[z];
        q && (U && !q.checked || x) && (u(v.detail.target, 'input[type="checkbox"], input[type="radio"]') || (q.checked = !q.checked), q.activateRipple(), window.requestAnimationFrame(() => {
          q.deactivateRipple();
        }));
      }
    }
  }
  function _e() {
    return k == null ? [] : [...Ye().children].map((v) => Ee.get(v)).filter((v) => v && v._smui_list_item_accessor);
  }
  function ut(v, z) {
    var q;
    const ve = _e()[v];
    return (q = ve && ve.hasClass(z)) !== null && q !== void 0 ? q : !1;
  }
  function A(v, z) {
    const q = _e()[v];
    q && q.addClass(z);
  }
  function Z(v, z) {
    const q = _e()[v];
    q && q.removeClass(z);
  }
  function $(v, z, q) {
    const ve = _e()[v];
    ve && ve.addAttr(z, q);
  }
  function _t(v, z) {
    const q = _e()[v];
    q && q.removeAttr(z);
  }
  function Ze(v, z) {
    const q = _e()[v];
    return q ? q.getAttr(z) : null;
  }
  function ft(v) {
    var z;
    const q = _e()[v];
    return (z = q && q.getPrimaryText()) !== null && z !== void 0 ? z : "";
  }
  function ht(v) {
    const z = o(v, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return z && u(z, ".mdc-deprecated-list-item") ? _e().map((q) => q == null ? void 0 : q.element).indexOf(z) : -1;
  }
  function It() {
    return w.layout();
  }
  function Qe(v, z) {
    return w.setEnabled(v, z);
  }
  function it() {
    return w.isTypeaheadInProgress();
  }
  function pe() {
    return w.getSelectedIndex();
  }
  function K() {
    return w.getFocusedItemIndex();
  }
  function B(v) {
    const z = _e()[v];
    z && "focus" in z.element && z.element.focus();
  }
  function Ye() {
    return k.getElement();
  }
  function mn(v) {
    le[v ? "unshift" : "push"](() => {
      k = v, t(14, k);
    });
  }
  return n.$$set = (v) => {
    e = j(j({}, e), Ke(v)), t(25, i = re(e, s)), "use" in v && t(0, d = v.use), "class" in v && t(1, f = v.class), "nonInteractive" in v && t(2, m = v.nonInteractive), "dense" in v && t(3, h = v.dense), "textualList" in v && t(4, p = v.textualList), "avatarList" in v && t(5, _ = v.avatarList), "iconList" in v && t(6, E = v.iconList), "imageList" in v && t(7, b = v.imageList), "thumbnailList" in v && t(8, M = v.thumbnailList), "videoList" in v && t(9, S = v.videoList), "twoLine" in v && t(10, T = v.twoLine), "threeLine" in v && t(11, F = v.threeLine), "vertical" in v && t(27, L = v.vertical), "wrapFocus" in v && t(28, G = v.wrapFocus), "singleSelection" in v && t(29, ne = v.singleSelection), "disabledItemsFocusable" in v && t(30, P = v.disabledItemsFocusable), "selectedIndex" in v && t(26, D = v.selectedIndex), "radioList" in v && t(31, U = v.radioList), "checkList" in v && t(32, x = v.checkList), "hasTypeahead" in v && t(33, y = v.hasTypeahead), "component" in v && t(12, rt = v.component), "tag" in v && t(13, V = v.tag), "$$scope" in v && t(44, l = v.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*vertical*/
    134217728 | n.$$.dirty[1] & /*instance*/
    1024 && w && w.setVerticalOrientation(L), n.$$.dirty[0] & /*wrapFocus*/
    268435456 | n.$$.dirty[1] & /*instance*/
    1024 && w && w.setWrapFocus(G), n.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && w && w.setHasTypeahead(y), n.$$.dirty[0] & /*singleSelection*/
    536870912 | n.$$.dirty[1] & /*instance*/
    1024 && w && w.setSingleSelection(ne), n.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | n.$$.dirty[1] & /*instance*/
    1024 && w && w.setDisabledItemsFocusable(P), n.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | n.$$.dirty[1] & /*instance*/
    1024 && w && ne && pe() !== D && w.setSelectedIndex(D);
  }, [
    d,
    f,
    m,
    h,
    p,
    _,
    E,
    b,
    M,
    S,
    T,
    F,
    rt,
    V,
    k,
    O,
    c,
    We,
    me,
    he,
    de,
    we,
    C,
    se,
    Ue,
    i,
    D,
    L,
    G,
    ne,
    P,
    U,
    x,
    y,
    It,
    Qe,
    it,
    pe,
    K,
    B,
    Ye,
    w,
    a,
    mn,
    l
  ];
}
class Rs extends Ne {
  constructor(e) {
    super(), je(
      this,
      e,
      Ia,
      _a,
      Ce,
      {
        use: 0,
        class: 1,
        nonInteractive: 2,
        dense: 3,
        textualList: 4,
        avatarList: 5,
        iconList: 6,
        imageList: 7,
        thumbnailList: 8,
        videoList: 9,
        twoLine: 10,
        threeLine: 11,
        vertical: 27,
        wrapFocus: 28,
        singleSelection: 29,
        disabledItemsFocusable: 30,
        selectedIndex: 26,
        radioList: 31,
        checkList: 32,
        hasTypeahead: 33,
        component: 12,
        tag: 13,
        layout: 34,
        setEnabled: 35,
        getTypeaheadInProgress: 36,
        getSelectedIndex: 37,
        getFocusedItemIndex: 38,
        focusItemAtIndex: 39,
        getElement: 40
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get nonInteractive() {
    return this.$$.ctx[2];
  }
  set nonInteractive(e) {
    this.$$set({ nonInteractive: e }), I();
  }
  get dense() {
    return this.$$.ctx[3];
  }
  set dense(e) {
    this.$$set({ dense: e }), I();
  }
  get textualList() {
    return this.$$.ctx[4];
  }
  set textualList(e) {
    this.$$set({ textualList: e }), I();
  }
  get avatarList() {
    return this.$$.ctx[5];
  }
  set avatarList(e) {
    this.$$set({ avatarList: e }), I();
  }
  get iconList() {
    return this.$$.ctx[6];
  }
  set iconList(e) {
    this.$$set({ iconList: e }), I();
  }
  get imageList() {
    return this.$$.ctx[7];
  }
  set imageList(e) {
    this.$$set({ imageList: e }), I();
  }
  get thumbnailList() {
    return this.$$.ctx[8];
  }
  set thumbnailList(e) {
    this.$$set({ thumbnailList: e }), I();
  }
  get videoList() {
    return this.$$.ctx[9];
  }
  set videoList(e) {
    this.$$set({ videoList: e }), I();
  }
  get twoLine() {
    return this.$$.ctx[10];
  }
  set twoLine(e) {
    this.$$set({ twoLine: e }), I();
  }
  get threeLine() {
    return this.$$.ctx[11];
  }
  set threeLine(e) {
    this.$$set({ threeLine: e }), I();
  }
  get vertical() {
    return this.$$.ctx[27];
  }
  set vertical(e) {
    this.$$set({ vertical: e }), I();
  }
  get wrapFocus() {
    return this.$$.ctx[28];
  }
  set wrapFocus(e) {
    this.$$set({ wrapFocus: e }), I();
  }
  get singleSelection() {
    return this.$$.ctx[29];
  }
  set singleSelection(e) {
    this.$$set({ singleSelection: e }), I();
  }
  get disabledItemsFocusable() {
    return this.$$.ctx[30];
  }
  set disabledItemsFocusable(e) {
    this.$$set({ disabledItemsFocusable: e }), I();
  }
  get selectedIndex() {
    return this.$$.ctx[26];
  }
  set selectedIndex(e) {
    this.$$set({ selectedIndex: e }), I();
  }
  get radioList() {
    return this.$$.ctx[31];
  }
  set radioList(e) {
    this.$$set({ radioList: e }), I();
  }
  get checkList() {
    return this.$$.ctx[32];
  }
  set checkList(e) {
    this.$$set({ checkList: e }), I();
  }
  get hasTypeahead() {
    return this.$$.ctx[33];
  }
  set hasTypeahead(e) {
    this.$$set({ hasTypeahead: e }), I();
  }
  get component() {
    return this.$$.ctx[12];
  }
  set component(e) {
    this.$$set({ component: e }), I();
  }
  get tag() {
    return this.$$.ctx[13];
  }
  set tag(e) {
    this.$$set({ tag: e }), I();
  }
  get layout() {
    return this.$$.ctx[34];
  }
  get setEnabled() {
    return this.$$.ctx[35];
  }
  get getTypeaheadInProgress() {
    return this.$$.ctx[36];
  }
  get getSelectedIndex() {
    return this.$$.ctx[37];
  }
  get getFocusedItemIndex() {
    return this.$$.ctx[38];
  }
  get focusItemAtIndex() {
    return this.$$.ctx[39];
  }
  get getElement() {
    return this.$$.ctx[40];
  }
}
Fe(
  Rs,
  { use: {}, class: {}, nonInteractive: { type: "Boolean" }, dense: { type: "Boolean" }, textualList: { type: "Boolean" }, avatarList: { type: "Boolean" }, iconList: { type: "Boolean" }, imageList: { type: "Boolean" }, thumbnailList: { type: "Boolean" }, videoList: { type: "Boolean" }, twoLine: { type: "Boolean" }, threeLine: { type: "Boolean" }, vertical: { type: "Boolean" }, wrapFocus: {}, singleSelection: { type: "Boolean" }, disabledItemsFocusable: { type: "Boolean" }, selectedIndex: {}, radioList: { type: "Boolean" }, checkList: { type: "Boolean" }, hasTypeahead: { type: "Boolean" }, component: {}, tag: {} },
  ["default"],
  [
    "layout",
    "setEnabled",
    "getTypeaheadInProgress",
    "getSelectedIndex",
    "getFocusedItemIndex",
    "focusItemAtIndex",
    "getElement"
  ],
  !0
);
function Jn(n) {
  let e;
  return {
    c() {
      e = J("span"), W(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(t, s) {
      Y(t, e, s);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function ba(n) {
  let e, t, s = (
    /*ripple*/
    n[7] && Jn()
  );
  const i = (
    /*#slots*/
    n[34].default
  ), a = Le(
    i,
    n,
    /*$$scope*/
    n[37],
    null
  );
  return {
    c() {
      s && s.c(), e = ct(), a && a.c();
    },
    m(l, r) {
      s && s.m(l, r), Y(l, e, r), a && a.m(l, r), t = !0;
    },
    p(l, r) {
      /*ripple*/
      l[7] ? s || (s = Jn(), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), a && a.p && (!t || r[1] & /*$$scope*/
      64) && Oe(
        a,
        i,
        l,
        /*$$scope*/
        l[37],
        t ? Me(
          i,
          /*$$scope*/
          l[37],
          r,
          null
        ) : Re(
          /*$$scope*/
          l[37]
        ),
        null
      );
    },
    i(l) {
      t || (R(a, l), t = !0);
    },
    o(l) {
      N(a, l), t = !1;
    },
    d(l) {
      l && Q(e), s && s.d(l), a && a.d(l);
    }
  };
}
function Ea(n) {
  let e, t, s;
  const i = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        .../*nonInteractive*/
        n[6] ? [] : [
          [
            un,
            {
              ripple: !/*input*/
              n[16],
              unbounded: !1,
              color: (
                /*activated*/
                (n[1] || /*selected*/
                n[0]) && /*color*/
                n[5] == null ? "primary" : (
                  /*color*/
                  n[5]
                )
              ),
              disabled: (
                /*disabled*/
                n[10]
              ),
              addClass: (
                /*addClass*/
                n[24]
              ),
              removeClass: (
                /*removeClass*/
                n[25]
              ),
              addStyle: (
                /*addStyle*/
                n[26]
              )
            }
          ]
        ],
        /*forwardEvents*/
        n[22],
        .../*use*/
        n[2]
      ]
    },
    {
      class: X({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-deprecated-list-item": !/*wrapper*/
        n[8],
        "mdc-deprecated-list-item__wrapper": (
          /*wrapper*/
          n[8]
        ),
        "mdc-deprecated-list-item--activated": (
          /*activated*/
          n[1]
        ),
        "mdc-deprecated-list-item--selected": (
          /*selected*/
          n[0]
        ),
        "mdc-deprecated-list-item--disabled": (
          /*disabled*/
          n[10]
        ),
        "mdc-menu-item--selected": !/*nav*/
        n[23] && /*role*/
        n[9] === "menuitem" && /*selected*/
        n[0],
        "smui-menu-item--non-interactive": (
          /*nonInteractive*/
          n[6]
        ),
        .../*internalClasses*/
        n[18]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[19]
      ).map(En).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*nav*/
    n[23] && /*activated*/
    n[1] ? { "aria-current": "page" } : {},
    !/*nav*/
    n[23] || /*wrapper*/
    n[8] ? { role: (
      /*role*/
      n[9]
    ) } : {},
    !/*nav*/
    n[23] && /*role*/
    n[9] === "option" ? {
      "aria-selected": (
        /*selected*/
        n[0] ? "true" : "false"
      )
    } : {},
    !/*nav*/
    n[23] && /*role*/
    (n[9] === "radio" || /*role*/
    n[9] === "checkbox") ? {
      "aria-checked": (
        /*input*/
        n[16] && /*input*/
        n[16].checked ? "true" : "false"
      )
    } : {},
    /*nav*/
    n[23] ? {} : {
      "aria-disabled": (
        /*disabled*/
        n[10] ? "true" : "false"
      )
    },
    {
      "data-menu-item-skip-restore-focus": (
        /*skipRestoreFocus*/
        n[11] || void 0
      )
    },
    { tabindex: (
      /*tabindex*/
      n[21]
    ) },
    { href: (
      /*href*/
      n[12]
    ) },
    /*internalAttrs*/
    n[20],
    /*$$restProps*/
    n[29]
  ];
  var a = (
    /*component*/
    n[13]
  );
  function l(r, o) {
    let u = {
      $$slots: { default: [ba] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479)
      u = ee(i, [
        o[0] & /*tag*/
        16384 && { tag: (
          /*tag*/
          r[14]
        ) },
        o[0] & /*nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use*/
        121701479 && {
          use: [
            .../*nonInteractive*/
            r[6] ? [] : [
              [
                un,
                {
                  ripple: !/*input*/
                  r[16],
                  unbounded: !1,
                  color: (
                    /*activated*/
                    (r[1] || /*selected*/
                    r[0]) && /*color*/
                    r[5] == null ? "primary" : (
                      /*color*/
                      r[5]
                    )
                  ),
                  disabled: (
                    /*disabled*/
                    r[10]
                  ),
                  addClass: (
                    /*addClass*/
                    r[24]
                  ),
                  removeClass: (
                    /*removeClass*/
                    r[25]
                  ),
                  addStyle: (
                    /*addStyle*/
                    r[26]
                  )
                }
              ]
            ],
            /*forwardEvents*/
            r[22],
            .../*use*/
            r[2]
          ]
        },
        o[0] & /*className, wrapper, activated, selected, disabled, nav, role, nonInteractive, internalClasses*/
        8652619 && {
          class: X({
            [
              /*className*/
              r[3]
            ]: !0,
            "mdc-deprecated-list-item": !/*wrapper*/
            r[8],
            "mdc-deprecated-list-item__wrapper": (
              /*wrapper*/
              r[8]
            ),
            "mdc-deprecated-list-item--activated": (
              /*activated*/
              r[1]
            ),
            "mdc-deprecated-list-item--selected": (
              /*selected*/
              r[0]
            ),
            "mdc-deprecated-list-item--disabled": (
              /*disabled*/
              r[10]
            ),
            "mdc-menu-item--selected": !/*nav*/
            r[23] && /*role*/
            r[9] === "menuitem" && /*selected*/
            r[0],
            "smui-menu-item--non-interactive": (
              /*nonInteractive*/
              r[6]
            ),
            .../*internalClasses*/
            r[18]
          })
        },
        o[0] & /*internalStyles, style*/
        524304 && {
          style: Object.entries(
            /*internalStyles*/
            r[19]
          ).map(En).concat([
            /*style*/
            r[4]
          ]).join(" ")
        },
        o[0] & /*nav, activated*/
        8388610 && ie(
          /*nav*/
          r[23] && /*activated*/
          r[1] ? { "aria-current": "page" } : {}
        ),
        o[0] & /*nav, wrapper, role*/
        8389376 && ie(!/*nav*/
        r[23] || /*wrapper*/
        r[8] ? { role: (
          /*role*/
          r[9]
        ) } : {}),
        o[0] & /*nav, role, selected*/
        8389121 && ie(!/*nav*/
        r[23] && /*role*/
        r[9] === "option" ? {
          "aria-selected": (
            /*selected*/
            r[0] ? "true" : "false"
          )
        } : {}),
        o[0] & /*nav, role, input*/
        8454656 && ie(!/*nav*/
        r[23] && /*role*/
        (r[9] === "radio" || /*role*/
        r[9] === "checkbox") ? {
          "aria-checked": (
            /*input*/
            r[16] && /*input*/
            r[16].checked ? "true" : "false"
          )
        } : {}),
        o[0] & /*nav, disabled*/
        8389632 && ie(/*nav*/
        r[23] ? {} : {
          "aria-disabled": (
            /*disabled*/
            r[10] ? "true" : "false"
          )
        }),
        o[0] & /*skipRestoreFocus*/
        2048 && {
          "data-menu-item-skip-restore-focus": (
            /*skipRestoreFocus*/
            r[11] || void 0
          )
        },
        o[0] & /*tabindex*/
        2097152 && { tabindex: (
          /*tabindex*/
          r[21]
        ) },
        o[0] & /*href*/
        4096 && { href: (
          /*href*/
          r[12]
        ) },
        o[0] & /*internalAttrs*/
        1048576 && ie(
          /*internalAttrs*/
          r[20]
        ),
        o[0] & /*$$restProps*/
        536870912 && ie(
          /*$$restProps*/
          r[29]
        )
      ]);
    else
      for (let c = 0; c < i.length; c += 1)
        u = j(u, i[c]);
    return { props: u };
  }
  return a && (e = Et(a, l(n)), n[35](e), e.$on(
    "click",
    /*action*/
    n[15]
  ), e.$on(
    "keydown",
    /*handleKeydown*/
    n[27]
  ), e.$on(
    "SMUIGenericInput:mount",
    /*handleInputMount*/
    n[28]
  ), e.$on(
    "SMUIGenericInput:unmount",
    /*SMUIGenericInput_unmount_handler*/
    n[36]
  )), {
    c() {
      e && ye(e.$$.fragment), t = ct();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), s = !0;
    },
    p(r, o) {
      if (o[0] & /*component*/
      8192 && a !== (a = /*component*/
      r[13])) {
        if (e) {
          et();
          const u = e;
          N(u.$$.fragment, 1, 0, () => {
            be(u, 1);
          }), tt();
        }
        a ? (e = Et(a, l(r, o)), r[35](e), e.$on(
          "click",
          /*action*/
          r[15]
        ), e.$on(
          "keydown",
          /*handleKeydown*/
          r[27]
        ), e.$on(
          "SMUIGenericInput:mount",
          /*handleInputMount*/
          r[28]
        ), e.$on(
          "SMUIGenericInput:unmount",
          /*SMUIGenericInput_unmount_handler*/
          r[36]
        ), ye(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
        670916479 ? ee(i, [
          o[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            r[14]
          ) },
          o[0] & /*nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use*/
          121701479 && {
            use: [
              .../*nonInteractive*/
              r[6] ? [] : [
                [
                  un,
                  {
                    ripple: !/*input*/
                    r[16],
                    unbounded: !1,
                    color: (
                      /*activated*/
                      (r[1] || /*selected*/
                      r[0]) && /*color*/
                      r[5] == null ? "primary" : (
                        /*color*/
                        r[5]
                      )
                    ),
                    disabled: (
                      /*disabled*/
                      r[10]
                    ),
                    addClass: (
                      /*addClass*/
                      r[24]
                    ),
                    removeClass: (
                      /*removeClass*/
                      r[25]
                    ),
                    addStyle: (
                      /*addStyle*/
                      r[26]
                    )
                  }
                ]
              ],
              /*forwardEvents*/
              r[22],
              .../*use*/
              r[2]
            ]
          },
          o[0] & /*className, wrapper, activated, selected, disabled, nav, role, nonInteractive, internalClasses*/
          8652619 && {
            class: X({
              [
                /*className*/
                r[3]
              ]: !0,
              "mdc-deprecated-list-item": !/*wrapper*/
              r[8],
              "mdc-deprecated-list-item__wrapper": (
                /*wrapper*/
                r[8]
              ),
              "mdc-deprecated-list-item--activated": (
                /*activated*/
                r[1]
              ),
              "mdc-deprecated-list-item--selected": (
                /*selected*/
                r[0]
              ),
              "mdc-deprecated-list-item--disabled": (
                /*disabled*/
                r[10]
              ),
              "mdc-menu-item--selected": !/*nav*/
              r[23] && /*role*/
              r[9] === "menuitem" && /*selected*/
              r[0],
              "smui-menu-item--non-interactive": (
                /*nonInteractive*/
                r[6]
              ),
              .../*internalClasses*/
              r[18]
            })
          },
          o[0] & /*internalStyles, style*/
          524304 && {
            style: Object.entries(
              /*internalStyles*/
              r[19]
            ).map(En).concat([
              /*style*/
              r[4]
            ]).join(" ")
          },
          o[0] & /*nav, activated*/
          8388610 && ie(
            /*nav*/
            r[23] && /*activated*/
            r[1] ? { "aria-current": "page" } : {}
          ),
          o[0] & /*nav, wrapper, role*/
          8389376 && ie(!/*nav*/
          r[23] || /*wrapper*/
          r[8] ? { role: (
            /*role*/
            r[9]
          ) } : {}),
          o[0] & /*nav, role, selected*/
          8389121 && ie(!/*nav*/
          r[23] && /*role*/
          r[9] === "option" ? {
            "aria-selected": (
              /*selected*/
              r[0] ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, role, input*/
          8454656 && ie(!/*nav*/
          r[23] && /*role*/
          (r[9] === "radio" || /*role*/
          r[9] === "checkbox") ? {
            "aria-checked": (
              /*input*/
              r[16] && /*input*/
              r[16].checked ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, disabled*/
          8389632 && ie(/*nav*/
          r[23] ? {} : {
            "aria-disabled": (
              /*disabled*/
              r[10] ? "true" : "false"
            )
          }),
          o[0] & /*skipRestoreFocus*/
          2048 && {
            "data-menu-item-skip-restore-focus": (
              /*skipRestoreFocus*/
              r[11] || void 0
            )
          },
          o[0] & /*tabindex*/
          2097152 && { tabindex: (
            /*tabindex*/
            r[21]
          ) },
          o[0] & /*href*/
          4096 && { href: (
            /*href*/
            r[12]
          ) },
          o[0] & /*internalAttrs*/
          1048576 && ie(
            /*internalAttrs*/
            r[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && ie(
            /*$$restProps*/
            r[29]
          )
        ]) : {};
        o[0] & /*ripple*/
        128 | o[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      s || (e && R(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Q(t), n[35](null), e && be(e, r);
    }
  };
}
let va = 0;
const En = ([n, e]) => `${n}: ${e};`;
function Aa(n, e, t) {
  let s;
  const i = [
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "wrapper",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "tag",
    "action",
    "getPrimaryText",
    "getElement"
  ];
  let a = re(e, i), { $$slots: l = {}, $$scope: r } = e;
  var o;
  const u = Je(ke());
  let c = () => {
  };
  function d(A) {
    return A === c;
  }
  let { use: f = [] } = e, { class: m = "" } = e, { style: h = "" } = e, { color: p = void 0 } = e, { nonInteractive: _ = (o = Pe("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  Ge("SMUI:list:nonInteractive", void 0);
  let { ripple: E = !_ } = e, { wrapper: b = !1 } = e, { activated: M = !1 } = e, { role: S = b ? "presentation" : Pe("SMUI:list:item:role") } = e;
  Ge("SMUI:list:item:role", void 0);
  let { selected: T = !1 } = e, { disabled: F = !1 } = e, { skipRestoreFocus: L = !1 } = e, { tabindex: G = c } = e, { inputId: ne = "SMUI-form-field-list-" + va++ } = e, { href: P = void 0 } = e, D, U = {}, x = {}, y = {}, k, w, ge = Pe("SMUI:list:item:nav"), { component: O = gt } = e, { tag: ue = O === gt ? ge ? P ? "a" : "span" : "li" : void 0 } = e;
  Ge("SMUI:generic:input:props", { id: ne }), Ge("SMUI:separator:context", void 0), vt(() => {
    if (!T && !_) {
      let Z = !0, $ = D.getElement();
      for (; $.previousSibling; )
        if ($ = $.previousSibling, $.nodeType === 1 && $.classList.contains("mdc-deprecated-list-item") && !$.classList.contains("mdc-deprecated-list-item--disabled")) {
          Z = !1;
          break;
        }
      Z && (w = window.requestAnimationFrame(() => he($)));
    }
    const A = {
      _smui_list_item_accessor: !0,
      get element() {
        return Ue();
      },
      get selected() {
        return T;
      },
      set selected(Z) {
        t(0, T = Z);
      },
      hasClass: Ee,
      addClass: We,
      removeClass: ae,
      getAttr: rt,
      addAttr: V,
      removeAttr: me,
      getPrimaryText: se,
      // For inputs within item.
      get checked() {
        var Z;
        return (Z = k && k.checked) !== null && Z !== void 0 ? Z : !1;
      },
      set checked(Z) {
        k && t(16, k.checked = !!Z, k);
      },
      get hasCheckbox() {
        return !!(k && "_smui_checkbox_accessor" in k);
      },
      get hasRadio() {
        return !!(k && "_smui_radio_accessor" in k);
      },
      activateRipple() {
        k && k.activateRipple();
      },
      deactivateRipple() {
        k && k.deactivateRipple();
      },
      // For select options.
      getValue() {
        return a.value;
      },
      // For autocomplete
      action: C,
      get tabindex() {
        return s;
      },
      set tabindex(Z) {
        t(30, G = Z);
      },
      get disabled() {
        return F;
      },
      get activated() {
        return M;
      },
      set activated(Z) {
        t(1, M = Z);
      }
    };
    return qe(Ue(), "SMUIListItem:mount", A), () => {
      qe(Ue(), "SMUIListItem:unmount", A);
    };
  }), Ht(() => {
    w && window.cancelAnimationFrame(w);
  });
  function Ee(A) {
    return A in U ? U[A] : Ue().classList.contains(A);
  }
  function We(A) {
    U[A] || t(18, U[A] = !0, U);
  }
  function ae(A) {
    (!(A in U) || U[A]) && t(18, U[A] = !1, U);
  }
  function st(A, Z) {
    x[A] != Z && (Z === "" || Z == null ? (delete x[A], t(19, x)) : t(19, x[A] = Z, x));
  }
  function rt(A) {
    var Z;
    return A in y ? (Z = y[A]) !== null && Z !== void 0 ? Z : null : Ue().getAttribute(A);
  }
  function V(A, Z) {
    y[A] !== Z && t(20, y[A] = Z, y);
  }
  function me(A) {
    (!(A in y) || y[A] != null) && t(20, y[A] = void 0, y);
  }
  function he(A) {
    let Z = !0;
    for (; A.nextElementSibling; )
      if (A = A.nextElementSibling, A.nodeType === 1 && A.classList.contains("mdc-deprecated-list-item")) {
        const $ = A.attributes.getNamedItem("tabindex");
        if ($ && $.value === "0") {
          Z = !1;
          break;
        }
      }
    Z && t(21, s = 0);
  }
  function de(A) {
    const Z = A.key === "Enter", $ = A.key === "Space";
    (Z || $) && C(A);
  }
  function we(A) {
    ("_smui_checkbox_accessor" in A.detail || "_smui_radio_accessor" in A.detail) && t(16, k = A.detail);
  }
  function C(A) {
    F || qe(Ue(), "SMUI:action", A);
  }
  function se() {
    var A, Z, $;
    const _t = Ue(), Ze = _t.querySelector(".mdc-deprecated-list-item__primary-text");
    if (Ze)
      return (A = Ze.textContent) !== null && A !== void 0 ? A : "";
    const ft = _t.querySelector(".mdc-deprecated-list-item__text");
    return ft ? (Z = ft.textContent) !== null && Z !== void 0 ? Z : "" : ($ = _t.textContent) !== null && $ !== void 0 ? $ : "";
  }
  function Ue() {
    return D.getElement();
  }
  function _e(A) {
    le[A ? "unshift" : "push"](() => {
      D = A, t(17, D);
    });
  }
  const ut = () => t(16, k = void 0);
  return n.$$set = (A) => {
    e = j(j({}, e), Ke(A)), t(29, a = re(e, i)), "use" in A && t(2, f = A.use), "class" in A && t(3, m = A.class), "style" in A && t(4, h = A.style), "color" in A && t(5, p = A.color), "nonInteractive" in A && t(6, _ = A.nonInteractive), "ripple" in A && t(7, E = A.ripple), "wrapper" in A && t(8, b = A.wrapper), "activated" in A && t(1, M = A.activated), "role" in A && t(9, S = A.role), "selected" in A && t(0, T = A.selected), "disabled" in A && t(10, F = A.disabled), "skipRestoreFocus" in A && t(11, L = A.skipRestoreFocus), "tabindex" in A && t(30, G = A.tabindex), "inputId" in A && t(31, ne = A.inputId), "href" in A && t(12, P = A.href), "component" in A && t(13, O = A.component), "tag" in A && t(14, ue = A.tag), "$$scope" in A && t(37, r = A.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && t(21, s = d(G) ? !_ && !F && (T || k && k.checked) ? 0 : -1 : G);
  }, [
    T,
    M,
    f,
    m,
    h,
    p,
    _,
    E,
    b,
    S,
    F,
    L,
    P,
    O,
    ue,
    C,
    k,
    D,
    U,
    x,
    y,
    s,
    u,
    ge,
    We,
    ae,
    st,
    de,
    we,
    a,
    G,
    ne,
    se,
    Ue,
    l,
    _e,
    ut,
    r
  ];
}
class Ds extends Ne {
  constructor(e) {
    super(), je(
      this,
      e,
      Aa,
      Ea,
      Ce,
      {
        use: 2,
        class: 3,
        style: 4,
        color: 5,
        nonInteractive: 6,
        ripple: 7,
        wrapper: 8,
        activated: 1,
        role: 9,
        selected: 0,
        disabled: 10,
        skipRestoreFocus: 11,
        tabindex: 30,
        inputId: 31,
        href: 12,
        component: 13,
        tag: 14,
        action: 15,
        getPrimaryText: 32,
        getElement: 33
      },
      null,
      [-1, -1]
    );
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(e) {
    this.$$set({ style: e }), I();
  }
  get color() {
    return this.$$.ctx[5];
  }
  set color(e) {
    this.$$set({ color: e }), I();
  }
  get nonInteractive() {
    return this.$$.ctx[6];
  }
  set nonInteractive(e) {
    this.$$set({ nonInteractive: e }), I();
  }
  get ripple() {
    return this.$$.ctx[7];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), I();
  }
  get wrapper() {
    return this.$$.ctx[8];
  }
  set wrapper(e) {
    this.$$set({ wrapper: e }), I();
  }
  get activated() {
    return this.$$.ctx[1];
  }
  set activated(e) {
    this.$$set({ activated: e }), I();
  }
  get role() {
    return this.$$.ctx[9];
  }
  set role(e) {
    this.$$set({ role: e }), I();
  }
  get selected() {
    return this.$$.ctx[0];
  }
  set selected(e) {
    this.$$set({ selected: e }), I();
  }
  get disabled() {
    return this.$$.ctx[10];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), I();
  }
  get skipRestoreFocus() {
    return this.$$.ctx[11];
  }
  set skipRestoreFocus(e) {
    this.$$set({ skipRestoreFocus: e }), I();
  }
  get tabindex() {
    return this.$$.ctx[30];
  }
  set tabindex(e) {
    this.$$set({ tabindex: e }), I();
  }
  get inputId() {
    return this.$$.ctx[31];
  }
  set inputId(e) {
    this.$$set({ inputId: e }), I();
  }
  get href() {
    return this.$$.ctx[12];
  }
  set href(e) {
    this.$$set({ href: e }), I();
  }
  get component() {
    return this.$$.ctx[13];
  }
  set component(e) {
    this.$$set({ component: e }), I();
  }
  get tag() {
    return this.$$.ctx[14];
  }
  set tag(e) {
    this.$$set({ tag: e }), I();
  }
  get action() {
    return this.$$.ctx[15];
  }
  get getPrimaryText() {
    return this.$$.ctx[32];
  }
  get getElement() {
    return this.$$.ctx[33];
  }
}
Fe(Ds, { use: {}, class: {}, style: {}, color: {}, nonInteractive: {}, ripple: {}, wrapper: { type: "Boolean" }, activated: { type: "Boolean" }, role: {}, selected: { type: "Boolean" }, disabled: { type: "Boolean" }, skipRestoreFocus: { type: "Boolean" }, tabindex: {}, inputId: {}, href: {}, component: {}, tag: {} }, ["default"], ["action", "getPrimaryText", "getElement"], !0);
xt({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
xt({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
xt({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Sa(n) {
  let e, t, s, i, a, l;
  const r = (
    /*#slots*/
    n[8].default
  ), o = Le(
    r,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-deprecated-list-item__graphic": !0,
        "mdc-menu__selection-group-icon": (
          /*menuSelectionGroup*/
          n[4]
        )
      })
    },
    /*$$restProps*/
    n[5]
  ], c = {};
  for (let d = 0; d < u.length; d += 1)
    c = j(c, u[d]);
  return {
    c() {
      e = J("span"), o && o.c(), fe(e, c);
    },
    m(d, f) {
      Y(d, e, f), o && o.m(e, null), n[9](e), i = !0, a || (l = [
        ce(s = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], a = !0);
    },
    p(d, [f]) {
      o && o.p && (!i || f & /*$$scope*/
      128) && Oe(
        o,
        r,
        d,
        /*$$scope*/
        d[7],
        i ? Me(
          r,
          /*$$scope*/
          d[7],
          f,
          null
        ) : Re(
          /*$$scope*/
          d[7]
        ),
        null
      ), fe(e, c = ee(u, [
        (!i || f & /*className*/
        2 && t !== (t = X({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            d[4]
          )
        }))) && { class: t },
        f & /*$$restProps*/
        32 && /*$$restProps*/
        d[5]
      ])), s && Te(s.update) && f & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      i || (R(o, d), i = !0);
    },
    o(d) {
      N(o, d), i = !1;
    },
    d(d) {
      d && Q(e), o && o.d(d), n[9](null), a = !1, ze(l);
    }
  };
}
function ya(n, e, t) {
  const s = ["use", "class", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Je(ke());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = Pe("SMUI:list:graphic:menu-selection-group");
  function f() {
    return c;
  }
  function m(h) {
    le[h ? "unshift" : "push"](() => {
      c = h, t(2, c);
    });
  }
  return n.$$set = (h) => {
    e = j(j({}, e), Ke(h)), t(5, i = re(e, s)), "use" in h && t(0, o = h.use), "class" in h && t(1, u = h.class), "$$scope" in h && t(7, l = h.$$scope);
  }, [
    o,
    u,
    c,
    r,
    d,
    i,
    f,
    l,
    a,
    m
  ];
}
class ks extends Ne {
  constructor(e) {
    super(), je(this, e, ya, Sa, Ce, { use: 0, class: 1, getElement: 6 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Fe(ks, { use: {}, class: {} }, ["default"], ["getElement"], !0);
xt({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
function Ca(n) {
  let e, t, s, i, a, l, r;
  const o = (
    /*#slots*/
    n[8].default
  ), u = Le(
    o,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let c = [
    {
      class: t = X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-deprecated-list-item__text": !0
      })
    },
    {
      for: s = /*inputProps*/
      n[4] ? (
        /*inputProps*/
        n[4].id
      ) : void 0
    },
    /*$$restProps*/
    n[5]
  ], d = {};
  for (let f = 0; f < c.length; f += 1)
    d = j(d, c[f]);
  return {
    c() {
      e = J("label"), u && u.c(), fe(e, d);
    },
    m(f, m) {
      Y(f, e, m), u && u.m(e, null), n[9](e), a = !0, l || (r = [
        ce(i = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], l = !0);
    },
    p(f, [m]) {
      u && u.p && (!a || m & /*$$scope*/
      128) && Oe(
        u,
        o,
        f,
        /*$$scope*/
        f[7],
        a ? Me(
          o,
          /*$$scope*/
          f[7],
          m,
          null
        ) : Re(
          /*$$scope*/
          f[7]
        ),
        null
      ), fe(e, d = ee(c, [
        (!a || m & /*className*/
        2 && t !== (t = X({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-deprecated-list-item__text": !0
        }))) && { class: t },
        { for: s },
        m & /*$$restProps*/
        32 && /*$$restProps*/
        f[5]
      ])), i && Te(i.update) && m & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      a || (R(u, f), a = !0);
    },
    o(f) {
      N(u, f), a = !1;
    },
    d(f) {
      f && Q(e), u && u.d(f), n[9](null), l = !1, ze(r);
    }
  };
}
function Ta(n, e, t) {
  const s = ["use", "class", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  var r;
  const o = Je(ke());
  let { use: u = [] } = e, { class: c = "" } = e, d, f = (r = Pe("SMUI:generic:input:props")) !== null && r !== void 0 ? r : {};
  function m() {
    return d;
  }
  function h(p) {
    le[p ? "unshift" : "push"](() => {
      d = p, t(2, d);
    });
  }
  return n.$$set = (p) => {
    e = j(j({}, e), Ke(p)), t(5, i = re(e, s)), "use" in p && t(0, u = p.use), "class" in p && t(1, c = p.class), "$$scope" in p && t(7, l = p.$$scope);
  }, [
    u,
    c,
    d,
    o,
    f,
    i,
    m,
    l,
    a,
    h
  ];
}
class La extends Ne {
  constructor(e) {
    super(), je(this, e, Ta, Ca, Ce, { use: 0, class: 1, getElement: 6 });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Fe(La, { use: {}, class: {} }, ["default"], ["getElement"], !0);
xt({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
xt({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
function Ma(n) {
  let e, t, s;
  const i = [
    { tag: (
      /*tag*/
      n[8]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[10],
        .../*use*/
        n[0]
      ]
    },
    {
      class: X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-deprecated-list-divider": !0,
        "mdc-deprecated-list-divider--padded": (
          /*padded*/
          n[2]
        ),
        "mdc-deprecated-list-divider--inset": (
          /*inset*/
          n[3]
        ),
        "mdc-deprecated-list-divider--inset-leading": (
          /*insetLeading*/
          n[4]
        ),
        "mdc-deprecated-list-divider--inset-trailing": (
          /*insetTrailing*/
          n[5]
        ),
        "mdc-deprecated-list-divider--inset-padding": (
          /*insetPadding*/
          n[6]
        )
      })
    },
    { role: "separator" },
    /*$$restProps*/
    n[11]
  ];
  var a = (
    /*component*/
    n[7]
  );
  function l(r, o) {
    let u = {};
    if (o !== void 0 && o & /*tag, forwardEvents, use, className, padded, inset, insetLeading, insetTrailing, insetPadding, $$restProps*/
    3455)
      u = ee(i, [
        o & /*tag*/
        256 && { tag: (
          /*tag*/
          r[8]
        ) },
        o & /*forwardEvents, use*/
        1025 && {
          use: [
            /*forwardEvents*/
            r[10],
            .../*use*/
            r[0]
          ]
        },
        o & /*className, padded, inset, insetLeading, insetTrailing, insetPadding*/
        126 && {
          class: X({
            [
              /*className*/
              r[1]
            ]: !0,
            "mdc-deprecated-list-divider": !0,
            "mdc-deprecated-list-divider--padded": (
              /*padded*/
              r[2]
            ),
            "mdc-deprecated-list-divider--inset": (
              /*inset*/
              r[3]
            ),
            "mdc-deprecated-list-divider--inset-leading": (
              /*insetLeading*/
              r[4]
            ),
            "mdc-deprecated-list-divider--inset-trailing": (
              /*insetTrailing*/
              r[5]
            ),
            "mdc-deprecated-list-divider--inset-padding": (
              /*insetPadding*/
              r[6]
            )
          })
        },
        i[3],
        o & /*$$restProps*/
        2048 && ie(
          /*$$restProps*/
          r[11]
        )
      ]);
    else
      for (let c = 0; c < i.length; c += 1)
        u = j(u, i[c]);
    return { props: u };
  }
  return a && (e = Et(a, l(n)), n[13](e)), {
    c() {
      e && ye(e.$$.fragment), t = ct();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), s = !0;
    },
    p(r, [o]) {
      if (o & /*component*/
      128 && a !== (a = /*component*/
      r[7])) {
        if (e) {
          et();
          const u = e;
          N(u.$$.fragment, 1, 0, () => {
            be(u, 1);
          }), tt();
        }
        a ? (e = Et(a, l(r, o)), r[13](e), ye(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, padded, inset, insetLeading, insetTrailing, insetPadding, $$restProps*/
        3455 ? ee(i, [
          o & /*tag*/
          256 && { tag: (
            /*tag*/
            r[8]
          ) },
          o & /*forwardEvents, use*/
          1025 && {
            use: [
              /*forwardEvents*/
              r[10],
              .../*use*/
              r[0]
            ]
          },
          o & /*className, padded, inset, insetLeading, insetTrailing, insetPadding*/
          126 && {
            class: X({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-deprecated-list-divider": !0,
              "mdc-deprecated-list-divider--padded": (
                /*padded*/
                r[2]
              ),
              "mdc-deprecated-list-divider--inset": (
                /*inset*/
                r[3]
              ),
              "mdc-deprecated-list-divider--inset-leading": (
                /*insetLeading*/
                r[4]
              ),
              "mdc-deprecated-list-divider--inset-trailing": (
                /*insetTrailing*/
                r[5]
              ),
              "mdc-deprecated-list-divider--inset-padding": (
                /*insetPadding*/
                r[6]
              )
            })
          },
          i[3],
          o & /*$$restProps*/
          2048 && ie(
            /*$$restProps*/
            r[11]
          )
        ]) : {};
        e.$set(u);
      }
    },
    i(r) {
      s || (e && R(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Q(t), n[13](null), e && be(e, r);
    }
  };
}
function Oa(n, e, t) {
  const s = [
    "use",
    "class",
    "padded",
    "inset",
    "insetLeading",
    "insetTrailing",
    "insetPadding",
    "component",
    "tag",
    "getElement"
  ];
  let i = re(e, s);
  const a = Je(ke());
  let { use: l = [] } = e, { class: r = "" } = e, { padded: o = !1 } = e, { inset: u = !1 } = e, { insetLeading: c = !1 } = e, { insetTrailing: d = !1 } = e, { insetPadding: f = !1 } = e, m, h = Pe("SMUI:list:item:nav"), p = Pe("SMUI:separator:context"), { component: _ = gt } = e, { tag: E = _ === gt ? h || p !== "list" ? "hr" : "li" : void 0 } = e;
  function b() {
    return m.getElement();
  }
  function M(S) {
    le[S ? "unshift" : "push"](() => {
      m = S, t(9, m);
    });
  }
  return n.$$set = (S) => {
    e = j(j({}, e), Ke(S)), t(11, i = re(e, s)), "use" in S && t(0, l = S.use), "class" in S && t(1, r = S.class), "padded" in S && t(2, o = S.padded), "inset" in S && t(3, u = S.inset), "insetLeading" in S && t(4, c = S.insetLeading), "insetTrailing" in S && t(5, d = S.insetTrailing), "insetPadding" in S && t(6, f = S.insetPadding), "component" in S && t(7, _ = S.component), "tag" in S && t(8, E = S.tag);
  }, [
    l,
    r,
    o,
    u,
    c,
    d,
    f,
    _,
    E,
    m,
    a,
    i,
    b,
    M
  ];
}
class Ra extends Ne {
  constructor(e) {
    super(), je(this, e, Oa, Ma, Ce, {
      use: 0,
      class: 1,
      padded: 2,
      inset: 3,
      insetLeading: 4,
      insetTrailing: 5,
      insetPadding: 6,
      component: 7,
      tag: 8,
      getElement: 12
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get padded() {
    return this.$$.ctx[2];
  }
  set padded(e) {
    this.$$set({ padded: e }), I();
  }
  get inset() {
    return this.$$.ctx[3];
  }
  set inset(e) {
    this.$$set({ inset: e }), I();
  }
  get insetLeading() {
    return this.$$.ctx[4];
  }
  set insetLeading(e) {
    this.$$set({ insetLeading: e }), I();
  }
  get insetTrailing() {
    return this.$$.ctx[5];
  }
  set insetTrailing(e) {
    this.$$set({ insetTrailing: e }), I();
  }
  get insetPadding() {
    return this.$$.ctx[6];
  }
  set insetPadding(e) {
    this.$$set({ insetPadding: e }), I();
  }
  get component() {
    return this.$$.ctx[7];
  }
  set component(e) {
    this.$$set({ component: e }), I();
  }
  get tag() {
    return this.$$.ctx[8];
  }
  set tag(e) {
    this.$$set({ tag: e }), I();
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
Fe(Ra, { use: {}, class: {}, padded: { type: "Boolean" }, inset: { type: "Boolean" }, insetLeading: { type: "Boolean" }, insetTrailing: { type: "Boolean" }, insetPadding: { type: "Boolean" }, component: {}, tag: {} }, [], ["getElement"], !0);
xt({
  class: "mdc-menu__selection-group-icon",
  component: ks
});
function Da(n) {
  let e, t, s, i, a, l, r, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = Le(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let d = [
    {
      class: t = X({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          n[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          n[1]
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: s = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(Qn).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    {
      for: i = /*forId*/
      n[5] || /*inputProps*/
      (n[11] ? (
        /*inputProps*/
        n[11].id
      ) : void 0)
    },
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let m = 0; m < d.length; m += 1)
    f = j(f, d[m]);
  return {
    c() {
      e = J("label"), c && c.c(), fe(e, f);
    },
    m(m, h) {
      Y(m, e, h), c && c.m(e, null), n[24](e), l = !0, r || (o = [
        ce(a = Xe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ce(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], r = !0);
    },
    p(m, h) {
      c && c.p && (!l || h & /*$$scope*/
      2097152) && Oe(
        c,
        u,
        m,
        /*$$scope*/
        m[21],
        l ? Me(
          u,
          /*$$scope*/
          m[21],
          h,
          null
        ) : Re(
          /*$$scope*/
          m[21]
        ),
        null
      ), fe(e, f = ee(d, [
        (!l || h & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = X({
          [
            /*className*/
            m[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            m[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            m[1]
          ),
          .../*internalClasses*/
          m[8]
        }))) && { class: t },
        (!l || h & /*internalStyles, style*/
        528 && s !== (s = Object.entries(
          /*internalStyles*/
          m[9]
        ).map(Qn).concat([
          /*style*/
          m[4]
        ]).join(" "))) && { style: s },
        (!l || h & /*forId*/
        32 && i !== (i = /*forId*/
        m[5] || /*inputProps*/
        (m[11] ? (
          /*inputProps*/
          m[11].id
        ) : void 0))) && { for: i },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        m[12]
      ])), a && Te(a.update) && h & /*use*/
      4 && a.update.call(
        null,
        /*use*/
        m[2]
      );
    },
    i(m) {
      l || (R(c, m), l = !0);
    },
    o(m) {
      N(c, m), l = !1;
    },
    d(m) {
      m && Q(e), c && c.d(m), n[24](null), r = !1, ze(o);
    }
  };
}
function ka(n) {
  let e, t, s, i, a, l, r;
  const o = (
    /*#slots*/
    n[22].default
  ), u = Le(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = X({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          n[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          n[1]
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: s = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(Zn).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let f = 0; f < c.length; f += 1)
    d = j(d, c[f]);
  return {
    c() {
      e = J("span"), u && u.c(), fe(e, d);
    },
    m(f, m) {
      Y(f, e, m), u && u.m(e, null), n[23](e), a = !0, l || (r = [
        ce(i = Xe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ce(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], l = !0);
    },
    p(f, m) {
      u && u.p && (!a || m & /*$$scope*/
      2097152) && Oe(
        u,
        o,
        f,
        /*$$scope*/
        f[21],
        a ? Me(
          o,
          /*$$scope*/
          f[21],
          m,
          null
        ) : Re(
          /*$$scope*/
          f[21]
        ),
        null
      ), fe(e, d = ee(c, [
        (!a || m & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = X({
          [
            /*className*/
            f[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            f[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            f[1]
          ),
          .../*internalClasses*/
          f[8]
        }))) && { class: t },
        (!a || m & /*internalStyles, style*/
        528 && s !== (s = Object.entries(
          /*internalStyles*/
          f[9]
        ).map(Zn).concat([
          /*style*/
          f[4]
        ]).join(" "))) && { style: s },
        m & /*$$restProps*/
        4096 && /*$$restProps*/
        f[12]
      ])), i && Te(i.update) && m & /*use*/
      4 && i.update.call(
        null,
        /*use*/
        f[2]
      );
    },
    i(f) {
      a || (R(u, f), a = !0);
    },
    o(f) {
      N(u, f), a = !1;
    },
    d(f) {
      f && Q(e), u && u.d(f), n[23](null), l = !1, ze(r);
    }
  };
}
function ja(n) {
  let e, t, s, i;
  const a = [ka, Da], l = [];
  function r(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = r(n), t = l[e] = a[e](n), {
    c() {
      t.c(), s = ct();
    },
    m(o, u) {
      l[e].m(o, u), Y(o, s, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = r(o), e === c ? l[e].p(o, u) : (et(), N(l[c], 1, 1, () => {
        l[c] = null;
      }), tt(), t = l[e], t ? t.p(o, u) : (t = l[e] = a[e](o), t.c()), R(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      i || (R(t), i = !0);
    },
    o(o) {
      N(t), i = !1;
    },
    d(o) {
      o && Q(s), l[e].d(o);
    }
  };
}
const Zn = ([n, e]) => `${n}: ${e};`, Qn = ([n, e]) => `${n}: ${e};`;
function Fa(n, e, t) {
  const s = [
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "shake",
    "float",
    "setRequired",
    "getWidth",
    "getElement"
  ];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  var r;
  const o = Je(ke());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { for: f = void 0 } = e, { floatAbove: m = !1 } = e, { required: h = !1 } = e, { wrapped: p = !1 } = e, _, E, b = {}, M = {}, S = (r = Pe("SMUI:generic:input:props")) !== null && r !== void 0 ? r : {}, T = m, F = h;
  vt(() => {
    t(18, E = new rr({
      addClass: L,
      removeClass: G,
      getWidth: () => {
        var ue, Ee;
        const We = k(), ae = We.cloneNode(!0);
        (ue = We.parentNode) === null || ue === void 0 || ue.appendChild(ae), ae.classList.add("smui-floating-label--remove-transition"), ae.classList.add("smui-floating-label--force-size"), ae.classList.remove("mdc-floating-label--float-above");
        const st = ae.scrollWidth;
        return (Ee = We.parentNode) === null || Ee === void 0 || Ee.removeChild(ae), st;
      },
      registerInteractionHandler: (ue, Ee) => k().addEventListener(ue, Ee),
      deregisterInteractionHandler: (ue, Ee) => k().removeEventListener(ue, Ee)
    }));
    const O = {
      get element() {
        return k();
      },
      addStyle: ne,
      removeStyle: P
    };
    return qe(_, "SMUIFloatingLabel:mount", O), E.init(), () => {
      qe(_, "SMUIFloatingLabel:unmount", O), E.destroy();
    };
  });
  function L(O) {
    b[O] || t(8, b[O] = !0, b);
  }
  function G(O) {
    (!(O in b) || b[O]) && t(8, b[O] = !1, b);
  }
  function ne(O, ue) {
    M[O] != ue && (ue === "" || ue == null ? (delete M[O], t(9, M)) : t(9, M[O] = ue, M));
  }
  function P(O) {
    O in M && (delete M[O], t(9, M));
  }
  function D(O) {
    E.shake(O);
  }
  function U(O) {
    t(0, m = O);
  }
  function x(O) {
    t(1, h = O);
  }
  function y() {
    return E.getWidth();
  }
  function k() {
    return _;
  }
  function w(O) {
    le[O ? "unshift" : "push"](() => {
      _ = O, t(7, _);
    });
  }
  function ge(O) {
    le[O ? "unshift" : "push"](() => {
      _ = O, t(7, _);
    });
  }
  return n.$$set = (O) => {
    e = j(j({}, e), Ke(O)), t(12, i = re(e, s)), "use" in O && t(2, u = O.use), "class" in O && t(3, c = O.class), "style" in O && t(4, d = O.style), "for" in O && t(5, f = O.for), "floatAbove" in O && t(0, m = O.floatAbove), "required" in O && t(1, h = O.required), "wrapped" in O && t(6, p = O.wrapped), "$$scope" in O && t(21, l = O.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && E && T !== m && (t(19, T = m), E.float(m)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && E && F !== h && (t(20, F = h), E.setRequired(h));
  }, [
    m,
    h,
    u,
    c,
    d,
    f,
    p,
    _,
    b,
    M,
    o,
    S,
    i,
    D,
    U,
    x,
    y,
    k,
    E,
    T,
    F,
    l,
    a,
    w,
    ge
  ];
}
class Rn extends Ne {
  constructor(e) {
    super(), je(this, e, Fa, ja, Ce, {
      use: 2,
      class: 3,
      style: 4,
      for: 5,
      floatAbove: 0,
      required: 1,
      wrapped: 6,
      shake: 13,
      float: 14,
      setRequired: 15,
      getWidth: 16,
      getElement: 17
    });
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(e) {
    this.$$set({ style: e }), I();
  }
  get for() {
    return this.$$.ctx[5];
  }
  set for(e) {
    this.$$set({ for: e }), I();
  }
  get floatAbove() {
    return this.$$.ctx[0];
  }
  set floatAbove(e) {
    this.$$set({ floatAbove: e }), I();
  }
  get required() {
    return this.$$.ctx[1];
  }
  set required(e) {
    this.$$set({ required: e }), I();
  }
  get wrapped() {
    return this.$$.ctx[6];
  }
  set wrapped(e) {
    this.$$set({ wrapped: e }), I();
  }
  get shake() {
    return this.$$.ctx[13];
  }
  get float() {
    return this.$$.ctx[14];
  }
  get setRequired() {
    return this.$$.ctx[15];
  }
  get getWidth() {
    return this.$$.ctx[16];
  }
  get getElement() {
    return this.$$.ctx[17];
  }
}
Fe(Rn, { use: {}, class: {}, style: {}, for: {}, floatAbove: { type: "Boolean" }, required: { type: "Boolean" }, wrapped: { type: "Boolean" } }, ["default"], ["shake", "float", "setRequired", "getWidth", "getElement"], !0);
function Na(n) {
  let e, t, s, i, a, l, r = [
    {
      class: t = X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-line-ripple": !0,
        "mdc-line-ripple--active": (
          /*active*/
          n[3]
        ),
        .../*internalClasses*/
        n[5]
      })
    },
    {
      style: s = Object.entries(
        /*internalStyles*/
        n[6]
      ).map(Yn).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < r.length; u += 1)
    o = j(o, r[u]);
  return {
    c() {
      e = J("div"), fe(e, o);
    },
    m(u, c) {
      Y(u, e, c), n[13](e), a || (l = [
        ce(i = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], a = !0);
    },
    p(u, [c]) {
      fe(e, o = ee(r, [
        c & /*className, active, internalClasses*/
        42 && t !== (t = X({
          [
            /*className*/
            u[1]
          ]: !0,
          "mdc-line-ripple": !0,
          "mdc-line-ripple--active": (
            /*active*/
            u[3]
          ),
          .../*internalClasses*/
          u[5]
        })) && { class: t },
        c & /*internalStyles, style*/
        68 && s !== (s = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(Yn).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: s },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), i && Te(i.update) && c & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: nt,
    o: nt,
    d(u) {
      u && Q(e), n[13](null), a = !1, ze(l);
    }
  };
}
const Yn = ([n, e]) => `${n}: ${e};`;
function Pa(n, e, t) {
  const s = [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ];
  let i = re(e, s);
  const a = Je(ke());
  let { use: l = [] } = e, { class: r = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, d, f = {}, m = {};
  vt(() => (d = new ar({
    addClass: p,
    removeClass: _,
    hasClass: h,
    setStyle: E,
    registerEventHandler: (L, G) => T().addEventListener(L, G),
    deregisterEventHandler: (L, G) => T().removeEventListener(L, G)
  }), d.init(), () => {
    d.destroy();
  }));
  function h(L) {
    return L in f ? f[L] : T().classList.contains(L);
  }
  function p(L) {
    f[L] || t(5, f[L] = !0, f);
  }
  function _(L) {
    (!(L in f) || f[L]) && t(5, f[L] = !1, f);
  }
  function E(L, G) {
    m[L] != G && (G === "" || G == null ? (delete m[L], t(6, m)) : t(6, m[L] = G, m));
  }
  function b() {
    d.activate();
  }
  function M() {
    d.deactivate();
  }
  function S(L) {
    d.setRippleCenter(L);
  }
  function T() {
    return c;
  }
  function F(L) {
    le[L ? "unshift" : "push"](() => {
      c = L, t(4, c);
    });
  }
  return n.$$set = (L) => {
    e = j(j({}, e), Ke(L)), t(8, i = re(e, s)), "use" in L && t(0, l = L.use), "class" in L && t(1, r = L.class), "style" in L && t(2, o = L.style), "active" in L && t(3, u = L.active);
  }, [
    l,
    r,
    o,
    u,
    c,
    f,
    m,
    a,
    i,
    b,
    M,
    S,
    T,
    F
  ];
}
class js extends Ne {
  constructor(e) {
    super(), je(this, e, Pa, Na, Ce, {
      use: 0,
      class: 1,
      style: 2,
      active: 3,
      activate: 9,
      deactivate: 10,
      setRippleCenter: 11,
      getElement: 12
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get style() {
    return this.$$.ctx[2];
  }
  set style(e) {
    this.$$set({ style: e }), I();
  }
  get active() {
    return this.$$.ctx[3];
  }
  set active(e) {
    this.$$set({ active: e }), I();
  }
  get activate() {
    return this.$$.ctx[9];
  }
  get deactivate() {
    return this.$$.ctx[10];
  }
  get setRippleCenter() {
    return this.$$.ctx[11];
  }
  get getElement() {
    return this.$$.ctx[12];
  }
}
Fe(js, { use: {}, class: {}, style: {}, active: { type: "Boolean" } }, [], ["activate", "deactivate", "setRippleCenter", "getElement"], !0);
function $n(n) {
  let e, t, s;
  const i = (
    /*#slots*/
    n[15].default
  ), a = Le(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = J("div"), a && a.c(), W(e, "class", "mdc-notched-outline__notch"), W(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(es).join(" "));
    },
    m(l, r) {
      Y(l, e, r), a && a.m(e, null), s = !0;
    },
    p(l, r) {
      a && a.p && (!s || r & /*$$scope*/
      16384) && Oe(
        a,
        i,
        l,
        /*$$scope*/
        l[14],
        s ? Me(
          i,
          /*$$scope*/
          l[14],
          r,
          null
        ) : Re(
          /*$$scope*/
          l[14]
        ),
        null
      ), (!s || r & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        l[7]
      ).map(es).join(" "))) && W(e, "style", t);
    },
    i(l) {
      s || (R(a, l), s = !0);
    },
    o(l) {
      N(a, l), s = !1;
    },
    d(l) {
      l && Q(e), a && a.d(l);
    }
  };
}
function Ua(n) {
  let e, t, s, i, a, l, r, o, u, c, d = !/*noLabel*/
  n[3] && $n(n), f = [
    {
      class: l = X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-notched-outline": !0,
        "mdc-notched-outline--notched": (
          /*notched*/
          n[2]
        ),
        "mdc-notched-outline--no-label": (
          /*noLabel*/
          n[3]
        ),
        .../*internalClasses*/
        n[6]
      })
    },
    /*$$restProps*/
    n[10]
  ], m = {};
  for (let h = 0; h < f.length; h += 1)
    m = j(m, f[h]);
  return {
    c() {
      e = J("div"), t = J("div"), s = Se(), d && d.c(), i = Se(), a = J("div"), W(t, "class", "mdc-notched-outline__leading"), W(a, "class", "mdc-notched-outline__trailing"), fe(e, m);
    },
    m(h, p) {
      Y(h, e, p), H(e, t), H(e, s), d && d.m(e, null), H(e, i), H(e, a), n[16](e), o = !0, u || (c = [
        ce(r = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        $e(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        $e(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(h, [p]) {
      /*noLabel*/
      h[3] ? d && (et(), N(d, 1, 1, () => {
        d = null;
      }), tt()) : d ? (d.p(h, p), p & /*noLabel*/
      8 && R(d, 1)) : (d = $n(h), d.c(), R(d, 1), d.m(e, i)), fe(e, m = ee(f, [
        (!o || p & /*className, notched, noLabel, internalClasses*/
        78 && l !== (l = X({
          [
            /*className*/
            h[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            h[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            h[3]
          ),
          .../*internalClasses*/
          h[6]
        }))) && { class: l },
        p & /*$$restProps*/
        1024 && /*$$restProps*/
        h[10]
      ])), r && Te(r.update) && p & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      o || (R(d), o = !0);
    },
    o(h) {
      N(d), o = !1;
    },
    d(h) {
      h && Q(e), d && d.d(), n[16](null), u = !1, ze(c);
    }
  };
}
const es = ([n, e]) => `${n}: ${e};`;
function Ba(n, e, t) {
  const s = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Je(ke());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: d = !1 } = e, f, m, h, p = {}, _ = {};
  vt(() => (m = new vr({
    addClass: b,
    removeClass: M,
    setNotchWidthProperty: (D) => S("width", D + "px"),
    removeNotchWidthProperty: () => T("width")
  }), m.init(), () => {
    m.destroy();
  }));
  function E(D) {
    t(4, h = D.detail);
  }
  function b(D) {
    p[D] || t(6, p[D] = !0, p);
  }
  function M(D) {
    (!(D in p) || p[D]) && t(6, p[D] = !1, p);
  }
  function S(D, U) {
    _[D] != U && (U === "" || U == null ? (delete _[D], t(7, _)) : t(7, _[D] = U, _));
  }
  function T(D) {
    D in _ && (delete _[D], t(7, _));
  }
  function F(D) {
    m.notch(D);
  }
  function L() {
    m.closeNotch();
  }
  function G() {
    return f;
  }
  function ne(D) {
    le[D ? "unshift" : "push"](() => {
      f = D, t(5, f);
    });
  }
  const P = () => t(4, h = void 0);
  return n.$$set = (D) => {
    e = j(j({}, e), Ke(D)), t(10, i = re(e, s)), "use" in D && t(0, o = D.use), "class" in D && t(1, u = D.class), "notched" in D && t(2, c = D.notched), "noLabel" in D && t(3, d = D.noLabel), "$$scope" in D && t(14, l = D.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (h ? (h.addStyle("transition-duration", "0s"), b("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      h && h.removeStyle("transition-duration");
    })) : M("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    d,
    h,
    f,
    p,
    _,
    r,
    E,
    i,
    F,
    L,
    G,
    l,
    a,
    ne,
    P
  ];
}
class Fs extends Ne {
  constructor(e) {
    super(), je(this, e, Ba, Ua, Ce, {
      use: 0,
      class: 1,
      notched: 2,
      noLabel: 3,
      notch: 11,
      closeNotch: 12,
      getElement: 13
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get notched() {
    return this.$$.ctx[2];
  }
  set notched(e) {
    this.$$set({ notched: e }), I();
  }
  get noLabel() {
    return this.$$.ctx[3];
  }
  set noLabel(e) {
    this.$$set({ noLabel: e }), I();
  }
  get notch() {
    return this.$$.ctx[11];
  }
  get closeNotch() {
    return this.$$.ctx[12];
  }
  get getElement() {
    return this.$$.ctx[13];
  }
}
Fe(Fs, { use: {}, class: {}, notched: { type: "Boolean" }, noLabel: { type: "Boolean" } }, ["default"], ["notch", "closeNotch", "getElement"], !0);
function Ha(n) {
  let e;
  return {
    c() {
      e = at(
        /*content*/
        n[8]
      );
    },
    m(t, s) {
      Y(t, e, s);
    },
    p(t, s) {
      s & /*content*/
      256 && Bt(
        e,
        /*content*/
        t[8]
      );
    },
    i: nt,
    o: nt,
    d(t) {
      t && Q(e);
    }
  };
}
function xa(n) {
  let e;
  const t = (
    /*#slots*/
    n[13].default
  ), s = Le(
    t,
    n,
    /*$$scope*/
    n[12],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(i, a) {
      s && s.m(i, a), e = !0;
    },
    p(i, a) {
      s && s.p && (!e || a & /*$$scope*/
      4096) && Oe(
        s,
        t,
        i,
        /*$$scope*/
        i[12],
        e ? Me(
          t,
          /*$$scope*/
          i[12],
          a,
          null
        ) : Re(
          /*$$scope*/
          i[12]
        ),
        null
      );
    },
    i(i) {
      e || (R(s, i), e = !0);
    },
    o(i) {
      N(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function wa(n) {
  let e, t, s, i, a, l, r, o, u;
  const c = [xa, Ha], d = [];
  function f(p, _) {
    return (
      /*content*/
      p[8] == null ? 0 : 1
    );
  }
  t = f(n), s = d[t] = c[t](n);
  let m = [
    {
      class: i = X({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": (
          /*validationMsg*/
          n[4]
        ),
        "mdc-select-helper-text--validation-msg-persistent": (
          /*persistent*/
          n[3]
        ),
        .../*internalClasses*/
        n[6]
      })
    },
    {
      "aria-hidden": a = /*persistent*/
      n[3] ? void 0 : "true"
    },
    { id: (
      /*id*/
      n[2]
    ) },
    /*internalAttrs*/
    n[7],
    /*$$restProps*/
    n[10]
  ], h = {};
  for (let p = 0; p < m.length; p += 1)
    h = j(h, m[p]);
  return {
    c() {
      e = J("div"), s.c(), fe(e, h);
    },
    m(p, _) {
      Y(p, e, _), d[t].m(e, null), n[14](e), r = !0, o || (u = [
        ce(l = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ce(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], o = !0);
    },
    p(p, [_]) {
      let E = t;
      t = f(p), t === E ? d[t].p(p, _) : (et(), N(d[E], 1, 1, () => {
        d[E] = null;
      }), tt(), s = d[t], s ? s.p(p, _) : (s = d[t] = c[t](p), s.c()), R(s, 1), s.m(e, null)), fe(e, h = ee(m, [
        (!r || _ & /*className, validationMsg, persistent, internalClasses*/
        90 && i !== (i = X({
          [
            /*className*/
            p[1]
          ]: !0,
          "mdc-select-helper-text": !0,
          "mdc-select-helper-text--validation-msg": (
            /*validationMsg*/
            p[4]
          ),
          "mdc-select-helper-text--validation-msg-persistent": (
            /*persistent*/
            p[3]
          ),
          .../*internalClasses*/
          p[6]
        }))) && { class: i },
        (!r || _ & /*persistent*/
        8 && a !== (a = /*persistent*/
        p[3] ? void 0 : "true")) && { "aria-hidden": a },
        (!r || _ & /*id*/
        4) && { id: (
          /*id*/
          p[2]
        ) },
        _ & /*internalAttrs*/
        128 && /*internalAttrs*/
        p[7],
        _ & /*$$restProps*/
        1024 && /*$$restProps*/
        p[10]
      ])), l && Te(l.update) && _ & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      r || (R(s), r = !0);
    },
    o(p) {
      N(s), r = !1;
    },
    d(p) {
      p && Q(e), d[t].d(), n[14](null), o = !1, ze(u);
    }
  };
}
let Va = 0;
function Ga(n, e, t) {
  const s = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Je(ke());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + Va++ } = e, { persistent: d = !1 } = e, { validationMsg: f = !1 } = e, m, h, p = {}, _ = {}, E;
  vt(() => (h = new Dr({
    addClass: M,
    removeClass: S,
    hasClass: b,
    getAttr: T,
    setAttr: F,
    removeAttr: L,
    setContent: (P) => {
      t(8, E = P);
    }
  }), c.startsWith("SMUI-select-helper-text-") && qe(G(), "SMUISelectHelperText:id", c), qe(G(), "SMUISelectHelperText:mount", h), h.init(), () => {
    qe(G(), "SMUISelectHelperText:unmount", h), h.destroy();
  }));
  function b(P) {
    return P in p ? p[P] : G().classList.contains(P);
  }
  function M(P) {
    p[P] || t(6, p[P] = !0, p);
  }
  function S(P) {
    (!(P in p) || p[P]) && t(6, p[P] = !1, p);
  }
  function T(P) {
    var D;
    return P in _ ? (D = _[P]) !== null && D !== void 0 ? D : null : G().getAttribute(P);
  }
  function F(P, D) {
    _[P] !== D && t(7, _[P] = D, _);
  }
  function L(P) {
    (!(P in _) || _[P] != null) && t(7, _[P] = void 0, _);
  }
  function G() {
    return m;
  }
  function ne(P) {
    le[P ? "unshift" : "push"](() => {
      m = P, t(5, m);
    });
  }
  return n.$$set = (P) => {
    e = j(j({}, e), Ke(P)), t(10, i = re(e, s)), "use" in P && t(0, o = P.use), "class" in P && t(1, u = P.class), "id" in P && t(2, c = P.id), "persistent" in P && t(3, d = P.persistent), "validationMsg" in P && t(4, f = P.validationMsg), "$$scope" in P && t(12, l = P.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    m,
    p,
    _,
    E,
    r,
    i,
    G,
    l,
    a,
    ne
  ];
}
class Ns extends Ne {
  constructor(e) {
    super(), je(this, e, Ga, wa, Ce, {
      use: 0,
      class: 1,
      id: 2,
      persistent: 3,
      validationMsg: 4,
      getElement: 11
    });
  }
  get use() {
    return this.$$.ctx[0];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[1];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get id() {
    return this.$$.ctx[2];
  }
  set id(e) {
    this.$$set({ id: e }), I();
  }
  get persistent() {
    return this.$$.ctx[3];
  }
  set persistent(e) {
    this.$$set({ persistent: e }), I();
  }
  get validationMsg() {
    return this.$$.ctx[4];
  }
  set validationMsg(e) {
    this.$$set({ validationMsg: e }), I();
  }
  get getElement() {
    return this.$$.ctx[11];
  }
}
Fe(Ns, { use: {}, class: {}, id: {}, persistent: { type: "Boolean" }, validationMsg: { type: "Boolean" } }, ["default"], ["getElement"], !0);
const qa = (n) => ({}), ts = (n) => ({}), za = (n) => ({}), ns = (n) => ({}), Wa = (n) => ({}), ss = (n) => ({}), Xa = (n) => ({}), is = (n) => ({});
function rs(n) {
  let e, t = [
    { type: "hidden" },
    { required: (
      /*required*/
      n[10]
    ) },
    { disabled: (
      /*disabled*/
      n[6]
    ) },
    { value: (
      /*value*/
      n[0]
    ) },
    Ae(
      /*$$restProps*/
      n[53],
      "input$"
    )
  ], s = {};
  for (let i = 0; i < t.length; i += 1)
    s = j(s, t[i]);
  return {
    c() {
      e = J("input"), fe(e, s);
    },
    m(i, a) {
      Y(i, e, a), e.autofocus && e.focus();
    },
    p(i, a) {
      fe(e, s = ee(t, [
        { type: "hidden" },
        a[0] & /*required*/
        1024 && { required: (
          /*required*/
          i[10]
        ) },
        a[0] & /*disabled*/
        64 && { disabled: (
          /*disabled*/
          i[6]
        ) },
        a[0] & /*value*/
        1 && { value: (
          /*value*/
          i[0]
        ) },
        a[1] & /*$$restProps*/
        4194304 && Ae(
          /*$$restProps*/
          i[53],
          "input$"
        )
      ]));
    },
    d(i) {
      i && Q(e);
    }
  };
}
function as(n) {
  let e;
  return {
    c() {
      e = J("span"), W(e, "class", "mdc-select__ripple");
    },
    m(t, s) {
      Y(t, e, s);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function ls(n) {
  let e, t;
  const s = [
    { id: (
      /*inputId*/
      n[11] + "-smui-label"
    ) },
    {
      floatAbove: (
        /*$selectedTextStore*/
        n[42] !== ""
      )
    },
    { required: (
      /*required*/
      n[10]
    ) },
    Ae(
      /*$$restProps*/
      n[53],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [Ka] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < s.length; a += 1)
    i = j(i, s[a]);
  return e = new Rn({ props: i }), n[66](e), {
    c() {
      ye(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[0] & /*inputId, required*/
      3072 | l[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? ee(s, [
        l[0] & /*inputId*/
        2048 && { id: (
          /*inputId*/
          a[11] + "-smui-label"
        ) },
        l[1] & /*$selectedTextStore*/
        2048 && {
          floatAbove: (
            /*$selectedTextStore*/
            a[42] !== ""
          )
        },
        l[0] & /*required*/
        1024 && { required: (
          /*required*/
          a[10]
        ) },
        l[1] & /*$$restProps*/
        4194304 && ie(Ae(
          /*$$restProps*/
          a[53],
          "label$"
        ))
      ]) : {};
      l[0] & /*label*/
      512 | l[2] & /*$$scope*/
      16777216 && (r.$$scope = { dirty: l, ctx: a }), e.$set(r);
    },
    i(a) {
      t || (R(e.$$.fragment, a), t = !0);
    },
    o(a) {
      N(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[66](null), be(e, a);
    }
  };
}
function Ka(n) {
  let e = (
    /*label*/
    (n[9] == null ? "" : (
      /*label*/
      n[9]
    )) + ""
  ), t, s;
  const i = (
    /*#slots*/
    n[63].label
  ), a = Le(
    i,
    n,
    /*$$scope*/
    n[86],
    is
  );
  return {
    c() {
      t = at(e), a && a.c();
    },
    m(l, r) {
      Y(l, t, r), a && a.m(l, r), s = !0;
    },
    p(l, r) {
      (!s || r[0] & /*label*/
      512) && e !== (e = /*label*/
      (l[9] == null ? "" : (
        /*label*/
        l[9]
      )) + "") && Bt(t, e), a && a.p && (!s || r[2] & /*$$scope*/
      16777216) && Oe(
        a,
        i,
        l,
        /*$$scope*/
        l[86],
        s ? Me(
          i,
          /*$$scope*/
          l[86],
          r,
          Xa
        ) : Re(
          /*$$scope*/
          l[86]
        ),
        is
      );
    },
    i(l) {
      s || (R(a, l), s = !0);
    },
    o(l) {
      N(a, l), s = !1;
    },
    d(l) {
      l && Q(t), a && a.d(l);
    }
  };
}
function os(n) {
  let e, t;
  const s = [
    {
      noLabel: (
        /*noLabel*/
        n[8] || /*label*/
        n[9] == null && !/*$$slots*/
        n[52].label
      )
    },
    Ae(
      /*$$restProps*/
      n[53],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [Za] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < s.length; a += 1)
    i = j(i, s[a]);
  return e = new Fs({ props: i }), n[68](e), {
    c() {
      ye(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[0] & /*noLabel, label*/
      768 | l[1] & /*$$slots, $$restProps*/
      6291456 ? ee(s, [
        l[0] & /*noLabel, label*/
        768 | l[1] & /*$$slots*/
        2097152 && {
          noLabel: (
            /*noLabel*/
            a[8] || /*label*/
            a[9] == null && !/*$$slots*/
            a[52].label
          )
        },
        l[1] & /*$$restProps*/
        4194304 && ie(Ae(
          /*$$restProps*/
          a[53],
          "outline$"
        ))
      ]) : {};
      l[0] & /*inputId, required, label, noLabel*/
      3840 | l[1] & /*$selectedTextStore, $$restProps, floatingLabel, $$slots*/
      6293760 | l[2] & /*$$scope*/
      16777216 && (r.$$scope = { dirty: l, ctx: a }), e.$set(r);
    },
    i(a) {
      t || (R(e.$$.fragment, a), t = !0);
    },
    o(a) {
      N(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[68](null), be(e, a);
    }
  };
}
function us(n) {
  let e, t;
  const s = [
    { id: (
      /*inputId*/
      n[11] + "-smui-label"
    ) },
    {
      floatAbove: (
        /*$selectedTextStore*/
        n[42] !== ""
      )
    },
    { required: (
      /*required*/
      n[10]
    ) },
    Ae(
      /*$$restProps*/
      n[53],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [Ja] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < s.length; a += 1)
    i = j(i, s[a]);
  return e = new Rn({ props: i }), n[67](e), {
    c() {
      ye(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[0] & /*inputId, required*/
      3072 | l[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? ee(s, [
        l[0] & /*inputId*/
        2048 && { id: (
          /*inputId*/
          a[11] + "-smui-label"
        ) },
        l[1] & /*$selectedTextStore*/
        2048 && {
          floatAbove: (
            /*$selectedTextStore*/
            a[42] !== ""
          )
        },
        l[0] & /*required*/
        1024 && { required: (
          /*required*/
          a[10]
        ) },
        l[1] & /*$$restProps*/
        4194304 && ie(Ae(
          /*$$restProps*/
          a[53],
          "label$"
        ))
      ]) : {};
      l[0] & /*label*/
      512 | l[2] & /*$$scope*/
      16777216 && (r.$$scope = { dirty: l, ctx: a }), e.$set(r);
    },
    i(a) {
      t || (R(e.$$.fragment, a), t = !0);
    },
    o(a) {
      N(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[67](null), be(e, a);
    }
  };
}
function Ja(n) {
  let e = (
    /*label*/
    (n[9] == null ? "" : (
      /*label*/
      n[9]
    )) + ""
  ), t, s;
  const i = (
    /*#slots*/
    n[63].label
  ), a = Le(
    i,
    n,
    /*$$scope*/
    n[86],
    ss
  );
  return {
    c() {
      t = at(e), a && a.c();
    },
    m(l, r) {
      Y(l, t, r), a && a.m(l, r), s = !0;
    },
    p(l, r) {
      (!s || r[0] & /*label*/
      512) && e !== (e = /*label*/
      (l[9] == null ? "" : (
        /*label*/
        l[9]
      )) + "") && Bt(t, e), a && a.p && (!s || r[2] & /*$$scope*/
      16777216) && Oe(
        a,
        i,
        l,
        /*$$scope*/
        l[86],
        s ? Me(
          i,
          /*$$scope*/
          l[86],
          r,
          Wa
        ) : Re(
          /*$$scope*/
          l[86]
        ),
        ss
      );
    },
    i(l) {
      s || (R(a, l), s = !0);
    },
    o(l) {
      N(a, l), s = !1;
    },
    d(l) {
      l && Q(t), a && a.d(l);
    }
  };
}
function Za(n) {
  let e, t, s = !/*noLabel*/
  n[8] && /*label*/
  (n[9] != null || /*$$slots*/
  n[52].label) && us(n);
  return {
    c() {
      s && s.c(), e = ct();
    },
    m(i, a) {
      s && s.m(i, a), Y(i, e, a), t = !0;
    },
    p(i, a) {
      !/*noLabel*/
      i[8] && /*label*/
      (i[9] != null || /*$$slots*/
      i[52].label) ? s ? (s.p(i, a), a[0] & /*noLabel, label*/
      768 | a[1] & /*$$slots*/
      2097152 && R(s, 1)) : (s = us(i), s.c(), R(s, 1), s.m(e.parentNode, e)) : s && (et(), N(s, 1, 1, () => {
        s = null;
      }), tt());
    },
    i(i) {
      t || (R(s), t = !0);
    },
    o(i) {
      N(s), t = !1;
    },
    d(i) {
      i && Q(e), s && s.d(i);
    }
  };
}
function cs(n) {
  let e, t;
  const s = [Ae(
    /*$$restProps*/
    n[53],
    "ripple$"
  )];
  let i = {};
  for (let a = 0; a < s.length; a += 1)
    i = j(i, s[a]);
  return e = new js({ props: i }), n[69](e), {
    c() {
      ye(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[1] & /*$$restProps*/
      4194304 ? ee(s, [ie(Ae(
        /*$$restProps*/
        a[53],
        "ripple$"
      ))]) : {};
      e.$set(r);
    },
    i(a) {
      t || (R(e.$$.fragment, a), t = !0);
    },
    o(a) {
      N(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[69](null), be(e, a);
    }
  };
}
function Qa(n) {
  let e;
  const t = (
    /*#slots*/
    n[63].default
  ), s = Le(
    t,
    n,
    /*$$scope*/
    n[86],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(i, a) {
      s && s.m(i, a), e = !0;
    },
    p(i, a) {
      s && s.p && (!e || a[2] & /*$$scope*/
      16777216) && Oe(
        s,
        t,
        i,
        /*$$scope*/
        i[86],
        e ? Me(
          t,
          /*$$scope*/
          i[86],
          a,
          null
        ) : Re(
          /*$$scope*/
          i[86]
        ),
        null
      );
    },
    i(i) {
      e || (R(s, i), e = !0);
    },
    o(i) {
      N(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function Ya(n) {
  let e, t, s;
  const i = [
    { role: "listbox" },
    { wrapFocus: (
      /*wrapFocus*/
      n[35]
    ) },
    Ae(
      /*$$restProps*/
      n[53],
      "list$"
    )
  ];
  function a(r) {
    n[74](r);
  }
  let l = {
    $$slots: { default: [Qa] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < i.length; r += 1)
    l = j(l, i[r]);
  return (
    /*selectedIndex*/
    n[24] !== void 0 && (l.selectedIndex = /*selectedIndex*/
    n[24]), e = new Rs({ props: l }), le.push(() => Rt(e, "selectedIndex", a)), e.$on(
      "SMUIList:mount",
      /*SMUIList_mount_handler*/
      n[75]
    ), {
      c() {
        ye(e.$$.fragment);
      },
      m(r, o) {
        Ie(e, r, o), s = !0;
      },
      p(r, o) {
        const u = o[1] & /*wrapFocus, $$restProps*/
        4194320 ? ee(i, [
          i[0],
          o[1] & /*wrapFocus*/
          16 && { wrapFocus: (
            /*wrapFocus*/
            r[35]
          ) },
          o[1] & /*$$restProps*/
          4194304 && ie(Ae(
            /*$$restProps*/
            r[53],
            "list$"
          ))
        ]) : {};
        o[2] & /*$$scope*/
        16777216 && (u.$$scope = { dirty: o, ctx: r }), !t && o[0] & /*selectedIndex*/
        16777216 && (t = !0, u.selectedIndex = /*selectedIndex*/
        r[24], Ot(() => t = !1)), e.$set(u);
      },
      i(r) {
        s || (R(e.$$.fragment, r), s = !0);
      },
      o(r) {
        N(e.$$.fragment, r), s = !1;
      },
      d(r) {
        be(e, r);
      }
    }
  );
}
function ds(n) {
  let e, t;
  const s = [Ae(
    /*$$restProps*/
    n[53],
    "helperText$"
  )];
  let i = {
    $$slots: { default: [$a] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < s.length; a += 1)
    i = j(i, s[a]);
  return e = new Ns({ props: i }), e.$on(
    "SMUISelectHelperText:id",
    /*SMUISelectHelperText_id_handler*/
    n[83]
  ), e.$on(
    "SMUISelectHelperText:mount",
    /*SMUISelectHelperText_mount_handler*/
    n[84]
  ), e.$on(
    "SMUISelectHelperText:unmount",
    /*SMUISelectHelperText_unmount_handler*/
    n[85]
  ), {
    c() {
      ye(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[1] & /*$$restProps*/
      4194304 ? ee(s, [ie(Ae(
        /*$$restProps*/
        a[53],
        "helperText$"
      ))]) : {};
      l[2] & /*$$scope*/
      16777216 && (r.$$scope = { dirty: l, ctx: a }), e.$set(r);
    },
    i(a) {
      t || (R(e.$$.fragment, a), t = !0);
    },
    o(a) {
      N(e.$$.fragment, a), t = !1;
    },
    d(a) {
      be(e, a);
    }
  };
}
function $a(n) {
  let e;
  const t = (
    /*#slots*/
    n[63].helperText
  ), s = Le(
    t,
    n,
    /*$$scope*/
    n[86],
    ts
  );
  return {
    c() {
      s && s.c();
    },
    m(i, a) {
      s && s.m(i, a), e = !0;
    },
    p(i, a) {
      s && s.p && (!e || a[2] & /*$$scope*/
      16777216) && Oe(
        s,
        t,
        i,
        /*$$scope*/
        i[86],
        e ? Me(
          t,
          /*$$scope*/
          i[86],
          a,
          qa
        ) : Re(
          /*$$scope*/
          i[86]
        ),
        ts
      );
    },
    i(i) {
      e || (R(s, i), e = !0);
    },
    o(i) {
      N(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function el(n) {
  let e, t, s, i, a, l, r, o, u, c, d, f, m, h, p, _, E, b, M, S, T, F, L, G, ne, P, D, U, x, y, k, w, ge, O, ue, Ee, We, ae, st, rt, V = (
    /*hiddenInput*/
    n[12] && rs(n)
  ), me = (
    /*variant*/
    n[7] === "filled" && as()
  ), he = (
    /*variant*/
    n[7] !== "outlined" && !/*noLabel*/
    n[8] && /*label*/
    (n[9] != null || /*$$slots*/
    n[52].label) && ls(n)
  ), de = (
    /*variant*/
    n[7] === "outlined" && os(n)
  );
  const we = (
    /*#slots*/
    n[63].leadingIcon
  ), C = Le(
    we,
    n,
    /*$$scope*/
    n[86],
    ns
  );
  let se = [
    {
      id: d = /*inputId*/
      n[11] + "-smui-selected-text"
    },
    {
      class: f = X({
        [
          /*selectedText$class*/
          n[19]
        ]: !0,
        "mdc-select__selected-text": !0
      })
    },
    { role: "button" },
    { "aria-haspopup": "listbox" },
    {
      "aria-labelledby": m = /*inputId*/
      n[11] + "-smui-label"
    },
    Ae(
      /*$$restProps*/
      n[53],
      "selectedText$"
    )
  ], Ue = {};
  for (let K = 0; K < se.length; K += 1)
    Ue = j(Ue, se[K]);
  let _e = [
    {
      class: p = X({
        [
          /*selectedTextContainer$class*/
          n[17]
        ]: !0,
        "mdc-select__selected-text-container": !0
      })
    },
    Ae(
      /*$$restProps*/
      n[53],
      "selectedTextContainer$"
    )
  ], ut = {};
  for (let K = 0; K < _e.length; K += 1)
    ut = j(ut, _e[K]);
  let A = [
    {
      class: F = X({
        [
          /*dropdownIcon$class*/
          n[21]
        ]: !0,
        "mdc-select__dropdown-icon": !0
      })
    },
    Ae(
      /*$$restProps*/
      n[53],
      "dropdownIcon$"
    )
  ], Z = {};
  for (let K = 0; K < A.length; K += 1)
    Z = j(Z, A[K]);
  let $ = (
    /*variant*/
    n[7] !== "outlined" && /*ripple*/
    n[5] && cs(n)
  ), _t = [
    {
      class: ne = X({
        [
          /*anchor$class*/
          n[15]
        ]: !0,
        "mdc-select__anchor": !0
      })
    },
    {
      "aria-required": P = /*required*/
      n[10] ? "true" : void 0
    },
    {
      "aria-disabled": D = /*disabled*/
      n[6] ? "true" : void 0
    },
    { "aria-controls": (
      /*helperId*/
      n[30]
    ) },
    { "aria-describedby": (
      /*helperId*/
      n[30]
    ) },
    /*selectAnchorAttrs*/
    n[29],
    Ae(
      /*$$restProps*/
      n[53],
      "anchor$"
    )
  ], Ze = {};
  for (let K = 0; K < _t.length; K += 1)
    Ze = j(Ze, _t[K]);
  const ft = [
    {
      class: X({
        [
          /*menu$class*/
          n[22]
        ]: !0,
        "mdc-select__menu": !0,
        .../*menuClasses*/
        n[32]
      })
    },
    { fullWidth: !0 },
    { anchor: !1 },
    { anchorElement: (
      /*anchorElement*/
      n[33]
    ) },
    { anchorCorner: (
      /*anchorCorner*/
      n[34]
    ) },
    Ae(
      /*$$restProps*/
      n[53],
      "menu$"
    )
  ];
  function ht(K) {
    n[76](K);
  }
  let It = {
    $$slots: { default: [Ya] },
    $$scope: { ctx: n }
  };
  for (let K = 0; K < ft.length; K += 1)
    It = j(It, ft[K]);
  /*menuOpen*/
  n[31] !== void 0 && (It.open = /*menuOpen*/
  n[31]), y = new Ls({ props: It }), le.push(() => Rt(y, "open", ht)), y.$on(
    "SMUIMenu:selected",
    /*SMUIMenu_selected_handler*/
    n[77]
  ), y.$on(
    "SMUIMenuSurface:closing",
    /*SMUIMenuSurface_closing_handler*/
    n[78]
  ), y.$on(
    "SMUIMenuSurface:closed",
    /*SMUIMenuSurface_closed_handler*/
    n[79]
  ), y.$on(
    "SMUIMenuSurface:opened",
    /*SMUIMenuSurface_opened_handler*/
    n[80]
  );
  let Qe = [
    {
      class: w = X({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-select": !0,
        "mdc-select--required": (
          /*required*/
          n[10]
        ),
        "mdc-select--disabled": (
          /*disabled*/
          n[6]
        ),
        "mdc-select--filled": (
          /*variant*/
          n[7] === "filled"
        ),
        "mdc-select--outlined": (
          /*variant*/
          n[7] === "outlined"
        ),
        "smui-select--standard": (
          /*variant*/
          n[7] === "standard"
        ),
        "mdc-select--with-leading-icon": (
          /*isUninitializedValue*/
          n[44](
            /*withLeadingIcon*/
            n[13]
          ) ? (
            /*$$slots*/
            n[52].leadingIcon
          ) : (
            /*withLeadingIcon*/
            n[13]
          )
        ),
        "mdc-select--no-label": (
          /*noLabel*/
          n[8] || /*label*/
          n[9] == null && !/*$$slots*/
          n[52].label
        ),
        "mdc-select--invalid": (
          /*invalid*/
          n[1]
        ),
        "mdc-select--activated": (
          /*menuOpen*/
          n[31]
        ),
        "mdc-data-table__pagination-rows-per-page-select": (
          /*context*/
          n[45] === "data-table:pagination"
        ),
        .../*internalClasses*/
        n[26]
      })
    },
    {
      style: ge = Object.entries(
        /*internalStyles*/
        n[27]
      ).map(fs).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    hn(
      /*$$restProps*/
      n[53],
      [
        "input$",
        "anchor$",
        "label$",
        "outline$",
        "selectedTextContainer$",
        "selectedText$",
        "dropdownIcon$",
        "ripple$",
        "menu$",
        "list$",
        "helperText$"
      ]
    )
  ], it = {};
  for (let K = 0; K < Qe.length; K += 1)
    it = j(it, Qe[K]);
  let pe = (
    /*$$slots*/
    n[52].helperText && ds(n)
  );
  return {
    c() {
      e = J("div"), V && V.c(), t = Se(), s = J("div"), me && me.c(), i = Se(), he && he.c(), a = Se(), de && de.c(), l = Se(), C && C.c(), r = Se(), o = J("span"), u = J("span"), c = at(
        /*$selectedTextStore*/
        n[42]
      ), E = Se(), b = J("span"), M = Qt("svg"), S = Qt("polygon"), T = Qt("polygon"), G = Se(), $ && $.c(), x = Se(), ye(y.$$.fragment), Ee = Se(), pe && pe.c(), We = ct(), fe(u, Ue), fe(o, ut), W(S, "class", "mdc-select__dropdown-icon-inactive"), W(S, "stroke", "none"), W(S, "fill-rule", "evenodd"), W(S, "points", "7 10 12 15 17 10"), W(T, "class", "mdc-select__dropdown-icon-active"), W(T, "stroke", "none"), W(T, "fill-rule", "evenodd"), W(T, "points", "7 15 12 10 17 15"), W(M, "class", "mdc-select__dropdown-icon-graphic"), W(M, "viewBox", "7 10 10 5"), W(M, "focusable", "false"), fe(b, Z), fe(s, Ze), fe(e, it);
    },
    m(K, B) {
      Y(K, e, B), V && V.m(e, null), H(e, t), H(e, s), me && me.m(s, null), H(s, i), he && he.m(s, null), H(s, a), de && de.m(s, null), H(s, l), C && C.m(s, null), H(s, r), H(s, o), H(o, u), H(u, c), H(s, E), H(s, b), H(b, M), H(M, S), H(M, T), H(s, G), $ && $.m(s, null), n[70](s), H(e, x), Ie(y, e, null), n[81](e), Y(K, Ee, B), pe && pe.m(K, B), Y(K, We, B), ae = !0, st || (rt = [
        ce(h = Xe.call(
          null,
          u,
          /*selectedText$use*/
          n[18]
        )),
        ce(_ = Xe.call(
          null,
          o,
          /*selectedTextContainer$use*/
          n[16]
        )),
        ce(L = Xe.call(
          null,
          b,
          /*dropdownIcon$use*/
          n[20]
        )),
        ce(U = Xe.call(
          null,
          s,
          /*anchor$use*/
          n[14]
        )),
        $e(
          s,
          "focus",
          /*focus_handler_1*/
          n[71]
        ),
        $e(
          s,
          "blur",
          /*blur_handler_1*/
          n[72]
        ),
        $e(
          s,
          "click",
          /*click_handler*/
          n[73]
        ),
        $e(s, "keydown", function() {
          Te(
            /*instance*/
            n[23] && /*instance*/
            n[23].handleKeydown.bind(
              /*instance*/
              n[23]
            )
          ) && /*instance*/
          (n[23] && /*instance*/
          n[23].handleKeydown.bind(
            /*instance*/
            n[23]
          )).apply(this, arguments);
        }),
        $e(
          s,
          "focus",
          /*focus_handler*/
          n[64]
        ),
        $e(
          s,
          "blur",
          /*blur_handler*/
          n[65]
        ),
        ce(O = un.call(null, e, {
          ripple: (
            /*variant*/
            n[7] === "filled"
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            n[49]
          ),
          removeClass: (
            /*removeClass*/
            n[50]
          ),
          addStyle: (
            /*addStyle*/
            n[51]
          )
        })),
        ce(Vr.call(null, e, {
          addClass: (
            /*addClass*/
            n[49]
          ),
          removeClass: (
            /*removeClass*/
            n[50]
          )
        })),
        ce(ue = Xe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ce(
          /*forwardEvents*/
          n[43].call(null, e)
        ),
        $e(
          e,
          "SMUISelectLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[48]
        ),
        $e(
          e,
          "SMUISelectLeadingIcon:unmount",
          /*SMUISelectLeadingIcon_unmount_handler*/
          n[82]
        )
      ], st = !0);
    },
    p(K, B) {
      n = K, /*hiddenInput*/
      n[12] ? V ? V.p(n, B) : (V = rs(n), V.c(), V.m(e, t)) : V && (V.d(1), V = null), /*variant*/
      n[7] === "filled" ? me || (me = as(), me.c(), me.m(s, i)) : me && (me.d(1), me = null), /*variant*/
      n[7] !== "outlined" && !/*noLabel*/
      n[8] && /*label*/
      (n[9] != null || /*$$slots*/
      n[52].label) ? he ? (he.p(n, B), B[0] & /*variant, noLabel, label*/
      896 | B[1] & /*$$slots*/
      2097152 && R(he, 1)) : (he = ls(n), he.c(), R(he, 1), he.m(s, a)) : he && (et(), N(he, 1, 1, () => {
        he = null;
      }), tt()), /*variant*/
      n[7] === "outlined" ? de ? (de.p(n, B), B[0] & /*variant*/
      128 && R(de, 1)) : (de = os(n), de.c(), R(de, 1), de.m(s, l)) : de && (et(), N(de, 1, 1, () => {
        de = null;
      }), tt()), C && C.p && (!ae || B[2] & /*$$scope*/
      16777216) && Oe(
        C,
        we,
        n,
        /*$$scope*/
        n[86],
        ae ? Me(
          we,
          /*$$scope*/
          n[86],
          B,
          za
        ) : Re(
          /*$$scope*/
          n[86]
        ),
        ns
      ), (!ae || B[1] & /*$selectedTextStore*/
      2048) && Mi(
        c,
        /*$selectedTextStore*/
        n[42],
        Ue.contenteditable
      ), fe(u, Ue = ee(se, [
        (!ae || B[0] & /*inputId*/
        2048 && d !== (d = /*inputId*/
        n[11] + "-smui-selected-text")) && { id: d },
        (!ae || B[0] & /*selectedText$class*/
        524288 && f !== (f = X({
          [
            /*selectedText$class*/
            n[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: f },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!ae || B[0] & /*inputId*/
        2048 && m !== (m = /*inputId*/
        n[11] + "-smui-label")) && {
          "aria-labelledby": m
        },
        B[1] & /*$$restProps*/
        4194304 && Ae(
          /*$$restProps*/
          n[53],
          "selectedText$"
        )
      ])), h && Te(h.update) && B[0] & /*selectedText$use*/
      262144 && h.update.call(
        null,
        /*selectedText$use*/
        n[18]
      ), fe(o, ut = ee(_e, [
        (!ae || B[0] & /*selectedTextContainer$class*/
        131072 && p !== (p = X({
          [
            /*selectedTextContainer$class*/
            n[17]
          ]: !0,
          "mdc-select__selected-text-container": !0
        }))) && { class: p },
        B[1] & /*$$restProps*/
        4194304 && Ae(
          /*$$restProps*/
          n[53],
          "selectedTextContainer$"
        )
      ])), _ && Te(_.update) && B[0] & /*selectedTextContainer$use*/
      65536 && _.update.call(
        null,
        /*selectedTextContainer$use*/
        n[16]
      ), fe(b, Z = ee(A, [
        (!ae || B[0] & /*dropdownIcon$class*/
        2097152 && F !== (F = X({
          [
            /*dropdownIcon$class*/
            n[21]
          ]: !0,
          "mdc-select__dropdown-icon": !0
        }))) && { class: F },
        B[1] & /*$$restProps*/
        4194304 && Ae(
          /*$$restProps*/
          n[53],
          "dropdownIcon$"
        )
      ])), L && Te(L.update) && B[0] & /*dropdownIcon$use*/
      1048576 && L.update.call(
        null,
        /*dropdownIcon$use*/
        n[20]
      ), /*variant*/
      n[7] !== "outlined" && /*ripple*/
      n[5] ? $ ? ($.p(n, B), B[0] & /*variant, ripple*/
      160 && R($, 1)) : ($ = cs(n), $.c(), R($, 1), $.m(s, null)) : $ && (et(), N($, 1, 1, () => {
        $ = null;
      }), tt()), fe(s, Ze = ee(_t, [
        (!ae || B[0] & /*anchor$class*/
        32768 && ne !== (ne = X({
          [
            /*anchor$class*/
            n[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: ne },
        (!ae || B[0] & /*required*/
        1024 && P !== (P = /*required*/
        n[10] ? "true" : void 0)) && {
          "aria-required": P
        },
        (!ae || B[0] & /*disabled*/
        64 && D !== (D = /*disabled*/
        n[6] ? "true" : void 0)) && {
          "aria-disabled": D
        },
        (!ae || B[0] & /*helperId*/
        1073741824) && { "aria-controls": (
          /*helperId*/
          n[30]
        ) },
        (!ae || B[0] & /*helperId*/
        1073741824) && { "aria-describedby": (
          /*helperId*/
          n[30]
        ) },
        B[0] & /*selectAnchorAttrs*/
        536870912 && /*selectAnchorAttrs*/
        n[29],
        B[1] & /*$$restProps*/
        4194304 && Ae(
          /*$$restProps*/
          n[53],
          "anchor$"
        )
      ])), U && Te(U.update) && B[0] & /*anchor$use*/
      16384 && U.update.call(
        null,
        /*anchor$use*/
        n[14]
      );
      const Ye = B[0] & /*menu$class*/
      4194304 | B[1] & /*menuClasses, anchorElement, anchorCorner, $$restProps*/
      4194318 ? ee(ft, [
        B[0] & /*menu$class*/
        4194304 | B[1] & /*menuClasses*/
        2 && {
          class: X({
            [
              /*menu$class*/
              n[22]
            ]: !0,
            "mdc-select__menu": !0,
            .../*menuClasses*/
            n[32]
          })
        },
        ft[1],
        ft[2],
        B[1] & /*anchorElement*/
        4 && { anchorElement: (
          /*anchorElement*/
          n[33]
        ) },
        B[1] & /*anchorCorner*/
        8 && { anchorCorner: (
          /*anchorCorner*/
          n[34]
        ) },
        B[1] & /*$$restProps*/
        4194304 && ie(Ae(
          /*$$restProps*/
          n[53],
          "menu$"
        ))
      ]) : {};
      B[0] & /*selectedIndex*/
      16777216 | B[1] & /*wrapFocus, $$restProps, list*/
      4194352 | B[2] & /*$$scope*/
      16777216 && (Ye.$$scope = { dirty: B, ctx: n }), !k && B[1] & /*menuOpen*/
      1 && (k = !0, Ye.open = /*menuOpen*/
      n[31], Ot(() => k = !1)), y.$set(Ye), fe(e, it = ee(Qe, [
        (!ae || B[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | B[1] & /*$$slots, menuOpen*/
        2097153 && w !== (w = X({
          [
            /*className*/
            n[3]
          ]: !0,
          "mdc-select": !0,
          "mdc-select--required": (
            /*required*/
            n[10]
          ),
          "mdc-select--disabled": (
            /*disabled*/
            n[6]
          ),
          "mdc-select--filled": (
            /*variant*/
            n[7] === "filled"
          ),
          "mdc-select--outlined": (
            /*variant*/
            n[7] === "outlined"
          ),
          "smui-select--standard": (
            /*variant*/
            n[7] === "standard"
          ),
          "mdc-select--with-leading-icon": (
            /*isUninitializedValue*/
            n[44](
              /*withLeadingIcon*/
              n[13]
            ) ? (
              /*$$slots*/
              n[52].leadingIcon
            ) : (
              /*withLeadingIcon*/
              n[13]
            )
          ),
          "mdc-select--no-label": (
            /*noLabel*/
            n[8] || /*label*/
            n[9] == null && !/*$$slots*/
            n[52].label
          ),
          "mdc-select--invalid": (
            /*invalid*/
            n[1]
          ),
          "mdc-select--activated": (
            /*menuOpen*/
            n[31]
          ),
          "mdc-data-table__pagination-rows-per-page-select": (
            /*context*/
            n[45] === "data-table:pagination"
          ),
          .../*internalClasses*/
          n[26]
        }))) && { class: w },
        (!ae || B[0] & /*internalStyles, style*/
        134217744 && ge !== (ge = Object.entries(
          /*internalStyles*/
          n[27]
        ).map(fs).concat([
          /*style*/
          n[4]
        ]).join(" "))) && { style: ge },
        B[1] & /*$$restProps*/
        4194304 && hn(
          /*$$restProps*/
          n[53],
          [
            "input$",
            "anchor$",
            "label$",
            "outline$",
            "selectedTextContainer$",
            "selectedText$",
            "dropdownIcon$",
            "ripple$",
            "menu$",
            "list$",
            "helperText$"
          ]
        )
      ])), O && Te(O.update) && B[0] & /*variant*/
      128 && O.update.call(null, {
        ripple: (
          /*variant*/
          n[7] === "filled"
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          n[49]
        ),
        removeClass: (
          /*removeClass*/
          n[50]
        ),
        addStyle: (
          /*addStyle*/
          n[51]
        )
      }), ue && Te(ue.update) && B[0] & /*use*/
      4 && ue.update.call(
        null,
        /*use*/
        n[2]
      ), /*$$slots*/
      n[52].helperText ? pe ? (pe.p(n, B), B[1] & /*$$slots*/
      2097152 && R(pe, 1)) : (pe = ds(n), pe.c(), R(pe, 1), pe.m(We.parentNode, We)) : pe && (et(), N(pe, 1, 1, () => {
        pe = null;
      }), tt());
    },
    i(K) {
      ae || (R(he), R(de), R(C, K), R($), R(y.$$.fragment, K), R(pe), ae = !0);
    },
    o(K) {
      N(he), N(de), N(C, K), N($), N(y.$$.fragment, K), N(pe), ae = !1;
    },
    d(K) {
      K && (Q(e), Q(Ee), Q(We)), V && V.d(), me && me.d(), he && he.d(), de && de.d(), C && C.d(K), $ && $.d(), n[70](null), be(y), n[81](null), pe && pe.d(K), st = !1, ze(rt);
    }
  };
}
let tl = 0;
function nl(n) {
  const e = n.currentTarget.getBoundingClientRect();
  return (sl(n) ? n.touches[0].clientX : n.clientX) - e.left;
}
function sl(n) {
  return "touches" in n;
}
const fs = ([n, e]) => `${n}: ${e};`;
function il(n, e, t) {
  const s = [
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "variant",
    "noLabel",
    "label",
    "value",
    "key",
    "dirty",
    "invalid",
    "updateInvalid",
    "required",
    "inputId",
    "hiddenInput",
    "withLeadingIcon",
    "anchor$use",
    "anchor$class",
    "selectedTextContainer$use",
    "selectedTextContainer$class",
    "selectedText$use",
    "selectedText$class",
    "dropdownIcon$use",
    "dropdownIcon$class",
    "menu$class",
    "getUseDefaultValidation",
    "setUseDefaultValidation",
    "focus",
    "layout",
    "getElement"
  ];
  let i = re(e, s), a, l, { $$slots: r = {}, $$scope: o } = e;
  const u = _i(r), c = Je(ke());
  let d = () => {
  };
  function f(g) {
    return g === d;
  }
  let { use: m = [] } = e, { class: h = "" } = e, { style: p = "" } = e, { ripple: _ = !0 } = e, { disabled: E = !1 } = e, { variant: b = "standard" } = e, { noLabel: M = !1 } = e, { label: S = void 0 } = e, { value: T = "" } = e, { key: F = (g) => g } = e, { dirty: L = !1 } = e, { invalid: G = d } = e, { updateInvalid: ne = f(G) } = e;
  const P = f(G);
  f(G) && (G = !1);
  let { required: D = !1 } = e, { inputId: U = "SMUI-select-" + tl++ } = e, { hiddenInput: x = !1 } = e, { withLeadingIcon: y = d } = e, { anchor$use: k = [] } = e, { anchor$class: w = "" } = e, { selectedTextContainer$use: ge = [] } = e, { selectedTextContainer$class: O = "" } = e, { selectedText$use: ue = [] } = e, { selectedText$class: Ee = "" } = e, { dropdownIcon$use: We = [] } = e, { dropdownIcon$class: ae = "" } = e, { menu$class: st = "" } = e, rt, V, me = {}, he = {}, de, we = {}, C = -1, se, Ue = Pe("SMUI:addLayoutListener"), _e, ut = !1, A = {}, Z, $, _t = !1, Ze, ft = Pe("SMUI:select:context"), ht, It, Qe, it, pe;
  Ge("SMUI:list:role", ""), Ge("SMUI:list:nav", !1);
  const K = Ln("");
  $t(n, K, (g) => t(42, a = g)), Ge("SMUI:select:selectedText", K);
  const B = Ln(T);
  $t(n, B, (g) => t(88, l = g)), Ge("SMUI:select:value", B);
  let Ye = C;
  Ue && (_e = Ue(jn)), vt(() => (t(23, V = new Rr(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (g) => {
        cn(K, a = g, a);
      },
      isSelectAnchorFocused: () => document.activeElement === de,
      getSelectAnchorAttr: xs,
      setSelectAnchorAttr: ws,
      removeSelectAnchorAttr: Vs,
      addMenuClass: kt,
      removeMenuClass: pn,
      openMenu: () => {
        t(31, ut = !0);
      },
      closeMenu: () => {
        t(31, ut = !1);
      },
      getAnchorElement: () => de,
      setMenuAnchorElement: (g) => {
        t(33, Z = g);
      },
      setMenuAnchorCorner: (g) => {
        t(34, $ = g);
      },
      setMenuWrapFocus: (g) => {
        t(35, _t = g);
      },
      getSelectedIndex: () => C,
      setSelectedIndex: (g) => {
        t(62, Ye = g), t(24, C = g), t(0, T = tn()[C]);
      },
      focusMenuItemAtIndex: (g) => {
        Ze.focusItemAtIndex(g);
      },
      getMenuItemCount: () => Ze.items.length,
      getMenuItemValues: () => tn().map(F),
      getMenuItemTextAtIndex: (g) => Ze.getPrimaryTextAtIndex(g),
      isTypeaheadInProgress: () => Ze.typeaheadInProgress,
      typeaheadMatchItem: (g, mt) => Ze.typeaheadMatchItem(g, mt),
      // getCommonAdapterMethods
      addClass: z,
      removeClass: q,
      hasClass: v,
      setRippleCenter: (g) => it && it.setRippleCenter(g),
      activateBottomLine: () => it && it.activate(),
      deactivateBottomLine: () => it && it.deactivate(),
      notifyChange: (g) => {
        t(54, L = !0), ne && t(1, G = !V.isValid()), qe(nn(), "SMUISelect:change", { value: T, index: C }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!pe,
      notchOutline: (g) => pe && pe.notch(g),
      closeOutline: () => pe && pe.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!Qe,
      floatLabel: (g) => Qe && Qe.float(g),
      getLabelWidth: () => Qe ? Qe.getWidth() : 0,
      setLabelRequired: (g) => Qe && Qe.setRequired(g)
    },
    {
      get helperText() {
        return It;
      },
      get leadingIcon() {
        return ht;
      }
    }
  )), t(24, C = tn().indexOf(T)), V.init(), kn(P), () => {
    V.destroy();
  })), Ht(() => {
    _e && _e();
  });
  function mn(g) {
    t(37, ht = g.detail);
  }
  function v(g) {
    return g in me ? me[g] : nn().classList.contains(g);
  }
  function z(g) {
    me[g] || t(26, me[g] = !0, me);
  }
  function q(g) {
    (!(g in me) || me[g]) && t(26, me[g] = !1, me);
  }
  function ve(g, mt) {
    he[g] != mt && (mt === "" || mt == null ? (delete he[g], t(27, he)) : t(27, he[g] = mt, he));
  }
  function kt(g) {
    A[g] || t(32, A[g] = !0, A);
  }
  function pn(g) {
    (!(g in A) || A[g]) && t(32, A[g] = !1, A);
  }
  function xs(g) {
    var mt;
    return g in we ? (mt = we[g]) !== null && mt !== void 0 ? mt : null : nn().getAttribute(g);
  }
  function ws(g, mt) {
    we[g] !== mt && t(29, we[g] = mt, we);
  }
  function Vs(g) {
    (!(g in we) || we[g] != null) && t(29, we[g] = void 0, we);
  }
  function tn() {
    return Ze.getOrderedList().map((g) => g.getValue());
  }
  function Gs() {
    return V.getUseDefaultValidation();
  }
  function kn(g) {
    V.setUseDefaultValidation(g);
  }
  function qs() {
    de.focus();
  }
  function jn() {
    V.layout();
  }
  function nn() {
    return rt;
  }
  function zs(g) {
    Nn.call(this, n, g);
  }
  function Ws(g) {
    Nn.call(this, n, g);
  }
  function Xs(g) {
    le[g ? "unshift" : "push"](() => {
      Qe = g, t(39, Qe);
    });
  }
  function Ks(g) {
    le[g ? "unshift" : "push"](() => {
      Qe = g, t(39, Qe);
    });
  }
  function Js(g) {
    le[g ? "unshift" : "push"](() => {
      pe = g, t(41, pe);
    });
  }
  function Zs(g) {
    le[g ? "unshift" : "push"](() => {
      it = g, t(40, it);
    });
  }
  function Qs(g) {
    le[g ? "unshift" : "push"](() => {
      de = g, t(28, de);
    });
  }
  const Ys = () => V && V.handleFocus(), $s = () => V && V.handleBlur(), ei = (g) => {
    de.focus(), V && V.handleClick(nl(g));
  };
  function ti(g) {
    C = g, t(24, C);
  }
  const ni = (g) => t(36, Ze = g.detail);
  function si(g) {
    ut = g, t(31, ut);
  }
  const ii = (g) => V && V.handleMenuItemAction(g.detail.index), ri = () => V && V.handleMenuClosing(), ai = () => V && V.handleMenuClosed(), li = () => V && V.handleMenuOpened();
  function oi(g) {
    le[g ? "unshift" : "push"](() => {
      rt = g, t(25, rt);
    });
  }
  const ui = () => t(37, ht = void 0), ci = (g) => t(30, se = g.detail), di = (g) => t(38, It = g.detail), fi = () => {
    t(30, se = void 0), t(38, It = void 0);
  };
  return n.$$set = (g) => {
    e = j(j({}, e), Ke(g)), t(53, i = re(e, s)), "use" in g && t(2, m = g.use), "class" in g && t(3, h = g.class), "style" in g && t(4, p = g.style), "ripple" in g && t(5, _ = g.ripple), "disabled" in g && t(6, E = g.disabled), "variant" in g && t(7, b = g.variant), "noLabel" in g && t(8, M = g.noLabel), "label" in g && t(9, S = g.label), "value" in g && t(0, T = g.value), "key" in g && t(55, F = g.key), "dirty" in g && t(54, L = g.dirty), "invalid" in g && t(1, G = g.invalid), "updateInvalid" in g && t(56, ne = g.updateInvalid), "required" in g && t(10, D = g.required), "inputId" in g && t(11, U = g.inputId), "hiddenInput" in g && t(12, x = g.hiddenInput), "withLeadingIcon" in g && t(13, y = g.withLeadingIcon), "anchor$use" in g && t(14, k = g.anchor$use), "anchor$class" in g && t(15, w = g.anchor$class), "selectedTextContainer$use" in g && t(16, ge = g.selectedTextContainer$use), "selectedTextContainer$class" in g && t(17, O = g.selectedTextContainer$class), "selectedText$use" in g && t(18, ue = g.selectedText$use), "selectedText$class" in g && t(19, Ee = g.selectedText$class), "dropdownIcon$use" in g && t(20, We = g.dropdownIcon$use), "dropdownIcon$class" in g && t(21, ae = g.dropdownIcon$class), "menu$class" in g && t(22, st = g.menu$class), "$$scope" in g && t(86, o = g.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | n.$$.dirty[2] & /*previousSelectedIndex*/
    1 && Ye !== C)
      if (t(62, Ye = C), V)
        V.setSelectedIndex(
          C,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const g = tn();
        T !== g[C] && t(0, T = g[C]);
      }
    n.$$.dirty[0] & /*value*/
    1 && cn(B, l = T, l), n.$$.dirty[0] & /*instance, value*/
    8388609 | n.$$.dirty[1] & /*key*/
    16777216 && V && V.getValue() !== F(T) && V.setValue(F(T)), n.$$.dirty[0] & /*instance, disabled*/
    8388672 && V && V.getDisabled() !== E && V.setDisabled(E), n.$$.dirty[0] & /*instance, invalid*/
    8388610 | n.$$.dirty[1] & /*dirty, updateInvalid*/
    41943040 && V && L && V.isValid() !== !G && (ne ? t(1, G = !V.isValid()) : V.setValid(!G)), n.$$.dirty[0] & /*instance, required*/
    8389632 && V && V.getRequired() !== D && V.setRequired(D);
  }, [
    T,
    G,
    m,
    h,
    p,
    _,
    E,
    b,
    M,
    S,
    D,
    U,
    x,
    y,
    k,
    w,
    ge,
    O,
    ue,
    Ee,
    We,
    ae,
    st,
    V,
    C,
    rt,
    me,
    he,
    de,
    we,
    se,
    ut,
    A,
    Z,
    $,
    _t,
    Ze,
    ht,
    It,
    Qe,
    it,
    pe,
    a,
    c,
    f,
    ft,
    K,
    B,
    mn,
    z,
    q,
    ve,
    u,
    i,
    L,
    F,
    ne,
    Gs,
    kn,
    qs,
    jn,
    nn,
    Ye,
    r,
    zs,
    Ws,
    Xs,
    Ks,
    Js,
    Zs,
    Qs,
    Ys,
    $s,
    ei,
    ti,
    ni,
    si,
    ii,
    ri,
    ai,
    li,
    oi,
    ui,
    ci,
    di,
    fi,
    o
  ];
}
class Ps extends Ne {
  constructor(e) {
    super(), je(
      this,
      e,
      il,
      el,
      Ce,
      {
        use: 2,
        class: 3,
        style: 4,
        ripple: 5,
        disabled: 6,
        variant: 7,
        noLabel: 8,
        label: 9,
        value: 0,
        key: 55,
        dirty: 54,
        invalid: 1,
        updateInvalid: 56,
        required: 10,
        inputId: 11,
        hiddenInput: 12,
        withLeadingIcon: 13,
        anchor$use: 14,
        anchor$class: 15,
        selectedTextContainer$use: 16,
        selectedTextContainer$class: 17,
        selectedText$use: 18,
        selectedText$class: 19,
        dropdownIcon$use: 20,
        dropdownIcon$class: 21,
        menu$class: 22,
        getUseDefaultValidation: 57,
        setUseDefaultValidation: 58,
        focus: 59,
        layout: 60,
        getElement: 61
      },
      null,
      [-1, -1, -1, -1]
    );
  }
  get use() {
    return this.$$.ctx[2];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[3];
  }
  set class(e) {
    this.$$set({ class: e }), I();
  }
  get style() {
    return this.$$.ctx[4];
  }
  set style(e) {
    this.$$set({ style: e }), I();
  }
  get ripple() {
    return this.$$.ctx[5];
  }
  set ripple(e) {
    this.$$set({ ripple: e }), I();
  }
  get disabled() {
    return this.$$.ctx[6];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), I();
  }
  get variant() {
    return this.$$.ctx[7];
  }
  set variant(e) {
    this.$$set({ variant: e }), I();
  }
  get noLabel() {
    return this.$$.ctx[8];
  }
  set noLabel(e) {
    this.$$set({ noLabel: e }), I();
  }
  get label() {
    return this.$$.ctx[9];
  }
  set label(e) {
    this.$$set({ label: e }), I();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), I();
  }
  get key() {
    return this.$$.ctx[55];
  }
  set key(e) {
    this.$$set({ key: e }), I();
  }
  get dirty() {
    return this.$$.ctx[54];
  }
  set dirty(e) {
    this.$$set({ dirty: e }), I();
  }
  get invalid() {
    return this.$$.ctx[1];
  }
  set invalid(e) {
    this.$$set({ invalid: e }), I();
  }
  get updateInvalid() {
    return this.$$.ctx[56];
  }
  set updateInvalid(e) {
    this.$$set({ updateInvalid: e }), I();
  }
  get required() {
    return this.$$.ctx[10];
  }
  set required(e) {
    this.$$set({ required: e }), I();
  }
  get inputId() {
    return this.$$.ctx[11];
  }
  set inputId(e) {
    this.$$set({ inputId: e }), I();
  }
  get hiddenInput() {
    return this.$$.ctx[12];
  }
  set hiddenInput(e) {
    this.$$set({ hiddenInput: e }), I();
  }
  get withLeadingIcon() {
    return this.$$.ctx[13];
  }
  set withLeadingIcon(e) {
    this.$$set({ withLeadingIcon: e }), I();
  }
  get anchor$use() {
    return this.$$.ctx[14];
  }
  set anchor$use(e) {
    this.$$set({ anchor$use: e }), I();
  }
  get anchor$class() {
    return this.$$.ctx[15];
  }
  set anchor$class(e) {
    this.$$set({ anchor$class: e }), I();
  }
  get selectedTextContainer$use() {
    return this.$$.ctx[16];
  }
  set selectedTextContainer$use(e) {
    this.$$set({ selectedTextContainer$use: e }), I();
  }
  get selectedTextContainer$class() {
    return this.$$.ctx[17];
  }
  set selectedTextContainer$class(e) {
    this.$$set({ selectedTextContainer$class: e }), I();
  }
  get selectedText$use() {
    return this.$$.ctx[18];
  }
  set selectedText$use(e) {
    this.$$set({ selectedText$use: e }), I();
  }
  get selectedText$class() {
    return this.$$.ctx[19];
  }
  set selectedText$class(e) {
    this.$$set({ selectedText$class: e }), I();
  }
  get dropdownIcon$use() {
    return this.$$.ctx[20];
  }
  set dropdownIcon$use(e) {
    this.$$set({ dropdownIcon$use: e }), I();
  }
  get dropdownIcon$class() {
    return this.$$.ctx[21];
  }
  set dropdownIcon$class(e) {
    this.$$set({ dropdownIcon$class: e }), I();
  }
  get menu$class() {
    return this.$$.ctx[22];
  }
  set menu$class(e) {
    this.$$set({ menu$class: e }), I();
  }
  get getUseDefaultValidation() {
    return this.$$.ctx[57];
  }
  get setUseDefaultValidation() {
    return this.$$.ctx[58];
  }
  get focus() {
    return this.$$.ctx[59];
  }
  get layout() {
    return this.$$.ctx[60];
  }
  get getElement() {
    return this.$$.ctx[61];
  }
}
Fe(
  Ps,
  { use: {}, class: {}, style: {}, ripple: { type: "Boolean" }, disabled: { type: "Boolean" }, variant: {}, noLabel: { type: "Boolean" }, label: {}, value: {}, key: {}, dirty: { type: "Boolean" }, invalid: {}, updateInvalid: {}, required: { type: "Boolean" }, inputId: {}, hiddenInput: { type: "Boolean" }, withLeadingIcon: {}, anchor$use: {}, anchor$class: {}, selectedTextContainer$use: {}, selectedTextContainer$class: {}, selectedText$use: {}, selectedText$class: {}, dropdownIcon$use: {}, dropdownIcon$class: {}, menu$class: {} },
  ["label", "leadingIcon", "default", "helperText"],
  [
    "getUseDefaultValidation",
    "setUseDefaultValidation",
    "focus",
    "layout",
    "getElement"
  ],
  !0
);
function rl(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), s = Le(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      s && s.c();
    },
    m(i, a) {
      s && s.m(i, a), e = !0;
    },
    p(i, a) {
      s && s.p && (!e || a & /*$$scope*/
      8192) && Oe(
        s,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? Me(
          t,
          /*$$scope*/
          i[13],
          a,
          null
        ) : Re(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (R(s, i), e = !0);
    },
    o(i) {
      N(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function al(n) {
  let e, t;
  const s = [
    { use: (
      /*usePass*/
      n[3]
    ) },
    { "data-value": (
      /*value*/
      n[0]
    ) },
    { value: (
      /*value*/
      n[0]
    ) },
    { selected: (
      /*selected*/
      n[2]
    ) },
    /*$$restProps*/
    n[6]
  ];
  let i = {
    $$slots: { default: [rl] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < s.length; a += 1)
    i = j(i, s[a]);
  return e = new Ds({ props: i }), n[12](e), {
    c() {
      ye(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, [l]) {
      const r = l & /*usePass, value, selected, $$restProps*/
      77 ? ee(s, [
        l & /*usePass*/
        8 && { use: (
          /*usePass*/
          a[3]
        ) },
        l & /*value*/
        1 && { "data-value": (
          /*value*/
          a[0]
        ) },
        l & /*value*/
        1 && { value: (
          /*value*/
          a[0]
        ) },
        l & /*selected*/
        4 && { selected: (
          /*selected*/
          a[2]
        ) },
        l & /*$$restProps*/
        64 && ie(
          /*$$restProps*/
          a[6]
        )
      ]) : {};
      l & /*$$scope*/
      8192 && (r.$$scope = { dirty: l, ctx: a }), e.$set(r);
    },
    i(a) {
      t || (R(e.$$.fragment, a), t = !0);
    },
    o(a) {
      N(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[12](null), be(e, a);
    }
  };
}
function ll(n, e, t) {
  let s, i;
  const a = ["use", "class", "value", "getElement"];
  let l = re(e, a), r, o, { $$slots: u = {}, $$scope: c } = e;
  const d = Je(ke());
  let { use: f = [] } = e;
  const m = "";
  let { value: h = "" } = e, p;
  const _ = Pe("SMUI:select:selectedText");
  $t(n, _, (T) => t(14, r = T));
  const E = Pe("SMUI:select:value");
  $t(n, E, (T) => t(10, o = T)), Ge("SMUI:list:item:role", "option"), vt(b), Ht(b);
  function b() {
    i && p && cn(_, r = p.getPrimaryText(), r);
  }
  function M() {
    return p.getElement();
  }
  function S(T) {
    le[T ? "unshift" : "push"](() => {
      p = T, t(1, p);
    });
  }
  return n.$$set = (T) => {
    e = j(j({}, e), Ke(T)), t(6, l = re(e, a)), "use" in T && t(7, f = T.use), "value" in T && t(0, h = T.value), "$$scope" in T && t(13, c = T.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    128 && t(3, s = [d, ...f]), n.$$.dirty & /*value, $selectedValue*/
    1025 && t(2, i = h != null && h !== "" && o === h);
  }, [
    h,
    p,
    i,
    s,
    _,
    E,
    l,
    f,
    m,
    M,
    o,
    u,
    S,
    c
  ];
}
class Dn extends Ne {
  constructor(e) {
    super(), je(this, e, ll, al, Ce, {
      use: 7,
      class: 8,
      value: 0,
      getElement: 9
    });
  }
  get use() {
    return this.$$.ctx[7];
  }
  set use(e) {
    this.$$set({ use: e }), I();
  }
  get class() {
    return this.$$.ctx[8];
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), I();
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
Fe(Dn, { use: {}, value: {} }, ["default"], ["class", "getElement"], !0);
const hs = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", ms = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+";
function ol(n) {
  Mn(n, "svelte-1jepkqu", `@import "https://ekit3.github.io/web-renumerator-component/dist/smui.css";.renumerator.svelte-1jepkqu.svelte-1jepkqu{display:flex;padding:77px 40px;width:calc(100% - 80px);flex-shrink:0;border-radius:32px;background:linear-gradient(180deg, #1D211A 0%, #1D2E0E 100%);box-shadow:0 24px 44px 0 rgba(0, 0, 0, 0.25);backdrop-filter:blur(22px);flex-direction:column}.renumerator.svelte-1jepkqu .half-block.svelte-1jepkqu{display:flex;flex-direction:column;width:50%;box-sizing:border-box}.renumerator.svelte-1jepkqu .half-block span.title.svelte-1jepkqu{margin-bottom:40px;text-align:center;display:block;flex:1}.renumerator.svelte-1jepkqu .flex.svelte-1jepkqu{justify-content:space-around;display:flex;flex:1}.renumerator.svelte-1jepkqu .flex button.svelte-1jepkqu{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.renumerator.svelte-1jepkqu .flex span.svelte-1jepkqu{font-size:2em;font-weight:900;margin:5px 2px}.renumerator.svelte-1jepkqu .title.svelte-1jepkqu{margin-bottom:16px;text-align:left}.renumerator.svelte-1jepkqu .container.svelte-1jepkqu{display:flex;align-self:center;width:100%;margin-top:40px}.svelte-1jepkqu .mdc-select__dropdown-icon-graphic{fill:white !important}.svelte-1jepkqu .mdc-select__selected-text{color:white !important}.svelte-1jepkqu .mdc-select__selected-text{font-size:16px;font-weight:500;font-family:Montserrat, serif}.svelte-1jepkqu .mdc-deprecated-list-item--selected{background-color:#0E130B;color:white !important}.mdc-select__menu{background:#404639;color:white}.mdc-select__menu li{color:white}:root{--mdc-theme-primary:rgba(255, 255, 255, 0.6)}.smui-select__line-ripple{border-color:yellow}.smui-select__dropdown-icon{color:grey}.smui-select--focused .smui-select__line-ripple{border-color:blue}.svelte-1jepkqu .mdc-select{background:rgba(255, 255, 255, 0.10)}.svelte-1jepkqu .mdc-select__anchor{height:100px}.svelte-1jepkqu .shaped-outlined,.svelte-1jepkqu .shaped-outlined .mdc-select__anchor{border-radius:24px}.svelte-1jepkqu .shaped-outlined .mdc-text-field__input{padding-left:32px;padding-right:0}.svelte-1jepkqu .shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading{border-radius:24px 0 0 24px;border-color:rgba(255, 255, 255, 0.6);width:28px}.svelte-1jepkqu .shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing{border-color:rgba(255, 255, 255, 0.6);border-radius:0 24px 24px 0}.svelte-1jepkqu .shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch{border-color:rgba(255, 255, 255, 0.6)}.img-btn.svelte-1jepkqu.svelte-1jepkqu{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-1jepkqu.svelte-1jepkqu{width:1.5em}.renumerator.svelte-1jepkqu .flex span.svelte-1jepkqu{font-size:1.5em}.renumerator.svelte-1jepkqu .container.svelte-1jepkqu{flex-direction:column}.renumerator.svelte-1jepkqu .half-block.svelte-1jepkqu{width:100%}}`);
}
function ps(n, e, t) {
  const s = n.slice();
  return s[15] = e[t], s;
}
function gs(n) {
  let e, t;
  return e = new Dn({
    props: {
      value: "",
      disabled: !0,
      $$slots: { default: [ul] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ye(e.$$.fragment);
    },
    m(s, i) {
      Ie(e, s, i), t = !0;
    },
    i(s) {
      t || (R(e.$$.fragment, s), t = !0);
    },
    o(s) {
      N(e.$$.fragment, s), t = !1;
    },
    d(s) {
      be(e, s);
    }
  };
}
function ul(n) {
  let e;
  return {
    c() {
      e = at("Sélectionnez un poste");
    },
    m(t, s) {
      Y(t, e, s);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function cl(n) {
  let e = (
    /*devType*/
    n[15].name + ""
  ), t;
  return {
    c() {
      t = at(e);
    },
    m(s, i) {
      Y(s, t, i);
    },
    p: nt,
    d(s) {
      s && Q(t);
    }
  };
}
function _s(n) {
  let e, t;
  return e = new Dn({
    props: {
      value: (
        /*devType*/
        n[15].name
      ),
      $$slots: { default: [cl] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ye(e.$$.fragment);
    },
    m(s, i) {
      Ie(e, s, i), t = !0;
    },
    p(s, i) {
      const a = {};
      i & /*$$scope*/
      262144 && (a.$$scope = { dirty: i, ctx: s }), e.$set(a);
    },
    i(s) {
      t || (R(e.$$.fragment, s), t = !0);
    },
    o(s) {
      N(e.$$.fragment, s), t = !1;
    },
    d(s) {
      be(e, s);
    }
  };
}
function dl(n) {
  let e, t, s, i = !/*selectedDevType*/
  n[2] && gs(n), a = Pn(
    /*devTypes*/
    n[6]
  ), l = [];
  for (let o = 0; o < a.length; o += 1)
    l[o] = _s(ps(n, a, o));
  const r = (o) => N(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      i && i.c(), e = Se();
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      t = ct();
    },
    m(o, u) {
      i && i.m(o, u), Y(o, e, u);
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(o, u);
      Y(o, t, u), s = !0;
    },
    p(o, u) {
      if (/*selectedDevType*/
      o[2] ? i && (et(), N(i, 1, 1, () => {
        i = null;
      }), tt()) : i ? u & /*selectedDevType*/
      4 && R(i, 1) : (i = gs(o), i.c(), R(i, 1), i.m(e.parentNode, e)), u & /*devTypes*/
      64) {
        a = Pn(
          /*devTypes*/
          o[6]
        );
        let c;
        for (c = 0; c < a.length; c += 1) {
          const d = ps(o, a, c);
          l[c] ? (l[c].p(d, u), R(l[c], 1)) : (l[c] = _s(d), l[c].c(), R(l[c], 1), l[c].m(t.parentNode, t));
        }
        for (et(), c = a.length; c < l.length; c += 1)
          r(c);
        tt();
      }
    },
    i(o) {
      if (!s) {
        R(i);
        for (let u = 0; u < a.length; u += 1)
          R(l[u]);
        s = !0;
      }
    },
    o(o) {
      N(i), l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        N(l[u]);
      s = !1;
    },
    d(o) {
      o && (Q(e), Q(t)), i && i.d(o), Ai(l, o);
    }
  };
}
function fl(n) {
  let e, t, s, i, a, l, r, o, u, c, d, f, m, h, p, _, E, b, M, S, T, F, L, G, ne, P, D, U, x, y, k;
  function w(O) {
    n[7](O);
  }
  let ge = {
    class: "shaped-outlined",
    variant: "outlined",
    $$slots: { default: [dl] },
    $$scope: { ctx: n }
  };
  return (
    /*selectedDevType*/
    n[2] !== void 0 && (ge.value = /*selectedDevType*/
    n[2]), i = new Ps({ props: ge }), le.push(() => Rt(i, "value", w)), i.$on(
      "click",
      /*click_handler*/
      n[8]
    ), {
      c() {
        e = J("div"), t = J("span"), t.textContent = "Votre métier", s = Se(), ye(i.$$.fragment), l = Se(), r = J("div"), o = J("div"), u = J("span"), u.textContent = "Années d'expérience", c = Se(), d = J("div"), f = J("button"), f.innerHTML = `<img src="${hs}" alt="Minus Svg icon" class="img-btn svelte-1jepkqu"/>`, m = Se(), h = J("span"), p = at(
          /*experience*/
          n[0]
        ), _ = Se(), E = J("button"), E.innerHTML = `<img src="${ms}" alt="Plus Svg icon" class="img-btn svelte-1jepkqu"/>`, b = Se(), M = J("div"), S = J("span"), S.textContent = "TJM", T = Se(), F = J("div"), L = J("button"), L.innerHTML = `<img src="${hs}" alt="Minus Svg icon" class="img-btn svelte-1jepkqu"/>`, G = Se(), ne = J("span"), P = at(
          /*tjm*/
          n[1]
        ), D = Se(), U = J("button"), U.innerHTML = `<img src="${ms}" alt="Plus Svg icon" class="img-btn svelte-1jepkqu"/>`, W(t, "class", "title svelte-1jepkqu"), W(u, "class", "title svelte-1jepkqu"), W(f, "class", "svelte-1jepkqu"), W(h, "class", "svelte-1jepkqu"), W(E, "class", "svelte-1jepkqu"), W(d, "class", "flex svelte-1jepkqu"), W(o, "class", "half-block svelte-1jepkqu"), W(S, "class", "title svelte-1jepkqu"), W(L, "class", "svelte-1jepkqu"), W(ne, "class", "svelte-1jepkqu"), W(U, "class", "svelte-1jepkqu"), W(F, "class", "flex svelte-1jepkqu"), W(M, "class", "half-block svelte-1jepkqu"), W(r, "class", "container svelte-1jepkqu"), W(e, "class", "renumerator svelte-1jepkqu");
      },
      m(O, ue) {
        Y(O, e, ue), H(e, t), H(e, s), Ie(i, e, null), H(e, l), H(e, r), H(r, o), H(o, u), H(o, c), H(o, d), H(d, f), H(d, m), H(d, h), H(h, p), H(d, _), H(d, E), H(r, b), H(r, M), H(M, S), H(M, T), H(M, F), H(F, L), H(F, G), H(F, ne), H(ne, P), H(F, D), H(F, U), x = !0, y || (k = [
          $e(
            f,
            "click",
            /*click_handler_1*/
            n[9]
          ),
          $e(
            f,
            "click",
            /*click_handler_2*/
            n[10]
          ),
          $e(
            E,
            "click",
            /*click_handler_3*/
            n[11]
          ),
          $e(
            E,
            "click",
            /*click_handler_4*/
            n[12]
          ),
          $e(
            L,
            "click",
            /*click_handler_5*/
            n[13]
          ),
          $e(
            U,
            "click",
            /*click_handler_6*/
            n[14]
          )
        ], y = !0);
      },
      p(O, [ue]) {
        const Ee = {};
        ue & /*$$scope, selectedDevType*/
        262148 && (Ee.$$scope = { dirty: ue, ctx: O }), !a && ue & /*selectedDevType*/
        4 && (a = !0, Ee.value = /*selectedDevType*/
        O[2], Ot(() => a = !1)), i.$set(Ee), (!x || ue & /*experience*/
        1) && Bt(
          p,
          /*experience*/
          O[0]
        ), (!x || ue & /*tjm*/
        2) && Bt(
          P,
          /*tjm*/
          O[1]
        );
      },
      i(O) {
        x || (R(i.$$.fragment, O), x = !0);
      },
      o(O) {
        N(i.$$.fragment, O), x = !1;
      },
      d(O) {
        O && Q(e), be(i), y = !1, ze(k);
      }
    }
  );
}
function hl(n, e, t) {
  let { rateManager: s } = e, { experience: i = 2 } = e, { tjm: a = s.getMinTJMValue() } = e, { selectedDevType: l } = e, r = s.getMinExperienceValue(), o = s.getMinTJMValue();
  const u = s.getRateList();
  function c(b) {
    l = b, t(2, l);
  }
  const d = () => t(1, a = s.updateTJM(i, l)), f = () => t(0, i = Math.max(r, i - 1)), m = () => t(1, a = s.updateTJM(i, l)), h = () => t(0, i += 1), p = () => t(1, a = s.updateTJM(i, l)), _ = () => t(1, a = Math.max(o, a - 10)), E = () => t(1, a += 10);
  return n.$$set = (b) => {
    "rateManager" in b && t(3, s = b.rateManager), "experience" in b && t(0, i = b.experience), "tjm" in b && t(1, a = b.tjm), "selectedDevType" in b && t(2, l = b.selectedDevType);
  }, [
    i,
    a,
    l,
    s,
    r,
    o,
    u,
    c,
    d,
    f,
    m,
    h,
    p,
    _,
    E
  ];
}
let Us = class extends Ne {
  constructor(e) {
    super(), je(
      this,
      e,
      hl,
      fl,
      Ce,
      {
        rateManager: 3,
        experience: 0,
        tjm: 1,
        selectedDevType: 2
      },
      ol
    );
  }
  get rateManager() {
    return this.$$.ctx[3];
  }
  set rateManager(e) {
    this.$$set({ rateManager: e }), I();
  }
  get experience() {
    return this.$$.ctx[0];
  }
  set experience(e) {
    this.$$set({ experience: e }), I();
  }
  get tjm() {
    return this.$$.ctx[1];
  }
  set tjm(e) {
    this.$$set({ tjm: e }), I();
  }
  get selectedDevType() {
    return this.$$.ctx[2];
  }
  set selectedDevType(e) {
    this.$$set({ selectedDevType: e }), I();
  }
};
Fe(Us, { rateManager: {}, experience: {}, tjm: {}, selectedDevType: {} }, [], [], !0);
function ml(n) {
  Mn(n, "svelte-1kxg90y", ".pay.svelte-1kxg90y.svelte-1kxg90y{height:447px;width:100%;background:#9FF000;border-radius:32px;font-size:24px;display:flex;flex-direction:column;justify-content:center;align-items:center}.pay.svelte-1kxg90y span.title.svelte-1kxg90y{margin-top:60px;color:#0E130B;margin-bottom:20px}.pay.svelte-1kxg90y span.amount.svelte-1kxg90y{color:#0E130B;font-weight:900;font-size:60px;margin-bottom:54px}.pay.svelte-1kxg90y .joinLink.svelte-1kxg90y{display:inline-flex;padding:16px 24px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700}.advantage.svelte-1kxg90y.svelte-1kxg90y{font-size:14px}.pay.svelte-1kxg90y a.svelte-1kxg90y{color:#FFFFFF;margin-bottom:10px}@media screen and (max-width: 380px){.pay.svelte-1kxg90y span.title.svelte-1kxg90y{font-size:0.75em}}");
}
function pl(n) {
  let e, t, s, i, a, l, r, o, u, c, d, f, m, h, p, _;
  return {
    c() {
      e = J("div"), t = J("span"), t.textContent = "Votre salaire annuel brut", s = Se(), i = J("span"), a = at(
        /*amount*/
        n[0]
      ), l = at(" €"), r = Se(), o = J("span"), u = at("et + de 9000€ d'"), c = J("a"), d = at("avantages sociaux"), m = Se(), h = J("a"), p = at("Envie de nous rejoindre ?"), W(t, "class", "title svelte-1kxg90y"), W(i, "class", "amount svelte-1kxg90y"), W(c, "href", f = /*rateManager*/
      n[1].getAvantagesLink()), W(c, "class", "svelte-1kxg90y"), W(o, "class", "advantage svelte-1kxg90y"), W(h, "class", "joinLink svelte-1kxg90y"), W(h, "href", _ = /*rateManager*/
      n[1].getJoinUsLink()), W(e, "class", "pay svelte-1kxg90y");
    },
    m(E, b) {
      Y(E, e, b), H(e, t), H(e, s), H(e, i), H(i, a), H(i, l), H(e, r), H(e, o), H(o, u), H(o, c), H(c, d), H(e, m), H(e, h), H(h, p);
    },
    p(E, [b]) {
      b & /*amount*/
      1 && Bt(
        a,
        /*amount*/
        E[0]
      ), b & /*rateManager*/
      2 && f !== (f = /*rateManager*/
      E[1].getAvantagesLink()) && W(c, "href", f), b & /*rateManager*/
      2 && _ !== (_ = /*rateManager*/
      E[1].getJoinUsLink()) && W(h, "href", _);
    },
    i: nt,
    o: nt,
    d(E) {
      E && Q(e);
    }
  };
}
function gl(n, e, t) {
  let { amount: s = 450 } = e, { rateManager: i } = e;
  return n.$$set = (a) => {
    "amount" in a && t(0, s = a.amount), "rateManager" in a && t(1, i = a.rateManager);
  }, [s, i];
}
class Bs extends Ne {
  constructor(e) {
    super(), je(this, e, gl, pl, Ce, { amount: 0, rateManager: 1 }, ml);
  }
  get amount() {
    return this.$$.ctx[0];
  }
  set amount(e) {
    this.$$set({ amount: e }), I();
  }
  get rateManager() {
    return this.$$.ctx[1];
  }
  set rateManager(e) {
    this.$$set({ rateManager: e }), I();
  }
}
Fe(Bs, { amount: {}, rateManager: {} }, [], [], !0);
function _l(n) {
  Mn(n, "svelte-1sqfk6p", `.component.svelte-1sqfk6p{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500}.block.svelte-1sqfk6p{min-width:280px;width:50%;position:relative;z-index:1}.block.svelte-1sqfk6p:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-1sqfk6p{width:100%;margin-bottom:1.5em}.component.svelte-1sqfk6p{flex-direction:column}}`);
}
function Il(n) {
  let e, t, s, i, a, l, r, o, u, c, d;
  function f(b) {
    n[6](b);
  }
  function m(b) {
    n[7](b);
  }
  function h(b) {
    n[8](b);
  }
  let p = { rateManager: (
    /*rateManager*/
    n[4]
  ) };
  /*selectedDevType*/
  n[0] !== void 0 && (p.selectedDevType = /*selectedDevType*/
  n[0]), /*experience*/
  n[1] !== void 0 && (p.experience = /*experience*/
  n[1]), /*tjm*/
  n[2] !== void 0 && (p.tjm = /*tjm*/
  n[2]), s = new Us({ props: p }), le.push(() => Rt(s, "selectedDevType", f)), le.push(() => Rt(s, "experience", m)), le.push(() => Rt(s, "tjm", h));
  function _(b) {
    n[9](b);
  }
  let E = { rateManager: (
    /*rateManager*/
    n[4]
  ) };
  return (
    /*amount*/
    n[3] !== void 0 && (E.amount = /*amount*/
    n[3]), u = new Bs({ props: E }), le.push(() => Rt(u, "amount", _)), {
      c() {
        e = J("div"), t = J("div"), ye(s.$$.fragment), r = Se(), o = J("div"), ye(u.$$.fragment), W(t, "class", "block svelte-1sqfk6p"), W(o, "class", "block svelte-1sqfk6p"), W(e, "class", "component svelte-1sqfk6p");
      },
      m(b, M) {
        Y(b, e, M), H(e, t), Ie(s, t, null), H(e, r), H(e, o), Ie(u, o, null), d = !0;
      },
      p(b, [M]) {
        const S = {};
        !i && M & /*selectedDevType*/
        1 && (i = !0, S.selectedDevType = /*selectedDevType*/
        b[0], Ot(() => i = !1)), !a && M & /*experience*/
        2 && (a = !0, S.experience = /*experience*/
        b[1], Ot(() => a = !1)), !l && M & /*tjm*/
        4 && (l = !0, S.tjm = /*tjm*/
        b[2], Ot(() => l = !1)), s.$set(S);
        const T = {};
        !c && M & /*amount*/
        8 && (c = !0, T.amount = /*amount*/
        b[3], Ot(() => c = !1)), u.$set(T);
      },
      i(b) {
        d || (R(s.$$.fragment, b), R(u.$$.fragment, b), d = !0);
      },
      o(b) {
        N(s.$$.fragment, b), N(u.$$.fragment, b), d = !1;
      },
      d(b) {
        b && Q(e), be(s), be(u);
      }
    }
  );
}
function bl(n, e, t) {
  let { company: s } = e, i = er.create(s), a, l, r, o;
  function u(m) {
    a = m, t(0, a);
  }
  function c(m) {
    l = m, t(1, l);
  }
  function d(m) {
    r = m, t(2, r);
  }
  function f(m) {
    o = m, t(3, o), t(4, i), t(1, l), t(0, a), t(2, r);
  }
  return n.$$set = (m) => {
    "company" in m && t(5, s = m.company);
  }, n.$$.update = () => {
    n.$$.dirty & /*experience, selectedDevType, tjm*/
    7 && t(3, o = i.getSalary(l, a, r) || 0);
  }, [
    a,
    l,
    r,
    o,
    i,
    s,
    u,
    c,
    d,
    f
  ];
}
class Hs extends Ne {
  constructor(e) {
    super(), je(this, e, bl, Il, Ce, { company: 5 }, _l);
  }
  get company() {
    return this.$$.ctx[5];
  }
  set company(e) {
    this.$$set({ company: e }), I();
  }
}
customElements.define("renumerator-component", Fe(Hs, { company: {} }, [], [], !0));
class El extends HTMLElement {
  connectedCallback() {
    const e = this.getAttribute("company"), t = e ?? "";
    new Hs({ target: this, props: { company: t } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", El);
