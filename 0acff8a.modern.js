(window.webpackJsonp = window.webpackJsonp || []).push([
    [49], {
        452: function(t, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return n
            }));
            o(453);

            function n(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = {
                        title: t.title,
                        link: [],
                        meta: [{
                            hid: "og:type",
                            name: "og:type",
                            content: t.type ? t.type : "article"
                        }, {
                            hid: "og:title",
                            name: "og:title",
                            content: t.title
                        }, {
                            hid: "og:image",
                            name: "og:image",
                            content: t.image ? t.image : o(218)
                        }, {
                            hid: "og:site_name",
                            name: "og:site_name",
                            content: "Arizona RP SAMP"
                        }]
                    };
                if (void 0 !== t.canonicalUrl) n.link.push({
                    rel: "canonical",
                    href: t.canonicalUrl
                });
                else if (!1 !== e) {
                    var r = "/" === e ? "https://arizona-rp.com/" : "https://arizona-rp.com" + e + "/";
                    n.link.push({
                        rel: "canonical",
                        href: r
                    })
                }
                return void 0 !== t.description && (n.meta.push({
                    hid: "description",
                    name: "description",
                    content: t.description
                }), n.meta.push({
                    hid: "og:description",
                    name: "og:description",
                    content: t.description
                })), void 0 !== t.url ? n.meta.push({
                    hid: "og:url",
                    name: "og:url",
                    content: t.url
                }) : !1 !== e && n.meta.push({
                    hid: "og:url",
                    name: "og:url",
                    content: "https://arizona-rp.com" + e
                }), n
            }
        },
        453: function(t, e, o) {
            "use strict";
            var n = o(4),
                r = o(32),
                c = o(5),
                l = o(22),
                d = o(25),
                m = o(37).f,
                h = o(219),
                v = c.Symbol;
            if (r && "function" == typeof v && (!("description" in v.prototype) || void 0 !== v().description)) {
                var _ = {},
                    f = function() {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                            e = this instanceof f ? new v(t) : void 0 === t ? v() : v(t);
                        return "" === t && (_[e] = !0), e
                    };
                h(f, v);
                var y = f.prototype = v.prototype;
                y.constructor = f;
                var w = y.toString,
                    C = "Symbol(test)" == String(v("test")),
                    $ = /^Symbol\((.*)\)[^)]+$/;
                m(y, "description", {
                    configurable: !0,
                    get: function() {
                        var symbol = d(this) ? this.valueOf() : this,
                            t = w.call(symbol);
                        if (l(_, symbol)) return "";
                        var desc = C ? t.slice(7, -1) : t.replace($, "$1");
                        return "" === desc ? void 0 : desc
                    }
                }), n({
                    global: !0,
                    forced: !0
                }, {
                    Symbol: f
                })
            }
        },
        705: function(t, e, o) {
            var content = o(824);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(19).default)("32119c8d", content, !0, {
                sourceMap: !1
            })
        },
        823: function(t, e, o) {
            "use strict";
            o(705)
        },
        824: function(t, e, o) {
            var n = o(18)(!1);
            n.push([t.i, ".posts{margin-bottom:100px}.posts>.title{text-align:center;margin:100px 0}", ""]), t.exports = n
        },
        890: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(2),
                r = o(452),
                c = {
                    fetch: t => Object(n.a)((function*() {
                        var {
                            store: e
                        } = t;
                        yield e.dispatch("post/load", {
                            amount: 5
                        })
                    }))(),
                    head() {
                        return Object(r.a)({
                            title: this.$t("pPosts.headTitle"),
                            description: this.$t("pPosts.headDescription"),
                            url: "https://arizona-rp.com/posts"
                        }, this.$route.path)
                    },
                    computed: {
                        posts() {
                            return this.$store.state.post.items
                        }
                    },
                    mounted() {
                        this.$store.dispatch("post/load", {
                            amount: 5
                        }), this.$store.commit("breadcrumbs/setItems", [{
                            name: "SAMP",
                            url: "/"
                        }, {
                            name: this.$t("pPosts.news"),
                            url: "/posts"
                        }]), this.removeBodyClasses(), document.body.classList.add("bg-9")
                    },
                    methods: {
                        removeBodyClasses() {
                            document.body.classList.forEach((t => document.body.classList.remove(t)))
                        }
                    }
                },
                l = (o(823), o(13)),
                component = Object(l.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "posts"
                    }, [o("h1", {
                        staticClass: "title block-title block-title--with-shadow",
                        attrs: {
                            "data-shadow": t.$t("pPosts.news")
                        }
                    }, [t._v("\n    " + t._s(t.$t("pPosts.news")) + "\n  ")]), t._v(" "), o("div", {
                        staticClass: "posts__wrapper container"
                    }, t._l(t.posts, (function(e, n) {
                        return o("div", {
                            key: e.id,
                            staticClass: "post",
                            class: {
                                "post--size-big": 0 == n
                            }
                        }, [o("div", {
                            staticClass: "post__image",
                            style: {
                                backgroundImage: "url(" + e.imageUrl + ")"
                            }
                        }), t._v(" "), 0 == n ? o("div", {
                            staticClass: "post__label"
                        }, [o("span", [t._v(t._s(t.$t("pPosts.main")))])]) : t._e(), t._v(" "), o("nuxt-link", {
                            staticClass: "post__title",
                            attrs: {
                                to: t.localePath({
                                    name: "posts-id",
                                    params: {
                                        id: e.id + "-" + e.urlEncodedTitle
                                    }
                                })
                            }
                        }, [t._v("\n        " + t._s(e.title) + "\n      ")]), t._v(" "), 0 == n ? o("div", {
                            staticClass: "post__content",
                            domProps: {
                                innerHTML: t._s(e.previewContent)
                            }
                        }) : t._e(), t._v(" "), o("div", {
                            staticClass: "post__datetime"
                        }, [t._v("\n        " + t._s(e.createdAtHuman) + ", " + t._s(e.commentsCount) + "\n        " + t._s(t._f("pluralizeRu")(e.commentsCount, ["комментарий", "комментария", "комментариев"])) + "\n      ")])], 1)
                    })), 0)])
                }), [], !1, null, null, null);
            e.default = component.exports
        }
    }
]);