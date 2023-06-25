(window.webpackJsonp = window.webpackJsonp || []).push([
    [45, 6, 19], {
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
                    var n = "/" === e ? "https://arizona-rp.com/" : "https://arizona-rp.com" + e + "/";
                    r.link.push({
                        rel: "canonical",
                        href: n
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
        453: function(t, e, o) {
            "use strict";
            var r = o(4),
                n = o(32),
                l = o(5),
                c = o(22),
                d = o(25),
                h = o(37).f,
                m = o(219),
                v = l.Symbol;
            if (n && "function" == typeof v && (!("description" in v.prototype) || void 0 !== v().description)) {
                var f = {},
                    w = function() {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                            e = this instanceof w ? new v(t) : void 0 === t ? v() : v(t);
                        return "" === t && (f[e] = !0), e
                    };
                m(w, v);
                var _ = w.prototype = v.prototype;
                _.constructor = w;
                var x = _.toString,
                    y = "Symbol(test)" == String(v("test")),
                    F = /^Symbol\((.*)\)[^)]+$/;
                h(_, "description", {
                    configurable: !0,
                    get: function() {
                        var symbol = d(this) ? this.valueOf() : this,
                            t = x.call(symbol);
                        if (c(f, symbol)) return "";
                        var desc = y ? t.slice(7, -1) : t.replace(F, "$1");
                        return "" === desc ? void 0 : desc
                    }
                }), r({
                    global: !0,
                    forced: !0
                }, {
                    Symbol: w
                })
            }
        },
        454: function(t, e, o) {
            "use strict";
            o.r(e);
            var r = o(2),
                n = (o(11), {
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
                l = o(13),
                component = Object(l.a)(n, undefined, undefined, !1, null, null, null);
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
        683: function(t, e, o) {
            "use strict";
            o.r(e);
            var r = o(2),
                n = (o(11), o(454)),
                l = (o(217), o(455), {
                    mixins: [n.default],
                    data: () => ({
                        fields: {
                            username: null,
                            serverId: 0,
                            password: null,
                            twoFactorCode: null
                        },
                        actionUrl: null,
                        recaptcha: !0,
                        twoFactorAuthData: null
                    }),
                    computed: {
                        servers() {
                            return this.$store.state.servers.list
                        },
                        selectServerOptions() {
                            var t = [{
                                label: this.$t("cAuthForm.gameServer"),
                                value: 0
                            }];
                            return this.servers.forEach((e => t.push({
                                label: e.name,
                                value: e.id
                            }))), t
                        }
                    },
                    watch: {
                        isLoading(t) {
                            this.$emit("changeLoadingStatus", t)
                        }
                    },
                    created() {
                        this.$parent.$on("submitForm", this.submitForm), void 0 === this.$recaptcha && (this.recaptcha = !1)
                    },
                    methods: {
                        sendForm() {
                            var t = this;
                            return Object(r.a)((function*() {
                                if (null === t.twoFactorAuthData) try {
                                    t.createPayload(), yield t.$auth.loginWith("local", {
                                        data: t.payload
                                    })
                                } catch (e) {
                                    t.isLoading = !1, 422 === e.response.status ? t.parseValidateErrors(e.response.data) : 423 === e.response.status && (t.twoFactorAuthData = e.response.data, !0 === t.recaptcha && (t.recaptcha = !1, t.recaptchaReload()), t.$nextTick((() => {
                                        t.$refs.twoFactorCodeInput.focus()
                                    })))
                                } else {
                                    var e = t.$auth.strategies.local.options.endpoints.login.url;
                                    t.$auth.strategies.local.options.endpoints.login.url = "/two-factor/check";
                                    try {
                                        t.payload = t.twoFactorAuthData, t.payload.secret = t.fields.twoFactorCode, yield t.$auth.loginWith("local", {
                                            data: t.payload
                                        })
                                    } catch (e) {
                                        t.isLoading = !1, 422 === e.response.status && (t.errors = {}, t.addError("twoFactorCode", e.response.data[0].message))
                                    }
                                    t.$auth.strategies.local.options.endpoints.login.url = e, t.twoFactorAuthData = null
                                }
                            }))()
                        },
                        prevalidate() {
                            return new Promise(((t, e) => {
                                null === this.fields.twoFactorCode && (0 === this.fields.serverId && (this.addError("serverId", this.$t("cAuthForm.errServer")), this.isLoading = !1, e(new Error("serverId invalid"))), (null == this.fields.username || this.fields.username.length < 3) && (this.addError("username", this.$t("cAuthForm.errUsername")), this.isLoading = !1, e(new Error("username invalid"))), (null == this.fields.password || this.fields.password.length < 6) && (this.addError("password", this.$t("cAuthForm.errPassword")), this.isLoading = !1, e(new Error("password invalid")))), t()
                            }))
                        }
                    }
                }),
                c = o(13),
                component = Object(c.a)(l, (function() {
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
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null === t.twoFactorAuthData,
                            expression: "twoFactorAuthData === null"
                        }],
                        staticClass: "input input--blue"
                    }, [o("label", {
                        staticClass: "input__label",
                        attrs: {
                            for: "username"
                        }
                    }, [t._v(t._s(t.$t("cAuthForm.username")))]), o("div", {
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
                            placeholder: t.$t("cAuthForm.username")
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
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null === t.twoFactorAuthData,
                            expression: "twoFactorAuthData === null"
                        }],
                        staticClass: "input input--blue"
                    }, [o("label", {
                        staticClass: "input__label",
                        attrs: {
                            for: "password"
                        }
                    }, [t._v(t._s(t.$t("cAuthForm.password")))]), o("div", {
                        staticClass: "input__row"
                    }, [o("svg", {
                        staticClass: "input__icon",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 448 512"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                        }
                    })]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.fields.password,
                            expression: "fields.password"
                        }],
                        staticClass: "input__element",
                        attrs: {
                            id: "password",
                            type: "password",
                            placeholder: t.$t("cAuthForm.password"),
                            name: "password"
                        },
                        domProps: {
                            value: t.fields.password
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.fields, "password", e.target.value)
                            }
                        }
                    })]), t.hasError("password") ? o("div", {
                        staticClass: "input__error"
                    }, [t._v(t._s(t.getError("password")))]) : t._e()]), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null === t.twoFactorAuthData,
                            expression: "twoFactorAuthData === null"
                        }],
                        staticClass: "input input--blue"
                    }, [o("label", {
                        staticClass: "input__label",
                        attrs: {
                            for: "serverId"
                        }
                    }, [t._v(t._s(t.$t("cAuthForm.server")))]), o("div", {
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
                            domProps: {
                                value: e.value
                            }
                        }, [t._v(t._s(e.label))])
                    })), 0)]), t.hasError("serverId") ? o("div", {
                        staticClass: "input__error"
                    }, [t._v(t._s(t.getError("serverId")))]) : t._e()]), null !== t.twoFactorAuthData ? o("div", {
                        staticClass: "input input--blue"
                    }, ["email" === t.twoFactorAuthData.type ? o("p", {
                        staticStyle: {
                            "font-size": "12px"
                        }
                    }, [t._v(t._s(t.$t("cAuthForm.authEmail")))]) : t._e(), "totp" === t.twoFactorAuthData.type ? o("p", {
                        staticStyle: {
                            "font-size": "12px"
                        }
                    }, [t._v(t._s(t.$t("cAuthForm.authTotp")))]) : t._e(), o("div", {
                        staticClass: "input__row"
                    }, [o("svg", {
                        staticClass: "input__icon",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 448 512"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                        }
                    })]), o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.fields.twoFactorCode,
                            expression: "fields.twoFactorCode"
                        }],
                        ref: "twoFactorCodeInput",
                        staticClass: "input__element",
                        attrs: {
                            autocomplete: "off",
                            id: "two-factor-code",
                            type: "text",
                            placeholder: t.$t("cAuthForm.twoFactorCode"),
                            name: "twoFactorCode"
                        },
                        domProps: {
                            value: t.fields.twoFactorCode
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.fields, "twoFactorCode", e.target.value)
                            }
                        }
                    })]), t.hasError("twoFactorCode") ? o("div", {
                        staticClass: "input__error"
                    }, [t._v(t._s(t.getError("twoFactorCode")))]) : t._e()]) : t._e()]), t.recaptcha ? o("recaptcha", {
                        on: {
                            error: t.onRecaptchaError,
                            success: t.onRecaptchaSuccess,
                            expired: t.onRecaptchaExpired
                        }
                    }) : t._e()], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        704: function(t, e, o) {
            var content = o(820);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(19).default)("3d4827ad", content, !0, {
                sourceMap: !1
            })
        },
        819: function(t, e, o) {
            "use strict";
            o(704)
        },
        820: function(t, e, o) {
            var r = o(18),
                n = o(49),
                l = o(821),
                c = o(822),
                d = r(!1),
                h = n(l),
                m = n(c);
            d.push([t.i, ".lds-ellipsis{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#fff;animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis div:first-child{left:8px;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis div:nth-child(2){left:8px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(3){left:32px;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis div:nth-child(4){left:56px;animation:lds-ellipsis3 .6s infinite}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}.login-page-buttons{text-align:center;margin-top:75px;display:flex;flex-direction:column;align-items:center;grid-row-gap:15px;row-gap:15px}.login-page{position:relative;min-height:950px}.login-page__title{font-size:45px;font-weight:900;text-align:center;margin-top:100px}.login-page .vm--overlay{background-color:rgba(0,0,0,.9)!important}.login-page-render{width:460px;height:849px;background:url(" + h + ") 50%/contain no-repeat;position:absolute;top:95px;left:calc(50% - 600px)}.login-page-form{width:446px;height:440px;margin-left:calc(50% - 73px);background:url(" + m + ") 50% no-repeat;display:flex;align-items:center;justify-content:center}@media(max-width:768px){.login-page{min-height:660px}.login-page-render{display:none}.login-page-form{background:unset;width:100%;height:auto;margin-left:unset}}@media(min-width:1921px){.login-page-buttons{margin-top:75px;grid-row-gap:15px;row-gap:15px}.btn--login{line-height:70px;height:70px;width:250px}.login-page{min-height:950px}.login-page__title{margin-top:100px}.login-page-render{width:460px;height:849px;top:95px;left:calc(50% - 600px)}.login-page-form{width:446px;height:440px;margin-left:calc(50% - 73px);background-size:446px}}", ""]), t.exports = d
        },
        821: function(t, e, o) {
            t.exports = o.p + "img/man-render-1.00521d1.png"
        },
        822: function(t, e, o) {
            t.exports = o.p + "img/login-form-bg-1.b130546.png"
        },
        888: function(t, e, o) {
            "use strict";
            o.r(e);
            var r = o(2),
                n = (o(8), o(12), o(138), o(220), o(683)),
                l = o(452),
                c = {
                    components: {
                        AuthForm: n.default
                    },
                    data: () => ({
                        isLoading: !1
                    }),
                    fetch: t => Object(r.a)((function*() {
                        var {
                            store: e
                        } = t;
                        yield e.dispatch("servers/load")
                    }))(),
                    head() {
                        return Object(l.a)({
                            title: this.$t("pLogin.headTitle")
                        }, this.$route.path)
                    },
                    created() {
                        this.$auth.loggedIn && this.$router.push({
                            name: "profile"
                        })
                    },
                    mounted() {
                        this.$store.commit("breadcrumbs/setItems", []), this.removeBodyClasses(), document.body.classList.add("login")
                    },
                    methods: {
                        authVk() {
                            window.location.href = "https://oauth.vk.com/authorize?" + new URLSearchParams({
                                client_id: 6680502,
                                scope: "offline",
                                redirect_uri: "https://arizona-rp.com/authentication/vkontakte",
                                v: "5.131"
                            })
                        },
                        onChangeLoadingStatus(t) {
                            this.isLoading = t
                        },
                        submitForm() {
                            this.$emit("submitForm")
                        },
                        removeBodyClasses() {
                            Array.from(document.body.classList).forEach((t => document.body.classList.remove(t)))
                        }
                    }
                },
                d = (o(819), o(13)),
                component = Object(d.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "login-page"
                    }, [o("h1", {
                        staticClass: "login-page__title"
                    }, [t._v(t._s(t.$t("pLogin.h1")))]), o("div", {
                        staticClass: "login-page-render"
                    }), o("div", {
                        staticClass: "login-page-form"
                    }, [o("auth-form", {
                        on: {
                            changeLoadingStatus: t.onChangeLoadingStatus
                        }
                    })], 1), o("div", {
                        staticClass: "login-page-buttons"
                    }, [o("button", {
                        staticClass: "btn btn--red btn--login",
                        class: {
                            isLoading: t.isLoading
                        },
                        attrs: {
                            disabled: t.isLoading
                        },
                        on: {
                            click: t.submitForm
                        }
                    }, [o("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.isLoading,
                            expression: "!isLoading"
                        }]
                    }, [t._v(t._s(t.$t("pLogin.btnEnter")))]), o("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isLoading,
                            expression: "isLoading"
                        }]
                    }, [t._m(0)])]), "en" !== t.$i18n.locale ? o("button", {
                        staticStyle: {
                            color: "white"
                        },
                        on: {
                            click: t.authVk
                        }
                    }, [t._v(t._s(t.$t("pLogin.vk")))]) : t._e(), o("nuxt-link", {
                        staticStyle: {
                            cursor: "pointer"
                        },
                        attrs: {
                            to: t.localePath({
                                name: "recovery-password"
                            })
                        }
                    }, [t._v(t._s(t.$t("pLogin.recoveryPassword")))])], 1)])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "lds-ellipsis"
                    }, [e("div"), e("div"), e("div"), e("div")])
                }], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                AuthForm: o(683).default
            })
        }
    }
]);