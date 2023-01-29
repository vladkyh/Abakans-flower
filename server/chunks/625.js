exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 1871:
/***/ ((module) => {

// Exports
module.exports = {
	"flower__bybutton": "ByButton_flower__bybutton__2fz3U",
	"flower__bybutton__plusminus": "ByButton_flower__bybutton__plusminus__3q7EE",
	"flower__count": "ByButton_flower__count__pUCHh"
};


/***/ }),

/***/ 1902:
/***/ ((module) => {

// Exports
module.exports = {
	"card__items": "CardItems_card__items__dWi6v",
	"card__info": "CardItems_card__info__7mlpz",
	"card__name": "CardItems_card__name__WEnjD",
	"card__item__price": "CardItems_card__item__price__Vidy9",
	"card__imgdiv": "CardItems_card__imgdiv__8ivjt",
	"flower__img": "CardItems_flower__img__Qfg_q"
};


/***/ }),

/***/ 1091:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ByButton_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1871);
/* harmony import */ var _ByButton_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ByButton_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_slices_cardSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_slices_cardSlice__WEBPACK_IMPORTED_MODULE_1__, hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__]);
([store_slices_cardSlice__WEBPACK_IMPORTED_MODULE_1__, hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const ByButton = ({ text , id , name , price , count , desriptoin , photo  })=>{
    const { items  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.card);
    const cardItem = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.card.items.find((obj)=>obj.id === id));
    const addedCount = cardItem ? cardItem.count : 0;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const onCLickAdd = ()=>{
        const item = {
            id,
            name,
            price,
            desriptoin,
            count,
            photo
        };
        dispatch((0,store_slices_cardSlice__WEBPACK_IMPORTED_MODULE_1__/* .addProduct */ .gK)(item));
    };
    const onClickMinus = ()=>{
        dispatch((0,store_slices_cardSlice__WEBPACK_IMPORTED_MODULE_1__/* .minusProduct */ .R0)({
            id
        }));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const json = JSON.stringify(items);
        (0,hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("yesyes", json);
    }, [
        items
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: addedCount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_ByButton_module_css__WEBPACK_IMPORTED_MODULE_5___default().flower__addedButton),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_ByButton_module_css__WEBPACK_IMPORTED_MODULE_5___default().flower__bybutton__plusminus),
                    onClick: onCLickAdd,
                    children: "+"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_ByButton_module_css__WEBPACK_IMPORTED_MODULE_5___default().flower__count),
                    children: addedCount ? addedCount : 0
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_ByButton_module_css__WEBPACK_IMPORTED_MODULE_5___default().flower__bybutton__plusminus),
                    onClick: onClickMinus,
                    children: "-"
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onCLickAdd,
            className: (_ByButton_module_css__WEBPACK_IMPORTED_MODULE_5___default().flower__bybutton),
            children: text
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ByButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ByButton__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ByButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ByButton__WEBPACK_IMPORTED_MODULE_0__]);
_ByButton__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardItems_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1902);
/* harmony import */ var _CardItems_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CardItems_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1116);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_ByButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8088);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__, components_ByButton__WEBPACK_IMPORTED_MODULE_5__]);
([hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__, components_ByButton__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
//  Товар в корзине








const CardItems = ({ id , name , price , count , desriptoin , photo  })=>{
    // берем из стора данные совпадающие с нашими
    const { items  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.card);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const json = JSON.stringify(items);
        (0,hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("yesyes", json);
        console.log(photo);
    }, [
        items
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_CardItems_module_css__WEBPACK_IMPORTED_MODULE_7___default().card__items),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/Shop/${id}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_CardItems_module_css__WEBPACK_IMPORTED_MODULE_7___default().card__imgdiv),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                            className: (_CardItems_module_css__WEBPACK_IMPORTED_MODULE_7___default().flower__img),
                            src: photo,
                            alt: "xz",
                            width: 240,
                            height: 300
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_CardItems_module_css__WEBPACK_IMPORTED_MODULE_7___default().card__info),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_CardItems_module_css__WEBPACK_IMPORTED_MODULE_7___default().card__name),
                            children: name
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_CardItems_module_css__WEBPACK_IMPORTED_MODULE_7___default().card__item__price),
                            children: [
                                "общая цена: ",
                                count * price,
                                "р."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                price,
                                " р."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ByButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            text: "Купить",
                            photo: photo,
                            price: price,
                            id: id,
                            name: name,
                            count: count,
                            desriptoin: desriptoin
                        }, id)
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardItems);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CardItems__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CardItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7206);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CardItems__WEBPACK_IMPORTED_MODULE_0__]);
_CardItems__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7615:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// говорящие названия
// знаю что это не хуки, а просто функции, но ладно уже
const GetCookie = (cookieName)=>{
    const data = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(cookieName);
    return data ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(cookieName)) : [];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetCookie);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const SetCookie = (cookieName, usril)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(cookieName, usril);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetCookie);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 922:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JY": () => (/* binding */ clearProduct),
/* harmony export */   "R0": () => (/* binding */ minusProduct),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gK": () => (/* binding */ addProduct)
/* harmony export */ });
/* unused harmony exports cardSlice, removeProduct */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_CardItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8609);
/* harmony import */ var hooks_getCookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7615);
/* harmony import */ var hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1116);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_CardItems__WEBPACK_IMPORTED_MODULE_1__, hooks_getCookie__WEBPACK_IMPORTED_MODULE_2__, hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__]);
([components_CardItems__WEBPACK_IMPORTED_MODULE_1__, hooks_getCookie__WEBPACK_IMPORTED_MODULE_2__, hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const initialState = {
    totalPrice: (0,hooks_getCookie__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("totalPrice"),
    items: (0,hooks_getCookie__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("yesyes")
};
const cardSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "card",
    initialState,
    reducers: {
        // добавить товар в корзину
        addProduct (state, action) {
            const findItem = state.items.find((obj)=>obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }
            // state.totalPrice 
            state.totalPrice = state.items.reduce((sum, obj)=>{
                const total = obj.count * obj.price + sum;
                (0,hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("totalPrice", total);
                return total;
            }, 0);
        },
        // соответственно минус
        minusProduct (state, action) {
            const findItem = state.items.find((obj)=>obj.id === action.payload.id);
            if (findItem && findItem.count >= 1) {
                findItem.count--;
            }
            state.totalPrice = state.items.reduce((sum, obj)=>{
                const total = obj.count * obj.price + sum;
                (0,hooks_setCookie__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("totalPrice", total);
                return total;
            }, 0);
        },
        // удалить все
        removeProduct (state, action) {
            state.items = state.items.filter((obj)=>obj.id !== action.payload);
        },
        clearProduct (state, action) {
            state.items = [];
            state.totalPrice = 0;
        }
    }
});
const { removeProduct , clearProduct , addProduct , minusProduct  } = cardSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;