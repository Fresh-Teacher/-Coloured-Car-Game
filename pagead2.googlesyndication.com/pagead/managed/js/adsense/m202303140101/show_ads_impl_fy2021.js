(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var p, ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        ha = {},
        ia = {};

    function ja(a, b, c) {
        if (!c || null != a) {
            c = ia[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    }

    function ka(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in ha ? f = ha : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(ha, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ma;
    if (fa && "function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma;

    function sa(a, b) {
        a.prototype = la(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.zg = b.prototype
    }
    ka("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        sa(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ka("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ha.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var t = this || self;

    function ta(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ua(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function va(a) {
        return Object.prototype.hasOwnProperty.call(a, xa) && a[xa] || (a[xa] = ++ya)
    }
    var xa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ya = 0;

    function Aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ba(a, b, c) {
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

    function Ca(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ca = Aa : Ca = Ba;
        return Ca.apply(null, arguments)
    }

    function Da(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ga() {
        return Date.now()
    }

    function Ha(a, b) {
        a = a.split(".");
        var c = t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ja(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.zg = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Lk = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function La(a) {
        return a
    };
    var Ma = {
        Mj: 0,
        Lj: 1,
        Kj: 2
    };

    function Oa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Oa);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ja(Oa, Error);
    Oa.prototype.name = "CustomError";
    var Pa;

    function Qa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Oa.call(this, c + a[d])
    }
    Ja(Qa, Oa);
    Qa.prototype.name = "AssertionError";

    function Ra(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Sa(a) {
        if (!Ta.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ua, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Va, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ya, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Za, "&#0;"));
        return a
    }
    var Ua = /&/g,
        Va = /</g,
        Wa = />/g,
        Xa = /"/g,
        Ya = /'/g,
        Za = /\x00/g,
        Ta = /[\x00&<>"']/;

    function $a(a, b) {
        return -1 != a.indexOf(b)
    }

    function ab(a) {
        var b = bb();
        let c = 0;
        b = Ra(String(b)).split(".");
        a = Ra(String(a)).split(".");
        const d = Math.max(b.length, a.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = b[g] || "",
                f = a[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = cb(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || cb(0 == e[2].length, 0 == f[2].length) || cb(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function cb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var db, eb;
    a: {
        for (var fb = ["CLOSURE_FLAGS"], gb = t, hb = 0; hb < fb.length; hb++)
            if (gb = gb[fb[hb]], null == gb) {
                eb = null;
                break a
            }
        eb = gb
    }
    var ib = eb && eb[610401301];
    db = null != ib ? ib : !1;

    function jb() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var kb;
    const nb = t.navigator;
    kb = nb ? nb.userAgentData || null : null;

    function ob(a) {
        return db ? kb ? kb.brands.some(({
            brand: b
        }) => b && $a(b, a)) : !1 : !1
    }

    function u(a) {
        return $a(jb(), a)
    };

    function pb() {
        return db ? !!kb && 0 < kb.brands.length : !1
    }

    function qb() {
        return pb() ? !1 : u("Opera")
    }

    function rb() {
        return pb() ? !1 : u("Trident") || u("MSIE")
    }

    function sb() {
        return pb() ? !1 : u("Edge")
    }

    function tb() {
        return pb() ? ob("Microsoft Edge") : u("Edg/")
    }

    function ub() {
        return u("Firefox") || u("FxiOS")
    }

    function vb() {
        return u("Safari") && !(wb() || (pb() ? 0 : u("Coast")) || qb() || sb() || tb() || (pb() ? ob("Opera") : u("OPR")) || ub() || u("Silk") || u("Android"))
    }

    function wb() {
        return pb() ? ob("Chromium") : (u("Chrome") || u("CriOS")) && !sb() || u("Silk")
    }

    function xb() {
        return u("Android") && !(wb() || ub() || qb() || u("Silk"))
    }

    function yb(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function bb() {
        var a = jb();
        if (rb()) {
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
        a = yb(b);
        return qb() ? a(["Version", "Opera"]) :
            sb() ? a(["Edge"]) : tb() ? a(["Edg"]) : u("Silk") ? a(["Silk"]) : wb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function zb(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ab(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Bb(a, b) {
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

    function Cb(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Db(a, b, c) {
        let d = c;
        Ab(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Eb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Fb(a, b) {
        return 0 <= zb(a, b)
    }

    function Gb(a, b) {
        b = zb(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Hb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ib(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Jb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Kb(a, b, c) {
        c = c || Lb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            0 < h ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function Mb(a, b) {
        if (!ta(a) || !ta(b) || a.length != b.length) return !1;
        const c = a.length,
            d = Nb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function Lb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Nb(a, b) {
        return a === b
    }

    function Ob(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = Ob.apply(null, Jb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function Pb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Qb(a) {
        Qb[" "](a);
        return a
    }
    Qb[" "] = function() {};

    function Rb(a, b) {
        try {
            return Qb(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Sb = qb(),
        Tb = rb(),
        Ub = u("Edge"),
        Vb = Ub || Tb,
        Wb = u("Gecko") && !($a(jb().toLowerCase(), "webkit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        Xb = $a(jb().toLowerCase(), "webkit") && !u("Edge");

    function Yb() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var Zb;
    a: {
        var $b = "",
            ac = function() {
                var a = jb();
                if (Wb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Ub) return /Edge\/([\d\.]+)/.exec(a);
                if (Tb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Xb) return /WebKit\/(\S+)/.exec(a);
                if (Sb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();ac && ($b = ac ? ac[1] : "");
        if (Tb) {
            var bc = Yb();
            if (null != bc && bc > parseFloat($b)) {
                Zb = String(bc);
                break a
            }
        }
        Zb = $b
    }
    var cc = Zb,
        dc;
    if (t.document && Tb) {
        var ec = Yb();
        dc = ec ? ec : parseInt(cc, 10) || void 0
    } else dc = void 0;
    var fc = dc;
    xb();
    wb();
    vb();
    var gc = {},
        hc = null;

    function ic(a, b) {
        void 0 === b && (b = 0);
        kc();
        b = gc[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function lc(a) {
        var b = [];
        mc(a, function(c) {
            b.push(c)
        });
        return b
    }

    function nc(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : $a("=.", a[b - 1]) && (c = $a("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        mc(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function mc(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = hc[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        kc();
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

    function kc() {
        if (!hc) {
            hc = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                gc[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === hc[f] && (hc[f] = e)
                }
            }
        }
    };
    var oc = "undefined" !== typeof Uint8Array;
    const pc = !Tb && "function" === typeof t.btoa;

    function qc(a) {
        if (!pc) return ic(a);
        let b = "";
        for (; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
        b += String.fromCharCode.apply(null, a);
        return btoa(b)
    }
    const rc = /[-_.]/g,
        sc = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function tc(a) {
        return sc[a] || ""
    }

    function uc(a) {
        return oc && null != a && a instanceof Uint8Array
    }
    let vc;
    var wc = {};
    let xc;

    function yc(a) {
        if (a !== wc) throw Error("illegal external caller");
    }

    function zc() {
        return xc || (xc = new Ac(null, wc))
    }
    var Ac = class {
        constructor(a, b) {
            yc(b);
            this.j = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.j
        }
    };
    const Bc = Symbol();

    function Cc(a, b) {
        if (Bc) return a[Bc] |= b;
        if (void 0 !== a.j) return a.j |= b;
        Object.defineProperties(a, {
            j: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function Dc(a, b) {
        Bc ? a[Bc] && (a[Bc] &= ~b) : void 0 !== a.j && (a.j &= ~b)
    }

    function Ec(a) {
        let b;
        Bc ? b = a[Bc] : b = a.j;
        return null == b ? 0 : b
    }

    function Fc(a, b) {
        Bc ? a[Bc] = b : void 0 !== a.j ? a.j = b : Object.defineProperties(a, {
            j: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }

    function Gc(a) {
        Cc(a, 1);
        return a
    }

    function Hc(a) {
        return !!(Ec(a) & 2)
    }

    function Ic(a) {
        Cc(a, 16);
        return a
    }

    function Jc(a, b) {
        Fc(b, (a | 0) & -51)
    }

    function Kc(a, b) {
        Fc(b, (a | 18) & -41)
    };
    var Lc = {};

    function Mc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Nc;

    function Oc(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Ac(a, wc) : zc();
            else if (a.constructor !== Ac)
            if (uc(a)) {
                var d;
                c ? d = 0 == a.length ? zc() : new Ac(a, wc) : d = a.length ? new Ac(new Uint8Array(a), wc) : zc();
                a = d
            } else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }
    var Pc = Object.freeze(Fc([], 23));

    function Qc(a) {
        if (Ec(a.O) & 2) throw Error();
    }

    function Rc(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Mc(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function Sc(a) {
        if (null != a && "number" !== typeof a) throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof a}: ${a}`);
        return a
    }

    function Tc(a) {
        return a
    }

    function Uc(a) {
        return a
    }

    function Vc(a) {
        return a
    }

    function Wc(a) {
        return a
    }

    function Xc(a) {
        return a
    }

    function Yc(a) {
        return a
    }

    function Zc(a, b) {
        const c = Ec(a);
        let d = c;
        0 === d && (d |= b & 16);
        d |= b & 2;
        d !== c && Fc(a, d)
    };

    function $c(a) {
        const b = a.m + a.Ea;
        return a.qa || (a.qa = a.O[b] = {})
    }

    function v(a, b, c) {
        return -1 === b ? null : b >= a.m ? a.qa ? a.qa[b] : void 0 : c && a.qa && (c = a.qa[b], null != c) ? c : a.O[b + a.Ea]
    }

    function x(a, b, c, d) {
        Qc(a);
        return ad(a, b, c, d)
    }

    function ad(a, b, c, d) {
        a.C && (a.C = void 0);
        if (b >= a.m || d) return $c(a)[b] = c, a;
        a.O[b + a.Ea] = c;
        (c = a.qa) && b in c && delete c[b];
        return a
    }

    function bd(a, b, c) {
        return void 0 !== cd(a, b, c, !1)
    }

    function dd(a, b, c, d, e) {
        let f = v(a, b, d);
        Array.isArray(f) || (f = Pc);
        const g = Ec(f);
        g & 1 || Gc(f);
        if (e) g & 2 || Cc(f, 18), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && Dc(f, 16) : (f = Gc(Array.prototype.slice.call(f)), ad(a, b, f, d))
        }
        return f
    }

    function ed(a, b) {
        return dd(a, b, 0, !1, Hc(a.O))
    }

    function fd(a, b) {
        const c = v(a, b);
        var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
        null != d && d !== c && ad(a, b, d);
        return d
    }

    function y(a, b) {
        a = v(a, b);
        return null == a ? a : !!a
    }

    function gd(a, b, c) {
        const d = Hc(a.O);
        let e = dd(a, b, 1, void 0, d),
            f = Ec(e);
        if (!(f & 4)) {
            Object.isFrozen(e) && (e = Gc(e.slice()), ad(a, b, e));
            let g = 0,
                h = 0;
            for (; g < e.length; g++) {
                const k = c(e[g]);
                null != k && (e[h++] = k)
            }
            h < g && (e.length = h);
            f |= 5;
            d && (f |= 18);
            Fc(e, f);
            f & 2 && Object.freeze(e)
        }!d && (f & 2 || Object.isFrozen(e)) && (e = Array.prototype.slice.call(e), Cc(e, 5), ad(a, b, e));
        return e
    }

    function B(a, b, c = !1) {
        return hd(y(a, b), c)
    }

    function id(a, b, c, d) {
        if (null == c) return x(a, b, Pc);
        const e = Ec(c);
        if (!(e & 4)) {
            if (e & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
            for (let f = 0; f < c.length; f++) c[f] = d(c[f]);
            Fc(c, e | 5)
        }
        return x(a, b, c)
    }

    function jd(a, b, c, d) {
        Qc(a);
        c !== d ? ad(a, b, c) : ad(a, b, void 0, !1);
        return a
    }

    function kd(a, b, c, d) {
        Qc(a);
        (c = ld(a, c)) && c !== b && null != d && ad(a, c, void 0, !1);
        return ad(a, b, d)
    }

    function ld(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != v(a, e) && (0 !== c && ad(a, c, void 0, !1), c = e)
        }
        return c
    }

    function cd(a, b, c, d) {
        const e = v(a, c, d); {
            let f = !1;
            null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.Yc !== Lc ? f ? (Zc(e, Ec(a.O)), b = new b(e)) : b = void 0 : b = e
        }
        b !== e && null != b && ad(a, c, b, d);
        return b
    }

    function E(a, b, c) {
        b = cd(a, b, c, !1);
        if (null == b) return b;
        if (!Hc(a.O)) {
            const d = md(b);
            d !== b && (b = d, ad(a, c, b, !1))
        }
        return b
    }

    function nd(a, b, c, d, e) {
        var f = !!(e & 2);
        a.l || (a.l = {});
        var g = a.l[c],
            h = dd(a, c, 3, void 0, f);
        if (!g) {
            var k = h;
            g = [];
            f = !!(e & 2);
            h = !!(Ec(k) & 2);
            const q = k;
            !f && h && (k = Array.prototype.slice.call(k));
            var l = e | (h ? 2 : 0);
            e = h;
            let r = 0;
            for (; r < k.length; r++) {
                var m = k[r];
                var n = b;
                Array.isArray(m) ? (Zc(m, l), m = new n(m)) : m = void 0;
                void 0 !== m && (e = e || !!(2 & Ec(m.O)), g.push(m))
            }
            a.l[c] = g;
            l = Ec(k);
            b = l | 33;
            b = e ? b & -9 : b | 8;
            l != b && (e = k, Object.isFrozen(e) && (e = Array.prototype.slice.call(e)), Fc(e, b), k = e);
            q !== k && ad(a, c, k);
            (f || 1 === d && h) && Cc(g, 18);
            1 === d &&
                Object.freeze(g);
            return g
        }
        if (3 === d) return g;
        f || ((f = Object.isFrozen(g), 1 !== d || f) ? 2 === d && f && (g = Array.prototype.slice.call(g), a.l[c] = g) : Object.freeze(g));
        return g
    }

    function G(a, b, c) {
        var d = Ec(a.O),
            e = !!(d & 2);
        b = nd(a, b, c, e ? 1 : 2, d);
        a = dd(a, c, 3, void 0, e);
        if (!(e || Ec(a) & 8)) {
            for (e = 0; e < b.length; e++) c = b[e], d = md(c), c !== d && (b[e] = d, a[e] = d.O);
            Cc(a, 8)
        }
        return b
    }

    function pd(a, b, c) {
        Qc(a);
        null == c && (c = void 0);
        return ad(a, b, c)
    }

    function qd(a, b, c, d) {
        Qc(a);
        null == d && (d = void 0);
        return kd(a, b, c, d)
    }

    function td(a, b, c, d) {
        Qc(a);
        var e = null == c ? Pc : Gc([]);
        if (null != c) {
            var f = !!c.length;
            for (var g = 0; g < c.length; g++) {
                const h = c[g];
                f = f && !Hc(h.O);
                e[g] = h.O
            }
            f = (f ? 8 : 0) | 1;
            g = Ec(e);
            (g & f) !== f && (Object.isFrozen(e) && (e = Array.prototype.slice.call(e)), Fc(e, g | f));
            a.l || (a.l = {});
            a.l[b] = c
        } else a.l && (a.l[b] = void 0);
        return ad(a, b, e, d)
    }

    function ud(a, b, c, d) {
        var e = Ec(a.O);
        if (e & 2) throw Error();
        e = nd(a, c, b, 2, e);
        c = null != d ? d : new c;
        b = dd(a, b, 2, void 0, !1);
        e.push(c);
        b.push(c.O);
        Hc(c.O) && Dc(b, 8);
        return a
    }

    function vd(a, b) {
        return hd(v(a, b), 0)
    }

    function wd(a, b) {
        a: if (a = v(a, b), null != a) {
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

    function xd(a) {
        a: if (a = v(a, 1), null != a) {
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

    function yd(a, b) {
        return hd(v(a, b), 0)
    }

    function zd(a, b) {
        return v(a, b)
    }

    function Ad(a, b, c) {
        return jd(a, b, null == c ? c : !!c, !1)
    }

    function J(a, b, c) {
        return jd(a, b, c, 0)
    }

    function Bd(a, b, c) {
        return jd(a, b, c, "")
    }

    function hd(a, b) {
        return null == a ? b : a
    }

    function K(a, b) {
        return hd(v(a, b), "")
    }

    function Cd(a, b) {
        return hd(v(a, b), 0)
    }

    function Dd(a, b, c, d) {
        c = ld(a, d) === c ? c : -1;
        return E(a, b, c)
    }

    function Ed(a, b, c) {
        return jd(a, b, c, 0)
    };
    let Fd;

    function Gd(a, b) {
        Fd = b;
        a = new a(b);
        Fd = void 0;
        return a
    };

    function Hd(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (Ec(a) & 128)) return a = Array.prototype.slice.call(a), Rc(a), a
                    } else {
                        if (uc(a)) return qc(a);
                        if (a instanceof Ac) {
                            const b = a.j;
                            return null == b ? "" : "string" === typeof b ? b : a.j = qc(b)
                        }
                    }
        }
        return a
    };

    function Id(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Jd(a, b, c, void 0 !== d);
            else if (Mc(a)) {
                const e = {};
                for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = Id(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Jd(a, b, c, d) {
        const e = Ec(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = Id(a[f], b, c, d);
        c(e, a);
        return a
    }

    function Kd(a) {
        return a.Yc === Lc ? a.toJSON() : Hd(a)
    }

    function Ld(a, b) {
        a & 128 && Rc(b)
    };

    function Md(a, b, c = Kc) {
        if (null != a) {
            if (oc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = Ec(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return Fc(a, d | 18), a;
                a = Jd(a, Md, d & 4 ? Kc : c, !0);
                b = Ec(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.Yc === Lc ? Nd(a) : a
        }
    }

    function Od(a, b, c, d, e, f, g) {
        (a = a.l && a.l[c]) ? (d = Ec(a), d & 2 ? d = a : (f = Cb(a, Nd), Kc(d, f), Object.freeze(f), d = f), td(b, c, d, e)) : x(b, c, Md(d, f, g), e)
    }

    function Nd(a) {
        if (Hc(a.O)) return a;
        a = Pd(a, !0);
        Cc(a.O, 18);
        return a
    }

    function Pd(a, b) {
        const c = a.O;
        var d = Ic([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.qa;
        if (e) {
            d.length = c.length;
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (Ec(c) & 128) && Rc(d);
        b = b || Hc(a.O) ? Kc : Jc;
        d = Gd(a.constructor, d);
        a.fe && (d.fe = a.fe.slice());
        f = !!(Ec(c) & 16);
        const g = e ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Od(a, d, h - a.Ea, c[h], !1, f, b);
        if (e)
            for (const h in e) Od(a, d, +h, e[h], !0, f, b);
        return d
    }

    function md(a) {
        if (!Hc(a.O)) return a;
        const b = Pd(a, !1);
        b.C = a;
        return b
    };

    function Qd(a) {
        Nc = !0;
        try {
            return JSON.stringify(a.toJSON(), Rd)
        } finally {
            Nc = !1
        }
    }
    var L = class {
        constructor(a, b, c) {
            null == a && (a = Fd);
            Fd = void 0;
            var d = this.constructor.messageId;
            if (null == a) {
                a = d ? [d] : [];
                var e = !0;
                Fc(a, 48)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (d && d !== a[0]) throw Error();
                var f = Cc(a, 0) | 32;
                e = 0 !== (16 & f);
                if (128 & f) throw Error();
                Fc(a, f)
            }
            this.Ea = d ? 0 : -1;
            this.l = void 0;
            this.O = a;
            a: {
                f = this.O.length;d = f - 1;
                if (f && (f = this.O[d], Mc(f))) {
                    this.qa = f;
                    this.m = d - this.Ea;
                    break a
                }
                void 0 !== b && -1 < b ? (this.m = Math.max(b, d + 1 - this.Ea), this.qa = void 0) : this.m = Number.MAX_VALUE
            }
            if (this.qa && "g" in this.qa) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = e && !0;
                e = this.m;
                let h;
                for (d = 0; d < c.length; d++)
                    if (f = c[d], f < e) {
                        f += this.Ea;
                        var g = a[f];
                        g ? Sd(g, b) : a[f] = Pc
                    } else h || (h = $c(this)), (g = h[f]) ? Sd(g, b) : h[f] = Pc
            }
        }
        toJSON() {
            const a = this.O;
            return Nc ? a : Jd(a, Kd, Ld)
        }
    };

    function Sd(a, b) {
        if (Array.isArray(a)) {
            var c = Ec(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && Fc(a, c | d)
        }
    }
    L.prototype.Yc = Lc;

    function Rd(a, b) {
        return Hd(b)
    };
    const Td = a => null !== a && void 0 !== a;
    let Ud = void 0;

    function Vd(a, b) {
        const c = Ud;
        Ud = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function Wd(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Gd(a, Ic(b))
            }
            return b
        }
    };

    function Xd(a, b) {
        this.l = a === Yd && b || "";
        this.m = Zd
    }
    Xd.prototype.xa = !0;
    Xd.prototype.j = function() {
        return this.l
    };

    function $d(a) {
        return a instanceof Xd && a.constructor === Xd && a.m === Zd ? a.l : "type_error:Const"
    }

    function ae(a) {
        return new Xd(Yd, a)
    }
    var Zd = {},
        Yd = {};
    var be = ae("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function ce() {
        return !1
    }

    function ee() {
        return !0
    }

    function fe(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function ge(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function he(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function ie(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function je(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function ke(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var le = {
            passive: !0
        },
        me = he(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function ne(a) {
        return a ? a.passive && me() ? a : a.capture || !1 : !1
    }

    function oe(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ne(d)), !0) : !1
    }

    function pe(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ne(d)), !0) : !1
    };

    function qe(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function re(a) {
        var b = se;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function te(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function ue(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const ve = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function we(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < ve.length; f++) c = ve[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var xe = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var ye;

    function ze() {
        if (void 0 === ye) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: La,
                        createScript: La,
                        createScriptURL: La
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                ye = a
            } else ye = a
        }
        return ye
    };
    const Ae = {};

    function Be(a) {
        return a instanceof Ce && a.constructor === Ce ? a.l : "type_error:SafeScript"
    }
    class Ce {
        constructor(a, b) {
            this.l = b === Ae ? a : "";
            this.xa = !0
        }
        toString() {
            return this.l.toString()
        }
        j() {
            return this.l.toString()
        }
    };
    var Ee = class {
        constructor(a, b) {
            this.l = b === De ? a : ""
        }
        toString() {
            return this.l + ""
        }
    };
    Ee.prototype.xa = !0;
    Ee.prototype.j = function() {
        return this.l.toString()
    };

    function Fe(a, b) {
        a = Ge.exec(He(a).toString());
        var c = a[3] || "";
        return Ie(a[1] + Je("?", a[2] || "", b) + Je("#", c))
    }

    function He(a) {
        return a instanceof Ee && a.constructor === Ee ? a.l : "type_error:TrustedResourceUrl"
    }

    function Ke(a, b) {
        var c = $d(a);
        if (!Le.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Me, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Xd ? $d(d) : encodeURIComponent(String(d))
        });
        return Ie(a)
    }
    var Me = /%{(\w+)}/g,
        Le = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Ge = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        De = {};

    function Ie(a) {
        const b = ze();
        a = b ? b.createScriptURL(a) : a;
        return new Ee(a, De)
    }

    function Je(a, b, c) {
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
    var Oe = class {
        constructor(a, b) {
            this.l = b === Ne ? a : ""
        }
        toString() {
            return this.l.toString()
        }
    };
    Oe.prototype.xa = !0;
    Oe.prototype.j = function() {
        return this.l.toString()
    };

    function Pe(a) {
        return a instanceof Oe && a.constructor === Oe ? a.l : "type_error:SafeUrl"
    }
    var Qe = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Re = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Se(a) {
        if (a instanceof Oe) return a;
        a = "object" == typeof a && a.xa ? a.j() : String(a);
        Re.test(a) ? a = new Oe(a, Ne) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Qe) ? new Oe(a, Ne) : null);
        return a
    }
    var Ne = {},
        Te = new Oe("about:invalid#zClosurez", Ne);
    const Ue = {};

    function Ve(a) {
        return a instanceof We && a.constructor === We ? a.l : "type_error:SafeStyle"
    }

    function Xe(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Ye).join(" ") : Ye(d), b += `${c}:${d};`)
            }
        return b ? new We(b, Ue) : Ze
    }
    class We {
        constructor(a, b) {
            this.l = b === Ue ? a : "";
            this.xa = !0
        }
        j() {
            return this.l
        }
        toString() {
            return this.l.toString()
        }
    }
    var Ze = new We("", Ue);

    function Ye(a) {
        if (a instanceof Oe) return 'url("' + Pe(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof Xd) a = $d(a);
        else {
            a = String(a);
            var b = a.replace($e, "$1").replace($e, "$1").replace(af, "url");
            if (bf.test(b)) {
                if (b = !cf.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && df(a)
                }
                a = b ? ef(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Qa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function df(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const bf = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        af = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        $e = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        cf = /\/\*/;

    function ef(a) {
        return a.replace(af, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
                f = h;
                return k
            });
            b = (Se(d) || Te).j();
            return c + f + b + f + e
        })
    };
    const ff = {};

    function gf(a) {
        return a instanceof hf && a.constructor === hf ? a.l : "type_error:SafeStyleSheet"
    }
    class hf {
        constructor(a, b) {
            this.l = b === ff ? a : "";
            this.xa = !0
        }
        toString() {
            return this.l.toString()
        }
        j() {
            return this.l
        }
    };
    const jf = {};

    function kf(a) {
        return a instanceof lf && a.constructor === lf ? a.l : "type_error:SafeHtml"
    }

    function mf(a) {
        return a instanceof lf ? a : nf(Sa("object" == typeof a && a.xa ? a.j() : String(a)))
    }

    function nf(a) {
        const b = ze();
        a = b ? b.createHTML(a) : a;
        return new lf(a, jf)
    }

    function of (a, b, c) {
        var d = String(a);
        if (!pf.test(d)) throw Error("");
        if (d.toUpperCase() in qf) throw Error("");
        return rf(String(a), b, c)
    }

    function rf(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!pf.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof Xd) e = $d(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!ua(e)) throw Error("");
                            e instanceof We || (e = Xe(e));
                            e = Ve(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in sf)
                                if (e instanceof Ee) e = He(e).toString();
                                else if (e instanceof Oe) e = Pe(e);
                            else if ("string" === typeof e) e = (Se(e) || Te).j();
                            else throw Error("");
                        }
                        e.xa && (e = e.j());
                        f = `${f}="` +
                            Sa(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === xe[a.toLowerCase()] ? b += ">" : (c = tf(c), b += ">" + kf(c).toString() + "</" + a + ">");
        return nf(b)
    }

    function uf(a) {
        const b = mf(vf),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = mf(e), c.push(kf(e).toString()))
            };
        a.forEach(d);
        return nf(c.join(kf(b).toString()))
    }

    function tf(a) {
        return uf(Array.prototype.slice.call(arguments))
    }
    class lf {
        constructor(a, b) {
            this.l = b === jf ? a : "";
            this.xa = !0
        }
        j() {
            return this.l.toString()
        }
        toString() {
            return this.l.toString()
        }
    }
    const pf = /^[a-zA-Z0-9-]+$/,
        sf = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        qf = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var yf = nf("<!DOCTYPE html>"),
        vf = new lf(t.trustedTypes && t.trustedTypes.emptyHTML || "", jf),
        zf = nf("<br>");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Af(a) {
        a: {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        }
        if ("javascript:" !== b) return a
    };

    function Bf(a) {
        var b = Cf(Df) || Te;
        b = b instanceof Oe ? Pe(b) : Af(b);
        void 0 !== b && (a.href = b)
    };

    function Ef(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const Ff = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Gf(a, b, c) {
        if (b instanceof Ee) a.href = He(b).toString();
        else {
            if (-1 === Ff.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            b = b instanceof Oe ? Pe(b) : Af(b);
            if (void 0 === b) return;
            a.href = b
        }
        a.rel = c
    };

    function Hf(a) {
        var b;
        (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function If(a, b) {
        a.src = He(b);
        Hf(a)
    };
    class Jf {
        constructor(a) {
            this.Qf = a
        }
    }

    function Kf(a) {
        return new Jf(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Df = [Kf("data"), Kf("http"), Kf("https"), Kf("mailto"), Kf("ftp"), new Jf(a => /^[^:]*([/?#]|$)/.test(a))];

    function Cf(a = Df) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Jf && c.Qf("#")) return new Oe("#", Ne)
        }
    };

    function Lf(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            If(f, a);
            "complete" !== b.document.readyState ? oe(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Mf(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.ib}`;
        let c = void 0;
        try {
            c = await Nf(b)
        } catch (g) {}
        if (c) {
            b = a.Ab || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.m ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.v,
                mf: c.bg_hash_basename,
                lf: c.bg_binary,
                Sf: a.j + "_" + a.l,
                Ab: b,
                ib: a.ib,
                jc: d,
                xc: e,
                hc: f
            }
        }
    }
    let Nf = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Of(a) {
        var b = await Mf(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.mf,
                _bgp_: b.lf,
                _li_: b.Sf,
                _jk_: b.Ab,
                _st_: b.ib,
                _rc_: b.jc,
                _dl_: b.xc,
                _g2_: b.hc
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Ke(be, {
                basename: "sodar2"
            });
            Lf(a)
        }
    };

    function Pf(a, b) {
        return Bd(a, 1, b)
    }
    var Qf = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return K(this, 1)
        }
    };

    function Rf(a, b) {
        return pd(a, 5, b)
    }

    function Sf(a, b) {
        return Bd(a, 3, b)
    }
    var Tf = class extends L {
        constructor() {
            super()
        }
    };

    function Uf(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Vf = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.m;
                this.v = a.v;
                this.Ab = a.Ab;
                this.win = a.P();
                this.ib = a.ib;
                this.jc = a.jc;
                this.xc = a.xc;
                this.hc = a.hc;
                this.m = a.j
            }
        },
        Wf = class {
            constructor(a, b, c) {
                this.l = a;
                this.m = b;
                this.v = c;
                this.win = window;
                this.ib = "env";
                this.jc = "n";
                this.xc = "0";
                this.hc = "1";
                this.j = !0
            }
            P() {
                return this.win
            }
            build() {
                return new Vf(this)
            }
        };
    var Yf = class extends L {
            constructor(a) {
                super(a, -1, Xf)
            }
        },
        Xf = [2, 3];

    function Zf(a, b) {
        return x(a, 1, b)
    }

    function $f(a, b) {
        return x(a, 2, b)
    }

    function ag(a, b) {
        return x(a, 3, b)
    }

    function bg(a, b) {
        return x(a, 4, b)
    }
    var cg = class extends L {
        constructor() {
            super()
        }
        getVersion() {
            return v(this, 5)
        }
    };
    var eg = class extends L {
            constructor(a) {
                super(a, -1, dg)
            }
        },
        dg = [5];
    var gg = class extends L {
            constructor(a) {
                super(a, -1, fg)
            }
        },
        fg = [3];
    var ig = class extends L {
            constructor(a) {
                super(a, -1, hg)
            }
        },
        hg = [2];

    function jg(a) {
        return G(a, ig, 2)
    }

    function kg(a) {
        return G(a, eg, 15)
    }
    var mg = class extends L {
            constructor(a) {
                super(a, -1, lg)
            }
        },
        ng = Wd(mg),
        lg = [2, 15];
    var og = window;
    var pg = {
        Qg: "google_adtest",
        Ug: "google_ad_client",
        Vg: "google_ad_format",
        Xg: "google_ad_height",
        mh: "google_ad_width",
        bh: "google_ad_layout",
        eh: "google_ad_layout_key",
        fh: "google_ad_output",
        gh: "google_ad_region",
        jh: "google_ad_slot",
        kh: "google_ad_type",
        lh: "google_ad_url",
        oh: "google_allow_expandable_ads",
        Ih: "google_analytics_domain_name",
        Jh: "google_analytics_uacct",
        Xh: "google_container_id",
        hi: "google_gl",
        Ei: "google_enable_ose",
        Oi: "google_full_width_responsive",
        Pj: "google_rl_filtering",
        Oj: "google_rl_mode",
        Qj: "google_rt",
        Nj: "google_rl_dest_url",
        tj: "google_max_radlink_len",
        zj: "google_num_radlinks",
        Aj: "google_num_radlinks_per_unit",
        Tg: "google_ad_channel",
        sj: "google_max_num_ads",
        uj: "google_max_responsive_height",
        Sh: "google_color_border",
        Di: "google_enable_content_recommendations",
        ei: "google_content_recommendation_ui_type",
        di: "google_source_type",
        ci: "google_content_recommendation_rows_num",
        bi: "google_content_recommendation_columns_num",
        ai: "google_content_recommendation_ad_positions",
        fi: "google_content_recommendation_use_square_imgs",
        Uh: "google_color_link",
        Th: "google_color_line",
        Wh: "google_color_url",
        Rg: "google_ad_block",
        ih: "google_ad_section",
        Sg: "google_ad_callback",
        Ph: "google_captcha_token",
        Vh: "google_color_text",
        Ch: "google_alternate_ad_url",
        ah: "google_ad_host_tier_id",
        Qh: "google_city",
        Yg: "google_ad_host",
        Zg: "google_ad_host_channel",
        Dh: "google_alternate_color",
        Rh: "google_color_bg",
        Fi: "google_encoding",
        Mi: "google_font_face",
        ki: "google_cust_ch",
        oi: "google_cust_job",
        ni: "google_cust_interests",
        li: "google_cust_id",
        ri: "google_cust_u_url",
        Qi: "google_hints",
        fj: "google_image_size",
        vj: "google_mtl",
        vk: "google_cpm",
        Zh: "google_contents",
        xj: "google_native_settings_key",
        gi: "google_country",
        mk: "google_targeting",
        Ni: "google_font_size",
        ui: "google_disable_video_autoplay",
        Ik: "google_video_product_type",
        Hk: "google_video_doc_id",
        Gk: "google_cust_gender",
        hk: "google_cust_lh",
        gk: "google_cust_l",
        uk: "google_tfs",
        wj: "google_native_ad_template",
        lj: "google_kw",
        jk: "google_tag_for_child_directed_treatment",
        kk: "google_tag_for_under_age_of_consent",
        Sj: "google_region",
        ji: "google_cust_criteria",
        hh: "google_safe",
        ii: "google_ctr_threshold",
        Tj: "google_resizing_allowed",
        Vj: "google_resizing_width",
        Uj: "google_resizing_height",
        Fk: "google_cust_age",
        LANGUAGE: "google_language",
        mj: "google_kw_type",
        Hj: "google_pucrd",
        Fj: "google_page_url",
        lk: "google_tag_partner",
        Zj: "google_restrict_data_processing",
        Mg: "google_adbreak_test",
        Wg: "google_ad_frequency_hint",
        Og: "google_admob_interstitial_slot",
        Pg: "google_admob_rewarded_slot",
        Ng: "google_admob_ads_only",
        rj: "google_max_ad_content_rating",
        Jj: "google_ad_public_floor",
        Ij: "google_ad_private_floor",
        Ek: "google_traffic_source",
        ek: "google_shadow_mode"
    };
    var qg = he(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = kf(vf);
        return !b.parentElement
    });

    function rg(a, b) {
        if (qg())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = kf(b)
    }
    var sg = /^[\w+/_-]+[=]{0,2}$/;

    function tg(a, b) {
        b = (b || t).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && sg.test(a) ? a : "" : ""
    };

    function ug(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function vg(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function wg(a) {
        return vg.apply(null, arguments) / arguments.length
    };

    function xg(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    xg.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    xg.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    xg.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function yg(a, b) {
        this.width = a;
        this.height = b
    }

    function zg(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    p = yg.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.isEmpty = function() {
        return !(this.width * this.height)
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Ag(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(Bg, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = nf(e + " "), rg(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Bg = /&([^;\s<&]+);?/g;

    function Cg(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Dg(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Eg(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Fg(a) {
        return a ? new Gg(Hg(a)) : Pa || (Pa = new Gg)
    }

    function Ig(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new yg(a.clientWidth, a.clientHeight)
    }

    function Jg(a) {
        var b = a.scrollingElement ? a.scrollingElement : Xb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = Kg(a);
        return Tb && a.pageYOffset != b.scrollTop ? new xg(b.scrollLeft, b.scrollTop) : new xg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Kg(a) {
        return a.parentWindow || a.defaultView
    }

    function Lg(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ta(f) || ua(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ua(f)) {
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
                Ab(g ? Ib(f) : f, d)
            }
        }
    }

    function Mg(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Ng(a, b) {
        var c = Mg(a, "DIV");
        Tb ? (b = tf(zf, b), rg(c, b), c.removeChild(c.firstChild)) : rg(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function Hg(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Og = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Pg = {
            IMG: " ",
            BR: "\n"
        };

    function Qg(a) {
        var b = [];
        Rg(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Rg(a, b, c) {
        if (!(a.nodeName in Og))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Pg) b.push(Pg[a.nodeName]);
        else
            for (a = a.firstChild; a;) Rg(a, b, c), a = a.nextSibling
    }

    function Sg(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Tg(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && Fb(e.className.split(/\s+/), c))
        })
    }

    function Tg(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Gg(a) {
        this.j = a || t.document || document
    }
    p = Gg.prototype;
    p.Hf = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    p.Lg = Gg.prototype.Hf;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    p.createElement = function(a) {
        return Mg(this.j, a)
    };
    p.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function Ug(a, b) {
        return Ng(a.j, b)
    }
    p.P = function() {
        return Kg(this.j)
    };
    p.appendChild = function(a, b) {
        a.appendChild(b)
    };
    p.append = function(a, b) {
        Lg(Hg(a), a, arguments)
    };
    p.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    p.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    p.Df = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };

    function Vg() {
        return db && kb ? kb.mobile : !Wg() && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    }

    function Wg() {
        return db && kb ? !kb.mobile && (u("iPad") || u("Android") || u("Silk")) : u("iPad") || u("Android") && !u("Mobile") || u("Silk")
    };
    var Xg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Yg(a) {
        try {
            return !!a && null != a.location.href && Rb(a, "foo")
        } catch {
            return !1
        }
    }

    function Zg(a, b = t) {
        b = $g(b);
        let c = 0;
        for (; b && 40 > c++ && !a(b);) b = $g(b)
    }

    function $g(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function ah(a) {
        return Yg(a.top) ? a.top : null
    }

    function bh(a, b) {
        const c = ch("SCRIPT", a);
        If(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function dh(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function eh() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function fh(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function gh(a) {
        const b = [];
        fh(a, function(c) {
            b.push(c)
        });
        return b
    }

    function hh(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var jh = he(() => Eb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], ih) || 1E-4 > Math.random());
    const ih = a => $a(jb(), a);
    var kh = /^([0-9.]+)px$/,
        lh = /^(-?[0-9.]{1,30})$/;

    function mh(a) {
        if (!lh.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function nh(a) {
        return /^true$/.test(a)
    }

    function oh(a) {
        return (a = kh.exec(a)) ? +a[1] : null
    }

    function ph() {
        var a = t.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch {}
        return ""
    }
    var qh = {
        qh: "allow-forms",
        rh: "allow-modals",
        sh: "allow-orientation-lock",
        th: "allow-pointer-lock",
        uh: "allow-popups",
        wh: "allow-popups-to-escape-sandbox",
        xh: "allow-presentation",
        yh: "allow-same-origin",
        zh: "allow-scripts",
        Ah: "allow-top-navigation",
        Bh: "allow-top-navigation-by-user-activation"
    };
    const rh = he(() => gh(qh));

    function sh() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = rh();
        return a.length ? Bb(b, c => !Fb(a, c)) : b
    }

    function th() {
        const a = ch("IFRAME"),
            b = {};
        Ab(rh(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var uh = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        vh = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (uh(a, b)) return a;
                if (!(a = $g(a))) break
            }
            return null
        },
        wh = he(() => Vg() ? 2 : Wg() ? 1 : 0),
        M = (a, b) => {
            fh(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const xh = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        yh = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        zh = /.*domain\.test$/,
        Ah = /\.prod\.google\.com(:\d+)?$/;
    var Bh = a => xh[a] || yh.test(a) || zh.test(a) || Ah.test(a);
    let Ch = [];
    const Dh = () => {
        const a = Ch;
        Ch = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Eh = (a, b) => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52),
                    configurable: !1
                })
            } catch (c) {
                b && b.ha(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || 0 >= a) && b.ha(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        Fh = (a, b) => {
            "complete" === a.document.readyState ? (Ch.push(b), 1 == Ch.length && (window.Promise ? Promise.resolve().then(Dh) : window.setImmediate ? setImmediate(Dh) : setTimeout(Dh, 0))) : a.addEventListener("load", b)
        },
        Gh = (a, b) => new Promise(c => {
            setTimeout(() =>
                void c(b), a)
        });

    function ch(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Hh = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, Yg(a) && (b = a);
        return b
    };

    function Ih(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = Ih.prototype;
    p.getWidth = function() {
        return this.right - this.left
    };
    p.getHeight = function() {
        return this.bottom - this.top
    };

    function Jh(a) {
        return new Ih(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof Ih ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Kh(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Lh(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Mh(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Lh(c, e, d - c, a - e)
        }
        return null
    }

    function Ph(a, b) {
        var c = Mh(a, b);
        if (!c || !c.height || !c.width) return [new Lh(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new Lh(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new Lh(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new Lh(a.left, d, b.left - a.left, e));
        h < f && c.push(new Lh(h, d, f - h, e));
        return c
    }
    Lh.prototype.contains = function(a) {
        return a instanceof xg ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Lh.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Lh.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Lh.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Qh = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Rh(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Sh(a = Rh()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Th(a = Rh()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Qh[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Uh() {
        var a = Rh();
        return a && a.initialIntersection
    }

    function Vh() {
        const a = Uh();
        return a && ua(a.rootBounds) ? new yg(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Wh(a = Rh()) {
        return a ? Yg(a.master) ? a.master : null : null
    }

    function Xh(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Gb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || bh(a.document, g ? Ke(ae("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Ie($d(ae("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, oe(a, "message", f), d = () => {
            pe(a, "message", f)
        });
        return e
    };

    function N(a, ...b) {
        if (0 === b.length) return Ie(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ie(c.join(""))
    }

    function Yh(a, b) {
        let c = He(a).toString();
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Ie(c)
    };

    function Zh(a) {
        a = a[0];
        const b = ze();
        a = b ? b.createScript(a) : a;
        return new Ce(a, Ae)
    };

    function $h(a) {
        return new hf(a[0], ff)
    };

    function ai(a, b, c) {
        if ("string" === typeof b)(b = bi(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = bi(c, d);
                f && (c.style[f] = e)
            }
    }
    var ci = {};

    function bi(a, b) {
        var c = ci[b];
        if (!c) {
            var d = Dg(b);
            c = d;
            void 0 === a.style[d] && (d = (Xb ? "Webkit" : Wb ? "Moz" : Tb ? "ms" : null) + Eg(d), void 0 !== a.style[d] && (c = d));
            ci[b] = c
        }
        return c
    }

    function di(a, b) {
        var c = Hg(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function ei(a, b) {
        return di(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function fi(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function gi(a) {
        var b = Hg(a),
            c = new xg(0, 0);
        var d = b ? Hg(b) : document;
        d = !Tb || 9 <= Number(fc) || "CSS1Compat" == Fg(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = fi(a);
        b = Jg(Fg(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function hi(a) {
        var b = ii;
        if ("none" != ei(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function ii(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Xb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = fi(a), new yg(a.right - a.left, a.bottom - a.top)) : new yg(b, c)
    }

    function ji(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function ki(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? ji(a, b) : 0
    }
    var li = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function mi(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in li ? li[b] : ji(a, b)
    };
    var ni = a => "number" === typeof a && 0 < a,
        pi = (a, b) => {
            a = oi(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        oi = a => Object.entries(qi(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        qi = a => {
            const b = {};
            fh(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        ri = () => {
            try {
                return og.history.length
            } catch (a) {
                return 0
            }
        },
        si = a => {
            a = Wh(Rh(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        ti = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        ui = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = ri();
            a.u_h = og.screen ? .height;
            a.u_w = og.screen ? .width;
            a.u_ah = og.screen ? .availHeight;
            a.u_aw = og.screen ? .availWidth;
            a.u_cd = og.screen ? .colorDepth
        },
        vi = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName &&
                a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        wi = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        xi = () => {
            if (!og) return !1;
            try {
                return !(!og.navigator.standalone && !og.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        yi = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        zi = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2],
                                        10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class Ai {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Bi = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Ci = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        Di = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.ge = !!c;
                this.depth = null
            }
        };

    function Ei(a, b, c = null, d = !1, e = !1) {
        Fi(a, b, c, d, e)
    }

    function Fi(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = ch("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && Gb(a.google_image_requests, f);
                pe(f, "load", g);
                pe(f, "error", g)
            };
            oe(f, "load", g);
            oe(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Hi = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            fh(a, (d, e) => {
                d && (c += `&${e}=${encodeURIComponent(d)}`)
            });
            Gi(c)
        },
        Gi = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Ei(b, a, void 0, !1, !1)
        };

    function Ii(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Ji(a, b, c, d, e) {
        const f = [];
        fh(a, function(g, h) {
            (g = Ki(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Ki(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Ki(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ji(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Li(a, b, c) {
        a.j.push(b);
        a.l[b] = c
    }

    function Mi(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    }

    function Ni(a, b, c, d) {
        b = b + "//" + c + d;
        let e = Mi(a) - d.length;
        if (0 > e) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        d = null;
        c = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!e) {
                    d = null == d ? g : d;
                    break
                }
                let l = Ji(h[k], a.m, ",$");
                if (l) {
                    l = c + l;
                    if (e >= l.length) {
                        e -= l.length;
                        b += l;
                        c = a.m;
                        break
                    }
                    d = null == d ? g : d
                }
            }
        }
        a = "";
        null != d && (a = c + "trn=" + d);
        return b + a
    }
    class Oi {
        constructor() {
            this.m = "&";
            this.l = {};
            this.v = 0;
            this.j = []
        }
    };

    function Pi(a, b) {
        0 <= b && 1 >= b && (a.j = b)
    }

    function Qi(a, b, c, d = !1, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Oi ? f = c : (f = new Oi, fh(c, (h, k) => {
                var l = f;
                const m = l.v++;
                Li(l, m, Ii(k, h))
            }));
            const g = Ni(f, "https:", "pagead2.googlesyndication.com", "/pagead/gen_204?id=" + b + "&");
            g && Ei(t, g)
        } catch (f) {}
    }
    class Ri {
        constructor() {
            this.j = Math.random()
        }
    };
    let Si = null;

    function Ti() {
        if (null === Si) {
            Si = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Si = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Si
    };

    function Ui() {
        const a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ga()
    }

    function Vi() {
        const a = t.performance;
        return a && a.now ? a.now() : null
    };
    class Wi {
        constructor(a, b) {
            var c = Vi() || Ui();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Xi = t.performance,
        Yi = !!(Xi && Xi.mark && Xi.measure && Xi.clearMarks),
        Zi = he(() => {
            var a;
            if (a = Yi) a = Ti(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function $i(a) {
        a && Xi && Zi() && (Xi.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Xi.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function aj(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (Zi() && Ab(a.l, $i), a.l.length = 0)
    }

    function bj(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw $i(c), e;
        }
        a.end(c);
        return d
    }
    class cj {
        constructor(a) {
            this.l = [];
            this.m = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.l = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = Zi() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new Wi(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Xi && Zi() && Xi.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (Vi() || Ui()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Xi && Zi() && Xi.mark(b);
                !this.j || 2048 < this.l.length ||
                    this.l.push(a)
            }
        }
    };

    function dj(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = ej(a.stack, b));
        return b
    }

    function ej(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    class fj {
        constructor(a, b = null) {
            this.v = a;
            this.j = null;
            this.B = this.ha;
            this.l = b;
            this.m = !1
        }
        aa() {
            return this.v
        }
        pd(a) {
            this.j = a
        }
        A(a) {
            this.m = a
        }
        Eb(a, b, c) {
            let d, e;
            try {
                this.l && this.l.j ? (e = this.l.start(a.toString(), 3), d = b(), this.l.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    $i(e), b = this.B(a, new Ai(f, {
                        message: dj(f)
                    }), void 0, c)
                } catch (g) {
                    this.ha(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        ra(a, b, c, d) {
            return (...e) => this.Eb(a, () => b.apply(c, e), d)
        }
        ha(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const H = new Oi;
                var g = H;
                g.j.push(1);
                g.l[1] = Ii("context", a);
                b.error && b.meta && b.id || (b = new Ai(b, {
                    message: dj(b)
                }));
                if (b.msg) {
                    g = H;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = Ii("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.j) try {
                    this.j(b)
                } catch (aa) {}
                if (d) try {
                    d(b)
                } catch (aa) {}
                Li(H, 3, [k]);
                k = t;
                d = [];
                b = null;
                do {
                    var l = k;
                    if (Yg(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    d.push(new Di(m || "", l));
                    try {
                        k = l.parent
                    } catch (aa) {
                        k = null
                    }
                } while (k && l != k);
                for (let aa = 0, za = d.length - 1; aa <= za; ++aa) d[aa].depth = za - aa;
                l = t;
                if (l.location &&
                    l.location.ancestorOrigins && l.location.ancestorOrigins.length == d.length - 1)
                    for (m = 1; m < d.length; ++m) {
                        var n = d[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.ge = !0)
                    }
                var q = d;
                let U = new Di(t.location.href, t, !1);
                l = null;
                const Ia = q.length - 1;
                for (n = Ia; 0 <= n; --n) {
                    var r = q[n];
                    !l && Bi.test(r.url) && (l = r);
                    if (r.url && !r.ge) {
                        U = r;
                        break
                    }
                }
                r = null;
                const ba = q.length && q[Ia].url;
                0 != U.depth && ba && (r = q[Ia]);
                f = new Ci(U, r);
                if (f.l) {
                    q = H;
                    var w = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = Ii("top", w)
                }
                var C = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var z =
                        f.j.url.match(Xg),
                        A = z[1],
                        I = z[3],
                        D = z[4];
                    w = "";
                    A && (w += A + ":");
                    I && (w += "//", w += I, D && (w += ":" + D));
                    var F = w
                } else F = "";
                Li(H, 5, [C, {
                    url: F
                }]);
                Qi(this.v, e, H, this.m, c)
            } catch (H) {
                try {
                    Qi(this.v, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: dj(H),
                        url: f && f.j.url
                    }, this.m, c)
                } catch (U) {}
            }
            return !0
        }
        za(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ha(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    var gj = a => "string" === typeof a,
        hj = a => void 0 === a;

    function ij() {
        var a = jj;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var kj = class extends L {
        constructor() {
            super()
        }
    };

    function lj(a) {
        var b = new mj;
        return x(b, 1, a)
    }
    var mj = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var nj = class extends L {
        constructor() {
            super()
        }
    };

    function oj(a, b) {
        return J(a, 1, b)
    }

    function pj(a, b) {
        return J(a, 2, b)
    }

    function qj(a, b) {
        return J(a, 3, b)
    }

    function rj(a, b) {
        return J(a, 4, b)
    }

    function sj(a, b) {
        return J(a, 5, b)
    }

    function tj(a, b) {
        return jd(a, 8, Sc(b), 0)
    }

    function uj(a, b) {
        return jd(a, 9, Sc(b), 0)
    }
    var vj = class extends L {
        constructor() {
            super()
        }
    };
    var wj = class extends L {
        constructor() {
            super()
        }
    };

    function xj(a, b) {
        return id(a, 1, b, Xc)
    }

    function yj(a, b) {
        return id(a, 12, b, Wc)
    }

    function zj() {
        var a = new Aj;
        Qc(a);
        dd(a, 2, 2, !1, !1).push("irr");
        return a
    }

    function Bj(a, b) {
        return Ad(a, 3, b)
    }

    function Cj(a, b) {
        return Ad(a, 4, b)
    }

    function Dj(a, b) {
        return Ad(a, 5, b)
    }

    function Ej(a, b) {
        return Ad(a, 7, b)
    }

    function Fj(a, b) {
        return Ad(a, 8, b)
    }

    function Gj(a, b) {
        return J(a, 9, b)
    }

    function Hj(a, b) {
        return td(a, 10, b)
    }

    function Ij(a, b) {
        return id(a, 11, b, Uc)
    }
    var Aj = class extends L {
            constructor() {
                super(void 0, -1, Jj)
            }
        },
        Jj = [1, 12, 2, 10, 11];

    function Kj(a) {
        var b = Lj();
        pd(a, 1, b)
    }

    function Mj(a, b) {
        return J(a, 2, b)
    }

    function Nj(a, b) {
        return td(a, 3, b)
    }

    function Oj(a, b) {
        return td(a, 4, b)
    }

    function Pj(a, b) {
        return ud(a, 4, mj, b)
    }

    function Qj(a, b) {
        return td(a, 5, b)
    }

    function Rj(a, b) {
        return id(a, 6, b, Xc)
    }

    function Sj(a, b) {
        return J(a, 7, b)
    }

    function Tj(a, b) {
        pd(a, 9, b)
    }

    function Uj(a, b) {
        return Ad(a, 10, b)
    }

    function Vj(a, b) {
        return Ad(a, 11, b)
    }

    function Wj(a, b) {
        return Ad(a, 12, b)
    }
    var Yj = class extends L {
            constructor() {
                super(void 0, -1, Xj)
            }
            G(a) {
                return J(this, 8, a)
            }
        },
        Xj = [3, 4, 5, 6];
    var ak = class extends L {
            constructor() {
                super(void 0, -1, Zj)
            }
        },
        Zj = [2];
    var bk = class extends L {
        constructor() {
            super()
        }
    };
    var ck = class extends L {
        constructor() {
            super()
        }
    };
    var dk = class extends L {
        constructor() {
            super()
        }
        getContentUrl() {
            return K(this, 1)
        }
    };
    var fk = class extends L {
            constructor() {
                super(void 0, -1, ek)
            }
        },
        ek = [1];
    var gk = class extends L {
        constructor() {
            super()
        }
    };
    var hk = class extends L {
        constructor() {
            super()
        }
    };
    var ik = class extends L {
            constructor(a) {
                super(a)
            }
        },
        jk = [1, 2, 3, 5, 6, 7, 8];
    var lk = class extends L {
            constructor() {
                super(void 0, -1, kk)
            }
        },
        kk = [1];
    var nk = class extends L {
            constructor() {
                super(void 0, -1, mk)
            }
        },
        mk = [2];
    var ok = class extends L {
        constructor() {
            super()
        }
    };
    var pk = class extends L {
        constructor() {
            super()
        }
    };

    function qk(a) {
        var b = new rk;
        return Ed(b, 1, a)
    }
    var rk = class extends L {
            constructor() {
                super(void 0, -1, sk)
            }
        },
        sk = [9];
    var uk = class extends L {
            constructor() {
                super(void 0, -1, tk)
            }
        },
        tk = [2];

    function vk(a, b) {
        return x(a, 1, b)
    }

    function wk(a, b) {
        return x(a, 2, b)
    }
    var xk = class extends L {
        constructor() {
            super()
        }
    };
    var yk = class extends L {
            constructor() {
                super()
            }
        },
        zk = [4, 5];
    var Ak = class extends L {
        constructor() {
            super()
        }
    };
    var Bk = class extends L {
        constructor() {
            super()
        }
    };
    var Ck = class extends L {
        constructor() {
            super()
        }
    };
    var Dk = class extends L {
        constructor() {
            super()
        }
    };
    var Ek = class extends L {
        constructor() {
            super()
        }
    };
    var Fk = class extends L {
        constructor() {
            super()
        }
    };
    var Gk = class extends L {
            constructor() {
                super()
            }
        },
        Hk = [2, 3];
    var Ik = class extends L {
            constructor() {
                super()
            }
        },
        Jk = [3, 4, 5, 6, 7, 8, 9];
    var Kk = class extends L {
            constructor() {
                super()
            }
            Ma(a) {
                return Bd(this, 2, a)
            }
        },
        Lk = [4, 5, 6, 8, 9, 10];

    function Mk(a, ...b) {
        Nk(a, ...b.map(c => ({
            Fg: 7,
            message: c
        })))
    };

    function Ok(a) {
        return JSON.stringify([a.map(b => [{
            [b.Fg]: b.message.toJSON()
        }])])
    };
    var Pk = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Qk(a) {
        a && "function" == typeof a.va && a.va()
    };

    function Rk() {
        this.B = this.B;
        this.G = this.G
    }
    Rk.prototype.B = !1;
    Rk.prototype.va = function() {
        this.B || (this.B = !0, this.j())
    };

    function Sk(a, b) {
        a.B ? b() : (a.G || (a.G = []), a.G.push(b))
    }
    Rk.prototype.j = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };

    function Nk(a, ...b) {
        65536 <= Ok(a.j.concat(b)).length && Tk(a);
        a.j.push(...b);
        100 <= a.j.length && Tk(a);
        a.j.length && null === a.l && (a.l = setTimeout(() => {
            Tk(a)
        }, 100))
    }

    function Tk(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.j.length) {
            var b = Ok(a.j);
            a.m("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.j = []
        }
    }
    var Uk = class {
            constructor() {
                this.m = Pk;
                this.j = [];
                this.l = null
            }
        },
        Vk = class extends Uk {};
    var O = a => {
        var b = "Tc";
        if (a.Tc && a.hasOwnProperty(b)) return a.Tc;
        b = new a;
        return a.Tc = b
    };

    function Wk(a, b, c) {
        return b[a] || c
    };

    function Xk(a, b) {
        a.l = c => Wk(2, b, () => [])(c, 1);
        a.j = () => Wk(3, b, () => [])(1)
    }
    class Yk {
        l() {
            return []
        }
        j() {
            return []
        }
    };
    let Zk, $k;
    const al = new cj(t);
    (a => {
        Zk = a || new Ri;
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        Pi(Zk, t.google_srt);
        $k = new fj(Zk, al);
        $k.A(!0);
        "complete" == t.document.readyState ? t.google_measure_js_timing || aj(al) : al.j && oe(t, "load", () => {
            t.google_measure_js_timing || aj(al)
        })
    })();
    var bl = (a, b, c) => $k.Eb(a, b, c),
        il = (a, b) => $k.ra(a, b),
        jl = (a, b, c) => {
            const d = O(Yk).j();
            !b.eid && d.length && (b.eid = d.toString());
            Qi(Zk, a, b, !0, c)
        },
        kl = (a, b) => $k.ha(a, b, void 0, void 0);
    Ie($d(ae("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var ll = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            oe(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = pe(a, "message", e));
                return g
            }
        },
        ml = (a, b, c, d = null) => {
            const e = ll(a, b, fe(c, () => e()), d);
            return e
        },
        nl = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && nl(a[f], b, c, d, --e)
        };

    function ol(a, b, c, d) {
        Bh(d.origin) && "expandable-xpc-ready" == c.notify && pl(a, b)
    }

    function pl(a, b) {
        var c = a.Sc;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Ra,
            f: a.jg,
            g: a.bf,
            h: a.Pf,
            i: void 0
        });
        t.setTimeout(il(220, wi(() => {
            bh(c.document, b)
        })), 0)
    };
    var rl = class extends L {
            constructor() {
                super(void 0, -1, ql)
            }
        },
        ql = [15];
    var sl = class extends L {
        constructor() {
            super()
        }
        getCorrelator() {
            return yd(this, 1)
        }
        setCorrelator(a) {
            return J(this, 1, a)
        }
    };
    var tl = class extends L {
        constructor() {
            super()
        }
    };
    let ul = null,
        vl = null;
    var wl = () => {
            if (null != ul) return ul;
            ul = !1;
            try {
                const a = ah(t);
                a && -1 !== a.location.hash.indexOf("google_logging") && (ul = !0);
                t.localStorage.getItem("google_logging") && (ul = !0)
            } catch (a) {}
            return ul
        },
        xl = () => {
            if (null != vl) return vl;
            vl = !1;
            try {
                const a = ah(t);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || t.localStorage.getItem("auto_ads_logging")) vl = !0
            } catch (a) {}
            return vl
        },
        yl = (a, b = []) => {
            let c = !1;
            t.google_logging_queue || (c = !0, t.google_logging_queue = []);
            t.google_logging_queue.push([a, b]);
            c && wl() && bh(t.document,
                Ie($d(ae("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let zl, Al;
    const Bl = new cj(window);
    (a => {
        zl = a ? ? new Ri;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Pi(zl, window.google_srt);
        Al = new fj(zl, Bl);
        Al.pd(() => {});
        Al.A(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || aj(Bl) : Bl.j && oe(window, "load", () => {
            window.google_measure_js_timing || aj(Bl)
        })
    })();
    let Cl = (new Date).getTime();
    var Dl = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var El = {
        bj: 0,
        aj: 1,
        Xi: 2,
        Si: 3,
        Yi: 4,
        Ti: 5,
        Zi: 6,
        Vi: 7,
        Wi: 8,
        Ri: 9,
        Ui: 10
    };
    var Fl = {
        dj: 0,
        ej: 1,
        cj: 2
    };

    function Gl(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Hl(a) {
        a = Cb(a, b => new Ih(b.top, b.right, b.bottom, b.left));
        a = Il(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Il(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Db(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Jh(a[0]))
    };
    var se = {
        Rj: 0,
        Gi: 1,
        Ji: 2,
        Hi: 3,
        Ii: 4,
        Pi: 8,
        dk: 9,
        pj: 10,
        qj: 11,
        Yj: 16,
        ti: 17,
        si: 24,
        nj: 25,
        Lh: 26,
        Kh: 27,
        Re: 30,
        hj: 32,
        kj: 40,
        ik: 41,
        fk: 42
    };
    var Jl = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Kl = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function Ll(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new Ml;
        return a.google_reactive_ads_global_state
    }
    class Ml {
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
            this.floatingAdsStacking = new Nl;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.j = new Map
        }
    }
    var Nl = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var Ol = 728 * 1.38,
        Pl = (a, b = 420) => (a = P(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        Ql = a => {
            var b = P(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        Sl = a => Math.max(0, Rl(a, !0) - P(a).clientHeight),
        P = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        Rl = (a, b) => {
            const c = P(a);
            return b ? c.scrollHeight == P(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        Ul = (a, b) => Tl(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        Vl = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        Wl = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        Xl = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Yl = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        Zl = (a, b, c, d) => {
            Qi(c, b, {
                c: d.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        Tl = a => 26 === a || 27 === a || 40 === a || 41 === a;

    function $l(a, b) {
        am(a).forEach(b, void 0)
    }

    function am(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function bm(a, b) {
        return void 0 !== a.j[cm(b)]
    }

    function dm(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function em(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const fm = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = cm(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = cm(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = cm(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        yb() {
            return dm(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function cm(a) {
        return a instanceof Object ? String(va(a)) : a + ""
    };
    const gm = class {
        constructor(a) {
            this.j = new fm;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return bm(this.j, a)
        }
    };
    const hm = new gm("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function im(a) {
        Qb(a.document.body.offsetHeight)
    };

    function jm(a) {
        a.l.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function km(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.l.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.l.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var lm = class extends Rk {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.l = b
        }
        j() {
            jm(this);
            super.j()
        }
    };

    function mm(a, b) {
        const c = new nm({
            first: a.M,
            second: b.M
        });
        a.Y(() => Q(c, {
            first: a.M,
            second: b.M
        }));
        b.Y(() => Q(c, {
            first: a.M,
            second: b.M
        }));
        return c
    }

    function om(...a) {
        const b = [...a],
            c = () => b.every(f => f.M),
            d = new nm(c()),
            e = () => {
                Q(d, c())
            };
        b.forEach(f => f.Y(e));
        return pm(d)
    }

    function qm(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.M),
            d = new nm(c()),
            e = () => {
                Q(d, c())
            };
        b.forEach(f => f.Y(e));
        return pm(d)
    }

    function Q(a, b) {
        a.M = b;
        a.l.forEach(c => {
            c(a.M)
        })
    }

    function pm(a, b = rm) {
        var c = a.M;
        const d = new nm(a.M);
        a.Y(e => {
            b(e, c) || (c = e, Q(d, e))
        });
        return d
    }

    function sm(a, b, c) {
        return a.j(d => {
            d === b && c()
        })
    }

    function tm(a, b) {
        if (!1 === a.M) b();
        else {
            var c = {
                Sb: null
            };
            c.Sb = sm(a, !1, () => {
                c.Sb && (c.Sb(), c.Sb = null);
                b()
            })
        }
    }

    function um(a, b, c) {
        pm(a).Y(d => {
            d === b && c()
        })
    }

    function vm(a, b) {
        a.m && a.m();
        a.m = b.Y(c => Q(a, c), !0)
    }
    class nm {
        constructor(a) {
            this.M = a;
            this.l = new Map;
            this.v = 1;
            this.m = null
        }
        Y(a, b = !1) {
            const c = this.v++;
            this.l.set(c, a);
            b && a(this.M);
            return () => {
                this.l.delete(c)
            }
        }
        j(a) {
            return this.Y(a, !0)
        }
        map(a) {
            const b = new nm(a(this.M));
            this.Y(c => Q(b, a(c)));
            return b
        }
    }

    function rm(a, b) {
        return a == b
    };

    function wm(a, b) {
        Ab(a.j, c => {
            c(b)
        })
    }
    var xm = class {
        constructor() {
            this.j = []
        }
    };
    class ym {
        constructor(a) {
            this.j = a
        }
        Y(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new xm;
            this.Y(c => wm(b, a(c)));
            return new ym(b)
        }
    }

    function zm(...a) {
        const b = new xm;
        a.forEach(c => {
            c.Y(d => {
                wm(b, d)
            })
        });
        return new ym(b)
    };

    function Am(a) {
        return pm(mm(a.j, a.m).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : Bm(c, b)
        }))
    }
    var Dm = class {
        constructor(a) {
            this.l = a;
            this.j = new nm(null);
            this.m = new nm(null);
            this.v = new xm;
            this.C = b => {
                null == this.j.M && 1 == b.touches.length && Q(this.j, b.touches[0])
            };
            this.A = b => {
                const c = this.j.M;
                null != c && (b = Cm(c, b.changedTouches), null != b && (Q(this.j, null), Q(this.m, null), wm(this.v, Bm(c, b))))
            };
            this.B = b => {
                var c = this.j.M;
                null != c && (c = Cm(c, b.changedTouches), null != c && (Q(this.m, c), b.preventDefault()))
            }
        }
    };

    function Bm(a, b) {
        return {
            Oe: b.pageX - a.pageX,
            Pe: b.pageY - a.pageY
        }
    }

    function Cm(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function Em(a) {
        return pm(mm(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : Fm(c, b)
        }))
    }
    var Gm = class {
        constructor(a, b) {
            this.v = a;
            this.A = b;
            this.j = new nm(null);
            this.l = new nm(null);
            this.m = new xm;
            this.G = c => {
                Q(this.j, c)
            };
            this.B = c => {
                const d = this.j.M;
                null != d && (Q(this.j, null), Q(this.l, null), wm(this.m, Fm(d, c)))
            };
            this.C = c => {
                null != this.j.M && (Q(this.l, c), c.preventDefault())
            }
        }
    };

    function Fm(a, b) {
        return {
            Oe: b.screenX - a.screenX,
            Pe: b.screenY - a.screenY
        }
    };
    var Jm = (a, b) => {
        const c = new Hm(a, b);
        return () => Im(c)
    };

    function Im(a) {
        if (a.j) return !1;
        if (null == a.l) return Km(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return Km(a), !0;
        Lm(a, b);
        return !0
    }

    function Km(a) {
        a.l = (new Date).getTime();
        a.v()
    }

    function Lm(a, b) {
        a.j = !0;
        a.m.setTimeout(() => {
            a.j = !1;
            Km(a)
        }, b)
    }
    class Hm {
        constructor(a, b) {
            this.m = a;
            this.v = b;
            this.l = null;
            this.j = !1
        }
    };

    function Mm(a) {
        return Nm(Em(a.j), Am(a.l))
    }

    function Om(a) {
        return zm(new ym(a.j.m), new ym(a.l.v))
    }
    var Pm = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Nm(a, b) {
        return mm(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function Qm(a, b) {
        return new Rm(a, b)
    }

    function Sm(a) {
        a.win.requestAnimationFrame(() => {
            a.B || Q(a.m, new yg(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function Tm(a) {
        a.l || (a.l = !0, a.v.observe(a.element));
        return pm(a.m, zg)
    }
    var Rm = class extends Rk {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.l = !1;
            this.m = new nm(new yg(this.element.offsetWidth, this.element.offsetHeight));
            this.v = new ResizeObserver(() => {
                Sm(this)
            })
        }
        j() {
            this.v.disconnect();
            super.j()
        }
    };

    function Um(a, b) {
        return {
            top: a.j - b,
            right: a.m + a.l,
            bottom: a.j + b,
            left: a.m
        }
    }
    class Vm {
        constructor(a, b, c) {
            this.m = a;
            this.j = b;
            this.l = c
        }
    };

    function Wm(a, b) {
        a = a.getBoundingClientRect();
        return new Xm(a.top + Wl(b), a.bottom - a.top)
    }

    function Ym(a) {
        return new Xm(Math.round(a.j), Math.round(a.l))
    }
    class Xm {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function Zm(a, b) {
        a.B = !0;
        a.m = b;
        a.l.forEach(c => {
            c(a.m)
        });
        a.l = []
    }
    class $m {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.B = !1;
            this.A = this.m = null;
            this.C = Jm(a, () => {
                if (null != this.A) {
                    var b = Rl(this.j, !0) - this.A;
                    1E3 < b && Zm(this, b)
                }
            });
            this.v = null
        }
        init(a, b) {
            null == a ? (this.A = a = Rl(this.j, !0), this.j.addEventListener("scroll", this.C), null != b && b(a)) : this.v = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        va() {
            null != this.v && this.j.clearTimeout(this.v);
            this.j.removeEventListener("scroll", this.C);
            this.l = [];
            this.m = null
        }
        addListener(a) {
            this.B ? a(this.m) : this.l.push(a)
        }
    };

    function an(a) {
        return new bn(a, new lm(a, a.document.body), new lm(a, a.document.documentElement), new lm(a, a.document.documentElement))
    }

    function cn(a) {
        km(a.m, "scroll-behavior", "auto");
        const b = dn(a.win);
        b.activePageScrollPreventers.add(a);
        null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
        km(a.j, "position", "fixed");
        km(a.j, "top", `${-b.previousWindowScroll}px`);
        km(a.j, "width", "100%");
        km(a.j, "overflow-x", "hidden");
        km(a.j, "overflow-y", "hidden");
        km(a.l, "overflow-x", "hidden");
        km(a.l, "overflow-y", "hidden")
    }

    function en(a) {
        jm(a.j);
        jm(a.l);
        const b = dn(a.win);
        b.activePageScrollPreventers.delete(a);
        0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        jm(a.m)
    }
    var bn = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.j = b;
            this.l = c;
            this.m = d
        }
    };

    function dn(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    };
    var fn = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class gn {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function hn(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new jn(d)
    }

    function kn(a) {
        return a.j.slice(0)
    }

    function ln(a, b = 1) {
        a = kn(a);
        const c = new gn(b);
        Pb(a, () => c.next());
        return new jn(a)
    }
    const jn = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new jn(Bb(this.j, a))
        }
        apply(a) {
            return new jn(a(kn(this)))
        }
        sort(a) {
            return new jn(kn(this).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = kn(this);
            b.push(a);
            return new jn(b)
        }
    };
    class mn {
        constructor(a) {
            this.j = new gm(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function nn(a) {
        return new on({
            value: a
        }, null)
    }

    function pn(a) {
        return new on(null, Error(a))
    }

    function qn(a) {
        try {
            return nn(a())
        } catch (b) {
            return new on(null, b)
        }
    }

    function rn(a) {
        return null != a.j ? a.j.value : null
    }

    function sn(a, b) {
        null != a.j && b(a.j.value)
    }

    function tn(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class on {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof on ? a : nn(a)) : this
        }
    };
    class un {
        constructor() {
            this.j = new fm
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new gm, this.j.set(a, c));
            c.add(b)
        }
    };

    function vn(a) {
        return !a
    };
    var xn = class extends L {
            constructor(a) {
                super(a, -1, wn)
            }
            getId() {
                return v(this, 3)
            }
        },
        wn = [4];
    class yn {
        constructor(a, {
            Gd: b,
            We: c,
            Nf: d,
            De: e
        }) {
            this.A = a;
            this.m = c;
            this.v = new jn(b || []);
            this.l = e;
            this.j = d
        }
    };
    var zn = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new fm;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Bn = a => {
            var b = An(a);
            a = [];
            for (let c of b) b = String(c.nb), a.push(c.Na + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const An = a => {
            const b = [],
                c = a.v;
            c && c.j.length && b.push({
                Na: "a",
                nb: Cn(c)
            });
            null != a.m && b.push({
                Na: "as",
                nb: a.m
            });
            null != a.j && b.push({
                Na: "i",
                nb: String(a.j)
            });
            null != a.l && b.push({
                Na: "rp",
                nb: String(a.l)
            });
            b.sort(function(d, e) {
                return d.Na.localeCompare(e.Na)
            });
            b.unshift({
                Na: "t",
                nb: Dn(a.A)
            });
            return b
        },
        Dn = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Cn = a => {
            a = kn(a).map(En);
            a = JSON.stringify(a);
            return hh(a)
        },
        En = a => {
            const b = {};
            null != v(a, 7) && (b.q = v(a, 7));
            null != wd(a,
                2) && (b.o = wd(a, 2));
            null != wd(a, 5) && (b.p = wd(a, 5));
            return b
        };

    function Fn() {
        var a = new Gn;
        return x(a, 2, 1)
    }
    var Gn = class extends L {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return x(this, 1, a)
        }
    };

    function Hn(a) {
        const b = [].slice.call(arguments).filter(ge(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Ld || []);
            d = Object.assign(d, e.zb())
        });
        return new In(c, d)
    }

    function Jn(a) {
        switch (a) {
            case 1:
                return new In(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new In(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new In(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new In(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Kn(a) {
        return null == a ? null : new In(null, {
            google_ml_rank: a
        })
    }

    function Ln(a) {
        return null == a ? null : new In(null, {
            google_placement_id: Bn(a)
        })
    }

    function Mn({
        sf: a,
        zf: b = null
    }) {
        if (null == a) return null;
        a = {
            google_daaos_ts: a
        };
        null != b && (a.google_erank = b + 1);
        return new In(null, a)
    }
    class In {
        constructor(a, b) {
            this.Ld = a;
            this.j = b
        }
        zb() {
            return this.j
        }
    };
    var Nn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var On = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Pn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Qn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Sn = class extends L {
            constructor(a) {
                super(a, -1, Rn)
            }
            G() {
                return v(this, 2)
            }
            B() {
                return v(this, 5)
            }
            j() {
                return G(this, Qn, 3)
            }
            v() {
                return wd(this, 4)
            }
            A() {
                return fd(this, 6)
            }
            F() {
                return bd(this, Pn, 7)
            }
        },
        Rn = [3];
    var Tn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Un = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return B(this, 18, !1)
        }
        A() {
            x(this, 18, !1)
        }
        v() {
            return B(this, 21, !1)
        }
    };
    var Vn = class extends L {
        constructor() {
            super()
        }
    };
    var Wn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Xn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Yn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Zn = class extends L {
        constructor(a) {
            super(a)
        }
        X() {
            return E(this, xn, 1)
        }
        j() {
            return v(this, 2)
        }
    };
    var $n = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var ao = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var bo = class extends L {
            constructor(a) {
                super(a)
            }
            getName() {
                return v(this, 4)
            }
        },
        co = [1, 2, 3];
    var fo = class extends L {
            constructor(a) {
                super(a, -1, eo)
            }
        },
        eo = [2, 5, 6, 11];
    var go = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return y(this, 2)
        }
    };
    var ho = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return v(this, 1)
        }
    };
    var io = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var jo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var lo = class extends L {
            constructor(a) {
                super(a, -1, ko)
            }
            j() {
                return E(this, jo, 2)
            }
        },
        ko = [1];
    var mo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var no = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return K(this, 2)
        }
    };

    function oo() {
        var a = new po;
        a = x(a, 1, 1);
        var b = new mo;
        b = x(b, 2, !0);
        a = pd(a, 2, b);
        b = new lo;
        var c = new io;
        c = x(c, 1, 1);
        b = ud(b, 1, io, c);
        c = new jo;
        c = x(c, 1, !0);
        b = pd(b, 2, c);
        return pd(a, 3, b)
    }
    var po = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var qo = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return Cd(this, 1)
        }
        v() {
            return K(this, 3)
        }
        A() {
            return K(this, 4)
        }
    };
    var ro = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return yd(this, 1)
        }
    };
    var so = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return K(this, 1)
        }
        v() {
            return K(this, 2)
        }
        A() {
            return K(this, 3)
        }
    };
    var to = class extends L {
        constructor(a) {
            super(a)
        }
        A() {
            return E(this, qo, 8)
        }
        B() {
            return E(this, qo, 9)
        }
        j() {
            return E(this, so, 4)
        }
        v() {
            return E(this, ro, 5)
        }
        G() {
            return K(this, 10)
        }
    };
    var uo = class extends L {
        constructor(a) {
            super(a)
        }
        v() {
            return yd(this, 3)
        }
        B() {
            return E(this, so, 5)
        }
        j() {
            return E(this, ro, 6)
        }
        A() {
            return K(this, 8)
        }
        G() {
            return B(this, 10)
        }
        F() {
            return B(this, 11)
        }
    };
    var wo = class extends L {
            constructor(a) {
                super(a, -1, vo)
            }
        },
        vo = [2];
    var xo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var zo = class extends L {
            constructor(a) {
                super(a, -1, yo)
            }
        },
        yo = [1];
    var Ao = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return v(this, 1)
        }
    };
    var Bo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Do = class extends L {
            constructor(a) {
                super(a, -1, Co)
            }
            j() {
                return G(this, Bo, 1)
            }
        },
        Co = [1];
    var Eo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Go = class extends L {
            constructor(a) {
                super(a, -1, Fo)
            }
        },
        Fo = [3, 4];
    var Ho = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Jo = class extends L {
            constructor(a) {
                super(a, -1, Io)
            }
            X() {
                return E(this, xn, 1)
            }
            j() {
                return v(this, 2)
            }
        },
        Io = [6, 7, 9, 10, 11];
    var Lo = class extends L {
            constructor(a) {
                super(a, -1, Ko)
            }
        },
        Ko = [4];
    var Mo = class extends L {
        constructor() {
            super()
        }
    };
    var Oo = class extends L {
            constructor(a) {
                super(a, -1, No)
            }
        },
        No = [6];
    var Po = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return yd(this, 1)
        }
    };
    var Qo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var So = class extends L {
            constructor(a) {
                super(a)
            }
            j() {
                return Dd(this, Qo, 2, Ro)
            }
        },
        Ro = [1, 2];
    var To = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return E(this, So, 3)
        }
    };
    var Uo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Wo = class extends L {
            constructor(a) {
                super(a, -1, Vo)
            }
            j() {
                return G(this, Uo, 1)
            }
        },
        Vo = [1];
    var Yo = class extends L {
            constructor(a) {
                super(a, -1, Xo)
            }
            j() {
                return gd(this, 1, Yc)
            }
            v() {
                return E(this, To, 3)
            }
        },
        Xo = [1, 4];

    function Zo(a) {
        return E(a, On, 13)
    }

    function $o(a) {
        return E(a, uo, 28)
    }
    var bp = Wd(class extends L {
            constructor(a) {
                super(a, -1, ap)
            }
            j() {
                return E(this, Un, 15)
            }
        }),
        ap = [1, 2, 5, 7];
    var cp = class extends L {
            constructor(a) {
                super(a)
            }
        },
        dp = Wd(cp);

    function ep(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? dp(b) : null
        } catch (b) {
            return null
        }
    }

    function fp(a, b) {
        if (void 0 !== a.Oc) {
            let c = ep(b);
            c || (c = new cp);
            void 0 !== a.Oc && x(c, 2, a.Oc);
            x(c, 1, Ga() + 864E5);
            a = Qd(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = ep(b)) && v(a, 1) < Ga()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function gp(a) {
        var b = [];
        $l(a.getElementsByTagName("p"), function(c) {
            100 <= hp(c) && b.push(c)
        });
        return b
    }

    function hp(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        $l(a.childNodes, function(c) {
            b += hp(c)
        });
        return b
    }

    function ip(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function jp(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const kp = class {
        constructor(a, b, c, d) {
            this.v = a;
            this.l = b;
            this.m = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.v)
            } catch (f) {}
            if (!b.length) return [];
            a = Ib(b);
            a = jp(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.m) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = gp(a[c]),
                        e = this.m;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.v,
                occurrenceIndex: this.l,
                paragraphIndex: this.m,
                ignoreMode: this.j
            })
        }
    };

    function lp(a) {
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
    }

    function mp(a) {
        return am(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var R = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        np = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        op = class {
            constructor(a) {
                this.j = a;
                this.defaultValue = ""
            }
        };
    var pp = new R(1082, !0),
        qp = new np(1130, 100),
        rp = new np(1032, 200),
        sp = new op(14),
        tp = new R(1240),
        up = new np(1224, .01),
        vp = new R(1122, !0),
        wp = new R(1239),
        xp = new R(1226),
        yp = new R(1196),
        zp = new R(1160),
        Ap = new R(316),
        Bp = new R(334),
        Cp = new np(54),
        Dp = new R(313),
        Ep = new np(66, -1),
        Fp = new np(65, -1),
        Gp = new R(369),
        Hp = new R(1241),
        Ip = new R(1236),
        Jp = new R(368),
        Kp = new R(1223),
        Lp = new R(1242),
        Mp = new R(1244),
        Np = new np(1169, 61440),
        Op = new R(1171, !0),
        Pp = new R(1235),
        Qp = new R(1151),
        Rp = new np(1072, .75),
        Sp = new np(1168, 61440),
        Tp = new R(290),
        Up = new R(1222),
        Vp = new R(1246),
        Wp = new R(1238),
        Xp = new R(1237),
        Yp = new R(1147),
        Zp = new np(1245, 3600),
        $p = new np(506864295),
        aq = new np(508040914, 100),
        bq = new R(501545960),
        cq = new R(289410051),
        dq = new R(1120),
        eq = new np(1114, 1),
        fq = new R(515292965),
        gq = new R(506914611),
        hq = new R(511172886),
        iq = new np(506871937),
        jq = new R(513037478),
        kq = new R(483374575),
        lq = new op(1166),
        mq = new R(1E4),
        nq = new np(472785970, 500),
        oq = new R(447540096, !0),
        pq = new R(83),
        qq = new R(439828594),
        rq = new R(483962503),
        sq = new R(506738118),
        tq = new R(77),
        uq =
        new R(78),
        vq = new R(309),
        wq = new R(80),
        xq = new R(76),
        yq = new R(1957, !0),
        zq = new R(380025941),
        Aq = new R(84),
        Bq = new R(1973),
        Cq = new R(188),
        Dq = new R(1975),
        Eq = new R(1974, !0),
        Fq = new R(504787204),
        Gq = new R(1162),
        Hq = new np(501545963, 1),
        Iq = new np(1157),
        Jq = new R(494741144),
        Kq = new np(1119, 300),
        Lq = new np(1193, 100),
        Mq = new np(1103),
        Nq = new R(501545961),
        Oq = new np(501545962, 1),
        Pq = new np(1116, 300),
        Qq = new R(491815314),
        Rq = new R(1121),
        Sq = new R(501545959, !0),
        Tq = new R(45388161),
        Uq = new R(471262996),
        Vq = new np(469675170, 3E4),
        Wq =
        new R(506619840),
        Xq = new R(506852289),
        Yq = new R(502896280, !0),
        Zq = new R(485990406);
    var $q = class {
        constructor() {
            const a = {};
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.m = (b, c) => null != a[b] ? a[b] : c;
            this.A = (b, c) => null != a[b] ? a[b] : c;
            this.v = () => {}
        }
    };

    function S(a) {
        return O($q).j(a.j, a.defaultValue)
    }

    function T(a) {
        return O($q).l(a.j, a.defaultValue)
    }

    function ar(a) {
        return O($q).m(a.j, a.defaultValue)
    };

    function br(a, b) {
        a = (new Gg(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function cr(a, b, c) {
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
        lp(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function dr(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            lp(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var fr = (a, b, c, d = 0) => {
            var e = er(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Yb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.rc
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            cr(a, e.anchor, e.position)
        },
        gr = (a, b, c, d = 0) => {
            S(Dp) ? fr(a, b, c, d) : cr(a, b, c)
        };

    function er(a, b, c) {
        const d = f => {
                f = hr(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = hr(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: ir(a.previousSibling, d),
                    Yb: f => ir(f.previousSibling, d),
                    rc: 0
                };
            case 2:
                return {
                    init: ir(a.lastChild, d),
                    Yb: f => ir(f.previousSibling, d),
                    rc: 0
                };
            case 3:
                return {
                    init: ir(a.nextSibling, e),
                    Yb: f => ir(f.nextSibling, e),
                    rc: 3
                };
            case 1:
                return {
                    init: ir(a.firstChild, e),
                    Yb: f => ir(f.nextSibling, e),
                    rc: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function hr(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function ir(a, b) {
        return a && b(a) ? a : null
    };
    var jr = (a, b = !1) => {
        try {
            return b ? (new yg(a.innerWidth, a.innerHeight)).round() : Ig(a || window).round()
        } catch (c) {
            return new yg(-12245933, -12245933)
        }
    };

    function kr(a = t) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function lr(a, b = t) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new xg(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function mr(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function nr(a) {
        -1 === a.l && (a.l = Db(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class or {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };

    function pr(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            Vc: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 === b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            Vc: c
        }
    };
    var qr = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function rr(a, b) {
        fh(a, (c, d) => {
            b[d] = c
        })
    }
    var sr = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && Yg(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var tr = (a, b) => {
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
        ur = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        vr = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const wr = (a, b, c) => {
        a = tr(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var xr = (a, b) => {
            b = b.parentElement;
            return b ? (a = dh(b, a)) ? a.direction : "" : ""
        },
        yr = (a, b, c) => {
            if (0 === wr(a, b, c)) return !1;
            vr(b, c, "0px");
            const d = wr(a, b, c);
            vr(b, c, -1 * d + "px");
            a = wr(a, b, c);
            0 !== a && a !== d && vr(b, c, d / (a - d) * d + "px");
            return !0
        };
    const zr = RegExp("(^| )adsbygoogle($| )");

    function Ar(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Dg(d.jd);
            a[e] = d.value
        }
    }

    function Br(a, b, c, d, e, f) {
        a = Cr(a, e);
        a.ta.setAttribute("data-ad-format", d ? d : "auto");
        Dr(a, b, c, f);
        return a
    }

    function Er(a, b, c = null) {
        a = Cr(a, {});
        Dr(a, b, null, c);
        return a
    }

    function Dr(a, b, c, d) {
        var e = [];
        if (d = d && d.Ld) a.Ta.className = d.join(" ");
        a = a.ta;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function Cr(a, b) {
        const c = br(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.qc && Ar(d, b.qc);
        a = (new Gg(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.wd && (d.marginTop = b.wd);
        b.Hc && (d.marginBottom = b.Hc);
        b.kb && Ar(d, b.kb);
        c.appendChild(a);
        return {
            Ta: c,
            ta: a
        }
    }

    function Fr(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.zb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Gr(a) {
        const b = mp(a.document);
        Ab(b, function(c) {
            const d = Hr(a, c);
            var e;
            if (e = d) e = tr(c, a), e = !((e ? e.y : 0) < P(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Fr(a, c))
        })
    }

    function Hr(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in pg) a[pg[c]] && (b[pg[c]] = a[pg[c]]);
        return b
    };
    class Ir {
        constructor() {
            var a = N `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.v = Math.random();
            this.m = this.ha;
            this.B = a
        }
        pd(a) {
            this.j = a
        }
        A(a) {
            this.l = a
        }
        ha(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.v : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new Ai(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (bh(t.document, this.B), t.error_rep_loaded = !0);
            return !1
        }
        Eb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.m(a, d, .01, c, "jserror")) throw d;
            }
        }
        ra(a, b, c, d) {
            return (...e) => this.Eb(a, () => b.apply(c, e), d)
        }
        za(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ha(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    const Jr = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Kr = (a, b, c, d) => {
            const e = d || window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = Vi();
                let h, k = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (l) {
                    k = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Jr({
                        label: a.toString(),
                        value: g,
                        duration: (Vi() || 0) - g,
                        type: k,
                        ...(f && {
                            taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                        })
                    }, e)
                }
                return h
            }
        },
        Lr = (a, b) => Kr(754,
            a, (c, d) => {
                (new Ir).ha(c, d)
            }, b);

    function Mr(a, b, c) {
        return Kr(a, b, void 0, c).apply()
    }

    function Nr(a, b) {
        return Lr(a, b).apply()
    }

    function Or(a) {
        if (!a) return null;
        var b = v(a, 7);
        if (v(a, 1) || a.getId() || 0 < gd(a, 4, Yc).length) {
            b = gd(a, 4, Yc);
            var c = v(a, 3),
                d = v(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + ip(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + ip(b[c]);
            a = (b = e) ? new kp(b, wd(a, 2), wd(a, 5), Pr(v(a, 6))) : null
        } else a = b ? new kp(b, wd(a, 2), wd(a, 5), Pr(v(a, 6))) : null;
        return a
    }
    var Qr = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Pr(a) {
        return null == a ? a : Qr[a]
    }

    function Rr(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = v(a[c], 1),
                e = v(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.jd = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Sr(a, b) {
        var c = {};
        a && (c.wd = v(a, 1), c.Hc = v(a, 2), c.clearBoth = !!y(a, 3));
        b && (c.qc = Rr(G(b, Eo, 3)), c.kb = Rr(G(b, Eo, 4)));
        return c
    }
    var Tr = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Ur = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    var Vr = {
            pa: "ama_success",
            ia: .1,
            ka: !0
        },
        Wr = {
            pa: "ama_failure",
            ia: .1,
            ka: !0
        },
        Xr = {
            pa: "ama_inf_scr",
            ia: .1,
            ka: !0
        },
        Yr = {
            pa: "ama_inf_scr",
            ia: .1,
            ka: !0
        },
        Zr = {
            pa: "ama_coverage",
            ia: .1,
            ka: !0
        },
        $r = {
            pa: "ama_inf_scr",
            ia: 1,
            ka: !0
        },
        as = {
            pa: "ama_opt",
            ia: .1,
            ka: !0
        },
        bs = {
            pa: "ama_aud_sen",
            ia: 1,
            ka: !0
        },
        cs = {
            pa: "ama_auto_rs",
            ia: 1,
            ka: !0
        },
        ds = {
            pa: "ama_auto_prose",
            ia: 1,
            ka: !0
        },
        es = {
            pa: "ama_improv",
            ia: .1,
            ka: !0
        };

    function fs(a, b) {
        for (var c = 0; c < b.length; c++) a.ua(b[c]);
        return a
    }

    function gs(a, b) {
        a.m = a.m ? a.m : b;
        return a
    }
    class hs {
        constructor(a) {
            this.C = {};
            this.C.c = a;
            this.A = [];
            this.m = null;
            this.B = [];
            this.F = 0
        }
        Ma(a) {
            this.C.wpc = a;
            return this
        }
        ua(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        v(a) {
            var b = ue(this.C);
            0 < this.F && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.B.join();
            this.m && (b.excp_n = this.m.name, b.excp_m = this.m.message && this.m.message.substring(0, 512), b.excp_s = this.m.stack && ej(this.m.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function is(a, b, c) {
        !b.ka || "pvc" in c || (c.pvc = Eh(a.j));
        jl(b.pa, c, b.ia)
    }

    function js(a, b, c) {
        c = c.v(a.j);
        b.ka && (c.pvc = Eh(a.j));
        0 < b.ia && (c.r = b.ia, is(a, b, c))
    }
    var ks = class {
        constructor(a) {
            this.j = a
        }
    };

    function ls(a, b, c) {
        var d = a.m,
            e = P(a.j).clientHeight,
            f = E(a.l, no, 4) ? .j();
        a = a.j;
        a = a.google_ama_state = a.google_ama_state || {};
        is(d, bs, { ...c,
            evt: b,
            vh: e,
            eid: f,
            psr: a.audioSenseSpaceReserved ? 1 : 0
        })
    }
    var ms = class {
        constructor(a, b, c) {
            this.j = a;
            this.m = b;
            this.l = c
        }
    };
    const ns = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return Br(d.document, a, null, null, this.j, b)
        }
        m() {
            return null
        }
    };
    const os = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < G(this.j, Go, 9).length ? G(this.j, Go, 9)[0] : null,
                f = Sr(E(this.j, Ho, 3), e);
            if (!e) return null;
            if (e = v(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new Gg(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.qc && Ar(c.style, f.qc);
                d = (new Gg(d)).createElement("INS");
                f.kb && Ar(d.style, f.kb);
                c.appendChild(d);
                f = {
                    Ta: c,
                    ta: d
                };
                f.ta.setAttribute("data-ad-type", "text");
                f.ta.setAttribute("data-native-settings-key",
                    e);
                Dr(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        m() {
            var a = 0 < G(this.j, Go, 9).length ? G(this.j, Go, 9)[0] : null;
            if (!a) return null;
            a = G(a, Eo, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == v(c, 1) && 0 < parseInt(v(c, 2), 10)) return parseInt(v(c, 2), 10)
            }
            return null
        }
    };
    const ps = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        jd: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    kb: g
                }
            } else c = {};
            a = Br(d.document, a, f, e, c, b);
            a.ta.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        m() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        zb() {
            return this.j
        }
    };
    class qs {
        constructor(a) {
            this.l = a
        }
        j() {
            return new In([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const rs = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        j() {
            return this.m
        }
        l(a) {
            a = this.v.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function ss(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                k = e.X();
            if (k) {
                var l = Or(k);
                if (l) {
                    var m = Tr[v(e, 2)],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = E(e, Ho, 3)) ? y(m, 3) : null;
                        l = new rs(l, n);
                        n = ed(e, 10).slice(0);
                        null != wd(k, 5) && n.push(1);
                        var q = h ? h : {};
                        h = wd(e, 12);
                        k = bd(e, Gn, 4) ? E(e, Gn, 4) : null;
                        1 == v(e, 8) ? (q = q.jf || null, e = new ts(l, new ns(Sr(E(e, Ho, 3), null)), q, m, 0, n, k, g, f, h, e)) : e = 2 == v(e, 8) ? new ts(l, new os(e), q.Of || new qs("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e = null;
            null !==
                e && d.push(e)
        }
        return d
    }

    function us(a) {
        return a.A
    }

    function vs(a) {
        return a.sa
    }

    function ws(a) {
        return S(yp) ? (a.K || (a.K = a.F.l(a.m)), a.K) : a.F.l(a.m)
    }

    function xs(a) {
        var b = a.H;
        a = a.m.document.createElement("div");
        S(yp) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function ys(a) {
        return a.C instanceof ps ? a.C.zb() : null
    }

    function zs(a, b, c) {
        bm(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }

    function As(a, b) {
        a.A = !0;
        S(yp) && (a.l && dr(a.l), a.l = null);
        null != b && a.R.push(b)
    }

    function Bs(a) {
        return br(a.m.document, a.H || !1)
    }

    function Cs(a) {
        return a.C.m(a.m)
    }

    function Ds(a, b = null, c = null) {
        return new ts(a.F, b || a.C, c || a.L, a.H, a.Xa, a.kc, a.vc, a.m, a.ja, a.G, a.v, a.B, a.W)
    }
    class ts {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, q = null) {
            this.F = a;
            this.C = b;
            this.L = c;
            this.H = d;
            this.Xa = e;
            this.kc = f;
            this.vc = g ? g : new Gn;
            this.m = h;
            this.ja = k;
            this.G = l;
            this.v = m;
            (a = !m) || (a = !(m.X() && null != wd(m.X(), 5)));
            this.sa = !a;
            this.B = n;
            this.W = q;
            this.R = [];
            this.A = !1;
            this.I = new fm;
            this.K = this.l = null
        }
        P() {
            return this.m
        }
        j() {
            return this.F.j()
        }
    };
    var Es = a => a ? .google_ad_slot ? nn(new yn(1, {
            We: a.google_ad_slot
        })) : pn("Missing dimension when creating placement id"),
        Gs = a => {
            switch (a.Xa) {
                case 0:
                case 1:
                    var b = a.v;
                    null == b ? a = null : (a = b.X(), null == a ? a = null : (b = v(b, 2), a = null == b ? null : new yn(0, {
                        Gd: [a],
                        De: b
                    })));
                    return null != a ? nn(a) : pn("Missing dimension when creating placement id");
                case 2:
                    return a = Fs(a), null != a ? nn(a) : pn("Missing dimension when creating placement id");
                default:
                    return pn("Invalid type: " + a.Xa)
            }
        };
    const Fs = a => {
        if (null == a || null == a.B) return null;
        const b = E(a.B, xn, 1),
            c = E(a.B, xn, 2);
        if (null == b || null == c) return null;
        const d = a.W;
        if (null == d) return null;
        a = a.j();
        return null == a ? null : new yn(0, {
            Gd: [b, c],
            Nf: d,
            De: Ur[a]
        })
    };

    function Hs(a) {
        const b = ys(a.U);
        return (b ? Es(b) : Gs(a.U)).map(c => Bn(c))
    }

    function Is(a) {
        a.j = a.j || Hs(a);
        return a.j
    }

    function Js(a, b) {
        if (a.U.A) throw Error("AMA:AP:AP");
        gr(b, a.X(), a.U.j());
        As(a.U, b)
    }
    const Ks = class {
        constructor(a, b, c) {
            this.U = a;
            this.l = b;
            this.ba = c;
            this.j = null
        }
        X() {
            return this.l
        }
        fill(a, b) {
            var c = this.U;
            (a = c.C.l(a, b, this.l, c.m)) && Js(this, a.Ta);
            return a
        }
    };
    const Ls = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = $a(b, "&") ? Ag(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && hm.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Ls(a, b[c])) return !0
        }
        return !1
    };
    var Ms = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Ns = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return Br(d.document, a, null, null, this.j, b)
        }
        m(a) {
            return Ms(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class Os {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Ms(a);
            return new In(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Ps = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        l() {
            return this.v
        }
        j() {
            return this.m
        }
    };
    const Qs = {
        TABLE: {
            rb: new mn([1, 2])
        },
        THEAD: {
            rb: new mn([0, 3, 1, 2])
        },
        TBODY: {
            rb: new mn([0, 3, 1, 2])
        },
        TR: {
            rb: new mn([0, 3, 1, 2])
        },
        TD: {
            rb: new mn([0, 3])
        }
    };

    function Rs(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = zb(e, f), 0 > c || b.push(new Ss(a, [f], c, f, 3, Qg(f).trim(), d));
        return b
    }

    function Ts(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const q = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == q || "inline-block" == q ? null : m
                }
                m ? (d.length && k && e.push(new Ss(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = Qg(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Ss(a, d, h, b, 2, k, c));
        return e
    }

    function Us(a, b) {
        return a.j - b.j
    }

    function Vs(a) {
        const b = Fn();
        return new ts(new Ps(a.zc, a.Ac), new ns({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.m, a.j)
    }
    class Ss {
        constructor(a, b, c, d, e, f, g) {
            this.m = a;
            this.ob = b.slice(0);
            this.j = c;
            this.zc = d;
            this.Ac = e;
            this.v = f;
            this.l = g
        }
        P() {
            return this.l
        }
    };

    function Ws(a) {
        return Hb(a.A ? Ts(a.l, a.j, a.m) : [], a.v ? Rs(a.l, a.v, a.j, a.m) : []).filter(b => {
            var c = b.zc.tagName;
            c ? (c = Qs[c.toUpperCase()], b = null != c && c.rb.contains(b.Ac)) : b = !1;
            return !b
        })
    }
    class Xs {
        constructor(a, b, c) {
            this.j = a;
            this.v = b.Tb;
            this.A = b.Vd;
            this.l = b.articleStructure;
            this.m = c
        }
    };

    function Ys(a, b) {
        return Nr(() => {
            if (S(yp)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = ws(f);
                    if (g) {
                        var h = f;
                        if (!h.l && !h.A) {
                            var k = h;
                            var l = h,
                                m = null;
                            try {
                                var n = ws(l);
                                if (n) {
                                    m = xs(l);
                                    gr(m, n, l.j());
                                    var q = m
                                } else q = null
                            } catch (C) {
                                throw dr(m), C;
                            }
                            k.l = q
                        }(h = h.l) && d.push({
                            gg: f,
                            anchorElement: g,
                            Bf: h
                        })
                    }
                }
                if (0 < d.length)
                    for (q = Wl(b), n = Xl(b), e = 0; e < d.length; e++) {
                        const {
                            gg: C,
                            anchorElement: z,
                            Bf: A
                        } = d[e];
                        f = Zs(A, n, q);
                        c.push(new Ks(C, z, f))
                    }
                q = c
            } else {
                q = [];
                n = [];
                try {
                    const C = [];
                    for (let z = 0; z < a.length; z++) {
                        var r = a[z],
                            w = ws(r);
                        w && C.push({
                            ze: r,
                            anchorElement: w
                        })
                    }
                    for (w = 0; w < C.length; w++) {
                        r = n;
                        g = r.push; {
                            k = C[w];
                            l = k.anchorElement;
                            m = k.ze;
                            const z = xs(m);
                            try {
                                gr(z, l, m.j()), h = z
                            } catch (A) {
                                throw dr(z), A;
                            }
                        }
                        g.call(r, h)
                    }
                    c = Wl(b);
                    d = Xl(b);
                    for (g = 0; g < n.length; g++) e = Zs(n[g], d, c), f = C[g], q.push(new Ks(f.ze, f.anchorElement, e))
                } finally {
                    for (c = 0; c < n.length; c++) dr(n[c])
                }
            }
            return q
        }, b)
    }

    function Zs(a, b, c) {
        a = a.getBoundingClientRect();
        return new Vm(a.left + b, a.top + c, a.right - a.left)
    };

    function $s(a, b) {
        const c = Ws(b);
        c.sort(Us);
        return new at(a, b, c)
    }

    function bt(a, b, c) {
        return new ts(new Ps(b, c), new ns({}), null, !0, 2, [], null, a.j, null, null, null, a.A.l, null)
    }
    var at = class {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.v = c;
            this.l = !1;
            this.m = 0
        }
        next() {
            if (!this.l) {
                if (this.m >= this.v.length) var a = null;
                else {
                    {
                        const b = this.v[this.m++].ob[0];
                        ua(b) && 1 == b.nodeType ? a = bt(this, b, 0) : (a = this.j.document.createElement("div"), M(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = bt(this, a, 3))
                    }
                    a = Ys([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var ct = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const dt = {
            1: "0.5vp",
            2: "300px"
        },
        et = {
            1: 700,
            2: 1200
        },
        ft = {
            [1]: {
                Ke: "3vp",
                ud: "1vp",
                Je: "0.3vp"
            },
            [2]: {
                Ke: "900px",
                ud: "300px",
                Je: "90px"
            }
        };

    function gt(a, b, c) {
        var d = ht(a),
            e = P(a).clientHeight || et[d],
            f = void 0;
        c && (f = (c = (c = it(G(c, Sn, 2), d)) ? E(c, Pn, 7) : void 0) ? jt(c, e) : void 0);
        c = f;
        f = ht(a);
        a = P(a).clientHeight || et[f];
        const g = kt(ft[f].ud, a);
        a = null === g ? lt(f, a) : new mt(g, g, nt(g, 8), 8, .3, c);
        c = kt(ft[d].Ke, e);
        f = kt(ft[d].ud, e);
        d = kt(ft[d].Je, e);
        e = a.m;
        c && d && f && void 0 !== b && (e = .5 >= b ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new mt(e, e, nt(e, a.l), a.l, a.v, a.j)
    }

    function ot(a, b) {
        const c = ht(a);
        a = P(a).clientHeight || et[c];
        if (b = it(G(b, Sn, 2), c))
            if (b = pt(b, a)) return b;
        return lt(c, a)
    }

    function qt(a) {
        const b = ht(a);
        return lt(b, P(a).clientHeight || et[b])
    }

    function rt(a, b) {
        let c = {
            mc: a.m,
            cb: a.A
        };
        for (let d of a.B) d.adCount <= b && (c = d.rd);
        return c
    }

    function st(a, b, c) {
        var d = y(b, 2);
        b = E(b, Sn, 1);
        const e = P(c).clientHeight || et[ht(c)];
        c = kt(b ? .G(), e) ? ? a.m;
        const f = kt(b ? .B(), e) ? ? a.A;
        d = d ? [] : tt(b ? .j(), e) ? ? a.B;
        const g = b ? .v() ? ? a.l,
            h = b ? .A() ? ? a.v;
        a = (b ? .F() ? jt(E(b, Pn, 7), e) : null) ? ? a.j;
        return new mt(c, f, d, g, h, a)
    }
    class mt {
        constructor(a, b, c, d, e, f) {
            this.m = a;
            this.A = b;
            this.B = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.v = e;
            this.j = f
        }
    }

    function it(a, b) {
        for (let c of a)
            if (v(c, 1) == b) return c;
        return null
    }

    function tt(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = wd(d, 1);
            const e = kt(v(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                rd: {
                    mc: e,
                    cb: kt(v(d, 3), b)
                }
            })
        }
        return c
    }

    function pt(a, b) {
        const c = kt(v(a, 2), b),
            d = kt(v(a, 5), b);
        if (null === c) return null;
        const e = wd(a, 4);
        if (null == e) return null;
        var f = a.j();
        f = tt(f, b);
        if (null === f) return null;
        const g = E(a, Pn, 7);
        b = g ? jt(g, b) : void 0;
        return new mt(c, d, f, e, fd(a, 6), b)
    }

    function lt(a, b) {
        a = kt(dt[a], b);
        return new mt(null === a ? Infinity : a, null, [], 3, null)
    }

    function kt(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function ht(a) {
        a = 900 <= P(a).clientWidth;
        return Vg() && !a ? 1 : 2
    }

    function nt(a, b) {
        if (4 > b) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            rd: {
                mc: 2 * a,
                cb: 2 * a
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            rd: {
                mc: 3 * a,
                cb: 3 * a
            }
        }]
    }

    function jt(a, b) {
        return {
            pe: kt(v(a, 2), b) || 0,
            me: wd(a, 3) || 1,
            mb: kt(v(a, 1), b) || 0
        }
    };

    function ut(a, b, c) {
        return Gl({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function vt(a) {
        if (!a.length) return null;
        const b = Hl(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new wt(b, a)
    }
    class wt {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function xt(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    var Dt = (a, b) => {
        const c = Ib(b.document.querySelectorAll(".google-auto-placed")),
            d = yt(b),
            e = zt(b),
            f = At(b),
            g = Bt(b),
            h = Ib(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Ib(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = Ib(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(Ib(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ib(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, q] of [
                [a.Zb, c],
                [a.Wa, d],
                [a.Lf, e],
                [a.ac, f],
                [a.cc, g],
                [a.Jf, h],
                [a.Kf, k],
                [a.Mf, l]
            ]) a = q, !1 === n ? b = b.concat(a) : m = m.concat(a);
        a = Ct(m);
        b = Ct(b);
        a = a.slice(0);
        for (const n of b)
            for (b = 0; b < a.length; b++)(n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
        return a
    };
    const Et = a => {
            const b = xt(a);
            return b ? Bb(Cb(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        yt = a => Ib(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        zt = a => Ib(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        At = a => (Et(a) || Ib(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ib(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Bt = a => Ib(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Ct = a => {
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
    var Ft = $k.ra(453, Dt),
        Gt;
    Gt = $k.ra(454, (a, b) => {
        const c = Ib(b.document.querySelectorAll(".google-auto-placed")),
            d = yt(b),
            e = zt(b),
            f = At(b),
            g = Bt(b),
            h = Ib(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Ib(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = Ib(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return Ct([].concat(!0 === a.Zb ? c : [], !0 === a.Wa ? d : [], !0 === a.Lf ? e : [], !0 === a.ac ? f : [], !0 === a.cc ? g : [], !0 === a.Jf ? h : [], !0 === a.Kf ? k : [], !0 === a.Mf ? b : []))
    });

    function Ht(a, b, c) {
        const d = It(a);
        b = Jt(d, b, c);
        return new Kt(a, d, b)
    }

    function eu(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function fu(a) {
        return a.j.map(b => b.box)
    }

    function gu(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class Kt {
        constructor(a, b, c) {
            this.m = a;
            this.j = b.slice(0);
            this.v = c.slice(0);
            this.l = null
        }
    }

    function It(a) {
        const b = Ft({
                Wa: !1
            }, a),
            c = Xl(a),
            d = Wl(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && $a(e.className, "google-auto-placed")) || eu(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Jk: e ? 1 : 0
            } : null
        }).filter(ge(e => null === e))
    }

    function Jt(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? hu(a, b) : Cb(a, d => new wt(d.box, 1))
    }

    function hu(a, b) {
        a = Cb(a, d => new wt(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (ut(d, a[f], b)) {
                        d = vt([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function iu(a, b, c) {
        const d = Um(c, b);
        return !Eb(a, e => Gl(e, d))
    }

    function ju(a, b, c, d, e) {
        e = e.ba;
        const f = Um(e, b),
            g = Um(e, c),
            h = Um(e, d);
        return !Eb(a, k => Gl(k, g) || Gl(k, f) && !Gl(k, h))
    }

    function ku(a, b, c, d) {
        const e = fu(a);
        if (iu(e, b, d.ba)) return !0;
        if (!ju(e, b, c.pe, c.mb, d)) return !1;
        const f = new wt(Um(d.ba, 0), 1);
        a = Bb(a.v, g => ut(g, f, c.mb));
        b = Db(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.me ? !1 : !0
    };
    var lu = (a, b) => {
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

    function mu(a, b) {
        const c = new un,
            d = new gm;
        b.forEach(e => {
            if (Dd(e, $n, 1, co)) {
                e = Dd(e, $n, 1, co);
                if (E(e, Zn, 1) && E(e, Zn, 1).X() && E(e, Zn, 2) && E(e, Zn, 2).X()) {
                    const g = nu(a, E(e, Zn, 1).X()),
                        h = nu(a, E(e, Zn, 2).X());
                    if (g && h)
                        for (var f of lu({
                                anchor: g,
                                position: v(E(e, Zn, 1), 2)
                            }, {
                                anchor: h,
                                position: v(E(e, Zn, 2), 2)
                            })) c.set(va(f.anchor), f.position)
                }
                E(e, Zn, 3) && E(e, Zn, 3).X() && (f = nu(a, E(e, Zn, 3).X())) && c.set(va(f), v(E(e, Zn, 3), 2))
            } else Dd(e, ao, 2, co) ? ou(a, Dd(e, ao, 2, co), c) : Dd(e, Yn, 3, co) && pu(a, Dd(e, Yn, 3, co), d)
        });
        return new qu(c, d)
    }
    class qu {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const ou = (a, b, c) => {
            E(b, Zn, 2) ? (b = E(b, Zn, 2), (a = nu(a, b.X())) && c.set(va(a), v(b, 2))) : E(b, xn, 1) && (a = ru(a, E(b, xn, 1))) && a.forEach(d => {
                d = va(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        pu = (a, b, c) => {
            E(b, xn, 1) && (a = ru(a, E(b, xn, 1))) && a.forEach(d => {
                c.add(va(d))
            })
        },
        nu = (a, b) => (a = ru(a, b)) && 0 < a.length ? a[0] : null,
        ru = (a, b) => (b = Or(b)) ? b.query(a) : null;

    function su(a, b, c) {
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
            if (tu(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function uu(a) {
        a = vu(a);
        return a.has("all") || a.has("after")
    }

    function wu(a) {
        a = vu(a);
        return a.has("all") || a.has("before")
    }

    function vu(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function tu(a) {
        const b = vu(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var xu = class {
        constructor() {
            this.j = new Set
        }
    };

    function yu(a) {
        return function(b) {
            return Ys(b, a)
        }
    }

    function zu(a) {
        const b = P(a).clientHeight;
        return b ? Da(Au, b + Wl(a)) : ce
    }

    function Bu(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return ce;
        const d = fu(c || Ht(b));
        return e => iu(d, a, e.ba)
    }

    function Cu(a, b, c, d) {
        if (0 > a || 0 > b.pe || 0 > b.me || 0 > b.mb) throw Error("ama::ead:nd");
        return Infinity === a ? ce : e => ku(d || Ht(c, b.mb), a, b, e)
    }

    function Du(a) {
        if (!a.length) return ce;
        const b = new mn(a);
        return c => b.contains(c.Xa)
    }

    function Eu(a) {
        return function(b) {
            for (let c of b.kc)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Fu(a) {
        return a.length ? function(b) {
            const c = b.kc;
            return a.some(d => -1 < c.indexOf(d))
        } : ee
    }

    function Gu(a, b) {
        if (0 >= a) return ee;
        const c = P(b).scrollHeight - a;
        return function(d) {
            return d.ba.j <= c
        }
    }

    function Hu(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[v(c.vc, 2) || 0]
        }
    }

    function Iu(a) {
        return a.length ? b => a.includes(v(b.vc, 1) || 0) : ee
    }

    function Ju(a, b) {
        const c = mu(a, b);
        return function(d) {
            var e = d.X();
            d = Ur[d.U.j()];
            var f = va(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(va(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(va(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Ku() {
        const a = new xu;
        return function(b) {
            var c = b.X();
            b = Ur[b.U.j()];
            a: switch (b) {
                case 1:
                    var d = uu(c.previousElementSibling) || wu(c);
                    break a;
                case 4:
                    d = uu(c) || wu(c.nextElementSibling);
                    break a;
                case 2:
                    d = wu(c.firstElementChild);
                    break a;
                case 3:
                    d = uu(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || su(a, c, b))
        }
    }
    const Au = (a, b) => b.ba.j >= a,
        Lu = (a, b, c) => {
            c = c.ba.l;
            return a <= c && c <= b
        };
    var Mu = class {
        constructor(a, b) {
            this.m = a;
            this.l = b
        }
        j() {
            const a = zu(this.m);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var Nu = class {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            var a = new Jo;
            var b = E(this.m.l, xn, 1);
            a = pd(a, 1, b);
            a = x(a, 2, 2);
            a = x(a, 8, 1);
            a = ss([a], this.l);
            return Ys(a, this.l)[0] || null
        }
    };
    var Ou = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        Pu = a => {
            const b = P(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        };

    function Qu(a, b) {
        if (!b) return !1;
        const c = va(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = Qu(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function Ru(a, b) {
        return Eb(b.ob, c => Qu(a, c))
    }
    class Su {
        constructor(a) {
            this.j = new fm;
            this.l = a
        }
    };
    class Tu {
        constructor(a, b) {
            this.v = a;
            this.j = [];
            this.l = [];
            this.m = b
        }
    };
    var Vu = (a, {
            Ok: b = !1,
            Pk: c = S(wp) ? 2 : 3,
            yg: d = null
        } = {}) => {
            a = Ws(a);
            return Uu(a, b, c, d)
        },
        Uu = (a, b = !1, c = S(wp) ? 2 : 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(Us);
            a = [];
            b = new Tu(b, d);
            for (const l of e) {
                d = b;
                e = {
                    sc: l,
                    dc: 51 > l.v.length ? !1 : null != d.m ? !Ru(d.m, l) : !0
                };
                if (d.v || e.dc) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].sc;
                        b: {
                            var g = f.P();
                            var h = f.ob[f.ob.length - 1];f = e.sc.ob[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var k = h.parentElement;
                            const m = f.parentElement;
                            if (k && m && k == m) {
                                k = 0;
                                for (h =
                                    h.nextSibling; 10 > k && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (Ls(g, h)) break;
                                    h = h.nextSibling;
                                    k++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.dc && d.l.push(e.sc)) : (d.j = [e], d.l = e.dc ? [e.sc] : [])
                }
                if (b.l.length >= c) {
                    d = b;
                    e = S(wp) ? 0 : 1;
                    if (0 > e || e >= d.l.length) d = null;
                    else {
                        for (e = d.l[e]; d.j.length && !d.j[0].dc;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var Xu = (a, b) => {
            a = Wu(a, b);
            const c = new Su(b);
            return fn(a, d => Vu(d, {
                yg: c
            }))
        },
        Wu = (a, b) => {
            const c = new fm;
            a.forEach(d => {
                var e = Or(E(d, xn, 1));
                if (e) {
                    const f = e.toString();
                    bm(c, f) || c.set(f, {
                        articleStructure: d,
                        Ze: e,
                        Tb: null,
                        Vd: !1
                    });
                    e = c.get(f);
                    (d = (d = E(d, xn, 2)) ? v(d, 7) : null) ? e.Tb = e.Tb ? e.Tb + "," + d : d: e.Vd = !0
                }
            });
            return em(c).map(d => {
                const e = d.Ze.query(b.document);
                return e.length ? new Xs(e[0], d, b) : null
            }).filter(d => null != d)
        };
    var Yu = (a, b) => {
        b = Wu(b, a);
        const c = b.map(d => d.j);
        b = b.filter(d => {
            d = d.j.getBoundingClientRect();
            return 0 < d.width && 0 < d.height
        }).filter(d => Ou(c)(d.j)).filter(d => Pu(a)(d.j));
        b.sort((d, e) => {
            e = e.j;
            return d.j.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };
    var $u = (a, b, c) => {
        if (B(c, 2)) {
            if (a.document.getElementById("google-auto-placed-read-aloud-player-reserved")) {
                var d = new Jo;
                var e = new xn;
                e = x(e, 7, "div#google-auto-placed-read-aloud-player-reserved");
                d = pd(d, 1, e);
                d = x(d, 2, 2);
                d = x(d, 8, 1);
                d = ss([d], a);
                d = Ys(d, a)[0] || null
            } else d = null;
            if (d) return d
        }
        a: {
            c = Zu(c);b = Yu(a, b);
            for (const f of b) {
                b: switch (b = a, d = f, e = c, e) {
                    case 1:
                        b = new Nu(b, d);
                        break b;
                    case 2:
                        b = new ct($s(b, d));
                        break b;
                    case 3:
                        b = new Mu(b, $s(b, d));
                        break b;
                    default:
                        throw Error(`Unknown position: ${e}`);
                }
                if (b = b.j()) {
                    a =
                        b;
                    break a
                }
            }
            a = null
        }
        return a
    };

    function Zu(a) {
        if (B(a, 2)) return 3;
        switch (Cd(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                throw Error(`Unknown player position: ${Cd(a,1)}`);
        }
    };
    var av = class {
            constructor(a) {
                this.j = a
            }
        },
        dv = (a, b, c, d, e) => {
            if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return pn("Player already created");
            var f = a.document;
            const g = f.createElement("div");
            g.id = "google-auto-placed-read-aloud-player";
            M(g, {
                padding: "5px"
            });
            const h = f.createElement("script");
            var k = Zh `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`;
            h.textContent = Be(k);
            Hf(h);
            g.appendChild(h);
            bv(f, g, ae("https://www.google-analytics.com/analytics.js"));
            bv(f, g, ae("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
            f = f.createElement("google-read-aloud-player");
            f.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
            f.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
            f.setAttribute("data-url", c.url);
            f.setAttribute("data-locale", d);
            f.setAttribute("data-no-settings-screen", "");
            e && (null != v(e, 1) && 0 != Cd(e, 1) && f.setAttribute("data-docking-begin-trigger", cv[Cd(e, 1)]), null != v(e, 2) && f.setAttribute("data-experiment",
                e.j()));
            g.appendChild(f);
            Js(b, g);
            return nn(new av(a.document.getElementsByTagName("google-read-aloud-player")[0]))
        };
    const bv = (a, b, c) => {
            a = a.createElement("script");
            If(a, Ie($d(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        cv = {
            [1]: "out-of-view"
        };
    class ev {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function fv() {
        const {
            promise: a,
            resolve: b
        } = new ev;
        return {
            promise: a,
            resolve: b
        }
    };

    function gv(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = fv();
        b[a] = d;
        c();
        return d
    }

    function hv(a, b, c) {
        return gv(a, b, () => {
            bh(b.document, c)
        }).promise
    };

    function iv(a, b, c, d) {
        a = hv(7, a, c).then(e => {
            e.init(b);
            e.handleAdConfig({
                preloadAdBreaks: null != v(d, 1, !1) && B(d, 1) ? "auto" : "on",
                sound: "on"
            });
            return e
        });
        $k.za(915, a);
        return new jv(a)
    }

    function kv(a, b) {
        a = a.j.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        });
        $k.za(956, a)
    }
    var jv = class {
        constructor(a) {
            this.j = a
        }
    };

    function lv(a) {
        const b = a.m.j;
        b.addEventListener("firstplay", () => {
            if (!a.l) {
                a.l = !0;
                b.pause();
                const c = performance.now();
                kv(a.v, () => {
                    b.play();
                    ls(a.j, "preroll", {
                        Mk: performance.now() - c
                    })
                });
                ls(a.j, "play", {})
            }
        })
    }
    var mv = class {
        constructor(a, b, c) {
            this.m = a;
            this.v = b;
            this.j = c;
            this.l = !1
        }
    };

    function nv(a, b, c, d, e, f, g) {
        return 0 == d.length ? pn("No ArticleStructure found") : E(c, mo, 2) ? nn(new ov(a, b, d, c, e, f, g ? g : "en")) : pn("No AudioSenseConfig.PlacementConfig found")
    }

    function pv(a) {
        const b = $u(a.v, a.C, E(a.l, mo, 2));
        if (b) {
            var c = !!a.A.Jb && qv(a);
            c && (a.B = iv(a.v, a.F, a.A.Jb, E(a.l, lo, 3) ? .j() || new jo));
            var d = dv(a.v, b, a.A, a.G, E(a.l, no, 4) || void 0);
            null != d.j ? (a.m = d.j.value, a.m.j.addEventListener("firstview", () => {
                ls(a.j, "view", {})
            }), c && lv(new mv(a.m, a.B, a.j)), ls(a.j, "place", {
                sts: "ok",
                pp: b.ba.j
            })) : ls(a.j, "place", {
                sts: "wf"
            })
        } else ls(a.j, "place", {
            sts: "pf"
        })
    }

    function qv(a) {
        return (a = E(a.l, lo, 3)) ? G(a, io, 1).some(b => 1 === Cd(b, 1)) : !1
    }
    var ov = class {
        constructor(a, b, c, d, e, f, g) {
            this.v = a;
            this.j = new ms(a, b, d);
            this.C = c;
            this.l = d;
            this.A = e;
            this.F = f;
            this.G = g;
            this.m = this.B = null
        }
    };

    function rv(a, b, c) {
        var d = 0 === a.l ? a.j.A() : a.j.B(),
            e = a.m,
            f = P(a.win).clientHeight,
            g = a.j.v() ? .j() || 0;
        a: switch (d ? .j()) {
            case 1:
                d = "AUTO_PROSE_TOP_ANCHOR";
                break a;
            case 2:
                d = "AUTO_PROSE_BOTTOM_ANCHOR";
                break a;
            default:
                d = "UNKNOWN_POSITION"
        }
        a: switch (a.l) {
            case 0:
                a = "DESKTOP";
                break a;
            case 2:
                a = "MOBILE";
                break a;
            default:
                a = "OTHER_VIEWPORT"
        }
        is(e, ds, { ...c,
            evt: b,
            vh: f,
            eid: g,
            pos: d,
            vpt: a
        })
    }

    function sv(a, b) {
        rv(a, "place", {
            sts: b
        })
    }
    var tv = class {
        constructor(a, b, c) {
            this.win = a;
            this.m = b;
            this.j = c;
            this.l = wh()
        }
    };
    var uv = {},
        vv = {},
        wv = {},
        xv = {},
        yv = {};

    function zv() {
        throw Error("Do not instantiate directly");
    }
    zv.prototype.Nd = null;
    zv.prototype.wa = function() {
        return this.content
    };
    zv.prototype.toString = function() {
        return this.content
    };

    function Av(a) {
        if (a.Od !== uv) throw Error("Sanitized content was not of kind HTML.");
        return nf(a.toString())
    }

    function Bv() {
        zv.call(this)
    }
    Ja(Bv, zv);
    Bv.prototype.Od = uv;

    function Cv(a, b) {
        return null != a && a.Od === b
    };

    function Dv(a) {
        if (null != a) switch (a.Nd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Ev(a) {
        return Cv(a, uv) ? a : a instanceof lf ? Fv(kf(a).toString()) : a instanceof lf ? Fv(kf(a).toString()) : Fv(String(String(a)).replace(Gv, Hv), Dv(a))
    }
    var Fv = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Nd = d);
            return c
        }
    }(Bv);

    function Iv(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Jv(a) {
        return Cv(a, uv) ? String(String(a.wa()).replace(Kv, "").replace(Lv, "&lt;")).replace(Mv, Hv) : String(a).replace(Gv, Hv)
    }

    function Nv(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function Ov(a) {
        if (null == a) return " null ";
        if (Cv(a, vv)) return a.wa();
        if (a instanceof Ce || a instanceof Ce) return Be(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Pv, Qv) + "'"
        }
    }

    function V(a) {
        Cv(a, yv) ? a = Iv(a.wa()) : null == a ? a = "" : a instanceof We ? a = Iv(Ve(a)) : a instanceof We ? a = Iv(Ve(a)) : a instanceof hf ? a = Iv(gf(a)) : a instanceof hf ? a = Iv(gf(a)) : (a = String(a), a = Rv.test(a) ? a : "zSoyz");
        return a
    }
    const Sv = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Hv(a) {
        return Sv[a]
    }
    const Tv = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Qv(a) {
        return Tv[a]
    }
    const Uv = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Vv(a) {
        return Uv[a]
    }
    const Gv = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Mv = /[\x00\x22\x27\x3c\x3e]/g,
        Wv = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Xv = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Pv = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Yv = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Rv = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier|linear-gradient)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Zv =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function $v(a) {
        return String(a).replace(Yv, Vv)
    }
    const Kv = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Lv = /</g;

    function aw(a) {
        a = void 0 === a ? "white" : a;
        return Fv('<svg width="' + Jv(18) + '" height="' + Jv(18) + '" viewBox="0 0 ' + Jv(18) + " " + Jv(18) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill=' + (Cv(a, uv) ? String(String(a.wa()).replace(Kv, "").replace(Lv,
            "&lt;")).replace(Xv, Hv) : String(a).replace(Wv, Hv)) + " /></svg>")
    };
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const bw = Math.floor;
    var cw = /^xn--/,
        dw = /[\x2E\u3002\uFF0E\uFF61]/g;
    const ew = {
        Cj: "Overflow: input needs wider integers to process",
        yj: "Illegal input >= 0x80 (not a basic code point)",
        jj: "Invalid input"
    };

    function fw(a) {
        throw RangeError(ew[a]);
    }

    function gw(a, b) {
        const c = a.split("@");
        let d = "";
        1 < c.length && (d = c[0] + "@", a = c[1]);
        a = a.replace(dw, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function hw(a) {
        return gw(a, b => {
            if (cw.test(b) && 4 < b.length) {
                b = b.slice(4).toLowerCase();
                const h = [],
                    k = b.length;
                let l = 0,
                    m = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                0 > d && (d = 0);
                for (var e = 0; e < d; ++e) 128 <= b.charCodeAt(e) && fw("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
                for (d = 0 < d ? d + 1 : 0; d < k;) {
                    e = l;
                    for (let q = 1, r = 36;; r += 36) {
                        d >= k && fw("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = 10 > f - 48 ? f - 22 : 26 > f - 65 ? f - 65 : 26 > f - 97 ? f - 97 : 36;
                        (36 <= f || f > bw((2147483647 - l) / q)) && fw("Overflow: input needs wider integers to process");
                        l += f * q;
                        var g = r <= c ? 1 : r >= c + 26 ? 26 : r - c;
                        if (f < g) break;
                        f = 36 - g;
                        q > bw(2147483647 / f) && fw("Overflow: input needs wider integers to process");
                        q *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = f;
                    let n = 0;
                    c = 0 == e ? bw(c / 700) : c >> 1;
                    for (c += bw(c / g); 455 < c; n += 36) c = bw(c / 35);
                    c = bw(n + 36 * c / (c + 38));
                    bw(l / f) > 2147483647 - m && fw("Overflow: input needs wider integers to process");
                    m += bw(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        })
    };

    function iw(a, b, c) {
        const d = a.Aa.contentWindow.google.search.cse.element.getElement("auto-rs-prose");
        c = {
            rsToken: c,
            afsExperimentId: a.m,
            hostName: a.host
        };
        a.C && (c.useStandardProseAdLoad = "1");
        d.execute(b, void 0, c)
    }
    var jw = class {
        constructor(a, b, c, d, e, f, g, h, k, l) {
            this.Aa = a;
            this.l = b;
            this.v = c;
            this.j = d;
            this.B = e;
            this.host = f;
            this.language = g;
            this.A = h;
            this.m = k;
            this.C = l
        }
        init() {
            this.Aa.setAttribute("id", "prose-iframe");
            this.Aa.setAttribute("width", "100%");
            this.Aa.setAttribute("height", "100%");
            var a = this.Aa,
                b = Xe({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = Ve(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = Se(a) || Te;
            var d = hw(this.host.startsWith("www.") ? this.host.slice(4) :
                this.host);
            a = this.v;
            b = this.j;
            var e = this.B,
                f = this.host;
            d = this.A.replace("${website}", d);
            var g = Fv;
            Cv(c, wv) || Cv(c, xv) ? c = $v(c) : c instanceof Oe ? c = $v(Pe(c)) : c instanceof Oe ? c = $v(Pe(c)) : c instanceof Ee ? c = $v(He(c).toString()) : c instanceof Ee ? c = $v(He(c).toString()) : (c = String(c), c = Zv.test(c) ? c.replace(Yv, Vv) : "about:invalid#zSoyz");
            a = g('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}</style><div class="prose-container"><img class="cse-favicon" src="' +
                Jv(c) + '" alt="' + Jv(f) + ' icon"><p class="cse-header"><strong>' + Ev(d) + '</strong></p><div class="gcse-search" data-gname="' + Jv(a) + '" data-adclient="' + Jv(b) + '" data-adchannel="' + Jv(e) + '" data-as_sitesearch="' + Jv(f) + '" data-personalizedAds="false"></div></div>');
            a = Av(a);
            b = {
                style: Xe({
                    margin: 0
                })
            };
            e = {
                src: Ke(ae("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.language
                })
            };
            f = {};
            d = {};
            for (h in e) Object.prototype.hasOwnProperty.call(e, h) && (d[h] = e[h]);
            for (const k in f) Object.prototype.hasOwnProperty.call(f,
                k) && (d[k] = f[k]);
            var h = rf("script", d);
            h = of ("body", b, [a, h]);
            this.Aa.srcdoc = kf(h)
        }
    };

    function kw({
        J: a,
        Zc: b,
        Xc: c,
        Kd: d,
        aa: e,
        nf: f
    }) {
        let g = 0;
        try {
            g |= a != a.top ? 512 : 0;
            const h = Math.min(a.screen.width || 0, a.screen.height || 0);
            g |= h ? 320 > h ? 8192 : 0 : 2048;
            g |= a.navigator && lw(a.navigator.userAgent) ? 1048576 : 0;
            g = b ? g | (a.innerHeight >= b ? 0 : 1024) : g | (a.innerHeight >= a.innerWidth ? 0 : 8);
            g |= Pl(a, c);
            g |= Ql(a)
        } catch {
            g |= 32
        }
        switch (d) {
            case 2:
                mw(a, e) && (g |= 16777216);
                break;
            case 1:
                nw(a, e) && (g |= 16777216)
        }
        f && ow(a, e) && (g |= 16777216);
        return g
    }

    function lw(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var mw = (a, b = null) => {
            const c = pw(0, a.innerWidth, 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), qw) + 15, 3);
            return rw(a, c, b)
        },
        nw = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), qw) + 15,
                f = pw(0, c, 3, d - e, d, 3);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return rw(a, f, b)
        };

    function ow(a, b = null) {
        return null != sw(a, b)
    }

    function sw(a, b = null) {
        var c = a.innerHeight;
        c = pw(0, a.innerWidth, 10, c - 45, c, 10);
        return tw(a, c, b)
    }

    function uw(a, b) {
        const c = b.Rf,
            d = b.Eg;
        b = pw(c, c + b.width, 10, d, d + b.height, 10);
        return tw(a, b, null)
    }

    function vw(a, b) {
        const c = a.innerWidth,
            d = a.innerHeight;
        let e = d;
        for (; e > b;) {
            var f = pw(0, c, 9, e - b, e, 9);
            f = tw(a, f);
            if (!f) return d - e;
            e = f.getBoundingClientRect().top - 1
        }
        return null
    }

    function rw(a, b, c = null) {
        return null != tw(a, b, c)
    }

    function tw(a, b, c = null) {
        for (const d of b)
            if (b = ww(a, d, c)) return b;
        return null
    }

    function ww(a, b, c = null) {
        const d = xw(a.document, b.x, b.y);
        return d ? yw(d, a, b, c) || zw(d, a, b, c) || null : null
    }

    function xw(a, b, c) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    }

    function zw(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a !== e.body; a = a.offsetParent) {
            const f = yw(a, b, c, d);
            if (f) return f
        }
        return null
    }

    function pw(a, b, c, d, e, f) {
        const g = [];
        for (let m = 0; m < f; m++)
            for (let n = 0; n < c; n++) {
                var h = g,
                    k = c - 1,
                    l = f - 1;
                h.push.call(h, {
                    x: a + (0 === k ? 0 : n / k) * (b - a),
                    y: d + (0 === l ? 0 : m / l) * (e - d)
                })
            }
        return g
    }

    function yw(a, b, c, d = null) {
        if ("fixed" !== ei(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= hi(a).width && 1 >= hi(a).height ? !0 : !1;
        d && Qi(d, "ach_evt", {
            tn: a.tagName,
            id: a.getAttribute("id") ? ? "",
            cls: a.getAttribute("class") ? ? "",
            ign: String(e),
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const qw = 90 * 1.38;
    const Aw = ["-webkit-text-fill-color"];

    function Bw(a) {
        if (Vb) {
            {
                const c = dh(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Cw(a)
                } else a = Dw()
            }
        } else a = Dw();
        return a
    }
    var Dw = () => {
        const a = {
            all: "initial"
        };
        Ab(Aw, b => {
            a[b] = "unset"
        });
        return a
    };

    function Cw(a) {
        Ab(Aw, b => {
            delete a[b]
        });
        return a
    };

    function Ew(a, b) {
        const c = a.document.createElement("div");
        M(c, Bw(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            hb: c,
            shadowRoot: a
        }
    };

    function Fw(a, b) {
        return new Gw(a, b)
    }

    function Hw(a) {
        const b = Iw(a);
        Ab(a.j.maxZIndexListeners, c => c(b))
    }

    function Iw(a) {
        a = gh(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class Jw {
        constructor(a) {
            this.j = Ll(a).floatingAdsStacking
        }
        addListener(a) {
            this.j.maxZIndexListeners.push(a);
            a(Iw(this))
        }
    }

    function Kw(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.m;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            Hw(b);
            a.j = d
        }
    }

    function Lw(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            Hw(b);
            a.j = null
        }
    }
    class Gw {
        constructor(a, b) {
            this.l = a;
            this.m = b;
            this.j = null
        }
    };

    function Mw(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? Mw(b) || a : a
    }

    function Nw(a, b) {
        return Ow(b, a.document.body).flatMap(c => Pw(c))
    }

    function Ow(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = (null == (e = c.mode && c.host ? c : null) ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function Pw(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function Qw(a) {
        null !== a.state && (a.state.yf.forEach(b => {
            b.inert = !1
        }), a.state.ig ? .focus(), a.state = null)
    }

    function Rw(a, b) {
        Qw(a);
        const c = Mw(a.win.document);
        b = Nw(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.state = {
            ig: c,
            yf: b
        }
    }
    var Sw = class {
        constructor(a) {
            this.win = a;
            this.state = null
        }
        yc() {
            Qw(this)
        }
    };

    function Tw(a, b) {
        b = Ew(a, b);
        a.document.body.appendChild(b.hb);
        return b
    }

    function Uw(a, b) {
        b = b.getElementById(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    }

    function Vw(a, b) {
        const c = new nm(b.M);
        um(b, !0, () => void Q(c, !0));
        um(b, !1, () => {
            a.setTimeout(() => {
                b.M || Q(c, !1)
            }, 700)
        });
        return pm(c)
    };

    function Ww(a) {
        const b = a.vb,
            c = a.ub,
            d = a.lb,
            e = a.Id,
            f = a.Ec,
            g = a.Ee ? 20 : 0;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            V(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + V(g) + "px; transition: transform " + V(f) + "s ease-in-out;" + (c ? "left: 0; border-top-right-radius: " + V(g) + "px; border-bottom-right-radius: " + V(g) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + V(g) + "px; border-bottom-left-radius: " + V(g) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {height: 24px;}.hd-control-button {border: none; background: none; cursor: pointer;}#hd-back-arrow-button {" +
            (c ? "float: right;" : "float: left;") + "}#hd-close-button {" + (c ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            Jv(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + Jv(d) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return Fv(a)
    };

    function Xw(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && "function" === typeof b.pushState ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new Yw(a, b);
        b.init();
        return b ? a.googNavStack = b : null
    }

    function Zw(a, b) {
        return b ? b.googNavStackId === a.m ? b : null : null
    }

    function $w(a, b) {
        for (let c = b.length - 1; 0 <= c; --c) {
            const d = 0 === c;
            a.J.requestAnimationFrame(() => void b[c].sg({
                isFinal: d
            }))
        }
    }

    function ax(a, b) {
        b = Kb(a.stack, b, (c, d) => c - d.be.googNavStackStateId);
        if (0 <= b) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class Yw extends Rk {
        constructor(a, b) {
            super();
            this.J = a;
            this.l = b;
            this.stack = [];
            this.m = 1E9 * Math.random() >>> 0;
            this.A = 0;
            this.v = c => {
                (c = Zw(this, c.state)) ? $w(this, ax(this, c.googNavStackStateId + .5)): $w(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.m,
                    googNavStackStateId: this.A++
                },
                b = new Promise(c => {
                    this.stack.push({
                        sg: c,
                        be: a
                    })
                });
            this.l.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = ax(this, a.googNavStackStateId);
                    var d;
                    if (d = 0 < c.length) {
                        d = c[0].be;
                        const e = Zw(this, this.l.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.l.go(-c.length);
                    $w(this, c)
                }
            }
        }
        init() {
            this.J.addEventListener("popstate", this.v)
        }
        j() {
            this.J.removeEventListener("popstate", this.v);
            super.j()
        }
    };

    function bx(a) {
        return (a = Xw(a)) ? new cx(a) : null
    }

    function dx(a) {
        if (!a.l) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.v.pushEvent();
            a.l = c;
            b.then(() => {
                a.l && !a.B && (a.l = null, wm(a.m))
            })
        }
    }
    var cx = class extends Rk {
        constructor(a) {
            super();
            this.v = a;
            this.m = new xm;
            this.l = null
        }
    };

    function ex(a, b, c) {
        var d = c.Mc ? null : new Sw(a);
        const e = Fw(new Jw(a), c.zIndex - 1);
        b = fx(a, b, c);
        d = new gx(a, b, d, an(a), e);
        d.init();
        (c.Wb || void 0 === c.Wb) && hx(d);
        c.Ga && ((a = bx(a)) ? ix(d, a, c.cd) : c.cd ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function hx(a) {
        a.A = b => {
            "Escape" === b.key && a.l.M && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function ix(a, b, c) {
        um(a.l, !0, () => {
            try {
                dx(b)
            } catch (d) {
                c ? .(d)
            }
        });
        um(a.l, !1, () => {
            try {
                b.l && (b.l(), b.l = null)
            } catch (d) {
                c ? .(d)
            }
        });
        (new ym(b.m)).Y(() => void a.collapse());
        Sk(a, Da(Qk, b))
    }

    function jx(a) {
        if (a.B) throw Error("Accessing domItems after disposal");
        return a.C
    }

    function kx(a) {
        a.win.setTimeout(() => {
            a.l.M && jx(a).na.focus()
        }, 500)
    }

    function lx(a) {
        const {
            bd: b,
            pf: c
        } = jx(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function mx(a) {
        um(a.m, !1, () => {
            jx(a).na.classList.add("hd-hidden")
        })
    }
    var gx = class extends Rk {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.C = b;
            this.v = c;
            this.l = new nm(!1);
            this.m = Vw(a, this.l);
            um(this.m, !0, () => {
                cn(d);
                Kw(e)
            });
            um(this.m, !1, () => {
                en(d);
                Lw(e)
            })
        }
        show({
            Rd: a = !1
        } = {}) {
            if (this.B) throw Error("Cannot show drawer after disposal");
            jx(this).na.classList.remove("hd-hidden");
            im(this.win);
            jx(this).na.classList.add("hd-revealed");
            Q(this.l, !0);
            this.v && (Rw(this.v, jx(this).Ib.hb), kx(this));
            a && um(this.m, !1, () => {
                this.va()
            })
        }
        collapse() {
            jx(this).na.classList.remove("hd-revealed");
            Q(this.l, !1);
            this.v ? .yc()
        }
        isVisible() {
            return this.m
        }
        init() {
            lx(this);
            mx(this)
        }
        j() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.C.Ib.hb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.v ? .yc();
            super.j()
        }
    };

    function fx(a, b, c) {
        const d = Tw(a, c.Nc),
            e = d.shadowRoot;
        e.appendChild(Ug(new Gg(a.document), Av(Ww({
            vb: c.vb,
            Ee: c.Ee ? ? !0,
            ub: c.ub || !1,
            lb: c.lb,
            Id: c.Id || "",
            zIndex: c.zIndex,
            Ec: .5
        }))));
        const f = Uw("hd-drawer-container", e);
        c.xf ? .j(g => {
            f.setAttribute("aria-label", g)
        });
        c = Uw("hd-content-container", e);
        c.appendChild(b);
        im(a);
        return {
            na: f,
            bd: Uw("hd-modal-background", e),
            Jc: c,
            pf: Uw("hd-close-button", e),
            Kk: Uw("hd-back-arrow-button", e),
            Ib: d
        }
    };

    function nx(a) {
        const b = a.dg,
            c = a.Gf,
            d = a.Ec;
        return Fv("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            V(c) + "%; transition: transform " + V(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + V(20) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            V(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + V((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            V(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + V(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + V(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            V(20) + "px " + V(20) + "px 0 0; background: white; display: flex; height: " + V(30) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            ox("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + ox("ved-fixed-handle") + "</div></div></div>")
    }

    function ox(a) {
        return Fv('<div class="ved-handle" id="' + Jv(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function px(a) {
        return Mm(a.j).map(b => b ? qx(a, b) : 0)
    }

    function qx(a, b) {
        switch (a.direction) {
            case 0:
                return rx(-b.Pe);
            case 1:
                return rx(-b.Oe);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function sx(a) {
        return Om(a.j).map(b => qx(a, b))
    }
    var tx = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function rx(a) {
        return 0 === a ? 0 : a
    };

    function X(a) {
        if (a.B) throw Error("Accessing domItems after disposal");
        return a.C
    }

    function ux(a) {
        a.win.setTimeout(() => {
            a.l.M && X(a).na.focus()
        }, 500)
    }

    function vx(a) {
        X(a).na.classList.remove("ved-hidden");
        im(a.win);
        const {
            ca: b,
            Ca: c
        } = X(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || wx(a);
        X(a).na.classList.add("ved-revealed");
        Q(a.l, !0);
        a.m && (Rw(a.m, X(a).Ib.hb), ux(a))
    }

    function xx(a) {
        return Vw(a.win, a.l)
    }

    function yx(a, b) {
        const c = new nm(b());
        (new ym(a.H)).Y(() => void Q(c, b()));
        return pm(c)
    }

    function zx(a) {
        const {
            ca: b,
            oc: c
        } = X(a);
        return yx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function Ax(a) {
        const {
            ca: b,
            oc: c
        } = X(a);
        return yx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function Bx(a) {
        const {
            ca: b
        } = X(a);
        return yx(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function Cx(a) {
        return qm(zx(a), Bx(a))
    }

    function Dx(a) {
        const {
            ca: b,
            Ca: c
        } = X(a);
        return yx(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function wx(a) {
        X(a).Ca.classList.add("ved-snap-point-top");
        var b = Ex(a, X(a).Ca);
        X(a).ca.scrollTop = b;
        Fx(a)
    }

    function Gx(a) {
        sm(zx(a), !0, () => {
            const {
                Wd: b,
                Gb: c
            } = X(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        sm(zx(a), !1, () => {
            const {
                Wd: b,
                Gb: c
            } = X(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function Hx(a) {
        const b = Qm(a.win, X(a).Jc);
        Tm(b).j(() => void Ix(a));
        Sk(a, Da(Qk, b))
    }

    function Jx(a) {
        sm(Kx(a), !0, () => {
            X(a).xe.classList.remove("ved-hidden")
        });
        sm(Kx(a), !1, () => {
            X(a).xe.classList.add("ved-hidden")
        })
    }

    function Lx(a) {
        const b = () => void wm(a.F),
            {
                bd: c,
                Ca: d,
                Ff: e
            } = X(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        um(Mx(a), !0, b)
    }

    function Nx(a) {
        um(xx(a), !1, () => {
            wx(a);
            X(a).na.classList.add("ved-hidden")
        })
    }

    function Fx(a) {
        tm(a.v, () => void wm(a.H))
    }

    function Ix(a) {
        if (!a.v.M) {
            var {
                Pd: b,
                Jc: c
            } = X(a), d = c.getBoundingClientRect().height;
            d = Math.max(Ox(a), d);
            Q(a.v, !0);
            var e = Px(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    Q(a.v, !1)
                })
            })
        }
    }

    function Kx(a) {
        const {
            ca: b,
            Ca: c
        } = X(a);
        return yx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function Mx(a) {
        return om(a.A.map(vn), Qx(a))
    }

    function Qx(a) {
        return yx(a, () => 0 === X(a).ca.scrollTop)
    }

    function Ex(a, b) {
        ({
            Gb: a
        } = X(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function Rx(a, b) {
        Q(a.A, !0);
        const {
            Gb: c,
            ca: d
        } = X(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void Sx(a, b)
    }

    function Sx(a, b) {
        const {
            Gb: c,
            ca: d
        } = X(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        X(a).ca.scrollTop = b;
        Fx(a);
        Q(a.A, !1)
    }

    function Px(a) {
        const b = X(a).ca.scrollTop;
        Rx(a, b);
        return () => void Sx(a, b)
    }

    function Ox(a) {
        const {
            ca: b,
            oc: c,
            Pd: d,
            Ca: e
        } = X(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var Tx = class extends Rk {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.C = b;
            this.I = c;
            this.m = d;
            this.F = new xm;
            this.H = new xm;
            this.l = new nm(!1);
            this.A = new nm(!1);
            this.v = new nm(!1)
        }
        init() {
            wx(this);
            Gx(this);
            Hx(this);
            Jx(this);
            Lx(this);
            Nx(this);
            X(this).ca.addEventListener("scroll", () => void Fx(this))
        }
        j() {
            const a = this.C.Ib.hb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.m ? .yc();
            super.j()
        }
    };

    function Ux(a, b, c) {
        const d = Tw(a, c.Nc),
            e = d.shadowRoot;
        e.appendChild(Ug(new Gg(a.document), Av(nx({
            dg: 100 * c.gd,
            Gf: 100 * c.Qc,
            zIndex: c.zIndex,
            Ec: .5
        }))));
        const f = Uw("ved-drawer-container", e);
        c.xf ? .j(g => {
            f.setAttribute("aria-label", g)
        });
        c = Uw("ved-content-container", e);
        c.appendChild(b);
        im(a);
        return {
            na: f,
            bd: Uw("ved-modal-background", e),
            Le: Uw("ved-ui-revealer", e),
            ca: Uw("ved-scroller", e),
            Gb: Uw("ved-scrolled-stack", e),
            Ff: Uw("ved-fully-closed-anchor", e),
            Ca: Uw("ved-partially-extended-anchor", e),
            Pd: Uw("ved-content-sizer",
                e),
            Jc: c,
            Qk: Uw("ved-moving-handle", e),
            oc: Uw("ved-moving-handle-holder", e),
            Ef: Uw("ved-fixed-handle", e),
            Wd: Uw("ved-fixed-handle-holder", e),
            xe: Uw("ved-over-scroll-block", e),
            Ib: d
        }
    };

    function Vx(a, b, c) {
        var d = Fw(new Jw(a), c.zIndex - 1);
        b = Ux(a, b, c);
        const e = c.Mc ? null : new Sw(a);
        var f = b.Ef;
        f = new Pm(new Gm(a, f), new Dm(f));
        var g = f.j;
        g.A.addEventListener("mousedown", g.G);
        g.v.addEventListener("mouseup", g.B);
        g.v.addEventListener("mousemove", g.C, {
            passive: !1
        });
        g = f.l;
        g.l.addEventListener("touchstart", g.C);
        g.l.addEventListener("touchend", g.A);
        g.l.addEventListener("touchmove", g.B, {
            passive: !1
        });
        b = new Tx(a, b, new tx(f), e);
        b.init();
        d = new Wx(a, b, an(a), d);
        Sk(d, Da(Qk, b));
        d.init();
        c.Ga && ((a = bx(a)) ? Xx(d,
            a, c.cd) : c.cd ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function Xx(a, b, c) {
        um(a.l.l, !0, () => {
            try {
                dx(b)
            } catch (d) {
                c ? .(d)
            }
        });
        um(a.l.l, !1, () => {
            try {
                b.l && (b.l(), b.l = null)
            } catch (d) {
                c ? .(d)
            }
        });
        (new ym(b.m)).Y(() => void a.collapse());
        Sk(a, Da(Qk, b))
    }

    function Yx(a) {
        um(om(Cx(a.l), Dx(a.l)), !0, () => {
            X(a.l).Ca.classList.remove("ved-snap-point-top")
        });
        sm(Ax(a.l), !0, () => {
            X(a.l).ca.classList.add("ved-no-snap")
        });
        sm(Ax(a.l), !1, () => {
            X(a.l).ca.classList.remove("ved-no-snap")
        });
        um(Ax(a.l), !1, () => {
            var b = a.l;
            var c = X(b).oc;
            c = Rx(b, Ex(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function Zx(a) {
        const b = a.l.I;
        px(b).Y(c => {
            c = -c;
            if (0 < c) {
                const {
                    Le: d
                } = X(a.l);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                Le: c
            } = X(a.l)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        sx(b).Y(c => {
            30 < -c && a.collapse()
        })
    }
    var Wx = class extends Rk {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.l = b;
            um(xx(b), !0, () => {
                cn(c);
                Kw(d)
            });
            um(xx(b), !1, () => {
                en(c);
                Lw(d)
            })
        }
        show({
            Rd: a = !1
        } = {}) {
            if (this.B) throw Error("Cannot show drawer after disposal");
            vx(this.l);
            a && um(xx(this.l), !1, () => {
                this.va()
            })
        }
        collapse() {
            var a = this.l;
            X(a).na.classList.remove("ved-revealed");
            Q(a.l, !1);
            a.m ? .yc()
        }
        isVisible() {
            return xx(this.l)
        }
        init() {
            (new ym(this.l.F)).Y(() => {
                this.collapse()
            });
            Yx(this);
            Zx(this);
            im(this.win)
        }
    };

    function $x(a) {
        let b;
        b = a.v ? 50 : 150;
        const c = a.j.innerHeight;
        return {
            Rf: a.j.innerWidth - 16 - b,
            Eg: 1 === a.A ? .j() ? .14 * c : .98 * c,
            width: b,
            height: 50
        }
    }

    function ay(a) {
        const b = a.A ? .v() || void 0,
            c = a.A ? .A() || void 0;
        let d, e;
        1 === a.A ? .j() ? d = 14 : e = 2;
        return {
            backgroundColor: b,
            Va: c,
            se: d,
            re: e,
            vg: a.R
        }
    }

    function by(a) {
        const b = a.B.shadowRoot.querySelectorAll(".autoprose-search-button")[0];
        return b ? b : a.B.shadowRoot.querySelectorAll(".autoprose-searchbox")[0]
    }

    function cy(a) {
        a.v && um(a.C.isVisible(), !1, () => {
            a.l.contentDocument.activeElement.blur()
        })
    }

    function dy(a) {
        const b = new ResizeObserver(async d => {
                a.l.height = 0;
                await new Promise(e => a.j.requestAnimationFrame(e));
                a.l.height = d[0].target.scrollHeight
            }),
            c = () => {
                const d = a.l.contentDocument ? .documentElement;
                d ? b.observe(d) : (console.warn("iframe body missing"), setTimeout(c, 1E3))
            };
        c()
    }
    var ey = class {
        constructor(a, b, c, d, e, f, g) {
            this.j = a;
            this.v = (this.K = g) ? 500 > this.j.innerWidth : 2 === wh();
            this.I = c;
            this.B = Ew(this.j);
            this.m = d;
            this.L = e ? .j() ? .j() || "en";
            this.W = e ? .j() ? .v() || "Search results from ${website}";
            this.R = e ? .j() ? .A() || "Search";
            this.H = b.replace("ca", "partner");
            this.G = new Gg(window.document);
            this.l = this.G.createElement("IFRAME");
            this.F = new jw(this.l, e ? .G() || "", "auto-prose", this.H, "AutoProseVariant", a.location.host, this.L, this.W, f, !1);
            a = this.l;
            this.C = this.v ? Vx(this.j, a, {
                gd: .95,
                Qc: .95,
                zIndex: 2147483645,
                Ga: !0,
                Wb: !0
            }) : ex(this.j, a, {
                vb: "min(65vw, 768px)",
                lb: "",
                ub: !1,
                zIndex: 2147483645,
                Ga: !0,
                Wb: !0
            });
            this.A = this.v ? e ? .B() : e ? .A()
        }
        init() {
            var a = uw(this.j, $x(this));
            a ? .className.startsWith("adsbygoogle") ? sv(this.m, "pfeaa") : a ? sv(this.m, "pfeofe") : (this.I.appendChild(this.B.hb), this.B.shadowRoot.appendChild(Ng(document, (() => {
                if (this.v) {
                    var b = ay(this),
                        c = {
                            backgroundColor: b.backgroundColor,
                            Va: b.Va,
                            offsetTop: b.se,
                            dd: b.re,
                            zIndex: 2147483643
                        },
                        d = c.Zf,
                        e = c.dd;
                    b = c.backgroundColor;
                    var f = c.Va;
                    d = void 0 === d ? 16 : d;
                    var g = c.offsetTop;
                    e = void 0 === e ? 2 : e;
                    f = void 0 === f ? "white" : f;
                    c = c.zIndex;
                    b = "<style>.autoprose-search-button {background: " + V(void 0 === b ? "#000" : b) + "; border-radius: " + V(24) + "px;" + (g ? "top: " + V(g) + "%;" : "bottom: " + V(e) + "%;") + "border-width: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: " + V(48) + "px; position: fixed; right: " + V(d) + "px; width: 48px; z-index: " + V(c) + ';}.autoprose-search-icon {position: relative;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + aw(f) + "</div></button>";
                    b = Fv(b);
                    return Av(b)
                }
                b = ay(this);
                c = {
                    wg: b.vg,
                    backgroundColor: b.backgroundColor,
                    Va: b.Va,
                    offsetTop: b.se,
                    dd: b.re,
                    zIndex: 2147483643
                };
                d = c.Zf;
                e = c.dd;
                b = c.backgroundColor;
                f = c.Va;
                d = void 0 === d ? 16 : d;
                g = c.offsetTop;
                e = void 0 === e ? 2 : e;
                const h = c.wg;
                f = void 0 === f ? "white" : f;
                c = c.zIndex;
                b = "<style>.autoprose-search-button {align-items: center; background: " + V(void 0 === b ? "#000" : b) + "; border-radius: " + V(24) + "px; border-width: 0;" + (g ? "top: " + V(g) + "%;" : "bottom: " + V(e) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: " +
                    V(48) + "px; line-height: 1; padding: 0 20px; position: fixed; right: " + V(d) + "px; z-index: " + V(c) + ";}.autoprose-search-text {color: " + V(f) + '; font-family: Google Sans, Roboto, sans-serif; font-size: 16px; margin: 10px; user-select: none;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + aw(f) + '</div><div class="autoprose-search-text">' + Ev(h) + "</div></button>";
                b = Fv(b);
                return Av(b)
            })())), this.F.init(), (a = by(this)) ? (rv(this.m, "place", {
                sts: "ok"
            }), oe(a, "click", () => {
                rv(this.m,
                    "click", {});
                dy(this);
                this.C.show();
                const b = this.l.contentDocument.getElementsByTagName("input")[0];
                b ? b.focus({
                    preventScroll: !0
                }) : console.warn("searchbox missing")
            })) : sv(this.m, "pfmsb"), cy(this))
        }
    };

    function fy(a) {
        const b = E(a.j, to, 31) ? .v() ? .j() || 0,
            c = a.l.document,
            d = c.createElement("div");
        d.classList.add("auto-prose-wrapper");
        c.body.appendChild(d);
        (new ey(a.l, a.m, d, a.v, E(a.j, to, 31), b, E(a.j, go, 25) ? .j() || !1)).init()
    }
    var gy = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.j = c;
            this.v = new tv(a, b, E(this.j, to, 31) || new to);
            this.m = d
        }
    };

    function hy(a, b) {
        is(a.j, cs, { ...b,
            evt: "place",
            vh: P(a.win).clientHeight,
            eid: a.l.j() ? .j() || 0
        })
    }
    var iy = class {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.l = c
        }
    };
    var jy = class {
        constructor(a) {
            this.j = a
        }
        wa(a) {
            const b = a.document.createElement("div");
            M(b, Bw(a));
            M(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, Bw(a));
            M(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var ky = (a, b) => (b = E(b, Do, 6)) ? Xu(b.j(), a).map(c => Vs(c)) : [];
    var ly = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function my(a) {
        const b = a.v.createElement("SCRIPT");
        If(b, N `https://www.google.com/adsense/search/async-ads.js`);
        a.win.document.head.appendChild(b)
    }

    function ny(a) {
        (function(d, e) {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = 1 * new Date
        })(a.win, "_googCsa");
        const b = a.B.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.m,
                styleId: "5134551505",
                hl: a.language,
                fexp: a.A,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.K.bind(a),
                relatedSearchUseResultCallback: !0
            };
        a.G && (c.adLoadedCallback = a.H.bind(a));
        a.win._googCsa("relatedsearch",
            c, b)
    }
    var oy = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.win = a;
            this.B = b;
            this.language = d ? .j() || "en";
            this.I = d ? .v() || "Search results from ${website}";
            this.C = e;
            this.A = f;
            this.G = S(Hp);
            this.m = c.replace("ca", "partner");
            this.v = new Gg(a.document);
            this.j = this.v.createElement("IFRAME");
            this.l = new jw(this.j, h.l ? h.j : "9d449ff4a772956c6", "auto-rs-prose", this.m, "AutoRsVariant", a.location.host, this.language, this.I, this.A, g);
            a = this.j;
            this.F = 2 === wh() ? Vx(this.win, a, {
                gd: .95,
                Qc: .95,
                zIndex: 100001,
                Ga: !0
            }) : ex(this.win, a, {
                vb: "min(65vw, 768px)",
                lb: "",
                ub: !1,
                zIndex: 100001,
                Ga: !0
            })
        }
        init() {
            0 !== this.B.length && (this.G || (Mr(1075, () => this.l.init(), this.win), Mr(1076, () => my(this), this.win)), ny(this), hy(this.C, {
                sts: "ok"
            }))
        }
        H(a, b) {
            b ? (Mr(1075, () => this.l.init(), this.win), Mr(1076, () => my(this), this.win)) : hy(this.C, {
                sts: "pfns"
            })
        }
        K(a, b) {
            iw(this.l, a, b);
            (() => {
                const c = new ResizeObserver(async e => {
                        this.j.height = 0;
                        await new Promise(f => this.win.requestAnimationFrame(f));
                        this.j.height = e[0].target.scrollHeight
                    }),
                    d = () => {
                        const e = this.j.contentDocument ? .documentElement;
                        e ?
                            c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                    };
                d();
                this.F.show()
            })()
        }
    };

    function py(a) {
        const b = Bs(a.m.U),
            c = a.A.wa(a.B, () => a.remove());
        b.appendChild(c);
        a.v && (b.className = a.v);
        return {
            wf: b,
            rf: c
        }
    }
    class qy {
        constructor(a, b, c, d) {
            this.B = a;
            this.m = b;
            this.A = c;
            this.v = d || null;
            this.j = null;
            this.l = new nm(null)
        }
        init() {
            const a = py(this);
            this.j = a.wf;
            Js(this.m, this.j);
            Q(this.l, a.rf)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            Q(this.l, null)
        }
        C() {
            return this.l
        }
    };

    function ry(a) {
        var b = ky(a.l, a.j);
        b = sy(a.l, b, a.T, a.A, a.m);
        const c = ty(b, a.l),
            d = $o(a.j) ? .j() ? .j() || $o(a.j) ? .v() || 0,
            e = $o(a.j) ? .G() || !1,
            f = uy(a.j);
        E(a.j, go, 25) ? .j() || Mr(1074, () => (new oy(a.l, c, a.v, $o(a.j) ? .B(), a.m, d, e, f)).init(), a.l)
    }
    async function vy(a) {
        await new Promise(b => {
            setTimeout(() => {
                b(ry(a))
            })
        })
    }
    var wy = class {
        constructor(a, b, c, d, e, f) {
            this.l = a;
            this.j = c;
            this.m = new iy(a, b, $o(this.j) || new uo);
            this.v = d;
            this.T = e;
            this.A = f
        }
    };

    function xy(a, b, c) {
        c = c ? G(c, bo, 5) : [];
        const d = Ju(a.document, c),
            e = Ku();
        return b.filter(f => !(e(f) || d(f)))
    }

    function sy(a, b, c, d, e) {
        b = Ys(b, a).sort(yy);
        return 0 == b.length ? (hy(e, {
            sts: "pfno"
        }), []) : d && (b = xy(a, b, c), 0 == b.length) ? (hy(e, {
            sts: "pffa"
        }), []) : [b[Math.floor(b.length / 2)]]
    }

    function yy(a, b) {
        return a.ba.j - b.ba.j
    }

    function ty(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d],
                f = "autors-container-" + d,
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            (new qy(b, e, new jy(g))).init();
            c.push(f)
        }
        return c
    }

    function uy(a) {
        const b = $o(a) ? .F() || !1;
        a = $o(a) ? .A() || "";
        return new ly(b, a)
    };
    var zy = {
            Mh: "google_ads_preview",
            vi: "google_mc_lab",
            Li: "google_anchor_debug",
            Ki: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            gj: "google_scr_debug",
            ij: "google_ia_debug_allow_onclick",
            Ej: "googleads",
            Re: "google_pedestal_debug",
            Xj: "google_responsive_slot_preview",
            Wj: "google_responsive_dummy_ad",
            Eh: "google_audio_sense",
            Fh: "google_auto_gallery",
            Hh: "google_auto_storify_swipeable",
            Gh: "google_auto_storify_scrollable",
            Gj: "google_pga_monetization"
        },
        Ay = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var By = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        ck: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function Cy(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Dy(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Dy(a) {
        let b = "";
        fh(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function Ey() {
        var a = t.location;
        let b = !1;
        fh(zy, c => {
            Cy(a, c) && (b = !0)
        });
        return b
    }

    function Fy(a, b) {
        switch (a) {
            case 1:
                return Cy(b, "google_ia_debug");
            case 2:
                return Cy(b, "google_bottom_anchor_debug");
            case 3:
                return Cy(b, "google_anchor_debug") || Cy(b, "googleads");
            case 4:
                return Cy(b, "google_scr_debug")
        }
    };
    var Gy = (a, b, c) => {
        const d = [];
        E(a, Lo, 18) && d.push(2);
        b.T && d.push(0);
        $o(a) && 1 == Cd($o(a), 1) && d.push(1);
        E(a, to, 31) && 1 == Cd(E(a, to, 31), 1) && d.push(5);
        (E(a, po, 27) && 1 == Cd(E(a, po, 27), 1) || Cy(c, "google_audio_sense")) && d.push(3);
        E(a, Oo, 29) && d.push(4);
        return d
    };

    function Hy(a, b) {
        const c = Fg(a).createElement("IMG");
        Iy(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        M(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function Jy(a, b) {
        const c = b.document.createElement("button");
        Iy(b, c);
        M(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.m();
            d.stopPropagation()
        });
        return c
    }

    function Ky(a, b, c) {
        const d = Fg(b).createElement("IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.v);
        Iy(b, d);
        M(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function Ly(a) {
        const b = a.document.createElement("ins");
        Iy(a, b);
        M(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class My {
        constructor(a, b, c) {
            this.l = a;
            this.v = b;
            this.m = c;
            this.j = new nm(!1)
        }
        wa(a, b, c, d) {
            const e = Hy(a, d),
                f = Hy(a),
                g = Jy(this, a),
                h = Ky(this, a, c);
            a = Ly(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.Y(k => {
                M(e, {
                    display: k ? "none" : "inline"
                });
                M(f, {
                    display: k ? "inline" : "none"
                });
                k ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        Zd() {
            return 40
        }
        ue() {
            Q(this.j, !1);
            return 0
        }
        we() {
            Q(this.j, !0)
        }
    }

    function Iy(a, b) {
        M(b, Bw(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Ny(a, b) {
        const c = b.document.createElement("button");
        Oy(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        M(c, b);
        c.addEventListener("click", d => {
            a.B();
            d.stopPropagation()
        });
        return c
    }

    function Py(a, b, c, d) {
        const e = b.document.createElement("div");
        M(e, Bw(b));
        M(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        M(f, Bw(b));
        M(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (M(e, {
                    "flex-direction": "row"
                }), a.j && M(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), M(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                M(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (M(e, {
                border: "0",
                "flex-direction": "column"
            }), M(f, {
                "margin-left": "0",
                "text-align": "center"
            }), M(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && M(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function Oy(a, b, c) {
        M(c, Bw(b));
        M(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.C,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class Qy {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.A = a;
            this.B = b;
            this.G = c;
            this.l = d;
            this.C = e;
            this.v = f;
            this.j = g;
            this.m = h
        }
        wa(a) {
            const b = a.document.createElement("div");
            Oy(this, a, b);
            M(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.v) {
                var c = Fg(a).createElement("IMG");
                c.src = this.v;
                Oy(this, a, c);
                M(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            Oy(this, a, c);
            M(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = Ny(this, a);
            c.appendChild(b);
            return this.m ? Py(this, a, c, this.m) : c
        }
    };
    var Ry = (a, b) => {
        b = b.filter(c => {
            var d = E(c, Gn, 4);
            return 5 == v(d, 1) && 1 == v(c, 8)
        });
        b = ss(b, a);
        a = Ys(b, a);
        a.sort((c, d) => d.ba.j - c.ba.j);
        return a[0] || null
    };

    function Sy(a) {
        if (a.G) {
            const b = Wl(a.j);
            if (b > a.l + 100 || b < a.l - 100) Ty(a), a.l = Sl(a.j)
        }
        a.F && a.j.clearTimeout(a.F);
        a.F = a.j.setTimeout(() => Uy(a), 200)
    }

    function Uy(a) {
        var b = Sl(a.j);
        a.l && a.l > b && (a.l = b);
        b = Wl(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), Vy(a))
    }

    function Wy(a) {
        a.j.removeEventListener("scroll", a.I)
    }

    function Ty(a) {
        a.G = !1;
        const b = a.A.ue();
        switch (b) {
            case 0:
                Q(a.v, a.B);
                break;
            case 1:
                a.m && (M(a.m, {
                    display: "none"
                }), Q(a.v, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function Vy(a) {
        a.m || (a.m = Xy(a));
        M(a.m, {
            display: "block"
        });
        a.G = !0;
        a.A.we();
        Q(a.v, a.B)
    }

    function Xy(a) {
        var b = vw(a.j, a.A.Zd() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        M(c, Bw(a.j));
        M(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.B = a.A.wa(a.j, () => a.remove(), () => {
            Wy(a);
            Ty(a)
        }, () => {
            Wy(a);
            Vy(a)
        });
        c.appendChild(a.B);
        a.H && (c.className = a.H);
        a.j.document.body.appendChild(c);
        return c
    }
    class Yy {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.B = null;
            this.v = new nm(null);
            this.H = c || null;
            this.m = null;
            this.G = !1;
            this.l = 0;
            this.F = null;
            this.I = () => Sy(this)
        }
        init() {
            this.j.addEventListener("scroll", this.I);
            this.l = Sl(this.j);
            Uy(this)
        }
        remove() {
            this.m && this.m.parentNode && this.m.parentNode.removeChild(this.m);
            this.m = null;
            Wy(this);
            Q(this.v, null)
        }
        C() {
            return this.v
        }
    };

    function Zy(a) {
        Q(a.B, 0);
        null != a.m && (a.m.remove(), a.m = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function $y(a) {
        a.l = new Yy(a.A, a.H, a.G);
        a.l.init();
        vm(a.v, a.l.C());
        Q(a.B, 2)
    }
    class az {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.F = b;
            this.I = c;
            this.H = d;
            this.G = e;
            this.B = new nm(0);
            this.v = new nm(null);
            this.l = this.m = this.j = null
        }
        init() {
            this.F ? (this.m = new qy(this.A, this.F, this.I, this.G), this.m.init(), vm(this.v, this.m.C()), Q(this.B, 1), null == this.j && (this.j = new $m(this.A), this.j.init(2E3)), this.j.addListener(() => {
                Zy(this);
                $y(this)
            })) : $y(this)
        }
        remove() {
            Zy(this);
            this.j && (this.j.va(), this.j = null)
        }
        C() {
            return this.v
        }
    };
    var bz = (a, b, c, d, e) => {
        a = new az(a, Ry(a, e), new Qy(b, d, "#FFF", "#4A4A4A", "normal"), new My(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var cz = a => a.googlefc = a.googlefc || {},
        dz = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function ez(a) {
        var b = dz(a.j);
        if (fz(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = bz(a.j, c, b, () => gz(a), a.v))
        }
    }

    function hz(a) {
        const b = cz(a.j);
        dz(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => ez(a)
        })
    }

    function gz(a) {
        Kw(a.m);
        dz(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            Lw(a.m)
        })
    }
    class iz {
        constructor(a, b, c) {
            this.j = a;
            this.m = Fw(b, 2147483643);
            this.v = c;
            this.l = null
        }
    }

    function fz(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function jz(a) {
        const b = a.document.createElement("ins");
        kz(a, b);
        M(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function lz(a, b, c, d) {
        const e = Fg(a).createElement("IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        kz(a, e);
        M(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function mz(a, b) {
        const c = b.document.createElement("span");
        kz(b, c);
        M(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.v));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function nz(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.m));
        M(c, Bw(b));
        M(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function oz(a) {
        const b = a.document.createElement("div");
        M(b, Bw(a));
        M(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class pz {
        constructor(a, b, c, d) {
            this.v = a;
            this.A = b;
            this.m = c;
            this.l = d;
            this.j = new nm(!1)
        }
        wa(a, b, c, d) {
            c = jz(a);
            const e = lz(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = lz(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = mz(this, a),
                h = lz(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            M(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = nz(this, a);
            a = oz(a);
            a.appendChild(c);
            a.appendChild(k);
            this.j.Y(l => {
                M(e, {
                    display: l ? "none" : "inline"
                });
                M(f, {
                    display: l ? "inline" : "none"
                });
                l ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), M(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), M(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        Zd() {
            return 71
        }
        ue() {
            Q(this.j, !1);
            return 0
        }
        we() {
            Q(this.j, !0)
        }
    }

    function kz(a, b) {
        M(b, Bw(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function qz(a) {
        rz(a.l, b => {
            var c = a.v,
                d = b.tg,
                e = b.qf,
                f = b.cf;
            b = b.showRevocationMessage;
            (new az(c, Ry(c, a.m), new Qy(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new pz(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            Lw(a.j)
        })
    }
    class sz {
        constructor(a, b, c, d) {
            this.v = a;
            this.j = Fw(b, 2147483643);
            this.m = c;
            this.l = d
        }
    };
    var tz = a => {
        if (!a || null == v(a, 1)) return !1;
        a = v(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function uz(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            tz(a.j) && (b = new sz(a.l, a.A, a.v || G(a.j, Jo, 4), a.m), Kw(b.j), qz(b), b = !0);
            var c;
            a: if ((c = a.j) && null != v(c, 3)) switch (c = v(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (hz(new iz(a.l, a.A, a.v || G(a.j, Jo, 4))), b = !0);
            if (c = (c = a.j) ? !0 === y(c, 5) : !1) c = ((c = a.j) ? !0 === y(c, 6) : !1) || S(Qp);
            c && (b = !0);
            b && (a.m.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class vz {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.m = b;
            this.j = c;
            this.A = d;
            this.v = e || null
        }
    };
    var wz = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = ch("SCRIPT", g);
                h.async = !0;
                If(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? wz(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        xz = (a, b, c = () => {}, d = () => {}) => {
            wz(Fg(a), b, 0, !1, c, d)
        };
    var yz = (a = null) => {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    te(El).map(a => Number(a));
    te(Fl).map(a => Number(a));
    var zz = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = ch("IFRAME", c);
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
    const Az = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function Bz(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Az(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Hi({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function Cz(a) {
        return Bz(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? Dz(a, "1") : !0 : !1
    }

    function Dz(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function Ez(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => Dz(a, c))
    }

    function Fz(a) {
        if (a.l) return a.l;
        a.l = vh(a.m, "__tcfapiLocator");
        return a.l
    }

    function Gz(a) {
        return "function" === typeof a.m.__tcfapi || null != Fz(a)
    }

    function Hz(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d);
        else if (Fz(a)) {
            Iz(a);
            const e = ++a.H;
            a.C[e] = c;
            a.l && a.l.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Jz(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = ie(() => b(c));
        let e = 0; - 1 !== a.F && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        Hz(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = Az(c), c.internalBlockOnErrors = a.A, Bz(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Hz(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function Iz(a) {
        a.v || (a.v = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, oe(a.m, "message", a.v))
    }
    class Kz extends Rk {
        constructor(a, b = {}) {
            super();
            this.m = a;
            this.l = null;
            this.C = {};
            this.H = 0;
            this.F = b.Bg ? ? 500;
            this.A = b.kf ? ? !1;
            this.v = null
        }
        j() {
            this.C = {};
            this.v && (pe(this.m, "message", this.v), delete this.v);
            delete this.C;
            delete this.m;
            delete this.l;
            super.j()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = ie(() => a(b));
            let d = 0; - 1 !== this.F && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Az(b), b.internalBlockOnErrors =
                    this.A, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Hz(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Hz(this, "removeEventListener", null, a.listenerId)
        }
    };

    function rz(a, b, c) {
        const d = yz(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = yz(a.j),
                    f = new Kz(a.j);
                Gz(f) && Jz(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        tg: e.getDefaultConsentRevocationText(),
                        qf: e.getDefaultConsentRevocationCloseText(),
                        cf: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function Lz(a) {
        const b = Ke(ae("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        xz(a.j, b, () => {}, () => {})
    }
    class Mz {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            if (this.j === this.j.top) try {
                zz(this.j, "googlefcPresent"), Lz(this)
            } catch (a) {}
        }
    };
    var Nz = (a, b, c) => {
        const d = E(a, Do, 6);
        if (!d) return [];
        c = Xu(d.j(), c);
        return (a = a.j()) && y(a, 11) ? c.map(e => Vs(e)) : c.map(e => {
            const f = Fn();
            return new ts(new Ps(e.zc, e.Ac), new Ns, new Os(b), !0, 2, [], f, e.l, null, null, null, e.m, e.j)
        })
    };
    var Oz = class extends L {
        constructor(a) {
            super(a)
        }
        getHeight() {
            return vd(this, 2)
        }
    };

    function Pz(a, b) {
        return x(a, 1, b)
    }

    function Qz(a, b) {
        return td(a, 2, b)
    }
    var Sz = class extends L {
            constructor(a) {
                super(a, -1, Rz)
            }
        },
        Rz = [2];
    var Uz = class extends L {
            constructor() {
                super(void 0, -1, Tz)
            }
        },
        Tz = [5];
    var Vz = class extends L {
            constructor() {
                super()
            }
        },
        Wz = [1, 2];

    function Xz(a) {
        return new In(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class Yz {
        j(a) {
            return Xz(Math.floor(a.l))
        }
    };

    function Zz(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        a = Ll(a) ? .tagSpecificState[1];
        (a = null == a ? null : 4 === a.debugCard ? .getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    var $z = class extends L {
        constructor() {
            super()
        }
    };

    function aA(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.Bc = c;
                a.m = !!b.adTest;
                c = b.pubVars;
                ua(c) && (a.D = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.B = {};
                    for (d of b.fillMessage) a.B[d.key] = d.value
                }
                a.v = b.adWidth;
                a.l = b.adHeight;
                ni(a.v) && ni(a.l) || jl("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.G(b)
    }
    class bA {
        constructor() {
            this.B = this.D = this.m = this.Bc = null;
            this.l = this.v = 0
        }
        G() {
            return !0
        }
    };

    function cA(a, b = []) {
        const c = Date.now();
        return Bb(b, d => c - d < 1E3 * a)
    }

    function dA(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Eb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = cA(b, d);
            d.length || a ? .removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function eA(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : dA(a, b)
    };
    var fA = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= Ql(a);
            d |= Pl(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = eA(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            S(zq) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class gA extends bA {
        constructor() {
            super();
            this.A = !1;
            this.j = null;
            this.C = !1
        }
        G(a) {
            this.A = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = bp(b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.C = !0);
            return !0
        }
    };
    const hA = {};

    function iA(a, b, c) {
        let d = jA(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.B.l;
        for (; d.Db && d.Db.length;) {
            const h = d.Db.shift();
            var g = Cs(h.U);
            const k = h.ba.j,
                l = !!c.m.qd || !!c.m.xd || c.Ba() || !!c.m.Qd || k > e;
            g = !g || g <= d.Pb;
            if (l && g && kA(c, h, {
                    lc: d.Pb
                })) {
                e = k;
                if (d.Ob.j.length + 1 >= f) return !0;
                d = jA(a, c, b);
                if (!d) return !0
            }
        }
        return c.v
    }
    const jA = (a, b, c) => {
        var d = b.B.l,
            e = b.B.v,
            f = b.B;
        f = Ht(b.P(), f.j ? f.j.mb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = P(f.m).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - gu(f)) : e = void 0;
        a = null == e || 50 <= e ? lA(b, f, {
            types: a
        }, c) : null;
        return {
            Ob: f,
            Pb: e,
            Db: a
        }
    };
    hA[2] = Da(function(a, b) {
        a = lA(b, Ht(b.P()), {
            types: a,
            Pa: qt(b.P())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (kA(b, a[c])) return !0;
        return b.v ? (b.A.push(11), !0) : !1
    }, [0]);
    hA[5] = Da(iA, [0], 5);
    hA[10] = Da(function(a, b) {
        a = [];
        const c = b.ja;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !S(zp) && a.push(1);
        return iA(a, 10, b)
    }, 10);
    hA[3] = function(a) {
        if (!a.v) return !1;
        var b = lA(a, Ht(a.P()), {
            types: [0],
            Pa: qt(a.P())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (kA(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const mA = a => {
            var b;
            a.m.Me ? b = new mt(0, null, [], 3, null) : b = qt(a.P());
            return {
                types: [0],
                Pa: b
            }
        },
        oA = a => {
            const b = a.P().document.body.getBoundingClientRect().width;
            nA(a, Xz(b))
        },
        qA = (a, b) => {
            var c = mA(a);
            c.qg = [5];
            c = lA(a, Ht(a.P()), c, 8);
            pA(a, c.reverse(), b)
        },
        pA = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.ba), kA(a, d, {
                        Cc: b
                    })) return !0;
            return !1
        };
    hA[8] = function(a) {
        var b = a.P().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => hA[8](a), {
            once: !0
        }), !0;
        if (!a.v) return !1;
        if (!a.ic()) return !0;
        b = mA(a);
        b.nd = [2, 4, 5];
        b = lA(a, Ht(a.P()), b, 8);
        const c = new Yz;
        if (pA(a, b, c)) return !0;
        if (a.m.Td) switch (a.m.ye || 0) {
            case 1:
                qA(a, c);
                break;
            default:
                oA(a)
        }
        return !0
    };
    hA[6] = Da(iA, [2], 6);
    hA[7] = Da(iA, [1], 7);
    hA[9] = function(a) {
        const b = jA([0, 2], a, 9);
        if (!b || !b.Db) return a.A.push(17), Zz(a.P()), a.v;
        for (const e of b.Db) {
            var c = e;
            var d = a.m.Pc || null;
            null == d ? c = null : (d = Ds(c.U, new rA, new sA(d, a.P())), c = new Ks(d, c.X(), c.ba));
            if (c && !(Cs(c.U) > b.Pb) && kA(a, c, {
                    lc: b.Pb,
                    Ic: !0
                })) return a = c.U.R, As(e.U, 0 < a.length ? a[0] : null), !0
        }
        a.A.push(17);
        Zz(a.P());
        return a.v
    };
    class rA {
        l(a, b, c, d) {
            return Er(d.document, a, b)
        }
        m(a) {
            return P(a).clientHeight || 0
        }
    };
    var tA = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Ob = c
        }
        ea(a) {
            return this.j ? Cu(this.l, this.j, a, this.Ob) : Bu(this.l, a, this.Ob)
        }
        ga() {
            return this.j ? 16 : 9
        }
    };
    var uA = class {
        constructor(a) {
            this.Dc = a
        }
        ea(a) {
            return Ju(a.document, this.Dc)
        }
        ga() {
            return 11
        }
    };
    var vA = class {
        constructor(a) {
            this.cb = a
        }
        ea(a) {
            return Gu(this.cb, a)
        }
        ga() {
            return 13
        }
    };
    var wA = class {
        ea(a) {
            return zu(a)
        }
        ga() {
            return 12
        }
    };
    var xA = class {
        constructor(a) {
            this.tb = a
        }
        ea() {
            return Eu(this.tb)
        }
        ga() {
            return 2
        }
    };
    var yA = class {
        constructor(a) {
            this.j = a
        }
        ea() {
            return Hu(this.j)
        }
        ga() {
            return 3
        }
    };
    var zA = class {
        ea() {
            return Ku()
        }
        ga() {
            return 17
        }
    };
    var AA = class {
        constructor(a) {
            this.j = a
        }
        ea() {
            return Du(this.j)
        }
        ga() {
            return 1
        }
    };
    var BA = class {
        ea() {
            return ge(us)
        }
        ga() {
            return 7
        }
    };
    var CA = class {
        constructor(a) {
            this.nd = a
        }
        ea() {
            return Fu(this.nd)
        }
        ga() {
            return 6
        }
    };
    var DA = class {
        constructor(a) {
            this.j = a
        }
        ea() {
            return Iu(this.j)
        }
        ga() {
            return 5
        }
    };
    var EA = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        ea() {
            return Da(Lu, this.minWidth, this.maxWidth)
        }
        ga() {
            return 10
        }
    };
    var FA = class {
        constructor(a) {
            this.v = a.l.slice(0);
            this.l = a.j.slice(0);
            this.m = a.m;
            this.A = a.v;
            this.j = a.A
        }
    };

    function GA(a) {
        var b = new HA;
        b.A = a;
        b.l.push(new AA(a));
        return b
    }

    function IA(a, b) {
        a.l.push(new CA(b));
        return a
    }

    function JA(a, b) {
        a.l.push(new xA(b));
        return a
    }

    function KA(a, b) {
        a.l.push(new DA(b));
        return a
    }

    function LA(a, b) {
        a.l.push(new yA(b));
        return a
    }

    function MA(a) {
        a.l.push(new BA);
        return a
    }

    function NA(a) {
        a.j.push(new wA);
        return a
    }

    function OA(a, b = 0, c, d) {
        a.j.push(new tA(b, c, d));
        return a
    }

    function PA(a, b = 0, c = Infinity) {
        a.j.push(new EA(b, c));
        return a
    }

    function QA(a) {
        a.j.push(new zA);
        return a
    }

    function RA(a, b = 0) {
        a.j.push(new vA(b));
        return a
    }

    function SA(a, b) {
        a.m = b;
        return a
    }
    var HA = class {
        constructor() {
            this.m = 0;
            this.v = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new FA(this)
        }
    };
    class sA {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            var a = this.l,
                b = this.m;
            const c = a.D || {};
            c.google_ad_client = a.Bc;
            c.google_ad_height = P(b).clientHeight || 0;
            c.google_ad_width = P(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new $z;
            x(b, 1, a.A);
            a.j && pd(b, 2, a.j);
            a.C && x(b, 3, !0);
            c.google_rasc = Qd(b);
            a.m && (c.google_adtest = "on");
            return new In(["fsi_container"], c)
        }
    };
    var TA = Bn(new yn(0, {})),
        UA = Bn(new yn(1, {})),
        VA = a => a === TA || a === UA;

    function WA(a, b, c) {
        bm(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class XA {
        constructor() {
            this.j = new fm
        }
    };

    function YA(a, b) {
        b && (a.j.apv = v(b, 4), bd(b, ho, 23) && (a.j.sat = "" + zd(E(b, ho, 23), 1)));
        return a
    }

    function ZA(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class $A extends hs {
        constructor(a) {
            super(a);
            this.j = {}
        }
        G(a) {
            null != a && (this.j.allp = a);
            return this
        }
        v(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.v(a);
            we(a, this.j);
            return a
        }
    }

    function aB(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function bB(a, b) {
        a.l.op = cB(b)
    }

    function dB(a, b, c) {
        30 >= c.length ? a.l[b] = eB(c) : (a.l[b] = eB(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function fB(a, b, c) {
        dB(a, "fap", b);
        a.l.fad = cB(c)
    }

    function gB(a, b, c) {
        dB(a, "fmp", b);
        a.l.fmd = cB(c)
    }

    function hB(a, b, c) {
        dB(a, "vap", b);
        a.l.vad = cB(c)
    }

    function iB(a, b, c) {
        dB(a, "vmp", b);
        a.l.vmd = cB(c)
    }

    function jB(a, b, c) {
        dB(a, "pap", b);
        a.l.pad = cB(c)
    }

    function kB(a, b, c) {
        dB(a, "pmp", b);
        a.l.pmd = cB(c)
    }

    function lB(a, b) {
        dB(a, "psq", b)
    }
    var mB = class extends $A {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {}
        }
        v(a) {
            a = super.v(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function eB(a) {
        return a.map(b => b ? .toString() ? ? "null").join("~")
    }

    function cB(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function nB(a, b, c) {
        const d = b.U;
        bm(a.j, d) || a.j.set(d, new oB(rn(Is(b)) ? ? ""));
        c(a.j.get(d))
    }

    function pB(a, b) {
        nB(a, b, c => {
            c.j = !0
        })
    }

    function qB(a, b) {
        nB(a, b, c => {
            c.l = !0
        })
    }

    function rB(a, b) {
        nB(a, b, c => {
            c.m = !0
        });
        a.I.push(b.U)
    }

    function sB(a, b, c) {
        nB(a, b, d => {
            d.Ya = c
        })
    }

    function tB(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) VA(f.Ya ? ? "") ? ++e : (b = a.l.get(f.Ya ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            Za: e
        }
    }

    function uB(a, b) {
        bB(b, a.l.yb());
        var c = em(a.j).filter(f => 0 === (f.La.startsWith(TA) ? 0 : 1)),
            d = em(a.j).filter(f => 1 === (f.La.startsWith(TA) ? 0 : 1)),
            e = tB(a, f => f.j, c);
        fB(b, e.list, e.Za);
        e = tB(a, f => f.j, d);
        gB(b, e.list, e.Za);
        e = tB(a, f => f.l, c);
        hB(b, e.list, e.Za);
        e = tB(a, f => f.l, d);
        iB(b, e.list, e.Za);
        c = tB(a, f => f.m, c);
        jB(b, c.list, c.Za);
        d = tB(a, f => f.m, d);
        kB(b, d.list, d.Za);
        lB(b, a.I.map(f => a.j.get(f) ? .Ya).map(f => a.l.get(f) ? ? null))
    }

    function Lj() {
        var a = O(vB);
        if (!a.A) return zj();
        const b = Ij(Hj(Gj(Fj(Ej(Dj(Cj(Bj(yj(xj(new Aj, a.A ? ? []), a.H ? ? []), a.B), a.G), a.F), a.K), a.L), a.C ? ? 0), em(a.j).map(c => {
            var d = new wj;
            d = Bd(d, 1, c.La);
            var e = a.l.get(c.Ya ? ? "", -1);
            d = J(d, 2, e);
            d = Ad(d, 3, c.j);
            return Ad(d, 4, c.l)
        })), a.I.map(c => a.j.get(c) ? .Ya).map(c => a.l.get(c) ? ? null));
        null != a.m && Ad(b, 6, a.m);
        null != a.v && jd(b, 13, a.v, 0);
        return b
    }
    var vB = class {
        constructor() {
            this.v = this.H = this.A = null;
            this.F = this.G = !1;
            this.m = null;
            this.L = this.B = this.K = !1;
            this.C = null;
            this.l = new fm;
            this.j = new fm;
            this.I = []
        }
    };
    class oB {
        constructor(a) {
            this.m = this.l = this.j = !1;
            this.Ya = null;
            this.La = a
        }
    };
    class wB {
        constructor(a = 0) {
            this.j = a
        }
    };
    class xB {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function yB(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function zB(a, b) {
        const c = a.H.filter(d => dm(d.Ub).every(e => d.Ub.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.Ub.yb() > e.Ub.yb() ? d : e, c[0])
    }

    function AB(a, b) {
        b = Is(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (bm(a.m, b)) return a.m.get(b);
        var c = zn(b);
        c = zB(a, c);
        a.m.set(b, c);
        return c
    }
    var BB = class {
        constructor(a) {
            this.j = a;
            this.m = new fm;
            this.H = (E(a, Wo, 2) ? .j() || []).map(b => {
                const c = zn(K(b, 1)),
                    d = yd(b, 2);
                return {
                    Ub: c,
                    Ae: d,
                    La: K(b, 1)
                }
            });
            this.l = []
        }
        F() {
            const a = O(vB);
            var b = this.B();
            a.A = b;
            b = this.A();
            a.H = b;
            b = this.v();
            null != b && (a.v = b);
            b = !!this.j.v() ? .j() ? .j();
            a.F = b;
            b = new fm;
            for (const c of E(this.j, Wo, 2) ? .j() ? ? []) b.set(K(c, 1), yd(c, 2));
            a.l = b
        }
        C() {
            return [...this.l]
        }
        B() {
            return [...this.j.j()]
        }
        A() {
            return [...gd(this.j, 4, Vc)]
        }
        v() {
            return E(this.j, Po, 5) ? .j() ? ? null
        }
        G(a) {
            const b = AB(this, a);
            null != b ? .La && sB(O(vB),
                a, b.La)
        }
        I(a) {
            const b = T(Rp) || 0;
            if (0 == a.length || 0 == b) return !0;
            const c = (new jn(a)).filter(d => {
                d = AB(this, d) ? .La || "";
                return "" != d && !(d === TA || d === UA)
            });
            return b <= c.j.length / a.length
        }
    };

    function CB(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => (AB(a.j, c) ? .Ae ? ? Number.MAX_VALUE) - (AB(a.j, d) ? .Ae ? ? Number.MAX_VALUE))
    }

    function DB(a, b) {
        var c = b.ba.j,
            d = Math,
            e = d.min;
        const f = b.X(),
            g = b.U.j();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? yB(f.parentElement) : yB(f));
        d = a.m;
        0 > d.j && (d.j = P(d.l).scrollHeight || 0);
        d = d.j - b.ba.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.X();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function EB(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => DB(a, c) - DB(a, d))
    }

    function FB(a, b) {
        return b.sort((c, d) => {
            const e = c.U.G,
                f = d.U.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? DB(a, c) - DB(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class GB {
        constructor(a, b = 0, c = null) {
            this.m = new xB(a);
            this.l = new wB(b);
            this.j = c && new BB(c)
        }
    };

    function HB(a, b, c = 0) {
        var d = a.l;
        for (var e of b.v) d = hn(d, e.ea(a.m), IB(e.ga(), c));
        e = d = d.apply(yu(a.m));
        for (const f of b.l) e = hn(e, f.ea(a.m), JB(f.ga(), c));
        switch (b.m) {
            case 1:
                e = EB(a.j, e);
                break;
            case 2:
                e = FB(a.j, e);
                break;
            case 3:
                const f = O(vB);
                e = CB(a.j, e);
                d.forEach(g => {
                    pB(f, g);
                    a.j.j ? .G(g)
                });
                e.forEach(g => qB(f, g))
        }
        b.A && (e = ln(e, Cg(a.m.location.href + a.m.localStorage.google_experiment_mod)));
        1 === b.j ? .length && WA(a.v, b.j[0], {
            ef: d.j.length,
            Hg: e.j.length
        });
        return kn(e)
    }
    class KB {
        constructor(a, b, c = 0, d = null) {
            this.l = new jn(a);
            this.j = new GB(b, c, d);
            this.m = b;
            this.v = new XA
        }
        A() {
            this.l.forEach(a => {
                a.l && dr(a.l);
                a.l = null
            })
        }
    }
    const IB = (a, b) => c => zs(c, b, a),
        JB = (a, b) => c => zs(c.U, b, a);

    function LB(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = MB(NB(c), a);
                    break a;
                case 3:
                    a = MB(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = MB(e ? 1 == e.nodeType ? e : NB(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !OB(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !lp(b) && 0 >= b.offsetWidth);
        return d
    }

    function MB(a, b) {
        if (!a) return !1;
        a = dh(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function NB(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function OB(a) {
        return !!a.nextSibling || !!a.parentNode && OB(a.parentNode)
    };
    var PB = !Tb && !vb();

    function QB(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (PB && a.dataset) {
            if (xb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var RB = (a, b, c) => {
            if (!b) return null;
            const d = Mg(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = P(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        SB = a => {
            const b = a.document.body;
            var c = RB(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 < d.length;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = k);
                    if (5 > h.depth)
                        for (let l = 0; l < k.children.length; l++) {
                            const m = k.children[l];
                            g = c;
                            const n = m.getBoundingClientRect().width;
                            (null == n || null == g ? 0 : n >= .9 * g && n <= 1.01 * g) && d.push({
                                element: m,
                                depth: h.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? RB(a, c.parentNode || b, c) : null
        },
        UB = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Vg() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
                    (b |= 32768), TB(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        TB = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == QB(a[b])) return !0;
            return !1
        };

    function VB(a) {
        const b = Rl(a, !0),
            c = P(a).scrollWidth,
            d = P(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Wl(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            w = 0,
            C = Infinity,
            z = Infinity,
            A = null;
        var I = Dt({
            Wa: !1
        }, a);
        for (var D of I) {
            I = D.getBoundingClientRect();
            const U = b - (I.bottom + f);
            var F = void 0,
                H = void 0;
            if (D.className && $a(D.className, "adsbygoogle-ablated-ad-slot")) {
                F = D.getAttribute("google_element_uid");
                H = a.google_sv_map;
                if (!F || !H || !H[F]) continue;
                F = (H = zi(H[F])) ? H.height : 0;
                H = H ? H.width : 0
            } else if (F = I.bottom - I.top, H = I.right - I.left, 1 >= F || 1 >= H) continue;
            g.push(F);
            k.push(H);
            l.push(F * H);
            D.className && $a(D.className, "google-auto-placed") ? (w += 1, D.className && $a(D.className, "pedestal_container") && (A = F)) : (C = Math.min(C, U), n.push(I), r += 1, h.push(F), m.push(F * H));
            z = Math.min(z, U);
            q.push(I)
        }
        C = Infinity === C ? null : C;
        z = Infinity === z ? null : z;
        f = WB(n);
        q = WB(q);
        h = XB(b, h);
        n = XB(b, g);
        m = XB(b * c, m);
        D = XB(b * c, l);
        return new YB(a, {
            vf: e,
            ed: b,
            cg: c,
            bg: d,
            Tf: r,
            df: w,
            gf: ZB(g),
            hf: ZB(k),
            ff: ZB(l),
            Yf: f,
            Xf: q,
            Wf: C,
            Vf: z,
            Lc: h,
            Kc: n,
            Ye: m,
            Xe: D,
            eg: A
        })
    }

    function $B(a, b, c, d) {
        const e = Vg() && !(900 <= P(a.l).clientWidth);
        d = Bb(d, f => Fb(a.m, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.vf,
            pg_h: aC(a.j.ed),
            pg_w: aC(a.j.cg),
            pg_hs: aC(a.j.bg),
            c: aC(a.j.Tf),
            aa_c: aC(a.j.df),
            av_h: aC(a.j.gf),
            av_w: aC(a.j.hf),
            av_a: aC(a.j.ff),
            s: aC(a.j.Yf),
            all_s: aC(a.j.Xf),
            b: aC(a.j.Wf),
            all_b: aC(a.j.Vf),
            d: aC(a.j.Lc),
            all_d: aC(a.j.Kc),
            ard: aC(a.j.Ye),
            all_ard: aC(a.j.Xe),
            pd_h: aC(a.j.eg),
            dt: e ? "m" : "d"
        }
    }
    class YB {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.m = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function ZB(a) {
        return wg.apply(null, Bb(a, b => 0 < b)) || null
    }

    function XB(a, b) {
        return 0 >= a ? null : vg.apply(null, b) / a
    }

    function WB(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function aC(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function bC(a, b) {
        b = (P(b).clientHeight || 0) - Wl(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            eu(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function cC(a) {
        const b = {};
        var c = Ft({
            Wa: !1,
            Zb: !1,
            ac: !1,
            cc: !1
        }, a).map(d => d.getBoundingClientRect()).filter(eu);
        b.zd = c.length;
        c = Gt({
            ac: !0
        }, a).map(d => d.getBoundingClientRect()).filter(eu);
        b.Sd = c.length;
        c = Gt({
            cc: !0
        }, a).map(d => d.getBoundingClientRect()).filter(eu);
        b.qe = c.length;
        c = Gt({
            Zb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(eu);
        b.Fd = c.length;
        c = (P(a).clientHeight || 0) - Wl(a);
        c = Ft({
            Wa: !1
        }, a).map(d => d.getBoundingClientRect()).filter(eu).filter(Ca(dC, null, c));
        b.Ad = c.length;
        a = VB(a);
        c = null != a.j.Lc ? a.j.Lc :
            null;
        null != c && (b.je = c);
        a = null != a.j.Kc ? a.j.Kc : null;
        null != a && (b.Bd = a);
        return b
    }

    function kA(a, b, {
        lc: c,
        Cc: d,
        Ic: e
    } = {}) {
        return Mr(997, () => eC(a, b, {
            lc: c,
            Cc: d,
            Ic: e
        }), a.j)
    }

    function lA(a, b, c, d) {
        var e = c.Pa ? c.Pa : a.B;
        const f = rt(e, b.j.length);
        e = a.m.Cd ? e.j : void 0;
        const g = QA(RA(NA(PA(OA(MA(KA(LA(IA(JA(GA(c.types), a.R), c.nd || []), a.L), c.qg || [])), f.mc || void 0, e, b), c.minWidth, c.maxWidth)), f.cb || void 0));
        a.K && g.j.push(new uA(a.K));
        b = 1;
        a.m.xd ? b = 2 : a.Ba() && (b = 3);
        SA(g, b);
        a.m.qd && (g.v = !0);
        return Mr(995, () => HB(a.l, g.build(), d), a.j)
    }

    function nA(a, b) {
        const c = SB(a.j);
        if (c) {
            const d = Hn(a.H, b),
                e = Br(a.j.document, a.C, null, null, {}, d);
            e && (gr(e.Ta, c, 2, 256), Mr(996, () => fC(a, e, d), a.j))
        }
    }

    function gC(a) {
        return a.G ? a.G : a.G = a.j.google_ama_state
    }

    function eC(a, b, {
        lc: c,
        Cc: d,
        Ic: e
    } = {}) {
        const f = b.U;
        if (f.A) return !1;
        var g = b.X();
        if (!LB(a.j, f.j(), g, a.v)) return !1;
        var h = null;
        S(xp) && f.kc ? .includes(6) ? (g = Math.round(g.getBoundingClientRect().height), h = null == c ? g : Math.min(c, g)) : h = c;
        c = null == h ? null : new In(null, {
            google_max_responsive_height: h
        });
        g = Jn(v(f.vc, 2) || 0);
        h = Kn(f.G);
        const k = hC(a, f),
            l = iC(a),
            m = Hn(a.H, f.L ? f.L.j(b.ba) : null, c, d || null, g, h, k, l),
            n = b.fill(a.C, m);
        if (e && !jC(a, n, m) || !Mr(996, () => fC(a, n, m), a.j)) return !1;
        yl(9, [f.G, f.Xa]);
        a.Ba() && rB(O(vB), b);
        return !0
    }

    function hC(a, b) {
        return rn(tn(Gs(b).map(Ln), () => {
            a.A.push(18)
        }))
    }

    function iC(a) {
        if (!a.Ba()) return null;
        var b = a.l.j.j ? .A();
        if (null == b) return null;
        b = b.join("~");
        a = a.l.j.j ? .v() ? ? null;
        return Mn({
            sf: b,
            zf: a
        })
    }

    function jC(a, b, c) {
        if (!b) return !1;
        var d = b.ta,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.ta;
        c = c && c.zb() || {};
        if (d !== d.top) var g = ah(d) ? 3 : 16;
        else if (488 > P(d).clientWidth)
            if (d.innerHeight >= d.innerWidth)
                if (g = P(d).clientWidth, !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = P(d).clientWidth; h; h = h.parentElement) {
                            const k = dh(h, d);
                            if (!k) continue;
                            const l = oh(k.width);
                            if (l && !(l >= g) && "visible" != k.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = dh(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = P(d).clientWidth, f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.ta;
            if (f = xr(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", vr(b, f, "0px"), b.style.width = P(a).clientWidth + "px", yr(a, b, f), b.style.zIndex = 30;
            return !0
        }
        dr(b.Ta);
        return !1
    }

    function fC(a, b, c) {
        if (!b) return !1;
        try {
            Fr(a.j, b.ta, c)
        } catch (d) {
            return dr(b.Ta), a.A.push(6), !1
        }
        return !0
    }
    class kC {
        constructor(a, b, c, d, e = {}, f = []) {
            this.l = a;
            this.C = b;
            this.j = c;
            this.B = d.Pa;
            this.R = d.tb || [];
            this.H = d.Af || null;
            this.L = d.uf || [];
            this.K = d.Dc || [];
            this.m = e;
            this.v = !1;
            this.I = [];
            this.A = [];
            this.F = this.G = void 0;
            this.ja = f
        }
        W() {
            return this.l
        }
        P() {
            return this.j
        }
        ua(a) {
            this.I.push(a)
        }
        Ba() {
            if (0 == (this.l.j.j ? .B().length ? ? 0)) return !1;
            if (0 == (T(Rp) || 0)) return !0;
            if (void 0 === this.F) {
                const a = SA(NA(MA(GA([0, 1, 2]))), 1).build(),
                    b = Mr(995, () => HB(this.l, a), this.j);
                this.F = this.l.j.j ? .I(b) || !1
            }
            return this.F
        }
        Uc() {
            return !!this.m.Fe
        }
        ic() {
            return !TB(this.j)
        }
    }
    const dC = (a, b) => b.top <= a;

    function lC(a, b, c, d, e, f = 0, g = 0) {
        this.ya = a;
        this.uc = f;
        this.tc = g;
        this.errors = b;
        this.Oa = c;
        this.j = d;
        this.l = e
    };
    var mC = (a, {
        ic: b = !1,
        Uc: c = !1,
        ug: d = !1,
        Ba: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !S(zp);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !S(zp) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function nC(a, b, c) {
        a = mC(a, {
            ic: b.ic(),
            Uc: b.Uc(),
            ug: !!b.m.Pc,
            Ba: b.Ba()
        });
        return new oC(a, b, c)
    }

    function pC(a, b) {
        const c = hA[b];
        return c ? Mr(998, () => c(a.j), a.A) : (a.j.ua(12), !0)
    }

    function qC(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(pC(a, b))
            })
        })
    }

    function rC(a) {
        a.j.v = !0;
        return Promise.all(a.l.map(b => qC(a, b))).then(b => {
            b.includes(!1) && a.j.ua(5);
            a.l.splice(0, a.l.length)
        })
    }
    class oC {
        constructor(a, b, c) {
            this.v = a.slice(0);
            this.l = a.slice(0);
            this.m = Gb(this.l, 1);
            this.j = b;
            this.A = c
        }
    };
    const sC = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };

    function tC(a) {
        return rC(a).then(() => {
            var b = a.j.l.l.filter(us).j.length;
            var c = a.j.I.slice(0);
            var d = a.j;
            d = [...d.A, ...(d.l.j.j ? .C() || [])];
            b = new lC(b, c, d, a.j.l.l.j.length, a.j.l.v.j, a.j.l.l.filter(us).filter(vs).j.length, a.j.l.l.filter(vs).j.length);
            return new sC(b)
        })
    };
    class uC {
        j() {
            return new In([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class vC {
        j() {
            return new In(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function wC(a) {
        return mp(a.j.document).map(b => {
            const c = new Ps(b, 3);
            b = new ps(Hr(a.j, b));
            return new ts(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class xC {
        constructor(a) {
            var b = new vC;
            this.j = a;
            this.l = b || null
        }
    };
    const yC = {
        wd: "10px",
        Hc: "10px"
    };

    function zC(a) {
        return am(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new ts(new Ps(b, 1), new ns(yC), a.l, !1, 0, [], null, a.j, null))
    }
    class AC {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function BC(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function CC(a, b, c) {
        const d = BC(c.Xb, "gapsMeasurementWindow") || BC(c.xb, "gapsPerMeasurementWindow") || BC(c.Bb, "maxGapsToReport");
        return null != d ? pn(d) : c.Ed || -1 != c.xb || -1 != c.Bb ? nn(new DC(a, b, c)) : pn("ShouldHaveLimits")
    }

    function EC(a) {
        return gC(a.m) && gC(a.m).placed || []
    }

    function FC(a) {
        return EC(a).map(b => Ym(Wm(b.element, a.j)))
    }

    function GC(a) {
        return EC(a).map(b => b.index)
    }

    function HC(a, b) {
        const c = b.U;
        return !a.B && c.v && null != v(c.v, 8) && 1 == v(c.v, 8) ? [] : c.A ? (c.R || []).map(d => Ym(Wm(d, a.j))) : [Ym(new Xm(b.ba.j, 0))]
    }

    function IC(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new Xm(c, f - c)), c = d)
        }
        return b
    }

    function JC(a, b) {
        b = b.map(c => {
            var d = new Oz;
            d = x(d, 1, c.j);
            c = c.getHeight();
            return x(d, 2, c)
        });
        return Qz(Pz(new Sz, a), b)
    }

    function KC(a) {
        const b = G(a, Oz, 2).map(c => `G${vd(c,1)}~${c.getHeight()}`);
        return `W${vd(a,1)}${b.join("")}`
    }

    function LC(a, b) {
        const c = [];
        let d = 0;
        for (const e of dm(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.C && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(JC(e, f));
            d += f.length;
            if (!a.C && d >= a.l) break
        }
        return c
    }

    function MC(a) {
        const b = G(a, Sz, 5).map(c => KC(c));
        return `M${vd(a,1)}H${vd(a,2)}C${vd(a,3)}B${Number(!!B(a,4))}${b.join("")}`
    }

    function NC(a) {
        var b = Ys(kn(a.m.l.l), a.j),
            c = FC(a),
            d = new gm(GC(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = HC(a, b[e]);
                c.push(...f)
            }
        c.push(new Xm(0, 0));
        c.push(Ym(new Xm(P(a.j).scrollHeight, 0)));
        b = IC(c);
        c = new fm;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.j / a.v), bm(c, f) || c.set(f, []), c.get(f).push(e);
        b = LC(a, c);
        c = new Uz;
        c = x(c, 1, a.l);
        c = x(c, 2, a.v);
        c = x(c, 3, a.A);
        a = x(c, 4, a.B);
        return td(a, 5, b)
    }

    function OC(a) {
        a = NC(a);
        return MC(a)
    }
    var DC = class {
        constructor(a, b, c) {
            this.G = -1 == c.Xb;
            this.v = c.Xb;
            this.F = -1 == c.xb;
            this.A = c.xb;
            this.C = -1 == c.Bb;
            this.l = c.Bb;
            this.B = c.ee;
            this.m = b;
            this.j = a
        }
    };
    const PC = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var QC = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            jl("ama", b, .01)
        },
        RC = a => {
            const b = {};
            fh(PC, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    const SC = a => {
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
        TC = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var UC = (a, b) => {
            a = ed(a, 2);
            if (!a) return !1;
            for (let c = 0; c < a.length; c++)
                if (a[c] == b) return !0;
            return !1
        },
        WC = (a, b) => {
            a = TC(SC(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = hh(a),
                d = VC(a);
            return b.find(e => {
                const f = bd(e, Xn, 7) ? xd(E(e, Xn, 7)) : xd(e);
                bd(e, Xn, 7) ? (e = E(e, Xn, 7), e = v(e, 2)) : e = 2;
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
    const VC = a => {
        const b = {};
        for (;;) {
            b[hh(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var XC = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                QC(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            QC(a, {
                lserr: 1
            })
        }
    };

    function YC(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function ZC(a, b) {
        a = YC(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function $C() {
        if (aD) return aD;
        const a = Wh() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? aD = b : a.google_persistent_state_async = aD = new bD
    }

    function cD(a, b, c) {
        b = dD[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Y(a, b, c) {
        return cD(a, b, () => c)
    }

    function eD(a, b, c) {
        return a.S[dD[b] || "google_ps_" + b] = c
    }

    function fD(a, b) {
        return eD(a, b, Y(a, b, 0) + 1)
    }

    function gD() {
        var a = $C();
        return Y(a, 20, {})
    }

    function hD() {
        var a = $C();
        const b = Y(a, 31, !1);
        b || eD(a, 31, !0);
        return !b
    }

    function iD() {
        var a = $C();
        return Y(a, 26)
    }

    function jD() {
        var a = $C();
        return Y(a, 28, [])
    }
    class bD {
        constructor() {
            this.S = {}
        }
    }
    var aD = null;
    const dD = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var kD = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_daaos_ts: "daaos",
            google_erank: "epr",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpi: "easpi",
            easpa: "easai",
            asntp: "asntp",
            asntpv: "asntpv",
            asntpl: "asntpl",
            asntpm: "asntpm",
            asntpc: "asntpc",
            asna: "asna",
            asnd: "asnd",
            asnp: "asnp",
            asns: "asns",
            asmat: "asmat",
            asptt: "asptt",
            asro: "asro",
            ascet: "easct",
            asrc: "asdrc",
            asbu: "asbu",
            aseb: "aseb",
            asla: "aslmt",
            asaa: "asamt",
            asupm: "asupm"
        },
        lD = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        mD = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        nD = a => {
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
    async function oD(a, b, c) {
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function pD(a) {
        const b = a.state.pc;
        return null !== b && 0 !== b ? b : a.state.pc = Eh(a.win)
    }

    function qD(a) {
        var b = a.state.wpc;
        if (null === b || "" === b) {
            b = a.state;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if (null == (a = YC(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                    b: {
                        a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                        /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !xi() ? lD : mD;
                        for (var d = a.length - 1; 0 <= d; d--) {
                            var e = a[d];
                            if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0, e = c(e))) {
                                a = e;
                                break b
                            }
                        }
                        a = null
                    }
                    if (a) {
                        c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                        for (d = {}; e = c.exec(a);) d[e[1]] = nD(e[2]);
                        a = d;
                        a = a.google_ad_client ? a.google_ad_client : ""
                    } else a = ""
                }
                a = a ? ? ""
            }
            b = b.wpc = a
        }
        return b
    }

    function rD(a, b) {
        var c = new Kk,
            d = pD(a);
        c = J(c, 1, d).Ma(qD(a));
        c = J(c, 3, a.state.sd);
        return J(c, 7, Math.round(b || a.win.performance.now()))
    }

    function sD(a, b) {
        a.j && !a.state.le.includes(2) && (a.state.le.push(2), Mk(a.aa, b))
    }
    async function tD(a) {
        await oD(a.win, () => !(!pD(a) || !qD(a)), 10)
    }
    async function uD(a, b, c) {
        if (a.j && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await tD(a);
            var e = a.aa;
            a = rD(a, d);
            d = new ak;
            b = Ed(d, 1, b);
            c = id(b, 2, c, Tc);
            c = qd(a, 9, Lk, c);
            Mk(e, c)
        }
    }

    function vD(a, b) {
        var c = rD(a);
        b = qd(c, 5, Lk, b);
        sD(a, b)
    }
    async function wD(a, b) {
        await tD(a);
        var c = rD(a);
        b = qd(c, 5, Lk, b);
        sD(a, b)
    }
    async function xD(a, b) {
        await tD(a);
        var c = a.aa;
        a = rD(a);
        a = J(a, 3, 1);
        b = qd(a, 6, Lk, b);
        Mk(c, b)
    }
    var yD = class {
        constructor(a) {
            this.win = Wh() || window;
            this.aa = a ? ? new Vk;
            this.state = cD($C(), 33, () => {
                const b = T(qp);
                return {
                    sd: b,
                    ssp: 0 < b && eh() < 1 / b,
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
        get l() {
            return this.state.cu
        }
        set l(a) {
            this.state.cu = a
        }
    };
    var AD = (a, b, c, d, e, f = null, g = null, h) => {
            zD(a, new ks(a), b, c, d, e, f, new $m(a), g, h)
        },
        zD = (a, b, c, d, e, f, g = null, h = null, k = null, l) => {
            if (c)
                if (d) {
                    var m = Gy(d, e, a.location);
                    try {
                        const n = new BD(a, b, c, d, e, m, f, g, h, k, l);
                        Mr(990, () => CD(n), a)
                    } catch (n) {
                        xl() && yl(15, [n]), js(b, Wr, gs(ZA(YA((new $A(0)).Ma(c), d), m).ua(1), n)), S(tp) ? wD(O(yD), Pj(new Yj, lj(1))) : vD(O(yD), Pj(new Yj, lj(1)))
                    }
                } else js(b, Wr, (new $A(0)).Ma(c).ua(8)), S(tp) ? wD(O(yD), Pj(new Yj, lj(8))) : vD(O(yD), Pj(new Yj, lj(8)));
            else js(b, Wr, (new $A(0)).ua(9)), S(tp) ? wD(O(yD),
                Pj(new Yj, lj(9))) : vD(O(yD), Pj(new Yj, lj(9)))
        };

    function CD(a) {
        a.C.forEach(b => {
            switch (b) {
                case 0:
                    Mr(991, () => DD(a), a.l);
                    break;
                case 1:
                    Mr(1073, () => {
                        var c = S(Kp);
                        const d = a.m.T ? ed(a.m.T, 2) : [];
                        c && 0 == d.length || (c = new wy(a.l, a.A, a.j, a.B, a.m.T, c), S(Ip) ? vy(c) : ry(c))
                    }, a.l);
                    break;
                case 5:
                    fy(new gy(a.l, a.A, a.j, a.B));
                    break;
                case 2:
                    ED(a);
                    break;
                case 3:
                    FD(a);
                    break;
                case 4:
                    GD(a)
            }
        })
    }

    function DD(a) {
        (a.j ? .j() ? .j() ? ? !1) && HD(a, "p", ID(a));
        if (Zo(a.j) && 1 === v(Zo(a.j), 1)) {
            var b = E(Zo(a.j), Nn, 6);
            b && 2 === v(b, 1) && (Gr(a.l), a.G = "b")
        }
        var c = a.m.hg;
        b = ot(a.l, c);
        if (a.m.T && bd(a.m.T, Wn, 10)) {
            var d = fd(E(a.m.T, Wn, 10), 1);
            null !== d && void 0 !== d && (b = gt(a.l, d, c))
        }
        bd(a.j, Tn, 26) && (b = st(b, E(a.j, Tn, 26), a.l));
        c = a.m.T ? ed(a.m.T, 6) : [];
        d = a.m.T ? G(a.m.T, bo, 5) : [];
        const e = a.m.T ? ed(a.m.T, 2) : [],
            f = Mr(993, () => {
                var g = a.j,
                    h = G(g, Jo, 1);
                const k = a.m.T && UC(a.m.T, 1) ? "text_image" : "text";
                var l = new uC;
                let m = ss(h, a.l, {
                    jf: l,
                    Of: new qs(k)
                });
                h.length != m.length && a.H.push(13);
                m = m.concat(zC(new AC(a.l, l)));
                h = 0;
                l = S(Gp);
                var n = !1;
                if (Zo(g) && 1 === v(Zo(g), 1)) {
                    var q = E(Zo(g), Nn, 6);
                    q && (h = wd(q, 2) || 0, 1 === v(q, 1) && (n = !0))
                }
                q = E(g, Yo, 24) ? .v() ? .j() ? .j() || !1;
                if (l || n || q) l = wC(new xC(a.l)), n = O(vB), m = m.concat(l), n.K = !0, n.C = l.length, "n" === a.G && (a.G = E(g, Yo, 24) ? .j() ? .length ? "o" : "p");
                m = m.concat(Nz(g, k, a.l));
                g = E(g, Yo, 24);
                return new KB(m, a.l, h, g)
            }, a.l);
        a.v = new kC(f, a.B, a.l, {
            Pa: b,
            Af: a.R,
            tb: a.m.tb,
            uf: c,
            Dc: d
        }, JD(a), e);
        gC(a.v) ? .optimization ? .ablatingThisPageview && !a.v.Ba() &&
            (Gr(a.l), O(vB).B = !0, a.G = "f");
        a.F = nC(e, a.v, a.l);
        Mr(992, () => tC(a.F), a.l).then(Mr(994, () => a.Da.bind(a), a.l), a.sa.bind(a))
    }

    function ED(a) {
        const b = E(a.j, Lo, 18);
        b && uz(new vz(a.l, new Mz(a.l, a.B), b, new Jw(a.l), G(a.j, Jo, 1)))
    }

    function FD(a) {
        const b = Cy(a.l.location, "google_audio_sense") ? oo() : E(a.j, po, 27);
        if (b) {
            const c = E(a.j, Do, 6) ? .j() || [];
            sn(nv(a.l, a.A, b, c, a.W, {
                google_ad_client: a.B
            }, E(a.j, Ao, 22) ? .j() || null), d => pv(d))
        }
    }

    function GD(a) {
        const b = E(a.j, Oo, 29);
        b && KD(a.ja, {
            win: a.l,
            webPropertyCode: a.B,
            Xd: b,
            Hd: E(a.j, Do, 6) ? .j() ? ? []
        })
    }

    function JD(a) {
        const b = S(Jp);
        if (!a.j.j()) return {
            qd: b,
            xd: !1,
            Qd: !1,
            Me: !1,
            Td: !1,
            Fe: !1,
            fg: 0,
            ye: 0,
            Cd: LD(a),
            Pc: a.L
        };
        const c = a.j.j();
        return {
            qd: b || B(c, 14, !1),
            xd: B(c, 2, !1),
            Qd: B(c, 3, !1),
            Me: B(c, 4, !1),
            Td: B(c, 5, !1),
            Fe: B(c, 6, !1),
            fg: hd(fd(c, 8), 0),
            ye: v(c, 10),
            Cd: LD(a),
            Pc: a.L
        }
    }

    function LD(a) {
        return a.m.T && bd(a.m.T, Wn, 10) ? .5 <= (fd(E(a.m.T, Wn, 10), 1) || 0) : !0
    }

    function MD(a, b) {
        for (var c = fs(fs(new $A(b.ya), b.errors), a.H), d = b.Oa, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.B.length; g++)
                if (c.B[g] == f) break a;c.B.push(f)
        }
        c.j.pp = b.tc;
        c.j.ppp = b.uc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.pb;
        c.j.eatfAbg = b.qb;
        c.j.reatf = b.Ua;
        c.j.a = a.F.v.slice(0).join(",");
        c = ZA(YA(c, a.j), a.C).Ma(a.B);
        if (d = b.ma) c.j.as_count = d.zd, c.j.d_count = d.Sd, c.j.ng_count = d.qe, c.j.am_count = d.Fd, c.j.atf_count = d.Ad, c.j.mdns = aB(d.je), c.j.alldns = aB(d.Bd);
        c = c.G(b.eb);
        if (d = b.Cf) {
            e = [];
            for (var h of dm(d)) 0 <
                d.get(h).length && (f = d.get(h)[0], e.push("(" + [h, f.ef, f.Hg].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.ed;
        null != h && (c.j.pgh = h);
        c.j.abl = b.ae;
        c.j.rr = a.G;
        void 0 !== b.exception && gs(c, b.exception).ua(1);
        return c
    }

    function ND(a, b) {
        var c = MD(a, b);
        js(a.A, 0 < b.errors.length || 0 < a.H.length || void 0 !== b.exception ? 0 < a.K ? Yr : Wr : 0 < a.K ? Xr : Vr, c);
        if (E(a.j, Yo, 24)) {
            a.v.l.j.j ? .F();
            b = gC(a.v);
            var d = O(vB);
            d.m = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.L = !!b ? .optimization ? .availableAbg;
            b = O(vB);
            c = new mB(c);
            b.A ? (c.l.sl = (b.A ? ? []).join("~"), c.l.daaos = (b.H ? ? []).join("~"), c.l.ab = cB(b.G), c.l.rr = cB(b.K), c.l.oab = cB(b.F), null != b.m && (c.l.sab = cB(b.m)), b.B && (c.l.fb = cB(b.B)), c.l.ls = cB(b.L), bB(c, b.l.yb()),
                null != b.C && (c.l.rp = cB(b.C)), null != b.v && (c.l.expl = cB(b.v)), uB(b, c)) : (b = c, d = "irr".replace(RegExp("~", "g"), ""), b.l.e = b.l.e ? b.l.e + ("~" + d) : d);
            js(a.A, as, c)
        }
    }

    function OD(a, b) {
        const c = O(yD);
        if (c.j) {
            var d = new Yj,
                e = b.Oa.filter(g => null !== g),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(g => null !== g);
            Tj(Rj(Wj(Vj(Uj(Sj(Mj(Oj(Qj(Nj(d, a.F.v.slice(0).map(g => {
                var h = new kj;
                return x(h, 1, g)
            })), e.map(g => {
                var h = new nj;
                return x(h, 1, g)
            })), f.map(g => lj(g))), E(a.j, ho, 23) ? .j()), b.ya).G(b.eb), b.Ua), b.pb), b.qb), a.C.map(g => g.toString())), uj(tj(sj(rj(qj(pj(oj(new vj, b.ma ? .zd), b.ma ? .Sd), b.ma ? .qe), b.ma ? .Fd), b.ma ? .Ad), b.ma ? .je), b.ma ? .Bd));
            E(a.j, Yo, 24) && Kj(d);
            S(tp) ? wD(c, d) : vD(c,
                d)
        }
    }

    function PD(a) {
        return Zo(a.j) && 1 === v(Zo(a.j), 1) ? !(E(Zo(a.j), Nn, 6) && 1 <= (wd(E(Zo(a.j), Nn, 6), 3) || 0)) : !1
    }

    function QD(a) {
        if (PD(a)) {
            a = a.v;
            var b = Gt({
                ac: !0,
                cc: !0
            }, a.j);
            a = 0 < bC(b, a.j)
        } else a = a.v.j, b = Ft({
            Wa: !1,
            Zb: !1
        }, a), a = 0 < bC(b, a);
        return a
    }

    function RD(a, b) {
        try {
            S(yp) && a.v ? .W() ? .A()
        } catch (c) {
            js(a.A, es, gs(ZA(YA((new $A(b)).Ma(a.B), a.j), a.C).ua(14), c))
        }
    }

    function SD(a) {
        if (a.j ? .j() ? .j() ? ? !1) {
            var b = ID(a);
            a.I.init(null == b ? void 0 : b, () => {
                HD(a, "s", b)
            });
            a.I.addListener(c => {
                HD(a, "d", ID(a), c);
                a.I.va();
                if (a.j ? .j() ? .v()) {
                    a.j ? .j() ? .A();
                    try {
                        a.C ? .includes(0) && (a.K++, DD(a), HD(a, "r", ID(a), c))
                    } catch (d) {
                        HD(a, "f", ID(a), c), js(a.A, Yr, gs(ZA(YA((new $A(0)).Ma(a.B), a.j), a.C).ua(1), d))
                    }
                }
            })
        }
    }

    function TD(a, b, c) {
        {
            var d = gC(a.v),
                e = b.j;
            const f = e.j,
                g = e.tc;
            let h = e.ya,
                k = e.uc,
                l = e.errors.slice(),
                m = e.Oa.slice(),
                n = b.exception;
            const q = YC(a.l).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.F.m && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                ya: h,
                tc: g,
                uc: k,
                eb: f,
                errors: e.errors.slice(),
                Oa: m,
                exception: n,
                Ua: c,
                pb: !!d.eatf,
                qb: !!d.eatfAbg,
                ae: q
            }) : (m.push(12), a.F.m && m.push(13), c = {
                ya: h,
                tc: g,
                uc: k,
                eb: f,
                errors: l,
                Oa: m,
                exception: n,
                Ua: c,
                pb: !1,
                qb: !1,
                ae: q
            })
        }
        c.ma = cC(a.v.j);
        if (b = b.j.l) c.Cf = b;
        c.ed = P(a.l).scrollHeight;
        if (xl()) {
            d = kn(a.v.l.l);
            b = [];
            for (const f of d) {
                d = {};
                e = f.I;
                for (const g of dm(e)) d[g] = e.get(g);
                d = {
                    anchorElement: ws(f),
                    position: f.j(),
                    clearBoth: f.H,
                    locationType: f.Xa,
                    placed: f.A,
                    placementProto: f.v ? f.v.toJSON() : null,
                    articleStructure: f.B ? f.B.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            yl(14, [{
                placementIdentifiers: b
            }, a.v.C, c.ma])
        }
        return c
    }

    function UD(a, b) {
        var c = a.v.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.eb;
        c.numAutoAdsPlaced = b.ya;
        c.hasAtfAd = b.Ua;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.v && (a = CC(a.l, a.v, {
            Xb: -1,
            xb: -1,
            Bb: -1,
            ee: !0,
            Ed: !0
        }), null != a.j ? (c.placementPositionDiffs = OC(a.j.value), b = NC(a.j.value), a = new Vz, a = qd(a, 2, Wz, b), c.placementPositionDiffsReport = Qd(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new Vz, a = kd(a, 1, Wz, b), c.placementPositionDiffsReport = Qd(a)))
    }

    function VD(a, b) {
        ND(a, {
            ya: 0,
            eb: void 0,
            errors: [],
            Oa: [],
            exception: b,
            Ua: void 0,
            pb: void 0,
            qb: void 0,
            ma: void 0
        });
        OD(a, {
            ya: 0,
            eb: void 0,
            errors: [],
            Oa: [],
            exception: b,
            Ua: void 0,
            pb: void 0,
            qb: void 0,
            ma: void 0
        })
    }

    function HD(a, b, c, d) {
        b = {
            r: b,
            pg_h: P(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        is(a.A, $r, b)
    }

    function ID(a) {
        let b = null;
        a.j.j() && null != zd(a.j.j(), 19) && (b = zd(a.j.j(), 19));
        return b
    }
    class BD {
        constructor(a, b, c, d, e, f, g, h, k, l, m) {
            this.l = a;
            this.A = b;
            this.B = c;
            this.j = d;
            this.m = e;
            this.C = f;
            this.R = h || null;
            this.H = [];
            this.I = k;
            this.L = l;
            this.ja = g;
            this.K = 0;
            this.W = m ? m : {
                url: a.location.href,
                Jb: void 0
            };
            this.G = "n"
        }
        Da(a) {
            try {
                RD(this, a.j.ya);
                const b = QD(this) || PD(this) ? QD(this) : void 0;
                fp({
                    Oc: b
                }, this.l);
                SD(this);
                const c = TD(this, a, QD(this));
                bd(this.j, go, 25) && y(E(this.j, go, 25), 1) && UD(this, c);
                ND(this, c);
                OD(this, c);
                il(753, () => {
                    if (S(Bp) && null != this.v) {
                        var d = CC(this.l, this.v, {
                                Xb: T(Fp),
                                xb: T(Ep),
                                Bb: T(Cp),
                                ee: !0,
                                Ed: !1
                            }),
                            e = ue(c);
                        null != d.j ? (d = OC(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = MD(this, e);
                        js(this.A, Zr, e)
                    }
                })()
            } catch (b) {
                VD(this, b)
            }
        }
        sa(a) {
            RD(this, 0);
            VD(this, a)
        }
    };
    var WD = class extends L {
            constructor(a) {
                super(a)
            }
        },
        XD = Wd(WD);

    function YD(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? qn(() => XD(c)) : nn(null)
    };

    function ZD(a) {
        this.j = a || {
            cookie: ""
        }
    }
    p = ZD.prototype;
    p.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Rk, g = c.xg || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ke);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    p.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Ra(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    p.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            ke: 0,
            path: b,
            domain: c
        });
        return d
    };
    p.isEmpty = function() {
        return !this.j.cookie
    };
    p.yb = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    p.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Ra(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function $D(a, b = window) {
        if (y(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function aE(a) {
        return "null" !== a.origin
    }

    function bE(a, b, c) {
        b = y(b, 5) && aE(c) ? c.document.cookie : null;
        return null === b ? null : (new ZD({
            cookie: b
        })).get(a) || ""
    };

    function cE(a, b) {
        return x(a, 5, b)
    }
    var dE = class extends L {
        constructor() {
            super()
        }
        j() {
            return y(this, 6)
        }
    };
    var gE = ({
        win: a,
        ec: b,
        ce: c = !1,
        de: d = !1
    }) => {
        if (!eE({
                win: a,
                ec: b,
                ce: c,
                de: d
            })) return fE(a, cE(new dE, !0));
        (b = Y($C(), 24)) ? (b = cE(new dE, Cz(b)), a = fE(a, b)) : a = new on(null, Error("tcunav"));
        return a
    };

    function eE({
        win: a,
        ec: b,
        ce: c,
        de: d
    }) {
        if (!(d = !d && Gz(new Kz(a)))) {
            if (c = !c) {
                if (b) {
                    a = YD(a);
                    if (null != a.j)
                        if ((a = a.j.value) && null != v(a, 1)) b: switch (a = v(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else kl(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function fE(a, b) {
        return (a = $D(b, a)) ? nn(a) : new on(null, Error("unav"))
    };
    var hE = class extends L {
        constructor(a) {
            super(a)
        }
    };
    class iE {
        constructor(a, b, c, d) {
            this.j = a;
            this.m = b;
            this.A = c;
            this.l = !1;
            this.v = d
        }
    };

    function KD(a, {
        win: b,
        webPropertyCode: c,
        Xd: d,
        Hd: e
    }) {
        a = hv(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: Qd(d),
            serializedArticleStructures: e.map(g => Qd(g))
        }));
        $k.za(927, a)
    }
    var jE = class {
        constructor(a) {
            this.j = a
        }
    };

    function kE({
        win: a,
        webPropertyCode: b,
        wb: c
    }) {
        if (Cy(a.location, "google_auto_gallery")) {
            var d = new Oo;
            var e = new Mo;
            e = x(e, 1, !0);
            d = pd(d, 3, e);
            KD(new jE(c), {
                win: a,
                webPropertyCode: b,
                Xd: d,
                Hd: []
            })
        }
    };

    function lE(a) {
        try {
            const b = Array.from(a.l.win.document.querySelectorAll('[id*="mobile-toggle"], [id="toggle-nav"], [class~="menu-mobile-toggle"], [class*="hamburger-show"], [class~="offcanvas-toggle"], [class~="site__header-btn"], [class~="toggle-mobile-menu"], [class~="elementor-menu-toggle"]'));
            a.ld(b);
            for (const [c, d] of b.entries()) {
                const e = c;
                d.addEventListener("click", () => {
                    var f = a.j,
                        g = {
                            typ: "mt",
                            tbi: e,
                            ...mE(f)
                        };
                    nE(f.aa, g)
                })
            }
        } catch (b) {
            oE(a.j, `instrumentMenuToggleButton ${b}`)
        }
    }

    function pE(a, b) {
        if (IntersectionObserver) {
            var c = new Map;
            for (const [e, f] of b.entries()) c.set(f.rootElement, e);
            var d = new IntersectionObserver(e => {
                for (const g of e) {
                    e = a.j;
                    var f = {
                        typ: "mvc",
                        mi: c.get(g.target),
                        ir: g.intersectionRatio,
                        ...mE(e)
                    };
                    nE(e.aa, f)
                }
            }, {
                threshold: .5
            });
            for (const e of b) d.observe(e.rootElement)
        } else oE(a.j, "IntersectionObserver is not supported")
    }

    function qE(a, b) {
        for (const [c, d] of b.entries()) {
            const e = c;
            b = d;
            for (const [f, g] of b.ne.entries()) {
                const h = f;
                g.querySelector("a") ? .addEventListener("click", () => {
                    var k = a.j,
                        l = {
                            typ: "ic",
                            mi: e,
                            mii: h,
                            ...mE(k)
                        };
                    nE(k.aa, l)
                })
            }
        }
    }
    var sE = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        Qe() {
            var a = this.j,
                b = {
                    typ: "pv",
                    ...mE(a)
                };
            nE(a.aa, b);
            lE(this);
            try {
                const c = rE(this.l);
                this.kd(c);
                pE(this, c);
                qE(this, c)
            } catch (c) {
                oE(this.j, `instrumentMenu ${c}`)
            }
        }
        ld(a) {
            let b = 0;
            for (const c of a) null !== c.offsetParent && b++;
            this.j.ld({
                Cg: a.length,
                Dg: b
            })
        }
        kd(a) {
            let b = 0;
            for (const c of a) b += c.ne.length;
            this.j.kd({
                Uf: a.length,
                Gg: b
            })
        }
    };

    function oE(a, b) {
        b = {
            typ: "er",
            msg: b,
            ...mE(a)
        };
        nE(a.aa, b)
    }

    function mE(a) {
        var b = a.webPropertyCode,
            c = a.l,
            d = a.m;
        null === a.j ? (a.j = Ui(), a = 0) : a = Ui() - a.j;
        return {
            wpc: b,
            hst: c,
            pvsid: d,
            tim: a,
            dvc: wh()
        }
    }
    var tE = class {
        constructor(a, b, c) {
            var d = Eh(t);
            this.aa = a;
            this.webPropertyCode = b;
            this.l = c;
            this.m = d;
            this.j = null
        }
        kd(a) {
            a = {
                typ: "mdr",
                md: a.Uf,
                tmid: a.Gg,
                ...mE(this)
            };
            nE(this.aa, a)
        }
        ld(a) {
            a = {
                typ: "mtbdr",
                tbd: a.Cg,
                tbv: a.Dg,
                ...mE(this)
            };
            nE(this.aa, a)
        }
    };

    function rE(a) {
        a = uE(Array.from(a.win.document.querySelectorAll(":not([id*=foot], [class*=foot]) > LI.menu-item"))) || uE(Array.from(a.win.document.querySelectorAll("UL[id*=nav] > LI, UL[class*=nav] > LI, UL[role*=nav] > LI, UL[aria-controls*=nav] > LI"))) || [];
        const b = new Map;
        for (const c of a) c.parentElement && (b.has(c.parentElement) ? b.get(c.parentElement).push(c) : b.set(c.parentElement, [c]));
        return Array.from(b.entries()).map(c => ({
            rootElement: c[0],
            ne: c[1]
        }))
    }
    var vE = class {
        constructor(a) {
            this.win = a
        }
    };

    function uE(a) {
        return 0 < a.length ? a : null
    };

    function nE(a, b) {
        const c = new Oi;
        fh(b, (d, e) => {
            const f = c.v++;
            Li(c, f, Ii(e, d))
        });
        b = Ni(c, a.protocol, a.domain, `${a.path}?id=${"abg::auto_menu"}&`);
        try {
            a.win.navigator.sendBeacon(b)
        } catch (d) {}
    }
    var wE = class {
        constructor(a) {
            this.win = a;
            this.domain = "pagead2.googlesyndication.com";
            this.path = "/pagead/gen_204";
            this.protocol = "https:"
        }
    };
    var xE = "a".charCodeAt(),
        yE = te(El),
        zE = te(Fl);

    function AE(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function BE(a) {
        return String.fromCharCode(xE + AE(a, 6)) + String.fromCharCode(xE + AE(a, 6))
    }

    function CE(a) {
        let b = AE(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!AE(a, 1),
                e = AE(a, 16);
            if (d)
                for (d = AE(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function DE(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (AE(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function EE(a) {
        const b = AE(a, 16);
        return !0 === !!AE(a, 1) ? (a = CE(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : DE(a, b)
    }
    class FE {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var HE = (a, b) => {
        try {
            var c = lc(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new FE(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = AE(d, 12);
            c.cmpVersion = AE(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = AE(d, 6);
            c.isServiceSpecific = !!AE(d, 1);
            c.useNonStandardStacks = !!AE(d, 1);
            c.specialFeatureOptins = GE(DE(d, 12, zE), zE);
            c.purpose = {
                consents: GE(DE(d, 24, yE), yE),
                legitimateInterests: GE(DE(d, 24, yE), yE)
            };
            c.purposeOneTreatment = !!AE(d, 1);
            c.publisherCC = BE(d);
            c.vendor = {
                consents: GE(EE(d), b),
                legitimateInterests: GE(EE(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const GE = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var IE = class {
        constructor() {
            this.j = {}
        }
    };
    var JE = class extends L {
        constructor() {
            super()
        }
    };
    var KE = class extends L {
        constructor() {
            super()
        }
    };
    var LE = class extends L {
            constructor() {
                super()
            }
        },
        ME = [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27];
    var NE = class {};
    var OE = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var PE = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var RE = Wd(class extends L {
            constructor(a) {
                super(a, -1, QE)
            }
        }),
        QE = [7];
    var SE = new class {
        constructor() {
            this.key = "45369554";
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };
    var TE = class extends IE {
            constructor() {
                super();
                var a = t.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.j = JSON.parse(a)
                } catch (b) {}
            }
        },
        UE;

    function VE(a) {
        return (a = WE(a)) ? E(a, PE, 4) : null
    }

    function WE(a) {
        if (a = (new ZD(a)).get("FCCDCF", ""))
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                XE(1), b = null
            } else b = a;
            else b = null;
        try {
            return b ? RE(b) : null
        } catch (c) {
            return XE(2), null
        }
    }

    function XE(a) {
        new NE;
        var b = new JE;
        a = x(b, 7, a);
        b = new KE;
        a = pd(b, 1, a);
        b = new LE;
        qd(b, 22, ME, a);
        UE || (UE = new TE);
        a = UE.j[SE.key];
        if ("proto" === SE.valueType) try {
            JSON.parse(a)
        } catch (c) {}
    };

    function YE(a) {
        a.__tcfapiPostMessageReady || ZE(new $E(a))
    }

    function ZE(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
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
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var $E = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };

    function aF(a) {
        var b = S(Op);
        a.__uspapi || a.frames.__uspapiLocator || (a = new bF(a), cF(a), b && dF(a))
    }

    function cF(a) {
        !a.A || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", zz(a.j, "__uspapiLocator"), Ha("__uspapi", (...b) => eF(a, ...b)))
    }

    function dF(a) {
        !a.m || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", zz(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Ha("__tcfapi", (...b) => fF(a, ...b)), YE(a.j))
    }

    function eF(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.A
        }, !0)
    }

    function fF(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(gF(a, e, null), !0) : d(null, !1);
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
                    d(gF(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function gF(a, b, c) {
        if (!a.m) return null;
        b = HE(a.m, b);
        b.addtlConsent = null != a.v ? a.v : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class bF {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.A = (a = (a = WE(this.l)) ? E(a, OE, 5) || null : null) ? v(a, 2) : null;
            this.m = (a = VE(this.l)) && null != v(a, 1) ? v(a, 1) : null;
            this.v = (a = VE(this.l)) && null != v(a, 2) ? v(a, 2) : null
        }
    };
    const hF = a => {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    };
    var iF = (a, b) => {
        a = hF(a);
        b = hF(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var jF = Promise;
    class kF {
        constructor(a) {
            this.m = a
        }
        l(a, b, c) {
            this.m.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.m.then(c => c.j(a, b))
        }
    };
    class lF {
        constructor(a) {
            this.data = a
        }
    };

    function mF(a, b) {
        nF(a, b);
        return new oF(a)
    }
    class oF {
        constructor(a) {
            this.m = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            nF(d.port1, b);
            this.m.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new jF(c => {
                this.l(a, c, b)
            })
        }
    }

    function nF(a, b) {
        b && (a.onmessage = c => {
            b(new lF(c.data, mF(c.ports[0])))
        })
    };
    var rF = ({
        destination: a,
        Aa: b,
        origin: c,
        Ra: d = "ZNWN1d",
        onMessage: e,
        te: f
    }) => pF({
        destination: a,
        If: () => b.contentWindow,
        ag: qF(c),
        Ra: d,
        onMessage: e,
        te: f
    });
    const pF = ({
            destination: a,
            If: b,
            ag: c,
            Tk: d,
            Ra: e,
            onMessage: f,
            te: g
        }) => {
            const h = Object.create(null);
            c.forEach(k => {
                h[k] = !0
            });
            return new kF(new jF((k, l) => {
                const m = n => {
                    n.source && n.source === b() && !0 === h[n.origin] && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(mF(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        qF = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };

    function sF(a, b, c, d, e, f, g = null, h) {
        try {
            var k = a.localStorage
        } catch (r) {
            k = null
        }
        if (k) {
            if (S(Ap)) var l = null;
            else try {
                l = k.getItem("google_ama_config")
            } catch (r) {
                l = null
            }
            try {
                var m = l ? bp(l) : null
            } catch (r) {
                m = null
            }
            l = m
        } else l = null;
        a: {
            if (d) try {
                var n = bp(d);
                break a
            } catch (r) {
                QC(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            n = null
        }
        if (d = n) {
            if (e) {
                n = new Vn;
                pd(d, 3, n);
                l = d.j() && zd(d.j(), 13) ? zd(d.j(), 13) : 1;
                x(n, 1, Date.now() + 864E5 * l);
                n = Pd(d, !1);
                d.j() && (l = new Un, m = d.j(), m = y(m, 23), l = x(l, 23, null == m ? void 0 : m), m = B(d.j(), 12, !1), l = x(l, 12, m), m = B(d.j(), 15, !1), l = x(l,
                    15, m), pd(n, 15, l));
                l = G(n, Jo, 1);
                for (m = 0; m < l.length; m++) x(l[m], 11, Pc);
                x(n, 22, void 0, !1);
                if (S(Ap)) XC(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", Qd(n))
                } catch (r) {
                    QC(a, {
                        lserr: 1
                    })
                }
            }
            e = WC(a, G(d, fo, 7));
            a: {
                if (e && (n = v(e, 3), l = E(d, zo, 9), n && l)) {
                    b: {
                        l = G(l, xo, 1);
                        for (q of l)
                            if (v(q, 1) == n) {
                                var q = E(q, wo, 2) || null;
                                break b
                            }
                        q = null
                    }
                    if (q) break a
                }
                q = E(d, wo, 8) || new wo
            }
            q = {
                hg: q
            };
            e && (q.T = e);
            e && UC(e, 3) && (q.tb = [1]);
            if (7 === c.google_pgb_reactive && (e = q.T, !e || !y(e, 8))) return !1;
            ZC(a, 2) && (yl(5, [d.toJSON()]), e = RC(c), f = new jE(f),
                c = q.T, e.google_package = c && v(c, 4) || "", AD(a, b, d, q, f, new In(["google-auto-placed"], e), g, {
                    url: a.location.href,
                    Jb: h
                }));
            return !0
        }
        l && (QC(a, {
            cfg: 1,
            cl: 1
        }), XC(a));
        return !1
    };
    var uF = a => {
        const b = a.D;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!og.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = tF(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = tF(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = tF(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = tF(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = tF(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = tF(a, b.google_color_line, c))
    };

    function tF(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function vF(a, b) {
        var c = $k,
            d;
        var e;
        d = (e = (e = Rh()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new Lh(d.left, d.top, d.width, d.height) : null) ? new xg(e.left, e.top) : (d = Uh()) && ua(d.rootBounds) ? new xg(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new xg(0, 0),
                g = Hg(b);
            var h = g ? Kg(g) : window;
            if (Rb(h, "parent")) {
                do {
                    if (h == a) var k = gi(b);
                    else {
                        var l = fi(b);
                        k = new xg(l.left,
                            l.top)
                    }
                    g = k;
                    f.x += g.x;
                    f.y += g.y
                } while (h && h != a && h != h.parent && (b = h.frameElement) && (h = h.parent))
            }
            return f
        } catch (m) {
            return c.ha(888, m), new xg(-12245933, -12245933)
        }
    };
    var wF = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return B(this, 6)
        }
        v() {
            return B(this, 7)
        }
    };
    var yF = class extends L {
            constructor(a) {
                super(a, -1, xF)
            }
            j() {
                return gd(this, 1, Yc)
            }
        },
        xF = [1];
    var AF = class extends L {
            constructor(a) {
                super(a, -1, zF)
            }
        },
        zF = [19],
        BF = [13, 14];

    function CF(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var DF = class {
            constructor() {
                this.j = null;
                this.l = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                const a = b => this.j ? hh(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[4] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        EF;
    let FF = void 0;

    function GF() {
        Vd(FF, Td);
        return FF
    };

    function HF(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : qe(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function IF(a = t) {
        return a.ggeac || (a.ggeac = {})
    };

    function JF(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };

    function KF(a, b) {
        a.j = Wk(14, b, () => {})
    }
    class LF {
        constructor() {
            this.j = () => {}
        }
    };

    function MF(a = IF()) {
        Xk(O(Yk), a);
        NF(a);
        KF(O(LF), a);
        O($q).v()
    }

    function NF(a) {
        const b = O($q);
        b.j = (c, d) => Wk(5, a, () => !1)(c, d, 1);
        b.l = (c, d) => Wk(6, a, () => 0)(c, d, 1);
        b.m = (c, d) => Wk(7, a, () => "")(c, d, 1);
        b.A = (c, d) => Wk(8, a, () => [])(c, d, 1);
        b.v = () => {
            Wk(15, a, () => {})(1)
        }
    };

    function OF(a) {
        var b = O(Yk).l(a);
        a = uD(O(yD), a, b);
        Al.za(1085, a)
    }
    var PF = a => {
        const b = O(Yk).j();
        a = YC(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    };

    function QF(a, b, c) {
        return c ? bE(b, c, a.j) : null
    }

    function RF(a, b, c, d) {
        if (d) {
            var e = {
                ke: v(c, 2) - Date.now() / 1E3,
                path: v(c, 3),
                domain: v(c, 4),
                xg: !1
            };
            a = a.j;
            y(d, 5) && aE(a) && (new ZD(a.document)).set(b, v(c, 1), e)
        }
    }

    function SF(a, b, c) {
        if (c && bE(b, c, a.j))
            for (const e of TF(a.j.location.hostname)) {
                var d = a.j;
                y(c, 5) && aE(d) && (new ZD(d.document)).remove(b, "/", e)
            }
    }
    var UF = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function TF(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function VF(a, b, c) {
        return il(629, function(d) {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    k = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = bg(ag($f(Zf(new cg, g), h), k), e);
                switch (d) {
                    case 1:
                        RF(c,
                            "__gads", e, b);
                        break;
                    case 2:
                        RF(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function WF(a, b, c) {
        let d;
        if (0 === a.l) {
            if (QF(a, "__gads", b)) var e = !0;
            else if (e = a.j, y(b, 5) && aE(e) && (new ZD(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === bE("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                y(b, 5) && aE(f) && (new ZD(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = VF(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function XF(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = QF(b, "__gads", a);
        e && (d.cookie = e);
        (e = QF(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e);
        const f = Fe(Ie($d(ae("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = WF(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            bh(c.document, f)
        }) : Promise.resolve()
    }

    function YF(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        const d = new UF(b);
        a: {
            c = b.google_ad_client || c;
            if (!S(Lp)) {
                var e = b._gfp_a_;
                if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
                if (!e) {
                    Promise.resolve();
                    break a
                }
            }
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);e ? Promise.resolve() : XF(a, d, b, c)
        }
        a = QF(d, "__gads", a) || "";
        EF || (EF = new DF);
        b = EF;
        CF(b, a);
        a = b.l;
        O(LF).j(a);
        OF(20);
        OF(17)
    };

    function ZF(a) {
        S(dq) && (a.easpi = S(dq), S(Gq) && (a.easpa = !0), a.asntp = 0, a.asntpv = 0, a.asntpl = 0, a.asntpm = 0, a.asntpc = 1E3, a.asna = 5, a.asnd = 5, a.asnp = 5, a.asns = 5, S(Nq) || (a.asmat = T(eq)), a.asptt = -1, a.asro = S(Wq) ? S(gq) : S(Rq), S(Qq) && (a.ascet = !0), S(Sq) || (a.asrc = !1), S(bq) && (a.asbu = !0), S(Nq) && (a.aseb = !0), 1 > T(Oq) && (a.asla = T(Oq)), 1 > T(Hq) && (a.asaa = T(Hq)), S(Yq) && (a.asupm = !0))
    };

    function $F(a, b) {
        return kw({
            J: a,
            Xc: 3E3,
            Zc: a.innerWidth > Ol ? 650 : 0,
            aa: Zk,
            Kd: b
        })
    };
    var aG = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= Pl(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var bG = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= Pl(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var cG = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        dG = (a, b, c) => {
            let d = 0;
            try {
                d |= Pl(a, 2500);
                if (S(vq)) {
                    const g = P(a).clientHeight;
                    d |= g ? 320 > g ? 2097152 : 0 : 1073741824
                }
                d |= Ql(a);
                var e;
                if (e = 0 < b) {
                    var f = eA(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };

    function eG(a, b, c, d, e = null) {
        if (!S(yq)) return 32;
        let f = a != a.top ? 512 : 0;
        lw(a.navigator ? .userAgent) && (f |= 1048576);
        const g = a.innerWidth;
        1200 > g && (f |= 65536);
        const h = a.innerHeight;
        650 > h && (f |= 2097152);
        e && 0 === f && (e = 3 === e ? "left" : "right", (b = fG({
            J: a,
            he: b,
            He: 1,
            position: e,
            N: g,
            V: h,
            Ha: new Set,
            minWidth: d ? 135 : 120,
            minHeight: 500
        })) ? c && Ll(a).j.set(e, `${b.width}x${b.height}_${String(e).charAt(0)}`) : f |= 16);
        return f
    }

    function gG(a) {
        var b = S(Wp),
            c = S(Vp);
        if (b) return [...Ll(a).j.values()].join("|");
        if (0 !== eG(a, !0, !1, c)) return "";
        b = [];
        const d = a.innerWidth,
            e = a.innerHeight;
        for (const f of ["left", "right"]) {
            const g = fG({
                J: a,
                he: !0,
                He: 1,
                position: f,
                N: d,
                V: e,
                Ha: new Set,
                minWidth: c ? 135 : 120,
                minHeight: 500
            });
            g && b.push(`${g.width}x${g.height}_${String(f).charAt(0)}`)
        }
        return b.join("|")
    }

    function hG(a, b) {
        return null !== Tg(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function iG(a, b) {
        return Tg(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function jG(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function kG(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function lG(a) {
        return `${a.position}-${kG(a.N)}x${kG(a.V)}-${kG(a.scrollY+a.gb)}Y`
    }

    function mG(a) {
        return `f-${lG({position:a.position,gb:a.gb,scrollY:0,N:a.N,V:a.V})}`
    }

    function nG(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function oG(a, b, c) {
        const d = Ll(c.J).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.V),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.N);
                for (var k = .3 * c.N; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = mG({
                            position: "left",
                            gb: f,
                            N: c.N,
                            V: c.V
                        });
                        b.set(l, nG(b.get(l), h))
                    }
                    if (h < c.N && e > c.N - k) {
                        l = mG({
                            position: "right",
                            gb: f,
                            N: c.N,
                            V: c.V
                        });
                        const m = c.N - e;
                        b.set(l, nG(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function fG(a) {
        if (1200 > a.N || 650 > a.V) return null;
        var b = Ll(a.J).sideRailAvailableSpace;
        if (!a.he) {
            var c = {
                    J: a.J,
                    N: a.N,
                    V: a.V,
                    Ha: a.Ha
                },
                d = `f-${kG(c.N)}x${kG(c.V)}`;
            if (!b.has(d)) {
                b.set(d, 0);
                Ll(c.J).sideRailProcessedFixedElements.clear();
                d = new Set([...Array.from(c.J.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...c.Ha]);
                for (var e of jG(c.J)) hG(e, d) || oG(e, b, c)
            }
        }
        c = [];
        d = .9 * a.V;
        var f = Wl(a.J),
            g = e = (a.V - d) / 2,
            h = d / 7;
        for (var k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var q = a.position,
                    r = b,
                    w = {
                        J: a.J,
                        N: a.N,
                        V: a.V,
                        Ha: a.Ha
                    };
                const z = mG({
                        position: q,
                        gb: n,
                        N: w.N,
                        V: w.V
                    }),
                    A = lG({
                        position: q,
                        gb: n,
                        scrollY: f,
                        N: w.N,
                        V: w.V
                    });
                if (r.has(A)) {
                    n = nG(r.get(z), r.get(A));
                    break a
                }
                const I = "left" === q ? 20 : w.N - 20;
                let D = I;q = .3 * w.N / 5 * ("left" === q ? 1 : -1);
                for (let F = 0; 6 > F; F++) {
                    const H = xw(w.J.document, Math.round(D), Math.round(n));
                    var C = hG(H, w.Ha);
                    const U = iG(H, w.J);
                    if (!C && null !== U) {
                        oG(U, r, w);
                        r.delete(A);
                        break
                    }
                    C || (C = H.offsetHeight >= .25 * w.V, C = H.offsetWidth >= .9 * w.N && C);
                    if (C) r.set(A, Math.round(Math.abs(D - I) + 20));
                    else if (D !== I) D -=
                        q, q /= 2;
                    else {
                        r.set(A, 0);
                        break
                    }
                    D += q
                }
                n = nG(r.get(z), r.get(A))
            }
            m.call(l, n);
            g += h
        }
        b = a.He;
        f = a.position;
        d = Math.round(d / 8);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = 0 === m.length ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: f,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) * d),
                    offsetY: e + h[k] * d
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                m = n;
                break
            } else 1 === b && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const pG = {
        [27]: 512,
        [26]: 128
    };
    var qG = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === $F(a, c);
                case 3:
                case 4:
                    return 0 === eG(a, !1, !1, S(Vp), c);
                case 8:
                    return b = "on" === b.google_adtest || Cy(a.location, "google_ia_debug") ? -1 : T(Zp), 0 == (cG(a) | dG(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || Cy(a.location, "google_scr_debug")), !fA(a, b, d);
                case 30:
                    return 0 == UB(a);
                case 26:
                    return 0 == bG(a);
                case 27:
                    return 0 === aG(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        rG = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return $F(a, c);
                case 3:
                case 4:
                    return eG(a, S(Xp), S(Wp), S(Vp), c);
                case 8:
                    return b = "on" === b.google_adtest || Cy(a.location, "google_ia_debug") ? -1 : T(Zp), cG(a) | dG(a, b, d);
                case 9:
                    return fA(a, !("on" === b.google_adtest || Cy(a.location, "google_scr_debug")), d);
                case 16:
                    return ur(b, a) ? 0 : 8388608;
                case 30:
                    return UB(a);
                case 26:
                    return bG(a);
                case 27:
                    return aG(a);
                default:
                    return 32
            }
        },
        sG = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!re(d)) return !1;
            a = ah(a);
            if (!a || !qG(a, b, d, c)) return !1;
            b = Ll(a);
            if (Ul(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] =
                0);
            b.adCount[d]++;
            return !0
        },
        uG = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && tG(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b && 41 !== b
        },
        vG = a => {
            if (!a.hash) return null;
            let b = null;
            fh(zy, c => {
                !b && Cy(a, c) && (b = Ay[c])
            });
            return b
        },
        xG = (a, b) => {
            const c = Ll(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && fh(By, d => {
                !c.debugCardRequested && "number" === typeof d && Fy(d, a.location) && (c.debugCardRequested = !0, wG(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        zG = (a, b, c) => {
            if (!b) return null;
            const d =
                Ll(b);
            let e = 0;
            fh(se, f => {
                const g = pG[f];
                g && 0 === yG(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        AG = (a, b, c) => {
            const d = [];
            fh(se, e => {
                if (S(yq) || 3 !== e && 4 !== e) {
                    var f = yG(b, a, e, c);
                    0 !== f && d.push(e + ":" + f)
                }
            });
            return d.join(",") || null
        },
        BG = a => {
            const b = [],
                c = {};
            fh(a, (d, e) => {
                if ((e = Jl[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        CG = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ?
                a ? "1" : "0" : ""
        },
        yG = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = Ll(b),
                g = Ul(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            fh(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === String(l) && (h = !0)
            });
            h && vG(b.location) !== c && (e |= 128);
            return e | rG(b, a, c, d)
        },
        DG = (a, b) => {
            if (a) {
                var c = Ll(a),
                    d = {};
                fh(b, (e, f) => {
                    (f = Jl[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                fh(se, e => {
                    d[Kl[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        EG = (a, b, c) => {
            b = $k.ra(b, c);
            return hv(1, window, Fe(a, ar(sp) ? {
                bust: ar(sp)
            } : {})).then(b)
        },
        wG = (a, b, c) => {
            c = $k.ra(212, c);
            hv(3, a, b).then(c)
        };
    const FG = a => {
        a.adsbygoogle || (a.adsbygoogle = [], bh(a.document, N `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`))
    };
    var GG = (a, b) => {
            oe(a, "load", () => {
                FG(a);
                a.adsbygoogle.push(b)
            })
        },
        HG = a => {
            a = a.google_reactive_ad_format;
            return re(a) ? "" + a : null
        },
        tG = a => !!HG(a) || null != a.google_pgb_reactive,
        IG = a => {
            a = HG(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a
        };

    function JG(a) {
        return "number" === typeof a.google_reactive_sra_index
    }

    function KG(a, b, c) {
        const d = b.J || b.pubWin,
            e = b.D;
        e.google_reactive_plat = AG(d, e, c);
        var f = BG(a);
        f && (e.google_reactive_plaf = f);
        (f = CG(a)) && (e.google_reactive_fba = f);
        (f = gG(d)) && (e.google_plas = f);
        LG(a, e);
        f = vG(b.pubWin.location);
        MG(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        ZF(e);
        S(Yp) && (e.fsapi = !0);
        Vh() || jr(b.pubWin.top);
        f = ml(b.pubWin, "rsrai", il(429, (g, h) => NG(b, d, e.google_ad_client, a, g, h, c)), il(430, (g, h) => Zl(b.pubWin, "431", Zk, h)));
        b.m.push(f);
        Ll(d).wasReactiveTagRequestSent = !0;
        OG(b,
            a, c)
    }

    function OG(a, b, c) {
        const d = a.D,
            e = ua(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = ml(a.pubWin, "apcnf", il(353, (f, g) => {
            var h = a.pubWin,
                k = d.google_ad_client,
                l = a.da.wb,
                m = a.da.Jb;
            return Bh(g.origin) ? sF(h, k, e, f.config, c, l, null, m) : !1
        }), il(353, (f, g) => Zl(a.pubWin, "353", Zk, g)));
        a.m.push(b)
    }

    function NG(a, b, c, d, e, f, g) {
        if (!Bh(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!ZC(b, 1)) return !0;
        f && yl(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = Ll(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const q = f[n],
                r = q.adFormat;
            l && q.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
            if (!q.noCreative) {
                q.google_reactive_sra_index = n;
                if (9 === r && e) {
                    q.pubVars = Object.assign(q.pubVars || {}, PG(d, q));
                    const w = new gA;
                    if (aA(w, q)) {
                        m = w;
                        continue
                    }
                }
                h.push(q);
                k.push(r)
            }
        }
        h.length && (jl("rasra::pm", {
            rt: k.join(","),
            c
        }, .1), EG(a.da.Be, 522, n => {
            QG(h, b, c, n, d, g)
        }));
        e && sF(b, c, d, e, g, a.da.wb, m);
        return !0
    }

    function PG(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        ua(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === c && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function QG(a, b, c, d, e, f) {
        const g = [];
        for (let h = 0; h < a.length; h++) {
            const k = a[h],
                l = k.adFormat,
                m = k.adKey,
                n = d.configProcessorForAdFormat(l);
            l && n && m ? (k.pubVars = PG(e, k), delete k.google_reactive_sra_index, g.push(l), bl(466, () => n.verifyAndProcessConfig(b, k, f))) : jl("rasra::ivc", {
                af: l,
                ak: String(m),
                c
            }, .1)
        }
        jl("rasra::pr", {
            rt: g.join(","),
            c
        }, .1)
    }

    function LG(a, b) {
        const c = [];
        let d = !1;
        fh(Jl, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && "+" !== c[e] || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function MG(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if ("on" === a.google_adtest || "on" === d ? .google_adtest || b) c.google_adtest = "on"
        }
    };
    Qb("script");
    var RG = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function SG(a, b) {
        if (!ur(b, a)) return () => {};
        a = TG(b, a);
        if (!a) return () => {};
        const c = jD();
        b = ue(b);
        const d = {
            Ka: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Gb(c, d)
    }

    function TG(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !zr.test(a.className);) a = a.parentElement;
        return a
    }

    function UG(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                k = a.childNodes[g];
            var c = k.style,
                d = h,
                e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = oh(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function VG(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function WG(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.l != c) {
            a.l = c;
            a = jD();
            for (const d of a)
                if (d.Ka.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.Ka.offsetWidth, bl(467, () => {
                    var e = d.Ka,
                        f = d.D;
                    const g = UG(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = UG(e, f);
                    !h && g && 1 == e.childNodes.length ? (VG(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", FG(b), b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ? h !=
                        g && (VG(g, !1), VG(h, !0)) : jl("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: e.childNodes.length
                        })
                })
        }
    }
    var XG = class extends Rk {
        constructor() {
            super(...arguments);
            this.l = null
        }
        init(a) {
            const b = $C();
            if (!Y(b, 27, !1)) {
                eD(b, 27, !0);
                this.l = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => WG(this, a);
                oe(a, "resize", c);
                Sk(this, () => {
                    pe(a, "resize", c)
                })
            }
        }
    };
    var YG = class {
        constructor(a, b, c) {
            this.J = a;
            this.Ka = b;
            this.D = c;
            this.j = null;
            this.l = this.m = 0
        }
        v() {
            10 <= ++this.m && t.clearInterval(this.j);
            var a = xr(this.J, this.Ka);
            a = yr(this.J, this.Ka, a);
            const b = tr(this.Ka, this.J);
            null != b && 0 === b.x || t.clearInterval(this.j);
            a && (this.l++, jl("rspv:al", {
                aligns: this.l,
                attempt: this.m,
                client: this.D.google_ad_client,
                eoffs: String(null != b ? b.x : null),
                eids: PF(this.D),
                slot: this.D.google_ad_slot,
                url: this.D.google_page_url
            }, .01))
        }
    };
    var jj = {
        Dk: 0,
        zk: 1,
        Ak: 9,
        xk: 2,
        yk: 3,
        Ck: 5,
        Bk: 7
    };
    var ZG = class {
        constructor(a) {
            this.J = a.J;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.la = a.la;
            this.da = a.da;
            this.Ja = a.Ja;
            this.Z = a.Z;
            this.C = -1;
            this.j = 0;
            this.l = this.H = null;
            this.F = this.G = 0;
            this.m = [];
            this.sb = this.B = "";
            this.v = this.A = null
        }
    };

    function $G(a, b) {
        var c = cE(a, Cz(b));
        c = x(c, 2, b.tcString);
        c = x(c, 4, b.addtlConsent || "");
        x(c, 7, b.internalErrorState);
        c = !Ez(b);
        x(a, 9, c);
        null != b.gdprApplies && x(a, 3, b.gdprApplies)
    }

    function aH(a) {
        const b = new Kz(a.pubWin, {
            Bg: -1,
            kf: !0
        });
        if (!Gz(b)) return Promise.resolve(null);
        const c = $C(),
            d = Y(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = Y(c, 25, []);
            g.push(f);
            eD(c, 25, g)
        });
        d || null === d || (eD(c, 24, null), b.addEventListener(f => {
            if (Bz(f)) {
                eD(c, 24, f);
                $G(a.l, f);
                for (const g of Y(c, 25, [])) g.resolve(f);
                eD(c, 25, [])
            } else eD(c, 24, null)
        }));
        return e
    };

    function bH(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var dH = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => cH(d));
        return ml(a, "adpnt", (e, f) => {
            if (Vl(f, c.contentWindow)) {
                e = Yl(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e);
                    a.googletag ? ? (a.googletag = {
                        cmd: []
                    });
                    var g = a.googletag.queryIds ? ? [];
                    g.push(e);
                    500 < g.length && g.shift();
                    a.googletag.queryIds = g
                } catch {}
                d.dataset.adStatus && jl("adsense_late_fill", {
                    status: d.dataset.adStatus
                });
                d.dataset.adStatus = "filled";
                g = !0
            } else g = !1;
            return g
        })
    };

    function cH(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function eH(a, b, c) {
        try {
            if (!Bh(c.origin) || a.l && !Vl(c, a.l.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Da[d]) && a.L.Eb(168, () => {
            e.call(a, b, c)
        })
    }
    class fH extends Rk {
        constructor(a, b) {
            var c = $k,
                d = Zk;
            super();
            this.m = a;
            this.l = b;
            this.L = c;
            this.aa = d;
            this.Da = {};
            this.Te = this.L.ra(168, (e, f) => void eH(this, e, f));
            this.Ve = this.L.ra(169, (e, f) => Zl(this.m, "ras::xsf", this.aa, f));
            this.W = [];
            this.ja(this.Da);
            this.W.push(ll(this.m, "sth", this.Te, this.Ve))
        }
        j() {
            for (const a of this.W) a();
            this.W.length = 0;
            super.j()
        }
    };
    class gH extends fH {
        constructor(a, b = null) {
            super(a, b);
            this.m = a
        }
    };
    var hH = class extends gH {
        constructor(a, b) {
            super(a, b);
            this.v = () => {};
            this.l && oe(this.l, "load", this.v)
        }
        j() {
            this.l && pe(this.l, "load", this.v);
            super.j();
            this.l = null
        }
        ja(a) {
            a["adsense-labs"] = b => {
                if (b = Yl(b).settings) try {
                    var c = new Yf(JSON.parse(b));
                    if (null != v(c, 1)) {
                        var d = this.m,
                            e = v(c, 1) || "";
                        if (S(pp) ? null != gE({
                                win: d,
                                ec: GF()
                            }).j : 1) {
                            if (S(pp)) {
                                const g = gE({
                                    win: d,
                                    ec: GF()
                                });
                                var f = null != g.j ? HF(g.j.value) : {}
                            } else f = HF(d.localStorage);
                            null !== c && (f[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (g) {}
                        }
                    }
                } catch (g) {}
            }
        }
    };

    function iH(a) {
        a.A = a.C;
        a.F.style.transition = "height 500ms";
        a.v.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        jH(a)
    }

    function kH(a, b) {
        a.l.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function jH(a) {
        const b = `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`;
        a.l.style.clip = b;
        a.v.style.clip = b;
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.v.setAttribute("height", a.A);
        a.v.style.height = a.A + "px";
        a.F.style.height = a.A + "px"
    }

    function lH(a, b) {
        b = mh(b.r_nh);
        a.C = null == b ? 0 : b;
        if (0 >= a.C) return "1";
        a.I = gi(a.F).y;
        a.H = Wl(a.m);
        if (a.I + a.A < a.H) return "2";
        if (a.I > Rl(a.m) - a.m.innerHeight) return "3";
        b = a.H;
        a.l.setAttribute("height", a.C);
        a.l.style.height = a.C + "px";
        a.v.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.v.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        b = Math.min(b + a.m.innerHeight - a.I, a.A);
        ai(a.v, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.l.width}px, ${b}px, 0px)`;
        ai(a.l, {
            clip: b
        });
        ai(a.v, {
            clip: b
        });
        return "0"
    }

    function mH(a, b = {}) {
        a.R && (b.eid = a.R);
        b.qid = a.Kb;
        jl("eoscrl", b, Dl(String(a.Lb)))
    }
    class nH extends gH {
        constructor(a, b) {
            super(a.J, b);
            this.v = a.Z;
            this.F = this.v.parentElement && this.v.parentElement.classList.contains("adsbygoogle") ? this.v.parentElement : this.v;
            this.A = parseInt(this.v.style.height, 10);
            this.R = null;
            this.Mb = this.Nb = !1;
            this.Kb = "";
            this.sa = this.H = this.C = 0;
            this.Ue = this.A / 5;
            this.I = gi(this.F).y;
            this.Lb = null;
            this.Se = ke(il(651, () => {
                this.I = gi(this.F).y;
                var c = this.H;
                this.H = Wl(this.m);
                this.A < this.C ? (c = this.H - c, 0 < c && (this.sa += c, this.sa >= this.Ue ? (iH(this), kH(this, this.C)) : (this.A = Math.min(this.C,
                    this.A + c), kH(this, c), jH(this)))) : pe(this.m, "scroll", this.K)
            }), this);
            this.K = () => {
                var c = this.Se;
                og.requestAnimationFrame ? og.requestAnimationFrame(c) : c()
            }
        }
        ja(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = Yl(b);
                this.R = b.i_expid;
                this.Kb = b.qid;
                this.Lb = b.gen204_fraction;
                this.Nb || (this.Nb = !0, b = lH(this, b), "0" === b && oe(this.m, "scroll", this.K, le), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: "0" === b,
                    googMsgType: "sth"
                }), "*"), mH(this, {
                    err: b
                }))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Mb || (this.Mb = !0, iH(this), pe(this.m, "scroll", this.K))
            }
        }
        j() {
            this.K && pe(this.m, "scroll", this.K, le);
            super.j()
        }
    };

    function oH(a) {
        const b = a.I.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.m.innerHeight) && !c
    }
    class pH extends Rk {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.A = b;
            this.I = c;
            this.C = 0;
            this.v = oH(this);
            this.H = je(this.F, this);
            this.l = il(433, () => {
                var d = this.H;
                og.requestAnimationFrame ? og.requestAnimationFrame(d) : d()
            });
            oe(this.m, "scroll", this.l, le)
        }
        F() {
            const a = oH(this);
            if (a && !this.v) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (nl(c, "ig", b, "*", 2), 10 <= ++this.C && this.l && pe(this.m, "scroll", this.l, le))
            }
            this.v = a
        }
    };

    function qH(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function rH(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function sH(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function tH(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.jd + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        ai(a, "transition", b.join(","))
    }
    var uH = he(function() {
        if (Tb) return !0;
        var a = Mg(document, "DIV"),
            b = Xb ? "-webkit" : Wb ? "-moz" : Tb ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = of ("div", {
            style: c
        });
        rg(a, b);
        a = a.firstChild;
        b = a.style[Dg("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[bi(a, "transition")] || "")
    });

    function vH(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function wH(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function xH(a, b) {
        0 > a.m.indexOf(b) && (a.m = b + a.m)
    }

    function yH(a, b, c, d) {
        return "" != a.m || b ? null : "" == a.j.replace(zH, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function AH(a) {
        var b = yH(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var BH = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.m = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.m].join("|")
        }
    };

    function CH(a) {
        let b = a.W;
        a.H = function() {};
        DH(a, a.G, b);
        let c = a.G.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : dh(c, b)
            } catch (g) {
                xH(a.j, "c")
            }
            const f = EH(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.R = !0);
            if (d && !f && FH(e)) {
                wH(a.j, "l");
                a.I = c;
                break
            }
            d = d && f;
            if (e && GH(a, e)) break;
            c.parentNode && "#document-fragment" === c.parentNode.nodeName && c.parentNode.toString && "[object ShadowRoot]" ===
                c.parentNode.toString() ? c = c.parentNode.host : c = c.parentElement;
            if (!c) {
                if (b === a.Mb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Yg(b)) {
                        wH(a.j, "c");
                        break
                    }
                } catch (g) {
                    wH(a.j, "c");
                    break
                }
            }
        }
        a.F && a.v && HH(a);
        return a.j
    }

    function IH(a) {
        function b() {
            JH(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let n = 0; n < m.length; n++) ai(h, m[n], "0px")
                };
                l(KH);
                l(LH)
            }
        }
        const c = a.G;
        c.style.overflow = a.Lb ? "visible" : "hidden";
        a.F && (a.I ? (tH(c, MH), tH(a.I, MH)) : tH(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.L && (c.style.opacity = a.L);
        const d = null != a.C && null != a.m && (a.sa || a.m > a.C) ? a.m : null,
            e = null != a.B && null != a.l && (a.sa || a.l > a.B) ? a.l : null;
        if (a.K) {
            const l = a.K.length;
            for (let m = 0; m < l; m++) JH(a.K[m], d, e)
        }
        const f = a.m,
            g = a.l,
            h = a.I,
            k = a.R;
        a.F ? t.setTimeout(b, 1E3) : b()
    }

    function NH(a) {
        if (a.v && !a.Kb || null == a.m && null == a.l && null == a.L && a.v) return a.j;
        var b = a.v;
        a.v = !1;
        CH(a);
        a.v = b;
        if (!b || null != a.ja && !yH(a.j, a.ja, a.m, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.C = null, a.B = null);
        if (null == a.C && null !== a.m || null == a.B && null !== a.l) a.F = !1;
        (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.m = "";
        IH(a);
        return CH(a)
    }

    function GH(a, b) {
        let c = !1;
        "none" == b.display && (wH(a.j, "n"), a.v && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || wH(a.j, "v");
        "hidden" == b.overflow && wH(a.j, "o");
        "absolute" == b.position ? (wH(a.j, "a"), c = !0) : "fixed" == b.position && (wH(a.j, "f"), c = !0);
        return c
    }

    function DH(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = OH(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && vH(a.j, 0, "o"), d & 4 && vH(a.j, 1, "o"));
        return !(d & 1)
    }

    function EH(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (C) {
            xH(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = mh(f),
            h = c.getAttribute("height"),
            k = mh(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = DH(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var q = e && e.width,
            r = e && e.height,
            w = oh(m) == a.C && oh(n) == a.B;
        m = w ? m : q;
        r = w ? n : r;
        q = oh(m);
        w = oh(r);
        g = null !== a.C && (null !== q && a.C >= q || null !== g && a.C >= g);
        w = null !== a.B && (null !== w && a.B >= w || null !== k && a.B >= k);
        k = !b && FH(d);
        w = b || w || k || !(f || m || d && (!PH(String(d.minWidth)) || !QH(String(d.maxWidth))));
        l = b || g || k || l || !(h || r || d && (!PH(String(d.minHeight)) || !QH(String(d.maxHeight))));
        RH(a, 0, w, c, "width", f, a.C, a.m);
        SH(a, 0, "d", w, e, d, "width", m, a.C, a.m);
        SH(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.C, a.m);
        SH(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.C, a.m);
        a.Nb ? (c = /^html|body$/i.test(c.nodeName), f = oh(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.v && !c && h && (e.setProperty("height", "auto", "important"), d && !PH(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !QH(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (RH(a, 1, l, c, "height", h, a.B, a.l), SH(a, 1, "d", l, e, d, "height", r, a.B, a.l), SH(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.B, a.l), SH(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.B, a.l));
        return b
    }

    function HH(a) {
        function b() {
            if (0 < c) {
                var l = dh(e, d) || {};
                const m = oh(l.width);
                l = oh(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.W,
            e = a.G,
            f = a.m,
            g = a.l,
            h = a.H;
        let k;
        t.setTimeout(function() {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function OH(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = dh(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.A.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.A.boundingClientRect.left ? 2 : 0) | (c.bottom > a.A.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function RH(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = mh(f);
                null == f && (xH(a.j, "n"), vH(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.v)
                        if (a.F) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.H;
                            a.H = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else vH(a.j, b, "d")
        }
    }

    function SH(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? PH(f) : QH(f)) || (f = oh(f), null == f ? wH(a.j, "p") : null != k && wH(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? PH(h) : QH(h)) return;
                h = oh(h);
                null == h && (xH(a.j, "p"), vH(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.v)
                        if (a.F) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.H;
                            a.H = function(q, r) {
                                q == b && (e[g] = m - r + "px");
                                n && n(q, r)
                            }
                        } else e[g] = l + "px"
                } else vH(a.j, b, c)
        }
    }
    var XH = class {
        constructor(a, b, c, d, e, f, g) {
            this.Mb = a;
            this.K = c;
            this.G = b;
            this.W = (a = this.G.ownerDocument) && (a.defaultView || a.parentWindow);
            this.A = new TH(this.G);
            this.v = g;
            this.Kb = UH(this.A, d.vd, d.height, d.Ge);
            this.C = this.v ? this.A.boundingClientRect ? this.A.boundingClientRect.right - this.A.boundingClientRect.left : null : e;
            this.B = this.v ? this.A.boundingClientRect ? this.A.boundingClientRect.bottom - this.A.boundingClientRect.top : null : f;
            this.m = VH(d.width);
            this.l = VH(d.height);
            this.L = this.v ? VH(d.opacity) : null;
            this.ja =
                d.check;
            this.F = "animate" == d.vd && !WH(this.A, this.l, this.Da) && uH();
            this.Lb = !!d.Dd;
            this.j = new BH;
            WH(this.A, this.l, this.Da) && wH(this.j, "r");
            e = this.A;
            e.j && e.l >= e.m && wH(this.j, "b");
            this.I = this.H = null;
            this.R = !1;
            this.sa = !!d.pg;
            this.Nb = !!d.rg;
            this.Da = !!d.Ge
        }
    };

    function WH(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.v) && (c ? (b = a.l + Math.min(b, VH(a.getHeight())), a = a.j && b >= a.m) : a = a.j && a.l >= a.m, d = a);
        return d
    }
    var TH = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && ah(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || t;
            this.m = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && qH(b);
            this.v = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.v
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function UH(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return WH(a, c, d)
        }
    }

    function FH(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function YH(a, b, c, d) {
        return NH(new XH(a, b, d, c, null, null, !0))
    }
    var ZH = new BH("s", ""),
        zH = RegExp("[lonvafrbpEe]", "g");

    function QH(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function PH(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function JH(a, b, c) {
        null !== b && null !== mh(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== mh(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var KH = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        LH = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let $H = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        aI = KH;
    for (let a = 0; a < aI.length; a++) $H += ", " + aI[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    aI = LH;
    for (let a = 0; a < aI.length; a++) $H += ", " + aI[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var MH = $H;

    function VH(a) {
        return "string" === typeof a ? mh(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function bI(a, b, c) {
        const d = {
            scrl: Wl(a.m || window),
            adk: a.C,
            adf: a.A,
            fmt: a.v
        };
        b && (d.str = WH(b, mh(c.r_nh), nh(c.r_cab)), d.ad_y = b.l, d.vph = b.m);
        fh(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function cI(a, b, c) {
        const d = Dl(String(b.gen204_fraction));
        b = bI(a, c, b);
        b.url = a.m.document.URL;
        jl("resize", b, d)
    }
    var dI = class extends gH {
        constructor(a, b, c) {
            super(a, b);
            this.C = String(c.google_ad_unit_key || "");
            this.A = String(c.google_ad_dom_fingerprint || "");
            this.v = String(c.google_ad_format || "")
        }
        ja(a) {
            a["resize-me"] = (b, c) => {
                b = Yl(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = mh(b.r_nw),
                        f = mh(b.r_nh),
                        g = mh(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = g,
                            l = nh(b.r_ao),
                            m = nh(b.r_ifr),
                            n = nh(b.r_cab);
                        const r = window;
                        if (this.l && r)
                            if ("no_rsz" === h) b.err = "7", cI(this, b, null), f = !0;
                            else if (g = new TH(this.l), g.j) {
                            var q =
                                g.getWidth();
                            null != q && (b.w = q);
                            q = g.getHeight();
                            null != q && (b.h = q);
                            if (UH(g, h, f, n)) {
                                const w = this.l.ownerDocument.getElementById(this.l.id + "_host");
                                q = w || this.l;
                                d = YH(r, q, {
                                    width: e,
                                    height: f,
                                    opacity: k,
                                    check: d,
                                    vd: h,
                                    Dd: l,
                                    pg: m,
                                    Ge: n
                                }, w ? [this.l] : null);
                                b.r_cui && nh(b.r_cui.toString()) && M(q, {
                                    height: (null === f ? 0 : f - 48) + "px",
                                    top: "24px"
                                });
                                null != e && (b.nw = e);
                                null != f && (b.nh = f);
                                b.rsz = d.toString();
                                b.abl = AH(d);
                                b.frsz = ("force" === h).toString();
                                b.err = "0";
                                cI(this, b, g);
                                f = !0
                            } else b.err = "1", cI(this, b, g), f = !1
                        } else b.err = "3", cI(this,
                            b, null), f = !1;
                        else b.err = "2", cI(this, b, null), f = !1
                    }
                    e = {
                        msg_type: "resize-result"
                    };
                    e.r_str = h;
                    e.r_status = f;
                    c = c.source;
                    e.googMsgType = "sth";
                    c.postMessage(JSON.stringify(e), "*");
                    this.l.dataset.googleQueryId || this.l.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
        j() {
            super.j();
            this.l = null
        }
    };
    const eI = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const fI = /^blogger$/,
        gI = /^wordpress(.|\s|$)/i,
        hI = /^joomla!/i,
        iI = /^drupal/i,
        jI = /\/wp-content\//,
        kI = /\/wp-content\/plugins\/advanced-ads/,
        lI = /\/wp-content\/themes\/genesis/,
        mI = /\/wp-content\/plugins\/genesis/;

    function nI(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (kI.test(e)) return 5;
                if (mI.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", lI.test(e) || mI.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (fI.test(f)) return 1;
                if (gI.test(f)) return 2;
                if (hI.test(f)) return 3;
                if (iI.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", jI.test(d))) return 2;
        return 0
    };
    let oI = navigator;
    var pI = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        qI = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return pI(a.toLowerCase())
        };
    const rI = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        sI = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        tI = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var uI = () => {
        const a = new or;
        t.SVGElement && t.document.createElementNS && a.set(0);
        const b = th();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        t.TextDecoder && t.TextEncoder && a.set(4);
        return nr(a)
    };
    var vI = new Map([
        [".google.com", a => N `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => N `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => N `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => N `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => N `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => N `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => N `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => N `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => N `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => N `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => N `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => N `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => N `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => N `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => N `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => N `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => N `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => N `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => N `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => N `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => N `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => N `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => N `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => N `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => N `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => N `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => N `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => N `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => N `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => N `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => N `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => N `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => N `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => N `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => N `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => N `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => N `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => N `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => N `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => N `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => N `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => N `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => N `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => N `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => N `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => N `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => N `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => N `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => N `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => N `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => N `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => N `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => N `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => N `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => N `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => N `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => N `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => N `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => N `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => N `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => N `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => N `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => N `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => N `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => N `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => N `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => N `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => N `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => N `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => N `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => N `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => N `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => N `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => N `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => N `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => N `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => N `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => N `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => N `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => N `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => N `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => N `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => N `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => N `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => N `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => N `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => N `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => N `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => N `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => N `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => N `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => N `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => N `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => N `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => N `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => N `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => N `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => N `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => N `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => N `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => N `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => N `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => N `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => N `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => N `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => N `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => N `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => N `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => N `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => N `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => N `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => N `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => N `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => N `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => N `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => N `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => N `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => N `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => N `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => N `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => N `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => N `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => N `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => N `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => N `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => N `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => N `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => N `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => N `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => N `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => N `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => N `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => N `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => N `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => N `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => N `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => N `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => N `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.rw", a => N `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => N `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => N `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => N `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => N `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => N `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => N `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => N `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => N `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => N `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => N `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => N `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => N `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => N `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => N `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => N `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => N `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => N `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => N `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => N `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => N `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => N `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => N `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => N `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => N `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => N `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => N `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => N `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => N `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => N `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => N `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => N `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => N `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => N `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => N `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => N `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => N `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => N `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => N `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => N `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => N `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => N `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => N `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => N `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a,
        b
    ]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function wI(a, b, c) {
        const d = ch("LINK", a);
        try {
            if (d.rel = "preload", $a("preload", "stylesheet")) {
                d.href = He(b).toString();
                const k = tg('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                k && d.setAttribute("nonce", k)
            } else {
                if (b instanceof Ee) var e = He(b).toString();
                else {
                    if (b instanceof Oe) var f = Pe(b);
                    else {
                        if (b instanceof Oe) var g = b;
                        else {
                            b = "object" == typeof b && b.xa ? b.j() : String(b);
                            b: {
                                let k;
                                try {
                                    k = new URL(b)
                                } catch (l) {
                                    var h = "https:";
                                    break b
                                }
                                h = k.protocol
                            }
                            "javascript:" === h && (b =
                                "about:invalid#zClosurez");
                            g = new Oe(b, Ne)
                        }
                        f = Pe(g)
                    }
                    e = f
                }
                d.href = e
            }
        } catch {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch {}
    };
    let xI = t;
    const zI = a => {
        const b = new Map([
            ["domain", t.location.hostname]
        ]);
        yI[3] >= Ga() && b.set("adsid", yI[1]);
        return Yh(vI.get(a).js, b)
    };
    let yI, AI;
    const BI = () => {
        xI = t;
        yI = xI.googleToken = xI.googleToken || {};
        const a = Ga();
        yI[1] && yI[3] > a && 0 < yI[2] || (yI[1] = "", yI[2] = -1, yI[3] = -1, yI[4] = "", yI[6] = "");
        AI = xI.googleIMState = xI.googleIMState || {};
        vI.has(AI[1]) || (AI[1] = ".google.com");
        Array.isArray(AI[5]) || (AI[5] = []);
        "boolean" !== typeof AI[6] && (AI[6] = !1);
        Array.isArray(AI[7]) || (AI[7] = []);
        "number" !== typeof AI[8] && (AI[8] = 0)
    };
    var CI = a => {
        BI();
        vI.has(a) && (AI[1] = a)
    };
    const DI = {
        Rc: () => 0 < AI[8],
        mg: () => {
            AI[8]++
        },
        ng: () => {
            0 < AI[8] && AI[8]--
        },
        og: () => {
            AI[8] = 0
        },
        Sk: () => !1,
        Yd: () => AI[5],
        Jd: a => {
            try {
                a()
            } catch (b) {
                t.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        Ce: () => {
            if (!DI.Rc()) {
                var a = t.document,
                    b = e => {
                        e = zI(e);
                        a: {
                            try {
                                var f = tg("script[nonce]");
                                break a
                            } catch {}
                            f = void 0
                        }
                        wI(a, e.toString(), f);
                        f = ch("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => t.processGoogleToken({}, 2);
                        If(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), DI.mg()
                        } catch (g) {}
                    },
                    c = AI[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                t.setTimeout(() => t.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function EI(a) {
        BI();
        const b = xI.googleToken[5] || 0;
        a && (0 != b || yI[3] >= Ga() ? DI.Jd(a) : (DI.Yd().push(a), DI.Ce()));
        yI[3] >= Ga() && yI[2] >= Ga() || DI.Ce()
    }
    var GI = a => {
        t.processGoogleToken = t.processGoogleToken || ((b, c) => FI(b, c));
        EI(a)
    };
    const FI = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        BI();
        1 == b ? DI.og() : DI.ng();
        var h = xI.googleToken = xI.googleToken || {},
            k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !DI.Rc() && (!(yI[3] >= Ga()) || "NT" == yI[1]);
        var l = !(yI[3] >= Ga()) && 0 != b;
        if (k || d || l) d = Ga(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && Ei(t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, BI();
        if (k || !DI.Rc()) {
            b = DI.Yd();
            for (c = 0; c < b.length; c++) DI.Jd(b[c]);
            b.length = 0
        }
    };
    const HI = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        II = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function JI(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return HI.get(b.type) ? ? null
        } catch {}
        return II.get(a.performance ? .navigation ? .type) ? ? null
    };

    function KI(a, b) {
        if (wb()) {
            var c = a.document.documentElement.lang;
            LI(a) ? MI(b, Eh(a), !0, "", c) : (new MutationObserver((d, e) => {
                LI(a) && (MI(b, Eh(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function LI(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function MI(a, b, c, d, e) {
        Hi({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function NI(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const OI = /[+, ]/;

    function PI(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = Hh(d);
        var h = qr(d, c.google_ad_width, c.google_ad_height);
        var k = pr(g).Vc;
        var l = d.top == d ? 0 : Yg(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != l ? h || 2 != l ? h && 1 == l ? m = 7 : h && 2 == l && (m = 8) : m = 6 : m = 5;
        k && (m |= 16);
        k = "" + m;
        l = sr(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        0 != l && (e.google_iframing_environment = l);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                k = decodeURIComponent(k)
            } catch (q) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && Yg(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = Rh()) && d.referrer || "";
        e.google_referrer_url = d;
        rr(e, c);
        e = c.google_page_location ||
            c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in eI), 2 <= e.length && (d = d || e[e.length - 2] in eI), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = QI(a, b);
        d = a.D;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" === d.google_ad_client && RI.test(f) &&
            (g = "/pagead/lopri?");
        a = pi(b, `https://${e}${g}` + (B(a.la, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function SI(a) {
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + oi({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        })
    }

    function TI(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = a ? Kg(a) : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && Yg(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function UI(a, b) {
        b.eid = PF(a.pubWin);
        const c = a.D.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function VI(a, b) {
        a = (a = ah(a.pubWin)) && a.document ? lr(a.document, a) : new xg(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function WI(a) {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function XI(a) {
        const b = Ti();
        b && (a.debug_experiment_id = b);
        a.creatives = WI(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = WI(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    }

    function YI(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.J,
            g = Hh(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Rh(e)) && ua(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = pr(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Vc || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.sb && (b.etu = a.sb);
        (c = zG(d, f, f ? $D(c, f) : null)) && (b.fc = c);
        if (!yi(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode &&
                (h = (new Gg(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const Z = h.contentWindow.document;
                    Z.open();
                    Z.write(kf(yf));
                    Z.close();
                    g += Z.documentMode
                } catch (Z) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let k, l, m, n, q, r, w, C, z;
        try {
            var A = e.screenX;
            k = e.screenY
        } catch (Z) {}
        try {
            l = e.outerWidth, m = e.outerHeight
        } catch (Z) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (Z) {}
        try {
            r = e.screenLeft, w = e.screenTop
        } catch (Z) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (Z) {}
        try {
            C =
                e.screen.availWidth, z = e.screen.availTop
        } catch (Z) {}
        b.brdim = [r, w, A, k, C, z, l, m, n, q].join();
        A = 0;
        void 0 === t.postMessage && (A |= 1);
        0 < A && (b.osd = A);
        b.vis = qH(e.document);
        A = a.Z;
        e = tG(d) ? ZH : NH(new XH(e, A, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = AH(e);
        if (!tG(d) && (e = zi(d), null != e)) {
            A = 0;
            a: {
                try {
                    {
                        var I = d.google_async_iframe_id;
                        const Z = window.document;
                        if (I) var D = Z.getElementById(I);
                        else {
                            var F = Z.getElementsByTagName("script"),
                                H = F[F.length - 1];
                            D = H && H.parentNode || null
                        }
                    }
                    if (I =
                        D) {
                        D = [];
                        F = 0;
                        for (var U = Date.now(); 100 >= ++F && 50 > Date.now() - U && (I = TI(I));) 1 === I.nodeType && D.push(I);
                        var Ia = D;
                        b: {
                            for (U = 0; U < Ia.length; U++) {
                                c: {
                                    var ba = Ia[U];
                                    try {
                                        if (ba.parentNode && 0 < ba.offsetWidth && 0 < ba.offsetHeight && ba.style && "none" !== ba.style.display && "hidden" !== ba.style.visibility && (!ba.style.opacity || 0 !== Number(ba.style.opacity))) {
                                            const Z = ba.getBoundingClientRect();
                                            var aa = 0 < Z.right && 0 < Z.bottom;
                                            break c
                                        }
                                    } catch (Z) {}
                                    aa = !1
                                }
                                if (!aa) {
                                    var za = !1;
                                    break b
                                }
                            }
                            za = !0
                        }
                        if (za) {
                            b: {
                                const Z = Date.now();za = /^html|body$/i;aa =
                                /^fixed/i;
                                for (ba = 0; ba < Ia.length && 50 > Date.now() - Z; ba++) {
                                    const de = Ia[ba];
                                    if (!za.test(de.tagName) && aa.test(de.style.position || ei(de, "position"))) {
                                        var ra = de;
                                        break b
                                    }
                                }
                                ra = null
                            }
                            break a
                        }
                    }
                } catch {}
                ra = null
            }
            ra && ra.offsetWidth * ra.offsetHeight <= 4 * e.width * e.height && (A = 1);
            b.pfx = A
        }
        a: {
            if (.05 > Math.random() && f) try {
                const Z = f.document.getElementsByTagName("head")[0];
                var od = Z ? nI(Z) : 0;
                break a
            } catch (Z) {}
            od = 0
        }
        f = od;
        0 !== f && (b.cms = f);
        d.google_lrv !== a.Ja && (b.alvm = d.google_lrv || "none")
    }

    function ZI(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Zg(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function $I(a, b) {
        const c = Y(b, 8, {});
        b = Y(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function aJ(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = Cl;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = t.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (H) {}
            g = null
        }(e = (e = g) ? bH(e, t.Date.now() - Cl, 1E6) : null) && (b.bdt = e);
        b.idt = bH(a.F, Cl);
        e = a.D;
        b.shv = K(a.la, 2);
        a.Ja && (b.mjsv = a.Ja);
        "sa" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = Rh(a.pubWin)) b.is_amp = 1, b.amp_v = Sh(e), (e = Th(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            e = !0;
            if (!S(Lp) && (e = a.pubWin._gfp_a_, "boolean" !== typeof e)) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
            if (e || S(Lp)) e = new UF(a.pubWin), (g = QF(e, "__gads", c)) && (b.cookie = g), (g = QF(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g), "1" === QF(e, "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1")
        }
        e = $C();
        f = Y(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = Y(e, 9, {});
        f[g] && (b.prev_slotnames =
            f[g].toLowerCase());
        $I(d, e);
        g = Y(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = Rh(window)) ? (f ? (g = f.pageViewId, f = f.clientId, "string" === typeof f && (g += f.replace(/\D/g, "").substr(0, 6))) : g = null, g = +g) : (g = Hh(window), (f = g.google_global_correlator) || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = Y(e, 7, g);
        S(pq) && (b.rume = 1);
        if (d.google_ad_channel) {
            g = Y(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(OI);
            for (var k = 0; k < h.length; k++) {
                var l = h[k];
                g[l] ? f += l + "+" : g[l] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f =
                Y(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (k = 0; k < h.length; k++) {
                l = h[k].split(OI);
                f[k] || (f[k] = {});
                var m = "";
                for (var n = 0; n < l.length; n++) {
                    var q = l[n];
                    "" !== q && (f[k][q] ? m += "+" + q : f[k][q] = !0)
                }
                m = m.slice(1);
                g[k] = m;
                "" !== m && (e = k)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var r = Hh(window),
                w = r.google_prev_clients;
            w || (w = r.google_prev_clients = {});
            if (e in w) var C = 1;
            else w[e] = !0, C = 2
        } catch {
            C = 0
        }
        b.pv =
            C;
        a.J && S(Up) && (C = a.J, C = wb() && LI(C) ? C.document.documentElement.lang : void 0, C && (b.tl = C));
        w = a.pubWin.document;
        C = a.D;
        e = a.pubWin;
        r = w.domain;
        e = (y(c, 5) && aE(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        k = w.referrer;
        m = ri();
        if (Rh()) var z = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = C.google_analytics_domain_name;
            c = "undefined" == typeof f ? qI("auto", r) : qI(f, r);
            n = -1 < e.indexOf("__utma=" + c + ".");
            l = -1 < e.indexOf("__utmb=" + c);
            (r = (Wh() || window).gaGlobal) || (r = {}, (Wh() || window).gaGlobal = r);
            w = !1;
            if (n) {
                var A = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                l ? r.sid = A[3] : r.sid || (r.sid = g + "");
                r.vid = A[0] + "." + A[1];
                r.from_cookie = !0
            } else {
                r.sid || (r.sid = g + "");
                if (!r.vid) {
                    w = !0;
                    l = Math.round(2147483647 * Math.random());
                    n = oI.appName;
                    q = oI.version;
                    var I = oI.language ? oI.language : oI.browserLanguage,
                        D = oI.platform,
                        F = oI.userAgent;
                    try {
                        A = oI.javaEnabled()
                    } catch (H) {
                        A = !1
                    }
                    A = [n, q, I, D, F, A ? 1 : 0].join("");
                    h ? A += h.width + "x" + h.height + h.colorDepth : t.java && t.java.awt && (h = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(),
                        A += h.screen.width + "x" + h.screen.height);
                    A = A + e + (k || "");
                    for (h = A.length; 0 < m;) A += m-- ^ h++;
                    r.vid = (l ^ pI(A) & 2147483647) + "." + g
                }
                r.from_cookie || (r.from_cookie = !1)
            }
            if (!r.cid) {
                b: for (g = f, A = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, A = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = rI.exec(e[f]) || sI.exec(e[f]) || tI.exec(e[f])) {
                        k = h[1] || 0;
                        if (k == A) {
                            z = h[2];
                            break b
                        }
                        k < g && (g = k, z = h[2])
                    }w && z && -1 != z.search(/^\d+\.\d+$/) ? (r.vid = z, r.from_cookie = !0) : z != r.vid && (r.cid = z)
            }
            r.dh = c;
            r.hid || (r.hid = Math.round(2147483647 *
                Math.random()));
            z = r
        }
        b.ga_vid = z.vid;
        b.ga_sid = z.sid;
        b.ga_hid = z.hid;
        b.ga_fc = z.from_cookie;
        b.ga_cid = z.cid;
        b.ga_wpids = C.google_analytics_uacct;
        ZI(a.pubWin, b);
        (a = d.google_ad_layout) && 0 <= RG[a] && (b.rplot = RG[a])
    }

    function bJ(a, b) {
        a = a.l;
        if (a ? .j() || iD()) b.npa = 1;
        if (a) {
            null != v(a, 3, !1) && (b.gdpr = y(a, 3) ? "1" : "0");
            var c = v(a, 1);
            c && (b.us_privacy = c);
            (c = v(a, 2)) && (b.gdpr_consent = c);
            (c = v(a, 4)) && (b.addtl_consent = c);
            (a = v(a, 7)) && (b.tcfe = a)
        }
    }

    function cJ(a, b) {
        const c = a.D;
        bJ(a, b);
        fh(kD, (d, e) => {
            b[d] = c[e]
        });
        tG(c) && (a = HG(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = Es(c), null != a.j && (a = Bn(a.j.value), b.pi = a))
    }

    function dJ(a, b) {
        var c = Vh() || jr(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = jr(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function eJ(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = jr(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = hh(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function fJ(a, b) {
        (a = gD()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function gJ(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function hJ(a, b) {
        if (a = a.pubWin.google_user_agent_client_hint) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                255 < f && (c[d++] = f & 255, f >>= 8);
                c[d++] = f
            }
            a = ic(c, 3);
            b.uach = a
        }
    }

    function iJ(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch {}
    }

    function jJ(a, b) {
        0 <= a.D.google_ad_public_floor && (b.pubf = a.D.google_ad_public_floor);
        0 <= a.D.google_ad_private_floor && (b.pvtf = a.D.google_ad_private_floor)
    }

    function kJ(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(Ma).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function lJ(a, b) {
        S(Zq) || "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1)
    }

    function mJ(a, b) {
        S(sq) || JF("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function QI(a, b) {
        const c = {};
        cJ(a, c);
        BI();
        c.adsid = yI[1];
        BI();
        c.pucrd = yI[6];
        hJ(a, c);
        aJ(a, c, b);
        ui(c);
        c.u_sd = kr(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        bl(889, () => {
            if (null == a.J) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = vF(a.J, a.Z);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                mr(a.Z) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        dJ(a, c);
        eJ(a, c);
        VI(a, c);
        UI(a, c);
        a.G && (c.oid = a.G);
        fJ(a, c);
        c.pvsid = Eh(a.pubWin, $k);
        gJ(a, c);
        iJ(a, c);
        c.uas = NI(a.pubWin);
        const d = JI(a.pubWin);
        d && (c.nvt = d);
        a.B && (c.scar = a.B);
        a.v instanceof Uint8Array ? c.topics = ic(a.v, 3) : a.v && (c.topics = a.v, c.tps = a.v);
        YI(a, c, b);
        c.fu = a.j;
        c.bc = uI();
        BI();
        c.jar = yI[4];
        B(a.la, 9) && XI(c);
        wl() && (c.atl = !0);
        jJ(a, c);
        kJ(a, c);
        lJ(a, c);
        mJ(a, c);
        null == ar(lq) || !1 !== a.D.google_video_play_muted && !0 !== S(mq) || 10 !== a.D.google_reactive_ad_format && 11 !== a.D.google_reactive_ad_format || (c.sdkv = ar(lq));
        return c
    }
    const RI = /YtLoPri/;
    var nJ = class extends L {
            constructor(a) {
                super(a)
            }
        },
        oJ = Wd(nJ);
    var pJ = class {
        constructor(a) {
            this.j = a
        }
        Ia() {
            return this.j.now()
        }
    };
    const qJ = [255, 255, 255];

    function rJ(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function sJ(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = rJ(b.backgroundColor);
        var c = tJ(b);
        if (c) return c;
        a = (a = a.parentElement) ? sJ(a) : qJ;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function tJ(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var vJ = class {
        constructor(a, b, c, d) {
            this.od = b;
            this.Gc = c;
            this.bb = d;
            this.l = 0;
            this.j = new uJ(a)
        }
    };
    class uJ {
        constructor(a) {
            this.v = a;
            this.j = new Map;
            this.l = 0
        }
        get m() {
            return this.l
        }
    };

    function wJ(a) {
        M(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function xJ(a, b, c, d, e) {
        var f = new Ak;
        d = Bd(f, 4, d);
        a = x(d, 1, a);
        b = x(a, 2, b);
        c = x(b, 3, c);
        e = e.A;
        b = e.handle;
        a = yJ(e, 4);
        c = qd(a, 8, Jk, c);
        return b.call(e, c)
    };
    const zJ = [{
        Hb: "1907259590",
        nc: 480,
        Qa: 220
    }, {
        Hb: "2837189651",
        nc: 400,
        Qa: 180
    }, {
        Hb: "9211025045",
        nc: 360,
        Qa: 160
    }, {
        Hb: "6584860439",
        nc: -Infinity,
        Qa: 150
    }];

    function AJ(a) {
        return zJ.find(b => b.nc <= a)
    };
    const BJ = new class {
        constructor() {
            this.j = []
        }
    };
    let CJ = !1;

    function DJ(a) {
        return EJ(a.j, 1065, a.win, () => {
            if (!a.l) {
                var b = new Gk;
                b = J(b, 1, a.m);
                var c = new Fk;
                b = qd(b, 2, Hk, c);
                FJ(a.j.A, b)
            }
        }, 1E4)
    }
    class GJ {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.m = c;
            this.l = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function HJ(a, b, c, d, e) {
        const f = AJ(a.document.body.clientWidth),
            g = b.l ? IJ(a, b, d, f, e) : JJ(a, b, d, f, e);
        um(g.isVisible(), !1, () => {
            CJ = !1;
            for (const l of BJ.j) l();
            BJ.j.length = 0
        });
        g.show({
            Rd: !0
        });
        CJ = !0;
        const h = new GJ(a, b, c),
            k = DJ(h);
        BJ.j.push(() => {
            var l = b.A;
            var m = new Gk;
            m = J(m, 1, c);
            var n = new Ek;
            m = qd(m, 3, Hk, n);
            FJ(l, m);
            h.l = !0
        });
        KJ.push(() => {
            g.isVisible().M && g.collapse();
            h.cancel(k)
        })
    }

    function IJ(a, b, c, d, e) {
        b = LJ(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center", e);
        return Vx(a, b, {
            gd: .75,
            Qc: .95,
            zIndex: 100001,
            Ga: !0,
            Nc: "adpub-drawer-root",
            Mc: !0
        })
    }

    function JJ(a, b, c, d, e) {
        a: {
            var f = a.document.body.clientWidth;
            var g = .9 * f;
            for (f = 768 >= f ? 3 : 4; 1 <= f; f--) {
                const h = d.Qa * f + 42;
                if (h <= g) {
                    g = h;
                    break a
                }
            }
        }
        c = LJ(a, b, c, d, g, "600px", "24px", "24px", "start", e);
        return ex(a, c, {
            vb: `${g}px`,
            ub: MJ(b),
            lb: K(b.j, 14),
            zIndex: 100001,
            Ga: !0,
            Wb: !1,
            Nc: "adpub-drawer-root",
            Mc: !0
        })
    }

    function LJ(a, b, c, d, e, f, g, h, k, l) {
        var m = b.j,
            n = K(m, 10),
            q = n.indexOf("TERM"),
            r = b.H;
        var w = S(Xq) ? {
            Ne: r.replace("ca", "partner"),
            yd: "ads"
        } : {
            Ne: "pub-adfiliates-rockskipper",
            yd: "ads"
        };
        r = "";
        S(Tq) && (r = b.G.get(c) || "");
        e = Math.max(Math.floor((e - Math.floor(e / d.Qa) * d.Qa) / 2), 5);
        var C = b.I ? "on" : "",
            z = K(m, 3),
            A = S(Wq) ? `${b.v.jb}` : `${T(Mq)}`,
            I = b.v.Vb,
            D = r;
        const F = K(m, 7),
            H = K(m, 6),
            U = b.H,
            Ia = n.substring(0, q);
        n = n.substring(q + 4);
        q = d.Hb;
        const ba = w.Ne;
        w = w.yd;
        const aa = !!B(m, 13);
        D = void 0 === D ? "" : D;
        f = Fv('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            Jv(V(g)) + " " + Jv(V(h)) + "; text-align: " + Jv(V(k)) + ';">' + (l ? '<div style="max-width: ' + Jv(V(f)) + '">' + Ev(z) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Ev(H) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + Jv(V(g)) + "; text-align: " + Jv(V(k)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">search</span><span style="color:#80868b"> ' +
            Ev(Ia) + "</span>" + Ev(c) + '<span style="color:#80868b">' + Ev(n) + '</span></div></div><div id="anno-csa" style="margin:5px ' + Jv(V(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');" + (I ? "parent.postMessage({query:" + Nv(Ov(c)) + "},parent.location.origin);" : "const pageOptions = {'pubId': " + Nv(Ov(ba)) + ", 'styleId': " + Nv(Ov(q)) + ", 'disableCarousel': true, 'query': " + Nv(Ov(c)) + ", 'hl': " + Nv(Ov(F)) + ", 'personalizedAds': 'false', 'fexp': " +
                Nv(Ov(A)) + ", 'adfiliateWp': " + Nv(Ov(U)) + "," + (D ? "'afdToken': " + Nv(Ov(D)) + "," : "") + "'adtest': " + Nv(Ov(C)) + "}; const adBlock = {'container': 'anno-csa', 'linkTarget': '_blank', 'number': " + Nv(Ov(8)) + ", 'width': document.body.offsetWidth - 30}; _googCsa(" + Nv(Ov(w)) + ", pageOptions, adBlock);") + "\x3c/script>" + (aa ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" :
                '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') + "</div>");
        m = of ("body", {
            dir: MJ(b) ? "rtl" : "ltr",
            lang: K(m, 7),
            style: Xe({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: "hidden"
            })
        }, Av(f));
        f = a.document.createElement("IFRAME");
        M(f, {
            border: "0",
            width: "100%"
        });
        b.v.Vb ? NJ(a, b, f, c, d, r) : OJ(a, b, f);
        f.srcdoc = kf(m);
        return f
    }

    function NJ(a, b, c, d, e, f) {
        const g = PJ(b, a, function(h) {
            h.data.query === d && QJ(a, b, c, d, e, f)
        });
        BJ.j.push(() => {
            a.removeEventListener("message", g)
        })
    }

    function QJ(a, b, c, d, e, f) {
        const g = c.contentDocument.body,
            h = new ResizeObserver(() => {
                c.height = `${g.parentElement.offsetHeight}px`
            });
        h.observe(g);
        const k = RJ(b, a, () => {
            const l = c.contentDocument ? .body ? .parentElement ? .offsetHeight;
            l && (c.height = `${l}px`)
        });
        SJ(b, c, d, e, f);
        KJ.push(() => {
            h.disconnect();
            a.clearInterval(k)
        })
    }

    function OJ(a, b, c) {
        function d(g) {
            const h = new ResizeObserver(() => {
                c.height = `${g.parentElement.offsetHeight}px`
            });
            h.observe(g);
            const k = RJ(b, a, () => {
                const l = c.contentDocument ? .body ? .parentElement ? .offsetHeight;
                l && (c.height = `${l}px`)
            });
            KJ.push(() => {
                h.disconnect();
                a.clearInterval(k)
            })
        }

        function e() {
            if (!f) {
                const g = c.contentDocument ? .body || c.contentWindow ? .document ? .body;
                g && (f = !0, d(g))
            }
            return f
        }
        let f = !1;
        c.onload = () => void e();
        b.za(1066, oD(a, () => e(), 100))
    }

    function SJ(a, b, c, d, e) {
        const f = a.j,
            g = b.contentWindow;
        b = b ? .contentDocument || b.contentWindow ? .document;
        if (g) {
            if (void 0 === g._googCsa) throw Error("No _googCsa");
            if (!b) throw Error("No contentDocument");
        } else throw Error("No googCsa window");
        a = {
            pubId: "pub-adfiliates-rockskipper",
            styleId: d.Hb,
            disableCarousel: !0,
            query: c,
            hl: K(f, 7),
            personalizedAds: "false",
            fexp: S(Wq) ? `${a.v.jb}` : `${T(Mq)}`,
            adfiliateWp: a.H,
            adtest: a.I ? "on" : ""
        };
        e && (a.afdToken = e);
        g._googCsa("ads", a, {
            container: "anno-csa",
            linkTarget: "_blank",
            number: 8,
            width: b.body.offsetWidth - 30
        })
    }
    const KJ = [];

    function TJ(a, b, c) {
        return a.substring(Math.max(b - 30, 0), b) + "~~" + a.substring(c, Math.min(c + 30, a.length))
    }

    function UJ(a) {
        a = rJ(a);
        var b = new ok;
        b = jd(b, 1, a[0], 0);
        b = jd(b, 2, a[1], 0);
        b = jd(b, 3, a[2], 0);
        return jd(b, 4, Sc(a[3]), 0)
    };
    class VJ {
        constructor(a, b) {
            this.m = a;
            this.j = !1;
            this.v = b;
            this.l = this.v.ra(264, c => {
                this.j && (WJ || (c = Date.now()), this.m(c), WJ ? XJ.call(t, this.l) : t.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, WJ ? XJ.call(t, this.l) : this.l(0))
        }
    }
    var XJ = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
        WJ = !!XJ && !/'iPhone'/.test(t.navigator.userAgent);

    function YJ(a) {
        return a * a * a
    }

    function ZJ(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class $J {
        constructor(a, b, c) {
            this.j = a;
            this.B = b;
            this.H = 100;
            this.progress = 0;
            this.l = null;
            this.F = !1;
            this.m = [];
            this.v = null;
            this.A = new VJ(Ca(this.I, this), c)
        }
        I(a) {
            if (this.F) this.A.j = !1;
            else {
                null === this.l && (this.l = a);
                this.progress = (a - this.l) / this.H;
                1 <= this.progress && (this.progress = 1);
                a = this.v ? this.v(this.progress) : this.progress;
                this.m = [];
                for (let b = 0; b < this.j.length; b++) this.m.push((this.B[b] - this.j[b]) * a + this.j[b]);
                this.C();
                1 == this.progress && (this.A.j = !1, this.G())
            }
        }
        G() {}
        C() {}
        play() {
            this.F = !1;
            this.A.start()
        }
        reset(a,
            b, c) {
            this.l = null;
            this.j = a;
            this.B = b;
            this.H = c;
            this.progress = 0
        }
    };
    var aK = class {
        constructor(a, b, c, d) {
            this.C = a;
            this.G = b;
            this.m = c;
            this.B = d
        }
        get j() {
            return this.C
        }
        get A() {
            return this.G
        }
        get v() {
            return this.m
        }
        get l() {
            return this.B
        }
    };

    function bK(a, b) {
        a = cK(a.document, "search");
        M(a, b);
        a.className = "google-material-icons";
        return a
    }

    function dK(a, b) {
        a = cK(a, "close");
        M(a, {
            color: "#5F6368",
            display: "block",
            "font-size": "15px",
            left: b ? "" : "20px",
            right: b ? "20px" : "",
            "pointer-events": "initial",
            position: "absolute",
            top: "16px",
            transform: "none"
        });
        return a
    }

    function eK(a, b, c) {
        a = cK(a, "expand_more");
        M(a, {
            color: "#5F6368",
            cursor: "pointer",
            display: "block",
            "font-size": "15px",
            left: c ? "" : "0",
            right: c ? "0" : "",
            padding: c ? "0 0 0 16px" : "0 16px 0 0",
            "pointer-events": "initial",
            position: "absolute",
            top: "20px",
            transform: `${b}`
        });
        return a
    }

    function cK(a, b) {
        const c = a.createElement("SPAN");
        c.appendChild(a.createTextNode(b));
        wJ(c);
        M(c, {
            "font-family": '"Google Material Icons"',
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none"
        });
        c.className = "google-material-icons";
        return c
    };

    function fK(a, b, c) {
        return kw({
            J: a,
            Xc: 3E3,
            Zc: a.innerWidth > Ol ? 650 : 0,
            aa: c,
            Kd: b
        })
    }

    function gK(a) {
        return a.document.getElementById("google-anno-sa")
    }

    function hK(a, b) {
        const c = document.createElement("SPAN");
        c.id = "gda";
        c.appendChild(dK(a.document, b.l === MJ(b)));
        iK(b, 1064, c, d => {
            const e = MJ(b);
            var f = (b.l ? e : !e) ? a.innerWidth : -a.innerWidth;
            jK(b, gK(a), 0, f, YJ).play();
            const g = kK(b);
            b.v.wc ? (f = cK(a.document, "shoppingmode"), M(f, {
                "font-size": "18px",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }), g.appendChild(f)) : g.appendChild(bK(a, {
                "font-size": "18px",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }));
            iK(b, 1064, g, h => {
                const k = (b.l ? e : !e) ? a.innerWidth : -a.innerWidth;
                jK(b, gK(a), k, 0, ZJ).play();
                a.document.body.removeChild(g);
                h.preventDefault();
                return !1
            });
            a.document.body.appendChild(g);
            d.preventDefault();
            return !1
        });
        return c
    }

    function kK(a) {
        const b = document.createElement("div");
        b.id = "gca";
        const c = MJ(a);
        a = a.l ? c : !c;
        M(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": "1000"
        });
        return b
    }

    function lK(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && M(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function mK(a) {
        try {
            return null !== a.location ? .href ? .match(/goog_fsa=1/)
        } catch (b) {
            return !1
        }
    }

    function nK(a, b, c) {
        var d = K(c.j, 11);
        b = b.getElementsByClassName("google-anno-sa-qtx")[0];
        b instanceof HTMLElement && (b.innerText = d.replace("TERM", a.j));
        c = c.A;
        d = new ck;
        d = x(d, 1, a.m);
        d = Bd(d, 4, a.j);
        a = c.handle;
        b = yJ(c, 7);
        d = qd(b, 6, Jk, d);
        return a.call(c, d)
    }

    function oK(a, b, c, d, e) {
        if (a.j !== d || null !== a.m || a.v !== e) {
            if (null !== a.l) {
                var f = a.l,
                    g = c.A;
                var h = new bk;
                h = J(h, 1, f);
                f = g.handle;
                var k = yJ(g, 8);
                h = qd(k, 7, Jk, h);
                f.call(g, h)
            }
            a.j = d;
            a.m = null;
            a.v = e;
            (d = gK(b)) ? a.l = nK(a, d, c): (ow(b) ? b = null : (d = b.getComputedStyle(b.document.body).paddingBottom.match(/\d+/), M(b.document.body, {
                "padding-bottom": (d && d.length ? Number(d[0]) + 45 : 45) + "px"
            }), lK(b), d = document.createElement("div"), d.id = "google-anno-sa", d.dir = MJ(c) ? "rtl" : "ltr", M(d, {
                background: "white",
                "border-style": "solid",
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                bottom: "0",
                height: "45px",
                position: "fixed",
                "text-align": "center",
                width: "100%",
                border: "0px",
                left: "0px",
                "box-shadow": "0px 0px 10px 0px #00000026",
                "z-index": "1000"
            }), d.appendChild(hK(b, c)), d.appendChild(pK(a, b, c)), d.appendChild(qK(a, b, c)), c = nK(a, d, c), b.document.body.appendChild(d), b = c), a.l = b)
        }
    }

    function pK(a, b, c) {
        const d = document.createElement("SPAN");
        wJ(d);
        M(d, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var e = MJ(c);
        c.l || M(d, {
            "justify-content": ""
        });
        e = {
            "font-size": "18px",
            width: "15px",
            height: "15px",
            "margin-left": e ? "8px" : "",
            "margin-right": e ? "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        };
        if (c.v.wc) {
            const f = cK(b.document, "shoppingmode");
            M(f, e);
            d.appendChild(f)
        } else d.appendChild(bK(b,
            e));
        e = document.createElement("SPAN");
        e.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        M(e, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        iK(c, 999, d, f => rK(a, b, c, f));
        d.appendChild(e);
        return d
    }

    function qK(a, b, c) {
        const d = document.createElement("DIV");
        d.id = "google-anno-ea";
        c.l || M(d, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        d.appendChild(eK(b.document, c.l ? "rotate(180deg) translateY(5px)" : MJ(c) ? "rotate(270deg) translateX(-5px)" : "rotate(90deg) translateX(5px)", c.l !== MJ(c)));
        iK(c, 999, d, e => rK(a, b, c, e));
        return d
    }

    function rK(a, b, c, d) {
        const e = xJ(a.m, null, a.l, a.j, c);
        HJ(b, c, e, a.j, !1);
        d.preventDefault();
        return !1
    }
    var sK = class {
        constructor() {
            this.j = "";
            this.m = null;
            this.v = "";
            this.l = null
        }
    };

    function tK(a) {
        a.j >= a.l.length && (a.j = 0);
        if (CJ) BJ.j.push(() => void tK(a));
        else {
            var b = a.l[a.j++];
            a.v = !1;
            oK(a.A, a.win, a.m, b.j, b.l);
            EJ(a.m, 898, a.win, () => void tK(a), a.B)
        }
    }
    var uK = class {
        constructor(a, b, c) {
            var d = new sK;
            this.B = a;
            this.win = b;
            this.m = c;
            this.A = d;
            this.l = [];
            this.v = !0;
            this.j = 0
        }
    };
    class vK {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    const wK = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function xK(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || wK.test(a)
        }
    }

    function yK(a, b, c, d) {
        return xK(a.charAt(b - 1), d) && xK(a.charAt(c + 1), d)
    };

    function zK(a, b, c) {
        c = new AK(c);
        for (const f of a) {
            a = f;
            var d = b,
                e = c;
            const g = K(a, 1);
            if (1 === d && B(a, 3)) BK(e, g, g);
            else if (2 === d) {
                B(a, 4) && BK(e, g, g);
                for (const h of gd(a, 5, Yc)) BK(e, h, g)
            }
        }
        CK(c);
        return new DK(c)
    }

    function EK(a, b, c) {
        c = new AK(c);
        for (const d of a)
            for (const e of G(d, gg, 2)) ed(e, 3).length && !ed(e, 3).includes(b) || BK(c, K(e, 1), K(d, 1));
        CK(c);
        return new DK(c)
    }
    var DK = class {
        constructor(a) {
            this.j = a
        }
        match(a) {
            return this.j.match(a)
        }
    };

    function BK(a, b, c) {
        const d = a.v.has(c) ? a.v.get(c) : a.B++;
        a.v.set(c, d);
        a.m.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.j[c].contains(f) || (a.j.push(new FK), a.j[a.size].B = c, a.j[a.size].G = f, a.j[c].m.set(f, a.size), a.size++);
            c = a.j[c].m.get(f)
        }
        a.j[c].A = !0;
        a.j[c].v = d;
        a.j[c].C = a.l.length;
        a.l.push(b.length)
    }

    function CK(a) {
        const b = [];
        for (b.push(0); 0 < b.length;) {
            const g = b.shift();
            var c = a,
                d = g,
                e = c.j[d];
            if (0 === d) e.j = 0, e.l = 0;
            else if (0 === e.B) e.j = 0, e.l = e.A ? d : c.j[c.j[d].j].l;
            else {
                e = c.j[c.j[d].B].j;
                for (var f = c.j[d].G;;) {
                    if (c.j[e].contains(f)) {
                        c.j[d].j = c.j[e].m.get(f);
                        break
                    }
                    if (0 === e) {
                        c.j[d].j = 0;
                        break
                    }
                    e = c.j[e].j
                }
                c.j[d].l = c.j[d].A ? d : c.j[c.j[d].j].l
            }
            for (const h of a.j[g].childNodes) b.push(h)
        }
    }

    function GK(a, b) {
        a: {
            let d = 0;
            for (let e = 0; e < b.length; e++) {
                for (;;) {
                    var c = b.charCodeAt(e);
                    if (a.j[d].contains(c)) {
                        d = a.j[d].m.get(c);
                        break
                    }
                    if (0 === d) break;
                    d = a.j[d].j
                }
                for (c = d;;) {
                    c = a.j[c].l;
                    if (0 === c) break;
                    const f = e + 1 - a.l[a.j[c].C],
                        g = e;
                    if (yK(b, f, g, a.A)) {
                        a = new HK(f, g, a.m.get(a.j[c].v));
                        break a
                    }
                    c = a.j[c].j
                }
            }
            a = void 0
        }
        return void 0 !== a
    }
    class AK {
        constructor(a) {
            this.A = a;
            this.size = 1;
            this.j = [new FK];
            this.l = [];
            this.v = new Map;
            this.m = new Map;
            this.B = 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f),
                        e = this.j[b];
                    if (e.contains(d)) {
                        b = e.m.get(d);
                        break
                    }
                    if (0 === b) break;
                    b = e.j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    e = f + 1 - this.l[this.j[d].C];
                    const g = f;
                    yK(a, e, g, this.A) && c.push(new HK(e, g, this.m.get(this.j[d].v)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class FK {
        constructor() {
            this.m = new Map;
            this.I = !1;
            this.W = this.H = this.F = this.R = this.K = this.L = -1
        }
        contains(a) {
            return this.m.has(a)
        }
        set B(a) {
            this.L = a
        }
        get B() {
            return this.L
        }
        set G(a) {
            this.K = a
        }
        get G() {
            return this.K
        }
        set A(a) {
            this.I = a
        }
        get A() {
            return this.I
        }
        set v(a) {
            this.H = a
        }
        get v() {
            return this.H
        }
        set j(a) {
            this.R = a
        }
        get j() {
            return this.R
        }
        set l(a) {
            this.F = a
        }
        get l() {
            return this.F
        }
        set C(a) {
            this.W = a
        }
        get C() {
            return this.W
        }
        get childNodes() {
            return this.m.values()
        }
    }
    var HK = class {
            constructor(a, b, c) {
                this.A = a;
                this.v = b;
                this.B = c
            }
            get l() {
                return this.A
            }
            get m() {
                return this.v
            }
            get j() {
                return this.B
            }
            get length() {
                return this.v - this.A
            }
        },
        IK = class {
            constructor(a) {
                this.j = a;
                this.matches = []
            }
        };
    const JK = ["block", "inline", "inline-block", "list-item", "table-cell"];

    function KK(a, b, c, d, e, f) {
        if (c.Ia(5) >= c.L) return !1;
        for (let ba = 0; ba < b.childNodes.length; ba++) {
            const aa = b.childNodes[ba];
            if (aa.nodeType === Node.TEXT_NODE && "" !== aa.textContent) {
                a: {
                    var g = a;
                    var h = c,
                        k = b,
                        l = aa.textContent,
                        m = d,
                        n = e,
                        q = f;
                    const za = [];b: {
                        var r = l;
                        switch (h.m) {
                            case 1:
                                var w = Array(r.length),
                                    C = 0;
                                for (var z = 0; z < r.length; z++) wK.test(r[z]) || C++, w[z] = C;
                                r = w;
                                break b;
                            default:
                                w = Array(r.length);
                                for (z = C = 0; z < r.length;) {
                                    for (;
                                        /\s/.test(r[z]);) w[z] = C, z++;
                                    for (var A = !1; z < r.length && !/\s/.test(r[z]);) A = !0, w[z] = C, z++;
                                    A &&
                                        (C++, w[z - 1] = C)
                                }
                                r = w
                        }
                    }
                    if (l.includes("\u00bb")) n = [];
                    else {
                        w = n.match(l);
                        n = new Map;
                        for (const ra of w) w = ra.l, n.has(w) ? (C = n.get(w), ra.length > C.length && n.set(w, ra)) : n.set(w, ra);
                        n = Array.from(n.values())
                    }
                    C = -1;
                    for (const ra of n) {
                        w = ra.l;
                        n = ra.m;
                        z = q;
                        A = ra.j;
                        var I = z.j,
                            D = z.l + r[w] - I.v;
                        for (const od of I.j.keys()) {
                            for (var F = I.j.get(od), H = 0; H < F.length && F[H] < D;) H++;
                            I.l -= H;
                            0 < H && I.j.set(od, F.slice(H))
                        }
                        I = z;
                        D = I.j;
                        if ((D.j.has(A) ? D.j.get(A).length : 0) < I.od && z.j.m < z.Gc) {
                            z = g.getComputedStyle(k);
                            A = z.fontSize.match(/\d+/);
                            if (!(A &&
                                    12 <= Number(A[0]) && 22 >= Number(A[0]) && Fb(JK, z.display))) {
                                q.l += r[r.length - 1];
                                g = [];
                                break a
                            }
                            C += 1;
                            C < w && za.push(g.document.createTextNode(l.substring(C, w)));
                            C = l.substring(w, n + 1);
                            A = g;
                            z = k;
                            var U = C;
                            H = TJ(l, w, n + 1);
                            F = ra.j;
                            D = r[w];
                            I = z.getBoundingClientRect();
                            var Ia = qk(2);
                            U = Bd(Ia, 2, U);
                            H = Bd(U, 3, H);
                            F = Bd(H, 4, F);
                            D = jd(F, 5, D, 0);
                            D = jd(D, 6, Math.round(I.x), 0);
                            I = jd(D, 7, Math.round(I.y), 0);
                            A = A.getComputedStyle(z);
                            D = new pk;
                            D = Bd(D, 1, A.fontFamily);
                            F = UJ(A.color);
                            D = pd(D, 7, F);
                            F = UJ(A.backgroundColor);
                            D = pd(D, 8, F);
                            F = A.fontSize.match(/^(\d+(\.\d+)?)px$/);
                            D = jd(D, 4, F ? Math.round(Number(F[1])) : 0, 0);
                            F = Math.round(Number(A.fontWeight));
                            isNaN(F) || 400 === F || jd(D, 5, F, 0);
                            "none" !== A.textDecorationLine && Bd(D, 6, A.textDecorationLine);
                            A = pd(I, 8, D);
                            I = [];
                            for (H = z; H && 20 > I.length;) {
                                z = I;
                                D = z.push;
                                F = H;
                                U = new nk;
                                U = Bd(U, 1, F.tagName);
                                "" !== F.className && id(U, 2, F.className.split(" "), Xc);
                                D.call(z, U);
                                if ("BODY" === H.tagName) break;
                                H = H.parentElement
                            }
                            z = I.reverse();
                            z = td(A, 9, z);
                            z = LK(m, z);
                            za.push(MK(g, h, z, ra.j, C));
                            C = q.j;
                            z = ra.j;
                            w = q.l + r[w];
                            A = [];
                            C.j.has(z) && (A = C.j.get(z));
                            A.push(w);
                            C.l++;
                            C.j.set(z,
                                A);
                            C = n;
                            if (0 < q.bb && q.j.m >= q.bb) break
                        }
                    }
                    h = C + 1;0 !== h && h < l.length && za.push(g.document.createTextNode(l.substring(h)));q.l += r[r.length - 1];g = za
                }
                if (0 < g.length && (S(Wq) ? !c.v.Fb : !S(Rq))) {
                    for (const za of g) b.insertBefore(za, aa), NK(za);
                    b.removeChild(aa);
                    ba += g.length - 1
                }
            }
            else if (OK(aa, c) && !KK(a, aa, c, d, e, f)) return !1;
            if (0 < f.bb && f.j.m >= f.bb) break
        }
        return !0
    }

    function NK(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = tJ(rJ(getComputedStyle(a.parentElement).color)),
                    c = tJ(rJ(getComputedStyle(a).color));
                var d = sJ(a);
                if (d = b && c && d ? iF(c, d) < Math.min(iF(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    M(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) NK(a.children[b])
        }
    }

    function OK(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE || a.classList ? .contains("google-anno-skip") || !a.offsetHeight) return !1;
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !S(Jq) &&
                    !!b.B;
            default:
                return !S(Jq) && !!b.B || !(a.className.toUpperCase ? .() ? .includes("CRUMB") || a.id.toUpperCase ? .() ? .includes("CRUMB"))
        }
    }
    class PK {
        constructor() {
            this.j = null
        }
        get l() {
            return this.j
        }
    }

    function MK(a, b, c, d, e) {
        const f = a.document.createElement("SPAN");
        QK(f);
        f.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        wJ(e);
        M(e, {
            "text-decoration": "none"
        });
        Bf(e);
        e.className = "google-anno";
        e.appendChild(bK(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            position: "relative"
        }));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(f);
        const g = RK(b, c, e);
        iK(b, 999, e, h => {
            try {
                const k = xJ(c, g.l, null, d, b);
                HJ(a, b, k, d, !0);
                return !1
            } finally {
                h.preventDefault(),
                    h.stopImmediatePropagation()
            }
        });
        return e
    }

    function RK(a, b, c) {
        const d = new PK;
        SK(a, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = b;
                    e = a.A;
                    var g = new Dk;
                    g = f = J(g, 1, f);
                    f = e.handle;
                    var h = yJ(e, 5);
                    g = qd(h, 4, Jk, g);
                    e = f.call(e, g);
                    d.j = e
                } else if (e = d, e.j) {
                f = a.A;
                g = new Ck;
                h = g = J(g, 1, e.j);
                g = f.handle;
                var k = yJ(f, 6);
                h = qd(k, 5, Jk, h);
                g.call(f, h);
                e.j = null
            }
        }).observe(c);
        return d
    }

    function QK(a) {
        wJ(a);
        M(a, {
            "text-decoration": "underline"
        });
        M(a, {
            "text-decoration-style": "dotted"
        });
        M(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    };

    function LK(a, b) {
        a.entries.push(Pd(b, !1));
        return a.entries.length - 1
    }

    function TK(a) {
        if (S(Yq)) {
            a = kg(a);
            let d = 0;
            for (var b of a) d += (B(b, 3) ? 1 : 0) + (B(b, 4) ? 1 : 0) + gd(b, 5, Yc).length;
            return wk(vk(new xk, a.length), d)
        }
        b = vk(new xk, jg(a).length);
        let c = 0;
        jg(a).forEach(d => {
            c += G(d, gg, 2).length
        });
        return wk(b, c)
    }

    function UK(a, b, c, d) {
        const e = new ik;
        switch (a) {
            case "se":
                return b = new hk, qd(e, 1, jk, b);
            case "sw":
                return b = new hk, qd(e, 2, jk, b);
            case "si":
                return b = new hk, qd(e, 3, jk, b);
            case "sl":
                return b = new hk, qd(e, 5, jk, b);
            case "l":
                return b = new hk, qd(e, 6, jk, b)
        }
        if (c && b) {
            if (b.l) return a = new gk, b = J(a, 1, b.l), qd(e, 7, jk, b);
            if (c.j && b.v && (!d || !b.A)) return b = new hk, qd(e, 8, jk, b)
        }
        return null
    }
    var VK = class {
        constructor() {
            this.entries = [];
            this.j = 0;
            this.l = this.m = null
        }
    };
    var WK = class {
        constructor(a) {
            this.j = a
        }
    };

    function FJ(a, b) {
        var c = a.handle,
            d = yJ(a, 9);
        b = qd(d, 9, Jk, b);
        c.call(a, b)
    }

    function yJ(a, b) {
        var c = new Ik;
        var d = a.A++;
        c = J(c, 1, d);
        b = J(c, 2, Math.round(a.l.Ia(b) - a.m));
        return pd(b, 10, a.v)
    }
    var XK = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.m = b;
            this.v = c;
            this.A = 1;
            this.j = [...d]
        }
        handle(a) {
            for (const b of this.j) b(a);
            return yd(a, 1)
        }
    };

    function YK(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function ZK(a) {
        return new Set(a.map(YK).filter(b => b.length))
    };
    var $K = class {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        get j() {
            return this.l
        }
        get v() {
            return this.m
        }
    };
    class aL extends $J {
        constructor(a, b, c, d, e) {
            super([b], [c], d);
            this.K = a;
            this.v = e || null
        }
        C() {
            const a = {};
            a.left = this.m[0] + "px";
            ai(this.K, a)
        }
        G() {}
    };
    var bL = class {
        constructor(a) {
            this.jb = a.jb;
            this.Fb = a.Fb ? ? !1;
            this.Fc = a.Fc ? ? 300;
            this.wc = a.wc ? ? !1;
            this.Vb = a.Vb ? ? !1
        }
    };

    function EJ(a, b, c, d, e) {
        return c.setTimeout(cL(a, b, d), e)
    }

    function MJ(a) {
        return 2 === Cd(a.j, 12)
    }

    function PJ(a, b, c) {
        a = cL(a, 999, c);
        b.addEventListener("message", a);
        return a
    }

    function RJ(a, b, c) {
        return b.setInterval(cL(a, 1066, c), 1E3)
    }

    function iK(a, b, c, d) {
        c.addEventListener("click", cL(a, b, d))
    }

    function jK(a, b, c, d, e) {
        return new aL(b, c, d, a.F, e)
    }

    function SK(a, b) {
        return new IntersectionObserver(cL(a, 1065, b), {
            threshold: .98
        })
    }

    function cL(a, b, c) {
        return a.F.ra(b, c, void 0, d => void dL(a, d))
    }

    function dL(a, b) {
        b.e = S(Wq) ? `${a.v.jb}` : `${T(Mq)}`;
        b.c = `${a.R}`
    }
    var fL = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n, q, r = !1) {
            this.H = a;
            this.l = b;
            this.j = c;
            this.R = d;
            this.L = e;
            this.B = f;
            this.F = g;
            this.A = h;
            this.aa = k;
            this.W = l;
            this.C = m;
            this.K = n;
            this.I = r;
            this.v = new bL(q);
            this.m = Fb(eL, K(c, 7)) ? 1 : 0;
            this.G = new Map;
            if (S(Tq))
                if (S(Yq))
                    for (const w of kg(this.j)) null != v(w, 2) && this.G.set(K(w, 1), K(w, 2));
                else jg(this.j).forEach(w => {
                    null != v(w, 3) && this.G.set(K(w, 1), K(w, 3));
                    G(w, gg, 2).forEach(C => {
                        null != v(C, 2) && this.G.set(K(C, 1), K(C, 2))
                    })
                })
        }
        za(a, b) {
            this.F.za(a, b, c => void dL(this, c))
        }
        Ia(a) {
            return this.W.Ia(a)
        }
    };
    const eL = ["ja", "zh_CN", "zh_TW"];

    function gL(a, b, c, d, e, f, g, h, k = !1) {
        try {
            Qb(a.document)
        } catch (jc) {
            return
        }
        var l; {
            const jc = QF(new UF(a), "__gads", h);
            if (jc) {
                var m = hh(jc + "t2Z7mVic");
                var n = m ? m % 20 : null
            } else n = null
        }(l = n) || (l = jh() ? null : Math.floor(20 * eh()));
        const q = l;
        if (null != q) {
            var r = new WK(q);
            const jc = b.l;
            if (jc) {
                var w = g.Ia(1),
                    C = w + (S(Wq) ? b.j.Fc : T(Kq)),
                    z = jc,
                    A = b.j;
                if ((S(Wq) ? !A.Fb : !S(Rq)) && 0 < (S(Yq) ? kg(z) : jg(z)).length) {
                    var I = a.document;
                    const lb = I.createElement("LINK"),
                        Ka = N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
                    Gf(lb, Ka, "stylesheet");
                    I.head.appendChild(lb)
                }
                var D = 488 > P(a).clientWidth;
                if (S(Gq) || mK(a)) {
                    var F = (S(Yq) ? kg(b.l) : jg(b.l)).length;
                    var H = new $K(b.B, F)
                } else H = null;
                if (S(Gq) || mK(a)) {
                    var U = H;
                    if (mK(a)) var Ia = new aK(!0, !1, !1, 0);
                    else {
                        var ba = kw({
                            J: a,
                            Xc: 3E3,
                            Zc: T(Iq),
                            aa: f,
                            nf: !0
                        });
                        var aa = fK(a, 2, f),
                            za = fK(a, 1, f);
                        Ia = new aK(0 < ba || 0 === U.v ? !1 : !U.j || 0 < za || D && 0 === aa, 0 === aa, 0 === za, ba)
                    }
                } else Ia = null;
                var ra = Ia,
                    od = b.j,
                    Z = new Bk,
                    de = S(Wq) ? od.jb : T(Mq);
                var GL = J(Z, 1, de);
                var HL = jd(GL, 2, r.j, 0);
                var Nh = new XK(g, w, HL, e);
                var W = new fL(c,
                        D, jc, r.j, C, ra, d, Nh, f, g, b.C, b.v, b.j, b.m),
                    mb = new VK; {
                    const lb = a.document.body;
                    if (lb && hL(lb)) {
                        var rd = k ? lb.innerText || "" : lb.textContent || "";
                        b: switch (W.m) {
                            case 1:
                                let Ka = 0;
                                for (let Ea = rd.length - 1; 0 <= Ea; Ea--) wK.test(rd[Ea]) || Ka++;
                                var Lt = Ka;
                                break b;
                            default:
                                const wa = rd.trim();
                                Lt = "" === wa ? 0 : wa.split(/\s+/).length
                        }
                        var Mt = Lt;
                        mb.j = Mt;
                        var Nt = YK(K(W.j, 7)); {
                            const Ka = a.document.documentElement,
                                wa = YK(Ka.lang) || YK(Ka.getAttribute("xml:lang"));
                            if ("" !== wa) var Ot = new Set([wa]);
                            else {
                                var Pt = a.location;
                                const Ea = Pt.host.match(/^[a-z]{2}\./i),
                                    Na = Ea ? [Ea[0]] : [];
                                for (const Fa of Pt.pathname.split("/")) 2 === Fa.length && Na.push(Fa);
                                var Qt = ZK(Na);
                                if (Qt.size) var Rt = Qt;
                                else {
                                    const Fa = a.navigator;
                                    Rt = ZK(Fa.languages ? .length ? Fa.languages : [Fa.language])
                                }
                                Ot = Rt
                            }
                        }
                        var St = Ot;
                        mb.m = Nt;
                        mb.l = new Set(St);
                        var JL = S(Jq) && S(Fq) ? Math.min(W.C ? .Cb ? ? Number.MAX_SAFE_INTEGER, W.K ? .Cb ? ? Number.MAX_SAFE_INTEGER) : T(Pq);
                        if (Mt < JL) var Tt = "sw";
                        else {
                            if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) var Ut = "si";
                            else {
                                if (St.has(Nt)) {
                                    if (W.Ia(5) >= W.L) var Vt =
                                        "l";
                                    else {
                                        b: {
                                            const Ka = W.j;
                                            if (0 === (S(Yq) ? kg(Ka) : jg(Ka)).length || !S(Jq) && W.B && !W.B.j) var cl = !0;
                                            else {
                                                if (S(Jq) || !W.B) {
                                                    var Wt = a.document;
                                                    const wa = Wt.createElement("style");
                                                    wa.textContent = gf($h `@font-face{font-family:"goog-matfb";size-adjust:39.13%;src:local("Times New Roman"),local("Tinos");}`);
                                                    Wt.head.appendChild(wa)
                                                }
                                                if (S(Yq))
                                                    if (S(Jq)) {
                                                        var wf = zK(kg(Ka), 2, W.m);
                                                        var xf = zK(kg(Ka), 1, W.m)
                                                    } else {
                                                        var KL = kg(Ka);
                                                        const wa = new AK(W.m);
                                                        for (const Ea of KL) {
                                                            const Na = K(Ea, 1);
                                                            BK(wa, Na, Na);
                                                            for (const Fa of gd(Ea, 5, Yc)) BK(wa,
                                                                Fa, Na)
                                                        }
                                                        CK(wa);
                                                        wf = xf = new DK(wa)
                                                    }
                                                else if (S(Jq)) wf = EK(jg(Ka), 2, W.m), xf = EK(jg(Ka), 1, W.m);
                                                else {
                                                    var LL = jg(Ka);
                                                    const wa = new AK(W.m);
                                                    for (const Ea of LL)
                                                        for (const Na of G(Ea, gg, 2)) BK(wa, K(Na, 1), K(Ea, 1));
                                                    CK(wa);
                                                    wf = xf = new DK(wa)
                                                }
                                                var dl;
                                                if (dl = !!W.B && W.B.j) {
                                                    var ML = mb.j;
                                                    dl = !S(Jq) || !S(Fq) || ML >= (W.K ? .Cb ? ? Number.MAX_SAFE_INTEGER)
                                                }
                                                if (dl) {
                                                    if (GK(wf.j, rd)) {
                                                        var NL = new uK(T(Vq), a, W),
                                                            OL = W.m;
                                                        const wa = wf.match(rd),
                                                            Ea = new Map;
                                                        for (const Na of wa) {
                                                            const Fa = Na.j;
                                                            if (Ea.has(Fa)) Ea.get(Fa).matches.push(Na);
                                                            else {
                                                                const Oh = new IK(Fa);
                                                                Oh.matches.push(Na);
                                                                Ea.set(Fa, Oh)
                                                            }
                                                        }
                                                        var PL = Array.from(Ea.values());
                                                        for (const Na of PL) {
                                                            let Fa = null;
                                                            for (const Oh of Na.matches) {
                                                                c: {
                                                                    var el = rd,
                                                                        sd = Oh,
                                                                        QL = mb;
                                                                    if (!yK(el, sd.l, sd.m, OL)) {
                                                                        var Xt = null;
                                                                        break c
                                                                    }
                                                                    const Yt = el.substring(sd.l, sd.m + 1);
                                                                    var RL = QL,
                                                                        SL = Yt,
                                                                        TL = TJ(el, sd.l, sd.m + 1),
                                                                        UL = sd.j,
                                                                        VL = qk(1);
                                                                    var WL = Bd(VL, 2, SL);
                                                                    var XL = Bd(WL, 3, TL);
                                                                    var YL = Bd(XL, 4, UL);
                                                                    var ZL = jd(YL, 5, null, 0);LK(RL, ZL);Xt = Yt
                                                                }
                                                                const Zt = Xt;null != Zt && (Fa = Zt)
                                                            }
                                                            if (null != Fa) {
                                                                var fl = NL;
                                                                fl.l.push(new vK(Na.j, Fa));
                                                                fl.v && tK(fl)
                                                            }
                                                        }
                                                    }
                                                    if (!S(Jq)) {
                                                        cl = !0;
                                                        break b
                                                    }
                                                }
                                                var $L =
                                                    mb.j;
                                                cl = !(!S(Jq) || !S(Fq) || $L >= (W.C ? .Cb ? ? Number.MAX_SAFE_INTEGER)) || !GK(xf.j, rd) || KK(a, a.document.body, W, mb, xf, new vJ(W.C ? .Ig ? ? null ? ? 100, (W.C ? .od ? ? null) || 0, (W.C ? .Gc ? ? null) || 0, (W.C ? .bb ? ? null) || -1))
                                            }
                                        }
                                        Vt = cl ? "a" : "p"
                                    }
                                    var $t = Vt
                                } else $t = "sl";
                                Ut = $t
                            }
                            Tt = Ut
                        }
                        var au = Tt
                    } else au = "se"
                }
                var aM = g.Ia(3) - w,
                    bM = jc,
                    cM = b.j;
                if ((S(Wq) ? !cM.Fb : !S(Rq)) && mb.entries.length && !B(bM, 13)) {
                    var bu = a.document;
                    const lb = bu.createElement("LINK");
                    Gf(lb, N `https://www.google.com/adsense/search/ads.js`, "prefetch");
                    lb.as = "script";
                    lb.fetchPriority =
                        "low";
                    bu.head.appendChild(lb)
                }
                var dM = b.A,
                    eM = a.location.hostname,
                    fM = b.G,
                    gl = jc,
                    gM = H,
                    cu = au,
                    hM = new yk,
                    iM = new dk;
                var jM = Bd(iM, 1, dM);
                var kM = Bd(jM, 2, eM);
                var lM = Ad(kM, 3, D);
                var mM = x(lM, 4, mb.j);
                var nM = pd(hM, 1, mM);
                var oM = new fk,
                    pM = Array.from(mb.l ? ? []).sort();
                var qM = id(oM, 1, pM, Xc);
                var rM = Bd(qM, 2, mb.m);
                var sM = Bd(rM, 3, fM);
                var tM = pd(nM, 2, sM);
                var uM = J(tM, 3, Math.round(aM));
                var vM = TK(gl);
                var hl = pd(uM, 6, vM);
                const du = UK(cu, ra, gM, D);
                if (du) {
                    var wM = new lk;
                    var xM = ud(wM, 1, ik, du);
                    qd(hl, 5, zk, xM)
                } else {
                    var yM = new uk;
                    var zM = Ad(yM,
                        1, "p" === cu);
                    var AM = td(zM, 2, mb.entries);
                    var BM = (S(Yq) ? kg(gl) : jg(gl)).length;
                    var CM = J(AM, 3, BM);
                    qd(hl, 4, zk, CM)
                }
                var DM = Nh.handle,
                    EM = yJ(Nh, 3);
                var FM = qd(EM, 3, Jk, hl);
                DM.call(Nh, FM)
            }
        }
    }

    function hL(a) {
        try {
            Qb(new ResizeObserver(() => {})), Qb(new MutationObserver(() => {}))
        } catch {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    };

    function iL(a, b, c, d, e) {
        if (!Y($C(), 29, !1)) {
            eD($C(), 29, !0);
            var f = a.performance;
            f ? .now && gL(a, c, d, $k, [g => void xD(b, g)], Zk, new pJ(f), e, S(fq))
        }
    };
    var jL = class {
        constructor(a, b, c, d, e, f, g) {
            this.l = a;
            this.A = b;
            this.B = c;
            this.G = d;
            this.C = e;
            this.v = {
                Cb: 50
            };
            this.j = f;
            this.m = g
        }
    };

    function kL({
        Md: a,
        Ie: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function lL(a) {
        $k.pd(b => {
            b.shv = String(a);
            b.mjsv = kL({
                Md: "m202303140101",
                Ie: a
            });
            b.eid = PF(t)
        })
    }

    function mL(a) {
        lL(K(a, 2));
        a = B(a, 6);
        Vd(FF, hj);
        FF = a
    };
    var nL = "undefined" === typeof sttc ? void 0 : sttc;

    function oL(a) {
        var b = $k;
        try {
            return Vd(a, gj), new AF(JSON.parse(a))
        } catch (c) {
            b.ha(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new AF
    };

    function pL(a) {
        if (a.l) return a.l;
        a.K && a.K(a.m) ? a.l = a.m : a.l = vh(a.m, a.L);
        return a.l ? ? null
    }

    function qL(a) {
        a.v || (a.v = b => {
            try {
                var c = a.I ? a.I(b) : void 0;
                if (c) {
                    var d = c.hd,
                        e = a.F.get(d);
                    if (e) {
                        a.F.delete(d);
                        var f = a.C.get(c.hd);
                        a.C.delete(d);
                        e(f, c.payload)
                    }
                }
            } catch (g) {}
        }, oe(a.m, "message", a.v))
    }

    function rL(a, b) {
        if (pL(a))
            if (a.l === a.m) {
                var c = a.H.get("getDataWithCallback");
                c && c(a.l, b)
            } else if ((c = a.A.get("getDataWithCallback")) && c.Wc) {
            qL(a);
            var d = ++a.R;
            a.F.set(d, c.ve);
            a.C.set(d, c.ie(b));
            a.l.postMessage(c.Wc(b, d), "*")
        }
    }
    var sL = class extends Rk {
        constructor(a, b, c, d) {
            super();
            this.L = b;
            this.K = c;
            this.I = d;
            this.H = new Map;
            this.R = 0;
            this.A = new Map;
            this.F = new Map;
            this.C = new Map;
            this.v = void 0;
            this.m = a
        }
        j() {
            delete this.l;
            this.H.clear();
            this.A.clear();
            this.F.clear();
            this.C.clear();
            this.v && (pe(this.m, "message", this.v), delete this.v);
            delete this.m;
            delete this.I;
            super.j()
        }
    };
    const tL = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.callback({
                    consentData: c ? ? void 0,
                    Ud: d ? void 0 : 2
                })
            })
        },
        uL = {
            ie: a => a.callback,
            Wc: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            ve: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    Ud: b.success ? void 0 : 2
                })
            }
        };

    function vL(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            hd: b.__uspapiReturn.callId
        }
    }
    var wL = class extends Rk {
        constructor(a) {
            super();
            this.caller = new sL(a, "__uspapiLocator", b => "function" === typeof b.__uspapi, vL);
            this.caller.H.set("getDataWithCallback", tL);
            this.caller.A.set("getDataWithCallback", uL)
        }
        j() {
            this.caller.va();
            super.j()
        }
        C(a) {
            let b = {};
            if (pL(this.caller)) {
                var c = ie(() => {
                    a(b)
                });
                rL(this.caller, {
                    callback: d => {
                        d.Ud || (b = d.consentData);
                        c()
                    }
                });
                setTimeout(c, 500)
            } else a(b)
        }
    };
    var xL = Wd(class extends L {
        constructor(a) {
            super(a)
        }
    });
    const yL = (a, b) => {
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c => {
                c = xL(c);
                b.callback({
                    consentData: c
                })
            })
        },
        zL = {
            ie: a => a.callback,
            Wc: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command
                }
            }),
            ve: (a, b) => {
                a({
                    consentData: b
                })
            }
        };

    function AL(a) {
        a = xL(a.data.__fciReturn);
        return {
            payload: a,
            hd: yd(a, 1)
        }
    }
    var BL = class extends Rk {
        constructor(a) {
            super();
            this.l = null;
            this.v = !1;
            this.caller = new sL(a, "googlefcPresent", void 0, AL);
            this.caller.H.set("getDataWithCallback", yL);
            this.caller.A.set("getDataWithCallback", zL)
        }
        j() {
            this.caller.va();
            super.j()
        }
        m() {
            this.v || (this.l = pL(this.caller), this.v = !0);
            return !!this.l
        }
        H() {
            return new Promise(a => {
                this.m() && rL(this.caller, {
                    command: "loaded",
                    callback: b => {
                        a(b.consentData)
                    }
                })
            })
        }
    };

    function CL(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Ig(a.j.P() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = DL(a, b, c, a.j.j.elementsFromPoint(ug(c.left + c.width / 2, c.left, c.right - 1), ug(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = DL(a, b, c, a.j.j.elementsFromPoint(ug(c.left + c.width / 2, c.left, c.right - 1), ug(c.top + 2, c.top, c.bottom - 1)), 2, e.Fa),
            g = DL(a, b, c, a.j.j.elementsFromPoint(ug(c.left + 2, c.left, c.right - 1), ug(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Fa, ...f.Fa]);
        const h = DL(a, b, c, a.j.j.elementsFromPoint(ug(c.right - 1 - 2, c.left, c.right - 1), ug(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Fa, ...f.Fa, ...g.Fa]);
        var k = EL(a, b, c),
            l = n => Fb(a.m, n.overlapType) && Fb(a.v, n.overlapDepth) && Fb(a.l, n.overlapDetectionPoint);
        e = Bb([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Bb(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = Jg(a.j.j);
        const m = new Lh(c.left, c.top, c.width, c.height);
        e = [...Cb(e, n => new Lh(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...Ob(Cb(l, n => Ph(m, n.elementRect))), ...Bb(Ph(m, new Lh(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? FL(m, e) : IL(c, e)
        }
    }

    function GM(a, b) {
        const c = a.j.P(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new cj,
                                        m = bj(l, () => CL(a, k));
                                    m && (l.l.length && (m.executionTime = Math.round(Number(l.l[0].duration))), h.disconnect(), e(m))
                                }, HM);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function DL(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Fa: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const q = d[n];
            if (q === b) continue;
            if (Fb(f, q)) continue;
            h.push(q);
            const r = q.getBoundingClientRect();
            if (a.j.contains(q, b)) {
                g.push(IM(a, c, q, r, 1, e));
                continue
            }
            if (a.j.contains(b, q)) {
                g.push(IM(a, c, q, r, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b,
                    m = q;
                const z = k.j.Df(l, m);
                if (!z) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: A,
                    Sa: I
                } = JM(k, l, z, m) || {},
                {
                    suspectAncestor: D,
                    Sa: F
                } = JM(k, m, z, l) || {};k = A && I && D && F ? I <= F ? {
                    suspectAncestor: A,
                    overlapType: KM[I]
                } : {
                    suspectAncestor: D,
                    overlapType: LM[F]
                } : A && I ? {
                    suspectAncestor: A,
                    overlapType: KM[I]
                } : D && F ? {
                    suspectAncestor: D,
                    overlapType: LM[F]
                } : null
            }
            const {
                suspectAncestor: w,
                overlapType: C
            } = k || {};
            w && C ? g.push(IM(a, c, q, r, C, e, w)) : g.push(IM(a, c, q, r, 9, e))
        }
        return {
            entries: g,
            Fa: h
        }
    }

    function EL(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = dh(b, a.j.P());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(IM(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(IM(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(IM(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function FL(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Mh(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function IL(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function IM(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Fb(a.m, e) && Fb(a.l, f)) {
            b = new Ih(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = MM(a, c)) && Kh(b, a)) c = 4;
            else {
                a = NM(c, d);
                if (Tb) {
                    e = ki(c, "paddingLeft");
                    f = ki(c, "paddingRight");
                    var k = ki(c, "paddingTop"),
                        l = ki(c, "paddingBottom");
                    e = new Ih(k, f, l, e)
                } else e = di(c, "paddingLeft"), f = di(c, "paddingRight"), k = di(c, "paddingTop"), l = di(c, "paddingBottom"), e = new Ih(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                Kh(b, new Ih(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = NM(c, d), c = Kh(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function JM(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.P();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = dh(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Sa: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Sa: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Sa: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = OM(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        Sa: 4
                    }
                }
            }
        }
        return (a = OM(a, e, b)) ? {
                suspectAncestor: a,
                Sa: 5
            } :
            null
    }

    function OM(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = dh(f, a.j.P());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function MM(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new Ih(a.top, a.right, a.bottom, a.left)
    }

    function NM(a, b) {
        if (!Tb || 9 <= Number(fc)) {
            var c = di(a, "borderLeftWidth");
            d = di(a, "borderRightWidth");
            e = di(a, "borderTopWidth");
            a = di(a, "borderBottomWidth");
            c = new Ih(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = mi(a, "borderLeft");
            var d = mi(a, "borderRight"),
                e = mi(a, "borderTop");
            a = mi(a, "borderBottom");
            c = new Ih(e, d, a, c)
        }
        return new Ih(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class PM {
        constructor(a) {
            var b = QM;
            this.j = Fg(a);
            this.m = [5, 8, 9];
            this.v = [3, 4];
            this.l = b
        }
    }
    const KM = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        LM = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Bb(gh({
        Bi: 1,
        Ci: 2,
        pk: 3,
        qk: 4,
        sk: 5,
        xi: 6,
        yi: 7,
        Ai: 8,
        Bj: 9,
        rk: 10,
        zi: 11,
        nk: 12,
        wi: 13
    }), a => !Fb([1, 2], a));
    gh({
        Nh: 1,
        Dj: 2,
        Yh: 3,
        tk: 4
    });
    const QM = gh({
            Oh: 1,
            wk: 2,
            oj: 3,
            bk: 4
        }),
        HM = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function RM(a, b, c, d) {
        const e = new ev;
        let f = "";
        const g = k => {
            try {
                const l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && (pe(a, "message", g), l.error ? e.j(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = "function" === typeof a.gmaSdk ? .getQueryInfo ? a.gmaSdk : void 0;
        if (h) return oe(a, "message", g), f = c(h), e.promise;
        c = "function" === typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage || "function" === typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage ? a.webkit.messageHandlers : void 0;
        return c ? (f = String(Math.floor(2147483647 * eh())), oe(a, "message", g), b(c, f), e.promise) : null
    }

    function SM(a) {
        return RM(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };

    function TM(a) {
        if (a.m) return a.m;
        a.m = vh(a.l, "__uspapiLocator");
        return a.m
    }

    function UM(a, b) {
        if ("function" === typeof a.l ? .__uspapi) a = a.l.__uspapi, a("getUSPData", 1, b);
        else if (TM(a)) {
            VM(a);
            const c = ++a.F;
            a.A[c] = b;
            a.m && a.m.postMessage({
                __uspapiCall: {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }
            }, "*")
        }
    }

    function VM(a) {
        a.v || (a.v = b => {
            try {
                let d = {};
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                var c = d.__uspapiReturn;
                a.A ? .[c.callId](c.returnValue, c.success)
            } catch {}
        }, oe(a.l, "message", a.v))
    }
    var WM = class extends Rk {
        constructor(a) {
            super();
            this.l = a;
            this.m = null;
            this.A = {};
            this.F = 0;
            this.v = null
        }
        j() {
            this.v && pe(this.l, "message", this.v);
            super.j()
        }
        C(a) {
            let b = {};
            if ("function" === typeof this.l ? .__uspapi || null != TM(this)) {
                var c = ie(() => a(b));
                UM(this, (d, e) => {
                    e && (b = d);
                    c()
                });
                setTimeout(c, 500)
            } else a(b)
        }
    };

    function XM(a) {
        a.v || (a.v = b => {
            try {
                const c = xL(b.data.__fciReturn);
                (0, a.F[yd(c, 1)])(c)
            } catch (c) {}
        }, oe(a.A, "message", a.v))
    }
    var YM = class extends Rk {
        constructor(a) {
            super();
            this.A = a;
            this.v = this.l = null;
            this.F = {};
            this.I = 0;
            this.C = !1
        }
        m() {
            if (!this.C) {
                if (!this.l) {
                    var a = vh(this.A, "googlefcPresent");
                    this.l = a ? a : null
                }
                this.C = !0
            }
            return !!this.l
        }
        H() {
            return new Promise(a => {
                if (this.m())
                    if (this.l === this.A) {
                        var b = this.l.googlefc || (this.l.googlefc = {});
                        b.__fci = b.__fci || [];
                        b.__fci.push("loaded", c => {
                            a(xL(c))
                        })
                    } else XM(this), b = this.I++, this.F[b] = a, this.l.postMessage({
                        __fciCall: {
                            command: "loaded",
                            callId: b
                        }
                    }, "*")
            })
        }
    };
    const ZM = (a, b) => {
        try {
            const g = void 0 === B(b, 6) ? !0 : B(b, 6);
            a: switch (Cd(b, 4)) {
                case 1:
                    var c = "pt";
                    break a;
                case 2:
                    c = "cr";
                    break a;
                default:
                    c = ""
            }
            var d = new Wf(Uf(Cd(b, 2)), K(b, 3), c),
                e = E(b, Qf, 5) ? .j() ? ? "";
            d.Ab = e;
            d.j = g;
            d.win = a;
            var f = d.build();
            Of(f)
        } catch {}
    };

    function $M(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? ZM(a, b) : oe(a, "load", () => void ZM(a, b)))
    };

    function aN(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function bN(a) {
        if (a === a.top || Yg(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && aN(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new ev;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                sb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var cN = class extends L {
            constructor(a) {
                super(a)
            }
        },
        dN = Wd(cN),
        eN = [1, 3];
    const fN = N `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function gN(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: k
                }) => k)
            }
            const e = ch("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = He(fN).toString();
            const f = (new URL(fN.toString())).origin,
                g = rF({
                    destination: a,
                    Aa: e,
                    origin: f,
                    Ra: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                "goog:topics:frame:handshake:ack" ===
                h && c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function hN(a, b, c) {
        var d = $k;
        const {
            Rb: e,
            Qb: f
        } = iN(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: !1
        }).then(g => {
            let h = f;
            if (g instanceof Uint8Array) h || (h = !(e instanceof Uint8Array && Mb(g, e)));
            else if (ij()(g)) h || (h = g !== e);
            else return d.ha(989, Error(JSON.stringify(g))), 7;
            if (h && c) try {
                var k = new cN;
                var l = x(k, 2, Ui());
                g instanceof Uint8Array ? kd(l, 1, eN, Oc(g, !1, !1)) : kd(l, 3, eN, g);
                c.setItem("goog:cached:topics",
                    Qd(l))
            } catch {}
            return g
        }), b.getTopicsPromise = a);
        return e && !f ? Promise.resolve(e) : b.getTopicsPromise
    }

    function iN(a) {
        if (!a) return {
            Rb: null,
            Qb: !0
        };
        try {
            const n = a.getItem("goog:cached:topics");
            if (!n) return {
                Rb: null,
                Qb: !0
            };
            const q = dN(n);
            let r;
            const w = ld(q, eN);
            switch (w) {
                case 0:
                    r = null;
                    break;
                case 1:
                    var b, c = 1 === ld(q, eN) ? 1 : -1;
                    a = q;
                    const z = v(a, c),
                        A = Oc(z, !0, !!(Ec(a.O) & 18));
                    null != A && A !== z && ad(a, c, A);
                    var d = A;
                    var e = null == d ? zc() : d;
                    yc(wc);
                    var f = e.j;
                    if (null == f || uc(f)) var g = f;
                    else {
                        if ("string" === typeof f)
                            if (pc) {
                                c = f;
                                rc.test(c) && (c = c.replace(rc, tc));
                                var h = atob(c);
                                var k = new Uint8Array(h.length);
                                for (c = 0; c < h.length; c++) k[c] =
                                    h.charCodeAt(c);
                                var l = k
                            } else l = nc(f);
                        else l = null;
                        g = l
                    }
                    var m = g;
                    r = (b = null == m ? m : e.j = m) ? new Uint8Array(b) : vc || (vc = new Uint8Array(0));
                    break;
                case 3:
                    r = Cd(q, 3 === ld(q, eN) ? 3 : -1);
                    break;
                default:
                    Ef(w, void 0)
            }
            const C = yd(q, 2) + 6048E5 < Ui();
            return {
                Rb: r,
                Qb: C
            }
        } catch {
            return {
                Rb: null,
                Qb: !0
            }
        }
    };

    function jN(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function kN({
        la: a,
        da: b,
        Ja: c,
        slot: d
    }) {
        const e = d.vars,
            f = ah(d.pubWin),
            g = jN(d),
            h = new ZG({
                J: f,
                pubWin: d.pubWin,
                D: e,
                la: a,
                da: b,
                Ja: c,
                Z: g
            });
        h.F = Date.now();
        yl(1, [h.D]);
        bl(1032, () => {
            if (f && S(Bq)) {
                var k = h.D;
                Y($C(), 32, !1) || (eD($C(), 32, !0), KI(f, "sa" === k.google_loader_used ? 5 : 9))
            }
        });
        try {
            await lN(h)
        } catch (k) {
            if (!kl(159, k)) throw k;
        }
        bl(639, () => {
            {
                var k = h.D;
                const m = h.J;
                if (m && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
                    var l;
                    (l = (l = m.document.getElementById(k.google_async_iframe_id)) ?
                        Sg(l, "INS", "adsbygoogle") : null) ? (k = new YG(m, l, k), k.j = t.setInterval(Ca(k.v, k), 500), k.v(), k = !0) : k = !1
                } else k = !1
            }
            return k
        });
        ll(h.pubWin, "affa", k => {
            bl(1008, () => {
                e.google_ad_client && f && !rb() && mN(f, e, oJ(k.config), h.l, K(a, 8))
            }, nN)
        });
        e.google_ad_client && f && !rb() && f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) && mN(f, e, oN(), h.l, K(a, 8));
        return h
    }

    function nN(a) {
        a.e = `${T(Mq)}`
    }

    function mN(a, b, c, d, e) {
        if (E(c, mg, 1) || S(Uq)) {
            var f = O(yD);
            var g = b.google_page_url;
            g = "string" === typeof g ? g : "";
            var h = "on" === b.google_adtest;
            const m = E(c, wF, 2);
            try {
                const n = a ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (n) {
                    var k = decodeURIComponent(n[1]);
                    var l = ng(k)
                } else l = null
            } catch (n) {
                l = null
            }
            l || (l = S(dq) ? E(c, mg, 1) ? ? null : null);
            c = new jL(l, g, !(!m ? .j() || !(488 > P(a).clientWidth) && m ? .v()), e, {
                Ig: S(Wq) ? T(aq) : T(Lq),
                Cb: 300,
                od: 2,
                Gc: 5,
                bb: -1
            }, new bL({
                jb: S(Wq) ? T(iq) : T(Mq),
                Fb: S(gq),
                Fc: T($p),
                wc: S(hq),
                Vb: S(cq)
            }), h);
            iL(a,
                f, c, b.google_ad_client, d)
        }
    }

    function oN() {
        const a = new nJ;
        if (S(Gq)) {
            var b = new wF;
            b = Ad(b, 5, !0);
            b = Ad(b, 8, !0);
            pd(a, 2, b)
        }
        return a
    }

    function lN(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        OF(13);
        OF(11);
        var b = $C(),
            c = Y(b, 23, !1);
        c || eD(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.la;
            b = void 0 !== cd(c, wF, 13 === ld(c, BF) ? 13 : -1) ? E(Dd(c, wF, 13, BF), hE, 2) : Mb(Dd(c, yF, 14, BF) ? .j() ? ? [], [b]) ? E(E(Dd(c, yF, 14, BF), wF, 2), hE, 2) : new hE;
            b = new iE(a.pubWin, a.D.google_ad_client, b, B(a.la, 6));
            b.l = !0;
            const e = E(b.A, Lo, 1);
            if (b.l) {
                c = b.j;
                if (b.v && !tz(e)) {
                    var d = new WD;
                    d = x(d, 1, 1)
                } else d = null;
                if (d) {
                    d = Qd(d);
                    try {
                        c.localStorage.setItem("google_auto_fc_cmp_setting",
                            d)
                    } catch (f) {}
                }
            }
            e && uz(new vz(b.j, new Mz(b.j, b.m), e, new Jw(b.j)))
        }
        b = !Rh() && !qb();
        return !b || b && !pN(a) ? qN(a) : Promise.resolve()
    }

    function rN(a, b, c = !1) {
        b = vF(a.J, b);
        const d = Vh() || jr(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = lr(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function pN(a) {
        return sN(a) || tN(a)
    }

    function sN(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                jl("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = il(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                pN(a) || qN(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function tN(a) {
        const b = a.pubWin.document,
            c = uN();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.Z,
            e = rH(b);
        if (!e) return !1;
        if (!sH(b)) return vN(a, c.visible, d);
        const f = 3 === qH(b);
        if (rN(a, d) <= c.hidden && !f) return !1;
        let g = il(332, () => {
            !sH(b) && g && (pe(b, e, g), vN(a, c.visible, d) || qN(a), g = null)
        });
        return oe(b, e, g)
    }

    function uN() {
        const a = {
            hidden: 0,
            visible: 3
        };
        t.IntersectionObserver || (a.visible = -1);
        Vg() && (a.visible *= 2);
        return a
    }

    function vN(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.D;
        if (!Tl(d.google_reactive_ad_format) && (tG(d) || d.google_reactive_ads_config) || !mr(c) || rN(a, c) <= b) return !1;
        var e = $C(),
            f = Y(e, 8, {});
        e = Y(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new t.IntersectionObserver((l, m) => {
                Ab(l, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.H = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ja(Promise, "any").call(Promise, [f, e]).then(() => {
            bl(294, () => {
                qN(a)
            })
        });
        return !0
    }

    function qN(a) {
        bl(326, () => {
            if (1 === ti(a.D)) {
                var d = S(Cq),
                    e = d || S(Aq),
                    f = a.pubWin;
                if (e && f === a.J) {
                    var g = new sl;
                    e = new tl;
                    var h = g.setCorrelator(Eh(a.pubWin));
                    var k = PF(a.pubWin);
                    h = Bd(h, 5, k);
                    Ed(h, 2, 1);
                    g = pd(e, 1, g);
                    h = new rl;
                    h = Ad(h, 10, !0);
                    k = S(tq);
                    h = Ad(h, 8, k);
                    k = S(uq);
                    h = Ad(h, 12, k);
                    k = S(xq);
                    h = Ad(h, 7, k);
                    k = S(wq);
                    h = Ad(h, 13, k);
                    pd(g, 2, h);
                    f.google_rum_config = e.toJSON();
                    bh(f.document, B(a.la, 9) && d ? a.da.kg : a.da.lg)
                } else aj(al)
            }
        });
        a.D.google_ad_channel = wN(a, a.D.google_ad_channel);
        a.D.google_tag_partner = xN(a, a.D.google_tag_partner);
        yN(a);
        zN(a);
        var b = a.D.google_start_time;
        "number" === typeof b && (Cl = b, a.D.google_start_time = null);
        uF(a);
        AN(a);
        hD() && kE({
            win: a.pubWin,
            webPropertyCode: a.D.google_ad_client,
            wb: a.da.wb
        });
        tG(a.D) && (Ey() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        BN(a.J);
        b = "function" === typeof a.pubWin.document.browsingTopics && JF("browsing-topics", a.pubWin.document);
        const c = JF("shared-storage", a.pubWin.document);
        if (b || S(kq) && c) try {
            a.A = gN(a.pubWin)
        } catch (d) {
            kl(984, d)
        }
        return CN(a)
    }

    function AN(a) {
        a.J && (xG(a.J, a.da.tf), S(Mp) || vG(a.J.location) && GG(a.J, {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.D.google_ad_client
        }))
    }

    function wN(a, b) {
        return (b ? [b] : []).concat(YC(a.D).ad_channels || []).join("+")
    }

    function xN(a, b) {
        return (b ? [b] : []).concat(YC(a.D).tag_partners || []).join("+")
    }

    function DN(a) {
        const b = ch("IFRAME");
        fh(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function EN(a, b, c) {
        return 9 === a.D.google_reactive_ad_format && Sg(a.Z, null, "fsi_container") ? (a.Z.appendChild(b), Promise.resolve(b)) : EG(a.da.Be, 525, d => {
            a.Z.appendChild(b);
            d.createAdSlot(a.J, a.D, b, a.Z.parentElement, $D(c, a.pubWin));
            return b
        })
    }

    function FN(a, b, c) {
        O(yD).l = a.D.google_page_url;
        $M(a.pubWin, Ad(Sf(Ed(Ed(Rf(new Tf, Pf(new Qf, String(Eh(a.pubWin)))), 4, 1), 2, 1), K(a.la, 2)), 6, !0));
        const d = a.J;
        a.D.google_acr && a.D.google_acr(b);
        oe(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? YC(d).enable_overlap_observer || !1 : !1;
            (a.D.ovlp || f) && d && d === a.pubWin && GN(d, a, a.Z, b)
        });
        var e = f => {
            f && a.m.push(() => {
                f.va()
            })
        };
        HN(a, b);
        IN(a, b);
        !d || tG(a.D) && !IG(a.D) || (e(new dI(d, b, a.D)), e(new nH(a, b)), e(d.IntersectionObserver ? null : new pH(d, b, a.Z)));
        d && (e(new hH(d, b)), a.m.push(SG(d, a.D)), O(XG).init(d), a.m.push(dH(d, a.Z, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.D.iaaso;
        if (null != c) {
            e = a.Z;
            const f = e.parentElement;
            (f && zr.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.Z;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        JN(a)
    }

    function HN(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = gD();
        let f = null;
        const g = ll(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.m.push(g)
    }

    function KN(a, b) {
        var c = QF(a, "__gpi_opt_out", b.l);
        c && (c = bg(ag($f(Zf(new cg, c), 2147483647), "/"), b.pubWin.location.hostname), RF(a, "__gpi_opt_out", c, b.l))
    }

    function IN(a, b) {
        const c = ll(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = bg(ag($f(Zf(new cg, d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new UF(a.pubWin);
                RF(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) SF(f, "__gads", a.l), SF(f, "__gpi", a.l)
            }
        });
        a.m.push(c)
    }

    function JN(a) {
        const b = Rh(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                oe(a.pubWin, "message", $k.ra(616, c));
                a.m.push(() => {
                    pe(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function GN(a, b, c, d) {
        GM(new PM(a), c).then(e => {
            yl(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && zr.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.D.armr || "",
                g = e.executionTime || "",
                h = null == b.D.iaaso ? "" : Number(b.D.iaaso),
                k = Number(e.isOverlappingOrOutsideViewport),
                l = Cb(e.entries, z => `${z.overlapType}:${z.overlapDepth}:${z.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                q =
                m * e.targetRect.width * e.targetRect.height,
                r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                w = vi(e.target),
                C = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            jl("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: PF(b.D),
                et: g,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.D.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.D.google_responsive_auto_format,
                roa: q,
                slot: b.D.google_ad_slot,
                sp: r,
                tgt: w,
                tr: C,
                url: b.D.google_page_url,
                vp: e,
                pvc: Eh(a)
            }, 1)
        }).catch(e => {
            yl(8, ["Error:", e.message, c]);
            jl("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function LN(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function MN(a, b, c, d) {
        var e = a.D;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var k = JG(e),
            l = {
                id: f,
                name: f
            };
        l.style = k ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = th();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var q = m.indexOf("?");
                if (0 > q || q > n) {
                    q = n;
                    var r =
                        ""
                } else r = m.substring(q + 1, n);
                m = [m.slice(0, q), r, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            l.sandbox = sh().join(" ")
        }
        S(vp) && !1 === e.google_video_play_muted && LN("autoplay", l);
        n = T(sb() ? Np : Sp);
        m = b;
        m.length > n && (m = m.substring(0, n - 8), m = m.replace(/%\w?$/, ""), m = m.replace(/&[^=]*=?$/, ""), m += "&trunc=1");
        m !== b && (n -= 8, q = b.lastIndexOf("&", n), -1 === q && (q = b.lastIndexOf("?", n)), jl("trn", {
            ol: b.length,
            tr: -1 === q ? "" : b.substring(q + 1),
            url: b
        }, .01));
        b = m;
        n = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" :
            b;
        null != g && (l.width = String(g));
        null != h && (l.height = String(h));
        l.frameborder = "0";
        l.marginwidth = "0";
        l.marginheight = "0";
        l.vspace = "0";
        l.hspace = "0";
        l.allowtransparency = "true";
        l.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (n = ""; 0 < m--;) n += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
            n = m = n;
            q = ph();
            b = b + (-1 == b.indexOf("?") ? "?" : "&") + [0 < q.length ? "google_debug" + (q ? "=" + q : "") + "&" : "", "xpc=", n, "&p=", encodeURIComponent(t.document.location.protocol), "//", encodeURIComponent(t.document.location.host)].join("")
        } else b =
            n;
        e.dash && (l.srcdoc = e.dash);
        a.pubWin.document.featurePolicy ? .features().includes("attribution-reporting") && LN("attribution-reporting", l);
        S(qq) && (n = a.pubWin, void 0 !== n.credentialless && (S(rq) || n.crossOriginIsolated) && (l.credentialless = "true"));
        if (k) l.src = b, l = DN(l), l = EN(a, l, d);
        else {
            d = {};
            d.dtd = bH((new Date).getTime(), Cl);
            d = pi(d, b);
            l.src = d;
            d = a.pubWin;
            d = d == d.top;
            l = DN(l);
            d && a.m.push(Xh(a.pubWin, l));
            a.Z.style.visibility = "visible";
            d = a.Z;
            for (k = l; n = d.firstChild;) d.removeChild(n);
            d.appendChild(k);
            l = Promise.resolve(l)
        }
        c &&
            (c = a.da.Jg, e = {
                id: f,
                url: b,
                width: g,
                height: h,
                Ra: m,
                jg: a.pubWin,
                bf: f,
                Nk: "google_expandable_ad_slot" + ti(e),
                Pf: c.toString(),
                Sc: a.pubWin
            }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Ra || !e.Sc ? void 0 : ll(e.Sc, "ct", Da(ol, e, c)), e && a.m.push(e));
        return l
    }
    async function NN(a) {
        var b = a.D,
            c = a.pubWin,
            d = a.l;
        y(d, 5) && KN(new UF(a.pubWin), a);
        var e = $D(d, a.pubWin);
        if (!y(d, 5)) return jl("afc_noc_req", {}, T(up)), Promise.resolve();
        y(d, 5) && YF(d, a.pubWin, a.D.google_ad_client);
        var f = a.D.google_reactive_ads_config;
        f && (DG(a.J, f), KG(f, a, $D(d)), f = f.page_level_pubvars, ua(f) && we(a.D, f));
        y(d, 5) && await ON();
        f = JF("shared-storage", a.pubWin.document);
        S(kq) && a.A && y(d, 5) && f && !Y($C(), 34, !1) && (eD($C(), 34, !0), f = a.A.then(g => {
                g({
                    message: "goog:spam:client_age",
                    pvsid: Eh(a.pubWin),
                    clientAgeIframe: S(jq)
                })
            }),
            $k.za(1069, f));
        if (S(oq) && a.A)
            if (PN(a)) {
                a.v = 1;
                const g = $D(a.l, a.pubWin);
                f = a.A.then(async k => {
                    await hN(k, a.pubWin, g).then(l => {
                        a.v = l
                    })
                });
                const h = T(nq);
                0 < h ? await Promise.race([f, Gh(h)]) : await f
            } else a.v = 5;
        f = "";
        JG(b) ? (f = a.da.Kg.toString() + "#" + SI(b), $I(b, $C()), QN(b)) : (5 === b.google_pgb_reactive && b.google_reactive_ads_config || !uG(b) || sG(c, b, e)) && QN(b) && (f = PI(a, d));
        yl(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || si(c);
        e = ti(b);
        b = a.pubWin === a.J ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648* 
Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Ga()).toString(36)}`;
        c = 0 < rN(a, a.Z, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = $C(), e.btvi = Y(c, 21, 1), fD(c, 21));
        f = pi(e, f);
        d = MN(a, f, 0 === a.C, d);
        a.D.rpe && YH(a.pubWin, a.Z, {
            height: a.D.google_ad_height,
            vd: "force",
            Dd: !0,
            rg: !0,
            Bc: a.D.google_ad_client
        });
        d = await d;
        try {
            FN(a, d, b)
        } catch (g) {
            kl(223, g)
        }
    }

    function ON() {
        return (vb() ? 0 <= ab(11) : ub() && 0 <= ab(65)) ? new Promise(a => {
            GI(a.bind(null, !0))
        }) : (GI(null), Promise.resolve(!1))
    }

    function RN(a) {
        const b = S(Eq) ? new wL(a) : new WM(a);
        return new Promise(c => {
            b.C(d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function SN(a) {
        var b = uh(t.top, "googlefcPresent");
        t.googlefc && !b && jl("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function TN(a) {
        return a.m() ? a.H() : Promise.resolve(null)
    }

    function UN(a, b) {
        const c = b.Ag;
        b = b.uspString;
        c ? $G(a, c) : cE(a, !0);
        b && x(a, 1, b)
    }

    function VN(a) {
        const b = T(rp);
        if (0 >= b) return null;
        const c = Ui(),
            d = SM(a.pubWin);
        if (!d) return null;
        a.B = "0";
        return Promise.race([d, Gh(b, "0")]).then(e => {
            jl("adsense_paw", {
                time: Ui() - c
            });
            1E4 < e ? .length ? kl(809, Error(`ML:${e.length}`)) : a.B = e
        }).catch(e => {
            kl(809, e)
        })
    }

    function WN(a) {
        const b = Ui();
        return Promise.race([bl(832, () => bN(a)), Gh(200)]).then(c => {
            jl("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: Ui() - b,
                tms: 200
            });
            return c ? .sb
        })
    }
    async function XN(a) {
        const b = VN(a),
            c = bl(868, () => WN(a.pubWin));
        CI(K(a.la, 8));
        aF(a.pubWin);
        SN(a.D.google_ad_client);
        var d = S(Dq) ? new BL(a.pubWin) : new YM(a.pubWin);
        await TN(d);
        a.l = new dE;
        d = [aH(a), RN(a.pubWin)];
        d = await Promise.all(d);
        UN(a.l, {
            Ag: d[0],
            uspString: d[1]
        });
        await b;
        a.sb = await c || "";
        await NN(a)
    }

    function PN(a) {
        const b = a.l;
        a = a.D;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!y(b, 5) && !b.j() && !iD() && !y(b, 9)
    }

    function CN(a) {
        var b = a.pubWin.document,
            c = a.D;
        const d = c.google_ad_width,
            e = c.google_ad_height;
        let f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2; {
                c = navigator;
                const l = c.userAgent,
                    m = c.platform,
                    n = c.product;
                if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(m) && /^Opera/.test(l)) var g = !1;
                else if (/Win/.test(m) && /Trident/.test(l) && 11 <= b.documentMode) g = !0;
                else {
                    var h = (/WebKit\/(\d+)/.exec(l) || [0, 0])[1],
                        k = (/rv:(\d+\.\d+)/.exec(l) || [0, 0])[1];
                    g = !h && "Gecko" === n && 27 <= k && !/ rv: 1\.8([^.] |\.0) /.test(l) || 536 <= h ? !0 : !1
                }
            }
            g || (f |= 4);
            qr(a.pubWin, d, e) && (f |= 2)
        } catch (l) {
            f |= 8
        }
        a.C = f;
        0 === a.C || (a.D.google_allow_expandable_ads = !1);
        Hh(a.pubWin) !== a.pubWin && (a.j |= 4);
        3 === qH(a.pubWin.document) && (a.j |= 32);
        if (b = a.J) b = a.J, b = !(P(b).scrollWidth <= P(b).clientWidth);
        b && (a.j |= 1024);
        a.pubWin.Prototype ? .Version && (a.j |= 16384);
        a.D.google_loader_features_used && (a.j |= a.D.google_loader_features_used);
        a.G = 2;
        return XN(a)
    }

    function QN(a) {
        const b = $C(),
            c = a.google_ad_section;
        tG(a) && fD(b, 15);
        if (yi(a)) {
            if (100 < fD(b, 5)) return !1
        } else if (100 < fD(b, 6) - Y(b, 15, 0) && "" === c) return !1;
        return !0
    }

    function yN(a) {
        const b = a.J;
        if (b && !YC(b).ads_density_stats_processed && !Rh(b) && (YC(b).ads_density_stats_processed = !0, S(Tp) || .01 > eh())) {
            const c = () => {
                if (b) {
                    var d = $B(VB(b), a.D.google_ad_client, b.location.hostname, PF(a.D).split(","));
                    jl("ama_stats", d, 1)
                }
            };
            Fh(b, () => {
                t.setTimeout(c, 1E3)
            })
        }
    }

    function BN(a) {
        a && !YC(a).host_pinged_back && (YC(a).host_pinged_back = !0, jl("abg_host", {
            host: a.location.host
        }, .01))
    }

    function zN(a) {
        const b = a.pubWin;
        if (b && !YC(b).menu_analytics_processed && (YC(b).menu_analytics_processed = !0, S(Pp))) {
            const c = () => {
                var d = "function" !== typeof b.navigator.sendBeacon ? null : new wE(b);
                if (null === d) var e = null;
                else e = new vE(b), d = new tE(d, a.D.google_ad_client, b.location.hostname), e = new sE(e, d);
                e ? .Qe()
            };
            Fh(b, () => {
                t.setTimeout(c, 1E3)
            })
        }
    };
    (function(a, b, c) {
        bl(843, () => {
            if (!t.google_sa_impl) {
                var d = oL(a);
                mL(d);
                yl(16, [3, d.toJSON()]);
                var e = kL({
                        Md: b,
                        Ie: K(d, 2)
                    }),
                    f = c(e, d);
                t.google_sa_impl = h => kN({
                    la: d,
                    da: f,
                    Ja: e,
                    slot: h
                });
                MF(IF(t));
                t.google_process_slots ? .();
                var g = (t.Prototype || {}).Version;
                null != g && jl("prtpjs", {
                    version: g
                })
            }
        })
    })(nL, "m202303140101", function(a, b) {
        const c = 2012 < vd(b, 1) ? `_fy${vd(b,1)}` : "",
            d = K(b, 3);
        b = K(b, 2);
        return {
            lg: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            kg: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Be: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            tf: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            Jg: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            Kg: N `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            Jb: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            wb: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`
        }
    });
}).call(this, "[2021,\"r20230315\",\"r20110914\",null,null,null,null,\".google.co.ug\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759837,44759875,44759926,44777877]]");