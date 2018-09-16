(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-firebase */ "./node_modules/angular-firebase/dist/index.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-popup/login-popup.component */ "./src/app/login-popup/login-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _upload_receipt_upload_receipt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload-receipt/upload-receipt.component */ "./src/app/upload-receipt/upload-receipt.component.ts");
/* harmony import */ var _services_expenses_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/expenses.service */ "./src/app/services/expenses.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/friends/friends.component.ts");
/* harmony import */ var _payment_popup_payment_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment-popup/payment-popup.component */ "./src/app/payment-popup/payment-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: "upload", component: _upload_receipt_upload_receipt_component__WEBPACK_IMPORTED_MODULE_13__["UploadReceiptComponent"] },
    { path: "friends", component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_16__["FriendsComponent"] },
    { path: "**", component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
                _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_11__["LoginPopupComponent"],
                _upload_receipt_upload_receipt_component__WEBPACK_IMPORTED_MODULE_13__["UploadReceiptComponent"],
                _friends_friends_component__WEBPACK_IMPORTED_MODULE_16__["FriendsComponent"],
                _payment_popup_payment_popup_component__WEBPACK_IMPORTED_MODULE_17__["PaymentPopupComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                angular_firebase__WEBPACK_IMPORTED_MODULE_6__["FirebaseModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            providers: [angular_firebase__WEBPACK_IMPORTED_MODULE_6__["FirebaseProvider"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"], _services_expenses_service__WEBPACK_IMPORTED_MODULE_14__["ExpensesService"]],
            entryComponents: [_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_11__["LoginPopupComponent"], _payment_popup_payment_popup_component__WEBPACK_IMPORTED_MODULE_17__["PaymentPopupComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/friends/friends.component.css":
/*!***********************************************!*\
  !*** ./src/app/friends/friends.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  overflow-x: hidden; /* Prevent scroll on narrow devices */\r\n  background-color: #63D13E;\r\n}\r\n\r\nbody {\r\n  padding-top: 56px;\r\n  height: 100vh;\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n  .offcanvas-collapse {\r\n    position: fixed;\r\n    top: 56px; /* Height of navbar */\r\n    bottom: 0;\r\n    left: 100%;\r\n    width: 100%;\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n    overflow-y: auto;\r\n    visibility: hidden;\r\n    background-color: #343a40;\r\n    transition-timing-function: ease-in-out;\r\n    transition-duration: .3s;\r\n    transition-property: left, visibility;\r\n  }\r\n  .offcanvas-collapse.open {\r\n    left: 0;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n.nav-scroller {\r\n  position: relative;\r\n  z-index: 2;\r\n  height: 2.75rem;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.nav-scroller .nav {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  padding-bottom: 1rem;\r\n  margin-top: -1px;\r\n  overflow-x: auto;\r\n  color: rgba(255, 255, 255, .75);\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.nav-underline .nav-link {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  font-size: .875rem;\r\n  color: #6c757d;\r\n}\r\n\r\n.nav-underline .nav-link:hover {\r\n  color: #007bff;\r\n}\r\n\r\n.nav-underline .active {\r\n  font-weight: 500;\r\n  color: #343a40;\r\n}\r\n\r\n.text-white-50 { color: rgba(255, 255, 255, .5); }\r\n\r\n.bg-purple { background-color: #333333; }\r\n\r\n.lh-100 { line-height: 1; }\r\n\r\n.lh-125 { line-height: 1.25; }\r\n\r\n.lh-150 { line-height: 1.5; }\r\n"

/***/ }),

/***/ "./src/app/friends/friends.component.html":
/*!************************************************!*\
  !*** ./src/app/friends/friends.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n<main role=\"main\" class=\"container\">\r\n  <div class=\"d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm\">\r\n    <img class=\"mr-3\" src=\"../../assets/img/49945.svg\" alt=\"\" width=\"48\" height=\"48\">\r\n    <div class=\"lh-100\">\r\n      <h6 class=\"mb-0 text-white lh-100\">Friends</h6>\r\n      <small>See what expenses are being split</small>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"my-3 p-3 bg-white rounded shadow-sm\">\r\n    <h6 class=\"border-bottom border-gray pb-2 mb-0\">Who Owes You</h6>\r\n    <div class=\"media text-muted pt-3\" *ngIf=\"isIsabella\">\r\n      <img data-src=\"holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1\" alt=\"\" class=\"mr-2 rounded\">\r\n      <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n        <strong class=\"d-block text-gray-dark\">Sean owes you:</strong>\r\n        $ {{seanAmountOwing | number: '1.2-2'}}\r\n      </p>\r\n    </div>\r\n    <div class=\"media text-muted pt-3\" *ngIf=\"!isIsabella\">\r\n      <img data-src=\"holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1\" alt=\"\" class=\"mr-2 rounded\">\r\n      <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n        <strong class=\"d-block text-gray-dark\">None</strong>\r\n        No one owes you money at this time.\r\n      </p>\r\n    </div>\r\n    <small class=\"d-block text-right mt-3\">\r\n      <a href=\"/\">Logout</a>\r\n    </small>\r\n  </div>\r\n\r\n  <div class=\"my-3 p-3 bg-white rounded shadow-sm\" *ngIf=\"!isIsabella\">\r\n    <h6 class=\"border-bottom border-gray pb-2 mb-0\">What you owe others</h6>\r\n    <div class=\"media text-muted pt-3\">\r\n      <img data-src=\"holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1\" alt=\"\" class=\"mr-2 rounded\">\r\n      <div class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n        <div class=\"d-flex justify-content-between align-items-center w-100\">\r\n          <strong class=\"text-gray-dark\">You owe Isabella</strong>\r\n          <a (click)=\"onPayClick()\">Pay Mans</a>\r\n        </div>\r\n        <span class=\"d-block\">${{seanAmountOwing | number: '1.2-2'}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"media text-muted pt-3\" *ngIf=\"isIsabella\">\r\n      <img data-src=\"holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1\" alt=\"\" class=\"mr-2 rounded\">\r\n      <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n        <strong class=\"d-block text-gray-dark\">None</strong>\r\n        You don't owe anyone any money at this time.\r\n      </p>\r\n    </div>\r\n    <small class=\"d-block text-right mt-3\">\r\n      <a href=\"/\">Logout</a>\r\n    </small>\r\n  </div>\r\n</main>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/friends/friends.component.ts":
/*!**********************************************!*\
  !*** ./src/app/friends/friends.component.ts ***!
  \**********************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/expenses.service */ "./src/app/services/expenses.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _payment_popup_payment_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../payment-popup/payment-popup.component */ "./src/app/payment-popup/payment-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(fbService, expenseService, dialog) {
        this.fbService = fbService;
        this.expenseService = expenseService;
        this.dialog = dialog;
        this.seanAmountOwing = 0;
        this.isIsabella = (localStorage.getItem("user") === "Isabella");
    }
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbService.getAmountsOweing().on("value", function (snapshot) {
            _this.seanAmountOwing = snapshot.val().amountOweing;
        });
    };
    FriendsComponent.prototype.onPayClick = function () {
        var _this = this;
        this.expenseService.transferMoney().subscribe(function (response) {
            var dialogRef = _this.dialog.open(_payment_popup_payment_popup_component__WEBPACK_IMPORTED_MODULE_4__["PaymentPopupComponent"], {
                data: response
            });
        });
    };
    FriendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(/*! ./friends.component.html */ "./src/app/friends/friends.component.html"),
            styles: [__webpack_require__(/*! ./friends.component.css */ "./src/app/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Globals\r\n */\r\n\r\n/* Links */\r\n\r\na,\r\na:focus,\r\na:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* Custom default button */\r\n\r\n.btn-secondary,\r\n.btn-secondary:hover,\r\n.btn-secondary:focus {\r\n  color: #333;\r\n  text-shadow: none; /* Prevent inheritance from `body` */\r\n  background-color: #fff;\r\n  border: .05rem solid #fff;\r\n}\r\n\r\n/*\r\n * Base structure\r\n */\r\n\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n  background-color: #63D13E;\r\n  background-image: -webkit-linear-gradient(30deg, #63D13E 61%, #f5f5f5 39%);\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  color: #fff;\r\n  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);\r\n  box-shadow: inset 0 0 5rem rgba(18, 173, 42, .5);\r\n}\r\n\r\n.cover-container {\r\n  max-width: 42em;\r\n}\r\n\r\n/*\r\n * Header\r\n */\r\n\r\n.masthead {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.masthead-brand {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.nav-masthead .nav-link {\r\n  padding: .25rem 0;\r\n  font-weight: 700;\r\n  color: rgba(255, 255, 255, .5);\r\n  background-color: transparent;\r\n  border-bottom: .25rem solid transparent;\r\n}\r\n\r\n.nav-masthead .nav-link:hover,\r\n.nav-masthead .nav-link:focus {\r\n  border-bottom-color: rgba(255, 255, 255, .25);\r\n}\r\n\r\n.nav-masthead .nav-link + .nav-link {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.nav-masthead .active {\r\n  color: #fff;\r\n  border-bottom-color: #fff;\r\n}\r\n\r\n@media (min-width: 48em) {\r\n  .masthead-brand {\r\n    float: left;\r\n  }\r\n  .nav-masthead {\r\n    float: right;\r\n  }\r\n}\r\n\r\n/*\r\n * Cover\r\n */\r\n\r\n.cover {\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.cover .btn-lg {\r\n  padding: .75rem 1.25rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.learn-more-btn {\r\n  color: #63D13E;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n\r\n.mastfoot {\r\n  color: rgba(255, 255, 255, .5);\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"text-container\">\r\n<div >\r\n  <div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\r\n    <header class=\"masthead mb-auto\">\r\n      <div class=\"inner\">\r\n        <h3 class=\"masthead-brand\">Lejr the 2</h3>\r\n        <nav class=\"nav nav-masthead justify-content-center\">\r\n          <a class=\"nav-link active\">Home</a>\r\n          <a class=\"nav-link\" (click)=\"openDialog()\">Login</a>\r\n          <a class=\"nav-link\" href=\"https://github.com/gzcharleszhang/Lejr2\">Github</a>\r\n        </nav>\r\n      </div>\r\n    </header>\r\n\r\n    <main role=\"main\" class=\"inner cover\">\r\n      <h1 class=\"cover-heading\">For Personal and for Enterprise.</h1>\r\n      <p class=\"lead\">Using image recognition, machine learning, and cloud storage to track transactions. Instantly\r\n      split your bill with your friends, clients, or business partners.</p>\r\n      <p class=\"lead learn-more-btn\">\r\n        <a class=\"btn btn-lg btn-secondary\" (click)=\"openDialog()\">Learn more</a>\r\n      </p>\r\n    </main>\r\n\r\n    <footer class=\"mastfoot mt-auto\">\r\n      <div class=\"inner\">\r\n        <p>Created by <a href=\"https://github.com/novacer\">Jack</a>, and by <a href=\"https://github.com/gzcharleszhang\">Charles</a>.</p>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n\r\n</div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-popup/login-popup.component */ "./src/app/login-popup/login-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(dialog) {
        this.dialog = dialog;
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_2__["LoginPopupComponent"]);
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/login-popup/login-popup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 75px;\r\n  padding-bottom: 75px;\r\n  padding-right: 75px;\r\n  padding-left: 75px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"text\"] {\r\n  margin-bottom: 5%;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.green-btn {\r\n  background-color: #63D13E;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\r\n<form class=\"form-signin\">\r\n  <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\r\n  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n  <input type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Username\" required autofocus\r\n  [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\">\r\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\r\n  <div class=\"checkbox mb-3\">\r\n    <label>\r\n      <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n    </label>\r\n  </div>\r\n  <button class=\"btn btn-lg btn-secondary btn-block green-btn\" (click)=\"onLoginClick()\">Sign in</button>\r\n  <p class=\"mt-5 mb-3 text-muted\">&copy;2018</p>\r\n</form>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.ts ***!
  \******************************************************/
/*! exports provided: LoginPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPopupComponent", function() { return LoginPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPopupComponent = /** @class */ (function () {
    function LoginPopupComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    LoginPopupComponent.prototype.ngOnInit = function () {
        this.username = "";
    };
    LoginPopupComponent.prototype.onLoginClick = function () {
        var _this = this;
        if (this.username === "Isabella") {
            localStorage.setItem("user", this.username);
            this.router.navigateByUrl("upload").then(function (next) {
                _this.dialog.close();
            });
        }
        else if (this.username === "Sean") {
            localStorage.setItem("user", this.username);
            this.router.navigateByUrl("friends").then(function (next) {
                _this.dialog.close();
            });
        }
    };
    LoginPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-popup',
            template: __webpack_require__(/*! ./login-popup.component.html */ "./src/app/login-popup/login-popup.component.html"),
            styles: [__webpack_require__(/*! ./login-popup.component.css */ "./src/app/login-popup/login-popup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], LoginPopupComponent);
    return LoginPopupComponent;
}());



/***/ }),

/***/ "./src/app/payment-popup/payment-popup.component.css":
/*!***********************************************************!*\
  !*** ./src/app/payment-popup/payment-popup.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment-popup/payment-popup.component.html":
/*!************************************************************!*\
  !*** ./src/app/payment-popup/payment-popup.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    Payment Complete!\r\n  </mat-card-title>\r\n\r\n  <mat-card-content>\r\n    <p>You paid the full balance due to Isabella</p>\r\n    <p>The amount was ${{paymentInfo.amount}} {{paymentInfo.currency}}</p>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/payment-popup/payment-popup.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/payment-popup/payment-popup.component.ts ***!
  \**********************************************************/
/*! exports provided: PaymentPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPopupComponent", function() { return PaymentPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PaymentPopupComponent = /** @class */ (function () {
    function PaymentPopupComponent(data) {
        this.data = data;
        this.paymentInfo = data;
        console.log(data);
    }
    PaymentPopupComponent.prototype.ngOnInit = function () {
    };
    PaymentPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-popup',
            template: __webpack_require__(/*! ./payment-popup.component.html */ "./src/app/payment-popup/payment-popup.component.html"),
            styles: [__webpack_require__(/*! ./payment-popup.component.css */ "./src/app/payment-popup/payment-popup.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], PaymentPopupComponent);
    return PaymentPopupComponent;
}());



/***/ }),

/***/ "./src/app/services/expenses.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/expenses.service.ts ***!
  \**********************************************/
/*! exports provided: ExpensesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesService", function() { return ExpensesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExpensesService = /** @class */ (function () {
    function ExpensesService(http) {
        this.http = http;
        this.CREATE_EXPENSE_ENDPOINT = "/api/expenses";
        this.TRANSACT_ENDPOINT = "/api/transactions/transfer";
        this.BUYER_USER_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_9de7e105-36ff-4151-9b52-35607f4c50bb";
        this.PAYER_USER_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_39e0dc13-14d5-4b5c-af5a-49b1dcef34ed";
        this.BUYER_ACCOUNT_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_74461df2-7b46-4c5e-a538-815ac6a9ae1c";
        this.PAYER_ACCOUNT_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_24e38c7d-11da-4feb-854c-57fcd5241218";
    }
    ExpensesService.prototype.createExpense = function (url) {
        if (localStorage.getItem("user") === "Isabella") {
            var userId = this.BUYER_USER_ID;
            var body = {
                url: url,
                userId: userId
            };
            return this.http.post(this.CREATE_EXPENSE_ENDPOINT, body);
        }
        else {
            return null;
        }
    };
    ExpensesService.prototype.transferMoney = function () {
        if (localStorage.getItem("user") === "Sean") {
            var fromAccountID = this.PAYER_ACCOUNT_ID;
            var toAccountID = this.BUYER_ACCOUNT_ID;
            var userId = this.PAYER_USER_ID;
            var body = {
                fromAccountID: fromAccountID,
                toAccountID: toAccountID,
                userId: userId
            };
            return this.http.post(this.TRANSACT_ENDPOINT, body);
        }
        else {
            return null;
        }
    };
    ExpensesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExpensesService);
    return ExpensesService;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        this.BUYER_USER_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_9de7e105-36ff-4151-9b52-35607f4c50bb";
        this.PAYER_USER_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_39e0dc13-14d5-4b5c-af5a-49b1dcef34ed";
        this.BUYER_ACCOUNT_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_74461df2-7b46-4c5e-a538-815ac6a9ae1c";
        this.PAYER_ACCOUNT_ID = "7291e7e8-1da3-4c23-8594-795f67fa5a65_24e38c7d-11da-4feb-854c-57fcd5241218";
        var config = {
            apiKey: "AIzaSyCbdv7JsEMaBkdaj5406baxNv0aOJJwuKk",
            authDomain: "lejr2firebase.firebaseapp.com",
            databaseURL: "https://lejr2firebase.firebaseio.com",
            projectId: "lejr2firebase",
            storageBucket: "lejr2firebase.appspot.com",
            messagingSenderId: "993862945593"
        };
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
        this.database = firebase__WEBPACK_IMPORTED_MODULE_1__["database"]();
        this.storage = firebase__WEBPACK_IMPORTED_MODULE_1__["storage"]();
    }
    FirebaseService.prototype.createFileReference = function (file, name) {
        return this.storage.ref("images/" + name);
    };
    FirebaseService.prototype.getAmountsOweing = function () {
        return this.database.ref("/users/" + this.PAYER_USER_ID);
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/upload-receipt/upload-receipt.component.css":
/*!*************************************************************!*\
  !*** ./src/app/upload-receipt/upload-receipt.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Sticky footer styles\r\n-------------------------------------------------- */\r\nhtml {\r\n  height: 100%;\r\n}\r\nbody {\r\n  margin: 0;\r\n  background-size: cover;\r\n  background-color: #63D13E;\r\n  height: 100%;\r\n  padding: 1px;\r\n}\r\n.body {\r\n  height: 100vh;\r\n  color: #333333;\r\n}\r\n/* Custom page CSS\r\n-------------------------------------------------- */\r\n/* Not required for template or sticky footer method. */\r\n.container {\r\n  width: auto;\r\n  max-width: 680px;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.upload-btn {\r\n  padding-top: 5%;\r\n}\r\n.split-btn {\r\n  background-color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/upload-receipt/upload-receipt.component.html":
/*!**************************************************************!*\
  !*** ./src/app/upload-receipt/upload-receipt.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n<div class=\"body\">\r\n  <div class=\"container\">\r\n\r\n    <ng-container *ngIf=\"!fileChoosen\">\r\n      <h1 class=\"mt-5\">Add a new receipt</h1>\r\n      <p class=\"lead\">Then we'll parse it for you using Machine Learning and OCR.</p>\r\n\r\n      <input id=\"photo\" type=\"file\" accept=\".png, .jpg\" class=\"upload-btn\" (change)=\"onFileChosen($event)\">\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"fileChoosen\">\r\n      <h1 class=\"mt-5\">Upload Success</h1>\r\n      <p class=\"lead\">Processing Receipt</p>\r\n\r\n      <ng-container *ngIf=\"!ocrDone\">\r\n        <mat-spinner></mat-spinner>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"ocrDone\">\r\n        <div class=\"row\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <img [src]=\"imgUrl\" style=\"max-width: 100%; padding-bottom: 1%\">\r\n                <button mat-button (click)=\"onSplitClick()\" class=\"split-btn\">Split Receipt</button>\r\n                <button mat-button (click)=\"onResetClick()\" class=\"split-btn\">Upload Another Receipt</button>\r\n              </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                <mat-card style=\"max-height: 100vh\">\r\n                  <mat-card-content>\r\n                    <h1>Receipt Fields</h1>\r\n                    <p class=\"lead\">Merchant name: {{imageFields.merchantName}}</p>\r\n                    <p class=\"lead\">Total Amount (in CAD): $ {{imageFields.amount | number: '1.2-2'}}</p>\r\n                    <p class=\"lead\" *ngIf=\"imageFields.originalCurrency !== 'CAD'\">\r\n                      Original Amount (in {{imageFields.originalCurrency}}):\r\n                      {{imageFields.originalAmount | number: '1.2-2'}}\r\n                    </p>\r\n                    <h1 class=\"mt-5\">Breakdown: </h1>\r\n                    <ng-container *ngFor=\"let item of imageFields.lineItems\">\r\n                      <p class=\"small\">{{item.text}}</p>\r\n                    </ng-container>\r\n                  </mat-card-content>\r\n                </mat-card>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/upload-receipt/upload-receipt.component.ts":
/*!************************************************************!*\
  !*** ./src/app/upload-receipt/upload-receipt.component.ts ***!
  \************************************************************/
/*! exports provided: UploadReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadReceiptComponent", function() { return UploadReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/expenses.service */ "./src/app/services/expenses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadReceiptComponent = /** @class */ (function () {
    function UploadReceiptComponent(fbService, expenseService, router) {
        this.fbService = fbService;
        this.expenseService = expenseService;
        this.router = router;
    }
    UploadReceiptComponent.prototype.ngOnInit = function () {
        this.fileChoosen = false;
        this.ocrDone = false;
        this.imageFields = null;
    };
    UploadReceiptComponent.prototype.onFileChosen = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var fileName = Math.random().toString(36).substr(2);
        if (name !== null && name !== undefined) {
            var fileReference_1 = this.fbService.createFileReference(file, fileName);
            this.fileChoosen = true;
            // upload the file to C L O U D S T O R A G E
            fileReference_1.put(file).then(function (snapshot) {
                // get the download url
                fileReference_1.getDownloadURL().then(function (url) {
                    _this.imgUrl = url;
                    // Call the OCR API
                    _this.expenseService.createExpense(url).subscribe(function (res) {
                        _this.imageFields = res;
                        console.log(_this.imageFields.originalCurrency);
                        _this.ocrDone = true;
                    });
                });
            });
        }
    };
    UploadReceiptComponent.prototype.onSplitClick = function () {
        this.router.navigateByUrl("friends");
    };
    UploadReceiptComponent.prototype.onResetClick = function () {
        this.fileChoosen = false;
        this.ocrDone = false;
    };
    UploadReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-receipt',
            template: __webpack_require__(/*! ./upload-receipt.component.html */ "./src/app/upload-receipt/upload-receipt.component.html"),
            styles: [__webpack_require__(/*! ./upload-receipt.component.css */ "./src/app/upload-receipt/upload-receipt.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UploadReceiptComponent);
    return UploadReceiptComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MARY\Documents\GitHub\Lejr2\angular-src\lejr-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map