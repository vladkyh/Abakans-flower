exports.id = 519;
exports.ids = [519];
exports.modules = {

/***/ 9780:
/***/ ((module) => {

// Exports
module.exports = {
	"flower__li": "Flower_flower__li__HuZhF",
	"flower__card": "Flower_flower__card__I_poY",
	"flower__name": "Flower_flower__name__GMfDy",
	"flower__descr": "Flower_flower__descr__4rxvO",
	"flower__price": "Flower_flower__price__dAcSe",
	"flower__bybutton": "Flower_flower__bybutton__JozQx",
	"flower__bybutton__plusminus": "Flower_flower__bybutton__plusminus__ZQlzl",
	"flower__count": "Flower_flower__count__Tjxpl",
	"flower__imgdiv": "Flower_flower__imgdiv__34821",
	"flower__img": "Flower_flower__img__AqWMu"
};


/***/ }),

/***/ 5483:
/***/ ((module) => {

// Exports
module.exports = {
	"flowers__child": "FlowersInfo_flowers__child__O_yjy",
	"flower__ul": "FlowersInfo_flower__ul__pKRaS"
};


/***/ }),

/***/ 8461:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "Search_search__YnQJu",
	"search__input": "Search_search__input__aszbU",
	"search__svg": "Search_search__svg__KlT7G",
	"search__svg_close": "Search_search__svg_close__D_0fS"
};


/***/ }),

/***/ 1501:
/***/ ((module) => {

// Exports
module.exports = {
	"sort": "Sort_sort__q2NQO",
	"sort__popup": "Sort_sort__popup__OOUyG",
	"sort__li": "Sort_sort__li__r2DQp",
	"active": "Sort_active__tX99S",
	"sort__selected": "Sort_sort__selected__E98AN",
	"sort__ul": "Sort_sort__ul__9QzqN"
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

/***/ 3473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flower_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9780);
/* harmony import */ var _Flower_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Flower_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_ByButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8088);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ByButton__WEBPACK_IMPORTED_MODULE_3__]);
components_ByButton__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Собственно, сама карточка товара





const Flower = ({ id , name , price , count , desriptoin , photo  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            className: (_Flower_module_css__WEBPACK_IMPORTED_MODULE_4___default().flower__li),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/Shop/[id]`,
                    as: `/Shop/${id}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Flower_module_css__WEBPACK_IMPORTED_MODULE_4___default().flower__imgdiv),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: (_Flower_module_css__WEBPACK_IMPORTED_MODULE_4___default().flower__img),
                                src: photo,
                                alt: "xz",
                                width: 300,
                                height: 400
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Flower_module_css__WEBPACK_IMPORTED_MODULE_4___default().flower__card),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Flower_module_css__WEBPACK_IMPORTED_MODULE_4___default().flower__name),
                                    children: name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_Flower_module_css__WEBPACK_IMPORTED_MODULE_4___default().flower__descr),
                                    children: desriptoin
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_Flower_module_css__WEBPACK_IMPORTED_MODULE_4___default().flower__price),
                                    children: [
                                        price,
                                        "  р."
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ByButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    text: "Купить",
                    photo: photo,
                    price: price,
                    id: id,
                    name: name,
                    count: count,
                    desriptoin: desriptoin
                }, id)
            ]
        }, id)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flower);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FlowersInfo_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5483);
/* harmony import */ var _FlowersInfo_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FlowersInfo_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Flower_Flower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3473);
/* harmony import */ var components_Sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3278);
/* harmony import */ var components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5450);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var components_skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6066);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Flower_Flower__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([components_Flower_Flower__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// можно сказать, это страница Shop








const FlowersInfo = ()=>{
    // параметр загрузки
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    // c помощью этой переменной получаем данные
    const [flowers, setFlowers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // параметры фильтрации. sort - задается из компонента sort  и меняет путь запроса
    // а value  отвечает за поисковую строчку
    const [sort, setSort] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "популярности",
        sortType: "category",
        sortTypeDop: "desc"
    });
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function fetchData() {
            // делаем запрос
            const res = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`https://63937275ab513e12c50ec114.mockapi.io/flower?sortBy=${sort.sortType}&order=${sort.sortTypeDop}`);
            // фильтруем запрос
            const filterFlowers = res.data.filter((xz)=>{
                return xz.name.toLowerCase().includes(value.toLowerCase());
            });
            // проверяем на загрузку
            if (res) {
                setIsLoading(false);
            }
            setFlowers(filterFlowers);
        }
        fetchData();
    }, [
        sort,
        value
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_FlowersInfo_module_css__WEBPACK_IMPORTED_MODULE_7___default().flowers__child),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Search__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        value: value,
                        setValue: setValue
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Sort__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        setSort: setSort
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: (_FlowersInfo_module_css__WEBPACK_IMPORTED_MODULE_7___default().flower__ul),
                children: isLoading ? [
                    ...new Array(5)
                ].map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}, index)) : flowers && flowers.map(({ photo , id , name , count , desriptoin , price  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Flower_Flower__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        photo: photo,
                        price: price,
                        id: id,
                        name: name,
                        count: count,
                        desriptoin: desriptoin
                    }, id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlowersInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 877:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _FlowersInfo__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _FlowersInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1280);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FlowersInfo__WEBPACK_IMPORTED_MODULE_0__]);
