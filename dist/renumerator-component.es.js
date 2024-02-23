var hs = Object.defineProperty;
var ms = (n, e, t) => e in n ? hs(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var mt = (n, e, t) => (ms(n, typeof e != "symbol" ? e + "" : e, t), t);
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
function Ii(n) {
  return n();
}
function Fn() {
  return /* @__PURE__ */ Object.create(null);
}
function ze(n) {
  n.forEach(Ii);
}
function Te(n) {
  return typeof n == "function";
}
function ye(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function ps(n) {
  return Object.keys(n).length === 0;
}
function gs(n, ...e) {
  if (n == null) {
    for (const i of e)
      i(void 0);
    return nt;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function $t(n, e, t) {
  n.$$.on_destroy.push(gs(e, t));
}
function Le(n, e, t, i) {
  if (n) {
    const s = bi(n, e, t, i);
    return n[0](s);
  }
}
function bi(n, e, t, i) {
  return n[1] && i ? j(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function Me(n, e, t, i) {
  if (n[2] && i) {
    const s = n[2](i(t));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const a = [], l = Math.max(e.dirty.length, s.length);
      for (let r = 0; r < l; r += 1)
        a[r] = e.dirty[r] | s[r];
      return a;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Oe(n, e, t, i, s, a) {
  if (s) {
    const l = bi(e, t, i, a);
    n.p(l, s);
  }
}
function Re(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
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
  for (const i in n)
    !e.has(i) && i[0] !== "$" && (t[i] = n[i]);
  return t;
}
function _s(n) {
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
const Is = ["", !0, 1, "true", "contenteditable"], bs = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function G(n, e) {
  n.appendChild(e);
}
function Mn(n, e, t) {
  const i = Es(n);
  if (!i.getElementById(e)) {
    const s = K("style");
    s.id = e, s.textContent = t, vs(i, s);
  }
}
function Es(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function vs(n, e) {
  return G(
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
function As(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function K(n) {
  return document.createElement(n);
}
function Qt(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function pt(n) {
  return document.createTextNode(n);
}
function Ce() {
  return pt(" ");
}
function ut() {
  return pt("");
}
function $e(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function Z(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Ss = ["width", "height"];
function fe(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const i in e)
    e[i] == null ? n.removeAttribute(i) : i === "style" ? n.style.cssText = e[i] : i === "__value" ? n.value = n[i] = e[i] : t[i] && t[i].set && Ss.indexOf(i) === -1 ? n[i] = e[i] : Z(n, i, e[i]);
}
function dn(n, e) {
  for (const t in e)
    Z(n, t, e[t]);
}
function ys(n, e) {
  Object.keys(e).forEach((t) => {
    Cs(n, t, e[t]);
  });
}
function Cs(n, e, t) {
  e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : Z(n, e, t);
}
function fn(n) {
  return /-/.test(n) ? ys : fe;
}
function Ts(n) {
  return Array.from(n.childNodes);
}
function Bt(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Ls(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = /** @type {string} */
  e);
}
function Ms(n, e, t) {
  ~Is.indexOf(t) ? Ls(n, e) : Bt(n, e);
}
function Os(n) {
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
  t && t.slice().forEach((i) => i.call(this, e));
}
const zt = [], le = [];
let Xt = [];
const vn = [], Rs = /* @__PURE__ */ Promise.resolve();
let An = !1;
function Ds() {
  An || (An = !0, Rs.then(I));
}
function Sn(n) {
  Xt.push(n);
}
function Ot(n) {
  vn.push(n);
}
const gn = /* @__PURE__ */ new Set();
let xt = 0;
function I() {
  if (xt !== 0)
    return;
  const n = en;
  do {
    try {
      for (; xt < zt.length; ) {
        const e = zt[xt];
        xt++, Yt(e), ks(e.$$);
      }
    } catch (e) {
      throw zt.length = 0, xt = 0, e;
    }
    for (Yt(null), zt.length = 0, xt = 0; le.length; )
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
function ks(n) {
  if (n.fragment !== null) {
    n.update(), ze(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Sn);
  }
}
function js(n) {
  const e = [], t = [];
  Xt.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Xt = e;
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
function N(n, e, t, i) {
  if (n && n.o) {
    if (ln.has(n))
      return;
    ln.add(n), Pt.c.push(() => {
      ln.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else
    i && i();
}
function Pn(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function ee(n, e) {
  const t = {}, i = {}, s = { $$scope: 1 };
  let a = n.length;
  for (; a--; ) {
    const l = n[a], r = e[a];
    if (r) {
      for (const o in l)
        o in r || (i[o] = 1);
      for (const o in r)
        s[o] || (t[o] = r[o], s[o] = 1);
      n[a] = r;
    } else
      for (const o in l)
        s[o] = 1;
  }
  for (const l in i)
    l in t || (t[l] = void 0);
  return t;
}
function se(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Rt(n, e, t) {
  const i = n.$$.props[e];
  i !== void 0 && (n.$$.bound[i] = t, t(n.$$.ctx[i]));
}
function Se(n) {
  n && n.c();
}
function Ie(n, e, t) {
  const { fragment: i, after_update: s } = n.$$;
  i && i.m(e, t), Sn(() => {
    const a = n.$$.on_mount.map(Ii).filter(Te);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : ze(a), n.$$.on_mount = [];
  }), s.forEach(Sn);
}
function be(n, e) {
  const t = n.$$;
  t.fragment !== null && (js(t.after_update), ze(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Fs(n, e) {
  n.$$.dirty[0] === -1 && (zt.push(n), Ds(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function je(n, e, t, i, s, a, l = null, r = [-1]) {
  const o = en;
  Yt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: nt,
    not_equal: s,
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
    return u.ctx && s(u.ctx[d], u.ctx[d] = h) && (!u.skip_bound && u.bound[d] && u.bound[d](h), c && Fs(n, d)), f;
  }) : [], u.update(), c = !0, ze(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = Ts(e.target);
      u.fragment && u.fragment.l(d), d.forEach(Q);
    } else
      u.fragment && u.fragment.c();
    e.intro && R(n.$$.fragment), Ie(n, e.target, e.anchor), I();
  }
  Yt(o);
}
let Ei;
typeof HTMLElement == "function" && (Ei = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    mt(this, "$$ctor");
    /** Slots */
    mt(this, "$$s");
    /** The Svelte component instance */
    mt(this, "$$c");
    /** Whether or not the custom element is connected */
    mt(this, "$$cn", !1);
    /** Component props data */
    mt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    mt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    mt(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    mt(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    mt(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const s = this.$$c.$on(e, t);
      this.$$l_u.set(t, s);
    }
    super.addEventListener(e, t, i);
  }
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const s = this.$$l_u.get(t);
      s && (s(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(l) {
        return () => {
          let r;
          return {
            c: function() {
              r = K("slot"), l !== "default" && Z(r, "name", l);
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
      const i = {}, s = Os(this);
      for (const l of this.$$s)
        l in s && (i[l] = [t(l)]);
      for (const l of this.attributes) {
        const r = this.$$g_p(l.name);
        r in this.$$d || (this.$$d[r] = on(r, l.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
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
  attributeChangedCallback(e, t, i) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = on(e, i, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
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
function on(n, e, t, i) {
  var a;
  const s = (a = t[n]) == null ? void 0 : a.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[n])
    return e;
  if (i === "toAttribute")
    switch (s) {
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
    switch (s) {
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
function Fe(n, e, t, i, s, a) {
  let l = class extends Ei {
    constructor() {
      super(n, t, s), this.$$p_d = e;
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
  }), i.forEach((r) => {
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
    mt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    mt(this, "$$set");
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
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ps(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ns = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ns);
class vi {
  constructor(e) {
    mt(this, "config");
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
  getSalary(e, t, i) {
    const s = this.getRate(t);
    if (s) {
      const a = Math.min(s.tjmGrid.length, e) - this.config.min_experience, l = s.tjmGrid[a], r = i || l.tjm, o = this.config.fixed_salary * 12 + (r - this.config.tjm_base) / 2 * (251 - 35 - this.config.group_days) * (1 + 0.1 / (52 * 5 / 12) * 25);
      return Math.round(o);
    }
    return this.config.min_salary;
  }
  updateTJM(e, t) {
    const i = this.getRate(t);
    if (i) {
      const s = Math.min(i.tjmGrid.length, e) - this.config.min_experience;
      return i.tjmGrid[s].tjm;
    }
    return this.config.tjm_base;
  }
  getJoinUsLink() {
    return this.config.join_link;
  }
}
const Ps = 2900, Us = 2, Bs = 0, Hs = 20, ws = 380, xs = "https://ekite.info/#NousContacter", Vs = [
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
], Gs = {
  fixed_salary: Ps,
  min_experience: Us,
  min_salary: Bs,
  group_days: Hs,
  tjm_base: ws,
  join_link: xs,
  jobs: Vs
};
class Un extends vi {
  constructor() {
    super(Gs);
  }
}
const qs = 3400, zs = 2, Ws = 0, Xs = 15, Ks = 450, Js = "#", Zs = [], Qs = {
  fixed_salary: qs,
  min_experience: zs,
  min_salary: Ws,
  group_days: Xs,
  tjm_base: Ks,
  join_link: Js,
  jobs: Zs
};
class Ys extends vi {
  constructor() {
    super(Qs);
  }
}
var yn = /* @__PURE__ */ ((n) => (n.EKITE = "EKITE", n.STORM = "STORM", n))(yn || {});
class $s {
  static create(e) {
    switch (e) {
      case yn.EKITE:
        return new Un();
      case yn.STORM:
        return new Ys();
      default:
        return console.warn(
          "No company props props defined in component initialisation : default EKITE"
        ), new Un();
    }
  }
}
var Cn = function(n, e) {
  return Cn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var s in i)
      Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
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
var we = function() {
  return we = Object.assign || function(e) {
    for (var t, i = 1, s = arguments.length; i < s; i++) {
      t = arguments[i];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, we.apply(this, arguments);
};
function Zt(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], i = 0;
  if (t)
    return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bn(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var i = t.call(n), s, a = [], l;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; )
      a.push(s.value);
  } catch (r) {
    l = { error: r };
  } finally {
    try {
      s && !s.done && (t = i.return) && t.call(i);
    } finally {
      if (l)
        throw l.error;
    }
  }
  return a;
}
function er(n, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, s = e.length, a; i < s; i++)
      (a || !(i in e)) && (a || (a = Array.prototype.slice.call(e, 0, i)), a[i] = e[i]);
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
function tr(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Ai(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Ai(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function nr(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var i = t.scrollWidth;
  return document.documentElement.removeChild(t), i;
}
const On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: tr,
  estimateScrollWidth: nr,
  matches: Ai
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
var sr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var i = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
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
      var i = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.float = function(t) {
      var i = e.cssClasses, s = i.LABEL_FLOAT_ABOVE, a = i.LABEL_SHAKE;
      t ? this.adapter.addClass(s) : (this.adapter.removeClass(s), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(t) {
      var i = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
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
var rr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var i = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(s) {
        i.handleTransitionEnd(s);
      }, i;
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
      var i = this.adapter.hasClass(jt.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(jt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(jt.LINE_RIPPLE_DEACTIVATING));
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
var ar = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, lr = {
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
}, at = /* @__PURE__ */ new Set();
at.add(te.BACKSPACE);
at.add(te.ENTER);
at.add(te.SPACEBAR);
at.add(te.PAGE_UP);
at.add(te.PAGE_DOWN);
at.add(te.END);
at.add(te.HOME);
at.add(te.ARROW_LEFT);
at.add(te.ARROW_UP);
at.add(te.ARROW_RIGHT);
at.add(te.ARROW_DOWN);
at.add(te.DELETE);
at.add(te.ESCAPE);
at.add(te.TAB);
var ct = {
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
}, lt = /* @__PURE__ */ new Map();
lt.set(ct.BACKSPACE, te.BACKSPACE);
lt.set(ct.ENTER, te.ENTER);
lt.set(ct.SPACEBAR, te.SPACEBAR);
lt.set(ct.PAGE_UP, te.PAGE_UP);
lt.set(ct.PAGE_DOWN, te.PAGE_DOWN);
lt.set(ct.END, te.END);
lt.set(ct.HOME, te.HOME);
lt.set(ct.ARROW_LEFT, te.ARROW_LEFT);
lt.set(ct.ARROW_UP, te.ARROW_UP);
lt.set(ct.ARROW_RIGHT, te.ARROW_RIGHT);
lt.set(ct.ARROW_DOWN, te.ARROW_DOWN);
lt.set(ct.DELETE, te.DELETE);
lt.set(ct.ESCAPE, te.ESCAPE);
lt.set(ct.TAB, te.TAB);
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
  if (at.has(e))
    return e;
  var t = lt.get(n.keyCode);
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
var or = ["input", "button", "textarea", "select"], bt = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    or.indexOf(t) === -1 && n.preventDefault();
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
function ur() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function cr(n, e) {
  for (var t = /* @__PURE__ */ new Map(), i = 0; i < n; i++) {
    var s = e(i).trim();
    if (s) {
      var a = s[0].toLowerCase();
      t.has(a) || t.set(a, []), t.get(a).push({ text: s.toLowerCase(), index: i });
    }
  }
  return t.forEach(function(l) {
    l.sort(function(r, o) {
      return r.index - o.index;
    });
  }), t;
}
function Tn(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, a = n.focusedItemIndex, l = n.skipFocus, r = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    yi(e);
  }, Be.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = dr(s, a, r, e) : o = fr(s, r, e), o !== -1 && !l && i(o), o;
}
function dr(n, e, t, i) {
  var s = i.typeaheadBuffer[0], a = n.get(s);
  if (!a)
    return -1;
  if (s === i.currentFirstChar && a[i.sortedIndexCursor].index === e) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % a.length;
    var l = a[i.sortedIndexCursor].index;
    if (!t(l))
      return l;
  }
  i.currentFirstChar = s;
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
  return r !== -1 ? (i.sortedIndexCursor = r, a[i.sortedIndexCursor].index) : -1;
}
function fr(n, e, t) {
  var i = t.typeaheadBuffer[0], s = n.get(i);
  if (!s)
    return -1;
  var a = s[t.sortedIndexCursor];
  if (a.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var l = (t.sortedIndexCursor + 1) % s.length, r = -1; l !== t.sortedIndexCursor; ) {
    var o = s[l], u = o.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, c = !e(o.index);
    if (u && c) {
      r = l;
      break;
    }
    l = (l + 1) % s.length;
  }
  return r !== -1 ? (t.sortedIndexCursor = r, s[t.sortedIndexCursor].index) : -1;
}
function Si(n) {
  return n.typeaheadBuffer.length > 0;
}
function yi(n) {
  n.typeaheadBuffer = "";
}
function Hn(n, e) {
  var t = n.event, i = n.isTargetListItem, s = n.focusedItemIndex, a = n.focusItemAtIndex, l = n.sortedIndexByFirstChar, r = n.isItemAtIndexDisabled, o = Ve(t) === "ArrowLeft", u = Ve(t) === "ArrowUp", c = Ve(t) === "ArrowRight", d = Ve(t) === "ArrowDown", f = Ve(t) === "Home", m = Ve(t) === "End", h = Ve(t) === "Enter", p = Ve(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || u || c || d || f || m || h)
    return -1;
  var _ = !p && t.key.length === 1;
  if (_) {
    bt(t);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: s,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: r
    };
    return Tn(E, e);
  }
  if (!p)
    return -1;
  i && bt(t);
  var b = i && Si(e);
  if (b) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: s,
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
function hr(n) {
  return n instanceof Array;
}
var mr = ["Alt", "Control", "Meta", "Shift"];
function wn(n) {
  var e = new Set(n ? mr.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var pr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var i = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = Be.UNSET_INDEX, i.focusedItemIndex = Be.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = ur(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
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
        var i = this.adapter.listItemAtIndexHasClass(t, oe.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = Be.UNSET_INDEX, i = this.adapter.getListItemCount(), s = 0; s < i; s++) {
        var a = this.adapter.listItemAtIndexHasClass(s, oe.LIST_ITEM_SELECTED_CLASS), l = this.adapter.listItemAtIndexHasClass(s, oe.LIST_ITEM_ACTIVATED_CLASS);
        if (a || l) {
          t = s;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Si(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(t) {
      this.useActivatedClass = t;
    }, e.prototype.setUseSelectedAttribute = function(t) {
      this.useSelectedAttr = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t, i) {
      i === void 0 && (i = {}), this.isIndexValid(t) && (this.isCheckboxList ? this.setCheckboxAtIndex(t, i) : this.isRadioList ? this.setRadioAtIndex(t, i) : this.setSingleSelectionAtIndex(t, i));
    }, e.prototype.handleFocusIn = function(t) {
      t >= 0 && (this.focusedItemIndex = t, this.adapter.setAttributeForElementIndex(t, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(t, "0"));
    }, e.prototype.handleFocusOut = function(t) {
      var i = this;
      t >= 0 && (this.adapter.setAttributeForElementIndex(t, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(t, "-1")), setTimeout(function() {
        i.adapter.isFocusInsideList() || i.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(t) {
      return this.adapter.listItemAtIndexHasClass(t, oe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, i, s) {
      var a = this, l, r = Ve(t) === "ArrowLeft", o = Ve(t) === "ArrowUp", u = Ve(t) === "ArrowRight", c = Ve(t) === "ArrowDown", d = Ve(t) === "Home", f = Ve(t) === "End", m = Ve(t) === "Enter", h = Ve(t) === "Spacebar", p = this.isVertical && c || !this.isVertical && u, _ = this.isVertical && o || !this.isVertical && r, E = t.key === "A" || t.key === "a", b = wn(t);
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
            isTargetListItem: i,
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
      if (!(T === -1 && (T = s, T < 0))) {
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
          if (i) {
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
            focusItemAtIndex: function(V) {
              a.focusItemAtIndex(V);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(V) {
              return a.isIndexDisabled(V);
            }
          };
          Hn(S, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, s) {
      var a, l = wn(s);
      t !== Be.UNSET_INDEX && (this.isIndexDisabled(t) || (l([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, i), this.adapter.notifyAction(t)) : this.isCheckboxList && l(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
    }, e.prototype.focusNextElement = function(t) {
      var i = this.adapter.getListItemCount(), s = t, a = null;
      do {
        if (s++, s >= i)
          if (this.wrapFocus)
            s = 0;
          else
            return t;
        if (s === a)
          return -1;
        a = a ?? s;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(s));
      return this.focusItemAtIndex(s), s;
    }, e.prototype.focusPrevElement = function(t) {
      var i = this.adapter.getListItemCount(), s = t, a = null;
      do {
        if (s--, s < 0)
          if (this.wrapFocus)
            s = i - 1;
          else
            return t;
        if (s === a)
          return -1;
        a = a ?? s;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(s));
      return this.focusItemAtIndex(s), s;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(t), t;
    }, e.prototype.setEnabled = function(t, i) {
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, oe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Mt.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, oe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Mt.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var s = oe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (s = oe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Be.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, s), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== Be.UNSET_INDEX && this.adapter.addClassForElementIndex(t, s), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === Be.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Mt.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, s = i ? Mt.ARIA_CURRENT : Mt.ARIA_SELECTED;
      if (this.selectedIndex !== Be.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, s, "false"), t !== Be.UNSET_INDEX) {
        var a = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, s, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Mt.ARIA_SELECTED : Mt.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, i) {
      i === void 0 && (i = {});
      var s = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !i.forceUpdate) && (this.selectedIndex !== Be.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, s, "false"), this.adapter.setAttributeForElementIndex(t, s, "true"), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, i) {
      i === void 0 && (i = {});
      for (var s = this.selectedIndex, a = i.isUserInteraction ? new Set(s === Be.UNSET_INDEX ? [] : s) : null, l = this.getSelectionAttribute(), r = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var u = a == null ? void 0 : a.has(o), c = t.indexOf(o) >= 0;
        c !== u && r.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, l, c ? "true" : "false");
      }
      this.selectedIndex = t, i.isUserInteraction && r.length && this.adapter.notifySelectionChange(r);
    }, e.prototype.toggleCheckboxRange = function(t, i, s) {
      this.lastSelectedIndex = s;
      for (var a = new Set(this.selectedIndex === Be.UNSET_INDEX ? [] : this.selectedIndex), l = !(a != null && a.has(s)), r = Bn([t, i].sort(), 2), o = r[0], u = r[1], c = this.getSelectionAttribute(), d = [], f = o; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          l !== m && (d.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, l), this.adapter.setAttributeForElementIndex(f, c, "" + l), l ? a.add(f) : a.delete(f));
        }
      d.length && (this.selectedIndex = er([], Bn(a)), this.adapter.notifySelectionChange(d));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === Be.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== Be.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Be.UNSET_INDEX ? this.selectedIndex : hr(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
        return Math.min(t, i);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(t, i) {
      var s = this;
      if (i === void 0 && (i = !0), t instanceof Array) {
        if (!this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return t.length === 0 ? !0 : t.some(function(a) {
          return s.isIndexInRange(a);
        });
      } else if (typeof t == "number") {
        if (this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === Be.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(t) {
      var i = this.adapter.getListItemCount();
      return t >= 0 && t < i;
    }, e.prototype.setSelectedIndexOnAction = function(t, i) {
      this.lastSelectedIndex = t, this.isCheckboxList ? (this.toggleCheckboxAtIndex(t, i), this.adapter.notifySelectionChange([t])) : this.setSelectedIndex(t, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(t, i) {
      var s = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(t), l;
      i ? l = a : (l = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, l)), this.adapter.setAttributeForElementIndex(t, s, l ? "true" : "false");
      var r = this.selectedIndex === Be.UNSET_INDEX ? [] : this.selectedIndex.slice();
      l ? r.push(t) : r = r.filter(function(o) {
        return o !== t;
      }), this.selectedIndex = r;
    }, e.prototype.focusItemAtIndex = function(t) {
      this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t;
    }, e.prototype.checkboxListToggleAll = function(t, i) {
      var s = this.adapter.getListItemCount();
      if (t.length === s)
        this.setCheckboxAtIndex([], { isUserInteraction: i });
      else {
        for (var a = [], l = 0; l < s; l++)
          (!this.isIndexDisabled(l) || t.indexOf(l) > -1) && a.push(l);
        this.setCheckboxAtIndex(a, { isUserInteraction: i });
      }
    }, e.prototype.typeaheadMatchItem = function(t, i, s) {
      var a = this;
      s === void 0 && (s = !1);
      var l = {
        focusItemAtIndex: function(r) {
          a.focusItemAtIndex(r);
        },
        focusedItemIndex: i || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: s,
        isItemAtIndexDisabled: function(r) {
          return a.isIndexDisabled(r);
        }
      };
      return Tn(l, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return cr(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      yi(this.typeaheadState);
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
var Ci = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var i = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Ut.TOP_START, i.originCorner = Ut.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ar;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return lr;
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
      var t = e.cssClasses, i = t.ROOT, s = t.OPEN;
      if (!this.adapter.hasClass(i))
        throw new Error(i + " class required in root element.");
      this.adapter.hasClass(s) && (this.isSurfaceOpen = !0);
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
    }, e.prototype.setAbsolutePosition = function(t, i) {
      this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(i) ? i : 0;
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
      var i = this;
      if (t === void 0 && (t = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          i.adapter.removeClass(e.cssClasses.OPEN), i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout(function() {
            i.closeAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose();
          }, Jt.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(t) {
      var i = t.target;
      this.adapter.isElementInContainer(i) || this.close();
    }, e.prototype.handleKeydown = function(t) {
      var i = t.keyCode, s = t.key, a = s === "Escape" || i === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var t;
      this.measurements = this.getAutoLayoutmeasurements();
      var i = this.getoriginCorner(), s = this.getMenuSurfaceMaxHeight(i), a = this.hasBit(i, He.BOTTOM) ? "bottom" : "top", l = this.hasBit(i, He.RIGHT) ? "right" : "left", r = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), u = this.measurements, c = u.anchorSize, d = u.surfaceSize, f = (t = {}, t[l] = r, t[a] = o, t);
      c.width / d.width > Jt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (l = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(l + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(s ? s + "px" : ""), this.hasBit(i, He.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var t = this.adapter.getAnchorDimensions(), i = this.adapter.getBodyDimensions(), s = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return t || (t = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: t,
        bodySize: i,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: t.top,
          right: s.width - t.right,
          bottom: s.height - t.bottom,
          left: t.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: s,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var t = this.originCorner, i = this.measurements, s = i.viewportDistance, a = i.anchorSize, l = i.surfaceSize, r = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, He.BOTTOM), u, c;
      o ? (u = s.top - r + this.anchorMargin.bottom, c = s.bottom - r - this.anchorMargin.bottom) : (u = s.top - r + this.anchorMargin.top, c = s.bottom - r + a.height - this.anchorMargin.top);
      var d = c - l.height > 0;
      !d && u > c + this.openBottomBias && (t = this.setBit(t, He.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, He.FLIP_RTL), h = this.hasBit(this.anchorCorner, He.RIGHT) || this.hasBit(t, He.RIGHT), p = !1;
      f && m ? p = !h : p = h;
      var _, E;
      p ? (_ = s.left + a.width + this.anchorMargin.right, E = s.right - this.anchorMargin.right) : (_ = s.left + this.anchorMargin.left, E = s.right + a.width - this.anchorMargin.left);
      var b = _ - l.width > 0, M = E - l.width > 0, S = this.hasBit(t, He.FLIP_RTL) && this.hasBit(t, He.RIGHT);
      return M && S && f || !b && S ? t = this.unsetBit(t, He.RIGHT) : (b && p && f || b && !p && h || !M && _ >= E) && (t = this.setBit(t, He.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, s = 0, a = this.hasBit(t, He.BOTTOM), l = this.hasBit(this.anchorCorner, He.BOTTOM), r = e.numbers.MARGIN_TO_EDGE;
      return a ? (s = i.top + this.anchorMargin.top - r, l || (s += this.measurements.anchorSize.height)) : (s = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - r, l && (s -= this.measurements.anchorSize.height)), s;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, s = this.hasBit(t, He.RIGHT), a = this.hasBit(this.anchorCorner, He.RIGHT);
      if (s) {
        var l = a ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? l - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : l;
      }
      return a ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, s = this.hasBit(t, He.BOTTOM), a = this.hasBit(this.anchorCorner, He.BOTTOM), l = 0;
      return s ? l = a ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : l = a ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, l;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var i, s, a = this.measurements, l = a.windowScroll, r = a.viewportDistance, o = a.surfaceSize, u = a.viewportSize, c = Object.keys(t);
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
        i = { error: p };
      } finally {
        try {
          f && !f.done && (s = d.return) && s.call(d);
        } finally {
          if (i)
            throw i.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, i = this.adapter.isFocused(), s = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = s.activeElement && this.adapter.isElementInContainer(s.activeElement);
      (i || a) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, Jt.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, i) {
      return !!(t & i);
    }, e.prototype.setBit = function(t, i) {
      return t | i;
    }, e.prototype.unsetBit = function(t, i) {
      return t ^ i;
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
}, gr = {
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
var _r = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var i = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Wt.LIST_ROOT, i.selectedIndex = -1, i;
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
        return gr;
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
      var i = t.key, s = t.keyCode, a = i === "Tab" || s === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(t) {
      var i = this, s = this.adapter.getElementIndex(t);
      if (!(s < 0)) {
        this.adapter.notifySelected({ index: s });
        var a = this.adapter.getAttributeFromElementAtIndex(s, Gt.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var l = i.adapter.getElementIndex(t);
          l >= 0 && i.adapter.isSelectableItemAtIndex(l) && i.setSelectedIndex(l);
        }, Ci.numbers.TRANSITION_CLOSE_DURATION);
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
      var i = this.adapter.getSelectedSiblingOfItemAtIndex(t);
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Gt.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Kt.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Kt.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Gt.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, oe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Gt.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, oe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Gt.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var i = this.adapter.getMenuItemCount(), s = t >= 0 && t < i;
      if (!s)
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
var Ir = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, xn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, br = {
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
var Er = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      return n.call(this, we(we({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ir;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return br;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return xn;
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
      var i = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += xn.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
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
function vr(n) {
  return n === void 0 && (n = window), Ar(n) ? { passive: !0 } : !1;
}
function Ar(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, i = function() {
    };
    n.document.addEventListener("test", i, t), n.document.removeEventListener("test", i, t);
  } catch {
    e = !1;
  }
  return e;
}
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: vr
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
var yr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Cr = {
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
function Tr(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = sn;
  if (typeof sn == "boolean" && !e)
    return sn;
  var s = t && typeof t.supports == "function";
  if (!s)
    return !1;
  var a = t.supports("--css-vars", "yes"), l = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = a || l, e || (sn = i), i;
}
function Lr(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var i = e.x, s = e.y, a = i + t.left, l = s + t.top, r, o;
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
], rn = [], Mr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var i = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(s) {
        i.activateImpl(s);
      }, i.deactivateHandler = function() {
        i.deactivateImpl();
      }, i.focusHandler = function() {
        i.handleFocus();
      }, i.blurHandler = function() {
        i.handleBlur();
      }, i.resizeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return yr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Cr;
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
      var t = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var s = e.cssClasses, a = s.ROOT, l = s.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(l), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, s = i.ROOT, a = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(s), t.adapter.removeClass(a), t.removeCssVars();
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
      var i = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
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
      var i, s;
      if (t) {
        try {
          for (var a = Zt(Gn), l = a.next(); !l.done; l = a.next()) {
            var r = l.value;
            this.adapter.registerInteractionHandler(r, this.activateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            l && !l.done && (s = a.return) && s.call(a);
          } finally {
            if (i)
              throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var i, s;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Zt(qn), l = a.next(); !l.done; l = a.next()) {
            var r = l.value;
            this.adapter.registerDocumentInteractionHandler(r, this.deactivateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            l && !l.done && (s = a.return) && s.call(a);
          } finally {
            if (i)
              throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, i;
      try {
        for (var s = Zt(Gn), a = s.next(); !a.done; a = s.next()) {
          var l = a.value;
          this.adapter.deregisterInteractionHandler(l, this.activateHandler);
        }
      } catch (r) {
        t = { error: r };
      } finally {
        try {
          a && !a.done && (i = s.return) && i.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var s = Zt(qn), a = s.next(); !a.done; a = s.next()) {
          var l = a.value;
          this.adapter.deregisterDocumentInteractionHandler(l, this.deactivateHandler);
        }
      } catch (r) {
        t = { error: r };
      } finally {
        try {
          a && !a.done && (i = s.return) && i.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, i = e.strings, s = Object.keys(i);
      s.forEach(function(a) {
        a.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(i[a], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var s = this.activationState;
        if (!s.isActivated) {
          var a = this.previousActivationEvent, l = a && t !== void 0 && a.type !== t.type;
          if (!l) {
            s.isActivated = !0, s.isProgrammatic = t === void 0, s.activationEvent = t, s.wasActivatedByPointer = s.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var r = t !== void 0 && rn.length > 0 && rn.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (r) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (rn.push(t.target), this.registerDeactivationHandlers(t)), s.wasElementMadeActive = this.checkElementMadeActive(t), s.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              rn = [], !s.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (s.wasElementMadeActive = i.checkElementMadeActive(t), s.wasElementMadeActive && i.animateActivation()), s.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, s = i.VAR_FG_TRANSLATE_START, a = i.VAR_FG_TRANSLATE_END, l = e.cssClasses, r = l.FG_DEACTIVATION, o = l.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", d = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, h = f.endPoint;
        c = m.x + "px, " + m.y + "px", d = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(s, c), this.adapter.updateCssVariable(a, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, s = t.wasActivatedByPointer, a;
      s ? a = Lr(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var t = this, i = e.cssClasses.FG_DEACTIVATION, s = this.activationState, a = s.hasDeactivationUXRun, l = s.isActivated, r = a || !l;
      r && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(i);
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
      var t = this, i = this.activationState;
      if (i.isActivated) {
        var s = we({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(s);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(s), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var i = t.wasActivatedByPointer, s = t.wasElementMadeActive;
      (i || s) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), s = function() {
        var l = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return l + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : s();
      var a = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, i = t.VAR_FG_SIZE, s = t.VAR_LEFT, a = t.VAR_TOP, l = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(l, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(s, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
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
var Or = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var s = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return s.disabled = !1, s.isMenuOpen = !1, s.useDefaultValidation = !0, s.customValidity = !0, s.lastSelectedIndex = Ft.UNSET_INDEX, s.clickDebounceTimeout = 0, s.recentlyClicked = !1, s.leadingIcon = i.leadingIcon, s.helperText = i.helperText, s;
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
    }, e.prototype.setSelectedIndex = function(t, i, s) {
      i === void 0 && (i = !1), s === void 0 && (s = !1), !(t >= this.adapter.getMenuItemCount()) && (t === Ft.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !s && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
    }, e.prototype.setValue = function(t, i) {
      i === void 0 && (i = !1);
      var s = this.adapter.getMenuItemValues().indexOf(t);
      this.setSelectedIndex(
        s,
        /** closeMenu */
        !1,
        i
      );
    }, e.prototype.getValue = function() {
      var t = this.adapter.getSelectedIndex(), i = this.adapter.getMenuItemValues();
      return t !== Ft.UNSET_INDEX ? i[t] : "";
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
        var t = this.getValue().length > 0, i = this.adapter.hasClass(De.FOCUSED), s = t || i, a = this.adapter.hasClass(De.REQUIRED);
        this.notchOutline(s), this.adapter.floatLabel(s), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var t = this.adapter.getMenuItemValues(), i = t.indexOf(this.getValue());
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var t = this.getSelectedIndex(), i = t >= 0 ? t : 0;
        this.adapter.focusMenuItemAtIndex(i);
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
        var i = Ve(t) === te.ENTER, s = Ve(t) === te.SPACEBAR, a = Ve(t) === te.ARROW_UP, l = Ve(t) === te.ARROW_DOWN, r = t.ctrlKey || t.metaKey;
        if (!r && (!s && t.key && t.key.length === 1 || s && this.adapter.isTypeaheadInProgress())) {
          var o = s ? " " : t.key, u = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), t.preventDefault();
          return;
        }
        !i && !s && !a && !l || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(De.FOCUSED);
        if (t) {
          var s = Ft.LABEL_SCALE, a = this.adapter.getLabelWidth() * s;
          this.adapter.notchOutline(a);
        } else
          i || this.adapter.closeOutline();
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
        var i = this.helperText.isVisible(), s = this.helperText.getId();
        i && s ? this.adapter.setSelectAnchorAttr(_n.ARIA_DESCRIBEDBY, s) : this.adapter.removeSelectAnchorAttr(_n.ARIA_DESCRIBEDBY);
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
var Rr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      return n.call(this, we(we({}, e.defaultAdapter), t)) || this;
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
      var i = this.adapter.hasClass(St.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var s = this.adapter.hasClass(St.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || s;
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
  const i = /* @__PURE__ */ new Set();
  function s(r) {
    if (ye(n, r) && (n = r, t)) {
      const o = !qt.length;
      for (const u of i)
        u[1](), qt.push(u, n);
      if (o) {
        for (let u = 0; u < qt.length; u += 2)
          qt[u][0](qt[u + 1]);
        qt.length = 0;
      }
    }
  }
  function a(r) {
    s(r(n));
  }
  function l(r, o = nt) {
    const u = [r, o];
    return i.add(u), i.size === 1 && (t = e(s, a) || nt), r(n), () => {
      i.delete(u), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: a, subscribe: l };
}
function W(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function qe(n, e, t, i = { bubbles: !0 }, s = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const a = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: t }));
  if (n == null || n.dispatchEvent(a), s && e.startsWith("SMUI")) {
    const l = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, i), { detail: t }));
    n == null || n.dispatchEvent(l), l.defaultPrevented && a.preventDefault();
  }
  return a;
}
function hn(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s], l = a.indexOf("$");
    l !== -1 && e.indexOf(a.substring(0, l + 1)) !== -1 || e.indexOf(a) === -1 && (i[a] = n[a]);
  }
  return i;
}
const zn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Dr = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Je(n) {
  let e, t = [];
  n.$on = (s, a) => {
    let l = s, r = () => {
    };
    return e ? r = e(l, a) : t.push([l, a]), l.match(zn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', l), () => {
      r();
    };
  };
  function i(s) {
    const a = n.$$.callbacks[s.type];
    a && a.slice().forEach((l) => l.call(this, s));
  }
  return (s) => {
    const a = [], l = {};
    e = (r, o) => {
      let u = r, c = o, d = !1;
      const f = u.match(zn), m = u.match(Dr), h = f || m;
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
        b.passive && (d = d || {}, d.passive = !0), b.nonpassive && (d = d || {}, d.passive = !1), b.capture && (d = d || {}, d.capture = !0), b.once && (d = d || {}, d.once = !0), b.preventDefault && (c = kr(c)), b.stopPropagation && (c = jr(c)), b.stopImmediatePropagation && (c = Fr(c)), b.self && (c = Nr(s, c)), b.trusted && (c = Pr(c));
      }
      const p = Wn(s, u, c, d), _ = () => {
        p();
        const E = a.indexOf(_);
        E > -1 && a.splice(E, 1);
      };
      return a.push(_), u in l || (l[u] = Wn(s, u, i)), _;
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
function Wn(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function kr(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function jr(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Fr(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function Nr(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function Pr(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Ae(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    a.substring(0, e.length) === e && (i[a.substring(e.length)] = n[a]);
  }
  return i;
}
function Xe(n, e) {
  let t = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const s = e[i], a = Array.isArray(s) ? s[0] : s;
      Array.isArray(s) && s.length > 1 ? t.push(a(n, s[1])) : t.push(a(n));
    }
  return {
    update(i) {
      if ((i && i.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let s = 0; s < i.length; s++) {
          const a = t[s];
          if (a && a.update) {
            const l = i[s];
            Array.isArray(l) && l.length > 1 ? a.update(l[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < t.length; i++) {
        const s = t[i];
        s && s.destroy && s.destroy();
      }
    }
  };
}
const { applyPassive: an } = Sr, { matches: Ur } = On;
function un(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: s = !1, color: a, active: l, rippleElement: r, eventTarget: o, activeTarget: u, addClass: c = (h) => n.classList.add(h), removeClass: d = (h) => n.classList.remove(h), addStyle: f = (h, p) => n.style.setProperty(h, p), initPromise: m = Promise.resolve() } = {}) {
  let h, p = Pe("SMUI:addLayoutListener"), _, E = l, b = o, M = u;
  function S() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : a === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), h && E !== l && (E = l, l ? h.activate() : l === !1 && h.deactivate()), e && !h ? (h = new Mr({
      addClass: c,
      browserSupportsCssVars: () => Tr(window),
      computeBoundingRect: () => (r || n).getBoundingClientRect(),
      containsEventTarget: (F) => n.contains(F),
      deregisterDocumentInteractionHandler: (F, L) => document.documentElement.removeEventListener(F, L, an()),
      deregisterInteractionHandler: (F, L) => (o || n).removeEventListener(F, L, an()),
      deregisterResizeHandler: (F) => window.removeEventListener("resize", F),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => l ?? Ur(u || n, ":active"),
      isSurfaceDisabled: () => !!s,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (F, L) => document.documentElement.addEventListener(F, L, an()),
      registerInteractionHandler: (F, L) => (o || n).addEventListener(F, L, an()),
      registerResizeHandler: (F) => window.addEventListener("resize", F),
      removeClass: d,
      updateCssVariable: f
    }), m.then(() => {
      h && (h.init(), h.setUnbounded(i));
    })) : h && !e && m.then(() => {
      h && (h.destroy(), h = void 0);
    }), h && (b !== o || M !== u) && (b = o, M = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
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
        unbounded: i,
        disabled: s,
        color: a,
        active: l,
        rippleElement: r,
        eventTarget: o,
        activeTarget: u,
        addClass: c,
        removeClass: d,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (L) => n.classList.add(L), removeClass: (L) => n.classList.remove(L), addStyle: (L, V) => n.style.setProperty(L, V), initPromise: Promise.resolve() }, F)), S();
    },
    destroy() {
      h && (h.destroy(), h = void 0, d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
const { document: Br } = bs;
function Hr(n) {
  let e, t, i, s, a, l, r, o;
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
      class: i = W({
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
      style: s = Object.entries(
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
      e = Ce(), t = K("div"), c && c.c(), fe(t, f);
    },
    m(m, h) {
      Y(m, e, h), Y(m, t, h), c && c.m(t, null), n[35](t), l = !0, r || (o = [
        $e(
          Br.body,
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
        314 && i !== (i = W({
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
        }))) && { class: i },
        (!l || h[0] & /*internalStyles, style*/
        516 && s !== (s = Object.entries(
          /*internalStyles*/
          n[9]
        ).map(Xn).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: s },
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
  const i = [
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
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
  var r, o, u;
  const c = Je(ke());
  let { use: d = [] } = e, { class: f = "" } = e, { style: m = "" } = e, { static: h = !1 } = e, { anchor: p = !0 } = e, { fixed: _ = !1 } = e, { open: E = h } = e, { managed: b = !1 } = e, { fullWidth: M = !1 } = e, { quickOpen: S = !1 } = e, { anchorElement: T = void 0 } = e, { anchorCorner: F = void 0 } = e, { anchorMargin: L = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: V = 0 } = e, { horizontallyCenteredOnViewport: ne = !1 } = e, { openBottomBias: P = 0 } = e, { neverRestoreFocus: D = !1 } = e, U, H, y = {}, k = {}, w;
  Ge("SMUI:list:role", "menu"), Ge("SMUI:list:item:role", "menuitem");
  const ge = Ut;
  vt(() => (t(7, H = new Ci({
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
    isElementInContainer: (ie) => U.contains(ie),
    isRtl: () => getComputedStyle(U).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (ie) => {
      t(9, k["transform-origin"] = ie, k);
    },
    isFocused: () => document.activeElement === U,
    saveFocus: () => {
      var ie;
      w = (ie = document.activeElement) !== null && ie !== void 0 ? ie : void 0;
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
    setPosition: (ie) => {
      t(9, k.left = "left" in ie ? `${ie.left}px` : "", k), t(9, k.right = "right" in ie ? `${ie.right}px` : "", k), t(9, k.top = "top" in ie ? `${ie.top}px` : "", k), t(9, k.bottom = "bottom" in ie ? `${ie.bottom}px` : "", k);
    },
    setMaxHeight: (ie) => {
      t(9, k["max-height"] = ie, k);
    }
  })), qe(U, "SMUIMenuSurface:mount", {
    get open() {
      return E;
    },
    set open(ie) {
      t(13, E = ie);
    },
    closeProgrammatic: We
  }), H.init(), () => {
    var ie;
    const Ue = H.isHoistedElement;
    H.destroy(), Ue && ((ie = U.parentNode) === null || ie === void 0 || ie.removeChild(U));
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
    H.close(C), t(13, E = !1);
  }
  function ae(C) {
    H && E && !b && H.handleBodyClick(C);
  }
  function it() {
    return E;
  }
  function rt(C) {
    t(13, E = C);
  }
  function x(C, ie) {
    return H.setAbsolutePosition(C, ie);
  }
  function me(C) {
    return H.setIsHoisted(C);
  }
  function he() {
    return H.isFixed();
  }
  function de() {
    return U;
  }
  function xe(C) {
    le[C ? "unshift" : "push"](() => {
      U = C, t(6, U);
    });
  }
  return n.$$set = (C) => {
    e = j(j({}, e), Ke(C)), t(12, s = re(e, i)), "use" in C && t(0, d = C.use), "class" in C && t(1, f = C.class), "style" in C && t(2, m = C.style), "static" in C && t(3, h = C.static), "anchor" in C && t(15, p = C.anchor), "fixed" in C && t(4, _ = C.fixed), "open" in C && t(13, E = C.open), "managed" in C && t(16, b = C.managed), "fullWidth" in C && t(5, M = C.fullWidth), "quickOpen" in C && t(17, S = C.quickOpen), "anchorElement" in C && t(14, T = C.anchorElement), "anchorCorner" in C && t(18, F = C.anchorCorner), "anchorMargin" in C && t(19, L = C.anchorMargin), "maxHeight" in C && t(20, V = C.maxHeight), "horizontallyCenteredOnViewport" in C && t(21, ne = C.horizontallyCenteredOnViewport), "openBottomBias" in C && t(22, P = C.openBottomBias), "neverRestoreFocus" in C && t(23, D = C.neverRestoreFocus), "$$scope" in C && t(33, l = C.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | n.$$.dirty[1] & /*_b, _c*/
    3 && U && p && !(!(t(30, r = U.parentElement) === null || r === void 0) && r.classList.contains("mdc-menu-surface--anchor")) && (t(31, o = U.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), t(14, T = t(32, u = U.parentElement) !== null && u !== void 0 ? u : void 0)), n.$$.dirty[0] & /*instance, open*/
    8320 && H && H.isOpen() !== E && (E ? H.open() : H.close()), n.$$.dirty[0] & /*instance, quickOpen*/
    131200 && H && H.setQuickOpen(S), n.$$.dirty[0] & /*instance, fixed*/
    144 && H && H.setFixedPosition(_), n.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && H && H.setMaxHeight(V), n.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && H && H.setIsHorizontallyCenteredOnViewport(ne), n.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && H && F != null && (typeof F == "string" ? H.setAnchorCorner(ge[F]) : H.setAnchorCorner(F)), n.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && H && H.setAnchorMargin(L), n.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && H && H.setOpenBottomBias(P);
  }, [
    d,
    f,
    m,
    h,
    _,
    M,
    U,
    H,
    y,
    k,
    c,
    ae,
    s,
    E,
    T,
    p,
    b,
    S,
    F,
    L,
    V,
    ne,
    P,
    D,
    it,
    rt,
    x,
    me,
    he,
    de,
    r,
    o,
    u,
    l,
    a,
    xe
  ];
}
class Ti extends Ne {
  constructor(e) {
    super(), je(
      this,
      e,
      wr,
      Hr,
      ye,
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
Fe(Ti, { use: {}, class: {}, style: {}, static: {}, anchor: { type: "Boolean" }, fixed: { type: "Boolean" }, open: {}, managed: { type: "Boolean" }, fullWidth: { type: "Boolean" }, quickOpen: { type: "Boolean" }, anchorElement: {}, anchorCorner: {}, anchorMargin: {}, maxHeight: {}, horizontallyCenteredOnViewport: { type: "Boolean" }, openBottomBias: {}, neverRestoreFocus: { type: "Boolean" } }, ["default"], ["isOpen", "setOpen", "setAbsolutePosition", "setIsHoisted", "isFixed", "getElement"], !0);
function xr(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Vr(n) {
  let e;
  const t = (
    /*#slots*/
    n[17].default
  ), i = Le(
    t,
    n,
    /*$$scope*/
    n[22],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, a) {
      i && i.m(s, a), e = !0;
    },
    p(s, a) {
      i && i.p && (!e || a & /*$$scope*/
      4194304) && Oe(
        i,
        t,
        s,
        /*$$scope*/
        s[22],
        e ? Me(
          t,
          /*$$scope*/
          s[22],
          a,
          null
        ) : Re(
          /*$$scope*/
          s[22]
        ),
        null
      );
    },
    i(s) {
      e || (R(i, s), e = !0);
    },
    o(s) {
      N(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Gr(n) {
  let e, t, i;
  const s = [
    { use: (
      /*usePass*/
      n[5]
    ) },
    {
      class: W({
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
    $$slots: { default: [Vr] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < s.length; r += 1)
    l = j(l, s[r]);
  return (
    /*open*/
    n[0] !== void 0 && (l.open = /*open*/
    n[0]), e = new Ti({ props: l }), n[18](e), le.push(() => Rt(e, "open", a)), e.$on(
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
        Se(e.$$.fragment);
      },
      m(r, o) {
        Ie(e, r, o), i = !0;
      },
      p(r, [o]) {
        const u = o & /*usePass, className, $$restProps*/
        546 ? ee(s, [
          o & /*usePass*/
          32 && { use: (
            /*usePass*/
            r[5]
          ) },
          o & /*className*/
          2 && {
            class: W({
              [
                /*className*/
                r[1]
              ]: !0,
              "mdc-menu": !0
            })
          },
          o & /*$$restProps*/
          512 && se(
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
        i || (R(e.$$.fragment, r), i = !0);
      },
      o(r) {
        N(e.$$.fragment, r), i = !1;
      },
      d(r) {
        n[18](null), be(e, r);
      }
    }
  );
}
function qr(n, e, t) {
  let i;
  const s = [
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
  let a = re(e, s), { $$slots: l = {}, $$scope: r } = e;
  const { closest: o } = On, u = Je(ke());
  let { use: c = [] } = e, { class: d = "" } = e, { open: f = !1 } = e, m, h, p, _;
  vt(() => (t(3, h = new _r({
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
  function V() {
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
  const U = () => h && h.handleMenuSurfaceOpened(), H = (y) => h && h.handleItemAction(_.getOrderedList()[y.detail.index].element);
  return n.$$set = (y) => {
    e = j(j({}, e), Ke(y)), t(9, a = re(e, s)), "use" in y && t(10, c = y.use), "class" in y && t(1, d = y.class), "open" in y && t(0, f = y.open), "$$scope" in y && t(22, r = y.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    1024 && t(5, i = [u, ...c]);
  }, [
    f,
    d,
    m,
    h,
    _,
    i,
    E,
    b,
    M,
    a,
    c,
    S,
    T,
    F,
    L,
    V,
    ne,
    l,
    P,
    D,
    U,
    H,
    r
  ];
}
class Li extends Ne {
  constructor(e) {
    super(), je(this, e, qr, Gr, ye, {
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
  Li,
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
function zr(n) {
  let e, t, i, s, a, l, r, o;
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
      class: i = W({
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
      e = K("li"), t = K("ul"), c && c.c(), fe(t, f), fe(e, h);
    },
    m(p, _) {
      Y(p, e, _), G(e, t), c && c.m(t, null), n[9](e), l = !0, r || (o = [
        ce(s = Xe.call(
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
        4 && i !== (i = W({
          [
            /*list$class*/
            p[2]
          ]: !0,
          "mdc-menu__selection-group": !0
        }))) && { class: i },
        _ & /*$$restProps*/
        32 && Ae(
          /*$$restProps*/
          p[5],
          "list$"
        )
      ])), s && Te(s.update) && _ & /*list$use*/
      2 && s.update.call(
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
function Wr(n, e, t) {
  const i = ["use", "list$use", "list$class", "getElement"];
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
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
    e = j(j({}, e), Ke(h)), t(5, s = re(e, i)), "use" in h && t(0, o = h.use), "list$use" in h && t(1, u = h.list$use), "list$class" in h && t(2, c = h.list$class), "$$scope" in h && t(7, l = h.$$scope);
  }, [
    o,
    u,
    c,
    d,
    r,
    s,
    f,
    l,
    a,
    m
  ];
}
class Xr extends Ne {
  constructor(e) {
    super(), je(this, e, Wr, zr, ye, {
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
Fe(Xr, { use: {}, list$use: {}, list$class: {} }, ["default"], ["getElement"], !0);
function Kr(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].default
  ), i = Le(
    t,
    n,
    /*$$scope*/
    n[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, a) {
      i && i.m(s, a), e = !0;
    },
    p(s, a) {
      i && i.p && (!e || a & /*$$scope*/
      4096) && Oe(
        i,
        t,
        s,
        /*$$scope*/
        s[12],
        e ? Me(
          t,
          /*$$scope*/
          s[12],
          a,
          null
        ) : Re(
          /*$$scope*/
          s[12]
        ),
        null
      );
    },
    i(s) {
      e || (R(i, s), e = !0);
    },
    o(s) {
      N(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Jr(n) {
  let e, t, i;
  const s = [
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
      class: W({
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
      $$slots: { default: [Kr] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491)
      u = ee(s, [
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
          class: W({
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
        64 && se(
          /*context*/
          r[6] === "snackbar" ? { "aria-atomic": "false" } : {}
        ),
        o & /*tabindex*/
        128 && { tabindex: (
          /*tabindex*/
          r[7]
        ) },
        o & /*$$restProps*/
        256 && se(
          /*$$restProps*/
          r[8]
        )
      ]);
    else
      for (let c = 0; c < s.length; c += 1)
        u = j(u, s[c]);
    return { props: u };
  }
  return a && (e = Et(a, l(n)), n[11](e)), {
    c() {
      e && Se(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), i = !0;
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
        a ? (e = Et(a, l(r, o)), r[11](e), Se(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? ee(s, [
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
            class: W({
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
          64 && se(
            /*context*/
            r[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          o & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            r[7]
          ) },
          o & /*$$restProps*/
          256 && se(
            /*$$restProps*/
            r[8]
          )
        ]) : {};
        o & /*$$scope*/
        4096 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && Q(t), n[11](null), e && be(e, r);
    }
  };
}
function Zr(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
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
    e = j(j({}, e), Ke(E)), t(8, s = re(e, i)), "use" in E && t(0, o = E.use), "class" in E && t(1, u = E.class), "component" in E && t(2, d = E.component), "tag" in E && t(3, f = E.tag), "$$scope" in E && t(12, l = E.$$scope);
  }, [
    o,
    u,
    d,
    f,
    c,
    r,
    m,
    h,
    s,
    p,
    a,
    _,
    l
  ];
}
class Qr extends Ne {
  constructor(e) {
    super(), je(this, e, Zr, Jr, ye, {
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
Fe(Qr, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function Yr(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = Le(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, a) {
      i && i.m(s, a), e = !0;
    },
    p(s, a) {
      i && i.p && (!e || a & /*$$scope*/
      8192) && Oe(
        i,
        t,
        s,
        /*$$scope*/
        s[13],
        e ? Me(
          t,
          /*$$scope*/
          s[13],
          a,
          null
        ) : Re(
          /*$$scope*/
          s[13]
        ),
        null
      );
    },
    i(s) {
      e || (R(i, s), e = !0);
    },
    o(s) {
      N(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function $r(n) {
  let e, t, i;
  const s = [
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
      class: W({
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
      $$slots: { default: [Yr] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983)
      u = ee(s, [
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
          class: W({
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
        s[3],
        o & /*svg*/
        128 && se(
          /*svg*/
          r[7] ? { focusable: "false", tabindex: "-1" } : {}
        ),
        o & /*$$restProps*/
        512 && se(
          /*$$restProps*/
          r[9]
        )
      ]);
    else
      for (let c = 0; c < s.length; c += 1)
        u = j(u, s[c]);
    return { props: u };
  }
  return a && (e = Et(a, l(n)), n[12](e)), {
    c() {
      e && Se(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), i = !0;
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
        a ? (e = Et(a, l(r, o)), r[12](e), Se(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
        983 ? ee(s, [
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
            class: W({
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
          s[3],
          o & /*svg*/
          128 && se(
            /*svg*/
            r[7] ? { focusable: "false", tabindex: "-1" } : {}
          ),
          o & /*$$restProps*/
          512 && se(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && Q(t), n[12](null), e && be(e, r);
    }
  };
}
function ea(n, e, t) {
  const i = ["use", "class", "on", "component", "tag", "getElement"];
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
  const r = Je(ke());
  let { use: o = [] } = e, { class: u = "" } = e, { on: c = !1 } = e, d, { component: f = gt } = e, { tag: m = f === gt ? "i" : void 0 } = e;
  const h = f === Mi, p = Pe("SMUI:icon:context");
  function _() {
    return d.getElement();
  }
  function E(b) {
    le[b ? "unshift" : "push"](() => {
      d = b, t(5, d);
    });
  }
  return n.$$set = (b) => {
    e = j(j({}, e), Ke(b)), t(9, s = re(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "on" in b && t(2, c = b.on), "component" in b && t(3, f = b.component), "tag" in b && t(4, m = b.tag), "$$scope" in b && t(13, l = b.$$scope);
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
    s,
    _,
    a,
    E,
    l
  ];
}
class ta extends Ne {
  constructor(e) {
    super(), je(this, e, ea, $r, ye, {
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
Fe(ta, { use: {}, class: {}, on: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function na(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i, s = (
    /*tag*/
    n[1] && In(n)
  );
  return {
    c() {
      s && s.c(), t = ut();
    },
    m(a, l) {
      s && s.m(a, l), Y(a, t, l), i = !0;
    },
    p(a, l) {
      /*tag*/
      a[1] ? e ? ye(
        e,
        /*tag*/
        a[1]
      ) ? (s.d(1), s = In(a), e = /*tag*/
      a[1], s.c(), s.m(t.parentNode, t)) : s.p(a, l) : (s = In(a), e = /*tag*/
      a[1], s.c(), s.m(t.parentNode, t)) : e && (s.d(1), s = null, e = /*tag*/
      a[1]);
    },
    i(a) {
      i || (R(s, a), i = !0);
    },
    o(a) {
      N(s, a), i = !1;
    },
    d(a) {
      a && Q(t), s && s.d(a);
    }
  };
}
function ia(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i = (
    /*tag*/
    n[1] && bn(n)
  );
  return {
    c() {
      i && i.c(), t = ut();
    },
    m(s, a) {
      i && i.m(s, a), Y(s, t, a);
    },
    p(s, a) {
      /*tag*/
      s[1] ? e ? ye(
        e,
        /*tag*/
        s[1]
      ) ? (i.d(1), i = bn(s), e = /*tag*/
      s[1], i.c(), i.m(t.parentNode, t)) : i.p(s, a) : (i = bn(s), e = /*tag*/
      s[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      s[1]);
    },
    i: nt,
    o: nt,
    d(s) {
      s && Q(t), i && i.d(s);
    }
  };
}
function sa(n) {
  let e, t, i, s, a;
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
      Y(c, e, d), r && r.m(e, null), n[9](e), i = !0, s || (a = [
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
    p(c, d) {
      r && r.p && (!i || d & /*$$scope*/
      128) && Oe(
        r,
        l,
        c,
        /*$$scope*/
        c[7],
        i ? Me(
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
      i || (R(r, c), i = !0);
    },
    o(c) {
      N(r, c), i = !1;
    },
    d(c) {
      c && Q(e), r && r.d(c), n[9](null), s = !1, ze(a);
    }
  };
}
function In(n) {
  let e, t, i, s, a;
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
      e = K(
        /*tag*/
        n[1]
      ), r && r.c(), fn(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, d) {
      Y(c, e, d), r && r.m(e, null), n[11](e), i = !0, s || (a = [
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
    p(c, d) {
      r && r.p && (!i || d & /*$$scope*/
      128) && Oe(
        r,
        l,
        c,
        /*$$scope*/
        c[7],
        i ? Me(
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
      i || (R(r, c), i = !0);
    },
    o(c) {
      N(r, c), i = !1;
    },
    d(c) {
      c && Q(e), r && r.d(c), n[11](null), s = !1, ze(a);
    }
  };
}
function bn(n) {
  let e, t, i, s, a = [
    /*$$restProps*/
    n[5]
  ], l = {};
  for (let r = 0; r < a.length; r += 1)
    l = j(l, a[r]);
  return {
    c() {
      e = K(
        /*tag*/
        n[1]
      ), fn(
        /*tag*/
        n[1]
      )(e, l);
    },
    m(r, o) {
      Y(r, e, o), n[10](e), i || (s = [
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
      r && Q(e), n[10](null), i = !1, ze(s);
    }
  };
}
function ra(n) {
  let e, t, i, s;
  const a = [sa, ia, na], l = [];
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
      t.c(), i = ut();
    },
    m(o, u) {
      l[e].m(o, u), Y(o, i, u), s = !0;
    },
    p(o, [u]) {
      let c = e;
      e = r(o), e === c ? l[e].p(o, u) : (et(), N(l[c], 1, 1, () => {
        l[c] = null;
      }), tt(), t = l[e], t ? t.p(o, u) : (t = l[e] = a[e](o), t.c()), R(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      s || (R(t), s = !0);
    },
    o(o) {
      N(t), s = !1;
    },
    d(o) {
      o && Q(i), l[e].d(o);
    }
  };
}
function aa(n, e, t) {
  let i;
  const s = ["use", "tag", "getElement"];
  let a = re(e, s), { $$slots: l = {}, $$scope: r } = e, { use: o = [] } = e, { tag: u } = e;
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
    e = j(j({}, e), Ke(_)), t(5, a = re(e, s)), "use" in _ && t(0, o = _.use), "tag" in _ && t(1, u = _.tag), "$$scope" in _ && t(7, r = _.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*tag*/
    2 && t(3, i = [
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
    i,
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
    super(), je(this, e, aa, ra, ye, { use: 0, tag: 1, getElement: 6 });
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
function la(n) {
  let e, t, i, s, a;
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
      Y(c, e, d), r && r.m(e, null), n[7](e), i = !0, s || (a = [
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
      ], s = !0);
    },
    p(c, [d]) {
      r && r.p && (!i || d & /*$$scope*/
      32) && Oe(
        r,
        l,
        c,
        /*$$scope*/
        c[5],
        i ? Me(
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
      i || (R(r, c), i = !0);
    },
    o(c) {
      N(r, c), i = !1;
    },
    d(c) {
      c && Q(e), r && r.d(c), n[7](null), s = !1, ze(a);
    }
  };
}
function oa(n, e, t) {
  const i = ["use", "getElement"];
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
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
    e = j(j({}, e), Ke(f)), t(3, s = re(e, i)), "use" in f && t(0, r = f.use), "$$scope" in f && t(5, l = f.$$scope);
  }, [
    r,
    u,
    o,
    s,
    c,
    l,
    a,
    d
  ];
}
class Mi extends Ne {
  constructor(e) {
    super(), je(this, e, oa, la, ye, { use: 0, getElement: 4 });
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
Fe(Mi, { use: {} }, ["default"], ["getElement"], !0);
function ua(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = Le(
    t,
    n,
    /*$$scope*/
    n[3],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, a) {
      i && i.m(s, a), e = !0;
    },
    p(s, [a]) {
      i && i.p && (!e || a & /*$$scope*/
      8) && Oe(
        i,
        t,
        s,
        /*$$scope*/
        s[3],
        e ? Me(
          t,
          /*$$scope*/
          s[3],
          a,
          null
        ) : Re(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (R(i, s), e = !0);
    },
    o(s) {
      N(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function ca(n, e, t) {
  let i, { $$slots: s = {}, $$scope: a } = e, { key: l } = e, { value: r } = e;
  const o = Ln(r);
  return $t(n, o, (u) => t(5, i = u)), Ge(l, o), Ht(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, l = u.key), "value" in u && t(2, r = u.value), "$$scope" in u && t(3, a = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && cn(o, i = r, i);
  }, [o, l, r, a, s];
}
class da extends Ne {
  constructor(e) {
    super(), je(this, e, ca, ua, ye, { key: 1, value: 2 });
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
Fe(da, { key: {}, value: {} }, ["default"], [], !0);
function fa(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = Le(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, a) {
      i && i.m(s, a), e = !0;
    },
    p(s, a) {
      i && i.p && (!e || a & /*$$scope*/
      8192) && Oe(
        i,
        t,
        s,
        /*$$scope*/
        s[13],
        e ? Me(
          t,
          /*$$scope*/
          s[13],
          a,
          null
        ) : Re(
          /*$$scope*/
          s[13]
        ),
        null
      );
    },
    i(s) {
      e || (R(i, s), e = !0);
    },
    o(s) {
      N(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function ha(n) {
  let e, t, i;
  const s = [
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
      class: W({
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
      $$slots: { default: [fa] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003)
      u = ee(s, [
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
          class: W({
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
        128 && se(
          /*props*/
          r[7]
        ),
        o & /*$$restProps*/
        512 && se(
          /*$$restProps*/
          r[9]
        )
      ]);
    else
      for (let c = 0; c < s.length; c += 1)
        u = j(u, s[c]);
    return { props: u };
  }
  return a && (e = Et(a, l(n)), n[12](e)), {
    c() {
      e && Se(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), i = !0;
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
        a ? (e = Et(a, l(r, o)), r[12](e), Se(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? ee(s, [
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
            class: W({
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
          128 && se(
            /*props*/
            r[7]
          ),
          o & /*$$restProps*/
          512 && se(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), i = !1;
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
function ma(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e, { use: r = [] } = e, { class: o = "" } = e, u;
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
    e = j(j({}, e), Ke(S)), t(9, s = re(e, i)), "use" in S && t(0, r = S.use), "class" in S && t(1, o = S.class), "component" in S && t(2, p = S.component), "tag" in S && t(3, _ = S.tag), "$$scope" in S && t(13, l = S.$$scope);
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
    s,
    b,
    a,
    M,
    l
  ];
}
class Oi extends Ne {
  constructor(e) {
    super(), je(this, e, ma, ha, ye, {
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
Fe(Oi, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
const Kn = Object.assign({}, yt);
function wt(n) {
  return new Proxy(Oi, {
    construct: function(e, t) {
      return Object.assign(yt, Kn, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(yt, Kn, n), e[t];
    }
  });
}
function pa(n) {
  let e;
  const t = (
    /*#slots*/
    n[42].default
  ), i = Le(
    t,
    n,
    /*$$scope*/
    n[44],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, a) {
      i && i.m(s, a), e = !0;
    },
    p(s, a) {
      i && i.p && (!e || a[1] & /*$$scope*/
      8192) && Oe(
        i,
        t,
        s,
        /*$$scope*/
        s[44],
        e ? Me(
          t,
          /*$$scope*/
          s[44],
          a,
          null
        ) : Re(
          /*$$scope*/
          s[44]
        ),
        null
      );
    },
    i(s) {
      e || (R(i, s), e = !0);
    },
    o(s) {
      N(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function ga(n) {
  let e, t, i;
  const s = [
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
      class: W({
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
      $$slots: { default: [pa] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095)
      u = ee(s, [
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
          class: W({
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
        33554432 && se(
          /*$$restProps*/
          r[25]
        )
      ]);
    else
      for (let c = 0; c < s.length; c += 1)
        u = j(u, s[c]);
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
      e && Se(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), i = !0;
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
        ), Se(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
        33796095 ? ee(s, [
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
            class: W({
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
          33554432 && se(
            /*$$restProps*/
            r[25]
          )
        ]) : {};
        o[1] & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      i || (e && R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && Q(t), n[43](null), e && be(e, r);
    }
  };
}
function _a(n, e, t) {
  const i = [
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
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
  var r;
  const { closest: o, matches: u } = On, c = Je(ke());
  let { use: d = [] } = e, { class: f = "" } = e, { nonInteractive: m = !1 } = e, { dense: h = !1 } = e, { textualList: p = !1 } = e, { avatarList: _ = !1 } = e, { iconList: E = !1 } = e, { imageList: b = !1 } = e, { thumbnailList: M = !1 } = e, { videoList: S = !1 } = e, { twoLine: T = !1 } = e, { threeLine: F = !1 } = e, { vertical: L = !0 } = e, { wrapFocus: V = (r = Pe("SMUI:list:wrapFocus")) !== null && r !== void 0 ? r : !1 } = e, { singleSelection: ne = !1 } = e, { disabledItemsFocusable: P = !1 } = e, { selectedIndex: D = -1 } = e, { radioList: U = !1 } = e, { checkList: H = !1 } = e, { hasTypeahead: y = !1 } = e, k, w, ge = [], O = Pe("SMUI:list:role"), ue = Pe("SMUI:list:nav");
  const Ee = /* @__PURE__ */ new WeakMap();
  let We = Pe("SMUI:dialog:selection"), ae = Pe("SMUI:addLayoutListener"), it, { component: rt = gt } = e, { tag: x = rt === gt ? ue ? "nav" : "ul" : void 0 } = e;
  Ge("SMUI:list:nonInteractive", m), Ge("SMUI:separator:context", "list"), O || (ne ? (O = "listbox", Ge("SMUI:list:item:role", "option")) : U ? (O = "radiogroup", Ge("SMUI:list:item:role", "radio")) : H ? (O = "group", Ge("SMUI:list:item:role", "checkbox")) : (O = "list", Ge("SMUI:list:item:role", void 0))), ae && (it = ae(It)), vt(() => {
    t(41, w = new pr({
      addClassForElementIndex: A,
      focusItemAtIndex: B,
      getAttributeForElementIndex: (z, q) => {
        var ve, kt;
        return (kt = (ve = _e()[z]) === null || ve === void 0 ? void 0 : ve.getAttr(q)) !== null && kt !== void 0 ? kt : null;
      },
      getFocusedElementIndex: () => document.activeElement ? _e().map((z) => z.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => ge.length,
      getPrimaryTextAtIndex: dt,
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
      listItemAtIndexHasClass: ot,
      notifyAction: (z) => {
        t(26, D = z), k != null && qe(Ye(), "SMUIList:action", { index: z }, void 0, !0);
      },
      notifySelectionChange: (z) => {
        k != null && qe(Ye(), "SMUIList:selectionChange", { changedIndices: z });
      },
      removeClassForElementIndex: J,
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
      removeClassForElementIndex: J,
      setAttributeForElementIndex: $,
      removeAttributeForElementIndex: _t,
      getAttributeFromElementIndex: Ze,
      getPrimaryTextAtIndex: dt
    };
    return qe(Ye(), "SMUIList:mount", v), w.init(), w.layout(), () => {
      w.destroy();
    };
  }), Ht(() => {
    it && it();
  });
  function me(v) {
    ge.push(v.detail), Ee.set(v.detail.element, v.detail), ne && v.detail.selected && t(26, D = ft(v.detail.element)), v.stopPropagation();
  }
  function he(v) {
    var z;
    const q = (z = v.detail && ge.indexOf(v.detail)) !== null && z !== void 0 ? z : -1;
    q !== -1 && (ge.splice(q, 1), ge = ge, Ee.delete(v.detail.element)), v.stopPropagation();
  }
  function de(v) {
    w && v.target && w.handleKeydown(v, v.target.classList.contains("mdc-deprecated-list-item"), ft(v.target));
  }
  function xe(v) {
    w && v.target && w.handleFocusIn(ft(v.target));
  }
  function C(v) {
    w && v.target && w.handleFocusOut(ft(v.target));
  }
  function ie(v) {
    w && v.target && w.handleClick(ft(v.target), !u(v.target, 'input[type="checkbox"], input[type="radio"]'), v);
  }
  function Ue(v) {
    if (U || H) {
      const z = ft(v.target);
      if (z !== -1) {
        const q = _e()[z];
        q && (U && !q.checked || H) && (u(v.detail.target, 'input[type="checkbox"], input[type="radio"]') || (q.checked = !q.checked), q.activateRipple(), window.requestAnimationFrame(() => {
          q.deactivateRipple();
        }));
      }
    }
  }
  function _e() {
    return k == null ? [] : [...Ye().children].map((v) => Ee.get(v)).filter((v) => v && v._smui_list_item_accessor);
  }
  function ot(v, z) {
    var q;
    const ve = _e()[v];
    return (q = ve && ve.hasClass(z)) !== null && q !== void 0 ? q : !1;
  }
  function A(v, z) {
    const q = _e()[v];
    q && q.addClass(z);
  }
  function J(v, z) {
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
  function dt(v) {
    var z;
    const q = _e()[v];
    return (z = q && q.getPrimaryText()) !== null && z !== void 0 ? z : "";
  }
  function ft(v) {
    const z = o(v, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return z && u(z, ".mdc-deprecated-list-item") ? _e().map((q) => q == null ? void 0 : q.element).indexOf(z) : -1;
  }
  function It() {
    return w.layout();
  }
  function Qe(v, z) {
    return w.setEnabled(v, z);
  }
  function st() {
    return w.isTypeaheadInProgress();
  }
  function pe() {
    return w.getSelectedIndex();
  }
  function X() {
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
    e = j(j({}, e), Ke(v)), t(25, s = re(e, i)), "use" in v && t(0, d = v.use), "class" in v && t(1, f = v.class), "nonInteractive" in v && t(2, m = v.nonInteractive), "dense" in v && t(3, h = v.dense), "textualList" in v && t(4, p = v.textualList), "avatarList" in v && t(5, _ = v.avatarList), "iconList" in v && t(6, E = v.iconList), "imageList" in v && t(7, b = v.imageList), "thumbnailList" in v && t(8, M = v.thumbnailList), "videoList" in v && t(9, S = v.videoList), "twoLine" in v && t(10, T = v.twoLine), "threeLine" in v && t(11, F = v.threeLine), "vertical" in v && t(27, L = v.vertical), "wrapFocus" in v && t(28, V = v.wrapFocus), "singleSelection" in v && t(29, ne = v.singleSelection), "disabledItemsFocusable" in v && t(30, P = v.disabledItemsFocusable), "selectedIndex" in v && t(26, D = v.selectedIndex), "radioList" in v && t(31, U = v.radioList), "checkList" in v && t(32, H = v.checkList), "hasTypeahead" in v && t(33, y = v.hasTypeahead), "component" in v && t(12, rt = v.component), "tag" in v && t(13, x = v.tag), "$$scope" in v && t(44, l = v.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*vertical*/
    134217728 | n.$$.dirty[1] & /*instance*/
    1024 && w && w.setVerticalOrientation(L), n.$$.dirty[0] & /*wrapFocus*/
    268435456 | n.$$.dirty[1] & /*instance*/
    1024 && w && w.setWrapFocus(V), n.$$.dirty[1] & /*instance, hasTypeahead*/
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
    x,
    k,
    O,
    c,
    We,
    me,
    he,
    de,
    xe,
    C,
    ie,
    Ue,
    s,
    D,
    L,
    V,
    ne,
    P,
    U,
    H,
    y,
    It,
    Qe,
    st,
    pe,
    X,
    B,
    Ye,
    w,
    a,
    mn,
    l
  ];
}
class Ri extends Ne {
  constructor(e) {
    super(), je(
      this,
      e,
      _a,
      ga,
      ye,
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
  Ri,
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
      e = K("span"), Z(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(t, i) {
      Y(t, e, i);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function Ia(n) {
  let e, t, i = (
    /*ripple*/
    n[7] && Jn()
  );
  const s = (
    /*#slots*/
    n[34].default
  ), a = Le(
    s,
    n,
    /*$$scope*/
    n[37],
    null
  );
  return {
    c() {
      i && i.c(), e = ut(), a && a.c();
    },
    m(l, r) {
      i && i.m(l, r), Y(l, e, r), a && a.m(l, r), t = !0;
    },
    p(l, r) {
      /*ripple*/
      l[7] ? i || (i = Jn(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), a && a.p && (!t || r[1] & /*$$scope*/
      64) && Oe(
        a,
        s,
        l,
        /*$$scope*/
        l[37],
        t ? Me(
          s,
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
      l && Q(e), i && i.d(l), a && a.d(l);
    }
  };
}
function ba(n) {
  let e, t, i;
  const s = [
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
      class: W({
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
      $$slots: { default: [Ia] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479)
      u = ee(s, [
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
          class: W({
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
        8388610 && se(
          /*nav*/
          r[23] && /*activated*/
          r[1] ? { "aria-current": "page" } : {}
        ),
        o[0] & /*nav, wrapper, role*/
        8389376 && se(!/*nav*/
        r[23] || /*wrapper*/
        r[8] ? { role: (
          /*role*/
          r[9]
        ) } : {}),
        o[0] & /*nav, role, selected*/
        8389121 && se(!/*nav*/
        r[23] && /*role*/
        r[9] === "option" ? {
          "aria-selected": (
            /*selected*/
            r[0] ? "true" : "false"
          )
        } : {}),
        o[0] & /*nav, role, input*/
        8454656 && se(!/*nav*/
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
        8389632 && se(/*nav*/
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
        1048576 && se(
          /*internalAttrs*/
          r[20]
        ),
        o[0] & /*$$restProps*/
        536870912 && se(
          /*$$restProps*/
          r[29]
        )
      ]);
    else
      for (let c = 0; c < s.length; c += 1)
        u = j(u, s[c]);
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
      e && Se(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), i = !0;
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
        ), Se(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
        670916479 ? ee(s, [
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
            class: W({
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
          8388610 && se(
            /*nav*/
            r[23] && /*activated*/
            r[1] ? { "aria-current": "page" } : {}
          ),
          o[0] & /*nav, wrapper, role*/
          8389376 && se(!/*nav*/
          r[23] || /*wrapper*/
          r[8] ? { role: (
            /*role*/
            r[9]
          ) } : {}),
          o[0] & /*nav, role, selected*/
          8389121 && se(!/*nav*/
          r[23] && /*role*/
          r[9] === "option" ? {
            "aria-selected": (
              /*selected*/
              r[0] ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, role, input*/
          8454656 && se(!/*nav*/
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
          8389632 && se(/*nav*/
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
          1048576 && se(
            /*internalAttrs*/
            r[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && se(
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
      i || (e && R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && Q(t), n[35](null), e && be(e, r);
    }
  };
}
let Ea = 0;
const En = ([n, e]) => `${n}: ${e};`;
function va(n, e, t) {
  let i;
  const s = [
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
  let a = re(e, s), { $$slots: l = {}, $$scope: r } = e;
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
  let { selected: T = !1 } = e, { disabled: F = !1 } = e, { skipRestoreFocus: L = !1 } = e, { tabindex: V = c } = e, { inputId: ne = "SMUI-form-field-list-" + Ea++ } = e, { href: P = void 0 } = e, D, U = {}, H = {}, y = {}, k, w, ge = Pe("SMUI:list:item:nav"), { component: O = gt } = e, { tag: ue = O === gt ? ge ? P ? "a" : "span" : "li" : void 0 } = e;
  Ge("SMUI:generic:input:props", { id: ne }), Ge("SMUI:separator:context", void 0), vt(() => {
    if (!T && !_) {
      let J = !0, $ = D.getElement();
      for (; $.previousSibling; )
        if ($ = $.previousSibling, $.nodeType === 1 && $.classList.contains("mdc-deprecated-list-item") && !$.classList.contains("mdc-deprecated-list-item--disabled")) {
          J = !1;
          break;
        }
      J && (w = window.requestAnimationFrame(() => he($)));
    }
    const A = {
      _smui_list_item_accessor: !0,
      get element() {
        return Ue();
      },
      get selected() {
        return T;
      },
      set selected(J) {
        t(0, T = J);
      },
      hasClass: Ee,
      addClass: We,
      removeClass: ae,
      getAttr: rt,
      addAttr: x,
      removeAttr: me,
      getPrimaryText: ie,
      // For inputs within item.
      get checked() {
        var J;
        return (J = k && k.checked) !== null && J !== void 0 ? J : !1;
      },
      set checked(J) {
        k && t(16, k.checked = !!J, k);
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
        return i;
      },
      set tabindex(J) {
        t(30, V = J);
      },
      get disabled() {
        return F;
      },
      get activated() {
        return M;
      },
      set activated(J) {
        t(1, M = J);
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
  function it(A, J) {
    H[A] != J && (J === "" || J == null ? (delete H[A], t(19, H)) : t(19, H[A] = J, H));
  }
  function rt(A) {
    var J;
    return A in y ? (J = y[A]) !== null && J !== void 0 ? J : null : Ue().getAttribute(A);
  }
  function x(A, J) {
    y[A] !== J && t(20, y[A] = J, y);
  }
  function me(A) {
    (!(A in y) || y[A] != null) && t(20, y[A] = void 0, y);
  }
  function he(A) {
    let J = !0;
    for (; A.nextElementSibling; )
      if (A = A.nextElementSibling, A.nodeType === 1 && A.classList.contains("mdc-deprecated-list-item")) {
        const $ = A.attributes.getNamedItem("tabindex");
        if ($ && $.value === "0") {
          J = !1;
          break;
        }
      }
    J && t(21, i = 0);
  }
  function de(A) {
    const J = A.key === "Enter", $ = A.key === "Space";
    (J || $) && C(A);
  }
  function xe(A) {
    ("_smui_checkbox_accessor" in A.detail || "_smui_radio_accessor" in A.detail) && t(16, k = A.detail);
  }
  function C(A) {
    F || qe(Ue(), "SMUI:action", A);
  }
  function ie() {
    var A, J, $;
    const _t = Ue(), Ze = _t.querySelector(".mdc-deprecated-list-item__primary-text");
    if (Ze)
      return (A = Ze.textContent) !== null && A !== void 0 ? A : "";
    const dt = _t.querySelector(".mdc-deprecated-list-item__text");
    return dt ? (J = dt.textContent) !== null && J !== void 0 ? J : "" : ($ = _t.textContent) !== null && $ !== void 0 ? $ : "";
  }
  function Ue() {
    return D.getElement();
  }
  function _e(A) {
    le[A ? "unshift" : "push"](() => {
      D = A, t(17, D);
    });
  }
  const ot = () => t(16, k = void 0);
  return n.$$set = (A) => {
    e = j(j({}, e), Ke(A)), t(29, a = re(e, s)), "use" in A && t(2, f = A.use), "class" in A && t(3, m = A.class), "style" in A && t(4, h = A.style), "color" in A && t(5, p = A.color), "nonInteractive" in A && t(6, _ = A.nonInteractive), "ripple" in A && t(7, E = A.ripple), "wrapper" in A && t(8, b = A.wrapper), "activated" in A && t(1, M = A.activated), "role" in A && t(9, S = A.role), "selected" in A && t(0, T = A.selected), "disabled" in A && t(10, F = A.disabled), "skipRestoreFocus" in A && t(11, L = A.skipRestoreFocus), "tabindex" in A && t(30, V = A.tabindex), "inputId" in A && t(31, ne = A.inputId), "href" in A && t(12, P = A.href), "component" in A && t(13, O = A.component), "tag" in A && t(14, ue = A.tag), "$$scope" in A && t(37, r = A.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && t(21, i = d(V) ? !_ && !F && (T || k && k.checked) ? 0 : -1 : V);
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
    H,
    y,
    i,
    u,
    ge,
    We,
    ae,
    it,
    de,
    xe,
    a,
    V,
    ne,
    ie,
    Ue,
    l,
    _e,
    ot,
    r
  ];
}
class Di extends Ne {
  constructor(e) {
    super(), je(
      this,
      e,
      va,
      ba,
      ye,
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
Fe(Di, { use: {}, class: {}, style: {}, color: {}, nonInteractive: {}, ripple: {}, wrapper: { type: "Boolean" }, activated: { type: "Boolean" }, role: {}, selected: { type: "Boolean" }, disabled: { type: "Boolean" }, skipRestoreFocus: { type: "Boolean" }, tabindex: {}, inputId: {}, href: {}, component: {}, tag: {} }, ["default"], ["action", "getPrimaryText", "getElement"], !0);
wt({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
wt({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
wt({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Aa(n) {
  let e, t, i, s, a, l;
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
      class: t = W({
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
      e = K("span"), o && o.c(), fe(e, c);
    },
    m(d, f) {
      Y(d, e, f), o && o.m(e, null), n[9](e), s = !0, a || (l = [
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
      ], a = !0);
    },
    p(d, [f]) {
      o && o.p && (!s || f & /*$$scope*/
      128) && Oe(
        o,
        r,
        d,
        /*$$scope*/
        d[7],
        s ? Me(
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
        (!s || f & /*className*/
        2 && t !== (t = W({
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
      ])), i && Te(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      s || (R(o, d), s = !0);
    },
    o(d) {
      N(o, d), s = !1;
    },
    d(d) {
      d && Q(e), o && o.d(d), n[9](null), a = !1, ze(l);
    }
  };
}
function Sa(n, e, t) {
  const i = ["use", "class", "getElement"];
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
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
    e = j(j({}, e), Ke(h)), t(5, s = re(e, i)), "use" in h && t(0, o = h.use), "class" in h && t(1, u = h.class), "$$scope" in h && t(7, l = h.$$scope);
  }, [
    o,
    u,
    c,
    r,
    d,
    s,
    f,
    l,
    a,
    m
  ];
}
class ki extends Ne {
  constructor(e) {
    super(), je(this, e, Sa, Aa, ye, { use: 0, class: 1, getElement: 6 });
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
Fe(ki, { use: {}, class: {} }, ["default"], ["getElement"], !0);
wt({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
function ya(n) {
  let e, t, i, s, a, l, r;
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
      class: t = W({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-deprecated-list-item__text": !0
      })
    },
    {
      for: i = /*inputProps*/
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
      e = K("label"), u && u.c(), fe(e, d);
    },
    m(f, m) {
      Y(f, e, m), u && u.m(e, null), n[9](e), a = !0, l || (r = [
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
        2 && t !== (t = W({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-deprecated-list-item__text": !0
        }))) && { class: t },
        { for: i },
        m & /*$$restProps*/
        32 && /*$$restProps*/
        f[5]
      ])), s && Te(s.update) && m & /*use*/
      1 && s.update.call(
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
function Ca(n, e, t) {
  const i = ["use", "class", "getElement"];
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
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
    e = j(j({}, e), Ke(p)), t(5, s = re(e, i)), "use" in p && t(0, u = p.use), "class" in p && t(1, c = p.class), "$$scope" in p && t(7, l = p.$$scope);
  }, [
    u,
    c,
    d,
    o,
    f,
    s,
    m,
    l,
    a,
    h
  ];
}
class Ta extends Ne {
  constructor(e) {
    super(), je(this, e, Ca, ya, ye, { use: 0, class: 1, getElement: 6 });
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
Fe(Ta, { use: {}, class: {} }, ["default"], ["getElement"], !0);
wt({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
wt({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
function La(n) {
  let e, t, i;
  const s = [
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
      class: W({
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
      u = ee(s, [
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
          class: W({
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
        s[3],
        o & /*$$restProps*/
        2048 && se(
          /*$$restProps*/
          r[11]
        )
      ]);
    else
      for (let c = 0; c < s.length; c += 1)
        u = j(u, s[c]);
    return { props: u };
  }
  return a && (e = Et(a, l(n)), n[13](e)), {
    c() {
      e && Se(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && Ie(e, r, o), Y(r, t, o), i = !0;
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
        a ? (e = Et(a, l(r, o)), r[13](e), Se(e.$$.fragment), R(e.$$.fragment, 1), Ie(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, padded, inset, insetLeading, insetTrailing, insetPadding, $$restProps*/
        3455 ? ee(s, [
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
            class: W({
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
          s[3],
          o & /*$$restProps*/
          2048 && se(
            /*$$restProps*/
            r[11]
          )
        ]) : {};
        e.$set(u);
      }
    },
    i(r) {
      i || (e && R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      e && N(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && Q(t), n[13](null), e && be(e, r);
    }
  };
}
function Ma(n, e, t) {
  const i = [
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
  let s = re(e, i);
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
    e = j(j({}, e), Ke(S)), t(11, s = re(e, i)), "use" in S && t(0, l = S.use), "class" in S && t(1, r = S.class), "padded" in S && t(2, o = S.padded), "inset" in S && t(3, u = S.inset), "insetLeading" in S && t(4, c = S.insetLeading), "insetTrailing" in S && t(5, d = S.insetTrailing), "insetPadding" in S && t(6, f = S.insetPadding), "component" in S && t(7, _ = S.component), "tag" in S && t(8, E = S.tag);
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
    s,
    b,
    M
  ];
}
class Oa extends Ne {
  constructor(e) {
    super(), je(this, e, Ma, La, ye, {
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
Fe(Oa, { use: {}, class: {}, padded: { type: "Boolean" }, inset: { type: "Boolean" }, insetLeading: { type: "Boolean" }, insetTrailing: { type: "Boolean" }, insetPadding: { type: "Boolean" }, component: {}, tag: {} }, [], ["getElement"], !0);
wt({
  class: "mdc-menu__selection-group-icon",
  component: ki
});
function Ra(n) {
  let e, t, i, s, a, l, r, o;
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
      class: t = W({
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
      style: i = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(Qn).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    {
      for: s = /*forId*/
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
      e = K("label"), c && c.c(), fe(e, f);
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
        267 && t !== (t = W({
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
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          m[9]
        ).map(Qn).concat([
          /*style*/
          m[4]
        ]).join(" "))) && { style: i },
        (!l || h & /*forId*/
        32 && s !== (s = /*forId*/
        m[5] || /*inputProps*/
        (m[11] ? (
          /*inputProps*/
          m[11].id
        ) : void 0))) && { for: s },
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
function Da(n) {
  let e, t, i, s, a, l, r;
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
      class: t = W({
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
      style: i = Object.entries(
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
      e = K("span"), u && u.c(), fe(e, d);
    },
    m(f, m) {
      Y(f, e, m), u && u.m(e, null), n[23](e), a = !0, l || (r = [
        ce(s = Xe.call(
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
        267 && t !== (t = W({
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
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          f[9]
        ).map(Zn).concat([
          /*style*/
          f[4]
        ]).join(" "))) && { style: i },
        m & /*$$restProps*/
        4096 && /*$$restProps*/
        f[12]
      ])), s && Te(s.update) && m & /*use*/
      4 && s.update.call(
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
function ka(n) {
  let e, t, i, s;
  const a = [Da, Ra], l = [];
  function r(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = r(n), t = l[e] = a[e](n), {
    c() {
      t.c(), i = ut();
    },
    m(o, u) {
      l[e].m(o, u), Y(o, i, u), s = !0;
    },
    p(o, [u]) {
      let c = e;
      e = r(o), e === c ? l[e].p(o, u) : (et(), N(l[c], 1, 1, () => {
        l[c] = null;
      }), tt(), t = l[e], t ? t.p(o, u) : (t = l[e] = a[e](o), t.c()), R(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      s || (R(t), s = !0);
    },
    o(o) {
      N(t), s = !1;
    },
    d(o) {
      o && Q(i), l[e].d(o);
    }
  };
}
const Zn = ([n, e]) => `${n}: ${e};`, Qn = ([n, e]) => `${n}: ${e};`;
function ja(n, e, t) {
  const i = [
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
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
  var r;
  const o = Je(ke());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { for: f = void 0 } = e, { floatAbove: m = !1 } = e, { required: h = !1 } = e, { wrapped: p = !1 } = e, _, E, b = {}, M = {}, S = (r = Pe("SMUI:generic:input:props")) !== null && r !== void 0 ? r : {}, T = m, F = h;
  vt(() => {
    t(18, E = new sr({
      addClass: L,
      removeClass: V,
      getWidth: () => {
        var ue, Ee;
        const We = k(), ae = We.cloneNode(!0);
        (ue = We.parentNode) === null || ue === void 0 || ue.appendChild(ae), ae.classList.add("smui-floating-label--remove-transition"), ae.classList.add("smui-floating-label--force-size"), ae.classList.remove("mdc-floating-label--float-above");
        const it = ae.scrollWidth;
        return (Ee = We.parentNode) === null || Ee === void 0 || Ee.removeChild(ae), it;
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
  function V(O) {
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
  function H(O) {
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
    e = j(j({}, e), Ke(O)), t(12, s = re(e, i)), "use" in O && t(2, u = O.use), "class" in O && t(3, c = O.class), "style" in O && t(4, d = O.style), "for" in O && t(5, f = O.for), "floatAbove" in O && t(0, m = O.floatAbove), "required" in O && t(1, h = O.required), "wrapped" in O && t(6, p = O.wrapped), "$$scope" in O && t(21, l = O.$$scope);
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
    s,
    D,
    U,
    H,
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
    super(), je(this, e, ja, ka, ye, {
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
function Fa(n) {
  let e, t, i, s, a, l, r = [
    {
      class: t = W({
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
      style: i = Object.entries(
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
      e = K("div"), fe(e, o);
    },
    m(u, c) {
      Y(u, e, c), n[13](e), a || (l = [
        ce(s = Xe.call(
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
        42 && t !== (t = W({
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
        68 && i !== (i = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(Yn).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), s && Te(s.update) && c & /*use*/
      1 && s.update.call(
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
function Na(n, e, t) {
  const i = [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ];
  let s = re(e, i);
  const a = Je(ke());
  let { use: l = [] } = e, { class: r = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, d, f = {}, m = {};
  vt(() => (d = new rr({
    addClass: p,
    removeClass: _,
    hasClass: h,
    setStyle: E,
    registerEventHandler: (L, V) => T().addEventListener(L, V),
    deregisterEventHandler: (L, V) => T().removeEventListener(L, V)
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
  function E(L, V) {
    m[L] != V && (V === "" || V == null ? (delete m[L], t(6, m)) : t(6, m[L] = V, m));
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
    e = j(j({}, e), Ke(L)), t(8, s = re(e, i)), "use" in L && t(0, l = L.use), "class" in L && t(1, r = L.class), "style" in L && t(2, o = L.style), "active" in L && t(3, u = L.active);
  }, [
    l,
    r,
    o,
    u,
    c,
    f,
    m,
    a,
    s,
    b,
    M,
    S,
    T,
    F
  ];
}
class ji extends Ne {
  constructor(e) {
    super(), je(this, e, Na, Fa, ye, {
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
Fe(ji, { use: {}, class: {}, style: {}, active: { type: "Boolean" } }, [], ["activate", "deactivate", "setRippleCenter", "getElement"], !0);
function $n(n) {
  let e, t, i;
  const s = (
    /*#slots*/
    n[15].default
  ), a = Le(
    s,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = K("div"), a && a.c(), Z(e, "class", "mdc-notched-outline__notch"), Z(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(ei).join(" "));
    },
    m(l, r) {
      Y(l, e, r), a && a.m(e, null), i = !0;
    },
    p(l, r) {
      a && a.p && (!i || r & /*$$scope*/
      16384) && Oe(
        a,
        s,
        l,
        /*$$scope*/
        l[14],
        i ? Me(
          s,
          /*$$scope*/
          l[14],
          r,
          null
        ) : Re(
          /*$$scope*/
          l[14]
        ),
        null
      ), (!i || r & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        l[7]
      ).map(ei).join(" "))) && Z(e, "style", t);
    },
    i(l) {
      i || (R(a, l), i = !0);
    },
    o(l) {
      N(a, l), i = !1;
    },
    d(l) {
      l && Q(e), a && a.d(l);
    }
  };
}
function Pa(n) {
  let e, t, i, s, a, l, r, o, u, c, d = !/*noLabel*/
  n[3] && $n(n), f = [
    {
      class: l = W({
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
      e = K("div"), t = K("div"), i = Ce(), d && d.c(), s = Ce(), a = K("div"), Z(t, "class", "mdc-notched-outline__leading"), Z(a, "class", "mdc-notched-outline__trailing"), fe(e, m);
    },
    m(h, p) {
      Y(h, e, p), G(e, t), G(e, i), d && d.m(e, null), G(e, s), G(e, a), n[16](e), o = !0, u || (c = [
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
      8 && R(d, 1)) : (d = $n(h), d.c(), R(d, 1), d.m(e, s)), fe(e, m = ee(f, [
        (!o || p & /*className, notched, noLabel, internalClasses*/
        78 && l !== (l = W({
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
const ei = ([n, e]) => `${n}: ${e};`;
function Ua(n, e, t) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
  const r = Je(ke());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: d = !1 } = e, f, m, h, p = {}, _ = {};
  vt(() => (m = new Er({
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
  function V() {
    return f;
  }
  function ne(D) {
    le[D ? "unshift" : "push"](() => {
      f = D, t(5, f);
    });
  }
  const P = () => t(4, h = void 0);
  return n.$$set = (D) => {
    e = j(j({}, e), Ke(D)), t(10, s = re(e, i)), "use" in D && t(0, o = D.use), "class" in D && t(1, u = D.class), "notched" in D && t(2, c = D.notched), "noLabel" in D && t(3, d = D.noLabel), "$$scope" in D && t(14, l = D.$$scope);
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
    s,
    F,
    L,
    V,
    l,
    a,
    ne,
    P
  ];
}
class Fi extends Ne {
  constructor(e) {
    super(), je(this, e, Ua, Pa, ye, {
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
Fe(Fi, { use: {}, class: {}, notched: { type: "Boolean" }, noLabel: { type: "Boolean" } }, ["default"], ["notch", "closeNotch", "getElement"], !0);
function Ba(n) {
  let e;
  return {
    c() {
      e = pt(
        /*content*/
        n[8]
      );
    },
    m(t, i) {
      Y(t, e, i);
    },
    p(t, i) {
      i & /*content*/
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
function Ha(n) {
  let e;
  const t = (
    /*#slots*/
    n[13].default
  ), i = Le(
    t,
    n,
    /*$$scope*/
    n[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, a) {
      i && i.m(s, a), e = !0;
    },
    p(s, a) {
      i && i.p && (!e || a & /*$$scope*/
      4096) && Oe(
        i,
        t,
        s,
        /*$$scope*/
        s[12],
        e ? Me(
          t,
          /*$$scope*/
          s[12],
          a,
          null
        ) : Re(
          /*$$scope*/
          s[12]
        ),
        null
      );
    },
    i(s) {
      e || (R(i, s), e = !0);
    },
    o(s) {
      N(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function wa(n) {
  let e, t, i, s, a, l, r, o, u;
  const c = [Ha, Ba], d = [];
  function f(p, _) {
    return (
      /*content*/
      p[8] == null ? 0 : 1
    );
  }
  t = f(n), i = d[t] = c[t](n);
  let m = [
    {
      class: s = W({
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
      e = K("div"), i.c(), fe(e, h);
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
      }), tt(), i = d[t], i ? i.p(p, _) : (i = d[t] = c[t](p), i.c()), R(i, 1), i.m(e, null)), fe(e, h = ee(m, [
        (!r || _ & /*className, validationMsg, persistent, internalClasses*/
        90 && s !== (s = W({
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
        }))) && { class: s },
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
      r || (R(i), r = !0);
    },
    o(p) {
      N(i), r = !1;
    },
    d(p) {
      p && Q(e), d[t].d(), n[14](null), o = !1, ze(u);
    }
  };
}
let xa = 0;
function Va(n, e, t) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let s = re(e, i), { $$slots: a = {}, $$scope: l } = e;
  const r = Je(ke());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + xa++ } = e, { persistent: d = !1 } = e, { validationMsg: f = !1 } = e, m, h, p = {}, _ = {}, E;
  vt(() => (h = new Rr({
    addClass: M,
    removeClass: S,
    hasClass: b,
    getAttr: T,
    setAttr: F,
    removeAttr: L,
    setContent: (P) => {
      t(8, E = P);
    }
  }), c.startsWith("SMUI-select-helper-text-") && qe(V(), "SMUISelectHelperText:id", c), qe(V(), "SMUISelectHelperText:mount", h), h.init(), () => {
    qe(V(), "SMUISelectHelperText:unmount", h), h.destroy();
  }));
  function b(P) {
    return P in p ? p[P] : V().classList.contains(P);
  }
  function M(P) {
    p[P] || t(6, p[P] = !0, p);
  }
  function S(P) {
    (!(P in p) || p[P]) && t(6, p[P] = !1, p);
  }
  function T(P) {
    var D;
    return P in _ ? (D = _[P]) !== null && D !== void 0 ? D : null : V().getAttribute(P);
  }
  function F(P, D) {
    _[P] !== D && t(7, _[P] = D, _);
  }
  function L(P) {
    (!(P in _) || _[P] != null) && t(7, _[P] = void 0, _);
  }
  function V() {
    return m;
  }
  function ne(P) {
    le[P ? "unshift" : "push"](() => {
      m = P, t(5, m);
    });
  }
  return n.$$set = (P) => {
    e = j(j({}, e), Ke(P)), t(10, s = re(e, i)), "use" in P && t(0, o = P.use), "class" in P && t(1, u = P.class), "id" in P && t(2, c = P.id), "persistent" in P && t(3, d = P.persistent), "validationMsg" in P && t(4, f = P.validationMsg), "$$scope" in P && t(12, l = P.$$scope);
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
    s,
    V,
    l,
    a,
    ne
  ];
}
class Ni extends Ne {
  constructor(e) {
    super(), je(this, e, Va, wa, ye, {
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
Fe(Ni, { use: {}, class: {}, id: {}, persistent: { type: "Boolean" }, validationMsg: { type: "Boolean" } }, ["default"], ["getElement"], !0);
const Ga = (n) => ({}), ti = (n) => ({}), qa = (n) => ({}), ni = (n) => ({}), za = (n) => ({}), ii = (n) => ({}), Wa = (n) => ({}), si = (n) => ({});
function ri(n) {
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
  ], i = {};
  for (let s = 0; s < t.length; s += 1)
    i = j(i, t[s]);
  return {
    c() {
      e = K("input"), fe(e, i);
    },
    m(s, a) {
      Y(s, e, a), e.autofocus && e.focus();
    },
    p(s, a) {
      fe(e, i = ee(t, [
        { type: "hidden" },
        a[0] & /*required*/
        1024 && { required: (
          /*required*/
          s[10]
        ) },
        a[0] & /*disabled*/
        64 && { disabled: (
          /*disabled*/
          s[6]
        ) },
        a[0] & /*value*/
        1 && { value: (
          /*value*/
          s[0]
        ) },
        a[1] & /*$$restProps*/
        4194304 && Ae(
          /*$$restProps*/
          s[53],
          "input$"
        )
      ]));
    },
    d(s) {
      s && Q(e);
    }
  };
}
function ai(n) {
  let e;
  return {
    c() {
      e = K("span"), Z(e, "class", "mdc-select__ripple");
    },
    m(t, i) {
      Y(t, e, i);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function li(n) {
  let e, t;
  const i = [
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
  let s = {
    $$slots: { default: [Xa] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < i.length; a += 1)
    s = j(s, i[a]);
  return e = new Rn({ props: s }), n[66](e), {
    c() {
      Se(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[0] & /*inputId, required*/
      3072 | l[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? ee(i, [
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
        4194304 && se(Ae(
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
function Xa(n) {
  let e = (
    /*label*/
    (n[9] == null ? "" : (
      /*label*/
      n[9]
    )) + ""
  ), t, i;
  const s = (
    /*#slots*/
    n[63].label
  ), a = Le(
    s,
    n,
    /*$$scope*/
    n[86],
    si
  );
  return {
    c() {
      t = pt(e), a && a.c();
    },
    m(l, r) {
      Y(l, t, r), a && a.m(l, r), i = !0;
    },
    p(l, r) {
      (!i || r[0] & /*label*/
      512) && e !== (e = /*label*/
      (l[9] == null ? "" : (
        /*label*/
        l[9]
      )) + "") && Bt(t, e), a && a.p && (!i || r[2] & /*$$scope*/
      16777216) && Oe(
        a,
        s,
        l,
        /*$$scope*/
        l[86],
        i ? Me(
          s,
          /*$$scope*/
          l[86],
          r,
          Wa
        ) : Re(
          /*$$scope*/
          l[86]
        ),
        si
      );
    },
    i(l) {
      i || (R(a, l), i = !0);
    },
    o(l) {
      N(a, l), i = !1;
    },
    d(l) {
      l && Q(t), a && a.d(l);
    }
  };
}
function oi(n) {
  let e, t;
  const i = [
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
  let s = {
    $$slots: { default: [Ja] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < i.length; a += 1)
    s = j(s, i[a]);
  return e = new Fi({ props: s }), n[68](e), {
    c() {
      Se(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[0] & /*noLabel, label*/
      768 | l[1] & /*$$slots, $$restProps*/
      6291456 ? ee(i, [
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
        4194304 && se(Ae(
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
function ui(n) {
  let e, t;
  const i = [
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
  let s = {
    $$slots: { default: [Ka] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < i.length; a += 1)
    s = j(s, i[a]);
  return e = new Rn({ props: s }), n[67](e), {
    c() {
      Se(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[0] & /*inputId, required*/
      3072 | l[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? ee(i, [
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
        4194304 && se(Ae(
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
function Ka(n) {
  let e = (
    /*label*/
    (n[9] == null ? "" : (
      /*label*/
      n[9]
    )) + ""
  ), t, i;
  const s = (
    /*#slots*/
    n[63].label
  ), a = Le(
    s,
    n,
    /*$$scope*/
    n[86],
    ii
  );
  return {
    c() {
      t = pt(e), a && a.c();
    },
    m(l, r) {
      Y(l, t, r), a && a.m(l, r), i = !0;
    },
    p(l, r) {
      (!i || r[0] & /*label*/
      512) && e !== (e = /*label*/
      (l[9] == null ? "" : (
        /*label*/
        l[9]
      )) + "") && Bt(t, e), a && a.p && (!i || r[2] & /*$$scope*/
      16777216) && Oe(
        a,
        s,
        l,
        /*$$scope*/
        l[86],
        i ? Me(
          s,
          /*$$scope*/
          l[86],
          r,
          za
        ) : Re(
          /*$$scope*/
          l[86]
        ),
        ii
      );
    },
    i(l) {
      i || (R(a, l), i = !0);
    },
    o(l) {
      N(a, l), i = !1;
    },
    d(l) {
      l && Q(t), a && a.d(l);
    }
  };
}
function Ja(n) {
  let e, t, i = !/*noLabel*/
  n[8] && /*label*/
  (n[9] != null || /*$$slots*/
  n[52].label) && ui(n);
  return {
    c() {
      i && i.c(), e = ut();
    },
    m(s, a) {
      i && i.m(s, a), Y(s, e, a), t = !0;
    },
    p(s, a) {
      !/*noLabel*/
      s[8] && /*label*/
      (s[9] != null || /*$$slots*/
      s[52].label) ? i ? (i.p(s, a), a[0] & /*noLabel, label*/
      768 | a[1] & /*$$slots*/
      2097152 && R(i, 1)) : (i = ui(s), i.c(), R(i, 1), i.m(e.parentNode, e)) : i && (et(), N(i, 1, 1, () => {
        i = null;
      }), tt());
    },
    i(s) {
      t || (R(i), t = !0);
    },
    o(s) {
      N(i), t = !1;
    },
    d(s) {
      s && Q(e), i && i.d(s);
    }
  };
}
function ci(n) {
  let e, t;
  const i = [Ae(
    /*$$restProps*/
    n[53],
    "ripple$"
  )];
  let s = {};
  for (let a = 0; a < i.length; a += 1)
    s = j(s, i[a]);
  return e = new ji({ props: s }), n[69](e), {
    c() {
      Se(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[1] & /*$$restProps*/
      4194304 ? ee(i, [se(Ae(
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
function Za(n) {
  let e;
  const t = (
    /*#slots*/
    n[63].default
  ), i = Le(
    t,
    n,
    /*$$scope*/
    n[86],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, a) {
      i && i.m(s, a), e = !0;
    },
    p(s, a) {
      i && i.p && (!e || a[2] & /*$$scope*/
      16777216) && Oe(
        i,
        t,
        s,
        /*$$scope*/
        s[86],
        e ? Me(
          t,
          /*$$scope*/
          s[86],
          a,
          null
        ) : Re(
          /*$$scope*/
          s[86]
        ),
        null
      );
    },
    i(s) {
      e || (R(i, s), e = !0);
    },
    o(s) {
      N(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function Qa(n) {
  let e, t, i;
  const s = [
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
    $$slots: { default: [Za] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < s.length; r += 1)
    l = j(l, s[r]);
  return (
    /*selectedIndex*/
    n[24] !== void 0 && (l.selectedIndex = /*selectedIndex*/
    n[24]), e = new Ri({ props: l }), le.push(() => Rt(e, "selectedIndex", a)), e.$on(
      "SMUIList:mount",
      /*SMUIList_mount_handler*/
      n[75]
    ), {
      c() {
        Se(e.$$.fragment);
      },
      m(r, o) {
        Ie(e, r, o), i = !0;
      },
      p(r, o) {
        const u = o[1] & /*wrapFocus, $$restProps*/
        4194320 ? ee(s, [
          s[0],
          o[1] & /*wrapFocus*/
          16 && { wrapFocus: (
            /*wrapFocus*/
            r[35]
          ) },
          o[1] & /*$$restProps*/
          4194304 && se(Ae(
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
        i || (R(e.$$.fragment, r), i = !0);
      },
      o(r) {
        N(e.$$.fragment, r), i = !1;
      },
      d(r) {
        be(e, r);
      }
    }
  );
}
function di(n) {
  let e, t;
  const i = [Ae(
    /*$$restProps*/
    n[53],
    "helperText$"
  )];
  let s = {
    $$slots: { default: [Ya] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < i.length; a += 1)
    s = j(s, i[a]);
  return e = new Ni({ props: s }), e.$on(
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
      Se(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[1] & /*$$restProps*/
      4194304 ? ee(i, [se(Ae(
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
function Ya(n) {
  let e;
  const t = (
    /*#slots*/
    n[63].helperText
  ), i = Le(
    t,
    n,
    /*$$scope*/
    n[86],
    ti
  );
  return {
    c() {
      i && i.c();
    },
    m(s, a) {
      i && i.m(s, a), e = !0;
    },
    p(s, a) {
      i && i.p && (!e || a[2] & /*$$scope*/
      16777216) && Oe(
        i,
        t,
        s,
        /*$$scope*/
        s[86],
        e ? Me(
          t,
          /*$$scope*/
          s[86],
          a,
          Ga
        ) : Re(
          /*$$scope*/
          s[86]
        ),
        ti
      );
    },
    i(s) {
      e || (R(i, s), e = !0);
    },
    o(s) {
      N(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function $a(n) {
  let e, t, i, s, a, l, r, o, u, c, d, f, m, h, p, _, E, b, M, S, T, F, L, V, ne, P, D, U, H, y, k, w, ge, O, ue, Ee, We, ae, it, rt, x = (
    /*hiddenInput*/
    n[12] && ri(n)
  ), me = (
    /*variant*/
    n[7] === "filled" && ai()
  ), he = (
    /*variant*/
    n[7] !== "outlined" && !/*noLabel*/
    n[8] && /*label*/
    (n[9] != null || /*$$slots*/
    n[52].label) && li(n)
  ), de = (
    /*variant*/
    n[7] === "outlined" && oi(n)
  );
  const xe = (
    /*#slots*/
    n[63].leadingIcon
  ), C = Le(
    xe,
    n,
    /*$$scope*/
    n[86],
    ni
  );
  let ie = [
    {
      id: d = /*inputId*/
      n[11] + "-smui-selected-text"
    },
    {
      class: f = W({
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
  for (let X = 0; X < ie.length; X += 1)
    Ue = j(Ue, ie[X]);
  let _e = [
    {
      class: p = W({
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
  ], ot = {};
  for (let X = 0; X < _e.length; X += 1)
    ot = j(ot, _e[X]);
  let A = [
    {
      class: F = W({
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
  ], J = {};
  for (let X = 0; X < A.length; X += 1)
    J = j(J, A[X]);
  let $ = (
    /*variant*/
    n[7] !== "outlined" && /*ripple*/
    n[5] && ci(n)
  ), _t = [
    {
      class: ne = W({
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
  for (let X = 0; X < _t.length; X += 1)
    Ze = j(Ze, _t[X]);
  const dt = [
    {
      class: W({
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
  function ft(X) {
    n[76](X);
  }
  let It = {
    $$slots: { default: [Qa] },
    $$scope: { ctx: n }
  };
  for (let X = 0; X < dt.length; X += 1)
    It = j(It, dt[X]);
  /*menuOpen*/
  n[31] !== void 0 && (It.open = /*menuOpen*/
  n[31]), y = new Li({ props: It }), le.push(() => Rt(y, "open", ft)), y.$on(
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
      class: w = W({
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
      ).map(fi).concat([
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
  ], st = {};
  for (let X = 0; X < Qe.length; X += 1)
    st = j(st, Qe[X]);
  let pe = (
    /*$$slots*/
    n[52].helperText && di(n)
  );
  return {
    c() {
      e = K("div"), x && x.c(), t = Ce(), i = K("div"), me && me.c(), s = Ce(), he && he.c(), a = Ce(), de && de.c(), l = Ce(), C && C.c(), r = Ce(), o = K("span"), u = K("span"), c = pt(
        /*$selectedTextStore*/
        n[42]
      ), E = Ce(), b = K("span"), M = Qt("svg"), S = Qt("polygon"), T = Qt("polygon"), V = Ce(), $ && $.c(), H = Ce(), Se(y.$$.fragment), Ee = Ce(), pe && pe.c(), We = ut(), fe(u, Ue), fe(o, ot), Z(S, "class", "mdc-select__dropdown-icon-inactive"), Z(S, "stroke", "none"), Z(S, "fill-rule", "evenodd"), Z(S, "points", "7 10 12 15 17 10"), Z(T, "class", "mdc-select__dropdown-icon-active"), Z(T, "stroke", "none"), Z(T, "fill-rule", "evenodd"), Z(T, "points", "7 15 12 10 17 15"), Z(M, "class", "mdc-select__dropdown-icon-graphic"), Z(M, "viewBox", "7 10 10 5"), Z(M, "focusable", "false"), fe(b, J), fe(i, Ze), fe(e, st);
    },
    m(X, B) {
      Y(X, e, B), x && x.m(e, null), G(e, t), G(e, i), me && me.m(i, null), G(i, s), he && he.m(i, null), G(i, a), de && de.m(i, null), G(i, l), C && C.m(i, null), G(i, r), G(i, o), G(o, u), G(u, c), G(i, E), G(i, b), G(b, M), G(M, S), G(M, T), G(i, V), $ && $.m(i, null), n[70](i), G(e, H), Ie(y, e, null), n[81](e), Y(X, Ee, B), pe && pe.m(X, B), Y(X, We, B), ae = !0, it || (rt = [
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
          i,
          /*anchor$use*/
          n[14]
        )),
        $e(
          i,
          "focus",
          /*focus_handler_1*/
          n[71]
        ),
        $e(
          i,
          "blur",
          /*blur_handler_1*/
          n[72]
        ),
        $e(
          i,
          "click",
          /*click_handler*/
          n[73]
        ),
        $e(i, "keydown", function() {
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
          i,
          "focus",
          /*focus_handler*/
          n[64]
        ),
        $e(
          i,
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
        ce(xr.call(null, e, {
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
      ], it = !0);
    },
    p(X, B) {
      n = X, /*hiddenInput*/
      n[12] ? x ? x.p(n, B) : (x = ri(n), x.c(), x.m(e, t)) : x && (x.d(1), x = null), /*variant*/
      n[7] === "filled" ? me || (me = ai(), me.c(), me.m(i, s)) : me && (me.d(1), me = null), /*variant*/
      n[7] !== "outlined" && !/*noLabel*/
      n[8] && /*label*/
      (n[9] != null || /*$$slots*/
      n[52].label) ? he ? (he.p(n, B), B[0] & /*variant, noLabel, label*/
      896 | B[1] & /*$$slots*/
      2097152 && R(he, 1)) : (he = li(n), he.c(), R(he, 1), he.m(i, a)) : he && (et(), N(he, 1, 1, () => {
        he = null;
      }), tt()), /*variant*/
      n[7] === "outlined" ? de ? (de.p(n, B), B[0] & /*variant*/
      128 && R(de, 1)) : (de = oi(n), de.c(), R(de, 1), de.m(i, l)) : de && (et(), N(de, 1, 1, () => {
        de = null;
      }), tt()), C && C.p && (!ae || B[2] & /*$$scope*/
      16777216) && Oe(
        C,
        xe,
        n,
        /*$$scope*/
        n[86],
        ae ? Me(
          xe,
          /*$$scope*/
          n[86],
          B,
          qa
        ) : Re(
          /*$$scope*/
          n[86]
        ),
        ni
      ), (!ae || B[1] & /*$selectedTextStore*/
      2048) && Ms(
        c,
        /*$selectedTextStore*/
        n[42],
        Ue.contenteditable
      ), fe(u, Ue = ee(ie, [
        (!ae || B[0] & /*inputId*/
        2048 && d !== (d = /*inputId*/
        n[11] + "-smui-selected-text")) && { id: d },
        (!ae || B[0] & /*selectedText$class*/
        524288 && f !== (f = W({
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
      ), fe(o, ot = ee(_e, [
        (!ae || B[0] & /*selectedTextContainer$class*/
        131072 && p !== (p = W({
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
      ), fe(b, J = ee(A, [
        (!ae || B[0] & /*dropdownIcon$class*/
        2097152 && F !== (F = W({
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
      160 && R($, 1)) : ($ = ci(n), $.c(), R($, 1), $.m(i, null)) : $ && (et(), N($, 1, 1, () => {
        $ = null;
      }), tt()), fe(i, Ze = ee(_t, [
        (!ae || B[0] & /*anchor$class*/
        32768 && ne !== (ne = W({
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
      4194318 ? ee(dt, [
        B[0] & /*menu$class*/
        4194304 | B[1] & /*menuClasses*/
        2 && {
          class: W({
            [
              /*menu$class*/
              n[22]
            ]: !0,
            "mdc-select__menu": !0,
            .../*menuClasses*/
            n[32]
          })
        },
        dt[1],
        dt[2],
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
        4194304 && se(Ae(
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
      n[31], Ot(() => k = !1)), y.$set(Ye), fe(e, st = ee(Qe, [
        (!ae || B[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | B[1] & /*$$slots, menuOpen*/
        2097153 && w !== (w = W({
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
        ).map(fi).concat([
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
      2097152 && R(pe, 1)) : (pe = di(n), pe.c(), R(pe, 1), pe.m(We.parentNode, We)) : pe && (et(), N(pe, 1, 1, () => {
        pe = null;
      }), tt());
    },
    i(X) {
      ae || (R(he), R(de), R(C, X), R($), R(y.$$.fragment, X), R(pe), ae = !0);
    },
    o(X) {
      N(he), N(de), N(C, X), N($), N(y.$$.fragment, X), N(pe), ae = !1;
    },
    d(X) {
      X && (Q(e), Q(Ee), Q(We)), x && x.d(), me && me.d(), he && he.d(), de && de.d(), C && C.d(X), $ && $.d(), n[70](null), be(y), n[81](null), pe && pe.d(X), it = !1, ze(rt);
    }
  };
}
let el = 0;
function tl(n) {
  const e = n.currentTarget.getBoundingClientRect();
  return (nl(n) ? n.touches[0].clientX : n.clientX) - e.left;
}
function nl(n) {
  return "touches" in n;
}
const fi = ([n, e]) => `${n}: ${e};`;
function il(n, e, t) {
  const i = [
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
  let s = re(e, i), a, l, { $$slots: r = {}, $$scope: o } = e;
  const u = _s(r), c = Je(ke());
  let d = () => {
  };
  function f(g) {
    return g === d;
  }
  let { use: m = [] } = e, { class: h = "" } = e, { style: p = "" } = e, { ripple: _ = !0 } = e, { disabled: E = !1 } = e, { variant: b = "standard" } = e, { noLabel: M = !1 } = e, { label: S = void 0 } = e, { value: T = "" } = e, { key: F = (g) => g } = e, { dirty: L = !1 } = e, { invalid: V = d } = e, { updateInvalid: ne = f(V) } = e;
  const P = f(V);
  f(V) && (V = !1);
  let { required: D = !1 } = e, { inputId: U = "SMUI-select-" + el++ } = e, { hiddenInput: H = !1 } = e, { withLeadingIcon: y = d } = e, { anchor$use: k = [] } = e, { anchor$class: w = "" } = e, { selectedTextContainer$use: ge = [] } = e, { selectedTextContainer$class: O = "" } = e, { selectedText$use: ue = [] } = e, { selectedText$class: Ee = "" } = e, { dropdownIcon$use: We = [] } = e, { dropdownIcon$class: ae = "" } = e, { menu$class: it = "" } = e, rt, x, me = {}, he = {}, de, xe = {}, C = -1, ie, Ue = Pe("SMUI:addLayoutListener"), _e, ot = !1, A = {}, J, $, _t = !1, Ze, dt = Pe("SMUI:select:context"), ft, It, Qe, st, pe;
  Ge("SMUI:list:role", ""), Ge("SMUI:list:nav", !1);
  const X = Ln("");
  $t(n, X, (g) => t(42, a = g)), Ge("SMUI:select:selectedText", X);
  const B = Ln(T);
  $t(n, B, (g) => t(88, l = g)), Ge("SMUI:select:value", B);
  let Ye = C;
  Ue && (_e = Ue(jn)), vt(() => (t(23, x = new Or(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (g) => {
        cn(X, a = g, a);
      },
      isSelectAnchorFocused: () => document.activeElement === de,
      getSelectAnchorAttr: wi,
      setSelectAnchorAttr: xi,
      removeSelectAnchorAttr: Vi,
      addMenuClass: kt,
      removeMenuClass: pn,
      openMenu: () => {
        t(31, ot = !0);
      },
      closeMenu: () => {
        t(31, ot = !1);
      },
      getAnchorElement: () => de,
      setMenuAnchorElement: (g) => {
        t(33, J = g);
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
      typeaheadMatchItem: (g, ht) => Ze.typeaheadMatchItem(g, ht),
      // getCommonAdapterMethods
      addClass: z,
      removeClass: q,
      hasClass: v,
      setRippleCenter: (g) => st && st.setRippleCenter(g),
      activateBottomLine: () => st && st.activate(),
      deactivateBottomLine: () => st && st.deactivate(),
      notifyChange: (g) => {
        t(54, L = !0), ne && t(1, V = !x.isValid()), qe(nn(), "SMUISelect:change", { value: T, index: C }, void 0, !0);
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
        return ft;
      }
    }
  )), t(24, C = tn().indexOf(T)), x.init(), kn(P), () => {
    x.destroy();
  })), Ht(() => {
    _e && _e();
  });
  function mn(g) {
    t(37, ft = g.detail);
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
  function ve(g, ht) {
    he[g] != ht && (ht === "" || ht == null ? (delete he[g], t(27, he)) : t(27, he[g] = ht, he));
  }
  function kt(g) {
    A[g] || t(32, A[g] = !0, A);
  }
  function pn(g) {
    (!(g in A) || A[g]) && t(32, A[g] = !1, A);
  }
  function wi(g) {
    var ht;
    return g in xe ? (ht = xe[g]) !== null && ht !== void 0 ? ht : null : nn().getAttribute(g);
  }
  function xi(g, ht) {
    xe[g] !== ht && t(29, xe[g] = ht, xe);
  }
  function Vi(g) {
    (!(g in xe) || xe[g] != null) && t(29, xe[g] = void 0, xe);
  }
  function tn() {
    return Ze.getOrderedList().map((g) => g.getValue());
  }
  function Gi() {
    return x.getUseDefaultValidation();
  }
  function kn(g) {
    x.setUseDefaultValidation(g);
  }
  function qi() {
    de.focus();
  }
  function jn() {
    x.layout();
  }
  function nn() {
    return rt;
  }
  function zi(g) {
    Nn.call(this, n, g);
  }
  function Wi(g) {
    Nn.call(this, n, g);
  }
  function Xi(g) {
    le[g ? "unshift" : "push"](() => {
      Qe = g, t(39, Qe);
    });
  }
  function Ki(g) {
    le[g ? "unshift" : "push"](() => {
      Qe = g, t(39, Qe);
    });
  }
  function Ji(g) {
    le[g ? "unshift" : "push"](() => {
      pe = g, t(41, pe);
    });
  }
  function Zi(g) {
    le[g ? "unshift" : "push"](() => {
      st = g, t(40, st);
    });
  }
  function Qi(g) {
    le[g ? "unshift" : "push"](() => {
      de = g, t(28, de);
    });
  }
  const Yi = () => x && x.handleFocus(), $i = () => x && x.handleBlur(), es = (g) => {
    de.focus(), x && x.handleClick(tl(g));
  };
  function ts(g) {
    C = g, t(24, C);
  }
  const ns = (g) => t(36, Ze = g.detail);
  function is(g) {
    ot = g, t(31, ot);
  }
  const ss = (g) => x && x.handleMenuItemAction(g.detail.index), rs = () => x && x.handleMenuClosing(), as = () => x && x.handleMenuClosed(), ls = () => x && x.handleMenuOpened();
  function os(g) {
    le[g ? "unshift" : "push"](() => {
      rt = g, t(25, rt);
    });
  }
  const us = () => t(37, ft = void 0), cs = (g) => t(30, ie = g.detail), ds = (g) => t(38, It = g.detail), fs = () => {
    t(30, ie = void 0), t(38, It = void 0);
  };
  return n.$$set = (g) => {
    e = j(j({}, e), Ke(g)), t(53, s = re(e, i)), "use" in g && t(2, m = g.use), "class" in g && t(3, h = g.class), "style" in g && t(4, p = g.style), "ripple" in g && t(5, _ = g.ripple), "disabled" in g && t(6, E = g.disabled), "variant" in g && t(7, b = g.variant), "noLabel" in g && t(8, M = g.noLabel), "label" in g && t(9, S = g.label), "value" in g && t(0, T = g.value), "key" in g && t(55, F = g.key), "dirty" in g && t(54, L = g.dirty), "invalid" in g && t(1, V = g.invalid), "updateInvalid" in g && t(56, ne = g.updateInvalid), "required" in g && t(10, D = g.required), "inputId" in g && t(11, U = g.inputId), "hiddenInput" in g && t(12, H = g.hiddenInput), "withLeadingIcon" in g && t(13, y = g.withLeadingIcon), "anchor$use" in g && t(14, k = g.anchor$use), "anchor$class" in g && t(15, w = g.anchor$class), "selectedTextContainer$use" in g && t(16, ge = g.selectedTextContainer$use), "selectedTextContainer$class" in g && t(17, O = g.selectedTextContainer$class), "selectedText$use" in g && t(18, ue = g.selectedText$use), "selectedText$class" in g && t(19, Ee = g.selectedText$class), "dropdownIcon$use" in g && t(20, We = g.dropdownIcon$use), "dropdownIcon$class" in g && t(21, ae = g.dropdownIcon$class), "menu$class" in g && t(22, it = g.menu$class), "$$scope" in g && t(86, o = g.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | n.$$.dirty[2] & /*previousSelectedIndex*/
    1 && Ye !== C)
      if (t(62, Ye = C), x)
        x.setSelectedIndex(
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
    16777216 && x && x.getValue() !== F(T) && x.setValue(F(T)), n.$$.dirty[0] & /*instance, disabled*/
    8388672 && x && x.getDisabled() !== E && x.setDisabled(E), n.$$.dirty[0] & /*instance, invalid*/
    8388610 | n.$$.dirty[1] & /*dirty, updateInvalid*/
    41943040 && x && L && x.isValid() !== !V && (ne ? t(1, V = !x.isValid()) : x.setValid(!V)), n.$$.dirty[0] & /*instance, required*/
    8389632 && x && x.getRequired() !== D && x.setRequired(D);
  }, [
    T,
    V,
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
    H,
    y,
    k,
    w,
    ge,
    O,
    ue,
    Ee,
    We,
    ae,
    it,
    x,
    C,
    rt,
    me,
    he,
    de,
    xe,
    ie,
    ot,
    A,
    J,
    $,
    _t,
    Ze,
    ft,
    It,
    Qe,
    st,
    pe,
    a,
    c,
    f,
    dt,
    X,
    B,
    mn,
    z,
    q,
    ve,
    u,
    s,
    L,
    F,
    ne,
    Gi,
    kn,
    qi,
    jn,
    nn,
    Ye,
    r,
    zi,
    Wi,
    Xi,
    Ki,
    Ji,
    Zi,
    Qi,
    Yi,
    $i,
    es,
    ts,
    ns,
    is,
    ss,
    rs,
    as,
    ls,
    os,
    us,
    cs,
    ds,
    fs,
    o
  ];
}
class Pi extends Ne {
  constructor(e) {
    super(), je(
      this,
      e,
      il,
      $a,
      ye,
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
  Pi,
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
function sl(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = Le(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(s, a) {
      i && i.m(s, a), e = !0;
    },
    p(s, a) {
      i && i.p && (!e || a & /*$$scope*/
      8192) && Oe(
        i,
        t,
        s,
        /*$$scope*/
        s[13],
        e ? Me(
          t,
          /*$$scope*/
          s[13],
          a,
          null
        ) : Re(
          /*$$scope*/
          s[13]
        ),
        null
      );
    },
    i(s) {
      e || (R(i, s), e = !0);
    },
    o(s) {
      N(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function rl(n) {
  let e, t;
  const i = [
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
  let s = {
    $$slots: { default: [sl] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < i.length; a += 1)
    s = j(s, i[a]);
  return e = new Di({ props: s }), n[12](e), {
    c() {
      Se(e.$$.fragment);
    },
    m(a, l) {
      Ie(e, a, l), t = !0;
    },
    p(a, [l]) {
      const r = l & /*usePass, value, selected, $$restProps*/
      77 ? ee(i, [
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
        64 && se(
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
function al(n, e, t) {
  let i, s;
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
    s && p && cn(_, r = p.getPrimaryText(), r);
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
    128 && t(3, i = [d, ...f]), n.$$.dirty & /*value, $selectedValue*/
    1025 && t(2, s = h != null && h !== "" && o === h);
  }, [
    h,
    p,
    s,
    i,
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
    super(), je(this, e, al, rl, ye, {
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
const hi = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", mi = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+";
function ll(n) {
  Mn(n, "svelte-1jepkqu", `@import "https://ekit3.github.io/web-renumerator-component/dist/smui.css";.renumerator.svelte-1jepkqu.svelte-1jepkqu{display:flex;padding:77px 40px;width:calc(100% - 80px);flex-shrink:0;border-radius:32px;background:linear-gradient(180deg, #1D211A 0%, #1D2E0E 100%);box-shadow:0 24px 44px 0 rgba(0, 0, 0, 0.25);backdrop-filter:blur(22px);flex-direction:column}.renumerator.svelte-1jepkqu .half-block.svelte-1jepkqu{display:flex;flex-direction:column;width:50%;box-sizing:border-box}.renumerator.svelte-1jepkqu .half-block span.title.svelte-1jepkqu{margin-bottom:40px;text-align:center;display:block;flex:1}.renumerator.svelte-1jepkqu .flex.svelte-1jepkqu{justify-content:space-around;display:flex;flex:1}.renumerator.svelte-1jepkqu .flex button.svelte-1jepkqu{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.renumerator.svelte-1jepkqu .flex span.svelte-1jepkqu{font-size:2em;font-weight:900;margin:5px 2px}.renumerator.svelte-1jepkqu .title.svelte-1jepkqu{margin-bottom:16px;text-align:left}.renumerator.svelte-1jepkqu .container.svelte-1jepkqu{display:flex;align-self:center;width:100%;margin-top:40px}.svelte-1jepkqu .mdc-select__dropdown-icon-graphic{fill:white !important}.svelte-1jepkqu .mdc-select__selected-text{color:white !important}.svelte-1jepkqu .mdc-select__selected-text{font-size:16px;font-weight:500;font-family:Montserrat, serif}.svelte-1jepkqu .mdc-deprecated-list-item--selected{background-color:#0E130B;color:white !important}.mdc-select__menu{background:#404639;color:white}.mdc-select__menu li{color:white}:root{--mdc-theme-primary:rgba(255, 255, 255, 0.6)}.smui-select__line-ripple{border-color:yellow}.smui-select__dropdown-icon{color:grey}.smui-select--focused .smui-select__line-ripple{border-color:blue}.svelte-1jepkqu .mdc-select{background:rgba(255, 255, 255, 0.10)}.svelte-1jepkqu .mdc-select__anchor{height:100px}.svelte-1jepkqu .shaped-outlined,.svelte-1jepkqu .shaped-outlined .mdc-select__anchor{border-radius:24px}.svelte-1jepkqu .shaped-outlined .mdc-text-field__input{padding-left:32px;padding-right:0}.svelte-1jepkqu .shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading{border-radius:24px 0 0 24px;border-color:rgba(255, 255, 255, 0.6);width:28px}.svelte-1jepkqu .shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing{border-color:rgba(255, 255, 255, 0.6);border-radius:0 24px 24px 0}.svelte-1jepkqu .shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch{border-color:rgba(255, 255, 255, 0.6)}.img-btn.svelte-1jepkqu.svelte-1jepkqu{width:3em}@media screen and (max-width: 500px){.img-btn.svelte-1jepkqu.svelte-1jepkqu{width:1.5em}.renumerator.svelte-1jepkqu .flex span.svelte-1jepkqu{font-size:1.5em}.renumerator.svelte-1jepkqu .container.svelte-1jepkqu{flex-direction:column}.renumerator.svelte-1jepkqu .half-block.svelte-1jepkqu{width:100%}}`);
}
function pi(n, e, t) {
  const i = n.slice();
  return i[15] = e[t], i;
}
function gi(n) {
  let e, t;
  return e = new Dn({
    props: {
      value: "",
      disabled: !0,
      $$slots: { default: [ol] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Se(e.$$.fragment);
    },
    m(i, s) {
      Ie(e, i, s), t = !0;
    },
    i(i) {
      t || (R(e.$$.fragment, i), t = !0);
    },
    o(i) {
      N(e.$$.fragment, i), t = !1;
    },
    d(i) {
      be(e, i);
    }
  };
}
function ol(n) {
  let e;
  return {
    c() {
      e = pt("Sélectionnez un poste");
    },
    m(t, i) {
      Y(t, e, i);
    },
    d(t) {
      t && Q(e);
    }
  };
}
function ul(n) {
  let e = (
    /*devType*/
    n[15].name + ""
  ), t;
  return {
    c() {
      t = pt(e);
    },
    m(i, s) {
      Y(i, t, s);
    },
    p: nt,
    d(i) {
      i && Q(t);
    }
  };
}
function _i(n) {
  let e, t;
  return e = new Dn({
    props: {
      value: (
        /*devType*/
        n[15].name
      ),
      $$slots: { default: [ul] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      Se(e.$$.fragment);
    },
    m(i, s) {
      Ie(e, i, s), t = !0;
    },
    p(i, s) {
      const a = {};
      s & /*$$scope*/
      262144 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      t || (R(e.$$.fragment, i), t = !0);
    },
    o(i) {
      N(e.$$.fragment, i), t = !1;
    },
    d(i) {
      be(e, i);
    }
  };
}
function cl(n) {
  let e, t, i, s = !/*selectedDevType*/
  n[2] && gi(n), a = Pn(
    /*devTypes*/
    n[6]
  ), l = [];
  for (let o = 0; o < a.length; o += 1)
    l[o] = _i(pi(n, a, o));
  const r = (o) => N(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      s && s.c(), e = Ce();
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      t = ut();
    },
    m(o, u) {
      s && s.m(o, u), Y(o, e, u);
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(o, u);
      Y(o, t, u), i = !0;
    },
    p(o, u) {
      if (/*selectedDevType*/
      o[2] ? s && (et(), N(s, 1, 1, () => {
        s = null;
      }), tt()) : s ? u & /*selectedDevType*/
      4 && R(s, 1) : (s = gi(o), s.c(), R(s, 1), s.m(e.parentNode, e)), u & /*devTypes*/
      64) {
        a = Pn(
          /*devTypes*/
          o[6]
        );
        let c;
        for (c = 0; c < a.length; c += 1) {
          const d = pi(o, a, c);
          l[c] ? (l[c].p(d, u), R(l[c], 1)) : (l[c] = _i(d), l[c].c(), R(l[c], 1), l[c].m(t.parentNode, t));
        }
        for (et(), c = a.length; c < l.length; c += 1)
          r(c);
        tt();
      }
    },
    i(o) {
      if (!i) {
        R(s);
        for (let u = 0; u < a.length; u += 1)
          R(l[u]);
        i = !0;
      }
    },
    o(o) {
      N(s), l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        N(l[u]);
      i = !1;
    },
    d(o) {
      o && (Q(e), Q(t)), s && s.d(o), As(l, o);
    }
  };
}
function dl(n) {
  let e, t, i, s, a, l, r, o, u, c, d, f, m, h, p, _, E, b, M, S, T, F, L, V, ne, P, D, U, H, y, k;
  function w(O) {
    n[7](O);
  }
  let ge = {
    class: "shaped-outlined",
    variant: "outlined",
    $$slots: { default: [cl] },
    $$scope: { ctx: n }
  };
  return (
    /*selectedDevType*/
    n[2] !== void 0 && (ge.value = /*selectedDevType*/
    n[2]), s = new Pi({ props: ge }), le.push(() => Rt(s, "value", w)), s.$on(
      "click",
      /*click_handler*/
      n[8]
    ), {
      c() {
        e = K("div"), t = K("span"), t.textContent = "Votre métier", i = Ce(), Se(s.$$.fragment), l = Ce(), r = K("div"), o = K("div"), u = K("span"), u.textContent = "Années d'expérience", c = Ce(), d = K("div"), f = K("button"), f.innerHTML = `<img src="${hi}" alt="Minus Svg icon" class="img-btn svelte-1jepkqu"/>`, m = Ce(), h = K("span"), p = pt(
          /*experience*/
          n[0]
        ), _ = Ce(), E = K("button"), E.innerHTML = `<img src="${mi}" alt="Plus Svg icon" class="img-btn svelte-1jepkqu"/>`, b = Ce(), M = K("div"), S = K("span"), S.textContent = "TJM", T = Ce(), F = K("div"), L = K("button"), L.innerHTML = `<img src="${hi}" alt="Minus Svg icon" class="img-btn svelte-1jepkqu"/>`, V = Ce(), ne = K("span"), P = pt(
          /*tjm*/
          n[1]
        ), D = Ce(), U = K("button"), U.innerHTML = `<img src="${mi}" alt="Plus Svg icon" class="img-btn svelte-1jepkqu"/>`, Z(t, "class", "title svelte-1jepkqu"), Z(u, "class", "title svelte-1jepkqu"), Z(f, "class", "svelte-1jepkqu"), Z(h, "class", "svelte-1jepkqu"), Z(E, "class", "svelte-1jepkqu"), Z(d, "class", "flex svelte-1jepkqu"), Z(o, "class", "half-block svelte-1jepkqu"), Z(S, "class", "title svelte-1jepkqu"), Z(L, "class", "svelte-1jepkqu"), Z(ne, "class", "svelte-1jepkqu"), Z(U, "class", "svelte-1jepkqu"), Z(F, "class", "flex svelte-1jepkqu"), Z(M, "class", "half-block svelte-1jepkqu"), Z(r, "class", "container svelte-1jepkqu"), Z(e, "class", "renumerator svelte-1jepkqu");
      },
      m(O, ue) {
        Y(O, e, ue), G(e, t), G(e, i), Ie(s, e, null), G(e, l), G(e, r), G(r, o), G(o, u), G(o, c), G(o, d), G(d, f), G(d, m), G(d, h), G(h, p), G(d, _), G(d, E), G(r, b), G(r, M), G(M, S), G(M, T), G(M, F), G(F, L), G(F, V), G(F, ne), G(ne, P), G(F, D), G(F, U), H = !0, y || (k = [
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
        O[2], Ot(() => a = !1)), s.$set(Ee), (!H || ue & /*experience*/
        1) && Bt(
          p,
          /*experience*/
          O[0]
        ), (!H || ue & /*tjm*/
        2) && Bt(
          P,
          /*tjm*/
          O[1]
        );
      },
      i(O) {
        H || (R(s.$$.fragment, O), H = !0);
      },
      o(O) {
        N(s.$$.fragment, O), H = !1;
      },
      d(O) {
        O && Q(e), be(s), y = !1, ze(k);
      }
    }
  );
}
function fl(n, e, t) {
  let { rateManager: i } = e, { experience: s = 2 } = e, { tjm: a = i.getMinTJMValue() } = e, { selectedDevType: l } = e, r = i.getMinExperienceValue(), o = i.getMinTJMValue();
  const u = i.getRateList();
  function c(b) {
    l = b, t(2, l);
  }
  const d = () => t(1, a = i.updateTJM(s, l)), f = () => t(0, s = Math.max(r, s - 1)), m = () => t(1, a = i.updateTJM(s, l)), h = () => t(0, s += 1), p = () => t(1, a = i.updateTJM(s, l)), _ = () => t(1, a = Math.max(o, a - 10)), E = () => t(1, a += 10);
  return n.$$set = (b) => {
    "rateManager" in b && t(3, i = b.rateManager), "experience" in b && t(0, s = b.experience), "tjm" in b && t(1, a = b.tjm), "selectedDevType" in b && t(2, l = b.selectedDevType);
  }, [
    s,
    a,
    l,
    i,
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
let Ui = class extends Ne {
  constructor(e) {
    super(), je(
      this,
      e,
      fl,
      dl,
      ye,
      {
        rateManager: 3,
        experience: 0,
        tjm: 1,
        selectedDevType: 2
      },
      ll
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
Fe(Ui, { rateManager: {}, experience: {}, tjm: {}, selectedDevType: {} }, [], [], !0);
function hl(n) {
  Mn(n, "svelte-3yte23", ".pay.svelte-3yte23.svelte-3yte23{height:447px;width:100%;background:#9FF000;border-radius:32px;font-size:24px;display:flex;flex-direction:column;justify-content:center;align-items:center}.pay.svelte-3yte23 span.title.svelte-3yte23{margin-top:60px;color:#0E130B;margin-bottom:20px}.pay.svelte-3yte23 span.amount.svelte-3yte23{color:#0E130B;font-weight:900;font-size:60px;margin-bottom:54px}.pay.svelte-3yte23 a.svelte-3yte23{display:inline-flex;padding:16px 24px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700}@media screen and (max-width: 380px){.pay.svelte-3yte23 span.title.svelte-3yte23{font-size:0.75em}}");
}
function ml(n) {
  let e, t, i, s, a, l, r, o, u, c;
  return {
    c() {
      e = K("div"), t = K("span"), t.textContent = "Votre salaire annuel brut", i = Ce(), s = K("span"), a = pt(
        /*amount*/
        n[0]
      ), l = pt(" €"), r = Ce(), o = K("a"), u = pt("Envie de nous rejoindre ?"), Z(t, "class", "title svelte-3yte23"), Z(s, "class", "amount svelte-3yte23"), Z(o, "href", c = /*rateManager*/
      n[1].getJoinUsLink()), Z(o, "class", "svelte-3yte23"), Z(e, "class", "pay svelte-3yte23");
    },
    m(d, f) {
      Y(d, e, f), G(e, t), G(e, i), G(e, s), G(s, a), G(s, l), G(e, r), G(e, o), G(o, u);
    },
    p(d, [f]) {
      f & /*amount*/
      1 && Bt(
        a,
        /*amount*/
        d[0]
      ), f & /*rateManager*/
      2 && c !== (c = /*rateManager*/
      d[1].getJoinUsLink()) && Z(o, "href", c);
    },
    i: nt,
    o: nt,
    d(d) {
      d && Q(e);
    }
  };
}
function pl(n, e, t) {
  let { amount: i = 450 } = e, { rateManager: s } = e;
  return n.$$set = (a) => {
    "amount" in a && t(0, i = a.amount), "rateManager" in a && t(1, s = a.rateManager);
  }, [i, s];
}
class Bi extends Ne {
  constructor(e) {
    super(), je(this, e, pl, ml, ye, { amount: 0, rateManager: 1 }, hl);
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
Fe(Bi, { amount: {}, rateManager: {} }, [], [], !0);
function gl(n) {
  Mn(n, "svelte-1sqfk6p", `.component.svelte-1sqfk6p{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500}.block.svelte-1sqfk6p{min-width:280px;width:50%;position:relative;z-index:1}.block.svelte-1sqfk6p:nth-child(1){margin-right:24px}@media screen and (max-width: 1280px),
        screen and (max-height: 720px){.block.svelte-1sqfk6p{width:100%;margin-bottom:1.5em}.component.svelte-1sqfk6p{flex-direction:column}}`);
}
function _l(n) {
  let e, t, i, s, a, l, r, o, u, c, d;
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
  n[2]), i = new Ui({ props: p }), le.push(() => Rt(i, "selectedDevType", f)), le.push(() => Rt(i, "experience", m)), le.push(() => Rt(i, "tjm", h));
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
    n[3]), u = new Bi({ props: E }), le.push(() => Rt(u, "amount", _)), {
      c() {
        e = K("div"), t = K("div"), Se(i.$$.fragment), r = Ce(), o = K("div"), Se(u.$$.fragment), Z(t, "class", "block svelte-1sqfk6p"), Z(o, "class", "block svelte-1sqfk6p"), Z(e, "class", "component svelte-1sqfk6p");
      },
      m(b, M) {
        Y(b, e, M), G(e, t), Ie(i, t, null), G(e, r), G(e, o), Ie(u, o, null), d = !0;
      },
      p(b, [M]) {
        const S = {};
        !s && M & /*selectedDevType*/
        1 && (s = !0, S.selectedDevType = /*selectedDevType*/
        b[0], Ot(() => s = !1)), !a && M & /*experience*/
        2 && (a = !0, S.experience = /*experience*/
        b[1], Ot(() => a = !1)), !l && M & /*tjm*/
        4 && (l = !0, S.tjm = /*tjm*/
        b[2], Ot(() => l = !1)), i.$set(S);
        const T = {};
        !c && M & /*amount*/
        8 && (c = !0, T.amount = /*amount*/
        b[3], Ot(() => c = !1)), u.$set(T);
      },
      i(b) {
        d || (R(i.$$.fragment, b), R(u.$$.fragment, b), d = !0);
      },
      o(b) {
        N(i.$$.fragment, b), N(u.$$.fragment, b), d = !1;
      },
      d(b) {
        b && Q(e), be(i), be(u);
      }
    }
  );
}
function Il(n, e, t) {
  let { company: i } = e, s = $s.create(i), a, l, r, o;
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
    o = m, t(3, o), t(4, s), t(1, l), t(0, a), t(2, r);
  }
  return n.$$set = (m) => {
    "company" in m && t(5, i = m.company);
  }, n.$$.update = () => {
    n.$$.dirty & /*experience, selectedDevType, tjm*/
    7 && t(3, o = s.getSalary(l, a, r) || 0);
  }, [
    a,
    l,
    r,
    o,
    s,
    i,
    u,
    c,
    d,
    f
  ];
}
class Hi extends Ne {
  constructor(e) {
    super(), je(this, e, Il, _l, ye, { company: 5 }, gl);
  }
  get company() {
    return this.$$.ctx[5];
  }
  set company(e) {
    this.$$set({ company: e }), I();
  }
}
customElements.define("renumerator-component", Fe(Hi, { company: {} }, [], [], !0));
class bl extends HTMLElement {
  connectedCallback() {
    const e = this.getAttribute("company"), t = e ?? "";
    new Hi({ target: this, props: { company: t } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", bl);
