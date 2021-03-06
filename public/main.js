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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







const _c0 = function () { return ["/"]; };
class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onSearch(searchTerm) {
        this.router.navigate(['search'], { queryParams: { term: searchTerm } });
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 2, consts: [[1, "header"], ["color", "asscend"], [1, "header__inner"], [1, "header__left"], ["mat-icon-button", "", 3, "routerLink"], ["src", "../../../assets/images/wookie.webp", "alt", "", 1, "header__logo"], [1, "header__name"], [1, "header__right"], [1, "header__search"], ["appearance", "standard"], ["matInput", "", "placeholder", "i.e Pulp Fiction", 3, "keyup.enter"], ["searchInput", ""], ["matSuffix", "", 1, "header__mag-glass", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Wookie Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Search Movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup.enter", function HeaderComponent_Template_input_keyup_enter_13_listener($event) { return ctx.onSearch($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_mat_icon_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14); return ctx.onSearch(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"]], styles: [".header__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.header__mag-glass[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header__right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.header__logo[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n@media screen and (max-width: 991px) {\n  .header__name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBRko7QUFLRTtFQUNFLFdBQUE7QUFISjtBQU9JO0VBREY7SUFFSSxhQUFBO0VBSko7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAmX19pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fbWFnLWdsYXNzIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICZfX3JpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fbG9nbyB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICB9XHJcblxyXG4gICZfX25hbWUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../star-rating/star-rating.component */ "FIs3");






const _c0 = function (a1) { return ["/movie", a1]; };
const _c1 = function (a0) { return { id: a0 }; };
function MovieSliderComponent_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "app-star-rating", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](8, _c0, movie_r1.slug))("state", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](10, _c1, movie_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("src", movie_r1.backdrop, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("alt", movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", movie_r1.classification, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", movie_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", movie_r1.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("review", movie_r1.imdb_rating);
} }
function MovieSliderComponent_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, MovieSliderComponent_2_ng_template_0_Template, 11, 12, "ng-template", 3);
} }
const _c2 = function () { return { clickable: true }; };
swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Scrollbar"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["A11y"]]);
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
        this.handleMobile();
    }
    handleMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.slidesPerView = 1;
        }
        else {
            this.slidesPerView = 4.5;
        }
    }
}
MovieSliderComponent.??fac = function MovieSliderComponent_Factory(t) { return new (t || MovieSliderComponent)(); };
MovieSliderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: MovieSliderComponent, selectors: [["app-movie-slider"]], hostBindings: function MovieSliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("resize", function MovieSliderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resolveWindow"]);
    } }, inputs: { movies: "movies" }, decls: 3, vars: 6, consts: [[1, "movie-slider"], [3, "slidesPerView", "spaceBetween", "pagination", "navigation"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [1, "movie-slider__slide", 3, "routerLink", "state"], [3, "src", "alt"], [1, "movie-slider__info", "info"], [1, "movie-slider__info__class"], [1, "movie-slider__info__details"], [3, "review"]], template: function MovieSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "swiper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, MovieSliderComponent_2_Template, 1, 0, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("slidesPerView", ctx.slidesPerView)("spaceBetween", 50)("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](5, _c2))("navigation", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.movies);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_2__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_2__["SwiperSlideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_5__["StarRatingComponent"]], styles: [".movie-slider[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.movie-slider__slide[_ngcontent-%COMP%] {\n  display: block;\n  transition: 0.2s all ease;\n  position: relative;\n}\n.movie-slider__slide[_ngcontent-%COMP%]:hover   .movie-slider__info[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.movie-slider__slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.movie-slider__info[_ngcontent-%COMP%] {\n  transition: 0.2s all ease;\n  opacity: 0;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 99%;\n  background: rgba(23, 23, 23, 0.7);\n}\n.movie-slider__info__class[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  font-size: 1.5rem;\n}\n.movie-slider__info__details[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  position: absolute;\n  bottom: 1.5rem;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  line-height: 1.4;\n}\n.movie-slider[_ngcontent-%COMP%]     .swiper-container {\n  min-height: 15.2rem;\n}\n@media screen and (max-width: 991px) {\n  .movie-slider[_ngcontent-%COMP%]     .swiper-container {\n    min-height: 12rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW92aWUtc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFNO0VBQ0UsVUFBQTtBQUVSO0FBRUk7RUFDRSxXQUFBO0FBQU47QUFHRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQURKO0FBR0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUlJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQU9JO0VBQ0UsbUJBQUE7QUFMTjtBQU1NO0VBRkY7SUFHSSxpQkFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoibW92aWUtc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllLXNsaWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAmX19zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2U7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLm1vdmllLXNsaWRlcl9faW5mbyB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19pbmZvIHtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2U7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDk5JTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMsIDIzLCAyMywgMC43KTtcclxuXHJcbiAgICAmX19jbGFzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICByaWdodDogMXJlbTtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZGV0YWlscyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMS41cmVtO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgbWluLWhlaWdodDogMTUuMnJlbTtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
NoResultsComponent.??fac = function NoResultsComponent_Factory(t) { return new (t || NoResultsComponent)(); };
NoResultsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NoResultsComponent, selectors: [["app-no-results"]], decls: 5, vars: 2, consts: [[1, "no-results"], [3, "routerLink"]], template: function NoResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Sorry you couldn't find your movie, We hope it won't cause any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Drama ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movies_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movies-facade.service */ "ZMVy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../movie-slider/movie-slider.component */ "3ZAS");
/* harmony import */ var _no_results_no_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../no-results/no-results.component */ "3wmA");







function SearchResultsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "app-movie-slider", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const movies_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Search: ", ctx_r2.searchTerm, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("movies", movies_r1);
} }
function SearchResultsComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-no-results");
} }
function SearchResultsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, SearchResultsComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, SearchResultsComponent_div_0_ng_template_2_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const movies_r1 = ctx.ngIf;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", movies_r1.length)("ngIfElse", _r3);
} }
class SearchResultsComponent {
    constructor(moviesFacade, router, activatedRoute) {
        this.moviesFacade = moviesFacade;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
    }
    ngOnInit() {
        this.subscription.add(this.activatedRoute.queryParams.subscribe((data) => {
            this.searchTerm = data.term;
            this.moviesFacade.searchMovie(this.searchTerm);
        }));
        this.movies$ = this.moviesFacade.getSerchResults();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SearchResultsComponent.??fac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_movies_facade_service__WEBPACK_IMPORTED_MODULE_2__["MoviesFacadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SearchResultsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SearchResultsComponent, selectors: [["app-search-results"]], decls: 2, vars: 3, consts: [["class", "search-results", 4, "ngIf"], [1, "search-results"], ["class", "search-results__slider", 4, "ngIf", "ngIfElse"], ["noResults", ""], [1, "search-results__slider"], [3, "movies"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, SearchResultsComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](1, 1, ctx.movies$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_5__["MovieSliderComponent"], _no_results_no_results_component__WEBPACK_IMPORTED_MODULE_6__["NoResultsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".search-results[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1yZXN1bHRzIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _movies_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movies-facade.service */ "ZMVy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/star-rating/star-rating.component */ "FIs3");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");









function MovieComponent_div_0_span_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function MovieComponent_div_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, MovieComponent_div_0_span_17_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const actor_r4 = ctx.$implicit;
    const last_r5 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](actor_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !last_r5);
} }
const _c0 = function (a1) { return ["/genre", a1]; };
function MovieComponent_div_0_mat_chip_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-chip", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const genre_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](2, _c0, genre_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", genre_r7, " ");
} }
function MovieComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "app-star-rating", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, " Cast: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, MovieComponent_div_0_span_17_Template, 3, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, "Genres");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](22, MovieComponent_div_0_mat_chip_22_Template, 2, 4, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("src", movie_r1.poster, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("alt", movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("review", movie_r1.imdb_rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](13, 10, movie_r1.released_on), " | ", movie_r1.length, " | ", movie_r1.director, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", movie_r1.cast);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", movie_r1.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", movie_r1.overview, " ");
} }
class MovieComponent {
    constructor(router, activatedRoute, moviesFacade) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.moviesFacade = moviesFacade;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.movieSlug = this.activatedRoute.snapshot.params.id;
    }
    ngOnInit() {
        this.movieId = history.state['id'];
        if (this.movieId) {
            this.movie$ = this.moviesFacade.getMovieById(this.movieId);
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
    getMovieBySlug() {
        return this.moviesFacade.getMovieBySlug(this.movieSlug);
    }
}
MovieComponent.??fac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_movies_facade_service__WEBPACK_IMPORTED_MODULE_4__["MoviesFacadeService"])); };
MovieComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], decls: 2, vars: 3, consts: [["class", "movie", 4, "ngIf"], [1, "movie"], [1, "movie__wrap"], [1, "movie__poster"], [3, "src", "alt"], [1, "movie__details"], [1, "movie__rating"], [3, "review"], [1, "movie__title"], [1, "movie__info"], [1, "movie__cast"], [4, "ngFor", "ngForOf"], [1, "movie__genres"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "movie__description"], [4, "ngIf"], [3, "routerLink"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, MovieComponent_div_0_Template, 26, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](1, 1, ctx.movie$));
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MovieService {
    constructor(httpService) {
        this.httpService = httpService;
        this.mainUrl = 'https://wookie.codesubmit.io/movies';
        this.searchUrl = 'https://wookie.codesubmit.io/movies?q=';
    }
    fetchMovies() {
        const headers = { Authorization: 'Bearer Wookie2019' };
        return this.httpService.get(this.mainUrl, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((data) => !!data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return data['movies'];
        }));
    }
    searchMovieOnServer(searchTerm) {
        const headers = { Authorization: 'Bearer Wookie2019' };
        return this.httpService
            .get(`${this.searchUrl}${searchTerm}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((data) => !!data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return data['movies'];
        }));
    }
}
MovieService.??fac = function MovieService_Factory(t) { return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MovieService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: MovieService, factory: MovieService.??fac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movies_facade_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies-facade.service */ "ZMVy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/movie-slider/movie-slider.component */ "3ZAS");




function MoviesContainerComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-movie-slider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const genre_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](genre_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("movies", genre_r3.value);
} }
function MoviesContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MoviesContainerComponent_div_0_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const moviesByGenre_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, moviesByGenre_r1));
} }
class MoviesContainerComponent {
    constructor(moviesFacade) {
        this.moviesFacade = moviesFacade;
    }
    ngOnInit() {
        this.moviesByGenre$ = this.moviesFacade.getGroupdMoviesbygenre();
    }
}
MoviesContainerComponent.??fac = function MoviesContainerComponent_Factory(t) { return new (t || MoviesContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_movies_facade_service__WEBPACK_IMPORTED_MODULE_1__["MoviesFacadeService"])); };
MoviesContainerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MoviesContainerComponent, selectors: [["app-movies-container"]], decls: 2, vars: 3, consts: [["class", "movies-container", 4, "ngIf"], [1, "movies-container"], ["class", "movies-container__slider-wrap", 4, "ngFor", "ngForOf"], [1, "movies-container__slider-wrap"], [3, "movies"]], template: function MoviesContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, MoviesContainerComponent_div_0_Template, 3, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 1, ctx.moviesByGenre$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_3__["MovieSliderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: [".movies-container[_ngcontent-%COMP%] {\n  padding: 10px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJtb3ZpZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdmllcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "DajI":
/*!************************************************!*\
  !*** ./src/app/state/movies/movies.actions.ts ***!
  \************************************************/
/*! exports provided: SetMovies, SearchMovies, SetSearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMovies", function() { return SetMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMovies", function() { return SearchMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSearchResults", function() { return SetSearchResults; });
class SetMovies {
    constructor(payload) {
        this.payload = payload;
    }
}
SetMovies.type = '[Movies] Set Movies';
class SearchMovies {
    constructor(payload) {
        this.payload = payload;
    }
}
SearchMovies.type = '[Movies] Search Movies';
class SetSearchResults {
    constructor(payload) {
        this.payload = payload;
    }
}
SetSearchResults.type = '[Movies] Set Search Results';


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 5);
} }
function StarRatingComponent_span_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 6);
} }
function StarRatingComponent_span_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 7);
} }
function StarRatingComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, StarRatingComponent_span_1_i_1_Template, 1, 0, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, StarRatingComponent_span_1_i_2_Template, 1, 0, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, StarRatingComponent_span_1_i_3_Template, 1, 0, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const star_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", star_r1 === "full");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", star_r1 === "half");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", star_r1 === "empty");
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
StarRatingComponent.??fac = function StarRatingComponent_Factory(t) { return new (t || StarRatingComponent)(); };
StarRatingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: StarRatingComponent, selectors: [["app-star-rating"]], inputs: { review: "review" }, decls: 2, vars: 1, consts: [[1, "stars"], [4, "ngFor", "ngForOf"], ["class", "icon-star-full", 4, "ngIf"], ["class", "icon-star-half", 4, "ngIf"], ["class", "icon-star-empty", 4, "ngIf"], [1, "icon-star-full"], [1, "icon-star-half"], [1, "icon-star-empty"]], template: function StarRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, StarRatingComponent_span_1_Template, 4, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.starsArr);
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
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "app"], [1, "app__header"], ["target", "_blank", "href", "https://github.com/yuda85/wookie-movies", 1, "app__github"], ["src", "./../assets/images/github.svg", "alt", "Github Link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _movies_movies_routing_module__WEBPACK_IMPORTED_MODULE_7__["MoviesRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["NgxsModule"].forRoot(_state_app_state__WEBPACK_IMPORTED_MODULE_9__["AppState"]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _movies_movies_routing_module__WEBPACK_IMPORTED_MODULE_7__["MoviesRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["??k"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ZMVy":
/*!*************************************************!*\
  !*** ./src/app/movies/movies-facade.service.ts ***!
  \*************************************************/
/*! exports provided: MoviesFacadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesFacadeService", function() { return MoviesFacadeService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_movies_movies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/movies/movies.actions */ "DajI");
/* harmony import */ var _state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/movies/movies.selectors */ "QRZH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "AcyG");





class MoviesFacadeService {
    constructor(store) {
        this.store = store;
    }
    getMovieBySlug(slug) {
        return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_2__["MoviesStateSelectors"].movies).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((movies) => {
            const movie = movies.find((movie) => {
                return movie.slug === slug;
            });
            return movie;
        }));
    }
    getMovieById(movieId) {
        return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_2__["MoviesStateSelectors"].movies).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((movies) => {
            const movie = movies.find((movie) => {
                return movie.id === movieId;
            });
            return movie;
        }));
    }
    getMoviesbyGenre(genre) {
        return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_2__["MoviesStateSelectors"].moviesByGenre).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return data[genre];
        }));
    }
    getSerchResults() {
        return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_2__["MoviesStateSelectors"].searchResults);
    }
    getGroupdMoviesbygenre() {
        return this.store.select(_state_movies_movies_selectors__WEBPACK_IMPORTED_MODULE_2__["MoviesStateSelectors"].moviesByGenre);
    }
    searchMovie(text) {
        this.store.dispatch(new _state_movies_movies_actions__WEBPACK_IMPORTED_MODULE_1__["SearchMovies"](text));
    }
}
MoviesFacadeService.??fac = function MoviesFacadeService_Factory(t) { return new (t || MoviesFacadeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
MoviesFacadeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: MoviesFacadeService, factory: MoviesFacadeService.??fac, providedIn: 'root' });


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
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "729U");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie/movie.component */ "8ilY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'movie/:id',
        component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_3__["MovieComponent"],
    },
    {
        path: 'genre/:id',
        component: _components_genre_page_genre_page_component__WEBPACK_IMPORTED_MODULE_1__["GenrePageComponent"],
    },
    {
        path: 'search',
        component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_2__["SearchResultsComponent"],
    },
];
class MoviesRoutingModule {
}
MoviesRoutingModule.??fac = function MoviesRoutingModule_Factory(t) { return new (t || MoviesRoutingModule)(); };
MoviesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: MoviesRoutingModule });
MoviesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](MoviesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
MaterialModule.??fac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: MaterialModule });
MaterialModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[MaterialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _movies_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies.actions */ "DajI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_movies_movie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/movies/movie.service */ "APOJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let MoviesState = class MoviesState {
    constructor(movieService, router) {
        this.movieService = movieService;
        this.router = router;
    }
    ngxsOnInit(ctx) {
        this.movieService.fetchMovies().subscribe((data) => {
            this.handleAddedMovies(ctx, data);
        });
    }
    setMovies(ctx, action) {
        this.handleAddedMovies(ctx, action.payload);
    }
    setSearchResults(ctx, action) {
        ctx.patchState({ searchResults: action.payload });
    }
    searchMovies(ctx, action) {
        const searchTerm = action.payload;
        const term = action.payload.toLowerCase();
        const movies = ctx.getState().movies;
        const foundMovies = movies.filter((movie) => {
            const name = movie.title.toLocaleLowerCase();
            return name.includes(term);
        });
        if (!foundMovies.length) {
            this.movieService
                .searchMovieOnServer(searchTerm)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((data) => !!data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data['movies']) {
                    return data['movies'];
                }
                else {
                    return data;
                }
            }))
                .subscribe((data) => {
                ctx.patchState({ searchResults: data });
                this.handleRoutingAfterSerch(data, term);
            });
        }
        else {
            ctx.patchState({ searchResults: foundMovies });
            this.handleRoutingAfterSerch(foundMovies, term);
        }
    }
    mapMoviesToGenres(movies, ctx) {
        let moviesByGenre = {};
        movies.forEach((movie) => {
            movie.genres.forEach((genre) => {
                if (moviesByGenre[genre] && moviesByGenre[genre].length) {
                    moviesByGenre[genre].push(movie);
                }
                else {
                    moviesByGenre[genre] = [movie];
                }
            });
        });
        ctx.patchState({ moviesByGenre: moviesByGenre });
    }
    handleRoutingAfterSerch(movies, searchTerm) {
        this.router.navigate(['search'], { queryParams: { term: searchTerm } });
    }
    handleAddedMovies(ctx, movies) {
        ctx.patchState({ movies: movies });
        this.mapMoviesToGenres(movies, ctx);
    }
};
MoviesState.??fac = function MoviesState_Factory(t) { return new (t || MoviesState)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](src_app_movies_movie_service__WEBPACK_IMPORTED_MODULE_5__["MovieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
MoviesState.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: MoviesState, factory: MoviesState.??fac, providedIn: 'root' });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_movies_actions__WEBPACK_IMPORTED_MODULE_3__["SetMovies"])
], MoviesState.prototype, "setMovies", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_movies_actions__WEBPACK_IMPORTED_MODULE_3__["SetSearchResults"])
], MoviesState.prototype, "setSearchResults", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_movies_actions__WEBPACK_IMPORTED_MODULE_3__["SearchMovies"])
], MoviesState.prototype, "searchMovies", null);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movies_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movies-facade.service */ "ZMVy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../movie-slider/movie-slider.component */ "3ZAS");






function GenrePageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "app-movie-slider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const movies_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("movies", movies_r1);
} }
class GenrePageComponent {
    constructor(moviesFacade, activatedRoute) {
        this.moviesFacade = moviesFacade;
        this.activatedRoute = activatedRoute;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
    }
    ngOnInit() {
        this.genre = this.activatedRoute.snapshot.params.id;
        this.movies$ = this.moviesFacade.getMoviesbyGenre(this.genre);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
GenrePageComponent.??fac = function GenrePageComponent_Factory(t) { return new (t || GenrePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_movies_facade_service__WEBPACK_IMPORTED_MODULE_2__["MoviesFacadeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
GenrePageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: GenrePageComponent, selectors: [["app-genre-page"]], decls: 2, vars: 3, consts: [["class", "genre-page", 4, "ngIf"], [1, "genre-page"], [3, "movies"]], template: function GenrePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, GenrePageComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](1, 1, ctx.movies$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _movie_slider_movie_slider_component__WEBPACK_IMPORTED_MODULE_5__["MovieSliderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".genre-page[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2VucmUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZ2VucmUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5yZS1wYWdlIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuIl19 */"] });


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
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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