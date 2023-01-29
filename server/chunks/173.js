exports.id = 173;
exports.ids = [173];
exports.modules = {

/***/ 9796:
/***/ ((module) => {

// Exports
module.exports = {
	"gallery": "Gallery_gallery__YV0uX",
	"gallery__ul": "Gallery_gallery__ul__eQ962",
	"gallery__li": "Gallery_gallery__li___EH5S"
};


/***/ }),

/***/ 6173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_MetaTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4526);
/* harmony import */ var _Gallery_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9796);
/* harmony import */ var _Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5807);
/* harmony import */ var next_reveal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_reveal__WEBPACK_IMPORTED_MODULE_4__);
// коряво выглядит, но креатива хватило только на такое






const Gallery = ()=>{
    // много изображений 
    const img = [
        {
            id: 1,
            url: "https://media.istockphoto.com/id/173868486/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%BA.jpg?s=612x612&w=is&k=20&c=u9ojOBpiqY02JKyrBxQkej1MsSft2RWov1gGJHRVaKo="
        },
        {
            id: 2,
            url: "https://media.istockphoto.com/id/519687055/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D0%BE%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE%D1%80%D1%88%D0%BE%D0%BA-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=1024x1024&w=is&k=20&c=d0-83GrIydsG_3d-zXRva8NQx1d9rTsCj7myOtG5BHE="
        },
        {
            id: 3,
            url: "https://media.istockphoto.com/id/463123467/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2-%D0%B3%D0%BE%D1%80%D1%88%D0%BE%D0%BA.jpg?s=1024x1024&w=is&k=20&c=bsctSN_zycWRuMPXymWFxmP5qv2xYCa2SUvblEhqJd4="
        },
        {
            id: 4,
            url: "https://media.istockphoto.com/id/173868486/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%BA.jpg?s=1024x1024&w=is&k=20&c=c4lD6HsK3AX3TZLMxcVFlE5EZid6fWRUeT-hGp_LEm4="
        },
        {
            id: 5,
            url: "https://media.istockphoto.com/id/1372896722/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%BE%D1%80%D1%88%D0%B5%D1%87%D0%BD%D0%BE%D0%B5-%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=1024x1024&w=is&k=20&c=5ORk78aJ49BvmLBEePnJvQNqYY_u1fxzJS_cCK_RCPw="
        },
        {
            id: 6,
            url: "https://media.istockphoto.com/id/1330360581/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%B3%D0%BE%D1%80%D1%88%D0%BA%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=1024x1024&w=is&k=20&c=_WgFQslZI1jFwgVyZle3QQleFxws6kqYhoFM2zjbebc="
        },
        {
            id: 7,
            url: "https://media.istockphoto.com/id/155161126/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B3%D0%BE%D1%80%D1%82%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F-%D0%B2-%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9-%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=ZjAIt_VCpsTuo5iAbk_WiAYrUWMJB1cUD2uLutPT3UI="
        },
        {
            id: 8,
            url: "https://media.istockphoto.com/id/1380361370/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%B1%D0%B5%D1%82%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B2%D0%B0%D0%B7%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=1024x1024&w=is&k=20&c=I3OqzaXqqrCFyYdJe1UMzNkkBtuYeVUEHOKcQAjMck8="
        },
        {
            id: 9,
            url: "https://media.istockphoto.com/id/1254913138/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%B8%D0%B3%D0%B0%D0%BD%D1%82%D1%81%D0%BA%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-monstera-%D0%B2-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%BC-%D0%B3%D0%BE%D1%80%D1%88%D0%BA%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81-%D0%BE%D1%82%D1%81%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BF%D1%83%D1%82%D0%B8.jpg?s=1024x1024&w=is&k=20&c=QZgKIFqhgSysV2uWQCxTKtDHMNRlLpynXqnURzM-G4o="
        },
        {
            id: 10,
            url: "https://media.istockphoto.com/id/1250416514/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BC%D0%B5%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D1%8F-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B5-%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B9-sansevieria-%D0%BD%D0%B0-%D1%87%D0%B5%D1%80%D0%BD%D0%BE-%D0%B1%D0%B5%D0%BB%D1%8B%D1%85.jpg?s=1024x1024&w=is&k=20&c=FeXiFraKkJmlrk3bxdDyRRAIoVutOSgAktEmROPoHEM="
        },
        {
            id: 11,
            url: "https://media.istockphoto.com/id/956369698/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BF%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D0%B2-%D0%B3%D0%BE%D1%80%D1%88%D0%BA%D0%B5.jpg?s=1024x1024&w=is&k=20&c=mjLQxGl4cZ_BjYtUg_LtvwY2SzZxtQxtDs4Q5ItxAkk="
        },
        {
            id: 12,
            url: "https://media.istockphoto.com/id/1144381187/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE-%D0%BC%D0%BE%D0%BD%D1%81%D1%82%D1%80%D0%B0-%D0%BF%D0%BE%D1%81%D0%B0%D0%B4%D0%B8%D0%BB%D0%B8-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D0%BA%D0%B5%D1%80%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B3%D0%BE%D1%80%D1%88%D0%BE%D0%BA-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-3d.jpg?s=1024x1024&w=is&k=20&c=-g5yYdlcBLA6Nm4hUPZ3i1RcJYRipgwbBJYb9JJryfI="
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(utils_MetaTags__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Фотки"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default().gallery),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default().gallery__ul),
                    children: img.map(({ id , url  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_Gallery_module_css__WEBPACK_IMPORTED_MODULE_5___default().gallery__li),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_reveal__WEBPACK_IMPORTED_MODULE_4__.RevealWrapper, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: url,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        width: 400,
                                        height: 500,
                                        src: url,
                                        alt: "flower"
                                    })
                                })
                            })
                        }, id))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);


/***/ })

};
;