var di = Object.defineProperty;
var fi = (n, e, t) => e in n ? di(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var mt = (n, e, t) => (fi(n, typeof e != "symbol" ? e + "" : e, t), t);
function tt() {
}
function R(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function gs(n) {
  return n();
}
function Nn() {
  return /* @__PURE__ */ Object.create(null);
}
function We(n) {
  n.forEach(gs);
}
function ye(n) {
  return typeof n == "function";
}
function Ae(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function hi(n) {
  return Object.keys(n).length === 0;
}
function mi(n, ...e) {
  if (n == null) {
    for (const s of e)
      s(void 0);
    return tt;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function $t(n, e, t) {
  n.$$.on_destroy.push(mi(e, t));
}
function Ce(n, e, t, s) {
  if (n) {
    const i = _s(n, e, t, s);
    return n[0](i);
  }
}
function _s(n, e, t, s) {
  return n[1] && s ? R(t.ctx.slice(), n[1](s(e))) : t.ctx;
}
function Te(n, e, t, s) {
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
function Le(n, e, t, s, i, a) {
  if (i) {
    const l = _s(e, t, s, a);
    n.p(l, i);
  }
}
function Oe(n) {
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
function pi(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function cn(n, e, t) {
  return n.set(t), e;
}
function ue(n) {
  return n && ye(n.destroy) ? n.destroy : tt;
}
const gi = ["", !0, 1, "true", "contenteditable"], _i = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function K(n, e) {
  n.appendChild(e);
}
function On(n, e, t) {
  const s = Ii(n);
  if (!s.getElementById(e)) {
    const i = Y("style");
    i.id = e, i.textContent = t, bi(s, i);
  }
}
function Ii(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function bi(n, e) {
  return K(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function Q(n, e, t) {
  n.insertBefore(e, t || null);
}
function Z(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Ei(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function Y(n) {
  return document.createElement(n);
}
function Jt(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Et(n) {
  return document.createTextNode(n);
}
function He() {
  return Et(" ");
}
function ut() {
  return Et("");
}
function ot(n, e, t, s) {
  return n.addEventListener(e, t, s), () => n.removeEventListener(e, t, s);
}
function ie(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const vi = ["width", "height"];
function de(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const s in e)
    e[s] == null ? n.removeAttribute(s) : s === "style" ? n.style.cssText = e[s] : s === "__value" ? n.value = n[s] = e[s] : t[s] && t[s].set && vi.indexOf(s) === -1 ? n[s] = e[s] : ie(n, s, e[s]);
}
function dn(n, e) {
  for (const t in e)
    ie(n, t, e[t]);
}
function Ai(n, e) {
  Object.keys(e).forEach((t) => {
    Si(n, t, e[t]);
  });
}
function Si(n, e, t) {
  const s = e.toLowerCase();
  s in n ? n[s] = typeof n[s] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : ie(n, e, t);
}
function fn(n) {
  return /-/.test(n) ? Ai : de;
}
function yi(n) {
  return Array.from(n.childNodes);
}
function Kt(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Ci(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = /** @type {string} */
  e);
}
function Ti(n, e, t) {
  ~gi.indexOf(t) ? Ci(n, e) : Kt(n, e);
}
function Li(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
function bt(n, e) {
  return new n(e);
}
let en;
function Yt(n) {
  en = n;
}
function Re() {
  if (!en)
    throw new Error("Function called outside component initialization");
  return en;
}
function vt(n) {
  Re().$$.on_mount.push(n);
}
function jt(n) {
  Re().$$.on_destroy.push(n);
}
function Ge(n, e) {
  return Re().$$.context.set(n, e), e;
}
function Pe(n) {
  return Re().$$.context.get(n);
}
function Pn(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((s) => s.call(this, e));
}
const zt = [], oe = [];
let qt = [];
const vn = [], Oi = /* @__PURE__ */ Promise.resolve();
let An = !1;
function Mi() {
  An || (An = !0, Oi.then(I));
}
function Sn(n) {
  qt.push(n);
}
function Pt(n) {
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
        wt++, Yt(e), Ri(e.$$);
      }
    } catch (e) {
      throw zt.length = 0, wt = 0, e;
    }
    for (Yt(null), zt.length = 0, wt = 0; oe.length; )
      oe.pop()();
    for (let e = 0; e < qt.length; e += 1) {
      const t = qt[e];
      gn.has(t) || (gn.add(t), t());
    }
    qt.length = 0;
  } while (zt.length);
  for (; vn.length; )
    vn.pop()();
  An = !1, gn.clear(), Yt(n);
}
function Ri(n) {
  if (n.fragment !== null) {
    n.update(), We(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Sn);
  }
}
function Di(n) {
  const e = [], t = [];
  qt.forEach((s) => n.indexOf(s) === -1 ? e.push(s) : t.push(s)), t.forEach((s) => s()), qt = e;
}
const ln = /* @__PURE__ */ new Set();
let Nt;
function $e() {
  Nt = {
    r: 0,
    c: [],
    p: Nt
    // parent group
  };
}
function et() {
  Nt.r || We(Nt.c), Nt = Nt.p;
}
function O(n, e) {
  n && n.i && (ln.delete(n), n.i(e));
}
function D(n, e, t, s) {
  if (n && n.o) {
    if (ln.has(n))
      return;
    ln.add(n), Nt.c.push(() => {
      ln.delete(n), s && (t && n.d(1), s());
    }), n.o(e);
  } else
    s && s();
}
function Un(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function $(n, e) {
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
function se(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Ut(n, e, t) {
  const s = n.$$.props[e];
  s !== void 0 && (n.$$.bound[s] = t, t(n.$$.ctx[s]));
}
function ve(n) {
  n && n.c();
}
function _e(n, e, t) {
  const { fragment: s, after_update: i } = n.$$;
  s && s.m(e, t), Sn(() => {
    const a = n.$$.on_mount.map(gs).filter(ye);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : We(a), n.$$.on_mount = [];
  }), i.forEach(Sn);
}
function Ie(n, e) {
  const t = n.$$;
  t.fragment !== null && (Di(t.after_update), We(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Fi(n, e) {
  n.$$.dirty[0] === -1 && (zt.push(n), Mi(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function De(n, e, t, s, i, a, l = null, r = [-1]) {
  const o = en;
  Yt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: tt,
    not_equal: i,
    bound: Nn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Nn(),
    dirty: r,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  l && l(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (d, h, ...m) => {
    const f = m.length ? m[0] : h;
    return u.ctx && i(u.ctx[d], u.ctx[d] = f) && (!u.skip_bound && u.bound[d] && u.bound[d](f), c && Fi(n, d)), h;
  }) : [], u.update(), c = !0, We(u.before_update), u.fragment = s ? s(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = yi(e.target);
      u.fragment && u.fragment.l(d), d.forEach(Z);
    } else
      u.fragment && u.fragment.c();
    e.intro && O(n.$$.fragment), _e(n, e.target, e.anchor), I();
  }
  Yt(o);
}
let Is;
typeof HTMLElement == "function" && (Is = class extends HTMLElement {
  constructor(e, t, s) {
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
              r = Y("slot"), l !== "default" && ie(r, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, d) {
              Q(c, r, d);
            },
            d: function(c) {
              c && Z(r);
            }
          };
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const s = {}, i = Li(this);
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
  let l = class extends Is {
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
class ke {
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
    Ie(this, 1), this.$destroy = tt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!ye(t))
      return tt;
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
    this.$$set && !hi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ki = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ki);
class bs {
  constructor(e) {
    mt(this, "config");
    this.config = e;
  }
  getRate(e) {
    return this.config.jobs.find((t) => t.name === e);
  }
  getRateList() {
    return this.config.jobs;
  }
  getMinExperienceValue() {
    return this.config.min_experience;
  }
  getSalary(e, t) {
    const s = this.getRate(t);
    if (s) {
      const i = Math.min(s.tjmGrid.length, e) - this.config.min_experience, l = s.tjmGrid[i].tjm;
      console.log(l);
      const r = this.config.min_salary * 12 + (l - this.config.tjm_base) / 2 * (251 - 35 - this.config.group_days) * (1 + 0.1 / (52 * 5 / 12) * 25);
      return Math.round(r);
    }
    return this.config.min_salary;
  }
}
const Ni = 2900, Pi = 2, Ui = 0, Bi = 20, ji = 290, Hi = [
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
    name: "Facilitateur/Coordinateur de project",
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
], wi = {
  fixed_salary: Ni,
  min_experience: Pi,
  min_salary: Ui,
  group_days: Bi,
  tjm_base: ji,
  jobs: Hi
};
class Bn extends bs {
  constructor() {
    super(wi);
  }
}
const xi = 3400, Vi = 2, Gi = 0, zi = 15, Wi = 450, qi = [], Xi = {
  fixed_salary: xi,
  min_experience: Vi,
  min_salary: Gi,
  group_days: zi,
  tjm_base: Wi,
  jobs: qi
};
class Ki extends bs {
  constructor() {
    super(Xi);
  }
}
var yn = /* @__PURE__ */ ((n) => (n.EKITE = "EKITE", n.STORM = "STORM", n))(yn || {});
class Zi {
  static create(e) {
    switch (e) {
      case yn.EKITE:
        return new Bn();
      case yn.STORM:
        return new Ki();
      default:
        return console.warn(
          "No company props props defined in component initialisation : default EKITE"
        ), new Bn();
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
var we = function() {
  return we = Object.assign || function(e) {
    for (var t, s = 1, i = arguments.length; s < i; s++) {
      t = arguments[s];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, we.apply(this, arguments);
};
function Qt(n) {
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
function jn(n, e) {
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
function Qi(n, e, t) {
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
function Ji(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Es(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Es(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Yi(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var s = t.scrollWidth;
  return document.documentElement.removeChild(t), s;
}
const Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Ji,
  estimateScrollWidth: Yi,
  matches: Es
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
var $i = {
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
var er = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return s.shakeAnimationEndHandler = function() {
        s.handleShakeAnimationEnd();
      }, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $i;
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
var Dt = {
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
var tr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return s.transitionEndHandler = function(i) {
        s.handleTransitionEnd(i);
      }, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Dt;
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
      this.adapter.removeClass(Dt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Dt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Dt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var s = this.adapter.hasClass(Dt.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && s && (this.adapter.removeClass(Dt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Dt.LINE_RIPPLE_DEACTIVATING));
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
var nr = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, sr = {
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
}, Zt = {
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
}, je;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(je || (je = {}));
var Bt;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(Bt || (Bt = {}));
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
var Lt, At, le = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Lt = {}, Lt["" + le.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Lt["" + le.LIST_ITEM_CLASS] = "mdc-list-item", Lt["" + le.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Lt["" + le.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Lt["" + le.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Lt["" + le.ROOT] = "mdc-list";
var xt = (At = {}, At["" + le.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", At["" + le.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", At["" + le.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", At["" + le.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", At["" + le.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", At["" + le.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", At["" + le.ROOT] = "mdc-deprecated-list", At), Ot = {
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
    .` + le.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + le.LIST_ITEM_CLASS + ` a,
    .` + xt[le.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + xt[le.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + le.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + le.LIST_ITEM_CLASS + ` a,
    .` + le.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + le.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + xt[le.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + xt[le.LIST_ITEM_CLASS] + ` a,
    .` + xt[le.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + xt[le.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var ee = {
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
}, rt = /* @__PURE__ */ new Set();
rt.add(ee.BACKSPACE);
rt.add(ee.ENTER);
rt.add(ee.SPACEBAR);
rt.add(ee.PAGE_UP);
rt.add(ee.PAGE_DOWN);
rt.add(ee.END);
rt.add(ee.HOME);
rt.add(ee.ARROW_LEFT);
rt.add(ee.ARROW_UP);
rt.add(ee.ARROW_RIGHT);
rt.add(ee.ARROW_DOWN);
rt.add(ee.DELETE);
rt.add(ee.ESCAPE);
rt.add(ee.TAB);
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
}, at = /* @__PURE__ */ new Map();
at.set(ct.BACKSPACE, ee.BACKSPACE);
at.set(ct.ENTER, ee.ENTER);
at.set(ct.SPACEBAR, ee.SPACEBAR);
at.set(ct.PAGE_UP, ee.PAGE_UP);
at.set(ct.PAGE_DOWN, ee.PAGE_DOWN);
at.set(ct.END, ee.END);
at.set(ct.HOME, ee.HOME);
at.set(ct.ARROW_LEFT, ee.ARROW_LEFT);
at.set(ct.ARROW_UP, ee.ARROW_UP);
at.set(ct.ARROW_RIGHT, ee.ARROW_RIGHT);
at.set(ct.ARROW_DOWN, ee.ARROW_DOWN);
at.set(ct.DELETE, ee.DELETE);
at.set(ct.ESCAPE, ee.ESCAPE);
at.set(ct.TAB, ee.TAB);
var Mt = /* @__PURE__ */ new Set();
Mt.add(ee.PAGE_UP);
Mt.add(ee.PAGE_DOWN);
Mt.add(ee.END);
Mt.add(ee.HOME);
Mt.add(ee.ARROW_LEFT);
Mt.add(ee.ARROW_UP);
Mt.add(ee.ARROW_RIGHT);
Mt.add(ee.ARROW_DOWN);
function Ve(n) {
  var e = n.key;
  if (rt.has(e))
    return e;
  var t = at.get(n.keyCode);
  return t || ee.UNKNOWN;
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
var ir = ["input", "button", "textarea", "select"], It = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    ir.indexOf(t) === -1 && n.preventDefault();
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
function rr() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function ar(n, e) {
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
    As(e);
  }, Be.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = lr(i, a, r, e) : o = or(i, r, e), o !== -1 && !l && s(o), o;
}
function lr(n, e, t, s) {
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
function or(n, e, t) {
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
function vs(n) {
  return n.typeaheadBuffer.length > 0;
}
function As(n) {
  n.typeaheadBuffer = "";
}
function Hn(n, e) {
  var t = n.event, s = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, l = n.sortedIndexByFirstChar, r = n.isItemAtIndexDisabled, o = Ve(t) === "ArrowLeft", u = Ve(t) === "ArrowUp", c = Ve(t) === "ArrowRight", d = Ve(t) === "ArrowDown", h = Ve(t) === "Home", m = Ve(t) === "End", f = Ve(t) === "Enter", p = Ve(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || u || c || d || h || m || f)
    return -1;
  var g = !p && t.key.length === 1;
  if (g) {
    It(t);
    var b = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: r
    };
    return Tn(b, e);
  }
  if (!p)
    return -1;
  s && It(t);
  var E = s && vs(e);
  if (E) {
    var b = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: r
    };
    return Tn(b, e);
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
function ur(n) {
  return n instanceof Array;
}
var cr = ["Alt", "Control", "Meta", "Shift"];
function wn(n) {
  var e = new Set(n ? cr.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(s) {
      return e.has(s);
    }) && t.length === e.size;
  };
}
var dr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return s.wrapFocus = !1, s.isVertical = !0, s.isSingleSelectionList = !1, s.areDisabledItemsFocusable = !0, s.selectedIndex = Be.UNSET_INDEX, s.focusedItemIndex = Be.UNSET_INDEX, s.useActivatedClass = !1, s.useSelectedAttr = !1, s.ariaCurrentAttrValue = null, s.isCheckboxList = !1, s.isRadioList = !1, s.lastSelectedIndex = null, s.hasTypeahead = !1, s.typeaheadState = rr(), s.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), s;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ot;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return le;
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
        var s = this.adapter.listItemAtIndexHasClass(t, le.LIST_ITEM_ACTIVATED_CLASS);
        s && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = Be.UNSET_INDEX, s = this.adapter.getListItemCount(), i = 0; i < s; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, le.LIST_ITEM_SELECTED_CLASS), l = this.adapter.listItemAtIndexHasClass(i, le.LIST_ITEM_ACTIVATED_CLASS);
        if (a || l) {
          t = i;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && vs(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(t, le.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, s, i) {
      var a = this, l, r = Ve(t) === "ArrowLeft", o = Ve(t) === "ArrowUp", u = Ve(t) === "ArrowRight", c = Ve(t) === "ArrowDown", d = Ve(t) === "Home", h = Ve(t) === "End", m = Ve(t) === "Enter", f = Ve(t) === "Spacebar", p = this.isVertical && c || !this.isVertical && u, g = this.isVertical && o || !this.isVertical && r, b = t.key === "A" || t.key === "a", E = wn(t);
      if (this.adapter.isRootFocused()) {
        if ((g || h) && E([]))
          t.preventDefault(), this.focusLastElement();
        else if ((p || d) && E([]))
          t.preventDefault(), this.focusFirstElement();
        else if (g && E(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var M = this.focusLastElement();
          M !== -1 && this.setSelectedIndexOnAction(M, !1);
        } else if (p && E(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var M = this.focusFirstElement();
          M !== -1 && this.setSelectedIndexOnAction(M, !1);
        }
        if (this.hasTypeahead) {
          var C = {
            event: t,
            focusItemAtIndex: function(y) {
              a.focusItemAtIndex(y);
            },
            focusedItemIndex: -1,
            isTargetListItem: s,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(y) {
              return a.isIndexDisabled(y);
            }
          };
          Hn(C, this.typeaheadState);
        }
        return;
      }
      var L = this.adapter.getFocusedElementIndex();
      if (!(L === -1 && (L = i, L < 0))) {
        if (p && E([]))
          It(t), this.focusNextElement(L);
        else if (g && E([]))
          It(t), this.focusPrevElement(L);
        else if (p && E(["Shift"]) && this.isCheckboxList) {
          It(t);
          var M = this.focusNextElement(L);
          M !== -1 && this.setSelectedIndexOnAction(M, !1);
        } else if (g && E(["Shift"]) && this.isCheckboxList) {
          It(t);
          var M = this.focusPrevElement(L);
          M !== -1 && this.setSelectedIndexOnAction(M, !1);
        } else if (d && E([]))
          It(t), this.focusFirstElement();
        else if (h && E([]))
          It(t), this.focusLastElement();
        else if (d && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (It(t), this.isIndexDisabled(L))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, L, L);
        } else if (h && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (It(t), this.isIndexDisabled(L))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(L, this.adapter.getListItemCount() - 1, L);
        } else if (b && E(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Be.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || f) && E([])) {
          if (s) {
            var P = t.target;
            if (P && P.tagName === "A" && m || (It(t), this.isIndexDisabled(L)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(L, !1), this.adapter.notifyAction(L));
          }
        } else if ((m || f) && E(["Shift"]) && this.isCheckboxList) {
          var P = t.target;
          if (P && P.tagName === "A" && m || (It(t), this.isIndexDisabled(L)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((l = this.lastSelectedIndex) !== null && l !== void 0 ? l : L, L, L), this.adapter.notifyAction(L));
        }
        if (this.hasTypeahead) {
          var C = {
            event: t,
            focusItemAtIndex: function(j) {
              a.focusItemAtIndex(j);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: s,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(j) {
              return a.isIndexDisabled(j);
            }
          };
          Hn(C, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, s, i) {
      var a, l = wn(i);
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
      this.isIndexValid(t, !1) && (s ? (this.adapter.removeClassForElementIndex(t, le.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Ot.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, le.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Ot.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, s) {
      if (s === void 0 && (s = {}), !(this.selectedIndex === t && !s.forceUpdate)) {
        var i = le.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = le.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Be.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== Be.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, s.isUserInteraction && !s.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === Be.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Ot.ARIA_CURRENT));
      var s = this.ariaCurrentAttrValue !== null, i = s ? Ot.ARIA_CURRENT : Ot.ARIA_SELECTED;
      if (this.selectedIndex !== Be.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== Be.UNSET_INDEX) {
        var a = s ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Ot.ARIA_SELECTED : Ot.ARIA_CHECKED;
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
      for (var a = new Set(this.selectedIndex === Be.UNSET_INDEX ? [] : this.selectedIndex), l = !(a != null && a.has(i)), r = jn([t, s].sort(), 2), o = r[0], u = r[1], c = this.getSelectionAttribute(), d = [], h = o; h <= u; h++)
        if (!this.isIndexDisabled(h)) {
          var m = a.has(h);
          l !== m && (d.push(h), this.adapter.setCheckedCheckboxOrRadioAtIndex(h, l), this.adapter.setAttributeForElementIndex(h, c, "" + l), l ? a.add(h) : a.delete(h));
        }
      d.length && (this.selectedIndex = Qi([], jn(a)), this.adapter.notifySelectionChange(d));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === Be.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== Be.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Be.UNSET_INDEX ? this.selectedIndex : ur(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, s) {
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
      return ar(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      As(this.typeaheadState);
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
var Ss = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return s.isSurfaceOpen = !1, s.isQuickOpen = !1, s.isHoistedElement = !1, s.isFixedPosition = !1, s.isHorizontallyCenteredOnViewport = !1, s.maxHeight = 0, s.openBottomBias = 0, s.openAnimationEndTimerId = 0, s.closeAnimationEndTimerId = 0, s.animationRequestId = 0, s.anchorCorner = Bt.TOP_START, s.originCorner = Bt.TOP_START, s.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, s.position = { x: 0, y: 0 }, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return nr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return sr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Zt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Bt;
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
      this.originCorner = this.originCorner ^ je.RIGHT;
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
        }, Zt.TRANSITION_OPEN_DURATION);
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
          }, Zt.TRANSITION_CLOSE_DURATION);
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
      var s = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(s), a = this.hasBit(s, je.BOTTOM) ? "bottom" : "top", l = this.hasBit(s, je.RIGHT) ? "right" : "left", r = this.getHorizontalOriginOffset(s), o = this.getVerticalOriginOffset(s), u = this.measurements, c = u.anchorSize, d = u.surfaceSize, h = (t = {}, t[l] = r, t[a] = o, t);
      c.width / d.width > Zt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (l = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(h), this.adapter.setTransformOrigin(l + " " + a), this.adapter.setPosition(h), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(s, je.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var t = this.originCorner, s = this.measurements, i = s.viewportDistance, a = s.anchorSize, l = s.surfaceSize, r = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, je.BOTTOM), u, c;
      o ? (u = i.top - r + this.anchorMargin.bottom, c = i.bottom - r - this.anchorMargin.bottom) : (u = i.top - r + this.anchorMargin.top, c = i.bottom - r + a.height - this.anchorMargin.top);
      var d = c - l.height > 0;
      !d && u > c + this.openBottomBias && (t = this.setBit(t, je.BOTTOM));
      var h = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, je.FLIP_RTL), f = this.hasBit(this.anchorCorner, je.RIGHT) || this.hasBit(t, je.RIGHT), p = !1;
      h && m ? p = !f : p = f;
      var g, b;
      p ? (g = i.left + a.width + this.anchorMargin.right, b = i.right - this.anchorMargin.right) : (g = i.left + this.anchorMargin.left, b = i.right + a.width - this.anchorMargin.left);
      var E = g - l.width > 0, M = b - l.width > 0, C = this.hasBit(t, je.FLIP_RTL) && this.hasBit(t, je.RIGHT);
      return M && C && h || !E && C ? t = this.unsetBit(t, je.RIGHT) : (E && p && h || E && !p && f || !M && g >= b) && (t = this.setBit(t, je.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var s = this.measurements.viewportDistance, i = 0, a = this.hasBit(t, je.BOTTOM), l = this.hasBit(this.anchorCorner, je.BOTTOM), r = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = s.top + this.anchorMargin.top - r, l || (i += this.measurements.anchorSize.height)) : (i = s.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - r, l && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var s = this.measurements.anchorSize, i = this.hasBit(t, je.RIGHT), a = this.hasBit(this.anchorCorner, je.RIGHT);
      if (i) {
        var l = a ? s.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? l - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : l;
      }
      return a ? s.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var s = this.measurements.anchorSize, i = this.hasBit(t, je.BOTTOM), a = this.hasBit(this.anchorCorner, je.BOTTOM), l = 0;
      return i ? l = a ? s.height - this.anchorMargin.top : -this.anchorMargin.bottom : l = a ? s.height + this.anchorMargin.bottom : this.anchorMargin.top, l;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var s, i, a = this.measurements, l = a.windowScroll, r = a.viewportDistance, o = a.surfaceSize, u = a.viewportSize, c = Object.keys(t);
      try {
        for (var d = Qt(c), h = d.next(); !h.done; h = d.next()) {
          var m = h.value, f = t[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            t[m] = (u.width - o.width) / 2;
            continue;
          }
          f += r[m], this.isFixedPosition || (m === "top" ? f += l.y : m === "bottom" ? f -= l.y : m === "left" ? f += l.x : f -= l.x), t[m] = f;
        }
      } catch (p) {
        s = { error: p };
      } finally {
        try {
          h && !h.done && (i = d.return) && i.call(d);
        } finally {
          if (s)
            throw s.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, s = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (s || a) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, Zt.TOUCH_EVENT_WAIT_MS);
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
var Xt = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Vt = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, fr = {
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
var hr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return s.closeAnimationEndTimerId = 0, s.defaultFocusState = Wt.LIST_ROOT, s.selectedIndex = -1, s;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Vt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return fr;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Vt.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var l = s.adapter.getElementIndex(t);
          l >= 0 && s.adapter.isSelectableItemAtIndex(l) && s.setSelectedIndex(l);
        }, Ss.numbers.TRANSITION_CLOSE_DURATION);
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
      s >= 0 && (this.adapter.removeAttributeFromElementAtIndex(s, Vt.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(s, Xt.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Xt.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Vt.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, s) {
      this.validatedIndex(t), s ? (this.adapter.removeClassFromElementAtIndex(t, le.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Vt.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, le.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Vt.ARIA_DISABLED_ATTR, "true"));
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
var mr = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, xn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, pr = {
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
var gr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      return n.call(this, we(we({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return pr;
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
      var s = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += xn.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(s);
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
function _r(n) {
  return n === void 0 && (n = window), Ir(n) ? { passive: !0 } : !1;
}
function Ir(n) {
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
const br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: _r
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
var Er = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, vr = {
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
function Ar(n, e) {
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
function Sr(n, e, t) {
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
], zn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], rn = [], yr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t) {
      var s = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
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
        return Er;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vr;
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
          for (var a = Qt(Gn), l = a.next(); !l.done; l = a.next()) {
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
          for (var a = Qt(zn), l = a.next(); !l.done; l = a.next()) {
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
        for (var i = Qt(Gn), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Qt(zn), a = i.next(); !a.done; a = i.next()) {
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
        var h = this.getFgTranslationCoordinates(), m = h.startPoint, f = h.endPoint;
        c = m.x + "px, " + m.y + "px", d = f.x + "px, " + f.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(a, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(r), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, s = t.activationEvent, i = t.wasActivatedByPointer, a;
      i ? a = Sr(s, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
        var i = we({}, s);
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
var Me = {
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
var Cr = (
  /** @class */
  function(n) {
    Ct(e, n);
    function e(t, s) {
      s === void 0 && (s = {});
      var i = n.call(this, we(we({}, e.defaultAdapter), t)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Ft.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = s.leadingIcon, i.helperText = s.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Me;
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
      this.disabled = t, this.disabled ? (this.adapter.addClass(Me.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(Me.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(Me.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, s = this.adapter.hasClass(Me.FOCUSED), i = t || s, a = this.adapter.hasClass(Me.REQUIRED);
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
      this.adapter.removeClass(Me.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(Me.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(Me.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(Me.FOCUSED))) {
        var s = Ve(t) === ee.ENTER, i = Ve(t) === ee.SPACEBAR, a = Ve(t) === ee.ARROW_UP, l = Ve(t) === ee.ARROW_DOWN, r = t.ctrlKey || t.metaKey;
        if (!r && (!i && t.key && t.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var o = i ? " " : t.key, u = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), t.preventDefault();
          return;
        }
        !s && !i && !a && !l || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var s = this.adapter.hasClass(Me.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(Me.INVALID), this.adapter.removeMenuClass(Me.MENU_INVALID)) : (this.adapter.addClass(Me.INVALID), this.adapter.addMenuClass(Me.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(Me.REQUIRED) && !this.adapter.hasClass(Me.DISABLED) ? this.getSelectedIndex() !== Ft.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(Me.REQUIRED) : this.adapter.removeClass(Me.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Bt.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(Me.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(Me.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(Me.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(Me.REQUIRED);
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
var kt = {
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
var Tr = (
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
        return kt;
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
      return this.adapter.getAttr(kt.ARIA_HIDDEN) !== "true";
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
          this.showToScreenReader(), t ? this.adapter.removeAttr(kt.ROLE) : this.adapter.setAttr(kt.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(kt.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(kt.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(kt.ARIA_HIDDEN, "true");
    }, e;
  }(Tt)
);
const Gt = [];
function Ln(n, e = tt) {
  let t;
  const s = /* @__PURE__ */ new Set();
  function i(r) {
    if (Ae(n, r) && (n = r, t)) {
      const o = !Gt.length;
      for (const u of s)
        u[1](), Gt.push(u, n);
      if (o) {
        for (let u = 0; u < Gt.length; u += 2)
          Gt[u][0](Gt[u + 1]);
        Gt.length = 0;
      }
    }
  }
  function a(r) {
    i(r(n));
  }
  function l(r, o = tt) {
    const u = [r, o];
    return s.add(u), s.size === 1 && (t = e(i, a) || tt), r(n), () => {
      s.delete(u), s.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: l };
}
function W(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function ze(n, e, t, s = { bubbles: !0 }, i = !1) {
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
const Wn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Lr = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Ze(n) {
  let e, t = [];
  n.$on = (i, a) => {
    let l = i, r = () => {
    };
    return e ? r = e(l, a) : t.push([l, a]), l.match(Wn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', l), () => {
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
      const h = u.match(Wn), m = u.match(Lr), f = h || m;
      if (u.match(/^SMUI:\w+:/)) {
        const b = u.split(":");
        let E = "";
        for (let M = 0; M < b.length; M++)
          E += M === b.length - 1 ? ":" + b[M] : b[M].split("-").map((C) => C.slice(0, 1).toUpperCase() + C.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${E.split("$")[0]}.`), u = E;
      }
      if (f) {
        const b = u.split(h ? ":" : "$");
        u = b[0];
        const E = b.slice(1).reduce((M, C) => (M[C] = !0, M), {});
        E.passive && (d = d || {}, d.passive = !0), E.nonpassive && (d = d || {}, d.passive = !1), E.capture && (d = d || {}, d.capture = !0), E.once && (d = d || {}, d.once = !0), E.preventDefault && (c = Or(c)), E.stopPropagation && (c = Mr(c)), E.stopImmediatePropagation && (c = Rr(c)), E.self && (c = Dr(i, c)), E.trusted && (c = Fr(c));
      }
      const p = qn(i, u, c, d), g = () => {
        p();
        const b = a.indexOf(g);
        b > -1 && a.splice(b, 1);
      };
      return a.push(g), u in l || (l[u] = qn(i, u, s)), g;
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
function qn(n, e, t, s) {
  return n.addEventListener(e, t, s), () => n.removeEventListener(e, t, s);
}
function Or(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Mr(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Rr(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function Dr(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function Fr(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Ee(n, e) {
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
const { applyPassive: an } = br, { matches: kr } = Mn;
function un(n, { ripple: e = !0, surface: t = !1, unbounded: s = !1, disabled: i = !1, color: a, active: l, rippleElement: r, eventTarget: o, activeTarget: u, addClass: c = (f) => n.classList.add(f), removeClass: d = (f) => n.classList.remove(f), addStyle: h = (f, p) => n.style.setProperty(f, p), initPromise: m = Promise.resolve() } = {}) {
  let f, p = Pe("SMUI:addLayoutListener"), g, b = l, E = o, M = u;
  function C() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : a === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), f && b !== l && (b = l, l ? f.activate() : l === !1 && f.deactivate()), e && !f ? (f = new yr({
      addClass: c,
      browserSupportsCssVars: () => Ar(window),
      computeBoundingRect: () => (r || n).getBoundingClientRect(),
      containsEventTarget: (P) => n.contains(P),
      deregisterDocumentInteractionHandler: (P, y) => document.documentElement.removeEventListener(P, y, an()),
      deregisterInteractionHandler: (P, y) => (o || n).removeEventListener(P, y, an()),
      deregisterResizeHandler: (P) => window.removeEventListener("resize", P),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => l ?? kr(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!s,
      registerDocumentInteractionHandler: (P, y) => document.documentElement.addEventListener(P, y, an()),
      registerInteractionHandler: (P, y) => (o || n).addEventListener(P, y, an()),
      registerResizeHandler: (P) => window.addEventListener("resize", P),
      removeClass: d,
      updateCssVariable: h
    }), m.then(() => {
      f && (f.init(), f.setUnbounded(s));
    })) : f && !e && m.then(() => {
      f && (f.destroy(), f = void 0);
    }), f && (E !== o || M !== u) && (E = o, M = u, f.destroy(), requestAnimationFrame(() => {
      f && (f.init(), f.setUnbounded(s));
    })), !e && s && c("mdc-ripple-upgraded--unbounded");
  }
  C(), p && (g = p(L));
  function L() {
    f && f.layout();
  }
  return {
    update(P) {
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
        addStyle: h,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (y) => n.classList.add(y), removeClass: (y) => n.classList.remove(y), addStyle: (y, j) => n.style.setProperty(y, j), initPromise: Promise.resolve() }, P)), C();
    },
    destroy() {
      f && (f.destroy(), f = void 0, d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), g && g();
    }
  };
}
const { document: Nr } = _i;
function Pr(n) {
  let e, t, s, i, a, l, r, o;
  const u = (
    /*#slots*/
    n[34].default
  ), c = Ce(
    u,
    n,
    /*$$scope*/
    n[33],
    null
  );
  let d = [
    {
      class: s = W({
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
  ], h = {};
  for (let m = 0; m < d.length; m += 1)
    h = R(h, d[m]);
  return {
    c() {
      e = He(), t = Y("div"), c && c.c(), de(t, h);
    },
    m(m, f) {
      Q(m, e, f), Q(m, t, f), c && c.m(t, null), n[35](t), l = !0, r || (o = [
        ot(
          Nr.body,
          "click",
          /*handleBodyClick*/
          n[11],
          !0
        ),
        ue(a = Xe.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[10].call(null, t)
        ),
        ot(t, "keydown", function() {
          ye(
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
    p(m, f) {
      n = m, c && c.p && (!l || f[1] & /*$$scope*/
      4) && Le(
        c,
        u,
        n,
        /*$$scope*/
        n[33],
        l ? Te(
          u,
          /*$$scope*/
          n[33],
          f,
          null
        ) : Oe(
          /*$$scope*/
          n[33]
        ),
        null
      ), de(t, h = $(d, [
        (!l || f[0] & /*className, fixed, isStatic, fullWidth, internalClasses*/
        314 && s !== (s = W({
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
        (!l || f[0] & /*internalStyles, style*/
        516 && i !== (i = Object.entries(
          /*internalStyles*/
          n[9]
        ).map(Xn).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: i },
        f[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        n[12]
      ])), a && ye(a.update) && f[0] & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(m) {
      l || (O(c, m), l = !0);
    },
    o(m) {
      D(c, m), l = !1;
    },
    d(m) {
      m && (Z(e), Z(t)), c && c.d(m), n[35](null), r = !1, We(o);
    }
  };
}
const Xn = ([n, e]) => `${n}: ${e};`;
function Ur(n, e, t) {
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
  const c = Ze(Re());
  let { use: d = [] } = e, { class: h = "" } = e, { style: m = "" } = e, { static: f = !1 } = e, { anchor: p = !0 } = e, { fixed: g = !1 } = e, { open: b = f } = e, { managed: E = !1 } = e, { fullWidth: M = !1 } = e, { quickOpen: C = !1 } = e, { anchorElement: L = void 0 } = e, { anchorCorner: P = void 0 } = e, { anchorMargin: y = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: j = 0 } = e, { horizontallyCenteredOnViewport: te = !1 } = e, { openBottomBias: U = 0 } = e, { neverRestoreFocus: F = !1 } = e, w, z, T = {}, k = {}, x;
  Ge("SMUI:list:role", "menu"), Ge("SMUI:list:item:role", "menuitem");
  const Se = Bt;
  vt(() => (t(7, z = new Ss({
    addClass: ge,
    removeClass: Ne,
    hasClass: N,
    hasAnchor: () => !!L,
    notifyClose: () => {
      E || t(13, b = f), b || ze(w, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      E || t(13, b = f), b || ze(w, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      E || t(13, b = !0), b && ze(w, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      b || ze(w, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (ne) => w.contains(ne),
    isRtl: () => getComputedStyle(w).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (ne) => {
      t(9, k["transform-origin"] = ne, k);
    },
    isFocused: () => document.activeElement === w,
    saveFocus: () => {
      var ne;
      x = (ne = document.activeElement) !== null && ne !== void 0 ? ne : void 0;
    },
    restoreFocus: () => {
      !F && (!w || w.contains(document.activeElement)) && x && document.contains(x) && "focus" in x && x.focus();
    },
    getInnerDimensions: () => ({
      width: w.offsetWidth,
      height: w.offsetHeight
    }),
    getAnchorDimensions: () => L ? L.getBoundingClientRect() : null,
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
    setPosition: (ne) => {
      t(9, k.left = "left" in ne ? `${ne.left}px` : "", k), t(9, k.right = "right" in ne ? `${ne.right}px` : "", k), t(9, k.top = "top" in ne ? `${ne.top}px` : "", k), t(9, k.bottom = "bottom" in ne ? `${ne.bottom}px` : "", k);
    },
    setMaxHeight: (ne) => {
      t(9, k["max-height"] = ne, k);
    }
  })), ze(w, "SMUIMenuSurface:mount", {
    get open() {
      return b;
    },
    set open(ne) {
      t(13, b = ne);
    },
    closeProgrammatic: qe
  }), z.init(), () => {
    var ne;
    const Ue = z.isHoistedElement;
    z.destroy(), Ue && ((ne = w.parentNode) === null || ne === void 0 || ne.removeChild(w));
  })), jt(() => {
    var S;
    p && w && ((S = w.parentElement) === null || S === void 0 || S.classList.remove("mdc-menu-surface--anchor"));
  });
  function N(S) {
    return S in T ? T[S] : ce().classList.contains(S);
  }
  function ge(S) {
    T[S] || t(8, T[S] = !0, T);
  }
  function Ne(S) {
    (!(S in T) || T[S]) && t(8, T[S] = !1, T);
  }
  function qe(S) {
    z.close(S), t(13, b = !1);
  }
  function ae(S) {
    z && b && !E && z.handleBodyClick(S);
  }
  function nt() {
    return b;
  }
  function it(S) {
    t(13, b = S);
  }
  function H(S, ne) {
    return z.setAbsolutePosition(S, ne);
  }
  function he(S) {
    return z.setIsHoisted(S);
  }
  function fe() {
    return z.isFixed();
  }
  function ce() {
    return w;
  }
  function xe(S) {
    oe[S ? "unshift" : "push"](() => {
      w = S, t(6, w);
    });
  }
  return n.$$set = (S) => {
    e = R(R({}, e), Ke(S)), t(12, i = re(e, s)), "use" in S && t(0, d = S.use), "class" in S && t(1, h = S.class), "style" in S && t(2, m = S.style), "static" in S && t(3, f = S.static), "anchor" in S && t(15, p = S.anchor), "fixed" in S && t(4, g = S.fixed), "open" in S && t(13, b = S.open), "managed" in S && t(16, E = S.managed), "fullWidth" in S && t(5, M = S.fullWidth), "quickOpen" in S && t(17, C = S.quickOpen), "anchorElement" in S && t(14, L = S.anchorElement), "anchorCorner" in S && t(18, P = S.anchorCorner), "anchorMargin" in S && t(19, y = S.anchorMargin), "maxHeight" in S && t(20, j = S.maxHeight), "horizontallyCenteredOnViewport" in S && t(21, te = S.horizontallyCenteredOnViewport), "openBottomBias" in S && t(22, U = S.openBottomBias), "neverRestoreFocus" in S && t(23, F = S.neverRestoreFocus), "$$scope" in S && t(33, l = S.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | n.$$.dirty[1] & /*_b, _c*/
    3 && w && p && !(!(t(30, r = w.parentElement) === null || r === void 0) && r.classList.contains("mdc-menu-surface--anchor")) && (t(31, o = w.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), t(14, L = t(32, u = w.parentElement) !== null && u !== void 0 ? u : void 0)), n.$$.dirty[0] & /*instance, open*/
    8320 && z && z.isOpen() !== b && (b ? z.open() : z.close()), n.$$.dirty[0] & /*instance, quickOpen*/
    131200 && z && z.setQuickOpen(C), n.$$.dirty[0] & /*instance, fixed*/
    144 && z && z.setFixedPosition(g), n.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && z && z.setMaxHeight(j), n.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && z && z.setIsHorizontallyCenteredOnViewport(te), n.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && z && P != null && (typeof P == "string" ? z.setAnchorCorner(Se[P]) : z.setAnchorCorner(P)), n.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && z && z.setAnchorMargin(y), n.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && z && z.setOpenBottomBias(U);
  }, [
    d,
    h,
    m,
    f,
    g,
    M,
    w,
    z,
    T,
    k,
    c,
    ae,
    i,
    b,
    L,
    p,
    E,
    C,
    P,
    y,
    j,
    te,
    U,
    F,
    nt,
    it,
    H,
    he,
    fe,
    ce,
    r,
    o,
    u,
    l,
    a,
    xe
  ];
}
class ys extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      Ur,
      Pr,
      Ae,
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
Fe(ys, { use: {}, class: {}, style: {}, static: {}, anchor: { type: "Boolean" }, fixed: { type: "Boolean" }, open: {}, managed: { type: "Boolean" }, fullWidth: { type: "Boolean" }, quickOpen: { type: "Boolean" }, anchorElement: {}, anchorCorner: {}, anchorMargin: {}, maxHeight: {}, horizontallyCenteredOnViewport: { type: "Boolean" }, openBottomBias: {}, neverRestoreFocus: { type: "Boolean" } }, ["default"], ["isOpen", "setOpen", "setAbsolutePosition", "setIsHoisted", "isFixed", "getElement"], !0);
function Br(n, { addClass: e = (s) => n.classList.add(s), removeClass: t = (s) => n.classList.remove(s) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function jr(n) {
  let e;
  const t = (
    /*#slots*/
    n[17].default
  ), s = Ce(
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
      4194304) && Le(
        s,
        t,
        i,
        /*$$scope*/
        i[22],
        e ? Te(
          t,
          /*$$scope*/
          i[22],
          a,
          null
        ) : Oe(
          /*$$scope*/
          i[22]
        ),
        null
      );
    },
    i(i) {
      e || (O(s, i), e = !0);
    },
    o(i) {
      D(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function Hr(n) {
  let e, t, s;
  const i = [
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
    $$slots: { default: [jr] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < i.length; r += 1)
    l = R(l, i[r]);
  return (
    /*open*/
    n[0] !== void 0 && (l.open = /*open*/
    n[0]), e = new ys({ props: l }), n[18](e), oe.push(() => Ut(e, "open", a)), e.$on(
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
        ve(e.$$.fragment);
      },
      m(r, o) {
        _e(e, r, o), s = !0;
      },
      p(r, [o]) {
        const u = o & /*usePass, className, $$restProps*/
        546 ? $(i, [
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
        r[0], Pt(() => t = !1)), e.$set(u);
      },
      i(r) {
        s || (O(e.$$.fragment, r), s = !0);
      },
      o(r) {
        D(e.$$.fragment, r), s = !1;
      },
      d(r) {
        n[18](null), Ie(e, r);
      }
    }
  );
}
function wr(n, e, t) {
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
  const { closest: o } = Mn, u = Ze(Re());
  let { use: c = [] } = e, { class: d = "" } = e, { open: h = !1 } = e, m, f, p, g;
  vt(() => (t(3, f = new hr({
    addClassToElementAtIndex: (T, k) => {
      g.addClassForElementIndex(T, k);
    },
    removeClassFromElementAtIndex: (T, k) => {
      g.removeClassForElementIndex(T, k);
    },
    addAttributeToElementAtIndex: (T, k, x) => {
      g.setAttributeForElementIndex(T, k, x);
    },
    removeAttributeFromElementAtIndex: (T, k) => {
      g.removeAttributeForElementIndex(T, k);
    },
    getAttributeFromElementAtIndex: (T, k) => g.getAttributeFromElementIndex(T, k),
    elementContainsClass: (T, k) => T.classList.contains(k),
    closeSurface: (T) => {
      p.closeProgrammatic(T), ze(te(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (T) => g.getOrderedList().map((k) => k.element).indexOf(T),
    notifySelected: (T) => ze(
      te(),
      "SMUIMenu:selected",
      {
        index: T.index,
        item: g.getOrderedList()[T.index].element
      },
      void 0,
      !0
    ),
    getMenuItemCount: () => g.items.length,
    focusItemAtIndex: (T) => g.focusItemAtIndex(T),
    focusListRoot: () => "focus" in g.element && g.element.focus(),
    isSelectableItemAtIndex: (T) => !!o(g.getOrderedList()[T].element, `.${Xt.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (T) => {
      const k = g.getOrderedList(), x = o(k[T].element, `.${Xt.MENU_SELECTION_GROUP}`), Se = x == null ? void 0 : x.querySelector(`.${Xt.MENU_SELECTED_LIST_ITEM}`);
      return Se ? k.map((N) => N.element).indexOf(Se) : -1;
    }
  })), ze(te(), "SMUIMenu:mount", f), f.init(), () => {
    f.destroy();
  }));
  function b(T) {
    f && f.handleKeydown(T);
  }
  function E(T) {
    p || (p = T.detail);
  }
  function M(T) {
    g || t(4, g = T.detail);
  }
  function C() {
    return h;
  }
  function L(T) {
    t(0, h = T);
  }
  function P(T) {
    f.setDefaultFocusState(T);
  }
  function y() {
    return f.getSelectedIndex();
  }
  function j() {
    return m;
  }
  function te() {
    return m.getElement();
  }
  function U(T) {
    oe[T ? "unshift" : "push"](() => {
      m = T, t(2, m);
    });
  }
  function F(T) {
    h = T, t(0, h);
  }
  const w = () => f && f.handleMenuSurfaceOpened(), z = (T) => f && f.handleItemAction(g.getOrderedList()[T.detail.index].element);
  return n.$$set = (T) => {
    e = R(R({}, e), Ke(T)), t(9, a = re(e, i)), "use" in T && t(10, c = T.use), "class" in T && t(1, d = T.class), "open" in T && t(0, h = T.open), "$$scope" in T && t(22, r = T.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    1024 && t(5, s = [u, ...c]);
  }, [
    h,
    d,
    m,
    f,
    g,
    s,
    b,
    E,
    M,
    a,
    c,
    C,
    L,
    P,
    y,
    j,
    te,
    l,
    U,
    F,
    w,
    z,
    r
  ];
}
class Cs extends ke {
  constructor(e) {
    super(), De(this, e, wr, Hr, Ae, {
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
  Cs,
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
function xr(n) {
  let e, t, s, i, a, l, r, o;
  const u = (
    /*#slots*/
    n[8].default
  ), c = Ce(
    u,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let d = [
    {
      class: s = W({
        [
          /*list$class*/
          n[2]
        ]: !0,
        "mdc-menu__selection-group": !0
      })
    },
    Ee(
      /*$$restProps*/
      n[5],
      "list$"
    )
  ], h = {};
  for (let p = 0; p < d.length; p += 1)
    h = R(h, d[p]);
  let m = [hn(
    /*$$restProps*/
    n[5],
    ["list$"]
  )], f = {};
  for (let p = 0; p < m.length; p += 1)
    f = R(f, m[p]);
  return {
    c() {
      e = Y("li"), t = Y("ul"), c && c.c(), de(t, h), de(e, f);
    },
    m(p, g) {
      Q(p, e, g), K(e, t), c && c.m(t, null), n[9](e), l = !0, r || (o = [
        ue(i = Xe.call(
          null,
          t,
          /*list$use*/
          n[1]
        )),
        ue(a = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(p, [g]) {
      c && c.p && (!l || g & /*$$scope*/
      128) && Le(
        c,
        u,
        p,
        /*$$scope*/
        p[7],
        l ? Te(
          u,
          /*$$scope*/
          p[7],
          g,
          null
        ) : Oe(
          /*$$scope*/
          p[7]
        ),
        null
      ), de(t, h = $(d, [
        (!l || g & /*list$class*/
        4 && s !== (s = W({
          [
            /*list$class*/
            p[2]
          ]: !0,
          "mdc-menu__selection-group": !0
        }))) && { class: s },
        g & /*$$restProps*/
        32 && Ee(
          /*$$restProps*/
          p[5],
          "list$"
        )
      ])), i && ye(i.update) && g & /*list$use*/
      2 && i.update.call(
        null,
        /*list$use*/
        p[1]
      ), de(e, f = $(m, [g & /*$$restProps*/
      32 && hn(
        /*$$restProps*/
        p[5],
        ["list$"]
      )])), a && ye(a.update) && g & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      l || (O(c, p), l = !0);
    },
    o(p) {
      D(c, p), l = !1;
    },
    d(p) {
      p && Z(e), c && c.d(p), n[9](null), r = !1, We(o);
    }
  };
}
function Vr(n, e, t) {
  const s = ["use", "list$use", "list$class", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Ze(Re());
  let { use: o = [] } = e, { list$use: u = [] } = e, { list$class: c = "" } = e, d;
  Ge("SMUI:list:graphic:menu-selection-group", !0);
  function h() {
    return d;
  }
  function m(f) {
    oe[f ? "unshift" : "push"](() => {
      d = f, t(3, d);
    });
  }
  return n.$$set = (f) => {
    e = R(R({}, e), Ke(f)), t(5, i = re(e, s)), "use" in f && t(0, o = f.use), "list$use" in f && t(1, u = f.list$use), "list$class" in f && t(2, c = f.list$class), "$$scope" in f && t(7, l = f.$$scope);
  }, [
    o,
    u,
    c,
    d,
    r,
    i,
    h,
    l,
    a,
    m
  ];
}
class Gr extends ke {
  constructor(e) {
    super(), De(this, e, Vr, xr, Ae, {
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
Fe(Gr, { use: {}, list$use: {}, list$class: {} }, ["default"], ["getElement"], !0);
function zr(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].default
  ), s = Ce(
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
      4096) && Le(
        s,
        t,
        i,
        /*$$scope*/
        i[12],
        e ? Te(
          t,
          /*$$scope*/
          i[12],
          a,
          null
        ) : Oe(
          /*$$scope*/
          i[12]
        ),
        null
      );
    },
    i(i) {
      e || (O(s, i), e = !0);
    },
    o(i) {
      D(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function Wr(n) {
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
      $$slots: { default: [zr] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491)
      u = $(i, [
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
      for (let c = 0; c < i.length; c += 1)
        u = R(u, i[c]);
    return { props: u };
  }
  return a && (e = bt(a, l(n)), n[11](e)), {
    c() {
      e && ve(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && _e(e, r, o), Q(r, t, o), s = !0;
    },
    p(r, [o]) {
      if (o & /*component*/
      4 && a !== (a = /*component*/
      r[2])) {
        if (e) {
          $e();
          const u = e;
          D(u.$$.fragment, 1, 0, () => {
            Ie(u, 1);
          }), et();
        }
        a ? (e = bt(a, l(r, o)), r[11](e), ve(e.$$.fragment), O(e.$$.fragment, 1), _e(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? $(i, [
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
      s || (e && O(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && D(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Z(t), n[11](null), e && Ie(e, r);
    }
  };
}
function qr(n, e, t) {
  const s = ["use", "class", "component", "tag", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Ze(Re());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: d = pt } = e, { tag: h = d === pt ? "span" : void 0 } = e;
  const m = Pe("SMUI:label:context"), f = Pe("SMUI:label:tabindex");
  function p() {
    return c.getElement();
  }
  function g(b) {
    oe[b ? "unshift" : "push"](() => {
      c = b, t(4, c);
    });
  }
  return n.$$set = (b) => {
    e = R(R({}, e), Ke(b)), t(8, i = re(e, s)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "component" in b && t(2, d = b.component), "tag" in b && t(3, h = b.tag), "$$scope" in b && t(12, l = b.$$scope);
  }, [
    o,
    u,
    d,
    h,
    c,
    r,
    m,
    f,
    i,
    p,
    a,
    g,
    l
  ];
}
class Xr extends ke {
  constructor(e) {
    super(), De(this, e, qr, Wr, Ae, {
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
Fe(Xr, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function Kr(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), s = Ce(
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
      8192) && Le(
        s,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? Te(
          t,
          /*$$scope*/
          i[13],
          a,
          null
        ) : Oe(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (O(s, i), e = !0);
    },
    o(i) {
      D(s, i), e = !1;
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
      $$slots: { default: [Kr] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
    983)
      u = $(i, [
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
        i[3],
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
      for (let c = 0; c < i.length; c += 1)
        u = R(u, i[c]);
    return { props: u };
  }
  return a && (e = bt(a, l(n)), n[12](e)), {
    c() {
      e && ve(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && _e(e, r, o), Q(r, t, o), s = !0;
    },
    p(r, [o]) {
      if (o & /*component*/
      8 && a !== (a = /*component*/
      r[3])) {
        if (e) {
          $e();
          const u = e;
          D(u.$$.fragment, 1, 0, () => {
            Ie(u, 1);
          }), et();
        }
        a ? (e = bt(a, l(r, o)), r[12](e), ve(e.$$.fragment), O(e.$$.fragment, 1), _e(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, context, on, svg, $$restProps*/
        983 ? $(i, [
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
          i[3],
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
      s || (e && O(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && D(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Z(t), n[12](null), e && Ie(e, r);
    }
  };
}
function Qr(n, e, t) {
  const s = ["use", "class", "on", "component", "tag", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Ze(Re());
  let { use: o = [] } = e, { class: u = "" } = e, { on: c = !1 } = e, d, { component: h = pt } = e, { tag: m = h === pt ? "i" : void 0 } = e;
  const f = h === Ts, p = Pe("SMUI:icon:context");
  function g() {
    return d.getElement();
  }
  function b(E) {
    oe[E ? "unshift" : "push"](() => {
      d = E, t(5, d);
    });
  }
  return n.$$set = (E) => {
    e = R(R({}, e), Ke(E)), t(9, i = re(e, s)), "use" in E && t(0, o = E.use), "class" in E && t(1, u = E.class), "on" in E && t(2, c = E.on), "component" in E && t(3, h = E.component), "tag" in E && t(4, m = E.tag), "$$scope" in E && t(13, l = E.$$scope);
  }, [
    o,
    u,
    c,
    h,
    m,
    d,
    r,
    f,
    p,
    i,
    g,
    a,
    b,
    l
  ];
}
class Jr extends ke {
  constructor(e) {
    super(), De(this, e, Qr, Zr, Ae, {
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
Fe(Jr, { use: {}, class: {}, on: { type: "Boolean" }, component: {}, tag: {} }, ["default"], ["getElement"], !0);
function Yr(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, s, i = (
    /*tag*/
    n[1] && In(n)
  );
  return {
    c() {
      i && i.c(), t = ut();
    },
    m(a, l) {
      i && i.m(a, l), Q(a, t, l), s = !0;
    },
    p(a, l) {
      /*tag*/
      a[1] ? e ? Ae(
        e,
        /*tag*/
        a[1]
      ) ? (i.d(1), i = In(a), e = /*tag*/
      a[1], i.c(), i.m(t.parentNode, t)) : i.p(a, l) : (i = In(a), e = /*tag*/
      a[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      a[1]);
    },
    i(a) {
      s || (O(i, a), s = !0);
    },
    o(a) {
      D(i, a), s = !1;
    },
    d(a) {
      a && Z(t), i && i.d(a);
    }
  };
}
function $r(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, s = (
    /*tag*/
    n[1] && bn(n)
  );
  return {
    c() {
      s && s.c(), t = ut();
    },
    m(i, a) {
      s && s.m(i, a), Q(i, t, a);
    },
    p(i, a) {
      /*tag*/
      i[1] ? e ? Ae(
        e,
        /*tag*/
        i[1]
      ) ? (s.d(1), s = bn(i), e = /*tag*/
      i[1], s.c(), s.m(t.parentNode, t)) : s.p(i, a) : (s = bn(i), e = /*tag*/
      i[1], s.c(), s.m(t.parentNode, t)) : e && (s.d(1), s = null, e = /*tag*/
      i[1]);
    },
    i: tt,
    o: tt,
    d(i) {
      i && Z(t), s && s.d(i);
    }
  };
}
function ea(n) {
  let e, t, s, i, a;
  const l = (
    /*#slots*/
    n[8].default
  ), r = Ce(
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
    u = R(u, o[c]);
  return {
    c() {
      e = Jt("svg"), r && r.c(), dn(e, u);
    },
    m(c, d) {
      Q(c, e, d), r && r.m(e, null), n[9](e), s = !0, i || (a = [
        ue(t = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, d) {
      r && r.p && (!s || d & /*$$scope*/
      128) && Le(
        r,
        l,
        c,
        /*$$scope*/
        c[7],
        s ? Te(
          l,
          /*$$scope*/
          c[7],
          d,
          null
        ) : Oe(
          /*$$scope*/
          c[7]
        ),
        null
      ), dn(e, u = $(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && ye(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (O(r, c), s = !0);
    },
    o(c) {
      D(r, c), s = !1;
    },
    d(c) {
      c && Z(e), r && r.d(c), n[9](null), i = !1, We(a);
    }
  };
}
function In(n) {
  let e, t, s, i, a;
  const l = (
    /*#slots*/
    n[8].default
  ), r = Ce(
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
    u = R(u, o[c]);
  return {
    c() {
      e = Y(
        /*tag*/
        n[1]
      ), r && r.c(), fn(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, d) {
      Q(c, e, d), r && r.m(e, null), n[11](e), s = !0, i || (a = [
        ue(t = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, d) {
      r && r.p && (!s || d & /*$$scope*/
      128) && Le(
        r,
        l,
        c,
        /*$$scope*/
        c[7],
        s ? Te(
          l,
          /*$$scope*/
          c[7],
          d,
          null
        ) : Oe(
          /*$$scope*/
          c[7]
        ),
        null
      ), fn(
        /*tag*/
        c[1]
      )(e, u = $(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && ye(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (O(r, c), s = !0);
    },
    o(c) {
      D(r, c), s = !1;
    },
    d(c) {
      c && Z(e), r && r.d(c), n[11](null), i = !1, We(a);
    }
  };
}
function bn(n) {
  let e, t, s, i, a = [
    /*$$restProps*/
    n[5]
  ], l = {};
  for (let r = 0; r < a.length; r += 1)
    l = R(l, a[r]);
  return {
    c() {
      e = Y(
        /*tag*/
        n[1]
      ), fn(
        /*tag*/
        n[1]
      )(e, l);
    },
    m(r, o) {
      Q(r, e, o), n[10](e), s || (i = [
        ue(t = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], s = !0);
    },
    p(r, o) {
      fn(
        /*tag*/
        r[1]
      )(e, l = $(a, [o & /*$$restProps*/
      32 && /*$$restProps*/
      r[5]])), t && ye(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        r[0]
      );
    },
    d(r) {
      r && Z(e), n[10](null), s = !1, We(i);
    }
  };
}
function ta(n) {
  let e, t, s, i;
  const a = [ea, $r, Yr], l = [];
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
      t.c(), s = ut();
    },
    m(o, u) {
      l[e].m(o, u), Q(o, s, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = r(o), e === c ? l[e].p(o, u) : ($e(), D(l[c], 1, 1, () => {
        l[c] = null;
      }), et(), t = l[e], t ? t.p(o, u) : (t = l[e] = a[e](o), t.c()), O(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      i || (O(t), i = !0);
    },
    o(o) {
      D(t), i = !1;
    },
    d(o) {
      o && Z(s), l[e].d(o);
    }
  };
}
function na(n, e, t) {
  let s;
  const i = ["use", "tag", "getElement"];
  let a = re(e, i), { $$slots: l = {}, $$scope: r } = e, { use: o = [] } = e, { tag: u } = e;
  const c = Ze(Re());
  let d;
  function h() {
    return d;
  }
  function m(g) {
    oe[g ? "unshift" : "push"](() => {
      d = g, t(2, d);
    });
  }
  function f(g) {
    oe[g ? "unshift" : "push"](() => {
      d = g, t(2, d);
    });
  }
  function p(g) {
    oe[g ? "unshift" : "push"](() => {
      d = g, t(2, d);
    });
  }
  return n.$$set = (g) => {
    e = R(R({}, e), Ke(g)), t(5, a = re(e, i)), "use" in g && t(0, o = g.use), "tag" in g && t(1, u = g.tag), "$$scope" in g && t(7, r = g.$$scope);
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
    h,
    r,
    l,
    m,
    f,
    p
  ];
}
class pt extends ke {
  constructor(e) {
    super(), De(this, e, na, ta, Ae, { use: 0, tag: 1, getElement: 6 });
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
Fe(pt, { use: {}, tag: {} }, ["default"], ["getElement"], !0);
function sa(n) {
  let e, t, s, i, a;
  const l = (
    /*#slots*/
    n[6].default
  ), r = Ce(
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
    u = R(u, o[c]);
  return {
    c() {
      e = Jt("svg"), r && r.c(), dn(e, u);
    },
    m(c, d) {
      Q(c, e, d), r && r.m(e, null), n[7](e), s = !0, i || (a = [
        ue(t = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[2].call(null, e)
        )
      ], i = !0);
    },
    p(c, [d]) {
      r && r.p && (!s || d & /*$$scope*/
      32) && Le(
        r,
        l,
        c,
        /*$$scope*/
        c[5],
        s ? Te(
          l,
          /*$$scope*/
          c[5],
          d,
          null
        ) : Oe(
          /*$$scope*/
          c[5]
        ),
        null
      ), dn(e, u = $(o, [d & /*$$restProps*/
      8 && /*$$restProps*/
      c[3]])), t && ye(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      s || (O(r, c), s = !0);
    },
    o(c) {
      D(r, c), s = !1;
    },
    d(c) {
      c && Z(e), r && r.d(c), n[7](null), i = !1, We(a);
    }
  };
}
function ia(n, e, t) {
  const s = ["use", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let { use: r = [] } = e;
  const o = Ze(Re());
  let u;
  function c() {
    return u;
  }
  function d(h) {
    oe[h ? "unshift" : "push"](() => {
      u = h, t(1, u);
    });
  }
  return n.$$set = (h) => {
    e = R(R({}, e), Ke(h)), t(3, i = re(e, s)), "use" in h && t(0, r = h.use), "$$scope" in h && t(5, l = h.$$scope);
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
class Ts extends ke {
  constructor(e) {
    super(), De(this, e, ia, sa, Ae, { use: 0, getElement: 4 });
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
Fe(Ts, { use: {} }, ["default"], ["getElement"], !0);
function ra(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), s = Ce(
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
      8) && Le(
        s,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? Te(
          t,
          /*$$scope*/
          i[3],
          a,
          null
        ) : Oe(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (O(s, i), e = !0);
    },
    o(i) {
      D(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function aa(n, e, t) {
  let s, { $$slots: i = {}, $$scope: a } = e, { key: l } = e, { value: r } = e;
  const o = Ln(r);
  return $t(n, o, (u) => t(5, s = u)), Ge(l, o), jt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, l = u.key), "value" in u && t(2, r = u.value), "$$scope" in u && t(3, a = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && cn(o, s = r, s);
  }, [o, l, r, a, i];
}
class la extends ke {
  constructor(e) {
    super(), De(this, e, aa, ra, Ae, { key: 1, value: 2 });
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
Fe(la, { key: {}, value: {} }, ["default"], [], !0);
function oa(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), s = Ce(
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
      8192) && Le(
        s,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? Te(
          t,
          /*$$scope*/
          i[13],
          a,
          null
        ) : Oe(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (O(s, i), e = !0);
    },
    o(i) {
      D(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function ua(n) {
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
      $$slots: { default: [oa] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003)
      u = $(i, [
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
      for (let c = 0; c < i.length; c += 1)
        u = R(u, i[c]);
    return { props: u };
  }
  return a && (e = bt(a, l(n)), n[12](e)), {
    c() {
      e && ve(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && _e(e, r, o), Q(r, t, o), s = !0;
    },
    p(r, [o]) {
      if (o & /*component*/
      4 && a !== (a = /*component*/
      r[2])) {
        if (e) {
          $e();
          const u = e;
          D(u.$$.fragment, 1, 0, () => {
            Ie(u, 1);
          }), et();
        }
        a ? (e = bt(a, l(r, o)), r[12](e), ve(e.$$.fragment), O(e.$$.fragment, 1), _e(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? $(i, [
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
      s || (e && O(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && D(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Z(t), n[12](null), e && Ie(e, r);
    }
  };
}
const yt = {
  component: pt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function ca(n, e, t) {
  const s = ["use", "class", "component", "tag", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e, { use: r = [] } = e, { class: o = "" } = e, u;
  const c = yt.class, d = {}, h = [], m = yt.contexts, f = yt.props;
  let { component: p = yt.component } = e, { tag: g = p === pt ? yt.tag : void 0 } = e;
  Object.entries(yt.classMap).forEach(([C, L]) => {
    const P = Pe(L);
    P && "subscribe" in P && h.push(P.subscribe((y) => {
      t(5, d[C] = y, d);
    }));
  });
  const b = Ze(Re());
  for (let C in m)
    m.hasOwnProperty(C) && Ge(C, m[C]);
  jt(() => {
    for (const C of h)
      C();
  });
  function E() {
    return u.getElement();
  }
  function M(C) {
    oe[C ? "unshift" : "push"](() => {
      u = C, t(4, u);
    });
  }
  return n.$$set = (C) => {
    e = R(R({}, e), Ke(C)), t(9, i = re(e, s)), "use" in C && t(0, r = C.use), "class" in C && t(1, o = C.class), "component" in C && t(2, p = C.component), "tag" in C && t(3, g = C.tag), "$$scope" in C && t(13, l = C.$$scope);
  }, [
    r,
    o,
    p,
    g,
    u,
    d,
    c,
    f,
    b,
    i,
    E,
    a,
    M,
    l
  ];
}
class Ls extends ke {
  constructor(e) {
    super(), De(this, e, ca, ua, Ae, {
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
Fe(Ls, { use: {}, class: {}, component: {}, tag: {} }, ["default"], ["getElement"], !0);
const Kn = Object.assign({}, yt);
function Ht(n) {
  return new Proxy(Ls, {
    construct: function(e, t) {
      return Object.assign(yt, Kn, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(yt, Kn, n), e[t];
    }
  });
}
function da(n) {
  let e;
  const t = (
    /*#slots*/
    n[42].default
  ), s = Ce(
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
      8192) && Le(
        s,
        t,
        i,
        /*$$scope*/
        i[44],
        e ? Te(
          t,
          /*$$scope*/
          i[44],
          a,
          null
        ) : Oe(
          /*$$scope*/
          i[44]
        ),
        null
      );
    },
    i(i) {
      e || (O(s, i), e = !0);
    },
    o(i) {
      D(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function fa(n) {
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
      $$slots: { default: [da] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095)
      u = $(i, [
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
      for (let c = 0; c < i.length; c += 1)
        u = R(u, i[c]);
    return { props: u };
  }
  return a && (e = bt(a, l(n)), n[43](e), e.$on(
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
      e && ve(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && _e(e, r, o), Q(r, t, o), s = !0;
    },
    p(r, o) {
      if (o[0] & /*component*/
      4096 && a !== (a = /*component*/
      r[12])) {
        if (e) {
          $e();
          const u = e;
          D(u.$$.fragment, 1, 0, () => {
            Ie(u, 1);
          }), et();
        }
        a ? (e = bt(a, l(r, o)), r[43](e), e.$on(
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
        ), ve(e.$$.fragment), O(e.$$.fragment, 1), _e(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
        33796095 ? $(i, [
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
      s || (e && O(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && D(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Z(t), n[43](null), e && Ie(e, r);
    }
  };
}
function ha(n, e, t) {
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
  const { closest: o, matches: u } = Mn, c = Ze(Re());
  let { use: d = [] } = e, { class: h = "" } = e, { nonInteractive: m = !1 } = e, { dense: f = !1 } = e, { textualList: p = !1 } = e, { avatarList: g = !1 } = e, { iconList: b = !1 } = e, { imageList: E = !1 } = e, { thumbnailList: M = !1 } = e, { videoList: C = !1 } = e, { twoLine: L = !1 } = e, { threeLine: P = !1 } = e, { vertical: y = !0 } = e, { wrapFocus: j = (r = Pe("SMUI:list:wrapFocus")) !== null && r !== void 0 ? r : !1 } = e, { singleSelection: te = !1 } = e, { disabledItemsFocusable: U = !1 } = e, { selectedIndex: F = -1 } = e, { radioList: w = !1 } = e, { checkList: z = !1 } = e, { hasTypeahead: T = !1 } = e, k, x, Se = [], N = Pe("SMUI:list:role"), ge = Pe("SMUI:list:nav");
  const Ne = /* @__PURE__ */ new WeakMap();
  let qe = Pe("SMUI:dialog:selection"), ae = Pe("SMUI:addLayoutListener"), nt, { component: it = pt } = e, { tag: H = it === pt ? ge ? "nav" : "ul" : void 0 } = e;
  Ge("SMUI:list:nonInteractive", m), Ge("SMUI:separator:context", "list"), N || (te ? (N = "listbox", Ge("SMUI:list:item:role", "option")) : w ? (N = "radiogroup", Ge("SMUI:list:item:role", "radio")) : z ? (N = "group", Ge("SMUI:list:item:role", "checkbox")) : (N = "list", Ge("SMUI:list:item:role", void 0))), ae && (nt = ae(_t)), vt(() => {
    t(41, x = new dr({
      addClassForElementIndex: A,
      focusItemAtIndex: B,
      getAttributeForElementIndex: (G, V) => {
        var be, Rt;
        return (Rt = (be = pe()[G]) === null || be === void 0 ? void 0 : be.getAttr(V)) !== null && Rt !== void 0 ? Rt : null;
      },
      getFocusedElementIndex: () => document.activeElement ? pe().map((G) => G.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => Se.length,
      getPrimaryTextAtIndex: dt,
      hasCheckboxAtIndex: (G) => {
        var V, be;
        return (be = (V = pe()[G]) === null || V === void 0 ? void 0 : V.hasCheckbox) !== null && be !== void 0 ? be : !1;
      },
      hasRadioAtIndex: (G) => {
        var V, be;
        return (be = (V = pe()[G]) === null || V === void 0 ? void 0 : V.hasRadio) !== null && be !== void 0 ? be : !1;
      },
      isCheckboxCheckedAtIndex: (G) => {
        var V;
        const be = pe()[G];
        return (V = (be == null ? void 0 : be.hasCheckbox) && be.checked) !== null && V !== void 0 ? V : !1;
      },
      isFocusInsideList: () => k != null && Ye() !== document.activeElement && Ye().contains(document.activeElement),
      isRootFocused: () => k != null && document.activeElement === Ye(),
      listItemAtIndexHasClass: lt,
      notifyAction: (G) => {
        t(26, F = G), k != null && ze(Ye(), "SMUIList:action", { index: G }, void 0, !0);
      },
      notifySelectionChange: (G) => {
        k != null && ze(Ye(), "SMUIList:selectionChange", { changedIndices: G });
      },
      removeClassForElementIndex: X,
      setAttributeForElementIndex: J,
      setCheckedCheckboxOrRadioAtIndex: (G, V) => {
        pe()[G].checked = V;
      },
      setTabIndexForListItemChildren: (G, V) => {
        const be = pe()[G], Rt = "button:not(:disabled), a";
        Array.prototype.forEach.call(be.element.querySelectorAll(Rt), (pn) => {
          pn.setAttribute("tabindex", V);
        });
      }
    }));
    const v = {
      get element() {
        return Ye();
      },
      get items() {
        return Se;
      },
      get typeaheadInProgress() {
        return x.isTypeaheadInProgress();
      },
      typeaheadMatchItem(G, V) {
        return x.typeaheadMatchItem(
          G,
          V,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: pe,
      focusItemAtIndex: B,
      addClassForElementIndex: A,
      removeClassForElementIndex: X,
      setAttributeForElementIndex: J,
      removeAttributeForElementIndex: gt,
      getAttributeFromElementIndex: Qe,
      getPrimaryTextAtIndex: dt
    };
    return ze(Ye(), "SMUIList:mount", v), x.init(), x.layout(), () => {
      x.destroy();
    };
  }), jt(() => {
    nt && nt();
  });
  function he(v) {
    Se.push(v.detail), Ne.set(v.detail.element, v.detail), te && v.detail.selected && t(26, F = ft(v.detail.element)), v.stopPropagation();
  }
  function fe(v) {
    var G;
    const V = (G = v.detail && Se.indexOf(v.detail)) !== null && G !== void 0 ? G : -1;
    V !== -1 && (Se.splice(V, 1), Se = Se, Ne.delete(v.detail.element)), v.stopPropagation();
  }
  function ce(v) {
    x && v.target && x.handleKeydown(v, v.target.classList.contains("mdc-deprecated-list-item"), ft(v.target));
  }
  function xe(v) {
    x && v.target && x.handleFocusIn(ft(v.target));
  }
  function S(v) {
    x && v.target && x.handleFocusOut(ft(v.target));
  }
  function ne(v) {
    x && v.target && x.handleClick(ft(v.target), !u(v.target, 'input[type="checkbox"], input[type="radio"]'), v);
  }
  function Ue(v) {
    if (w || z) {
      const G = ft(v.target);
      if (G !== -1) {
        const V = pe()[G];
        V && (w && !V.checked || z) && (u(v.detail.target, 'input[type="checkbox"], input[type="radio"]') || (V.checked = !V.checked), V.activateRipple(), window.requestAnimationFrame(() => {
          V.deactivateRipple();
        }));
      }
    }
  }
  function pe() {
    return k == null ? [] : [...Ye().children].map((v) => Ne.get(v)).filter((v) => v && v._smui_list_item_accessor);
  }
  function lt(v, G) {
    var V;
    const be = pe()[v];
    return (V = be && be.hasClass(G)) !== null && V !== void 0 ? V : !1;
  }
  function A(v, G) {
    const V = pe()[v];
    V && V.addClass(G);
  }
  function X(v, G) {
    const V = pe()[v];
    V && V.removeClass(G);
  }
  function J(v, G, V) {
    const be = pe()[v];
    be && be.addAttr(G, V);
  }
  function gt(v, G) {
    const V = pe()[v];
    V && V.removeAttr(G);
  }
  function Qe(v, G) {
    const V = pe()[v];
    return V ? V.getAttr(G) : null;
  }
  function dt(v) {
    var G;
    const V = pe()[v];
    return (G = V && V.getPrimaryText()) !== null && G !== void 0 ? G : "";
  }
  function ft(v) {
    const G = o(v, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return G && u(G, ".mdc-deprecated-list-item") ? pe().map((V) => V == null ? void 0 : V.element).indexOf(G) : -1;
  }
  function _t() {
    return x.layout();
  }
  function Je(v, G) {
    return x.setEnabled(v, G);
  }
  function st() {
    return x.isTypeaheadInProgress();
  }
  function me() {
    return x.getSelectedIndex();
  }
  function q() {
    return x.getFocusedItemIndex();
  }
  function B(v) {
    const G = pe()[v];
    G && "focus" in G.element && G.element.focus();
  }
  function Ye() {
    return k.getElement();
  }
  function mn(v) {
    oe[v ? "unshift" : "push"](() => {
      k = v, t(14, k);
    });
  }
  return n.$$set = (v) => {
    e = R(R({}, e), Ke(v)), t(25, i = re(e, s)), "use" in v && t(0, d = v.use), "class" in v && t(1, h = v.class), "nonInteractive" in v && t(2, m = v.nonInteractive), "dense" in v && t(3, f = v.dense), "textualList" in v && t(4, p = v.textualList), "avatarList" in v && t(5, g = v.avatarList), "iconList" in v && t(6, b = v.iconList), "imageList" in v && t(7, E = v.imageList), "thumbnailList" in v && t(8, M = v.thumbnailList), "videoList" in v && t(9, C = v.videoList), "twoLine" in v && t(10, L = v.twoLine), "threeLine" in v && t(11, P = v.threeLine), "vertical" in v && t(27, y = v.vertical), "wrapFocus" in v && t(28, j = v.wrapFocus), "singleSelection" in v && t(29, te = v.singleSelection), "disabledItemsFocusable" in v && t(30, U = v.disabledItemsFocusable), "selectedIndex" in v && t(26, F = v.selectedIndex), "radioList" in v && t(31, w = v.radioList), "checkList" in v && t(32, z = v.checkList), "hasTypeahead" in v && t(33, T = v.hasTypeahead), "component" in v && t(12, it = v.component), "tag" in v && t(13, H = v.tag), "$$scope" in v && t(44, l = v.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*vertical*/
    134217728 | n.$$.dirty[1] & /*instance*/
    1024 && x && x.setVerticalOrientation(y), n.$$.dirty[0] & /*wrapFocus*/
    268435456 | n.$$.dirty[1] & /*instance*/
    1024 && x && x.setWrapFocus(j), n.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && x && x.setHasTypeahead(T), n.$$.dirty[0] & /*singleSelection*/
    536870912 | n.$$.dirty[1] & /*instance*/
    1024 && x && x.setSingleSelection(te), n.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | n.$$.dirty[1] & /*instance*/
    1024 && x && x.setDisabledItemsFocusable(U), n.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | n.$$.dirty[1] & /*instance*/
    1024 && x && te && me() !== F && x.setSelectedIndex(F);
  }, [
    d,
    h,
    m,
    f,
    p,
    g,
    b,
    E,
    M,
    C,
    L,
    P,
    it,
    H,
    k,
    N,
    c,
    qe,
    he,
    fe,
    ce,
    xe,
    S,
    ne,
    Ue,
    i,
    F,
    y,
    j,
    te,
    U,
    w,
    z,
    T,
    _t,
    Je,
    st,
    me,
    q,
    B,
    Ye,
    x,
    a,
    mn,
    l
  ];
}
class Os extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      ha,
      fa,
      Ae,
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
  Os,
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
function Zn(n) {
  let e;
  return {
    c() {
      e = Y("span"), ie(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(t, s) {
      Q(t, e, s);
    },
    d(t) {
      t && Z(e);
    }
  };
}
function ma(n) {
  let e, t, s = (
    /*ripple*/
    n[7] && Zn()
  );
  const i = (
    /*#slots*/
    n[34].default
  ), a = Ce(
    i,
    n,
    /*$$scope*/
    n[37],
    null
  );
  return {
    c() {
      s && s.c(), e = ut(), a && a.c();
    },
    m(l, r) {
      s && s.m(l, r), Q(l, e, r), a && a.m(l, r), t = !0;
    },
    p(l, r) {
      /*ripple*/
      l[7] ? s || (s = Zn(), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), a && a.p && (!t || r[1] & /*$$scope*/
      64) && Le(
        a,
        i,
        l,
        /*$$scope*/
        l[37],
        t ? Te(
          i,
          /*$$scope*/
          l[37],
          r,
          null
        ) : Oe(
          /*$$scope*/
          l[37]
        ),
        null
      );
    },
    i(l) {
      t || (O(a, l), t = !0);
    },
    o(l) {
      D(a, l), t = !1;
    },
    d(l) {
      l && Z(e), s && s.d(l), a && a.d(l);
    }
  };
}
function pa(n) {
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
      $$slots: { default: [ma] },
      $$scope: { ctx: r }
    };
    if (o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479)
      u = $(i, [
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
      for (let c = 0; c < i.length; c += 1)
        u = R(u, i[c]);
    return { props: u };
  }
  return a && (e = bt(a, l(n)), n[35](e), e.$on(
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
      e && ve(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && _e(e, r, o), Q(r, t, o), s = !0;
    },
    p(r, o) {
      if (o[0] & /*component*/
      8192 && a !== (a = /*component*/
      r[13])) {
        if (e) {
          $e();
          const u = e;
          D(u.$$.fragment, 1, 0, () => {
            Ie(u, 1);
          }), et();
        }
        a ? (e = bt(a, l(r, o)), r[35](e), e.$on(
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
        ), ve(e.$$.fragment), O(e.$$.fragment, 1), _e(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
        670916479 ? $(i, [
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
      s || (e && O(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && D(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Z(t), n[35](null), e && Ie(e, r);
    }
  };
}
let ga = 0;
const En = ([n, e]) => `${n}: ${e};`;
function _a(n, e, t) {
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
  const u = Ze(Re());
  let c = () => {
  };
  function d(A) {
    return A === c;
  }
  let { use: h = [] } = e, { class: m = "" } = e, { style: f = "" } = e, { color: p = void 0 } = e, { nonInteractive: g = (o = Pe("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  Ge("SMUI:list:nonInteractive", void 0);
  let { ripple: b = !g } = e, { wrapper: E = !1 } = e, { activated: M = !1 } = e, { role: C = E ? "presentation" : Pe("SMUI:list:item:role") } = e;
  Ge("SMUI:list:item:role", void 0);
  let { selected: L = !1 } = e, { disabled: P = !1 } = e, { skipRestoreFocus: y = !1 } = e, { tabindex: j = c } = e, { inputId: te = "SMUI-form-field-list-" + ga++ } = e, { href: U = void 0 } = e, F, w = {}, z = {}, T = {}, k, x, Se = Pe("SMUI:list:item:nav"), { component: N = pt } = e, { tag: ge = N === pt ? Se ? U ? "a" : "span" : "li" : void 0 } = e;
  Ge("SMUI:generic:input:props", { id: te }), Ge("SMUI:separator:context", void 0), vt(() => {
    if (!L && !g) {
      let X = !0, J = F.getElement();
      for (; J.previousSibling; )
        if (J = J.previousSibling, J.nodeType === 1 && J.classList.contains("mdc-deprecated-list-item") && !J.classList.contains("mdc-deprecated-list-item--disabled")) {
          X = !1;
          break;
        }
      X && (x = window.requestAnimationFrame(() => fe(J)));
    }
    const A = {
      _smui_list_item_accessor: !0,
      get element() {
        return Ue();
      },
      get selected() {
        return L;
      },
      set selected(X) {
        t(0, L = X);
      },
      hasClass: Ne,
      addClass: qe,
      removeClass: ae,
      getAttr: it,
      addAttr: H,
      removeAttr: he,
      getPrimaryText: ne,
      // For inputs within item.
      get checked() {
        var X;
        return (X = k && k.checked) !== null && X !== void 0 ? X : !1;
      },
      set checked(X) {
        k && t(16, k.checked = !!X, k);
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
      action: S,
      get tabindex() {
        return s;
      },
      set tabindex(X) {
        t(30, j = X);
      },
      get disabled() {
        return P;
      },
      get activated() {
        return M;
      },
      set activated(X) {
        t(1, M = X);
      }
    };
    return ze(Ue(), "SMUIListItem:mount", A), () => {
      ze(Ue(), "SMUIListItem:unmount", A);
    };
  }), jt(() => {
    x && window.cancelAnimationFrame(x);
  });
  function Ne(A) {
    return A in w ? w[A] : Ue().classList.contains(A);
  }
  function qe(A) {
    w[A] || t(18, w[A] = !0, w);
  }
  function ae(A) {
    (!(A in w) || w[A]) && t(18, w[A] = !1, w);
  }
  function nt(A, X) {
    z[A] != X && (X === "" || X == null ? (delete z[A], t(19, z)) : t(19, z[A] = X, z));
  }
  function it(A) {
    var X;
    return A in T ? (X = T[A]) !== null && X !== void 0 ? X : null : Ue().getAttribute(A);
  }
  function H(A, X) {
    T[A] !== X && t(20, T[A] = X, T);
  }
  function he(A) {
    (!(A in T) || T[A] != null) && t(20, T[A] = void 0, T);
  }
  function fe(A) {
    let X = !0;
    for (; A.nextElementSibling; )
      if (A = A.nextElementSibling, A.nodeType === 1 && A.classList.contains("mdc-deprecated-list-item")) {
        const J = A.attributes.getNamedItem("tabindex");
        if (J && J.value === "0") {
          X = !1;
          break;
        }
      }
    X && t(21, s = 0);
  }
  function ce(A) {
    const X = A.key === "Enter", J = A.key === "Space";
    (X || J) && S(A);
  }
  function xe(A) {
    ("_smui_checkbox_accessor" in A.detail || "_smui_radio_accessor" in A.detail) && t(16, k = A.detail);
  }
  function S(A) {
    P || ze(Ue(), "SMUI:action", A);
  }
  function ne() {
    var A, X, J;
    const gt = Ue(), Qe = gt.querySelector(".mdc-deprecated-list-item__primary-text");
    if (Qe)
      return (A = Qe.textContent) !== null && A !== void 0 ? A : "";
    const dt = gt.querySelector(".mdc-deprecated-list-item__text");
    return dt ? (X = dt.textContent) !== null && X !== void 0 ? X : "" : (J = gt.textContent) !== null && J !== void 0 ? J : "";
  }
  function Ue() {
    return F.getElement();
  }
  function pe(A) {
    oe[A ? "unshift" : "push"](() => {
      F = A, t(17, F);
    });
  }
  const lt = () => t(16, k = void 0);
  return n.$$set = (A) => {
    e = R(R({}, e), Ke(A)), t(29, a = re(e, i)), "use" in A && t(2, h = A.use), "class" in A && t(3, m = A.class), "style" in A && t(4, f = A.style), "color" in A && t(5, p = A.color), "nonInteractive" in A && t(6, g = A.nonInteractive), "ripple" in A && t(7, b = A.ripple), "wrapper" in A && t(8, E = A.wrapper), "activated" in A && t(1, M = A.activated), "role" in A && t(9, C = A.role), "selected" in A && t(0, L = A.selected), "disabled" in A && t(10, P = A.disabled), "skipRestoreFocus" in A && t(11, y = A.skipRestoreFocus), "tabindex" in A && t(30, j = A.tabindex), "inputId" in A && t(31, te = A.inputId), "href" in A && t(12, U = A.href), "component" in A && t(13, N = A.component), "tag" in A && t(14, ge = A.tag), "$$scope" in A && t(37, r = A.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && t(21, s = d(j) ? !g && !P && (L || k && k.checked) ? 0 : -1 : j);
  }, [
    L,
    M,
    h,
    m,
    f,
    p,
    g,
    b,
    E,
    C,
    P,
    y,
    U,
    N,
    ge,
    S,
    k,
    F,
    w,
    z,
    T,
    s,
    u,
    Se,
    qe,
    ae,
    nt,
    ce,
    xe,
    a,
    j,
    te,
    ne,
    Ue,
    l,
    pe,
    lt,
    r
  ];
}
class Ms extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      _a,
      pa,
      Ae,
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
Fe(Ms, { use: {}, class: {}, style: {}, color: {}, nonInteractive: {}, ripple: {}, wrapper: { type: "Boolean" }, activated: { type: "Boolean" }, role: {}, selected: { type: "Boolean" }, disabled: { type: "Boolean" }, skipRestoreFocus: { type: "Boolean" }, tabindex: {}, inputId: {}, href: {}, component: {}, tag: {} }, ["default"], ["action", "getPrimaryText", "getElement"], !0);
Ht({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Ht({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Ht({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Ia(n) {
  let e, t, s, i, a, l;
  const r = (
    /*#slots*/
    n[8].default
  ), o = Ce(
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
    c = R(c, u[d]);
  return {
    c() {
      e = Y("span"), o && o.c(), de(e, c);
    },
    m(d, h) {
      Q(d, e, h), o && o.m(e, null), n[9](e), i = !0, a || (l = [
        ue(s = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], a = !0);
    },
    p(d, [h]) {
      o && o.p && (!i || h & /*$$scope*/
      128) && Le(
        o,
        r,
        d,
        /*$$scope*/
        d[7],
        i ? Te(
          r,
          /*$$scope*/
          d[7],
          h,
          null
        ) : Oe(
          /*$$scope*/
          d[7]
        ),
        null
      ), de(e, c = $(u, [
        (!i || h & /*className*/
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
        h & /*$$restProps*/
        32 && /*$$restProps*/
        d[5]
      ])), s && ye(s.update) && h & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      i || (O(o, d), i = !0);
    },
    o(d) {
      D(o, d), i = !1;
    },
    d(d) {
      d && Z(e), o && o.d(d), n[9](null), a = !1, We(l);
    }
  };
}
function ba(n, e, t) {
  const s = ["use", "class", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Ze(Re());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = Pe("SMUI:list:graphic:menu-selection-group");
  function h() {
    return c;
  }
  function m(f) {
    oe[f ? "unshift" : "push"](() => {
      c = f, t(2, c);
    });
  }
  return n.$$set = (f) => {
    e = R(R({}, e), Ke(f)), t(5, i = re(e, s)), "use" in f && t(0, o = f.use), "class" in f && t(1, u = f.class), "$$scope" in f && t(7, l = f.$$scope);
  }, [
    o,
    u,
    c,
    r,
    d,
    i,
    h,
    l,
    a,
    m
  ];
}
class Rs extends ke {
  constructor(e) {
    super(), De(this, e, ba, Ia, Ae, { use: 0, class: 1, getElement: 6 });
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
Fe(Rs, { use: {}, class: {} }, ["default"], ["getElement"], !0);
Ht({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
function Ea(n) {
  let e, t, s, i, a, l, r;
  const o = (
    /*#slots*/
    n[8].default
  ), u = Ce(
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
      for: s = /*inputProps*/
      n[4] ? (
        /*inputProps*/
        n[4].id
      ) : void 0
    },
    /*$$restProps*/
    n[5]
  ], d = {};
  for (let h = 0; h < c.length; h += 1)
    d = R(d, c[h]);
  return {
    c() {
      e = Y("label"), u && u.c(), de(e, d);
    },
    m(h, m) {
      Q(h, e, m), u && u.m(e, null), n[9](e), a = !0, l || (r = [
        ue(i = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], l = !0);
    },
    p(h, [m]) {
      u && u.p && (!a || m & /*$$scope*/
      128) && Le(
        u,
        o,
        h,
        /*$$scope*/
        h[7],
        a ? Te(
          o,
          /*$$scope*/
          h[7],
          m,
          null
        ) : Oe(
          /*$$scope*/
          h[7]
        ),
        null
      ), de(e, d = $(c, [
        (!a || m & /*className*/
        2 && t !== (t = W({
          [
            /*className*/
            h[1]
          ]: !0,
          "mdc-deprecated-list-item__text": !0
        }))) && { class: t },
        { for: s },
        m & /*$$restProps*/
        32 && /*$$restProps*/
        h[5]
      ])), i && ye(i.update) && m & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (O(u, h), a = !0);
    },
    o(h) {
      D(u, h), a = !1;
    },
    d(h) {
      h && Z(e), u && u.d(h), n[9](null), l = !1, We(r);
    }
  };
}
function va(n, e, t) {
  const s = ["use", "class", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  var r;
  const o = Ze(Re());
  let { use: u = [] } = e, { class: c = "" } = e, d, h = (r = Pe("SMUI:generic:input:props")) !== null && r !== void 0 ? r : {};
  function m() {
    return d;
  }
  function f(p) {
    oe[p ? "unshift" : "push"](() => {
      d = p, t(2, d);
    });
  }
  return n.$$set = (p) => {
    e = R(R({}, e), Ke(p)), t(5, i = re(e, s)), "use" in p && t(0, u = p.use), "class" in p && t(1, c = p.class), "$$scope" in p && t(7, l = p.$$scope);
  }, [
    u,
    c,
    d,
    o,
    h,
    i,
    m,
    l,
    a,
    f
  ];
}
class Aa extends ke {
  constructor(e) {
    super(), De(this, e, va, Ea, Ae, { use: 0, class: 1, getElement: 6 });
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
Fe(Aa, { use: {}, class: {} }, ["default"], ["getElement"], !0);
Ht({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Ht({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
function Sa(n) {
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
      u = $(i, [
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
        i[3],
        o & /*$$restProps*/
        2048 && se(
          /*$$restProps*/
          r[11]
        )
      ]);
    else
      for (let c = 0; c < i.length; c += 1)
        u = R(u, i[c]);
    return { props: u };
  }
  return a && (e = bt(a, l(n)), n[13](e)), {
    c() {
      e && ve(e.$$.fragment), t = ut();
    },
    m(r, o) {
      e && _e(e, r, o), Q(r, t, o), s = !0;
    },
    p(r, [o]) {
      if (o & /*component*/
      128 && a !== (a = /*component*/
      r[7])) {
        if (e) {
          $e();
          const u = e;
          D(u.$$.fragment, 1, 0, () => {
            Ie(u, 1);
          }), et();
        }
        a ? (e = bt(a, l(r, o)), r[13](e), ve(e.$$.fragment), O(e.$$.fragment, 1), _e(e, t.parentNode, t)) : e = null;
      } else if (a) {
        const u = o & /*tag, forwardEvents, use, className, padded, inset, insetLeading, insetTrailing, insetPadding, $$restProps*/
        3455 ? $(i, [
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
          i[3],
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
      s || (e && O(e.$$.fragment, r), s = !0);
    },
    o(r) {
      e && D(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && Z(t), n[13](null), e && Ie(e, r);
    }
  };
}
function ya(n, e, t) {
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
  const a = Ze(Re());
  let { use: l = [] } = e, { class: r = "" } = e, { padded: o = !1 } = e, { inset: u = !1 } = e, { insetLeading: c = !1 } = e, { insetTrailing: d = !1 } = e, { insetPadding: h = !1 } = e, m, f = Pe("SMUI:list:item:nav"), p = Pe("SMUI:separator:context"), { component: g = pt } = e, { tag: b = g === pt ? f || p !== "list" ? "hr" : "li" : void 0 } = e;
  function E() {
    return m.getElement();
  }
  function M(C) {
    oe[C ? "unshift" : "push"](() => {
      m = C, t(9, m);
    });
  }
  return n.$$set = (C) => {
    e = R(R({}, e), Ke(C)), t(11, i = re(e, s)), "use" in C && t(0, l = C.use), "class" in C && t(1, r = C.class), "padded" in C && t(2, o = C.padded), "inset" in C && t(3, u = C.inset), "insetLeading" in C && t(4, c = C.insetLeading), "insetTrailing" in C && t(5, d = C.insetTrailing), "insetPadding" in C && t(6, h = C.insetPadding), "component" in C && t(7, g = C.component), "tag" in C && t(8, b = C.tag);
  }, [
    l,
    r,
    o,
    u,
    c,
    d,
    h,
    g,
    b,
    m,
    a,
    i,
    E,
    M
  ];
}
class Ca extends ke {
  constructor(e) {
    super(), De(this, e, ya, Sa, Ae, {
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
Fe(Ca, { use: {}, class: {}, padded: { type: "Boolean" }, inset: { type: "Boolean" }, insetLeading: { type: "Boolean" }, insetTrailing: { type: "Boolean" }, insetPadding: { type: "Boolean" }, component: {}, tag: {} }, [], ["getElement"], !0);
Ht({
  class: "mdc-menu__selection-group-icon",
  component: Rs
});
function Ta(n) {
  let e, t, s, i, a, l, r, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = Ce(
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
      style: s = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(Jn).concat([
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
  ], h = {};
  for (let m = 0; m < d.length; m += 1)
    h = R(h, d[m]);
  return {
    c() {
      e = Y("label"), c && c.c(), de(e, h);
    },
    m(m, f) {
      Q(m, e, f), c && c.m(e, null), n[24](e), l = !0, r || (o = [
        ue(a = Xe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ue(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], r = !0);
    },
    p(m, f) {
      c && c.p && (!l || f & /*$$scope*/
      2097152) && Le(
        c,
        u,
        m,
        /*$$scope*/
        m[21],
        l ? Te(
          u,
          /*$$scope*/
          m[21],
          f,
          null
        ) : Oe(
          /*$$scope*/
          m[21]
        ),
        null
      ), de(e, h = $(d, [
        (!l || f & /*className, floatAbove, required, internalClasses*/
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
        (!l || f & /*internalStyles, style*/
        528 && s !== (s = Object.entries(
          /*internalStyles*/
          m[9]
        ).map(Jn).concat([
          /*style*/
          m[4]
        ]).join(" "))) && { style: s },
        (!l || f & /*forId*/
        32 && i !== (i = /*forId*/
        m[5] || /*inputProps*/
        (m[11] ? (
          /*inputProps*/
          m[11].id
        ) : void 0))) && { for: i },
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        m[12]
      ])), a && ye(a.update) && f & /*use*/
      4 && a.update.call(
        null,
        /*use*/
        m[2]
      );
    },
    i(m) {
      l || (O(c, m), l = !0);
    },
    o(m) {
      D(c, m), l = !1;
    },
    d(m) {
      m && Z(e), c && c.d(m), n[24](null), r = !1, We(o);
    }
  };
}
function La(n) {
  let e, t, s, i, a, l, r;
  const o = (
    /*#slots*/
    n[22].default
  ), u = Ce(
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
      style: s = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(Qn).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let h = 0; h < c.length; h += 1)
    d = R(d, c[h]);
  return {
    c() {
      e = Y("span"), u && u.c(), de(e, d);
    },
    m(h, m) {
      Q(h, e, m), u && u.m(e, null), n[23](e), a = !0, l || (r = [
        ue(i = Xe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ue(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], l = !0);
    },
    p(h, m) {
      u && u.p && (!a || m & /*$$scope*/
      2097152) && Le(
        u,
        o,
        h,
        /*$$scope*/
        h[21],
        a ? Te(
          o,
          /*$$scope*/
          h[21],
          m,
          null
        ) : Oe(
          /*$$scope*/
          h[21]
        ),
        null
      ), de(e, d = $(c, [
        (!a || m & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = W({
          [
            /*className*/
            h[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            h[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            h[1]
          ),
          .../*internalClasses*/
          h[8]
        }))) && { class: t },
        (!a || m & /*internalStyles, style*/
        528 && s !== (s = Object.entries(
          /*internalStyles*/
          h[9]
        ).map(Qn).concat([
          /*style*/
          h[4]
        ]).join(" "))) && { style: s },
        m & /*$$restProps*/
        4096 && /*$$restProps*/
        h[12]
      ])), i && ye(i.update) && m & /*use*/
      4 && i.update.call(
        null,
        /*use*/
        h[2]
      );
    },
    i(h) {
      a || (O(u, h), a = !0);
    },
    o(h) {
      D(u, h), a = !1;
    },
    d(h) {
      h && Z(e), u && u.d(h), n[23](null), l = !1, We(r);
    }
  };
}
function Oa(n) {
  let e, t, s, i;
  const a = [La, Ta], l = [];
  function r(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = r(n), t = l[e] = a[e](n), {
    c() {
      t.c(), s = ut();
    },
    m(o, u) {
      l[e].m(o, u), Q(o, s, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = r(o), e === c ? l[e].p(o, u) : ($e(), D(l[c], 1, 1, () => {
        l[c] = null;
      }), et(), t = l[e], t ? t.p(o, u) : (t = l[e] = a[e](o), t.c()), O(t, 1), t.m(s.parentNode, s));
    },
    i(o) {
      i || (O(t), i = !0);
    },
    o(o) {
      D(t), i = !1;
    },
    d(o) {
      o && Z(s), l[e].d(o);
    }
  };
}
const Qn = ([n, e]) => `${n}: ${e};`, Jn = ([n, e]) => `${n}: ${e};`;
function Ma(n, e, t) {
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
  const o = Ze(Re());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { for: h = void 0 } = e, { floatAbove: m = !1 } = e, { required: f = !1 } = e, { wrapped: p = !1 } = e, g, b, E = {}, M = {}, C = (r = Pe("SMUI:generic:input:props")) !== null && r !== void 0 ? r : {}, L = m, P = f;
  vt(() => {
    t(18, b = new er({
      addClass: y,
      removeClass: j,
      getWidth: () => {
        var ge, Ne;
        const qe = k(), ae = qe.cloneNode(!0);
        (ge = qe.parentNode) === null || ge === void 0 || ge.appendChild(ae), ae.classList.add("smui-floating-label--remove-transition"), ae.classList.add("smui-floating-label--force-size"), ae.classList.remove("mdc-floating-label--float-above");
        const nt = ae.scrollWidth;
        return (Ne = qe.parentNode) === null || Ne === void 0 || Ne.removeChild(ae), nt;
      },
      registerInteractionHandler: (ge, Ne) => k().addEventListener(ge, Ne),
      deregisterInteractionHandler: (ge, Ne) => k().removeEventListener(ge, Ne)
    }));
    const N = {
      get element() {
        return k();
      },
      addStyle: te,
      removeStyle: U
    };
    return ze(g, "SMUIFloatingLabel:mount", N), b.init(), () => {
      ze(g, "SMUIFloatingLabel:unmount", N), b.destroy();
    };
  });
  function y(N) {
    E[N] || t(8, E[N] = !0, E);
  }
  function j(N) {
    (!(N in E) || E[N]) && t(8, E[N] = !1, E);
  }
  function te(N, ge) {
    M[N] != ge && (ge === "" || ge == null ? (delete M[N], t(9, M)) : t(9, M[N] = ge, M));
  }
  function U(N) {
    N in M && (delete M[N], t(9, M));
  }
  function F(N) {
    b.shake(N);
  }
  function w(N) {
    t(0, m = N);
  }
  function z(N) {
    t(1, f = N);
  }
  function T() {
    return b.getWidth();
  }
  function k() {
    return g;
  }
  function x(N) {
    oe[N ? "unshift" : "push"](() => {
      g = N, t(7, g);
    });
  }
  function Se(N) {
    oe[N ? "unshift" : "push"](() => {
      g = N, t(7, g);
    });
  }
  return n.$$set = (N) => {
    e = R(R({}, e), Ke(N)), t(12, i = re(e, s)), "use" in N && t(2, u = N.use), "class" in N && t(3, c = N.class), "style" in N && t(4, d = N.style), "for" in N && t(5, h = N.for), "floatAbove" in N && t(0, m = N.floatAbove), "required" in N && t(1, f = N.required), "wrapped" in N && t(6, p = N.wrapped), "$$scope" in N && t(21, l = N.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && b && L !== m && (t(19, L = m), b.float(m)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && b && P !== f && (t(20, P = f), b.setRequired(f));
  }, [
    m,
    f,
    u,
    c,
    d,
    h,
    p,
    g,
    E,
    M,
    o,
    C,
    i,
    F,
    w,
    z,
    T,
    k,
    b,
    L,
    P,
    l,
    a,
    x,
    Se
  ];
}
class Rn extends ke {
  constructor(e) {
    super(), De(this, e, Ma, Oa, Ae, {
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
function Ra(n) {
  let e, t, s, i, a, l, r = [
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
    o = R(o, r[u]);
  return {
    c() {
      e = Y("div"), de(e, o);
    },
    m(u, c) {
      Q(u, e, c), n[13](e), a || (l = [
        ue(i = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], a = !0);
    },
    p(u, [c]) {
      de(e, o = $(r, [
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
      ])), i && ye(i.update) && c & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: tt,
    o: tt,
    d(u) {
      u && Z(e), n[13](null), a = !1, We(l);
    }
  };
}
const Yn = ([n, e]) => `${n}: ${e};`;
function Da(n, e, t) {
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
  const a = Ze(Re());
  let { use: l = [] } = e, { class: r = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, d, h = {}, m = {};
  vt(() => (d = new tr({
    addClass: p,
    removeClass: g,
    hasClass: f,
    setStyle: b,
    registerEventHandler: (y, j) => L().addEventListener(y, j),
    deregisterEventHandler: (y, j) => L().removeEventListener(y, j)
  }), d.init(), () => {
    d.destroy();
  }));
  function f(y) {
    return y in h ? h[y] : L().classList.contains(y);
  }
  function p(y) {
    h[y] || t(5, h[y] = !0, h);
  }
  function g(y) {
    (!(y in h) || h[y]) && t(5, h[y] = !1, h);
  }
  function b(y, j) {
    m[y] != j && (j === "" || j == null ? (delete m[y], t(6, m)) : t(6, m[y] = j, m));
  }
  function E() {
    d.activate();
  }
  function M() {
    d.deactivate();
  }
  function C(y) {
    d.setRippleCenter(y);
  }
  function L() {
    return c;
  }
  function P(y) {
    oe[y ? "unshift" : "push"](() => {
      c = y, t(4, c);
    });
  }
  return n.$$set = (y) => {
    e = R(R({}, e), Ke(y)), t(8, i = re(e, s)), "use" in y && t(0, l = y.use), "class" in y && t(1, r = y.class), "style" in y && t(2, o = y.style), "active" in y && t(3, u = y.active);
  }, [
    l,
    r,
    o,
    u,
    c,
    h,
    m,
    a,
    i,
    E,
    M,
    C,
    L,
    P
  ];
}
class Ds extends ke {
  constructor(e) {
    super(), De(this, e, Da, Ra, Ae, {
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
Fe(Ds, { use: {}, class: {}, style: {}, active: { type: "Boolean" } }, [], ["activate", "deactivate", "setRippleCenter", "getElement"], !0);
function $n(n) {
  let e, t, s;
  const i = (
    /*#slots*/
    n[15].default
  ), a = Ce(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = Y("div"), a && a.c(), ie(e, "class", "mdc-notched-outline__notch"), ie(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(es).join(" "));
    },
    m(l, r) {
      Q(l, e, r), a && a.m(e, null), s = !0;
    },
    p(l, r) {
      a && a.p && (!s || r & /*$$scope*/
      16384) && Le(
        a,
        i,
        l,
        /*$$scope*/
        l[14],
        s ? Te(
          i,
          /*$$scope*/
          l[14],
          r,
          null
        ) : Oe(
          /*$$scope*/
          l[14]
        ),
        null
      ), (!s || r & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        l[7]
      ).map(es).join(" "))) && ie(e, "style", t);
    },
    i(l) {
      s || (O(a, l), s = !0);
    },
    o(l) {
      D(a, l), s = !1;
    },
    d(l) {
      l && Z(e), a && a.d(l);
    }
  };
}
function Fa(n) {
  let e, t, s, i, a, l, r, o, u, c, d = !/*noLabel*/
  n[3] && $n(n), h = [
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
  for (let f = 0; f < h.length; f += 1)
    m = R(m, h[f]);
  return {
    c() {
      e = Y("div"), t = Y("div"), s = He(), d && d.c(), i = He(), a = Y("div"), ie(t, "class", "mdc-notched-outline__leading"), ie(a, "class", "mdc-notched-outline__trailing"), de(e, m);
    },
    m(f, p) {
      Q(f, e, p), K(e, t), K(e, s), d && d.m(e, null), K(e, i), K(e, a), n[16](e), o = !0, u || (c = [
        ue(r = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        ot(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        ot(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(f, [p]) {
      /*noLabel*/
      f[3] ? d && ($e(), D(d, 1, 1, () => {
        d = null;
      }), et()) : d ? (d.p(f, p), p & /*noLabel*/
      8 && O(d, 1)) : (d = $n(f), d.c(), O(d, 1), d.m(e, i)), de(e, m = $(h, [
        (!o || p & /*className, notched, noLabel, internalClasses*/
        78 && l !== (l = W({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            f[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            f[3]
          ),
          .../*internalClasses*/
          f[6]
        }))) && { class: l },
        p & /*$$restProps*/
        1024 && /*$$restProps*/
        f[10]
      ])), r && ye(r.update) && p & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      o || (O(d), o = !0);
    },
    o(f) {
      D(d), o = !1;
    },
    d(f) {
      f && Z(e), d && d.d(), n[16](null), u = !1, We(c);
    }
  };
}
const es = ([n, e]) => `${n}: ${e};`;
function ka(n, e, t) {
  const s = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Ze(Re());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: d = !1 } = e, h, m, f, p = {}, g = {};
  vt(() => (m = new gr({
    addClass: E,
    removeClass: M,
    setNotchWidthProperty: (F) => C("width", F + "px"),
    removeNotchWidthProperty: () => L("width")
  }), m.init(), () => {
    m.destroy();
  }));
  function b(F) {
    t(4, f = F.detail);
  }
  function E(F) {
    p[F] || t(6, p[F] = !0, p);
  }
  function M(F) {
    (!(F in p) || p[F]) && t(6, p[F] = !1, p);
  }
  function C(F, w) {
    g[F] != w && (w === "" || w == null ? (delete g[F], t(7, g)) : t(7, g[F] = w, g));
  }
  function L(F) {
    F in g && (delete g[F], t(7, g));
  }
  function P(F) {
    m.notch(F);
  }
  function y() {
    m.closeNotch();
  }
  function j() {
    return h;
  }
  function te(F) {
    oe[F ? "unshift" : "push"](() => {
      h = F, t(5, h);
    });
  }
  const U = () => t(4, f = void 0);
  return n.$$set = (F) => {
    e = R(R({}, e), Ke(F)), t(10, i = re(e, s)), "use" in F && t(0, o = F.use), "class" in F && t(1, u = F.class), "notched" in F && t(2, c = F.notched), "noLabel" in F && t(3, d = F.noLabel), "$$scope" in F && t(14, l = F.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (f ? (f.addStyle("transition-duration", "0s"), E("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      f && f.removeStyle("transition-duration");
    })) : M("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    d,
    f,
    h,
    p,
    g,
    r,
    b,
    i,
    P,
    y,
    j,
    l,
    a,
    te,
    U
  ];
}
class Fs extends ke {
  constructor(e) {
    super(), De(this, e, ka, Fa, Ae, {
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
function Na(n) {
  let e;
  return {
    c() {
      e = Et(
        /*content*/
        n[8]
      );
    },
    m(t, s) {
      Q(t, e, s);
    },
    p(t, s) {
      s & /*content*/
      256 && Kt(
        e,
        /*content*/
        t[8]
      );
    },
    i: tt,
    o: tt,
    d(t) {
      t && Z(e);
    }
  };
}
function Pa(n) {
  let e;
  const t = (
    /*#slots*/
    n[13].default
  ), s = Ce(
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
      4096) && Le(
        s,
        t,
        i,
        /*$$scope*/
        i[12],
        e ? Te(
          t,
          /*$$scope*/
          i[12],
          a,
          null
        ) : Oe(
          /*$$scope*/
          i[12]
        ),
        null
      );
    },
    i(i) {
      e || (O(s, i), e = !0);
    },
    o(i) {
      D(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function Ua(n) {
  let e, t, s, i, a, l, r, o, u;
  const c = [Pa, Na], d = [];
  function h(p, g) {
    return (
      /*content*/
      p[8] == null ? 0 : 1
    );
  }
  t = h(n), s = d[t] = c[t](n);
  let m = [
    {
      class: i = W({
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
  ], f = {};
  for (let p = 0; p < m.length; p += 1)
    f = R(f, m[p]);
  return {
    c() {
      e = Y("div"), s.c(), de(e, f);
    },
    m(p, g) {
      Q(p, e, g), d[t].m(e, null), n[14](e), r = !0, o || (u = [
        ue(l = Xe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ue(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], o = !0);
    },
    p(p, [g]) {
      let b = t;
      t = h(p), t === b ? d[t].p(p, g) : ($e(), D(d[b], 1, 1, () => {
        d[b] = null;
      }), et(), s = d[t], s ? s.p(p, g) : (s = d[t] = c[t](p), s.c()), O(s, 1), s.m(e, null)), de(e, f = $(m, [
        (!r || g & /*className, validationMsg, persistent, internalClasses*/
        90 && i !== (i = W({
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
        (!r || g & /*persistent*/
        8 && a !== (a = /*persistent*/
        p[3] ? void 0 : "true")) && { "aria-hidden": a },
        (!r || g & /*id*/
        4) && { id: (
          /*id*/
          p[2]
        ) },
        g & /*internalAttrs*/
        128 && /*internalAttrs*/
        p[7],
        g & /*$$restProps*/
        1024 && /*$$restProps*/
        p[10]
      ])), l && ye(l.update) && g & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      r || (O(s), r = !0);
    },
    o(p) {
      D(s), r = !1;
    },
    d(p) {
      p && Z(e), d[t].d(), n[14](null), o = !1, We(u);
    }
  };
}
let Ba = 0;
function ja(n, e, t) {
  const s = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let i = re(e, s), { $$slots: a = {}, $$scope: l } = e;
  const r = Ze(Re());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + Ba++ } = e, { persistent: d = !1 } = e, { validationMsg: h = !1 } = e, m, f, p = {}, g = {}, b;
  vt(() => (f = new Tr({
    addClass: M,
    removeClass: C,
    hasClass: E,
    getAttr: L,
    setAttr: P,
    removeAttr: y,
    setContent: (U) => {
      t(8, b = U);
    }
  }), c.startsWith("SMUI-select-helper-text-") && ze(j(), "SMUISelectHelperText:id", c), ze(j(), "SMUISelectHelperText:mount", f), f.init(), () => {
    ze(j(), "SMUISelectHelperText:unmount", f), f.destroy();
  }));
  function E(U) {
    return U in p ? p[U] : j().classList.contains(U);
  }
  function M(U) {
    p[U] || t(6, p[U] = !0, p);
  }
  function C(U) {
    (!(U in p) || p[U]) && t(6, p[U] = !1, p);
  }
  function L(U) {
    var F;
    return U in g ? (F = g[U]) !== null && F !== void 0 ? F : null : j().getAttribute(U);
  }
  function P(U, F) {
    g[U] !== F && t(7, g[U] = F, g);
  }
  function y(U) {
    (!(U in g) || g[U] != null) && t(7, g[U] = void 0, g);
  }
  function j() {
    return m;
  }
  function te(U) {
    oe[U ? "unshift" : "push"](() => {
      m = U, t(5, m);
    });
  }
  return n.$$set = (U) => {
    e = R(R({}, e), Ke(U)), t(10, i = re(e, s)), "use" in U && t(0, o = U.use), "class" in U && t(1, u = U.class), "id" in U && t(2, c = U.id), "persistent" in U && t(3, d = U.persistent), "validationMsg" in U && t(4, h = U.validationMsg), "$$scope" in U && t(12, l = U.$$scope);
  }, [
    o,
    u,
    c,
    d,
    h,
    m,
    p,
    g,
    b,
    r,
    i,
    j,
    l,
    a,
    te
  ];
}
class ks extends ke {
  constructor(e) {
    super(), De(this, e, ja, Ua, Ae, {
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
Fe(ks, { use: {}, class: {}, id: {}, persistent: { type: "Boolean" }, validationMsg: { type: "Boolean" } }, ["default"], ["getElement"], !0);
const Ha = (n) => ({}), ts = (n) => ({}), wa = (n) => ({}), ns = (n) => ({}), xa = (n) => ({}), ss = (n) => ({}), Va = (n) => ({}), is = (n) => ({});
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
    Ee(
      /*$$restProps*/
      n[53],
      "input$"
    )
  ], s = {};
  for (let i = 0; i < t.length; i += 1)
    s = R(s, t[i]);
  return {
    c() {
      e = Y("input"), de(e, s);
    },
    m(i, a) {
      Q(i, e, a), e.autofocus && e.focus();
    },
    p(i, a) {
      de(e, s = $(t, [
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
        4194304 && Ee(
          /*$$restProps*/
          i[53],
          "input$"
        )
      ]));
    },
    d(i) {
      i && Z(e);
    }
  };
}
function as(n) {
  let e;
  return {
    c() {
      e = Y("span"), ie(e, "class", "mdc-select__ripple");
    },
    m(t, s) {
      Q(t, e, s);
    },
    d(t) {
      t && Z(e);
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
    Ee(
      /*$$restProps*/
      n[53],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [Ga] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < s.length; a += 1)
    i = R(i, s[a]);
  return e = new Rn({ props: i }), n[66](e), {
    c() {
      ve(e.$$.fragment);
    },
    m(a, l) {
      _e(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[0] & /*inputId, required*/
      3072 | l[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? $(s, [
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
        4194304 && se(Ee(
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
      t || (O(e.$$.fragment, a), t = !0);
    },
    o(a) {
      D(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[66](null), Ie(e, a);
    }
  };
}
function Ga(n) {
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
  ), a = Ce(
    i,
    n,
    /*$$scope*/
    n[86],
    is
  );
  return {
    c() {
      t = Et(e), a && a.c();
    },
    m(l, r) {
      Q(l, t, r), a && a.m(l, r), s = !0;
    },
    p(l, r) {
      (!s || r[0] & /*label*/
      512) && e !== (e = /*label*/
      (l[9] == null ? "" : (
        /*label*/
        l[9]
      )) + "") && Kt(t, e), a && a.p && (!s || r[2] & /*$$scope*/
      16777216) && Le(
        a,
        i,
        l,
        /*$$scope*/
        l[86],
        s ? Te(
          i,
          /*$$scope*/
          l[86],
          r,
          Va
        ) : Oe(
          /*$$scope*/
          l[86]
        ),
        is
      );
    },
    i(l) {
      s || (O(a, l), s = !0);
    },
    o(l) {
      D(a, l), s = !1;
    },
    d(l) {
      l && Z(t), a && a.d(l);
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
    Ee(
      /*$$restProps*/
      n[53],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [Wa] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < s.length; a += 1)
    i = R(i, s[a]);
  return e = new Fs({ props: i }), n[68](e), {
    c() {
      ve(e.$$.fragment);
    },
    m(a, l) {
      _e(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[0] & /*noLabel, label*/
      768 | l[1] & /*$$slots, $$restProps*/
      6291456 ? $(s, [
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
        4194304 && se(Ee(
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
      t || (O(e.$$.fragment, a), t = !0);
    },
    o(a) {
      D(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[68](null), Ie(e, a);
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
    Ee(
      /*$$restProps*/
      n[53],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [za] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < s.length; a += 1)
    i = R(i, s[a]);
  return e = new Rn({ props: i }), n[67](e), {
    c() {
      ve(e.$$.fragment);
    },
    m(a, l) {
      _e(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[0] & /*inputId, required*/
      3072 | l[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? $(s, [
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
        4194304 && se(Ee(
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
      t || (O(e.$$.fragment, a), t = !0);
    },
    o(a) {
      D(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[67](null), Ie(e, a);
    }
  };
}
function za(n) {
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
  ), a = Ce(
    i,
    n,
    /*$$scope*/
    n[86],
    ss
  );
  return {
    c() {
      t = Et(e), a && a.c();
    },
    m(l, r) {
      Q(l, t, r), a && a.m(l, r), s = !0;
    },
    p(l, r) {
      (!s || r[0] & /*label*/
      512) && e !== (e = /*label*/
      (l[9] == null ? "" : (
        /*label*/
        l[9]
      )) + "") && Kt(t, e), a && a.p && (!s || r[2] & /*$$scope*/
      16777216) && Le(
        a,
        i,
        l,
        /*$$scope*/
        l[86],
        s ? Te(
          i,
          /*$$scope*/
          l[86],
          r,
          xa
        ) : Oe(
          /*$$scope*/
          l[86]
        ),
        ss
      );
    },
    i(l) {
      s || (O(a, l), s = !0);
    },
    o(l) {
      D(a, l), s = !1;
    },
    d(l) {
      l && Z(t), a && a.d(l);
    }
  };
}
function Wa(n) {
  let e, t, s = !/*noLabel*/
  n[8] && /*label*/
  (n[9] != null || /*$$slots*/
  n[52].label) && us(n);
  return {
    c() {
      s && s.c(), e = ut();
    },
    m(i, a) {
      s && s.m(i, a), Q(i, e, a), t = !0;
    },
    p(i, a) {
      !/*noLabel*/
      i[8] && /*label*/
      (i[9] != null || /*$$slots*/
      i[52].label) ? s ? (s.p(i, a), a[0] & /*noLabel, label*/
      768 | a[1] & /*$$slots*/
      2097152 && O(s, 1)) : (s = us(i), s.c(), O(s, 1), s.m(e.parentNode, e)) : s && ($e(), D(s, 1, 1, () => {
        s = null;
      }), et());
    },
    i(i) {
      t || (O(s), t = !0);
    },
    o(i) {
      D(s), t = !1;
    },
    d(i) {
      i && Z(e), s && s.d(i);
    }
  };
}
function cs(n) {
  let e, t;
  const s = [Ee(
    /*$$restProps*/
    n[53],
    "ripple$"
  )];
  let i = {};
  for (let a = 0; a < s.length; a += 1)
    i = R(i, s[a]);
  return e = new Ds({ props: i }), n[69](e), {
    c() {
      ve(e.$$.fragment);
    },
    m(a, l) {
      _e(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[1] & /*$$restProps*/
      4194304 ? $(s, [se(Ee(
        /*$$restProps*/
        a[53],
        "ripple$"
      ))]) : {};
      e.$set(r);
    },
    i(a) {
      t || (O(e.$$.fragment, a), t = !0);
    },
    o(a) {
      D(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[69](null), Ie(e, a);
    }
  };
}
function qa(n) {
  let e;
  const t = (
    /*#slots*/
    n[63].default
  ), s = Ce(
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
      16777216) && Le(
        s,
        t,
        i,
        /*$$scope*/
        i[86],
        e ? Te(
          t,
          /*$$scope*/
          i[86],
          a,
          null
        ) : Oe(
          /*$$scope*/
          i[86]
        ),
        null
      );
    },
    i(i) {
      e || (O(s, i), e = !0);
    },
    o(i) {
      D(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function Xa(n) {
  let e, t, s;
  const i = [
    { role: "listbox" },
    { wrapFocus: (
      /*wrapFocus*/
      n[35]
    ) },
    Ee(
      /*$$restProps*/
      n[53],
      "list$"
    )
  ];
  function a(r) {
    n[74](r);
  }
  let l = {
    $$slots: { default: [qa] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < i.length; r += 1)
    l = R(l, i[r]);
  return (
    /*selectedIndex*/
    n[24] !== void 0 && (l.selectedIndex = /*selectedIndex*/
    n[24]), e = new Os({ props: l }), oe.push(() => Ut(e, "selectedIndex", a)), e.$on(
      "SMUIList:mount",
      /*SMUIList_mount_handler*/
      n[75]
    ), {
      c() {
        ve(e.$$.fragment);
      },
      m(r, o) {
        _e(e, r, o), s = !0;
      },
      p(r, o) {
        const u = o[1] & /*wrapFocus, $$restProps*/
        4194320 ? $(i, [
          i[0],
          o[1] & /*wrapFocus*/
          16 && { wrapFocus: (
            /*wrapFocus*/
            r[35]
          ) },
          o[1] & /*$$restProps*/
          4194304 && se(Ee(
            /*$$restProps*/
            r[53],
            "list$"
          ))
        ]) : {};
        o[2] & /*$$scope*/
        16777216 && (u.$$scope = { dirty: o, ctx: r }), !t && o[0] & /*selectedIndex*/
        16777216 && (t = !0, u.selectedIndex = /*selectedIndex*/
        r[24], Pt(() => t = !1)), e.$set(u);
      },
      i(r) {
        s || (O(e.$$.fragment, r), s = !0);
      },
      o(r) {
        D(e.$$.fragment, r), s = !1;
      },
      d(r) {
        Ie(e, r);
      }
    }
  );
}
function ds(n) {
  let e, t;
  const s = [Ee(
    /*$$restProps*/
    n[53],
    "helperText$"
  )];
  let i = {
    $$slots: { default: [Ka] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < s.length; a += 1)
    i = R(i, s[a]);
  return e = new ks({ props: i }), e.$on(
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
      ve(e.$$.fragment);
    },
    m(a, l) {
      _e(e, a, l), t = !0;
    },
    p(a, l) {
      const r = l[1] & /*$$restProps*/
      4194304 ? $(s, [se(Ee(
        /*$$restProps*/
        a[53],
        "helperText$"
      ))]) : {};
      l[2] & /*$$scope*/
      16777216 && (r.$$scope = { dirty: l, ctx: a }), e.$set(r);
    },
    i(a) {
      t || (O(e.$$.fragment, a), t = !0);
    },
    o(a) {
      D(e.$$.fragment, a), t = !1;
    },
    d(a) {
      Ie(e, a);
    }
  };
}
function Ka(n) {
  let e;
  const t = (
    /*#slots*/
    n[63].helperText
  ), s = Ce(
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
      16777216) && Le(
        s,
        t,
        i,
        /*$$scope*/
        i[86],
        e ? Te(
          t,
          /*$$scope*/
          i[86],
          a,
          Ha
        ) : Oe(
          /*$$scope*/
          i[86]
        ),
        ts
      );
    },
    i(i) {
      e || (O(s, i), e = !0);
    },
    o(i) {
      D(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function Za(n) {
  let e, t, s, i, a, l, r, o, u, c, d, h, m, f, p, g, b, E, M, C, L, P, y, j, te, U, F, w, z, T, k, x, Se, N, ge, Ne, qe, ae, nt, it, H = (
    /*hiddenInput*/
    n[12] && rs(n)
  ), he = (
    /*variant*/
    n[7] === "filled" && as()
  ), fe = (
    /*variant*/
    n[7] !== "outlined" && !/*noLabel*/
    n[8] && /*label*/
    (n[9] != null || /*$$slots*/
    n[52].label) && ls(n)
  ), ce = (
    /*variant*/
    n[7] === "outlined" && os(n)
  );
  const xe = (
    /*#slots*/
    n[63].leadingIcon
  ), S = Ce(
    xe,
    n,
    /*$$scope*/
    n[86],
    ns
  );
  let ne = [
    {
      id: d = /*inputId*/
      n[11] + "-smui-selected-text"
    },
    {
      class: h = W({
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
    Ee(
      /*$$restProps*/
      n[53],
      "selectedText$"
    )
  ], Ue = {};
  for (let q = 0; q < ne.length; q += 1)
    Ue = R(Ue, ne[q]);
  let pe = [
    {
      class: p = W({
        [
          /*selectedTextContainer$class*/
          n[17]
        ]: !0,
        "mdc-select__selected-text-container": !0
      })
    },
    Ee(
      /*$$restProps*/
      n[53],
      "selectedTextContainer$"
    )
  ], lt = {};
  for (let q = 0; q < pe.length; q += 1)
    lt = R(lt, pe[q]);
  let A = [
    {
      class: P = W({
        [
          /*dropdownIcon$class*/
          n[21]
        ]: !0,
        "mdc-select__dropdown-icon": !0
      })
    },
    Ee(
      /*$$restProps*/
      n[53],
      "dropdownIcon$"
    )
  ], X = {};
  for (let q = 0; q < A.length; q += 1)
    X = R(X, A[q]);
  let J = (
    /*variant*/
    n[7] !== "outlined" && /*ripple*/
    n[5] && cs(n)
  ), gt = [
    {
      class: te = W({
        [
          /*anchor$class*/
          n[15]
        ]: !0,
        "mdc-select__anchor": !0
      })
    },
    {
      "aria-required": U = /*required*/
      n[10] ? "true" : void 0
    },
    {
      "aria-disabled": F = /*disabled*/
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
    Ee(
      /*$$restProps*/
      n[53],
      "anchor$"
    )
  ], Qe = {};
  for (let q = 0; q < gt.length; q += 1)
    Qe = R(Qe, gt[q]);
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
    Ee(
      /*$$restProps*/
      n[53],
      "menu$"
    )
  ];
  function ft(q) {
    n[76](q);
  }
  let _t = {
    $$slots: { default: [Xa] },
    $$scope: { ctx: n }
  };
  for (let q = 0; q < dt.length; q += 1)
    _t = R(_t, dt[q]);
  /*menuOpen*/
  n[31] !== void 0 && (_t.open = /*menuOpen*/
  n[31]), T = new Cs({ props: _t }), oe.push(() => Ut(T, "open", ft)), T.$on(
    "SMUIMenu:selected",
    /*SMUIMenu_selected_handler*/
    n[77]
  ), T.$on(
    "SMUIMenuSurface:closing",
    /*SMUIMenuSurface_closing_handler*/
    n[78]
  ), T.$on(
    "SMUIMenuSurface:closed",
    /*SMUIMenuSurface_closed_handler*/
    n[79]
  ), T.$on(
    "SMUIMenuSurface:opened",
    /*SMUIMenuSurface_opened_handler*/
    n[80]
  );
  let Je = [
    {
      class: x = W({
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
      style: Se = Object.entries(
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
  ], st = {};
  for (let q = 0; q < Je.length; q += 1)
    st = R(st, Je[q]);
  let me = (
    /*$$slots*/
    n[52].helperText && ds(n)
  );
  return {
    c() {
      e = Y("div"), H && H.c(), t = He(), s = Y("div"), he && he.c(), i = He(), fe && fe.c(), a = He(), ce && ce.c(), l = He(), S && S.c(), r = He(), o = Y("span"), u = Y("span"), c = Et(
        /*$selectedTextStore*/
        n[42]
      ), b = He(), E = Y("span"), M = Jt("svg"), C = Jt("polygon"), L = Jt("polygon"), j = He(), J && J.c(), z = He(), ve(T.$$.fragment), Ne = He(), me && me.c(), qe = ut(), de(u, Ue), de(o, lt), ie(C, "class", "mdc-select__dropdown-icon-inactive"), ie(C, "stroke", "none"), ie(C, "fill-rule", "evenodd"), ie(C, "points", "7 10 12 15 17 10"), ie(L, "class", "mdc-select__dropdown-icon-active"), ie(L, "stroke", "none"), ie(L, "fill-rule", "evenodd"), ie(L, "points", "7 15 12 10 17 15"), ie(M, "class", "mdc-select__dropdown-icon-graphic"), ie(M, "viewBox", "7 10 10 5"), ie(M, "focusable", "false"), de(E, X), de(s, Qe), de(e, st);
    },
    m(q, B) {
      Q(q, e, B), H && H.m(e, null), K(e, t), K(e, s), he && he.m(s, null), K(s, i), fe && fe.m(s, null), K(s, a), ce && ce.m(s, null), K(s, l), S && S.m(s, null), K(s, r), K(s, o), K(o, u), K(u, c), K(s, b), K(s, E), K(E, M), K(M, C), K(M, L), K(s, j), J && J.m(s, null), n[70](s), K(e, z), _e(T, e, null), n[81](e), Q(q, Ne, B), me && me.m(q, B), Q(q, qe, B), ae = !0, nt || (it = [
        ue(f = Xe.call(
          null,
          u,
          /*selectedText$use*/
          n[18]
        )),
        ue(g = Xe.call(
          null,
          o,
          /*selectedTextContainer$use*/
          n[16]
        )),
        ue(y = Xe.call(
          null,
          E,
          /*dropdownIcon$use*/
          n[20]
        )),
        ue(w = Xe.call(
          null,
          s,
          /*anchor$use*/
          n[14]
        )),
        ot(
          s,
          "focus",
          /*focus_handler_1*/
          n[71]
        ),
        ot(
          s,
          "blur",
          /*blur_handler_1*/
          n[72]
        ),
        ot(
          s,
          "click",
          /*click_handler*/
          n[73]
        ),
        ot(s, "keydown", function() {
          ye(
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
        ot(
          s,
          "focus",
          /*focus_handler*/
          n[64]
        ),
        ot(
          s,
          "blur",
          /*blur_handler*/
          n[65]
        ),
        ue(N = un.call(null, e, {
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
        ue(Br.call(null, e, {
          addClass: (
            /*addClass*/
            n[49]
          ),
          removeClass: (
            /*removeClass*/
            n[50]
          )
        })),
        ue(ge = Xe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ue(
          /*forwardEvents*/
          n[43].call(null, e)
        ),
        ot(
          e,
          "SMUISelectLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[48]
        ),
        ot(
          e,
          "SMUISelectLeadingIcon:unmount",
          /*SMUISelectLeadingIcon_unmount_handler*/
          n[82]
        )
      ], nt = !0);
    },
    p(q, B) {
      n = q, /*hiddenInput*/
      n[12] ? H ? H.p(n, B) : (H = rs(n), H.c(), H.m(e, t)) : H && (H.d(1), H = null), /*variant*/
      n[7] === "filled" ? he || (he = as(), he.c(), he.m(s, i)) : he && (he.d(1), he = null), /*variant*/
      n[7] !== "outlined" && !/*noLabel*/
      n[8] && /*label*/
      (n[9] != null || /*$$slots*/
      n[52].label) ? fe ? (fe.p(n, B), B[0] & /*variant, noLabel, label*/
      896 | B[1] & /*$$slots*/
      2097152 && O(fe, 1)) : (fe = ls(n), fe.c(), O(fe, 1), fe.m(s, a)) : fe && ($e(), D(fe, 1, 1, () => {
        fe = null;
      }), et()), /*variant*/
      n[7] === "outlined" ? ce ? (ce.p(n, B), B[0] & /*variant*/
      128 && O(ce, 1)) : (ce = os(n), ce.c(), O(ce, 1), ce.m(s, l)) : ce && ($e(), D(ce, 1, 1, () => {
        ce = null;
      }), et()), S && S.p && (!ae || B[2] & /*$$scope*/
      16777216) && Le(
        S,
        xe,
        n,
        /*$$scope*/
        n[86],
        ae ? Te(
          xe,
          /*$$scope*/
          n[86],
          B,
          wa
        ) : Oe(
          /*$$scope*/
          n[86]
        ),
        ns
      ), (!ae || B[1] & /*$selectedTextStore*/
      2048) && Ti(
        c,
        /*$selectedTextStore*/
        n[42],
        Ue.contenteditable
      ), de(u, Ue = $(ne, [
        (!ae || B[0] & /*inputId*/
        2048 && d !== (d = /*inputId*/
        n[11] + "-smui-selected-text")) && { id: d },
        (!ae || B[0] & /*selectedText$class*/
        524288 && h !== (h = W({
          [
            /*selectedText$class*/
            n[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: h },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!ae || B[0] & /*inputId*/
        2048 && m !== (m = /*inputId*/
        n[11] + "-smui-label")) && {
          "aria-labelledby": m
        },
        B[1] & /*$$restProps*/
        4194304 && Ee(
          /*$$restProps*/
          n[53],
          "selectedText$"
        )
      ])), f && ye(f.update) && B[0] & /*selectedText$use*/
      262144 && f.update.call(
        null,
        /*selectedText$use*/
        n[18]
      ), de(o, lt = $(pe, [
        (!ae || B[0] & /*selectedTextContainer$class*/
        131072 && p !== (p = W({
          [
            /*selectedTextContainer$class*/
            n[17]
          ]: !0,
          "mdc-select__selected-text-container": !0
        }))) && { class: p },
        B[1] & /*$$restProps*/
        4194304 && Ee(
          /*$$restProps*/
          n[53],
          "selectedTextContainer$"
        )
      ])), g && ye(g.update) && B[0] & /*selectedTextContainer$use*/
      65536 && g.update.call(
        null,
        /*selectedTextContainer$use*/
        n[16]
      ), de(E, X = $(A, [
        (!ae || B[0] & /*dropdownIcon$class*/
        2097152 && P !== (P = W({
          [
            /*dropdownIcon$class*/
            n[21]
          ]: !0,
          "mdc-select__dropdown-icon": !0
        }))) && { class: P },
        B[1] & /*$$restProps*/
        4194304 && Ee(
          /*$$restProps*/
          n[53],
          "dropdownIcon$"
        )
      ])), y && ye(y.update) && B[0] & /*dropdownIcon$use*/
      1048576 && y.update.call(
        null,
        /*dropdownIcon$use*/
        n[20]
      ), /*variant*/
      n[7] !== "outlined" && /*ripple*/
      n[5] ? J ? (J.p(n, B), B[0] & /*variant, ripple*/
      160 && O(J, 1)) : (J = cs(n), J.c(), O(J, 1), J.m(s, null)) : J && ($e(), D(J, 1, 1, () => {
        J = null;
      }), et()), de(s, Qe = $(gt, [
        (!ae || B[0] & /*anchor$class*/
        32768 && te !== (te = W({
          [
            /*anchor$class*/
            n[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: te },
        (!ae || B[0] & /*required*/
        1024 && U !== (U = /*required*/
        n[10] ? "true" : void 0)) && {
          "aria-required": U
        },
        (!ae || B[0] & /*disabled*/
        64 && F !== (F = /*disabled*/
        n[6] ? "true" : void 0)) && {
          "aria-disabled": F
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
        4194304 && Ee(
          /*$$restProps*/
          n[53],
          "anchor$"
        )
      ])), w && ye(w.update) && B[0] & /*anchor$use*/
      16384 && w.update.call(
        null,
        /*anchor$use*/
        n[14]
      );
      const Ye = B[0] & /*menu$class*/
      4194304 | B[1] & /*menuClasses, anchorElement, anchorCorner, $$restProps*/
      4194318 ? $(dt, [
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
        4194304 && se(Ee(
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
      n[31], Pt(() => k = !1)), T.$set(Ye), de(e, st = $(Je, [
        (!ae || B[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | B[1] & /*$$slots, menuOpen*/
        2097153 && x !== (x = W({
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
        }))) && { class: x },
        (!ae || B[0] & /*internalStyles, style*/
        134217744 && Se !== (Se = Object.entries(
          /*internalStyles*/
          n[27]
        ).map(fs).concat([
          /*style*/
          n[4]
        ]).join(" "))) && { style: Se },
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
      ])), N && ye(N.update) && B[0] & /*variant*/
      128 && N.update.call(null, {
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
      }), ge && ye(ge.update) && B[0] & /*use*/
      4 && ge.update.call(
        null,
        /*use*/
        n[2]
      ), /*$$slots*/
      n[52].helperText ? me ? (me.p(n, B), B[1] & /*$$slots*/
      2097152 && O(me, 1)) : (me = ds(n), me.c(), O(me, 1), me.m(qe.parentNode, qe)) : me && ($e(), D(me, 1, 1, () => {
        me = null;
      }), et());
    },
    i(q) {
      ae || (O(fe), O(ce), O(S, q), O(J), O(T.$$.fragment, q), O(me), ae = !0);
    },
    o(q) {
      D(fe), D(ce), D(S, q), D(J), D(T.$$.fragment, q), D(me), ae = !1;
    },
    d(q) {
      q && (Z(e), Z(Ne), Z(qe)), H && H.d(), he && he.d(), fe && fe.d(), ce && ce.d(), S && S.d(q), J && J.d(), n[70](null), Ie(T), n[81](null), me && me.d(q), nt = !1, We(it);
    }
  };
}
let Qa = 0;
function Ja(n) {
  const e = n.currentTarget.getBoundingClientRect();
  return (Ya(n) ? n.touches[0].clientX : n.clientX) - e.left;
}
function Ya(n) {
  return "touches" in n;
}
const fs = ([n, e]) => `${n}: ${e};`;
function $a(n, e, t) {
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
  const u = pi(r), c = Ze(Re());
  let d = () => {
  };
  function h(_) {
    return _ === d;
  }
  let { use: m = [] } = e, { class: f = "" } = e, { style: p = "" } = e, { ripple: g = !0 } = e, { disabled: b = !1 } = e, { variant: E = "standard" } = e, { noLabel: M = !1 } = e, { label: C = void 0 } = e, { value: L = "" } = e, { key: P = (_) => _ } = e, { dirty: y = !1 } = e, { invalid: j = d } = e, { updateInvalid: te = h(j) } = e;
  const U = h(j);
  h(j) && (j = !1);
  let { required: F = !1 } = e, { inputId: w = "SMUI-select-" + Qa++ } = e, { hiddenInput: z = !1 } = e, { withLeadingIcon: T = d } = e, { anchor$use: k = [] } = e, { anchor$class: x = "" } = e, { selectedTextContainer$use: Se = [] } = e, { selectedTextContainer$class: N = "" } = e, { selectedText$use: ge = [] } = e, { selectedText$class: Ne = "" } = e, { dropdownIcon$use: qe = [] } = e, { dropdownIcon$class: ae = "" } = e, { menu$class: nt = "" } = e, it, H, he = {}, fe = {}, ce, xe = {}, S = -1, ne, Ue = Pe("SMUI:addLayoutListener"), pe, lt = !1, A = {}, X, J, gt = !1, Qe, dt = Pe("SMUI:select:context"), ft, _t, Je, st, me;
  Ge("SMUI:list:role", ""), Ge("SMUI:list:nav", !1);
  const q = Ln("");
  $t(n, q, (_) => t(42, a = _)), Ge("SMUI:select:selectedText", q);
  const B = Ln(L);
  $t(n, B, (_) => t(88, l = _)), Ge("SMUI:select:value", B);
  let Ye = S;
  Ue && (pe = Ue(kn)), vt(() => (t(23, H = new Cr(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (_) => {
        cn(q, a = _, a);
      },
      isSelectAnchorFocused: () => document.activeElement === ce,
      getSelectAnchorAttr: js,
      setSelectAnchorAttr: Hs,
      removeSelectAnchorAttr: ws,
      addMenuClass: Rt,
      removeMenuClass: pn,
      openMenu: () => {
        t(31, lt = !0);
      },
      closeMenu: () => {
        t(31, lt = !1);
      },
      getAnchorElement: () => ce,
      setMenuAnchorElement: (_) => {
        t(33, X = _);
      },
      setMenuAnchorCorner: (_) => {
        t(34, J = _);
      },
      setMenuWrapFocus: (_) => {
        t(35, gt = _);
      },
      getSelectedIndex: () => S,
      setSelectedIndex: (_) => {
        t(62, Ye = _), t(24, S = _), t(0, L = tn()[S]);
      },
      focusMenuItemAtIndex: (_) => {
        Qe.focusItemAtIndex(_);
      },
      getMenuItemCount: () => Qe.items.length,
      getMenuItemValues: () => tn().map(P),
      getMenuItemTextAtIndex: (_) => Qe.getPrimaryTextAtIndex(_),
      isTypeaheadInProgress: () => Qe.typeaheadInProgress,
      typeaheadMatchItem: (_, ht) => Qe.typeaheadMatchItem(_, ht),
      // getCommonAdapterMethods
      addClass: G,
      removeClass: V,
      hasClass: v,
      setRippleCenter: (_) => st && st.setRippleCenter(_),
      activateBottomLine: () => st && st.activate(),
      deactivateBottomLine: () => st && st.deactivate(),
      notifyChange: (_) => {
        t(54, y = !0), te && t(1, j = !H.isValid()), ze(nn(), "SMUISelect:change", { value: L, index: S }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!me,
      notchOutline: (_) => me && me.notch(_),
      closeOutline: () => me && me.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!Je,
      floatLabel: (_) => Je && Je.float(_),
      getLabelWidth: () => Je ? Je.getWidth() : 0,
      setLabelRequired: (_) => Je && Je.setRequired(_)
    },
    {
      get helperText() {
        return _t;
      },
      get leadingIcon() {
        return ft;
      }
    }
  )), t(24, S = tn().indexOf(L)), H.init(), Fn(U), () => {
    H.destroy();
  })), jt(() => {
    pe && pe();
  });
  function mn(_) {
    t(37, ft = _.detail);
  }
  function v(_) {
    return _ in he ? he[_] : nn().classList.contains(_);
  }
  function G(_) {
    he[_] || t(26, he[_] = !0, he);
  }
  function V(_) {
    (!(_ in he) || he[_]) && t(26, he[_] = !1, he);
  }
  function be(_, ht) {
    fe[_] != ht && (ht === "" || ht == null ? (delete fe[_], t(27, fe)) : t(27, fe[_] = ht, fe));
  }
  function Rt(_) {
    A[_] || t(32, A[_] = !0, A);
  }
  function pn(_) {
    (!(_ in A) || A[_]) && t(32, A[_] = !1, A);
  }
  function js(_) {
    var ht;
    return _ in xe ? (ht = xe[_]) !== null && ht !== void 0 ? ht : null : nn().getAttribute(_);
  }
  function Hs(_, ht) {
    xe[_] !== ht && t(29, xe[_] = ht, xe);
  }
  function ws(_) {
    (!(_ in xe) || xe[_] != null) && t(29, xe[_] = void 0, xe);
  }
  function tn() {
    return Qe.getOrderedList().map((_) => _.getValue());
  }
  function xs() {
    return H.getUseDefaultValidation();
  }
  function Fn(_) {
    H.setUseDefaultValidation(_);
  }
  function Vs() {
    ce.focus();
  }
  function kn() {
    H.layout();
  }
  function nn() {
    return it;
  }
  function Gs(_) {
    Pn.call(this, n, _);
  }
  function zs(_) {
    Pn.call(this, n, _);
  }
  function Ws(_) {
    oe[_ ? "unshift" : "push"](() => {
      Je = _, t(39, Je);
    });
  }
  function qs(_) {
    oe[_ ? "unshift" : "push"](() => {
      Je = _, t(39, Je);
    });
  }
  function Xs(_) {
    oe[_ ? "unshift" : "push"](() => {
      me = _, t(41, me);
    });
  }
  function Ks(_) {
    oe[_ ? "unshift" : "push"](() => {
      st = _, t(40, st);
    });
  }
  function Zs(_) {
    oe[_ ? "unshift" : "push"](() => {
      ce = _, t(28, ce);
    });
  }
  const Qs = () => H && H.handleFocus(), Js = () => H && H.handleBlur(), Ys = (_) => {
    ce.focus(), H && H.handleClick(Ja(_));
  };
  function $s(_) {
    S = _, t(24, S);
  }
  const ei = (_) => t(36, Qe = _.detail);
  function ti(_) {
    lt = _, t(31, lt);
  }
  const ni = (_) => H && H.handleMenuItemAction(_.detail.index), si = () => H && H.handleMenuClosing(), ii = () => H && H.handleMenuClosed(), ri = () => H && H.handleMenuOpened();
  function ai(_) {
    oe[_ ? "unshift" : "push"](() => {
      it = _, t(25, it);
    });
  }
  const li = () => t(37, ft = void 0), oi = (_) => t(30, ne = _.detail), ui = (_) => t(38, _t = _.detail), ci = () => {
    t(30, ne = void 0), t(38, _t = void 0);
  };
  return n.$$set = (_) => {
    e = R(R({}, e), Ke(_)), t(53, i = re(e, s)), "use" in _ && t(2, m = _.use), "class" in _ && t(3, f = _.class), "style" in _ && t(4, p = _.style), "ripple" in _ && t(5, g = _.ripple), "disabled" in _ && t(6, b = _.disabled), "variant" in _ && t(7, E = _.variant), "noLabel" in _ && t(8, M = _.noLabel), "label" in _ && t(9, C = _.label), "value" in _ && t(0, L = _.value), "key" in _ && t(55, P = _.key), "dirty" in _ && t(54, y = _.dirty), "invalid" in _ && t(1, j = _.invalid), "updateInvalid" in _ && t(56, te = _.updateInvalid), "required" in _ && t(10, F = _.required), "inputId" in _ && t(11, w = _.inputId), "hiddenInput" in _ && t(12, z = _.hiddenInput), "withLeadingIcon" in _ && t(13, T = _.withLeadingIcon), "anchor$use" in _ && t(14, k = _.anchor$use), "anchor$class" in _ && t(15, x = _.anchor$class), "selectedTextContainer$use" in _ && t(16, Se = _.selectedTextContainer$use), "selectedTextContainer$class" in _ && t(17, N = _.selectedTextContainer$class), "selectedText$use" in _ && t(18, ge = _.selectedText$use), "selectedText$class" in _ && t(19, Ne = _.selectedText$class), "dropdownIcon$use" in _ && t(20, qe = _.dropdownIcon$use), "dropdownIcon$class" in _ && t(21, ae = _.dropdownIcon$class), "menu$class" in _ && t(22, nt = _.menu$class), "$$scope" in _ && t(86, o = _.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | n.$$.dirty[2] & /*previousSelectedIndex*/
    1 && Ye !== S)
      if (t(62, Ye = S), H)
        H.setSelectedIndex(
          S,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const _ = tn();
        L !== _[S] && t(0, L = _[S]);
      }
    n.$$.dirty[0] & /*value*/
    1 && cn(B, l = L, l), n.$$.dirty[0] & /*instance, value*/
    8388609 | n.$$.dirty[1] & /*key*/
    16777216 && H && H.getValue() !== P(L) && H.setValue(P(L)), n.$$.dirty[0] & /*instance, disabled*/
    8388672 && H && H.getDisabled() !== b && H.setDisabled(b), n.$$.dirty[0] & /*instance, invalid*/
    8388610 | n.$$.dirty[1] & /*dirty, updateInvalid*/
    41943040 && H && y && H.isValid() !== !j && (te ? t(1, j = !H.isValid()) : H.setValid(!j)), n.$$.dirty[0] & /*instance, required*/
    8389632 && H && H.getRequired() !== F && H.setRequired(F);
  }, [
    L,
    j,
    m,
    f,
    p,
    g,
    b,
    E,
    M,
    C,
    F,
    w,
    z,
    T,
    k,
    x,
    Se,
    N,
    ge,
    Ne,
    qe,
    ae,
    nt,
    H,
    S,
    it,
    he,
    fe,
    ce,
    xe,
    ne,
    lt,
    A,
    X,
    J,
    gt,
    Qe,
    ft,
    _t,
    Je,
    st,
    me,
    a,
    c,
    h,
    dt,
    q,
    B,
    mn,
    G,
    V,
    be,
    u,
    i,
    y,
    P,
    te,
    xs,
    Fn,
    Vs,
    kn,
    nn,
    Ye,
    r,
    Gs,
    zs,
    Ws,
    qs,
    Xs,
    Ks,
    Zs,
    Qs,
    Js,
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
    o
  ];
}
class Ns extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      $a,
      Za,
      Ae,
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
  Ns,
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
function el(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), s = Ce(
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
      8192) && Le(
        s,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? Te(
          t,
          /*$$scope*/
          i[13],
          a,
          null
        ) : Oe(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (O(s, i), e = !0);
    },
    o(i) {
      D(s, i), e = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function tl(n) {
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
    $$slots: { default: [el] },
    $$scope: { ctx: n }
  };
  for (let a = 0; a < s.length; a += 1)
    i = R(i, s[a]);
  return e = new Ms({ props: i }), n[12](e), {
    c() {
      ve(e.$$.fragment);
    },
    m(a, l) {
      _e(e, a, l), t = !0;
    },
    p(a, [l]) {
      const r = l & /*usePass, value, selected, $$restProps*/
      77 ? $(s, [
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
      t || (O(e.$$.fragment, a), t = !0);
    },
    o(a) {
      D(e.$$.fragment, a), t = !1;
    },
    d(a) {
      n[12](null), Ie(e, a);
    }
  };
}
function nl(n, e, t) {
  let s, i;
  const a = ["use", "class", "value", "getElement"];
  let l = re(e, a), r, o, { $$slots: u = {}, $$scope: c } = e;
  const d = Ze(Re());
  let { use: h = [] } = e;
  const m = "";
  let { value: f = "" } = e, p;
  const g = Pe("SMUI:select:selectedText");
  $t(n, g, (L) => t(14, r = L));
  const b = Pe("SMUI:select:value");
  $t(n, b, (L) => t(10, o = L)), Ge("SMUI:list:item:role", "option"), vt(E), jt(E);
  function E() {
    i && p && cn(g, r = p.getPrimaryText(), r);
  }
  function M() {
    return p.getElement();
  }
  function C(L) {
    oe[L ? "unshift" : "push"](() => {
      p = L, t(1, p);
    });
  }
  return n.$$set = (L) => {
    e = R(R({}, e), Ke(L)), t(6, l = re(e, a)), "use" in L && t(7, h = L.use), "value" in L && t(0, f = L.value), "$$scope" in L && t(13, c = L.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    128 && t(3, s = [d, ...h]), n.$$.dirty & /*value, $selectedValue*/
    1025 && t(2, i = f != null && f !== "" && o === f);
  }, [
    f,
    p,
    i,
    s,
    g,
    b,
    l,
    h,
    m,
    M,
    o,
    u,
    C,
    c
  ];
}
class Dn extends ke {
  constructor(e) {
    super(), De(this, e, nl, tl, Ae, {
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
const sl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI1MSIgdmlld0JveD0iMCAwIDUxIDUxIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyNS41IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KICAgIDxjaXJjbGUgY3g9IjI1LjUiIGN5PSIyNS41IiByPSIyMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjQiLz4KICAgIDxwYXRoIGQ9Ik0xOS4wMDc4IDMwLjg0VjI0LjA0SDMxLjAwNzhWMzAuODRIMTkuMDA3OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==", il = "data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTEiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA1MSA1MSIgZmlsbD0ibm9uZSI+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CiAgICA8Y2lyY2xlIGN4PSIyNS41IiBjeT0iMjUuNSIgcj0iMjMuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CiAgICA8cGF0aCBkPSJNMjEuODk2OSAzNC44MDAyVjE1LjIwMDJIMjkuMDk2OVYzNC44MDAySDIxLjg5NjlaTTE1LjI5NjkgMjguNDAwMlYyMS42MDAySDM1LjY5NjlWMjguNDAwMkgxNS4yOTY5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+";
function rl(n) {
  On(n, "svelte-1psm488", `@import "smui.css";.renumerator.svelte-1psm488.svelte-1psm488{display:flex;padding:80px 40px;width:calc(100% - 80px);height:calc(447px - 160px);flex-shrink:0;border-radius:32px;background:linear-gradient(180deg, #1D211A 0%, #1D2E0E 100%);box-shadow:0 24px 44px 0 rgba(0, 0, 0, 0.25);backdrop-filter:blur(22px);flex-direction:column}.renumerator.svelte-1psm488 .half-block.svelte-1psm488{width:50%}.renumerator.svelte-1psm488 .half-block.svelte-1psm488{margin-top:40px}.renumerator.svelte-1psm488 .half-block span.title.svelte-1psm488{margin-bottom:40px;text-align:center;display:block}.renumerator.svelte-1psm488 .flex.svelte-1psm488{justify-content:center;display:flex}.renumerator.svelte-1psm488 .flex button.svelte-1psm488{background-color:transparent;cursor:pointer;border:none;display:flex;align-items:center;gap:8px}.renumerator.svelte-1psm488 .flex span.svelte-1psm488{font-size:40px;font-weight:900;margin:0 24px}.renumerator.svelte-1psm488 .title.svelte-1psm488{margin-bottom:16px}.renumerator.svelte-1psm488 .container.svelte-1psm488{display:flex}.svelte-1psm488 .mdc-select__dropdown-icon-graphic{fill:white !important}.svelte-1psm488 .mdc-select__selected-text{color:white !important}.svelte-1psm488 .mdc-select__selected-text{font-size:16px;font-weight:500;font-family:Montserrat,serif}.svelte-1psm488 .mdc-deprecated-list-item--selected{background-color:#0E130B;color:white !important}.mdc-select__menu{background:#404639;color:white}.mdc-select__menu li{color:white}:root{--mdc-theme-primary:rgba(255, 255, 255, 0.6)}.smui-select__line-ripple{border-color:yellow}.smui-select__dropdown-icon{color:grey}.smui-select--focused .smui-select__line-ripple{border-color:blue}.svelte-1psm488 .mdc-select{background:rgba(255, 255, 255, 0.10)}.svelte-1psm488 .mdc-select__anchor{height:100px}.svelte-1psm488 .shaped-outlined,.svelte-1psm488 .shaped-outlined .mdc-select__anchor{border-radius:24px}.svelte-1psm488 .shaped-outlined .mdc-text-field__input{padding-left:32px;padding-right:0}.svelte-1psm488 .shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading{border-radius:24px 0 0 24px;border-color:rgba(255, 255, 255, 0.6);width:28px}.svelte-1psm488 .shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing{border-color:rgba(255, 255, 255, 0.6);border-radius:0 24px 24px 0}.svelte-1psm488 .shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch{border-color:rgba(255, 255, 255, 0.6)}`);
}
function hs(n, e, t) {
  const s = n.slice();
  return s[8] = e[t], s;
}
function ms(n) {
  let e, t;
  return e = new Dn({
    props: {
      value: "",
      disabled: !0,
      $$slots: { default: [al] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ve(e.$$.fragment);
    },
    m(s, i) {
      _e(e, s, i), t = !0;
    },
    i(s) {
      t || (O(e.$$.fragment, s), t = !0);
    },
    o(s) {
      D(e.$$.fragment, s), t = !1;
    },
    d(s) {
      Ie(e, s);
    }
  };
}
function al(n) {
  let e;
  return {
    c() {
      e = Et("Sélectionnez un poste");
    },
    m(t, s) {
      Q(t, e, s);
    },
    d(t) {
      t && Z(e);
    }
  };
}
function ll(n) {
  let e = (
    /*devType*/
    n[8].name + ""
  ), t;
  return {
    c() {
      t = Et(e);
    },
    m(s, i) {
      Q(s, t, i);
    },
    p: tt,
    d(s) {
      s && Z(t);
    }
  };
}
function ps(n) {
  let e, t;
  return e = new Dn({
    props: {
      value: (
        /*devType*/
        n[8].name
      ),
      $$slots: { default: [ll] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ve(e.$$.fragment);
    },
    m(s, i) {
      _e(e, s, i), t = !0;
    },
    p(s, i) {
      const a = {};
      i & /*$$scope*/
      2048 && (a.$$scope = { dirty: i, ctx: s }), e.$set(a);
    },
    i(s) {
      t || (O(e.$$.fragment, s), t = !0);
    },
    o(s) {
      D(e.$$.fragment, s), t = !1;
    },
    d(s) {
      Ie(e, s);
    }
  };
}
function ol(n) {
  let e, t, s, i = !/*selectedDevType*/
  n[1] && ms(n), a = Un(
    /*devTypes*/
    n[3]
  ), l = [];
  for (let o = 0; o < a.length; o += 1)
    l[o] = ps(hs(n, a, o));
  const r = (o) => D(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      i && i.c(), e = He();
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      t = ut();
    },
    m(o, u) {
      i && i.m(o, u), Q(o, e, u);
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(o, u);
      Q(o, t, u), s = !0;
    },
    p(o, u) {
      if (/*selectedDevType*/
      o[1] ? i && ($e(), D(i, 1, 1, () => {
        i = null;
      }), et()) : i ? u & /*selectedDevType*/
      2 && O(i, 1) : (i = ms(o), i.c(), O(i, 1), i.m(e.parentNode, e)), u & /*devTypes*/
      8) {
        a = Un(
          /*devTypes*/
          o[3]
        );
        let c;
        for (c = 0; c < a.length; c += 1) {
          const d = hs(o, a, c);
          l[c] ? (l[c].p(d, u), O(l[c], 1)) : (l[c] = ps(d), l[c].c(), O(l[c], 1), l[c].m(t.parentNode, t));
        }
        for ($e(), c = a.length; c < l.length; c += 1)
          r(c);
        et();
      }
    },
    i(o) {
      if (!s) {
        O(i);
        for (let u = 0; u < a.length; u += 1)
          O(l[u]);
        s = !0;
      }
    },
    o(o) {
      D(i), l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        D(l[u]);
      s = !1;
    },
    d(o) {
      o && (Z(e), Z(t)), i && i.d(o), Ei(l, o);
    }
  };
}
function ul(n) {
  let e, t, s, i, a, l, r, o, u, c, d, h, m, f, p, g, b, E, M, C;
  function L(y) {
    n[5](y);
  }
  let P = {
    class: "shaped-outlined",
    variant: "outlined",
    $$slots: { default: [ol] },
    $$scope: { ctx: n }
  };
  return (
    /*selectedDevType*/
    n[1] !== void 0 && (P.value = /*selectedDevType*/
    n[1]), i = new Ns({ props: P }), oe.push(() => Ut(i, "value", L)), {
      c() {
        e = Y("div"), t = Y("span"), t.textContent = "Votre métier", s = He(), ve(i.$$.fragment), l = He(), r = Y("div"), o = Y("div"), u = Y("span"), u.textContent = "Année d'expérience", c = He(), d = Y("div"), h = Y("button"), h.innerHTML = `<img src="${sl}" alt="Minus Svg icon" class="svelte-1psm488"/>`, m = He(), f = Y("span"), p = Et(
          /*experience*/
          n[0]
        ), g = He(), b = Y("button"), b.innerHTML = `<img src="${il}" alt="Plus Svg icon" class="svelte-1psm488"/>`, ie(t, "class", "title svelte-1psm488"), ie(u, "class", "title svelte-1psm488"), ie(h, "class", "svelte-1psm488"), ie(f, "class", "svelte-1psm488"), ie(b, "class", "svelte-1psm488"), ie(d, "class", "flex svelte-1psm488"), ie(o, "class", "half-block svelte-1psm488"), ie(r, "class", "container svelte-1psm488"), ie(e, "class", "renumerator svelte-1psm488");
      },
      m(y, j) {
        Q(y, e, j), K(e, t), K(e, s), _e(i, e, null), K(e, l), K(e, r), K(r, o), K(o, u), K(o, c), K(o, d), K(d, h), K(d, m), K(d, f), K(f, p), K(d, g), K(d, b), E = !0, M || (C = [
          ot(
            h,
            "click",
            /*click_handler*/
            n[6]
          ),
          ot(
            b,
            "click",
            /*click_handler_1*/
            n[7]
          )
        ], M = !0);
      },
      p(y, [j]) {
        const te = {};
        j & /*$$scope, selectedDevType*/
        2050 && (te.$$scope = { dirty: j, ctx: y }), !a && j & /*selectedDevType*/
        2 && (a = !0, te.value = /*selectedDevType*/
        y[1], Pt(() => a = !1)), i.$set(te), (!E || j & /*experience*/
        1) && Kt(
          p,
          /*experience*/
          y[0]
        );
      },
      i(y) {
        E || (O(i.$$.fragment, y), E = !0);
      },
      o(y) {
        D(i.$$.fragment, y), E = !1;
      },
      d(y) {
        y && Z(e), Ie(i), M = !1, We(C);
      }
    }
  );
}
function cl(n, e, t) {
  let { rateManager: s } = e, { experience: i = 2 } = e, { selectedDevType: a } = e, l = s.getMinExperienceValue();
  const r = s.getRateList();
  function o(d) {
    a = d, t(1, a);
  }
  const u = () => t(0, i = Math.max(l, i - 1)), c = () => t(0, i += 1);
  return n.$$set = (d) => {
    "rateManager" in d && t(4, s = d.rateManager), "experience" in d && t(0, i = d.experience), "selectedDevType" in d && t(1, a = d.selectedDevType);
  }, [
    i,
    a,
    l,
    r,
    s,
    o,
    u,
    c
  ];
}
let Ps = class extends ke {
  constructor(e) {
    super(), De(
      this,
      e,
      cl,
      ul,
      Ae,
      {
        rateManager: 4,
        experience: 0,
        selectedDevType: 1
      },
      rl
    );
  }
  get rateManager() {
    return this.$$.ctx[4];
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
  get selectedDevType() {
    return this.$$.ctx[1];
  }
  set selectedDevType(e) {
    this.$$set({ selectedDevType: e }), I();
  }
};
Fe(Ps, { rateManager: {}, experience: {}, selectedDevType: {} }, [], [], !0);
function dl(n) {
  On(n, "svelte-13enyv", ".pay.svelte-13enyv.svelte-13enyv{height:447px;width:100%;background:#9FF000;border-radius:32px;font-size:24px;display:flex;flex-direction:column;justify-content:center;align-items:center}.pay.svelte-13enyv span.title.svelte-13enyv{margin-top:60px;color:#0E130B;margin-bottom:16px}.pay.svelte-13enyv span.amount.svelte-13enyv{color:#0E130B;font-weight:900;font-size:60px;margin-bottom:54px}.pay.svelte-13enyv button.svelte-13enyv{display:inline-flex;padding:16px 24px;background-color:white;border-radius:11px;border:0;color:#000;font-family:Montserrat,serif;font-size:16px;font-weight:700}");
}
function fl(n) {
  let e, t, s, i, a, l, r, o;
  return {
    c() {
      e = Y("div"), t = Y("span"), t.textContent = "Votre salaire annuel brut", s = He(), i = Y("span"), a = Et(
        /*amount*/
        n[0]
      ), l = Et(" €"), r = He(), o = Y("button"), o.textContent = "Envie de nous rejoindre ?", ie(t, "class", "title svelte-13enyv"), ie(i, "class", "amount svelte-13enyv"), ie(o, "class", "svelte-13enyv"), ie(e, "class", "pay svelte-13enyv");
    },
    m(u, c) {
      Q(u, e, c), K(e, t), K(e, s), K(e, i), K(i, a), K(i, l), K(e, r), K(e, o);
    },
    p(u, [c]) {
      c & /*amount*/
      1 && Kt(
        a,
        /*amount*/
        u[0]
      );
    },
    i: tt,
    o: tt,
    d(u) {
      u && Z(e);
    }
  };
}
function hl(n, e, t) {
  let { amount: s = 450 } = e;
  return n.$$set = (i) => {
    "amount" in i && t(0, s = i.amount);
  }, [s];
}
class Us extends ke {
  constructor(e) {
    super(), De(this, e, hl, fl, Ae, { amount: 0 }, dl);
  }
  get amount() {
    return this.$$.ctx[0];
  }
  set amount(e) {
    this.$$set({ amount: e }), I();
  }
}
Fe(Us, { amount: {} }, [], [], !0);
function ml(n) {
  On(n, "svelte-5t6fcz", ".component.svelte-5t6fcz{display:flex;justify-content:center;width:100%;color:#FFF;font-family:Montserrat,serif;font-size:16px;font-weight:500}.block.svelte-5t6fcz{width:40%}.block.svelte-5t6fcz:nth-child(1){margin-right:24px}");
}
function pl(n) {
  let e, t, s, i, a, l, r, o, u, c;
  function d(g) {
    n[5](g);
  }
  function h(g) {
    n[6](g);
  }
  let m = { rateManager: (
    /*rateManager*/
    n[3]
  ) };
  /*selectedDevType*/
  n[0] !== void 0 && (m.selectedDevType = /*selectedDevType*/
  n[0]), /*experience*/
  n[1] !== void 0 && (m.experience = /*experience*/
  n[1]), s = new Ps({ props: m }), oe.push(() => Ut(s, "selectedDevType", d)), oe.push(() => Ut(s, "experience", h));
  function f(g) {
    n[7](g);
  }
  let p = {};
  return (
    /*amount*/
    n[2] !== void 0 && (p.amount = /*amount*/
    n[2]), o = new Us({ props: p }), oe.push(() => Ut(o, "amount", f)), {
      c() {
        e = Y("div"), t = Y("div"), ve(s.$$.fragment), l = He(), r = Y("div"), ve(o.$$.fragment), ie(t, "class", "block svelte-5t6fcz"), ie(r, "class", "block svelte-5t6fcz"), ie(e, "class", "component svelte-5t6fcz");
      },
      m(g, b) {
        Q(g, e, b), K(e, t), _e(s, t, null), K(e, l), K(e, r), _e(o, r, null), c = !0;
      },
      p(g, [b]) {
        const E = {};
        !i && b & /*selectedDevType*/
        1 && (i = !0, E.selectedDevType = /*selectedDevType*/
        g[0], Pt(() => i = !1)), !a && b & /*experience*/
        2 && (a = !0, E.experience = /*experience*/
        g[1], Pt(() => a = !1)), s.$set(E);
        const M = {};
        !u && b & /*amount*/
        4 && (u = !0, M.amount = /*amount*/
        g[2], Pt(() => u = !1)), o.$set(M);
      },
      i(g) {
        c || (O(s.$$.fragment, g), O(o.$$.fragment, g), c = !0);
      },
      o(g) {
        D(s.$$.fragment, g), D(o.$$.fragment, g), c = !1;
      },
      d(g) {
        g && Z(e), Ie(s), Ie(o);
      }
    }
  );
}
function gl(n, e, t) {
  let { company: s } = e, i = Zi.create(s), a, l, r;
  function o(d) {
    a = d, t(0, a);
  }
  function u(d) {
    l = d, t(1, l);
  }
  function c(d) {
    r = d, t(2, r), t(3, i), t(1, l), t(0, a);
  }
  return n.$$set = (d) => {
    "company" in d && t(4, s = d.company);
  }, n.$$.update = () => {
    n.$$.dirty & /*experience, selectedDevType*/
    3 && t(2, r = i.getSalary(l, a) || 0);
  }, [
    a,
    l,
    r,
    i,
    s,
    o,
    u,
    c
  ];
}
class Bs extends ke {
  constructor(e) {
    super(), De(this, e, gl, pl, Ae, { company: 4 }, ml);
  }
  get company() {
    return this.$$.ctx[4];
  }
  set company(e) {
    this.$$set({ company: e }), I();
  }
}
customElements.define("renumerator-component", Fe(Bs, { company: {} }, [], [], !0));
class _l extends HTMLElement {
  connectedCallback() {
    const e = this.getAttribute("company"), t = e ?? "";
    new Bs({ target: this, props: { company: t } });
  }
}
customElements.get("renumerator-component") ? console.log("déjà présent !") : customElements.define("renumerator-component", _l);
