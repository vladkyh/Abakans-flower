exports.id = 172;
exports.ids = [172];
exports.modules = {

/***/ 8882:
/***/ ((module) => {

// Exports
module.exports = {
	"byket": "Byket_byket__A6flW",
	"byket__title": "Byket_byket__title__w4S1s",
	"byket__text": "Byket_byket__text__LX_jo",
	"byket__button": "Byket_byket__button__WgakK"
};


/***/ }),

/***/ 4260:
/***/ ((module) => {

// Exports
module.exports = {
	"florist": "CallFlorist_florist__wbmby",
	"florist__title": "CallFlorist_florist__title__KymIR",
	"florist__text": "CallFlorist_florist__text__UbeNk",
	"florist__button": "CallFlorist_florist__button__dw1U1"
};


/***/ }),

/***/ 9134:
/***/ ((module) => {

// Exports
module.exports = {
	"right": "Carousel_right__mXufD",
	"left": "Carousel_left__7trxz",
	"carousel": "Carousel_carousel__RS0Ls",
	"carousel__content": "Carousel_carousel__content__WZSMh",
	"carousel__img": "Carousel_carousel__img__e_uoY",
	"goodbay": "Carousel_goodbay__7ZHY2"
};


/***/ }),

/***/ 430:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "HomeHero_hero__r7sTa",
	"hero__title": "HomeHero_hero__title__Wgoqy",
	"hero__strong": "HomeHero_hero__strong__EcWB_",
	"hero__p": "HomeHero_hero__p__SU7Cu",
	"button__sell": "HomeHero_button__sell__zk7J7",
	"button__kat": "HomeHero_button__kat__XPBSo",
	"hero__buttons": "HomeHero_hero__buttons__wRDir",
	"background__black": "HomeHero_background__black__qQm_m",
	"video": "HomeHero_video__5p__j"
};


/***/ }),

/***/ 8610:
/***/ ((module) => {

// Exports
module.exports = {
	"why": "HomeWhy_why__yjyRi",
	"why__text": "HomeWhy_why__text__Pfv4P"
};


/***/ }),

/***/ 6501:
/***/ ((module) => {

// Exports
module.exports = {
	"homewhy": "Home_homewhy__Gv0zL",
	"homewhy__title": "Home_homewhy__title__S8HJO",
	"carousel": "Home_carousel__3CKsD"
};


/***/ }),

