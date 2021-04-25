(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\DEV-2\wookie\wookie-movies\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movies_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../movies/movie.service */ "APOJ");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








const _c0 = function () { return ["/"]; };
class HeaderComponent {
    constructor(movieService) {
        this.movieService = movieService;
    }
    ngOnInit() { }
    onSearch(serchTerm) {
        this.movieService.searchMovie(serchTerm);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 2, consts: [[1, "header"], ["color", "asscend"], [1, "header__inner"], [1, "header__left"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "routerLink"], ["src", "../../../assets/images/wookie.webp", "alt", "", 1, "header__logo"], [1, "header__name"], [1, "header__right"], [1, "header__search"], ["appearance", "standard"], ["matInput", "", "placeholder", "i.e Pulp Fiction", 3, "keyup.enter"], ["searchInput", ""], ["matSuffix", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Wookie Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function HeaderComponent_Template_input_keyup_enter_13_listener($event) { return ctx.onSearch($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_mat_icon_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx.onSearch(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"]], styles: [".header__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.header__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.header__logo[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n@media screen and (max-width: 991px) {\n  .header__name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFBSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0FBREo7QUFLSTtFQURGO0lBRUksYUFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgJl9faW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgJl9fcmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgfVxyXG5cclxuICAmX19sb2dvIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fbmFtZSB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "3ZAS":
/*!**************************************************************************!*\
  !*** ./src/app/movies/components/movie-slider/movie-slider.component.ts ***!
  \**************************************************************************/
/*! exports provided: MovieSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSliderComponent", function() { return MovieSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/movie", a1]; };
const _c1 = function (a0) { return { id: a0 }; };
function MovieSliderComponent_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, movie_r1.slug))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, movie_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", movie_r1.backdrop, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r1.classification, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", movie_r1.title, " | ", movie_r1.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r1.imdb_rating, " / 10 ");
} }
function MovieSliderComponent_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieSliderComponent_2_ng_template_0_Template, 9, 12, "ng-template", 3);
} }
class MovieSliderComponent {
    constructor() {
        this.slidesPerView = 4.5;
    }
    onResize(event) {
        if (event.target.innerWidth > 991) {
            this.slidesPerView = 4.5;
        }
        else {
            this.slidesPerView = 1;
        }
    }
    ngOnInit() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // true for mobile device
            this.slidesPerView = 1;
        }
        else {
            // false for not mobile device
            this.slidesPerView = 4.5;
        }
    }
}
MovieSliderComponent.ɵfac = function MovieSliderComponent_Factory(t) { return new (t || MovieSliderComponent)(); };
MovieSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieSliderComponent, selectors: [["app-movie-slider"]], hostBindings: function MovieSliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function MovieSliderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { movies: "movies" }, decls: 3, vars: 3, consts: [[1, "movie-slider"], [3, "slidesPerView", "spaceBetween"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [1, "movie-slider__slide", 3, "routerLink", "state"], [3, "src", "alt"], [1, "movie-slider__info", "info"], [1, "movie-slider__info__class"], [1, "movie-slider__info__details"]], template: function MovieSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieSliderComponent_2_Template, 1, 0, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slidesPerView", ctx.slidesPerView)("spaceBetween", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_1__["SwiperSlideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".movie-slider[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.movie-slider__slide[_ngcontent-%COMP%] {\n  display: block;\n  transition: 0.2s all ease;\n  position: relative;\n}\n.movie-slider__slide[_ngcontent-%COMP%]:hover   .movie-slider__info[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.movie-slider__slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.movie-slider__info[_ngcontent-%COMP%] {\n  transition: 0.2s all ease;\n  opacity: 0;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 99%;\n  background: rgba(23, 23, 23, 0.7);\n}\n.movie-slider__info__class[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  font-size: 1.5rem;\n}\n.movie-slider__info__details[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  position: absolute;\n  bottom: 1.5rem;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  line-height: 1.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW92aWUtc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFNO0VBQ0UsVUFBQTtBQUVSO0FBRUk7RUFDRSxXQUFBO0FBQU47QUFHRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGTiIsImZpbGUiOiJtb3ZpZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtc2xpZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICZfX3NsaWRlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgZWFzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAubW92aWUtc2xpZGVyX19pbmZvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2luZm8ge1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgZWFzZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTklO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMywgMjMsIDIzLCAwLjcpO1xyXG5cclxuICAgICZfX2NsYXNzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDFyZW07XHJcbiAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmX19kZXRhaWxzIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "3wmA":
/*!**********************************************************************!*\
  !*** ./src/app/movies/components/no-results/no-results.component.ts ***!
  \**********************************************************************/
/*! exports provided: NoResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoResultsComponent", function() { return NoResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/genre", "Drama"]; };
class NoResultsComponent {
    constructor() { }
    ngOnInit() {
    }
}
NoResultsComponent.ɵfac = function NoResultsComponent_Factory(t) { return new (t || NoResultsComponent)(); };
NoResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoResultsComponent, selectors: [["app-no-results"]], decls: 5, vars: 2, consts: [[1, "no-results"], [3, "routerLink"]], template: function NoResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sorry you couldn't find your movie, We hope it won't cause any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Drama ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".no-results[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm8tcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJuby1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXJlc3VsdHMge1xyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "5qpV":
/*!************************************!*\
  !*** ./src/app/state/app-state.ts ***!
  \************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var _movies_movies_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies/movies.state */ "ln20");

const AppState = [_movies_movies_state__WEBPACK_IMPORTED_MODULE_0__["MoviesState"]];


/***/ }),

/***/ "729U":
/*!******************************************************************************!*\
  !*** ./src/app/movies/components/search-results/search-results.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../movie.service */ "APOJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movie-slider/movie-slider.component */ "3ZAS");







function SearchResultsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-movie-slider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movies_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("movies", movies_r1);
} }
class SearchResultsComponent {
    constructor(movieService, router) {
        this.movieService = movieService;
        this.router = router;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
    }
    ngOnInit() {
        this.movies$ = this.movieService.getSerchResults().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => {
            if (!data.length) {
                this.router.navigate(['no-results']);
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchResultsComponent, selectors: [["app-search-results"]], decls: 2, vars: 3, consts: [["class", "search-results", 4, "ngIf"], [1, "search-results"], [3, "movies"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SearchResultsComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.movies$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_6__["MovieSliderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".search-results[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1yZXN1bHRzIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "8ilY":
/*!*************************************************!*\
  !*** ./src/app/movies/movie/movie.component.ts ***!
  \*************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie.service */ "APOJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/star-rating/star-rating.component */ "FIs3");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");









function MovieComponent_div_0_span_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MovieComponent_div_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MovieComponent_div_0_span_17_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r4 = ctx.$implicit;
    const last_r5 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](actor_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !last_r5);
} }
const _c0 = function (a1) { return ["/genre", a1]; };
function MovieComponent_div_0_mat_chip_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, genre_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", genre_r7, " ");
} }
function MovieComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-star-rating", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Cast: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, MovieComponent_div_0_span_17_Template, 3, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Genres");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, MovieComponent_div_0_mat_chip_22_Template, 2, 4, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", movie_r1.poster, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("review", movie_r1.imdb_rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 10, movie_r1.released_on), " | ", movie_r1.length, " | ", movie_r1.director, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", movie_r1.cast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", movie_r1.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", movie_r1.overview, " ");
} }
class MovieComponent {
    constructor(router, activatedRoute, moviewService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.moviewService = moviewService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.movieSlug = this.activatedRoute.snapshot.params.id;
    }
    ngOnInit() {
        this.movieId = history.state['id'];
        if (this.movieId) {
            this.movie$ = this.moviewService.getMovieById(this.movieId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => {
                if (!data) {
                    this.moviewService.fetchMovies();
                }
            }));
        }
        else {
            this.movie$ = this.getMovieBySlug();
        }
        this.subscription.add(this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivationEnd"];
        }))
            .subscribe((data) => {
            this.movieSlug = data.snapshot.params.id;
            this.movie$ = this.getMovieBySlug();
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    fetchMovies() {
        this.subscription.add(this.moviewService
            .fetchMovies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((data) => !!data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe());
    }
    getMovieBySlug() {
        return this.moviewService.getMovieBySlug(this.movieSlug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => {
            if (!data) {
                this.fetchMovies();
            }
        }));
    }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"])); };
MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], decls: 2, vars: 3, consts: [["class", "movie", 4, "ngIf"], [1, "movie"], [1, "movie__wrap"], [1, "movie__poster"], [3, "src", "alt"], [1, "movie__details"], [1, "movie__rating"], [3, "review"], [1, "movie__title"], [1, "movie__info"], [1, "movie__cast"], [4, "ngFor", "ngForOf"], [1, "movie__genres"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "movie__description"], [4, "ngIf"], [3, "routerLink"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MovieComponent_div_0_Template, 26, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.movie$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_6__["StarRatingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".movie[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.movie__wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  position: relative;\n}\n@media screen and (max-width: 991px) {\n  .movie__wrap[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.movie__poster[_ngcontent-%COMP%] {\n  flex: 1 img;\n  flex-max-width: 100%;\n  margin-right: 2rem;\n}\n.movie__details[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.movie__details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  line-height: 1.1;\n}\n.movie__genres[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.movie__rating[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  font-size: 3rem;\n}\n@media screen and (max-width: 991px) {\n  .movie__rating[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBSkY7SUFLSSxjQUFBO0VBSUo7QUFDRjtBQURFO0VBQ0UsV0FBQTtFQUNFLG9CQUFBO0VBRUYsa0JBQUE7QUFFSjtBQUFFO0VBQ0UsT0FBQTtBQUVKO0FBREk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBR047QUFBRTtFQUNFLG1CQUFBO0FBRUo7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUxGO0lBTUksZ0JBQUE7SUFDQSxtQkFBQTtFQUdKO0FBQ0YiLCJmaWxlIjoibW92aWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAmX193cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcG9zdGVyIHtcclxuICAgIGZsZXg6IDEgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gIH1cclxuICAmX19kZXRhaWxzIHtcclxuICAgIGZsZXg6IDI7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2dlbnJlcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fcmF0aW5nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMS41cmVtO1xyXG4gICAgcmlnaHQ6IDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "APOJ":
/*!*****************************************!*\
  !*** ./src/app/movies/movie.service.ts ***!
  \*****************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/movies/movies.selectors */ "QRZH");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_movies_movies_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/movies/movies.actions */ "DajI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








class MovieService {
    constructor(httpService, store, router) {
        this.httpService = httpService;
        this.store = store;
        this.router = router;
        this.mainUrl = 'https://wookie.codesubmit.io/movies';
        this.searchUrl = 'https://wookie.codesubmit.io/movies?q=';
        this.searchSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getMovie(id) {
        return null;
    }
    getMovies() {
        this._movies = this.store.selectSnapshot(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_1__["MoviesStateSelectors"].movies);
        if (!this._movies.length) {
            return this.fetchMovies();
        }
        else {
            return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_1__["MoviesStateSelectors"].movies);
        }
    }
    fetchMovies() {
        const headers = { Authorization: 'Bearer Wookie2019' };
        return this.httpService.get(this.mainUrl, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((data) => !!data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data['movies'];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => {
            let moviesByGenre = {};
            this.store.dispatch(new _state_movies_movies_actions__WEBPACK_IMPORTED_MODULE_3__["SetMovies"](data));
            data.forEach((movie) => {
                movie.genres.forEach((genre) => {
                    if (moviesByGenre[genre] && moviesByGenre[genre].length) {
                        moviesByGenre[genre].push(movie);
                    }
                    else {
                        moviesByGenre[genre] = [movie];
                    }
                });
            });
            this.setMoviesByGenre(moviesByGenre);
        }));
    }
    getMovieBySlug(slug) {
        return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_1__["MoviesStateSelectors"].movies).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((movies) => {
            const movie = movies.find((movie) => {
                return movie.slug === slug;
            });
            return movie;
        }));
    }
    getMovieById(movieId) {
        return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_1__["MoviesStateSelectors"].movies).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((movies) => {
            const movie = movies.find((movie) => {
                return movie.id === movieId;
            });
            return movie;
        }));
    }
    getSerchResults() {
        return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_1__["MoviesStateSelectors"].searchResults);
    }
    searchMovie(text) {
        const movies = this.store
            .selectSnapshot(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_1__["MoviesStateSelectors"].movies)
            .filter((movie) => {
            const serchTerm = text.toLowerCase();
            const name = movie.title.toLocaleLowerCase();
            return name.includes(serchTerm);
        });
        if (!movies.length) {
            this.searchMovieOnServer(text)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((data) => !!data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                .subscribe((data) => {
                this.handleRoutingAfterSerch(data);
                this.store.dispatch(new _state_movies_movies_actions__WEBPACK_IMPORTED_MODULE_3__["SetSearchResults"](data));
            });
        }
        else {
            this.handleRoutingAfterSerch(movies);
            this.store.dispatch(new _state_movies_movies_actions__WEBPACK_IMPORTED_MODULE_3__["SetSearchResults"](movies));
        }
    }
    setMoviesByGenre(movies) {
        this.store.dispatch(new _state_movies_movies_actions__WEBPACK_IMPORTED_MODULE_3__["SetMoviesByGenre"](movies));
    }
    getMoviesbyGenre(genre) {
        return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_1__["MoviesStateSelectors"].moviesByGenre).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data[genre];
        }));
    }
    getGroupdMoviesbygenre() {
        return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_1__["MoviesStateSelectors"].moviesByGenre);
    }
    searchMovieOnServer(serchterm) {
        const headers = { Authorization: 'Bearer Wookie2019' };
        return this.httpService.get(`${this.searchUrl}serchterm`, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((data) => !!data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            if (!data['movies']) {
            }
            return data['movies'];
        }));
    }
    handleRoutingAfterSerch(movies) {
        if (!movies.length) {
            this.router.navigate(['no-results']);
        }
        else if (movies.length > 1) {
            this.router.navigate(['results']);
        }
        else {
            this.router.navigate(['movie', movies[0].slug]);
        }
    }
}
MovieService.ɵfac = function MovieService_Factory(t) { return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MovieService, factory: MovieService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cw+K":
/*!***********************************************************************!*\
  !*** ./src/app/movies/movies-container/movies-container.component.ts ***!
  \***********************************************************************/
/*! exports provided: MoviesContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesContainerComponent", function() { return MoviesContainerComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "APOJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/movie-slider/movie-slider.component */ "3ZAS");





function MoviesContainerComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-movie-slider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](genre_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("movies", genre_r3.value);
} }
function MoviesContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MoviesContainerComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moviesByGenre_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, moviesByGenre_r1));
} }
class MoviesContainerComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    ngOnInit() {
        this.moviesByGenre$ = this.moviesService
            .getMovies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(() => this.moviesService.getGroupdMoviesbygenre()));
    }
}
MoviesContainerComponent.ɵfac = function MoviesContainerComponent_Factory(t) { return new (t || MoviesContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"])); };
MoviesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoviesContainerComponent, selectors: [["app-movies-container"]], decls: 2, vars: 3, consts: [["class", "movies-container", 4, "ngIf"], [1, "movies-container"], ["class", "movies-container__slider-wrap", 4, "ngFor", "ngForOf"], [1, "movies-container__slider-wrap"], [3, "movies"]], template: function MoviesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MoviesContainerComponent_div_0_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.moviesByGenre$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_4__["MovieSliderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: [".movies-container[_ngcontent-%COMP%] {\n  padding: 10px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJtb3ZpZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "DajI":
/*!************************************************!*\
  !*** ./src/app/state/movies/movies.actions.ts ***!
  \************************************************/
/*! exports provided: SetMovies, SetSearchResults, SetMoviesByGenre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMovies", function() { return SetMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchResults", function() { return SetSearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMoviesByGenre", function() { return SetMoviesByGenre; });
class SetMovies {
    constructor(payload) {
        this.payload = payload;
    }
}
SetMovies.type = '[Movies] Set Movies';
class SetSearchResults {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSearchResults.type = '[Movies] Set Search Results';
class SetMoviesByGenre {
    constructor(payload) {
        this.payload = payload;
    }
}
SetMoviesByGenre.type = '[Movies] Set Movies By Genre';


/***/ }),

/***/ "FIs3":
/*!************************************************************************!*\
  !*** ./src/app/movies/components/star-rating/star-rating.component.ts ***!
  \************************************************************************/
/*! exports provided: StarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function StarRatingComponent_span_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} }
function StarRatingComponent_span_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
function StarRatingComponent_span_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
} }
function StarRatingComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRatingComponent_span_1_i_1_Template, 1, 0, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StarRatingComponent_span_1_i_2_Template, 1, 0, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StarRatingComponent_span_1_i_3_Template, 1, 0, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const star_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", star_r1 === "full");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", star_r1 === "half");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", star_r1 === "empty");
} }
class StarRatingComponent {
    set review(review) {
        this.setStarRating(review);
    }
    setStarRating(review) {
        const scaledReview = review / 2;
        const num = ~~scaledReview;
        const decimal = scaledReview % 1;
        this.starsArr = new Array(num).fill('full');
        if (decimal !== 0) {
            this.starsArr.push('half');
        }
        if (this.starsArr.length < 5) {
            const tempArr = new Array(5 - this.starsArr.length).fill('empty');
            tempArr.forEach(() => {
                this.starsArr.push('empty');
            });
        }
        this.starsArr = this.starsArr.slice(0, 5);
    }
}
StarRatingComponent.ɵfac = function StarRatingComponent_Factory(t) { return new (t || StarRatingComponent)(); };
StarRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarRatingComponent, selectors: [["app-star-rating"]], inputs: { review: "review" }, decls: 2, vars: 1, consts: [[1, "stars"], [4, "ngFor", "ngForOf"], ["class", "icon-star-full", 4, "ngIf"], ["class", "icon-star-half", 4, "ngIf"], ["class", "icon-star-empty", 4, "ngIf"], [1, "icon-star-full"], [1, "icon-star-half"], [1, "icon-star-empty"]], template: function StarRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRatingComponent_span_1_Template, 4, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.starsArr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".stars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #ffa500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3Rhci1yYXRpbmcuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsZUFBQTtFQUNBLGNDSlM7QURHYiIsImZpbGUiOiJzdGFyLXJhdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbi5zdGFycyB7XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogJHN0YXItY29sb3I7XHJcbiAgfVxyXG59XHJcbiIsIiRzdGFyLWNvbG9yOiAjZmZhNTAwO1xyXG4iXX0= */"] });


/***/ }),

