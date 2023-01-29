exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 197:
/***/ ((module) => {

// Exports
module.exports = {
	"callback": "CardOrder_callback__amGN0",
	"callback__title": "CardOrder_callback__title__pOUEE",
	"callback__text": "CardOrder_callback__text__k2mXb",
	"callback__input": "CardOrder_callback__input___5lku",
	"callback__p": "CardOrder_callback__p__VQpbk",
	"callback__button": "CardOrder_callback__button__R56OB",
	"search__input": "CardOrder_search__input__QgIRK",
	"close": "CardOrder_close__8PlvF",
	"search__svg_close": "CardOrder_search__svg_close__W7pmo",
	"full_screen": "CardOrder_full_screen__U_S8q",
	"checkbox": "CardOrder_checkbox__k2cjT",
	"checkbox__input": "CardOrder_checkbox__input__0p_gw",
	"checkbox__i": "CardOrder_checkbox__i__LBIx_",
	"checkbox__in": "CardOrder_checkbox__in__v4U_2"
};


/***/ }),

/***/ 4815:
/***/ ((module) => {

// Exports
module.exports = {
	"total": "TotalInfo_total__PMYxb",
	"card__price": "TotalInfo_card__price__mEiDy",
	"card__count": "TotalInfo_card__count__mDMRo",
	"card__dost": "TotalInfo_card__dost__ukq_T",
	"card__dost__choose": "TotalInfo_card__dost__choose__6Vrul",
	"card__button": "TotalInfo_card__button__KAju8"
};


/***/ }),

/***/ 2144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/x.95498601.svg","height":16,"width":16});

/***/ }),

/***/ 7303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TotalInfo_TotalInfo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/Card/TotalInfo/TotalInfo.module.css
var TotalInfo_module = __webpack_require__(4815);
var TotalInfo_module_default = /*#__PURE__*/__webpack_require__.n(TotalInfo_module);
// EXTERNAL MODULE: ./components/CardOrder/CardOrder.module.css
var CardOrder_module = __webpack_require__(197);
var CardOrder_module_default = /*#__PURE__*/__webpack_require__.n(CardOrder_module);
// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__(5452);
// EXTERNAL MODULE: ./public/x.svg
var x = __webpack_require__(2144);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/CardOrder/CardOrder.jsx






const CardOrder = ({ active , setActive  })=>{
    const [name, setName] = (0,external_react_.useState)("");
    const [phone, setPhone] = (0,external_react_.useState)("");
    const [visible, setVisible] = (0,external_react_.useState)(true);
    const focusCall = (0,external_react_.useRef)();
    const focusOutside = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (focusOutside.current && focusOutside.current.contains(event.target)) {
                setActive(false);
                console.log(active);
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
                className: (CardOrder_module_default()).full_screen
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: focusCall,
                className: visible ? (CardOrder_module_default()).callback : "display__none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (CardOrder_module_default()).close,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            onClick: ()=>closeCall(),
                            className: (CardOrder_module_default()).search__svg_close,
                            src: x/* default */.Z,
                            alt: "поиск"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (CardOrder_module_default()).callback__title,
                        children: "Заказать обратный звонок"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (CardOrder_module_default()).callback__text,
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
                                className: (CardOrder_module_default()).search__input,
                                type: "text",
                                placeholder: "Ваше имя"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "phone",
                                value: phone,
                                onChange: onChangeInputPhone,
                                className: (CardOrder_module_default()).search__input,
                                type: "tel",
                                placeholder: "Ваш номер телефона"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (CardOrder_module_default()).checkbox,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: "Доставка (бесплатно при заказе от 3000)"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (CardOrder_module_default()).checkbox__input,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "checkbox",
                                                name: "scales"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                for: "scales",
                                                children: "Самовывоз"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (CardOrder_module_default()).checkbox__i,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "checkbox",
                                                name: "scales"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                for: "scales",
                                                children: "Доставка курьером по Новосибирску"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (CardOrder_module_default()).checkbox__in,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "checkbox",
                                                name: "scales"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                for: "scales",
                                                children: "Доставка курьером по хакасии"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "name",
                                onChange: onChangeInputName,
                                value: name,
                                className: (CardOrder_module_default()).search__input,
                                type: "text",
                                placeholder: "Дата получения или доставки"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "Подробности для доставки (при необходимости) "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "name",
                                onChange: onChangeInputName,
                                value: name,
                                className: (CardOrder_module_default()).search__input,
                                type: "text",
                                placeholder: ""
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "Добавьте текст который мы напишем на открытке "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                name: "comment",
                                cols: "30",
                                rows: "10"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: (CardOrder_module_default()).callback__button,
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
/* harmony default export */ const CardOrder_CardOrder = (CardOrder);

;// CONCATENATED MODULE: ./components/CardOrder/index.js


;// CONCATENATED MODULE: ./pages/Card/TotalInfo/TotalInfo.jsx
// карточка в корзине справа




const TotalInfo = ({ price , count  })=>{
    const [active, setActive] = (0,external_react_.useState)(false);
    const callBackActive = ()=>{
        setActive(!active);
        console.log(active);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TotalInfo_module_default()).total,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TotalInfo_module_default()).card__price,
                        children: [
                            "Общая цена:",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    price,
                                    "р."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TotalInfo_module_default()).card__count,
                        children: [
                            "Всего товаров:",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    count,
                                    "шт."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (TotalInfo_module_default()).card__dost,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: (TotalInfo_module_default()).card__dost,
                                children: "Доставка: "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (TotalInfo_module_default()).card__dost__choose,
                                children: "Выбрать адрес доставки"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>callBackActive(),
                            className: (TotalInfo_module_default()).card__button,
                            children: "Заказать"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (TotalInfo_module_default()).card__count,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "checkbox"
                                }),
                                "Согласен с условиями Правил пользования ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                " торговой площадкой и правилами возврата"
                            ]
                        })
                    })
                ]
            }),
            active && /*#__PURE__*/ jsx_runtime_.jsx(CardOrder_CardOrder, {
                active: active,
                setActive: setActive
            })
        ]
    });
};
/* harmony default export */ const TotalInfo_TotalInfo = (TotalInfo);


/***/ })

};
;