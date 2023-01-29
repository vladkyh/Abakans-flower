(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,76,468,709,398,832,336,597,259,661,283,37,467,587,78,605];
exports.modules = {

/***/ 9647:
/***/ ((module) => {

// Exports
module.exports = {
	"callback": "CallBack_callback__WlhAC",
	"callback__title": "CallBack_callback__title__xVnOl",
	"callback__text": "CallBack_callback__text__EqwCg",
	"callback__input": "CallBack_callback__input___inB5",
	"callback__p": "CallBack_callback__p__Bct38",
	"callback__button": "CallBack_callback__button__5ZC2u",
	"search__input": "CallBack_search__input__m21C_",
	"close": "CallBack_close__zPIO5",
	"search__svg_close": "CallBack_search__svg_close__q9ZFj",
	"full_screen": "CallBack_full_screen__yVSmU"
};


/***/ }),

/***/ 9909:
/***/ ((module) => {

// Exports
module.exports = {
	"communicate": "Communicate_communicate__Qxqyv",
	"none": "Communicate_none__WUQ0C",
	"call": "Communicate_call__7iOH2",
	"message": "Communicate_message___EsCP",
	"phone": "Communicate_phone__Geir3",
	"whatsapp": "Communicate_whatsapp__0nvg0",
	"viber": "Communicate_viber__luFui",
	"active__viber": "Communicate_active__viber__mltnc",
	"active__whats": "Communicate_active__whats__CFWcC",
	"active__phone": "Communicate_active__phone__LhtlQ"
};


/***/ }),

/***/ 8253:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__1IwEk",
	"links": "Footer_links__fUg_J",
	"img": "Footer_img__pFlgP",
	"logo__img": "Footer_logo__img__5K_KM"
};


/***/ }),

/***/ 3397:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Header_nav__uJ8Zp",
	"header__content": "Header_header__content__Adm9m",
	"active": "Header_active__XK0az",
	"logo__img": "Header_logo__img__xWnpZ",
	"links": "Header_links__rrw6n",
	"link": "Header_link__js6Y2",
	"links__social": "Header_links__social__2VBFz",
	"phone": "Header_phone__80D36",
	"logo__inst": "Header_logo__inst__XXGgZ",
	"callback": "Header_callback__Q0rUi"
};


/***/ }),

/***/ 6127:
/***/ ((module) => {

// Exports
module.exports = {
	"products": "Product_products__MxIqU",
	"products_raspolo": "Product_products_raspolo__NkI4z",
	"paket_icon": "Product_paket_icon__Wgp2v",
	"link": "Product_link__6cmKB",
	"products_none": "Product_products_none__uO9Pf",
	"totalPrice": "Product_totalPrice__1X6X7",
	"p": "Product_p__lpNOj"
};


/***/ }),

/***/ 4922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/flower-svgrepo-com.e68daf38.svg","height":800,"width":800});

/***/ }),

/***/ 7648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ CallBack_CallBack)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/CallBack/CallBack.module.css
var CallBack_module = __webpack_require__(9647);
var CallBack_module_default = /*#__PURE__*/__webpack_require__.n(CallBack_module);
// EXTERNAL MODULE: ./public/x.svg
var x = __webpack_require__(2144);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/CallBack/CallBack.jsx





