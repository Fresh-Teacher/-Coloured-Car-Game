(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var aa = {},
        n = this || self;

    function ba(a) {
        a = a.split(".");
        for (var b = n, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ca(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function da(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ea(a) {
        return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha)
    }
    var fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0;

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ja(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function ka(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka = ia : ka = ja;
        return ka.apply(null, arguments)
    }

    function la(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ma(a, b) {
        a = a.split(".");
        var c = n;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function na(a) {
        return a
    };
    let oa = (new Date).getTime();

    function pa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function ra(a, b) {
        let c = 0;
        a = pa(String(a)).split(".");
        b = pa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = sa(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || sa(0 == e[2].length, 0 == f[2].length) || sa(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function sa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var ta, ua = ba("CLOSURE_FLAGS"),
        va = ua && ua[610401301];
    ta = null != va ? va : !1;

    function wa() {
        var a = n.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var xa;
    const ya = n.navigator;
    xa = ya ? ya.userAgentData || null : null;

    function Ba(a) {
        return ta ? xa ? xa.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function p(a) {
        return -1 != wa().indexOf(a)
    };

    function Ca() {
        return ta ? !!xa && 0 < xa.brands.length : !1
    }

    function Da() {
        return Ca() ? !1 : p("Trident") || p("MSIE")
    }

    function Ea() {
        return Ca() ? Ba("Microsoft Edge") : p("Edg/")
    }

    function Fa() {
        !p("Safari") || Ga() || (Ca() ? 0 : p("Coast")) || (Ca() ? 0 : p("Opera")) || (Ca() ? 0 : p("Edge")) || Ea() || Ca() && Ba("Opera")
    }

    function Ga() {
        return Ca() ? Ba("Chromium") : (p("Chrome") || p("CriOS")) && !(Ca() ? 0 : p("Edge")) || p("Silk")
    }

    function Ia(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Ja() {
        var a = wa();
        if (Da()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Ia(b);
        return (Ca() ? 0 : p("Opera")) ? a(["Version",
            "Opera"
        ]) : (Ca() ? 0 : p("Edge")) ? a(["Edge"]) : Ea() ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : Ga() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ka(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function La(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ma(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Na(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Oa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Pa(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Qa(a, b) {
        a: {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ra(a, b) {
        return 0 <= Ka(a, b)
    }

    function q(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ta(a) {
        Ta[" "](a);
        return a
    }
    Ta[" "] = function() {};
    var Ua = Da();
    !p("Android") || Ga();
    Ga();
    Fa();
    var Va = {},
        Wa = null;

    function Xa(a) {
        var b = [];
        Ya(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Ya(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var k = a.charAt(d++),
                    m = Wa[k];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(k)) throw Error("Unknown base64 encoding at char: " + k);
            }
            return l
        }
        Za();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function Za() {
        if (!Wa) {
            Wa = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Va[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Wa[f] && (Wa[f] = e)
                }
            }
        }
    };
    var $a = "undefined" !== typeof Uint8Array;
    const ab = !Ua && "function" === typeof n.btoa;
    const bb = Symbol();

    function cb(a, b) {
        if (bb) return a[bb] |= b;
        if (void 0 !== a.h) return a.h |= b;
        Object.defineProperties(a, {
            h: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function db(a, b) {
        bb ? a[bb] && (a[bb] &= ~b) : void 0 !== a.h && (a.h &= ~b)
    }

    function r(a) {
        let b;
        bb ? b = a[bb] : b = a.h;
        return null == b ? 0 : b
    }

    function eb(a, b) {
        bb ? a[bb] = b : void 0 !== a.h ? a.h = b : Object.defineProperties(a, {
            h: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }

    function fb(a) {
        cb(a, 1);
        return a
    }

    function gb(a) {
        return !!(r(a) & 2)
    }

    function hb(a) {
        cb(a, 16);
        return a
    }

    function ib(a, b) {
        eb(b, (a | 0) & -51)
    }

    function jb(a, b) {
        eb(b, (a | 18) & -41)
    };
    var kb = {};

    function lb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let mb;
    var nb = Object.freeze(eb([], 23));

    function ob(a) {
        if (r(a.s) & 2) throw Error();
    }

    function pb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && lb(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function qb(a) {
        if (null == a) return a;
        switch (typeof a) {
            case "string":
                return +a;
            case "number":
                return a
        }
    }

    function rb(a) {
        return a
    }

    function sb(a, b) {
        const c = r(a);
        let d = c;
        0 === d && (d |= b & 16);
        d |= b & 2;
        d !== c && eb(a, d)
    };

    function tb(a) {
        const b = a.j + a.U;
        return a.G || (a.G = a.s[b] = {})
    }

    function t(a, b, c) {
        return -1 === b ? null : b >= a.j ? a.G ? a.G[b] : void 0 : c && a.G && (c = a.G[b], null != c) ? c : a.s[b + a.U]
    }

    function x(a, b, c, d) {
        ob(a);
        return z(a, b, c, d)
    }

    function z(a, b, c, d) {
        a.u && (a.u = void 0);
        if (b >= a.j || d) return tb(a)[b] = c, a;
        a.s[b + a.U] = c;
        (c = a.G) && b in c && delete c[b];
        return a
    }

    function ub(a, b, c, d, e) {
        let f = t(a, b, d);
        Array.isArray(f) || (f = nb);
        const g = r(f);
        g & 1 || fb(f);
        if (e) g & 2 || cb(f, 18), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && db(f, 16) : (f = fb(Array.prototype.slice.call(f)), z(a, b, f, d))
        }
        return f
    }

    function vb(a, b) {
        a = t(a, b);
        return null == a ? a : !!a
    }

    function wb(a, b, c) {
        const d = gb(a.s);
        let e = ub(a, b, 1, void 0, d),
            f = r(e);
        if (!(f & 4)) {
            Object.isFrozen(e) && (e = fb(e.slice()), z(a, b, e));
            let g = 0,
                h = 0;
            for (; g < e.length; g++) {
                const l = c(e[g]);
                null != l && (e[h++] = l)
            }
            h < g && (e.length = h);
            f |= 5;
            d && (f |= 18);
            eb(e, f);
            f & 2 && Object.freeze(e)
        }!d && (f & 2 || Object.isFrozen(e)) && (e = Array.prototype.slice.call(e), cb(e, 5), z(a, b, e));
        return e
    }

    function A(a, b, c = !1) {
        return B(vb(a, b), c)
    }

    function xb(a, b, c) {
        if (null == c) a = x(a, b, nb);
        else {
            var d = r(c);
            if (!(d & 4)) {
                if (d & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
                for (let e = 0; e < c.length; e++) c[e] = c[e];
                eb(c, d | 5)
            }
            a = x(a, b, c)
        }
        return a
    }

    function C(a, b, c, d) {
        ob(a);
        c !== d ? z(a, b, c) : z(a, b, void 0, !1);
        return a
    }

    function yb(a, b, c, d) {
        ob(a);
        (c = zb(a, c)) && c !== b && null != d && z(a, c, void 0, !1);
        return z(a, b, d)
    }

    function Ab(a, b, c) {
        return zb(a, b) === c ? c : -1
    }

    function zb(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != t(a, e) && (0 !== c && z(a, c, void 0, !1), c = e)
        }
        return c
    }

    function Bb(a, b, c, d) {
        const e = t(a, c, d); {
            let f = !1;
            null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.ta !== kb ? f ? (sb(e, r(a.s)), b = new b(e)) : b = void 0 : b = e
        }
        b !== e && null != b && z(a, c, b, d);
        return b
    }

    function D(a, b, c) {
        b = Bb(a, b, c, !1);
        if (null == b) return b;
        if (!gb(a.s)) {
            const d = Cb(b);
            d !== b && (b = d, z(a, c, b, !1))
        }
        return b
    }

    function Db(a, b, c, d, e) {
        var f = !!(e & 2);
        a.h || (a.h = {});
        var g = a.h[c],
            h = ub(a, c, 3, void 0, f);
        if (!g) {
            var l = h;
            g = [];
            f = !!(e & 2);
            h = !!(r(l) & 2);
            const v = l;
            !f && h && (l = Array.prototype.slice.call(l));
            var k = e | (h ? 2 : 0);
            e = h;
            let w = 0;
            for (; w < l.length; w++) {
                var m = l[w];
                var u = b;
                Array.isArray(m) ? (sb(m, k), m = new u(m)) : m = void 0;
                void 0 !== m && (e = e || !!(2 & r(m.s)), g.push(m))
            }
            a.h[c] = g;
            k = r(l);
            b = k | 33;
            b = e ? b & -9 : b | 8;
            k != b && (e = l, Object.isFrozen(e) && (e = Array.prototype.slice.call(e)), eb(e, b), l = e);
            v !== l && z(a, c, l);
            (f || 1 === d && h) && cb(g, 18);
            1 === d && Object.freeze(g);
            return g
        }
        if (3 === d) return g;
        f || ((f = Object.isFrozen(g), 1 !== d || f) ? 2 === d && f && (g = Array.prototype.slice.call(g), a.h[c] = g) : Object.freeze(g));
        return g
    }

    function F(a, b, c) {
        var d = r(a.s),
            e = !!(d & 2);
        b = Db(a, b, c, e ? 1 : 2, d);
        a = ub(a, c, 3, void 0, e);
        if (!(e || r(a) & 8)) {
            for (e = 0; e < b.length; e++) c = b[e], d = Cb(c), c !== d && (b[e] = d, a[e] = d.s);
            cb(a, 8)
        }
        return b
    }

    function Eb(a, b, c) {
        ob(a);
        null == c && (c = void 0);
        return z(a, b, c)
    }

    function Fb(a, b, c, d) {
        ob(a);
        null == d && (d = void 0);
        return yb(a, b, c, d)
    }

    function Gb(a, b, c, d) {
        ob(a);
        var e = null == c ? nb : fb([]);
        if (null != c) {
            var f = !!c.length;
            for (var g = 0; g < c.length; g++) {
                const h = c[g];
                f = f && !gb(h.s);
                e[g] = h.s
            }
            f = (f ? 8 : 0) | 1;
            g = r(e);
            (g & f) !== f && (Object.isFrozen(e) && (e = Array.prototype.slice.call(e)), eb(e, g | f));
            a.h || (a.h = {});
            a.h[b] = c
        } else a.h && (a.h[b] = void 0);
        return z(a, b, e, d)
    }

    function Hb(a, b) {
        return qb(t(a, b))
    }

    function Ib(a, b) {
        a: if (a = t(a, b), null != a) {
            switch (typeof a) {
                case "string":
                    a = +a;
                    break a;
                case "number":
                    break a
            }
            a = void 0
        }return a
    }

    function B(a, b) {
        return null == a ? b : a
    }

    function G(a, b) {
        return B(t(a, b), "")
    }

    function Jb(a, b) {
        const c = t(a, b);
        var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
        null != d && d !== c && z(a, b, d);
        return B(d, 0)
    }

    function H(a, b) {
        return B(t(a, b), 0)
    }

    function Kb(a, b, c, d) {
        return D(a, b, Ab(a, d, c))
    };
    let Lb;

    function Mb(a, b) {
        Lb = b;
        a = new a(b);
        Lb = void 0;
        return a
    };

    function Nb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (r(a) & 128)) return a = Array.prototype.slice.call(a), pb(a), a
                    } else if ($a && null != a && a instanceof Uint8Array) {
                    if (ab) {
                        for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
                        b += String.fromCharCode.apply(null, a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        Za();
                        b = Va[b];
                        const g = Array(Math.floor(a.length / 3)),
                            h = b[64] || "";
                        let l = 0,
                            k = 0;
                        for (; l < a.length - 2; l +=
                            3) {
                            var c = a[l],
                                d = a[l + 1],
                                e = a[l + 2],
                                f = b[c >> 2];
                            c = b[(c & 3) << 4 | d >> 4];
                            d = b[(d & 15) << 2 | e >> 6];
                            e = b[e & 63];
                            g[k++] = f + c + d + e
                        }
                        f = 0;
                        e = h;
                        switch (a.length - l) {
                            case 2:
                                f = a[l + 1], e = b[(f & 15) << 2] || h;
                            case 1:
                                a = a[l], g[k] = b[a >> 2] + b[(a & 3) << 4 | f >> 4] + e + h
                        }
                        a = g.join("")
                    }
                    return a
                }
        }
        return a
    };

    function Ob(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Pb(a, b, c, void 0 !== d);
            else if (lb(a)) {
                const e = {};
                for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = Ob(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Pb(a, b, c, d) {
        const e = r(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = Ob(a[f], b, c, d);
        c(e, a);
        return a
    }

    function Qb(a) {
        return a.ta === kb ? a.toJSON() : Nb(a)
    }

    function Rb(a, b) {
        a & 128 && pb(b)
    };

    function Sb(a, b, c = jb) {
        if (null != a) {
            if ($a && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = r(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return eb(a, d | 18), a;
                a = Pb(a, Sb, d & 4 ? jb : c, !0);
                b = r(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.ta === kb ? Tb(a) : a
        }
    }

    function Ub(a, b, c, d, e, f, g) {
        (a = a.h && a.h[c]) ? (d = r(a), d & 2 ? d = a : (f = Na(a, Tb), jb(d, f), Object.freeze(f), d = f), Gb(b, c, d, e)) : x(b, c, Sb(d, f, g), e)
    }

    function Tb(a) {
        if (gb(a.s)) return a;
        a = Vb(a, !0);
        cb(a.s, 18);
        return a
    }

    function Vb(a, b) {
        const c = a.s;
        var d = hb([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.G;
        if (e) {
            d.length = c.length;
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (r(c) & 128) && pb(d);
        b = b || gb(a.s) ? jb : ib;
        d = Mb(a.constructor, d);
        a.La && (d.La = a.La.slice());
        f = !!(r(c) & 16);
        const g = e ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Ub(a, d, h - a.U, c[h], !1, f, b);
        if (e)
            for (const h in e) Ub(a, d, +h, e[h], !0, f, b);
        return d
    }

    function Cb(a) {
        if (!gb(a.s)) return a;
        const b = Vb(a, !1);
        b.u = a;
        return b
    };
    var I = class {
        constructor(a, b, c) {
            null == a && (a = Lb);
            Lb = void 0;
            var d = this.constructor.messageId;
            if (null == a) {
                a = d ? [d] : [];
                var e = !0;
                eb(a, 48)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (d && d !== a[0]) throw Error();
                var f = cb(a, 0) | 32;
                e = 0 !== (16 & f);
                if (128 & f) throw Error();
                eb(a, f)
            }
            this.U = d ? 0 : -1;
            this.h = void 0;
            this.s = a;
            a: {
                f = this.s.length;d = f - 1;
                if (f && (f = this.s[d], lb(f))) {
                    this.G = f;
                    this.j = d - this.U;
                    break a
                }
                void 0 !== b && -1 < b ? (this.j = Math.max(b, d + 1 - this.U), this.G = void 0) : this.j = Number.MAX_VALUE
            }
            if (this.G && "g" in this.G) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = e && !0;
                e = this.j;
                let h;
                for (d = 0; d < c.length; d++)
                    if (f = c[d], f < e) {
                        f += this.U;
                        var g = a[f];
                        g ? Wb(g, b) : a[f] = nb
                    } else h || (h = tb(this)), (g = h[f]) ? Wb(g, b) : h[f] = nb
            }
        }
        toJSON() {
            const a = this.s;
            return mb ? a : Pb(a, Qb, Rb)
        }
    };

    function Wb(a, b) {
        if (Array.isArray(a)) {
            var c = r(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && eb(a, c | d)
        }
    }
    I.prototype.ta = kb;

    function Xb(a, b) {
        return Nb(b)
    };
    const Yb = a => null !== a && void 0 !== a;
    let Zb = void 0;

    function $b(a, b) {
        const c = Zb;
        Zb = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function ac(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Mb(a, hb(b))
            }
            return b
        }
    };
    var bc = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var ec = class extends I {
            constructor(a) {
                super(a, -1, dc)
            }
        },
        dc = [2, 3];

    function fc(a, b) {
        this.i = a === gc && b || "";
        this.h = hc
    }
    var hc = {},
        gc = {};

    function ic(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function jc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function kc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function lc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function mc(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function nc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function oc(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function pc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function qc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var rc;

    function sc() {
        if (void 0 === rc) {
            var a = null,
                b = n.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    n.console && n.console.error(c.message)
                }
                rc = a
            } else rc = a
        }
        return rc
    };
    const tc = {};
    class uc {
        constructor(a, b) {
            this.h = b === tc ? a : ""
        }
        toString() {
            return this.h.toString()
        }
    };
    var wc = class {
        constructor(a, b) {
            this.h = b === vc ? a : ""
        }
        toString() {
            return this.h + ""
        }
    };

    function xc(a, b) {
        a = yc.exec(zc(a).toString());
        var c = a[3] || "";
        return Ac(a[1] + Bc("?", a[2] || "", b) + Bc("#", c))
    }

    function zc(a) {
        return a instanceof wc && a.constructor === wc ? a.h : "type_error:TrustedResourceUrl"
    }
    var yc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        vc = {};

    function Ac(a) {
        const b = sc();
        a = b ? b.createScriptURL(a) : a;
        return new wc(a, vc)
    }

    function Bc(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function Cc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Dc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ca(f) || da(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (da(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                La(g ? q(f) : f, d)
            }
        }
    }

    function Ec(a) {
        this.h = a || n.document || document
    }
    Ec.prototype.getElementsByTagName = function(a, b) {
        return (b || this.h).getElementsByTagName(String(a))
    };
    Ec.prototype.createElement = function(a) {
        var b = this.h;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    Ec.prototype.createTextNode = function(a) {
        return this.h.createTextNode(String(a))
    };
    Ec.prototype.append = function(a, b) {
        Dc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    Ec.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Fc() {
        return ta && xa ? xa.mobile : !Gc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"))
    }

    function Gc() {
        return ta && xa ? !xa.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk")
    };
    var Hc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Ic = /#|$/;

    function Jc(a, b) {
        var c = a.search(Ic);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Kc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ta(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function Lc(a) {
        return Kc(a.top) ? a.top : null
    }

    function Mc(a, b) {
        const c = Nc("SCRIPT", a);
        c.src = zc(b);
        (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Oc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Pc(a, b) {
        if (!Qc() && !Rc()) {
            let c = Math.random();
            if (c < b) return c = Sc(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Sc() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function J(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Tc(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Rc = jc(() => Oa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Uc) || 1E-4 > Math.random()),
        Qc = jc(() => -1 != wa().indexOf("MSIE"));
    const Uc = a => -1 != wa().indexOf(a);
    var Vc = /^([0-9.]+)px$/,
        Wc = /^(-?[0-9.]{1,30})$/;

    function Xc(a) {
        if (!Wc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function K(a) {
        return (a = Vc.exec(a)) ? +a[1] : null
    }
    var Yc = (a, b) => {
            for (let e = 0; 50 > e; ++e) {
                try {
                    var c = !(!a.frames || !a.frames[b])
                } catch {
                    c = !1
                }
                if (c) return a;
                a: {
                    try {
                        const f = a.parent;
                        if (f && f != a) {
                            var d = f;
                            break a
                        }
                    } catch {}
                    d = null
                }
                if (!(a = d)) break
            }
            return null
        },
        Zc = jc(() => Fc() ? 2 : Gc() ? 1 : 0),
        $c = (a, b) => {
            J(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    let ad = [];
    const bd = () => {
        const a = ad;
        ad = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var cd = a => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        ed = a => {
            var b = dd;
            "complete" === b.readyState || "interactive" === b.readyState ? (ad.push(a), 1 == ad.length && (window.Promise ? Promise.resolve().then(bd) : window.setImmediate ? setImmediate(bd) : setTimeout(bd, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function Nc(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function gd(a, b, c = null, d = !1, e = !1) {
        hd(a, b, c, d, e)
    }

    function hd(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Nc("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const l = Ka(h, f);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                mc(f, "load", g);
                mc(f, "error", g)
            };
            lc(f, "load", g);
            lc(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var jd = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            J(a, (c, d) => {
                c && (b += `&${d}=${encodeURIComponent(c)}`)
            });
            id(b)
        },
        id = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : gd(b, a, void 0, !1, !1)
        };
    let kd = null;
    var dd = document,
        L = window;
    let ld = null;
    var md = (a, b = []) => {
        let c = !1;
        n.google_logging_queue || (c = !0, n.google_logging_queue = []);
        n.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == ld) {
                ld = !1;
                try {
                    var d = Lc(n);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (ld = !0);
                    n.localStorage.getItem("google_logging") && (ld = !0)
                } catch (e) {}
            }
            a = ld
        }
        a && (d = n.document, a = new fc(gc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Ac(a instanceof fc && a.constructor === fc && a.h === hc ? a.i : "type_error:Const"), Mc(d, a))
    };

    function nd(a = n) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function od(a = nd()) {
        return a ? Kc(a.master) ? a.master : null : null
    };

    function pd(a, ...b) {
        if (0 === b.length) return Ac(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ac(c.join(""))
    };

    function qd(a) {
        a = a[0];
        const b = sc();
        a = b ? b.createScript(a) : a;
        return new uc(a, tc)
    };
    var rd = a => {
            a = od(nd(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        sd = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        td = () => {
            if (!L) return !1;
            try {
                return !(!L.navigator.standalone && !L.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        ud = a => {
            if (!a) return "";
            a = a.toLowerCase();
            "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        };
    class vd {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var wd = a => !!(a.error && a.meta && a.id);
    const xd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var yd = class {
            constructor(a, b) {
                this.h = a;
                this.i = b
            }
        },
        zd = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.Ma = !!c;
                this.depth = null
            }
        };

    function Ad(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Bd(a, b, c, d, e) {
        const f = [];
        J(a, function(g, h) {
            (g = Cd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Cd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Cd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Bd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Dd(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Ed(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Dd(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.h.length; f++) {
            const g = a.h[f],
                h = a.i[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = Bd(h[l], a.j, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Fd {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.h = []
        }
    };

    function Gd(a, b) {
        0 <= b && 1 >= b && (a.h = b)
    }

    function Hd(a, b, c, d = !1, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Fd ? f = c : (f = new Fd, J(c, (h, l) => {
                var k = f;
                const m = k.l++;
                h = Ad(l, h);
                k.h.push(m);
                k.i[m] = h
            }));
            const g = Ed(f, "/pagead/gen_204?id=" + b + "&");
            g && gd(n, g)
        } catch (f) {}
    }
    class Id {
        constructor() {
            this.h = Math.random()
        }
    };
    let Jd = null;

    function Kd() {
        if (null === Jd) {
            Jd = "";
            try {
                let a = "";
                try {
                    a = n.top.location.hash
                } catch (b) {
                    a = n.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Jd = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Jd
    };

    function Ld() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Md() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    class Nd {
        constructor(a, b) {
            var c = Md() || Ld();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Od = n.performance,
        Pd = !!(Od && Od.mark && Od.measure && Od.clearMarks),
        Qd = jc(() => {
            var a;
            if (a = Pd) a = Kd(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Rd(a) {
        a && Od && Qd() && (Od.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Od.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Sd(a) {
        a.h = !1;
        a.i != a.j.google_js_reporting_queue && (Qd() && La(a.i, Rd), a.i.length = 0)
    }
    class Td {
        constructor(a) {
            this.i = [];
            this.j = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = Qd() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.h) return null;
            a = new Nd(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Od && Qd() && Od.mark(b);
            return a
        }
        end(a) {
            if (this.h && "number" === typeof a.value) {
                a.duration = (Md() || Ld()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Od && Qd() && Od.mark(b);
                !this.h || 2048 < this.i.length ||
                    this.i.push(a)
            }
        }
    };

    function Ud(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    class Vd {
        constructor(a, b = null) {
            this.v = a;
            this.h = null;
            this.m = this.H;
            this.i = b;
            this.j = !1
        }
        Qa(a) {
            this.m = a
        }
        va(a) {
            this.h = a
        }
        l(a) {
            this.j = a
        }
        ea(a, b, c) {
            let d, e;
            try {
                this.i && this.i.h ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    Rd(e), b = this.m(a, new vd(f, {
                        message: Ud(f)
                    }), void 0, c)
                } catch (g) {
                    this.H(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        ma(a, b) {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        H(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Ha = new Fd;
                var g = Ha;
                g.h.push(1);
                g.i[1] = Ad("context", a);
                wd(b) || (b = new vd(b, {
                    message: Ud(b)
                }));
                if (b.msg) {
                    g = Ha;
                    var h = b.msg.substring(0, 512);
                    g.h.push(2);
                    g.i[2] = Ad("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (Sa) {}
                if (d) try {
                    d(b)
                } catch (Sa) {}
                d = Ha;
                l = [l];
                d.h.push(3);
                d.i[3] = l;
                d = n;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (Kc(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new zd(m || "", k));
                    try {
                        d = k.parent
                    } catch (Sa) {
                        d = null
                    }
                } while (d && k != d);
                for (let Sa = 0, mf = l.length - 1; Sa <= mf; ++Sa) l[Sa].depth = mf - Sa;
                k = n;
                if (k.location &&
                    k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var u = l[m];
                        u.url || (u.url = k.location.ancestorOrigins[m - 1] || "", u.Ma = !0)
                    }
                var v = l;
                let cc = new zd(n.location.href, n, !1);
                k = null;
                const fd = v.length - 1;
                for (u = fd; 0 <= u; --u) {
                    var w = v[u];
                    !k && xd.test(w.url) && (k = w);
                    if (w.url && !w.Ma) {
                        cc = w;
                        break
                    }
                }
                w = null;
                const Si = v.length && v[fd].url;
                0 != cc.depth && Si && (w = v[fd]);
                f = new yd(cc, w);
                if (f.i) {
                    v = Ha;
                    var y = f.i.url || "";
                    v.h.push(4);
                    v.i[4] = Ad("top", y)
                }
                var E = {
                    url: f.h.url || ""
                };
                if (f.h.url) {
                    var za =
                        f.h.url.match(Hc),
                        S = za[1],
                        Aa = za[3],
                        qa = za[4];
                    y = "";
                    S && (y += S + ":");
                    Aa && (y += "//", y += Aa, qa && (y += ":" + qa));
                    var nf = y
                } else nf = "";
                S = Ha;
                E = [E, {
                    url: nf
                }];
                S.h.push(5);
                S.i[5] = E;
                Hd(this.v, e, Ha, this.j, c)
            } catch (Ha) {
                try {
                    Hd(this.v, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ud(Ha),
                        url: f && f.h.url
                    }, this.j, c)
                } catch (cc) {}
            }
            return !0
        }
        Z(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.H(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0)
            })
        }
    };
    var Wd = a => "string" === typeof a,
        Xd = a => void 0 === a;
    var Zd = class extends I {
            constructor(a) {
                super(a, -1, Yd)
            }
        },
        Yd = [2, 8],
        $d = [3, 4, 5],
        ae = [6, 7];

    function be(a) {
        return null != a ? !a : a
    }

    function ce(a, b) {
        let c = !1;
        for (let d = 0; d < a.length; d++) {
            const e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function de(a, b) {
        var c = F(a, Zd, 2);
        if (!c.length) return ee(a, b);
        a = H(a, 1);
        if (1 === a) return be(de(c[0], b));
        c = Na(c, d => () => de(d, b));
        switch (a) {
            case 2:
                return ce(c, !1);
            case 3:
                return ce(c, !0)
        }
    }

    function ee(a, b) {
        const c = zb(a, $d);
        a: {
            switch (c) {
                case 3:
                    var d = H(a, Ab(a, $d, 3));
                    break a;
                case 4:
                    d = H(a, Ab(a, $d, 4));
                    break a;
                case 5:
                    d = H(a, Ab(a, $d, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b(...wb(a, 8, rb))
            } catch (f) {
                return
            }
            b = H(a, 1);
            if (4 === b) return !!e;
            if (5 === b) return null != e;
            if (12 === b) a = G(a, Ab(a, ae, 7));
            else a: {
                switch (c) {
                    case 4:
                        a = Jb(a, Ab(a, ae, 6));
                        break a;
                    case 5:
                        a = G(a, Ab(a, ae, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === ra(String(e), a);
                if (null != e) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return Wd(a) && Wd(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === ra(String(e), a);
                    case 11:
                        return null != e && 1 === ra(String(e), a)
                }
            }
        }
    }

    function fe(a, b) {
        return !a || !(!b || !de(a, b))
    };
    var he = class extends I {
            constructor(a) {
                super(a, -1, ge)
            }
        },
        ge = [4];
    var ie = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var ke = class extends I {
            constructor(a) {
                super(a, -1, je)
            }
        },
        le = ac(ke),
        je = [5],
        me = [1, 2, 3, 6, 7];
    var oe = class extends I {
            constructor() {
                super(void 0, -1, ne)
            }
        },
        ne = [2];

    function pe(a, b) {
        return x(a, 1, b)
    }
    var qe = class extends I {
        constructor() {
            super()
        }
    };

    function re(a, b) {
        return C(a, 1, b, 0)
    }

    function se(a, b) {
        return C(a, 2, b, 0)
    }
    var te = class extends I {
        constructor() {
            super()
        }
        getWidth() {
            return B(t(this, 1), 0)
        }
        getHeight() {
            return B(t(this, 2), 0)
        }
    };

    function ue(a, b) {
        return Eb(a, 1, b)
    }

    function ve(a, b) {
        return Eb(a, 2, b)
    }

    function we(a, b) {
        Eb(a, 3, b)
    }

    function xe(a, b) {
        return C(a, 5, null == b ? b : !!b, !1)
    }
    var ye = class extends I {
        constructor() {
            super()
        }
        getContentUrl() {
            return G(this, 4)
        }
    };
    var ze = class extends I {
        constructor() {
            super()
        }
        getContentUrl() {
            return G(this, 1)
        }
    };

    function Ae(a, b) {
        return Fb(a, 4, Be, b)
    }
    var Ce = class extends I {
            constructor() {
                super()
            }
        },
        Be = [4, 5, 6, 8, 9, 10];

    function De(a, b) {
        return C(a, 1, b, 0)
    }

    function Ee(a, b) {
        return C(a, 2, b, 0)
    }
    var Fe = class extends I {
        constructor() {
            super()
        }
    };
    var Ge = class extends I {
            constructor() {
                super()
            }
        },
        He = [1, 2];

    function Ie(a, b) {
        return Eb(a, 1, b)
    }

    function Je(a, b) {
        return Gb(a, 2, b)
    }

    function Ke(a, b) {
        return xb(a, 4, b)
    }

    function Le(a, b) {
        return Gb(a, 5, b)
    }

    function Me(a, b) {
        return C(a, 6, b, 0)
    }
    var Oe = class extends I {
            constructor() {
                super(void 0, -1, Ne)
            }
        },
        Ne = [2, 4, 5];
    var Qe = class extends I {
            constructor() {
                super(void 0, -1, Pe)
            }
        },
        Pe = [5],
        Re = [1, 2, 3, 4];
    var Te = class extends I {
            constructor() {
                super(void 0, -1, Se)
            }
        },
        Se = [2, 3];

    function Ue(a, b) {
        return Fb(a, 4, Ve, b)
    }
    var We = class extends I {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                return B(t(this, 2), 0)
            }
        },
        Ve = [4, 5, 7];

    function Xe(a, ...b) {
        Ye(a, ...b.map(c => ({
            Ta: 4,
            message: c
        })))
    }

    function Ze(a, ...b) {
        Ye(a, ...b.map(c => ({
            Ta: 7,
            message: c
        })))
    };

    function $e(a) {
        return JSON.stringify([a.map(b => [{
            [b.Ta]: b.message.toJSON()
        }])])
    };
    var af = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function bf() {
        this.v = this.v;
        this.j = this.j
    }
    bf.prototype.v = !1;

    function cf(a) {
        a.v || (a.v = !0, a.h())
    }

    function df(a, b) {
        a.v ? b() : (a.j || (a.j = []), a.j.push(b))
    }
    bf.prototype.h = function() {
        if (this.j)
            for (; this.j.length;) this.j.shift()()
    };

    function ef(a, b, c, d) {
        lc(b, c, d);
        df(a, () => mc(b, c, d))
    }

    function ff(a, b) {
        1 !== a.state && (a.state = 1, a.callback && a.callback(b))
    }

    function gf(a) {
        a.win.document.visibilityState ? ef(a, a.win.document, "visibilitychange", b => {
            "hidden" === a.win.document.visibilityState && ff(a, b);
            "visible" === a.win.document.visibilityState && (a.state = 0)
        }) : "onpagehide" in a.win ? (ef(a, a.win, "pagehide", b => {
            ff(a, b)
        }), ef(a, a.win, "pageshow", () => {
            a.state = 0
        })) : ef(a, a.win, "beforeunload", b => {
            ff(a, b)
        })
    }

    function hf(a, b) {
        a.callback || gf(a);
        a.callback = b
    }
    var jf = class extends bf {
        constructor(a) {
            super();
            this.win = a;
            this.state = 0;
            this.callback = null
        }
    };

    function Ye(a, ...b) {
        a.v && 65536 <= $e(a.h.concat(b)).length && kf(a);
        a.h.push(...b);
        a.h.length >= a.m && kf(a);
        a.h.length && null === a.i && (a.i = setTimeout(() => {
            kf(a)
        }, a.A))
    }

    function lf(a, b, c, d) {
        a.j || (a.j = new jf(b), hf(a.j, () => {
            for (const e of a.l) e();
            c()
        }));
        d && 1 !== a.j.state && a.l.push(d)
    }

    function kf(a) {
        null !== a.i && (clearTimeout(a.i), a.i = null);
        if (a.h.length) {
            var b = $e(a.h);
            a.u("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.h = []
        }
    }

    function of (a, b, c) {
        lf(a, b, () => {
            kf(a)
        }, c)
    }
    var pf = class {
            constructor(a, b, c) {
                this.u = af;
                this.A = a;
                this.m = b;
                this.v = c;
                this.l = [];
                this.h = [];
                this.i = null
            }
        },
        qf = class extends pf {
            constructor(a = 1E3, b = 100, c = !1) {
                super(a, b, c && !0)
            }
        };

    function rf(a, b) {
        b = C(b, 1, Date.now(), 0);
        var c = cd(window);
        b = C(b, 2, c, 0);
        return C(b, 6, a.m, 0)
    }

    function sf(a, b, c, d, e, f) {
        if (a.j) {
            var g = Ee(De(new Fe, b), c);
            b = Me(Je(Ie(Le(Ke(new Oe, d), e), g), a.h.slice()), f);
            b = Ue(new We, b);
            Xe(a.i, rf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.h.some(h => H(h, 1) === H(g, 1) && H(h, 2) === c)) a.h.push(g), 100 < a.h.length && a.h.shift()
        }
    }

    function tf(a, b, c, d) {
        if (a.j && a.l) {
            var e = new Te;
            b = Gb(e, 2, b);
            c = Gb(b, 3, c);
            d && C(c, 1, d, 0);
            d = new We;
            d = Fb(d, 7, Ve, c);
            Xe(a.i, rf(a, d))
        }
    }
    var uf = class {
        constructor(a, b, c, d = new qf(b)) {
            this.m = a;
            this.l = c;
            this.i = d;
            this.h = [];
            this.j = 0 < a && Sc() < 1 / a
        }
    };
    var M = a => {
        var b = "sa";
        if (a.sa && a.hasOwnProperty(b)) return a.sa;
        b = new a;
        return a.sa = b
    };
    var vf = class {
        constructor() {
            this.F = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var wf = /^true$/.test("false");

    function xf(a, b) {
        switch (b) {
            case 1:
                return H(a, Ab(a, me, 1));
            case 2:
                return H(a, Ab(a, me, 2));
            case 3:
                return H(a, Ab(a, me, 3));
            case 6:
                return H(a, Ab(a, me, 6));
            default:
                return null
        }
    }

    function yf(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return A(a, 1);
            case 7:
                return G(a, 3);
            case 2:
                return Jb(a, 2);
            case 3:
                return G(a, 3);
            case 6:
                return wb(a, 4, rb);
            default:
                return null
        }
    }
    const zf = jc(() => {
        if (!wf) return {};
        try {
            const a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch {}
        return {}
    });

    function Af(a, b, c, d = 0) {
        M(Bf).j[d] = M(Bf).j[d] ? .add(b) ? ? (new Set).add(b);
        const e = zf();
        if (null != e[b]) return e[b];
        b = Cf(d)[b];
        if (!b) return c;
        b = le(JSON.stringify(b));
        b = Df(b);
        a = yf(b, a);
        return null != a ? a : c
    }

    function Df(a) {
        const b = M(vf).F;
        if (b) {
            const c = Qa(F(a, ie, 5), d => fe(D(d, Zd, 1), b));
            if (c) return D(c, he, 2) ? ? null
        }
        return D(a, he, 4) ? ? null
    }
    class Bf {
        constructor() {
            this.i = {};
            this.l = [];
            this.j = {};
            this.h = new Map
        }
    }

    function Ef(a, b = !1, c) {
        return !!Af(1, a, b, c)
    }

    function Ff(a, b = 0, c) {
        a = Number(Af(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Gf(a, b = "", c) {
        a = Af(3, a, b, c);
        return "string" === typeof a ? a : b
    }

    function Hf(a, b = [], c) {
        a = Af(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Cf(a) {
        return M(Bf).i[a] || (M(Bf).i[a] = {})
    }

    function If(a, b) {
        const c = Cf(b);
        J(a, (d, e) => c[e] = d)
    }

    function Jf(a, b, c, d, e = !1) {
        const f = [],
            g = [];
        La(b, h => {
            const l = Cf(h);
            La(a, k => {
                var m = zb(k, me);
                const u = xf(k, m);
                if (u) {
                    var v = M(Bf).h.get(h) ? .get(u) ? .slice(0) ? ? [];
                    a: {
                        const w = new Qe;
                        switch (m) {
                            case 1:
                                yb(w, 1, Re, u);
                                break;
                            case 2:
                                yb(w, 2, Re, u);
                                break;
                            case 3:
                                yb(w, 3, Re, u);
                                break;
                            case 6:
                                yb(w, 4, Re, u);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        xb(w, 5, v);m = w
                    }
                    if (v = m) v = !!M(Bf).j[h] ? .has(u);
                    v && f.push(m);
                    if (v = m) v = !!M(Bf).h.get(h) ? .has(u);
                    v && g.push(m);
                    e || (m = M(Bf), m.h.has(h) || m.h.set(h, new Map), m.h.get(h).has(u) || m.h.get(h).set(u, []), d &&
                        m.h.get(h).get(u).push(d));
                    l[u] = k.toJSON()
                }
            })
        });
        (f.length || g.length) && tf(c, f, g, d ? ? void 0)
    }

    function Kf(a, b) {
        const c = Cf(b);
        La(a, d => {
            var e = le(JSON.stringify(d));
            const f = zb(e, me);
            (e = xf(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Lf() {
        return Na(Object.keys(M(Bf).i), a => Number(a))
    }

    function Mf(a) {
        Ra(M(Bf).l, a) || If(Cf(4), a)
    };

    function N(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Nf(a, b, c) {
        return b[a] || c
    }

    function Of(a) {
        N(5, Ef, a);
        N(6, Ff, a);
        N(7, Gf, a);
        N(8, Hf, a);
        N(13, Kf, a);
        N(15, Mf, a)
    }

    function Pf(a) {
        N(4, b => {
            M(vf).F = b
        }, a);
        N(9, (b, c) => {
            var d = M(vf);
            null == d.F[3][b] && (d.F[3][b] = c)
        }, a);
        N(10, (b, c) => {
            var d = M(vf);
            null == d.F[4][b] && (d.F[4][b] = c)
        }, a);
        N(11, (b, c) => {
            var d = M(vf);
            null == d.F[5][b] && (d.F[5][b] = c)
        }, a);
        N(14, b => {
            var c = M(vf);
            for (const d of [3, 4, 5]) Object.assign(c.F[d], b[d])
        }, a)
    }

    function Qf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Rf(a, b, c) {
        a.j = Nf(1, b, () => {});
        a.l = d => Nf(2, b, () => [])(d, c);
        a.i = () => Nf(3, b, () => [])(c);
        a.h = d => {
            Nf(16, b, () => {})(d, c)
        }
    }
    class Sf {
        j() {}
        h() {}
        l() {
            return []
        }
        i() {
            return []
        }
    };
    let Tf, Uf;
    const Vf = new Td(window);
    (a => {
        Tf = a ? ? new Id;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Gd(Tf, window.google_srt);
        Uf = new Vd(Tf, Vf);
        Uf.va(() => {});
        Uf.l(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Sd(Vf) : Vf.h && lc(window, "load", () => {
            window.google_measure_js_timing || Sd(Vf)
        })
    })();
    var Wf = {
        Hb: 0,
        Gb: 1,
        Db: 2,
        yb: 3,
        Eb: 4,
        zb: 5,
        Fb: 6,
        Bb: 7,
        Cb: 8,
        xb: 9,
        Ab: 10
    };
    var Xf = {
        Jb: 0,
        Kb: 1,
        Ib: 2
    };

    function Yf(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }
    var ag = class {
        constructor() {
            this.i = new Zf(this);
            this.h = 0
        }
        resolve(a) {
            Yf(this);
            this.h = 1;
            this.l = a;
            $f(this.i)
        }
    };

    function $f(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var Zf = class {
        constructor(a) {
            this.h = a
        }
        then(a, b) {
            if (this.i) throw Error("Then functions already set.");
            this.i = a;
            this.j = b;
            $f(this)
        }
    };
    const bg = class {
        constructor(a) {
            this.h = a.slice(0)
        }
        forEach(a) {
            this.h.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new bg(Ma(this.h, a))
        }
        apply(a) {
            return new bg(a(this.h.slice(0)))
        }
        get(a) {
            return this.h[a]
        }
        add(a) {
            const b = this.h.slice(0);
            b.push(a);
            return new bg(b)
        }
    };

    function cg(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const eg = class {
        constructor() {
            this.h = {};
            this.i = {}
        }
        set(a, b) {
            const c = dg(a);
            this.h[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = dg(a);
            return void 0 !== this.h[a] ? this.h[a] : b
        }
        clear() {
            this.h = {};
            this.i = {}
        }
    };

    function dg(a) {
        return a instanceof Object ? String(ea(a)) : a + ""
    };

    function fg(a) {
        return new gg({
            value: a
        }, null)
    }

    function hg(a) {
        return new gg(null, a)
    }

    function ig(a) {
        try {
            return fg(a())
        } catch (b) {
            return hg(b)
        }
    }

    function jg(a) {
        return null != a.h ? a.h.value : null
    }

    function kg(a, b) {
        null != a.h && b(a.h.value);
        return a
    }

    function lg(a, b) {
        null != a.h || b(a.i);
        return a
    }
    class gg {
        constructor(a, b) {
            this.h = a;
            this.i = b
        }
        map(a) {
            return null != this.h ? (a = a(this.h.value), a instanceof gg ? a : fg(a)) : this
        }
    };
    const mg = class {
        constructor(a) {
            this.h = new eg;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.h.set(a, !0)
        }
        contains(a) {
            return void 0 !== this.h.h[dg(a)]
        }
    };
    class ng {
        constructor() {
            this.h = new eg
        }
        set(a, b) {
            let c = this.h.get(a);
            c || (c = new mg, this.h.set(a, c));
            c.add(b)
        }
    };
    var O = class extends I {
            constructor(a) {
                super(a, -1, og)
            }
            getId() {
                return t(this, 3)
            }
        },
        og = [4];
    class pg {
        constructor({
            Va: a,
            Lb: b,
            Tb: c,
            ob: d
        }) {
            this.h = b;
            this.l = new bg(a || []);
            this.j = d;
            this.i = c
        }
    };
    const rg = a => {
            const b = [],
                c = a.l;
            c && c.h.length && b.push({
                X: "a",
                da: qg(c)
            });
            null != a.h && b.push({
                X: "as",
                da: a.h
            });
            null != a.i && b.push({
                X: "i",
                da: String(a.i)
            });
            null != a.j && b.push({
                X: "rp",
                da: String(a.j)
            });
            b.sort(function(d, e) {
                return d.X.localeCompare(e.X)
            });
            b.unshift({
                X: "t",
                da: "aa"
            });
            return b
        },
        qg = a => {
            a = a.h.slice(0).map(sg);
            a = JSON.stringify(a);
            return Tc(a)
        },
        sg = a => {
            const b = {};
            null != t(a, 7) && (b.q = t(a, 7));
            null != Hb(a, 2) && (b.o = Hb(a, 2));
            null != Hb(a, 5) && (b.p = Hb(a, 5));
            return b
        };
    var tg = class extends I {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return x(this, 1, a)
        }
    };

    function ug(a) {
        const b = [].slice.call(arguments).filter(ic(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Ka || []);
            d = Object.assign(d, e.Pa)
        });
        return new vg(c, d)
    }

    function wg(a) {
        switch (a) {
            case 1:
                return new vg(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new vg(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new vg(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new vg(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function xg(a) {
        if (null == a) var b = null;
        else {
            var c = rg(a);
            a = [];
            for (b of c) c = String(b.da), a.push(b.X + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new vg(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class vg {
        constructor(a, b) {
            this.Ka = a;
            this.Pa = b
        }
    };
    const yg = new vg(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var zg = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function Ag(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new Bg;
        return a.google_reactive_ads_global_state
    }
    class Bg {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Cg;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var Cg = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var P = a => {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    var Dg = a => {
            a = a.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        Eg = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        Fg = a => {
            const b = P(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        },
        Gg = (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    var Hg = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Ig = class extends I {
        constructor() {
            super()
        }
    };
    var Kg = class extends I {
            constructor() {
                super(void 0, -1, Jg)
            }
        },
        Jg = [1];
    var Lg = class extends I {
        constructor(a) {
            super(a)
        }
        i() {
            return A(this, 2)
        }
    };
    var Mg = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Ng = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Pg = class extends I {
            constructor(a) {
                super(a, -1, Og)
            }
            i() {
                return F(this, Ng, 1)
            }
        },
        Og = [1];
    var Q = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Qg = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Sg = class extends I {
            constructor(a) {
                super(a, -1, Rg)
            }
        },
        Rg = [6, 7, 9, 10, 11];

    function Tg(a) {
        var b = [];
        cg(a.getElementsByTagName("p"), function(c) {
            100 <= Ug(c) && b.push(c)
        });
        return b
    }

    function Ug(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        cg(a.childNodes, function(c) {
            b += Ug(c)
        });
        return b
    }

    function Vg(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Wg(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }
    const Xg = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.h = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.l)
            } catch (f) {}
            if (!b.length) return [];
            a = q(b);
            a = Wg(this, a);
            "number" === typeof this.i && (b = this.i, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.j) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Tg(a[c]),
                        e = this.j;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.h
            })
        }
    };

    function Yg(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };
    var R = class {
            constructor(a, b = !1) {
                this.h = a;
                this.defaultValue = b
            }
        },
        Zg = class {
            constructor(a, b = 0) {
                this.h = a;
                this.defaultValue = b
            }
        };
    var $g = new R(1082, !0),
        ah = new Zg(1130, 100),
        bh = new class {
            constructor(a, b = "") {
                this.h = a;
                this.defaultValue = b
            }
        }(14),
        ch = new R(1247),
        dh = new R(316),
        eh = new R(1207, !0),
        fh = new R(313),
        gh = new R(369),
        hh = new R(1242),
        ih = new R(1230),
        jh = new R(1229),
        kh = new R(1231),
        lh = new R(1171, !0),
        mh = new R(1201, !0),
        nh = new R(217),
        oh = new R(1216, !0),
        ph = new R(501545960),
        qh = new R(1120),
        rh = new Zg(1114, 1),
        sh = new R(506914611),
        th = new R(1086, !0),
        uh = new Zg(1079, 5),
        vh = new class {
            constructor(a, b = []) {
                this.h = a;
                this.defaultValue = b
            }
        }(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        wh = new R(203),
        xh = new R(84),
        yh = new R(1975),
        zh = new R(1974, !0),
        Ah = new R(1162),
        Bh = new Zg(501545963, 1),
        Ch = new R(501545961),
        Dh = new Zg(501545962, 1),
        Eh = new R(491815314),
        Fh = new R(1121),
        Gh = new R(501545959, !0),
        Hh = new R(506619840),
        Ih = new R(502896280, !0);
    var Jh = class {
        constructor() {
            const a = {};
            this.h = (b, c) => null != a[b] ? a[b] : c;
            this.i = (b, c) => null != a[b] ? a[b] : c;
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.m = () => {}
        }
    };

    function T(a) {
        return M(Jh).h(a.h, a.defaultValue)
    }

    function Kh(a) {
        return M(Jh).i(a.h, a.defaultValue)
    }

    function Lh() {
        return M(Jh).j(bh.h, bh.defaultValue)
    };

    function Mh(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Yg(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Nh(a, b) {
        const c = e => {
                e = Oh(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = Oh(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: Ph(a.previousSibling, c),
                    ha: e => Ph(e.previousSibling, c),
                    la: 0
                };
            case 2:
                return {
                    init: Ph(a.lastChild, c),
                    ha: e => Ph(e.previousSibling, c),
                    la: 0
                };
            case 3:
                return {
                    init: Ph(a.nextSibling, d),
                    ha: e => Ph(e.nextSibling, d),
                    la: 3
                };
            case 1:
                return {
                    init: Ph(a.firstChild, d),
                    ha: e => Ph(e.nextSibling, d),
                    la: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Oh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ph(a, b) {
        return a && b(a) ? a : null
    };
    var Qh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Rh = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && Kc(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var Sh = (a, b) => {
        do {
            const c = Oc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function Th(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = K(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }
    var Uh = (a, b) => !((Wc.test(b.google_ad_width) || Vc.test(a.style.width)) && (Wc.test(b.google_ad_height) || Vc.test(a.style.height))),
        Wh = (a, b) => (a = Vh(a, b)) ? a.y : 0,
        Vh = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        Xh = a => {
            let b = 0;
            for (let c in Qh) - 1 != a.indexOf(c) && (b |= Qh[c]);
            return b
        },
        Yh = (a, b, c, d, e) => {
            if (a !== a.top) return Lc(a) ? 3 : 16;
            if (!(488 > P(a).clientWidth)) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            const f = P(a).clientWidth;
            if (!f || (f - c) / f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c = b.parentElement;
                    for (b = P(a).clientWidth; c; c = c.parentElement)
                        if ((d = Oc(c, a)) && (e = K(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        Zh = (a, b, c, d) => {
            const e = Yh(b, c, a, .3, d);
            !0 !== e ? a = e : "true" == d.google_full_width_responsive || Sh(c, b) ? (b = P(b).clientWidth, a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
            return a
        },
        $h = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const ai = (a, b) => {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                let c;
                try {
                    c = Oc(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        bi = (a, b, c) => {
            a = Vh(b, a);
            return "rtl" == c ? -a.x : a.x
        };
    var ci = (a, b) => {
        var c;
        c = (c = b.parentElement) ? (c = Oc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            $h(b, c, "0px");
            b.style.width = P(a).clientWidth + "px";
            if (0 !== bi(a, b, c)) {
                $h(b, c, "0px");
                var d = bi(a, b, c);
                $h(b, c, -1 * d + "px");
                a = bi(a, b, c);
                0 !== a && a !== d && $h(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };
    var di = class {
        constructor(a, b) {
            this.J = a;
            this.j = b
        }
        height() {
            return this.j
        }
        h(a) {
            return 300 < a && 300 < this.j ? this.J : Math.min(1200, Math.round(a))
        }
        i() {}
    };
    var ei = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = Oc(a, b)) && e[c] && d(e[c]) || null
        },
        fi = a => b => b.J <= a,
        ii = (a, b, c, d) => {
            const e = a && gi(c, b),
                f = hi(b, d);
            return g => !(e && g.height() >= f)
        },
        ji = a => b => b.height() <= a,
        gi = (a, b) => Wh(a, b) < P(b).clientHeight - 100,
        ki = (a, b) => {
            var c = ei(b, a, "height", K);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = ei(b, a, "height", K);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && K(b.style.height)) && (c = Math.min(c, d)), (d = ei(b, a, "maxHeight", K)) && (c =
                Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const hi = (a, b) => {
        const c = 0 == sd(a);
        return b && c ? Math.max(250, 2 * P(a).clientHeight / 3) : 250
    };
    var li = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0
    };
    const mi = RegExp("(^| )adsbygoogle($| )");

    function ni(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Cc(d.Ub);
            a[e] = d.value
        }
    };
    class oi {
        constructor() {
            var a = pd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.h = null;
            this.j = !1;
            this.m = Math.random();
            this.i = this.H;
            this.v = a
        }
        va(a) {
            this.h = a
        }
        l(a) {
            this.j = a
        }
        Qa(a) {
            this.i = a
        }
        H(a, b, c = .01, d, e = "jserror") {
            if ((this.j ? this.m : Math.random()) > c) return !1;
            wd(b) || (b = new vd(b, {
                context: a,
                id: e
            }));
            if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
            n.google_js_errors = n.google_js_errors || [];
            n.google_js_errors.push(b);
            n.error_rep_loaded || (Mc(n.document, this.v), n.error_rep_loaded = !0);
            return !1
        }
        ea(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.i(a, d, .01, c, "jserror")) throw d;
            }
        }
        ma(a, b) {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        Z(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.H(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0)
            })
        }
    };
    const pi = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var qi = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = Md();
                let l, k = 3;
                try {
                    l = b.apply(this, arguments)
                } catch (m) {
                    k = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && pi({
                        label: a.toString(),
                        value: h,
                        duration: (Md() || 0) - h,
                        type: k,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return l
            }
        },
        ri = (a, b) => qi(a, b, (c, d) => {
            (new oi).H(c, d)
        }, void 0, !1);

    function si(a, b, c) {
        return qi(a, b, void 0, c, !0).apply()
    }

    function ti(a) {
        if (!a) return null;
        var b = t(a, 7);
        if (t(a, 1) || a.getId() || 0 < wb(a, 4, rb).length) {
            b = wb(a, 4, rb);
            var c = t(a, 3),
                d = t(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Vg(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Vg(b[c]);
            a = (b = e) ? new Xg(b, Hb(a, 2), Hb(a, 5), ui(t(a, 6))) : null
        } else a = b ? new Xg(b, Hb(a, 2), Hb(a, 5), ui(t(a, 6))) : null;
        return a
    }
    var vi = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function ui(a) {
        return null == a ? a : vi[a]
    }
    var wi = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function xi(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function yi(a) {
        a = xi(a);
        return a.optimization = a.optimization || {}
    };
    var zi = ac(class extends I {
        constructor(a) {
            super(a)
        }
    });
    var Ai = a => {
        switch (t(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = D(a, O, 1), null == b ? b = null : (a = t(a, 2), b = null == a ? null : new pg({
                    Va: [b],
                    ob: a
                }));
                return null != b ? fg(b) : hg(Error("Missing dimension when creating placement id"));
            case 3:
                return hg(Error("Missing dimension when creating placement id"));
            default:
                return hg(Error("Invalid type: " + t(a, 8)))
        }
    };
    var Bi = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Ci = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Di = class extends I {
        constructor(a) {
            super(a)
        }
        i() {
            return vb(this, 23)
        }
    };
    var Ei = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Fi = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Gi = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Hi = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Ii = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Ji = class extends I {
            constructor(a) {
                super(a)
            }
            getName() {
                return t(this, 4)
            }
        },
        Ki = [1, 2, 3];
    var Mi = class extends I {
            constructor(a) {
                super(a, -1, Li)
            }
        },
        Li = [2, 5, 6, 11];
    var Ni = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Pi = class extends I {
            constructor(a) {
                super(a)
            }
            i() {
                return Kb(this, Ni, 2, Oi)
            }
        },
        Oi = [1, 2];
    var Ri = class extends I {
            constructor(a) {
                super(a, -1, Qi)
            }
            i() {
                return D(this, Pi, 3)
            }
        },
        Qi = [1, 4];
    var Ui = class extends I {
            constructor(a) {
                super(a, -1, Ti)
            }
        },
        Vi = ac(Ui),
        Ti = [1, 2, 5, 7];
    var Wi = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Xi(a, b) {
        const c = new ng,
            d = new mg;
        b.forEach(e => {
            if (Kb(e, Hi, 1, Ki)) {
                e = Kb(e, Hi, 1, Ki);
                if (D(e, Q, 1) && D(D(e, Q, 1), O, 1) && D(e, Q, 2) && D(D(e, Q, 2), O, 1)) {
                    const g = Yi(a, D(D(e, Q, 1), O, 1)),
                        h = Yi(a, D(D(e, Q, 2), O, 1));
                    if (g && h)
                        for (var f of Wi({
                                anchor: g,
                                position: t(D(e, Q, 1), 2)
                            }, {
                                anchor: h,
                                position: t(D(e, Q, 2), 2)
                            })) c.set(ea(f.anchor), f.position)
                }
                D(e, Q, 3) && D(D(e, Q, 3), O, 1) && (f = Yi(a, D(D(e, Q, 3), O, 1))) && c.set(ea(f), t(D(e, Q, 3), 2))
            } else Kb(e, Ii, 2, Ki) ? Zi(a, Kb(e, Ii, 2, Ki), c) : Kb(e, Gi, 3, Ki) && $i(a, Kb(e, Gi, 3, Ki), d)
        });
        return new aj(c,
            d)
    }
    class aj {
        constructor(a, b) {
            this.i = a;
            this.h = b
        }
    }
    const Zi = (a, b, c) => {
            D(b, Q, 2) ? (b = D(b, Q, 2), (a = Yi(a, D(b, O, 1))) && c.set(ea(a), t(b, 2))) : D(b, O, 1) && (a = bj(a, D(b, O, 1))) && a.forEach(d => {
                d = ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        $i = (a, b, c) => {
            D(b, O, 1) && (a = bj(a, D(b, O, 1))) && a.forEach(d => {
                c.add(ea(d))
            })
        },
        Yi = (a, b) => (a = bj(a, b)) && 0 < a.length ? a[0] : null,
        bj = (a, b) => (b = ti(b)) ? b.query(a) : null;

    function cj(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (dj(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.h.add(d));
        return !1
    }

    function ej(a) {
        a = fj(a);
        return a.has("all") || a.has("after")
    }

    function gj(a) {
        a = fj(a);
        return a.has("all") || a.has("before")
    }

    function fj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function dj(a) {
        const b = fj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var hj = class {
        constructor() {
            this.h = new Set
        }
    };

    function ij(a, b) {
        if (!a) return !1;
        a = Oc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function jj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function kj(a) {
        return !!a.nextSibling || !!a.parentNode && kj(a.parentNode)
    };

    function lj(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = mj(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function mj(a) {
        let b = "";
        J(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };

    function nj(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    const oj = a => {
        const b = nj(a);
        return b ? Ma(Na(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
    };
    var pj = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };

    function qj(a, b) {
        if (a.l) return !0;
        a.l = !0;
        const c = F(a.i, Sg, 1);
        a.j = 0;
        const d = rj(a.A);
        if (lj(a.h.location, "google_audio_sense")) {
            var e = new Mg;
            e = x(e, 1, 1);
            var f = new Lg;
            f = x(f, 2, !0);
            e = Eb(e, 2, f);
            f = new Kg;
            var g = new Hg;
            var h = x(g, 1, 1);
            g = r(f.s);
            if (g & 2) throw Error();
            g = Db(f, Hg, 1, 2, g);
            h = null != h ? h : new Hg;
            var l = ub(f, 1, 2, void 0, !1);
            g.push(h);
            l.push(h.s);
            gb(h.s) && db(l, 8);
            g = new Ig;
            g = x(g, 1, !0);
            f = Eb(f, 2, g);
            e = Eb(e, 3, f)
        } else e = D(a.i, Mg, 27);
        if (f = e)
            if (g = D(a.i, Pg, 6) ? .i() || [], e = a.h, 1 == H(f, 1) && D(f, Lg, 2) ? .i() && 0 != g.length) {
                var k;
                f = [];
                for (k of g)
                    if (g = ti(D(k, O, 1) || null)) g = g.query(e.document), 0 < g.length && f.push(g[0]);
                f = f.filter(Dg).filter(Eg(f)).filter(Fg(e));
                f.sort(Gg);
                if (k = f[0] || null) f = e.document.createElement("div"), f.id = "google-auto-placed-read-aloud-player-reserved", $c(f, {
                    width: "100%",
                    height: "65px"
                }), k.insertBefore(f, k.firstChild), xi(e).audioSenseSpaceReserved = !0
            }
        k = a.h;
        var m;
        try {
            var u = (m = k.localStorage.getItem("google_ama_settings")) ? zi(m) : null
        } catch (w) {
            u = null
        }
        m = null !== u && A(u, 2, !1);
        u = xi(k);
        m && (u.eatf = !0, md(7, [!0, 0, !1]));
        b: {
            f = {
                eb: !1,
                fb: !1
            };h = q(k.document.querySelectorAll(".google-auto-placed"));l = q(k.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"));
            const w = q(k.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));g = (oj(k) || q(k.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(q(k.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const y = q(k.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                E = q(k.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                za = q(k.document.querySelectorAll("div.googlepublisherpluginad")),
                S = q(k.document.querySelectorAll("html > ins.adsbygoogle"));e = [].concat(q(k.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), q(k.document.querySelectorAll("body ins.adsbygoogle")));m = [];
            for (const [Aa, qa] of [
                    [f.Ob, h],
                    [f.eb, l],
                    [f.Rb, w],
                    [f.Pb, g],
                    [f.Sb, y],
                    [f.Nb, E],
                    [f.Qb, za],
                    [f.fb, S]
                ]) f = qa,
            !1 === Aa ? m = m.concat(f) : e = e.concat(f);e = pj(e);m = pj(m);e =
            e.slice(0);
            for (v of m)
                for (m = 0; m < e.length; m++)(v.contains(e[m]) || e[m].contains(v)) && e.splice(m, 1);
            var v = e;m = P(k).clientHeight;
            for (k = 0; k < v.length; k++)
                if (!(v[k].getBoundingClientRect().top > m)) {
                    v = !0;
                    break b
                }
            v = !1
        }
        v = v ? u.eatfAbg = !0 : !1;
        if (v) return !0;
        v = new mg([2]);
        for (u = 0; u < c.length; u++) {
            m = a;
            e = c[u];
            k = u;
            f = b;
            g = d;
            h = v;
            if (D(e, tg, 4) && h.contains(t(D(e, tg, 4), 1)) && 1 === t(e, 8) && sj(e, g)) {
                m.j++;
                if (f = tj(m, e, f, g)) g = xi(m.h), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0), D(e, O, 1) && null != Hb(D(e, O, 1), 5) && (g.numPostPlacementsPlaced ?
                    g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced = 1), null == g.placed && (g.placed = []), g.numAutoAdsPlaced++, g.placed.push({
                    index: k,
                    element: f.ga
                }), md(7, [!1, m.j, !0]);
                m = f
            } else m = null;
            if (m) return !0
        }
        md(7, [!1, a.j, !1]);
        return !1
    }

    function tj(a, b, c, d) {
        if (!sj(b, d) || 1 != t(b, 8)) return null;
        d = D(b, O, 1);
        if (!d) return null;
        d = ti(d);
        if (!d) return null;
        d = d.query(a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = wi[t(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = ij(jj(d), f);
                        break a;
                    case 3:
                        f = ij(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = ij(g ? 1 == g.nodeType ? g : jj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !kj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !Yg(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.v;
            f = t(b, 2);
            g = ea(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(ea(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(ea(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.u;
            f = t(b, 2);
            a: switch (f) {
                case 1:
                    g = ej(d.previousElementSibling) || gj(d);
                    break a;
                case 4:
                    g = ej(d) || gj(d.nextElementSibling);
                    break a;
                case 2:
                    g = gj(d.firstElementChild);
                    break a;
                case 3:
                    g = ej(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + f);
            }
            c = g || cj(c, d, f)
        }
        if (c) return null;
        f = D(b, Qg, 3);
        c = {};
        f && (c.Sa = t(f, 1), c.Ja = t(f, 2), c.Ya = !!vb(f, 3));
        f = D(b, tg, 4) && t(D(b, tg, 4), 2) ? t(D(b, tg, 4), 2) : null;
        f = wg(f);
        g = null != Hb(b, 12) ? Hb(b, 12) : null;
        g = null == g ? null : new vg(null, {
            google_ml_rank: g
        });
        b = uj(a, b);
        b = ug(a.m, f, g, b);
        f = a.h;
        a = a.B;
        var h = f.document,
            l = c.Ya || !1;
        g = (new Ec(h)).createElement("DIV");
        const k = g.style;
        k.width = "100%";
        k.height = "auto";
        k.clear = l ? "both" : "none";
        l = g.style;
        l.textAlign = "center";
        c.mb && ni(l, c.mb);
        h = (new Ec(h)).createElement("INS");
        l = h.style;
        l.display = "block";
        l.margin = "auto";
        l.backgroundColor =
            "transparent";
        c.Sa && (l.marginTop = c.Sa);
        c.Ja && (l.marginBottom = c.Ja);
        c.Ua && ni(l, c.Ua);
        g.appendChild(h);
        c = {
            qa: g,
            ga: h
        };
        c.ga.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ka) c.qa.className = h.join(" ");
        h = c.ga;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = c.qa;
                if (T(fh)) {
                    {
                        const E = Nh(d, e);
                        if (E.init) {
                            var u = E.init;
                            for (d = u; d = E.ha(d);) u = d;
                            var v = {
                                anchor: u,
                                position: E.la
                            }
                        } else v = {
                            anchor: d,
                            position: e
                        }
                    }
                    m["google-ama-order-assurance"] =
                        0;
                    Mh(m, v.anchor, v.position)
                } else Mh(m, d, e);
                b: {
                    var w = c.ga;w.dataset.adsbygoogleStatus = "reserved";w.className += " adsbygoogle-noablate";m = {
                        element: w
                    };
                    var y = b && b.Pa;
                    if (w.hasAttribute("data-pub-vars")) {
                        try {
                            y = JSON.parse(w.getAttribute("data-pub-vars"))
                        } catch (E) {
                            break b
                        }
                        w.removeAttribute("data-pub-vars")
                    }
                    y && (m.params = y);
                    (f.adsbygoogle = f.adsbygoogle || []).push(m)
                }
            } catch (E) {
                (w = c.qa) && w.parentNode && (y = w.parentNode, y.removeChild(w), Yg(y) && (y.style.display = y.getAttribute("data-init-display") || "none"));
                w = !1;
                break a
            }
            w = !0
        }
        return w ? c : null
    }

    function uj(a, b) {
        return jg(lg(Ai(b).map(xg), c => {
            xi(a.h).exception = c
        }))
    }
    const vj = class {
        constructor(a, b, c, d, e) {
            this.h = a;
            this.B = b;
            this.i = c;
            this.m = e || null;
            this.v = (this.A = d) ? Xi(a.document, F(d, Ji, 5)) : Xi(a.document, []);
            this.u = new hj;
            this.j = 0;
            this.l = !1
        }
    };

    function rj(a) {
        const b = {};
        a && ub(a, 6, 0, !1, gb(a.s)).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function sj(a, b) {
        return a && void 0 !== Bb(a, tg, 4, !1) && b[t(D(a, tg, 4), 2)] ? !1 : !0
    };
    var wj = ac(class extends I {
        constructor(a) {
            super(a)
        }
    });
    class U extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, U) : this.stack = Error().stack || ""
        }
    };
    let xj, V;
    const yj = new Td(n);
    var zj = a => {
        null != a && (n.google_measure_js_timing = a);
        n.google_measure_js_timing || Sd(yj)
    };
    (a => {
        xj = a || new Id;
        "number" !== typeof n.google_srt && (n.google_srt = Math.random());
        Gd(xj, n.google_srt);
        V = new Vd(xj, yj);
        V.l(!0);
        "complete" == n.document.readyState ? zj() : yj.h && lc(n, "load", () => {
            zj()
        })
    })();
    var Aj = (a, b, c) => V.ea(a, b, c),
        Bj = (a, b, c) => {
            const d = M(Sf).i();
            !b.eid && d.length && (b.eid = d.toString());
            Hd(xj, a, b, !0, c)
        },
        Cj = (a, b) => {
            V.Z(a, b)
        },
        Dj = (a, b, c, d) => {
            let e;
            wd(b) ? e = b.msg || Ud(b.error) : e = Ud(b);
            return 0 == e.indexOf("TagError") ? (c = b instanceof vd ? b.error : b, c.pbr || (c.pbr = !0, V.H(a, b, .1, d, "puberror")), !1) : V.H(a, b, c, d)
        };

    function Ej(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? ig(() => wj(c)) : fg(null)
    };

    function Fj() {
        if (Gj) return Gj;
        const a = od() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Gj = b : a.google_persistent_state_async = Gj = new Hj
    }

    function Ij(a) {
        return Jj[a] || "google_ps_" + a
    }

    function Kj(a, b, c) {
        b = Ij(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Lj(a, b, c) {
        return Kj(a, b, () => c)
    }
    class Hj {
        constructor() {
            this.S = {}
        }
    }
    var Gj = null;
    const Jj = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Mj(a) {
        this.h = a || {
            cookie: ""
        }
    }
    Mj.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Vb, g = c.Wb || !1, f = c.domain || void 0, e = c.path || void 0, d = c.kb);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    Mj.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.h.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = pa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Mj.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    Mj.prototype.clear = function() {
        var a = (this.h.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = pa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--) a = b[c], this.get(a), this.set(a, "", {
            kb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Nj(a, b = window) {
        if (vb(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    };

    function Oj(a) {
        var b = new Pj;
        return x(b, 5, a)
    }
    var Pj = class extends I {
        constructor() {
            super()
        }
    };
    const Qj = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function Rj(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Qj(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (jd({
            e: String(a.internalErrorState)
        }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function Sj(a) {
        if (a.i) return a.i;
        a.i = Yc(a.l, "__tcfapiLocator");
        return a.i
    }

    function Tj(a) {
        return "function" === typeof a.l.__tcfapi || null != Sj(a)
    }

    function Uj(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
        else if (Sj(a)) {
            Vj(a);
            const e = ++a.I;
            a.u[e] = c;
            a.i && a.i.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Vj(a) {
        a.m || (a.m = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.u[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, lc(a.l, "message", a.m))
    }
    class Wj extends bf {
        constructor(a) {
            var b = {};
            super();
            this.l = a;
            this.i = null;
            this.u = {};
            this.I = 0;
            this.B = b.Ra ? ? 500;
            this.A = b.Mb ? ? !1;
            this.m = null
        }
        h() {
            this.u = {};
            this.m && (mc(this.l, "message", this.m), delete this.m);
            delete this.u;
            delete this.l;
            delete this.i;
            super.h()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = kc(() => a(b));
            let d = 0; - 1 !== this.B && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.B));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Qj(b),
                    b.internalBlockOnErrors = this.A, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Uj(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Uj(this, "removeEventListener", null, a.listenerId)
        }
    };
    var bk = ({
            win: a,
            V: b,
            Ra: c,
            callback: d,
            ia: e = !1,
            ja: f = !1
        }) => {
            b = Xj({
                win: a,
                V: b,
                ia: e,
                ja: f
            });
            null != b.h || "tcunav" != b.i.message ? d(b) : Yj(a, c).then(g => g.map(Zj)).then(g => g.map(h => ak(a, h))).then(d)
        },
        Xj = ({
            win: a,
            V: b,
            ia: c = !1,
            ja: d = !1
        }) => {
            if (!ck({
                    win: a,
                    V: b,
                    ia: c,
                    ja: d
                })) return ak(a, Oj(!0));
            b = Fj();
            return (b = Lj(b, 24)) ? ak(a, Zj(b)) : hg(Error("tcunav"))
        };

    function ck({
        win: a,
        V: b,
        ia: c,
        ja: d
    }) {
        if (!(d = !d && Tj(new Wj(a)))) {
            if (c = !c) {
                if (b) {
                    a = Ej(a);
                    if (null != a.h)
                        if ((a = a.h.value) && null != t(a, 1)) b: switch (a = t(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else V.H(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function Yj(a, b) {
        return Promise.race([dk(), ek(a, b)])
    }

    function dk() {
        return (new Promise(a => {
            var b = Fj();
            a = {
                resolve: a
            };
            const c = Lj(b, 25, []);
            c.push(a);
            b.S[Ij(25)] = c
        })).then(fk)
    }

    function ek(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, hg(Error("tcto")))
        })
    }

    function fk(a) {
        return a ? fg(a) : hg(Error("tcnull"))
    }

    function Zj(a) {
        if (Rj(a))
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions) {
                        var b = a.publisher.restrictions["1"];
                        if (void 0 !== b) {
                            b = b["755"];
                            break b
                        }
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
            }
        else a = !0;
        else a = !1;
        return Oj(a)
    }

    function ak(a, b) {
        return (a = Nj(b, a)) ? fg(a) : hg(Error("unav"))
    };
    var hk = class extends I {
            constructor(a) {
                super(a, -1, gk)
            }
        },
        gk = [1, 2, 3];
    var ik = class extends I {
        constructor(a) {
            super(a)
        }
        i() {
            return D(this, hk, 2)
        }
    };
    const jk = class {
        constructor(a) {
            this.exception = a
        }
    };

    function kk(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            xi(e.h);
            F(e.i, Sg, 1);
            d.call(c, new jk(b))
        } catch (f) {
            a = a.i, b = f, Yf(a), a.h = 2, a.j = b, $f(a.i)
        }
    }
    var lk = class {
        constructor(a, b, c) {
            this.j = a;
            this.h = b;
            this.i = c
        }
        start() {
            this.l()
        }
        l() {
            try {
                switch (this.j.document.readyState) {
                    case "complete":
                    case "interactive":
                        qj(this.h, !0);
                        kk(this);
                        break;
                    default:
                        qj(this.h, !1) ? kk(this) : this.j.setTimeout(ka(this.l, this), 100)
                }
            } catch (a) {
                kk(this, a)
            }
        }
    };
    var mk = "a".charCodeAt(),
        nk = pc(Wf),
        ok = pc(Xf);

    function W(a, b) {
        if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.h, a.h + b);
        a.h += b;
        return parseInt(c, 2)
    }

    function pk(a) {
        return String.fromCharCode(mk + W(a, 6)) + String.fromCharCode(mk + W(a, 6))
    }

    function qk(a) {
        let b = W(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!W(a, 1),
                e = W(a, 16);
            if (d)
                for (d = W(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function rk(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (W(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function sk(a) {
        const b = W(a, 16);
        return !0 === !!W(a, 1) ? (a = qk(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : rk(a, b)
    }
    class tk {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.h = 0
        }
    };
    var vk = (a, b) => {
        try {
            var c = Xa(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new tk(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.h += 78;
            c.cmpId = W(d, 12);
            c.cmpVersion = W(d, 12);
            d.h += 30;
            c.tcfPolicyVersion = W(d, 6);
            c.isServiceSpecific = !!W(d, 1);
            c.useNonStandardStacks = !!W(d, 1);
            c.specialFeatureOptins = uk(rk(d, 12, ok), ok);
            c.purpose = {
                consents: uk(rk(d, 24, nk), nk),
                legitimateInterests: uk(rk(d, 24, nk), nk)
            };
            c.purposeOneTreatment = !!W(d, 1);
            c.publisherCC = pk(d);
            c.vendor = {
                consents: uk(sk(d), b),
                legitimateInterests: uk(sk(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const uk = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var wk = class {
        constructor() {
            this.h = {}
        }
    };
    var xk = class extends I {
        constructor() {
            super()
        }
    };
    var yk = class extends I {
        constructor() {
            super()
        }
    };
    var zk = class extends I {
            constructor() {
                super()
            }
        },
        Ak = [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27];
    var Bk = class {};
    var Ck = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Dk = class extends I {
        constructor(a) {
            super(a)
        }
    };
    var Fk = ac(class extends I {
            constructor(a) {
                super(a, -1, Ek)
            }
        }),
        Ek = [7];
    var Gk = new class {
        constructor() {
            this.key = "45369554";
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };
    var Hk = class extends wk {
            constructor() {
                super();
                var a = n.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.h = JSON.parse(a)
                } catch (b) {}
            }
        },
        Ik;

    function Jk(a) {
        return (a = Kk(a)) ? D(a, Dk, 4) : null
    }

    function Kk(a) {
        if (a = (new Mj(a)).get("FCCDCF", ""))
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                Lk(1), b = null
            } else b = a;
            else b = null;
        try {
            return b ? Fk(b) : null
        } catch (c) {
            return Lk(2), null
        }
    }

    function Lk(a) {
        new Bk;
        var b = new xk;
        a = x(b, 7, a);
        b = new yk;
        a = Eb(b, 1, a);
        b = new zk;
        Fb(b, 22, Ak, a);
        Ik || (Ik = new Hk);
        a = Ik.h[Gk.key];
        if ("proto" === Gk.valueType) try {
            JSON.parse(a)
        } catch (c) {}
    };
    pc(Wf).map(a => Number(a));
    pc(Xf).map(a => Number(a));

    function Mk(a) {
        a.__tcfapiPostMessageReady || Nk(new Ok(a))
    }

    function Nk(a) {
        a.i = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.h.addEventListener("message", a.i);
        a.h.__tcfapiPostMessageReady = !0
    }
    var Ok = class {
        constructor(a) {
            this.h = a;
            this.i = null
        }
    };
    var Pk = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Nc("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };

    function Qk() {
        var a = window,
            b = T(lh);
        a.__uspapi || a.frames.__uspapiLocator || (a = new Rk(a), Sk(a), b && Tk(a))
    }

    function Sk(a) {
        !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", Pk(a.h, "__uspapiLocator"), ma("__uspapi", (...b) => Uk(a, ...b)))
    }

    function Tk(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", Pk(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], ma("__tcfapi", (...b) => Vk(a, ...b)), Mk(a.h))
    }

    function Uk(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.m
        }, !0)
    }

    function Vk(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.h.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(Wk(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(Wk(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function Wk(a, b, c) {
        if (!a.j) return null;
        b = vk(a.j, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class Rk {
        constructor(a) {
            this.h = a;
            this.i = a.document;
            this.m = (a = (a = Kk(this.i)) ? D(a, Ck, 5) || null : null) ? t(a, 2) : null;
            this.j = (a = Jk(this.i)) && null != t(a, 1) ? t(a, 1) : null;
            this.l = (a = Jk(this.i)) && null != t(a, 2) ? t(a, 2) : null
        }
    };
    const Xk = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var Yk = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Bj("ama", b, .01)
        },
        Zk = a => {
            const b = {};
            J(Xk, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    const $k = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        al = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var bl = a => {
            a = ub(a, 2, 0, !1, gb(a.s));
            if (!a) return !1;
            for (let b = 0; b < a.length; b++)
                if (1 == a[b]) return !0;
            return !1
        },
        dl = (a, b) => {
            a = al($k(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Tc(a),
                d = cl(a);
            return b.find(e => {
                const f = void 0 !== Bb(e, Fi, 7, !1) ? Ib(D(e, Fi, 7), 1) : Ib(e, 1);
                e = void 0 !== Bb(e, Fi, 7, !1) ? t(D(e, Fi, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        };
    const cl = a => {
        const b = {};
        for (;;) {
            b[Tc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var el = a => {
        a = D(a, Ei, 3);
        return !a || t(a, 1) <= Date.now() ? !1 : !0
    };

    function fl(a) {
        if (T(dh)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Vi(b) : null
        } catch (d) {
            c = null
        }
        return c
    };
    var gl = class extends I {
        constructor(a) {
            super(a)
        }
        i() {
            return D(this, ik, 2)
        }
        l() {
            return A(this, 3)
        }
    };
    var il = class extends I {
            constructor(a) {
                super(a, -1, hl)
            }
            i() {
                return wb(this, 1, rb)
            }
            l() {
                return D(this, gl, 2)
            }
        },
        hl = [1];
    var kl = class extends I {
            constructor(a) {
                super(a, -1, jl)
            }
            getId() {
                return B(t(this, 1), 0)
            }
        },
        jl = [2];
    var ml = class extends I {
            constructor(a) {
                super(a, -1, ll)
            }
        },
        ll = [2];
    var ol = class extends I {
            constructor(a) {
                super(a, -1, nl)
            }
        },
        nl = [2];
    var pl = class extends I {
        constructor(a) {
            super(a)
        }
        i() {
            return B(t(this, 2), 0)
        }
        l() {
            return B(t(this, 4), 0)
        }
        m() {
            return A(this, 3)
        }
    };
    var rl = class extends I {
            constructor(a) {
                super(a, -1, ql)
            }
        },
        ql = [1, 4, 2, 3];
    var ul = class extends I {
            constructor(a) {
                super(a, -1, sl)
            }
            l() {
                return Kb(this, gl, 13, tl)
            }
            v() {
                return void 0 !== Bb(this, gl, Ab(this, tl, 13))
            }
            i() {
                return Kb(this, il, 14, tl)
            }
            m() {
                return void 0 !== Bb(this, il, Ab(this, tl, 14))
            }
        },
        sl = [19],
        tl = [13, 14];
    let vl = void 0;
    var yl = (a, b, c = "", d = null) => 1 === b && wl(c, d) ? !0 : xl(a, c, e => Oa(F(e, bc, 2), f => t(f, 1) === b)),
        wl = (a, b) => b ? b.v() ? A(b.l(), 1) : b.m() && "" !== a && 1 === b.i().i().length && b.i().i()[0] === a ? A(b.i().l(), 1) : !1 : !1,
        zl = (a, b) => {
            b = B(t(b, 18), 0); - 1 !== b && (a.tmod = b)
        },
        Bl = a => {
            const b = Lc(L) || L;
            return Al(b, a) ? !0 : xl(L, "", c => Oa(ub(c, 3, 0, !1, gb(c.s)), d => d === a))
        };

    function Al(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ra(a.split(","), b.toString())
    }

    function xl(a, b, c) {
        a = Lc(a) || a;
        const d = Cl(a);
        b && (b = ud(String(b)));
        return oc(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function Cl(a) {
        a = Dl(a);
        const b = {};
        J(a, (c, d) => {
            try {
                const e = new ec(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Dl = a => T($g) ? ($b(vl, Yb), a = Xj({
        win: a,
        V: vl
    }), null != a.h ? El(a.h.value) : {}) : El(a.localStorage);

    function El(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : nc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Fl(a) {
        T(mh) && Bj("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const Gl = a => !!a && (0 < F(a, Sg, 1).length || T(eh) && 0 < F(a, Ng, 3).length);
    var Hl = () => {
        const a = [];
        T(jh) && a.push(1);
        T(ih) && a.push(2);
        T(kh) && a.push(7);
        return a
    };

    function X(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Il(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ia: !0,
            tb: b,
            oa: a.ablation_viewport_offset
        } : null
    }

    function Jl(a, b) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Kl(a) {
        X(L).allow_second_reactive_tag = a
    }

    function Ll() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Ml(a) {
        return a.document.querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };

    function Nl(a, b, c, d) {
        Ol(new Pl(a, b, c, d))
    }

    function Ol(a) {
        lg(kg(Xj({
            win: a.win,
            V: A(a.i, 6)
        }), b => {
            Ql(a, b, !0)
        }), () => {
            Rl(a)
        })
    }

    function Ql(a, b, c) {
        lg(kg(Sl(b), d => {
            Tl("ok");
            a.h(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.win;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                Yk(d, {
                    lserr: 1
                })
            }
            c ? Rl(a) : a.h(null, null)
        })
    }

    function Rl(a) {
        lg(kg(Ul(a), b => {
            a.h(b, {
                fromPABGSettings: !0
            })
        }), () => {
            Vl(a)
        })
    }

    function Sl(a) {
        return (a = (a = fl(a)) ? el(a) ? a : null : null) ? fg(a) : hg(Error("invlocst"))
    }

    function Ul(a) {
        var b = a.win;
        if ((X(b) ? .head_tag_slot_vars ? .google_ad_host ? ? Ml(b)) && (!A(a.i, 22) || !T(oh))) return hg(Error("invtag"));
        a: {
            b = a.win;
            var c = a.j;a = a.i;
            if (a ? .v()) b = a ? .l() ? .i() ? .i(),
            Gl(b) ? Fl(!1) : b = null;
            else {
                if (a ? .m()) {
                    const d = a ? .i() ? .i(),
                        e = a ? .i() ? .l() ? .i() ? .i();
                    if (d && 1 === d.length && d[0] === c && Gl(e) && G(a, 17) === b.location.host) {
                        Fl(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new Ui, a = F(b, Sg, 1), c = Gb(c, 1, a), a = F(b, Mi, 2), c = Gb(c, 7, a), T(eh) && 0 < F(b, Ng, 3).length && (a = new Pg, b = F(b, Ng, 3), b = Gb(a, 1, b), Eb(c, 6, b)), b = fg(c)) : b = hg(Error("invtag"));
        return b
    }

    function Vl(a) {
        bk({
            win: a.win,
            V: A(a.i, 6),
            Ra: 50,
            callback: b => {
                Wl(a, b)
            }
        })
    }

    function Wl(a, b) {
        lg(kg(b, c => {
            Ql(a, c, !1)
        }), c => {
            Tl(c.message);
            a.h(null, null)
        })
    }

    function Tl(a) {
        Bj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class Pl {
        constructor(a, b, c, d) {
            this.win = a;
            this.i = b;
            this.j = c;
            this.h = d
        }
    };
    var Zl = (a, b, c, d) => {
        try {
            const e = dl(a, F(c, Mi, 7));
            if (e && bl(e)) {
                t(e, 4) && (d = ug(d, new vg(null, {
                    google_package: t(e, 4)
                })));
                const f = new vj(a, b, c, e, d);
                si(1E3, () => {
                    var g = new ag;
                    (new lk(a, f, g)).start();
                    return g.i
                }, a).then(la(Xl, a), la(Yl, a))
            }
        } catch (e) {
            Yk(a, {
                atf: -1
            })
        }
    };
    const Xl = a => {
            Yk(a, {
                atf: 1
            })
        },
        Yl = (a, b) => {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            Yk(a, {
                atf: 0
            })
        };

    function $l(a) {
        T(qh) && (a.easpi = T(qh), T(Ah) && (a.easpa = !0), a.asntp = 0, a.asntpv = 0, a.asntpl = 0, a.asntpm = 0, a.asntpc = 1E3, a.asna = 5, a.asnd = 5, a.asnp = 5, a.asns = 5, T(Ch) || (a.asmat = Kh(rh)), a.asptt = -1, a.asro = T(Hh) ? T(sh) : T(Fh), T(Eh) && (a.ascet = !0), T(Gh) || (a.asrc = !1), T(ph) && (a.asbu = !0), T(Ch) && (a.aseb = !0), 1 > Kh(Dh) && (a.asla = Kh(Dh)), 1 > Kh(Bh) && (a.asaa = Kh(Bh)), T(Ih) && (a.asupm = !0))
    };
    Ua || Fa();
    class am {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function bm() {
        const {
            promise: a,
            resolve: b
        } = new am;
        return {
            promise: a,
            resolve: b
        }
    };

    function cm(a = () => {}) {
        n.google_llp || (n.google_llp = {});
        const b = n.google_llp;
        let c = b[7];
        if (c) return c;
        c = bm();
        b[7] = c;
        a();
        return c
    }

    function dm(a) {
        return cm(() => {
            Mc(n.document, a)
        }).promise
    };
    var em = a => {
        if (n.google_apltlad || n !== n.top || !a.google_ad_client) return null;
        n.google_apltlad = !0;
        const b = {
                enable_page_level_ads: {
                    pltais: !0
                },
                google_ad_client: a.google_ad_client
            },
            c = b.enable_page_level_ads;
        J(a, (d, e) => {
            li[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        $l(c);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };
    var hm = (a, b) => {
        X(L).ama_ran_on_page || si(1001, () => fm(new gm(a, b)), n)
    };

    function fm(a) {
        Nl(a.h, a.j, a.i.google_ad_client || "", (b, c) => {
            var d = a.h,
                e = a.i;
            X(L).ama_ran_on_page || b && im(d, e, b, c)
        })
    }
    class gm {
        constructor(a, b) {
            this.h = n;
            this.i = a;
            this.j = b
        }
    }

    function im(a, b, c, d) {
        d && (xi(a).configSourceInAbg = d);
        void 0 !== Bb(c, Ri, 24, !1) && (d = yi(a), d.availableAbg = !0, d.ablationFromStorage = !!D(c, Ri, 24) ? .i() ? .i());
        if (da(b.enable_page_level_ads) && 7 === b.enable_page_level_ads.google_pgb_reactive) {
            d = dl(a, F(c, Mi, 7));
            if (!d || !vb(d, 8)) {
                Bj("amaait", {
                    value: "true"
                });
                return
            }
            Bj("amaait", {
                value: "false"
            })
        }
        X(L).ama_ran_on_page = !0;
        D(c, Di, 15) ? .i() && (X(a).enable_overlap_observer = !0);
        var e = D(c, Ci, 13);
        e && 1 === t(e, 1) ? (d = 0, (e = D(e, Bi, 6)) && Hb(e, 3) && (d = Hb(e, 3) || 0), Jl(a, d)) : D(c, Ri, 24) ? .i() ? .i() &&
            (yi(a).ablatingThisPageview = !0, Jl(a, 1));
        md(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = Zk(da(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        const g = ug(yg, new vg(null, b));
        Aj(782, () => {
            Zl(a, f, c, g)
        })
    };
    var jm = {
            google_ad_modifications: !0,
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0,
            google_pause_ad_requests: !0,
            google_user_agent_client_hint: !0
        },
        km = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        lm = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
                    RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        mm = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };

    function nm(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if (null == (b = X(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !td() ? km : lm;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);) c[d[1]] = mm(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ? ? ""
        }
        return b
    };
    async function om(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function pm(a) {
        const b = a.state.pc;
        return null !== b && 0 !== b ? b : a.state.pc = cd(a.win)
    }

    function qm(a) {
        const b = a.state.wpc;
        return null !== b && "" !== b ? b : a.state.wpc = nm(a.win)
    }

    function rm(a, b) {
        var c = new Ce;
        var d = pm(a);
        c = C(c, 1, d, 0);
        d = qm(a);
        c = C(c, 2, d, "");
        c = C(c, 3, a.state.sd, 0);
        return C(c, 7, Math.round(b || a.win.performance.now()), 0)
    }
    async function sm(a) {
        await om(a.win, () => !(!pm(a) || !qm(a)))
    }
    async function tm(a, b) {
        if (a.j && !a.state.le.includes(1)) {
            a.state.le.push(1);
            var c = a.win.performance.now();
            await sm(a);
            b = ue(ve(xe(new ye, b), se(re(new te, P(a.win).scrollWidth), P(a.win).scrollHeight)), se(re(new te, P(a.win).clientWidth), P(a.win).clientHeight));
            var d = new ze;
            T(ch) ? (C(b, 4, a.i, ""), C(d, 1, a.i, "")) : (C(b, 4, a.win ? .document ? .URL, ""), C(d, 1, a.win ? .document ? .URL, ""));
            var e = Rh(a.win);
            0 !== e && we(b, pe(new qe, e));
            Ze(a.h, Ae(rm(a, c), b)); of (a.h, a.win, () => {
                var f = a.h;
                var g = rm(a);
                g = Fb(g, 8, Be, d);
                Ze(f, g)
            })
        }
    }
    async function um(a, b, c) {
        if (a.j && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await sm(a);
            var e = a.h;
            a = rm(a, d);
            d = new oe;
            b = C(d, 1, b, 0);
            c = xb(b, 2, c);
            c = Fb(a, 9, Be, c);
            Ze(e, c)
        }
    }
    var vm = class {
        constructor(a) {
            this.win = od() || window;
            this.h = a ? ? new qf(100, 100, !0);
            this.state = Kj(Fj(), 33, () => {
                const b = Kh(ah);
                return {
                    sd: b,
                    ssp: 0 < b && Sc() < 1 / b,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: []
                }
            })
        }
        get j() {
            return this.state.ssp
        }
        get i() {
            return this.state.cu
        }
        set i(a) {
            this.state.cu = a
        }
    };

    function wm(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function xm(a) {
        var b = L.document;
        if (b.currentScript) return wm(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === wm(c, a)) return 0;
        return 1
    };

    function ym(a, b) {
        return {
            [3]: {
                [55]: () => 0 === a,
                [23]: c => yl(L, Number(c)),
                [24]: c => Bl(Number(c)),
                [61]: () => A(b, 6),
                [63]: () => A(b, 6) || ".google.ch" === G(b, 8)
            },
            [4]: {
                [7]: c => {
                    try {
                        var d = window.localStorage
                    } catch (g) {
                        d = null
                    }
                    c = Number(c);
                    c = 0 !== c ? `${"google_experiment_mod"}${c}` : "google_experiment_mod";
                    a: {
                        var e = -1;
                        try {
                            d && (e = parseInt(d.getItem(c), 10))
                        } catch {
                            e = null;
                            break a
                        }
                        e = 0 <= e && 1E3 > e ? e : null
                    }
                    if (null === e) {
                        const g = Rc() ? null : Math.floor(1E3 * Sc());
                        if (e = null != g && d) a: {
                            var f = String(g);
                            try {
                                if (d) {
                                    d.setItem(c, f);
                                    e = f;
                                    break a
                                }
                            } catch {}
                            e =
                            null
                        }
                        d = e ? g : null
                    } else d = e;
                    return d ? ? void 0
                }
            },
            [5]: {
                [6]: () => G(b, 15)
            }
        }
    };

    function zm(a = n) {
        return a.ggeac || (a.ggeac = {})
    };

    function Am() {
        var a = M(Jh).l(vh.h, vh.defaultValue),
            b = L.document;
        if (a.length && b.head)
            for (const d of a)
                if ((a = d) && b.head) {
                    var c = Nc("META");
                    b.head.appendChild(c);
                    c.httpEquiv = "origin-trial";
                    c.content = a
                }
    }

    function Bm(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function Cm(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };

    function Dm(a, b) {
        try {
            const d = a.split(".");
            a = n;
            let e = 0,
                f;
            for (; null != a && e < d.length; e++) f = a, a = a[d[e]], "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    }
    var Em = {
        [3]: {
            [8]: a => {
                try {
                    return null != ba(a)
                } catch {}
            },
            [9]: a => {
                try {
                    var b = ba(a)
                } catch {
                    return
                }
                if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Ra(M(Sf).i(), Number(a)),
            [27]: a => {
                a = Dm(a, "boolean");
                return void 0 !== a ? a : void 0
            },
            [60]: a => {
                try {
                    return !!n.document.querySelector(a)
                } catch {}
            },
            [69]: a => Bm(a, n.document),
            [70]: a => Cm(a, n.document)
        },
        [4]: {
            [3]: () => Zc(),
            [6]: a => {
                a = Dm(a, "number");
                return void 0 !== a ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = Dm(a, "string");
                return void 0 !== a ? a : void 0
            }
        }
    };
    const Fm = [12, 13, 20];

    function Gm(a, b, c, d) {
        const e = M(vf).F;
        if (!fe(D(b, Zd, 3), e)) return null;
        var f = F(b, kl, 2),
            g = H(b, 6);
        if (g) {
            yb(d, 1, He, g);
            f = e[4];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), C(d, 3, c, 0)
            } catch (l) {}
            return (b = Hm(b, c)) ? Im(a, [b], 1) : null
        }
        if (g = H(b, 10)) {
            yb(d, 2, He, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[4][9];
                    break;
                case 2:
                    h = e[4][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === H(b, 11)) return null;
            void 0 !== c && C(d, 3, c, 0);
            return (b = Hm(b, c)) ? Im(a, [b], 1) : null
        }
        d = e ? Ma(f, l => fe(D(l, Zd,
            3), e)) : f;
        if (!d.length) return null;
        c = d.length * B(Ib(b, 1), 0);
        return (b = H(b, 4)) ? Jm(a, b, c, d) : Im(a, d, c / 1E3)
    }

    function Km(a, b, c) {
        a.h[c] || (a.h[c] = []);
        a = a.h[c];
        Ra(a, b) || a.push(b)
    }

    function Lm(a, b, c) {
        const d = [],
            e = Mm(a.j, b);
        var f;
        if (f = 9 !== b) a.l[b] ? f = !0 : (a.l[b] = !0, f = !1);
        if (f) return sf(a.M, b, c, d, [], 4), d;
        if (!e.length) return sf(a.M, b, c, d, [], 3), d;
        const g = Ra(Fm, b),
            h = [];
        La(e, l => {
            var k = new Ge;
            if (l = Gm(a, l, c, k)) 0 !== zb(k, He) && h.push(k), k = l.getId(), d.push(k), Km(a, k, g ? 4 : c), (l = F(l, ke, 2)) && (g ? Jf(l, Lf(), a.M, k) : Jf(l, [c], a.M, k))
        });
        sf(a.M, b, c, d, h, 1);
        return d
    }

    function Nm(a, b) {
        a.j.push(...Ma(Na(b, c => new ol(c)), c => !Ra(Fm, H(c, 1))))
    }

    function Im(a, b, c) {
        const d = a.i,
            e = Pa(b, f => !!d[f.getId()]);
        return e ? e : a.ra ? null : Pc(b, c)
    }

    function Jm(a, b, c, d) {
        const e = null != a.ka[b] ? a.ka[b] : 1E3;
        if (0 >= e) return null;
        d = Im(a, d, c / e);
        a.ka[b] = d ? 0 : e - c;
        return d
    }

    function Om(a, b) {
        N(1, c => {
            a.i[c] = !0
        }, b);
        N(2, (c, d) => Lm(a, c, d), b);
        N(3, c => (a.h[c] || []).concat(a.h[4]), b);
        N(12, c => void Nm(a, c), b);
        N(16, (c, d) => void Km(a, c, d), b)
    }
    var Pm = class {
        constructor(a, b, c, {
            ra: d = !1,
            Xb: e = [],
            ka: f = {}
        } = {}) {
            this.M = c;
            this.j = a.slice();
            this.l = {};
            this.ra = d;
            this.ka = f;
            this.h = {
                [b]: [],
                [4]: []
            };
            this.i = {};
            (a = Kd()) && La(a.split(",") || [], g => {
                (g = Number(g)) && (this.i[g] = !0)
            });
            La(e, g => {
                this.i[g] = !0
            })
        }
    };

    function Mm(a, b) {
        return (a = Pa(a, c => H(c, 1) === b)) && F(a, ml, 2) || []
    }

    function Hm(a, b) {
        var c = F(a, kl, 2),
            d = c.length,
            e = B(Ib(a, 8), 0);
        a = d * B(Ib(a, 1), 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * Sc());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = M(vf).F;
        return !c || e && !fe(D(c, Zd, 3), e) ? null : c
    };

    function Qm(a, b) {
        a.h = Nf(14, b, () => {})
    }
    class Rm {
        constructor() {
            this.h = () => {}
        }
    }

    function Sm(a) {
        M(Rm).h(a)
    };

    function Tm({
        bb: a,
        F: b,
        Za: c,
        Wa: d = zm(),
        Xa: e = 0,
        M: f = new uf(D(a, pl, 5) ? .i() ? ? 0, D(a, pl, 5) ? .l() ? ? 0, D(a, pl, 5) ? .m() ? ? !1)
    }) {
        d.hasOwnProperty("init-done") ? (Nf(12, d, () => {})(Na(F(a, ol, 2), g => g.toJSON())), Nf(13, d, () => {})(Na(F(a, ke, 1), g => g.toJSON()), e), b && Nf(14, d, () => {})(b), Um(e, d)) : (Om(new Pm(F(a, ol, 2), e, f, c), d), Of(d), Pf(d), Qf(d), Um(e, d), Jf(F(a, ke, 1), [e], f, void 0, !0), wf = wf || !(!c || !c.gb), Sm(Em), b && Sm(b))
    }

    function Um(a, b = zm()) {
        Rf(M(Sf), b, a);
        Vm(b, a);
        Qm(M(Rm), b);
        M(Jh).m()
    }

    function Vm(a, b) {
        const c = M(Jh);
        c.h = (d, e) => Nf(5, a, () => !1)(d, e, b);
        c.i = (d, e) => Nf(6, a, () => 0)(d, e, b);
        c.j = (d, e) => Nf(7, a, () => "")(d, e, b);
        c.l = (d, e) => Nf(8, a, () => [])(d, e, b);
        c.m = () => {
            Nf(15, a, () => {})(b)
        }
    };

    function Wm(a) {
        var b = M(Sf).l(a);
        a = um(M(vm), a, b);
        Uf.Z(1085, a)
    }
    var Xm = (a, b, c) => {
        var d = X(a);
        if (d.plle) Um(1, zm(a));
        else {
            d.plle = !0;
            d = D(b, rl, 12);
            var e = A(b, 9);
            Tm({
                bb: d,
                F: ym(c, b),
                Za: {
                    ra: e && !!a.google_disable_experiments,
                    gb: e
                },
                Wa: zm(a),
                Xa: 1
            });
            if (c = G(b, 15)) c = Number(c), M(Sf).j(c);
            for (const f of wb(b, 19, qb)) b = f, M(Sf).h(b);
            Wm(12);
            Wm(10);
            a = Lc(a) || a;
            lj(a.location, "google_mc_lab") && M(Sf).h(44738307);
            lj(a.location, "google_auto_storify_swipeable") && M(Sf).h(44773747);
            lj(a.location, "google_auto_storify_scrollable") && M(Sf).h(44773746);
            lj(a.location, "google_pga_monetization") &&
                M(Sf).h(44786632)
        }
    };
    var Ym = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Zm(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function $m(a) {
        return b => !!(b.fa & a)
    }
    class Y extends di {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.fa = c;
            this.hb = d
        }
        na() {
            return this.fa
        }
        i(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const an = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        bn = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        cn = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function dn(a) {
        var b = 0;
        a.T && b++;
        a.K && b++;
        a.L && b++;
        if (3 > b) return {
            N: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.T.split(",");
        const c = a.L.split(",");
        a = a.K.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            N: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            N: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                N: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                N: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            L: d,
            K: e,
            Oa: b
        }
    }

    function en(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    const fn = Ta("script");

    function gn(a, b, c) {
        null != a.fa && (c.google_responsive_formats = a.fa);
        null != a.P && (c.google_safe_for_responsive_override = a.P);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        const e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.v;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.B && (c.gfwroml = a.B);
        null != a.I && (c.gfwromr = a.I);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.O && (c.gfwroz = a.O);
        null != a.u && (c.gml = a.u);
        null != a.A && (c.gmr = a.A);
        null != a.R && (c.gzi = a.R);
        b = Lc(window) || window;
        lj(b.location, "google_responsive_dummy_ad") &&
            (Ra([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${fn}>window.top.postMessage('${a}', '*'); 
          </${fn}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`)
    }
    class hn {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, l = null, k = null, m = null, u = null) {
            this.v = a;
            this.ca = b;
            this.fa = c;
            this.h = d;
            this.P = e;
            this.i = f;
            this.j = g;
            this.B = h;
            this.I = l;
            this.l = k;
            this.m = m;
            this.O = u;
            this.R = this.A = this.u = null
        }
        size() {
            return this.ca
        }
    };
    const jn = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var kn = class extends di {
            h(a) {
                return Math.min(1200, Math.max(this.J, Math.round(a)))
            }
        },
        nn = (a, b) => {
            ln(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type) return new hn(9, new kn(a, Math.floor(a * b.google_phwr)));
            var c = Fc();
            468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * an.mobile_banner_image_sidebyside + bn.mobile_banner_image_sidebyside) + 96), a = {
                ba: a,
                aa: c,
                K: 1,
                L: 12,
                T: "mobile_banner_image_sidebyside"
            }) : (a = en(a), a = {
                ba: a.width,
                aa: a.height,
                K: 1,
                L: 13,
                T: "image_sidebyside"
            }) : (a = en(a), a = {
                ba: a.width,
                aa: a.height,
                K: 4,
                L: 2,
                T: "image_stacked"
            });
            mn(b, a);
            return new hn(9, new kn(a.ba, a.aa))
        },
        on = (a, b) => {
            ln(a, b);
            var c = dn({
                L: b.google_content_recommendation_rows_num,
                K: b.google_content_recommendation_columns_num,
                T: b.google_content_recommendation_ui_type
            });
            if (c.N) a = {
                ba: 0,
                aa: 0,
                K: 0,
                L: 0,
                T: "image_stacked",
                N: c.N
            };
            else {
                var d = 2 === c.Oa.length && 468 <= a ? 1 : 0;
                var e = c.Oa[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = cn[e];
                let g = c.K[d];
                for (; a / g < f && 1 < g;) g--;
                f = g;
                d = c.L[d];
                c = Math.floor(((a - 8 * f - 8) / f * an[e] + bn[e]) *
                    d + 8 * d + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    rb: "Calculated slot width is too large: " + a
                } : 1500 < c ? {
                    width: 0,
                    height: 0,
                    rb: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
                a = {
                    ba: a.width,
                    aa: a.height,
                    K: f,
                    L: d,
                    T: e
                }
            }
            if (a.N) throw new U(a.N);
            mn(b, a);
            return new hn(9, new kn(a.ba, a.aa))
        };

    function ln(a, b) {
        if (0 >= a) throw new U("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function mn(a, b) {
        a.google_content_recommendation_ui_type = b.T;
        a.google_content_recommendation_columns_num = b.K;
        a.google_content_recommendation_rows_num = b.L
    };
    class pn extends di {
        h() {
            return this.J
        }
        i(a, b, c) {
            ci(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const qn = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var rn = class extends di {
            h() {
                return Math.min(1200, this.J)
            }
        },
        sn = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = Yh(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = P(b).clientWidth)
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const l = g.parentElement.childNodes;
                                for (let k = 0; k < l.length; ++k) {
                                    const m = l[k];
                                    if (m != g && ai(b, m)) break b
                                }
                                g = g.parentElement;
                                g.style.width =
                                    "100%";
                                g.style.height = "auto"
                            }
                        }
                        ci(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new U("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new hn(11, new di(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b =
                    null;
                if (!b) throw new U("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new U("Invalid height: height=" + f);
                if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new U("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new hn(11, new di(a, f))
            }
            d = qn[f];
            if (!d) throw new U("Invalid data-ad-layout value: " + f);
            c = gi(c, b);
            b = P(b).clientWidth;
            b = "in-article" !==
                f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new hn(11, "in-article" == f ? new rn(a, b) : new di(a, b))
        };
    var tn = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        vn = (a, b) => {
            var c = un.slice(0);
            const d = c.length;
            let e = null;
            for (let f = 0; f < d; ++f) {
                const g = c[f];
                if (a(g)) {
                    if (!b || b(g)) return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        un = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];
    var xn = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                C: a,
                D: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || wn(b) || e.google_ad_resize ? (b = Zh(a, c, d, e), c = !0 !== b ? {
                C: a,
                D: b
            } : {
                C: P(c).clientWidth || a,
                D: !0
            }) : c = {
                C: a,
                D: 2
            };
            const {
                C: f,
                D: g
            } = c;
            return !0 !== g ? {
                C: a,
                D: g
            } : d.parentElement ? {
                C: f,
                D: g
            } : {
                C: a,
                D: g
            }
        },
        An = (a, b, c, d, e) => {
            const {
                C: f,
                D: g
            } = Aj(247, () => xn(a, b, c, d, e));
            var h = !0 === g;
            const l = K(d.style.width),
                k = K(d.style.height),
                {
                    Y: m,
                    W: u,
                    na: v,
                    Na: w
                } = yn(f, b, c, d, e, h);
            h = zn(b, v);
            var y;
            const E = (y = ei(d, c, "marginLeft",
                    K)) ? y + "px" : "",
                za = (y = ei(d, c, "marginRight", K)) ? y + "px" : "";
            y = ei(d, c, "zIndex") || "";
            return new hn(h, m, v, null, w, g, u, E, za, k, l, y)
        },
        wn = a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a),
        yn = (a, b, c, d, e, f) => {
            b = "auto" == b ? .25 >= a / Math.min(1200, P(c).clientWidth) ? 4 : 3 : Xh(b);
            let g;
            var h = !1;
            let l = !1;
            var k = 488 > P(c).clientWidth;
            if (k) {
                g = Sh(d, c);
                var m = gi(d, c);
                h = !m && g;
                l = m && g
            }
            m = [fi(a), $m(b)];
            m.push(ii(k, c, d, l));
            null != e.google_max_responsive_height && m.push(ji(e.google_max_responsive_height));
            k = [y => !y.hb];
            if (h || l) h = ki(c, d), k.push(ji(h));
            let u = vn(tn(m), tn(k));
            if (!u) throw new U("No slot size for availableWidth=" + a);
            const {
                Y: v,
                W: w
            } = Aj(248, () => {
                var y;
                a: if (f) {
                    if (e.gfwrnh && (y = K(e.gfwrnh))) {
                        y = {
                            Y: new pn(a, y),
                            W: !0
                        };
                        break a
                    }
                    y = a / 1.2;
                    var E = Math;
                    var za = E.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var S = Infinity;
                    else {
                        S = d;
                        let qa = Infinity;
                        do {
                            var Aa = ei(S, c, "height", K);
                            Aa && (qa = Math.min(qa, Aa));
                            (Aa = ei(S, c, "maxHeight", K)) && (qa = Math.min(qa, Aa))
                        } while ((S = S.parentElement) && "HTML" != S.tagName);
                        S = qa
                    }
                    E = za.call(E, y, S);
                    if (E < .5 * y || 100 > E) E = y;
                    y = {
                        Y: new pn(a, Math.floor(E)),
                        W: E < y ? 102 : !0
                    }
                } else y = {
                    Y: u,
                    W: 100
                };
                return y
            });
            return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
                Y: Bn(a, c, d, v, e),
                W: !1,
                na: b,
                Na: g
            } : {
                Y: v,
                W: w,
                na: b,
                Na: g
            }
        };
    const zn = (a, b) => {
            if ("auto" == a) return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        },
        Bn = (a, b, c, d, e) => {
            const f = e.google_ad_height || ei(c, b, "height", K);
            b = sn(a, b, c, f, e).size();
            return b.J * b.height() > a * d.height() ? new Y(b.J, b.height(), 1) : d
        };
    var Cn = (a, b, c, d, e) => {
        var f;
        (f = P(b).clientWidth) ? 488 > P(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, ci(b, c), f = {
            C: f,
            D: !0
        }) : f = {
            C: a,
            D: 5
        } : f = {
            C: a,
            D: 4
        }: f = {
            C: a,
            D: 10
        };
        const {
            C: g,
            D: h
        } = f;
        if (!0 !== h || a == g) return new hn(12, new di(a, d), null, null, !0, h, 100);
        const {
            Y: l,
            W: k,
            na: m
        } = yn(g, "auto", b, c, e, !0);
        return new hn(1, l, m, 2, !0, h, k)
    };
    var En = (a, b) => {
            const c = b.google_ad_format;
            if ("autorelaxed" == c) {
                a: {
                    if ("pedestal" != b.google_content_recommendation_ui_type)
                        for (const d of jn)
                            if (null != b[d]) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (wn(c)) return 1;
            if ("link" === c) return 4;
            if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (Dn(b), 1);
            if (27 === b.google_reactive_ad_format) return Dn(b), 1
        },
        Gn = (a, b, c, d, e = !1) => {
            e = b.offsetWidth || (c.google_ad_resize || e) && ei(b, d, "width",
                K) || c.google_ad_width || 0;
            4 === a && (c.google_ad_format = "auto", a = 1);
            var f = (f = Fn(a, e, b, c, d)) ? f : An(e, c.google_ad_format, d, b, c);
            f.size().i(d, c, b);
            gn(f, e, c);
            1 != a && (a = f.size().height(), b.style.height = a + "px")
        };
    const Fn = (a, b, c, d, e) => {
            const f = d.google_ad_height || ei(c, e, "height", K);
            switch (a) {
                case 5:
                    const {
                        C: g,
                        D: h
                    } = Aj(247, () => xn(b, d.google_ad_format, e, c, d));
                    !0 === h && b != g && ci(e, c);
                    !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return nn(g, d);
                case 9:
                    return on(b, d);
                case 8:
                    return sn(b, e, c, f, d);
                case 10:
                    return Cn(b, e, c, f, d)
            }
        },
        Dn = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function Hn(a, b) {
        var c = Lc(b);
        if (c) {
            c = P(c).clientWidth;
            const d = Oc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function In({
        pa: a,
        ua: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function Jn(a) {
        V.va(b => {
            b.shv = String(a);
            b.mjsv = In({
                pa: "m202303140101",
                ua: a
            });
            const c = M(Sf).i(),
                d = X(n);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    }

    function Kn(a) {
        Jn(G(a, 2));
        a = A(a, 6);
        $b(vl, Xd);
        vl = a
    };

    function Ln(a) {
        var b = V;
        try {
            return $b(a, Wd), new ul(JSON.parse(a))
        } catch (c) {
            b.H(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new ul
    };

    function Mn(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function Nn(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function On() {
        const a = new Set,
            b = nj();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch (c) {}
        return a
    }

    function Pn(a) {
        a = a.id;
        return null != a && (On().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function Qn(a, b, c) {
        if (!a.sources) return !1;
        switch (Rn(a)) {
            case 2:
                const d = Sn(a);
                if (d) return c.some(f => Tn(d, f));
            case 1:
                const e = Un(a);
                if (e) return b.some(f => Tn(e, f))
        }
        return !1
    }

    function Rn(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Un(a) {
        return Vn(a, b => b.currentRect)
    }

    function Sn(a) {
        return Vn(a, b => b.previousRect)
    }

    function Vn(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Tn(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function Wn() {
        const a = [...document.getElementsByTagName("iframe")].filter(Pn),
            b = [...On()].map(c => document.getElementById(c)).filter(c => null !== c);
        Xn = window.scrollX;
        Yn = window.scrollY;
        return Zn = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function $n() {
        var a = new ao;
        if (T(wh)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                for (const c of b) a.M().observe({
                    type: c,
                    buffered: !0
                });
                bo(a)
            }
        }
    }

    function bo(a) {
        const b = ri(641, () => {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && co(a)
            }),
            c = ri(641, () => void co(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.wa = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            a.M().disconnect()
        }
    }

    function co(a) {
        if (!a.Da) {
            a.Da = !0;
            a.M().takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Nn("cls", a.A), b += Nn("mls", a.I), b += Mn("nls", a.O), window.LayoutShiftAttribution && (b += Nn("cas", a.m), b += Mn("nas", a.Ca)), b += Nn("wls", a.ca), b += Nn("tls", a.Ga), window.LayoutShiftAttribution && (b += Nn("was", a.Ha)));
            window.LargestContentfulPaint && (b += Mn("lcp", a.Aa), b += Mn("lcps", a.za));
            window.PerformanceEventTiming && a.ya && (b += Mn("fid", a.xa));
            window.PerformanceLongTaskTiming &&
                (b += Mn("cbt", a.u), b += Mn("mbt", a.B), b += Mn("nlt", a.P));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) Pn(c) && d++;
            b += Mn("nif", d);
            b += Mn("ifi", sd(window));
            c = M(Sf).i();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${n===n.top?1:0}`;
            b += a.Fa ? `&${"qqid"}=${encodeURIComponent(a.Fa)}` : Mn("pvsid", cd(n));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            cf(a)
        }
    }
    class ao extends bf {
        constructor() {
            super();
            this.l = this.i = this.O = this.I = this.A = 0;
            this.Ea = this.Ba = Number.NEGATIVE_INFINITY;
            this.xa = this.za = this.Aa = this.Ca = this.Ha = this.m = this.Ga = this.ca = 0;
            this.ya = !1;
            this.P = this.B = this.u = 0;
            const a = document.querySelector("[data-google-query-id]");
            this.Fa = a ? a.getAttribute("data-google-query-id") : null;
            this.R = null;
            this.Da = !1;
            this.wa = () => {}
        }
        M() {
            this.R || (this.R = new PerformanceObserver(ri(640, a => {
                const b = Xn !== window.scrollX || Yn !== window.scrollY ? [] : Zn,
                    c = Wn();
                for (const f of a.getEntries()) switch (f.entryType) {
                    case "layout-shift":
                        a =
                            f;
                        var d = b,
                            e = c;
                        if (!a.hadRecentInput) {
                            this.A += Number(a.value);
                            Number(a.value) > this.I && (this.I = Number(a.value));
                            this.O += 1;
                            if (d = Qn(a, d, e)) this.m += a.value, this.Ca++;
                            if (5E3 < a.startTime - this.Ba || 1E3 < a.startTime - this.Ea) this.Ba = a.startTime, this.l = this.i = 0;
                            this.Ea = a.startTime;
                            this.i += a.value;
                            d && (this.l += a.value);
                            this.i > this.ca && (this.ca = this.i, this.Ha = this.l, this.Ga = a.startTime + a.duration)
                        }
                        break;
                    case "largest-contentful-paint":
                        a = f;
                        this.Aa = Math.floor(a.renderTime || a.loadTime);
                        this.za = a.size;
                        break;
                    case "first-input":
                        a =
                            f;
                        this.xa = Number((a.processingStart - a.startTime).toFixed(3));
                        this.ya = !0;
                        break;
                    case "longtask":
                        a = Math.max(0, f.duration - 50), this.u += a, this.B = Math.max(this.B, a), this.P += 1
                }
            })));
            return this.R
        }
        h() {
            super.h();
            this.wa()
        }
    }
    var Xn = void 0,
        Yn = void 0,
        Zn = [];
    var eo = class extends I {
        constructor() {
            super()
        }
        getVersion() {
            return G(this, 2)
        }
    };

    function fo(a, b) {
        return x(a, 2, b)
    }

    function go(a, b) {
        return x(a, 3, b)
    }

    function ho(a, b) {
        return x(a, 4, b)
    }

    function io(a, b) {
        return x(a, 5, b)
    }

    function jo(a, b) {
        return x(a, 9, b)
    }

    function ko(a, b) {
        return Gb(a, 10, b)
    }

    function lo(a, b) {
        return x(a, 11, b)
    }

    function mo(a, b) {
        return x(a, 1, b)
    }

    function no(a, b) {
        return x(a, 7, b)
    }
    var po = class extends I {
            constructor() {
                super(void 0, -1, oo)
            }
        },
        oo = [10, 6];
    const qo = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function ro() {
        if ("function" !== typeof L.navigator ? .userAgentData ? .getHighEntropyValues) return null;
        const a = L.google_tag_data ? ? (L.google_tag_data = {});
        if (a.uach_promise) return a.uach_promise;
        const b = L.navigator.userAgentData.getHighEntropyValues(qo).then(c => {
            a.uach ? ? (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }

    function so(a) {
        return lo(ko(io(fo(mo(ho(no(jo(go(new po, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new eo;
            c = x(c, 1, b.brand);
            return x(c, 2, b.version)
        }) || []), a.wow64 || !1)
    }

    function to() {
        return ro() ? .then(a => so(a)) ? ? null
    };

    function uo(a, b) {
        b.google_ad_host || (a = Ml(a)) && (b.google_ad_host = a)
    }

    function vo(a, b, c = "") {
        L.google_sa_impl && !L.document.getElementById("google_shimpl") && (delete L.google_sa_queue, delete L.google_sa_impl);
        L.google_sa_queue || (L.google_sa_queue = [], L.google_process_slots = V.ma(215, () => wo(L.google_sa_queue)), a = xo(c, a, b), Mc(L.document, a).id = "google_shimpl")
    }

    function wo(a) {
        const b = a.shift();
        "function" === typeof b && V.ea(216, b);
        a.length && n.setTimeout(V.ma(215, () => wo(a)), 0)
    }

    function yo(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function xo(a, b, c) {
        b = A(c, 4) ? b.pb : b.qb;
        const d = {};
        a: {
            if (A(c, 4)) {
                if (a = a || nm(L)) {
                    a = {
                        client: a,
                        plah: L.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        zo(a, d);
        zo(Lh() ? {
            bust: Lh()
        } : {}, d);
        return xc(b, d)
    }

    function zo(a, b) {
        J(a, (c, d) => {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Ao(a) {
        a: {
            var b = [n.top];
            var c = [];
            let e = 0,
                f;
            for (; f = b[e++];) {
                c.push(f);
                try {
                    if (f.frames)
                        for (let g = 0; g < f.frames.length && 1024 > b.length; ++g) b.push(f.frames[g])
                } catch {}
            }
            b = c;
            for (c = 0; c < b.length; c++) try {
                var d = b[c].frames.google_esf;
                if (d) {
                    kd = d;
                    break a
                }
            } catch (g) {}
            kd = null
        }
        if (kd) return null;d = Nc("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = zc(a.wb).toString();d.style.display = "none";
        return d
    }

    function Bo(a, b, c, d, e) {
        const f = e.cb;
        Co(a, c, b);
        c = oa;
        const g = (new Date).getTime();
        b.google_lrv = In({
            pa: "m202303140101",
            ua: G(d, 2)
        });
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        d = a.document.getElementById(f + "_host") ? h => h() : h => window.setTimeout(h, 0);
        yo(a, () => {
            var {
                vb: h
            } = e;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == h) throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) && V.Z(911, h)
        }, d)
    }

    function Co(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Ym[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Tc(e.join(":")).toString();
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let l = 0;
                        for (let k = 0; k < h.length; ++k) {
                            const m = h[k];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                                if (b === m) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g =
                    ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && 25 > d; ++d) {
                    const l = h.frames;
                    for (f = 0; f < l.length; ++f)
                        if (a === l[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = Tc(b + e.join()).toString()
        }
    }

    function Do() {
        var a = Lc(n);
        a && (a = Ag(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Eo() {
        const a = to();
        null != a && a.then(b => {
            a: {
                mb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), Xb);
                    break a
                } finally {
                    mb = !1
                }
                c = void 0
            }
            L.google_user_agent_client_hint = c
        });
        Am()
    };

    function Fo(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Go(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Jc(c, "client");
            d && (b.google_ad_client = Fo("google_ad_client", d));
            (c = Jc(c, "host")) && (b.google_ad_host = Fo("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = pa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Fo(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Ho(a) {
        if (a = nd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Io(a, b, c, d) {
        Go(a, b);
        if (c.document && c.document.body && !En(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Hn(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Ym[e + "x" + g];
                var h = f;
                if (e) {
                    const l = Zm(f, g);
                    if (l) h = l, b.google_ad_format = l + "x" + g + "_0ads_al";
                    else throw new U("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                g = An(f, "auto", c, a, b);
                h = f;
                g.size().i(c,
                    b, a);
                gn(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.J > f && !e && (b.google_ad_width = g.J, a.style.width = `${g.J}px`)
            }
        }(e = a.offsetWidth) || (e = ei(a, c, "width", K));
        e = e || b.google_ad_width || 0;
        if (488 > P(c).clientWidth) {
            f = Lc(c) || c;
            g = b.google_ad_client;
            if (d = lj(f.location, "google_responsive_slot_preview") || T(nh) || yl(f, 1, g, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || En(c, b) || Uh(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = Oc(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Ra(["static", "relative"], f.position)) {
                            b.gfwrnwer =
                                17;
                            d = !1;
                            break b
                        }
                    }
                    d = Yh(c, a, e, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (b.google_resizing_allowed = !0, b.ovlp = !0, b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1, d = !0) : d = !1
        } else d = !1;
        if (e = En(c, b)) Gn(e, a, b, c, d);
        else {
            if (Uh(a, b)) {
                if (d = Oc(a, c)) a.style.width = d.width, a.style.height = d.height, Th(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Ho(c)
            } else Th(a.style, b);
            c.location &&
                "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Gn(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Zh(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Jo(a) {
        if (a.i) return a.i;
        a.B && a.B(a.l) ? a.i = a.l : a.i = Yc(a.l, a.I);
        return a.i ? ? null
    }
    var Ko = class extends bf {
        constructor(a, b, c) {
            super();
            this.I = a;
            this.B = b;
            this.O = c;
            this.A = new Map;
            this.u = new Map;
            this.R = new Map;
            this.P = new Map;
            this.m = void 0;
            this.l = L
        }
        h() {
            delete this.i;
            this.A.clear();
            this.u.clear();
            this.R.clear();
            this.P.clear();
            this.m && (mc(this.l, "message", this.m), delete this.m);
            delete this.l;
            delete this.O;
            super.h()
        }
    };
    const Lo = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.callback({
                    consentData: c ? ? void 0,
                    ab: d ? void 0 : 2
                })
            })
        },
        Mo = {
            ib: a => a.callback,
            jb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            lb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    ab: b.success ? void 0 : 2
                })
            }
        };

    function No(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            nb: b.__uspapiReturn.callId
        }
    }
    var Oo = class extends bf {
        constructor() {
            super();
            this.caller = new Ko("__uspapiLocator", a => "function" === typeof a.__uspapi, No);
            this.caller.A.set("getDataWithCallback", Lo);
            this.caller.u.set("getDataWithCallback", Mo)
        }
        h() {
            cf(this.caller);
            super.h()
        }
        m() {
            return !!Jo(this.caller)
        }
    };
    var Po = ac(class extends I {
        constructor(a) {
            super(a)
        }
    });
    const Qo = (a, b) => {
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c => {
                c = Po(c);
                b.callback({
                    consentData: c
                })
            })
        },
        Ro = {
            ib: a => a.callback,
            jb: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command
                }
            }),
            lb: (a, b) => {
                a({
                    consentData: b
                })
            }
        };

    function So(a) {
        a = Po(a.data.__fciReturn);
        return {
            payload: a,
            nb: B(t(a, 1), 0)
        }
    }
    var To = class extends bf {
        constructor() {
            super();
            this.i = null;
            this.l = !1;
            this.caller = new Ko("googlefcPresent", void 0, So);
            this.caller.A.set("getDataWithCallback", Qo);
            this.caller.u.set("getDataWithCallback", Ro)
        }
        h() {
            cf(this.caller);
            super.h()
        }
        m() {
            this.l || (this.i = Jo(this.caller), this.l = !0);
            return !!this.i
        }
    };

    function Uo() {
        const a = qd `(a=0)=>{let b;const c=class{};}`;
        try {
            var b = window;
            const c = a instanceof uc && a.constructor === uc ? a.h : "type_error:SafeScript";
            b.eval(c) === c && b.eval(c.toString());
            return {
                supports: !0,
                error: ""
            }
        } catch (c) {
            return {
                supports: !1,
                error: String(c)
            }
        }
    };
    var Vo = a => {
        lc(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "sc-cnf" !== c.googMsgType || a(c, b)
        })
    };
    var Wo = class extends bf {
        constructor() {
            super();
            this.l = L;
            this.i = null
        }
        h() {
            super.h()
        }
        m() {
            var a;
            (a = "function" === typeof this.l ? .__uspapi) || (a = this.i ? this.i : this.i = Yc(this.l, "__uspapiLocator"), a = null != a);
            return a
        }
    };
    var Xo = class extends bf {
        constructor() {
            super();
            this.u = L;
            this.i = null;
            this.l = !1
        }
        m() {
            if (!this.l) {
                if (!this.i) {
                    var a = Yc(this.u, "googlefcPresent");
                    this.i = a ? a : null
                }
                this.l = !0
            }
            return !!this.i
        }
    };
    let Yo = null;
    const Zo = [],
        $o = new Map;
    let ap = -1;

    function bp(a) {
        return mi.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }

    function cp(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        dp(a, b, c)
    }

    function dp(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Io);
        var e = b.google_reactive_ads_config;
        e || Io(a, b, d, c);
        uo(d, b);
        if (!ep(a, b, d)) {
            e || (d.google_lpabyc = Wh(a, d) + (ei(a, d, "height", K) || 0));
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(L).page_contains_reactive_tag && !X(L).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Kl(!1);
                        return
                    }
                    throw new U("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(L).page_contains_reactive_tag = !0;
                Kl(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = rd(d);
            J(jm, (f, g) => {
                b[g] = b[g] ||
                    d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (X(L).first_tag_on_page || 0);
            Aj(164, () => {
                var f = d.document;
                for (var g = void 0, h = 0; !g || f.getElementById(g + "_host");) g = "aswift_" + h++;
                f = g;
                g = Number(b.google_ad_width || 0);
                h = Number(b.google_ad_height || 0);
                const l = Nc("DIV");
                l.id = f + "_host";
                const k = l.style;
                k.border = "none";
                k.height = `${h}px`;
                k.width = `${g}px`;
                k.margin = "0px";
                k.padding = "0px";
                k.position = "relative";
                k.visibility = "visible";
                k.backgroundColor = "transparent";
                l.style.display = "inline-block";
                a.appendChild(l);
                Bo(d, b, a, c, {
                    cb: f,
                    vb: l
                })
            })
        }
    }

    function ep(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = Il(c);
        if (f && f.Ia && "on" !== b.google_adtest && !e) {
            e = Wh(a, c);
            const g = P(c).clientHeight;
            e = 0 == g ? null : e / g;
            if (!f.oa || f.oa && (e || 0) >= f.oa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = ea(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.tb && (null !== Xc(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== Xc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Oc(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function fp(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (bp(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e
        }
        return null
    }

    function gp(a, b, c) {
        if (a && "shift" in a)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    hp(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
    }

    function ip() {
        const a = Nc("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        $c(a, {
            display: "none"
        });
        return a
    }

    function jp(a, b) {
        const c = {},
            d = Hl();
        J(zg, (g, h) => {
            !1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        da(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = ip();
        dd.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(L).pause_ad_requests;
        cp(e, f, b)
    }

    function kp(a, b) {
        Ag(n).wasPlaTagProcessed = !0;
        const c = () => jp(a, b),
            d = n.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState) jp(a, b);
        else {
            const e = kc(V.ma(191, c));
            lc(d, "DOMContentLoaded", e);
            (new n.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function hp(a, b, c) {
        const d = {};
        Aj(165, () => lp(a, d, b, c), e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function mp(a) {
        delete a.google_checked_head;
        J(a, (b, c) => {
            li[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), n.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }

    function np(a, b) {
        var c = L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars) op(c);
            else {
                var e = {};
                Go(c, e);
                mp(e);
                var f = qc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                L.adsbygoogle || (L.adsbygoogle = []);
                d = L.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.l() ? .l() && T(th) ? pp(f, a) : Vo(() => {
                    pp(f, a)
                })
            }
        }
    }

    function op(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Jc(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new U("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function qp(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function lp(a, b, c, d) {
        if (null == a) throw new U("push() called with no parameters.");
        d.m() && rp(a, d.i().i(), G(d, 2));
        var e = qp(a);
        if (0 !== e)
            if (d = Ll(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = oa), null == Yo) sp(a), Zo.push(a);
            else if (3 === e) {
            const f = Yo;
            Aj(787, () => {
                f.handleAdConfig(a)
            })
        } else Cj(730, Yo.handleAdBreak(a));
        else {
            oa = (new Date).getTime();
            vo(c, d, tp(a));
            up();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new U("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) vp(a, d);
            else if ((e = a.params) && J(e, (f, g) => {
                    b[g] = f
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = wp(a.element);
                Go(e, b);
                c = X(n).head_tag_slot_vars || {};
                J(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") && !X(n).head_tag_slot_vars) throw new U("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new U("Ad client is missing from the slot.");
                (c = 0 === (X(L).first_tag_on_page || 0) && em(b)) && xp(c);
                0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(L).pause_ad_requests;
                cp(e, b, d)
            }
        }
    }
    let yp = !1;

    function rp(a, b, c) {
        yp || (yp = !0, a = tp(a) || nm(L), Bj("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function tp(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function up() {
        if (T(gh)) {
            var a = Il(L);
            if (!(a = a && a.Ia)) {
                try {
                    var b = L.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? fl(b) : null;
                a = !(b && el(b) && b)
            }
            a || Jl(L, 1)
        }
    }

    function xp(a) {
        ed(() => {
            Ag(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a)
        })
    }

    function vp(a, b) {
        0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(n);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        hm(a, b);
        kp(a, b)
    }

    function wp(a) {
        if (a) {
            if (!bp(a) && (a.id ? a = fp(a.id) : a = null, !a)) throw new U("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new U("'element' is not a good DOM element.");
        } else if (a = fp(), !a) throw new U("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function zp() {
        const a = new Wj(L),
            b = T(zh) ? new Oo : new Wo,
            c = T(yh) ? new To : new Xo;
        Bj("cmpMet", {
            tcfv1: L.__cmp ? 1 : 0,
            tcfv2: Tj(a) ? 1 : 0,
            usp: b.m() ? 1 : 0,
            fc: c.m() ? 1 : 0,
            ptt: 9
        }, .001)
    }

    function Ap(a) {
        Fj().S[Ij(26)] = !!Number(a)
    }

    function Bp(a) {
        Number(a) ? X(L).pause_ad_requests = !0 : (X(L).pause_ad_requests = !1, a = () => {
            if (!X(L).pause_ad_requests) {
                var b = {};
                let c;
                "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                L.dispatchEvent(c)
            }
        }, n.setTimeout(a, 0), n.setTimeout(a, 1E3))
    }

    function Cp(a) {
        Bj("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error(`Illegal value of ${"cookieOptions"}: ${a}`);
        }
        L._gfp_a_ = a
    }

    function Dp(a) {
        try {
            Object.defineProperty(a, "requestNonPersonalizedAds", {
                set: Ap
            }), Object.defineProperty(a, "pauseAdRequests", {
                set: Bp
            }), Object.defineProperty(a, "cookieOptions", {
                set: Cp
            }), Object.defineProperty(a, "onload", {
                set: Ep
            })
        } catch {}
    }

    function Ep(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function pp(a, b) {
        b = dm(xc(b.sb, Lh() ? {
            bust: Lh()
        } : {})).then(c => {
            null == Yo && (c.init(a), Yo = c, Fp(c))
        });
        V.Z(723, b);
        b.finally(() => {
            Zo.length = 0;
            Bj("slotcar", {
                event: "api_ld",
                time: Date.now() - oa,
                time_pr: Date.now() - ap
            })
        })
    }

    function Fp(a) {
        for (const [c, d] of $o) {
            var b = c;
            const e = d; - 1 !== e && (n.clearTimeout(e), $o.delete(b))
        }
        for (b = 0; b < Zo.length; b++) {
            if ($o.has(b)) continue;
            const c = Zo[b],
                d = qp(c);
            Aj(723, () => {
                if (3 === d) a.handleAdConfig(c);
                else if (2 === d) {
                    var e = a.handleAdBreakBeforeReady(c);
                    V.Z(730, e)
                }
            })
        }
    }

    function sp(a) {
        var b = Zo.length;
        if (2 === qp(a) && "preroll" === a.type && null != a.adBreakDone) {
            var c = a.adBreakDone; - 1 === ap && (ap = Date.now());
            var d = n.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), $o.set(b, -1), Bj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, 1E3 * Kh(uh));
            $o.set(b, d)
        }
    };
    (function(a, b, c, d = () => {}) {
        V.Qa(Dj);
        Aj(166, () => {
            const e = Ln(b);
            Kn(e);
            d();
            md(16, [1, e.toJSON()]);
            var f = od(nd(L)) || L;
            const g = c(In({
                pa: a,
                ua: G(e, 2)
            }), e);
            var h = null === L.document.currentScript ? 1 : xm(g.ub);
            zl(f, e);
            Xm(f, e, h);
            Cj(1086, tm(M(vm), 0 === h));
            if (!Da() || 0 <= ra(Ja(), 11)) {
                zj(T(xh));
                Eo();
                Qk();
                try {
                    $n()
                } catch {}
                Do();
                np(g, e);
                f = window;
                h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    Bj("new_abg_tag", {
                        value: `${A(e,16)}`,
                        host_v: `${A(e,22)}`,
                        frequency: .01
                    }, .01);
                    zp();
                    var l = {
                        push: v => {
                            hp(v, g, e)
                        },
                        loaded: !0
                    };
                    Dp(l);
                    if (h)
                        for (var k of ["requestNonPersonalizedAds",
                                "pauseAdRequests", "cookieOptions"
                            ]) void 0 !== h[k] && (l[k] = h[k]);
                    T(hh) || "_gfp_a_" in window || (window._gfp_a_ = !0);
                    gp(h, g, e);
                    f.adsbygoogle = l;
                    h && (l.onload = h.onload);
                    (k = Ao(g)) && document.documentElement.appendChild(k);
                    var {
                        supports: m,
                        error: u
                    } = Uo();
                    Bj("modern_js", {
                        fy: B(t(e, 1), 0),
                        supports: String(m),
                        c: 2021,
                        e: u
                    }, .01)
                }
            }
        })
    })("m202303140101", "undefined" === typeof sttc ? void 0 : sttc, function(a, b) {
        const c = 2012 < B(t(b, 1), 0) ? `_fy${B(t(b,1),0)}` : "";
        var d = G(b, 3);
        const e = G(b, 2);
        b = pd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`;
        d = pd `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`;
        return {
            sb: b,
            qb: pd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`,
            pb: pd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`,
            Yb: pd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`,
            wb: d,
            ub: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20230315\",\"r20190131\",null,null,null,null,\".google.co.ug\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1216,null,null,[1]],[1215,null,null,[1]],[1190,null,null,[1]],[null,1245,null,[null,3600]],[null,508040914,null,[null,100]],[null,1114,null,[null,1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,[\"2\"]],null,10003],[1086,null,null,[1]],[63682,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[1033,null,null,[1]],[null,null,null,[null,null,null,[\"Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv\/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[1971,null,null,[1]],[1975,null,null,[1]],[1974,null,null,[1]],[null,1972,null,[]],[null,501545963,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[505942137,null,null,[]],[null,501545962,null,[null,1]],[null,495583959,null,[null,-1]],[null,45388309,null,[null,-1]],[null,1116,null,[null,300]],[1203,null,null,[1]],[501545959,null,null,[1]],[469675169,null,null,[1]],[null,469675170,null,[null,30000]],[504535903,null,null,[1]],[502896280,null,null,[1]],[485990406,null,null,[]],[501411886,null,null,[1]]],[[10,[[50,[[31073015],[31073016,[[1216,null,null,[]]]]],null,72],[null,[[31073227],[31073228,[[1229,null,null,[1]]]],[31073229,[[1230,null,null,[1]]]],[31073230,[[1231,null,null,[1]]]],[31073231,[[1230,null,null,[1]],[1229,null,null,[1]],[1231,null,null,[1]]]]],null,72],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44767166],[44767167]]],[10,[[44782466],[44782467,[[1160,null,null,[1]]]],[44782468,[[1226,null,null,[1]],[1160,null,null,[1]]]]]],[1,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[1,[[44785294],[44785295]]],[10,[[31071258],[31071259]]],[100,[[31071755],[31071756,[[1222,null,null,[1]]]]]],[100,[[31072951],[31072952,[[10006,null,null,[1]]]]]],[100,[[31072953],[31072954,[[10007,null,null,[1]]]]]],[100,[[31073057],[31073058,[[471262996,null,null,[1]]]]]],[100,[[31073098],[31073099,[[1237,null,null,[1]]]]]],[100,[[31073102],[31073103,[[511172886,null,null,[1]]]]]],[100,[[31073104],[31073105,[[1242,null,null,[1]]]]]],[100,[[31073106],[31073107,[[1244,null,null,[1]]]]]],[100,[[31073127],[31073128,[[1243,null,null,[1]]]]]],[1000,[[31073141,[[null,null,14,[null,null,\"31073141\"]]],[6,null,null,null,6,null,\"31073141\"]],[31073142,[[null,null,14,[null,null,\"31073142\"]]],[6,null,null,null,6,null,\"31073142\"]]],[4,null,55],63],[1000,[[31073176,[[null,null,14,[null,null,\"31073176\"]]],[6,null,null,null,6,null,\"31073176\"]],[31073177,[[null,null,14,[null,null,\"31073177\"]]],[6,null,null,null,6,null,\"31073177\"]]],[4,null,55],63],[10,[[31073262],[31073263,[[1247,null,null,[1]]]]]],[10,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,54],[50,[[44774292],[44774606,[[1147,null,null,[1]]]]],null,54],[1,[[44776415]],null,54],[1,[[44779343],[44779344,[[1147,null,null,[1]]]]],null,54],[10,[[44786499],[44786500,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44786501,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44786502,[[1233,null,null,[1]],[1185,null,null,[1]]]],[44786559,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44786560,[[1233,null,null,[1]],[1147,null,null,[1]]]]],null,54],[50,[[44786631],[44786632,[[null,null,null,[null,null,null,[\"1\",\"2\"]],null,10003]]]],null,51],[10,[[44786918],[44786919,[[1147,null,null,[1]]]],[44786920,[[1147,null,null,[1]]]]],null,54],[10,[[44787442],[44787443,[[1238,null,null,[1]]]]]],[10,[[44787455],[44787456,[[1240,null,null,[1]]]]]],[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44776369],[44779109],[44779906],[44784478],[44785149]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69]]],[17,[[null,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[10,[[31071260]]],[10,[[31071261],[31071262],[31071263],[31071264]],null,null,null,44,22],[10,[[31071265],[31071266]],null,null,null,44,null,500],[10,[[31071267]],null,null,null,44,null,900],[10,[[31071268],[31071269]],null,null,null,null,null,null,null,101],[19,[[31073085,[[null,506864295,null,[null,300]],[null,506871937,null,[null,31073085]],[506619840,null,null,[1]]]],[31073086,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,506871937,null,[null,31073086]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]],[501545959,null,null,[]],[506619840,null,null,[1]]]],[31073087,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,506871937,null,[null,31073087]],[491815314,null,null,[1]],[506619840,null,null,[1]]]],[31073088,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[null,506871937,null,[null,31073088]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1116,null,[null,50]],[491815314,null,null,[1]],[506619840,null,null,[1]]]],[31073089,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,506871937,null,[null,31073089]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,372,null,117,1],[10,[[44786422,[[null,506864295,null,[null,300]],[null,506871937,null,[null,44786422]],[506619840,null,null,[1]]]],[44786423,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,506871937,null,[null,44786423]],[501545959,null,null,[]],[506619840,null,null,[1]]]],[44786424,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[null,506871937,null,[null,44786424]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,42,null,117,1],[10,[[44786427,[[null,506864295,null,[null,300]],[null,506871937,null,[null,44786427]],[506619840,null,null,[1]]]],[44786428,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,506871937,null,[null,44786428]],[1162,null,null,[1]],[501545959,null,null,[]],[506619840,null,null,[1]]]],[44786429,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,1114,null,[null,-1]],[null,506871937,null,[null,44786429]],[1162,null,null,[1]],[null,1157,null,[null,400]],[null,1116,null,[null,50]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,192,null,117,1],[1,[[44787115,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[1120,null,null,[1]],[null,506871937,null,[null,44787115]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]],[506619840,null,null,[1]]]],[44787116,[[null,506864295,null,[null,300]],[501545960,null,null,[1]],[289410051,null,null,[1]],[1120,null,null,[1]],[null,506871937,null,[null,44787116]],[504787204,null,null,[1]],[1162,null,null,[1]],[null,501545963,null,[null,-1]],[null,1157,null,[null,400]],[494741144,null,null,[1]],[501545961,null,null,[1]],[null,501545962,null,[null,0.4]],[491815314,null,null,[1]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,512,null,117,1],[1,[[44787212,[[null,506864295,null,[null,300]],[506914611,null,null,[1]],[null,506871937,null,[null,44787212]],[506619840,null,null,[1]]]],[44787213,[[null,506864295,null,[null,300]],[1120,null,null,[1]],[null,1114,null,[null,0.4]],[506914611,null,null,[1]],[null,506871937,null,[null,44787213]],[506619840,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,117,1]]],[11,[[10,[[31072977],[31072978,[[483374575,null,null,[1]]]]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[31070383,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]],[31070384,[[439828594,null,null,[1]]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[31070594],[31070595,[[439828594,null,null,[1]],[483962503,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[100,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[200,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[null,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44783617,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44784847,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]],[20,[[1000,[[31070530,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070531,null,[2,[[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]],[4,null,8,null,null,null,null,[\"credentialless\"]]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070532,null,[4,null,9,null,null,null,null,[\"SharedArrayBuffer\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]]],null,null,[null,\"1000\",1,\"1000\"]],null,[[\"ca-pub-6379244916213604\",\"ca-pub-1900563300414041\"],[null,[]]],null,null,null,1601859224,[44759927,44759837,44777877,44759876]]");