/***/ "QRZH":
/*!**************************************************!*\
  !*** ./src/app/state/movies/movies.selectors.ts ***!
  \**************************************************/
/*! exports provided: MoviesStateSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesStateSelectors", function() { return MoviesStateSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _movies_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.state */ "ln20");



class MoviesStateSelectors {
    static movies(state) {
        return state.movies;
    }
    static moviesByGenre(state) {
        return state.moviesByGenre;
    }
    static searchResults(state) {
        return state.searchResults;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_movies_state__WEBPACK_IMPORTED_MODULE_2__["MoviesState"]])
], MoviesStateSelectors, "movies", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_movies_state__WEBPACK_IMPORTED_MODULE_2__["MoviesState"]])
], MoviesStateSelectors, "moviesByGenre", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])([_movies_state__WEBPACK_IMPORTED_MODULE_2__["MoviesState"]])
], MoviesStateSelectors, "searchResults", null);


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'wookie-movies';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "app"], [1, "app__header"], ["target", "_blank", "href", "https://github.com/yuda85/wookie-movies", 1, "app__github"], ["src", "./../assets/images/github.svg", "alt", "Github Link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app__github[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  z-index: 3;\n}\n.app__github[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUFKO0FBQ0k7RUFDRSxXQUFBO0FBQ04iLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XHJcbiAgJl9fZ2l0aHViIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMXJlbTtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _movies_movies_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movies-routing.module */ "fLFp");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _state_app_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/app-state */ "5qpV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _movies_movies_routing_module__WEBPACK_IMPORTED_MODULE_7__["MoviesRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["NgxsModule"].forRoot(_state_app_state__WEBPACK_IMPORTED_MODULE_9__["AppState"]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _movies_movies_routing_module__WEBPACK_IMPORTED_MODULE_7__["MoviesRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["ɵk"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();


/***/ }),

/***/ "fLFp":
/*!*************************************************!*\
  !*** ./src/app/movies/movies-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MoviesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesRoutingModule", function() { return MoviesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_genre_page_genre_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/genre-page/genre-page.component */ "qjKl");
