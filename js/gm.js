!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var o = t();
        for (var n in o) ("object" == typeof exports ? exports : e)[n] = o[n]
    }
}(self, (function () {
    return (() => {
        var e = {
            956: e => {
                e.exports = '<div class="gm-toolbar" {{vm.keyName}}="{{vm.gridManagerName}}"><span class="refresh-action"><i class="gm-icon gm-icon-refresh"></i></span><div class="goto-page">{{ vm.gotoFirstText }}<input type="text" class="gp-input" current-page-info/>{{ vm.gotoLastText }}</div><div class="change-size">{{ vm.pageSizeOptionTpl }}</div><div class="toolbar-info checked-info"></div><div class="toolbar-info page-info"></div><div class="pagination"><ul pagination-before><li class="first-page">{{ vm.firstPageText }}</li><li class="previous-page">{{ vm.previousPageText }}</li></ul><ul pagination-number></ul><ul pagination-after><li class="next-page">{{ vm.nextPageText }}</li><li class="last-page">{{ vm.lastPageText }}</li></ul></div></div>'
            }, 976: e => {
                e.exports = "<label class=\"gm-checkbox-wrapper{{vm.disabled ? ' disabled-radio-checkbox' : ''}}\"><span class=\"gm-radio-checkbox gm-checkbox{{vm.checked === 'checked' ? ' gm-checkbox-checked' : ''}}\"><input type=\"checkbox\" class=\"gm-radio-checkbox-input gm-checkbox-input\"{{vm.value ? ' value=\"' + vm.value + '\"' : ''}}{{vm.checked === 'checked' ? ' checked=\"true\"' : ''}}/><span class=\"gm-radio-checkbox-inner gm-checkbox-inner\"></span></span>{{vm.label ? '<span class=\"gm-radio-checkbox-label\">' + vm.label + '</span>' : ''}}</label>"
            }, 692: e => {
                e.exports = "<td gm-create gm-checkbox>{{vm.template}}</td>"
            }, 963: e => {
                e.exports = "<label class=\"gm-radio-wrapper{{vm.disabled ? ' disabled-radio-checkbox' : ''}}\"><span class=\"gm-radio-checkbox gm-radio{{vm.checked ? ' gm-radio-checked' : ''}}\"><input type=\"radio\" class=\"gm-radio-checkbox-input gm-radio-input\"{{vm.value ? ' value=\"' + vm.value + '\"' : ''}}{{vm.checked ? ' checked=\"true\"' : ''}}/><span class=\"gm-radio-checkbox-inner gm-radio-inner\"></span></span>{{vm.label ? '<span class=\"gm-radio-checkbox-label\">' + vm.label + '</span>' : ''}}</label>"
            }, 271: e => {
                e.exports = '<div class="gm-config-area" {{vm.key}}><span class="config-action"><i class="gm-icon gm-icon-close"></i></span><div class="config-info">{{vm.info}}</div><ul class="config-list"></ul></div>'
            }, 125: e => {
                e.exports = '<th {{vm.thAttr}}><div class="th-wrap"><span class="{{vm.thTextClassName}}" {{vm.compileAttr}}>{{vm.thText}}</span></div></th>'
            }, 397: e => {
                e.exports = "<thead {{vm.key}}>{{vm.thListTpl}}</thead>"
            }, 985: e => {
                e.exports = '<div class="{{vm.classNames}}" {{vm.wrapKey}}><div class="table-header"></div><div class="table-div" {{vm.divKey}}></div><span class="text-dreamland"></span>{{vm.configTpl}} {{vm.ajaxPageTpl}}</div>'
            }, 909: e => {
                e.exports = '<table class="dreamland-table {{vm.class}}"><thead><tr>{{vm.th}}</tr></thead><tbody>{{vm.tbody}}</tbody></table>'
            }, 986: e => {
                e.exports = '<div class="gm-dropdown"><span class="gm-dropdown-text"></span><span class="gm-dropdown-icon"></span><ul class="gm-dropdown-list">{{vm.li}}</ul></div>'
            }, 285: e => {
                e.exports = '<div class="gm-filter-area"><i class="fa-icon gm-icon gm-icon-filter{{vm.icon}}"></i><div class="fa-con"><ul class="filter-list" {{vm.style}}>{{vm.list}}</ul><div class="filter-bottom"><span class="filter-button filter-submit">{{vm.ok}}</span><span class="filter-button filter-reset">{{vm.reset}}</span></div></div></div>'
            }, 763: e => {
                e.exports = '<table class="dreamland-row {{vm.class}}"><tbody>{{vm.tbody}}</tbody></table>'
            }, 923: e => {
                e.exports = '<div class="gm-remind-action"><i class="ra-icon gm-icon gm-icon-help"></i><div class="ra-area" {{vm.style}}>{{vm.text}}</div></div>'
            }, 472: e => {
                e.exports = '<div class="gm-sorting-action"><i class="sa-icon sa-up gm-icon gm-icon-up"></i><i class="sa-icon sa-down gm-icon gm-icon-down"></i></div>'
            }
        }, t = {};

        function o(n) {
            var r = t[n];
            if (void 0 !== r) return r.exports;
            var s = t[n] = {exports: {}};
            return e[n](s, s.exports, o), s.exports
        }

        o.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return o.d(t, {a: t}), t
        }, o.d = (e, t) => {
            for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
        }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        };
        var n = {};
        return (() => {
            "use strict";
            o.r(n), o.d(n, {default: () => ls, jTool: () => X});
            const e = "jTool-create-dom", t = {
                    "[object String]": "string",
                    "[object Boolean]": "boolean",
                    "[object Undefined]": "undefined",
                    "[object Number]": "number",
                    "[object Object]": "object",
                    "[object Error]": "error",
                    "[object Function]": "function",
                    "[object Date]": "date",
                    "[object Array]": "array",
                    "[object RegExp]": "regexp",
                    "[object Null]": "null",
                    "[object NodeList]": "nodeList",
                    "[object Arguments]": "arguments",
                    "[object Window]": "window",
                    "[object HTMLDocument]": "document"
                }, r = e => e && e === e.window,
                s = e => e instanceof Element ? "element" : t[Object.prototype.toString.call(e)], a = () => {
                }, i = e => e.jTool, c = (e, t) => {
                    const o = e.DOMList;
                    if (!u(o)) return m(t) ? o[t] : o
                }, l = (e, t) => {
                    if (e && (!i(e) || (e = c(e), !u(e))) && (u(e.length) || [].every.call(e, ((e, o) => (!r(e) && i(e) && (e = e.get(0)), !1 !== t.call(e, e, o)))), y(e))) for (const o in e) {
                        const n = e[o];
                        if (!1 === t.call(n, o, n)) break
                    }
                }, d = (e, t) => getComputedStyle(e)[t], p = t => {
                    let o = document.querySelector(`#${e}`);
                    if (!o) {
                        const t = document.createElement("table");
                        t.id = e, t.style.display = "none", document.body.appendChild(t), o = document.querySelector(`#${e}`)
                    }
                    o.innerHTML = u(t) ? "" : t;
                    let n = o.childNodes;
                    if (1 === n.length) {
                        const e = n[0], o = e.nodeName, r = e.childNodes;
                        (!/<tbody|<TBODY/.test(t) && "TBODY" === o || !/<thead|<THEAD/.test(t) && "THEAD" === o || !/<tr|<TR/.test(t) && "TR" === o || !/<td|<TD/.test(t) && "TD" === o || !/<th|<TH/.test(t) && "TH" === o) && (n = r)
                    }
                    return document.body.removeChild(o), n
                }, u = e => "undefined" === s(e), h = e => "null" === s(e), g = e => "string" === s(e),
                f = e => "function" === s(e), m = e => "number" === s(e), v = e => "boolean" === s(e),
                y = e => "object" === s(e), b = e => {
                    let t = !0;
                    for (const o in e) e.hasOwnProperty(o) && (t = !1);
                    return t
                }, x = e => "array" === s(e), w = e => x(e) && e.length > 0, k = e => "element" === s(e),
                C = e => "nodeList" === s(e);

            function $() {
                if (0 === arguments.length) return {};
                let e, t = !1, o = 1, n = arguments[0];
                for (1 === arguments.length && y(arguments[0]) ? (n = this, o = 0) : 2 === arguments.length && v(arguments[0]) ? (t = arguments[0], n = this, o = 1) : arguments.length > 2 && v(arguments[0]) && (t = arguments[0], n = arguments[1] || {}, o = 2); o < arguments.length; o++) e = arguments[o] || {}, r(e, n);

                function r(e, o) {
                    for (let n in e) e.hasOwnProperty(n) && (t && y(e[n]) ? (y(o[n]) || (o[n] = {}), r(e[n], o[n])) : o[n] = e[n])
                }

                return n
            }

            const T = {isWindow: r, noop: a, type: s, getStyle: d, isEmptyObject: b, each: l};

            function D(e, t) {
                let o = (() => {
                    if (!e) return void (e = null);
                    if (r(e) || e === document || k(e)) return [e];
                    if (C(e) || x(e)) return e;
                    if (i(e)) return e.DOMList;
                    if (/<.+>/.test(e)) return p(e.trim());
                    if (!t) return document.querySelectorAll(e);
                    g(t) && (t = document.querySelectorAll(t)), k(t) && (t = [t]), i(t) && (t = t.DOMList);
                    const o = [];
                    return l(t, (t => {
                        l(t.querySelectorAll(e), (e => {
                            e && o.push(e)
                        }))
                    })), o
                })();
                return o && 0 !== o.length || (o = void 0), this.jTool = !0, this.DOMList = o, this.length = o ? o.length : 0, this.querySelector = e, this
            }

            const O = "Content-Type", j = "application/x-www-form-urlencoded";

            function S(e) {
                if (!y(e)) return e;
                let t = "";
                return l(e, ((e, o) => {
                    t && (t += "&"), t += e + "=" + o
                })), t
            }

            function A(e) {
                let {
                    url: t,
                    type: o,
                    data: n,
                    headers: r,
                    async: s,
                    xhrFields: i,
                    beforeSend: c,
                    complete: l,
                    success: d,
                    error: p
                } = $({
                    url: null,
                    type: "GET",
                    data: null,
                    headers: {},
                    async: !0,
                    xhrFields: {},
                    beforeSend: a,
                    complete: a,
                    success: a,
                    error: a
                }, e);
                o = o.toUpperCase();
                const u = new XMLHttpRequest;
                let h;
                "GET" === o && n && (t = t + (-1 === t.indexOf("?") ? "?" : "&") + S(n)), "POST" === o && (r[O] || (r[O] = j), 0 === r[O].indexOf(j) && (h = S(n)), 0 === r[O].indexOf("application/json") && (h = JSON.stringify(n))), u.open(o, t, s);
                for (const e in i) u[e] = i[e];
                for (const e in r) u.setRequestHeader(e, r[e]);
                c(u), u.onload = () => {
                    l(u, u.status)
                }, u.onreadystatechange = function () {
                    if (4 !== u.readyState) return;
                    const e = u.status;
                    e >= 200 && e < 300 || 304 === e ? d(u.response, e) : p(u, e, u.statusText)
                }, u.send(h)
            }

            const M = e => e.jToolEvent || {}, _ = (e, t, o, n, r) => {
                    if (f(o) && (r = n || !1, n = o, o = void 0), o && k(e[0]) || (o = ""), "" !== o) {
                        const e = n;
                        n = function (t) {
                            let n = t.target;
                            for (; n && n !== this;) {
                                if (-1 !== [].indexOf.call(this.querySelectorAll(o), n)) {
                                    e.apply(n, arguments);
                                    break
                                }
                                n = n.parentNode
                            }
                        }
                    }
                    const s = t.split(" "), i = [];
                    return l(s, (e => {
                        e.trim() && i.push({
                            eventName: e + o,
                            type: e.split(".")[0],
                            querySelector: o,
                            callback: n || a,
                            useCapture: r || !1
                        })
                    })), i
                }, P = {
                    on: function (e, t, o, n) {
                        return this.addEvent(_(c(this), e, t, o, n))
                    }, off: function (e, t) {
                        return this.removeEvent(_(c(this), e, t))
                    }, bind: function (e, t, o) {
                        return this.on(e, void 0, t, o)
                    }, unbind: function (e) {
                        return this.removeEvent(_(c(this), e))
                    }, trigger: function (e) {
                        return l(this, (t => {
                            try {
                                const o = M(t)[e];
                                if (o && o.length > 0) {
                                    const o = new Event(e);
                                    t.dispatchEvent(o)
                                } else "click" === e && t[e]()
                            } catch (t) {
                                console.error(`Event:[${e}] error`, t)
                            }
                        })), this
                    }, addEvent: function (e) {
                        return l(e, (e => {
                            l(this, (t => {
                                const o = M(t), {eventName: n, type: r, callback: s, useCapture: a} = e;
                                o[n] = o[n] || [], o[n].push(e), t.jToolEvent = o, t.addEventListener(r, s, a)
                            }))
                        })), this
                    }, removeEvent: function (e) {
                        return l(e, (e => {
                            l(this, (t => {
                                const o = M(t), n = e.eventName, r = o[n];
                                r && (l(r, (e => {
                                    t.removeEventListener(e.type, e.callback)
                                })), delete o[n])
                            }))
                        })), this
                    }
                },
                E = e => ["width", "max-width", "height", "top", "left", "right", "bottom", "padding", "margin"].some((t => -1 !== e.indexOf(t)));

            function z(e, t, o) {
                h(o) || u(o) || (m(o) && (o = o.toString()), -1 === o.indexOf("px") && E(t) && (o += "px"), l(e, (e => {
                    e.style[t] = o
                })))
            }

            const H = {
                css: function (e, t) {
                    const o = c(this);
                    if (g(e) && u(t)) {
                        let t = d(o[0], e);
                        return E(e) && (t = parseFloat(t)), t
                    }
                    if (y(e)) for (const t in e) z(o, t, e[t]); else z(o, e, t);
                    return this
                }, width: function (e) {
                    return this.css("width", e)
                }, height: function (e) {
                    return this.css("height", e)
                }
            };

            function N(e, t, o) {
                const n = function (e) {
                    return e.indexOf(" ") ? e.split(" ") : [e]
                }(t);
                l(e, (e => {
                    l(n, (t => {
                        e.classList[o](t)
                    }))
                }))
            }

            const L = {
                addClass: function (e) {
                    return N(c(this), e, "add"), this
                }, removeClass: function (e) {
                    return N(c(this), e, "remove"), this
                }, hasClass: function (e) {
                    return [].some.call(c(this), (function (t) {
                        return t.classList.contains(e)
                    }))
                }
            }, R = {
                append: function (e) {
                    return this.html(e, "append")
                }, prepend: function (e) {
                    return this.html(e, "prepend")
                }, before: function (e) {
                    i(e) && (e = c(e, 0));
                    const t = c(this, 0);
                    return t.parentNode.insertBefore(e, t), this
                }, after: function (e) {
                    i(e) && (e = c(e, 0));
                    const t = c(this, 0), o = t.parentNode;
                    o.lastChild === t ? o.appendChild(e) : o.insertBefore(e, t.nextSibling)
                }, text: function (e) {
                    return u(e) ? c(this, 0).textContent : (l(this, (t => {
                        t.textContent = e
                    })), this)
                }, html: function (e, t) {
                    const o = c(this);
                    if (u(e) && u(t)) return o[0].innerHTML;
                    let n;
                    return i(e) && (e = c(e)), (g(e) || m(e)) && (e = p(e)), k(e) && (e = [e]), l(o, (o => {
                        t || (o.innerHTML = ""), "prepend" === t && (n = o.firstChild), l(e, (e => {
                            e = e.cloneNode(!0), n ? o.insertBefore(e, n) : o.appendChild(e), o.normalize()
                        }))
                    })), this
                }, wrap: function (e, t) {
                    const o = p(e)[0], n = c(this, 0);
                    n.parentNode.insertBefore(o, n), o.querySelector(t).appendChild(n)
                }, closest: function (e) {
                    const t = c(this, 0);
                    return u(e) ? new D(t.parentNode) : new D(t.closest(e))
                }, parent: function () {
                    return this.closest()
                }, clone: function (e) {
                    return new D(c(this, 0).cloneNode(e || !1))
                }, remove: function () {
                    l(this, (e => {
                        e.remove()
                    }))
                }
            }, K = (e, t, o) => {
                const n = {top: "scrollTop", left: "scrollLeft"}[o];
                if (9 === e.nodeType && (e = e.body), !m(t)) return e[n];
                e[n] = t
            }, q = {
                offset: function () {
                    let e = {top: 0, left: 0};
                    const t = c(this, 0);
                    if (!t.getClientRects().length) return e;
                    if ("none" === d(t, "display")) return e;
                    e = t.getBoundingClientRect();
                    const o = t.ownerDocument.documentElement;
                    return {top: e.top + pageYOffset - o.clientTop, left: e.left + pageXOffset - o.clientLeft}
                }, scrollTop: function (e) {
                    return K(c(this, 0), e, "top")
                }, scrollLeft: function (e) {
                    return K(c(this, 0), e, "left")
                }
            }, B = {
                get: function (e) {
                    return c(this, e)
                }, eq: function (e) {
                    return new D(c(this, e))
                }, find: function (e) {
                    return new D(e, this)
                }, index: function (e) {
                    const t = c(this, 0);
                    return e ? i(e) && (e = c(e)) : e = t.parentNode.children, e ? [].indexOf.call(e, t) : -1
                }
            }, I = "inline-block", F = "table-cell", G = {
                TABLE: "table",
                THEAD: "table-header-group",
                TBODY: "table-row-group",
                TR: "table-row",
                TH: F,
                TD: F,
                SPAN: I,
                A: I,
                FONT: I,
                BUTTON: I,
                I
            }, W = {
                animate: function (e, t = 0, o = a) {
                    let n = "", r = "", s = c(this, 0);
                    l(e, ((e, t) => {
                        n += e + ":" + d(s, e) + ";", r += e + ":" + t + ";"
                    }));
                    const i = `@keyframes jToolAnimate {from {${n}}to {${r}}}`, p = document.createElement("style");
                    p.type = "text/css", document.head.appendChild(p), p.textContent = p.textContent + i, s.style.animation = `jToolAnimate ${t / 1e3}s ease-in-out forwards`, setTimeout((() => {
                        H.css.call(this, e), s.style.animation = "", document.head.removeChild(p), o()
                    }), t)
                }, show: function () {
                    return l(this, (e => {
                        e.style.display = G[e.nodeName] || "block"
                    })), this
                }, hide: function () {
                    return l(this, (e => {
                        e.style.display = "none"
                    })), this
                }
            }, J = e => h(e) ? void 0 : e, V = {
                attr: function (e, t) {
                    return u(t) ? J(c(this, 0).getAttribute(e)) : (l(this, (o => {
                        o.setAttribute(e, t)
                    })), this)
                }, removeAttr: function (e) {
                    l(this, (t => {
                        t.removeAttribute(e)
                    }))
                }, prop: function (e, t) {
                    return u(t) ? J(c(this, 0)[e]) : (l(this, (o => {
                        o[e] = t
                    })), this)
                }, val: function (e) {
                    return this.prop("value", e) || ""
                }
            }, U = function (e, t) {
                return new D(e, t)
            };
            D.prototype = U.prototype = {}, U.extend = U.prototype.extend = $, U.extend(T), U.ajax = A, l([P, H, L, R, q, B, W, V], (e => {
                U.prototype.extend(e)
            })), window.jTool = U;
            const X = U, Y = "grid-manager", Q = "grid-manager-wrap", Z = "grid-manager-div",
                ee = "grid-manager-config", te = "grid-manager-toolbar", oe = "grid-master", ne = "grid-manager-thead",
                re = "grid-manager-mock-thead", se = "grid-manager-tbody", ae = "th-name", ie = "gm-cache-key",
                ce = "gm-level-key", le = "parent-key", de = "children-state", pe = "gm-focus-td",
                ue = "gm_row_class_name", he = "GridManagerMemory", ge = "GridManagerVersion",
                fe = "grid-manager-cache-error", me = "gm_fold", ve = "gm_order", ye = "gm_moverow", be = "gm_checkbox",
                xe = "no-select-text", we = "empty-data", ke = "gm-load-area", Ce = "last-visible", $e = "cell-hidden",
                Te = "gm-create", De = ["class", "style"], Oe = "checked", je = "indeterminate", Se = "unchecked",
                Ae = "gm-checkbox-checked", Me = "gm-checkbox-indeterminate", _e = "disabled", Pe = "gm-remind-action",
                Ee = "gm-sorting-action", ze = "px",
                He = e => [`background:${e};height:18px;line-height:18px;padding:1px;border-radius:3px 0 0 3px;color:#fff`, "background:#169fe6;height:18px;line-height:18px;padding:1px;border-radius:0 3px 3px 0;color:#fff"],
                Ne = "Info", Le = "Warn", Re = "Error", Ke = {[Ne]: He("#333"), [Le]: He("#f90"), [Re]: He("#f00")},
                qe = {[Y]: {}, [Z]: {}, [Q]: {}, [ne]: {}, [re]: {}, [se]: {}, allTh: {}, allFakeTh: {}},
                Be = (e, t, o) => {
                    const n = qe[t];
                    return n[e] || (n[e] = X(o || `[${t}="${e}"]`)), n[e]
                }, Ie = e => {
                    for (let t in qe) delete qe[t][e]
                }, Fe = "filter-selected", Ge = "fa-con", We = "click", Je = "mousedown", Ve = "mousemove", Ue = "mouseup",
                Xe = "mouseleave", Ye = "scroll", Qe = "events", Ze = "target", et = "selector",
                tt = (e, t, o) => ({[Qe]: e, [Ze]: t, [et]: o}), ot = (e, t, o) => {
                    let n = $(!0, {}, t);
                    for (let t in e) e[t].isAutoCreate && delete n[t];
                    return delete n.gm_checkbox_disabled, delete n[ie], delete n[ce], delete n[ue], o && o.forEach((e => delete n[e])), n
                }, nt = (e, t) => {
                    const o = lt(e), n = o.find(".gm-load-area");
                    n.length > 0 && n.remove();
                    const r = X(t);
                    r.addClass(ke), o.append(r)
                }, rt = (e, t) => {
                    setTimeout((() => {
                        X(".gm-load-area", lt(e)).remove()
                    }), t || 0)
                }, st = e => g(e) ? e : e.getAttribute(Y), at = e => `[grid-manager="${e}"]`, it = e => Be(e, Y),
                ct = e => Be(e, Z), lt = e => Be(e, Q), dt = e => Be(e, ne), pt = e => Be(e, re), ut = e => Be(e, se),
                ht = (e, t) => (t.jTool && (t = yt(t)), X(`[${ne}="${e}"] th[th-name="${t}"]`)),
                gt = (e, t) => X(`[grid-manager-mock-thead="${e}"] th[th-name="${t}"]`),
                ft = e => Be(e, "allTh", `[${ne}="${e}"] th`), mt = e => X(`[${ne}="${e}"] th:not(cell-hidden)`),
                vt = (e, t) => X(`[grid-manager-mock-thead="${e}"] th:not([cell-hidden])${t ? ":not([gm-create])" : ""}`),
                yt = e => e.attr(ae), bt = e => X(`[empty-template="${e}"]`),
                xt = (e, t) => g(t) ? X(`tbody tr td:nth-child(${e.index() + 1})`, it(t)) : X(`td:nth-child(${e.index() + 1})`, t),
                wt = (e, t, o) => {
                    l(x(t) ? t : [t], (t => {
                        const n = ht(e, t), r = gt(e, t), s = xt(n, e), a = o ? "removeAttr" : "attr";
                        n[a]($e, ""), r[a]($e, ""), s[a]($e, "");
                        const i = X(`[${ee}="${e}"] li[th-name="${t}"]`);
                        o ? i.addClass("checked-li") : i.removeClass("checked-li"), X('input[type="checkbox"]', i).prop("checked", o), (e => {
                            const t = bt(e);
                            if (0 === t.length) return;
                            const o = mt(e).length;
                            X("td", t).attr("colspan", o)
                        })(e)
                    }))
                }, kt = e => {
                    const t = vt(e), o = t.length - 1, n = t.eq(o);
                    X(`${at(e)} [last-visible]`).removeAttr(Ce), n.attr(Ce, ""), mt(e).eq(o).attr(Ce, ""), xt(n, e).attr(Ce, "")
                }, Ct = (e, t) => {
                    const {_: o, columnMap: n, isIconFollowText: r, __isNested: s} = e;
                    let a = ct(o).width(), i = 0;
                    const c = [], d = [];
                    let p;
                    l(n, ((e, n) => {
                        let {__width: l, width: u, isShow: h, pk: g, children: f} = n;
                        if (h && !g) if (n.disableCustomize) a -= u; else {
                            if (u && "auto" !== u && s && w(f)) {
                                const e = n.colspan;
                                n.width = u = parseInt(u / e, 10) * e
                            }
                            if (t && (!u || "auto" === u) || !t && (!l || "auto" === l)) return n.width = $t(o, n, r, s), i += n.width, void (s && w(f) ? d.push(n) : c.push(n));
                            t && (i += u), t || (n.width = l, i += l), (!p || p.index > n.index) && (p = n)
                        }
                    }));
                    const u = c.length, h = d.length;
                    let g = a - i;
                    if (g > 0 && h) {
                        let e = Math.floor(g / (h + u));
                        l(d, (t => {
                            const o = t.colspan;
                            e = parseInt(parseInt(e, 10) / o, 10) * o, t.width = t.width + e, g -= e
                        }))
                    }
                    if (p && g > 0 && !u && (p.width = p.width + g), g > 0 && u) {
                        const e = Math.floor(g / u);
                        l(c, ((t, o) => {
                            o !== u - 1 ? (t.width = t.width + e, g -= e) : t.width = t.width + g
                        }))
                    }
                    l(n, ((e, t) => {
                        t.isShow && t.disableCustomize || t.pk || ht(o, e).width(t.width)
                    }))
                }, $t = (e, t, o, n) => {
                    const r = (e, t, o) => {
                        const n = X(".th-wrap", t), r = X(".th-text", t), s = Tt(e, r.html(), {
                            fontSize: r.css("font-size"),
                            fontWeight: r.css("font-weight"),
                            fontFamily: r.css("font-family")
                        }), a = n.css("padding-left"), i = n.css("padding-right");
                        let c = 0;
                        if (o) {
                            const e = X(`.${Pe}`, t);
                            e.length && (c += e.width());
                            const o = X(`.${Ee}`, t);
                            o.length && (c += o.width());
                            const n = X(".gm-filter-area", t);
                            n.length && (c += n.width())
                        }
                        return Math.ceil(s + c + (a || 0) + (i || 0) + 2 + 1)
                    };
                    if (!n || !w(t.children)) return r(e, gt(e, t.key), o);
                    let s = 0, a = 0;
                    const i = t => {
                        t.children.forEach((n => {
                            w(n.children) ? i(n) : (a++, s += r(e, gt(e, t.key), o))
                        }))
                    };
                    return i(t), parseInt(s / a, 10) * a
                }, Tt = (e, t, o) => {
                    const n = X(`[${Q}="${e}"] .text-dreamland`);
                    return n.html(t), n.css(o), n.width()
                }, Dt = (e, t) => {
                    const {_: o, columnMap: n} = e, r = ct(o);
                    if (!r.length) return;
                    const s = pt(o);
                    if (s.css("left", -r.scrollLeft() + ze), !t) {
                        let e;
                        for (let t in n) e = n[t].width, gt(o, t).css({width: e, "max-width": e});
                        s.width(dt(o).width())
                    }
                }, Ot = e => {
                    const t = ct(e);
                    t.attr("gm-overflow-x", dt(e).width() > t.width())
                }, jt = (e, t, o, n) => {
                    const r = lt(e).get(0), s = dt(e).height(), a = s + 1;
                    r.style.width = `calc(${t})`, r.style.height = `calc(${o})`, r.style.paddingTop = a + ze, ct(e).get(0).style.height = n ? `calc(100% - ${X(`[${te}="${e}"]`).height() + ze})` : "100%", X(".table-header", r).height(a), it(e).css("margin-top", -s)
                }, St = e => {
                    for (let t in e) {
                        const o = e[t], n = X(o.target);
                        n.length && n.off(o.events, o.selector)
                    }
                }, At = (e, t) => {
                    console.log(`%c GridManager ${t} %c ${e} `, ...Ke[t])
                }, Mt = e => {
                    At(e, Ne)
                }, _t = e => {
                    At(e, Le)
                }, Pt = e => {
                    At(e, Re)
                }, Et = (e, t, o) => {
                    const n = Object.keys(e), r = Object.keys(t);
                    return g(o) ? e[o] === t[o] : n.length === r.length && n.every((o => JSON.stringify(e[o]) === JSON.stringify(t[o])))
                }, zt = e => JSON.parse(JSON.stringify(e));

            function Ht(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }

            function Nt(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function Lt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Nt(Object(o), !0).forEach((function (t) {
                        Ht(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Nt(Object(o)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            const Rt = {}, Kt = {supportDrag: !0, dragBefore: a, dragAfter: a},
                qt = {supportMoveRow: !1, moveRowConfig: {handler: a}},
                Bt = {supportAdjust: !0, adjustBefore: a, adjustAfter: a}, It = {supportMenu: !0, menuHandler: e => e},
                Ft = {supportConfig: !0, configInfo: "配置列的显示状态"}, Gt = {
                    width: "100%",
                    height: "300px",
                    animateTime: 300,
                    disableLine: !1,
                    disableBorder: !1,
                    loadingTemplate: '<section class="gm-loading"><div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none"></circle></svg></div></section>',
                    skinClassName: "",
                    useWordBreak: !1,
                    isIconFollowText: !1
                }, Wt = {rowHover: null, rowClick: null, cellHover: null, cellClick: null}, Jt = {disableCache: !0}, Vt = {
                    isCombSorting: !1,
                    mergeSort: !1,
                    sortKey: "sort_",
                    sortData: {},
                    sortUpText: "ASC",
                    sortDownText: "DESC",
                    sortMode: "overall",
                    sortingBefore: a,
                    sortingAfter: a
                }, Ut = {
                    supportAjaxPage: !1,
                    useNoTotalsMode: !1,
                    sizeData: [10, 20, 30, 50, 100],
                    pageSize: 20,
                    pageData: {},
                    totalsKey: "totals",
                    currentPageKey: "cPage",
                    pageSizeKey: "pSize",
                    pagingBefore: a,
                    pagingAfter: a
                }, Xt = {supportAutoOrder: !0, autoOrderConfig: {}}, Yt = {
                    supportCheckbox: !0,
                    checkboxConfig: {useRowCheck: !1, useRadio: !1},
                    checkedBefore: a,
                    checkedAfter: a,
                    checkedAllBefore: a,
                    checkedAllAfter: a
                }, Qt = {i18n: "zh-cn"}, Zt = {supportTreeData: !1, treeConfig: {treeKey: "children", openState: !1}},
                eo = {
                    firstLoading: !0,
                    ajaxType: "GET",
                    query: {},
                    ajaxHeaders: {},
                    ajaxXhrFields: {},
                    ajaxBeforeSend: a,
                    ajaxSuccess: a,
                    ajaxComplete: a,
                    ajaxError: a,
                    requestHandler: e => e,
                    responseHandler: e => e,
                    rowRenderHandler: e => e,
                    summaryHandler: e => ({}),
                    dataKey: "data",
                    emptyTemplate: () => '<div class="gm-empty-template">暂无数据</div>'
                }, to = {supportExport: !0, exportConfig: {mode: "static", suffix: "xls", handler: a}},
                oo = {supportPrint: !0};

            function no() {
                $(!0, this, Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt({rendered: !1}, Rt), Kt), qt), Bt), It), Ft), Gt), Jt), Vt), Ut), Xt), Yt), Qt), eo), to), oo), Zt), Wt))
            }

            function ro() {
                const e = this;
                e["order-text"] = {"zh-cn": "序号", "zh-tw": "序號", "en-us": "order"}, e["first-page"] = {
                    "zh-cn": "首页",
                    "zh-tw": "首頁",
                    "en-us": "first"
                }, e["previous-page"] = {
                    "zh-cn": "上一页",
                    "zh-tw": "上一頁",
                    "en-us": "previous"
                }, e["next-page"] = {"zh-cn": "下一页", "zh-tw": "下一頁", "en-us": "next"}, e["last-page"] = {
                    "zh-cn": "尾页",
                    "zh-tw": "尾頁",
                    "en-us": "last"
                }, e["page-info"] = {
                    "zh-cn": '此页显示 {0}-{1}<span class="page-info-totals"> 共{2}条</span>',
                    "zh-tw": '此頁顯示 {0}-{1}<span class="page-info-totals"> 共{2}條</span>',
                    "en-us": 'this page show {0}-{1}<span class="page-info-totals"> count {2}</span>'
                }, e["checked-info"] = {
                    "zh-cn": "已选 {0} 条",
                    "zh-tw": "已選 {0} 條",
                    "en-us": "selected {0}"
                }, e["goto-first-text"] = {
                    "zh-cn": "跳转至",
                    "zh-tw": "跳轉至",
                    "en-us": "goto"
                }, e["goto-last-text"] = {"zh-cn": "页", "zh-tw": "頁", "en-us": "page"}, e.refresh = {
                    "zh-cn": "重新加载",
                    "zh-tw": "重新加載",
                    "en-us": "Refresh"
                }, e.export = {
                    "zh-cn": "导出",
                    "zh-tw": "導出",
                    "en-us": "Export"
                }, e["export-checked"] = {
                    "zh-cn": "导出选中项",
                    "zh-tw": "導出選中項",
                    "en-us": "Export selected"
                }, e.config = {"zh-cn": "配置表", "zh-tw": "配置表", "en-us": "Setting Grid"}, e.print = {
                    "zh-cn": "打印",
                    "zh-tw": "打印",
                    "en-us": "Print"
                }, e.copy = {"zh-cn": "复制", "zh-tw": "復制", "en-us": "Copy"}, e.ok = {
                    "zh-cn": "确定",
                    "zh-tw": "確定",
                    "en-us": "OK"
                }, e.reset = {"zh-cn": "重置", "zh-tw": "重置", "en-us": "Reset"}
            }

            const so = {version: "2.15.2", responseData: {}, checkedData: {}, settings: {}},
                ao = ["width", "__width", "isShow", "__isShow", "index", "__index"],
                io = ["__width", "__isShow", "__index"], co = e => localStorage.getItem(e), lo = (e, t) => {
                    localStorage.setItem(e, t)
                }, po = {}, uo = {}, ho = (e, t, o) => {
                    const n = $o(e), r = go(e), s = e => {
                        const t = e.getAttribute(ie);
                        let s = r[t] || {};
                        if (n.supportTreeData && -1 !== t.indexOf("-")) {
                            const e = n.treeConfig.treeKey;
                            t.split("-").forEach(((t, o) => {
                                s = 0 === o ? r[t] : s[e][t]
                            }))
                        }
                        return o ? s : ot(n.columnMap, s)
                    };
                    if (k(t)) return s(t);
                    if (C(t)) {
                        let e = [];
                        return l(t, (t => {
                            e.push(s(t))
                        })), e
                    }
                    return {}
                }, go = e => zt(so.responseData[e] || []), fo = (e, t) => {
                    so.responseData[e] = t
                }, mo = e => (so.checkedData[e] || []).map((e => $(!0, {}, e))), vo = (e, t, o) => {
                    const {columnMap: n, checkboxConfig: r} = $o(e);
                    if (o) return void (so.checkedData[e] = t.map((e => ot(n, e))));
                    so.checkedData[e] || (so.checkedData[e] = []);
                    const s = so.checkedData[e], a = r.key;
                    t.forEach((e => {
                        const t = ot(n, e), o = e.gm_checkbox, r = ((e, t, o) => {
                            let n = -1, r = !1;
                            return e.some(((e, s) => (r = Et(e, t, o), r && (n = s), r))), n
                        })(s, t, a);
                        o && -1 === r ? s.push(t) : o || -1 === r || s.splice(r, 1)
                    }))
                }, yo = e => location.pathname + location.hash + "-" + e, bo = e => {
                    let t = co(he);
                    return t && "{}" !== t ? (t = JSON.parse(t), JSON.parse(t[yo(e)] || "{}")) : (it(e).attr(fe, "error"), {})
                }, xo = e => {
                    const {disableCache: t, _: o, columnMap: n, supportAjaxPage: r, pageData: s, pageSizeKey: a} = e;
                    if (t) return;
                    const i = {};
                    l(n, ((e, t) => {
                        const o = {};
                        ao.forEach((e => {
                            o[e] = t[e]
                        })), i[e] = o
                    }));
                    const c = {column: i};
                    r && (c[a] = s[a]);
                    const d = JSON.stringify(c);
                    let p = co(he);
                    p = p ? JSON.parse(p) : {}, p[yo(o)] = d, lo(he, JSON.stringify(p))
                }, wo = e => {
                    if (!e) return t = he, localStorage.removeItem(t), Mt("delete user memory of all"), !0;
                    var t;
                    let o = co(he);
                    return !!o && (o = JSON.parse(o), delete o[yo(e)], lo(he, JSON.stringify(o)), Mt(`delete user memory of ${e}`), !0)
                }, ko = e => {
                    const {columnData: t, emptyTemplate: o} = e;
                    o && !f(o) && (e.emptyTemplate = () => o);
                    const n = e => {
                        e.forEach((e => {
                            const t = e.text;
                            if (t && !f(t) && (e.text = () => t), w(e.children)) return n(e.children), void delete e.template;
                            const o = e.template;
                            o && !f(o) && (e.template = () => o)
                        }))
                    };
                    return n(t), e
                }, Co = (e, t, o, n, r) => {
                    e = ko(e);
                    let s = new no;
                    s.textConfig = new ro, $(!0, s, e), s._ = s.gridManagerName, s.browser = navigator.userAgent.toLowerCase().match(/(msie|firefox|chrome|opera|version).*?([\d.]+)/)[1].replace(/version/, "safari");
                    const {
                        _: a,
                        columnData: i,
                        supportMoveRow: c,
                        moveRowConfig: d,
                        supportAutoOrder: p,
                        __isNested: h,
                        __isFullColumn: f,
                        fullColumn: v,
                        supportCheckbox: b,
                        checkboxConfig: x
                    } = s, k = [];
                    c && d.useSingleMode && k.push(t(d)), b && k.push(o(x)), p && k.push(n(s)), f && v.useFold && k.push(r(s));
                    const C = {};
                    let T = !1;
                    const D = !h && i.length > 1, O = (e, t, o) => {
                        e.forEach(((e, n) => {
                            const r = (e = $(!0, {}, e)).key;
                            return r ? (e.width && !m(e.width) && (e.width = parseInt(e.width, 10)), e.remind && (s._remind = !0), g(e.sorting) && (s._sort = !0), y(e.filter) && (s._filter = !0), D && g(e.fixed) ? (s._fixed = !0, e.disableCustomize = !0) : delete e.fixed, e.disableCustomize && !e.width ? (Pt(`column ${r}: width must be set`), void (T = !0)) : (C[r] = e, C[r].isShow = e.isShow || u(e.isShow), C[r].index = n, C[r].__index = n, C[r].__width = e.width, C[r].__isShow = e.isShow, void (h && (w(e.children) && O(e.children, t + 1, e.key), C[r].pk = o, C[r].level = t)))) : (Pt(`columnData[${n}].key undefined`), void (T = !0))
                        }))
                    };
                    if (O(k.concat(i), 0), T) return !1;
                    s.columnMap = C;
                    return (() => {
                        if (s.disableCache) return;
                        const e = s.columnMap, t = bo(a).column || {}, o = Object.keys(t), n = Object.keys(e);
                        if (0 === o.length) return;
                        let r = !0;
                        o.length !== n.length && (r = !1), r && l(e, ((e, o) => {
                            if (!t[e] || io.some((n => {
                                const r = t[e][n], s = o[n];
                                return y(r) ? JSON.stringify(r) !== JSON.stringify(s) : r !== s
                            }))) return r = !1, !1
                        })), r ? $(!0, e, t) : wo(a)
                    })(), To(s), s
                }, $o = e => $(!0, {}, so.settings[e] || {}), To = e => {
                    so.settings[e._] = $(!0, {}, e)
                }, Do = (e, t) => {
                    const o = $o(e), n = o.columnMap;
                    return l(n, ((o, n) => {
                        if (n.disableCustomize) return;
                        let r = ((e, o) => t ? gt(e, o) : ht(e, o))(e, n.key);
                        n.width = r.width(), n.index = r.index(), n.isShow = !g(r.attr($e))
                    })), To(o), xo(o), o
                };

            function Oo(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            const jo = "data-compile-node", So = {}, Ao = e => (So[e] || (So[e] = []), So[e]), Mo = e => {
                So[e] = []
            }, _o = (e, t) => {
                const {_: o, compileAngularjs: n, compileVue: r, compileReact: s} = e;
                if (n || r || s) {
                    const e = Ao(o), n = t.querySelectorAll(`[${jo}]`);
                    [].forEach.call(n, ((t, o) => {
                        const n = e[o];
                        e.push(function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Oo(Object(o), !0).forEach((function (t) {
                                    Ht(e, t, o[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Oo(Object(o)).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                }))
                            }
                            return e
                        }({}, n))
                    }))
                }
            }, Po = (e, t, o, n, r) => {
                const {_: s, compileAngularjs: a, compileVue: i, compileReact: c} = e, l = Ao(s);
                let d = "", p = "";
                return t ? (c && (p = jo, l.push({
                    template: t,
                    row: o,
                    index: n,
                    key: r,
                    type: u(n) ? void 0 : "template",
                    fnArg: [o[r], o, n, r]
                })), (i || a) && (p = jo, l.push({
                    row: o,
                    index: n,
                    key: r
                })), c || (d = t(o[r], o, n, r))) : (d = o[r], (h(d) || u(d)) && (d = "")), {text: d, compileAttr: p}
            };

            async function Eo(e) {
                const {_: t, compileAngularjs: o, compileVue: n, compileReact: r} = e, s = Ao(t);
                let a = document.querySelectorAll(`${at(t)} [${jo}]`);
                0 !== s.length && (s.forEach(((e, t) => {
                    e.el || (e.el = a[t])
                })), n && (await n(s), a = document.querySelectorAll(`${at(t)} [${jo}]`)), o && await o(s), r && await r(s), [].forEach.call(a, (e => {
                    e.removeAttribute(jo)
                })), Mo(t))
            }

            function zo(e, t, o, n, r) {
                var s = {};
                return Object.keys(n).forEach((function (e) {
                    s[e] = n[e]
                })), s.enumerable = !!s.enumerable, s.configurable = !!s.configurable, ("value" in s || s.initializer) && (s.writable = !0), s = o.slice().reverse().reduce((function (o, n) {
                    return n(e, t, o) || o
                }), s), r && void 0 !== s.initializer && (s.value = s.initializer ? s.initializer.call(r) : void 0, s.initializer = void 0), void 0 === s.initializer && (Object.defineProperty(e, t, s), s = null), s
            }

            const Ho = e => (t, o, n) => {
                const r = n.value;
                n.value = o => {
                    const n = r.call(t, o);
                    return (o && o.tpl || e).replace(/\{\{([^(\}\})]+)\}\}/g, ((e, t) => new Function("vm", "return " + t)(n) || ""))
                }
            }, No = {}, Lo = (e, t) => e.textConfig[t][e.i18n];

            function Ro(e, t, o, n, r) {
                let s = [];
                const a = arguments.length;
                if (3 === a && x(arguments[2])) s = arguments[2]; else if (a > 2) for (let e = 2; e < a; e++) s.push(arguments[e]);
                try {
                    let o = Lo(e, t);
                    return s && s.length ? o.replace(/{\d+}/g, (e => {
                        const t = s[e.match(/\d+/)];
                        return u(t) ? "" : t
                    })) : o
                } catch (e) {
                    return _t(`not find language matched to ${t}`), ""
                }
            }

            const Ko = (e, t) => {
                const o = document.createElement("a");
                o.addEventListener("click", (() => {
                    o.download = e, o.href = t
                }));
                const n = document.createEvent("MouseEvents");
                n.initEvent("click", !1, !1), o.dispatchEvent(n)
            };
            const qo = new class {
                async exportGrid(e, t, o) {
                    const n = $o(e), {
                        query: r,
                        disableAutoLoading: s,
                        loadingTemplate: a,
                        exportConfig: i,
                        pageData: c,
                        sortData: l
                    } = n;
                    t = ((e, t, o, n) => {
                        if (!t) {
                            const e = n.fileName;
                            t = f(e) ? e(o) : e
                        }
                        return t || (t = e), `${t}.${n.suffix}`
                    })(e, t, r, i);
                    const d = o ? mo(e) : [], p = go(e), u = i.handler;
                    switch (i.mode) {
                        case"static":
                            this.downStatic(e, s, a, t, o, i.suffix, u, r, c, l, d, p);
                            break;
                        case"blob":
                            await this.downBlob(e, s, a, t, u, r, c, l, d, p);
                            break;
                        case"url":
                            await this.downFilePath(e, s, a, t, u, c, l, d)
                    }
                }

                downStatic(e, t, o, n, r, s, a, i, c, d, p, u) {
                    !t && nt(e, o);
                    let h = a(n, i, c, d, p, u);
                    if (!x(h)) {
                        const t = vt(e, !0), o = ut(e);
                        let n;
                        n = X(r ? 'tr[checked="true"]' : "tr", o), h = [];
                        const s = [];
                        l(t, (e => {
                            s.push(`"${e.querySelector(".th-text").textContent || ""}"`)
                        })), h.push(s), l(n, (e => {
                            let t = [];
                            const o = X("td:not([gm-create]):not([cell-hidden])", e);
                            l(o, (e => {
                                t.push(`"${e.textContent || ""}"`)
                            })), h.push(t)
                        }))
                    }
                    let g = "";
                    l(h, ((e, t) => {
                        0 !== t && (g += "\r\n"), g += e.join(",")
                    }));
                    Ko(n, `data:${{
                        csv: "text/csv",
                        xls: "application/vnd.ms-excel"
                    }[s]};charset=utf-8,\ufeff${encodeURIComponent(g)}`), !t && rt(e, 300)
                }

                async downFilePath(e, t, o, n, r, s, a, i) {
                    try {
                        !t && nt(e, o);
                        const c = await r(n, s, a, i);
                        Ko(n, c)
                    } catch (e) {
                        Pt(e)
                    } finally {
                        !t && rt(e, 300)
                    }
                }

                async downBlob(e, t, o, n, r, s, a, i, c, l) {
                    try {
                        !t && nt(e, o);
                        const d = await r(n, s, a, i, c, l), p = Blob.prototype;
                        let u;
                        if (Object.getPrototypeOf(d) === p && (u = d), d.data && Object.getPrototypeOf(d.data) === p && (u = d.data), !u || Object.getPrototypeOf(u) !== p) return void Pt("response type not equal to Blob");
                        Ko(n, URL.createObjectURL(u))
                    } catch (e) {
                        Pt(e)
                    } finally {
                        !t && rt(e, 300)
                    }
                }
            }, Bo = "rowspan", Io = "merge-td", Fo = "last-rowspan";

            function Go(e) {
                const t = it(e).clone(!0), o = open();
                t.find("[cell-hidden]").remove(), t.find("[merge-td]").remove(), t.find("[gm-create]").remove();
                const n = t.find("[grid-manager-mock-thead] th"), r = t.find(`[${ne}] th`);
                r.removeAttr("style"), l(r, ((e, t) => {
                    e.innerHTML = n.eq(t).find(".th-text").html()
                })), t.removeAttr("style"), t.find("[grid-manager-mock-thead]").remove(), o.document.write("<style>\ntable{width: 100%;border-collapse: collapse;border-spacing: 0;}\nth,td{height: 18px;padding:11px;border: 1px solid #999;font-size: 12px;color: #666;}\nth{color: #333}\na{color: #666; text-decoration:none;}\ntr[empty-template] td{text-align: center}\n</style>" + t.get(0).outerHTML), o.document.close(), o.print(), o.close()
            }

            const Wo = e => `[grid-master="${e}"]`, Jo = e => {
                const {closeMenu: t} = No[e];
                X(t.target).off(t.events), X(Wo(e)).remove()
            }, Vo = e => {
                const t = $o(e), {
                    supportAjaxPage: o,
                    supportExport: n,
                    supportConfig: r,
                    supportPrint: s,
                    menuHandler: a,
                    useCellFocus: i
                } = t;
                let c = [];
                o && c.push((e => ({
                    content: `${Ro(e, "previous-page")}<i class="gm-icon gm-icon-up"></i>`,
                    onClick: e => {
                        const t = $o(e), {currentPageKey: o, pageData: n} = t, r = n[o];
                        pr(t, r > 1 ? r - 1 : r)
                    },
                    run: (e, t) => {
                        const o = $o(e), {pageData: n, currentPageKey: r} = o, s = n[r], a = n.tPage;
                        1 === s || 0 === a ? t.addClass(_e) : t.removeClass(_e)
                    }
                }))(t), (e => ({
                    content: `${Ro(e, "next-page")}<i class="gm-icon gm-icon-down"></i>`,
                    line: !0,
                    onClick: e => {
                        const t = $o(e), {currentPageKey: o, pageData: n} = t, r = n[o];
                        pr(t, r < n.tPage ? r + 1 : r)
                    },
                    run: (e, t) => {
                        const o = $o(e), {pageData: n, currentPageKey: r} = o, s = n[r], a = n.tPage;
                        s === a || 0 === a ? t.addClass(_e) : t.removeClass(_e)
                    }
                }))(t)), n && c.push((e => ({
                    content: `${Ro(e, "export")}<i class="gm-icon gm-icon-export"></i>`,
                    onClick: e => {
                        qo.exportGrid(e, void 0, !1)
                    }
                }))(t), (e => ({
                    content: `${Ro(e, "export-checked")}<i class="gm-icon gm-icon-export-checked"></i>`,
                    onClick: e => {
                        qo.exportGrid(e, void 0, !0)
                    },
                    run: (e, t) => {
                        0 === X('tr[checked="true"]', ut(e)).length ? t.addClass(_e) : t.removeClass(_e)
                    }
                }))(t)), c.push((e => ({
                    content: `${Ro(e, "refresh")}<i class="gm-icon gm-icon-refresh"></i>`,
                    onClick: e => {
                        const t = $o(e), {currentPageKey: o, pageData: n} = t;
                        pr(t, n[o])
                    }
                }))(t)), i && c.push((e => ({
                    content: `${Ro(e, "copy")}<i class="gm-icon gm-icon-copy"></i><input gm-fake-copy="${e._}"/>`,
                    onClick: e => {
                        const t = document.querySelector(`[gm-fake-copy=${e}]`);
                        t.value = ut(e).find("td[gm-focus-td]").text(), t.select(), document.execCommand("Copy")
                    }
                }))(t)), s && c.push((e => ({
                    content: `${Ro(e, "print")}<i class="gm-icon gm-icon-print"></i>`,
                    onClick: e => {
                        Go(e)
                    }
                }))(t)), r && c.push((e => ({
                    content: `${Ro(e, "config")}<i class="gm-icon gm-icon-config"></i>`,
                    onClick: e => {
                        Rr.toggle(e)
                    }
                }))(t)), c = a(c);
                let l = "";
                const d = c.length;
                c.forEach(((e, t) => {
                    l += `<span menu-action>${e.content}</span>`, e.line && t !== d - 1 && (l += '<span class="menu-line"></span>')
                })), X("[grid-master]").remove(), X("body").append(`<div class="gm-menu" grid-master="${e}">${l}</div>`);
                const p = X(Wo(e)), u = p.find("[menu-action]");
                return c.forEach(((t, o) => {
                    const {run: n, onClick: r} = t, s = u.eq(o);
                    n && n(e, s), s.bind("click", (function (t) {
                        if (((e, t) => {
                            if (X(e).hasClass(_e)) return t.stopPropagation(), t.preventDefault(), !0
                        })(this, t)) return !1;
                        r(e), Jo(e)
                    }))
                })), p
            }, Uo = (e, t) => {
                l(t, ((t, o) => {
                    let n = o.merge;
                    if (!n || "text" !== n && "html" !== n) return !0;
                    const r = xt(ht(e, t), ut(e).find("tr:not([gm-summary-row])"));
                    let s = r.length, a = s, i = 1;
                    for (; a;) {
                        const e = r.eq(a - 1);
                        if (e.removeAttr(Bo), e.removeAttr(Io), e.removeAttr(Fo), a--, 0 === a) return void (i > 1 && (e.attr(Bo, i), i = 1));
                        r.eq(a - 1)[n]() === e[n]() ? (e.attr(Io, ""), i++) : i > 1 && (e.attr(Bo, i), a + i === s && e.attr(Fo, ""), i = 1)
                    }
                }))
            }, Xo = (e, t) => {
                t = t || it(e), X("[rowspan]", t).removeAttr(Bo), X("[merge-td]", t).removeAttr(Io)
            };
            var Yo = o(285);
            const Qo = {};
            var Zo, en;
            const tn = new (Zo = Ho(o.n(Yo)()), zo((en = class {
                init(e) {
                    const t = this, o = X("body"), n = at(e);
                    Qo[e] = ((e, t) => {
                        const o = `[grid-manager-mock-thead="${e}"] .gm-filter-area`;
                        return {
                            toggle: tt(Je, t, `${o} .fa-icon`),
                            close: tt("mousedown.closeFitler", "body"),
                            submit: tt(Ue, t, `${o} .filter-submit`),
                            reset: tt(Ue, t, `${o} .filter-reset`),
                            checkboxAction: tt(We, t, `${o} .gm-checkbox-input`),
                            radioAction: tt(We, t, `${o} .gm-radio-input`)
                        }
                    })(e, n);
                    const {toggle: r, close: s, submit: a, reset: i, checkboxAction: c, radioAction: d} = Qo[e];
                    X(r.target).on(r.events, r.selector, (function (r) {
                        r.stopPropagation(), r.preventDefault();
                        const a = X(`${n} .fa-con`), i = X(this), c = i.closest(".gm-filter-area"),
                            d = i.closest("th[th-name]"), p = yt(d), u = c.find(".fa-con");
                        l(a, (e => {
                            u.get(0) !== e && (e.style.display = "none")
                        }));
                        const h = $o(e);
                        t.update(d, h.columnMap[p].filter);
                        "none" !== u.css("display") ? u.hide() : u.show();
                        const g = "direction-left", f = "direction-right";
                        c.offset().left + u.width() > ct(e).width() ? (u.addClass(f), u.removeClass(g)) : (u.addClass(g), u.removeClass(f)), X(s.target).on(s.events, (function (e) {
                            const t = X(e.target);
                            if (t.hasClass(Ge) || 1 === t.closest(".fa-con").length) return !1;
                            o.find(".fa-con").hide(), X(s.target).off(s.events)
                        }))
                    })), X(a.target).on(a.events, a.selector, (function () {
                        const o = X(this).closest(".fa-con"), n = X(".gm-radio-checkbox-input", o), r = o.closest("th"),
                            a = yt(r), i = [];
                        l(n, (e => {
                            e.checked && i.push(e.value)
                        }));
                        const c = $o(e), d = i.join(",");
                        c.columnMap[a].filter.selected = d, c.pageData[c.currentPageKey] = 1, $(c.query, {[a]: d}), To(c), t.update(r, c.columnMap[a].filter), Zn.refresh(e), o.hide(), X(s.target).off(s.events)
                    })), X(i.target).on(i.events, i.selector, (function () {
                        const o = X(this).closest(".fa-con"), n = X(this).closest("th[th-name]"), r = yt(n), a = $o(e);
                        delete a.query[r], a.columnMap[r].filter.selected = "", a.pageData[a.currentPageKey] = 1, To(a), t.update(n, a.columnMap[r].filter), Zn.refresh(e), o.hide(), X(s.target).off(s.events)
                    })), X(c.target).on(c.events, c.selector, (function () {
                        const e = X(this).closest(".filter-checkbox").find(".gm-checkbox");
                        Or(e, this.checked ? Oe : Se)
                    })), X(d.target).on(d.events, d.selector, (function () {
                        const e = X(this).closest(".filter-list").find(".filter-radio");
                        l(e, (e => {
                            Dr(X(e).find(".gm-radio"), this === e.querySelector(".gm-radio-input"))
                        }))
                    }))
                }

                createHtml(e) {
                    const {settings: t, columnFilter: o} = e, n = lt(t._).height();
                    let r = "";
                    return o.selected = o.selected || "", o.option.forEach((e => {
                        let t = o.selected.split(",");
                        t = t.map((e => e.trim()));
                        const n = {checked: -1 !== t.indexOf(e.value), label: e.text, value: e.value};
                        o.isMultiple ? r += `<li class="filter-checkbox">${Sr.getCheckboxTpl(n)}</li>` : r += `<li class="filter-radio">${Sr.getRadioTpl(n)}</li>`
                    })), {
                        icon: o.selected ? " filter-selected" : "",
                        style: `style="max-height: ${n - 100 + ze}"`,
                        ok: Ro(t, "ok"),
                        reset: Ro(t, "reset"),
                        list: r
                    }
                }

                update(e, t) {
                    const o = X(".fa-icon", e), n = X(".fa-con .gm-radio-checkbox-input", e);
                    l(n, (e => {
                        let o = X(e).closest(".gm-radio-checkbox");
                        t.isMultiple ? Or(o, t.selected.indexOf(e.value) >= 0 ? Oe : Se) : Dr(o, e.value === t.selected)
                    })), t.selected ? o.addClass(Fe) : o.removeClass(Fe)
                }

                destroy(e) {
                    St(Qo[e])
                }
            }).prototype, "createHtml", [Zo], Object.getOwnPropertyDescriptor(en.prototype, "createHtml"), en.prototype), en);
            var on = o(472);
            const nn = {};
            var rn, sn;
            const an = (e, t, o, n) => {
                if (!y(t) || b(t)) return _t("sortJson unavailable"), !1;
                const r = $o(e);
                r.isCombSorting || (r.sortData = {}), $(r.sortData, t), To(r), f(o) || (o = () => {
                }), u(n) && (n = !0);
                const s = $({}, r.query, r.sortData, r.pageData);
                r.sortingBefore(s), n ? Zn.refresh(e, (t => {
                    (e => {
                        const {sortData: t, sortUpText: o, sortDownText: n} = $o(e), r = "sorting-up",
                            s = "sorting-down", a = "sorting";
                        l(X(`${at(e)} .${Ee}`), (e => {
                            X(e).removeClass("sorting-up sorting-down"), X(e).closest("th").attr(a, "")
                        })), l(t, ((t, i) => {
                            const c = X(`${at(e)} th[th-name="${t}"]`), l = X(`.${Ee}`, c);
                            i === o && (l.addClass(r), l.removeClass(s), c.attr(a, o)), i === n && (l.addClass(s), l.removeClass(r), c.attr(a, n))
                        }))
                    })(e), o(t), r.sortingAfter(s)
                })) : (o(), r.sortingAfter(s))
            };
            const cn = new (rn = Ho(o.n(on)()), zo((sn = class {
                    init(e) {
                        nn[e] = ((e, t) => ({start: tt(We, t, `[grid-manager-mock-thead="${e}"] .${Ee}`)}))(e, at(e));
                        const {start: t} = nn[e];
                        X(t.target).on(t.events, t.selector, (function (t) {
                            const o = yt(X(this).closest("th")), {
                                sortData: n,
                                sortMode: r,
                                sortUpText: s,
                                sortDownText: a
                            } = $o(e), i = n[o];
                            let c = "";
                            if ("single" === r) {
                                const e = X(t.target);
                                e.hasClass("sa-up") && (c = i === s ? "" : s), e.hasClass("sa-down") && (c = i === a ? "" : a)
                            }
                            "overall" === r && (c = i === a ? s : a);
                            an(e, {[o]: c})
                        }))
                    }

                    createHtml() {
                        return {}
                    }

                    destroy(e) {
                        St(nn[e])
                    }
                }).prototype, "createHtml", [rn], Object.getOwnPropertyDescriptor(sn.prototype, "createHtml"), sn.prototype), sn),
                ln = {}, dn = "tree-element", pn = {}, un = e => {
                    delete pn[e]
                }, hn = e => e ? "gm-icon-sub" : "gm-icon-add";
            const gn = new class {
                add(e, t, o, n) {
                    ((e, t) => {
                        pn[e] || (pn[e] = []), pn[e].push(t)
                    })(e, {cacheKey: t, level: o, hasChildren: n})
                }

                init(e) {
                    const t = this;
                    var o;
                    ln[e] = (o = at(e), {toggle: tt(We, o, `[${dn}] i`)});
                    const {toggle: n} = ln[e];
                    ut(e).addClass("tree-tbody"), X(n.target).on(n.events, n.selector, (function () {
                        const o = X(this).closest("tr");
                        t.updateDOM(e, void 0, o)
                    }))
                }

                updateDOM(e, t, o) {
                    const n = ut(e), r = (e, t) => {
                        const o = X(`[${dn}]`, e), s = X("i", o), a = e.attr(ie);
                        u(t) && (t = !("true" === o.attr(dn))), s.removeClass(hn(!t)), s.addClass(hn(t)), o.attr(dn, t);
                        const i = n.find(`[parent-key="${a}"]`);
                        0 !== i.length && (i.attr(de, t), t || l(i, (e => {
                            r(X(e), !1)
                        })))
                    };
                    o ? r(o, t) : (e => {
                        const t = X(`[${dn}]`, n), o = X("i", t);
                        o.removeClass(hn(!e)), o.addClass(hn(e)), t.attr(dn, e);
                        n.find("[parent-key]").attr(de, e)
                    })(t), Vr.update(e)
                }

                insertDOM(e, t) {
                    const {openState: o, insertTo: n} = t, r = it(e), s = [];
                    l(X("tr[parent-key]", r), (e => {
                        s.push(e.getAttribute(le))
                    }));
                    const a = (e => pn[e])(e);
                    a && 0 !== a.length && (a.forEach((t => {
                        const {cacheKey: s, level: a, hasChildren: i} = t, c = X(`tr[gm-cache-key="${s}"]`, r);
                        let l;
                        g(n) && (l = xt(ht(e, n), c)), l || (l = X("td:not([gm-create])", c).eq(0));
                        const d = document.createElement("span");
                        d.setAttribute(dn, o), d.style.width = 14 * (a + 1) + ze, i && (d.innerHTML = `<i class="gm-icon ${hn(o)}"></i>`), l.prepend(d)
                    })), un(e))
                }

                destroy(e) {
                    St(ln[e]), un(e)
                }
            };
            var fn = o(923);
            const mn = {};
            var vn, yn;
            const bn = e => {
                const t = ct(e).find(".gm-tooltip");
                t.length && t.remove()
            }, xn = (e, t, o, n) => {
                if (!y(o)) return;
                const {text: r, position: s} = o;
                let a = "right" === s ? " right-model" : "";
                const i = ct(e), c = X(t), l = it(e), d = c.offset().top - l.offset().top - i.scrollTop() - 30;
                let p = "";
                "TD" === t.nodeName && (a = "", p = `left:${c.offset().left - l.offset().left - i.scrollLeft() + ze};`), bn(e);
                const u = `<span class="ra-area gm-tooltip${a}" style="height:30px;top:${d + ze};${p}">${r}</span>`;
                i.append(u), c.bind(Xe, (() => {
                    c.unbind(Xe), bn(e), f(n) && n()
                }))
            };
            const wn = new (vn = Ho(o.n(fn)()), zo((yn = class {
                    init(e) {
                        var t, o;
                        mn[e] = (t = e, o = `${at(e)} [grid-manager-mock-thead]`, {
                            start: tt("mouseover", o, `[grid-manager-mock-thead="${t}"] .${Pe}`),
                            tooltipLeave: tt(Xe, o, `[grid-manager-mock-thead="${t}"] .${Pe}`)
                        });
                        const {start: n} = mn[e], r = ct(e);
                        X(n.target).on(n.events, n.selector, (function () {
                            const e = X(this), t = e.find(".ra-area");
                            r.get(0).offsetWidth - (e.offset().left - r.offset().left) > t.get(0).offsetWidth + 20 ? t.removeClass("right-model") : t.addClass("right-model")
                        }))
                    }

                    createHtml(e) {
                        const {remind: t} = e;
                        let o = "", n = "";
                        n = y(t) ? t.text : t;
                        const r = t.style;
                        return y(r) && (o = 'style="', Object.keys(r).forEach((e => {
                            o = `${o}${e}:${r[e]};`
                        })), o += '"'), {text: n, style: o}
                    }

                    destroy(e) {
                        St(mn[e]), bn(e)
                    }
                }).prototype, "createHtml", [vn], Object.getOwnPropertyDescriptor(yn.prototype, "createHtml"), yn.prototype), yn),
                kn = "gm-drag-ongoing", Cn = (e, t, o, n) => {
                    l(o, (o => {
                        const r = e[o.key], {level: s} = r;
                        t[s] || (t[s] = []), w(r.children) ? (r.rowspan = 1, r.colspan = (e => {
                            let t = 0;
                            const o = e => {
                                e.children.forEach((e => {
                                    w(e.children) ? o(e) : t++
                                }))
                            };
                            return o(e), t
                        })(r), Cn(e, t, r.children, n - 1)) : (r.rowspan = n, r.colspan = 1), s > 0 && t[s].push(r)
                    }))
                };
            const $n = new class {
                addSign(e) {
                    ct(e).attr("gm-nested", "")
                }

                push(e, t) {
                    let o = 0;
                    const n = t[0];
                    l(e, ((e, t) => {
                        const {level: r, index: s} = t;
                        0 === r && (n[s] = t), o < r && (o = r)
                    })), Cn(e, t, n, o + 1)
                }
            };
            var Tn, Dn, On, jn, Sn = o(985), An = o.n(Sn), Mn = o(397), _n = o.n(Mn), Pn = o(125), En = o.n(Pn);
            const zn = new (Tn = Ho(An()), Dn = Ho(_n()), On = Ho(En()), zo((jn = class {
                createWrapTpl(e) {
                    const t = e.settings, {
                        _: o,
                        skinClassName: n,
                        isIconFollowText: r,
                        disableBorder: s,
                        disableLine: a,
                        supportConfig: i,
                        supportAjaxPage: c,
                        configInfo: l,
                        ajaxPageTemplate: d
                    } = t, p = ["table-wrap"];
                    return n && g(n) && n.trim() && p.push(n), r && p.push("gm-icon-follow-text"), s && p.push("disable-border"), a && p.push("disable-line"), {
                        wrapKey: `${Q}="${o}"`,
                        divKey: `${Z}="${o}"`,
                        classNames: p.join(" "),
                        configTpl: i ? Rr.createHtml({_: o, configInfo: l}) : "",
                        ajaxPageTpl: c ? ur.createHtml({settings: t, tpl: d}) : ""
                    }
                }

                createTheadTpl(e) {
                    const t = e.settings, {columnMap: o, _: n, __isNested: r} = t, s = [[]], a = s[0];
                    r ? $n.push(o, s) : l(o, ((e, t) => {
                        a[t.index] = t
                    }));
                    let i = "";
                    return l(s, (e => {
                        i += "<tr>", l(e, (e => {
                            i += this.createThTpl({settings: t, col: e})
                        })), i += "</tr>"
                    })), {key: `${ne}="${n}"`, thListTpl: i}
                }

                createThTpl(e) {
                    const {settings: t, col: o} = e, {
                        query: n,
                        supportDrag: r,
                        sortData: s,
                        sortUpText: a,
                        sortDownText: i
                    } = t;
                    let c = "";
                    o.remind && (c = "remind");
                    let l = "";
                    g(o.sorting) && (o.sorting === i ? (l = `sorting="${i}"`, s[o.key] = i) : o.sorting === a ? (l = `sorting="${a}"`, s[o.key] = a) : l = "sorting");
                    let d = "";
                    y(o.filter) && (d = "filter", u(o.filter.selected) ? o.filter.selected = n[o.key] : n[o.key] = o.filter.selected);
                    let p = "";
                    "left" !== o.fixed && "right" !== o.fixed || (p = `fixed="${o.fixed}"`);
                    const h = o.align ? `align="${o.align}"` : "", f = o.isShow ? "" : $e;
                    let m = "", v = o.key, b = o.text, x = "";
                    switch (o.key) {
                        case ve:
                            m = "gm-create gm-order";
                            break;
                        case be:
                            m = "gm-create gm-checkbox";
                            break;
                        case me:
                        case ye:
                            m = Te;
                            break;
                        default:
                            const e = ((e, t, o) => {
                                const {_: n, compileAngularjs: r, compileVue: s, compileReact: a} = e, i = Ao(n);
                                let c = "", l = "";
                                return o && ((r || s || a) && (l = jo, i.push({
                                    key: t,
                                    template: o,
                                    type: "text"
                                })), a || (c = o())), {text: c, compileAttr: l}
                            })(t, v, o.text);
                            b = e.text, x = e.compileAttr
                    }
                    let w = "th-text";
                    !r || o.isAutoCreate || o.disableCustomize || (w = `${w} gm-drag-action`);
                    const k = u(o.colspan) ? "" : `colspan="${o.colspan}"`,
                        C = u(o.rowspan) ? "" : `rowspan="${o.rowspan}"`;
                    let $ = "auto";
                    return o.width && ($ = o.width + ze), {
                        thAttr: `th-name="${v}" ${k} ${C} style="width:${$}" ${f} ${h} ${l} ${d} ${p} ${c} ${m}`,
                        thTextClassName: w,
                        thText: b,
                        compileAttr: x
                    }
                }
            }).prototype, "createWrapTpl", [Tn], Object.getOwnPropertyDescriptor(jn.prototype, "createWrapTpl"), jn.prototype), zo(jn.prototype, "createTheadTpl", [Dn], Object.getOwnPropertyDescriptor(jn.prototype, "createTheadTpl"), jn.prototype), zo(jn.prototype, "createThTpl", [On], Object.getOwnPropertyDescriptor(jn.prototype, "createThTpl"), jn.prototype), jn);
            var Hn = o(763);
            const Nn = {}, Ln = "gm-move-row-ongoing", Rn = "disable-move";
            var Kn, qn;
            const Bn = new (Kn = Ho(o.n(Hn)()), zo((qn = class {
                    init(e) {
                        const t = this, {
                            supportAutoOrder: o,
                            supportCheckbox: n,
                            checkboxConfig: r,
                            moveRowConfig: s,
                            animateTime: a,
                            columnMap: i
                        } = $o(e), {key: c, useSingleMode: d, handler: p} = s, u = X("body"), h = it(e).get(0);
                        Nn[e] = (e => {
                            const t = "gmLineDrag";
                            return {
                                start: tt(`mousedown.${t}`, e, "tr:not([empty-template])"),
                                doing: tt(`mousemove.${t}`, "body"),
                                abort: tt(`mouseup.${t}`, "body")
                            }
                        })(`${at(e)} tbody`);
                        const {start: m, doing: v, abort: y} = Nn[e], b = ut(e), x = ct(e), w = x.get(0);
                        let k;
                        x.attr("move-row", d ? "single" : "all"), X(m.target).on(m.events, m.selector, (function (s) {
                            if (1 !== s.buttons) return;
                            if ("TD" !== s.target.nodeName) return;
                            if (d && !g(s.target.getAttribute("gm-moverow"))) return;
                            if (!d && g(s.target.getAttribute(Rn))) return;
                            const m = this, C = X(m);
                            let $ = X("tr", b);
                            u.addClass(xe);
                            const T = go(e);
                            k = [...T];
                            let D = X(".dreamland-row-div", x);
                            if (D.length) return;
                            x.append('<div class="dreamland-row-div"></div>'), D = X(".dreamland-row-div", x), Xo(e);
                            const O = "true" === ct(e).attr("gm-overflow-x");
                            D.get(0).innerHTML = t.createHtml({
                                table: h,
                                tr: m,
                                $thList: vt(e),
                                overFlow: O
                            }), C.addClass(Ln), Uo(e, i), Xo(e, D);
                            let j = 0;
                            const S = X(v.target), A = v.events;
                            S.off(A), S.on(A, (function (t) {
                                let o, n;
                                j = C.index(), j > 0 && (o = $.eq(j - 1)), j < $.length - 1 && (n = $.eq(j + 1)), D.show().css({
                                    width: m.offsetWidth,
                                    top: t.clientY - x.offset().top + pageYOffset,
                                    left: 0 - w.scrollLeft
                                }), $ = ((e, t, o, n, r, s, a, i) => {
                                    const c = a.attr(ie);
                                    let l;
                                    if (r && n.offset().top < r.offset().top && (r.before(a), l = r), s && n.offset().top + n.height() / 2 > s.offset().top && (s.after(a), l = s), l) {
                                        const e = l.attr(ie);
                                        l.attr(ie, c), a.attr(ie, e);
                                        const o = i[c], n = i[e];
                                        if (o[ie] = e, n[ie] = c, g(t)) {
                                            const e = o[t], r = n[t];
                                            o[t] = r, n[t] = e
                                        }
                                        i[c] = n, i[e] = o
                                    }
                                    return X("tr", o)
                                })(0, c, b, D, o, n, C, T), Uo(e, i)
                            }));
                            const M = X(y.target), _ = y.events;
                            M.off(_), M.on(_, (function () {
                                if (S.off(A), M.off(_), D.animate({top: `${m.offsetTop - w.scrollTop + ze}`}, a, (() => {
                                    C.removeClass(Ln), D.remove()
                                })), fo(e, T), o) {
                                    const e = X("[gm-order]", $), t = [];
                                    l(e, (e => {
                                        t.push(parseInt(e.innerText, 10))
                                    })), t.sort(((e, t) => e - t)), l(e, ((e, o) => {
                                        e.innerText = t[o]
                                    }))
                                }
                                Uo(e, i);
                                const t = T.filter(((e, t) => !Et(e, k[t])));
                                f(p) && p(t, T), Yn.updateTrDOM($o(e), t), n && ((e, t, o, n, r) => {
                                    if (!g(o)) return;
                                    const s = mo(e);
                                    s.length && (s.forEach((e => {
                                        r.forEach((r => {
                                            Et(ot(n, e, [o]), ot(n, r, [o]), t) && (e[o] = r[o])
                                        }))
                                    })), vo(e, s, !0))
                                })(e, r.key, c, i, t), u.removeClass(xe)
                            }))
                        }))
                    }

                    addSign(e) {
                        return e.disableMoveRow ? Rn : ""
                    }

                    createHtml(e) {
                        const {table: t, tr: o, overFlow: n, $thList: r} = e, s = o.cloneNode(!0);
                        s.style.height = d(o, "height");
                        const a = s.querySelectorAll("td");
                        return l(r, ((e, t) => {
                            a[t].style.width = d(e, "width"), a[t].style.left = d(e, "left"), a[t].style.right = d(e, "right"), n && (a[t].style.boxShadow = d(e, "box-shadow"))
                        })), {class: t.className, tbody: s.outerHTML}
                    }

                    getColumn(e) {
                        const {fixed: t} = e;
                        return {
                            key: ye,
                            text: "",
                            isAutoCreate: !0,
                            isShow: !0,
                            disableCustomize: !0,
                            width: 30,
                            fixed: t,
                            template: () => '<td gm-create gm-moverow><i class="gm-icon gm-icon-move"></i></td>'
                        }
                    }

                    destroy(e) {
                        St(Nn[e])
                    }
                }).prototype, "createHtml", [Kn], Object.getOwnPropertyDescriptor(qn.prototype, "createHtml"), qn.prototype), qn),
                In = {}, Fn = "full-column-fold", Gn = (e, t, o, n, r, s, a, i) => {
                    let {text: c, compileAttr: l} = ((e, t, o, n, r) => {
                        const {_: s, compileAngularjs: a, compileVue: i, compileReact: c} = e, l = Ao(s);
                        let d = "", p = "";
                        return c && (p = jo, l.push({
                            template: n,
                            row: t,
                            index: o,
                            type: "full-" + r,
                            fnArg: [t, o]
                        })), (i || a) && (p = jo, l.push({row: t, index: o})), c || (d = n(t, o)), {text: d, compileAttr: p}
                    })(e, s, a, o, i);
                    c = k(c) ? c.outerHTML : c;
                    let d = [];
                    return n && (d = [`full-column-state="${r}"`, `full-column-key=${a}`]), {
                        className: [],
                        attribute: [`full-column="${i}"`].concat(d),
                        tdList: [`<td colspan="${t}"><div class="full-column-div" ${l}>${c}</div></td>`]
                    }
                }, Wn = (e, t, o, n, r) => {
                    const {columnMap: s, fullColumn: a} = e, {
                        topTemplate: i,
                        bottomTemplate: c,
                        useFold: l,
                        interval: d,
                        openState: p = !1
                    } = a, u = Object.keys(s).length;
                    if ("top" === r && f(i)) {
                        const s = Gn(e, u, i, l, p, t, o, r);
                        s && n.push(s)
                    }
                    if ("bottom" === r && f(c)) {
                        const s = Gn(e, u, c, l, p, t, o, r);
                        s && n.push(s)
                    }
                    "bottom" === r && (f(i) || f(c)) && n.push(((e, t = 0) => (m(t) && (t += ze), {
                        className: [],
                        attribute: [`full-column-interval="${t}"`],
                        tdList: [`<td colspan="${e}"><div style="height: ${t}"></div></td>`]
                    }))(u, d))
                }, Jn = e => e ? "gm-icon-sub" : "gm-icon-add";
            const Vn = new class {
                init(e) {
                    const {useFold: t} = $o(e).fullColumn;
                    if (ct(e).attr("gm-full-column", ""), t) {
                        In[e] = (o = `${at(e)} tbody`, {fold: tt(We, o, `i[${Fn}]`)});
                        const t = In[e].fold;
                        X(t.target).on(t.events, t.selector, (function () {
                            const t = X(this), o = t.closest("tr"), n = o.attr(ie),
                                r = X(`${at(e)} tbody [full-column-key="${n}"]`), s = !("true" === t.attr(Fn));
                            t.attr(Fn, s), r.attr("full-column-state", s), o.attr("full-column-state", s), t.removeClass(Jn(!s)), t.addClass(Jn(s))
                        }))
                    }
                    var o
                }

                addTop(e, t, o, n) {
                    Wn(e, t, o, n, "top")
                }

                addBottom(e, t, o, n) {
                    Wn(e, t, o, n, "bottom")
                }

                getColumn(e) {
                    const {openState: t = !1, fixed: o} = e.fullColumn;
                    return {
                        key: me,
                        text: "",
                        isAutoCreate: !0,
                        isShow: !0,
                        disableCustomize: !0,
                        width: "40px",
                        fixed: o,
                        template: () => `<td gm-create gm-fold><i class="gm-icon ${Jn(t)}" ${Fn}="${t}"></i></td>`
                    }
                }

                destroy(e) {
                    St(In[e])
                }
            }, Un = "gm-summary", Xn = {};
            const Yn = new class {
                init(e, t) {
                    const {_: o, width: n, height: r, supportAjaxPage: s, useWordBreak: a} = t;
                    e.wrap(zn.createWrapTpl({settings: t}), ".table-div"), e.append(zn.createTheadTpl({settings: t})), jt(o, n, r, s);
                    const i = document.createElement("tbody");
                    i.setAttribute(se, o), a && i.setAttribute("word-break", ""), e.append(i), this.bindEvent(o)
                }

                redrawThead(e) {
                    const {_: t, columnMap: o, sortUpText: n, sortDownText: r, supportAdjust: s} = e, a = ft(t);
                    l(a, (t => {
                        const a = X(t), i = X(".th-wrap", a), c = a.attr(ae), l = o[c], d = l.isAutoCreate;
                        if (!d && l.remind && i.append(X(wn.createHtml({remind: l.remind}))), !d && g(l.sorting)) {
                            const e = X(cn.createHtml());
                            switch (l.sorting) {
                                case n:
                                    e.addClass("sorting-up");
                                    break;
                                case r:
                                    e.addClass("sorting-down")
                            }
                            i.append(e)
                        }
                        if (!d && l.filter && y(l.filter)) {
                            const t = X(tn.createHtml({settings: e, columnFilter: l.filter}));
                            i.append(t)
                        }
                        !s || d || l.disableCustomize || i.append(X(Yr.html))
                    }))
                }

                renderTableBody(e, t) {
                    const {
                        _: o,
                        columnMap: n,
                        supportTreeData: r,
                        supportCheckbox: s,
                        supportMoveRow: a,
                        treeConfig: i,
                        __isNested: c,
                        __isFullColumn: d
                    } = e, {treeKey: p, openState: g} = i;
                    t = ((e, t) => {
                        const {
                            columnMap: o,
                            rowRenderHandler: n,
                            pageData: r,
                            supportAutoOrder: s,
                            supportCheckbox: a,
                            checkboxConfig: i,
                            pageSizeKey: c,
                            currentPageKey: l,
                            supportTreeData: d,
                            treeConfig: p
                        } = $o(e), h = i.key, g = (e, t, o, n) => {
                            let r = o.toString();
                            if (u(n) || (r = `${n}-${o}`), d) {
                                const o = e[p.treeKey];
                                o && o.length && o.forEach(((e, o) => {
                                    g(e, t + 1, o, r)
                                }))
                            }
                            e[ie] = r, e[ce] = t
                        }, f = t.map(((t, i) => {
                            if (s) {
                                let e = 1;
                                r && r[c] && r[l] && (e = r[c] * (r[l] - 1) + 1), t.gm_order = e + i
                            }
                            return a && (t.gm_checkbox = mo(e).some((e => Et(ot(o, e), ot(o, t), h))), t.gm_checkbox_disabled = !1), g(t, 0, i), n(t, i)
                        }));
                        return fo(e, f), vo(e, f), f
                    })(o, t);
                    const f = ut(o), m = f.get(0);
                    m.innerHTML = "";
                    let v = [];
                    const y = [], x = [];
                    l(n, ((e, t) => {
                        t.pk || (y[t.index] = t)
                    }));
                    const C = e => {
                        l(e, (e => {
                            w(e.children) ? C(e.children) : x.push(e)
                        }))
                    };
                    C(y);
                    try {
                        const n = (t, i, c) => {
                            const h = u(c);
                            l(t, ((t, u) => {
                                const f = [], m = [], y = t[ie];
                                t[ue] && f.push(t[ue]), h || (m.push(`parent-key="${c}"`), m.push(`children-state="${g}"`)), h && r && u % 2 == 0 && m.push("odd"), m.push(`gm-cache-key="${y}"`);
                                const b = {className: f, attribute: m, tdList: []};
                                if (h && d && Vn.addTop(e, t, u, v), ((t, o, n, r) => {
                                    const i = t.tdList;
                                    l(x, (t => {
                                        const c = t.template;
                                        if (t.isAutoCreate) return void i.push(c(o[t.key], o, n, r));
                                        let {text: l, compileAttr: d} = Po(e, c, o, n, t.key);
                                        const p = t.align ? `align=${t.align}` : "", u = a ? Bn.addSign(t) : "",
                                            h = s ? Sr.addSign(t) : "";
                                        l = k(l) ? l.outerHTML : l, i.push(`<td ${d} ${p} ${u} ${h}>${l}</td>`)
                                    }))
                                })(b, t, u, h), v.push(b), h && d && Vn.addBottom(e, t, u, v), r) {
                                    const e = t[p], r = e && e.length;
                                    gn.add(o, y, i, r), r && n(e, i + 1, y)
                                }
                            }))
                        };
                        n(t, 0), ((e, t, o, n) => {
                            const {_: r, summaryHandler: s, browser: a} = e, i = s(o);
                            if (b(i)) return void ct(r).removeAttr(Un);
                            ct(r).attr(Un, "");
                            const c = [];
                            l(t, (t => {
                                const {key: o, align: n} = t;
                                let s = i[o];
                                (h(s) || u(s)) && (s = "");
                                const l = n ? `align="${n}"` : "";
                                let {text: d, compileAttr: p} = Po(e, (() => s), {}, void 0, o);
                                d = k(d) ? d.outerHTML : d;
                                let g = "";
                                "safari" === a && (g = `style="bottom: ${dt(r).height()}px"`), c.push(`<td ${p} ${l} disable-move ${g}>${d}</td>`)
                            })), n.push({className: [], attribute: ["gm-summary-row"], tdList: c})
                        })(e, x, t, v);
                        let i = "";
                        v.forEach((e => {
                            const {className: t, attribute: o, tdList: n} = e;
                            let r = "";
                            t.length && (r = `class="${t.join(" ")}"`);
                            const s = o.join(" "), a = n.join("");
                            i = `${i}<tr ${r} ${s}>${a}</tr>`
                        })), m.innerHTML = i
                    } catch (e) {
                        Pt("render tbody error"), console.error(e)
                    }
                    !c && this.initVisible(o, n), Eo(e).then((() => {
                        r && gn.insertDOM(o, i), Uo(o, n), Vr.update(o), f.height() >= ct(o).height() ? f.attr("filled", "") : f.removeAttr("filled"), e.__isNested || kt(o)
                    }))
                }

                updateTrDOM(e, t) {
                    const {_: o, columnMap: n, supportTreeData: r, treeConfig: s} = e, {treeKey: a} = s;
                    t.forEach((t => {
                        const r = t[ie], s = t[ce];
                        let i = parseInt(r.split("-").pop(), 10);
                        const c = ut(o).find(`[gm-cache-key="${r}"]`).get(0);
                        if (!c) return;
                        const d = t[a], p = d && d.length;
                        gn.add(o, r, s, p), l(n, ((n, r) => {
                            if (r.isAutoCreate) return;
                            let s = r.template;
                            const a = xt(ht(o, n), c).get(0), l = a.cloneNode(!0);
                            let {text: d, compileAttr: p} = Po(e, s, t, i, n);
                            d = k(d) ? d.outerHTML : d, p && l.setAttribute(p.split("=")[0], p.split("=")[1]), l.innerHTML = d, c.replaceChild(l, a)
                        }))
                    })), Eo(e).then((() => {
                        r && gn.insertDOM(o, s), Uo(o, n)
                    }))
                }

                initVisible(e, t) {
                    l(t, ((t, o) => {
                        wt(e, t, o.isShow)
                    }))
                }

                bindEvent(e) {
                    const {rowHover: t, rowClick: o, cellHover: n, cellClick: r, useCellFocus: s} = $o(e);
                    Xn[e] = (e => {
                        const t = "tr[gm-cache-key]", o = "tr[gm-cache-key] td";
                        return {
                            rowHover: tt(Ve, e, t),
                            rowClick: tt(We, e, t),
                            cellHover: tt(Ve, e, o),
                            cellClick: tt(We, e, o),
                            cellFocus: tt(Je, e, "td")
                        }
                    })(at(e));
                    const a = Xn[e], i = t => [ho(e, t), parseInt(t.getAttribute(ie), 10)];
                    t && (() => {
                        let o;
                        const n = a.rowHover;
                        X(n.target).on(n.events, n.selector, (function () {
                            o !== this && (o = this, xn(e, this, t(...i(this)), (() => {
                                o = null
                            })))
                        }))
                    })(), o && (() => {
                        const t = a.rowClick;
                        X(t.target).on(t.events, t.selector, (function () {
                            xn(e, this, o(...i(this)))
                        }))
                    })();
                    const c = t => {
                        const o = t.parentNode;
                        return [ho(e, o), parseInt(o.getAttribute(ie), 10), t.cellIndex]
                    };
                    n && (() => {
                        let t;
                        const o = a.cellHover;
                        X(o.target).on(o.events, o.selector, (function () {
                            t !== this && (t = this, xn(e, this, n(...c(t)), (() => {
                                t = null
                            })))
                        }))
                    })(), r && (() => {
                        const t = a.cellClick;
                        X(t.target).on(t.events, t.selector, (function () {
                            xn(e, this, r(...c(this)))
                        }))
                    })(), s && (() => {
                        const t = a.cellFocus;
                        X(t.target).on(t.events, t.selector, (function () {
                            ut(e).find("[gm-focus-td]").removeAttr(pe), this.setAttribute(pe, "")
                        }))
                    })()
                }

                destroy(e) {
                    St(Xn[e]);
                    try {
                        const t = it(e), o = lt(e);
                        if (!t.length || !o.length) return;
                        const n = t.get(0);
                        De.forEach((e => {
                            let o = n["__" + e];
                            o ? t.attr(e, o) : t.removeAttr(e), delete n["__" + e]
                        })), t.html(""), o.after(t), o.remove()
                    } catch (e) {
                    }
                }
            }, Qn = e => {
                const {
                    query: t,
                    supportAjaxPage: o,
                    pageData: n,
                    sortData: r,
                    mergeSort: s,
                    sortKey: a,
                    currentPageKey: i,
                    pageSizeKey: c,
                    requestHandler: d
                } = e, p = $(!0, {}, t);
                return o && (p[i] = n[i], p[c] = n[c]), b(r) || (s ? (p[a] = "", l(r, ((e, t) => {
                    p[a] = `${p[a]}${p[a] ? "," : ""}${e}:${t}`
                }))) : l(r, ((e, t) => {
                    p[`${a}${e}`] = t
                }))), d(zt(p))
            };
            const Zn = new class {
                refresh(e, t) {
                    const o = $o(e), {
                        disableAutoLoading: n,
                        loadingTemplate: r,
                        ajaxBeforeSend: s,
                        ajaxSuccess: a,
                        ajaxError: i,
                        ajaxComplete: c
                    } = o;
                    ur.updateRefreshIconState(e, !0), !n && nt(e, r);
                    let d = (e => {
                        const t = Qn(e), {
                            supportAjaxPage: o,
                            pageData: n,
                            sortData: r,
                            sortKey: s,
                            ajaxType: a,
                            ajaxHeaders: i,
                            ajaxXhrFields: c,
                            ajaxData: d
                        } = e;
                        o && l(n, ((e, o) => {
                            n[e] = t[e] || o
                        })), l(r, ((e, o) => {
                            r[e] = t[`${s}${e}`] || o
                        })), To(e);
                        const p = f(d) ? d(e, t) : d;
                        return g(p) ? new Promise(((e, o) => {
                            A({url: p, type: a, data: t, headers: i, xhrFields: c, cache: !0, success: e, error: o})
                        })) : p instanceof Promise ? p : new Promise((e => {
                            e(p)
                        }))
                    })(o);
                    s(d), d.then((o => {
                        try {
                            const r = $o(e);
                            setTimeout((() => {
                                this.driveDomForSuccessAfter(r, o, t), a(o), c(o), !n && rt(e), ur.updateRefreshIconState(e, !1)
                            }))
                        } catch (e) {
                            console.error(e)
                        }
                    })).catch((t => {
                        i(t), c(t), !n && rt(e), ur.updateRefreshIconState(e, !1)
                    }))
                }

                driveDomForSuccessAfter(e, t, o) {
                    const {
                        _: n,
                        rendered: r,
                        responseHandler: s,
                        supportCheckbox: a,
                        supportAjaxPage: i,
                        supportMenu: c,
                        checkboxConfig: l,
                        dataKey: d,
                        totalsKey: p,
                        useNoTotalsMode: u,
                        asyncTotals: h
                    } = e;
                    if (!r) return;
                    if (!t) return void Pt("response undefined！please check ajaxData");
                    let m = g(t) ? JSON.parse(t) : t;
                    m = s(zt(m));
                    let v = m[d], y = m[p];
                    if (v && x(v)) if (!i || u || h || !isNaN(parseInt(y, 10))) {
                        if (0 === v.length) this.insertEmptyTemplate(e), m[p] = 0, fo(n, []); else {
                            const t = ct(n);
                            t.removeClass(we), t.scrollTop(0), Yn.renderTableBody(e, v)
                        }
                        a && jr(n, v, l.useRadio, l.max), i && ur.resetPageData(e, m[p], v.length), c && Jo(n), f(o) && o(m)
                    } else Pt(`response.${p} undefined，please check totalsKey`); else Pt(`response.${d} is not Array，please check dataKey`)
                }

                insertEmptyTemplate(e, t) {
                    const {_: o, emptyTemplate: n} = e;
                    if (t && 0 !== go(o).length) return;
                    const r = ct(o);
                    r.addClass(we), ut(o).html(`<tr empty-template="${o}" style="height: ${r.height() - 1 + ze}"><td colspan="${mt(o).length}"></td></tr>`);
                    const s = bt(o).get(0).querySelector("td");
                    s.innerHTML = ((e, t, o) => {
                        const {_: n, compileAngularjs: r, compileVue: s, compileReact: a} = e, i = Ao(n);
                        return a ? (i.push({
                            el: t,
                            template: o,
                            type: "empty",
                            fnArg: [e]
                        }), "") : (s && i.push({el: t}), r && i.push({el: t}), o(e))
                    })(e, s, n), Eo(e)
                }

                async createDOM(e, t) {
                    const {_: o} = t;
                    Mo(o), Yn.init(e, t), To(t), await this.waitContainerAvailable(o), Yn.redrawThead(t), Br.init(o), await Eo(t)
                }

                waitContainerAvailable(e) {
                    const t = document.querySelector(`[${Q}="${e}"]`);

                    function o() {
                        return "100%" !== d(t, "width")
                    }

                    if (!o()) return new Promise((t => {
                        po[e] = setInterval((() => {
                            o() && (clearInterval(po[e]), po[e] = null, t())
                        }), 50)
                    }))
                }
            };
            var er = o(986);
            const tr = {};
            var or, nr;
            const rr = new (or = Ho(o.n(er)()), zo((nr = class {
                init({_: e, defaultValue: t = "", onChange: o}) {
                    var n;
                    tr[e] = {
                        open: tt(We, n = `[${te}="${e}"]`, ".gm-dropdown .gm-dropdown-text"),
                        close: tt(We, "body"),
                        selected: tt(We, n, ".gm-dropdown .gm-dropdown-list >li")
                    };
                    const {open: r, close: s, selected: a} = tr[e], i = lt(e).find(".gm-dropdown"),
                        c = i.find(".gm-dropdown-text"), l = i.find(".gm-dropdown-list");
                    c.text(t), X(r.target).on(r.events, r.selector, (function (e) {
                        e.stopPropagation();
                        const t = X(s.target);
                        if ("block" === l.css("display")) return l.hide(), void t.unbind(s.events);
                        l.show();
                        const o = s.events;
                        t.unbind(o), t.bind(o, (function () {
                            t.unbind(o), l.hide()
                        }))
                    })), X(a.target).on(a.events, a.selector, (function () {
                        const e = parseInt(c.text(), 10), t = this.value;
                        e !== t && (c.text(t), o(t, e))
                    }))
                }

                createHtml(e) {
                    const {sizeData: t} = e;
                    let o = "";
                    return t.forEach((e => {
                        o += `<li value="${e}">${e}</li>`
                    })), {li: o}
                }

                destroy(e) {
                    St(tr[e])
                }
            }).prototype, "createHtml", [or], Object.getOwnPropertyDescriptor(nr.prototype, "createHtml"), nr.prototype), nr);
            var sr = o(956);
            const ar = e => `[${te}="${e}"]`, ir = {};
            var cr, lr;
            const dr = (e, t, o) => {
                const {useNoTotalsMode: n, currentPageKey: r} = t;
                n && e.attr("no-totals-mode", "true");
                X("[pagination-number]", e).html(((e, t) => {
                    let o = Number(t[e] || 0), n = Number(t.tPage || 0), r = "", s = "", a = 1, i = n;
                    if (o > 4 && (r += '<li to-page="1">1</li><li class="disabled">...</li>', a = o - 2), n - o > 4 && (i = o + 2, s += `<li class="disabled">...</li><li to-page="${n}">${n}</li>`), t.tSize) for (; a <= i; a++) r += a !== o ? `<li to-page="${a}">${a}</li>` : `<li class="active">${o}</li>`;
                    return r += s, r
                })(r, o));
                const s = o[r], a = X("[pagination-before] .first-page", e),
                    i = X("[pagination-before] .previous-page", e), c = X("[pagination-after] .next-page", e),
                    l = X("[pagination-after] .last-page", e), d = Boolean(a.length), p = Boolean(i.length),
                    u = Boolean(c.length), h = Boolean(l.length);
                1 === s ? (d && a.addClass(_e), p && i.addClass(_e)) : (d && a.removeClass(_e), p && i.removeClass(_e)), s >= o.tPage ? (u && c.addClass(_e), h && l.addClass(_e)) : (u && c.removeClass(_e), h && l.removeClass(_e))
            }, pr = (e, t) => {
                (!t || t < 1) && (t = 1);
                const {
                    _: o,
                    useNoTotalsMode: n,
                    currentPageKey: r,
                    pageData: s,
                    pageSize: a,
                    pageSizeKey: i,
                    sortData: c,
                    query: l,
                    pagingBefore: d,
                    pagingAfter: p
                } = e, {tPage: u} = s;
                !n && t > u && (t = u), s[r] = t, s[i] = s[i] || a, To(e);
                const h = $({}, l, c, s);
                d(h), Zn.refresh(o, (() => {
                    p(h)
                }))
            };
            const ur = new (cr = Ho(o.n(sr)()), zo((lr = class {
                init(e) {
                    const t = $o(e), {
                        disableCache: o,
                        pageSizeKey: n,
                        pageSize: r,
                        currentPageKey: s,
                        useNoTotalsMode: a
                    } = t;
                    ir[e] = (e => {
                        const t = `[${te}="${e}"]`;
                        return {
                            input: tt("keyup", t, ".gp-input"),
                            first: tt(We, t, "[pagination-before] .first-page"),
                            previous: tt(We, t, "[pagination-before] .previous-page"),
                            next: tt(We, t, "[pagination-after] .next-page"),
                            last: tt(We, t, "[pagination-after] .last-page"),
                            num: tt(We, t, "[pagination-number] li"),
                            refresh: tt(We, t, ".refresh-action")
                        }
                    })(e);
                    let i = r || 10;
                    if (!o) {
                        const t = bo(e)[n];
                        t && (i = t)
                    }
                    $(t, {pageData: {[n]: i, [s]: 1}}), a && (t.asyncTotals = null), To(t);
                    const c = {
                        _: e, defaultValue: t.pageData[n], onChange: t => {
                            const o = $o(e);
                            o.pageData = {[s]: 1, [n]: t}, xo(o), To(o);
                            const r = $({}, o.query, o.sortData, o.pageData);
                            o.pagingBefore(r), Zn.refresh(e, (() => {
                                o.pagingAfter(r)
                            }))
                        }
                    };
                    rr.init(c), this.initEvent(e)
                }

                initEvent(e) {
                    const {first: t, previous: o, next: n, last: r, num: s, refresh: a, input: i} = ir[e];
                    X(t.target).on(t.events, t.selector, (function () {
                        pr($o(e), 1)
                    })), X(o.target).on(o.events, o.selector, (function () {
                        const t = $o(e), o = t.pageData[t.currentPageKey] - 1;
                        pr(t, o < 1 ? 1 : o)
                    })), X(n.target).on(n.events, n.selector, (function () {
                        const t = $o(e), o = t.pageData[t.currentPageKey], n = t.pageData.tPage, r = o + 1;
                        pr(t, r > n ? n : r)
                    })), X(r.target).on(r.events, r.selector, (function () {
                        const t = $o(e);
                        pr(t, t.pageData.tPage)
                    })), X(s.target).on(s.events, s.selector, (function () {
                        const t = $o(e), o = X(this), n = o.attr("to-page");
                        if (!n || !Number(n) || o.hasClass(_e)) return !1;
                        pr(t, parseInt(n, 10))
                    })), X(a.target).on(a.events, a.selector, (function () {
                        const t = $o(e);
                        pr(t, t.pageData[t.currentPageKey])
                    })), X(i.target).on(i.events, i.selector, (function (t) {
                        13 === t.which && pr($o(e), parseInt(this.value, 10))
                    }))
                }

                createHtml(e) {
                    const {settings: t} = e;
                    return {
                        gridManagerName: t._,
                        keyName: te,
                        gotoFirstText: Ro(t, "goto-first-text"),
                        gotoLastText: Ro(t, "goto-last-text"),
                        firstPageText: Ro(t, "first-page"),
                        previousPageText: Ro(t, "previous-page"),
                        nextPageText: Ro(t, "next-page"),
                        lastPageText: Ro(t, "last-page"),
                        pageSizeOptionTpl: rr.createHtml(t)
                    }
                }

                resetPageData(e, t, o) {
                    const {
                        _: n,
                        useNoTotalsMode: r,
                        currentPageKey: s,
                        pageData: a,
                        asyncTotals: i,
                        pageSizeKey: c,
                        pageSize: l
                    } = e, d = X(ar(n)), p = a[s] || 1, u = a[c] || l, h = (t, n) => {
                        const r = ((e, t, o) => {
                            const {pageData: n, pageSizeKey: r, pageSize: s, currentPageKey: a} = e, i = n[r] || s,
                                c = n[a] || 1;
                            let l = 1;
                            return l = t ? Math.ceil(t / i) : o < i ? c : c + 1, {
                                tPage: l,
                                [a]: c > l ? 1 : c,
                                [r]: i,
                                tSize: t
                            }
                        })(e, t, o);
                        dr(d, e, r), ((e, t, o, n) => {
                            const {currentPageKey: r, pageSizeKey: s} = t, a = 1 === o[r] ? 1 : (o[r] - 1) * o[s] + 1,
                                i = o[r] * o[s];
                            let c = o.tSize;
                            const l = o[r];
                            let d = o.tPage;
                            !c && n && (c = d = n);
                            const p = X(".page-info", e);
                            if (p.length) {
                                const e = Ro(t, "page-info", [a, i, c]);
                                p.html(e)
                            }
                            const u = X("[begin-number-info]", e);
                            u.length && (u.html(a), u.val(a));
                            const h = X("[end-number-info]", e);
                            h.length && (h.html(i), h.val(i));
                            const g = X("[current-page-info]", e);
                            g.length && (g.html(l), g.val(l));
                            const f = X("[totals-number-info]", e);
                            f.length && (f.html(c), f.val(c));
                            const m = X("[totals-page-info]", e);
                            m.length && (m.html(d), m.val(d))
                        })(d, e, r, n), To($(!0, e, {pageData: r})), d.css("visibility", "visible")
                    };
                    if (i) return o < u ? void h((p - 1) * u + o) : (h(null, i.text), void i.handler(e, Qn(e)).then((e => {
                        h(e)
                    })));
                    r ? h() : h(t)
                }

                updateRefreshIconState(e, t) {
                    const o = X(`${ar(e)} .refresh-action`);
                    if (!o.length) return;
                    const n = "refreshing";
                    t ? o.addClass(n) : setTimeout((() => {
                        o.removeClass(n)
                    }), 3e3)
                }

                updateCheckedInfo(e) {
                    const t = X(`${ar(e)} .toolbar-info.checked-info`);
                    0 !== t.length && t.html(Ro($o(e), "checked-info", mo(e).length))
                }

                gotoPage(e, t) {
                    (!t || t < 1) && (t = 1);
                    const {
                        _: o,
                        useNoTotalsMode: n,
                        currentPageKey: r,
                        pageData: s,
                        pageSize: a,
                        pageSizeKey: i,
                        sortData: c,
                        query: l,
                        pagingBefore: d,
                        pagingAfter: p
                    } = e, {tPage: u} = s;
                    !n && t > u && (t = u), s[r] = t, s[i] = s[i] || a, To(e);
                    const h = $({}, l, c, s);
                    d(h), Zn.refresh(o, (() => {
                        p(h)
                    }))
                }

                destroy(e) {
                    St(ir[e])
                }
            }).prototype, "createHtml", [cr], Object.getOwnPropertyDescriptor(lr.prototype, "createHtml"), lr.prototype), lr);
            var hr = o(692), gr = o.n(hr), fr = o(976), mr = o.n(fr), vr = o(963), yr = o.n(vr);
            const br = {}, xr = (e, t, o, n, r) => {
                const s = go(e);
                return o && !n && s.forEach((e => {
                    e.gm_checkbox_disabled || (e.gm_checkbox = t)
                })), !o && n && (s[n].gm_checkbox = t), r && (s.forEach(((e, t) => {
                    e.gm_checkbox = t === parseInt(n, 10)
                })), vo(e, [], !0)), fo(e, s), vo(e, s), s
            };
            var wr, kr, Cr, $r;
            const Tr = "disabled-selected", Dr = (e, t) => {
                const o = X('input[type="radio"]', e), n = "gm-radio-checked";
                t ? e.addClass(n) : e.removeClass(n), o.prop(Oe, t)
            }, Or = (e, t) => {
                const o = X('input[type="checkbox"]', e);
                switch (t) {
                    case Oe:
                        e.addClass(Ae), e.removeClass(Me), o.prop(Oe, !0);
                        break;
                    case je:
                        e.removeClass(Ae), e.addClass(Me), o.prop(Oe, !1);
                        break;
                    case Se:
                        e.removeClass(Ae), e.removeClass(Me), o.prop(Oe, !1)
                }
            }, jr = (e, t, o, n) => {
                const r = it(e);
                let s = 0, a = t.length;
                t && t.forEach(((e, t) => {
                    const n = e.gm_checkbox, i = X(`tbody tr[gm-cache-key="${t}"]`, r),
                        c = X("td[gm-checkbox] .gm-radio-checkbox", i);
                    i.attr(Oe, n), o ? Dr(c, n) : Or(c, n ? Oe : Se), e.gm_checkbox_disabled && a--, !e.gm_checkbox_disabled && n && s++
                }));
                const i = X("thead tr th[gm-checkbox] .gm-checkbox-wrapper", r), c = X(".gm-checkbox ", i);
                if (!o && Or(c, 0 === s ? Se : s === a ? Oe : je), ur.updateCheckedInfo(e), !o && m(n)) {
                    const t = X("tbody .gm-checkbox-wrapper ", r);
                    l(t, (t => {
                        const o = X(t);
                        X(".gm-checkbox", o).hasClass("gm-checkbox-checked") || (mo(e).length >= n ? o.addClass(Tr) : o.removeClass(Tr))
                    })), t.length > n ? i.addClass(Tr) : i.removeClass(Tr)
                }
            };
            const Sr = new (wr = Ho(gr()), kr = Ho(mr()), Cr = Ho(yr()), zo(($r = class {
                init(e) {
                    var t;
                    br[e] = (t = at(e), {
                        allChange: tt(We, t, "th[gm-checkbox] .gm-checkbox-wrapper"),
                        checkboxChange: tt(We, t, "td[gm-checkbox] .gm-checkbox-wrapper"),
                        radioChange: tt(We, t, "td[gm-checkbox] .gm-radio-wrapper"),
                        trChange: tt(We, t, "tbody > tr[gm-cache-key]")
                    });
                    const {allChange: o, checkboxChange: n, radioChange: r, trChange: s} = br[e], {
                        checkboxConfig: a,
                        checkedBefore: i,
                        checkedAllBefore: c,
                        checkedAfter: l,
                        checkedAllAfter: d
                    } = $o(e), {max: p, useRowCheck: u} = a;
                    X(o.target).on(o.events, o.selector, (function () {
                        let t = mo(e);
                        const o = this.querySelector(".gm-checkbox-input"), n = o.checked;
                        if (i(t, !n), !1 === c(t, !n)) return void (o.checked = !n);
                        const r = xr(e, n, !0);
                        jr(e, r), t = mo(e), l(t, n), d(t, n)
                    })), X(n.target).on(n.events, n.selector, (function () {
                        const t = X(this).closest("tr").get(0), o = this.querySelector(".gm-checkbox-input"),
                            n = o.checked;
                        if (!1 === i(mo(e), !n, ho(e, t))) return void (o.checked = !n);
                        const r = t.getAttribute(ie), s = xr(e, n, !1, r);
                        jr(e, s, !1, p), l(mo(e), n, ho(e, t))
                    })), X(r.target).on(r.events, r.selector, (function () {
                        const t = X(this).closest("tr").get(0), o = this.querySelector(".gm-radio-input"),
                            n = o.checked;
                        if (!1 === i(mo(e), "true" === t.getAttribute("checked"), ho(e, t))) return void (o.checked = !n);
                        const r = t.getAttribute(ie), s = xr(e, void 0, !1, r, !0);
                        jr(e, s, !0), l(mo(e), !0, ho(e, t))
                    })), u && X(s.target).on(s.events, s.selector, (function (t) {
                        const o = ho(e, this, !0), n = X("td[gm-checkbox] label", this);
                        let r = X(t.target);
                        "TD" !== t.target.nodeName && (r = r.closest("td")), o.gm_checkbox_disabled || g(r.attr(Tr)) || n.hasClass(Tr) || -1 !== [].indexOf.call(t.target.classList, "gm-radio-checkbox-input") || n.find("input").trigger("click")
                    }))
                }

                addSign(e) {
                    return e.disableRowCheck ? Tr : ""
                }

                getCheckedTr(e) {
                    return document.querySelectorAll(`${at(e)} tbody tr[checked="true"]`)
                }

                getColumn(e) {
                    return {
                        key: be,
                        text: e.useRadio ? "" : this.getCheckboxTpl({}),
                        isAutoCreate: !0,
                        isShow: !0,
                        disableCustomize: !0,
                        width: 40,
                        fixed: e.fixed,
                        template: (t, o, n, r) => this.getColumnTemplate({
                            checked: t,
                            disabled: o.gm_checkbox_disabled,
                            useRadio: e.useRadio,
                            isTop: r
                        })
                    }
                }

                getColumnTemplate(e) {
                    const {checked: t, disabled: o, useRadio: n, isTop: r} = e;
                    return {
                        template: r ? n ? this.getRadioTpl({
                            checked: t,
                            disabled: o
                        }) : this.getCheckboxTpl({checked: t, disabled: o}) : ""
                    }
                }

                getCheckboxTpl(e) {
                    const {checked: t, disabled: o, label: n, value: r} = e;
                    return {checked: t ? Oe : Se, disabled: o, label: n, value: r}
                }

                getRadioTpl(e) {
                    const {checked: t, disabled: o, label: n, value: r} = e;
                    return {checked: t, disabled: o, label: n, value: r}
                }

                destroy(e) {
                    St(br[e])
                }
            }).prototype, "getColumnTemplate", [wr], Object.getOwnPropertyDescriptor($r.prototype, "getColumnTemplate"), $r.prototype), zo($r.prototype, "getCheckboxTpl", [kr], Object.getOwnPropertyDescriptor($r.prototype, "getCheckboxTpl"), $r.prototype), zo($r.prototype, "getRadioTpl", [Cr], Object.getOwnPropertyDescriptor($r.prototype, "getRadioTpl"), $r.prototype), $r);
            var Ar = o(271);
            const Mr = {}, _r = "no-click", Pr = "gm-config-ing", Er = "gm-config-area";
            var zr, Hr;
            const Nr = e => X(`[${ee}="${e}"]`), Lr = e => {
                const t = lt(e), o = Nr(e), n = o.find(".config-list").get(0), r = o.find(".config-info");
                o.css("visibility", "hidden"), setTimeout((() => {
                    n.style.maxHeight = (t.height() - 90 - 20 - r.height() || 0) + ze, o.css("visibility", "inherit")
                }))
            };
            const Rr = new (zr = Ho(o.n(Ar)()), zo((Hr = class {
                    init(e) {
                        const t = this;
                        Mr[e] = (e => {
                            const t = `[${ee}="${e}"]`;
                            return {
                                closeConfig: tt(We, t, ".config-action"),
                                liChange: tt(We, t, ".config-list li"),
                                closeConfigByBody: tt("mousedown.closeConfig", "body")
                            }
                        })(e);
                        const {closeConfig: o, liChange: n} = Mr[e];
                        X(o.target).on(o.events, o.selector, (function () {
                            t.hide(e)
                        })), X(n.target).on(n.events, n.selector, (function (o) {
                            o.preventDefault();
                            const n = X(this);
                            if (n.hasClass(_r)) return !1;
                            const r = n.find(".gm-checkbox"), s = n.attr(ae), a = Nr(e), i = ct(e);
                            X(".config-list .no-click", a).removeClass(_r);
                            let c = !n.find('input[type="checkbox"]').prop(Oe);
                            c ? r.addClass(Ae) : r.removeClass(Ae), i.addClass(Pr), wt(e, s, c), i.removeClass(Pr);
                            const l = X(".checked-li", a);
                            1 === l.length && l.addClass(_r), t.update(e)
                        }))
                    }

                    updateConfigList(e) {
                        const t = Nr(e), o = X(".config-list", t);
                        let n = 0;
                        const r = [];
                        l($o(e).columnMap, ((e, t) => {
                            r[t.index] = t
                        })), o.html(""), l(r, (t => {
                            const {key: r, isShow: s} = t;
                            if (t.disableCustomize) return;
                            const a = gt(e, r).find(".th-text").text();
                            o.append(this.createColumn({key: r, isShow: s, label: a})), s && n++
                        }));
                        const s = X(".checked-li", t);
                        1 === n ? s.addClass(_r) : s.removeClass(_r)
                    }

                    update(e) {
                        let t = Do(e);
                        ct(e).scrollLeft(0), Ct(t), t = Do(e), Dt(t), Vr.update(e), kt(e), Ot(e), Vr.resetFlag(e)
                    }

                    createHtml(e) {
                        return {key: `${ee}="${e._}"`, info: e.configInfo}
                    }

                    createColumn(e) {
                        const {key: t, isShow: o, label: n} = e;
                        return `<li th-name="${t}"${o ? ' class="checked-li"' : ""}>${Sr.getCheckboxTpl({
                            checked: o,
                            label: n
                        })}</li>`
                    }

                    toggle(e) {
                        "block" === Nr(e).css("display") ? this.hide(e) : this.show(e)
                    }

                    show(e) {
                        const t = Nr(e);
                        this.updateConfigList(e), t.show(), Lr(e);
                        const {closeConfigByBody: o} = Mr[e], n = o.events, r = X(o.target);
                        r.off(n), r.on(n, (function (e) {
                            const o = X(e.target);
                            if (o.hasClass(Er) || 1 === o.closest(".gm-config-area").length) return !1;
                            t.hide(), r.off(n)
                        }))
                    }

                    hide(e) {
                        Nr(e).hide()
                    }

                    destroy(e) {
                        St(Mr[e])
                    }
                }).prototype, "createHtml", [zr], Object.getOwnPropertyDescriptor(Hr.prototype, "createHtml"), Hr.prototype), Hr),
                Kr = {}, qr = {};
            const Br = new class {
                    constructor() {
                        Ht(this, "width", 0), Ht(this, "pauseResizeEventMap", {})
                    }

                    init(e) {
                        this.render(e), this.bindResizeToTable(e), this.bindScrollToTableDiv(e), this.width = (e => {
                            const t = document.createElement("div");
                            t.style.width = "100px", t.style.height = "100px", t.style.overflow = "scroll", t.style.scrollbarWidth = "thin", ct(e).get(0).appendChild(t);
                            const o = t.offsetWidth - t.clientWidth;
                            return t.remove(), o
                        })(e)
                    }

                    render(e) {
                        it(e).append(dt(e).clone(!0).attr(re, e));
                        const t = pt(e);
                        t.removeAttr(ne);
                        const o = $o(e);
                        _o(o, t.get(0))
                    }

                    update(e) {
                        const t = lt(e);
                        let o = qr[e], n = $o(e);
                        if (1 === t.length) {
                            this.pauseResizeEventMap[e] = !0;
                            try {
                                const r = t.width();
                                o && r !== o && (Ct(n), To(n)), qr[e] = r, Ot(e), Dt(n), Vr.update(e), bn(e), n.supportConfig && Lr(e)
                            } catch (e) {
                            }
                            setTimeout((() => {
                                delete this.pauseResizeEventMap[e]
                            }))
                        }
                    }

                    bindResizeToTable(e) {
                        const t = lt(e).parent(), o = window.ResizeObserver;
                        if (o) {
                            const n = new o((() => {
                                this.pauseResizeEventMap[e] || this.update(e)
                            })), r = t.get(0);
                            return n.observe(r), void (Kr[e] = {observer: n, el: r})
                        }
                        X(window).bind(`resize.${e}`, (() => {
                            this.pauseResizeEventMap[e] && this.update(e)
                        })), setTimeout((() => {
                            this.update(e)
                        }))
                    }

                    bindScrollToTableDiv(e) {
                        const t = ct(e);
                        t.unbind(Ye), t.bind(Ye, (() => {
                            Dt($o(e), !0), Vr.update(e), bn(e)
                        }))
                    }

                    destroy(e) {
                        X(window).unbind(`resize.${e}`), ct(e).unbind(Ye);
                        const t = Kr[e];
                        t && t.el && t.observer && (t.observer.unobserve(t.el), delete Kr[e])
                    }
                }, Ir = (e, t, o, n) => {
                    t.setProperty(`--gm-${e}-${o}-sticky-value`, n + ze)
                },
                Fr = (e, t, o, n) => `[${Z}="${e}"][gm-overflow-x="true"] tr:not([empty-template]) td:nth-of-type(${t + 1}){position: sticky;\nposition: -webkit-sticky;\n${o}: var(--gm-${e}-${t}-sticky-value);\nz-index: 3;\nbox-shadow: ${n};}`,
                Gr = {}, Wr = {}, Jr = {};
            const Vr = new class {
                init(e) {
                    const {_: t, browser: o, columnMap: n} = e, r = ct(t), s = `fixed-style-${t}`;
                    let a = document.getElementById(s);
                    a || (a = document.createElement("style"), a.id = s);
                    const i = pt(t), c = dt(t).height() + ze;
                    let d = "", p = 0, u = 0;
                    const h = [], g = [];
                    l(n, ((e, t) => {
                        "left" === t.fixed && h.push(t), "right" === t.fixed && g.push(t)
                    }));
                    const f = h.length;
                    let m = "none";
                    Gr[t] = h.sort(((e, t) => e.index - t.index)), l(Gr[t], ((e, o) => {
                        const n = gt(t, e.key);
                        o === f - 1 && (m = "2px 0 4px #e8e8e8"), d += Fr(t, e.index, "left", m), e.pl = p, p += e.width, n.css({
                            height: c,
                            lineHeight: c,
                            boxShadow: m
                        })
                    })), "safari" === o && p--, i.css("padding-left", p), m = "none";
                    const v = g.length;
                    Wr[t] = g.sort(((e, t) => t.index - e.index)), Wr[t].forEach(((e, o) => {
                        const n = gt(t, e.key);
                        o === v - 1 && (m = "-2px 0 4px #e8e8e8"), n.css({
                            height: c,
                            lineHeight: c,
                            boxShadow: m
                        }), d += Fr(t, e.index, "right", m), e.pr = u, u += e.width
                    })), i.css("padding-right", u), a.innerHTML = d, r.append(a), this.resetFlag(t)
                }

                update(e) {
                    const t = ct(e), o = t.get(0).style, n = t.scrollLeft(), r = t.width(), s = pt(e).width(),
                        a = ut(e).height();
                    if (Jr[e] && Jr[e].divWidth === r && Jr[e].scrollLeft === n && Jr[e].theadWidth === s && Jr[e].tbodyHeight === a) return;
                    Jr[e] = {divWidth: r, scrollLeft: n, theadWidth: s, tbodyHeight: a};
                    const i = "true" === ct(e).attr("gm-overflow-x"), c = (e, t) => i ? ht(e, t.key).width() : t.width;
                    if (Gr[e] && Gr[e].length) {
                        let t, r = 0;
                        l(Gr[e], (s => {
                            t = c(e, s), gt(e, s.key).css({width: t, left: r + n}), Ir(e, o, s.index, r), r += t
                        })), pt(e).css("padding-left", r)
                    }
                    if (Wr[e] && Wr[e].length) {
                        let r = s - t.width() - n;
                        ut(e).height() > t.get(0).clientHeight && (r += Br.width);
                        let a, i = 0;
                        Wr[e].forEach((t => {
                            a = c(e, t), gt(e, t.key).css({width: a, right: i + r}), Ir(e, o, t.index, i), i += a
                        })), pt(e).css("padding-right", i)
                    }
                }

                resetFlag(e) {
                    if (!Wr[e] || !Wr[e].length) return;
                    const t = "fixed-previous", o = pt(e).find('th[fixed="right"]').eq(0), n = vt(e), r = o.index(n);
                    n.removeAttr(t), n.eq(r - 1).attr(t, "")
                }

                destroy(e) {
                    delete Gr[e], delete Wr[e]
                }
            }, Ur = "gm-adjust-ing";
            const Xr = {};
            const Yr = new class {
                get html() {
                    return '<span class="gm-adjust-action"></span>'
                }

                init(e) {
                    Xr[e] = function (e, t) {
                        return {
                            start: tt(Je, t, `[grid-manager-mock-thead="${e}"] .gm-adjust-action`),
                            doing: tt(Ve, `[${Z}="${e}"]`, t),
                            abort: tt("mouseup mouseleave", t)
                        }
                    }(e, at(e));
                    const {start: t} = Xr[e];
                    X(t.target).on(t.events, t.selector, (function (t) {
                        const o = X(this).closest("th"), n = o.find(".th-wrap");
                        let r = o.find(".gm-adjust-ing");
                        if (!r.length) {
                            const e = document.createElement("span");
                            e.className = Ur, n.append(e), r = o.find(".gm-adjust-ing")
                        }
                        const s = o.height();
                        r.css({
                            top: -(s - n.height()) / 2,
                            right: -(o.width() - n.width() + 1) / 2,
                            height: ct(e).height() + s
                        });
                        const a = it(e), {adjustBefore: i, adjustAfter: c, isIconFollowText: l, columnMap: d} = $o(e),
                            p = vt(e), u = p.eq(o.index(p) + 1);
                        xt(o, e);
                        i(t), a.addClass(xe), ((e, t, o, n, r, s) => {
                            let a, i = n.width();
                            const c = ct(e).width(), {doing: l} = Xr[e], d = pt(e), p = o.offset().left,
                                u = d.width() - i - o.width();
                            X(l.target).on(l.events, l.selector, (function (t) {
                                a = Math.ceil(t.clientX - p);
                                const l = o.width();
                                if (a !== l) {
                                    if (s > a) {
                                        if (a <= r) return;
                                        const e = u + a + i;
                                        e < c && (i = i + c - e)
                                    }
                                    s < a && (i = n.width()), d.width(u + a + i), o.css({
                                        width: a,
                                        "max-width": a
                                    }), n.css({width: i, "max-width": i}), Vr.update(e)
                                }
                            }))
                        })(e, p.get(), o, u, $t(e, d[yt(o)], l), Math.ceil(t.clientX - o.offset().left)), ((e, t, o, n, r) => {
                            const {doing: s, abort: a} = Xr[e];
                            X(a.target).on(a.events, (n => {
                                X(a.target).off(a.events), X(s.target).off(s.events, s.selector);
                                const i = Do(e, !0).columnMap;
                                for (let t in i) ht(e, t).width(i[t].width);
                                Ot(e), Br.update(e), r(n), t.removeClass(xe), o.find(".gm-adjust-ing").remove()
                            }))
                        })(e, a, o, 0, c)
                    }))
                }

                destroy(e) {
                    St(Xr[e])
                }
            };
            const Qr = new class {
                getColumn(e) {
                    return {
                        key: ve,
                        text: Ro(e, "order-text"),
                        isAutoCreate: !0,
                        isShow: !0,
                        disableCustomize: !0,
                        width: 50,
                        fixed: e.autoOrderConfig.fixed,
                        template: (e, t, o, n) => `<td gm-create gm-order>${n ? e : ""}</td>`
                    }
                }
            };
            var Zr = o(909);
            const es = {};
            var ts, os;
            const ns = new (ts = Ho(o.n(Zr)()), zo((os = class {
                init(e) {
                    const t = this, o = it(e), n = X("body");
                    es[e] = ((e, t) => ({
                        start: tt(Je, t, `[grid-manager-mock-thead="${e}"] .gm-drag-action`),
                        doing: tt("mousemove.gmDrag", "body"),
                        abort: tt("mouseup.gmDrag", "body")
                    }))(e, `${at(e)} [grid-manager-mock-thead]`);
                    const {start: r, doing: s, abort: a} = es[e];
                    X(r.target).on(r.events, r.selector, (function (r) {
                        let i = $o(e);
                        const {columnMap: c, dragBefore: l, animateTime: d, dragAfter: p, supportConfig: u} = i,
                            h = X(this).closest("th"), g = h.get(0);
                        let f = vt(e);
                        const m = lt(e), v = xt(h, e);
                        l(r), n.addClass(xe), h.addClass(kn), v.addClass(kn);
                        let y = X(".gm-dreamland-div", m);
                        if (y.length) return;
                        m.append('<div class="gm-dreamland-div"></div>'), y = X(".gm-dreamland-div", m), y.get(0).innerHTML = t.createHtml({
                            $table: o,
                            $th: h
                        });
                        let b = 0;
                        const x = h.width(), w = h.height(), k = o.height(), C = m.offset(),
                            $ = pageXOffset - C.left - x / 2, T = pageYOffset - C.top - w / 2;
                        y.css({width: x + 2, height: k + 2}), y.show();
                        const D = X(s.target);
                        D.off(s.events), D.on(s.events, (function (o) {
                            let n, r, s, a;
                            b = h.index(f), b > 0 && (n = f.eq(b - 1), r = yt(n)), b < f.length - 1 && (s = f.eq(b + 1), a = yt(s)), n && n.length && c[r].disableCustomize ? n = void 0 : s && s.length && c[a].disableCustomize && (s = void 0), y.css({
                                left: o.clientX + $,
                                top: o.clientY + T
                            }), f = t.updateDrag(e, n, s, h, v, y, f)
                        }));
                        const O = a.events, j = X(a.target);
                        j.off(O), j.on(O, (function (t) {
                            X(s.target).off(s.events), j.off(O), y.animate({
                                top: o.get(0).offsetTop + ze,
                                left: `${g.offsetLeft - ct(e).get(0).scrollLeft + ze}`
                            }, d, (() => {
                                h.removeClass(kn), v.removeClass(kn), y.remove(), p(t)
                            })), Do(e), u && Rr.updateConfigList(e), Ot(e), Vr.resetFlag(e), n.removeClass(xe)
                        }))
                    }))
                }

                createHtml(e) {
                    const {$table: t, $th: o} = e, n = xt(o, t.find("tbody tr:not([children-state])"));
                    let r = "";
                    return l(n, (e => {
                        r += `<tr style="height: ${e.offsetHeight + ze}">${e.outerHTML}</tr>`
                    })), {class: t.get(0).className, th: o.get(0).outerHTML, tbody: r}
                }

                updateDrag(e, t, o, n, r, s, a) {
                    if (t && s.offset().left < t.offset().left) {
                        let o = xt(t, e);
                        t.before(n), l(r, ((e, t) => {
                            o.eq(t).before(e)
                        })), ht(e, t).before(ht(e, n)), kt(e), a = vt(e)
                    }
                    if (o && s.offset().left + s.width() > o.offset().left) {
                        let t = xt(o, e);
                        o.after(n), l(r, ((e, o) => {
                            t.eq(o).after(e)
                        })), ht(e, o).after(ht(e, n)), kt(e), a = vt(e)
                    }
                    return a
                }

                destroy(e) {
                    St(es[e])
                }
            }).prototype, "createHtml", [ts], Object.getOwnPropertyDescriptor(os.prototype, "createHtml"), os.prototype), os);
            const rs = new class {
                init(e) {
                    No[e] = (e => ({
                        openMenu: tt("contextmenu", `[${Q}="${e}"]`),
                        closeMenu: tt("mousedown.closeMenu", "body")
                    }))(e);
                    const {openMenu: t, closeMenu: o} = No[e];
                    X(t.target).on(t.events, (function (n) {
                        if (n.preventDefault(), n.stopPropagation(), "TBODY" !== n.target.nodeName && 0 === X(n.target).closest("tbody").length) return;
                        const r = Vo(e);
                        r.show(), r.css(((e, t, o, n) => {
                            const r = document.documentElement, s = document.body, a = r.offsetHeight,
                                i = r.offsetWidth, c = s.scrollTop || r.scrollTop, l = s.scrollLeft || r.scrollLeft;
                            return {top: (a - c < n + t ? n - t : n) + c, left: (i - l < o + e ? o - e : o) + l}
                        })(r.width(), r.height(), n.clientX, n.clientY)), r.on(t.events, (function (e) {
                            e.preventDefault(), e.stopPropagation()
                        }));
                        const s = X(o.target), a = o.events;
                        s.off(a), s.on(a, (function (t) {
                            const o = X(t.target);
                            o.attr(oe) || 1 === o.closest("[grid-master]").length || Jo(e)
                        }))
                    }))
                }

                destroy(e) {
                    St(No[e]), X(Wo(e)).remove()
                }
            }, ss = (e, t) => {
                if (t || (t = $o(e)), t.rendered) return !0;
                _t(`run failed，please check ${e} had been init`)
            };
            let as = {};
            const is = {};

            class cs {
                constructor(e, t, o) {
                    if ("TABLE" !== e.nodeName) return void Pt('nodeName !== "TABLE"');
                    De.forEach((t => {
                        e["__" + t] = e.getAttribute(t)
                    }));
                    let n = X(e), r = (t = $({}, cs.defaultOption, t)).gridManagerName;
                    if (g(r) ? n.attr(Y, r) : r = t.gridManagerName = st(e), !g(r)) return void Pt("gridManagerName undefined");
                    let s = cs.get(r);
                    if (s.rendered && cs.destroy(r), is[r] && !uo[r]) return;
                    if (is[r] && uo[r] && (clearInterval(uo[r]), delete uo[r]), is[r] = !0, !t || b(t)) return void Pt("init method params error");
                    if (!w(t.columnData)) return void Pt("columnData invalid");
                    if (!t.ajaxData) return void Pt("ajaxData undefined");
                    y(t.fullColumn) && (f(t.fullColumn.topTemplate) || f(t.fullColumn.bottomTemplate)) && (t.supportConfig = !1, t.supportDrag = !1, t.supportMoveRow = !1, t.supportTreeData = !1, t.__isFullColumn = !0), t.supportTreeData && (t.supportMoveRow = !1, t.__isFullColumn = !1), t.columnData.some((e => w(e.children))) && (t.supportConfig = !1, t.supportDrag = !1, t.supportAdjust = !1, t.disableLine = !1, t.supportMoveRow = !1, t.__isNested = !0), (() => {
                        const e = co(ge), t = so.version;
                        e || lo(ge, t), e && e !== t && (wo(), lo(ge, t))
                    })(), s = Co(t, Bn.getColumn.bind(Bn), Sr.getColumn.bind(Sr), Qr.getColumn.bind(Qr), Vn.getColumn.bind(Vn)), Ie(s._);
                    const a = () => {
                        u(n.attr(fe)) || setTimeout((() => {
                            xo(s), n.removeAttr(fe)
                        }), 1e3), s = $o(r), delete is[r], n.addClass("gm-ready"), s.rendered = !0, To(s);
                        const e = () => {
                            f(o) && o(s.query)
                        };
                        s.firstLoading ? Zn.refresh(r, (() => {
                            e()
                        })) : (Zn.insertEmptyTemplate(s, !0), e()), Br.update(s._)
                    }, i = () => {
                        if (n = it(r), e = n.get(0), -1 === d(e, "width").indexOf(ze)) return !0;
                        clearInterval(uo[r]), delete uo[r], this.initTable(n, s).then(a)
                    };
                    i() && (clearInterval(uo[r]), uo[r] = setInterval((() => {
                        i()
                    }), 50))
                }

                static get version() {
                    return so.version
                }

                static get defaultOption() {
                    return as
                }

                static set defaultOption(e) {
                    as = e
                }

                static mergeDefaultOption(e) {
                    as = $(as, e)
                }

                static get(e) {
                    return $o(st(e))
                }

                static getLocalStorage(e) {
                    return bo(st(e))
                }

                static resetLayout(e, t, o) {
                    const n = st(e), r = $o(n);
                    ss(n, r) && (jt(n, t, o, r.supportAjaxPage), Br.update(n))
                }

                static clear(e) {
                    const t = st(e);
                    return ss(t) && wo(t)
                }

                static getTableData(e) {
                    const t = st(e);
                    return ss(t) && go(t)
                }

                static getRowData(e, t) {
                    const o = st(e);
                    return ss(o) && ho(o, t)
                }

                static setSort(e, t, o, n) {
                    const r = st(e);
                    ss(r) && an(r, t, o, n)
                }

                static setConfigVisible(e, t) {
                    const o = st(e), n = $o(o);
                    if (ss(o, n)) if (n.supportConfig) switch (t) {
                        case!0:
                            Rr.show(o);
                            break;
                        case!1:
                            Rr.hide(o);
                            break;
                        case void 0:
                            Rr.toggle(o)
                    } else Pt("supportConfig!==true")
                }

                static showTh(e, t) {
                    const o = st(e);
                    ss(o) && $o(o).supportConfig && (wt(o, t, !0), Rr.update(o))
                }

                static hideTh(e, t) {
                    const o = st(e);
                    ss(o) && $o(o).supportConfig && (wt(o, t, !1), Rr.update(o))
                }

                static exportGrid(e, t, o) {
                    const n = st(e);
                    return ss(n) && qo.exportGrid(n, t, o)
                }

                static exportGridToXls(e, t, o) {
                    return _t("exportGridToXls下个版本将移除，请使用exportGrid进行替换"), cs.exportGrid(e, t, o)
                }

                static setQuery(e, t, o, n) {
                    const r = st(e), s = $o(r);
                    if (!ss(r, s)) return;
                    const {columnMap: a, pageData: i, currentPageKey: c} = s;
                    y(t) || (t = {}), v(o) || m(o) || (n = o, o = !0), s._filter && l(a, ((e, o) => {
                        o.filter && (o.filter.selected = g(t[e]) ? t[e] : "", tn.update(gt(r, e), o.filter))
                    })), $(s, {query: t}), !0 === o && (i[c] = 1), m(o) && (i[c] = o), To(s), Zn.refresh(r, n)
                }

                static setAjaxData(e, t, o) {
                    const n = st(e), r = $o(n);
                    ss(n, r) && ($(r, {ajaxData: t}), fo(n, []), To(r), Zn.refresh(n, o))
                }

                static refreshGrid(e, t, o) {
                    const n = st(e), r = $o(n);
                    ss(n, r) && (v(t) || (o = t, t = !1), t && (r.pageData[r.currentPageKey] = 1, To(r)), Zn.refresh(n, o))
                }

                static renderGrid(e) {
                    const t = st(e), o = $o(t);
                    if (ss(t, o)) {
                        const {dataKey: e, totalsKey: n, pageData: r} = o, s = {[e]: go(t), [n]: r.tSize};
                        Zn.driveDomForSuccessAfter(o, s)
                    }
                }

                static resetSettings(e, t) {
                    const o = st(e);
                    ss(o, t) && To(t)
                }

                static updateTemplate(e) {
                    return ko(e)
                }

                static getCheckedTr(e) {
                    const t = st(e);
                    return ss(t) && Sr.getCheckedTr(t)
                }

                static getCheckedData(e) {
                    const t = st(e);
                    return ss(t) && mo(t)
                }

                static setCheckedData(e, t) {
                    const o = st(e), n = $o(o);
                    if (ss(o, n)) {
                        const e = x(t) ? t : [t], {columnMap: r, checkboxConfig: s, treeConfig: a, supportMenu: i} = n,
                            c = a.treeKey, l = go(o), {key: d, useRadio: p, max: u} = s;
                        return l.forEach((t => {
                            let o = ot(r, t, [c]);
                            t.gm_checkbox = e.some((e => Et(o, ot(r, e, [c]), d)))
                        })), fo(o, l), vo(o, e, !0), i && Jo(o), jr(o, l, p, u)
                    }
                }

                static updateRowData(e, t, o) {
                    const n = st(e), r = $o(n);
                    if (ss(n, r)) {
                        const {columnMap: e, supportCheckbox: s} = r, a = x(o) ? o : [o], {
                            tableData: i,
                            updateCacheList: c
                        } = ((e, t, o) => {
                            const n = go(e), r = $o(e), s = r.supportTreeData, a = r.treeConfig.treeKey, i = [],
                                c = (e, o) => {
                                    e.some((e => {
                                        if (e[t] === o[t]) return $(e, o), i.push(e), !0;
                                        if (s) {
                                            const t = e[a];
                                            if (t && t.length) return c(t, o)
                                        }
                                    }))
                                };
                            return o.forEach((e => {
                                c(n, e)
                            })), fo(e, n), {tableData: n, updateCacheList: i}
                        })(n, t, a);
                        return s && ((e, t, o, n) => {
                            so.checkedData[e] && (so.checkedData[e] = so.checkedData[e].map((e => (n.forEach((n => {
                                e[o] === n[o] && $(e, ot(t, n))
                            })), e))))
                        })(n, e, t, a), Yn.updateTrDOM(r, c), i
                    }
                }

                static updateTreeState(e, t) {
                    const o = st(e);
                    ss(o) && gn.updateDOM(o, t)
                }

                static cleanData(e) {
                    const t = st(e);
                    ss(t) && (fo(t, []), this.renderGrid(t))
                }

                static print(e) {
                    const t = st(e);
                    ss(t) && Go(t)
                }

                static showLoading(e) {
                    const t = st(e), o = $o(t);
                    ss(t, o) && nt(t, o.loadingTemplate)
                }

                static hideLoading(e, t) {
                    const o = st(e);
                    ss(o) && rt(o, t)
                }

                async initTable(e, t) {
                    await Zn.createDOM(e, t);
                    const {_: o} = t;
                    t.supportAdjust && Yr.init(o), t.supportDrag && ns.init(o), t.supportMoveRow && Bn.init(o), t.supportCheckbox && Sr.init(o), t._sort && cn.init(o), t._remind && wn.init(o), t._filter && tn.init(o), t.supportConfig && Rr.init(o), t.supportMenu && rs.init(o), t.supportAjaxPage && ur.init(o), t.supportTreeData && gn.init(o), t.__isFullColumn && Vn.init(o), t._fixed && Vr.init(t), t = $o(o), Ct(t, !0), To(t), t.__isNested ? $n.addSign(o) : kt(o), Ot(o);
                    const n = dt(o).find("tr"), r = n.height();
                    n.height(r), pt(o).find("tr").height(r), l(ft(o), (e => {
                        e.innerHTML = ""
                    })), Do(o)
                }

                static destroy(e) {
                    const t = st(e);
                    try {
                        Yr.destroy(t), ur.destroy(t), Sr.destroy(t), Rr.destroy(t), Yn.destroy(t), ns.destroy(t), rr.destroy(t), tn.destroy(t), rs.destroy(t), Bn.destroy(t), wn.destroy(t), Br.destroy(t), cn.destroy(t), gn.destroy(t), Vr.destroy(t), Vn.destroy(t)
                    } catch (e) {
                        console.error(e)
                    }
                    delete is[t], (e => {
                        delete so.responseData[e], delete so.checkedData[e], delete so.settings[e], clearInterval(uo[e]), clearInterval(po[e]), delete uo[e], delete po[e]
                    })(t), Ie(t)
                }
            }

            Element.prototype.GM = Element.prototype.GridManager = function () {
                let e, t, o, n;
                const r = arguments;
                if (g(r[0]) ? (e = r[0], t = r[1], o = r[2], n = r[3]) : (e = "init", t = r[0], o = r[1]), "init" !== e) return cs[e](this, t, o, n) || this;
                new cs(this, t, o)
            }, window.GridManager || window.GM || (window.GridManager = window.GM = cs), (e => {
                if (!e) return;
                const t = function () {
                    return this.get(0).GM(...arguments)
                };
                e.fn.extend({GridManager: t, GM: t}), window.$ = e
            })(window.jQuery);
            const ls = cs
        })(), n
    })()
}));