/***/ 1172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home_Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/animate.css/animate.css
var animate = __webpack_require__(5544);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Home/HomeHero/HomeHero.module.css
var HomeHero_module = __webpack_require__(430);
var HomeHero_module_default = /*#__PURE__*/__webpack_require__.n(HomeHero_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Home/HomeHero/HomeHero.jsx




const HomeHero = ()=>{
    const videoRef = (0,external_react_.useRef)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (HomeHero_module_default()).hero,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("video", {
                ref: videoRef,
                autoPlay: true,
                loop: true,
                muted: true,
                className: (HomeHero_module_default()).video,
                children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                    src: "./mainBackgound.mp4",
                    type: "video/mp4"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (HomeHero_module_default()).background__black
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: (HomeHero_module_default()).hero__title,
                children: [
                    "Горшечные цветы в",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " Абакане"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                className: (HomeHero_module_default()).hero__strong,
                children: [
                    "Эффектная доставка цветков в крафтовой коробке на воде",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " Бесплатная доставка"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (HomeHero_module_default()).hero__p,
                children: "Конверт с подкормкой и рекомендациями в подарок к каждому цветку"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (HomeHero_module_default()).hero__buttons,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Shop",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (HomeHero_module_default()).button__kat,
                            children: "Каталог"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Link",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (HomeHero_module_default()).button__sell,
                            children: "Заказать индивидуальный цветок"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const HomeHero_HomeHero = (HomeHero);

;// CONCATENATED MODULE: ./components/Home/HomeHero/index.js


// EXTERNAL MODULE: ./utils/MetaTags.jsx
var MetaTags = __webpack_require__(4526);
// EXTERNAL MODULE: ./pages/Home/Home.module.css
var Home_module = __webpack_require__(6501);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "next-reveal"
var external_next_reveal_ = __webpack_require__(5807);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Home/HomeWhy/HomeWhy.module.css
var HomeWhy_module = __webpack_require__(8610);
var HomeWhy_module_default = /*#__PURE__*/__webpack_require__.n(HomeWhy_module);
;// CONCATENATED MODULE: ./components/Home/HomeWhy/HomeWhy.jsx



const HomeWhy = ({ title , text , img  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (HomeWhy_module_default()).why,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: (HomeWhy_module_default()).why__img,
                width: 200,
                height: 200,
                src: img,
                alt: "svg-шка"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (HomeWhy_module_default()).why__title,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (HomeWhy_module_default()).why__text,
                children: text
            })
        ]
    });
};
/* harmony default export */ const HomeWhy_HomeWhy = (HomeWhy);

;// CONCATENATED MODULE: ./components/Home/HomeWhy/index.js


// EXTERNAL MODULE: ./components/Home/CallFlorist/CallFlorist.module.css
var CallFlorist_module = __webpack_require__(4260);
var CallFlorist_module_default = /*#__PURE__*/__webpack_require__.n(CallFlorist_module);
;// CONCATENATED MODULE: ./components/Home/CallFlorist/CallFlorist.jsx



const CallFlorist = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CallFlorist_module_default()).florist,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (CallFlorist_module_default()).florist__title,
                children: "Свяжитесь напрямую с флористом"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: (CallFlorist_module_default()).florist__text,
                children: [
                    "Узнайте подробности об актуальных цветах ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " и оформите заказ прямо в WhatsApp"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/Link",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (CallFlorist_module_default()).florist__button,
                    children: "Перейти в WhatsApp"
                })
            })
        ]
    });
};
/* harmony default export */ const CallFlorist_CallFlorist = (CallFlorist);

;// CONCATENATED MODULE: ./components/Home/CallFlorist/index.js


// EXTERNAL MODULE: ./components/Home/Byket/Byket.module.css
var Byket_module = __webpack_require__(8882);
var Byket_module_default = /*#__PURE__*/__webpack_require__.n(Byket_module);
;// CONCATENATED MODULE: ./components/Home/Byket/Byket.jsx
// хрень про букеты на главной



const Byket = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Byket_module_default()).byket,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Byket_module_default()).byket__title,
                children: "Индивидуальный цветок по Вашим пожеланиям"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: (Byket_module_default()).byket__text,
                children: [
                    "Огромный ассортимент цветов в нашей студии обновляется несколько раз в неделю.",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "Наши флористы любят проявлять творчество и учитывать все ваши пожелания в",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " индивидуальных букетах",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "Заполните форму по кнопке ниже, чтобы заказать букет по Вашему бюджету и",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " пожеланиям. Наш флорист свяжется удобным для Вас способом, отправит ссылку для",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " оплаты и выполнит заказ"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/Link",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (Byket_module_default()).byket__button,
                    children: "Заказать индивидуальный цветок"
                })
            })
        ]
    });
};
/* harmony default export */ const Byket_Byket = (Byket);

;// CONCATENATED MODULE: ./components/Home/Byket/index.js