const CallBack = ({ active , setActive  })=>{
    const [name, setName] = (0,external_react_.useState)("");
    const [phone, setPhone] = (0,external_react_.useState)("");
    const [visible, setVisible] = (0,external_react_.useState)(true);
    const focusCall = (0,external_react_.useRef)();
    const focusOutside = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (focusOutside.current && focusOutside.current.contains(event.target)) {
                setActive(false);
            }
        };
        document.body.addEventListener("click", handleClickOutside);
        return ()=>{
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const onChangeInputName = (event)=>{
        setName(event.target.value);
    };
    const onChangeInputPhone = (event)=>{
        setPhone(event.target.value);
    };
    const closeCall = ()=>{
        setActive(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: focusOutside,
                className: (CallBack_module_default()).full_screen
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: focusCall,
                className: visible ? (CallBack_module_default()).callback : "display__none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (CallBack_module_default()).close,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            onClick: ()=>closeCall(),
                            className: (CallBack_module_default()).search__svg_close,
                            src: x/* default */.Z,
                            alt: "поиск"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (CallBack_module_default()).callback__title,
                        children: "Заказать обратный звонок"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (CallBack_module_default()).callback__text,
                        children: "Введите свой номер телефона, и мы свяжемся с вами в самое ближайшее время"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        action: "#",
                        method: "post",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "name",
                                onChange: onChangeInputName,
                                value: name,
                                className: (CallBack_module_default()).search__input,
                                type: "text",
                                placeholder: "Ваше имя"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "phone",
                                value: phone,
                                onChange: onChangeInputPhone,
                                className: (CallBack_module_default()).search__input,
                                type: "tel",
                                placeholder: "Ваш номер телефона"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (CallBack_module_default()).callback__button,
                                type: "submit",
                                children: "Отправить"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const CallBack_CallBack = (CallBack);

;// CONCATENATED MODULE: ./components/CallBack/index.js



/***/ }),

/***/ 3271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Communicate_Communicate)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Communicate/Communicate.module.css
var Communicate_module = __webpack_require__(9909);
var Communicate_module_default = /*#__PURE__*/__webpack_require__.n(Communicate_module);
;// CONCATENATED MODULE: ./public/message__icon.svg
/* harmony default export */ const message_icon = ({"src":"/_next/static/media/message__icon.38825e08.svg","height":128,"width":128});
;// CONCATENATED MODULE: ./public/phone__icon.svg
/* harmony default export */ const phone_icon = ({"src":"/_next/static/media/phone__icon.4b079e87.svg","height":485,"width":485});
;// CONCATENATED MODULE: ./public/whatsapp__icon.svg
/* harmony default export */ const whatsapp_icon = ({"src":"/_next/static/media/whatsapp__icon.6728855a.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./public/viber_icon.svg
/* harmony default export */ const viber_icon = ({"src":"/_next/static/media/viber_icon.c73350d2.svg","height":128,"width":128});
// EXTERNAL MODULE: ./public/x.svg
var x = __webpack_require__(2144);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Communicate/Communicate.jsx
// хрень справа снизу с соц сетями











const Communicate = ()=>{
    // делаем развертывание при клике
    const [Active, setActive] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Communicate_module_default()).communicate,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: Active ? (Communicate_module_default()).none : (Communicate_module_default()).call,
                    children: "Связаться"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    onClick: ()=>setActive(!Active),
                    className: external_classnames_default()((Communicate_module_default()).message, (Communicate_module_default()).pulse),
                    src: Active ? x/* default */.Z : message_icon,
                    alt: "message"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/Link",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: phone_icon,
                            alt: "phone",
                            className: external_classnames_default()((Communicate_module_default()).phone, Active ? (Communicate_module_default()).active__phone : null)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: whatsapp_icon,
                            alt: "whatsapp",
                            className: external_classnames_default()((Communicate_module_default()).whatsapp, Active ? (Communicate_module_default()).active__whats : null)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: viber_icon,
                            alt: "viber",
                            className: external_classnames_default()((Communicate_module_default()).viber, Active ? (Communicate_module_default()).active__viber : null)
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Communicate_Communicate = (Communicate);

;// CONCATENATED MODULE: ./components/Communicate/index.js



/***/ }),

/***/ 5180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Footer_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(8253);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./public/flower-svgrepo-com.svg
var flower_svgrepo_com = __webpack_require__(4922);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./pages/PrivacyPolicy/index.js
var PrivacyPolicy = __webpack_require__(6475);
// EXTERNAL MODULE: ./pages/PaymentTerms/index.js
var PaymentTerms = __webpack_require__(1766);
// EXTERNAL MODULE: ./pages/TermsOfReturn/index.js
var TermsOfReturn = __webpack_require__(363);
// EXTERNAL MODULE: ./pages/Home/index.js
var Home = __webpack_require__(5663);
;// CONCATENATED MODULE: ./router/routerConfigFooter.js





const routesConfigFooter = [
    {
        title: "Главная",
        path: "/",
        element: /*#__PURE__*/ jsx_runtime_.jsx(Home["default"], {})
    },
    {
        title: "Политика конфиденциальности",
        path: "/PrivacyPolicy",
        element: /*#__PURE__*/ jsx_runtime_.jsx(PrivacyPolicy["default"], {})
    },
    {
        title: "Условия оплаты",
        path: "/PaymentTerms",
        element: /*#__PURE__*/ jsx_runtime_.jsx(PaymentTerms["default"], {})
    },
    {
        title: "Условия возрата товара",
        path: "/TermsOfReturn",
        element: /*#__PURE__*/ jsx_runtime_.jsx(TermsOfReturn["default"], {})
    }
];
/* harmony default export */ const routerConfigFooter = (routesConfigFooter);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Footer/Footer.jsx








const Footer = ()=>{
    const { pathname  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).footer,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Footer_module_default()).links,
                    children: routerConfigFooter.map(({ title , path , element  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: external_classnames_default()((Footer_module_default()).link, pathname === path ? (Footer_module_default()).active : null),
                            href: path,
                            children: title
                        }, title))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Footer_module_default()).img,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (Footer_module_default()).logo__img,
                        src: flower_svgrepo_com/* default */.Z,
                        alt: "logo"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Footer/index.js



/***/ }),

