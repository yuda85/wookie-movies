(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Savvyy\wookie-movies\src\main.ts */"zUnb");


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
/* harmony import */ var src_app_movies_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/movies/movie.service */ "APOJ");
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
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_movies_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"])); };
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sorry you could'nt find your movie, We hope it wo'nt cause any ");
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
/* harmony import */ var _user_user_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user.state */ "9W6m");


const AppState = [_user_user_state__WEBPACK_IMPORTED_MODULE_1__["UserState"], _movies_movies_state__WEBPACK_IMPORTED_MODULE_0__["MoviesState"]];


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







function SearchResultsComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 2);
} }
function SearchResultsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-movie-slider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movies_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("movies", movies_r2);
} }
class SearchResultsComponent {
    constructor(movieService, router) {
        this.movieService = movieService;
        this.router = router;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.isLoading = true;
    }
    ngOnInit() {
        this.movies$ = this.movieService.getSerchResults().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((data) => {
            this.isLoading = false;
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
SearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchResultsComponent, selectors: [["app-search-results"]], decls: 3, vars: 4, consts: [["mode", "indeterminate", 4, "ngIf"], ["class", "search-results", 4, "ngIf"], ["mode", "indeterminate"], [1, "search-results"], [3, "movies"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SearchResultsComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchResultsComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx.movies$));
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_6__["StarRatingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".movie[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.movie__wrap[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  position: relative;\n}\n.movie__poster[_ngcontent-%COMP%] {\n  flex: 1 img;\n  flex-max-width: 100%;\n  margin-right: 2rem;\n}\n.movie__details[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.movie__details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  line-height: 1.1;\n}\n.movie__genres[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.movie__rating[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: 1.5rem;\n  font-size: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUNFO0VBQ0UsV0FBQTtFQUNFLG9CQUFBO0VBRUYsa0JBQUE7QUFBSjtBQUVFO0VBQ0UsT0FBQTtBQUFKO0FBQ0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQ047QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBREoiLCJmaWxlIjoibW92aWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAmX193cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICZfX3Bvc3RlciB7XHJcbiAgICBmbGV4OiAxIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICB9XHJcbiAgJl9fZGV0YWlscyB7XHJcbiAgICBmbGV4OiAyO1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19nZW5yZXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gICZfX3JhdGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEuNXJlbTtcclxuICAgIHJpZ2h0OiAxLjVyZW07XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "9W6m":
/*!******************************************!*\
  !*** ./src/app/state/user/user.state.ts ***!
  \******************************************/
/*! exports provided: UserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserState", function() { return UserState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.actions */ "sW54");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UserState = class UserState {
    setUser(ctx, action) {
        ctx.patchState({ user: action.payload });
    }
};
UserState.ɵfac = function UserState_Factory(t) { return new (t || UserState)(); };
UserState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserState, factory: UserState.ɵfac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_user_actions__WEBPACK_IMPORTED_MODULE_2__["SetUser"])
], UserState.prototype, "setUser", null);
UserState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'user',
        defaults: {
            user: null,
        },
    })
], UserState);



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
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
    const genre_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](genre_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("movies", genre_r2.value);
} }
function MoviesContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MoviesContainerComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.moviesByGenre));
} }
class MoviesContainerComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.moviesByGenre = {};
    }
    ngOnInit() {
        this.subscription.add(this.moviesService.getMovies().subscribe((data) => {
            data.forEach((movie) => {
                movie.genres.forEach((genre) => {
                    if (this.moviesByGenre[genre] && this.moviesByGenre[genre].length) {
                        this.moviesByGenre[genre].push(movie);
                    }
                    else {
                        this.moviesByGenre[genre] = [movie];
                    }
                });
            });
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
MoviesContainerComponent.ɵfac = function MoviesContainerComponent_Factory(t) { return new (t || MoviesContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"])); };
MoviesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoviesContainerComponent, selectors: [["app-movies-container"]], decls: 1, vars: 1, consts: [["class", "movies-container", 4, "ngIf"], [1, "movies-container"], ["class", "movies-container__slider-wrap", 4, "ngFor", "ngForOf"], [1, "movies-container__slider-wrap"], [3, "movies"]], template: function MoviesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MoviesContainerComponent_div_0_Template, 3, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.moviesByGenre);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_4__["MovieSliderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: [".movies-container[_ngcontent-%COMP%] {\n  padding: 10px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJtb3ZpZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxufVxyXG4iXX0= */"] });


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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "app"], [1, "app__header"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  \n  z-index: 1;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.swiper-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-container-android[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-wrapper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.swiper-container-multirow-column[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-container-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-container-pointer-events[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n.swiper-container-pointer-events.swiper-container-vertical[_ngcontent-%COMP%] {\n  touch-action: pan-x;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.swiper-container-autoheight[_ngcontent-%COMP%], .swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  height: auto;\n}\n.swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-container-3d[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: start start;\n}\n.swiper-container-horizontal.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: x mandatory;\n}\n.swiper-container-vertical.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: y mandatory;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-navigation-size: 44px;\n  \n}\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled[_ngcontent-%COMP%], .swiper-button-next.swiper-button-disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev[_ngcontent-%COMP%]:after, .swiper-button-next[_ngcontent-%COMP%]:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  text-transform: none;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev[_ngcontent-%COMP%]:after, .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:after {\n  content: \"prev\";\n}\n.swiper-button-next[_ngcontent-%COMP%], .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:after {\n  content: \"next\";\n}\n.swiper-button-prev.swiper-button-white[_ngcontent-%COMP%], .swiper-button-next.swiper-button-white[_ngcontent-%COMP%] {\n  --swiper-navigation-color: #ffffff;\n}\n.swiper-button-prev.swiper-button-black[_ngcontent-%COMP%], .swiper-button-next.swiper-button-black[_ngcontent-%COMP%] {\n  --swiper-navigation-color: #000000;\n}\n.swiper-button-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n  \n}\n.swiper-pagination[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.swiper-pagination-fraction[_ngcontent-%COMP%], .swiper-pagination-custom[_ngcontent-%COMP%], .swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%] {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-main[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev-prev[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next-next[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n}\n.swiper-pagination-clickable[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%] {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-container-horizontal.swiper-container-rtl[_ngcontent-%COMP%]    > .swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms right;\n}\n\n.swiper-pagination-progressbar[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-container-rtl[_ngcontent-%COMP%]   .swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  transform-origin: right top;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white[_ngcontent-%COMP%] {\n  --swiper-pagination-color: #ffffff;\n}\n.swiper-pagination-black[_ngcontent-%COMP%] {\n  --swiper-pagination-color: #000000;\n}\n.swiper-pagination-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.swiper-scrollbar[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag[_ngcontent-%COMP%] {\n  cursor: move;\n}\n.swiper-scrollbar-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n.swiper-zoom-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .swiper-zoom-container[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%], .swiper-zoom-container[_ngcontent-%COMP%]    > canvas[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.swiper-slide-zoomed[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n[_ngcontent-%COMP%]:root {\n  \n}\n.swiper-lazy-preloader[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  animation: swiper-preloader-spin 1s infinite linear;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper-lazy-preloader-white[_ngcontent-%COMP%] {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black[_ngcontent-%COMP%] {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.swiper-container[_ngcontent-%COMP%]   .swiper-notification[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-container-cube[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transform-origin: 100% 0;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-next[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-prev[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-next[_ngcontent-%COMP%]    + .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-container-flip[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  \n  z-index: 1;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.swiper-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-container-android[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-wrapper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.swiper-container-multirow-column[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-container-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-container-pointer-events[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n.swiper-container-pointer-events.swiper-container-vertical[_ngcontent-%COMP%] {\n  touch-action: pan-x;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.swiper-container-autoheight[_ngcontent-%COMP%], .swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  height: auto;\n}\n.swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-container-3d[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: start start;\n}\n.swiper-container-horizontal.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: x mandatory;\n}\n.swiper-container-vertical.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: y mandatory;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-navigation-size: 44px;\n  \n}\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled[_ngcontent-%COMP%], .swiper-button-next.swiper-button-disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev[_ngcontent-%COMP%]:after, .swiper-button-next[_ngcontent-%COMP%]:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  text-transform: none;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev[_ngcontent-%COMP%]:after, .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:after {\n  content: \"prev\";\n}\n.swiper-button-next[_ngcontent-%COMP%], .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:after {\n  content: \"next\";\n}\n.swiper-button-prev.swiper-button-white[_ngcontent-%COMP%], .swiper-button-next.swiper-button-white[_ngcontent-%COMP%] {\n  --swiper-navigation-color: #ffffff;\n}\n.swiper-button-prev.swiper-button-black[_ngcontent-%COMP%], .swiper-button-next.swiper-button-black[_ngcontent-%COMP%] {\n  --swiper-navigation-color: #000000;\n}\n.swiper-button-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n  \n}\n.swiper-pagination[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.swiper-pagination-fraction[_ngcontent-%COMP%], .swiper-pagination-custom[_ngcontent-%COMP%], .swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%] {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-main[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev-prev[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next-next[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n}\n.swiper-pagination-clickable[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%] {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-container-horizontal.swiper-container-rtl[_ngcontent-%COMP%]    > .swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms right;\n}\n\n.swiper-pagination-progressbar[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-container-rtl[_ngcontent-%COMP%]   .swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  transform-origin: right top;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white[_ngcontent-%COMP%] {\n  --swiper-pagination-color: #ffffff;\n}\n.swiper-pagination-black[_ngcontent-%COMP%] {\n  --swiper-pagination-color: #000000;\n}\n.swiper-pagination-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.swiper-scrollbar[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-scrollbar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag[_ngcontent-%COMP%] {\n  cursor: move;\n}\n.swiper-scrollbar-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n.swiper-zoom-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .swiper-zoom-container[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%], .swiper-zoom-container[_ngcontent-%COMP%]    > canvas[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.swiper-slide-zoomed[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n[_ngcontent-%COMP%]:root {\n  \n}\n.swiper-lazy-preloader[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  animation: swiper-preloader-spin 1s infinite linear;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper-lazy-preloader-white[_ngcontent-%COMP%] {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black[_ngcontent-%COMP%] {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.swiper-container[_ngcontent-%COMP%]   .swiper-notification[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-fade[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-container-cube[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  transform-origin: 100% 0;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-next[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-prev[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-next[_ngcontent-%COMP%]    + .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-cube[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-container-cube[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-container-flip[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%]   .swiper-slide-active[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-flip[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXHN3aXBlclxcc3dpcGVyLWJ1bmRsZS5jc3MiLCIuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztFQUFBO0FBWUE7RUFDRSwyQkFBQTtFQUNBLDRzRUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVBO0VBQ0UsNkJBQUE7QUNBRjtBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUNDRjtBRENBO0VBQ0Usc0JBQUE7QUNFRjtBREFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0dGO0FEREE7O0VBRUUsaUNBQUE7QUNJRjtBREZBO0VBQ0UsZUFBQTtBQ0tGO0FESEE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUNNRjtBREpBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FDT0Y7QURMQTtFQUNFLG1CQUFBO0FDUUY7QUROQTtFQUNFLG1CQUFBO0FDU0Y7QURQQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNVRjtBRFJBO0VBQ0Usa0JBQUE7QUNXRjtBRFRBLGdCQUFBO0FBQ0E7O0VBRUUsWUFBQTtBQ1lGO0FEVkE7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0FDYUY7QURYQSxlQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ2NGO0FEWkE7Ozs7Ozs7RUFPRSw0QkFBQTtBQ2VGO0FEYkE7Ozs7RUFJRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNnQkY7QURkQTtFQUNFLGdGQUFBO0FDaUJGO0FEZkE7RUFDRSxp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QTtBQ3V0QkY7QURydEJBO0VBQ0Usb0JBQUE7RUFDQSw0QkFBQTtBQ3d0QkY7QUR0dEJBO0VBQ0Usb0JBQUE7QUN5dEJGO0FEdnRCQTs7RUFFRSxvQkFBQTtBQzB0QkY7QUR4dEJBO0VBQ0UsaUJBQUE7QUMydEJGO0FEenRCQTtFQUNFLG9CQUFBO0VBQ0EsbUNBQUE7RUFDUSwyQkFBQTtFQUNSLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM0dEJGO0FEMXRCQTtFQUNFLG9CQUFBO0FDNnRCRjtBRDN0QkE7RUFDRSx3QkFBQTtBQzh0QkY7QUQ1dEJBOztFQUVFLG9CQUFBO0FDK3RCRjtBRDd0QkE7Ozs7RUFJRSxvQkFBQTtFQUNBLG1CQUFBO0FDZ3VCRjtBRDl0QkE7Ozs7RUFJRSxVQUFBO0VBQ0EsbUNBQUE7RUFDUSwyQkFBQTtBQ2l1QlY7QUQvdEJBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNrdUJGO0FEaHVCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDbXVCRjtBRGp1QkE7RUFDRSxpQkFBQTtBQ291QkY7QURsdUJBO0VBQ0Usb0JBQUE7RUFDQSxtQ0FBQTtFQUNRLDJCQUFBO0VBQ1IsVUFBQTtBQ3F1QkY7QURudUJBO0VBQ0Usb0JBQUE7QUNzdUJGO0FEcHVCQTs7RUFFRSxvQkFBQTtBQ3V1QkY7QURydUJBOzs7O0VBSUUsVUFBQTtFQUNBLG1DQUFBO0VBQ1EsMkJBQUE7QUN3dUJWIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3dpcGVyIDYuNS44XG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIxIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IEFwcmlsIDIzLCAyMDIxXG4gKi9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnc3dpcGVyLWljb25zJztcbiAgc3JjOiB1cmwoJ2RhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCBkMDlHUmdBQkFBQUFBQVpnQUJBQUFBQUFEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFBR1JBQUFBQm9BQUFBY2k2cUhrVWRFUlVZQUFBV2dBQUFBSXdBQUFDUUFZQUJYUjFCUFV3QUFCaFFBQUFBdUFBQUFOdUFZNyt4SFUxVkNBQUFGeEFBQUFGQUFBQUJtMmZQY3pVOVRMeklBQUFIY0FBQUFTZ0FBQUdCUDlWNVJZMjFoY0FBQUFrUUFBQUNJQUFBQll0NkYwY0JqZG5RZ0FBQUN6QUFBQUFRQUFBQUVBQkVCUkdkaGMzQUFBQVdZQUFBQUNBQUFBQWovL3dBRFoyeDVaZ0FBQXl3QUFBRE1BQUFEMk1IdHJ5Vm9aV0ZrQUFBQmJBQUFBREFBQUFBMkUyK2VvV2hvWldFQUFBR2NBQUFBSHdBQUFDUUM5Z0R6YUcxMGVBQUFBaWdBQUFBWkFBQUFyZ0prQUJGc2IyTmhBQUFDMEFBQUFGb0FBQUJhRlFBVUdHMWhlSEFBQUFHOEFBQUFId0FBQUNBQWNBQkFibUZ0WlFBQUEvZ0FBQUU1QUFBQ1h2RmRCd2x3YjNOMEFBQUZOQUFBQUdJQUFBQ0U1czc0aFhqYVkyQmtZR0FBWXBmNUh1L2orVzIrTW5Bek1ZREF6YVg2UWpENi80Ly9CeGo1R0E4QXVSd01ZR2tBUHl3TDEzamFZMkJrWUdBODhQOEFneDRqKy84ZlFEWWZBMUFFQldnREFJQjJCT29BZU5wallHUmdZTkJoNEdkZ1lnQUJFTW5JQUJKellOQURDUUFBQ1dnQXNRQjQybU5nWWZ6Q09JR0JsWUdCMFljeGpZR0J3UjFLZjJXUVpHaGhZR0JpWUdWbWdBRkdCaVFRa09hYXd0REFvTUJReFhqZy93RUdQY1lEREE0d05VQTJDQ2d3c0FBQU80RUw2Z0FBZU5wajJNMGd5QUFDcXhnR05XQmtaMkQ0L3dNQSt4a0RkZ0FBQUhqYVkyQmdZR2FBWUJrR1JnWVFpQUh5R01GOEZnWUhJTTNEd01IQUJHUXJNT2d5V0RMRU0xVDkvdzhVQmZFTWdMekUvLy8vUC81Ly9mL1YveHYrcjRlYUFBZU1iQXh3SVVZbUlNSEVnS1lBWWpVY3NEQXdzTEt4YzNCeWNmUHc4akVRQS9nWkJBU0ZoRVZFeGNRbEpLV2taV1RsNUJVVWxaUlZWTlhVTlRRWkJnTUFBTVIrRStnQUVRRkVBQUFBS2dBcUFDb0FOQUErQUVnQVVnQmNBR1lBY0FCNkFJUUFqZ0NZQUtJQXJBQzJBTUFBeWdEVUFONEE2QUR5QVB3QkJnRVFBUm9CSkFFdUFUZ0JRZ0ZNQVZZQllBRnFBWFFCZmdHSUFaSUJuQUdtQWJJQnpnSHNBQUI0MnUyTk1RNkNVQXlHVzU2OHg5QW5lWVlnbTRNSmJoS0ZhRXhJT0FWWDhBcGV3U3Q0QmljNEFmZUFpZDNWT0JpeER4ZlBZRXphNU8rWGZpMDRZQURnZ2lVSVVMQ3VFSks4VmhPNGJTdnBkbmt0SEk1UUNZdGRpMnNsOFpuWGFIbHFVck5LemRLY1Q4Y2pscStyd1pTdklWY3pOaWV6c2ZuUC91em5tZlBGQk5PRE0ySzdNVFE0NVlFQVpxR1A4MUFtR0djRjNpUHFPb3AwcjFTUFRhVGJWa2ZVZTRIWGo5N3dZRSt5TndXWXh3V3U0djF1Z1dIZ28zUzFYZFpFVnFXTTdFVDBjZm5MR3hXZmtnUjQybzJQdldyRE1CU0ZqL0lITGFGMHpLalJnZGlWTXdTY05SQW9XVW9INzhZMmljQi95SVkwOUFuNkFIMkJkdS9VQit5eG9wWXNoUWlFdm52dTBkVVJnRHQ4UWVDOFBEdzdGcGppM2ZFQTR6L1BFSjZZT0I1aEtoNGRqM0V2WGh4UHFIL1NLVVkzcko3c3JaNEZabmgxUE1BdFBod1A2ZmwyUE1KTVBEZ2VRNHJZOFlUNkd6YW8wZUFFQTQwOUR1Z2dtVG5Gbk9jU0NpRWlMTWd4Q2lUSTZDcTVEWlVkM1FtcDEwdk8wTGFMVGQyY2pONGZPdW1sYzdsVVliU1FjWkZrdXRSRzdnNkpLWkt5MFJtZExZNjgwQ0RuRUorVU1rcEZGZTFSTjdueGRWcFhyQzRhVHRuYXVyT25ZZXJjWmcyWVZtTE4vZC9nY3pmRWltckUvZnMvYk91cTI5Wm1uOHRsb09SYVhnWmdHYTc4eU85L2NuWG0yQnBhR3ZxMjVEdjlTNEU5KzVTSWM5UHF1cEpLaFlGU1NsNDcrUWNyMW1ZTkFBQUFlTnB0dzBjS3drQUFBTURaSkE4UTdPVUp2a0xzUGZaNnpGVkVSUHk4cUhoMllFUiszaS9CUDgzdklCTEx5U3NvS2ltcnFLcXBhMmhwNitqcTZSc1lHaG1ibUpxWlN5MHNyYXh0Yk8zc0hSeWRuRU1VNHVSNnl4N0pKWHZlUDdXckR5Y0FBQUFBQUFILy93QUNlTnBqWUdSZ1lPQUJZaGtnWmdKQ1pnWk5Ca1lHTFFadElKc0ZMTVlBQUF3M0FMZ0FlTm9saXpFS2dEQVFCQ2NoUmJDMnNGRVIwWUQ2cVZRaUJDdi9IOWV6R0k2WjVYQkF3OENCSy9tNWlRUVZhdVZiWExuT3JNWnYyb0xkS0ZhOFBqdXJ1MmhKekdhYm1PU0x6Tk16dnV0cEIzTjQybU5nWkdCZzRHS1FZekJoWU14SkxNbGo0R0JnQVlvdy9QL1BBSkpoTE02c1NvV0tmV0NBQXdEQWpnYlJBQUI0Mm1OZ1lHQmtBSUliQ1pvNUlQcm1VbjBoR0EwQU84RUZUUUFBJykgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbjpyb290IHtcbiAgLS1zd2lwZXItdGhlbWUtY29sb3I6ICMwMDdhZmY7XG59XG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLyogRml4IG9mIFdlYmtpdCBmbGlja2VyaW5nICovXG4gIHotaW5kZXg6IDE7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3dpcGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsXG4uc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdyA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLW11bHRpcm93LWNvbHVtbiA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1wb2ludGVyLWV2ZW50cyB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1wb2ludGVyLWV2ZW50cy5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsIHtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teDtcbn1cbi5zd2lwZXItc2xpZGUge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG4uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuayB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi8qIEF1dG8gSGVpZ2h0ICovXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0LFxuLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXNsaWRlIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBoZWlnaHQ7XG59XG4vKiAzRCBFZmZlY3RzICovXG4uc3dpcGVyLWNvbnRhaW5lci0zZCB7XG4gIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXdyYXBwZXIsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1jdWJlLXNoYWRvdyB7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDEwO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3Age1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cbi8qIENTUyBNb2RlICovXG4uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qIEZvciBGaXJlZm94ICovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXG59XG4uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlIHtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0IHN0YXJ0O1xufVxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbC5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbC5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG59XG46cm9vdCB7XG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZTogNDRweDtcbiAgLypcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjogdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKTtcbiAgKi9cbn1cbi5zd2lwZXItYnV0dG9uLXByZXYsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IGNhbGModmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkgLyA0NCAqIDI3KTtcbiAgaGVpZ2h0OiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKTtcbiAgbWFyZ2luLXRvcDogY2FsYygwcHggLSAodmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkgLyAyKSk7XG4gIHotaW5kZXg6IDEwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xufVxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zNTtcbiAgY3Vyc29yOiBhdXRvO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IHN3aXBlci1pY29ucztcbiAgZm9udC1zaXplOiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXZhcmlhbnQ6IGluaXRpYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnN3aXBlci1idXR0b24tcHJldixcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IGF1dG87XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyLFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIge1xuICBjb250ZW50OiAncHJldic7XG59XG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICByaWdodDogMTBweDtcbiAgbGVmdDogYXV0bztcbn1cbi5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XG4gIGNvbnRlbnQ6ICduZXh0Jztcbn1cbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZSxcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi13aGl0ZSB7XG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3I6ICNmZmZmZmY7XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2ssXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tYmxhY2sge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiAjMDAwMDAwO1xufVxuLnN3aXBlci1idXR0b24tbG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46cm9vdCB7XG4gIC8qXG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMzAwbXMgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgei1pbmRleDogMTA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbn1cbi8qIENvbW1vbiBTdHlsZXMgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbixcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyogQnVsbGV0cyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWluIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42Nik7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYtcHJldiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMC4yO1xufVxuYnV0dG9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC01MCUsIDApO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgbWFyZ2luOiA2cHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiA4cHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIHRvcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgbWFyZ2luOiAwIDRweDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgbGVmdDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1ydGwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIHJpZ2h0O1xufVxuLyogUHJvZ3Jlc3MgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xufVxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIsXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIsXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlIHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUge1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiAjZmZmZmZmO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIHtcbiAgLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjogIzAwMDAwMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1sb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi8qIFNjcm9sbGJhciAqL1xuLnN3aXBlci1zY3JvbGxiYXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXNjcm9sbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMSU7XG4gIGJvdHRvbTogM3B4O1xuICB6LWluZGV4OiA1MDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiA5OCU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItc2Nyb2xsYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3B4O1xuICB0b3A6IDElO1xuICB6LWluZGV4OiA1MDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA5OCU7XG59XG4uc3dpcGVyLXNjcm9sbGJhci1kcmFnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5zd2lwZXItc2Nyb2xsYmFyLWN1cnNvci1kcmFnIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLnN3aXBlci1zY3JvbGxiYXItbG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3dpcGVyLXpvb20tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zd2lwZXItem9vbS1jb250YWluZXIgPiBpbWcsXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gc3ZnLFxuLnN3aXBlci16b29tLWNvbnRhaW5lciA+IGNhbnZhcyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5zd2lwZXItc2xpZGUtem9vbWVkIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLyogUHJlbG9hZGVyICovXG46cm9vdCB7XG4gIC8qXG4gIC0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjogdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKTtcbiAgKi9cbn1cbi5zd2lwZXItbGF6eS1wcmVsb2FkZXIge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgbWFyZ2luLXRvcDogLTIxcHg7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XG4gIGFuaW1hdGlvbjogc3dpcGVyLXByZWxvYWRlci1zcGluIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc3dpcGVyLXByZWxvYWRlci1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uc3dpcGVyLWxhenktcHJlbG9hZGVyLXdoaXRlIHtcbiAgLS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yOiAjZmZmO1xufVxuLnN3aXBlci1sYXp5LXByZWxvYWRlci1ibGFjayB7XG4gIC0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjogIzAwMDtcbn1cbkBrZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLyogYTExeSAqL1xuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xMDAwO1xufVxuLnN3aXBlci1jb250YWluZXItZmFkZS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSAuc3dpcGVyLXNsaWRlIHtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1zbGlkZSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtcHJldixcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0ICsgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICB6LWluZGV4OiAwO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwLjY7XG4gIHotaW5kZXg6IDA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3c6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmaWx0ZXI6IGJsdXIoNTBweCk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCB7XG4gIHotaW5kZXg6IDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiIsIi8qKlxuICogU3dpcGVyIDYuNS44XG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cHM6Ly9zd2lwZXJqcy5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDIxIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IEFwcmlsIDIzLCAyMDIxXG4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJzd2lwZXItaWNvbnNcIjtcbiAgc3JjOiB1cmwoXCJkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQVwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG46cm9vdCB7XG4gIC0tc3dpcGVyLXRoZW1lLWNvbG9yOiAjMDA3YWZmO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLyogRml4IG9mIFdlYmtpdCBmbGlja2VyaW5nICovXG4gIHotaW5kZXg6IDE7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN3aXBlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsXG4uc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLW11bHRpcm93ID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdy1jb2x1bW4gPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXBvaW50ZXItZXZlbnRzIHtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbn1cblxuLnN3aXBlci1jb250YWluZXItcG9pbnRlci1ldmVudHMuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXg7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG5cbi5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vKiBBdXRvIEhlaWdodCAqL1xuLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCxcbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci1zbGlkZSB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBoZWlnaHQ7XG59XG5cbi8qIDNEIEVmZmVjdHMgKi9cbi5zd2lwZXItY29udGFpbmVyLTNkIHtcbiAgcGVyc3BlY3RpdmU6IDEyMDBweDtcbn1cblxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZSxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3cge1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3Age1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuXG4vKiBDU1MgTW9kZSAqL1xuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKiBGb3IgRmlyZWZveCAqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGUge1xuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQgc3RhcnQ7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbC5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG59XG5cbjpyb290IHtcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplOiA0NHB4O1xuICAvKlxuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpO1xuICAqL1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LFxuLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiBjYWxjKHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpIC8gNDQgKiAyNyk7XG4gIGhlaWdodDogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XG4gIG1hcmdpbi10b3A6IGNhbGMoMHB4IC0gKHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpIC8gMikpO1xuICB6LWluZGV4OiAxMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbn1cblxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zNTtcbiAgY3Vyc29yOiBhdXRvO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnN3aXBlci1idXR0b24tcHJldjphZnRlcixcbi5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIge1xuICBmb250LWZhbWlseTogc3dpcGVyLWljb25zO1xuICBmb250LXNpemU6IHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtdmFyaWFudDogaW5pdGlhbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zd2lwZXItYnV0dG9uLXByZXYsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyLFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIge1xuICBjb250ZW50OiBcInByZXZcIjtcbn1cblxuLnN3aXBlci1idXR0b24tbmV4dCxcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgcmlnaHQ6IDEwcHg7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XG4gIGNvbnRlbnQ6IFwibmV4dFwiO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGUsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGUge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2ssXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tYmxhY2sge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1sb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOnJvb3Qge1xuICAvKlxuICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpO1xuICAqL1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMzAwbXMgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKiBDb21tb24gU3R5bGVzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogQnVsbGV0cyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWluIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXYge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQtbmV4dCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuYnV0dG9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcbn1cblxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgbWFyZ2luOiA2cHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIHtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDhweDtcbn1cblxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyB0b3A7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgbWFyZ2luOiAwIDRweDtcbn1cblxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIGxlZnQ7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1ydGwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIHJpZ2h0O1xufVxuXG4vKiBQcm9ncmVzcyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbn1cblxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcbn1cblxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhcixcbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUge1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYmxhY2sge1xuICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tbG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFNjcm9sbGJhciAqL1xuLnN3aXBlci1zY3JvbGxiYXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItc2Nyb2xsYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxJTtcbiAgYm90dG9tOiAzcHg7XG4gIHotaW5kZXg6IDUwO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDk4JTtcbn1cblxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXNjcm9sbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDNweDtcbiAgdG9wOiAxJTtcbiAgei1pbmRleDogNTA7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogOTglO1xufVxuXG4uc3dpcGVyLXNjcm9sbGJhci1kcmFnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLnN3aXBlci1zY3JvbGxiYXItY3Vyc29yLWRyYWcge1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi5zd2lwZXItc2Nyb2xsYmFyLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3dpcGVyLXpvb20tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN3aXBlci16b29tLWNvbnRhaW5lciA+IGltZyxcbi5zd2lwZXItem9vbS1jb250YWluZXIgPiBzdmcsXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gY2FudmFzIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uc3dpcGVyLXNsaWRlLXpvb21lZCB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLyogUHJlbG9hZGVyICovXG46cm9vdCB7XG4gIC8qXG4gIC0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjogdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKTtcbiAgKi9cbn1cblxuLnN3aXBlci1sYXp5LXByZWxvYWRlciB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICBtYXJnaW4tdG9wOiAtMjFweDtcbiAgei1pbmRleDogMTA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJTtcbiAgYW5pbWF0aW9uOiBzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgaW5maW5pdGUgbGluZWFyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1zd2lwZXItcHJlbG9hZGVyLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZSB7XG4gIC0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjogI2ZmZjtcbn1cblxuLnN3aXBlci1sYXp5LXByZWxvYWRlci1ibGFjayB7XG4gIC0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjogIzAwMDtcbn1cblxuQGtleWZyYW1lcyBzd2lwZXItcHJlbG9hZGVyLXNwaW4ge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4vKiBhMTF5ICovXG4uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLW5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTEwMDA7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZhZGUuc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgLnN3aXBlci1zbGlkZSB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWN1YmUge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItc2xpZGUge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1wcmV2LFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQgKyAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgei1pbmRleDogMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC42O1xuICB6LWluZGV4OiAwO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGZpbHRlcjogYmx1cig1MHB4KTtcbn1cblxuLnN3aXBlci1jb250YWluZXItZmxpcCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cblxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICB6LWluZGV4OiAwO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vKipcbiAqIFN3aXBlciA2LjUuOFxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHBzOi8vc3dpcGVyanMuY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAyMSBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBBcHJpbCAyMywgMjAyMVxuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwic3dpcGVyLWljb25zXCI7XG4gIHNyYzogdXJsKFwiZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUFcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuOnJvb3Qge1xuICAtLXN3aXBlci10aGVtZS1jb2xvcjogIzAwN2FmZjtcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIEZpeCBvZiBXZWJraXQgZmxpY2tlcmluZyAqL1xuICB6LWluZGV4OiAxO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zd2lwZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxuLnN3aXBlci13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdyA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnN3aXBlci1jb250YWluZXItbXVsdGlyb3ctY29sdW1uID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1wb2ludGVyLWV2ZW50cyB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXBvaW50ZXItZXZlbnRzLnN3aXBlci1jb250YWluZXItdmVydGljYWwge1xuICB0b3VjaC1hY3Rpb246IHBhbi14O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuXG4uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuayB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogQXV0byBIZWlnaHQgKi9cbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQsXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGUge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgaGVpZ2h0O1xufVxuXG4vKiAzRCBFZmZlY3RzICovXG4uc3dpcGVyLWNvbnRhaW5lci0zZCB7XG4gIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItd3JhcHBlcixcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLWN1YmUtc2hhZG93IHtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cblxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cblxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cblxuLyogQ1NTIE1vZGUgKi9cbi5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLyogRm9yIEZpcmVmb3ggKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cbn1cblxuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlIHtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0IHN0YXJ0O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbn1cblxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xufVxuXG46cm9vdCB7XG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZTogNDRweDtcbiAgLypcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjogdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKTtcbiAgKi9cbn1cblxuLnN3aXBlci1idXR0b24tcHJldixcbi5zd2lwZXItYnV0dG9uLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogY2FsYyh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKSAvIDQ0ICogMjcpO1xuICBoZWlnaHQ6IHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDBweCAtICh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKSAvIDIpKTtcbiAgei1pbmRleDogMTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG59XG5cbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMzU7XG4gIGN1cnNvcjogYXV0bztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IHN3aXBlci1pY29ucztcbiAgZm9udC1zaXplOiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXZhcmlhbnQ6IGluaXRpYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogYXV0bztcbn1cblxuLnN3aXBlci1idXR0b24tcHJldjphZnRlcixcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyIHtcbiAgY29udGVudDogXCJwcmV2XCI7XG59XG5cbi5zd2lwZXItYnV0dG9uLW5leHQsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldiB7XG4gIHJpZ2h0OiAxMHB4O1xuICBsZWZ0OiBhdXRvO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIm5leHRcIjtcbn1cblxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLXdoaXRlLFxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlIHtcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNrLFxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNrIHtcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjogIzAwMDAwMDtcbn1cblxuLnN3aXBlci1idXR0b24tbG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpyb290IHtcbiAgLypcbiAgLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjogdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKTtcbiAgKi9cbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLyogQ29tbW9uIFN0eWxlcyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxuLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEJ1bGxldHMgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDA7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42Nik7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldi1wcmV2IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbmJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgLTUwJSwgMCk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIG1hcmdpbjogNnB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgdG9wO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIG1hcmdpbjogMCA0cHg7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyBsZWZ0O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItcnRsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyByaWdodDtcbn1cblxuLyogUHJvZ3Jlc3MgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIsXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhcixcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIHtcbiAgLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIHtcbiAgLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjogIzAwMDAwMDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTY3JvbGxiYXIgKi9cbi5zd2lwZXItc2Nyb2xsYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXNjcm9sbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMSU7XG4gIGJvdHRvbTogM3B4O1xuICB6LWluZGV4OiA1MDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiA5OCU7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1zY3JvbGxiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzcHg7XG4gIHRvcDogMSU7XG4gIHotaW5kZXg6IDUwO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDk4JTtcbn1cblxuLnN3aXBlci1zY3JvbGxiYXItZHJhZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zd2lwZXItc2Nyb2xsYmFyLWN1cnNvci1kcmFnIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uc3dpcGVyLXNjcm9sbGJhci1sb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN3aXBlci16b29tLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zd2lwZXItem9vbS1jb250YWluZXIgPiBpbWcsXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gc3ZnLFxuLnN3aXBlci16b29tLWNvbnRhaW5lciA+IGNhbnZhcyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLnN3aXBlci1zbGlkZS16b29tZWQge1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi8qIFByZWxvYWRlciAqL1xuOnJvb3Qge1xuICAvKlxuICAtLXN3aXBlci1wcmVsb2FkZXItY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG5cbi5zd2lwZXItbGF6eS1wcmVsb2FkZXIge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgbWFyZ2luLXRvcDogLTIxcHg7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XG4gIGFuaW1hdGlvbjogc3dpcGVyLXByZWxvYWRlci1zcGluIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tc3dpcGVyLXByZWxvYWRlci1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zd2lwZXItbGF6eS1wcmVsb2FkZXItd2hpdGUge1xuICAtLXN3aXBlci1wcmVsb2FkZXItY29sb3I6ICNmZmY7XG59XG5cbi5zd2lwZXItbGF6eS1wcmVsb2FkZXItYmxhY2sge1xuICAtLXN3aXBlci1wcmVsb2FkZXItY29sb3I6ICMwMDA7XG59XG5cbkBrZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLyogYTExeSAqL1xuLnN3aXBlci1jb250YWluZXIgLnN3aXBlci1ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xMDAwO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlLnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlIC5zd2lwZXItc2xpZGUge1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnN3aXBlci1jb250YWluZXItY3ViZS5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXNsaWRlIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtcHJldixcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0ICsgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCB7XG4gIHotaW5kZXg6IDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1jdWJlLXNoYWRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNjtcbiAgei1pbmRleDogMDtcbn1cblxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmaWx0ZXI6IGJsdXIoNTBweCk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZsaXAge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgei1pbmRleDogMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const MaterialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
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
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
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

/***/ "sW54":
/*!********************************************!*\
  !*** ./src/app/state/user/user.actions.ts ***!
  \********************************************/
/*! exports provided: SetUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUser", function() { return SetUser; });
class SetUser {
    constructor(payload) {
        this.payload = payload;
    }
}
SetUser.type = '[User] Set User';


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