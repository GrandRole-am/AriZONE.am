/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    [, function(e, t, n) {
        "use strict";
        n.d(t, "k", (function() {
            return m
        })), n.d(t, "m", (function() {
            return f
        })), n.d(t, "l", (function() {
            return y
        })), n.d(t, "e", (function() {
            return v
        })), n.d(t, "b", (function() {
            return _
        })), n.d(t, "s", (function() {
            return k
        })), n.d(t, "g", (function() {
            return A
        })), n.d(t, "h", (function() {
            return P
        })), n.d(t, "d", (function() {
            return w
        })), n.d(t, "r", (function() {
            return x
        })), n.d(t, "j", (function() {
            return S
        })), n.d(t, "t", (function() {
            return T
        })), n.d(t, "o", (function() {
            return O
        })), n.d(t, "q", (function() {
            return M
        })), n.d(t, "f", (function() {
            return C
        })), n.d(t, "c", (function() {
            return j
        })), n.d(t, "i", (function() {
            return L
        })), n.d(t, "p", (function() {
            return N
        })), n.d(t, "a", (function() {
            return G
        })), n.d(t, "v", (function() {
            return U
        })), n.d(t, "n", (function() {
            return V
        })), n.d(t, "u", (function() {
            return Y
        }));
        var o = n(2),
            r = n(10),
            l = (n(92), n(8), n(12), n(11), n(23), n(40), n(111), n(161), n(112), n(44), n(34), n(0)),
            c = n(14);

        function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function h(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        function m(e) {
            l.default.config.errorHandler && l.default.config.errorHandler(e)
        }

        function f(e) {
            return e.then((e => e.default || e))
        }

        function y(e) {
            return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
        }

        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = e.$children || [];
            for (var o of n) o.$fetch ? t.push(o) : o.$children && v(o, t);
            return t
        }

        function _(e, t) {
            if (t || !e.options.__hasNuxtData) {
                var n = e.options._originDataFn || e.options.data || function() {
                    return {}
                };
                e.options._originDataFn = n, e.options.data = function() {
                    var data = n.call(this, this);
                    return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), h(h({}, data), t)
                }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
            }
        }

        function k(e) {
            return e.options && e._Ctor === e || (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = l.default.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file)), e
        }

        function A(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], e.matched.map(((e, o) => Object.keys(e[n]).map((r => (t && t.push(o), e[n][r]))))))
        }

        function P(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return A(e, t, "instances")
        }

        function w(e, t) {
            return Array.prototype.concat.apply([], e.matched.map(((e, n) => Object.keys(e.components).reduce(((o, r) => (e.components[r] ? o.push(t(e.components[r], e.instances[r], e, r, n)) : delete e.components[r], o)), []))))
        }

        function x(e, t) {
            return Promise.all(w(e, function() {
                var e = Object(o.a)((function*(e, n, o, r) {
                    if ("function" == typeof e && !e.options) try {
                        e = yield e()
                    } catch (e) {
                        if (e && "ChunkLoadError" === e.name && "undefined" != typeof window && window.sessionStorage) {
                            var l = Date.now(),
                                c = parseInt(window.sessionStorage.getItem("nuxt-reload"));
                            (!c || c + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l), window.location.reload(!0))
                        }
                        throw e
                    }
                    return o.components[r] = e = k(e), "function" == typeof t ? t(e, n, o, r) : e
                }));
                return function(t, n, o, r) {
                    return e.apply(this, arguments)
                }
            }()))
        }

        function S(e) {
            return z.apply(this, arguments)
        }

        function z() {
            return (z = Object(o.a)((function*(e) {
                if (e) return yield x(e), h(h({}, e), {}, {
                    meta: A(e).map(((t, n) => h(h({}, t.options.meta), (e.matched[n] || {}).meta)))
                })
            }))).apply(this, arguments)
        }

        function T(e, t) {
            return R.apply(this, arguments)
        }

        function R() {
            return (R = Object(o.a)((function*(e, t) {
                e.context || (e.context = {
                    isStatic: !0,
                    isDev: !1,
                    isHMR: !1,
                    app: e,
                    store: e.store,
                    payload: t.payload,
                    error: t.error,
                    base: e.router.options.base,
                    env: {}
                }, t.req && (e.context.req = t.req), t.res && (e.context.res = t.res), t.ssrContext && (e.context.ssrContext = t.ssrContext), e.context.redirect = (t, path, n) => {
                    if (t) {
                        e.context._redirected = !0;
                        var o = typeof path;
                        if ("number" == typeof t || "undefined" !== o && "object" !== o || (n = path || {}, o = typeof(path = t), t = 302), "object" === o && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(c.e)(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                        e.context.next({
                            path: path,
                            query: n,
                            status: t
                        })
                    }
                }, e.context.nuxtState = window.__NUXT__);
                var [n, o] = yield Promise.all([S(t.route), S(t.from)]);
                t.route && (e.context.route = n), t.from && (e.context.from = o), e.context.next = t.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {}
            }))).apply(this, arguments)
        }

        function O(e, t) {
            return !e.length || t._redirected || t._errored ? Promise.resolve() : M(e[0], t).then((() => O(e.slice(1), t)))
        }

        function M(e, t) {
            var n;
            return (n = 2 === e.length ? new Promise((n => {
                e(t, (function(e, data) {
                    e && t.error(e), n(data = data || {})
                }))
            })) : e(t)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
        }

        function C(base, e) {
            if ("hash" === e) return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var t = (path || "/") + window.location.search + window.location.hash;
            return Object(c.d)(t)
        }

        function j(e, t) {
            return function(e, t) {
                for (var n = new Array(e.length), i = 0; i < e.length; i++) "object" == typeof e[i] && (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", B(t)));
                return function(t, o) {
                    for (var path = "", data = t || {}, r = (o || {}).pretty ? E : encodeURIComponent, l = 0; l < e.length; l++) {
                        var c = e[l];
                        if ("string" != typeof c) {
                            var d = data[c.name || "pathMatch"],
                                h = void 0;
                            if (null == d) {
                                if (c.optional) {
                                    c.partial && (path += c.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + c.name + '" to be defined')
                            }
                            if (Array.isArray(d)) {
                                if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                                if (0 === d.length) {
                                    if (c.optional) continue;
                                    throw new TypeError('Expected "' + c.name + '" to not be empty')
                                }
                                for (var m = 0; m < d.length; m++) {
                                    if (h = r(d[m]), !n[l].test(h)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(h) + "`");
                                    path += (0 === m ? c.prefix : c.delimiter) + h
                                }
                            } else {
                                if (h = c.asterisk ? I(d) : r(d), !n[l].test(h)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + h + '"');
                                path += c.prefix + h
                            }
                        } else path += c
                    }
                    return path
                }
            }(function(e, t) {
                var n, o = [],
                    r = 0,
                    l = 0,
                    path = "",
                    c = t && t.delimiter || "/";
                for (; null != (n = D.exec(e));) {
                    var d = n[0],
                        h = n[1],
                        m = n.index;
                    if (path += e.slice(l, m), l = m + d.length, h) path += h[1];
                    else {
                        var f = e[l],
                            y = n[2],
                            v = n[3],
                            _ = n[4],
                            k = n[5],
                            A = n[6],
                            P = n[7];
                        path && (o.push(path), path = "");
                        var w = null != y && null != f && f !== y,
                            x = "+" === A || "*" === A,
                            S = "?" === A || "*" === A,
                            z = n[2] || c,
                            pattern = _ || k;
                        o.push({
                            name: v || r++,
                            prefix: y || "",
                            delimiter: z,
                            optional: S,
                            repeat: x,
                            partial: w,
                            asterisk: Boolean(P),
                            pattern: pattern ? F(pattern) : P ? ".*" : "[^" + $(z) + "]+?"
                        })
                    }
                }
                l < e.length && (path += e.substr(l));
                path && o.push(path);
                return o
            }(e, t), t)
        }

        function L(e, t) {
            var n = {},
                o = h(h({}, e), t);
            for (var r in o) String(e[r]) !== String(t[r]) && (n[r] = !0);
            return n
        }

        function N(e) {
            var t;
            if (e.message || "string" == typeof e) t = e.message || e;
            else try {
                t = JSON.stringify(e, null, 2)
            } catch (n) {
                t = "[".concat(e.constructor.name, "]")
            }
            return h(h({}, e), {}, {
                message: t,
                statusCode: e.statusCode || e.status || e.response && e.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [], window.onNuxtReady = e => {
            window.onNuxtReadyCbs.push(e)
        };
        var D = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function E(e, t) {
            var n = t ? /[?#]/g : /[/?#]/g;
            return encodeURI(e).replace(n, (e => "%" + e.charCodeAt(0).toString(16).toUpperCase()))
        }

        function I(e) {
            return E(e, !0)
        }

        function $(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function F(e) {
            return e.replace(/([=!:$/()])/g, "\\$1")
        }

        function B(e) {
            return e && e.sensitive ? "" : "i"
        }

        function G(e, t, n) {
            e.$options[t] || (e.$options[t] = []), e.$options[t].includes(n) || e.$options[t].push(n)
        }
        var U = c.c,
            V = (c.g, c.b);

        function Y(e) {
            try {
                window.history.scrollRestoration = e
            } catch (e) {}
        }
    }, , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        })), n.d(t, "b", (function() {
            return r
        }));
        var o = e => {
                var t = localStorage.getItem(e);
                if (null !== t) {
                    var n = JSON.parse(t);
                    return void 0 === n.expiredAt || n.expiredAt < Date.now() ? null : n.data
                }
                return null
            },
            r = (e, data, time) => {
                localStorage.setItem(e, JSON.stringify({
                    data: data,
                    expiredAt: Date.now() + 1e3 * time
                }))
            }
    }, , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return o
        })), n.d(t, "a", (function() {
            return r
        })), n.d(t, "d", (function() {
            return l
        })), n.d(t, "c", (function() {
            return c
        })), n.d(t, "b", (function() {
            return d
        }));
        var o = 900,
            r = 25200,
            l = 25200,
            c = 25200,
            d = 25200
    }, function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return Kt
        })), n.d(t, "a", (function() {
            return de
        }));
        var o = {};
        n.r(o), n.d(o, "AuthForm", (function() {
            return je
        })), n.d(o, "Breadcrumbs", (function() {
            return Le
        })), n.d(o, "ChangePasswordForm", (function() {
            return Ne
        })), n.d(o, "FaqItem", (function() {
            return qe
        })), n.d(o, "FaqList", (function() {
            return De
        })), n.d(o, "FindGamerForm", (function() {
            return Ee
        })), n.d(o, "Footer", (function() {
            return Ie
        })), n.d(o, "GetPrice", (function() {
            return $e
        })), n.d(o, "Navbar", (function() {
            return Fe
        })), n.d(o, "PostCommentForm", (function() {
            return Be
        })), n.d(o, "Rates", (function() {
            return Ge
        })), n.d(o, "RestorePasswordForm", (function() {
            return Ue
        })), n.d(o, "Server", (function() {
            return Ve
        })), n.d(o, "ShopForm", (function() {
            return Ye
        })), n.d(o, "HomepageAltLauncher", (function() {
            return Ke
        })), n.d(o, "HomepageLauncher", (function() {
            return Qe
        })), n.d(o, "HomepageMobileLauncher", (function() {
            return He
        })), n.d(o, "HomepageMonitoring", (function() {
            return Xe
        })), n.d(o, "HomepageNews", (function() {
            return Ze
        })), n.d(o, "HomepagePlaySampText", (function() {
            return Je
        })), n.d(o, "HomepagePresent", (function() {
            return We
        })), n.d(o, "HomepageSlider", (function() {
            return ea
        })), n.d(o, "ProfileFightStyle", (function() {
            return aa
        })), n.d(o, "ProfileFightStyles", (function() {
            return ta
        })), n.d(o, "ProfileSkills", (function() {
            return na
        })), n.d(o, "ProfileUpgrades", (function() {
            return oa
        })), n.d(o, "ProfileWeaponSkills", (function() {
            return ia
        })), n.d(o, "MixinsForm", (function() {
            return ra
        })), n.d(o, "MixinsShowVideoMixin", (function() {
            return sa
        }));
        var r = n(2),
            l = n(10),
            c = (n(92), n(8), n(12), n(50), n(11), n(23), n(40), n(0)),
            d = n(65),
            h = n(64),
            m = n(125),
            f = n.n(m),
            y = n(53),
            v = n.n(y),
            _ = n(126),
            k = n(14),
            A = n(1);
        "scrollRestoration" in window.history && (Object(A.u)("manual"), window.addEventListener("beforeunload", (() => {
            Object(A.u)("auto")
        })), window.addEventListener("load", (() => {
            Object(A.u)("manual")
        })));

        function P(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function w(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? P(Object(source), !0).forEach((function(t) {
                    Object(l.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : P(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var x = () => Object(A.m)(n.e(29).then(n.bind(null, 882))),
            S = () => Object(A.m)(n.e(30).then(n.bind(null, 883))),
            z = () => Object(A.m)(Promise.all([n.e(5), n.e(2), n.e(0), n.e(1), n.e(44)]).then(n.bind(null, 884))),
            T = () => Object(A.m)(n.e(33).then(n.bind(null, 885))),
            R = () => Object(A.m)(n.e(40).then(n.bind(null, 886))),
            O = () => Object(A.m)(n.e(41).then(n.bind(null, 887))),
            M = () => Object(A.m)(n.e(45).then(n.bind(null, 888))),
            C = () => Object(A.m)(n.e(46).then(n.bind(null, 889))),
            j = () => Object(A.m)(n.e(49).then(n.bind(null, 890))),
            L = () => Object(A.m)(n.e(50).then(n.bind(null, 891))),
            N = () => Object(A.m)(n.e(55).then(n.bind(null, 892))),
            D = () => Object(A.m)(n.e(56).then(n.bind(null, 893))),
            E = () => Object(A.m)(n.e(57).then(n.bind(null, 894))),
            I = () => Object(A.m)(Promise.all([n.e(0), n.e(58)]).then(n.bind(null, 895))),
            $ = () => Object(A.m)(Promise.all([n.e(63), n.e(59)]).then(n.bind(null, 896))),
            F = () => Object(A.m)(n.e(60).then(n.bind(null, 897))),
            B = () => Object(A.m)(n.e(31).then(n.bind(null, 898))),
            G = () => Object(A.m)(n.e(32).then(n.bind(null, 899))),
            U = () => Object(A.m)(n.e(34).then(n.bind(null, 900))),
            V = () => Object(A.m)(n.e(35).then(n.bind(null, 901))),
            Y = () => Object(A.m)(n.e(36).then(n.bind(null, 902))),
            K = () => Object(A.m)(n.e(37).then(n.bind(null, 903))),
            Q = () => Object(A.m)(n.e(38).then(n.bind(null, 904))),
            H = () => Object(A.m)(n.e(39).then(n.bind(null, 905))),
            X = () => Object(A.m)(n.e(51).then(n.bind(null, 906))),
            Z = () => Object(A.m)(n.e(52).then(n.bind(null, 907))),
            J = () => Object(A.m)(n.e(53).then(n.bind(null, 908))),
            W = () => Object(A.m)(n.e(43).then(n.bind(null, 909))),
            ee = () => Object(A.m)(n.e(47).then(n.bind(null, 910))),
            ae = () => Object(A.m)(n.e(48).then(n.bind(null, 911))),
            te = () => Object(A.m)(n.e(42).then(n.bind(null, 912))),
            ne = () => Object(A.m)(n.e(54).then(n.bind(null, 913))),
            oe = () => {};
        c.default.use(_.a);
        var ie = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(e, t, n) {
                var o = !1,
                    r = e !== t;
                n ? o = n : r && function(e) {
                    var t = Object(A.g)(e);
                    if (1 === t.length) {
                        var {
                            options: n = {}
                        } = t[0];
                        return !1 !== n.scrollToTop
                    }
                    return t.some((e => {
                        var {
                            options: t
                        } = e;
                        return t && t.scrollToTop
                    }))
                }(e) && (o = {
                    x: 0,
                    y: 0
                });
                var l = window.$nuxt;
                return (!r || e.path === t.path && e.hash !== t.hash) && l.$nextTick((() => l.$emit("triggerScroll"))), new Promise((t => {
                    l.$once("triggerScroll", (() => {
                        if (e.hash) {
                            var n = e.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                            try {
                                document.querySelector(n) && (o = {
                                    selector: n
                                })
                            } catch (e) {
                                console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                            }
                        }
                        t(o)
                    }))
                }))
            },
            routes: [{
                path: "/404",
                component: x,
                name: "404___ru"
            }, {
                path: "/about-us",
                component: S,
                name: "about-us___ru"
            }, {
                path: "/be",
                component: z,
                name: "index___be"
            }, {
                path: "/change-password",
                component: T,
                name: "change-password___ru"
            }, {
                path: "/faq",
                component: R,
                name: "faq___ru"
            }, {
                path: "/find-gamer",
                component: O,
                name: "find-gamer___ru"
            }, {
                path: "/kk",
                component: z,
                name: "index___kk"
            }, {
                path: "/login",
                component: M,
                name: "login___ru"
            }, {
                path: "/logout",
                component: C,
                name: "logout___ru"
            }, {
                path: "/posts",
                component: j,
                name: "posts___ru"
            }, {
                path: "/profile",
                component: L,
                name: "profile___ru"
            }, {
                path: "/recovery-password",
                component: N,
                name: "recovery-password___ru"
            }, {
                path: "/reset-bank-code",
                component: D,
                name: "reset-bank-code___ru"
            }, {
                path: "/restore-password",
                component: E,
                name: "restore-password___ru"
            }, {
                path: "/servers",
                component: I,
                name: "servers___ru"
            }, {
                path: "/shop",
                component: $,
                name: "shop___ru"
            }, {
                path: "/switch-off-2fatotp",
                component: F,
                name: "switch-off-2fatotp___ru"
            }, {
                path: "/uk",
                component: z,
                name: "index___uk"
            }, {
                path: "/uz",
                component: z,
                name: "index___uz"
            }, {
                path: "/authentication/vkontakte",
                component: B,
                name: "authentication-vkontakte___ru"
            }, {
                path: "/authentication/vkontakte-add",
                component: G,
                name: "authentication-vkontakte-add___ru"
            }, {
                path: "/be/404",
                component: x,
                name: "404___be"
            }, {
                path: "/be/about-us",
                component: S,
                name: "about-us___be"
            }, {
                path: "/be/change-password",
                component: T,
                name: "change-password___be"
            }, {
                path: "/be/faq",
                component: R,
                name: "faq___be"
            }, {
                path: "/be/find-gamer",
                component: O,
                name: "find-gamer___be"
            }, {
                path: "/be/login",
                component: M,
                name: "login___be"
            }, {
                path: "/be/logout",
                component: C,
                name: "logout___be"
            }, {
                path: "/be/posts",
                component: j,
                name: "posts___be"
            }, {
                path: "/be/profile",
                component: L,
                name: "profile___be"
            }, {
                path: "/be/recovery-password",
                component: N,
                name: "recovery-password___be"
            }, {
                path: "/be/reset-bank-code",
                component: D,
                name: "reset-bank-code___be"
            }, {
                path: "/be/restore-password",
                component: E,
                name: "restore-password___be"
            }, {
                path: "/be/servers",
                component: I,
                name: "servers___be"
            }, {
                path: "/be/shop",
                component: $,
                name: "shop___be"
            }, {
                path: "/be/switch-off-2fatotp",
                component: F,
                name: "switch-off-2fatotp___be"
            }, {
                path: "/control/donate-ratio",
                component: U,
                name: "control-donate-ratio___ru"
            }, {
                path: "/control/launcher-notifications",
                component: V,
                name: "control-launcher-notifications___ru"
            }, {
                path: "/control/launcher-stories",
                component: Y,
                name: "control-launcher-stories___ru"
            }, {
                path: "/control/tidex-access",
                component: K,
                name: "control-tidex-access___ru"
            }, {
                path: "/document/policy",
                component: Q,
                name: "document-policy___ru"
            }, {
                path: "/document/terms",
                component: H,
                name: "document-terms___ru"
            }, {
                path: "/kk/404",
                component: x,
                name: "404___kk"
            }, {
                path: "/kk/about-us",
                component: S,
                name: "about-us___kk"
            }, {
                path: "/kk/change-password",
                component: T,
                name: "change-password___kk"
            }, {
                path: "/kk/faq",
                component: R,
                name: "faq___kk"
            }, {
                path: "/kk/find-gamer",
                component: O,
                name: "find-gamer___kk"
            }, {
                path: "/kk/login",
                component: M,
                name: "login___kk"
            }, {
                path: "/kk/logout",
                component: C,
                name: "logout___kk"
            }, {
                path: "/kk/posts",
                component: j,
                name: "posts___kk"
            }, {
                path: "/kk/profile",
                component: L,
                name: "profile___kk"
            }, {
                path: "/kk/recovery-password",
                component: N,
                name: "recovery-password___kk"
            }, {
                path: "/kk/reset-bank-code",
                component: D,
                name: "reset-bank-code___kk"
            }, {
                path: "/kk/restore-password",
                component: E,
                name: "restore-password___kk"
            }, {
                path: "/kk/servers",
                component: I,
                name: "servers___kk"
            }, {
                path: "/kk/shop",
                component: $,
                name: "shop___kk"
            }, {
                path: "/kk/switch-off-2fatotp",
                component: F,
                name: "switch-off-2fatotp___kk"
            }, {
                path: "/profile/inventory",
                component: X,
                name: "profile-inventory___ru"
            }, {
                path: "/profile/pay-businesses",
                component: Z,
                name: "profile-pay-businesses___ru"
            }, {
                path: "/profile/pay-houses",
                component: J,
                name: "profile-pay-houses___ru"
            }, {
                path: "/uk/404",
                component: x,
                name: "404___uk"
            }, {
                path: "/uk/about-us",
                component: S,
                name: "about-us___uk"
            }, {
                path: "/uk/change-password",
                component: T,
                name: "change-password___uk"
            }, {
                path: "/uk/faq",
                component: R,
                name: "faq___uk"
            }, {
                path: "/uk/find-gamer",
                component: O,
                name: "find-gamer___uk"
            }, {
                path: "/uk/login",
                component: M,
                name: "login___uk"
            }, {
                path: "/uk/logout",
                component: C,
                name: "logout___uk"
            }, {
                path: "/uk/posts",
                component: j,
                name: "posts___uk"
            }, {
                path: "/uk/profile",
                component: L,
                name: "profile___uk"
            }, {
                path: "/uk/recovery-password",
                component: N,
                name: "recovery-password___uk"
            }, {
                path: "/uk/reset-bank-code",
                component: D,
                name: "reset-bank-code___uk"
            }, {
                path: "/uk/restore-password",
                component: E,
                name: "restore-password___uk"
            }, {
                path: "/uk/servers",
                component: I,
                name: "servers___uk"
            }, {
                path: "/uk/shop",
                component: $,
                name: "shop___uk"
            }, {
                path: "/uk/switch-off-2fatotp",
                component: F,
                name: "switch-off-2fatotp___uk"
            }, {
                path: "/uz/404",
                component: x,
                name: "404___uz"
            }, {
                path: "/uz/about-us",
                component: S,
                name: "about-us___uz"
            }, {
                path: "/uz/change-password",
                component: T,
                name: "change-password___uz"
            }, {
                path: "/uz/faq",
                component: R,
                name: "faq___uz"
            }, {
                path: "/uz/find-gamer",
                component: O,
                name: "find-gamer___uz"
            }, {
                path: "/uz/login",
                component: M,
                name: "login___uz"
            }, {
                path: "/uz/logout",
                component: C,
                name: "logout___uz"
            }, {
                path: "/uz/posts",
                component: j,
                name: "posts___uz"
            }, {
                path: "/uz/profile",
                component: L,
                name: "profile___uz"
            }, {
                path: "/uz/recovery-password",
                component: N,
                name: "recovery-password___uz"
            }, {
                path: "/uz/reset-bank-code",
                component: D,
                name: "reset-bank-code___uz"
            }, {
                path: "/uz/restore-password",
                component: E,
                name: "restore-password___uz"
            }, {
                path: "/uz/servers",
                component: I,
                name: "servers___uz"
            }, {
                path: "/uz/shop",
                component: $,
                name: "shop___uz"
            }, {
                path: "/uz/switch-off-2fatotp",
                component: F,
                name: "switch-off-2fatotp___uz"
            }, {
                path: "/be/authentication/vkontakte",
                component: B,
                name: "authentication-vkontakte___be"
            }, {
                path: "/be/authentication/vkontakte-add",
                component: G,
                name: "authentication-vkontakte-add___be"
            }, {
                path: "/be/control/donate-ratio",
                component: U,
                name: "control-donate-ratio___be"
            }, {
                path: "/be/control/launcher-notifications",
                component: V,
                name: "control-launcher-notifications___be"
            }, {
                path: "/be/control/launcher-stories",
                component: Y,
                name: "control-launcher-stories___be"
            }, {
                path: "/be/control/tidex-access",
                component: K,
                name: "control-tidex-access___be"
            }, {
                path: "/be/document/policy",
                component: Q,
                name: "document-policy___be"
            }, {
                path: "/be/document/terms",
                component: H,
                name: "document-terms___be"
            }, {
                path: "/be/profile/inventory",
                component: X,
                name: "profile-inventory___be"
            }, {
                path: "/be/profile/pay-businesses",
                component: Z,
                name: "profile-pay-businesses___be"
            }, {
                path: "/be/profile/pay-houses",
                component: J,
                name: "profile-pay-houses___be"
            }, {
                path: "/kk/authentication/vkontakte",
                component: B,
                name: "authentication-vkontakte___kk"
            }, {
                path: "/kk/authentication/vkontakte-add",
                component: G,
                name: "authentication-vkontakte-add___kk"
            }, {
                path: "/kk/control/donate-ratio",
                component: U,
                name: "control-donate-ratio___kk"
            }, {
                path: "/kk/control/launcher-notifications",
                component: V,
                name: "control-launcher-notifications___kk"
            }, {
                path: "/kk/control/launcher-stories",
                component: Y,
                name: "control-launcher-stories___kk"
            }, {
                path: "/kk/control/tidex-access",
                component: K,
                name: "control-tidex-access___kk"
            }, {
                path: "/kk/document/policy",
                component: Q,
                name: "document-policy___kk"
            }, {
                path: "/kk/document/terms",
                component: H,
                name: "document-terms___kk"
            }, {
                path: "/kk/profile/inventory",
                component: X,
                name: "profile-inventory___kk"
            }, {
                path: "/kk/profile/pay-businesses",
                component: Z,
                name: "profile-pay-businesses___kk"
            }, {
                path: "/kk/profile/pay-houses",
                component: J,
                name: "profile-pay-houses___kk"
            }, {
                path: "/uk/authentication/vkontakte",
                component: B,
                name: "authentication-vkontakte___uk"
            }, {
                path: "/uk/authentication/vkontakte-add",
                component: G,
                name: "authentication-vkontakte-add___uk"
            }, {
                path: "/uk/control/donate-ratio",
                component: U,
                name: "control-donate-ratio___uk"
            }, {
                path: "/uk/control/launcher-notifications",
                component: V,
                name: "control-launcher-notifications___uk"
            }, {
                path: "/uk/control/launcher-stories",
                component: Y,
                name: "control-launcher-stories___uk"
            }, {
                path: "/uk/control/tidex-access",
                component: K,
                name: "control-tidex-access___uk"
            }, {
                path: "/uk/document/policy",
                component: Q,
                name: "document-policy___uk"
            }, {
                path: "/uk/document/terms",
                component: H,
                name: "document-terms___uk"
            }, {
                path: "/uk/profile/inventory",
                component: X,
                name: "profile-inventory___uk"
            }, {
                path: "/uk/profile/pay-businesses",
                component: Z,
                name: "profile-pay-businesses___uk"
            }, {
                path: "/uk/profile/pay-houses",
                component: J,
                name: "profile-pay-houses___uk"
            }, {
                path: "/uz/authentication/vkontakte",
                component: B,
                name: "authentication-vkontakte___uz"
            }, {
                path: "/uz/authentication/vkontakte-add",
                component: G,
                name: "authentication-vkontakte-add___uz"
            }, {
                path: "/uz/control/donate-ratio",
                component: U,
                name: "control-donate-ratio___uz"
            }, {
                path: "/uz/control/launcher-notifications",
                component: V,
                name: "control-launcher-notifications___uz"
            }, {
                path: "/uz/control/launcher-stories",
                component: Y,
                name: "control-launcher-stories___uz"
            }, {
                path: "/uz/control/tidex-access",
                component: K,
                name: "control-tidex-access___uz"
            }, {
                path: "/uz/document/policy",
                component: Q,
                name: "document-policy___uz"
            }, {
                path: "/uz/document/terms",
                component: H,
                name: "document-terms___uz"
            }, {
                path: "/uz/profile/inventory",
                component: X,
                name: "profile-inventory___uz"
            }, {
                path: "/uz/profile/pay-businesses",
                component: Z,
                name: "profile-pay-businesses___uz"
            }, {
                path: "/uz/profile/pay-houses",
                component: J,
                name: "profile-pay-houses___uz"
            }, {
                path: "/be/fractions/:serverName",
                component: W,
                name: "fractions-serverName___be"
            }, {
                path: "/be/map/:serverName?",
                component: ee,
                name: "map-serverName___be"
            }, {
                path: "/be/posts/:id",
                component: ae,
                name: "posts-id___be"
            }, {
                path: "/kk/fractions/:serverName",
                component: W,
                name: "fractions-serverName___kk"
            }, {
                path: "/kk/map/:serverName?",
                component: ee,
                name: "map-serverName___kk"
            }, {
                path: "/kk/posts/:id",
                component: ae,
                name: "posts-id___kk"
            }, {
                path: "/uk/fractions/:serverName",
                component: W,
                name: "fractions-serverName___uk"
            }, {
                path: "/uk/map/:serverName?",
                component: ee,
                name: "map-serverName___uk"
            }, {
                path: "/uk/posts/:id",
                component: ae,
                name: "posts-id___uk"
            }, {
                path: "/uz/fractions/:serverName",
                component: W,
                name: "fractions-serverName___uz"
            }, {
                path: "/uz/map/:serverName?",
                component: ee,
                name: "map-serverName___uz"
            }, {
                path: "/uz/posts/:id",
                component: ae,
                name: "posts-id___uz"
            }, {
                path: "/be/fractions/:serverName?/:fractionId",
                component: te,
                name: "fractions-serverName-fractionId___be"
            }, {
                path: "/be/rating/:type?/:serverName?",
                component: ne,
                name: "rating-type-serverName___be"
            }, {
                path: "/kk/fractions/:serverName?/:fractionId",
                component: te,
                name: "fractions-serverName-fractionId___kk"
            }, {
                path: "/kk/rating/:type?/:serverName?",
                component: ne,
                name: "rating-type-serverName___kk"
            }, {
                path: "/uk/fractions/:serverName?/:fractionId",
                component: te,
                name: "fractions-serverName-fractionId___uk"
            }, {
                path: "/uk/rating/:type?/:serverName?",
                component: ne,
                name: "rating-type-serverName___uk"
            }, {
                path: "/uz/fractions/:serverName?/:fractionId",
                component: te,
                name: "fractions-serverName-fractionId___uz"
            }, {
                path: "/uz/rating/:type?/:serverName?",
                component: ne,
                name: "rating-type-serverName___uz"
            }, {
                path: "/fractions/:serverName",
                component: W,
                name: "fractions-serverName___ru"
            }, {
                path: "/map/:serverName?",
                component: ee,
                name: "map-serverName___ru"
            }, {
                path: "/posts/:id",
                component: ae,
                name: "posts-id___ru"
            }, {
                path: "/fractions/:serverName?/:fractionId",
                component: te,
                name: "fractions-serverName-fractionId___ru"
            }, {
                path: "/rating/:type?/:serverName?",
                component: ne,
                name: "rating-type-serverName___ru"
            }, {
                path: "/",
                component: z,
                name: "index___ru"
            }],
            fallback: !1
        };

        function re(e, t) {
            var base = t._app && t._app.basePath || ie.base,
                n = new _.a(w(w({}, ie), {}, {
                    base: base
                })),
                o = n.push;
            n.push = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return o.call(this, e, t, n)
            };
            var r = n.resolve.bind(n);
            return n.resolve = (e, t, n) => ("string" == typeof e && (e = Object(k.d)(e)), r(e, t, n)), n
        }
        var se = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: ""
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    }
                },
                render(e, t) {
                    var {
                        parent: n,
                        data: data,
                        props: o
                    } = t, r = n.$createElement;
                    data.nuxtChild = !0;
                    for (var l = n, c = n.$nuxt.nuxt.transitions, d = n.$nuxt.nuxt.defaultTransition, h = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && h++, n = n.$parent;
                    data.nuxtChildDepth = h;
                    var m = c[h] || d,
                        f = {};
                    le.forEach((e => {
                        void 0 !== m[e] && (f[e] = m[e])
                    }));
                    var y = {};
                    ce.forEach((e => {
                        "function" == typeof m[e] && (y[e] = m[e].bind(l))
                    }));
                    var v = y.beforeEnter;
                    if (y.beforeEnter = e => {
                            if (window.$nuxt.$nextTick((() => {
                                    window.$nuxt.$emit("triggerScroll")
                                })), v) return v.call(l, e)
                        }, !1 === m.css) {
                        var _ = y.leave;
                        (!_ || _.length < 2) && (y.leave = (e, t) => {
                            _ && _.call(l, e), l.$nextTick(t)
                        })
                    }
                    var k = r("routerView", data);
                    return o.keepAlive && (k = r("keep-alive", {
                        props: o.keepAliveProps
                    }, [k])), r("transition", {
                        props: f,
                        on: y
                    }, [k])
                }
            },
            le = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            ce = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            ue = {
                name: "NuxtError",
                props: {
                    error: {
                        type: Object,
                        default: null
                    }
                },
                computed: {
                    statusCode() {
                        return this.error && this.error.statusCode || 500
                    },
                    message() {
                        return this.error.message || "Error"
                    }
                },
                head() {
                    return {
                        title: this.message,
                        meta: [{
                            name: "viewport",
                            content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                        }]
                    }
                }
            },
            pe = (n(258), n(13)),
            de = Object(pe.a)(ue, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "__nuxt-error-page"
                }, [n("div", {
                    staticClass: "error"
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "90",
                        height: "90",
                        fill: "#DBE1EC",
                        viewBox: "0 0 48 48"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                    }
                })]), e._v(" "), n("div", {
                    staticClass: "title"
                }, [e._v(e._s(e.message))]), e._v(" "), 404 === e.statusCode ? n("p", {
                    staticClass: "description"
                }, [void 0 === e.$route ? n("a", {
                    staticClass: "error-link",
                    attrs: {
                        href: "/"
                    }
                }) : n("NuxtLink", {
                    staticClass: "error-link",
                    attrs: {
                        to: "/"
                    }
                }, [e._v("Back to the home page")])], 1) : e._e(), e._v(" "), e._m(0)])])
            }), [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "logo"
                }, [n("a", {
                    attrs: {
                        href: "https://nuxtjs.org",
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [e._v("Nuxt")])])
            }], !1, null, null, null).exports,
            he = (n(44), {
                name: "Nuxt",
                components: {
                    NuxtChild: se,
                    NuxtError: de
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured(e) {
                    this.displayingNuxtError && (this.errorFromNuxtError = e, this.$forceUpdate())
                },
                computed: {
                    routerViewKey() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(A.c)(this.$route.matched[0].path)(this.$route.params);
                        var [e] = this.$route.matched;
                        if (!e) return this.$route.path;
                        var t = e.components.default;
                        if (t && t.options) {
                            var {
                                options: n
                            } = t;
                            if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                        }
                        return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate() {
                    c.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render(e) {
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((() => this.errorFromNuxtError = !1)), e("div", {}, [e("h2", "An error occurred while showing the error page"), e("p", "Unfortunately an error occurred and while showing the error page another error occurred"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((() => this.displayingNuxtError = !1)), e(de, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : e("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            }),
            me = {
                name: "NuxtLoading",
                data: () => ({
                    percent: 0,
                    show: !1,
                    canSucceed: !0,
                    reversed: !1,
                    skipTimerCount: 0,
                    rtl: !1,
                    throttle: 200,
                    duration: 5e3,
                    continuous: !1
                }),
                computed: {
                    left() {
                        return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                    }
                },
                beforeDestroy() {
                    this.clear()
                },
                methods: {
                    clear() {
                        clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                    },
                    start() {
                        return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((() => this.startTimer()), this.throttle) : this.startTimer(), this
                    },
                    set(e) {
                        return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(e))), this
                    },
                    get() {
                        return this.percent
                    },
                    increase(e) {
                        return this.percent = Math.min(100, Math.floor(this.percent + e)), this
                    },
                    decrease(e) {
                        return this.percent = Math.max(0, Math.floor(this.percent - e)), this
                    },
                    pause() {
                        return clearInterval(this._timer), this
                    },
                    resume() {
                        return this.startTimer(), this
                    },
                    finish() {
                        return this.percent = this.reversed ? 0 : 100, this.hide(), this
                    },
                    hide() {
                        return this.clear(), setTimeout((() => {
                            this.show = !1, this.$nextTick((() => {
                                this.percent = 0, this.reversed = !1
                            }))
                        }), 500), this
                    },
                    fail(e) {
                        return this.canSucceed = !1, this
                    },
                    startTimer() {
                        this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((() => {
                            this.skipTimerCount > 0 ? this.skipTimerCount-- : (this.reversed ? this.decrease(this._cut) : this.increase(this._cut), this.continuous && (this.percent >= 100 || this.percent <= 0) && (this.skipTimerCount = 1, this.reversed = !this.reversed))
                        }), 100)
                    }
                },
                render(e) {
                    var t = e(!1);
                    return this.show && (t = e("div", {
                        staticClass: "nuxt-progress",
                        class: {
                            "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                        },
                        style: {
                            width: this.percent + "%",
                            left: this.left
                        }
                    })), t
                }
            },
            fe = (n(260), Object(pe.a)(me, undefined, undefined, !1, null, null, null).exports),
            ge = (n(167), {
                components: {}
            }),
            be = Object(pe.a)(ge, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", [t("Nuxt")], 1)
            }), [], !1, null, null, null).exports,
            ye = n(122),
            ve = n(123),
            _e = n(124),
            ke = {
                components: {
                    Navbar: ye.default,
                    FooterComponent: ve.default,
                    Breadcrumbs: _e.default
                },
                computed: {
                    ratesPage() {
                        return "/servers" === this.$route.fullPath
                    },
                    bcrumbsLength() {
                        return this.$store.state.breadcrumbs.items.length
                    }
                }
            },
            Ae = (n(314), Object(pe.a)(ke, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "layout"
                }, [n("notifications", {
                    attrs: {
                        position: "top right"
                    }
                }), e._v(" "), n("div", {
                    staticClass: "layout__nav"
                }, [n("navbar")], 1), e._v(" "), n("div", {
                    staticClass: "layout__content"
                }, [n("nuxt"), e._v(" "), 0 !== e.bcrumbsLength ? n("breadcrumbs") : e._e(), e._v(" "), e.ratesPage ? n("rates") : e._e()], 1), e._v(" "), n("div", {
                    staticClass: "layout__footer"
                }, [n("footer-component")], 1)], 1)
            }), [], !1, null, null, null)),
            Pe = Ae.exports;
        installComponents(Ae, {
            Navbar: n(122).default,
            Breadcrumbs: n(124).default,
            Rates: n(450).default
        });
        var we = {
                _clear: Object(A.s)(be),
                _default: Object(A.s)(Pe)
            },
            xe = {
                render(e, t) {
                    var n = e("NuxtLoading", {
                            ref: "loading"
                        }),
                        o = e(this.layout || "nuxt"),
                        r = e("div", {
                            domProps: {
                                id: "__layout"
                            },
                            key: this.layoutName
                        }, [o]),
                        l = e("transition", {
                            props: {
                                name: "layout",
                                mode: "out-in"
                            },
                            on: {
                                beforeEnter(e) {
                                    window.$nuxt.$nextTick((() => {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            }
                        }, [r]);
                    return e("div", {
                        domProps: {
                            id: "__nuxt"
                        }
                    }, [n, l])
                },
                data: () => ({
                    isOnline: !0,
                    layout: null,
                    layoutName: "",
                    nbFetching: 0
                }),
                beforeCreate() {
                    c.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                },
                created() {
                    this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                },
                mounted() {
                    var e = this;
                    return Object(r.a)((function*() {
                        e.$loading = e.$refs.loading
                    }))()
                },
                watch: {
                    "nuxt.err": "errorChanged"
                },
                computed: {
                    isOffline() {
                        return !this.isOnline
                    },
                    isFetching() {
                        return this.nbFetching > 0
                    },
                    isPreview() {
                        return Boolean(this.$options.previewData)
                    }
                },
                methods: {
                    refreshOnlineStatus() {
                        void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                    },
                    refresh() {
                        var e = this;
                        return Object(r.a)((function*() {
                            var t = Object(A.h)(e.$route);
                            if (t.length) {
                                e.$loading.start();
                                var n = t.map((t => {
                                    var p = [];
                                    if (t.$options.fetch && t.$options.fetch.length && p.push(Object(A.q)(t.$options.fetch, e.context)), t.$fetch) p.push(t.$fetch());
                                    else
                                        for (var component of Object(A.e)(t.$vnode.componentInstance)) p.push(component.$fetch());
                                    return t.$options.asyncData && p.push(Object(A.q)(t.$options.asyncData, e.context).then((e => {
                                        for (var n in e) c.default.set(t.$data, n, e[n])
                                    }))), Promise.all(p)
                                }));
                                try {
                                    yield Promise.all(n)
                                } catch (t) {
                                    e.$loading.fail(t), Object(A.k)(t), e.error(t)
                                }
                                e.$loading.finish()
                            }
                        }))()
                    },
                    errorChanged() {
                        if (this.nuxt.err) {
                            this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                            var e = (de.options || de).layout;
                            "function" == typeof e && (e = e(this.context)), this.setLayout(e)
                        }
                    },
                    setLayout(e) {
                        return e && we["_" + e] || (e = "default"), this.layoutName = e, this.layout = we["_" + e], this.layout
                    },
                    loadLayout: e => (e && we["_" + e] || (e = "default"), Promise.resolve(we["_" + e]))
                },
                components: {
                    NuxtLoading: fe
                }
            };
        n(42);
        c.default.use(d.a);
        var Se = ["state", "getters", "actions", "mutations"],
            ze = {};
        ze.modules = ze.modules || {}, Oe(n(319), "breadcrumbs.js"), Oe(n(320), "currency.js"), Oe(n(321), "faq.js"), Oe(n(322), "post.js"), Oe(n(323), "product.js"), Oe(n(324), "servers.js");
        var Te = ze instanceof Function ? ze : () => new d.a.Store(Object.assign({
            strict: !1
        }, ze));

        function Re(e, t) {
            if (e.state && "function" != typeof e.state) {
                console.warn("'state' should be a method that returns an object in ".concat(t));
                var n = Object.assign({}, e.state);
                e = Object.assign({}, e, {
                    state: () => n
                })
            }
            return e
        }

        function Oe(e, t) {
            e = e.default || e;
            var n = t.replace(/\.(js|mjs)$/, "").split("/"),
                o = n[n.length - 1],
                r = "store/".concat(t);
            if (e = "state" === o ? function(e, t) {
                    if ("function" != typeof e) {
                        console.warn("".concat(t, " should export a method that returns an object"));
                        var n = Object.assign({}, e);
                        return () => n
                    }
                    return Re(e, t)
                }(e, r) : Re(e, r), Se.includes(o)) {
                var l = o;
                Ce(Me(ze, n, {
                    isProperty: !0
                }), e, l)
            } else {
                "index" === o && (n.pop(), o = n[n.length - 1]);
                var c = Me(ze, n);
                for (var d of Se) Ce(c, e[d], d);
                !1 === e.namespaced && delete c.namespaced
            }
        }

        function Me(e, t) {
            var {
                isProperty: n = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!t.length || n && 1 === t.length) return e;
            var o = t.shift();
            return e.modules[o] = e.modules[o] || {}, e.modules[o].namespaced = !0, e.modules[o].modules = e.modules[o].modules || {}, Me(e.modules[o], t, {
                isProperty: n
            })
        }

        function Ce(e, t, n) {
            t && ("state" === n ? e.state = t || e.state : e[n] = Object.assign({}, e[n], t))
        }
        n(34);
        var je = () => n.e(6).then(n.bind(null, 683)).then((e => la(e.default || e))),
            Le = () => Promise.resolve().then(n.bind(null, 124)).then((e => la(e.default || e))),
            Ne = () => n.e(7).then(n.bind(null, 681)).then((e => la(e.default || e))),
            qe = () => n.e(8).then(n.bind(null, 466)).then((e => la(e.default || e))),
            De = () => n.e(9).then(n.bind(null, 487)).then((e => la(e.default || e))),
            Ee = () => n.e(10).then(n.bind(null, 682)).then((e => la(e.default || e))),
            Ie = () => Promise.resolve().then(n.bind(null, 123)).then((e => la(e.default || e))),
            $e = () => n.e(11).then(n.bind(null, 533)).then((e => la(e.default || e))),
            Fe = () => Promise.resolve().then(n.bind(null, 122)).then((e => la(e.default || e))),
            Be = () => n.e(21).then(n.bind(null, 686)).then((e => la(e.default || e))),
            Ge = () => Promise.resolve().then(n.bind(null, 450)).then((e => la(e.default || e))),
            Ue = () => n.e(27).then(n.bind(null, 684)).then((e => la(e.default || e))),
            Ve = () => n.e(0).then(n.bind(null, 486)).then((e => la(e.default || e))),
            Ye = () => n.e(28).then(n.bind(null, 685)).then((e => la(e.default || e))),
            Ke = () => n.e(12).then(n.bind(null, 771)).then((e => la(e.default || e))),
            Qe = () => n.e(13).then(n.bind(null, 769)).then((e => la(e.default || e))),
            He = () => n.e(14).then(n.bind(null, 770)).then((e => la(e.default || e))),
            Xe = () => Promise.all([n.e(0), n.e(15)]).then(n.bind(null, 767)).then((e => la(e.default || e))),
            Ze = () => n.e(16).then(n.bind(null, 773)).then((e => la(e.default || e))),
            Je = () => Promise.all([n.e(2), n.e(17)]).then(n.bind(null, 772)).then((e => la(e.default || e))),
            We = () => n.e(18).then(n.bind(null, 768)).then((e => la(e.default || e))),
            ea = () => n.e(1).then(n.bind(null, 881)).then((e => la(e.default || e))),
            aa = () => n.e(22).then(n.bind(null, 534)).then((e => la(e.default || e))),
            ta = () => n.e(23).then(n.bind(null, 774)).then((e => la(e.default || e))),
            na = () => n.e(24).then(n.bind(null, 775)).then((e => la(e.default || e))),
            oa = () => n.e(25).then(n.bind(null, 777)).then((e => la(e.default || e))),
            ia = () => n.e(26).then(n.bind(null, 776)).then((e => la(e.default || e))),
            ra = () => n.e(19).then(n.bind(null, 454)).then((e => la(e.default || e))),
            sa = () => n.e(20).then(n.bind(null, 488)).then((e => la(e.default || e)));

        function la(e) {
            if (!e || !e.functional) return e;
            var t = Array.isArray(e.props) ? e.props : Object.keys(e.props || {});
            return {
                render(n) {
                    var o = {},
                        r = {};
                    for (var l in this.$attrs) t.includes(l) ? r[l] = this.$attrs[l] : o[l] = this.$attrs[l];
                    return n(e, {
                        on: this.$listeners,
                        attrs: o,
                        props: r,
                        scopedSlots: this.$scopedSlots
                    }, this.$slots.default)
                }
            }
        }
        for (var ca in o) c.default.component(ca, o[ca]), c.default.component("Lazy" + ca, o[ca]);
        var ua = n(201);

        function pa(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function da(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? pa(Object(source), !0).forEach((function(t) {
                    Object(l.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : pa(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        class ha {
            constructor(e) {
                var {
                    hideBadge: t,
                    language: n,
                    siteKey: o,
                    version: r,
                    size: l
                } = e;
                if (!o) throw new Error("ReCaptcha error: No key provided");
                if (!r) throw new Error("ReCaptcha error: No version provided");
                this._elements = {}, this._eventBus = null, this._ready = !1, this.hideBadge = t, this.language = n, this.siteKey = o, this.version = r, this.size = l
            }
            destroy() {
                if (this._ready) {
                    this._ready = !1;
                    var {
                        head: head
                    } = document, {
                        style: style
                    } = this._elements, e = [...document.head.querySelectorAll("script")].filter((script => script.src.includes("recaptcha")));
                    e.length && e.forEach((script => head.removeChild(script))), head.contains(style) && head.removeChild(style);
                    var t = document.querySelector(".grecaptcha-badge");
                    t && t.remove()
                }
            }
            execute(e) {
                var t = this;
                return Object(r.a)((function*() {
                    try {
                        if (yield t.init(), "grecaptcha" in window) return window.grecaptcha.execute(t.siteKey, {
                            action: e
                        })
                    } catch (e) {
                        throw new Error("ReCaptcha error: Failed to execute ".concat(e))
                    }
                }))()
            }
            getResponse(e) {
                return new Promise(((t, n) => {
                    if ("grecaptcha" in window)
                        if ("invisible" == this.size) window.grecaptcha.execute(e), window.recaptchaSuccessCallback = e => {
                            this._eventBus.emit("recaptcha-success", e), t(e)
                        }, window.recaptchaErrorCallback = e => {
                            this._eventBus.emit("recaptcha-error", e), n(e)
                        };
                        else {
                            var o = window.grecaptcha.getResponse(e);
                            if (o) this._eventBus.emit("recaptcha-success", o), t(o);
                            else {
                                var r = "Failed to execute";
                                this._eventBus.emit("recaptcha-error", r), n(r)
                            }
                        }
                }))
            }
            init() {
                if (this._ready) return this._ready;
                this._eventBus = new ua.EventEmitter, this._elements = {
                    script: document.createElement("script"),
                    style: document.createElement("style")
                };
                var {
                    script: script,
                    style: style
                } = this._elements;
                script.setAttribute("async", ""), script.setAttribute("defer", "");
                var e = [];
                return 3 === this.version && e.push("render=" + this.siteKey), this.language && e.push("hl=" + this.language), script.setAttribute("src", "https://www.recaptcha.net/recaptcha/api.js?" + e.join("&")), window.recaptchaSuccessCallback = e => this._eventBus.emit("recaptcha-success", e), window.recaptchaExpiredCallback = () => this._eventBus.emit("recaptcha-expired"), window.recaptchaErrorCallback = () => this._eventBus.emit("recaptcha-error", "Failed to execute"), this._ready = new Promise(((e, t) => {
                    script.addEventListener("load", (() => {
                        3 === this.version && this.hideBadge ? (style.innerHTML = ".grecaptcha-badge { display: none }", document.head.appendChild(style)) : 2 === this.version && this.hideBadge && (style.innerHTML = ".grecaptcha-badge { visibility: hidden; }", document.head.appendChild(style)), window.grecaptcha.ready(e)
                    })), script.addEventListener("error", (() => {
                        document.head.removeChild(script), t("ReCaptcha error: Failed to load script"), this._ready = null
                    })), document.head.appendChild(script)
                })), this._ready
            }
            on(e, t) {
                return this._eventBus.on(e, t)
            }
            reset(e) {
                2 !== this.version && void 0 === e || window.grecaptcha.reset(e)
            }
            render(e, t) {
                var {
                    sitekey: n,
                    theme: o
                } = t;
                return window.grecaptcha.render(e.$el || e, {
                    sitekey: n,
                    theme: o
                })
            }
        }
        var ma = function(e, t) {
                var {
                    recaptcha: o = {}
                } = e.$config || {}, r = da(da({}, {
                    hideBadge: !1,
                    siteKey: "6LdLWdMaAAAAAJI4L3Dp3iV7eB7qerf8p-YyzLoD",
                    version: 2,
                    language: "ru",
                    size: "invisible"
                }), o);
                c.default.component("Recaptcha", (() => n.e(64).then(n.bind(null, 914)))), t("recaptcha", new ha(r))
            },
            fa = {
                months3: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
                months: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
                cFooter: {
                    terms: "Пользовательское соглашение",
                    policy: "Политика конфиденциальности",
                    fop: "ФОП ГОМЕНЮК ВАЛЕНТИН СЕРГІЙОВИЧ 3583909578",
                    boneCountry: "SAMP: Жизнь в деревне",
                    main: "Главная",
                    howToPlay: "Как начать игру",
                    forum: "Форум",
                    shop: "Магазин",
                    profile: "Личный кабинет",
                    servers: "Наши сервера",
                    aboutUs: "О нас",
                    vk: "Сообщество ВКонтакте",
                    youtube: "YouTube канал",
                    telegram: "Канал в Telegram",
                    boosty: "Страница на Boosty"
                },
                pIndex: {
                    h1: "Играй в GTA SA-MP по сети",
                    headTitle: "SAMP: Играй в GTA San Andreas Multiplayer на Arizona RP | 24/7 | На ПК и телефоне",
                    headDescription: "Играй в GTA SAMP с самым большим русскоязычным комьюнити в GTA Online. Начни играть в GTA San Andreas по сети на Arizona RolePlay с телефона или ПК всего в пару кликов прямо сейчас!"
                },
                cServer: {
                    vk1: "Сообщество",
                    vk2: "ВКонтакте",
                    map: "Карта штата",
                    players: "Самые старые игроки",
                    fractions: "Состав организаций"
                },
                cHomepagePresent: {
                    video1MetaName: "Коротко и ясно!",
                    video1Title: "Познакомтесь с нашим проектом за 5 минут",
                    video2MetaName: "Как начать играть ARIZONA SAMP MOBILE или ARIZONA ROLE PLAY!",
                    video2Title: "Посмотрите, как начать игру",
                    country: "Россия"
                },
                cFaqList: {
                    moreQuestions: "Больше вопросов"
                },
                nav: {
                    homepage: "Главная",
                    howPlay: "Как играть",
                    news: "Новости",
                    forum: "Форум",
                    shop: "Магазин",
                    login: "Войти",
                    cabinet: "Кабинет"
                },
                slides: ["Займи верхушку криминального мира", "Начни свою жизнь с полного нуля", "Строй личную жизнь в виртуальном мире", "Сколоти огромное состояние на бизнесе", "Служи и охраняй свою родину от бандитов", "Выбивай долги и бери крышу с бизнесов"],
                slideDescription: "В SAMP ты можешь стать кем захочешь, нет времени на размышления всё в твоих руках!",
                startPlay: "Начать играть",
                heads: ["Играй в GTA SA-MP по сети"],
                monitoring: "Мониторинг",
                playingNow: "Сейчас играет",
                showAllServers: "Показать все сервера",
                launcher: ["Начать играть в SAMP стало еще проще!", "Никогда еще играть в самп не было так просто", "Загрузи лаунчер", "выбери любимую игру", "начни играть", "Скачать SAMP", "Доступно на", "При использовании лаунчера, игроки с 8-го уровня будут получать 1 гражданскую монету каждый PAYDAY", "SAMP Лаунчер для игры в GTA San Andreas Online"],
                mobileLauncher: ["ИГРАЙ В SAMP НА ТЕЛЕФОНЕ", "Мы запустили наш SAMP MOBILE лаунчер для смартфонов на базе Android. Любой желающий может присоединиться к нам прямо сейчас. Для игры необходима версия ОС Android выше 5.0, Arizona Mobile доступна к скачиванию на нашем сайте и в Google Play", "Скачать", "Играй на своем смартфоне"],
                altLauncher: ["АЛЬТЕРНАТИВНЫЙ СПОСОБ", "Вы можете играть на нашем проекте на<br>стандартной версии GTA SA:MP", "Скачать и установить", "Скачать", "Выберите и подключитесь", "К СЕРВЕРУ", "Выбрать", "Компьютер", "ОС Windows", "Доступ в интернет", "Arizona Roleplay - альтернативный способ запуска", "Arizona Roleplay - альтернативный способ запуска - шаг 1", "Arizona Roleplay - альтернативный способ запуска - шаг 2", "Arizona Roleplay - альтернативный способ запуска - шаг 3"],
                playSampText: {
                    h: ["Играй в SAMP на серверах Arizona Role Play!", "Arizona RP — проект, с которого началась история SAMP", "SAMP лаунчер: все преимущества в одной программе"],
                    p: ["SAMP – это бесплатная многопользовательская модификация для популярной игры Grand Theft Auto: San Andreas. Погрузись в открытый игровой мир и почувствуй себя в роли любого персонажа, известной реальной личности или выбери свой особенный путь – здесь доступны любые сценарии событий.", "SA-MP вмещает до 26 тысяч пользователей, играющих по сети. Для максимального погружения в атмосферу игры и ощущения реального взаимодействия и коммуникации с другими игроками есть голосовой чат. Мощные сервера рассчитаны на стабильное многопользовательское подключение – постоянно в онлайне более 17 тысяч игроков.", "У нас ты можешь выбирать сам: играть через SAMP Launcher всего в пару кликов или на стандартной версии GTA SA:MP. Для этого вам потребуется установленная на ПК GTA San Andreas и клиент SAMP 0.3.7. Для подключения запустите мультиплеер, кликнув на иконку на рабочем столе. Укажите ваш логин в поле Name в формате “Login_Name”, введите IP-адрес желаемого сервера и нажмите кнопку Connect (зеленый квадратик с белым треугольником)", "Первый сервер был открыт 23 августа 2014 года. Из-за быстро растущей популярности в дальнейшем было запущено в работу еще 25 серверов. Поэтому уже к 2017 году Arizona Role Play занял лидирующие позиции по посещаемости среди всех известных проектов Самп, каким и остается по сей день.", "Наши Samp Role Play серверы привлекают максимальной реалистичностью и безграничными возможностями, так как каждый игрок вносит свои коррективы в ход событий и является частью одного общего мира. Игра позволяет", "Играй в San Andreas Multiplayer любым удобным способом, включая мобильный телефон – теперь ты будешь на связи с любимой игрой и друзьями всегда и везде. Мы ценим комфорт наших игроков, поэтому провели полную синхронизацию серверов и функционала САМП для ПК и смартфона. SAMP Mobile успешно прошел тестирование и дает возможность оценить все преимущества такого формата игры. Для установки потребуется любой смартфон с операционной системой Android 7.0 и выше.", "Самп лаунчер поможет быстро запустить игру с любого устройства, всего в пару кликов. После установки и запуска просто следуйте инструкциям на экране и через пару минут вы будете готовы играть. Если использовать лаунчер, есть возможность получить дополнительные бонусы. Каждый PAYDAY, игроки, начиная с 8 уровня, получают 1 гражданскую монету и 10к вирт. Это правило работает как в лаунчере для ПК, так и для телефона. Скачать samp для мобильного устройства можно в Google Play. Приложение Arizona Mobile бесплатное и поддерживает автоматические обновления!", "Мобильная версия значительно расширяет твои возможности. Играй из любого места: в перерывах между учебой, во время поездки в транспорте, на улице, на отдыхе, во время длительного ожидания или любой другой ситуации, когда нет желания или возможности сесть за стационарный ПК для игры.", "Чтобы начать играть в GTA San Andreas, потребуется выполнить простые действия"],
                    ul: ["ощутить запах больших денег и почувствовать каково быть на вершине мира", "опробовать крутые авто новейших моделей — провести личный тест-драйв, тюнинговать, разбивать и ремонтировать, ведь в игре можно все", "выбрать путь крутого копа и быть на волосок от смерти, постоянно гоняясь за преступниками, или попасть в преступную группировку и дослужиться до главы мафии", "ты можешь примерить на себя роль злостного преступника и вселять страх во всех окружающих или стать на путь помощи населению: солдатом, пожарным или таксистом — смысл Samp Role Play в том что важен каждый игрок, как в реальном Мире", "множество игровых событий, миссий, квестов, бизнесов и развлечений на любой вкус с полным погружением в специфическую атмосферу реально-виртуального мира"],
                    ul2: ["Нажать на кнопку «Начать играть» на сайте и установить Лаунчер", "Для запуска игры на ПК потребуется кликнуть по ярлыку лаунчера, ввести nickname и начать игру", "На мобильном устройстве запуск игры при помощи лаунчера аналогичный"]
                },
                news: ["Новости", "Больше новостей", "Главное"],
                pAboutUs: {
                    headTitle: "SAMP: Arizona Role Play - О нас, нашем прошлом и будущем",
                    headDescription: "О проекте Arizona RP - самп серверах №1 с самым большим количеством игроков и комьюнити",
                    h1: "Играй в SAMP на серверах Arizona RolePlay!",
                    p1BeforeLink: 'SA-MP - это многопользовательская версия GTA San Andreas, Arizona RP - это лидирующие самп серверы для игры в ГТА Сан Андрес онлайн. В сампе ты можешь быть кем угодно, начиная бездомным перед тобой открывается множество дорог: пройти путь от наркодиллера до главы мафии, от простого солдата или полицейского до главнокомандующего - смысл САМП РП серверов в том что всё зависит только от тебя! Таким образом, ты можешь попробовать реализовать свои любые, даже самые смелые, идеи, ведь команда разработчиков Arizona Games добавляет всё новые захватывающие возможности ролевой игры в GTA San Andreas по сети. Более того, играть на Samp RP серверах Arizona RolePlay интересно не только из-за огромного количества ролей, группировок, банд, миссий, функций и прочих возможностей о которых мы расскажем ниже, а еще и потому что это самый крупный самп проект всех времен с рекордным онлайном до 13 тысяч игроков! А чтобы начать играть не обязательно искать подходящую сборку GTA SA, хороший русификатор и подходящий клиент SAMP 0.3.7, не нужно искать IP серверов самп, достаточно лишь скачать наш SAMP LAUNCHER и следовать инструкциям в нем. Для тех, кто любит по играть "по-старинке", это тоже возможно: нужно скачать ГТА Сан Андреас, скачать самп 0.3.7, ввести',
                    p1Link: "ип-адреса наших серверов",
                    p1AfterLink: ", подключиться и играть! Список наших самп серверов:",
                    p2BeforeLink: "Почему Вам нужно выбрать именно Arizona Role Play? Потому что SAMP - это имитация реальной жизни, где представлено большое количество профессий, заданий, работ, квестов, недвижимости, автомобилей, рабочей техники, авиатранспорта. Однако, многие проекты не могут похвастаться таким обилием, как Arizona RP. С 2017 года серверы Аризона РП являются самыми популярными среди всех самп-проектов, о чем свидетельствует",
                    p2Link: "таблица пикового онлайна проектов SA:MP",
                    p2AfterLink: ". Возглавив лидерство, мы взяли на себя обязательство быть лучшими и неустанно следуем этому уровню, поднимая его при любой возможности. Таким образом, в 2020 году мы побили все рекорды GTA San Andreas Multiplayer, открыв 12 и 13й серверы, также вмещающие до 1000 игроков каждый, достигнув отметки в 13 тысяч одновременного онлайна! Ни один из проектов-конкурентов, ни Diamond RP, ни Advance RP, ни Evolve RP, ни прошлый самп-рекордсмен Samp-Rp не смогут предложить вам такое комьюнити, как у Arizona Games. Но мы можем похвастаться не только цифрами и рекордами, ведь в первую очередь с нами интересно играть потому что у нас самое большое количество всевозможных доработок, профессий, квестов, заданий, сюжетов, техники, развлекательных объектов и прочих дополнений. Наши серверы поддерживают голосовой чат, что делает общение между игроками еще интереснее, открывая всё больше возможностей для взаимодействия. Главным и самым ожидаемым новшеством является запуск Самп Мобайл, а именно мобильного лаунчера с поддержкой",
                    h2: "Контакты",
                    p3LinkForum: "Форум",
                    p3LinkVK: "Сообщество ВКонтакте",
                    p3LinkYouTube: "YouTube канал",
                    p3LinkTelegram: "Канал в Telegram",
                    p3LinkBoosty: "Страница на Boosty"
                },
                p404: {
                    h1: "Ошибка 404",
                    content: "Страница не найдена"
                },
                pChangePassword: {
                    title: "Смена пароля",
                    headTitle: "Изменение пароля - Личный кабинет"
                },
                cChangePasswordForm: {
                    currentPassword: "Текущий пароль",
                    newPassword: "Новый пароль",
                    newPasswordOnceMore: "Новый пароль еще раз",
                    btnChange: "Изменить",
                    alertSuccess: "Пароль успешно изменен",
                    enterPassword: "Введите пароль",
                    passwordMismatch: "Пароли не совпадают"
                },
                pFaq: {
                    headTitle: "SAMP: FAQ - ЧАстые ВОпросы - Arizona Role Play",
                    headDescription: "SAMP - мы поможем, когда сможем!"
                },
                pFindGamer: {
                    headTitle: "Поиск игрока"
                },
                cFindGamerForm: {
                    title: "Поиск игрока",
                    username: "Ник",
                    gameUsername: "Игровой ник",
                    server: "Сервер",
                    find: "Найти",
                    status: "Статус",
                    offline: "Не в сети",
                    online: "Сейчас в игре",
                    level: "Уровень",
                    phone: "Номер телефона",
                    levelVip: "Уровень VIP",
                    cash: "Наличные",
                    bank: "Накопления",
                    deposit: "Состояние депозита",
                    jobName: "Работа",
                    orgName: "Организация",
                    gameServer: "Игровой сервер",
                    chooseServer: "Выберите сервер",
                    enterUsername: "Введите ник игрока"
                },
                pLogin: {
                    h1: "Авторизация",
                    btnEnter: "Войти",
                    vk: "Войти через ВКонтакте",
                    recoveryPassword: "Я забыл пароль",
                    headTitle: "Авторизация - Личный кабинет"
                },
                cAuthForm: {
                    username: "Никнейм",
                    password: "Пароль",
                    server: "Сервер",
                    authEmail: "На аккаунте подключена двухфакторная авторизация. Проверочный код отправлен Вам на E-Mail. Не забудьте проверить папку «Спам»",
                    authTotp: "На аккаунте подключена двухфакторная авторизация. Введите проверочный код из приложения.",
                    twoFactorCode: "Проверочный код",
                    gameServer: "Игровой сервер",
                    errServer: "Выберите сервер",
                    errUsername: "Введите игровой ник",
                    errPassword: "Введите пароль"
                },
                pRecoveryPassword: {
                    headTitle: "Восстановление пароля - Личный кабинет"
                },
                cRestorePasswordForm: {
                    title: "Не можете войти?",
                    subtitle: "Введите ваш E-Mail. Мы вышлем инструкции по восстановлению пароля.",
                    server: "Сервер",
                    restore: "Восстановить",
                    instruction: "На почту отправлена инструкция с дальнейшими действиями.",
                    gameServer: "Игровой сервер",
                    errServer: "Выберите сервер",
                    errEmail: "Введите e-mail"
                },
                pResetBankCode: {
                    text: "Пин-код вашей банковской карты был установлен на «123456», не забудьте изменить его в игре.",
                    headTitle: "Сброс пароля банковской карты - Личный кабинет"
                },
                pRestorePassword: {
                    text1: "Мы изменили пароль для Вашего аккаунта. Ваш новый пароль:",
                    text2: "Сделайте скриншот, либо запишите пароль. Вы можете сменить его в личном кабинете, либо в игре.",
                    headTitle: "Новый пароль - Личный кабинет"
                },
                pServers: {
                    h1: "Серверы SAMP Arizona Role Play",
                    headTitle: "SAMP: Серверы GTA SA-MP — Arizona Role Play",
                    headDescription: "Серверы SA-MP для игры в GTA San Andreas по сети от Arizona RP. Выбирай сервер и начинай играть на крупнейшем проекте самп в рунете!",
                    breadcrumbs: "Серверы ⏩ № ➊"
                },
                pShop: {
                    h1: "Донат Arizona Role Play",
                    title: "Специальные предложения",
                    cash: "наличными",
                    buyFor: "Купить за",
                    economy: "Выгода",
                    number: "№",
                    pack1Alt: "Специальный пакет 1 Arizona RP",
                    pack1Title: "Набор<br><span>«Начинающий ловец»</span>",
                    pack2Alt: "Специальный пакет 2 Arizona RP",
                    pack2Title: "Набор<br><span>«Начинающий магнат»</span>",
                    pack2Bonus: "Владение <span>4 домами и бизнесами</span>",
                    packStartName: "Пакет «Стартовый капитал»",
                    packVipName: "Вечный<br>Premium VIP",
                    packPhoneName: "iPhone X и<br>Samsung Galaxy 10",
                    packLicenseName: "Все лицензии<br>на 5 лет",
                    packNimbName: "Нимб, киоск<br>и лейка",
                    packAddVipName: "ADD VIP<br>30 дней",
                    packAmuletName: "20 точильных амулетов",
                    packStoneName: "100 точильных камней",
                    special1Name: "Набор «Начинающий ловец»",
                    premiumVip: "Премиум VIP",
                    premiumMaverick: "Премиум Maverick",
                    special2Name: "Набор «Начинающий магнат»",
                    special2Div: "Владение 4 домами и бизнесами",
                    special3Name: "Пакет «Стартовый капитал»",
                    special4Name: "Пакет «Богатенький»",
                    special5Name: "Пакет «Большой запас»",
                    special6Name: "Вечный PREMIUM VIP",
                    special7Name: "iPhone X и Samsung Galaxy 10",
                    special8Name: "Все лицензии на 5 лет",
                    special9Name: "Нимб, киоск и лейка",
                    special10Name: "ADD VIP 30 ДНЕЙ",
                    special11Name: "20 точильных амулетов",
                    special12Name: "100 точильных камней",
                    orderTitle: "Проверка данных",
                    orderAccount: "Номер счета",
                    orderUsername: "Ник",
                    orderServer: "Сервер",
                    orderTotal: "Сумма",
                    orderCards: "Карты",
                    orderLogoQiwi: "Логотип QIWI.",
                    orderLimit: "Доступно от",
                    orderUaCards: "Украинские карты",
                    orderAllWays: "Все способы",
                    orderTermsText: "Продолжая покупку, вы соглашаетесь с",
                    orderTermsLink: "пользовательским соглашением",
                    authBeforeBuy: "Перед покупкой необходимо авторизоваться!",
                    headTitle: "Аризона Донат: Купить AZ Coin | Официальный сайт Arizona RP",
                    headDescription: "Донать в свой аккаунт Arizona RP только на официальном сайте - arizona-rp.com Купить AZ Coin просто: введи никнейм и сумму, выбери сервер и нажми оплатить!"
                },
                cShopForm: {
                    username: "Никнейм",
                    server: "Сервер",
                    total: "Сумма",
                    calculator: "Калькулятор",
                    pay: "Заплатите",
                    get: "Получите",
                    pay2: "Оплатить",
                    gameServer: "Игровой сервер",
                    errServer: "Выберите сервер",
                    errUsername: "Введите игровой ник",
                    errTotal: "Введите сумму",
                    errLimit: "Максимальная сумма 1 млн"
                },
                pRating_type_serverName: {
                    number: "№",
                    player: "Игрок",
                    level: "Уровень",
                    status: "Статус",
                    cost: "Стоимость",
                    owner: "Владелец",
                    name: "Название",
                    online: "Сейчас играет",
                    offline: "Не в сети",
                    headTitle: "Рейтинги Arizona Roleplay"
                },
                pProfile: {
                    desc: "Уровень",
                    cashBalance: "Баланс наличных.",
                    cash: "Наличные",
                    bankBalance: "Баланса в банке.",
                    bankBalance2: "Баланс банк. счета",
                    coin: "Аризона Коины.",
                    deposit: "Депозит.",
                    depositState: "Состояние депозита",
                    euro: "Евро.",
                    euro2: "Евро",
                    bitcoin: "Биткоин.",
                    bitcoin2: "Биткоин",
                    playOnServer: "Играет на сервере",
                    menuVK: "Привязать страницу ВК",
                    menuBankCode: "Сбросить код банк. карты",
                    menuAccount: "Пополнить счет",
                    menuPassword: "Изменить пароль",
                    menuPlayer: "Найти игрока",
                    menuLogout: "Выйти",
                    menuControl: "Управление",
                    accountInfo: "Информация об аккаунте",
                    accountOnline: "Сейчас в игре",
                    accountOffline: "Отключен",
                    authEmail: "Двухфакторная авторизация (почта)",
                    authTotp: "Двухфакторная авторизация (TOTP)",
                    accountOn: "Включена",
                    accountOff: "Отключена",
                    switchOff: "отключить",
                    switchOn: "включить",
                    totpP1: "Установите на смартфон Google Authenticator или другое приложение для двухфакторной аутентификации",
                    totpP2: "Для регистрации доступа в приложении отсканируйте следующий QR-код",
                    totpP3: "или введите ключ доступа в ручную",
                    totpP4: "Для завершения включения укажите одноразовый код из приложения в форме ниже",
                    totpP5: "Для завершения отключения укажите одноразовый код из приложения в форме ниже",
                    checkCode: "Проверочный код",
                    send: "Отправить",
                    phone: "Номер телефона",
                    account: "Личный счет",
                    job: "Работа",
                    company: "Организация",
                    rank: "Ранг",
                    inventory: "Мой инвентарь",
                    force: "Сила",
                    musculature: "Мускулатура",
                    endurance: "Выносливость",
                    headTitle: "Личный кабинет - Arizona Roleplay",
                    notifyAccountChecking: "Проверяем Ваш аккаунт..",
                    notifyEmail: "На вашу почту отправлено письмо с дальнешими действиями",
                    notifyRequestOn: "Запрос на включение..",
                    notifyAccessDataReady: "Данные доступа готовы",
                    notifyWrongCode: "Некорректный код",
                    notifySendingCode: "Отправка кода..",
                    notifyCodeAccepted: "Код принят."
                },
                cProfile_FightStyle: {
                    studied: "Изучен",
                    nonstudied: "Не изучен"
                },
                cProfile_Skills: {
                    otherSkills: "Другие навыки",
                    carSkill: "Навык вождения",
                    dSkill: "Навык дальнобойщика",
                    taxiSkill: "Навык<br>таксиста",
                    productJobSkill: "Развозчик продуктов",
                    points: "очков"
                },
                cProfile_WeaponSkills: {
                    title: "Навыки владения оружием"
                },
                cProfile_Upgrades: {
                    title: "Улучшения",
                    feFinderLabel: "Шумахер",
                    feFinderDesc: "С этим умением ваша машина не будет глохнуть при столкновении",
                    unlimCarSkillLabel: "Вечный Car Skill",
                    unlimCarSkillDesc: "Ваш навык вождения не будет уменьшаться",
                    plancetLabel: "Планшет",
                    plancetDesc: "Вы сможете отправлять объявления на редакцию из любой точки карты",
                    moreLabel: "Бизнесмен",
                    moreDesc: "Улучшение позволяет вам владеть пятью бизнесами",
                    packLabel: "Халявщик",
                    packDesc: "Ваш персонаж становится везунчиком и платит в 2 раза меньше налогов",
                    houseLabel: "Больше недвижимости",
                    houseDesc: "Вы можете владеть",
                    houseDesc2: "Вы сможете владеть домами",
                    antiTaxLabel: "Нет налогам",
                    antiTaxDesc: "Вам не придется платить комиссию в банках и банкоматах",
                    haveTwoFarmLabel: "2 фермы",
                    haveTwoFarmDesc: "Возможность иметь 2 фермы"
                },
                cProfile_FightStyles: {
                    title: "Стили боя",
                    Boxing: "Боксерский стиль",
                    Kungfu: "Стиль кунг-фу",
                    Kneehead: "Кикбоксерский стиль",
                    GrabKick: "Удар ногой",
                    Elbow: "Захваты и удары"
                },
                pProfile_inventory: {
                    h1: "Мой инвентарь",
                    slot: "Слот",
                    headTitle: "Мой инвентарь - Arizona Roleplay"
                },
                pPosts: {
                    news: "Новости",
                    main: "Главное",
                    headTitle: "SAMP: Новости Arizona Role Play - обновления, акции, важные сообщения - Страница 1",
                    headDescription: "Новости проекта Arizona RP - здесь вы можете узнать самую свежую информацию о SA-MP из первоисточника!"
                },
                pPosts_id: {
                    address: "Россия",
                    comments: "Комментарии",
                    nocomments: "Комментариев нет..",
                    leavecomments: "Оставлять комментарий может только авторизованный игрок",
                    news: "Новости",
                    commentdeleted: "Комментарий удален"
                },
                cPostCommentForm: {
                    enterComment: "Введите комментарий",
                    add: "Добавляем..",
                    send: "Отправить",
                    enterMessage: "Введите сообщение"
                },
                cShowVideoMixin: {
                    close: "Закрыть"
                },
                pMap__serverName: {
                    stateMap: "Карта штата",
                    useScroll: "Используйте горизонтальный скролл, чтобы просматривать карту полностью."
                },
                pFractions_serverName: {
                    orgs: "Организации",
                    useScroll: "Используйте горизонтальный скролл, чтобы просматривать карту полностью."
                },
                pFractions_serverName_fractionId: {
                    number: "№",
                    player: "Игрок",
                    rank: "Ранг",
                    status: "Статус",
                    leader: "лидер",
                    orgs: "Организации",
                    online: "Сейчас играет",
                    offline: "Не в сети"
                },
                pDocument_terms: {
                    title: "Пользовательское соглашение",
                    headTitle: "Пользовательское соглашение - Arizona Roleplay"
                },
                pDocument_policy: {
                    title: "Политика конфиденциальности",
                    headTitle: "Политика конфиденциальности - Arizona Roleplay"
                },
                pControl_donateRatio: {
                    h1: "Коэффициенты пополнения",
                    forAll: "Для всех",
                    save: "Сохранить",
                    headTitle: "Коэфициенты пополнений - Arizona Roleplay",
                    loadFail: "Ошибка при загрузке",
                    savedForAll: "Сохранено (для всех)",
                    notSavedForAll: "Не сохранено (для всех)",
                    saved: "Сохранено",
                    notsaved: "Не сохранено"
                },
                pVkontakte: {
                    headTitle: "Вход через ВКонтакте - Arizona Roleplay",
                    loading: "Загрузка..",
                    notifyRepeatAuth: "Произошла ошибка. Повторите попытку авторизации"
                },
                pVkontakteAdd: {
                    headTitle: "Вход через ВКонтакте - Arizona Roleplay",
                    loading: "Загрузка..",
                    notifyRepeat: "Произошла ошибка. Повторите попытку",
                    notifyAccountLinked: "Аккаунт привязан к Вашей странице."
                },
                cRates: {
                    servers: "Сервера SAMP"
                }
            },
            ga = {
                months3: ["січ", "лют", "бер", "кві", "тра", "чер", "лип", "сер", "вер", "жов", "лис", "гру"],
                cFooter: {
                    terms: "Угода користувача",
                    policy: "Політика конфіденційності",
                    fop: "ФОП ГОМЕНЮК ВАЛЕНТИН СЕРГІЙОВИЧ 3583909578",
                    boneCountry: "SAMP: Життя на селі",
                    main: "Головна",
                    howToPlay: "Як почати гру",
                    forum: "Форум",
                    shop: "Магазин",
                    profile: "Особистий кабінет",
                    servers: "Наші сервера",
                    aboutUs: "Про нас",
                    vk: "Спільнота ВКонтакте",
                    youtube: "YouTube канал",
                    telegram: "Канал в Telegram",
                    boosty: "Сторінка на Boosty"
                },
                pIndex: {
                    h1: "Грай в GTA SAMP по мережі",
                    headTitle: "SAMP: Грай в GTA San Andreas Multiplayer на Arizona RP | 24/7 | на ПК і телефоні",
                    headDescription: "Грай в GTA SAMP з найбільшим російськомовним ком'юніті в GTA Online. Почни грати в GTA San Andreas по мережі на Arizona Role Play з телефону або ПК всього в пару кліків прямо зараз!"
                },
                cServer: {
                    vk1: "Товариство",
                    vk2: "ВКонтакте",
                    map: "Карта штату",
                    players: "Найстаріші гравці",
                    fractions: "Склад організацій"
                },
                cHomepagePresent: {
                    video1MetaName: "Коротко і ясно!",
                    video1Title: "Познайомтеся з нашим проектом за 5 хвилин",
                    video2MetaName: "Як почати грати в ARIZONA SAMP MOBILE або ARIZONA ROLE PLAY!",
                    video2Title: "Подивіться, як почати гру",
                    country: "Росія"
                },
                cFaqList: {
                    moreQuestions: "Більше питань"
                },
                nav: {
                    homepage: "Головна",
                    howPlay: "Як грати",
                    news: "Новини",
                    forum: "Форум",
                    shop: "Магазин",
                    login: "Увійти",
                    cabinet: "Кабінет"
                },
                slides: ["Займи верхівку кримінального світу", "Почніть своє життя з повного нуля", "Будуй особисте життя у віртуальному світі", "Сколотив величезні статки на бізнесі", "Служи і охороняй свою Батьківщину від бандитів", "Вибивай борги і бери дах з бізнесів"],
                slideDescription: "У SAMP ти можеш стати ким захочеш, немає часу на роздуми все в твоїх руках!",
                startPlay: "Почати грати",
                heads: ["Грай в GTA SAMP по мережі"],
                monitoring: "Моніторинг",
                playingNow: "Зараз грає",
                showAllServers: "Показати всі сервера",
                launcher: ["Почати грати в SAMP стало ще простіше!", "Ніколи ще грати в самп не було так просто", "Завантаж лаунчер", "вибери улюблену гру", "почніть грати", "Завантажити SAMP", "Доступно на", "При використанні лаунчер, гравці з 8-го рівня будуть отримувати 1 громадянську монету кожен PAYDAY", "SAMP Лаунчер для гри в GTA San Andreas Online"],
                mobileLauncher: ["ГРАЙ В SAMP НА ТЕЛЕФОНІ", "Ми запустили наш SAMP MOBILE лаунчер для смартфонів на базі Android. Будь-який бажаючий може приєднатися до нас прямо зараз. Для гри необхідна версія ОС Android вище 7.0, Arizona Mobile доступна до скачування на нашому сайті і в Google Play", "Завантажити", "Грай на своєму смартфоні"],
                altLauncher: ["АЛЬТЕРНАТИВНИЙ СПОСІБ", "Ви можете грати на нашому проекті на<br>стандартної версії GTA SA: MP", "Завантажити та встановити", "Завантажити", "Виберіть і підключіться", "ДО СЕРВЕРА", "Вибрати", "Комп'ютер", "ОС Windows", "Доступ до Інтернету", "Arizona Roleplay - альтернативний спосіб запуску", "Arizona Roleplay - альтернативний спосіб запуску - крок 1", "Arizona Roleplay - альтернативний спосіб запуску - крок 2", "Arizona Roleplay - альтернативний спосіб запуску - крок 3"],
                playSampText: {
                    h: ["Грай в SAMP на серверах Arizona Role Play!", "Arizona RP — проект, з якого почалася історія SAMP", "SAMP лаунчер: всі переваги в одній програмі"],
                    p: ["SAMP – це безкоштовна багатокористувацька модифікація для популярної гри Grand Theft Auto: San Andreas. Поринь у відкритий ігровий світ і відчуй себе в ролі будь – якого персонажа, відомої реальної особистості або вибери свій особливий шлях-тут доступні будь-які сценарії подій.", "SA-MP вміщує до 19 тисяч користувачів, що грають по мережі. Для максимального занурення в атмосферу гри і відчуття реальної взаємодії і комунікації з іншими гравцями є голосовий чат. Потужні сервера розраховані на стабільне багатокористувацьке підключення – постійно в онлайні більше 17 тисяч гравців.", 'У нас ти можеш вибирати сам: грати через SAMP Launcher всього в пару кліків або на стандартній версії GTA SA:MP. Для цього вам буде потрібна встановлена на ПК GTA San Andreas і клієнт SAMP 0.3.7. Для підключення запустіть мультиплеер, клікнувши на іконку на робочому столі. Вкажіть Ваш логін в поле Name в форматі "Login_Name", введіть IP-адресу бажаного сервера і натисніть кнопку Connect (зелений квадратик з білим трикутником)', "Перший сервер був відкритий 23 серпня 2014 року. Через швидко зростаючу популярність в подальшому було запущено в роботу ще 18 серверів. Тому вже до 2017 року Arizona Role Play зайняв лідируючі позиції по відвідуваності серед всіх відомих проектів Самп, яким і залишається донині.", "Наші Samp Role Play сервери приваблюють максимальною реалістичністю і безмежними можливостями, так як кожен гравець вносить свої корективи в хід подій і є частиною одного загального світу. Гра дозволяє", "Грай в San Andreas Multiplayer будь–яким зручним способом, включаючи мобільний телефон – тепер ти будеш на зв'язку з улюбленою грою і друзями завжди і скрізь. Ми цінуємо комфорт наших гравців, тому провели повну синхронізацію серверів і функціоналу САМП для ПК і смартфона. SAMP Mobile успішно пройшов тестування і дає можливість оцінити всі переваги такого формату гри. Для установки буде потрібно будь-який смартфон з операційною системою Android 7.0 і вище.", "Самп лаунчер допоможе швидко запустити гру з будь-якого пристрою, всього в пару кліків. Після установки і запуску просто дотримуйтесь інструкцій на екрані і через пару хвилин ви будете готові грати. Якщо використовувати лаунчер, є можливість отримати додаткові бонуси. Кожен PAYDAY, гравці, починаючи з 8 рівня, одержують 1 громадянську монету. Це правило працює як у лаунчері для ПК, так і телефону. Завантажити samp для мобільного пристрою можна у Google Play. Додаток Arizona Mobile безкоштовний та підтримує автоматичні оновлення!", "Мобільна версія значно розширює твої можливості. Грай з будь-якого місця: у перервах між навчанням, під час поїздки у транспорті, на вулиці, на відпочинку, під час тривалого очікування чи будь-якої іншої ситуації, коли немає бажання чи можливості сісти за стаціонарний ПК для гри.", "Щоб почати грати в GTA San Andreas, потрібно виконати прості дії"],
                    ul: ["відчути запах великих грошей і відчути, як бути на вершині світу", "випробувати круті авто нових моделей - провести свій тест-драйв, тюнінгувати, розбивати і ремонтувати, адже в грі можна все", "вибрати шлях крутого копа і бути на волосок від смерті, постійно ганяючись за злочинцями, або потрапити до злочинного угруповання і дослужитися до глави мафії", "ти можеш приміряти на себе роль злісного злочинця і вселяти страх у всіх оточуючих або стати на шлях допомоги населенню: солдатом, пожежником або таксистом — сенс Samp Role Play у тому, що важливий кожен гравець, як у реальному Світі", "безліч ігрових подій, місій, квестів, бізнесів та розваг на будь-який смак із повним зануренням у специфічну атмосферу реально-віртуального світу"],
                    ul2: ["Натиснути на кнопку «Почати грати» на сайті та встановити Лаунчер", "Для запуску гри на ПК потрібно клікнути по ярлику лаунчера, ввести nickname і почати гру", "На мобільному пристрої запуск гри за допомогою лаунчера аналогічний"]
                },
                news: ["Новини", "Більше новин", "Головне"],
                pAboutUs: {
                    headTitle: "SAMP: Arizona Role Play - Про нас, наше минуле і майбутнє",
                    headDescription: "Про проект Arizona RP - самп сервери №1 з найбільшою кількістю гравців та ком'юніті",
                    h1: "Грай у SAMP на серверах Arizona RolePlay!",
                    p1BeforeLink: 'SA-MP - це розрахована на багато користувачів версія GTA San Andreas, Arizona RP - це лідируючі самп сервери для гри в ГТА Сан Андрес онлайн. У сампі ти можеш бути ким завгодно, починаючи бездомним перед тобою відкривається безліч доріг: пройти шлях від наркодилера до глави мафії, від простого солдата або поліцейського до головнокомандувача - сенс САМП РП серверів у тому, що все залежить тільки від тебе! Таким чином, ти можеш спробувати реалізувати свої будь-які, навіть найсміливіші, ідеї, адже команда розробників Arizona Games додає нові захоплюючі можливості рольової гри в GTA San Andreas по мережі. Більше того, грати на Samp RP серверах Arizona RolePlay цікаво не лише через величезну кількість ролей, угруповань, банд, місій, функцій та інших можливостей про які ми розповімо нижче, а ще й тому що це найбільший самп проект усіх часів із рекордним онлайн до 13 тисяч гравців! А щоб почати грати не обов\'язково шукати відповідну збірку GTA SA, хороший русифікатор і відповідний клієнт SAMP 0.3.7, не потрібно шукати IP серверів самп, достатньо лише завантажити наш SAMP LAUNCHER і дотримуватися інструкцій у ньому. Для тих, хто любить грати "по-старому", це теж можливо: потрібно скачати ГТА Сан Андреас, скачати самп 0.3.7, ввести',
                    p1Link: "іп-адреси наших серверів",
                    p1AfterLink: ", підключитися та грати! Список наших самп серверів:",
                    p2BeforeLink: "Чому Вам потрібно вибрати саме Arizona Role Play? Тому що SAMP – це імітація реального життя, де представлено велику кількість професій, завдань, робіт, квестів, нерухомості, автомобілів, робочої техніки, авіатранспорту. Однак, багато проектів не можуть похвалитися такою кількістю, як Arizona RP. З 2017 року сервери Арізона РП є найпопулярнішими серед усіх самп-проектів, про що свідчить",
                    p2Link: "таблиця пікового онлайн проектів SA:MP",
                    p2AfterLink: ". Очоливши лідерство, ми взяли на себе зобов'язання бути кращими і невпинно дотримуємося цього рівня, піднімаючи його за будь-якої можливості. Таким чином, в 2020 році ми побили всі рекорди GTA San Andreas Multiplayer, відкривши 12 і 13 сервери, що також вміщають до 1000 гравців кожен, досягнувши позначки в 13 тисяч одночасного онлайн! Жоден з проектів-конкурентів, ні Diamond RP, ні Advance RP, ні Evolve RP, ні минулий самп-рекордсмен Samp-Rp не зможуть запропонувати вам таке ком'юніті, як у Arizona Games. Але ми можемо похвалитися не лише цифрами та рекордами, адже в першу чергу з нами цікаво грати, бо у нас найбільша кількість усіляких доробок, професій, квестів, завдань, сюжетів, техніки, розважальних об'єктів та інших доповнень. Наші сервери підтримують голосовий чат, що робить спілкування між гравцями ще цікавішими, відкриваючи все більше можливостей для взаємодії. Головним та найочікуванішим нововведенням є запуск Самп Мобайл, а саме мобільного лаунчера з підтримкою",
                    h2: "Контакти",
                    p3LinkForum: "Форум",
                    p3LinkVK: "Спільнота ВКонтакте",
                    p3LinkYouTube: "YouTube канал",
                    p3LinkTelegram: "Канал у Telegram",
                    p3LinkBoosty: "Сторінка на Boosty"
                },
                p404: {
                    h1: "Помилка 404",
                    content: "Сторінка не знайдена"
                },
                pChangePassword: {
                    title: "Зміна пароля",
                    headTitle: "Зміна пароля - Особистий кабінет"
                },
                cChangePasswordForm: {
                    currentPassword: "Поточний пароль",
                    newPassword: "Новий пароль",
                    newPasswordOnceMore: "Новий пароль ще раз",
                    btnChange: "Змінити",
                    alertSuccess: "Пароль успішно змінено",
                    enterPassword: "Введіть пароль",
                    passwordMismatch: "Паролі не співпадають"
                },
                pFaq: {
                    headTitle: "SAMP: FAQ - Часті питання - Arizona Role Play",
                    headDescription: "SAMP - ми допоможемо, коли зможемо!"
                },
                pFindGamer: {
                    headTitle: "Пошук гравця"
                },
                cFindGamerForm: {
                    title: "Пошук гравця",
                    username: "Нік",
                    gameUsername: "Ігровий нік",
                    server: "Сервер",
                    find: "Знайти",
                    status: "Статус",
                    offline: "Не в мережі",
                    online: "Зараз у грі",
                    level: "Рівень",
                    phone: "Номер телефону",
                    levelVip: "Рівень VIP",
                    cash: "Готівка",
                    bank: "Накопичення",
                    deposit: "Стан депозиту",
                    jobName: "Робота",
                    orgName: "Організація",
                    gameServer: "Ігровий сервер",
                    chooseServer: "Виберіть сервер",
                    enterUsername: "Введіть нік гравця"
                },
                pLogin: {
                    h1: "Авторизація",
                    btnEnter: "Увійти",
                    vk: "Увійти через ВКонтакті",
                    recoveryPassword: "Я забув пароль",
                    headTitle: "Авторизація - Особистий кабінет"
                },
                cAuthForm: {
                    username: "Нікнейм",
                    password: "Пароль",
                    server: "Сервер",
                    authEmail: "На обліковому записі підключено двофакторну авторизацію. Перевірочний код надіслано Вам на E-Mail. Не забудьте перевірити папку «Спам»",
                    authTotp: "На обліковому записі підключено двофакторну авторизацію. Введіть код перевірки з програми.",
                    twoFactorCode: "Код перевірки",
                    gameServer: "Ігровий сервер",
                    errServer: "Виберіть сервер",
                    errUsername: "Введіть ігровий нік",
                    errPassword: "Введіть пароль"
                },
                pRecoveryPassword: {
                    headTitle: "Відновлення пароля - Особистий кабінет"
                },
                cRestorePasswordForm: {
                    title: "Чи не можете увійти?",
                    subtitle: "Введіть свій e-mail. Ми надішлемо інструкції з відновлення пароля.",
                    server: "Сервер",
                    restore: "Відновити",
                    instruction: "На пошту надіслано інструкцію з подальшими діями.",
                    gameServer: "Ігровий сервер",
                    errServer: "Виберіть сервер",
                    errEmail: "Введіть e-mail"
                },
                pResetBankCode: {
                    text: 'Пін-код вашої банківської картки був встановлений на "123456", не забудьте змінити його в грі.',
                    headTitle: "Скидання пароля банківської картки - Особистий кабінет"
                },
                pRestorePassword: {
                    text1: "Ми змінили пароль для Вашого облікового запису. Ваш новий пароль:",
                    text2: "Зробіть скріншот або запишіть пароль. Ви можете змінити його в особистому кабінеті або в грі.",
                    headTitle: "Новий пароль - Особистий кабінет"
                },
                pServers: {
                    h1: "Сервери SAMP Arizona Role Play",
                    headTitle: "SAMP: Сервери GTA SA-MP — Arizona Role Play",
                    headDescription: "Сервери SA-MP для гри в GTA San Andreas по мережі від Arizona RP. Вибирай сервер і починай грати на найбільшому проекті самп у рунеті!",
                    breadcrumbs: "Сервери ⏩ № ➊"
                },
                pShop: {
                    h1: "Донат Arizona Role Play",
                    title: "Спеціальні пропозиції",
                    cash: "готівкою",
                    buyFor: "Купити за",
                    economy: "Вигода",
                    number: "№",
                    pack1Alt: "Спеціальний пакет 1 Arizona RP",
                    pack1Title: "Набір<br><span>«Ловець-початківець»</span>",
                    pack2Alt: "Спеціальний пакет 2 Arizona RP",
                    pack2Title: "Набір<br><span>«Магнат-початківець»</span>",
                    pack2Bonus: "Володіння <span>4 будинками та бізнесами</span>",
                    packStartName: "Пакет «Стартовий капітал»",
                    packVipName: "Вічний<br>Premium VIP",
                    packPhoneName: "iPhone X і<br>Samsung Galaxy 10",
                    packLicenseName: "Усі ліцензії<br>на 5 років",
                    packNimbName: "Німб, кіоск<br>та лійка",
                    packAddVipName: "ADD VIP<br>30 днів",
                    packAmuletName: "20 точильних амулетів",
                    packStoneName: "100 точильних каменів",
                    special1Name: "Набір «Ловець-початківець»",
                    premiumVip: "Преміум VIP",
                    premiumMaverick: "Преміум Maverick",
                    special2Name: "Набір «Магнат-початківець»",
                    special2Div: "Володіння 4 будинками та бізнесами",
                    special3Name: "Пакет «Стартовий капітал»",
                    special4Name: "Пакет «Багатенький»",
                    special5Name: "Пакет «Великий запас»",
                    special6Name: "Вічний PREMIUM VIP",
                    special7Name: "iPhone X і Samsung Galaxy 10",
                    special8Name: "Усі ліцензії на 5 років",
                    special9Name: "Німб, кіоск та лійка",
                    special10Name: "ADD VIP 30 ДНІВ",
                    special11Name: "20 точильних амулетів",
                    special12Name: "100 точильних каменів",
                    orderTitle: "Перевірка даних",
                    orderAccount: "Номер рахунку",
                    orderUsername: "Нік",
                    orderServer: "Сервер",
                    orderTotal: "Сума",
                    orderCards: "Банк. карти",
                    orderLogoQiwi: "Логотип QIWI.",
                    orderLimit: "Доступно від",
                    orderUaCards: "Українські карти",
                    orderAllWays: "Усі способи",
                    orderTermsText: "Продовжуючи покупку, ви погоджуєтесь з",
                    orderTermsLink: "користувальницькою угодою",
                    authBeforeBuy: "Перед покупкою необхідно авторизуватись!",
                    headTitle: "Арізона Донат: Купити AZ Coin | Офіційний сайт Arizona RP",
                    headDescription: "Донать в свій аккаунт Arizona RP тільки на офіційному сайті - arizona-rp.com Купити AZ Coin просто: введи нікнейм і суму, вибери сервер і натисніть на сплати!"
                },
                cShopForm: {
                    username: "Нікнейм",
                    server: "Сервер",
                    total: "Сума",
                    calculator: "Калькулятор",
                    pay: "Заплатіть",
                    get: "Отримайте",
                    pay2: "Сплатити",
                    gameServer: "Ігровий сервер",
                    errServer: "Виберіть сервер",
                    errUsername: "Введіть ігровий нік",
                    errTotal: "Введіть суму",
                    errLimit: "Максимальна сума 1 млн"
                },
                pRating_type_serverName: {
                    number: "№",
                    player: "Гравець",
                    level: "Рівень",
                    status: "Статус",
                    cost: "Вартість",
                    owner: "Власник",
                    name: "Назва",
                    online: "Зараз грає",
                    offline: "Не в мережі",
                    headTitle: "Рейтинги Arizona Roleplay"
                },
                pProfile: {
                    desc: "Рівень",
                    cashBalance: "Баланс готівки.",
                    cash: "Готівка",
                    bankBalance: "Балансу у банку.",
                    bankBalance2: "Баланс банк. рахунку",
                    coin: "Арізона Коїни.",
                    deposit: "Депозит.",
                    depositState: "Стан депозиту",
                    euro: "Євро.",
                    euro2: "Євро",
                    bitcoin: "Біткоїн.",
                    bitcoin2: "Біткоїн",
                    playOnServer: "Грає на сервері",
                    menuVK: "Прив'язати сторінку ВК",
                    menuBankCode: "Скинути код банк. картки",
                    menuAccount: "Поповнити рахунок",
                    menuPassword: "Змінити пароль",
                    menuPlayer: "Знайти гравця",
                    menuLogout: "Вийти",
                    menuControl: "Управління",
                    accountInfo: "Інформація про обліковий запис",
                    accountOnline: "Зараз у грі",
                    accountOffline: "Вимкнено",
                    authEmail: "Двофакторна авторизація (пошта)",
                    authTotp: "Двофакторна авторизація (TOTP)",
                    accountOn: "Включено",
                    accountOff: "Вимкнено",
                    switchOff: "вимкнути",
                    switchOn: "увімкнути",
                    totpP1: "Встановіть на смартфон Google Authenticator або іншу програму для двофакторної автентифікації",
                    totpP2: "Для реєстрації доступу до програми відскануйте наступний QR-код",
                    totpP3: "або введіть ключ доступу вручну",
                    totpP4: "Для завершення включення вкажіть одноразовий код із програми у формі нижче",
                    totpP5: "Для завершення вимкнення вкажіть одноразовий код із програми у формі нижче",
                    checkCode: "Код перевірки",
                    send: "Відправити",
                    phone: "Номер телефону",
                    account: "Особистий рахунок",
                    job: "Робота",
                    company: "Організація",
                    rank: "Ранг",
                    inventory: "Мій інвентар",
                    force: "Сила",
                    musculature: "Мускулатура",
                    endurance: "Витривалість",
                    headTitle: "Особистий кабінет - Arizona Roleplay",
                    notifyAccountChecking: "Перевіряємо Ваш обліковий запис..",
                    notifyEmail: "На вашу пошту надіслано листа з подальшими діями",
                    notifyRequestOn: "Запит на включення..",
                    notifyAccessDataReady: "Дані доступу готові",
                    notifyWrongCode: "Некоректний код",
                    notifySendingCode: "Надсилання коду..",
                    notifyCodeAccepted: "Код прийнято."
                },
                cProfile_FightStyle: {
                    studied: "Вивчений",
                    nonstudied: "Не вивчений"
                },
                cProfile_Skills: {
                    otherSkills: "Інші навички",
                    carSkill: "Навичка водіння",
                    dSkill: "Навичка далекобійника",
                    taxiSkill: "Навичка<br>таксиста",
                    productJobSkill: "Розвізник продуктів",
                    points: "очок"
                },
                cProfile_WeaponSkills: {
                    title: "Навички володіння зброєю"
                },
                cProfile_Upgrades: {
                    title: "Поліпшення",
                    feFinderLabel: "Шумахер",
                    feFinderDesc: "З цим умінням ваша машина не глухне при зіткненні",
                    unlimCarSkillLabel: "Вічний Car Skill",
                    unlimCarSkillDesc: "Ваша навичка водіння не зменшуватиметься",
                    plancetLabel: "Планшет",
                    plancetDesc: "Ви зможете надсилати оголошення на редакцію з будь-якої точки картки",
                    moreLabel: "Бізнесмен",
                    moreDesc: "Поліпшення дозволяє вам володіти п'ятьма бізнесами",
                    packLabel: "Халявщик",
                    packDesc: "Ваш персонаж стає щасливчиком і платить у 2 рази менше податків",
                    houseLabel: "Більше нерухомості",
                    houseDesc: "Ви зможете володіти 4 будинками",
                    antiTaxLabel: "Ні податкам",
                    antiTaxDesc: "Вам не доведеться платити комісію в банках та банкоматах",
                    haveTwoFarmLabel: "2 ферми",
                    haveTwoFarmDesc: "Можливість мати 2 ферми"
                },
                cProfile_FightStyles: {
                    title: "Стилі бою",
                    Boxing: "Боксерський стиль",
                    Kungfu: "Стиль кунг-фу",
                    Kneehead: "Кікбоксерський стиль",
                    GrabKick: "Удар ногою",
                    Elbow: "Захоплення та удари"
                },
                pProfile_inventory: {
                    h1: "Мій інвентар",
                    slot: "Слот",
                    headTitle: "Мій інвентар - Arizona Roleplay"
                },
                pPosts: {
                    news: "Новини",
                    main: "Головне",
                    headTitle: "SAMP: Новини Arizona Role Play - оновлення, акції, важливі повідомлення - Сторінка 1",
                    headDescription: "Новини проекту Arizona RP - тут ви можете дізнатися найсвіжішу інформацію про SA-MP з першоджерела!"
                },
                pPosts_id: {
                    address: "Росія",
                    comments: "Коментарі",
                    nocomments: "Коментарів немає..",
                    leavecomments: "Залишати коментар може тільки авторизований гравець",
                    news: "Новини",
                    commentdeleted: "коментарій видалено"
                },
                cPostCommentForm: {
                    enterComment: "Введіть коментар",
                    add: "Додаємо..",
                    send: "Відправити",
                    enterMessage: "Введіть повідомлення"
                },
                cShowVideoMixin: {
                    close: "Закрити"
                },
                pMap__serverName: {
                    stateMap: "Карта штату",
                    useScroll: "Використовуйте горизонтальний скролл, щоб переглянути карту повністю."
                },
                pFractions_serverName: {
                    orgs: "Організації",
                    useScroll: "Використовуйте горизонтальний скролл, щоб переглянути карту повністю."
                },
                pFractions_serverName_fractionId: {
                    number: "№",
                    player: "Гравець",
                    rank: "Ранг",
                    status: "Статус",
                    leader: "лідер",
                    orgs: "Організації",
                    online: "Зараз грає",
                    offline: "Не в мережі"
                },
                pDocument_terms: {
                    title: "Угода користувача",
                    headTitle: "Угода користувача - Arizona Roleplay"
                },
                pDocument_policy: {
                    title: "Політика конфіденційності",
                    headTitle: "Політика конфіденційності - Arizona Roleplay"
                },
                pControl_donateRatio: {
                    h1: "Коефіцієнти поповнення",
                    forAll: "Для всіх",
                    save: "Зберегти",
                    headTitle: "Коефіцієнти поповнення - Arizona Roleplay",
                    loadFail: "Помилка під час завантаження",
                    savedForAll: "Збережено (для всіх)",
                    notSavedForAll: "Не збережено (для всіх)",
                    saved: "Збережено",
                    notsaved: "Не збережено"
                },
                pVkontakte: {
                    headTitle: "Вхід через ВКонтакті - Arizona Roleplay",
                    loading: "Завантаження..",
                    notifyRepeatAuth: "Произошла ошибка. Повторите попытку авторизации"
                },
                pVkontakteAdd: {
                    headTitle: "Вхід через ВКонтакті - Arizona Roleplay",
                    loading: "Завантаження..",
                    notifyRepeat: "Виникла помилка. Повторіть спробу",
                    notifyAccountLinked: "Обліковий запис прив'язаний до Вашої сторінки."
                },
                cRates: {
                    servers: "Сервера SAMP"
                }
            },
            ba = {
                months3: ["сту", "лют", "сак", "кра", "тра", "чэр", "ліп", "жні", "вер", "кас", "ліс", "сне"],
                months: ["студзень", "люты", "сакавік", "красавік", "травень", "чэрвень", "ліпень", "жнівень", "верасень", "кастрычнік", "лістапад", "снежань"],
                cFooter: {
                    terms: "Карыстальніцкая дамова",
                    policy: "Палітыка прыватнасці",
                    fop: "ФОП ГОМЕНЮК ВАЛЕНТИН СЕРГІЙОВИЧ 3583909578",
                    boneCountry: "SAMP: Жыццё ў вёсцы",
                    main: "Галоўная",
                    howToPlay: "Як пачаць гульню",
                    forum: "Форум",
                    shop: "Крама",
                    profile: "Асабісты кабінет",
                    servers: "Нашы сервера",
                    aboutUs: "Пра нас",
                    vk: "Супольнасць Укантакце",
                    youtube: "YouTube канал",
                    telegram: "Канал у Telegram",
                    boosty: "Старонка на Boosty"
                },
                pIndex: {
                    h1: "Гуляй у GTA SA-MP па сетцы",
                    headTitle: "SAMP: Гуляй у GTA San Andreas Multiplayer на Arizona RP | 24/7 | На ПК і тэлефоне",
                    headDescription: "Гуляй у GTA SAMP з самым вялікім рускамоўным кам'юніці ў GTA Online. Пачні гуляць у GTA San Andreas па сетцы на Arizona RolePlay з тэлефона або ПК за ўсё ў пару клікаў прама зараз!"
                },
                cServer: {
                    vk1: "Супольнасць",
                    vk2: "Укантакце",
                    map: "Карта штата",
                    players: "Самыя старыя гульцы",
                    fractions: "Склад арганізацый"
                },
                cHomepagePresent: {
                    video1MetaName: "Коратка і ясна!",
                    video1Title: "Пазнаёмцеся з нашым праектам за 5 хвілін",
                    video2MetaName: "Як пачаць гуляць ARIZONA SAMP MOBILE ці ARIZONA ROLE PLAY!",
                    video2Title: "Паглядзіце, як пачаць гульню",
                    country: "Расія"
                },
                cFaqList: {
                    moreQuestions: "Больш пытанняў"
                },
                nav: {
                    homepage: "Галоўная",
                    howPlay: "Як гуляць",
                    news: "Навіны",
                    forum: "Форум",
                    shop: "Крама",
                    login: "Увайсці",
                    cabinet: "Кабінет"
                },
                slides: ["Займі верхавіну крымінальнага свету", "Пачні сваё жыццё з поўнага нуля", "Лад асабістае жыццё ў віртуальным свеце", "Збіць велізарны стан на бізнэсе", "Служы і ахоўвай сваю радзіму ад бандытаў", "Выбівай даўгі і бяры дах з бізнэсаў"],
                slideDescription: "У SAMP ты можаш стаць кім захочаш, няма часу на разважанні ўсё ў тваіх руках!",
                startPlay: "Пачаць гуляць",
                heads: ["Гуляй у GTA SA-MP па сетцы"],
                monitoring: "Маніторынг",
                playingNow: "Цяпер гуляе",
                showAllServers: "Паказаць усе сэрвэра",
                launcher: ["Пачаць гуляць у SAMP стала яшчэ прасцей!", "Ніколі яшчэ гуляць у самп не было так проста", "Загрузі лаўнчар", "выберы любімую гульню", "пачні гуляць", "Спампаваць SAMP", "Даступна на", "Пры выкарыстанні лаўнчара, гульцы з 8-га ўзроўню будуць атрымліваць 1 грамадзянскую манету кожны PAYDAY", "SAMP Лаўнчар для гульні ў GTA San Andreas Online"],
                mobileLauncher: ["ГУЛЬНЯ У SAMP НА ТЭЛЕФОНЕ", "Мы запусцілі наш SAMP MOBILE лаўнчар для смартфонаў на базе Android. Любы жадаючы можа далучыцца да нас прама зараз. Для гульні неабходная версія АС Android вышэй 5.0, Arizona Mobile даступная да запампоўкі на нашым сайце і ў Google Play", "Спампаваць", "Гуляй на сваім смартфоне"],
                altLauncher: ["Альтэрнатыўны спосаб", "Вы можаце гуляць на нашым праекце на<br>стандартнай версіі GTA SA:MP", "Спампаваць і ўсталяваць", "Спампаваць", "Абярыце і падключыцеся", "Да сервера", "Выбраць", "Камп'ютар", "АС Windows", "Доступ у інтэрнэт", "Arizona Roleplay - альтэрнатыўны спосаб запуску", "Arizona Roleplay - альтэрнатыўны спосаб запуску - крок 1", "Arizona Roleplay - альтэрнатыўны спосаб запуску - крок 2", "Arizona Roleplay - альтэрнатыўны спосаб запуску - крок 3"],
                playSampText: {
                    h: ["Гуляй у SAMP на серверах Arizona Role Play!", "Arizona RP – праект, з якога пачалася гісторыя SAMP", "SAMP лаўнчар: усе перавагі ў адной праграме"],
                    p: ["SAMP - гэта бясплатная шматкарыстальніцкая мадыфікацыя для папулярнай гульні Grand Theft Auto: San Andreas. Пагрузіся ў адкрыты гульнявы свет і адчуй сябе ў ролі любога персанажа, вядомай рэальнай асобы або выберы свой асаблівы шлях - тут даступныя любыя сцэнары падзей.", "SA-MP месціць да 26 тысяч карыстачоў, гульцоў па сетцы. Для максімальнага апускання ў атмасферу гульні і адчуванні рэальнага ўзаемадзеяння і камунікацыі з іншымі гульцамі ёсць галасавы чат. Магутныя сервера разлічаны на стабільнае шматкарыстальніцкае падключэнне - пастаянна ў анлайне больш за 17 тысяч гульцоў.", "У нас ты можаш выбіраць сам: гуляць праз SAMP Launcher усяго ў пару клікаў ці на стандартнай версіі GTA SA:MP. Для гэтага вам запатрабуецца ўсталяваная на ПК GTA San Andreas і кліент SAMP 0.3.7. Для падлучэння запусціце мультыплэер, клікнуўшы на абразок на працоўным стале. Пазначце ваш лагін у поле Name у фармаце “Login_Name”, увядзіце IP-адрас жаданага сервера і націсніце кнопку Connect (зялёны квадрацік з белым трыкутнікам)", "Першы сервер быў адчынены 23 жніўня 2014 года. З-за хутка якая расце папулярнасці ў далейшым было запушчана ў працу яшчэ 25 сервераў. Таму ўжо да 2017 году Arizona Role Play заняў якія лідыруюць пазіцыі па наведвальнасці сярод усіх вядомых праектаў Самп, якім і застаецца дагэтуль.", "Нашы Samp Role Play серверы прыцягваюць максімальнай рэалістычнасцю і бязмежнымі магчымасцямі, бо кожны гулец уносіць свае карэктывы ў ход падзей і з'яўляецца часткай аднаго агульнага свету. Гульня дазваляе", "Гуляй у San Andreas Multiplayer любым зручным спосабам, уключаючы мабільны тэлефон - зараз ты будзеш на сувязі з каханай гульнёй і сябрамі заўсёды і ўсюды. Мы шануем камфорт нашых гульцоў, таму правялі поўную сінхранізацыю сервераў і функцыяналу САМП для ПК і смартфона. SAMP Mobile паспяхова прайшоў тэсціраванне і дае магчымасць ацаніць усе перавагі такога фармату гульні. Для ўсталёўкі запатрабуецца любы смартфон з аперацыйнай сістэмай Android 7.0 і вышэй.", "Самп лаўнчар дапаможа хутка запусціць гульню з любой прылады, усяго ў пару клікаў. Пасля ўстаноўкі і запуску проста выконвайце інструкцыі на экране і праз пару хвілін вы будзеце гатовыя гуляць. Калі выкарыстоўваць лаўнчар, ёсць магчымасць атрымаць дадатковыя бонусы. Кожны PAYDAY, гульцы, пачынаючы з 8 ўзроўню, атрымліваюць 1 грамадзянскую манету і 10к вірт. Гэтае правіла працуе як у лаўнчэры для ПК, так і для тэлефона. Спампаваць samp для мабільнай прылады можна ў Google Play. Дадатак Arizona Mobile бясплатнае і падтрымлівае аўтаматычныя абнаўлення!", "Мабільная версія значна пашырае твае магчымасці. Гуляй з любога месца: у перапынках паміж вучобай, падчас паездкі ў транспарце, на вуліцы, на адпачынку, падчас працяглага чакання ці любой іншай сітуацыі, калі няма жадання ці магчымасці сесці за стацыянарны ПК для гульні.", "Каб пачаць гуляць у GTA San Andreas, спатрэбіцца выканаць простыя дзеянні"],
                    ul: ["адчуць пах вялікіх грошай і адчуць якое быць на вяршыні свету", "апрабаваць крутыя аўта найноўшых мадэляў - правесці асабісты тэст-драйв, цюнінгаваць, разбіваць і рамантаваць, бо ў гульні можна ўсё", "абраць шлях крутога копа і быць на валасінку ад смерці, увесь час ганяючыся за злачынцамі, ці патрапіць у злачынную групоўку і даслужыцца да раздзела мафіі", "ты можаш прымерыць на сябе ролю злоснага злачынца і ўсяляць страх ва ўсіх навакольных або стаць на шлях дапамогі насельніцтву: салдатам, пажарнікам або таксістам - сэнс Samp Role Play у тым што важны кожны гулец, як у рэальным Міры", "мноства гульнявых падзей, місій, квэстаў, бізнесаў і забаў на любы густ з поўным апусканнем у спецыфічную атмасферу рэальна-віртуальнага свету"],
                    ul2: ["Націснуць на кнопку «Пачаць гуляць» на сайце і ўсталяваць Лаўнчар", "Для запуску гульні на ПК запатрабуецца клікнуць па цэтліку лаўнчара, увесці nickname і пачаць гульню", "На мабільнай прыладзе запуск гульні пры дапамозе лаўнчара аналагічны"]
                },
                news: ["Навіны", "Больш навін", "Галоўнае"],
                pAboutUs: {
                    headTitle: "SAMP: Arizona Role Play - Аб нас, нашым мінулым і будучыні",
                    headDescription: "Аб праекце Arizona RP - самп серверах №1 з самай вялікай колькасцю гульцоў і кам'юніці",
                    h1: "Гуляй у SAMP на серверах Arizona RolePlay!",
                    p1BeforeLink: 'SA-MP – гэта шматкарыстальніцкая версія GTA San Andreas, Arizona RP – гэта лідзіруючыя самп серверы для гульні ў ГТА Сан Андрэс анлайн. У сампе ты можаш быць кім заўгодна, пачынаючы бяздомным перад табой адчыняецца мноства дарог: мінуць шлях ад наркадылера да раздзела мафіі, ад простага салдата або паліцыянта да галоўнакамандуючага - сэнс САМП РП сервераў у тым што ўсё залежыць толькі ад цябе! Такім чынам, ты можаш паспрабаваць рэалізаваць свае любыя, нават самыя смелыя, ідэі, бо каманда распрацоўшчыкаў Arizona Games дадае ўсё новыя захапляльныя магчымасці ролевай гульні ў GTA San Andreas па сетцы. Больш за тое, гуляць на Samp RP серверах Arizona RolePlay цікава не толькі з-за велізарнай колькасці роляў, груповак, банд, місій, функцый і іншых магчымасцяў пра якія мы раскажам ніжэй, а яшчэ і таму што гэта самы буйны самп праект усіх часоў з рэкордным анлайнам да 13 тысяч гульцоў! А каб пачаць гуляць не абавязкова шукаць прыдатную зборку GTA SA, добры русіфікатар і прыдатны кліент SAMP 0.3.7, не трэба шукаць IP сервераў самп, дастаткова толькі спампаваць наш SAMP LAUNCHER і прытрымлівацца інструкцый у ім. Для тых, хто любіць па гуляць "па-старому", гэта таксама магчыма: трэба спампаваць ГТА Сан Андрэас, спампаваць самп 0.3.7, увесці',
                    p1Link: "іп-адрасы нашых сервераў",
                    p1AfterLink: ", падключыцца і гуляць! Спіс нашых самп сервераў:",
                    p2BeforeLink: "Чаму Вам трэба абраць менавіта Arizona Role Play? Таму што SAMP – гэта імітацыя рэальнага жыцця, дзе прадстаўлена вялікая колькасць прафесій, заданняў, работ, квэстаў, нерухомасці, аўтамабіляў, працоўнай тэхнікі, авіятранспарту. Аднак, многія праекты не могуць пахваліцца такім багаццем, як Arizona RP. З 2017 года серверы Арызона РП з'яўляюцца самымі папулярнымі сярод усіх самп-праектаў, пра што сведчыць",
                    p2Link: "табліца пікавага анлайну праектаў SA:MP",
                    p2AfterLink: ". Узначаліўшы лідэрства, мы ўзялі на сябе абавязацельства быць лепшымі і нястомна прытрымліваемся гэтага ўзроўню, падымаючы яго пры любой магчымасці. Такім чынам, у 2020 годзе мы пабілі ўсе рэкорды GTA San Andreas Multiplayer, адкрыўшы 12 і 13. серверы, якія таксама змяшчаюць да 1000 гульцоў кожны, дасягнуўшы адзнакі ў 13 тысяч адначасовага анлайну! Ніводны з праектаў-канкурэнтаў, ні Diamond RP, ні Advance RP, ні Evolve RP, ні мінулы самп-рэкардсмен Samp-Rp не змогуць прапанаваць вам такое кам'юніці, як у Arizona Games. Але мы можам пахваліцца не толькі лічбамі і рэкордамі, бо ў першую чаргу з намі цікава гуляць таму што ў нас самая вялікая колькасць разнастайных дапрацовак, прафесій, квэстаў, заданняў, сюжэтаў, тэхнікі, забаўляльных аб'ектаў і іншых дапаўненняў. Нашы серверы падтрымліваюць галасавы чат, што робіць зносіны паміж гульцамі яшчэ цікавей, адчыняючы ўсё больш магчымасцяў для ўзаемадзеяння. Галоўнай і самай чаканай навінай з'яўляецца запуск Самп Мобайл, а менавіта мабільнага лаўнчара з падтрымкай",
                    h2: "Кантакты",
                    p3LinkForum: "Форум",
                    p3LinkVK: "Супольнасць Укантакце",
                    p3LinkYouTube: "YouTube канал",
                    p3LinkTelegram: "Канал у Telegram",
                    p3LinkBoosty: "Старонка на Boosty"
                },
                p404: {
                    h1: "Памылка 404",
                    content: "Старонка не знойдзена"
                },
                pChangePassword: {
                    title: "Змена пароля",
                    headTitle: "Змяненне пароля - Асабісты кабінет"
                },
                cChangePasswordForm: {
                    currentPassword: "Сучасны пароль",
                    newPassword: "Новы пароль",
                    newPasswordOnceMore: "Новы пароль яшчэ раз",
                    btnChange: "Змяніць",
                    alertSuccess: "Пароль паспяхова зменены",
                    enterPassword: "Увядзіце пароль",
                    passwordMismatch: "Паролі не супадаюць"
                },
                pFaq: {
                    headTitle: "SAMP: FAQ - Частыя Пытанні - Arizona Role Play",
                    headDescription: "SAMP - мы дапаможам, калі зможам!"
                },
                pFindGamer: {
                    headTitle: "Пошук гульца"
                },
                cFindGamerForm: {
                    title: "Пошук гульца",
                    username: "Нік",
                    gameUsername: "Гульнявы нік",
                    server: "Сервер",
                    find: "Знайсці",
                    status: "Статус",
                    offline: "Не ў сетцы",
                    online: "Цяпер у гульні",
                    level: "Узровень",
                    phone: "Нумар тэлефона",
                    levelVip: "Узровень VIP",
                    cash: "Наяўныя",
                    bank: "Назапашвання",
                    deposit: "Стан дэпазіту",
                    jobName: "Праца",
                    orgName: "Арганізацыя",
                    gameServer: "Гульнявы сервер",
                    chooseServer: "Абярыце сервер",
                    enterUsername: "Увядзіце нік гульца"
                },
                pLogin: {
                    h1: "Аўтарызацыя",
                    btnEnter: "Увайсці",
                    vk: "Увайсці праз Укантакце",
                    recoveryPassword: "Я забыўся пароль",
                    headTitle: "Аўтарызацыя - Асабісты кабінет"
                },
                cAuthForm: {
                    username: "Нікнэйм",
                    password: "Пароль",
                    server: "Сервер",
                    authEmail: "На акаўнце падключана двухфактарная аўтарызацыя. Праверачны код адпраўлены Вам на E-Mail. Не забудзьцеся праверыць тэчку «Спам»",
                    authTotp: "На акаўнце падключана двухфактарная аўтарызацыя. Увядзіце праверачны код з прыкладання.",
                    twoFactorCode: "Праверачны код",
                    gameServer: "Гульнявы сервер",
                    errServer: "Абярыце сервер",
                    errUsername: "Увядзіце гульнявы нік",
                    errPassword: "Увядзіце пароль"
                },
                pRecoveryPassword: {
                    headTitle: "Аднаўленне пароля - Асабісты кабінет"
                },
                cRestorePasswordForm: {
                    title: "Не можаце ўвайсці?",
                    subtitle: "Увядзіце ваш E-Mail. Мы вышлем інструкцыі па аднаўленні пароля.",
                    server: "Сервер",
                    restore: "Аднавіць",
                    instruction: "На пошту адпраўлена інструкцыя з далейшымі дзеяннямі.",
                    gameServer: "Гульнявы сервер",
                    errServer: "Абярыце сервер",
                    errEmail: "Увядзіце e-mail"
                },
                pResetBankCode: {
                    text: 'Пін-код вашай банкаўскай карты быў усталяваны на "123456", не забудзьцеся змяніць яго ў гульні.',
                    headTitle: "Скід пароля банкаўскай карты - Асабісты кабінет"
                },
                pRestorePassword: {
                    text1: "Мы змянілі пароль для Вашага акаўнта. Ваш новы пароль:",
                    text2: "Зрабіце скрыншот, альбо запішыце пароль. Вы можаце змяніць яго ў асабістым кабінеце, альбо ў гульні.",
                    headTitle: "Новы пароль - Асабісты кабінет"
                },
                pServers: {
                    h1: "Серверы SAMP Arizona Role Play",
                    headTitle: "SAMP: Серверы GTA SA-MP — Arizona Role Play",
                    headDescription: "Серверы SA-MP для гульні ў GTA San Andreas па сетцы ад Arizona RP. Выбірай сервер і пачынай гуляць на найбуйным праекце самп у рунэце!",
                    breadcrumbs: "Серверы ⏩ № ➊"
                },
                pShop: {
                    h1: "Донат Arizona Role Play",
                    title: "Спецыяльныя прапановы",
                    cash: "наяўнымі",
                    buyFor: "Купіць за",
                    economy: "Выгада",
                    number: "№",
                    pack1Alt: "Спецыяльны пакет 1 Arizona RP",
                    pack1Title: "Набор<br><span>«Пачатковец лавец»</span>",
                    pack2Alt: "Спецыяльны пакет 2 Arizona RP",
                    pack2Title: "Набор<br><span>«Пачатковец магнат»</span>",
                    pack2Bonus: "Валоданне <span>4 дамамі і бізнэсамі</span>",
                    packStartName: "Пакет «Стартавы капітал»",
                    packVipName: "Вечны<br>Premium VIP",
                    packPhoneName: "iPhone X і<br>Samsung Galaxy 10",
                    packLicenseName: "Усе ліцэнзіі<br>на 5 гадоў",
                    packNimbName: "Німб, кіёск<br>і палівачка",
                    packAddVipName: "ADD VIP<br>30 дзён",
                    packAmuletName: "20 тачыльных амулетаў",
                    packStoneName: "100 тачыльных камянёў",
                    special1Name: "Набор «Пачатковец лавец»",
                    premiumVip: "Прэміум VIP",
                    premiumMaverick: "Прэміум Maverick",
                    special2Name: "Набор «Пачатковец магнат»",
                    special2Div: "Валоданне 4 дамамі і бізнэсамі",
                    special3Name: "Пакет «Стартавы капітал»",
                    special4Name: "Пакет «Багаценькі»",
                    special5Name: "Пакет «Вялікі запас»",
                    special6Name: "Вечны PREMIUM VIP",
                    special7Name: "iPhone X і Samsung Galaxy 10",
                    special8Name: "Усе ліцэнзіі на 5 гадоў",
                    special9Name: "Німб, кіёск і палівачка",
                    special10Name: "ADD VIP 30 ДЗЕНЬ",
                    special11Name: "20 тачыльных амулетаў",
                    special12Name: "100 тачыльных камянёў",
                    orderTitle: "Праверка дадзеных",
                    orderAccount: "Нумар рахунку",
                    orderUsername: "Нік",
                    orderServer: "Сервер",
                    orderTotal: "Сума",
                    orderCards: "Карты",
                    orderLogoQiwi: "Лагатып QIWI.",
                    orderLimit: "Даступна ад",
                    orderUaCards: "Украінскія карты",
                    orderAllWays: "Усе спосабы",
                    orderTermsText: "Працягваючы пакупку, вы згаджаецеся з",
                    orderTermsLink: "карыстацкай дамовай",
                    authBeforeBuy: "Перад пакупкай неабходна аўтарызавацца!",
                    headTitle: "Арызона Донат: Купіць AZ Coin | Афіцыйны сайт Arizona RP",
                    headDescription: "Данаць у свой рахунак Arizona RP толькі на афіцыйным сайце - arizona-rp.com Купіць AZ Coin проста: увядзі нікнэйм і суму, выберы сервер і націсні аплаціць!"
                },
                cShopForm: {
                    username: "Нікнэйм",
                    server: "Сервер",
                    total: "Сума",
                    calculator: "Калькулятар",
                    pay: "Заплаціце",
                    get: "Атрымайце",
                    pay2: "Аплаціць",
                    gameServer: "Гульнявы сервер",
                    errServer: "Абярыце сервер",
                    errUsername: "Увядзіце гульнявы нік",
                    errTotal: "Увядзіце суму",
                    errLimit: "Максімальная сума 1 млн"
                },
                pRating_type_serverName: {
                    number: "№",
                    player: "Гулец",
                    level: "Узровень",
                    status: "Статус",
                    cost: "Кошт",
                    owner: "Уладальнік",
                    name: "Назва",
                    online: "Цяпер гуляе",
                    offline: "Не ў сетцы",
                    headTitle: "Рэйтынгі Arizona Roleplay"
                },
                pProfile: {
                    desc: "Узровень",
                    cashBalance: "Баланс наяўных грошай.",
                    cash: "Наяўныя",
                    bankBalance: "Балансу ў банку.",
                    bankBalance2: "Баланс банк. рахунку",
                    coin: "Арызона Коіны.",
                    deposit: "Дэпазіт.",
                    depositState: "Стан дэпазіту",
                    euro: "Еўра.",
                    euro2: "Еўра",
                    bitcoin: "Біткоін.",
                    bitcoin2: "Біткоін",
                    playOnServer: "Гуляе на сэрвэры",
                    menuVK: "Прывязаць старонку ВК",
                    menuBankCode: "Скінуць код банк. карты",
                    menuAccount: "Папоўніць рахунак",
                    menuPassword: "Змяніць пароль",
                    menuPlayer: "Знайсці гульца",
                    menuLogout: "Выйсці",
                    menuControl: "Упраўленне",
                    accountInfo: "Інфармацыя аб акаўнце",
                    accountOnline: "Цяпер у гульні",
                    accountOffline: "Адключаны",
                    authEmail: "Двухфактарная аўтарызацыя (пошта)",
                    authTotp: "Двухфактарная аўтарызацыя (TOTP)",
                    accountOn: "Уключана",
                    accountOff: "Адключана",
                    switchOff: "адключыць",
                    switchOn: "уключыць",
                    totpP1: "Усталюйце на смартфон Google Authenticator або іншае прыкладанне для двухфактарнага аўтэнтыфікацыі",
                    totpP2: "Для регистрации доступа в приложении отсканируйте следующий QR-код",
                    totpP3: "ці ўвядзіце ключ доступу ў ручную",
                    totpP4: "Для завяршэння ўключэння пазначце аднаразовы код з прыкладання ў форме ніжэй",
                    totpP5: "Для завяршэння адключэння пазначце аднаразовы код з прыкладання ў форме ніжэй",
                    checkCode: "Праверачны код",
                    send: "Адправіць",
                    phone: "Нумар тэлефона",
                    account: "Асабісты рахунак",
                    job: "Праца",
                    company: "Арганізацыя",
                    rank: "Ранг",
                    inventory: "Мой інвентар",
                    force: "Сіла",
                    musculature: "Мускулатура",
                    endurance: "Цягавітасць",
                    headTitle: "Асабісты кабінет - Arizona Roleplay",
                    notifyAccountChecking: "Правяраем Ваш рахунак..",
                    notifyEmail: "На вашу пошту адпраўлены ліст з далейшымі дзеяннямі",
                    notifyRequestOn: "Запыт на ўключэнне..",
                    notifyAccessDataReady: "Дадзеныя доступу гатовы",
                    notifyWrongCode: "Некарэктны код",
                    notifySendingCode: "Адпраўка кода..",
                    notifyCodeAccepted: "Код прыняты."
                },
                cProfile_FightStyle: {
                    studied: "Вывучаны",
                    nonstudied: "Не вывучаны"
                },
                cProfile_Skills: {
                    otherSkills: "Іншыя навыкі",
                    carSkill: "Навык ваджэння",
                    dSkill: "Навык дальнабойшчыка",
                    taxiSkill: "Навык<br>таксіста",
                    productJobSkill: "Развозчык прадуктаў",
                    points: "ачкоў"
                },
                cProfile_WeaponSkills: {
                    title: "Навыкі валодання зброяй"
                },
                cProfile_Upgrades: {
                    title: "Паляпшэнні",
                    feFinderLabel: "Шумахер",
                    feFinderDesc: "З гэтым уменнем ваша машына не будзе глухнуць пры сутыкненні",
                    unlimCarSkillLabel: "Вечны Car Skill",
                    unlimCarSkillDesc: "Ваш навык ваджэння не будзе памяншацца",
                    plancetLabel: "Планшэт",
                    plancetDesc: "Вы зможаце адпраўляць аб'явы на рэдакцыю з любой кропкі карты",
                    moreLabel: "Бізнесмен",
                    moreDesc: "Паляпшэнне дазваляе вам валодаць пяццю бізнесамі",
                    packLabel: "Халяўшчык",
                    packDesc: "Ваш персанаж становіцца шчасліўчыкам і плаціць у 2 разы менш падаткаў",
                    houseLabel: "Больш нерухомасці",
                    houseDesc: "Вы можаце валодаць",
                    houseDesc2: "Вы зможаце валодаць дамамі",
                    antiTaxLabel: "Няма падаткам",
                    antiTaxDesc: "Вам не давядзецца плаціць камісію ў банках і банкаматах",
                    haveTwoFarmLabel: "2 фермы",
                    haveTwoFarmDesc: "Магчымасць мець 2 фермы"
                },
                cProfile_FightStyles: {
                    title: "Стылі бою",
                    Boxing: "Баксёрскі стыль",
                    Kungfu: "Стыль кунг-фу",
                    Kneehead: "Кікбаксёрскі стыль",
                    GrabKick: "Удар нагой",
                    Elbow: "Захопы і ўдары"
                },
                pProfile_inventory: {
                    h1: "Мой інвентар",
                    slot: "Слот",
                    headTitle: "Мой інвентар - Arizona Roleplay"
                },
                pPosts: {
                    news: "Навіны",
                    main: "Галоўнае",
                    headTitle: "SAMP: Навіны Arizona Role Play - абнаўлення, акцыі, важныя паведамленні - Старонка 1",
                    headDescription: "Навіны праекта Arizona RP - тут вы можаце даведацца самую свежую інфармацыю аб SA-MP з першакрыніцы!"
                },
                pPosts_id: {
                    address: "Расія",
                    comments: "Каментары",
                    nocomments: "Каментароў няма..",
                    leavecomments: "Пакідаць каментар можа толькі аўтарызаваны гулец",
                    news: "Навіны",
                    commentdeleted: "Каментарый выдалены"
                },
                cPostCommentForm: {
                    enterComment: "Увядзіце каментар",
                    add: "Дадаем..",
                    send: "Адправіць",
                    enterMessage: "Увядзіце паведамленне"
                },
                cShowVideoMixin: {
                    close: "Закрыць"
                },
                pMap__serverName: {
                    stateMap: "Карта штата",
                    useScroll: "Выкарыстоўвайце гарызантальны скролл, каб праглядаць карту цалкам."
                },
                pFractions_serverName: {
                    orgs: "Арганізацыі",
                    useScroll: "Выкарыстоўвайце гарызантальны скролл, каб праглядаць карту цалкам."
                },
                pFractions_serverName_fractionId: {
                    number: "№",
                    player: "Гулец",
                    rank: "Ранг",
                    status: "Статус",
                    leader: "лідэр",
                    orgs: "Арганізацыі",
                    online: "Цяпер гуляе",
                    offline: "Не ў сетцы"
                },
                pDocument_terms: {
                    title: "Карыстальніцкая дамова",
                    headTitle: "Карыстальніцкая дамова - Arizona Roleplay"
                },
                pDocument_policy: {
                    title: "Палітыка прыватнасці",
                    headTitle: "Палітыка прыватнасці - Arizona Roleplay"
                },
                pControl_donateRatio: {
                    h1: "Каэфіцыенты папаўнення",
                    forAll: "Для ўсіх",
                    save: "Захаваць",
                    headTitle: "Каэфіцыенты папаўненняў - Arizona Roleplay",
                    loadFail: "Памылка пры загрузцы",
                    savedForAll: "Захавана (для ўсіх)",
                    notSavedForAll: "Не захавана (для ўсіх)",
                    saved: "Захавана",
                    notsaved: "Не захавана"
                },
                pVkontakte: {
                    headTitle: "Уваход праз Укантакце - Arizona Roleplay",
                    loading: "Загрузка..",
                    notifyRepeatAuth: "Адбылася памылка. Паўторыце спробу аўтарызацыі"
                },
                pVkontakteAdd: {
                    headTitle: "Уваход праз Укантакце - Arizona Roleplay",
                    loading: "Загрузка..",
                    notifyRepeat: "Адбылася памылка. Паўторыце спробу",
                    notifyAccountLinked: "Акаўнт прывязаны да Вашай старонкі."
                },
                cRates: {
                    servers: "Сервера SAMP"
                }
            },
            ya = {
                months3: ["қаң", "ақп", "нау", "Сәу", "мам", "мау", "шіл", "там", "қыр", "қаз", "қар", "жел"],
                months: ["қаңтар", "ақпан", "наурыз", "Сәуір", "мамыр", "маусым", "шілде", "тамыз", "қыркүйек", "қазан", "қараша", "желтоқсан"],
                cFooter: {
                    terms: "Қолдану ережелері",
                    policy: "Құпиялылық саясаты",
                    fop: "ФОП ГОМЕНЮК ВАЛЕНТИН СЕРГІЙОВИЧ 3583909578",
                    boneCountry: "SAMP: Ауыл өмірі",
                    main: "үй",
                    howToPlay: "Ойынды қалай бастау керек",
                    forum: "Форум",
                    shop: "Дүкен",
                    profile: "Жеке бөлме",
                    servers: "Біздің серверлер",
                    aboutUs: "Біз туралы",
                    vk: "ВКонтакте қауымдастығы",
                    youtube: "YouTube арнасы",
                    telegram: "Телеграмдағы арна",
                    boosty: "Boosty парақшасы"
                },
                pIndex: {
                    h1: "GTA SA-MP онлайн ойнаңыз",
                    headTitle: "SAMP: Arizona RP жүйесінде GTA San Andreas Multiplayer ойнаңыз 24/7 | Компьютерде және телефонда",
                    headDescription: "GTA SAMP ойынын GTA Online-дағы ең үлкен орыстілді қауымдастықпен ойнаңыз. Аризона RolePlay ойынында GTA San Andreas ойынын телефоннан немесе компьютерден бірнеше рет басу арқылы онлайн ойнауды бастаңыз!"
                },
                cServer: {
                    vk1: "Қауымдастық",
                    vk2: "ВКонтакте",
                    map: "мемлекеттік картасы",
                    players: "Ең ескі ойыншылар",
                    fractions: "Ұйымдардың құрамы"
                },
                cHomepagePresent: {
                    video1MetaName: "Қысқаша және анық!",
                    video1Title: "5 минут ішінде жобамызбен танысыңыз",
                    video2MetaName: "ARIZONA SAMP MOBILE немесе ARIZONA ROLE PLAY ойнауды қалай бастауға болады!",
                    video2Title: "Ойынды қалай бастау керектігін қараңыз",
                    country: "Ресей"
                },
                cFaqList: {
                    moreQuestions: "Қосымша сұрақтар"
                },
                nav: {
                    homepage: "үй",
                    howPlay: "Қалай ойнау керек",
                    news: "Жаңалықтар",
                    forum: "Форум",
                    shop: "Дүкен",
                    login: "Кіру үшін",
                    cabinet: "Кабинет"
                },
                slides: ["Қылмыстық әлемнің шыңын алыңыз", "Өміріңізді нөлден бастаңыз", "Виртуалды әлемде жеке өміріңізді құрыңыз", "Бизнесте үлкен табыс табыңыз", "Отаныңа қызмет етіп, қарақшылардан қорға", "Выбивай долги и бери крышу с бизнесов"],
                slideDescription: "SAMP-те сіз қалаған адам бола аласыз, ойлануға уақыт жоқ, бәрі өз қолыңызда!",
                startPlay: "Ойнауды бастаңыз",
                heads: ["GTA SA-MP онлайн ойнаңыз"],
                monitoring: "Бақылау",
                playingNow: "Қазір ойнап жатыр",
                showAllServers: "Барлық серверлерді көрсету",
                launcher: ["SAMP ойнауды бастау одан да оңай!", "Сумп ойнау ешқашан оңай болған емес", "Іске қосу құралын жүктеп алыңыз", "сүйікті ойыныңызды таңдаңыз", "ойнай бастаңыз", "SAMP жүктеп алыңыз", "Қол жетімді", "Іске қосу құралын пайдаланған кезде, 8-деңгейдегі ойыншылар әр PAYDAY сайын 1 азаматтық монета алады", "GTA San Andreas Online ойнауға арналған SAMP Launcher"],
                mobileLauncher: ["ТЕЛЕФОНДА SAMP ОЙНАҢЫЗ", "Біз Android смартфондарына арналған SAMP MOBILE іске қосқышын іске қостық. Кез келген адам бізге қазір қосыла алады. Ойынға Android ОЖ-ның 5.0-ден жоғары нұсқасы қажет, Arizona Mobile біздің веб-сайтта және Google Play-де жүктеп алуға болады.", "Жүктеп алу", "Смартфонда ойнаңыз"],
                altLauncher: ["БАЛАРМА ЖОЛ", "Сіз біздің жобада GTA SA:MP-тің<br>стандартты нұсқасында ойнай аласыз", "Жүктеп алыңыз және орнатыңыз", "Жүктеп алу", "Выберите и подключитесь", "СЕРВЕРГЕ", "Таңдау", "Компьютер", "Windows ОЖ", "Интернетке кіру", "Arizona Roleplay - балама бастау әдісі", "Arizona Roleplay - балама бастау әдісі - қадам 1", "Arizona Roleplay - балама бастау әдісі - қадам 2", "Arizona Roleplay - балама бастау әдісі - қадам 3"],
                playSampText: {
                    h: ["Аризона рөлдік ойын серверлерінде SAMP ойнаңыз!", "Arizona RP - SAMP тарихын бастаған жоба", "SAMP іске қосу құралы: барлық артықшылықтар бір бағдарламада"],
                    p: ["SAMP - танымал Grand Theft Auto: San Andreas ойынына арналған тегін көп ойыншы модификациясы. Ашық ойын әлеміне еніп, кез келген кейіпкер, әйгілі нақты адам сияқты сезініңіз немесе өзіңіздің ерекше жолыңызды таңдаңыз - кез келген оқиға сценарийлері осында қол жетімді.", "SA-MP 26 000-ға дейін желідегі пайдаланушыларды қабылдайды. Ойынның атмосферасына барынша ену және басқа ойыншылармен нақты өзара әрекеттесу және қарым-қатынас сезімі үшін дауыстық чат бар. Күшті серверлер тұрақты көп ойыншы қосылымына арналған - 17 мыңнан астам ойыншы үнемі желіде.", "Бізбен сіз өзіңіз таңдай аласыз: SAMP Launcher арқылы бірнеше рет басу арқылы немесе GTA SA:MP стандартты нұсқасында ойнаңыз. Ол үшін сізге компьютерде орнатылған GTA San Andreas және SAMP 0.3.7 клиенті қажет. Қосылу үшін жұмыс үстеліндегі белгішені басу арқылы мультиплеерді бастаңыз. «Login_Name» пішіміндегі «Аты» өрісінде логиніңізді көрсетіңіз, қалаған сервердің IP мекенжайын енгізіңіз және «Қосылу» түймесін басыңыз (ақ үшбұрышты жасыл шаршы)", "Бірінші сервер 2014 жылдың 23 тамызында ашылды. Қарқынды өсіп келе жатқан танымалдыққа байланысты болашақта тағы 25 сервер пайдалануға берілді. Сондықтан, 2017 жылға қарай Аризона Рөлдік ойыны әлі күнге дейін сақталған барлық белгілі SAMP жобаларының арасында келу саны бойынша жетекші орынға ие болды.", "Біздің Samp Role Play серверлері максималды шынайылықпен және шексіз мүмкіндіктермен тартады, өйткені әрбір ойыншы оқиғалар барысына өз түзетулерін енгізеді және бір жалпы әлемнің бөлігі болып табылады. Ойын мүмкіндік береді", "San Andreas Multiplayer ойынын кез келген ыңғайлы жолмен, соның ішінде ұялы телефонмен ойнаңыз - енді сіз сүйікті ойыныңызбен және достарыңызбен кез келген уақытта, кез келген жерде байланыста боласыз. Біз ойыншыларымыздың жайлылығын бағалаймыз, сондықтан компьютер мен смартфонға арналған серверлер мен SAMP функцияларын толығымен синхрондадық. SAMP Mobile сәтті сынақтан өтті және сізге осы ойын форматының барлық артықшылықтарын бағалауға мүмкіндік береді. Орнату үшін сізге Android 7.0 және одан жоғары операциялық жүйесі бар кез келген смартфон қажет.", "Samp іске қосу құралы ойынды кез келген құрылғыдан бірнеше рет басу арқылы жылдам іске қосуға көмектеседі. Орнатып, іске қосқаннан кейін экрандағы нұсқауларды орындаңыз және бірнеше минуттан кейін сіз ойнауға дайын боласыз. Егер сіз іске қосқышты пайдалансаңыз, қосымша бонустар алуға болады. Әр ЖАЛУ КҮНІ 8-деңгейден басталатын ойыншылар 1 азаматтық монета мен 10 мың Вирт алады. Бұл ереже компьютерге де, телефонға да іске қосу құралында жұмыс істейді. Google Play сайтында мобильді құрылғыға арналған samp жүктеп алуға болады. Arizona Mobile қолданбасы тегін және автоматты жаңартуларды қолдайды!", "Мобильді нұсқа сіздің опцияларыңызды айтарлықтай кеңейтеді. Кез келген жерден ойнаңыз: оқу арасындағы үзіліс кезінде, көлікте, көшеде, демалыста, ұзақ күту кезінде немесе ойнау үшін стационарлық компьютерде отыруға тілек немесе мүмкіндік болмаған кез келген басқа жағдайда.", "GTA San Andreas ойнауды бастау үшін қарапайым қадамдарды орындау керек"],
                    ul: ["үлкен ақшаның иісін сезініп, әлемнің шыңында болу қандай екенін сезініңіз", "соңғы үлгідегі керемет көліктерді сынап көріңіз - жеке сынақ жүргізу, баптау, апатқа ұшырау және жөндеу, өйткені ойында бәрі мүмкін", "қатал полицияның жолын таңдап, өлім алдында тұрыңыз, қылмыскерлерді үнемі қуып жүріңіз немесе қылмыстық топқа түсіп, мафияның басына көтеріліңіз", "сіз зұлым қылмыскердің рөлін сынап көруге және айналаңыздағылардың бәріне қорқыныш ұялатуға немесе халыққа көмектесу жолын таңдауға болады: сарбаз, өрт сөндіруші немесе такси жүргізушісі - Samp Role Play ойынының мағынасы - әрбір ойыншы маңызды, әділ. нақты әлемдегі сияқты", "көптеген ойын оқиғалары, миссиялар, квесттер, бизнестер және кез келген талғамға арналған ойын-сауық нақты-виртуалды әлемнің нақты атмосферасына толықтай ену арқылы"],
                    ul2: ["Сайттағы «Ойнауды бастау» түймесін басып, Іске қосу құралын орнатыңыз", "Ойынды компьютерде іске қосу үшін іске қосу белгішесін басып, лақап атыңызды енгізіп, ойынды бастау керек.", "Мобильді құрылғыда ойынды іске қосу құралы арқылы іске қосу ұқсас"]
                },
                news: ["Жаңалықтар", "Қосымша жаңалықтар", "Негізгі"],
                pAboutUs: {
                    headTitle: "SAMP: Arizona Role Play - Біз туралы, өткеніміз бен болашағымыз",
                    headDescription: "Arizona RP жобасы туралы - ойыншылар мен қауымдастықтың ең көп саны бар №1 үлгі серверлері",
                    h1: "Arizona RolePlay серверлерінде SAMP ойнаңыз!",
                    p1BeforeLink: "SA-MP — GTA San Andreas ойынының көп ойыншы нұсқасы, Arizona RP — GTA San Andreas ойынын онлайн ойнауға арналған жетекші сервер. SAMP-те сіз кез келген адам бола аласыз, баспанасыз бастайсыз, сіздің алдыңызда көптеген жолдар ашылады: есірткі сатушыдан мафия басшысына дейін, қарапайым сарбаздан немесе полиция қызметкерінен бас қолбасшыға дейін барыңыз - SAMP RP серверлерінің мағынасы - бәрі байланысты. тек саған! Осылайша, сіз кез келген, тіпті ең батыл идеяларыңызды жүзеге асыруға тырыса аласыз, өйткені Arizona Games әзірлеу тобы GTA San Andreas онлайн ойынына көбірек қызықты рөлдік мүмкіндіктерді қосуда. Сонымен қатар, Arizona RolePlay Samp RP серверлерінде ойнау біз төменде талқылайтын рөлдердің, топтардың, бандалардың, миссиялардың, функциялардың және басқа мүмкіндіктердің көптігімен ғана емес, сонымен қатар бұл барлық уақыттағы ең үлкен samp жобасы болғандықтан да қызықты. 13 мың ойыншыға дейін онлайн рекорд! Ал ойнауды бастау үшін сізге сәйкес GTA SA құрастыруын, жақсы крек және сәйкес SAMP 0.3.7 клиентін іздеудің қажеті жоқ, SAMP серверінің IP мекенжайларын іздеудің қажеті жоқ, тек жүктеп алу керек. SAMP LAUNCHER құрылғысын пайдаланып, ондағы нұсқауларды орындаңыз. «Ескі стильде» ойнауды ұнататындар үшін бұл да мүмкін: сізге GTA San Andreas жүктеп алу, samp 0.3.7 жүктеп алу, енгізу қажет.",
                    p1Link: "Біздің серверлердің IP мекенжайлары",
                    p1AfterLink: ", қосылыңыз және ойнаңыз! Біздің үлгі серверлер тізімі:",
                    p2BeforeLink: "Неліктен Аризона рөлдік ойынын таңдау керек? Өйткені SAMP нақты өмірге еліктеу болып табылады, мұнда көптеген мамандықтар, тапсырмалар, жұмыс орындары, квесттер, жылжымайтын мүлік, автокөліктер, жұмыс жабдықтары, әуе көлігі ұсынылған. Дегенмен, көптеген жобалар Аризона РП сияқты молшылықпен мақтана алмайды. 2017 жылдан бастап Аризона RP серверлері барлық үлгілік жобалар арасында ең танымал болды, мұны дәлелдейді.",
                    p2Link: "шыңы онлайн жобалар кестесі SA:MP",
                    p2AfterLink: ". Көшбасшылықты өз қолымызға ала отырып, біз өзімізге үздік болуға міндеттендік және осы деңгейді әр мүмкіндікте жоғарылатып, жалықпай ұстандық. Осылайша, 2020 жылы біз 12 және 13 серверлерін ашу арқылы GTA San Andreas Multiplayer ойынының барлық рекордтарын жаңарттық, сонымен қатар әрқайсысы 1000 ойыншыны орналастыра отырып, бір уақытта онлайн режимінде 13 мыңға жетті! Бәсекелес жобалардың ешқайсысы да, Diamond RP де, Advance RP де, Evolve RP де, алдыңғы рекордшы Samp-Rp де сізге Аризона ойындары сияқты қауымдастықты ұсына алмайды. Бірақ біз тек сандармен және жазбалармен мақтана алмаймыз, өйткені бірінші кезекте бізбен ойнау қызықты, өйткені бізде жақсартулардың, кәсіптердің, квесттердің, тапсырмалардың, сюжеттердің, жабдықтардың, ойын-сауық нысандарының және басқа да толықтырулардың ең көп саны бар. Біздің серверлер дыбыстық чатты қолдайды, бұл ойыншылар арасындағы байланысты одан да қызықты етіп, өзара әрекеттесу үшін көбірек мүмкіндіктер ашады. Негізгі және ең күтілетін жаңалық - Sump Mobile, атап айтқанда қолдауы бар мобильді қосқышты іске қосу.",
                    h2: "Контактілер",
                    p3LinkForum: "Форум",
                    p3LinkVK: "ВКонтакте қауымдастығы",
                    p3LinkYouTube: "YouTube арнасы",
                    p3LinkTelegram: "Телеграмдағы арна",
                    p3LinkBoosty: "Boosty парақшасы"
                },
                p404: {
                    h1: "Қате 404",
                    content: "Бет табылмады"
                },
                pChangePassword: {
                    title: "Құпия сөзді өзгерту",
                    headTitle: "Құпия сөзді өзгерту - Жеке кабинет"
                },
                cChangePasswordForm: {
                    currentPassword: "Ағымдағы Құпия Сөз",
                    newPassword: "Жаңа пароль",
                    newPasswordOnceMore: "Қайтадан жаңа құпия сөз",
                    btnChange: "Өзгерту",
                    alertSuccess: "Пароль успешно изменен",
                    enterPassword: "құпия сөзді еңгізіңіз",
                    passwordMismatch: "Құпия сөз сәйкес келмеді"
                },
                pFaq: {
                    headTitle: "SAMP: FAQ - Жиі қойылатын сұрақтар - Arizona Role Play",
                    headDescription: "SAMP - қолымыздан келгенше көмектесеміз!"
                },
                pFindGamer: {
                    headTitle: "Ойыншы іздеу"
                },
                cFindGamerForm: {
                    title: "Ойыншы іздеу",
                    username: "Ник",
                    gameUsername: "Ойынның лақап аты",
                    server: "Сервер",
                    find: "Табу",
                    status: "Күй",
                    offline: "Желіде емес",
                    online: "Қазір ойында",
                    level: "Деңгей",
                    phone: "Телефон нөмірі",
                    levelVip: "VIP деңгейі",
                    cash: "Қолма-қол ақша",
                    bank: "Үнемдеу",
                    deposit: "Депозит мәртебесі",
                    jobName: "Жұмыс",
                    orgName: "Ұйымдастыру",
                    gameServer: "ойын сервері",
                    chooseServer: "Серверді таңдаңыз",
                    enterUsername: "Ойыншының лақап атын енгізіңіз"
                },
                pLogin: {
                    h1: "Авторизация",
                    btnEnter: "Кіру үшін",
                    vk: "ВКонтакте арқылы кіріңіз",
                    recoveryPassword: "Мен парольді ұмытып қалдым",
                    headTitle: "Авторизация - Жеке кабинет"
                },
                cAuthForm: {
                    username: "Лақап аты",
                    password: "Құпия сөз",
                    server: "Сервер",
                    authEmail: "Есептік жазбада екі факторлы аутентификация қосылған. Растау коды сізге электрондық пошта арқылы жіберілді. Спам қалтаңызды тексеруді ұмытпаңыз",
                    authTotp: "Есептік жазбада екі факторлы аутентификация қосылған. Қолданбадан растау кодын енгізіңіз.",
                    twoFactorCode: "Тексеру коды",
                    gameServer: "ойын сервері",
                    errServer: "Серверді таңдаңыз",
                    errUsername: "Ойынның лақап атын енгізіңіз",
                    errPassword: "құпия сөзді еңгізіңіз"
                },
                pRecoveryPassword: {
                    headTitle: "Құпия сөзді қалпына келтіру - Жеке кабинет"
                },
                cRestorePasswordForm: {
                    title: "Жүйеге кіре алмайсыз ба?",
                    subtitle: "Электрондық поштаңызды енгізіңіз. Біз сізге құпия сөзді қалпына келтіру нұсқауларын жібереміз.",
                    server: "Сервер",
                    restore: "Қалпына келтіру",
                    instruction: "Жалғастыру туралы нұсқаулар бар электрондық хат жіберілді.",
                    gameServer: "ойын сервері",
                    errServer: "Серверді таңдаңыз",
                    errEmail: "Электрондық поштаны енгізіңіз"
                },
                pResetBankCode: {
                    text: "Банк картаңыздың PIN коды «123456» мәніне орнатылды, оны ойында өзгертуді ұмытпаңыз.",
                    headTitle: "Банк картасының құпия сөзін қалпына келтіру - Жеке кабинет"
                },
                pRestorePassword: {
                    text1: "Есептік жазбаңыздың құпия сөзін өзгерттік. Сіздің жаңа құпия сөзіңіз:",
                    text2: "Скриншот жасаңыз немесе құпия сөзді жазып алыңыз. Сіз оны есептік жазбаңызда немесе ойында өзгерте аласыз.",
                    headTitle: "Жаңа құпия сөз - Жеке кабинет"
                },
                pServers: {
                    h1: "Серверлер SAMP Arizona Role Play",
                    headTitle: "SAMP: Серверлер GTA SA-MP — Arizona Role Play",
                    headDescription: "Arizona RP онлайн GTA San Andreas ойнауға арналған SA-MP серверлері. Серверді таңдап, RuNet-тегі ең үлкен SAMP жобасында ойнауды бастаңыз!",
                    breadcrumbs: "Серверлер ⏩ № ➊"
                },
                pShop: {
                    h1: "Донат Arizona Role Play",
                    title: "Арнайы ұсыныстар",
                    cash: "қолма-қол ақшамен",
                    buyFor: "үшін сатып алыңыз",
                    economy: "Пайда",
                    number: "№",
                    pack1Alt: "арнайы пакет 1 Arizona RP",
                    pack1Title: "<span>«Бастауыш іздеуші»</span><br>параметрін орнату",
                    pack2Alt: "арнайы пакет 2 Arizona RP",
                    pack2Title: "<span>«Бастауыш магнат»</span><br>жинағы",
                    pack2Bonus: "<span>4 үй мен кәсіпорын</span> меншігінде",
                    packStartName: "«Бастапқы капитал» пакеті",
                    packVipName: "Мәңгілік<br>Премиум VIP",
                    packPhoneName: "iPhone X және<br>Samsung Galaxy 10",
                    packLicenseName: "Барлық лицензиялар<br>5 жылға",
                    packNimbName: "Нимбус, дүңгіршек<br>және су құйғыш",
                    packAddVipName: "ADD VIP<br>30 күн",
                    packAmuletName: "20 ұнтақтайтын амулет",
                    packStoneName: "100 құйма тас",
                    special1Name: "«Бастауыш іздеуші» параметрін орнату",
                    premiumVip: "Премиум VIP",
                    premiumMaverick: "Премиум Maverick",
                    special2Name: "«Бастауыш магнат» жинағы",
                    special2Div: "4 үй мен кәсіпорынның меншігі",
                    special3Name: "«Бастапқы капитал» пакеті",
                    special4Name: "«Бай» пакеті",
                    special5Name: "«Үлкен қор» пакеті",
                    special6Name: "Мәңгілік PREMIUM VIP",
                    special7Name: "iPhone X және Samsung Galaxy 10",
                    special8Name: "Барлық лицензиялар 5 жылға",
                    special9Name: "Нимбус, дүңгіршек<br>және су құйғыш",
                    special10Name: "ADD VIP 30 КҮН",
                    special11Name: "20 ұнтақтайтын амулет",
                    special12Name: "100 құйма тас",
                    orderTitle: "Деректерді тексеру",
                    orderAccount: "Шот нөмірі",
                    orderUsername: "Ник",
                    orderServer: "Сервер",
                    orderTotal: "сомасы",
                    orderCards: "Карталар",
                    orderLogoQiwi: "QIWI логотипі.",
                    orderLimit: "бастап қол жетімді",
                    orderUaCards: "Украин карталары",
                    orderAllWays: "Барлық жолдар",
                    orderTermsText: "Сатып алуды жалғастыру арқылы сіз келісесіз",
                    orderTermsLink: "пайдаланушы келісімі",
                    authBeforeBuy: "Сатып алудан бұрын жүйеге кіруіңіз керек!",
                    headTitle: "Аризона Донат: AZ Coin | Arizona RP ресми сайты",
                    headDescription: "Arizona RP есептік жазбаңызға тек ресми веб-сайтта қайырымдылық жасаңыз - arizona-rp.com AZ монетасын сатып алу оңай: лақап атыңызды және соманы енгізіңіз, серверді таңдап, төлеу түймесін басыңыз!"
                },
                cShopForm: {
                    username: "Лақап аты",
                    server: "Сервер",
                    total: "сомасы",
                    calculator: "Карталар",
                    pay: "Төлеу",
                    get: "Алу",
                    pay2: "Төлеу",
                    gameServer: "ойын сервері",
                    errServer: "Серверді таңдаңыз",
                    errUsername: "Ойынның лақап атын енгізіңіз",
                    errTotal: "соманы енгізіңіз",
                    errLimit: "Ең көп сома 1 млн"
                },
                pRating_type_serverName: {
                    number: "№",
                    player: "Ойыншы",
                    level: "Деңгей",
                    status: "Күй",
                    cost: "Бағасы",
                    owner: "Меншік иесі",
                    name: "Аты",
                    online: "Қазір ойнап жатыр",
                    offline: "Желіде емес",
                    headTitle: "Рейтинги Arizona Roleplay"
                },
                pProfile: {
                    desc: "Деңгей",
                    cashBalance: "Қолма-қол ақшаның қалдығы.",
                    cash: "Қолма-қол ақша",
                    bankBalance: "Банк балансы.",
                    bankBalance2: "Банк шотындағы қалдық",
                    coin: "Аризона монеталары.",
                    deposit: "Депозит.",
                    depositState: "Депозит мәртебесі",
                    euro: "Еуро.",
                    euro2: "Еуро",
                    bitcoin: "Биткоин.",
                    bitcoin2: "Биткоин",
                    playOnServer: "Серверде ойнау",
                    menuVK: "ВК парақшасына сілтеме",
                    menuBankCode: "Банк картасының кодын қалпына келтіріңіз",
                    menuAccount: "Есептік жазбаны толтыру",
                    menuPassword: "Құпия сөзді өзгерту",
                    menuPlayer: "Ойыншыны табыңыз",
                    menuLogout: "Шығу",
                    menuControl: "Бақылау",
                    accountInfo: "Аккаунт туралы ақпарат",
                    accountOnline: "Қазір ойында",
                    accountOffline: "Өшірілген",
                    authEmail: "Екі факторлы аутентификация (пошта)",
                    authTotp: "Екі факторлы аутентификация (TOTP)",
                    accountOn: "Қосылған",
                    accountOff: "Өшірілген",
                    switchOff: "отключить",
                    switchOn: "қосу",
                    totpP1: "Смартфоныңызға Google Authenticator немесе басқа екі факторлы аутентификация қолданбасын орнатыңыз",
                    totpP2: "Қолданбаға кіруді тіркеу үшін келесі QR кодын сканерлеңіз",
                    totpP3: "Немесе кіру кілтін қолмен енгізіңіз",
                    totpP4: "Қосуды аяқтау үшін төмендегі пішінге қолданбадағы бір реттік кодты енгізіңіз",
                    totpP5: "Ажыратуды аяқтау үшін төмендегі пішінге қолданбадан бір реттік кодты енгізіңіз",
                    checkCode: "Тексеру коды",
                    send: "Жіберу",
                    phone: "Телефон нөмірі",
                    account: "Жеке кабинет",
                    job: "Жұмыс",
                    company: "Ұйымдастыру",
                    rank: "Дәреже",
                    inventory: "Менің түгендеуім",
                    force: "Күш",
                    musculature: "Бұлшықет",
                    endurance: "Төзімділік",
                    headTitle: "Жеке бөлме - Arizona Roleplay",
                    notifyAccountChecking: "Есептік жазбаңыз тексерілуде..",
                    notifyEmail: "Электрондық поштаңызға келесі қадамдары бар электрондық хат жіберілді.",
                    notifyRequestOn: "Өтінішті тарту..",
                    notifyAccessDataReady: "Деректерге қол жеткізу дайын",
                    notifyWrongCode: "Қате код",
                    notifySendingCode: "Код жіберілуде..",
                    notifyCodeAccepted: "Код қабылданды."
                },
                cProfile_FightStyle: {
                    studied: "Оқыған",
                    nonstudied: "Зерттелмеген"
                },
                cProfile_Skills: {
                    otherSkills: "Басқа дағдылар",
                    carSkill: "Жүргізу дағдысы",
                    dSkill: "Жүк көлігі шеберлігі",
                    taxiSkill: "Скиль<br>такси жүргізушісі",
                    productJobSkill: "Тамақ жеткізуші",
                    points: "ұпай"
                },
                cProfile_WeaponSkills: {
                    title: "Қару дағдылары"
                },
                cProfile_Upgrades: {
                    title: "Жақсартулар",
                    feFinderLabel: "Шумахер",
                    feFinderDesc: "Осы дағдымен сіздің көлігіңіз соқтығысқанда тоқтап қалмайды",
                    unlimCarSkillLabel: "Мәңгілік Car Skill",
                    unlimCarSkillDesc: "Сіздің жүргізу шеберлігіңіз төмендемейді",
                    plancetLabel: "Планшет",
                    plancetDesc: "Картаның кез келген жерінен редакторға хабарландыру жіберуге болады",
                    moreLabel: "Бизнесмен",
                    moreDesc: "Жаңарту бес кәсіпорынды иеленуге мүмкіндік береді",
                    packLabel: "Freeloader",
                    packDesc: "Сіздің кейіпкеріңіз жолы болып, 2 есе аз салық төлейді",
                    houseLabel: "Көбірек жылжымайтын мүлік",
                    houseDesc: "Иеленуге болады",
                    houseDesc2: "Сіз үйлерге ие бола аласыз",
                    antiTaxLabel: "Салықсыз",
                    antiTaxDesc: "Банктер мен банкоматтарда комиссия төлеудің қажеті жоқ",
                    haveTwoFarmLabel: "2 шаруашылық",
                    haveTwoFarmDesc: "2 фермаға ие болу мүмкіндігі"
                },
                cProfile_FightStyles: {
                    title: "Ұрыс стильдері",
                    Boxing: "Бокс стилі",
                    Kungfu: "Кунг-фу стилі",
                    Kneehead: "Кикбоксинг стилі",
                    GrabKick: "Соққы",
                    Elbow: "Ұстап, ұрады"
                },
                pProfile_inventory: {
                    h1: "Менің түгендеуім",
                    slot: "Слот",
                    headTitle: "Менің түгендеуім - Arizona Roleplay"
                },
                pPosts: {
                    news: "Жаңалықтар",
                    main: "Негізгі",
                    headTitle: "SAMP: Жаңалықтар Arizona Role Play - жаңартулар, жарнамалар, маңызды хабарлар - 1-бет",
                    headDescription: "Arizona RP жобасының жаңалықтары - мұнда сіз SA-MP туралы соңғы ақпаратты көзден таба аласыз!"
                },
                pPosts_id: {
                    address: "Ресей",
                    comments: "Пікірлер",
                    nocomments: "Түсіндірмесіз..",
                    leavecomments: "Тек рұқсаты бар ойыншы ғана пікір қалдыра алады",
                    news: "Жаңалықтар",
                    commentdeleted: "Пікір жойылды"
                },
                cPostCommentForm: {
                    enterComment: "Пікір енгізіңіз",
                    add: "Қосу..",
                    send: "Жіберу",
                    enterMessage: "Хабарламаңызды енгізіңіз"
                },
                cShowVideoMixin: {
                    close: "Жабық"
                },
                pMap__serverName: {
                    stateMap: "Мемлекеттік картасы",
                    useScroll: "Бүкіл картаны көру үшін көлденең айналдыруды пайдаланыңыз."
                },
                pFractions_serverName: {
                    orgs: "Ұйымдар",
                    useScroll: "Бүкіл картаны көру үшін көлденең айналдыруды пайдаланыңыз."
                },
                pFractions_serverName_fractionId: {
                    number: "№",
                    player: "Ойыншы",
                    rank: "Дәреже",
                    status: "Күй",
                    leader: "көшбасшы",
                    orgs: "Ұйымдар",
                    online: "Қазір ойнап жатыр",
                    offline: "Желіде емес"
                },
                pDocument_terms: {
                    title: "Қолдану ережелері",
                    headTitle: "Қолдану ережелері - Arizona Roleplay"
                },
                pDocument_policy: {
                    title: "Құпиялылық саясаты",
                    headTitle: "Құпиялылық саясаты - Arizona Roleplay"
                },
                pControl_donateRatio: {
                    h1: "Толықтыру коэффициенттері",
                    forAll: "Барлығына",
                    save: "Сақтау",
                    headTitle: "Толықтыру коэффициенттері - Arizona Roleplay",
                    loadFail: "Жүктеу қатесі",
                    savedForAll: "Сақталған (барлығы үшін)",
                    notSavedForAll: "Сақталмаған (барлығы үшін)",
                    saved: "Сақталған",
                    notsaved: "Сақталмаған"
                },
                pVkontakte: {
                    headTitle: "ВКонтакте арқылы кіру - Arizona Roleplay",
                    loading: "Жүктелуде..",
                    notifyRepeatAuth: "Қате орын алды. Авторизацияны қайталап көріңіз"
                },
                pVkontakteAdd: {
                    headTitle: "ВКонтакте арқылы кіру - Arizona Roleplay",
                    loading: "Жүктелуде..",
                    notifyRepeat: "Қате орын алды. Қайтадан байқап көріңіз",
                    notifyAccountLinked: "Есептік жазба сіздің парағыңызға байланысты."
                },
                cRates: {
                    servers: "SAMP серверлері"
                }
            },
            va = {
                months3: ["yan", "fev", "mar", "apr", "may", "iyu", "iyu", "avg", "sen", "okt", "noy", "dek"],
                months: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
                cFooter: {
                    terms: "Foydalanish shartlari",
                    policy: "Maxfiylik siyosati",
                    fop: "ФОП ГОМЕНЮК ВАЛЕНТИН СЕРГІЙОВИЧ 3583909578",
                    boneCountry: "SAMP: Qishloq hayoti",
                    main: "Uy",
                    howToPlay: "O'yinni qanday boshlash kerak",
                    forum: "Forum",
                    shop: "Do'kon",
                    profile: "Shaxsiy kabinet",
                    servers: "Bizning serverlarimiz",
                    aboutUs: "Biz haqimizda",
                    vk: "VKontakte hamjamiyati",
                    youtube: "YouTube kanali",
                    telegram: "Telegramdagi kanal",
                    boosty: "Boosty sahifasi"
                },
                pIndex: {
                    h1: "GTA SA-MP-ni onlayn o'ynang",
                    headTitle: "SAMP: Arizona RP da GTA San Andreas Multiplayer o'ynang | 24/7 | Kompyuterda va telefonda",
                    headDescription: "GTA Online-dagi eng katta rusiyzabon hamjamiyat bilan GTA SAMP o'ynang. Hoziroq bir necha marta bosish orqali telefoningiz yoki kompyuteringizdan GTA San Andreas-ni Arizona RolePlay-da onlayn o'ynashni boshlang!"
                },
                cServer: {
                    vk1: "Jamiyat",
                    vk2: "VKontakte",
                    map: "Davlat xaritasi",
                    players: "Eng keksa futbolchilar",
                    fractions: "Tashkilotlar tarkibi"
                },
                cHomepagePresent: {
                    video1MetaName: "Qisqa va aniq!",
                    video1Title: "5 daqiqada loyihamiz bilan tanishing",
                    video2MetaName: "ARIZONA SAMP MOBILE yoki ARIZONA ROLE PLAY o'ynashni qanday boshlash kerak!",
                    video2Title: "O'yinni qanday boshlashni ko'ring",
                    country: "Rossiya"
                },
                cFaqList: {
                    moreQuestions: "Yana savollar"
                },
                nav: {
                    homepage: "Uy",
                    howPlay: "Qanday o'ynash kerak",
                    news: "Yangiliklar",
                    forum: "Forum",
                    shop: "Do'kon",
                    login: "Kirish uchun",
                    cabinet: "Kabinet"
                },
                slides: ["Jinoiy dunyoning eng yuqori pog'onasini egallab oling", "Hayotingizni noldan boshlang", "Shaxsiy hayotingizni virtual dunyoda yarating", "Biznesda katta boylik toping", "Vataningizga xizmat qiling va qaroqchilardan himoya qiling", "Qarzlarni yo'q qiling va biznesning tomini olib tashlang"],
                slideDescription: "SAMPda siz xohlagan odamga aylanishingiz mumkin, o'ylashga vaqt yo'q, hammasi o'z qo'lingizda!",
                startPlay: "O'ynashni boshlang",
                heads: ["GTA SA-MP-ni onlayn o'ynang"],
                monitoring: "Monitoring",
                playingNow: "Hozir oʻynayapti",
                showAllServers: "Barcha serverlarni ko'rsatish",
                launcher: ["SAMP o'ynashni boshlash yanada osonroq!", "Sump o'ynash hech qachon bunchalik oson bo'lmagan", "Yuklab olish dasturi", "sevimli o'yiningizni tanlang", "o'ynashni boshlang", "SAMP-ni yuklab oling", "Mavjud", "Launcherdan foydalanganda, 8-darajadagi o'yinchilar har PAYDAYda 1 ta fuqarolik tanga oladilar", "GTA San Andreas Online o'ynash uchun SAMP Launcher"],
                mobileLauncher: ["TELEFONINGIZDA SAMP O'YNAING", "Biz Android smartfonlari uchun SAMP MOBILE ishga tushirgichimizni ishga tushirdik. Har kim hozir bizga qo'shilishi mumkin. O'yin Android OS ning 5.0 dan yuqori versiyasini talab qiladi, Arizona Mobile bizning veb-saytimizda va Google Play-da yuklab olish mumkin", "Yuklab olish", "Smartfoningizda o'ynang"],
                altLauncher: ["ALTERNATİV YO'L", "Siz bizning loyihamizda GTA SA:MP ning<br>standart versiyasida o'ynashingiz mumkin", "Yuklab oling va o'rnating", "Yuklab olish", "Tanlang va ulaning", "SERVERGA", "Tanlang", "Kompyuter", "Windows operatsion tizimi", "Internetga kirish", "Arizona Roleplay - muqobil boshlash usuli", "Arizona Roleplay - muqobil boshlash usuli - qadam 1", "Arizona Roleplay - muqobil boshlash usuli - qadam 2", "Arizona Roleplay - muqobil boshlash usuli - qadam 3"],
                playSampText: {
                    h: ["Arizona Role Play serverlarida SAMP o'ynang!", "Arizona RP - SAMP tarixini boshlagan loyiha", "SAMP ishga tushirgichi: barcha imtiyozlar bitta dasturda"],
                    p: ["SAMP mashhur Grand Theft Auto: San Andreas o'yini uchun bepul multiplayer modifikatsiyasi. O'zingizni ochiq o'yin dunyosiga kiriting va o'zingizni har qanday qahramon, taniqli haqiqiy shaxs kabi his eting yoki o'zingizning maxsus yo'lingizni tanlang - bu erda har qanday voqea stsenariylari mavjud.", "SA-MP 26 000 tagacha onlayn foydalanuvchilarni o'z ichiga oladi. O'yin atmosferasiga maksimal darajada singib ketish va boshqa o'yinchilar bilan haqiqiy o'zaro ta'sir va aloqa hissi uchun ovozli chat mavjud. Kuchli serverlar barqaror multiplayer ulanishi uchun mo'ljallangan - 17 mingdan ortiq o'yinchilar doimiy ravishda onlayn.", 'Biz bilan siz o\'zingiz uchun tanlashingiz mumkin: SAMP Launcher orqali bir necha marta bosish yoki GTA SA:MP ning standart versiyasida o\'ynang. Buning uchun sizga shaxsiy kompyuteringizda o\'rnatilgan GTA San Andreas va SAMP 0.3.7 mijozi kerak bo\'ladi. Ulanish uchun ish stolidagi belgini bosish orqali multiplayerni ishga tushiring. "Login_Name" formatidagi "Ism" maydoniga loginingizni kiriting, kerakli serverning IP manzilini kiriting va "Ulanish" tugmasini bosing (oq uchburchak bilan yashil kvadrat)', "Birinchi server 2014-yil 23-avgustda ochilgan. Tez o'sib borayotgan mashhurlik tufayli kelajakda yana 25 ta server ishga tushirildi. Shu sababli, 2017 yilga kelib, Arizona Role Play hozirgacha saqlanib qolgan barcha ma'lum SAMP loyihalari orasida ishtirok etish bo'yicha etakchi o'rinni egalladi.", "Bizning Samp Role Play serverlarimiz maksimal realizm va cheksiz imkoniyatlar bilan o'ziga jalb qiladi, chunki har bir o'yinchi voqealar rivojiga o'z tuzatishlarini kiritadi va bitta umumiy dunyoning bir qismidir. O'yin imkon beradi", "San Andreas Multiplayerni istalgan qulay usulda, shu jumladan mobil telefonda o'ynang - endi siz sevimli o'yiningiz va do'stlaringiz bilan istalgan vaqtda, istalgan joyda aloqada bo'lasiz. Biz o'yinchilarimizning qulayligini qadrlaymiz, shuning uchun biz kompyuter va smartfon uchun serverlar va SAMP funksiyalarini to'liq sinxronlashtirdik. SAMP Mobile muvaffaqiyatli sinovdan o'tdi va sizga ushbu o'yin formatining barcha afzalliklarini baholash imkoniyatini beradi. O'rnatish uchun sizga Android 7.0 va undan yuqori operatsion tizimga ega har qanday smartfon kerak bo'ladi.", "Samp launcher bir necha marta bosish bilan istalgan qurilmadan o'yinni tezda ishga tushirishga yordam beradi. O'rnatish va ishga tushirilgandan so'ng, ekrandagi ko'rsatmalarga amal qiling va bir necha daqiqadan so'ng siz o'ynashga tayyor bo'lasiz. Agar siz ishga tushirgichdan foydalansangiz, qo'shimcha bonuslarga ega bo'lishingiz mumkin. Har PAYDAY, 8-darajadan boshlanadigan o'yinchilar 1 fuqarolik tanga va 10 ming Wirth oladi. Ushbu qoida kompyuter uchun ham, telefon uchun ham ishga tushirgichda ishlaydi. Google Play-da mobil qurilma uchun sampni yuklab olishingiz mumkin. Arizona Mobile ilovasi bepul va avtomatik yangilanishlarni qo'llab-quvvatlaydi!", "Mobil versiya sizning imkoniyatlaringizni sezilarli darajada kengaytiradi. Istalgan joydan o'ynang: o'qish oralig'idagi tanaffuslar paytida, transportda sayohat qilishda, ko'chada, ta'tilda, uzoq kutish paytida yoki statsionar kompyuterda o'ynash istagi yoki imkoniyati bo'lmagan boshqa vaziyatlarda.", "GTA San Andreas o'ynashni boshlash uchun siz oddiy qadamlarni bajarishingiz kerak"],
                    ul: ["katta pulni hidlang va dunyoning tepasida bo'lish qanday ekanligini his qiling", "Eng so'nggi rusumdagi ajoyib mashinalarni sinab ko'ring - shaxsiy test drayverini o'tkazing, sozlang, avariya va ta'mirlash, chunki o'yinda hamma narsa mumkin", "qattiq politsiya yo'lini tanlang va o'lim yoqasida bo'ling, doimiy ravishda jinoyatchilarni ta'qib qiling yoki jinoiy guruhga qo'shiling va mafiya boshiga ko'taring.", "siz yovuz jinoyatchi rolini sinab ko'rishingiz va atrofingizdagi barchani qo'rquvga solishingiz yoki aholiga yordam berish yo'lini tanlashingiz mumkin: askar, o't o'chiruvchi yoki taksi haydovchisi - Samp Role Play-ning ma'nosi shundaki, har bir o'yinchi muhim, shunchaki haqiqiy dunyoda bo'lgani kabi", "real-virtual dunyoning o'ziga xos atmosferasiga to'liq sho'ng'ish bilan har qanday lazzat uchun ko'plab o'yin voqealari, topshiriqlar, kvestlar, biznes va o'yin-kulgilar"],
                    ul2: ["Saytdagi \"O'ynashni boshlash\" tugmasini bosing va Launcherni o'rnating", "O'yinni kompyuterda ishga tushirish uchun siz ishga tushirgich belgisini bosishingiz, taxallusingizni kiritishingiz va o'yinni boshlashingiz kerak.", "Mobil qurilmada ishga tushirgich yordamida o'yinni ishga tushirish shunga o'xshash"]
                },
                news: ["Yangiliklar", "Ko'proq yangiliklar", "Asosiy"],
                pAboutUs: {
                    headTitle: "SAMP: Arizona Rol O'yini - Biz haqimizda, o'tmishimiz va kelajagimiz",
                    headDescription: "Arizona RP loyihasi haqida - eng ko'p o'yinchilar va hamjamiyatga ega bo'lgan №1 serverlar",
                    h1: "Arizona RolePlay serverlarida SAMP o'ynang!",
                    p1BeforeLink: "SA-MP GTA San Andreasning multiplayer versiyasidir, Arizona RP esa GTA San Andresni onlayn oʻynash uchun yetakchi samp server hisoblanadi. SAMP-da siz uysizdan boshlab har kim bo'lishingiz mumkin, oldingizda ko'p yo'llar ochiladi: giyohvand moddalar sotuvchisidan mafiya boshlig'igacha, oddiy askar yoki politsiyachidan bosh qo'mondongacha - SAMP RP serverlarining ma'nosi shundaki, hamma narsa unga bog'liq. faqat sizga! Shunday qilib, siz o'zingizning har qanday, hatto eng jasoratli g'oyalaringizni amalga oshirishga harakat qilishingiz mumkin, chunki Arizona Games ishlab chiqish jamoasi GTA San Andreas onlayn-ga tobora ko'proq qiziqarli rol o'ynash xususiyatlarini qo'shmoqda. Bundan tashqari, Arizona RolePlay Samp RP serverlarida o'ynash nafaqat biz quyida muhokama qiladigan juda ko'p rollar, guruhlar, to'dalar, missiyalar, funktsiyalar va boshqa xususiyatlar tufayli qiziqarli, balki bu barcha davrlardagi eng katta samp loyihasi bo'lgani uchun ham qiziqarli. 13 ming o'yinchiga qadar onlayn rekord! Va o'ynashni boshlash uchun siz mos GTA SA tuzilmasi, yaxshi yoriq va mos SAMP 0.3.7 mijozini izlashingiz shart emas, SAMP server IP manzillarini qidirishingiz shart emas, shunchaki yuklab olishingiz kerak. SAMP LAUNCHER-ni ishlating va undagi ko'rsatmalarga amal qiling. \"Eski uslubda\" o'ynashni yaxshi ko'radiganlar uchun bu ham mumkin: siz GTA San Andreasni yuklab olishingiz, 0.3.7 sampni yuklab olishingiz, kiritishingiz kerak.",
                    p1Link: "Serverlarimizning IP manzillari",
                    p1AfterLink: ", ulaning va o'ynang! Bizning namuna serverlarimiz ro'yxati:",
                    p2BeforeLink: "Nima uchun Arizona rolini tanlash kerak? Chunki SAMP ko'p sonli kasblar, vazifalar, ish o'rinlari, kvestlar, ko'chmas mulk, avtomobillar, ishchi jihozlar, havo transporti taqdim etilgan haqiqiy hayotga taqliddir. Biroq, ko'plab loyihalar Arizona RP kabi mo'l-ko'lchilik bilan maqtana olmaydi. 2017 yildan beri Arizona RP serverlari barcha namunaviy loyihalar orasida eng ommabop bo'lib kelgan, buni tasdiqlaydi.",
                    p2Link: "Peak onlayn loyihalar jadvali SA:MP",
                    p2AfterLink: ". Peshqadamlikni qo'lga olib, biz o'zimizga eng zo'r bo'lishga va tinimsiz ushbu darajani kuzatib borishga va har qanday imkoniyatda uni ko'tarishga qaror qildik. Shunday qilib, 2020 yilda biz GTA San Andreas Multiplayer-ning barcha rekordlarini yangiladik, 12 va 13-serverlarni ochib, har birida 1000 tagacha o'yinchini joylashtirdik va bir vaqtning o'zida onlaynda 13 mingga yetdik! Raqobatchi loyihalarning hech biri, na Diamond RP, na Advance RP, na Evolve RP, na avvalgi samp-rekord egasi Samp-Rp sizga Arizona Games kabi hamjamiyatni taklif qila olmaydi. Ammo biz nafaqat raqamlar va rekordlar bilan maqtanishimiz mumkin, chunki birinchi navbatda biz bilan o'ynash qiziq, chunki bizda eng ko'p yaxshilanishlar, kasblar, kvestlar, vazifalar, uchastkalar, jihozlar, ko'ngilochar ob'ektlar va boshqa qo'shimchalar mavjud. Bizning serverlarimiz ovozli suhbatni qo'llab-quvvatlaydi, bu esa o'yinchilar o'rtasidagi muloqotni yanada qiziqarli qiladi va o'zaro muloqot qilish uchun tobora ko'proq imkoniyatlar ochadi. Asosiy va eng kutilgan yangilik - bu Sump Mobile-ning ishga tushirilishi, ya'ni qo'llab-quvvatlovchi mobil ishga tushirgich.",
                    h2: "Kontaktlar",
                    p3LinkForum: "Forum",
                    p3LinkVK: "VKontakte hamjamiyati",
                    p3LinkYouTube: "YouTube kanali",
                    p3LinkTelegram: "Telegramdagi kanal",
                    p3LinkBoosty: "Boosty sahifasi"
                },
                p404: {
                    h1: "Xato 404",
                    content: "Sahifa topilmadi"
                },
                pChangePassword: {
                    title: "Parolni o'zgartirish",
                    headTitle: "Parolni o'zgartirish - Shaxsiy hisob"
                },
                cChangePasswordForm: {
                    currentPassword: "Joriy Parol",
                    newPassword: "Yangi parol",
                    newPasswordOnceMore: "Yana yangi parol",
                    btnChange: "O'zgartirish",
                    alertSuccess: "Parol muvaffaqiyatli almashtirildi",
                    enterPassword: "Parolni kiriting",
                    passwordMismatch: "Parollar mos kelmayapti"
                },
                pFaq: {
                    headTitle: "SAMP: FAQ - TSS - Arizona Role Play",
                    headDescription: "SAMP - imkoni boricha yordam beramiz!"
                },
                pFindGamer: {
                    headTitle: "O'yinchi qidirish"
                },
                cFindGamerForm: {
                    title: "O'yinchi qidirish",
                    username: "Nik",
                    gameUsername: "O'yin laqabi",
                    server: "Server",
                    find: "Toping",
                    status: "Holat",
                    offline: "Oflayn",
                    online: "Hozir o'yinda",
                    level: "Daraja",
                    phone: "Telefon raqami",
                    levelVip: "VIP darajasi",
                    cash: "Naqd pul",
                    bank: "Tejamkorlik",
                    deposit: "Depozit holati",
                    jobName: "Работа",
                    orgName: "Tashkilot",
                    gameServer: "O'yin serveri",
                    chooseServer: "Serverni tanlang",
                    enterUsername: "O'yinchining taxallusini kiriting"
                },
                pLogin: {
                    h1: "Ruxsat",
                    btnEnter: "Kirish uchun",
                    vk: "VKontakte-ga kiring",
                    recoveryPassword: "Men parolni unutdim",
                    headTitle: "Avtorizatsiya - Shaxsiy hisob"
                },
                cAuthForm: {
                    username: "Taxallus",
                    password: "Parol",
                    server: "Server",
                    authEmail: "Hisobda ikki faktorli autentifikatsiya yoqilgan. Tasdiqlash kodi sizga elektron pochta orqali yuborildi. Spam jildini tekshirishni unutmang",
                    authTotp: "Hisobda ikki faktorli autentifikatsiya yoqilgan. Ilovadan tasdiqlash kodini kiriting.",
                    twoFactorCode: "Tasdiq kodi",
                    gameServer: "O'yin serveri",
                    errServer: "Serverni tanlang",
                    errUsername: "O'yin taxallusini kiriting",
                    errPassword: "parolni kiriting"
                },
                pRecoveryPassword: {
                    headTitle: "Parolni tiklash - Shaxsiy hisob"
                },
                cRestorePasswordForm: {
                    title: "Tizimga kira olmayapsizmi?",
                    subtitle: "Elektron pochtangizni kiriting. Sizga parolni tiklash bo'yicha ko'rsatmalar yuboramiz.",
                    server: "Server",
                    restore: "Qayta tiklash",
                    instruction: "Davom etish bo'yicha ko'rsatmalar bilan elektron pochta xabari yuborildi.",
                    gameServer: "O'yin serveri",
                    errServer: "Serverni tanlang",
                    errEmail: "Elektron pochtani kiriting"
                },
                pResetBankCode: {
                    text: "Bank kartangiz PIN-kodi “123456”ga o‘rnatildi, uni o‘yinda o‘zgartirishni unutmang.",
                    headTitle: "Bank kartasi parolini tiklash - Shaxsiy hisob"
                },
                pRestorePassword: {
                    text1: "Hisobingiz uchun parolni o'zgartirdik. Sizning yangi parolingiz:",
                    text2: "Skrinshot oling yoki parolni yozib oling. Siz uni hisobingizda yoki o'yinda o'zgartirishingiz mumkin.",
                    headTitle: "Yangi parol - Shaxsiy hisob"
                },
                pServers: {
                    h1: "SAMP Arizona Role Play serverlari",
                    headTitle: "SAMP: Serverlari GTA SA-MP — Arizona Role Play",
                    headDescription: "Arizona RP dan onlayn GTA San Andreas o'ynash uchun SA-MP serverlari. Serverni tanlang va RuNet-dagi eng katta SAMP loyihasida o'ynashni boshlang!",
                    breadcrumbs: "Serverlari ⏩ № ➊"
                },
                pShop: {
                    h1: "Donat Arizona Role Play",
                    title: "Maxsus takliflar",
                    cash: "naqd pulda",
                    buyFor: "Uchun sotib oling",
                    economy: "Foyda",
                    number: "№",
                    pack1Alt: "Maxsus paket 1 Arizona RP",
                    pack1Title: "Kit<br><span>«Yangi boshlovchi»</span>",
                    pack2Alt: "Maxsus paket 2 Arizona RP",
                    pack2Title: "Kit<br><span>«Intiluvchan magnat»</span>",
                    pack2Bonus: "<span>4 ta uy va korxona</span>ga egalik",
                    packStartName: "Paket «Boshlang'ich kapital»",
                    packVipName: "Abadiy<br>Premium VIP",
                    packPhoneName: "iPhone X va<br>Samsung Galaxy 10",
                    packLicenseName: "Barcha litsenziyalar<br>5 yilga",
                    packNimbName: "Nimbus, kiosk<br>va sug'orish idishi",
                    packAddVipName: "ADD VIP<br>30 kun",
                    packAmuletName: "20 ta silliqlash tumorlari",
                    packStoneName: "100 ta tosh",
                    special1Name: "Kit «Yangi boshlovchi»",
                    premiumVip: "Premium VIP",
                    premiumMaverick: "Premium Maverick",
                    special2Name: "Kit «Intiluvchan magnat»",
                    special2Div: "4 ta uy va korxonaning mulki",
                    special3Name: "Paket «Boshlang'ich kapital»",
                    special4Name: "Paket «Boy»",
                    special5Name: "Paket «Katta zaxira»",
                    special6Name: "Abadiy PREMIUM VIP",
                    special7Name: "iPhone X va Samsung Galaxy 10",
                    special8Name: "Barcha litsenziyalar 5 yil",
                    special9Name: "Nimbus, kiosk va sug'orish idishi",
                    special10Name: "ADD VIP 30 KUN",
                    special11Name: "20 ta silliqlash tumorlari",
                    special12Name: "100 ta tosh",
                    orderTitle: "Ma'lumotlarni tekshirish",
                    orderAccount: "Hisob raqami",
                    orderUsername: "Nik",
                    orderServer: "Server",
                    orderTotal: "So'm",
                    orderCards: "Kartalar",
                    orderLogoQiwi: "QIWI logotipi.",
                    orderLimit: "Dan mavjud",
                    orderUaCards: "Ukraina kartalari",
                    orderAllWays: "Barcha yo'llar",
                    orderTermsText: "Xarid qilishni davom ettirish orqali siz rozilik bildirasiz",
                    orderTermsLink: "foydalanuvchi shartnomasi",
                    authBeforeBuy: "Sotib olishdan oldin tizimga kirishingiz kerak!",
                    headTitle: "Arizona Donat: AZ Coin sotib oling | Arizona RP rasmiy veb-sayti",
                    headDescription: "Arizona RP hisobingizga faqat rasmiy veb-saytda xayriya qiling - arizona-rp.com AZ tangasini sotib olish juda oson: taxallusingiz va miqdoringizni kiriting, serverni tanlang va to'lov tugmasini bosing!"
                },
                cShopForm: {
                    username: "Taxallus",
                    server: "Server",
                    total: "So'm",
                    calculator: "Kalkulyator",
                    pay: "To'lash",
                    get: "Oling",
                    pay2: "To'lash",
                    gameServer: "O'yin serveri",
                    errServer: "Serverni tanlang",
                    errUsername: "O'yin taxallusini kiriting",
                    errTotal: "Miqdorni kiriting",
                    errLimit: "Maksimal miqdor 1 mln"
                },
                pRating_type_serverName: {
                    number: "№",
                    player: "O'yinchi",
                    level: "Daraja",
                    status: "Holat",
                    cost: "Narxi",
                    owner: "Egasi",
                    name: "Ism",
                    online: "Hozir oʻynayapti",
                    offline: "Oflayn",
                    headTitle: "Arizona Rol o'ynash reytinglari"
                },
                pProfile: {
                    desc: "Daraja",
                    cashBalance: "Naqd pul qoldig'i.",
                    cash: "Naqd pul",
                    bankBalance: "Bank balansi.",
                    bankBalance2: "Bank hisobidagi qoldiq",
                    coin: "Arizona tangalari.",
                    deposit: "Depozit.",
                    depositState: "Depozit holati",
                    euro: "Evro.",
                    euro2: "Evro",
                    bitcoin: "Bitkoin.",
                    bitcoin2: "Bitkoin",
                    playOnServer: "Serverda o'ynash",
                    menuVK: "VK sahifasiga havola",
                    menuBankCode: "Bank kartasi kodini tiklash",
                    menuAccount: "Hisobni to'ldirish",
                    menuPassword: "Parolni o'zgartirish",
                    menuPlayer: "O'yinchi toping",
                    menuLogout: "Tashqariga chiqish",
                    menuControl: "Boshqaruv",
                    accountInfo: "Hisob ma'lumotlari",
                    accountOnline: "Hozir o'yinda",
                    accountOffline: "O'chirilgan",
                    authEmail: "Ikki faktorli autentifikatsiya (pochta)",
                    authTotp: "Ikki faktorli autentifikatsiya (TOTP)",
                    accountOn: "Yoqilgan",
                    accountOff: "O'chirilgan",
                    switchOff: "o'chirish",
                    switchOn: "yoqish",
                    totpP1: "Smartfoningizga Google Authenticator yoki boshqa ikki faktorli autentifikatsiya ilovasini o'rnating",
                    totpP2: "Ilovaga kirishni ro'yxatdan o'tkazish uchun quyidagi QR kodni skanerlang",
                    totpP3: "yoki kirish kalitini qo'lda kiriting",
                    totpP4: "Qo'shishni yakunlash uchun quyidagi shaklga ilovadagi bir martalik kodni kiriting",
                    totpP5: "O'chirishni yakunlash uchun quyidagi shaklga ilovadagi bir martalik kodni kiriting",
                    checkCode: "Tasdiq kodi",
                    send: "Yuborish",
                    phone: "Telefon raqami",
                    account: "Shaxsiy hisob",
                    job: "Ish",
                    company: "Tashkilot",
                    rank: "Daraja",
                    inventory: "Mening inventarim",
                    force: "Kuch",
                    musculature: "Mushak tuzilishi",
                    endurance: "Chidamlilik",
                    headTitle: "Shaxsiy kabinet - Arizona Roleplay",
                    notifyAccountChecking: "Проверяем Ваш аккаунт..",
                    notifyEmail: "E-pochtangizga keyingi qadamlar yozilgan xat yuborildi.",
                    notifyRequestOn: "So'rovni tortib olish..",
                    notifyAccessDataReady: "Kirish maʼlumotlari tayyor",
                    notifyWrongCode: "Noto'g'ri kod",
                    notifySendingCode: "Kod yuborilmoqda..",
                    notifyCodeAccepted: "Код принят."
                },
                cProfile_FightStyle: {
                    studied: "O'qigan",
                    nonstudied: "O'rganilmagan"
                },
                cProfile_Skills: {
                    otherSkills: "Boshqa mahorat",
                    carSkill: "Haydovchilik mahorati",
                    dSkill: "Yuk mashinasi mahorati",
                    taxiSkill: "Malaka<br>taksi haydovchisi",
                    productJobSkill: "Oziq-ovqat yetkazib beruvchi",
                    points: "ball"
                },
                cProfile_WeaponSkills: {
                    title: "Qurol qobiliyatlari"
                },
                cProfile_Upgrades: {
                    title: "Yaxshilanishlar",
                    feFinderLabel: "Shumaxer",
                    feFinderDesc: "Ushbu mahorat bilan sizning mashinangiz to'qnashuvda to'xtab qolmaydi",
                    unlimCarSkillLabel: "Abadiy Car Skill",
                    unlimCarSkillDesc: "Sizning haydash mahoratingiz pasaymaydi",
                    plancetLabel: "Planshet",
                    plancetDesc: "Siz xaritaning istalgan joyidan muharrirga e'lon yuborishingiz mumkin",
                    moreLabel: "Tadbirkor",
                    moreDesc: "Yangilanish sizga beshta biznesga egalik qilish imkonini beradi",
                    packLabel: "Freeloader",
                    packDesc: "Sizning xarakteringiz omadli bo'ladi va 2 baravar kam soliq to'laydi",
                    houseLabel: "Ko'proq ko'chmas mulk",
                    houseDesc: "Egalik qilishingiz mumkin",
                    houseDesc2: "Siz uylarga egalik qilishingiz mumkin",
                    antiTaxLabel: "Soliqlar yo'q",
                    antiTaxDesc: "Siz banklar va bankomatlarda komissiya to'lashingiz shart emas",
                    haveTwoFarmLabel: "2 ferma",
                    haveTwoFarmDesc: "2 ta fermaga ega bo'lish imkoniyati"
                },
                cProfile_FightStyles: {
                    title: "Jang uslublari",
                    Boxing: "Boks uslubi",
                    Kungfu: "Kung fu uslubi",
                    Kneehead: "Kikboksing uslubi",
                    GrabKick: "Tepmoq",
                    Elbow: "Tutib oladi va zarba beradi"
                },
                pProfile_inventory: {
                    h1: "Mening inventarim",
                    slot: "Slot",
                    headTitle: "Mening inventarim - Arizona Roleplay"
                },
                pPosts: {
                    news: "Yangiliklar",
                    main: "Asosiy",
                    headTitle: "SAMP: Yangiliklar Arizona Role Play - yangilanishlar, aktsiyalar, muhim xabarlar - 1-sahifa",
                    headDescription: "Arizona RP loyihasi yangiliklari - bu erda siz SA-MP haqidagi so'nggi ma'lumotlarni manbadan topishingiz mumkin!"
                },
                pPosts_id: {
                    address: "Rossiya",
                    comments: "Izohlar",
                    nocomments: "Izohlarsiz..",
                    leavecomments: "Faqat vakolatli o'yinchi sharh qoldirishi mumkin",
                    news: "Yangiliklar",
                    commentdeleted: "Fikr o‘chirildi"
                },
                cPostCommentForm: {
                    enterComment: "Fikr kiriting",
                    add: "Qo'shish..",
                    send: "Yuborish",
                    enterMessage: "Xabaringizni kiriting"
                },
                cShowVideoMixin: {
                    close: "Yaqin"
                },
                pMap__serverName: {
                    stateMap: "Davlat xaritasi",
                    useScroll: "Butun xaritani ko'rish uchun gorizontal aylantirishdan foydalaning."
                },
                pFractions_serverName: {
                    orgs: "Tashkilotlar",
                    useScroll: "Butun xaritani ko'rish uchun gorizontal aylantirishdan foydalaning."
                },
                pFractions_serverName_fractionId: {
                    number: "№",
                    player: "O'yinchi",
                    rank: "Daraja",
                    status: "Holat",
                    leader: "yetakchi",
                    orgs: "Tashkilotlar",
                    online: "Hozir oʻynayapti",
                    offline: "Oflayn"
                },
                pDocument_terms: {
                    title: "Foydalanish shartlari",
                    headTitle: "Foydalanish shartlari - Arizona Roleplay"
                },
                pDocument_policy: {
                    title: "Maxfiylik siyosati",
                    headTitle: "Maxfiylik siyosati - Arizona Roleplay"
                },
                pControl_donateRatio: {
                    h1: "To'ldirish nisbati",
                    forAll: "Barcha uchun",
                    save: "Saqlash",
                    headTitle: "To'ldirish nisbati - Arizona Roleplay",
                    loadFail: "Yuklash xatosi",
                    savedForAll: "Saqlangan (hamma uchun)",
                    notSavedForAll: "Saqlanmagan (hamma uchun)",
                    saved: "Saqlangan",
                    notsaved: "Saqlanmagan"
                },
                pVkontakte: {
                    headTitle: "VKontakte orqali tizimga kiring - Arizona Roleplay",
                    loading: "Yuklanmoqda..",
                    notifyRepeatAuth: "Xato ro'y berdi. Avtorizatsiyani qaytadan urinish"
                },
                pVkontakteAdd: {
                    headTitle: "Вход через ВКонтакте - Arizona Roleplay",
                    loading: "Yuklanmoqda..",
                    notifyRepeat: "Xato ro'y berdi. Qayta urinib ko'ring",
                    notifyAccountLinked: "Hisob sahifangizga bog'langan."
                },
                cRates: {
                    servers: "SAMP serverlari"
                }
            },
            _a = {
                COMPONENT_OPTIONS_KEY: "nuxtI18n",
                STRATEGIES: {
                    PREFIX: "prefix",
                    PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
                    PREFIX_AND_DEFAULT: "prefix_and_default",
                    NO_PREFIX: "no_prefix"
                },
                REDIRECT_ON_OPTIONS: {
                    ALL: "all",
                    ROOT: "root",
                    NO_PREFIX: "no prefix"
                }
            },
            ka = !0,
            Aa = void 0,
            Pa = {
                vueI18n: {
                    fallbackLocale: "ru"
                },
                vueI18nLoader: !1,
                locales: [{
                    code: "ru",
                    iso: "ru-RU",
                    file: "ru-RU.js"
                }, {
                    code: "uk",
                    iso: "uk-UA",
                    file: "uk-UA.js"
                }, {
                    code: "be",
                    iso: "be-BY",
                    file: "be-BY.js"
                }, {
                    code: "kk",
                    iso: "kk-KZ",
                    file: "kk-KZ.js"
                }, {
                    code: "uz",
                    iso: "uz-UZ",
                    file: "uz-Latn-UZ.js"
                }],
                defaultLocale: "ru",
                defaultDirection: "ltr",
                routesNameSeparator: "___",
                defaultLocaleRouteNameSuffix: "default",
                sortRoutes: !0,
                strategy: "prefix_except_default",
                lazy: !1,
                langDir: "/var/www/sites/data/www/arizona-samp/arizona-samp-frontend/lang",
                rootRedirect: null,
                detectBrowserLanguage: {
                    alwaysRedirect: !0,
                    cookieCrossOrigin: !1,
                    cookieDomain: null,
                    cookieKey: "i18n_redirected",
                    cookieSecure: !1,
                    fallbackLocale: "",
                    redirectOn: "root",
                    useCookie: !0
                },
                differentDomains: !1,
                baseUrl: "",
                vuex: {
                    moduleName: "i18n",
                    syncRouteParams: !0
                },
                parsePages: !0,
                pages: {},
                skipSettingLocaleOnNavigate: !1,
                onBeforeLanguageSwitch: () => {},
                onLanguageSwitched: () => null,
                normalizedLocales: [{
                    code: "ru",
                    iso: "ru-RU",
                    file: "ru-RU.js"
                }, {
                    code: "uk",
                    iso: "uk-UA",
                    file: "uk-UA.js"
                }, {
                    code: "be",
                    iso: "be-BY",
                    file: "be-BY.js"
                }, {
                    code: "kk",
                    iso: "kk-KZ",
                    file: "kk-KZ.js"
                }, {
                    code: "uz",
                    iso: "uz-UZ",
                    file: "uz-Latn-UZ.js"
                }],
                localeCodes: ["ru", "uk", "be", "kk", "uz"],
                additionalMessages: []
            },
            wa = {
                "ru-RU.js": () => Promise.resolve(fa),
                "uk-UA.js": () => Promise.resolve(ga),
                "be-BY.js": () => Promise.resolve(ba),
                "kk-KZ.js": () => Promise.resolve(ya),
                "uz-Latn-UZ.js": () => Promise.resolve(va)
            },
            xa = (n(228), n(112), n(71), n(84), n(127)),
            Sa = n.n(xa);

        function za(text) {
            return "[@nuxtjs/i18n] ".concat(text)
        }

        function Ta(e, t) {
            var n = [],
                o = [];
            for (var r of e) {
                var {
                    code: code
                } = r, l = r.iso || code;
                o.push({
                    code: code,
                    iso: l
                })
            }
            var c = function(e, r) {
                var l = o.find((e => e.iso.toLowerCase() === r.toLowerCase()));
                if (l) return n.push({
                    code: l.code,
                    score: 1 - e / t.length
                }), "break"
            };
            for (var [d, h] of t.entries()) {
                if ("break" === c(d, h)) break
            }
            var m = function(e, r) {
                var l = r.split("-")[0].toLowerCase(),
                    c = o.find((e => e.iso.split("-")[0].toLowerCase() === l));
                if (c) return n.push({
                    code: c.code,
                    score: .999 - e / t.length
                }), "break"
            };
            for (var [f, y] of t.entries()) {
                if ("break" === m(f, y)) break
            }
            return n.length > 1 && n.sort(((e, t) => e.score === t.score ? t.code.length - e.code.length : t.score - e.score)), n.length ? n[0].code : void 0
        }

        function Ra(e) {
            return new RegExp("^/(".concat(e.join("|"), ")(?:/|$)"), "i")
        }

        function Oa(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function Ma(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Oa(Object(source), !0).forEach((function(t) {
                    Object(l.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Oa(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        function Ca(e, t) {
            return ja.apply(this, arguments)
        }

        function ja() {
            return (ja = Object(r.a)((function*(e, t) {
                var {
                    app: n
                } = e, {
                    i18n: o
                } = n;
                if (o.loadedLanguages || (o.loadedLanguages = []), !o.loadedLanguages.includes(t)) {
                    var r = Pa.normalizedLocales.find((e => e.code === t));
                    if (r) {
                        var {
                            file: l
                        } = r;
                        if (l) {
                            var c, {
                                nuxtState: d
                            } = e;
                            if (d && d.__i18n && d.__i18n.langs[t] && (c = d.__i18n.langs[t], e.isDev && wa[l]()), !c) try {
                                var h = yield wa[l]().then((e => e.default || e));
                                c = "function" == typeof h ? yield Promise.resolve(h(e, t)): h
                            } catch (e) {
                                console.error(za("Failed loading async locale export: ".concat(e.message)))
                            }
                            c && (o.setLocaleMessage(t, c), qa(o, Pa.additionalMessages, Pa.localeCodes, [t]), o.loadedLanguages.push(t))
                        } else console.warn(za("Could not find lang file for locale ".concat(t)))
                    } else console.warn(za('Attempted to load messages for non-existant locale code "'.concat(t, '"')))
                }
            }))).apply(this, arguments)
        }

        function La(e, t, n, o) {
            var {
                differentDomains: r,
                normalizedLocales: l
            } = o;
            if ("function" == typeof e) return e(t);
            if (r && n) {
                var c = Na(n, t.req, {
                    normalizedLocales: l
                });
                if (c) return c
            }
            return e
        }

        function Na(e, t, n) {
            var o, {
                    normalizedLocales: r
                } = n,
                l = r.find((t => t.code === e));
            if (l && l.domain) return Object(k.a)(l.domain) ? l.domain : (o = window.location.protocol.split(":")[0], "".concat(o, "://").concat(l.domain));
            console.warn(za("Could not find domain name for locale ".concat(e)))
        }

        function qa(e, t, n, o) {
            var r = o || n;
            for (var l of t)
                for (var c of r) {
                    var d = e.getLocaleMessage(c);
                    e.mergeLocaleMessage(c, l[c]), e.mergeLocaleMessage(c, d)
                }
        }
        var Da = n(216),
            Ea = n(47),
            Ia = function() {
                var e = Object(r.a)((function*(e) {
                    var {
                        app: t,
                        isHMR: n
                    } = e;
                    if (!n) {
                        var [o, r, l] = yield t.i18n.__onNavigate(e.route);
                        if (o && r) {
                            var c = l ? e.route.query : void 0;
                            e.redirect(o, r, c)
                        }
                    }
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
        Ea.a.nuxti18n = Ia;
        var $a = ["params"];

        function Fa(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function Ba(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Fa(Object(source), !0).forEach((function(t) {
                    Object(l.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Fa(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        function Ga(e, t) {
            var n = Ya.call(this, e, t);
            return n ? n.route.redirectedFrom || n.route.fullPath : ""
        }

        function Ua(e, t) {
            var n = Ya.call(this, e, t);
            return n ? n.route : void 0
        }

        function Va(e, t) {
            var n = Ya.call(this, e, t);
            return n ? n.location : void 0
        }

        function Ya(e, t) {
            if (e) {
                var {
                    i18n: n
                } = this;
                if (t = t || n.locale) {
                    "string" == typeof e && (e = "/" === e[0] ? {
                        path: e
                    } : {
                        name: e
                    });
                    var o = Object.assign({}, e);
                    if (o.path && !o.name) {
                        var r = this.router.resolve(o).route,
                            l = this.getRouteBaseName(r);
                        if (l) o = {
                            name: Ha(l, t),
                            params: r.params,
                            query: r.query,
                            hash: r.hash
                        };
                        else !(t === Pa.defaultLocale && [_a.STRATEGIES.PREFIX_EXCEPT_DEFAULT, _a.STRATEGIES.PREFIX_AND_DEFAULT].includes(Pa.strategy) || Pa.strategy === _a.STRATEGIES.NO_PREFIX || n.differentDomains) && (o.path = "/".concat(t).concat(o.path)), o.path = Aa ? Object(k.f)(o.path, !0) : Object(k.g)(o.path, !0)
                    } else {
                        o.name || o.path || (o.name = this.getRouteBaseName()), o.name = Ha(o.name, t);
                        var {
                            params: c
                        } = o;
                        c && void 0 === c[0] && c.pathMatch && (c[0] = c.pathMatch)
                    }
                    var d = this.router.resolve(o);
                    return d.route.name ? d : this.router.resolve(e)
                }
            }
        }

        function Ka(e) {
            var t = this.getRouteBaseName();
            if (!t) return "";
            var {
                i18n: n,
                route: o,
                store: r
            } = this, {
                params: l
            } = o, c = Object(Da.a)(o, $a), d = {};
            Pa.vuex && Pa.vuex.syncRouteParams && r && (d = r.getters["".concat(Pa.vuex.moduleName, "/localeRouteParams")](e));
            var h = Object.assign({}, c, {
                    name: t,
                    params: Ba(Ba(Ba({}, l), d), {}, {
                        0: l.pathMatch
                    })
                }),
                path = this.localePath(h, e);
            if (n.differentDomains) {
                var m = {
                        differentDomains: n.differentDomains,
                        normalizedLocales: Pa.normalizedLocales
                    },
                    f = Na(e, this.req, m);
                f && (path = f + path)
            }
            return path
        }

        function Qa(e) {
            var t = void 0 !== e ? e : this.route;
            if (t && t.name) return t.name.split(Pa.routesNameSeparator)[0]
        }

        function Ha(e, t) {
            var n = e + (Pa.strategy === _a.STRATEGIES.NO_PREFIX ? "" : Pa.routesNameSeparator + t);
            return t === Pa.defaultLocale && Pa.strategy === _a.STRATEGIES.PREFIX_AND_DEFAULT && (n += Pa.routesNameSeparator + Pa.defaultLocaleRouteNameSuffix), n
        }
        var Xa = function(e) {
                return function() {
                    var t = {
                        getRouteBaseName: this.getRouteBaseName,
                        i18n: this.$i18n,
                        localePath: this.localePath,
                        localeRoute: this.localeRoute,
                        localeLocation: this.localeLocation,
                        req: null,
                        route: this.$route,
                        router: this.$router,
                        store: this.$store
                    };
                    return e.call(t, ...arguments)
                }
            },
            Za = function(e, t) {
                return function() {
                    var {
                        app: n,
                        req: o,
                        route: r,
                        store: l
                    } = e, c = {
                        getRouteBaseName: n.getRouteBaseName,
                        i18n: n.i18n,
                        localePath: n.localePath,
                        localeLocation: n.localeLocation,
                        localeRoute: n.localeRoute,
                        req: null,
                        route: r,
                        router: n.router,
                        store: l
                    };
                    return t.call(c, ...arguments)
                }
            },
            Ja = {
                install(e) {
                    e.mixin({
                        methods: {
                            localePath: Xa(Ga),
                            localeRoute: Xa(Ua),
                            localeLocation: Xa(Va),
                            switchLocalePath: Xa(Ka),
                            getRouteBaseName: Xa(Qa)
                        }
                    })
                }
            },
            Wa = e => {
                c.default.use(Ja);
                var {
                    app: t,
                    store: n
                } = e;
                t.localePath = e.localePath = Za(e, Ga), t.localeRoute = e.localeRoute = Za(e, Ua), t.localeLocation = e.localeLocation = Za(e, Va), t.switchLocalePath = e.switchLocalePath = Za(e, Ka), t.getRouteBaseName = e.getRouteBaseName = Za(e, Qa), n && (n.localePath = t.localePath, n.localeRoute = t.localeRoute, n.localeLocation = t.localeLocation, n.switchLocalePath = t.switchLocalePath, n.getRouteBaseName = t.getRouteBaseName)
            },
            et = (n(111), n(128));
        n(329), n(331), n(332), n(333), n(334), n(335), n(337), n(338), n(339), n(340), n(341), n(342), n(343), n(138);

        function at(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function tt(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? at(Object(source), !0).forEach((function(t) {
                    Object(l.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : at(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        function nt() {
            var {
                addDirAttribute: e = !1,
                addSeoAttributes: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!this.$i18n) return {};
            var n = {
                    htmlAttrs: {},
                    link: [],
                    meta: []
                },
                o = this.$i18n.localeProperties,
                r = o.iso,
                l = o.dir || Pa.defaultDirection;
            if (e && (n.htmlAttrs.dir = l), t && (h.a.hasMetaInfo ? h.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales) {
                r && (n.htmlAttrs.lang = r);
                var c = this.$i18n.locales;
                d.bind(this)(c, this.$i18n.__baseUrl, n.link), m.bind(this)(this.$i18n.__baseUrl, n.link, t), f.bind(this)(o, r, n.meta), y.bind(this)(c, r, n.meta)
            }

            function d(e, t, link) {
                if (Pa.strategy !== _a.STRATEGIES.NO_PREFIX) {
                    var n = new Map;
                    for (var o of e) {
                        var r = o.iso;
                        if (r) {
                            var [l, c] = r.split("-");
                            l && c && (o.isCatchallLocale || !n.has(l)) && n.set(l, o), n.set(r, o)
                        } else console.warn(za("Locale ISO code is required to generate alternate link"))
                    }
                    for (var [d, h] of n.entries()) {
                        var m = this.switchLocalePath(h.code);
                        m && link.push({
                            hid: "i18n-alt-".concat(d),
                            rel: "alternate",
                            href: _(m, t),
                            hreflang: d
                        })
                    }
                    if (Pa.defaultLocale) {
                        var f = this.switchLocalePath(Pa.defaultLocale);
                        f && link.push({
                            hid: "i18n-xd",
                            rel: "alternate",
                            href: _(f, t),
                            hreflang: "x-default"
                        })
                    }
                }
            }

            function m(e, link, t) {
                var n = this.localeRoute(tt(tt({}, this.$route), {}, {
                    name: this.getRouteBaseName()
                }));
                if (n) {
                    var o = _(n.path, e),
                        r = "boolean" != typeof t && t.canonicalQueries || [];
                    r.length && function() {
                        var e = n.query,
                            t = new URLSearchParams,
                            l = function(n) {
                                if (n in e) {
                                    var o = e[n];
                                    Array.isArray(o) ? o.forEach((e => t.append(n, e || ""))) : t.append(n, o || "")
                                }
                            };
                        for (var c of r) l(c);
                        var d = t.toString();
                        d && (o = "".concat(o, "?").concat(d))
                    }(), link.push({
                        hid: "i18n-can",
                        rel: "canonical",
                        href: o
                    })
                }
            }

            function f(e, t, meta) {
                e && t && meta.push({
                    hid: "i18n-og",
                    property: "og:locale",
                    content: v(t)
                })
            }

            function y(e, t, meta) {
                var n = e.filter((e => {
                    var n = e.iso;
                    return n && n !== t
                }));
                if (n.length) {
                    var o = n.map((e => ({
                        hid: "i18n-og-alt-".concat(e.iso),
                        property: "og:locale:alternate",
                        content: v(e.iso)
                    })));
                    meta.push(...o)
                }
            }

            function v(e) {
                return (e || "").replace(/-/g, "_")
            }

            function _(e, t) {
                return e.match(/^https?:\/\//) ? e : t + e
            }
            return n
        }
        var ot = n(54);
        c.default.use(et.a);
        var it = function() {
                var e = Object(r.a)((function*(e) {
                    var {
                        app: t,
                        route: n,
                        store: o,
                        req: l,
                        res: d,
                        redirect: h
                    } = e;
                    Pa.vuex && o && function(e, t, n) {
                        var o = {
                            namespaced: !0,
                            state: () => Ma({}, t.syncRouteParams ? {
                                routeParams: {}
                            } : {}),
                            actions: Ma({}, t.syncRouteParams ? {
                                setRouteParams(e, t) {
                                    var {
                                        commit: n
                                    } = e;
                                    n("setRouteParams", t)
                                }
                            } : {}),
                            mutations: Ma({}, t.syncRouteParams ? {
                                setRouteParams(e, t) {
                                    e.routeParams = t
                                }
                            } : {}),
                            getters: Ma({}, t.syncRouteParams ? {
                                localeRouteParams: e => {
                                    var {
                                        routeParams: t
                                    } = e;
                                    return e => t && t[e] || {}
                                }
                            } : {})
                        };
                        e.registerModule(t.moduleName, o, {
                            preserveState: !!e.state[t.moduleName]
                        })
                    }(o, Pa.vuex, Pa.localeCodes);
                    var {
                        lazy: m
                    } = Pa, {
                        alwaysRedirect: f,
                        fallbackLocale: y,
                        redirectOn: v,
                        useCookie: _,
                        cookieKey: A,
                        cookieDomain: P,
                        cookieSecure: w,
                        cookieCrossOrigin: x
                    } = (m && (!0 === m || m.skipNuxtState), Pa.detectBrowserLanguage), S = function(e, t) {
                        var {
                            routesNameSeparator: n,
                            defaultLocaleRouteNameSuffix: o
                        } = t, r = "(".concat(e.join("|"), ")"), l = "(?:".concat(n).concat(o, ")?"), c = new RegExp("".concat(n).concat(r).concat(l, "$"), "i"), d = Ra(e);
                        return e => {
                            if (e.name) {
                                var t = e.name.match(c);
                                if (t && t.length > 1) return t[1]
                            } else if (e.path) {
                                var n = e.path.match(d);
                                if (n && n.length > 1) return n[1]
                            }
                            return ""
                        }
                    }(Pa.localeCodes, {
                        routesNameSeparator: Pa.routesNameSeparator,
                        defaultLocaleRouteNameSuffix: Pa.defaultLocaleRouteNameSuffix
                    }), z = function() {
                        var n = Object(r.a)((function*(n) {
                            var {
                                initialSetup: o = !1
                            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (n && (o || !t.i18n.differentDomains)) {
                                var r = t.i18n.locale;
                                if (n !== r) {
                                    var l = t.i18n.onBeforeLanguageSwitch(r, n, o, e);
                                    if (l && t.i18n.localeCodes.includes(l)) {
                                        if (l === r) return;
                                        n = l
                                    }
                                    if (_ && t.i18n.setLocaleCookie(n), Pa.langDir) {
                                        var d = t.i18n.fallbackLocale;
                                        if (Pa.lazy) {
                                            if (d) {
                                                var m = [];
                                                Array.isArray(d) ? m = d.map((t => Ca(e, t))) : "object" == typeof d ? (d[n] && (m = m.concat(d[n].map((t => Ca(e, t))))), d.default && (m = m.concat(d.default.map((t => Ca(e, t)))))) : n !== d && m.push(Ca(e, d)), yield Promise.all(m)
                                            }
                                            yield Ca(e, n)
                                        } else yield Promise.all(Pa.localeCodes.map((t => Ca(e, t))))
                                    } else qa(t.i18n, Pa.additionalMessages, Pa.localeCodes);
                                    t.i18n.locale = n;
                                    var f = Pa.normalizedLocales.find((e => e.code === n)) || {
                                        code: n
                                    };
                                    for (var y of Object.keys(t.i18n.localeProperties)) t.i18n.localeProperties[y] = void 0;
                                    for (var [v, k] of Object.entries(f)) c.default.set(t.i18n.localeProperties, v, Object(ot.a)(k));
                                    var {
                                        route: A
                                    } = e, P = "", w = !1;
                                    if (!w && !t.i18n.differentDomains && Pa.strategy !== _a.STRATEGIES.NO_PREFIX && (S(A) !== n || Pa.strategy === _a.STRATEGIES.PREFIX_AND_DEFAULT && n === Pa.defaultLocale)) {
                                        var x = t.switchLocalePath(n) || t.localePath(A.fullPath, n);
                                        x && x !== A.fullPath && !x.startsWith("//") && (P = x)
                                    }
                                    o ? t.i18n.__redirect = P : (t.i18n.onLanguageSwitched(r, n), P && h(P))
                                }
                            }
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }(), T = function() {
                        var n = Object(r.a)((function*(n) {
                            if ("/" === n.path && Pa.rootRedirect) {
                                var o = 302,
                                    path = Pa.rootRedirect;
                                return "string" != typeof Pa.rootRedirect && (o = Pa.rootRedirect.statusCode, path = Pa.rootRedirect.path), [o, "/".concat(path), !0]
                            }
                            var r = t.i18n.__redirect;
                            if (r) return t.i18n.__redirect = null, [302, r];
                            var l = {
                                differentDomains: Pa.differentDomains,
                                normalizedLocales: Pa.normalizedLocales
                            };
                            t.i18n.__baseUrl = La(Pa.baseUrl, e, t.i18n.locale, l);
                            var c = Pa.detectBrowserLanguage && C(n) || !Pa.differentDomains && S(n) || t.i18n.locale || t.i18n.defaultLocale || "";
                            return Pa.skipSettingLocaleOnNavigate ? (t.i18n.__pendingLocale = c, t.i18n.__pendingLocalePromise = new Promise((e => {
                                t.i18n.__resolvePendingLocalePromise = e
                            }))) : yield t.i18n.setLocale(c), [null, null]
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }(), R = function() {
                        var e = Object(r.a)((function*() {
                            t.i18n.__pendingLocale && (yield t.i18n.setLocale(t.i18n.__pendingLocale), t.i18n.__resolvePendingLocalePromise(""), t.i18n.__pendingLocale = null)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), O = function() {
                        var e = Object(r.a)((function*() {
                            t.i18n.__pendingLocale && (yield t.i18n.__pendingLocalePromise)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(), M = () => "undefined" != typeof navigator && navigator.languages ? Ta(Pa.normalizedLocales, navigator.languages) : l && void 0 !== l.headers["accept-language"] ? Ta(Pa.normalizedLocales, l.headers["accept-language"].split(",").map((e => e.split(";")[0]))) : void 0, C = e => {
                        if (Pa.strategy !== _a.STRATEGIES.NO_PREFIX)
                            if (v === _a.REDIRECT_ON_OPTIONS.ROOT) {
                                if ("/" !== e.path) return ""
                            } else if (v === _a.REDIRECT_ON_OPTIONS.NO_PREFIX && !f && e.path.match(Ra(Pa.localeCodes))) return "";
                        var n;
                        _ && (n = t.i18n.getLocaleCookie()) || (n = M());
                        var o = n || y;
                        return !o || _ && !f && t.i18n.getLocaleCookie() || o === t.i18n.locale ? "" : o
                    }, j = e => {
                        e.locales = Object(ot.a)(Pa.locales), e.localeCodes = Object(ot.a)(Pa.localeCodes), e.localeProperties = c.default.observable(Object(ot.a)(Pa.normalizedLocales.find((t => t.code === e.locale)) || {
                            code: e.locale
                        })), e.defaultLocale = Pa.defaultLocale, e.differentDomains = Pa.differentDomains, e.onBeforeLanguageSwitch = Pa.onBeforeLanguageSwitch, e.onLanguageSwitched = Pa.onLanguageSwitched, e.setLocaleCookie = e => function(e, t, n) {
                            var {
                                useCookie: o,
                                cookieDomain: r,
                                cookieKey: l,
                                cookieSecure: c,
                                cookieCrossOrigin: d
                            } = n;
                            if (o) {
                                var h = new Date,
                                    m = {
                                        expires: new Date(h.setDate(h.getDate() + 365)),
                                        path: "/",
                                        sameSite: d ? "none" : "lax",
                                        secure: d || c
                                    };
                                r && (m.domain = r), Sa.a.set(l, e, m)
                            }
                        }(e, 0, {
                            useCookie: _,
                            cookieDomain: P,
                            cookieKey: A,
                            cookieSecure: w,
                            cookieCrossOrigin: x
                        }), e.getLocaleCookie = () => function(e, t) {
                            var n, {
                                useCookie: o,
                                cookieKey: r,
                                localeCodes: l
                            } = t;
                            if (o && (n = Sa.a.get(r)) && l.includes(n)) return n
                        }(0, {
                            useCookie: _,
                            cookieKey: A,
                            localeCodes: Pa.localeCodes
                        }), e.setLocale = e => z(e), e.getBrowserLocale = () => M(), e.finalizePendingLocaleChange = R, e.waitForPendingLocaleChange = O, e.__baseUrl = t.i18n.__baseUrl, e.__pendingLocale = t.i18n.__pendingLocale, e.__pendingLocalePromise = t.i18n.__pendingLocalePromise, e.__resolvePendingLocalePromise = t.i18n.__resolvePendingLocalePromise
                    }, L = "function" == typeof Pa.vueI18n ? yield Pa.vueI18n(e): Object(ot.a)(Pa.vueI18n);
                    if (L.componentInstanceCreatedListener = j, t.i18n = e.i18n = new et.a(L), t.i18n.locale = "", t.i18n.fallbackLocale = L.fallbackLocale || "", o && (o.$i18n = t.i18n, o.state.localeDomains))
                        for (var [N, D] of Pa.normalizedLocales.entries()) {
                            var E = o.state.localeDomains[D.code];
                            if (E) {
                                D.domain = E;
                                var I = Pa.locales[N];
                                "string" != typeof I && (I.domain = E)
                            }
                        }
                    j(t.i18n);
                    var $ = {
                        differentDomains: Pa.differentDomains,
                        normalizedLocales: Pa.normalizedLocales
                    };
                    t.i18n.__baseUrl = La(Pa.baseUrl, e, "", $), t.i18n.__onNavigate = T, c.default.prototype.$nuxtI18nHead = nt;
                    var F = Pa.detectBrowserLanguage ? C(n) : "";
                    if (!F)
                        if (t.i18n.differentDomains) F = function(e, t) {
                            var n;
                            if (n = window.location.host) {
                                var o = e.find((e => e.domain === n));
                                if (o) return o.code
                            }
                            return ""
                        }(Pa.normalizedLocales);
                        else if (Pa.strategy !== _a.STRATEGIES.NO_PREFIX) {
                        F = S(n)
                    }
                    if (!F && _ && (F = t.i18n.getLocaleCookie()), F || (F = t.i18n.defaultLocale || ""), yield z(F, {
                            initialSetup: !0
                        }), ka) {
                        var [B, G] = yield T(e.route);
                        G && location.assign(Object(k.c)(e.base, G))
                    }
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(),
            st = n(66),
            lt = n.n(st),
            ct = n(85),
            ut = n.n(ct);

        function pt(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function ht(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? pt(Object(source), !0).forEach((function(t) {
                    Object(l.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : pt(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var mt = {
                setBaseURL(e) {
                    this.defaults.baseURL = e
                },
                setHeader(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common";
                    for (var o of Array.isArray(n) ? n : [n]) t ? this.defaults.headers[o][e] = t : delete this.defaults.headers[o][e]
                },
                setToken(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        o = e ? (t ? t + " " : "") + e : null;
                    this.setHeader("Authorization", o, n)
                },
                onRequest(e) {
                    this.interceptors.request.use((t => e(t) || t))
                },
                onResponse(e) {
                    this.interceptors.response.use((t => e(t) || t))
                },
                onRequestError(e) {
                    this.interceptors.request.use(void 0, (t => e(t) || Promise.reject(t)))
                },
                onResponseError(e) {
                    this.interceptors.response.use(void 0, (t => e(t) || Promise.reject(t)))
                },
                onError(e) {
                    this.onRequestError(e), this.onResponseError(e)
                },
                create(e) {
                    return bt(ut()(e, this.defaults))
                }
            },
            ft = function(e) {
                mt["$" + e] = function() {
                    return this[e].apply(this, arguments).then((e => e && e.data))
                }
            };
        for (var gt of ["request", "delete", "get", "head", "options", "post", "put", "patch"]) ft(gt);
        var bt = e => {
                var t = lt.a.create(e);
                return t.CancelToken = lt.a.CancelToken, t.isCancel = lt.a.isCancel, (e => {
                    for (var t in mt) e[t] = mt[t].bind(e)
                })(t), t.onRequest((e => {
                    e.headers = ht(ht({}, t.defaults.headers.common), e.headers)
                })), yt(t), t
            },
            yt = e => {
                var t = {
                        finish: () => {},
                        start: () => {},
                        fail: () => {},
                        set: () => {}
                    },
                    n = () => {
                        var e = "undefined" != typeof window && window.$nuxt;
                        return e && e.$loading && e.$loading.set ? e.$loading : t
                    },
                    o = 0;
                e.onRequest((e => {
                    e && !1 === e.progress || o++
                })), e.onResponse((e => {
                    e && e.config && !1 === e.config.progress || --o <= 0 && (o = 0, n().finish())
                })), e.onError((e => {
                    e && e.config && !1 === e.config.progress || (o--, lt.a.isCancel(e) ? o <= 0 && (o = 0, n().finish()) : (n().fail(), n().finish()))
                }));
                var r = e => {
                    if (o && e.total) {
                        var progress = 100 * e.loaded / (e.total * o);
                        n().set(Math.min(100, progress))
                    }
                };
                e.defaults.onUploadProgress = r, e.defaults.onDownloadProgress = r
            },
            vt = (e, t) => {
                var n = e.$config && e.$config.axios || {},
                    o = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "https://backend.arizona-rp.com";
                var r = bt({
                    baseURL: o,
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {}
                    }
                });
                e.$axios = r, t("axios", r)
            },
            _t = e => {
                var t, n, o, r, a, {
                        app: {
                            router: l
                        }
                    } = e,
                    c = !1;
                l.onReady((() => {
                    c = !0
                })), void 0 === window.ym && (c || (t = window, n = document, o = "script", t.ym = t.ym || function() {
                    (t.ym.a = t.ym.a || []).push(arguments)
                }, t.ym.l = 1 * new Date, r = n.createElement(o), a = n.getElementsByTagName(o)[0], r.async = 1, r.src = "https://mc.yandex.ru/metrika/tag.js", a.parentNode.insertBefore(r, a), ym(49593022, "init", {
                    id: 49593022,
                    clickmap: !0,
                    trackLinks: !0,
                    accurateTrackBounce: !0,
                    webvisor: !0,
                    metrikaUrl: "https://mc.yandex.ru/metrika/tag.js"
                })), l.afterEach(((e, t) => {
                    ym(49593022, "hit", e.fullPath, {
                        referer: t.fullPath
                    })
                })))
            },
            kt = n(202),
            At = n.n(kt);

        function Pt(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function wt(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Pt(Object(source), !0).forEach((function(t) {
                    Object(l.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Pt(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        var xt = function() {
                var e = Object(r.a)((function*(e, t) {
                    var n = e.$config && e.$config.googleAnalytics || {},
                        o = wt(wt({}, {
                            dev: !0,
                            debug: {
                                sendHitTask: !0
                            },
                            id: "UA-119564014-1"
                        }), n);
                    "function" == typeof o.asyncID && (o.id = yield o.asyncID(e)), c.default.use(At.a, wt(wt({}, {
                        router: e.app.router
                    }), o)), e.$ga = c.default.$ga, t("ga", c.default.$ga)
                }));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }(),
            St = n(129),
            zt = n.n(St),
            Tt = n(203),
            Rt = n.n(Tt);
        n(362);
        c.default.use(Rt.a);
        var Ot = n(204),
            Mt = n.n(Ot);
        c.default.use(Mt.a);
        var Ct = n(205),
            jt = n.n(Ct);
        c.default.use(jt.a);
        var Lt = n(206),
            Nt = n.n(Lt);
        c.default.use(Nt.a);
        var qt = n(207);
        c.default.use(qt.a);
        var Dt = n(213),
            Et = n.n(Dt);
        c.default.use(Et.a, {
            number: {
                format: "0",
                thousandsSeparator: ".",
                decimalSeparator: "-"
            },
            currency: {
                symbol: "₽",
                decimalDigits: 0,
                thousandsSeparator: ".",
                symbolOnLeft: !1,
                spaceBetweenAmountAndSymbol: !0
            }
        }), c.default.filter("currency2", (e => {
            var t = [{
                    value: 1,
                    symbol: ""
                }, {
                    value: 1e3,
                    symbol: "тыс"
                }, {
                    value: 1e6,
                    symbol: "млн"
                }, {
                    value: 1e9,
                    symbol: "млрд"
                }],
                i = 0;
            for (i = t.length - 1; i > 0 && !(e >= t[i].value); i--);
            return "".concat(c.default.options.filters.number(e / t[i].value, "0.000", {
                decimalSeparator: "."
            }), " ").concat(t[i].symbol)
        })), c.default.filter("serverId", (e => e.toLocaleString("ru-RU", {
            minimumIntegerDigits: 2
        }))), c.default.filter("pluralizeRu", ((e, t) => t[e % 100 > 4 && e % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][Math.min(e % 10, 5)]]));
        var It = n(214);
        c.default.use(It.a, {
            config: {
                id: "G-25SQLLK3B1"
            }
        });
        var $t = n(52);
        Ea.a.auth = $t.d;
        var Ft = function(e, t) {
            var n = new $t.a(e, {
                resetOnError: !1,
                ignoreExceptions: !1,
                scopeKey: "scope",
                rewriteRedirects: !0,
                fullPathRedirect: !1,
                watchLoggedIn: !0,
                redirect: {
                    login: "/login",
                    logout: "/",
                    home: "/profile",
                    callback: "/callback"
                },
                vuex: {
                    namespace: "auth"
                },
                cookie: !1,
                localStorage: {
                    prefix: "auth."
                },
                defaultStrategy: "local"
            });
            return n.registerStrategy("local", new $t.c(n, {
                token: {
                    property: "accessToken",
                    maxAge: 1800
                },
                refreshToken: {
                    property: "refreshToken",
                    data: "refreshToken",
                    maxAge: 86400
                },
                user: {
                    property: "user"
                },
                endpoints: {
                    login: {
                        url: "/auth/by-password",
                        method: "post"
                    },
                    refresh: {
                        url: "/auth/refresh",
                        method: "post"
                    },
                    logout: {
                        url: "/auth/logout"
                    },
                    user: {
                        url: "/profile/general-data",
                        method: "get"
                    }
                },
                autoLogout: !0,
                autoRefresh: {
                    enable: !0
                },
                name: "local"
            })), t("auth", n), e.$auth = n, n.init().catch((e => {
                e instanceof $t.b || console.error("[ERROR] [AUTH]", e)
            }))
        };

        function Bt(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function Gt(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Bt(Object(source), !0).forEach((function(t) {
                    Object(l.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Bt(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }
        c.default.component(f.a.name, f.a), c.default.component(v.a.name, Gt(Gt({}, v.a), {}, {
            render: (e, t) => (v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(e, t))
        })), c.default.component(se.name, se), c.default.component("NChild", se), c.default.component(he.name, he), Object.defineProperty(c.default.prototype, "$nuxt", {
            get() {
                var e = this.$root.$options.$nuxt;
                return e || "undefined" == typeof window ? e : window.$nuxt
            },
            configurable: !0
        }), c.default.use(h.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var Ut = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            },
            Vt = d.a.Store.prototype.registerModule;

        function Yt(path, e) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = Array.isArray(path) ? !!path.reduce(((e, path) => e && e[path]), this.state) : path in this.state;
            return Vt.call(this, path, e, Gt({
                preserveState: n
            }, t))
        }

        function Kt(e) {
            return Qt.apply(this, arguments)
        }

        function Qt() {
            return (Qt = Object(r.a)((function*(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = yield re(0, t), o = Te(e);
                o.$router = n, o.registerModule = Yt;
                var l = Gt({
                    head: function() {
                        var e = this.$nuxtI18nHead({
                            addSeoAttributes: !0
                        });
                        return {
                            title: "SA:MP",
                            htmlAttrs: Gt({}, e.htmlAttrs),
                            meta: [{
                                charset: "utf-8"
                            }, {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                            }, {
                                hid: "description",
                                name: "description",
                                content: ""
                            }, ...e.meta],
                            link: [{
                                rel: "icon",
                                type: "image/x-icon",
                                href: "/favicon.ico"
                            }, ...e.link]
                        }
                    },
                    store: o,
                    router: n,
                    nuxt: {
                        defaultTransition: Ut,
                        transitions: [Ut],
                        setTransitions(e) {
                            return Array.isArray(e) || (e = [e]), e = e.map((e => e = e ? "string" == typeof e ? Object.assign({}, Ut, {
                                name: e
                            }) : Object.assign({}, Ut, e) : Ut)), this.$options.nuxt.transitions = e, e
                        },
                        err: null,
                        dateErr: null,
                        error(t) {
                            t = t || null, l.context._errored = Boolean(t), t = t ? Object(A.p)(t) : null;
                            var n = l.nuxt;
                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                        }
                    }
                }, xe);
                o.app = l;
                var d, h = e ? e.next : e => l.router.push(e);
                if (e) d = n.resolve(e.url).route;
                else {
                    var path = Object(A.f)(n.options.base, n.options.mode);
                    d = n.resolve(path).route
                }

                function m(e, t) {
                    if (!e) throw new Error("inject(key, value) has no key provided");
                    if (void 0 === t) throw new Error("inject('".concat(e, "', value) has no value provided"));
                    l[e = "$" + e] = t, l.context[e] || (l.context[e] = t), o[e] = l[e];
                    var n = "__nuxt_" + e + "_installed__";
                    c.default[n] || (c.default[n] = !0, c.default.use((() => {
                        Object.prototype.hasOwnProperty.call(c.default.prototype, e) || Object.defineProperty(c.default.prototype, e, {
                            get() {
                                return this.$root.$options[e]
                            }
                        })
                    })))
                }
                return yield Object(A.t)(l, {
                    store: o,
                    route: d,
                    next: h,
                    error: l.nuxt.error.bind(l),
                    payload: e ? e.payload : void 0,
                    req: e ? e.req : void 0,
                    res: e ? e.res : void 0,
                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                    ssrContext: e
                }), m("config", t), window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state), l.context.enablePreview = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    l.previewData = Object.assign({}, e), m("preview", e)
                }, yield ma(l.context, m), yield Wa(l.context), "function" == typeof it && (yield it(l.context, m)), yield vt(l.context, m), yield _t(l.context), "function" == typeof xt && (yield xt(l.context, m)), "function" == typeof zt.a && (yield zt()(l.context, m)), yield Ft(l.context, m), l.context.enablePreview = function() {
                    console.warn("You cannot call enablePreview() outside a plugin.")
                }, yield new Promise(((e, t) => {
                    var {
                        route: o
                    } = n.resolve(l.context.route.fullPath);
                    if (!o.matched.length) return e();
                    n.replace(l.context.route.fullPath, e, (o => {
                        if (!o._isRouter) return t(o);
                        if (2 !== o.type) return e();
                        var c = n.afterEach(function() {
                            var t = Object(r.a)((function*(t, n) {
                                l.context.route = yield Object(A.j)(t), l.context.params = t.params || {}, l.context.query = t.query || {}, c(), e()
                            }));
                            return function(e, n) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }))
                })), {
                    store: o,
                    app: l,
                    router: n
                }
            }))).apply(this, arguments)
        }
    }, , , , , , , , , , , function(e, t, n) {
        "use strict";
        t.a = {}
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n(34), n(8), n(12), n(11);
        var o = n(0),
            r = window.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout((function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
                    })
                }), 1)
            },
            l = window.cancelIdleCallback || function(e) {
                clearTimeout(e)
            },
            c = window.IntersectionObserver && new window.IntersectionObserver((e => {
                e.forEach((e => {
                    var {
                        intersectionRatio: t,
                        target: link
                    } = e;
                    t <= 0 || !link.__prefetch || link.__prefetch()
                }))
            }));
        t.a = {
            name: "NuxtLink",
            extends: o.default.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted() {
                this.prefetch && !this.noPrefetch && (this.handleId = r(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy() {
                l(this.handleId), this.__observed && (c.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe() {
                    c && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), c.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch() {
                    var e = navigator.connection;
                    return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                },
                getPrefetchComponents() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((e => e.components.default)).filter((e => "function" == typeof e && !e.options && !e.__prefetched))
                },
                prefetchLink() {
                    if (this.canPrefetch()) {
                        c.unobserve(this.$el);
                        var e = this.getPrefetchComponents();
                        for (var t of e) {
                            var n = t();
                            n instanceof Promise && n.catch((() => {})), t.__prefetched = !0
                        }
                    }
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t);
        n(168), n(134), n(217);
        var o = {
                data: () => ({
                    links: [{
                        label: "Главная",
                        to: "/"
                    }, {
                        label: "Как играть",
                        to: "/#how-to-play"
                    }, {
                        label: "Новости",
                        to: "/posts"
                    }, {
                        label: "Форум",
                        href: "https://forum.arizona-rp.com"
                    }, {
                        label: "Магазин",
                        to: "/shop"
                    }]
                }),
                computed: {
                    isGuest() {
                        return !1 === this.$auth.loggedIn
                    }
                },
                methods: {
                    openMobileMenu() {
                        this.$modal.show("mobile-nav")
                    },
                    hideMobileMenu() {
                        this.$modal.hide("mobile-nav")
                    },
                    scrollToHts() {
                        this.hideMobileMenu(), /^index/.test(this.$route.name) && setTimeout((() => {
                            var e = document.querySelector(".layout__content"),
                                t = ".launcher";
                            e.offsetWidth < 576 && (t = ".mobile-launcher"), document.body.parentElement.scrollTop = e.querySelector(t).offsetTop, location.hash = "#how-to-play"
                        }), 400)
                    }
                }
            },
            r = (n(299), n(13)),
            component = Object(r.a)(o, (function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "navbar container",
                    attrs: {
                        id: "navbar"
                    }
                }, [o("nuxt-link", {
                    staticClass: "navbar__logo",
                    attrs: {
                        to: e.localePath({
                            name: "index"
                        })
                    }
                }, ["en" === e.$i18n.locale ? o("picture", [o("img", {
                    staticClass: "navbar__logo-image",
                    attrs: {
                        src: n(291),
                        alt: "Arizona Roleplay"
                    }
                })]) : o("picture", [o("source", {
                    attrs: {
                        srcset: n(292),
                        type: "image/webp"
                    }
                }), o("img", {
                    staticClass: "navbar__logo-image",
                    attrs: {
                        src: n(218),
                        alt: "Arizona Roleplay"
                    }
                })])]), o("nav", {
                    staticClass: "navbar__nav nav nav--navbar"
                }, [o("ul", {
                    staticClass: "nav__list"
                }, [o("li", {
                    staticClass: "nav__list-item"
                }, [o("nuxt-link", {
                    staticClass: "nav__link",
                    attrs: {
                        to: e.localePath({
                            name: "index"
                        })
                    }
                }, [e._v(e._s(e.$t("nav.homepage")))])], 1), o("li", {
                    staticClass: "nav__list-item"
                }, [o("nuxt-link", {
                    staticClass: "nav__link",
                    attrs: {
                        to: e.localePath({
                            name: "index",
                            hash: "#how-to-play"
                        })
                    },
                    nativeOn: {
                        click: function(t) {
                            return t.preventDefault(), e.scrollToHts.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.$t("nav.howPlay")))])], 1), o("li", {
                    staticClass: "nav__list-item"
                }, [o("nuxt-link", {
                    staticClass: "nav__link",
                    attrs: {
                        to: e.localePath({
                            name: "posts"
                        })
                    }
                }, [e._v(e._s(e.$t("nav.news")))])], 1), o("li", {
                    staticClass: "nav__list-item"
                }, [o("a", {
                    staticClass: "nav__link",
                    attrs: {
                        href: "https://forum.arizona-rp.com"
                    }
                }, [e._v(e._s(e.$t("nav.forum")))])]), o("li", {
                    staticClass: "nav__list-item"
                }, [o("nuxt-link", {
                    staticClass: "nav__link",
                    attrs: {
                        to: e.localePath({
                            name: "shop"
                        })
                    }
                }, [e._v(e._s(e.$t("nav.shop")))])], 1)])]), o("div", {
                    staticClass: "navbar__profile"
                }, [e.isGuest ? o("nuxt-link", {
                    staticClass: "btn btn--red btn--navbar",
                    attrs: {
                        to: e.localePath({
                            name: "login"
                        })
                    }
                }, [e._v(e._s(e.$t("nav.login")))]) : o("nuxt-link", {
                    staticClass: "btn btn--red btn--navbar",
                    attrs: {
                        to: e.localePath({
                            name: "profile"
                        })
                    }
                }, [e._v(e._s(e.$t("nav.cabinet")))])], 1), o("button", {
                    staticClass: "navbar__opener",
                    on: {
                        click: e.openMobileMenu
                    }
                }), o("modal", {
                    attrs: {
                        name: "mobile-nav",
                        height: 430,
                        adaptive: !0,
                        shiftY: .1,
                        styles: {
                            background: "transparent",
                            boxShadow: "unset",
                            paddingTop: "20px"
                        }
                    }
                }, [o("nav", {
                    staticClass: "navbar__mobile-nav nav nav--navbar"
                }, [e.isGuest ? o("nuxt-link", {
                    staticClass: "btn btn--red btn--navbar",
                    attrs: {
                        to: e.localePath({
                            name: "login"
                        })
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.hideMobileMenu.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.$t("nav.login")))]) : o("nuxt-link", {
                    staticClass: "btn btn--red btn--navbar",
                    attrs: {
                        to: e.localePath({
                            name: "profile"
                        })
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.hideMobileMenu.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.$t("nav.cabinet")))]), o("ul", {
                    staticClass: "nav__list"
                }, [o("li", {
                    staticClass: "nav__list-item"
                }, [o("nuxt-link", {
                    staticClass: "nav__link",
                    attrs: {
                        to: e.localePath({
                            name: "index"
                        })
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.hideMobileMenu.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.$t("nav.homepage")))])], 1), o("li", {
                    staticClass: "nav__list-item"
                }, [o("nuxt-link", {
                    staticClass: "nav__link",
                    attrs: {
                        to: "/#how-to-play"
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.scrollToHts.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.$t("nav.howPlay")))])], 1), o("li", {
                    staticClass: "nav__list-item"
                }, [o("nuxt-link", {
                    staticClass: "nav__link",
                    attrs: {
                        to: e.localePath({
                            name: "posts"
                        })
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.hideMobileMenu.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.$t("nav.news")))])], 1), o("li", {
                    staticClass: "nav__list-item"
                }, [o("a", {
                    staticClass: "nav__link",
                    attrs: {
                        href: "https://forum.arizona-rp.com"
                    }
                }, [e._v(e._s(e.$t("nav.forum")))])]), o("li", {
                    staticClass: "nav__list-item"
                }, [o("nuxt-link", {
                    staticClass: "nav__link",
                    attrs: {
                        to: e.localePath({
                            name: "shop"
                        })
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.hideMobileMenu.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.$t("nav.shop")))])], 1)])], 1)])], 1)
            }), [], !1, null, null, null);
        t.default = component.exports
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "footer__contacts"
                }, [t("img", {
                    attrs: {
                        src: n(301),
                        alt: "VISA Secure"
                    }
                }), t("img", {
                    attrs: {
                        src: n(302),
                        alt: "VISA"
                    }
                }), t("img", {
                    attrs: {
                        src: n(303),
                        alt: "Mastercard ID Check"
                    }
                }), t("img", {
                    attrs: {
                        src: n(304),
                        alt: "Mastercard"
                    }
                })])
            }],
            r = (n(168), n(134), n(220), {
                name: "FooterComponent",
                methods: {
                    slideUp() {
                        window.scrollTo({
                            top: 0
                        })
                    }
                }
            }),
            l = (n(309), n(13)),
            component = Object(l.a)(r, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("footer", {
                    staticClass: "footer",
                    attrs: {
                        id: "footer"
                    }
                }, [n("div", {
                    staticClass: "footer__wrapper container"
                }, [n("div", [
                    [n("div", {
                        staticClass: "footer__copy"
                    }, [e._v("Arizona Games " + e._s((new Date).getFullYear()))])], n("div", {
                        staticClass: "footer__docs"
                    }, [n("nuxt-link", {
                        staticClass: "footer__link",
                        attrs: {
                            to: e.localePath({
                                name: "document-terms"
                            })
                        }
                    }, [e._v(e._s(e.$t("cFooter.terms")))]), n("nuxt-link", {
                        staticClass: "footer__link",
                        attrs: {
                            to: e.localePath({
                                name: "document-policy"
                            })
                        }
                    }, [e._v(e._s(e.$t("cFooter.policy")))]), "uk" === e.$i18n.locale ? n("span", {
                        staticStyle: {
                            color: "#6378c7",
                            "font-size": "13px",
                            "margin-top": "16px",
                            display: "inline-block"
                        }
                    }, [e._v(e._s(e.$t("cFooter.fop")))]) : e._e(), n("a", {
                        staticClass: "footer__link",
                        attrs: {
                            href: "mailto:support@arizona-rp.com",
                            target: "_blank"
                        }
                    }, [e._v("support@arizona-rp.com")])], 1), n("div", {
                        staticClass: "footer__projects"
                    }, [n("a", {
                        staticClass: "footer__link",
                        attrs: {
                            href: "https://rodina-rp.com",
                            target: "_blank"
                        }
                    }, [e._v("CRMP: Rodina Role Play")]), n("a", {
                        staticClass: "footer__link",
                        attrs: {
                            href: "https://bone-country.ru",
                            target: "_blank"
                        }
                    }, [e._v(e._s(e.$t("cFooter.boneCountry")))])])
                ], 2), n("div", {
                    staticClass: "footer__menu"
                }, [n("div", {
                    staticClass: "footer__links"
                }, [n("nuxt-link", {
                    staticClass: "footer__link",
                    attrs: {
                        to: e.localePath({
                            name: "index"
                        })
                    }
                }, [e._v(e._s(e.$t("cFooter.main")))]), n("nuxt-link", {
                    staticClass: "footer__link",
                    attrs: {
                        to: e.localePath({
                            name: "index",
                            hash: "#how-to-play"
                        })
                    }
                }, [e._v(e._s(e.$t("cFooter.howToPlay")))]), n("a", {
                    staticClass: "footer__link",
                    attrs: {
                        href: "https://forum.arizona-rp.com",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("cFooter.forum")))]), n("nuxt-link", {
                    staticClass: "footer__link",
                    attrs: {
                        to: e.localePath({
                            name: "shop"
                        })
                    }
                }, [e._v(e._s(e.$t("cFooter.shop")))]), n("nuxt-link", {
                    staticClass: "footer__link",
                    attrs: {
                        to: e.localePath({
                            name: "profile"
                        })
                    }
                }, [e._v(e._s(e.$t("cFooter.profile")))]), n("div", {
                    staticStyle: {
                        display: "flex",
                        "column-gap": "8px"
                    }
                }, [n("nuxt-link", {
                    staticClass: "footer__link",
                    staticStyle: {
                        "font-size": "10px"
                    },
                    attrs: {
                        to: e.switchLocalePath("ru")
                    }
                }, [e._v("RU")]), n("nuxt-link", {
                    staticClass: "footer__link",
                    staticStyle: {
                        "font-size": "10px"
                    },
                    attrs: {
                        to: e.switchLocalePath("kk")
                    }
                }, [e._v("KZ")]), n("nuxt-link", {
                    staticClass: "footer__link",
                    staticStyle: {
                        "font-size": "10px"
                    },
                    attrs: {
                        to: e.switchLocalePath("uk")
                    }
                }, [e._v("UA")]), n("nuxt-link", {
                    staticClass: "footer__link",
                    staticStyle: {
                        "font-size": "10px"
                    },
                    attrs: {
                        to: e.switchLocalePath("uz")
                    }
                }, [e._v("UZ")]), n("nuxt-link", {
                    staticClass: "footer__link",
                    staticStyle: {
                        "font-size": "10px"
                    },
                    attrs: {
                        to: e.switchLocalePath("be")
                    }
                }, [e._v("BY")])], 1)], 1)]), n("div", {
                    staticClass: "footer__menu"
                }, [n("div", {
                    staticClass: "footer__links"
                }, [n("nuxt-link", {
                    staticClass: "footer__link",
                    attrs: {
                        to: e.localePath({
                            name: "servers"
                        })
                    }
                }, [e._v(e._s(e.$t("cFooter.servers")))]), n("nuxt-link", {
                    staticClass: "footer__link",
                    attrs: {
                        to: e.localePath({
                            name: "about-us"
                        })
                    }
                }, [e._v(e._s(e.$t("cFooter.aboutUs")))]), "ru" === e.$i18n.locale ? n("a", {
                    staticClass: "footer__link",
                    attrs: {
                        href: "https://vk.com/arizonastaterp",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("cFooter.vk")))]) : e._e(), n("a", {
                    staticClass: "footer__link",
                    attrs: {
                        href: "https://www.youtube.com/c/ArizonaGames1",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("cFooter.youtube")))]), n("a", {
                    staticClass: "footer__link",
                    attrs: {
                        href: "https://t.me/arizona_rpcom",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("cFooter.telegram")))]), n("a", {
                    staticClass: "footer__link",
                    attrs: {
                        href: "https://boosty.to/arizona_games",
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("cFooter.boosty")))])], 1)]), e._m(0), n("div", {
                    staticClass: "footer__up-container"
                }, [n("button", {
                    staticClass: "footer__up",
                    on: {
                        click: e.slideUp
                    }
                })])])])
            }), o, !1, null, null, null);
        t.default = component.exports;
        installComponents(component, {
            Footer: n(123).default
        })
    }, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = {
                computed: {
                    bcrumbs() {
                        return this.$store.state.breadcrumbs.items
                    }
                }
            },
            r = (n(312), n(13)),
            component = Object(r.a)(o, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "breadcrumbs"
                }, [n("div", {
                    staticClass: "breadcrumbs__wrapper container"
                }, [n("ul", {
                    staticClass: "breadcrumbs__list",
                    attrs: {
                        itemscope: "",
                        itemtype: "http://schema.org/BreadcrumbList"
                    }
                }, e._l(e.bcrumbs, (function(t, o) {
                    return n("li", {
                        key: o,
                        attrs: {
                            itemprop: "itemListElement",
                            itemscope: "",
                            itemtype: "http://schema.org/ListItem"
                        }
                    }, [o + 1 < e.bcrumbs.length ? [n("nuxt-link", {
                        attrs: {
                            to: e.localePath(t.url),
                            itemprop: "item"
                        }
                    }, [n("span", {
                        attrs: {
                            itemprop: "name"
                        },
                        domProps: {
                            textContent: e._s(t.name)
                        }
                    })])] : [n("nuxt-link", {
                        attrs: {
                            to: e.localePath(t.url),
                            itemprop: "item"
                        }
                    }), e._v(" "), n("span", {
                        attrs: {
                            itemprop: "name"
                        },
                        domProps: {
                            textContent: e._s(t.name)
                        }
                    })], e._v(" "), n("meta", {
                        attrs: {
                            itemprop: "position",
                            content: o + 1
                        }
                    })], 2)
                })), 0)])])
            }), [], !1, null, null, null);
        t.default = component.exports
    }, , , , , function(e, t, n) {
        n(23), n(42), n(112), n(44), n(40),
            function(e, t, n) {
                var o = [],
                    r = [],
                    l = {
                        _version: "3.6.0",
                        _config: {
                            classPrefix: "",
                            enableClasses: !0,
                            enableJSClass: !0,
                            usePrefixes: !0
                        },
                        _q: [],
                        on(e, t) {
                            var n = this;
                            setTimeout((function() {
                                t(n[e])
                            }), 0)
                        },
                        addTest(e, t, n) {
                            r.push({
                                name: e,
                                fn: t,
                                options: n
                            })
                        },
                        addAsyncTest(e) {
                            r.push({
                                name: null,
                                fn: e
                            })
                        }
                    },
                    c = function() {};

                function d(e, t) {
                    return typeof e === t
                }
                c.prototype = l, c = new c;
                var h, m, f = t.documentElement,
                    y = "svg" === f.nodeName.toLowerCase();

                function v(e) {
                    var t = f.className,
                        n = c._config.classPrefix || "";
                    if (y && (t = t.baseVal), c._config.enableJSClass) {
                        var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                        t = t.replace(o, "$1" + n + "js$2")
                    }
                    c._config.enableClasses && (t += " " + n + e.join(" " + n), y ? f.className.baseVal = t : f.className = t)
                }

                function _(e, t) {
                    if ("object" == typeof e)
                        for (var n in e) h(e, n) && _(n, e[n]);
                    else {
                        var o = (e = e.toLowerCase()).split("."),
                            r = c[o[0]];
                        if (2 == o.length && (r = r[o[1]]), void 0 !== r) return c;
                        t = "function" == typeof t ? t() : t, 1 == o.length ? c[o[0]] = t : (!c[o[0]] || c[o[0]] instanceof Boolean || (c[o[0]] = new Boolean(c[o[0]])), c[o[0]][o[1]] = t), v([(t && 0 != t ? "" : "no-") + o.join("-")]), c._trigger(e, t)
                    }
                    return c
                }
                h = d(m = {}.hasOwnProperty, "undefined") || d(m.call, "undefined") ? function(object, e) {
                        return e in object && d(object.constructor.prototype[e], "undefined")
                    } : function(object, e) {
                        return m.call(object, e)
                    }, l._l = {}, l.on = function(e, t) {
                        this._l[e] || (this._l[e] = []), this._l[e].push(t), c.hasOwnProperty(e) && setTimeout((function() {
                            c._trigger(e, c[e])
                        }), 0)
                    }, l._trigger = function(e, t) {
                        if (this._l[e]) {
                            var n = this._l[e];
                            setTimeout((function() {
                                var i;
                                for (i = 0; i < n.length; i++)(0, n[i])(t)
                            }), 0), delete this._l[e]
                        }
                    }, c._q.push((function() {
                        l.addTest = _
                    })), c.addAsyncTest((function() {
                        var e = [{
                                uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                                name: "webp"
                            }, {
                                uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                                name: "webp.alpha"
                            }, {
                                uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                                name: "webp.animation"
                            }, {
                                uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                                name: "webp.lossless"
                            }],
                            t = e.shift();

                        function n(e, t, n) {
                            var image = new Image;

                            function o(t) {
                                var o = !(!t || "load" !== t.type) && 1 == image.width;
                                _(e, "webp" === e && o ? new Boolean(o) : o), n && n(t)
                            }
                            image.onerror = o, image.onload = o, image.src = t
                        }
                        n(t.name, t.uri, (function(t) {
                            if (t && "load" === t.type)
                                for (var i = 0; i < e.length; i++) n(e[i].name, e[i].uri)
                        }))
                    })),
                    function() {
                        var e, t, n, l, h, m;
                        for (var f in r)
                            if (r.hasOwnProperty(f)) {
                                if (e = [], (t = r[f]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                                for (l = d(t.fn, "function") ? t.fn() : t.fn, h = 0; h < e.length; h++) 1 === (m = e[h].split(".")).length ? c[m[0]] = l : (!c[m[0]] || c[m[0]] instanceof Boolean || (c[m[0]] = new Boolean(c[m[0]])), c[m[0]][m[1]] = l), o.push((l ? "" : "no-") + m.join("-"))
                            }
                    }(), v(o), delete l.addTest, delete l.addAsyncTest;
                for (var i = 0; i < c._q.length; i++) c._q[i]();
                e.Modernizr = c
            }(window, document)
    }, , , , , function(e, t, n) {
        var content = n(294);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("44088041", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        var content = n(259);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("6ac3c623", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(261);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("7e56e4e3", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(262);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("db85c866", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(293);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("05f4f81a", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(300);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("c72e2e5e", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(310);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("33164fa7", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(313);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("f66ccd5e", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(315);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("4e8213bc", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        var content = n(317);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("66af6db1", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        var o = n(2),
            r = (n(11), n(0)),
            l = n(1),
            c = window.__NUXT__;

        function d() {
            if (!this._hydrated) return this.$fetch()
        }

        function h() {
            if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
                var e;
                this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var data = c.fetch[this._fetchKey];
                if (data && data._error) this.$fetchState.error = data._error;
                else
                    for (var t in data) r.default.set(this.$data, t, data[t])
            }
        }

        function m() {
            return this._fetchPromise || (this._fetchPromise = f.call(this).then((() => {
                delete this._fetchPromise
            }))), this._fetchPromise
        }

        function f() {
            return y.apply(this, arguments)
        }

        function y() {
            return (y = Object(o.a)((function*() {
                this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1;
                var e = null,
                    t = Date.now();
                try {
                    yield this.$options.fetch.call(this)
                } catch (t) {
                    0,
                    e = Object(l.p)(t)
                }
                var n = this._fetchDelay - (Date.now() - t);
                n > 0 && (yield new Promise((e => setTimeout(e, n)))), this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((() => this.$nuxt.nbFetching--))
            }))).apply(this, arguments)
        }
        t.a = {
            beforeCreate() {
                Object(l.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, r.default.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }), this.$fetch = m.bind(this), Object(l.a)(this, "created", h), Object(l.a)(this, "beforeMount", d))
            }
        }
    }, , function(e, t, n) {
        var content = n(295);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("f67576ae", content, !0, {
            sourceMap: !1
        })
    }, function(e, t, n) {
        e.exports = n.p + "img/navbar-logo.c7f96c6.png"
    }, , function(e, t, n) {
        var content = n(305);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, n(19).default)("1de78dae", content, !0, {
            sourceMap: !1
        })
    }, , function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iZmlsbDogd2hpdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGQ9Ik00MzYgMTI0SDEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEyVjgwYzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNDI0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MzJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnptMCAxNjBIMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTMyYzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNDI0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MzJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnptMCAxNjBIMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTMyYzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNDI0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MzJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMnoiLz48L3N2Zz4K"
    }, , , , , , , , function(e, t, n) {
        n(231), e.exports = n(232)
    }, , function(e, t, n) {
        "use strict";
        n.r(t),
            function(e) {
                var t = n(2),
                    o = (n(11), n(50), n(8), n(12), n(34), n(0)),
                    r = n(199),
                    l = n(47),
                    c = n(1),
                    d = n(36),
                    h = n(215),
                    m = n(87);
                o.default.__nuxt__fetch__mixin__ || (o.default.mixin(h.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(m.a.name, m.a), o.default.component("NLink", m.a), e.fetch || (e.fetch = r.a);
                var f, y, v = [],
                    _ = window.__NUXT__ || {},
                    k = _.config || {};
                k._app && (n.p = Object(c.v)(k._app.cdnURL, k._app.assetsPath)), Object.assign(o.default.config, {
                    silent: !0,
                    performance: !1
                });
                var A = o.default.config.errorHandler || console.error;

                function P(e, t, n) {
                    for (var o = component => {
                            var e = function(component, e) {
                                if (!component || !component.options || !component.options[e]) return {};
                                var option = component.options[e];
                                if ("function" == typeof option) {
                                    for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++) n[o - 2] = arguments[o];
                                    return option(...n)
                                }
                                return option
                            }(component, "transition", t, n) || {};
                            return "string" == typeof e ? {
                                name: e
                            } : e
                        }, r = n ? Object(c.g)(n) : [], l = Math.max(e.length, r.length), d = [], h = function(i) {
                            var t = Object.assign({}, o(e[i])),
                                n = Object.assign({}, o(r[i]));
                            Object.keys(t).filter((e => void 0 !== t[e] && !e.toLowerCase().includes("leave"))).forEach((e => {
                                n[e] = t[e]
                            })), d.push(n)
                        }, i = 0; i < l; i++) h(i);
                    return d
                }

                function w(e, t, n) {
                    return x.apply(this, arguments)
                }

                function x() {
                    return (x = Object(t.a)((function*(e, t, n) {
                        this._routeChanged = Boolean(f.nuxt.err) || t.name !== e.name, this._paramChanged = !this._routeChanged && t.path !== e.path, this._queryChanged = !this._paramChanged && t.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(c.i)(e.query, t.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                        try {
                            if (this._queryChanged)(yield Object(c.r)(e, ((e, t) => ({
                                Component: e,
                                instance: t
                            })))).some((n => {
                                var {
                                    Component: o,
                                    instance: r
                                } = n, l = o.options.watchQuery;
                                return !0 === l || (Array.isArray(l) ? l.some((e => this._diffQuery[e])) : "function" == typeof l && l.apply(r, [e.query, t.query]))
                            })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                            n()
                        } catch (c) {
                            var o = c || {},
                                r = o.statusCode || o.status || o.response && o.response.status || 500,
                                l = o.message || "";
                            if (/^Loading( CSS)? chunk (\d)+ failed\./.test(l)) return void window.location.reload(!0);
                            this.error({
                                statusCode: r,
                                message: l
                            }), this.$nuxt.$emit("routeChanged", e, t, o), n()
                        }
                    }))).apply(this, arguments)
                }

                function S(e) {
                    return Object(c.d)(e, function() {
                        var e = Object(t.a)((function*(e, t, n, o, r) {
                            "function" != typeof e || e.options || (e = yield e());
                            var l = function(e, t) {
                                return _.serverRendered && t && Object(c.b)(e, t), e._Ctor = e, e
                            }(Object(c.s)(e), _.data ? _.data[r] : null);
                            return n.components[o] = l, l
                        }));
                        return function(t, n, o, r, l) {
                            return e.apply(this, arguments)
                        }
                    }())
                }

                function z(e, t, n) {
                    var o = ["nuxti18n"],
                        r = !1;
                    if (void 0 !== n && (o = [], (n = Object(c.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), e.forEach((e => {
                            e.options.middleware && (o = o.concat(e.options.middleware))
                        }))), o = o.map((e => "function" == typeof e ? e : ("function" != typeof l.a[e] && (r = !0, this.error({
                            statusCode: 500,
                            message: "Unknown middleware " + e
                        })), l.a[e]))), !r) return Object(c.o)(o, t)
                }

                function T(e, t, n) {
                    return R.apply(this, arguments)
                }

                function R() {
                    return (R = Object(t.a)((function*(e, n, o) {
                        var r = this;
                        if (!1 === this._routeChanged && !1 === this._paramChanged && !1 === this._queryChanged) return o();
                        if (e === n) v = [], !0;
                        else {
                            var l = [];
                            v = Object(c.g)(n, l).map(((e, i) => Object(c.c)(n.matched[l[i]].path)(n.params)))
                        }
                        var h = !1;
                        yield Object(c.t)(f, {
                            route: e,
                            from: n,
                            next: (path => {
                                n.path === path.path && this.$loading.finish && this.$loading.finish(), n.path !== path.path && this.$loading.pause && this.$loading.pause(), h || (h = !0, o(path))
                            }).bind(this)
                        }), this._dateLastError = f.nuxt.dateErr, this._hadError = Boolean(f.nuxt.err);
                        var m = [],
                            y = Object(c.g)(e, m);
                        if (!y.length) {
                            if (yield z.call(this, y, f.context), h) return;
                            var _ = (d.a.options || d.a).layout,
                                k = yield this.loadLayout("function" == typeof _ ? _.call(d.a, f.context) : _);
                            if (yield z.call(this, y, f.context, k), h) return;
                            return f.context.error({
                                statusCode: 404,
                                message: "This page could not be found"
                            }), o()
                        }
                        y.forEach((e => {
                            e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData, e.options.fetch = e._Ctor.options.fetch)
                        })), this.setTransitions(P(y, e, n));
                        try {
                            if (yield z.call(this, y, f.context), h) return;
                            if (f.context._errored) return o();
                            var A = y[0].options.layout;
                            if ("function" == typeof A && (A = A(f.context)), A = yield this.loadLayout(A), yield z.call(this, y, f.context, A), h) return;
                            if (f.context._errored) return o();
                            var w, x = !0;
                            try {
                                for (var S of y)
                                    if ("function" == typeof S.options.validate && !(x = yield S.options.validate(f.context))) break
                            } catch (e) {
                                return this.error({
                                    statusCode: e.statusCode || "500",
                                    message: e.message
                                }), o()
                            }
                            if (!x) return this.error({
                                statusCode: 404,
                                message: "This page could not be found"
                            }), o();
                            yield Promise.all(y.map(function() {
                                var o = Object(t.a)((function*(t, i) {
                                    t._path = Object(c.c)(e.matched[m[i]].path)(e.params), t._dataRefresh = !1;
                                    var o = t._path !== v[i];
                                    if (r._routeChanged && o) t._dataRefresh = !0;
                                    else if (r._paramChanged && o) {
                                        var l = t.options.watchParam;
                                        t._dataRefresh = !1 !== l
                                    } else if (r._queryChanged) {
                                        var d = t.options.watchQuery;
                                        !0 === d ? t._dataRefresh = !0 : Array.isArray(d) ? t._dataRefresh = d.some((e => r._diffQuery[e])) : "function" == typeof d && (w || (w = Object(c.h)(e)), t._dataRefresh = d.apply(w[i], [e.query, n.query]))
                                    }
                                    if (r._hadError || !r._isMounted || t._dataRefresh) {
                                        var h = [],
                                            y = t.options.asyncData && "function" == typeof t.options.asyncData,
                                            _ = Boolean(t.options.fetch) && t.options.fetch.length,
                                            k = y && _ ? 30 : 45;
                                        if (y) {
                                            var A = Object(c.q)(t.options.asyncData, f.context);
                                            A.then((e => {
                                                Object(c.b)(t, e), r.$loading.increase && r.$loading.increase(k)
                                            })), h.push(A)
                                        }
                                        if (r.$loading.manual = !1 === t.options.loading, _) {
                                            var p = t.options.fetch(f.context);
                                            p && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((e => {
                                                r.$loading.increase && r.$loading.increase(k)
                                            })), h.push(p)
                                        }
                                        return Promise.all(h)
                                    }
                                }));
                                return function(e, t) {
                                    return o.apply(this, arguments)
                                }
                            }())), h || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o())
                        } catch (t) {
                            var T = t || {};
                            if ("ERR_REDIRECT" === T.message) return this.$nuxt.$emit("routeChanged", e, n, T);
                            v = [], Object(c.k)(T);
                            var R = (d.a.options || d.a).layout;
                            "function" == typeof R && (R = R(f.context)), yield this.loadLayout(R), this.error(T), this.$nuxt.$emit("routeChanged", e, n, T), o()
                        }
                    }))).apply(this, arguments)
                }

                function O(e, t) {
                    Object(c.d)(e, ((e, t, n, r) => ("object" != typeof e || e.options || ((e = o.default.extend(e))._Ctor = e, n.components[r] = e), e)))
                }

                function M(e) {
                    var t = Boolean(this.$options.nuxt.err);
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (t = !1);
                    var n = t ? (d.a.options || d.a).layout : e.matched[0].components.default.options.layout;
                    "function" == typeof n && (n = n(f.context)), this.setLayout(n)
                }

                function C(e) {
                    e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error()
                }

                function j(e, t) {
                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                        var n = Object(c.h)(e),
                            r = Object(c.g)(e),
                            l = !1;
                        o.default.nextTick((() => {
                            n.forEach(((e, i) => {
                                if (e && !e._isDestroyed && e.constructor._dataRefresh && r[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                    var t = e.constructor.options.data.call(e);
                                    for (var n in t) o.default.set(e.$data, n, t[n]);
                                    l = !0
                                }
                            })), l && window.$nuxt.$nextTick((() => {
                                window.$nuxt.$emit("triggerScroll")
                            })), C(this)
                        }))
                    }
                }

                function L(e) {
                    window.onNuxtReadyCbs.forEach((t => {
                        "function" == typeof t && t(e)
                    })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e), y.afterEach(((t, n) => {
                        o.default.nextTick((() => e.$nuxt.$emit("routeChanged", t, n)))
                    }))
                }

                function N() {
                    return (N = Object(t.a)((function*(e) {
                        f = e.app, y = e.router, e.store;
                        var t = new o.default(f),
                            n = _.layout || "default";
                        yield t.loadLayout(n), t.setLayout(n);
                        var r = () => {
                                t.$mount("#__nuxt"), y.afterEach(O), y.afterEach(M.bind(t)), y.afterEach(j.bind(t)), o.default.nextTick((() => {
                                    L(t)
                                }))
                            },
                            l = yield Promise.all(S(f.context.route));
                        if (t.setTransitions = t.$options.nuxt.setTransitions.bind(t), l.length && (t.setTransitions(P(l, y.currentRoute)), v = y.currentRoute.matched.map((e => Object(c.c)(e.path)(y.currentRoute.params)))), t.$loading = {}, _.error && t.error(_.error), y.beforeEach(w.bind(t)), y.beforeEach(T.bind(t)), _.serverRendered && Object(c.n)(_.routePath, t.context.route.path)) return r();
                        var d = () => {
                            O(y.currentRoute, y.currentRoute), M.call(t, y.currentRoute), C(t), r()
                        };
                        yield new Promise((e => setTimeout(e, 0))), T.call(t, y.currentRoute, y.currentRoute, (path => {
                            if (path) {
                                var e = y.afterEach(((t, n) => {
                                    e(), d()
                                }));
                                y.push(path, void 0, (e => {
                                    e && A(e)
                                }))
                            } else d()
                        }))
                    }))).apply(this, arguments)
                }
                Object(d.b)(null, _.config).then((function(e) {
                    return N.apply(this, arguments)
                })).catch(A)
            }.call(this, n(16))
    }, , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n(165)
    }, function(e, t, n) {
        var o = n(18)(!1);
        o.push([e.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]), e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(166)
    }, function(e, t, n) {
        var o = n(18)(!1);
        o.push([e.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), e.exports = o
    }, function(e, t, n) {
        var o = n(18),
            r = n(49),
            l = n(263),
            c = n(264),
            d = n(265),
            h = n(266),
            m = n(267),
            f = n(268),
            y = n(269),
            v = n(270),
            _ = n(271),
            k = n(272),
            A = n(273),
            P = n(274),
            w = n(275),
            x = n(276),
            S = n(277),
            z = n(278),
            T = n(279),
            R = n(280),
            O = n(281),
            M = n(282),
            C = n(283),
            j = n(284),
            L = n(285),
            N = n(286),
            D = n(287),
            E = n(288),
            I = n(289),
            $ = n(290),
            F = o(!1),
            B = r(l),
            G = r(l, {
                hash: "?#iefix"
            }),
            U = r(c),
            V = r(d),
            Y = r(h),
            K = r(m),
            Q = r(f),
            H = r(y),
            X = r(v),
            Z = r(_),
            J = r(k),
            W = r(A),
            ee = r(P),
            ae = r(w),
            te = r(x),
            ne = r(S),
            oe = r(z),
            ie = r(T),
            re = r(R),
            se = r(O),
            le = r(M),
            ce = r(C),
            ue = r(j),
            pe = r(L),
            de = r(N),
            he = r(D),
            me = r(E),
            fe = r(I),
            ge = r($);
        F.push([e.i, '@font-face{font-family:"GothamPro";src:url(' + B + ');src:local("GothamPro"),url(' + G + ') format("embedded-opentype"),url(' + U + ') format("woff"),url(' + V + ') format("truetype");font-weight:400;font-style:normal;font-display:swap}*,:after,:before{box-sizing:border-box}ol[class],ul[class]{padding:0;list-style:none}html{font-size:14px}@media(min-width:1921px){html{font-size:.7291666667vw}}body{margin:0;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5;font-family:"GothamPro",sans-serif;color:#fff;background-color:#000;background-repeat:no-repeat;background-position-x:center}table{border-collapse:collapse;border-spacing:0}img{max-width:100%;display:block}ul[class]{margin:0}button,input,select,textarea{font:inherit}svg{width:24px;height:24px}a{text-decoration:none;color:inherit}button{border:none;background-color:transparent;padding:0;cursor:pointer}@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}.container{width:1280px;margin-left:auto;margin-right:auto;padding:0 15px}@media(max-width:1921px){.container{width:1280px}}@media(max-width:1280px){.container{width:1024px}}@media(max-width:1024px){.container{width:768px}}@media(max-width:768px){.container{width:576px}}@media(max-width:576px){.container{width:100%;max-width:576px}}body{background-color:#192646}body.homepage div.layout{background-position-y:0,541px,1537px,3498px;background-repeat:no-repeat;background-position-x:center}.no-webp body.homepage div.layout{background-image:url(' + Y + "),url(" + K + "),url(" + Q + "),url(" + H + ")}.webp body.homepage div.layout{background-image:url(" + X + "),url(" + Z + "),url(" + J + "),url(" + W + ")}body.homepage{background-position-y:5684px;background-repeat:repeat-y;background-image:url(" + ee + ")}body.homepage div.layout__content{background-position:bottom;background-repeat:no-repeat}.no-webp body.homepage div.layout__content{background-image:url(" + ae + ")}.webp body.homepage div.layout__content{background-image:url(" + te + ")}body.bg-9,body.rating-page{background-position:top;background-size:cover}.no-webp body.bg-9,.no-webp body.rating-page{background-image:url(" + ne + ")}.webp body.bg-9,.webp body.rating-page{background-image:url(" + oe + ")}body.bg-9{background-size:cover;background-attachment:fixed}body.login{background-position-y:145px,top;background-position-x:center;background-size:auto,cover}.no-webp body.login{background-image:url(" + ie + "),url(" + re + ")}.webp body.login{background-image:url(" + ie + "),url(" + se + ")}@media(min-width:1921px){body.login{background-size:100%}}body.recovery-password-page{background-position:top;background-repeat:no-repeat}@media(min-width:1921px){body.recovery-password-page{background-size:100%}}body.shop{background-image:url(" + le + ");background-position:top;background-size:cover}body.lk,body.shop{background-repeat:no-repeat}body.lk{background-position:center 405px,top}.no-webp body.lk{background-image:url(" + ce + "),url(" + ue + ")}.webp body.lk{background-image:url(" + pe + "),url(" + de + ")}@media(max-width:768px){body.login{background-position:50%;background-size:cover}.no-webp body.login{background-image:url(" + re + ")}.webp body.login{background-image:url(" + se + ")}}@media(max-width:576px){body.lk{background-position:top;background-size:cover}.no-webp body.lk{background-image:url(" + he + ")}.webp body.lk{background-image:url(" + me + ")}body.shop{background-position:top;background-size:cover;background-repeat:repeat-y;background-attachment:fixed}.no-webp body.shop{background-image:url(" + fe + ")}.webp body.shop{background-image:url(" + ge + ")}}@media(min-width:1921px){body.login{background-position-y:145px}body.homepage{background-size:100%;background-position-y:0,541px,1537px,3498px,5684px}body.lk{background-position:center 405px,top;background-repeat:no-repeat;background-size:100%}.no-webp body.lk{background-image:url(" + ce + "),url(" + ue + ")}.webp body.lk{background-image:url(" + pe + "),url(" + de + ")}}.flex-centered{display:flex;align-items:center;justify-content:center}.dflex{display:flex}.jc-sb{justify-content:space-between}.jc-c{justify-content:center}.ai-c{align-items:center}", ""]), e.exports = F
    }, function(e, t, n) {
        e.exports = n.p + "fonts/GothamPro.8c7017f.eot"
    }, function(e, t, n) {
        e.exports = n.p + "fonts/GothamPro.774ec39.woff"
    }, function(e, t, n) {
        e.exports = n.p + "fonts/GothamPro.4f71921.ttf"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-1.2792991.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-2.8bbe1f9.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-3.3e358e6.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-4.4705e4e.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-1.207ff15.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-2.319b974.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-3.e0bb715.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-4.dcf3efb.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-4_l.a475af7.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-5.dcce4ae.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-5.3cbc0af.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-9.091f676.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-9.e5c93d7.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/login-bg-1.186e26f.png"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-6.0728f21.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-6.7cf067f.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-8.a086c99.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-figure-3.ebfa06b.png"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-7.5edb1b8.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-figure-3.0f52545.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-7.18aecd3.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-10.c880cf2.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-10.577a2be.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-11.b4465ad.jpg"
    }, function(e, t, n) {
        e.exports = n.p + "img/bg-11.5e7a9cf.webp"
    }, function(e, t, n) {
        e.exports = n.p + "img/logo-phoenix.17d3468.png"
    }, function(e, t, n) {
        e.exports = n.p + "img/navbar-logo.083d8b7.webp"
    }, function(e, t, n) {
        var o = n(18)(!1);
        o.push([e.i, '.nav--navbar .nav__list{display:flex;height:100%;border-bottom:2px solid #6378c7;justify-content:space-between}.nav--navbar .nav__list-item{display:flex;align-items:center;position:relative;transition:all .2s ease}.nav--navbar .nav__list-item:after{content:"";position:absolute;left:0;bottom:-2px;width:100%;height:2px;background-color:#ad3232;opacity:0;transition:all .2s ease}.nav--navbar .nav__list-item:hover:after{opacity:1}.nav--navbar .nav__list-item:hover>.nav__link{color:#fff;transform:translateY(-13px)}.nav--navbar .nav__link{color:#6378c7;text-transform:uppercase;font-size:15px;transition:all .2s ease;display:block;line-height:70px}@media(max-width:1024px){.nav--navbar .nav__link{line-height:50px}}@media(max-width:768px){.nav--navbar{padding:50px 0}.nav--navbar .nav__link{line-height:50px}.nav--navbar .nav__list{flex-direction:column;align-items:center;border-bottom:unset;margin-top:15px}}@media(min-width:1921px){.nav--navbar .nav__list{border-bottom-width:2px}.nav--navbar .nav__list-item:after{content:"";bottom:-2px;height:2px}.nav--navbar .nav__list-item:hover>.nav__link{transform:translateY(-13px)}.nav--navbar .nav__link{font-size:15px;line-height:70px}}', ""]), e.exports = o
    }, function(e, t, n) {
        var o = n(18)(!1);
        o.push([e.i, ".btn{cursor:pointer}.btn--red{background-color:#c92e2e;color:#fff;font-weight:500}.btn--red:hover{box-shadow:4px 4px 50px 5px rgba(173,50,50,.7)}.btn--navbar{line-height:50px;display:block;text-align:center}.btn--login{font-size:25px;font-weight:900;line-height:70px;height:70px;width:250px}@media(min-width:1921px){.btn--red:hover{box-shadow:4px 4px 50px 5px rgba(173,50,50,.7)}.btn--navbar{line-height:50px}}", ""]), e.exports = o
    }, function(e, t, n) {
        var o = n(18),
            r = n(49),
            l = n(296),
            c = n(297),
            d = n(298),
            h = o(!1),
            m = r(l),
            f = r(l, {
                hash: "?#iefix"
            }),
            y = r(c),
            v = r(d);
        h.push([e.i, '@font-face{font-family:"GothamPro";src:url(' + m + ');src:local("GothamPro Medium"),url(' + f + ') format("embedded-opentype"),url(' + y + ') format("woff"),url(' + v + ') format("truetype");font-weight:500;font-style:normal;font-display:swap}', ""]), e.exports = h
    }, function(e, t, n) {
        e.exports = n.p + "fonts/GothamPro-Medium.38b9efd.eot"
    }, function(e, t, n) {
        e.exports = n.p + "fonts/GothamPro-Medium.48d4d04.woff"
    }, function(e, t, n) {
        e.exports = n.p + "fonts/GothamPro-Medium.dca4b95.ttf"
    }, function(e, t, n) {
        "use strict";
        n(169)
    }, function(e, t, n) {
        var o = n(18),
            r = n(49),
            l = n(222),
            c = o(!1),
            d = r(l);
        c.push([e.i, ".navbar{display:grid;grid-template-columns:182px 1fr 182px;grid-column-gap:60px;height:112px;align-items:center;padding-top:40px}.navbar__logo-image{width:100%}.navbar__opener{display:none}.navbar__mobile-nav{background-color:#090e18}.navbar .vm--overlay{background-color:rgba(0,0,0,.8)}@media(max-width:1024px){.navbar{grid-template-columns:130px 1fr 130px;grid-column-gap:20px}}@media(max-width:768px){.navbar{grid-template-columns:130px 1fr;grid-column-gap:20px}.navbar__nav,.navbar__profile{display:none}.navbar__opener{display:block;width:45px;height:45px;background:transparent url(" + d + ") 50%/30px no-repeat;justify-self:end}.navbar__mobile-nav{text-align:center}.navbar__mobile-nav .btn--navbar{display:inline-block;padding:0 50px}}@media(min-width:1921px){.navbar{grid-template-columns:182px 1fr 182px;grid-column-gap:60px;height:72px40px;padding-top:40px}}", ""]), e.exports = c
    }, function(e, t, n) {
        e.exports = n.p + "img/visa-secure-white.c07df56.png"
    }, function(e, t, n) {
        e.exports = n.p + "img/visa-white.5411bea.png"
    }, function(e, t, n) {
        e.exports = n.p + "img/mastercard-white.23d5020.png"
    }, function(e, t, n) {
        e.exports = n.p + "img/mc-45px.f8e9d6f.png"
    }, function(e, t, n) {
        var o = n(18),
            r = n(49),
            l = n(306),
            c = n(307),
            d = n(308),
            h = o(!1),
            m = r(l),
            f = r(l, {
                hash: "?#iefix"
            }),
            y = r(c),
            v = r(d);
        h.push([e.i, '@font-face{font-family:"GothamPro";src:url(' + m + ');src:local("GothamPro Black"),url(' + f + ') format("embedded-opentype"),url(' + y + ') format("woff"),url(' + v + ') format("truetype");font-weight:900;font-style:normal;font-display:swap}', ""]), e.exports = h
    }, function(e, t, n) {
        e.exports = n.p + "fonts/GothamPro-Black.5d7af9a.eot"
    }, function(e, t, n) {
        e.exports = n.p + "fonts/GothamPro-Black.508486a.woff"
    }, function(e, t, n) {
        e.exports = n.p + "fonts/GothamPro-Black.8c2f478.ttf"
    }, function(e, t, n) {
        "use strict";
        n(170)
    }, function(e, t, n) {
        var o = n(18),
            r = n(49),
            l = n(311),
            c = o(!1),
            d = r(l);
        c.push([e.i, ".footer{background-color:#05070d;background-image:radial-gradient(ellipse at top,rgba(201,46,46,.2),transparent);border-top:1px solid #c92e2e;padding:35px 0}.footer__wrapper{display:flex;justify-content:space-between;align-items:center}.footer__copy{color:#fff;font-size:16px;font-weight:900}.footer__copy-text{color:#6378c7;font-size:13px}.footer__link{color:#6378c7;font-size:14px;display:block}.footer__link:hover{text-decoration:underline}.footer__docs,.footer__projects{margin-top:16px}.footer__up{width:50px;height:50px;background:#36427a url(" + d + ") 50% no-repeat;transition:background-color .2s}.footer__up:hover{background-color:#414f93}.footer__links{height:135px;display:flex;flex-direction:column;justify-content:space-between}.footer__contacts{display:grid;grid-template-columns:70px 70px;align-items:center;grid-gap:8px}.footer__contacts>img{max-width:70px}@media(max-width:1024px){.footer__menu{display:none}}@media(max-width:576px){.footer__wrapper{display:block}.footer__contacts{margin-top:16px;display:flex;justify-content:space-between;padding:0 16px}.footer__up-container{display:flex;justify-content:center;margin-top:32px}.footer__copy,.footer__docs,.footer__projects{text-align:center}}", ""]), e.exports = c
    }, function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAPCAYAAAARZmTlAAAAyElEQVQ4ja2UvQrCQBAGU/gsFhFFNApRFGtf2cI3sBTBUtEinaAgGkcWEpBL7mdjPtjq9m6Yu+UiILT6wAY4A1sgCd0bCpgAL6pZtAUZA3kNoMzsX4hcydMBkHyAeVNI4jEwk2ohieUNXMltV9eGgZkKqInBRQvSGDyAFdApRvfmAaUmZOQxuAMDwzr2gGTqpiVEmt8eg9gyIN0Ao6E07pQGZvmM9pEHYDNQGUnDyQLoKT5Pl1Emi0vgWjRIHRUGdUaHn7MyYP0F5fMXLotgNq8AAAAASUVORK5CYII="
    }, function(e, t, n) {
        "use strict";
        n(171)
    }, function(e, t, n) {
        var o = n(18)(!1);
        o.push([e.i, '.breadcrumbs{margin:16px 0;color:hsla(0,0%,100%,.8)}.breadcrumbs__list{display:flex}.breadcrumbs__list>li:not(.breadcrumbs__list>li:first-child){margin-left:15px;position:relative}.breadcrumbs__list>li:not(.breadcrumbs__list>li:first-child):before{content:">";position:absolute;font-size:10px;left:-10px;top:3px}', ""]), e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(172)
    }, function(e, t, n) {
        var o = n(18)(!1);
        o.push([e.i, ".layout{display:grid;grid-template-rows:max-content 1fr max-content;min-height:100vh}", ""]), e.exports = o
    }, function(e, t, n) {
        "use strict";
        n(173)
    }, function(e, t, n) {
        var o = n(18),
            r = n(49),
            l = n(318),
            c = o(!1),
            d = r(l);
        c.push([e.i, ".rates{position:relative}.rates_wrapper{display:flex;float:right;position:absolute;top:-40px;right:0}.rates_wrapper>span.rates_name{text-indent:-9999em;height:0;width:0}.rates_default,.rates_wrapper>span{display:inline-block;vertical-align:middle}.rates_default{width:125px;background:url(" + d + ") 0 0 repeat-x;position:relative;height:25px;overflow:hidden;margin-right:10px}.rates_default .rates_current,.rates_default a{padding:0;margin:0;position:absolute;top:0;left:0;text-indent:-1000em;height:25px;line-height:25px;outline:0;overflow:hidden}.rates_default .rates_current{z-index:11;background:url(" + d + ") 0 repeat-x}.rate a{cursor:pointer}.rate a:active,.rate a:focus,.rate a:hover{background:url(" + d + ") 0 100% repeat-x}", ""]), e.exports = c
    }, function(e, t, n) {
        e.exports = n.p + "img/stars.37c5799.png"
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "state", (function() {
            return o
        })), n.d(t, "mutations", (function() {
            return r
        }));
        var o = () => ({
                items: []
            }),
            r = {
                setItems(e, t) {
                    e.items = t
                }
            }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "state", (function() {
            return l
        })), n.d(t, "mutations", (function() {
            return c
        })), n.d(t, "actions", (function() {
            return d
        }));
        n(11);
        var o = n(17),
            r = n(35),
            l = () => ({
                USD: null,
                UAH: null
            }),
            c = {
                setUSD(e, t) {
                    e.USD = t
                },
                setUAH(e, t) {
                    e.UAH = t
                }
            },
            d = {
                load(e) {
                    var {
                        commit: t
                    } = e;
                    return new Promise((e => {
                        var n = "currencies",
                            l = Object(o.a)(n);
                        null === l ? this.$axios.get("/params/get-by-name", {
                            params: {
                                name: "USDRUB_COURSE"
                            }
                        }).then((l => {
                            this.$axios.get("/params/get-by-name", {
                                params: {
                                    name: "UAHRUB_COURSE"
                                }
                            }).then((c => {
                                Object(o.b)(n, {
                                    usd: l.data,
                                    uah: c.data
                                }, r.a), t("setUAH", c.data), t("setUSD", l.data), e()
                            }))
                        })) : (t("setUAH", l.uah), t("setUSD", l.usd), e())
                    }))
                }
            }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "state", (function() {
            return o
        })), n.d(t, "mutations", (function() {
            return r
        })), n.d(t, "actions", (function() {
            return l
        }));
        n(11);
        var o = () => ({
                items: []
            }),
            r = {
                setItems(e, t) {
                    e.items = t
                }
            },
            l = {
                load(e) {
                    var {
                        state: t,
                        commit: n
                    } = e;
                    return new Promise((e => {
                        0 !== t.items.length || n("setItems", [{
                            question: "как играть в samp",
                            answer: 'Перейти на сайт Arizona RP, нажать на большую кнопку "Начать игру", после вам предложит скачать Лаунчер Arizona RP. Далее следуйте инструкциям на экране и начинайте играть в самп!'
                        }, {
                            question: "как установить samp 0.3.7",
                            answer: 'Перейти на сайт arizona-rp. com, нажать на кнопку "Начать игру" и следовать инструкциям'
                        }, {
                            question: "the server didn't respond retrying samp 0.3.7 что делать",
                            answer: "Для этого необходимо попробовать перезагрузить ваш маршрутизатор (роутер), чтобы сменился Ваш IP-адрес"
                        }, {
                            question: "как скачать gta samp",
                            answer: "Для этого всего лишь необходимо скачать лаунчер Arizona RP"
                        }, {
                            question: "как запустить samp",
                            answer: 'На рабочем столе появится иконка (ярлык) лаунчера Аризоны РП, нажимаете, устанавливается GTA SAMP, вводите nickname и нажимаете "Играть"'
                        }, {
                            question: "где скачать samp",
                            answer: 'На сайте Arizona RP можно скачать лаунчер, который установит GTA SA-MP. Либо же следовать инструкциям в разделе "Как начать играть?"'
                        }, {
                            question: "Что такое SAMP?",
                            answer: "San Andreas Multiplayer (SAMP) - это модификация к Grand Theft Auto: San Andreas, которая добавляет в игру мультиплеер (игру по сети)"
                        }, {
                            question: "как начать играть в samp",
                            answer: 'Перейти на сайт Arizona RP, нажать на большую кнопку "Начать игру", после вам предложит скачать Лаунчер Arizona RP'
                        }, {
                            question: "the server is restarting samp что делать",
                            answer: "Это указывает на то, что у вас нестабильное соединение с сервером, то есть у вас проблемы с интернетом. Перезагрузите роутер (wi-fi), если не помогает, обратитесь к провайдеру"
                        }, {
                            question: "что делать если вместо samp загружается обычная gta",
                            answer: "Это значит, что вы неправильно указали путь к GTA в клиенте самп (нажмите на шертеренку в клиенте самп), если оказалось так что путь указан верно, измените совместимость в файле gta_sa.exe на Win XP"
                        }, {
                            question: "samp addon что это",
                            answer: "SAMP Addon - это дополнительная настройка SAMP, которая улучшает оптимизацию, фпс и многое другое"
                        }, {
                            question: "как установить samp на стим",
                            answer: "Необходимо скачать клиент, после устанавливаем SAMP в папку игры [. . . \\Steam\\SteamApps\\common\\Grand Theft Auto San Andreas], затем в папке Grand Theft Auto San Andreas файл gta-sa переименовываем в «gta-sa. . . ». Через нее будет запускаться одиночный режим, который не будет мешать запуску установленной модификации. Переименовываем файл samp.exe в gta-sa.exe"
                        }, {
                            question: "unable to execute samp 0. 3. 7 что делать",
                            answer: "Запустите samp.exe в режиме совместимости с более ранней версией ОС. К примеру, пробуйте режим совместимости с Win XP. Удалите файл gta_sa.set. Путь: Users\\Имя пользователя\\Documents\\GTA San Andreas User Files. Убедитесь, что путь к папке с GTA SA указан верно"
                        }, {
                            question: "samp rp как заработать много денег",
                            answer: "На нашем проекте очень много способов заработка, от начальных работ, вплоть до владения собственным бизнесом"
                        }, {
                            question: "thanks for reporting this problem. samp что делать",
                            answer: "Это означает что вас крашнуло, для этого удалите моды, ибо они могут конфликтовать, либо сразу переустановите GTA SAMP"
                        }, {
                            question: "как включить время в чате samp",
                            answer: "Для этого вам надо открыть чат (F6), затем прописать команду (/timestamp)"
                        }, {
                            question: "что такое ск в samp",
                            answer: "СК - это spawn kill, то есть убийство на респе"
                        }, {
                            question: "почему вместо samp запускается обычная gta",
                            answer: "Это значит, что вы неправильно указали путь к GTA в клиенте самп (нажмите на шертеренку в клиенте самп), если оказалось так что путь указан верно, измените совместимость в файле gta_sa.exe на Win XP"
                        }, {
                            question: "как зарегистрироваться в samp",
                            answer: "Регистрация происходит в самой игре, вам необходимо указать как узнали о нас, затем придумать пароль от аккаунта"
                        }, {
                            question: "что такое мг в samp",
                            answer: 'МГ - "Meta Gaming" - Использование информации из реального мира в игровой чат (сокращенно: ООС в ис)'
                        }, {
                            question: "samp вылетает когда сажусь в машину",
                            answer: "Попробуйте переустановить GTA SAMP"
                        }, {
                            question: "что такое ooc информация samp",
                            answer: "Out Of Character (ООС) - вся информация, касающаяся лично вас, а не вашего персонажа"
                        }, {
                            question: "как изменить кнопку чата в samp",
                            answer: "Есть специальные скрипты, которыми вы можете изменить кнопку"
                        }, {
                            question: "как понизить пинг в samp",
                            answer: "Используйте более быстрый интернет, чтобы пинг был маленьким"
                        }, {
                            question: "retrieving info samp 0.3.7 что делать",
                            answer: "Сервер не отвечает, либо проблемы у вас с интернетом, либо сервер не работает"
                        }, {
                            question: "что такое dm samp",
                            answer: "DM - убийство без причины, нанесение урона без причин"
                        }, {
                            question: "you are banned from this server samp что делать",
                            answer: "Перезагрузите роутер (wi-fi), если проблема не пропала, значит вы забанены на данном сервере по ip адресу"
                        }, {
                            question: "server closed the connection samp 0.3.7 что делать",
                            answer: "Сервер закрыл соединение, перезайдите на сервер, а если он попрежнему закрыт, то ждите включения сервера"
                        }, {
                            question: "как улучшить графику в samp",
                            answer: "В интернете море модификаций, которые улучшаю графику, но будьте аккуратны, не попадитесь на вирусы!"
                        }, {
                            question: "как перенести аккаунт samp rp",
                            answer: "На Arizona RP не предусмотрен перенос аккаунтов"
                        }, {
                            question: "что такое ic информация samp",
                            answer: "In Character (IC) - чат, в котором информацию может узнать ваш персонаж, причем только в игре"
                        }, {
                            question: "как стрелять с пассажирского места в samp",
                            answer: "Необходимо нажать клавишу H"
                        }, {
                            question: "как открыть чат в samp",
                            answer: "Чат открывается на клавишу F6"
                        }, {
                            question: "как отключить поворот головы в samp",
                            answer: "Введите команду в чат: /headmove"
                        }, {
                            question: "что делать если не запускается samp",
                            answer: "Переустановите SAMP"
                        }, {
                            question: "что такое wh samp",
                            answer: "Это читы, за которые вы можете получить бан"
                        }, {
                            question: "как выйти из фракции в samp",
                            answer: "Если у вас есть Titan VIP, то можно выйти командой /out, если нет, то тогда только через лидера / заместителя фракции"
                        }, {
                            question: "samp rp какая работа лучше",
                            answer: "На серверах Arizona Role Play все работы интересны и хороши, Вам нужно определиться - чем нравится заниматься больше всего"
                        }, {
                            question: "что лучше samp или crmp",
                            answer: "SAMP, тем что там больше возможностей , которые можно было бы реализовать"
                        }, {
                            question: "как правильно вступить в банду samp",
                            answer: "Вам требуется приехать на респаун банды в которую вы хотите вступить. После вам надо найти лидера/заместителя банды"
                        }, {
                            question: "как убрать ограничение фпс в samp",
                            answer: "/fpslimit 0"
                        }, {
                            question: "какая версия гта нужна для samp",
                            answer: "Версия сампа 0.3.7"
                        }, {
                            question: "где находится мэрия в samp",
                            answer: "/gps - Важные места"
                        }]), e()
                    }))
                }
            }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "state", (function() {
            return l
        })), n.d(t, "mutations", (function() {
            return c
        })), n.d(t, "actions", (function() {
            return d
        }));
        n(11);
        var o = n(17),
            r = n(35),
            l = () => ({
                items: [],
                postsCount: null
            }),
            c = {
                setItems(e, t) {
                    e.items = t
                },
                setPostsCount(e, t) {
                    e.postsCount = t
                }
            },
            d = {
                load(e, t) {
                    var {
                        state: n,
                        commit: l,
                        dispatch: c
                    } = e, d = t && void 0 !== t.amount ? t.amount : 4, h = d - 0;
                    return null === n.postsCount && c("loadPostsCount"), new Promise((e => {
                        var t = "post-data-".concat(h, "-").concat(0),
                            n = Object(o.a)(t);
                        null === n ? this.$axios.get("/post/get", {
                            params: {
                                count: h,
                                offset: 0
                            }
                        }).then((n => {
                            var {
                                data: data
                            } = n;
                            l("setItems", data), Object(o.b)(t, data, r.c), e()
                        })) : (l("setItems", n), e())
                    }))
                },
                loadPostsCount(e) {
                    var {
                        commit: t
                    } = e;
                    return new Promise((e => {
                        var n = "post-count",
                            l = Object(o.a)(n);
                        null === l ? this.$axios.get("/post/count").then((l => {
                            var {
                                data: data
                            } = l;
                            t("setPostsCount", data), Object(o.b)(n, data, r.c), e()
                        })) : (t("setPostsCount", l), e())
                    }))
                }
            }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "state", (function() {
            return l
        })), n.d(t, "mutations", (function() {
            return c
        })), n.d(t, "actions", (function() {
            return d
        }));
        n(11);
        var o = n(17),
            r = n(35),
            l = () => ({
                items: null
            }),
            c = {
                setItems(e, t) {
                    e.items = t
                }
            },
            d = {
                load(e) {
                    var {
                        commit: t
                    } = e;
                    return new Promise((e => {
                        var n = "shop-products",
                            l = Object(o.a)(n);
                        null === l ? this.$axios.get("/product/get-all").then((l => {
                            var {
                                data: data
                            } = l;
                            t("setItems", data), Object(o.b)(n, data, r.d), e()
                        })) : (t("setItems", l), e())
                    }))
                }
            }
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "state", (function() {
            return l
        })), n.d(t, "mutations", (function() {
            return c
        })), n.d(t, "actions", (function() {
            return d
        }));
        n(11);
        var o = n(17),
            r = n(35),
            l = () => ({
                list: null
            }),
            c = {
                setList(e, t) {
                    e.list = t
                }
            },
            d = {
                load(e) {
                    var {
                        commit: t
                    } = e;
                    return new Promise((e => {
                        var n = "servers-data",
                            l = Object(o.a)(n);
                        null === l ? this.$axios.get("/server/get-all").then((l => {
                            var {
                                data: data
                            } = l;
                            t("setList", data), Object(o.b)(n, data, r.e), e()
                        })) : (t("setList", l), e())
                    }))
                }
            }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
        "use strict";
        n.r(t);
        n(316);
        var o = n(13),
            component = Object(o.a)({}, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "rates container"
                }, [n("div", {
                    staticClass: "rates_wrapper",
                    attrs: {
                        itemscope: "",
                        itemtype: "http://schema.org/Product"
                    }
                }, [n("span", {
                    staticClass: "rates_name",
                    attrs: {
                        itemprop: "name"
                    }
                }, [e._v(e._s(e.$t("cRates.servers")))]), e._v(" "), e._m(0), e._v(" "), e._m(1)])])
            }), [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "rates_default"
                }, [n("div", {
                    staticClass: "rates_current",
                    staticStyle: {
                        width: "95%"
                    }
                }), e._v(" "), n("span", {
                    staticClass: "rate"
                }, [n("a", {
                    staticStyle: {
                        width: "20%",
                        "z-index": "16"
                    },
                    attrs: {
                        "data-href": "/servers-rate/1",
                        title: "1/5",
                        rel: "nofollow"
                    }
                }, [e._v("1")])]), e._v(" "), n("span", {
                    staticClass: "rate"
                }, [n("a", {
                    staticStyle: {
                        width: "40%",
                        "z-index": "15"
                    },
                    attrs: {
                        "data-href": "/servers-rate/2",
                        title: "2/5",
                        rel: "nofollow"
                    }
                }, [e._v("2")])]), e._v(" "), n("span", {
                    staticClass: "rate"
                }, [n("a", {
                    staticStyle: {
                        width: "60%",
                        "z-index": "14"
                    },
                    attrs: {
                        "data-href": "/servers-rate/3",
                        title: "3/5",
                        rel: "nofollow"
                    }
                }, [e._v("3")])]), e._v(" "), n("span", {
                    staticClass: "rate"
                }, [n("a", {
                    staticStyle: {
                        width: "80%",
                        "z-index": "13"
                    },
                    attrs: {
                        "data-href": "/servers-rate/4",
                        title: "4/5",
                        rel: "nofollow"
                    }
                }, [e._v("4")])]), e._v(" "), n("span", {
                    staticClass: "rate"
                }, [n("a", {
                    staticStyle: {
                        width: "100%",
                        "z-index": "12"
                    },
                    attrs: {
                        "data-href": "/servers-rate/5",
                        title: "5/5",
                        rel: "nofollow"
                    }
                }, [e._v("5")])])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("span", {
                    staticClass: "aggregateRating",
                    attrs: {
                        itemprop: "aggregateRating",
                        itemscope: "",
                        itemtype: "http://schema.org/AggregateRating"
                    }
                }, [n("span", {
                    staticClass: "rating",
                    attrs: {
                        itemprop: "ratingValue"
                    }
                }, [e._v("4.75")]), n("span", [e._v("/5")]), e._v(" "), n("span", {
                    staticClass: "totalvotes",
                    attrs: {
                        itemprop: "reviewCount"
                    }
                }, [e._v("849")])])
            }], !1, null, null, null);
        t.default = component.exports
    }],
    [
        [230, 61, 4, 62]
    ]
]);