(window.webpackJsonp = window.webpackJsonp || []).push([
    [59, 19], {
        452: function(t, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return r
            }));
            o(453);

            function r(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = {
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
                if (void 0 !== t.canonicalUrl) r.link.push({
                    rel: "canonical",
                    href: t.canonicalUrl
                });
                else if (!1 !== e) {
                    var c = "/" === e ? "https://arizona-rp.com/" : "https://arizona-rp.com" + e + "/";
                    r.link.push({
                        rel: "canonical",
                        href: c
                    })
                }
                return void 0 !== t.description && (r.meta.push({
                    hid: "description",
                    name: "description",
                    content: t.description
                }), r.meta.push({
                    hid: "og:description",
                    name: "og:description",
                    content: t.description
                })), void 0 !== t.url ? r.meta.push({
                    hid: "og:url",
                    name: "og:url",
                    content: t.url
                }) : !1 !== e && r.meta.push({
                    hid: "og:url",
                    name: "og:url",
                    content: "https://arizona-rp.com" + e
                }), r
            }
        },
        454: function(t, e, o) {
            "use strict";
            o.r(e);
            var r = o(2),
                c = (o(11), {
                    data: () => ({
                        errors: {},
                        payload: {},
                        recaptcha: !1,
                        recaptchaToken: null,
                        isLoading: !1,
                        actionUrl: ""
                    }),
                    created() {
                        var t = this,
                            e = function(e) {
                                t.$watch("fields." + e, (() => {
                                    t.errors[e] = null
                                }))
                            };
                        for (var o in this.fields) e(o)
                    },
                    methods: {
                        onRecaptchaSuccess(t) {
                            this.recaptchaToken = t, this.submitForm()
                        },
                        onRecaptchaError(t) {
                            t || (this.recaptchaToken = null, this.isLoading = !1)
                        },
                        onRecaptchaExpired(t) {
                            t || (this.recaptchaToken = null, this.isLoading = !1)
                        },
                        recaptchaReload() {
                            this.recaptchaToken = null, this.$recaptcha.reset()
                        },
                        createPayload() {
                            var t = {};
                            for (var e in this.fields) null !== this.fields[e] && 0 !== this.fields[e].length && (t[e] = this.fields[e]);
                            t.recaptchaToken = this.recaptchaToken, this.payload = t
                        },
                        prevalidate: () => new Promise((t => {
                            t()
                        })),
                        submitForm() {
                            var t = this;
                            this.prevalidate().then(Object(r.a)((function*() {
                                !0 === t.recaptcha ? (yield t.$recaptcha.getResponse(), t.sendForm()) : (t.isLoading = !0, t.sendForm())
                            })), (t => {}))
                        },
                        sendForm() {
                            this.createPayload(), this.$axios.post(this.actionUrl, this.payload).then((t => this.successRequest(t))).catch((t => {
                                422 === t.response.status ? this.parseValidateErrors(t.response.data) : this.failedRequest(t.response)
                            }))
                        },
                        hasError(t) {
                            return void 0 !== this.errors[t] && null !== this.errors[t]
                        },
                        getError(t) {
                            return this.hasError(t) ? this.errors[t] : null
                        },
                        addError(t, e) {
                            this.$set(this.errors, t, e), this.isLoading = !1
                        },
                        parseValidateErrors(t) {
                            null !== this.recaptchaToken && this.recaptchaReload(), this.errors = {}, t.forEach((t => {
                                this.addError(t.field, t.message)
                            }))
                        },
                        successRequest(t) {
                            alert("Success Request"), this.isLoading = !1
                        },
                        failedRequest(t) {
                            alert("failed request"), this.isLoading = !1
                        }
                    }
                }),
                n = o(13),
                component = Object(n.a)(c, undefined, undefined, !1, null, null, null);
            e.default = component.exports
        },
        455: function(t, e, o) {
            var content = o(456);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(19).default)("d6e2f336", content, !0, {
                sourceMap: !1
            })
        },
        456: function(t, e, o) {
            var r = o(18)(!1);
            r.push([t.i, ".input-group{display:grid;grid-row-gap:30px;max-width:300px}select.input__element option{color:#000}input.input__element::-moz-placeholder{font-weight:400;color:hsla(0,0%,100%,.3)}input.input__element:-ms-input-placeholder{font-weight:400;color:hsla(0,0%,100%,.3)}input.input__element::placeholder{font-weight:400;color:hsla(0,0%,100%,.3)}input.input__element[type=number]::-webkit-inner-spin-button,input.input__element[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input.input__element[type=number]{-moz-appearance:textfield}.input{font-size:18px}.input__row{border-bottom:2px solid hsla(0,0%,100%,.8);position:relative;width:300px}.input__icon{width:22px;height:22px;position:absolute;left:0;top:6.5px;fill:hsla(0,0%,100%,.8)}.input__element{background:transparent;color:#fff;text-indent:32px;width:100%;line-height:35px;min-height:35px;border:none;font-weight:500;outline:none}.input__error{color:red;font-size:12px;margin-top:.5em}.input--blue .input__icon{fill:#748ed1}.input--blue .input__row{border-bottom-color:#748ed1}.input--blue select.input__element:focus{background:hsla(0,0%,100%,.1);outline:none}@media(min-width:1921px){.input-group{grid-row-gap:30px;max-width:300px}.input__row{border-bottom-width:2px;width:300px}.input__icon{width:22px;height:22px;top:6.5px}.input__element{text-indent:32px;line-height:35px;min-height:35px}}", ""]), t.exports = r
        },
        478: function(t, e) {
            t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk3IiBoZWlnaHQ9IjUzIiB2aWV3Qm94PSIwIDAgMTk3IDUzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIgOC41TDE4MS41IDBMMTk3IDUyLjVMMCA0OUwxMiA4LjVaIiBmaWxsPSIjOUNGMTIyIi8+Cjwvc3ZnPgo="
        },
        532: function(t, e, o) {
            var content = o(677);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(19).default)("a381b836", content, !0, {
                sourceMap: !1
            })
        },
        533: function(t, e, o) {
            "use strict";
            o.r(e);
            o(529);
            var r = {
                    methods: {
                        getPrice(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            t = parseFloat(t), isNaN(t) && (t = 0);
                            var r = "";
                            if ("uk" === this.$i18n.locale) {
                                var c = (t / this.$store.state.currency.UAH).toFixed(2);
                                r += "".concat(c), !1 === o && (r += "₴"), !1 === e && (r += " (".concat(t, "₽)"))
                            } else t = (t / this.$store.state.currency.USD).toFixed(2), r = "".concat(t), !1 === o && (r = "$" + r);
                            return r
                        },
                        getCurrencySymbol() {
                            return "uk" === this.$i18n.locale ? "₴" : "$"
                        }
                    }
                },
                c = o(13),
                component = Object(c.a)(r, undefined, undefined, !1, null, null, null);
            e.default = component.exports
        },
        536: function(t, e, o) {
            var content = o(537);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(19).default)("5438c3cd", content, !0, {
                sourceMap: !1
            })
        },
        537: function(t, e, o) {
            var r = o(18)(!1);
            r.push([t.i, ".lory-slider .lory-frame{position:relative;font-size:0;overflow:hidden;white-space:nowrap}.lory-slider .lory-slides{display:inline-block}.lory-slider .lory-slide{position:relative;display:inline-block!important}", ""]), t.exports = r
        },
        676: function(t, e, o) {
            "use strict";
            o(532)
        },
        677: function(t, e, o) {
            var r = o(18),
                c = o(49),
                n = o(678),
                l = r(!1),
                d = c(n);
            l.push([t.i, ".shop-button-container{margin-top:-35px;text-align:center;max-width:300px}.shop-button{width:250px;height:70px;line-height:70px;color:#0a0f1b;font-size:25px;font-weight:900;background:#9cf122;box-shadow:0 0 25px 5px rgba(156,241,34,.6);transition:all .2s ease}.shop-button:hover{box-shadow:0 0 25px 5px #9cf122}.calculator{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:30px 50px;grid-gap:25px 30px;gap:25px 30px;background:url(" + d + ") top no-repeat;max-width:375px;min-height:155px;padding-left:30px;margin-left:-30px;margin-top:35px}.calculator__title{font-size:25px;color:#a4e842;font-weight:900;grid-column:span 2}.calculator__value{font-size:25px;font-weight:900;line-height:28px}.calculator__value>span{color:#a4e842}.calculator__input-desc{letter-spacing:1px}.shop-form-notice{margin-top:20px;margin-bottom:-20px;font-size:.8em;line-height:1.6;color:hsla(0,0%,100%,.8);max-width:300px}", ""]), t.exports = l
        },
        678: function(t, e, o) {
            t.exports = o.p + "img/shop-calc-figure-1.8484a57.png"
        },
        685: function(t, e, o) {
            "use strict";
            o.r(e);
            o(11);
            var r = o(454),
                c = (o(455), o(533)),
                n = o(17),
                l = o(35),
                d = {
                    mixins: [r.default, c.default],
                    data: () => ({
                        fields: {
                            serverId: 0,
                            username: "",
                            sum: "",
                            productId: 0
                        },
                        recaptcha: !0,
                        actionUrl: "/payment/create",
                        donateFactor: 2
                    }),
                    computed: {
                        servers() {
                            return this.$store.state.servers.list
                        },
                        selectServerOptions() {
                            var t = [{
                                label: this.$t("cShopForm.gameServer"),
                                value: 0
                            }];
                            return this.servers.forEach((e => t.push({
                                label: e.name,
                                value: e.id
                            }))), t
                        }
                    },
                    watch: {
                        "fields.serverId" (t) {
                            var e = "donate-factor-".concat(t),
                                o = Object(n.a)(e);
                            null === o ? this.$axios.get("/params/get-donate-factor", {
                                params: {
                                    serverId: t
                                }
                            }).then((t => {
                                var {
                                    data: data
                                } = t;
                                Object(n.b)(e, data, l.b), this.donateFactor = data
                            })) : this.donateFactor = o
                        }
                    },
                    created() {
                        void 0 === this.$recaptcha && (this.recaptcha = !1)
                    },
                    mounted() {
                        this.setQueryParameters()
                    },
                    methods: {
                        successRequest(t) {
                            this.$emit("showModal", t.data)
                        },
                        prevalidate() {
                            return new Promise(((t, e) => {
                                0 === this.fields.serverId && (this.addError("serverId", this.$t("cShopForm.errServer")), this.isLoading = !1, e(new Error("serverId invalid"))), (null == this.fields.username || this.fields.username.length < 3) && (this.addError("username", this.$t("cShopForm.errUsername")), this.isLoading = !1, e(new Error("username invalid"))), (null == this.fields.sum || this.fields.sum < 1) && (this.addError("sum", this.$t("cShopForm.errTotal")), this.isLoading = !1, e(new Error("sum invalid"))), this.fields.sum > 1e6 && (this.addError("sum", this.$t("cShopForm.errLimit")), this.isLoading = !1, e(new Error("sum invalid"))), t()
                            }))
                        },
                        setQueryParameters() {
                            void 0 !== this.$route.query.username && (this.fields.username = this.$route.query.username), void 0 !== this.$route.query.serverId && (this.fields.serverId = this.$route.query.serverId), void 0 !== this.$route.query.sum && (this.fields.sum = this.$route.query.sum)
                        }
                    }
                },
                _ = (o(676), o(13)),
                component = Object(_.a)(d, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("form", {
                        on: {
                            submit: function(e) {
                                return e.preventDefault(), t.submitForm.apply(null, arguments)
                            }
                        }
                    }, [o("div", {
                        staticClass: "input-group"
                    }, [o("div", {
                        staticClass: "input input--blue"
                    }, [o("label", {
                        staticClass: "input__label",
                        attrs: {
                            for: "username"
                        }
                    }, [t._v(t._s(t.$t("cShopForm.username")))]), o("div", {
                        staticClass: "input__row"
                    }, [o("svg", {
                        staticClass: "input__icon",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 448 512"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                        }
                    })]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.fields.username,
                            expression: "fields.username"
                        }],
                        staticClass: "input__element",
                        attrs: {
                            id: "username",
                            name: "username",
                            placeholder: t.$t("cShopForm.username"),
                            maxlength: "25"
                        },
                        domProps: {
                            value: t.fields.username
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.fields, "username", e.target.value)
                            }
                        }
                    })]), t.hasError("username") ? o("div", {
                        staticClass: "input__error"
                    }, [t._v(t._s(t.getError("username")))]) : t._e()]), o("div", {
                        staticClass: "input input--blue"
                    }, [o("label", {
                        staticClass: "input__label",
                        attrs: {
                            for: "serverId"
                        }
                    }, [t._v(t._s(t.$t("cShopForm.server")))]), o("div", {
                        staticClass: "input__row"
                    }, [o("svg", {
                        staticClass: "input__icon",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 448 512"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"
                        }
                    })]), o("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.fields.serverId,
                            expression: "fields.serverId"
                        }],
                        staticClass: "input__element",
                        style: {
                            color: 0 === t.fields.serverId ? "rgba(255, 255, 255, .3)" : "white"
                        },
                        attrs: {
                            id: "serverId",
                            name: "serverId"
                        },
                        on: {
                            change: function(e) {
                                var o = Array.prototype.filter.call(e.target.options, (function(t) {
                                    return t.selected
                                })).map((function(t) {
                                    return "_value" in t ? t._value : t.value
                                }));
                                t.$set(t.fields, "serverId", e.target.multiple ? o : o[0])
                            }
                        }
                    }, t._l(t.selectServerOptions, (function(e) {
                        return o("option", {
                            attrs: {
                                disabled: 0 === e.value
                            },
                            domProps: {
                                value: e.value
                            }
                        }, [t._v(t._s(e.label))])
                    })), 0)]), t.hasError("serverId") ? o("div", {
                        staticClass: "input__error"
                    }, [t._v(t._s(t.getError("serverId")))]) : t._e()]), o("div", {
                        staticClass: "input input--blue"
                    }, [o("label", {
                        staticClass: "input__label",
                        attrs: {
                            for: "sum"
                        }
                    }, [t._v(t._s(t.$t("cShopForm.total")))]), o("div", {
                        staticClass: "input__row"
                    }, [o("svg", {
                        staticClass: "input__icon",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 448 512"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"
                        }
                    })]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.fields.sum,
                            expression: "fields.sum"
                        }],
                        staticClass: "input__element",
                        attrs: {
                            id: "sum",
                            name: "sum",
                            placeholder: t.$t("cShopForm.total"),
                            type: "number"
                        },
                        domProps: {
                            value: t.fields.sum
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.fields, "sum", e.target.value)
                            }
                        }
                    })]), t.hasError("sum") ? o("div", {
                        staticClass: "input__error"
                    }, [t._v(t._s(t.getError("sum")))]) : t._e()])]), o("div", {
                        staticClass: "shop-form-notice"
                    }, [t._v("Если у Вас есть бонус х4, то активируйте его до начала оплаты")]), o("div", {
                        staticClass: "calculator"
                    }, [o("div", {
                        staticClass: "calculator__title"
                    }, [t._v(t._s(t.$t("cShopForm.calculator")))]), o("div", {
                        staticClass: "calculator__input"
                    }, [o("div", {
                        staticClass: "calculator__input-desc"
                    }, [t._v(t._s(t.$t("cShopForm.pay")))]), o("div", {
                        staticClass: "calculator__value"
                    }, [t._v(t._s(t.getPrice(t.fields.sum, !0, !0))), o("span", [t._v(t._s(t.getCurrencySymbol()))])])]), o("div", {
                        staticClass: "calculator__output"
                    }, [o("div", {
                        staticClass: "calculator__input-desc"
                    }, [t._v(t._s(t.$t("cShopForm.get")))]), o("div", {
                        staticClass: "calculator__value"
                    }, [t._v(t._s(Number(t.fields.sum * t.donateFactor))), o("span", [t._v("az")])])])]), o("div", {
                        staticClass: "shop-button-container"
                    }, [o("button", {
                        staticClass: "shop-button",
                        attrs: {
                            type: "submit"
                        }
                    }, [t._v(t._s(t.$t("cShopForm.pay2")))])]), t.recaptcha ? o("recaptcha", {
                        on: {
                            error: t.onRecaptchaError,
                            success: t.onRecaptchaSuccess,
                            expired: t.onRecaptchaExpired
                        }
                    }) : t._e()], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        711: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-1.8c84ec5.webp"
        },
        712: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-1.614af7f.png"
        },
        713: function(t, e, o) {
            t.exports = o.p + "img/product-11.6e790ae.webp"
        },
        714: function(t, e, o) {
            t.exports = o.p + "img/product-11.4124382.png"
        },
        715: function(t, e, o) {
            t.exports = o.p + "img/product-12.b2bcb02.webp"
        },
        716: function(t, e, o) {
            t.exports = o.p + "img/product-12.31565a2.png"
        },
        717: function(t, e, o) {
            var map = {
                "./shop-packet-1.webp": 711,
                "./shop-packet-2.webp": 718,
                "./shop-packet-3.webp": 719,
                "./shop-packet-4.webp": 720,
                "./shop-packet-5.webp": 721,
                "./shop-packet-6.webp": 722
            };

            function r(t) {
                var e = c(t);
                return o(e)
            }

            function c(t) {
                if (!o.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            r.keys = function() {
                return Object.keys(map)
            }, r.resolve = c, t.exports = r, r.id = 717
        },
        718: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-2.8053e59.webp"
        },
        719: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-3.0438094.webp"
        },
        720: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-4.cdafc47.webp"
        },
        721: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-5.f712729.webp"
        },
        722: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-6.cbd33f7.webp"
        },
        723: function(t, e, o) {
            var map = {
                "./shop-packet-1.png": 712,
                "./shop-packet-2.png": 724,
                "./shop-packet-3.png": 725,
                "./shop-packet-4.png": 726,
                "./shop-packet-5.png": 727,
                "./shop-packet-6.png": 728
            };

            function r(t) {
                var e = c(t);
                return o(e)
            }

            function c(t) {
                if (!o.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            r.keys = function() {
                return Object.keys(map)
            }, r.resolve = c, t.exports = r, r.id = 723
        },
        724: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-2.47514cb.png"
        },
        725: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-3.8c176d3.png"
        },
        726: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-4.483efe6.png"
        },
        727: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-5.dc332f9.png"
        },
        728: function(t, e, o) {
            t.exports = o.p + "img/shop-packet-6.d22fae0.png"
        },
        729: function(t, e, o) {
            t.exports = o.p + "img/cash-1.46be511.webp"
        },
        730: function(t, e, o) {
            t.exports = o.p + "img/cash-2.fba2ba8.webp"
        },
        731: function(t, e, o) {
            t.exports = o.p + "img/cash-3.18a5c18.webp"
        },
        732: function(t, e, o) {
            t.exports = o.p + "img/cash-1.03b0293.png"
        },
        733: function(t, e, o) {
            t.exports = o.p + "img/cash-2.e9ab585.png"
        },
        734: function(t, e, o) {
            t.exports = o.p + "img/cash-3.f2ee971.png"
        },
        735: function(t, e, o) {
            t.exports = o.p + "img/premium-vip.3ee8d44.webp"
        },
        736: function(t, e, o) {
            t.exports = o.p + "img/premium-vip.833defd.png"
        },
        737: function(t, e, o) {
            t.exports = o.p + "img/product-13.8f578ed.webp"
        },
        738: function(t, e, o) {
            t.exports = o.p + "img/product-14.11c290a.webp"
        },
        739: function(t, e, o) {
            t.exports = o.p + "img/product-16.6a45825.webp"
        },
        740: function(t, e, o) {
            t.exports = o.p + "img/product-17.a08dfa4.webp"
        },
        741: function(t, e, o) {
            t.exports = o.p + "img/product-18.5e10873.webp"
        },
        742: function(t, e, o) {
            t.exports = o.p + "img/product-19.f484681.webp"
        },
        743: function(t, e, o) {
            var map = {
                "./product-11.png": 714,
                "./product-12.png": 716,
                "./product-13.png": 744,
                "./product-14.png": 745,
                "./product-15.png": 844,
                "./product-16.png": 746,
                "./product-17.png": 747,
                "./product-18.png": 748,
                "./product-19.png": 749
            };

            function r(t) {
                var e = c(t);
                return o(e)
            }

            function c(t) {
                if (!o.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            r.keys = function() {
                return Object.keys(map)
            }, r.resolve = c, t.exports = r, r.id = 743
        },
        744: function(t, e, o) {
            t.exports = o.p + "img/product-13.57726a5.png"
        },
        745: function(t, e, o) {
            t.exports = o.p + "img/product-14.2d9bf0d.png"
        },
        746: function(t, e, o) {
            t.exports = o.p + "img/product-16.e50a665.png"
        },
        747: function(t, e, o) {
            t.exports = o.p + "img/product-17.9629bb5.png"
        },
        748: function(t, e, o) {
            t.exports = o.p + "img/product-18.bbe21e0.png"
        },
        749: function(t, e, o) {
            t.exports = o.p + "img/product-19.66bcea3.png"
        },
        750: function(t, e, o) {
            t.exports = o.p + "img/money-art.78a52ac.png"
        },
        751: function(t, e, o) {
            var content = o(847);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(19).default)("81308d5c", content, !0, {
                sourceMap: !1
            })
        },
        840: function(t, e, o) {
            var map = {
                "./cash-1.webp": 729,
                "./cash-2.webp": 730,
                "./cash-3.webp": 731
            };

            function r(t) {
                var e = c(t);
                return o(e)
            }

            function c(t) {
                if (!o.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            r.keys = function() {
                return Object.keys(map)
            }, r.resolve = c, t.exports = r, r.id = 840
        },
        841: function(t, e, o) {
            var map = {
                "./cash-1.png": 732,
                "./cash-2.png": 733,
                "./cash-3.png": 734
            };

            function r(t) {
                var e = c(t);
                return o(e)
            }

            function c(t) {
                if (!o.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            r.keys = function() {
                return Object.keys(map)
            }, r.resolve = c, t.exports = r, r.id = 841
        },
        842: function(t, e, o) {
            var map = {
                "./product-11.webp": 713,
                "./product-12.webp": 715,
                "./product-13.webp": 737,
                "./product-14.webp": 738,
                "./product-15.webp": 843,
                "./product-16.webp": 739,
                "./product-17.webp": 740,
                "./product-18.webp": 741,
                "./product-19.webp": 742
            };

            function r(t) {
                var e = c(t);
                return o(e)
            }

            function c(t) {
                if (!o.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            r.keys = function() {
                return Object.keys(map)
            }, r.resolve = c, t.exports = r, r.id = 842
        },
        843: function(t, e, o) {
            t.exports = o.p + "img/product-15.dc247f0.webp"
        },
        844: function(t, e, o) {
            t.exports = o.p + "img/product-15.ad75153.png"
        },
        845: function(t, e, o) {
            t.exports = o.p + "img/qiwi_logo_rgb_small.ce38e3b.png"
        },
        846: function(t, e, o) {
            "use strict";
            o(751)
        },
        847: function(t, e, o) {
            var r = o(18),
                c = o(49),
                n = o(478),
                l = o(848),
                d = o(849),
                _ = o(850),
                m = o(750),
                h = r(!1),
                v = c(n),
                f = c(l),
                x = c(d),
                k = c(_),
                y = c(m);
            h.push([t.i, '.special-info{margin-top:21px;text-align:center;position:absolute;top:0;left:0;width:100%;opacity:0;transition:opacity .2s ease}.special-info.active{opacity:1}.special-info.active .special-info__buy{display:inline-block}.special-info__name{font-size:18px;font-weight:900;line-height:17px}.special-info__cash{font-size:35px;line-height:32px;font-weight:900;color:#9cf122;margin-top:5px}.special-info__cash:after{content:"Наличными";font-size:18px;font-weight:900;color:#fff;display:block}.special-info__extra{margin-top:18px}.special-info__buy{width:197px;height:53px;background:url(' + v + ') 50%/contain no-repeat;font-size:18px;font-weight:400;color:#121321;margin-top:22px;display:none}.shop-title,.special-info__buy>span{font-weight:900}.shop-title{margin-top:50px;position:relative;text-align:center;font-size:18px;text-transform:uppercase}.shop-title:after{content:"";position:absolute;width:50px;height:5px;background-color:#9cf122;bottom:-12px;left:calc(50% - 25px)}.mobile-specials{margin-top:-30px;display:none}.mobile-specials__slider{margin:0 auto;min-height:360px;background:url(' + f + ") 0/100% no-repeat}.mobile-specials__slides{padding:90px 0 45px}.mobile-specials__slider-dots{display:flex;justify-content:center;margin-top:15px}.mobile-specials__slider-dots>span{margin:0 2px;display:inline-block;background-color:hsla(0,0%,100%,.25);width:10px;height:10px;border-radius:50%}.mobile-specials__slider-dots>span.active{background-color:#9cf122}.mobile-specials__info{position:relative;min-height:267px}.special-slide{width:225px;vertical-align:middle}.special-slide__icon{width:155px;height:155px;background-color:#171721;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto}.special-slide__icon img{width:113px;opacity:.25}.special-slide.active .special-slide__icon{width:225px;height:225px;background-color:#9cf122;box-shadow:0 0 45px 1px #9cf122}.special-slide.active .special-slide__icon img{width:165px;opacity:1}.order-data{background-color:#090e18;padding:40px;border-radius:8px}.order-data__title{text-align:center;font-size:18px;padding-bottom:15px;border-bottom:1px solid hsla(0,0%,100%,.25)}.order-data__alert{padding:16px;border:1px solid #fff;margin-top:16px;font-size:12px}.order-data__alert.danger{color:#f13636;border-color:#f13636}.order-data__items{margin-top:15px;display:grid;grid-row-gap:15px;row-gap:15px}.order-data__buttons{display:grid;grid-template-columns:1fr 1fr;grid-gap:15px;gap:15px;margin-top:35px}.order-data__buttons div{grid-column:span 2}.order-data__buttons .half-row{grid-column:unset}.order-data .terms{margin-top:32px;color:#8f8f8f;font-size:12px;display:flex;align-items:center}.order-data .terms a{border-bottom:1px dashed #8f8f8f}.order-data .terms span{margin-left:16px}.order-ps-help{color:hsla(0,0%,100%,.6);font-size:12px;margin-top:5px;text-align:center;display:none}.order-button{display:flex;align-items:center;justify-content:center;border:1px solid hsla(0,0%,100%,.2);height:50px;border-radius:4px;width:100%}.order-button>img{max-height:40px;max-width:95px}.order-button:hover{background-color:hsla(0,0%,100%,.1)}.order-button.disabled{cursor:no-drop}.order-button.disabled img{filter:grayscale(1)}.order-button.disabled+.order-ps-help{display:block}.order-button.disabled:hover{background-color:transparent}.order-button.green{background-color:green;color:#fff}.order-button.green:hover{background-color:#009600}.order-button.two-lines{flex-direction:column}.order-button.ua-flag{border-width:0;background:#fed502 url(" + x + ") 92% 50%/24px no-repeat;color:#000;line-height:1.2;flex-direction:column}.order-button.ua-flag.disabled{background-color:#eee;color:#adadad}.check-payment-modal .vm--overlay{background-color:rgba(0,0,0,.8)}.order-item{display:flex;justify-content:space-between}.pay-button{padding-bottom:15px;position:relative;width:220px}.pay-button>span{background-color:#ff3535;color:#fff;font-size:15px;position:absolute;top:-12.5px;right:-27.5px;width:55px;height:25px;line-height:25px;text-align:center;text-decoration:line-through;display:none}.pay-button>button{background-color:transparent;color:#9cf122;width:100%;height:48px;line-height:48px;font-size:15px;transition:box-shadow .2s ease}.pay-button>button>span{font-weight:900}.pay-button>button:hover{box-shadow:0 0 15px 2px #9cf122}.special{display:grid;grid-template-columns:190px 1fr}.special .pay-button button{background-color:#9cf122;color:#000}.special .pay-button>span{display:block;opacity:0;transition:opacity .2s ease}.special .pay-button:hover>span{opacity:1}.special__cash{display:flex;align-items:center;color:#0a0f1b;font-size:25px;background:url(" + k + ') 0 no-repeat;min-height:50px;font-weight:900;padding-left:20px;margin:25px 0}.special__cash>span{color:#fff;font-size:15px;margin-left:40px}.special>picture{grid-row:span 5;justify-self:center;margin-top:20px}.special__title{font-size:35px;line-height:30px}.special__title>span{font-weight:900}.special__bonus{color:#a4e842;font-size:23px;position:relative;line-height:25px;padding-left:20px}.special__bonus>span{font-weight:900}.special__bonus:before{content:"";position:absolute;width:10px;height:10px;background-color:#a4e842;border-radius:50%;left:0;top:7px}.special__bonus--gold{color:#ffc14f}.special__bonus--gold:before{background-color:#ffc14f}.special__button{margin-top:65px}.packet{display:flex;flex-direction:column;align-items:center;text-align:center;border:1px solid #121930;padding:30px 0}.packet__economy{color:#a3e642;font-size:12px;background-color:hsla(0,0%,100%,.2);padding:5px 15px}.packet__economy>span,.packet__name{font-weight:900}.packet__name{font-size:15px;margin-top:35px}.packet__image{margin-top:25px;height:115px}.packet__sum{font-size:25px;color:#a3e642;font-weight:900;line-height:17px;margin-top:10px}.packet__sum>span{color:#fff;font-size:15px}.packet__button{margin-top:20px}.packet:hover{border-color:#9cf122}.packet:hover .pay-button>span{display:block}.packet:hover .pay-button>button{background-color:#9cf122;color:#000}.packet--vip .packet__name{font-size:20px}.packet--vip .pay-button>button:hover{box-shadow:0 0 15px 2px #f9a01a}.packet--vip:hover .pay-button>span{display:block}.packet--vip:hover .pay-button>button{background-color:#f9a01a;color:#000}.packets{margin-top:120px}.packets__wrapper{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap}.packets__wrapper>.packet{flex:0 0 25%}.specials{min-height:396px}.specials__title{font-weight:900;font-size:35px;text-align:center}.specials__items{display:grid;grid-template-columns:1fr 1fr;margin-top:60px}.shop-page{padding-bottom:150px}.shop-page .page-title{text-align:center;font-size:45px;font-weight:900;margin-top:85px}.shop-page .form{display:grid;grid-template-columns:375px 1fr;align-items:center;margin-top:55px}.shop-page .form>.render{justify-self:end;width:740px;height:619px;background:url(' + y + ") 50% no-repeat}@media(max-width:1280px){.shop-page .form>.render{width:100%;background-size:contain}.specials{background-position-y:center}.special{grid-template-columns:1fr}.special__title{text-align:center;margin-top:15px}.special__bonus,.special__button,.special__cash{justify-self:center}}@media(max-width:1024px){.shop-page .form>.render{width:100%;background-size:auto;background-position:0}.special__bonus{text-align:center}.special__bonus:before{display:none}}@media(max-width:768px){.shop-page .form{grid-template-columns:300px;justify-content:center}.shop-page .form>.render{display:none}.calculator{background-position-x:left;margin-right:-46px;padding-right:46px}.packets,.specials{display:none}.mobile-specials{display:block}}", ""]), t.exports = h
        },
        848: function(t, e, o) {
            t.exports = o.p + "img/elements-money.ed994ae.png"
        },
        849: function(t, e, o) {
            t.exports = o.p + "img/ua-emoji-apple.4215081.png"
        },
        850: function(t, e, o) {
            t.exports = o.p + "img/shop-special-figure.a3f819d.png"
        },
        896: function(t, e, o) {
            "use strict";
            o.r(e);
            var r = [function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "special__bonus special__bonus--gold"
                    }, [t._v("Premium "), o("span", [t._v("VIP")])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "special__bonus"
                    }, [t._v("Premium "), o("span", [t._v("Maverick")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", {
                        staticStyle: {
                            "grid-row": "span 6"
                        }
                    }, [e("source", {
                        attrs: {
                            srcset: o(718),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "special__icon",
                        attrs: {
                            src: o(724),
                            alt: "$t('pShop.pack2Alt')"
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "special__bonus special__bonus--gold"
                    }, [t._v("Premium "), o("span", [t._v("VIP")])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "special__bonus"
                    }, [t._v("Premium "), o("span", [t._v("Maverick")])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(729),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(732),
                            alt: "Packet 1"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(730),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(733),
                            alt: "Packet 1"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(731),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(734),
                            alt: "Packet 1"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(735),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(736),
                            alt: "Packet 1"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(719),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(725),
                            alt: "Packet 1"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(720),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(726),
                            alt: "Packet 1"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(721),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(727),
                            alt: "Packet 1"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(722),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(728),
                            alt: "Packet 1"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(737),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(744),
                            alt: "Toyota LC Prado"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(738),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(745),
                            alt: "Toyota LC 200"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(739),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(746),
                            alt: "Mercedes e63 2014"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(740),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(747),
                            alt: "AUDI Q7 2017"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(741),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(748),
                            alt: "Toyota Supra 2020"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("picture", [e("source", {
                        attrs: {
                            srcset: o(742),
                            type: "image/webp"
                        }
                    }), e("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(749),
                            alt: "BMW 6"
                        }
                    })])
                }],
                c = o(2),
                n = o(535),
                l = o(685),
                d = (o(220), o(536), o(452)),
                _ = o(533),
                m = {
                    components: {
                        ShopForm: l.default
                    },
                    mixins: [_.default],
                    data: () => ({
                        order: null,
                        sliderInitialIndex: 1
                    }),
                    bcrumbsData: [{
                        name: "Shop",
                        url: "shop"
                    }],
                    fetch: t => Object(c.a)((function*() {
                        var {
                            store: e
                        } = t;
                        yield e.dispatch("currency/load"), yield e.dispatch("servers/load"), yield e.dispatch("product/load")
                    }))(),
                    head() {
                        return Object(d.a)({
                            title: this.$t("pShop.headTitle"),
                            description: this.$t("pShop.headDescription"),
                            url: "https://arizona-rp.com/shop",
                            image: o(750)
                        }, this.$route.path)
                    },
                    computed: {
                        products() {
                            return this.$store.state.product.items
                        },
                        sumInUAH() {
                            return this.order.sum / this.$store.state.currency.UAH
                        }
                    },
                    mounted() {
                        var t = this;
                        this.$store.commit("breadcrumbs/setItems", []), this.removeBodyClasses(), document.body.classList.add("shop");
                        var e = this.$el.firstElementChild.offsetWidth;
                        if (e < 768) {
                            var o = this.$el.querySelector(".mobile-specials"),
                                r = o.firstElementChild,
                                c = this.$el.querySelector(".mobile-specials__slider-dots"),
                                l = this.$el.querySelector(".mobile-specials__info");
                            r.style.width = e > 550 ? "550px" : "".concat(e, "px");
                            var d = e => {
                                if ("after.lory.init" === e.type) {
                                    var o = r.firstElementChild.childElementCount;
                                    if (0 !== o)
                                        for (var n = function(i) {
                                                var e = document.createElement("span");
                                                e.addEventListener("click", (() => {
                                                    _.slideTo(i)
                                                })), i === t.sliderInitialIndex && e.classList.add("active"), c.appendChild(e)
                                            }, i = 0; i < o; i += 1) n(i)
                                }
                                if ("after.lory.slide" === e.type) {
                                    for (var d = 0; d < c.childNodes.length; d += 1) c.childNodes[d].classList.remove("active"), l.childNodes[d].classList.remove("active");
                                    c.childNodes[e.detail.currentSlide].classList.add("active"), l.childNodes[e.detail.currentSlide].classList.add("active")
                                }
                            };
                            o.addEventListener("after.lory.init", d), o.addEventListener("after.lory.slide", d), o.classList.add("lory-slider");
                            var _ = Object(n.lory)(o, {
                                rewind: !1,
                                initialIndex: this.sliderInitialIndex,
                                classNameFrame: "lory-frame",
                                classNameSlideContainer: "lory-slides",
                                enableMouseEvents: !0,
                                centerMode: {
                                    enableCenterMode: !0,
                                    firstSlideLeftAlign: !1
                                }
                            })
                        }
                    },
                    methods: {
                        buyPacket(t) {
                            !1 === this.$auth.loggedIn ? this.$notify({
                                text: this.$t("pShop.authBeforeBuy"),
                                type: "warn"
                            }) : this.$axios.post("/payment/create", {
                                username: this.$auth.user.username,
                                serverId: this.$auth.user.serverId,
                                productId: t
                            }).then((t => {
                                var {
                                    data: data
                                } = t;
                                this.showModal(data)
                            })).catch((t => {
                                this.$notify({
                                    type: "danger",
                                    text: t.data.message
                                })
                            }))
                        },
                        showModal(t) {
                            this.order = t, this.$modal.show("check-payment-system")
                        },
                        openUserMenu() {
                            this.$modal.show("mobile-nav-profile")
                        },
                        normalizePercent: t => t > 100 ? 100 : t,
                        removeBodyClasses() {
                            Array.from(document.body.classList).forEach((t => document.body.classList.remove(t)))
                        },
                        onPaymentModalClose() {
                            this.$recaptcha.reset()
                        }
                    }
                },
                h = (o(846), o(13)),
                component = Object(h.a)(m, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "shop-page"
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("h1", {
                        staticClass: "shop-title"
                    }, [t._v(t._s(t.$t("pShop.h1")))]), r("div", {
                        staticClass: "form"
                    }, [r("shop-form", {
                        on: {
                            showModal: t.showModal
                        }
                    }), r("div", {
                        staticClass: "render"
                    })], 1)]), r("div", {
                        staticClass: "shop-title"
                    }, [t._v(t._s(t.$t("pShop.title")))]), r("div", {
                        staticClass: "specials"
                    }, [r("div", {
                        staticClass: "specials__items container"
                    }, [r("div", {
                        staticClass: "special"
                    }, [r("picture", [r("source", {
                        attrs: {
                            srcset: o(711),
                            type: "image/webp"
                        }
                    }), r("img", {
                        staticClass: "special__icon",
                        attrs: {
                            src: o(712),
                            alt: t.$t("pShop.pack1Alt")
                        }
                    })]), r("div", {
                        staticClass: "special__title",
                        domProps: {
                            innerHTML: t._s(t.$t("pShop.pack1Title"))
                        }
                    }), r("div", {
                        staticClass: "special__cash"
                    }, [t._v("14.000.000$ "), r("span", [t._v(t._s(t.$t("pShop.cash")))])]), t._m(0), t._m(1), r("div", {
                        staticClass: "special__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(1)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[0].cost)))])]), r("span", [t._v(t._s(t.getPrice(2800, !0)))])])]), r("div", {
                        staticClass: "special"
                    }, [t._m(2), r("div", {
                        staticClass: "special__title",
                        domProps: {
                            innerHTML: t._s(t.$t("pShop.pack2Title"))
                        }
                    }), r("div", {
                        staticClass: "special__cash"
                    }, [t._v("30.000.000$ "), r("span", [t._v(t._s(t.$t("pShop.cash")))])]), t._m(3), t._m(4), r("div", {
                        staticClass: "special__bonus",
                        domProps: {
                            innerHTML: t._s(t.$t("pShop.pack2Bonus"))
                        }
                    }), r("div", {
                        staticClass: "special__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(2)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[1].cost)))])]), r("span", [t._v(t._s(t.getPrice(4e3, !0)))])])])])]), r("div", {
                        staticClass: "packets"
                    }, [r("div", {
                        staticClass: "packets__wrapper container"
                    }, [r("div", {
                        staticClass: "packet"
                    }, [r("div", {
                        staticClass: "packet__economy"
                    }, [t._v(t._s(t.$t("pShop.economy")) + " "), r("span", [t._v("+1.000.000$")])]), t._m(5), r("div", {
                        staticClass: "packet__name"
                    }, [t._v(t._s(t.$t("pShop.packStartName")))]), r("div", {
                        staticClass: "packet__sum"
                    }, [t._v("10.500.000$"), r("br"), r("span", [t._v(t._s(t.$t("pShop.cash")))])]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(3)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[2].cost)))])]), r("span", [t._v(t._s(t.getPrice(400, !0)))])])]), r("div", {
                        staticClass: "packet"
                    }, [r("div", {
                        staticClass: "packet__economy"
                    }, [t._v(t._s(t.$t("pShop.economy")) + " "), r("span", [t._v("+1.000.000$")])]), t._m(6), r("div", {
                        staticClass: "packet__name"
                    }, [t._v(t._s(t.$t("pShop.packStartName")))]), r("div", {
                        staticClass: "packet__sum"
                    }, [t._v("24.000.000$"), r("br"), r("span", [t._v(t._s(t.$t("pShop.cash")))])]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(4)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[3].cost)))])]), r("span", [t._v(t._s(t.getPrice(700, !0)))])])]), r("div", {
                        staticClass: "packet"
                    }, [r("div", {
                        staticClass: "packet__economy"
                    }, [t._v(t._s(t.$t("pShop.economy")) + " "), r("span", [t._v("+1.000.000$")])]), t._m(7), r("div", {
                        staticClass: "packet__name"
                    }, [t._v(t._s(t.$t("pShop.packStartName")))]), r("div", {
                        staticClass: "packet__sum"
                    }, [t._v("39.000.000$"), r("br"), r("span", [t._v(t._s(t.$t("pShop.cash")))])]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(5)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[4].cost)))])]), r("span", [t._v(t._s(t.getPrice(1200, !0)))])])]), r("div", {
                        staticClass: "packet packet--vip",
                        staticStyle: {
                            "padding-top": "67.5px"
                        }
                    }, [t._m(8), r("div", {
                        staticClass: "packet__name",
                        domProps: {
                            innerHTML: t._s(t.$t("pShop.packVipName"))
                        }
                    }), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(6)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[5].cost)))])]), r("span", [t._v(t._s(t.getPrice(3e3, !0)))])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [t._m(9), r("div", {
                        staticClass: "packet__name",
                        domProps: {
                            innerHTML: t._s(t.$t("pShop.packPhoneName"))
                        }
                    }), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(7)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[6].cost)))])]), r("span", [t._v(t._s(t.getPrice(600, !0)))])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [t._m(10), r("div", {
                        staticClass: "packet__name",
                        domProps: {
                            innerHTML: t._s(t.$t("pShop.packLicenseName"))
                        }
                    }), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(8)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[7].cost)))])]), r("span", [t._v(t._s(t.getPrice(300, !0)))])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [t._m(11), r("div", {
                        staticClass: "packet__name",
                        domProps: {
                            innerHTML: t._s(t.$t("pShop.packNimbName"))
                        }
                    }), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(9)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[8].cost)))])]), r("span", [t._v(t._s(t.getPrice(6250, !0)))])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [t._m(12), r("div", {
                        staticClass: "packet__name",
                        domProps: {
                            innerHTML: t._s(t.$t("pShop.packAddVipName"))
                        }
                    }), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(10)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[9].cost)))])]), r("span", [t._v(t._s(t.getPrice(2500, !0)))])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [r("picture", [r("source", {
                        attrs: {
                            srcset: o(713),
                            type: "image/webp"
                        }
                    }), r("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(714),
                            alt: t.$t("pShop.packAmuletName")
                        }
                    })]), r("div", {
                        staticClass: "packet__name"
                    }, [t._v(t._s(t.$t("pShop.packAmuletName")))]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(11)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[10].cost)))])])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [r("picture", [r("source", {
                        attrs: {
                            srcset: o(715),
                            type: "image/webp"
                        }
                    }), r("img", {
                        staticClass: "packet__image",
                        attrs: {
                            src: o(716),
                            alt: t.$t("pShop.packStoneName")
                        }
                    })]), r("div", {
                        staticClass: "packet__name"
                    }, [t._v(t._s(t.$t("pShop.packStoneName")))]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(12)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[11].cost)))])])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [t._m(13), r("div", {
                        staticClass: "packet__name"
                    }, [t._v("Toyota LC Prado")]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(13)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[12].cost)))])])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [t._m(14), r("div", {
                        staticClass: "packet__name"
                    }, [t._v("Toyota LC 200")]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(14)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[13].cost)))])])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [t._m(15), r("div", {
                        staticClass: "packet__name"
                    }, [t._v("Mercedes e63 2014")]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(16)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[14].cost)))])])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [t._m(16), r("div", {
                        staticClass: "packet__name"
                    }, [t._v("AUDI Q7 2017")]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(17)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[15].cost)))])])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [t._m(17), r("div", {
                        staticClass: "packet__name"
                    }, [t._v("Toyota Supra 2020")]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(18)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[16].cost)))])])])]), r("div", {
                        staticClass: "packet packet--vip"
                    }, [t._m(18), r("div", {
                        staticClass: "packet__name"
                    }, [t._v("BMW 6")]), r("div", {
                        staticClass: "packet__button pay-button"
                    }, [r("button", {
                        on: {
                            click: function(e) {
                                return t.buyPacket(19)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[17].cost)))])])])])])]), r("div", {
                        staticClass: "mobile-specials"
                    }, [r("div", {
                        staticClass: "mobile-specials__slider lory-frame"
                    }, [r("div", {
                        staticClass: "mobile-specials__slides lory-slides"
                    }, [t._l(2, (function(i) {
                        return r("div", {
                            key: "shop-packet-" + i,
                            staticClass: "mobile-specials__slide lory-slide special-slide"
                        }, [r("div", {
                            staticClass: "special-slide__icon"
                        }, [r("picture", [r("source", {
                            attrs: {
                                srcset: o(717)("./shop-packet-" + i + ".webp"),
                                type: "image/webp"
                            }
                        }), r("img", {
                            attrs: {
                                src: o(723)("./shop-packet-" + i + ".png"),
                                alt: ""
                            }
                        })])])])
                    })), t._l(3, (function(i) {
                        return r("div", {
                            key: "cash-packet-" + i,
                            staticClass: "mobile-specials__slide lory-slide special-slide"
                        }, [r("div", {
                            staticClass: "special-slide__icon"
                        }, [r("picture", [r("source", {
                            attrs: {
                                srcset: o(840)("./cash-" + i + ".webp"),
                                type: "image/webp"
                            }
                        }), r("img", {
                            attrs: {
                                src: o(841)("./cash-" + i + ".png"),
                                alt: ""
                            }
                        })])])])
                    })), r("div", {
                        staticClass: "mobile-specials__slide lory-slide special-slide"
                    }, [r("div", {
                        staticClass: "special-slide__icon"
                    }, [r("picture", [r("source", {
                        attrs: {
                            srcset: o(735),
                            type: "image/webp"
                        }
                    }), r("img", {
                        attrs: {
                            src: o(736),
                            alt: ""
                        }
                    })])])]), t._l([3, 4, 5, 6], (function(i) {
                        return r("div", {
                            key: "shop-packet-" + i,
                            staticClass: "mobile-specials__slide lory-slide special-slide"
                        }, [r("div", {
                            staticClass: "special-slide__icon"
                        }, [r("picture", [r("source", {
                            attrs: {
                                srcset: o(717)("./shop-packet-" + i + ".webp"),
                                type: "image/webp"
                            }
                        }), r("img", {
                            attrs: {
                                src: o(723)("./shop-packet-" + i + ".png"),
                                alt: ""
                            }
                        })])])])
                    })), t._l([11, 12, 13, 14, 16, 17, 18, 19], (function(i) {
                        return r("div", {
                            key: "shop-packet-" + i,
                            staticClass: "mobile-specials__slide lory-slide special-slide"
                        }, [r("div", {
                            staticClass: "special-slide__icon"
                        }, [r("picture", [r("source", {
                            attrs: {
                                srcset: o(842)("./product-" + i + ".webp"),
                                type: "image/webp"
                            }
                        }), r("img", 11 === i ? {
                            staticStyle: {
                                "max-width": "110px"
                            },
                            attrs: {
                                src: o(743)("./product-" + i + ".png"),
                                alt: ""
                            }
                        } : {
                            attrs: {
                                src: o(743)("./product-" + i + ".png"),
                                alt: ""
                            }
                        })])])])
                    }))], 2)]), r("div", {
                        staticClass: "mobile-specials__slider-dots"
                    }), r("div", {
                        staticClass: "mobile-specials__info"
                    }, [r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 0 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special1Name")))]), r("div", {
                        staticClass: "special-info__cash"
                    }, [t._v("$ 14,000,000")]), r("div", {
                        staticClass: "special-info__extra"
                    }, [r("div", [t._v(t._s(t.$t("pShop.premiumVip")))]), r("div", [t._v(t._s(t.$t("pShop.premiumMaverick")))])]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(1)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[0].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 1 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special2Name")))]), r("div", {
                        staticClass: "special-info__cash"
                    }, [t._v("$ 30,000,000")]), r("div", {
                        staticClass: "special-info__extra"
                    }, [r("div", [t._v(t._s(t.$t("pShop.premiumVip")))]), r("div", [t._v(t._s(t.$t("pShop.premiumMaverick")))]), r("div", [t._v(t._s(t.$t("pShop.special2Div")))])]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(2)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[1].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 2 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special3Name")))]), r("div", {
                        staticClass: "special-info__cash"
                    }, [t._v("$ 10,500,000")]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(3)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[2].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 3 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special4Name")))]), r("div", {
                        staticClass: "special-info__cash"
                    }, [t._v("$ 24,000,000")]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(4)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[3].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 4 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special5Name")))]), r("div", {
                        staticClass: "special-info__cash"
                    }, [t._v("$ 39,000,000")]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(5)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[4].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 5 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special6Name")))]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(6)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[5].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 6 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special7Name")))]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(7)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[6].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 7 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special8Name")))]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(8)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[7].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 8 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special9Name")))]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(9)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[8].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 9 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special10Name")))]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(10)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[9].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 10 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special11Name")))]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(11)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[10].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 11 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v(t._s(t.$t("pShop.special12Name")))]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(12)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[11].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 12 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v("Toyota LC Prado")]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(13)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[12].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 13 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v("Toyota LC 200")]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(14)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[13].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 15 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v("Mercedes-Benz e63 2014")]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(16)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[14].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 16 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v("AUDI Q7 2017")]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(17)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[15].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 17 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v("Toyota Supra 2020")]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(18)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[16].cost)))])])]), r("div", {
                        staticClass: "special-info",
                        class: {
                            active: 18 === t.sliderInitialIndex
                        }
                    }, [r("div", {
                        staticClass: "special-info__name"
                    }, [t._v("BMW 6")]), r("button", {
                        staticClass: "special-info__buy",
                        on: {
                            click: function(e) {
                                return t.buyPacket(19)
                            }
                        }
                    }, [t._v(t._s(t.$t("pShop.buyFor")) + " "), r("span", [t._v(t._s(t.getPrice(t.products[17].cost)))])])])])]), r("modal", {
                        staticClass: "check-payment-modal",
                        attrs: {
                            name: "check-payment-system",
                            height: 775,
                            width: 400,
                            adaptive: !0,
                            styles: {
                                background: "transparent",
                                boxShadow: "unset",
                                paddingTop: "20px"
                            }
                        },
                        on: {
                            closed: t.onPaymentModalClose
                        }
                    }, [t.order ? r("div", {
                        staticClass: "order-data"
                    }, [r("div", {
                        staticClass: "order-data__title"
                    }, [t._v(t._s(t.$t("pShop.orderTitle")))]), void 0 !== t.order.alert ? r("div", {
                        staticClass: "order-data__alert",
                        class: [t.order.alert.type]
                    }, [t._v(t._s(t.order.alert.message))]) : t._e(), r("div", {
                        staticClass: "order-data__items"
                    }, [r("div", {
                        staticClass: "order-data__item order-item"
                    }, [r("div", {
                        staticClass: "order-item__param"
                    }, [t._v(t._s(t.$t("pShop.orderAccount")))]), r("div", {
                        staticClass: "order-item__value"
                    }, [t._v(t._s(t.$t("pShop.number")) + " " + t._s(t.order.orderId))])]), r("div", {
                        staticClass: "order-data__item order-item"
                    }, [r("div", {
                        staticClass: "order-item__param"
                    }, [t._v(t._s(t.$t("pShop.orderUsername")))]), r("div", {
                        staticClass: "order-item__value"
                    }, [t._v(t._s(t.order.username.replace("_", " ")))])]), r("div", {
                        staticClass: "order-data__item order-item"
                    }, [r("div", {
                        staticClass: "order-item__param"
                    }, [t._v(t._s(t.$t("pShop.orderServer")))]), r("div", {
                        staticClass: "order-item__value"
                    }, [t._v(t._s(t.order.serverName) + " (" + t._s(t.$t("pShop.number")) + " " + t._s(t.order.serverId) + ")")])]), r("div", {
                        staticClass: "order-data__item order-item"
                    }, [r("div", {
                        staticClass: "order-item__param"
                    }, [t._v(t._s(t.$t("pShop.orderTotal")))]), r("div", {
                        staticClass: "order-item__value"
                    }, [t._v(t._s(t.getPrice(t.order.sum)))])])]), r("div", {
                        staticClass: "order-data__buttons"
                    }, [r("div", [r("a", {
                        staticClass: "order-button",
                        class: {
                            disabled: null === t.order.ps.bankCards
                        },
                        attrs: {
                            href: null === t.order.ps.bankCards ? "#" : t.order.ps.bankCards
                        }
                    }, [r("span", [t._v(t._s(t.$t("pShop.orderCards")) + " Visa/MasterCard/МИР")])])]), r("div", [r("a", {
                        staticClass: "order-button ua-flag",
                        class: {
                            disabled: null === t.order.ps.uaBankCards || void 0 === t.order.ps.uaBankCards || t.sumInUAH < 200
                        },
                        attrs: {
                            href: null === t.order.ps.uaBankCards ? "#" : t.order.ps.uaBankCards
                        }
                    }, [t._v(t._s(t.$t("pShop.orderUaCards"))), r("span", [t._v("Visa/MasterCard")])]), r("div", {
                        staticClass: "order-ps-help"
                    }, [t._v("Доступно от 200₴")])]), r("div", [r("a", {
                        staticClass: "order-button",
                        class: {
                            disabled: null === t.order.ps.qiwi
                        },
                        attrs: {
                            href: null === t.order.ps.qiwi ? "#" : t.order.ps.qiwi
                        }
                    }, [r("img", {
                        attrs: {
                            src: o(845),
                            alt: t.$t("pShop.orderLogoQiwi")
                        }
                    })]), r("div", {
                        staticClass: "order-ps-help"
                    }, [t._v(t._s(t.$t("pShop.orderLimit")) + " " + t._s(t._f("currency")(150)))])]), r("div", [r("a", {
                        staticClass: "order-button two-lines",
                        class: {
                            disabled: null === t.order.ps.crypto
                        },
                        attrs: {
                            href: null === t.order.ps.crypto ? "#" : t.order.ps.crypto
                        }
                    }, [t._v("Криптовалюты")])]), r("div", {
                        staticStyle: {
                            "grid-column": "span 2"
                        }
                    }, [r("a", {
                        staticClass: "order-button two-lines",
                        class: {
                            disabled: null === t.order.ps.pgsList
                        },
                        attrs: {
                            href: null === t.order.ps.pgsList ? "#" : t.order.ps.pgsList.skinsBack
                        }
                    }, [t._v("Оплатить игровыми"), r("span", [t._v("вещами Steam")])])]), r("div", [r("a", {
                        staticClass: "order-button two-lines",
                        class: {
                            disabled: null === t.order.ps.allMethods
                        },
                        attrs: {
                            href: null === t.order.ps.allMethods ? "#" : t.order.ps.allMethods
                        }
                    }, [t._v("Все способы оплаты")])])]), r("div", {
                        staticClass: "terms"
                    }, [r("input", {
                        attrs: {
                            type: "checkbox",
                            checked: "checked"
                        }
                    }), r("span", [t._v(t._s(t.$t("pShop.orderTermsText")) + " с"), r("nuxt-link", {
                        attrs: {
                            to: "/document/terms"
                        }
                    }, [t._v(t._s(t.$t("pShop.orderTermsLink")))])], 1)])]) : t._e()])], 1)
                }), r, !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                ShopForm: o(685).default
            })
        }
    }
]);