_FlowersInfo__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Search_Search)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/search.svg
/* harmony default export */ const search = ({"src":"/_next/static/media/search.bea2f3b1.svg","height":53,"width":53});
// EXTERNAL MODULE: ./public/x.svg
var x = __webpack_require__(2144);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Search/Search.module.css
var Search_module = __webpack_require__(8461);
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./components/Search/Search.jsx








const Search = ({ value , setValue  })=>{
    const [valueTime, setvalueTime] = (0,external_react_.useState)("");
    // юзреф для инпута
    const inputRef = (0,external_react_.useRef)();
    const focusInput = ()=>{
        inputRef.current.focus();
        setvalueTime("");
        setValue("");
    };
    // созадем задержку запросов
    const inputTimer = (0,external_react_.useCallback)((0,external_lodash_.debounce)((str)=>{
        setValue(str);
    }, 300), []);
    const onChangeInput = (event)=>{
        setvalueTime(event.target.value);
        inputTimer(event.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Search_module_default()).search,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ref: inputRef,
                onChange: onChangeInput,
                value: valueTime,
                className: (Search_module_default()).search__input,
                type: "text",
                placeholder: "Поиск"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: (Search_module_default()).search__svg,
                src: search,
                alt: "поиск"
            }),
            value && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                onClick: ()=>focusInput(),
                className: (Search_module_default()).search__svg_close,
                src: x/* default */.Z,
                alt: "поиск"
            })
        ]
    });
};
/* harmony default export */ const Search_Search = (Search);

;// CONCATENATED MODULE: ./components/Search/index.js



/***/ }),

/***/ 3278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Sort_Sort)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Sort/Sort.module.css
var Sort_module = __webpack_require__(1501);
var Sort_module_default = /*#__PURE__*/__webpack_require__.n(Sort_module);
;// CONCATENATED MODULE: ./components/Sort/Sort.jsx





const Sort = ({ setSort  })=>{
    const [isVisible, setIsVisible] = (0,external_react_.useState)(false);
    const [activeButton, setActiveButton] = (0,external_react_.useState)(0);
    const sortRef = (0,external_react_.useRef)();
    // контент сортировки
    // передаем все эти значения в flowersinfo для регуляции запроса на mockapi
    const list = [
        {
            name: "популярности",
            sortType: "category",
            sortTypeDop: "desc"
        },
        {
            name: "цене (меньше)",
            sortType: "price",
            sortTypeDop: "ask"
        },
        {
            name: "цене (больше)",
            sortType: "price",
            sortTypeDop: "desc"
        },
        {
            name: "алфавиту",
            sortType: "name",
            sortTypeDop: "ask"
        }
    ];
    const onClickListItem = (i, obj)=>{
        setActiveButton(i);
        setSort(obj);
        console.log(obj);
        setIsVisible(false);
    };
    (0,external_react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (!event.path.includes(sortRef.current)) {
                setIsVisible(false);
            }
        };
        document.body.addEventListener("click", handleClickOutside);
        return ()=>document.body.removeEventListener("click", handleClickOutside);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            ref: sortRef,
            className: (Sort_module_default()).sort,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Sort_module_default()).sort__label,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "Сортировка по: "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Sort_module_default()).sort__selected,
                            onClick: ()=>setIsVisible(!isVisible),
                            children: list[activeButton].name
                        })
                    ]
                }),
                isVisible && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Sort_module_default()).sort__popup,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: (Sort_module_default()).sort__ul,
                        children: list.map((obj, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: ()=>onClickListItem(i, obj),
                                className: activeButton === i ? (Sort_module_default()).active : (Sort_module_default()).sort__li,
                                children: obj.name
                            }, i))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Sort_Sort = (Sort);

;// CONCATENATED MODULE: ./components/Sort/index.js



/***/ }),

/***/ 6066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_2__);



const MyLoader = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_2___default()), {
        speed: 2,
        width: 300,
        height: 601,
        viewBox: "0 0 499 601",
        backgroundColor: "#f3f3f3",
        foregroundColor: "#ecebeb",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "15",
                y: "529",
                rx: "3",
                ry: "3",
                width: "115",
                height: "40"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "14",
                y: "443",
                rx: "3",
                ry: "3",
                width: "88",
                height: "35"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "17",
                y: "491",
                rx: "3",
                ry: "3",
                width: "299",
                height: "20"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "15",
                y: "29",
                rx: "0",
                ry: "0",
                width: "300",
                height: "400"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyLoader);


/***/ }),

/***/ 9519:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_FlowersInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(877);
/* harmony import */ var utils_MetaTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4526);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_FlowersInfo__WEBPACK_IMPORTED_MODULE_1__]);
components_FlowersInfo__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Shop = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(utils_MetaTags__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "Сделать заказ по номеру телефона или whatsapp"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_FlowersInfo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shop);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;