/***/ 1690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3397);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var router_routerConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9107);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var public_flower_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4922);
/* harmony import */ var public_inst_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3554);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_CallBack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([router_routerConfig__WEBPACK_IMPORTED_MODULE_3__]);
router_routerConfig__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Header = ()=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    // тут переменная отвечает за модальное окно
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    const callBackActive = ()=>{
        setActive(!active);
        console.log(active);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().nav),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().logo),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().logo__img),
                            src: public_flower_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().header__content),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().links),
                                children: router_routerConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"].map */ .Z.map(({ title , path , element  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().link), pathname === path ? (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().active) : null),
                                        href: path,
                                        children: title
                                    }, title))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().links__social),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "tel:+7 999 999 99 99",
                                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().phone),
                                        children: "+7 999 999 99 99"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().logo__instag),
                                        href: "/Link",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().logo__inst),
                                            src: public_inst_icon_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                            alt: "instagramm"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>callBackActive(),
                                            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_10___default().callback),
                                            children: "Обратный звонок"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            active && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CallBack__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                active: active,
                setActive: setActive
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2665:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__]);
_Header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5427:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5180);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2665);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_2__]);
_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Product_Product)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/Product/Product.module.css
var Product_module = __webpack_require__(6127);
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);
;// CONCATENATED MODULE: ./public/paket_svg.svg
/* harmony default export */ const paket_svg = ({"src":"/_next/static/media/paket_svg.783dc1ca.svg","height":800,"width":800});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Product/Product.jsx









const Product = ()=>{
    // из стора айтемы и общая цена
    const { items , totalPrice  } = (0,external_react_redux_.useSelector)((state)=>state.card);
    // видимость компонента
    const [visible, setVisible] = (0,external_react_.useState)(false);
    // общее кол-во товаров
    const [count, setCount] = (0,external_react_.useState)(0);
    // асинхронно получаем count, так как че-то с гидрацией не так
    (0,external_react_.useEffect)(()=>{
        const totalCount = items.reduce((sum, items)=>sum + items.count, 0);
        setCount(totalCount);
    }, [
        items,
        totalPrice
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: count ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            onMouseEnter: ()=>setVisible(true),
            onMouseLeave: ()=>setVisible(false),
            className: external_classnames_default()(visible ? (Product_module_default()).products_none : (Product_module_default()).products),
            href: "/Card",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Product_module_default()).products_raspolo,
                children: [
                    visible ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Product_module_default()).totalPrice,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: (Product_module_default()).p,
                            children: [
                                "=",
                                totalPrice,
                                "р."
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Product_module_default()).visible,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: (Product_module_default()).paket_icon,
                                src: paket_svg,
                                alt: "Cart"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (Product_module_default()).link,
                                children: [
                                    " ",
                                    count,
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            })
        }) : null
    });
};
/* harmony default export */ const Product_Product = (Product); // useEffect(() => {
 //   const data = localStorage.getItem('my_card')
 //   if(data){
 //     setTest(JSON.parse(data))
 //   }
 // }, [])
 // useEffect(() => {
 //   localStorage.setItem('my_card',JSON.stringify(items))
 //   const totalCount = items.reduce((sum,items)=> sum+items.count,0)
 //   setCount(totalCount)
 //   console.log(test);
 // }, [])

;// CONCATENATED MODULE: ./components/Product/index.js



/***/ }),

/***/ 7385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Contacts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1653);



/***/ }),

/***/ 5077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Gallery__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6173);



/***/ }),

/***/ 5663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1172);



/***/ }),

/***/ 1766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _PaymentTerms__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PaymentTerms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7812);



/***/ }),

/***/ 6475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _PrivacyPolicy__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PrivacyPolicy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2603);



/***/ }),

/***/ 1694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Shop__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9519);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Shop__WEBPACK_IMPORTED_MODULE_0__]);
_Shop__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TermsOfReturn__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TermsOfReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5443);



/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5427);
/* harmony import */ var components_Communicate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3271);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1526);
/* harmony import */ var components_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5620);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__, store_store__WEBPACK_IMPORTED_MODULE_5__]);
([components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__, store_store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
        store: store_store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Communicate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Product__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1694);
/* harmony import */ var _pages_Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5077);
/* harmony import */ var _pages_Contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7385);
/* harmony import */ var pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5663);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_Shop__WEBPACK_IMPORTED_MODULE_1__]);
_pages_Shop__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const routesConfig = [
    {
        title: "На главную",
        path: "/",
        element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_Home__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    },
    {
        title: "Каталог",
        path: "/Shop",
        element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_Shop__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    },
    {
        title: "Галерея",
        path: "/Gallery",
        element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_Gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    },
    {
        title: "Контакты",
        path: "/Contacts",
        element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_Contacts__WEBPACK_IMPORTED_MODULE_3__["default"], {})
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routesConfig);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_cardSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slices_cardSlice__WEBPACK_IMPORTED_MODULE_1__]);
_slices_cardSlice__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        card: _slices_cardSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (store)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 5807:
/***/ ((module) => {

"use strict";
module.exports = require("next-reveal");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8782:
/***/ ((module) => {

"use strict";
module.exports = require("react-content-loader");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [943,676,664,675,526,625,172,603,519,173,812,443,653], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();