/* harmony import */ var _components_no_results_no_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/no-results/no-results.component */ "3wmA");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "729U");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie/movie.component */ "8ilY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: 'movie/:id',
        component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"],
    },
    {
        path: 'genre/:id',
        component: _components_genre_page_genre_page_component__WEBPACK_IMPORTED_MODULE_1__["GenrePageComponent"],
    },
    {
        path: 'no-results',
        component: _components_no_results_no_results_component__WEBPACK_IMPORTED_MODULE_2__["NoResultsComponent"],
    },
    {
        path: 'results',
        component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultsComponent"],
    },
];
class MoviesRoutingModule {
}
MoviesRoutingModule.ɵfac = function MoviesRoutingModule_Factory(t) { return new (t || MoviesRoutingModule)(); };
MoviesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MoviesRoutingModule });
MoviesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MoviesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








const MaterialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[MaterialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"]] }); })();


/***/ }),

/***/ "ln20":
/*!**********************************************!*\
  !*** ./src/app/state/movies/movies.state.ts ***!
  \**********************************************/
/*! exports provided: MoviesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesState", function() { return MoviesState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _movies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.actions */ "DajI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MoviesState = class MoviesState {
    setMovies(ctx, action) {
        ctx.patchState({ movies: action.payload });
    }
    setMoviesByGenre(ctx, action) {
        ctx.patchState({ moviesByGenre: action.payload });
    }
    setSearchResults(ctx, action) {
        ctx.patchState({ searchResults: action.payload });
    }
};
MoviesState.ɵfac = function MoviesState_Factory(t) { return new (t || MoviesState)(); };
MoviesState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MoviesState, factory: MoviesState.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["SetMovies"])
], MoviesState.prototype, "setMovies", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["SetMoviesByGenre"])
], MoviesState.prototype, "setMoviesByGenre", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["SetSearchResults"])
], MoviesState.prototype, "setSearchResults", null);
MoviesState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'movies',
        defaults: {
            movies: [],
            moviesByGenre: {},
            searchResults: [],
        },
    })
], MoviesState);



