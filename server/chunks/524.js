exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 3070:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__qhcdI",
	"card_li_none": "Card_card_li_none__2tsvW",
	"card_li": "Card_card_li__SirXs",
	"card__title": "Card_card__title__zLvQq",
	"card__ul": "Card_card__ul__Q_T_G",
	"card__button": "Card_card__button__NA0vU"
};


/***/ }),

/***/ 8001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const RemoveCookie = (cookieName, usril)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(cookieName, usril);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveCookie);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_MetaTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4526);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_slices_cardSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(922);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3070);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_CardItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8609);
/* harmony import */ var hooks_removeCookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8001);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TotalInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([store_slices_cardSlice__WEBPACK_IMPORTED_MODULE_4__, components_CardItems__WEBPACK_IMPORTED_MODULE_5__, hooks_removeCookie__WEBPACK_IMPORTED_MODULE_6__]);
([store_slices_cardSlice__WEBPACK_IMPORTED_MODULE_4__, components_CardItems__WEBPACK_IMPORTED_MODULE_5__, hooks_removeCookie__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// страница коризны











const Card = ()=>{
    const { items , totalPrice  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.card);
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.card.items);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const onClickClear = ()=>{
        (0,hooks_removeCookie__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("yesyes");
        dispatch((0,store_slices_cardSlice__WEBPACK_IMPORTED_MODULE_4__/* .clearProduct */ .JY)());
    };
    // передаем данные в корзину
    const [flowers, setFlowers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const test = data;
        if (test) {
            const totalCount = items.reduce((sum, items)=>sum + items.count, 0);
            setCount(totalCount);
            setFlowers(test);
            setPrice(totalPrice);
        }
    }, [
        data,
        totalPrice
    ]);
    // на случай если корзина пуста
    if (!data) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Корзина пуста"
        });
    }
    // Почему carD а не carT? а хрен знает, поздно заметил
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_9___default().card),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(utils_MetaTags__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Корзина"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_9___default().card__title),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_9___default().card__title_zak),
                        children: "Корзина"
                    }),
                    price ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_9___default().card__ul),
                        children: [
                            flowers && flowers.map(({ photo , id , name , count , desriptoin , price  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(count > 0 ? (_Card_module_css__WEBPACK_IMPORTED_MODULE_9___default().card_li) : (_Card_module_css__WEBPACK_IMPORTED_MODULE_9___default().card_li_none)),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CardItems__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        id: id,
                                        name: name,
                                        count: count,
                                        desriptoin: desriptoin,
                                        price: price,
                                        photo: photo
                                    })
                                }, id)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_9___default().card__button),
                                onClick: onClickClear,
                                children: "очистить"
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "корзина пуста"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TotalInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
                price: price,
                count: count
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TotalInfo__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TotalInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7303);



/***/ })

};
;