// EXTERNAL MODULE: ./components/Home/Carousel/Carousel.module.css
var Carousel_module = __webpack_require__(9134);
var Carousel_module_default = /*#__PURE__*/__webpack_require__.n(Carousel_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Home/Carousel/Carousel.jsx





const Carousel = ()=>{
    // тут тупо логика слайдера, че еще сказать, хз
    const slider = [
        {
            id: 1,
            url: "/slider/slider_1.jpg"
        },
        {
            id: 2,
            url: "/slider/slider_2.jpg"
        },
        {
            id: 3,
            url: "/slider/slider_3.jpg"
        },
        {
            id: 4,
            url: "/slider/slider_4.jpg"
        },
        {
            id: 5,
            url: "/slider/slider_5.jpg"
        }
    ];
    const [slide, setSlide] = (0,external_react_.useState)(0);
    const [anima, setAnima] = (0,external_react_.useState)(false);
    const prevSlide = ()=>{
        setAnima(true);
        setTimeout(()=>{
            const isFirstSlide = slide === 0;
            const newIndex = isFirstSlide ? slider.length - 1 : slide - 1;
            setSlide(newIndex);
            setAnima(false);
        }, 100);
    };
    const nextSlide = ()=>{
        setAnima(true);
        setTimeout(()=>{
            const isLastSlide = slide === slider.length - 1;
            const newIndex = isLastSlide ? 0 : slide + 1;
            setSlide(newIndex);
            setAnima(false);
        }, 100);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Carousel_module_default()).carousel,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Carousel_module_default()).carousel__content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Carousel_module_default()).left,
                        onClick: ()=>prevSlide()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: external_classnames_default()((Carousel_module_default()).carousel__img, anima ? (Carousel_module_default()).goodbay : null),
                        src: slider[slide].url,
                        width: 900,
                        height: 1000,
                        alt: "image1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Carousel_module_default()).right,
                        onClick: ()=>nextSlide()
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Carousel_Carousel = (Carousel);

;// CONCATENATED MODULE: ./components/Home/Carousel/index.js


;// CONCATENATED MODULE: ./pages/Home/Home.jsx










const Home = ()=>{
    const homeWhy = [
        {
            id: 1,
            title: "Только свежие цветы",
            text: "Мы заботимся о клиентах, поэтому выращиваем цветы премиального качества",
            img: "/flower.svg"
        },
        {
            id: 2,
            title: "Фото до доставки",
            text: "Отправим фото цветка сразу после сборки. Вы сможете внести корректировки и быть уверенны, что цветок идеален!",
            img: "/photo.svg"
        },
        {
            id: 3,
            title: "Бесплатная доставка",
            text: "Действует на заказы от 3000 руб. в пределах города",
            img: "/geolockation.svg"
        },
        {
            id: 4,
            title: "Подарок к каждому горшочку",
            text: "Рекомендации по уходу и подкормка в стильном фирменном конверте",
            img: "/prize.svg"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MetaTags/* default */.Z, {
                title: "Магазин цветов в Абакане"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).home,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HomeHero_HomeHero, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_next_reveal_.RevealWrapper, {
                        rotate: {
                            x: 12,
                            y: 40,
                            z: 0
                        },
                        origin: "left",
                        delay: 500,
                        duration: 1000,
                        viewOffset: {
                            top: 25,
                            right: 0,
                            bottom: 10,
                            left: 5
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Home_module_default()).carousel,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Carousel_Carousel, {})
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_reveal_.RevealWrapper, {
                        rotate: {
                            x: 12,
                            y: 40,
                            z: 0
                        },
                        origin: "right",
                        delay: 500,
                        duration: 1000,
                        viewOffset: {
                            top: 55,
                            right: 0,
                            bottom: 10,
                            left: 5
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Home_module_default()).homewhy__title,
                                children: "Почему уже более 1000 клиентов выбрали нас"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (Home_module_default()).homewhy,
                                children: homeWhy.map(({ title , text , img , id  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (Home_module_default()).homewhy__li,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(HomeWhy_HomeWhy, {
                                            title: title,
                                            text: text,
                                            img: img
                                        })
                                    }, id))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_next_reveal_.RevealWrapper, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CallFlorist_CallFlorist, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_next_reveal_.RevealWrapper, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Byket_Byket, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Home_Home = (Home);


/***/ }),

/***/ 5544:
/***/ (() => {



/***/ })

};
;