/***/ }),

/***/ "qjKl":
/*!**********************************************************************!*\
  !*** ./src/app/movies/components/genre-page/genre-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: GenrePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenrePageComponent", function() { return GenrePageComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../movie.service */ "APOJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../movie-slider/movie-slider.component */ "3ZAS");







function GenrePageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-movie-slider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movies_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("movies", movies_r1);
} }
class GenrePageComponent {
    constructor(movieService, activatedRoute) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
    }
    ngOnInit() {
        this.genre = this.activatedRoute.snapshot.params.id;
        this.movies$ = this.movieService.getMoviesbyGenre(this.genre).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => {
            if (!data) {
                this.fetchMovies();
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    fetchMovies() {
        this.subscription.add(this.movieService
            .fetchMovies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((data) => !!data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe());
    }
}
GenrePageComponent.ɵfac = function GenrePageComponent_Factory(t) { return new (t || GenrePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
GenrePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GenrePageComponent, selectors: [["app-genre-page"]], decls: 2, vars: 3, consts: [["class", "genre-page", 4, "ngIf"], [1, "genre-page"], [3, "movies"]], template: function GenrePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GenrePageComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.movies$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_6__["MovieSliderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".genre-page[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2VucmUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZ2VucmUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5yZS1wYWdlIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _movies_movies_container_movies_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies/movies-container/movies-container.component */ "Cw+K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _movies_movies_container_movies_container_component__WEBPACK_IMPORTED_MODULE_1__["MoviesContainerComponent"],
        pathMatch: 'full',
        loadChildren: () => __webpack_require__.e(/*! import() | movies-movies-module */ "movies-movies-module").then(__webpack_require__.bind(null, /*! ./movies/movies.module */ "EA54")).then((m) => m.MoviesModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map