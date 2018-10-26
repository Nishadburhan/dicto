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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ang-src';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navaba_navaba_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navaba/navaba.component */ "./src/app/components/navaba/navaba.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_manage_manage_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/manage/manage.service */ "./src/app/services/manage/manage.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/manage/manage.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./suggestions/suggestions.component */ "./src/app/suggestions/suggestions.component.ts");
/* harmony import */ var _discuss_discuss_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./discuss/discuss.component */ "./src/app/discuss/discuss.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// Services




// Auth Guard






// Routes
var appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'manage', component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_24__["ManageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'discuss', component: _discuss_discuss_component__WEBPACK_IMPORTED_MODULE_27__["DiscussComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navaba_navaba_component__WEBPACK_IMPORTED_MODULE_6__["NavabaComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"],
                _manage_manage_component__WEBPACK_IMPORTED_MODULE_24__["ManageComponent"],
                _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_26__["SuggestionsComponent"],
                _discuss_discuss_component__WEBPACK_IMPORTED_MODULE_27__["DiscussComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot({ preventDuplicates: true, }),
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_17__["SweetAlert2Module"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastContainerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__["FlashMessagesModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_25__["ClipboardModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_18__["ValidateService"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__["FlashMessagesService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__["JwtHelperService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
                _services_manage_manage_service__WEBPACK_IMPORTED_MODULE_21__["ManageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navaba/navaba.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navaba/navaba.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navaba/navaba.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navaba/navaba.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navaba/navaba.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navaba/navaba.component.ts ***!
  \*******************************************************/
/*! exports provided: NavabaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavabaComponent", function() { return NavabaComponent; });
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

var NavabaComponent = /** @class */ (function () {
    function NavabaComponent() {
    }
    NavabaComponent.prototype.ngOnInit = function () {
    };
    NavabaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navaba',
            template: __webpack_require__(/*! ./navaba.component.html */ "./src/app/components/navaba/navaba.component.html"),
            styles: [__webpack_require__(/*! ./navaba.component.css */ "./src/app/components/navaba/navaba.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavabaComponent);
    return NavabaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-size: .875rem;\r\n  }\r\n  \r\n  .feather {\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: text-bottom;\r\n  }\r\n  \r\n  /*\r\n   * Sidebar\r\n   */\r\n  \r\n  .sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 100; /* Behind the navbar */\r\n    padding: 48px 0 0; /* Height of navbar */\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n  }\r\n  \r\n  .sidebar-sticky {\r\n    position: relative;\r\n    top: 0;\r\n    height: calc(100vh - 48px);\r\n    padding-top: .5rem;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  }\r\n  \r\n  @supports ((position: -webkit-sticky) or (position: sticky)) {\r\n    .sidebar-sticky {\r\n      position: -webkit-sticky;\r\n      position: sticky;\r\n    }\r\n  }\r\n  \r\n  .sidebar .nav-link {\r\n    font-weight: 500;\r\n    color: #333;\r\n  }\r\n  \r\n  .sidebar .nav-link .feather {\r\n    margin-right: 4px;\r\n    color: #999;\r\n  }\r\n  \r\n  .sidebar .nav-link.active {\r\n    color: #007bff;\r\n  }\r\n  \r\n  .sidebar .nav-link:hover .feather,\r\n  .sidebar .nav-link.active .feather {\r\n    color: inherit;\r\n  }\r\n  \r\n  .sidebar-heading {\r\n    font-size: .75rem;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  /*\r\n   * Content\r\n   */\r\n  \r\n  [role=\"main\"] {\r\n    padding-top: 48px; /* Space for fixed navbar */\r\n  }\r\n  \r\n  /*\r\n   * Navbar\r\n   */\r\n  \r\n  .navbar-brand {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, .25);\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n  }\r\n  \r\n  .navbar .form-control {\r\n    padding: .75rem 1rem;\r\n    border-width: 0;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .form-control-dark {\r\n    color: #fff;\r\n    background-color: rgba(255, 255, 255, .1);\r\n    border-color: rgba(255, 255, 255, .1);\r\n  }\r\n  \r\n  .form-control-dark:focus {\r\n    border-color: transparent;\r\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n  }\r\n  \r\n  .item-copy{\r\n    cursor: pointer;\r\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!-- SideBar -->\n    <app-sidebar></app-sidebar>\n    <!-- Sidebar -->\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3\">\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"jumbotron text-center\">\n            <h1 class=\"display-4\">Search For Word!</h1>\n\n            <form (submit)=\"findMeaning()\">\n              <p class=\"lead\">\n                <!-- <input class=\"form-control w-100\" type=\"search\" [(ngModel)]=\"word\" name=\"word\" placeholder=\"Search\"\n                  aria-label=\"Search\"> -->\n                <input id=\"typeahead-basic\" type=\"search\" class=\"form-control w-100\" (selectItem)=\"selectedItem($event)\"\n                  [(ngModel)]=\"wordsArry\" placeholder=\"Search\" name=\"word\" [ngbTypeahead]=\"search\" aria-label=\"Search\">\n              </p>\n              <!-- <button type=\"submit\" class=\"btn btn-primary btn-lg\">Search</button> -->\n            </form>\n\n            <div class=\"panel panel-default\">\n              <!-- List group -->\n              <ul class=\"list-group\">\n                <li class=\"list-group-item item-copy\" ngxClipboard [cbContent]=\"tag.word\" *ngFor=\"let tag of tags\" (click)=\"copyToclipBoard(tag.word)\">\n                  {{tag.word}} | <i class=\"fa fa-copy\"></i></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <!-- <div class=\"jumbotron text-center\" style=\"padding-top:5px;\"> -->\n          <h6 class=\"display-4\">Your Suggestions</h6>\n          <div class=\"table-responsive\" style=\"overflow: auto; max-height: 180px;\">\n            <table class=\"table table-striped table-sm\">\n              <thead>\n                <th>Word</th>\n                <th class=\"text-center\">Status</th>\n              </thead>\n              <tbody>\n                <tr *ngIf=\"suggestions.length==0\">\n                  <td colspan=\"2\">\n                    You have made no suggestions!\n                  </td>\n                </tr>\n                <tr *ngFor=\"let word of suggestions\">\n\n                  <td>\n                    {{word.word}}\n                  </td>\n                  <td class=\"text-center\">\n                    <span class=\"badge badge-warning\" *ngIf=\"word.status==0\">Pending</span>\n                    <span class=\"badge badge-success\" *ngIf=\"word.status==1\">Accepted</span>\n                    <span class=\"badge badge-danger\" *ngIf=\"word.status==2\">Rejected</span>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- </div> -->\n        </div>\n      </div>\n    </main>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_manage_manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/manage/manage.service */ "./src/app/services/manage/manage.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var wordsArry = [];
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, service, toast) {
        this.auth = auth;
        this.service = service;
        this.toast = toast;
        this.tags = [];
        this.suggestions = [];
        this.locStorage = JSON.parse(localStorage.getItem('user'));
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (term) { return term.length < 2 ? []
                : wordsArry.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.service.getAllWords().subscribe(function (words) {
            for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                var word = words_1[_i];
                wordsArry.push(word.word);
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllSuggetionsByEmail({ email: this.locStorage.email }).subscribe(function (suggestions) {
            _this.suggestions = suggestions;
        });
    };
    DashboardComponent.prototype.findMeaning = function () {
        var _this = this;
        var word = {
            word: this.wordsArry
        };
        this.service.findWordByName(word).subscribe(function (data) {
            if (data.success) {
                _this.tags = data.tags;
            }
            else {
                var suggest_1 = {
                    word: _this.wordsArry,
                    email: _this.locStorage.email,
                    status: 0
                };
                _this.toast.error(data.msg, 'Suggestion', { positionClass: 'toast-top-right', timeOut: 1000 });
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: 'Word Not Found!',
                    html: '<b style="font-weight:700">[' + _this.wordsArry + ']</b> : Make a word suggestion!',
                    type: 'error',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Suggest'
                }).then(function (result) {
                    if (result.value) {
                        _this.service.makeSuggetion(suggest_1).subscribe(function (data) {
                            if (data.success) {
                                _this.wordsArry = '';
                                _this.ngOnInit();
                                _this.toast.success(data.msg, 'Suggestion', { positionClass: 'toast-top-right' });
                            }
                            else {
                                _this.toast.error(data.msg, 'Suggestion', { positionClass: 'toast-top-right' });
                            }
                        });
                    }
                });
            }
        });
    };
    // Search On Selected
    DashboardComponent.prototype.selectedItem = function (item) {
        var _this = this;
        var word = {
            word: item.item
        };
        // console.log(word);return;
        this.service.findWordByName(word).subscribe(function (data) {
            // this.tags=data.tags;
            // console.log(data.success);return;
            if (data.success) {
                _this.tags = data.tags;
            }
            else {
                // this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    DashboardComponent.prototype.copyToclipBoard = function (tag) {
        this.toast.success('Copied to clipboard', 'Copy', { positionClass: 'toast-top-center', timeOut: 1000 });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastContainerDirective"]),
        __metadata("design:type", ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastContainerDirective"])
    ], DashboardComponent.prototype, "toastContainer", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_manage_manage_service__WEBPACK_IMPORTED_MODULE_2__["ManageService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/discuss/discuss.component.css":
/*!***********************************************!*\
  !*** ./src/app/discuss/discuss.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color: #eeeeee;\r\n}\r\n\r\n.h7 {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.gedf-wrapper {\r\n    margin-top: 0.97rem;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .gedf-main {\r\n        padding-left: 4rem;\r\n        padding-right: 4rem;\r\n    }\r\n    .gedf-card {\r\n        margin-bottom: 2.77rem;\r\n    }\r\n}\r\n\r\n/**Reset Bootstrap*/\r\n\r\n.dropdown-toggle::after {\r\n    content: none;\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/discuss/discuss.component.html":
/*!************************************************!*\
  !*** ./src/app/discuss/discuss.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!-- SideBar -->\n    <app-sidebar></app-sidebar>\n    <!-- Sidebar -->\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3\">\n      </div>\n      <!-- <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1 class=\"display-4\">Start Discussions!</h1>\n          <form (submit)=\"createSubject()\">\n            <input type=\"text\" class=\"form-control new-tagText\" [(ngModel)]=\"newSubject\" name=\"newSubject\" placeholder=\"New Subject...\">\n          </form>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <dl *ngFor=\"let disc of allSubjects\">\n            <dt>{{disc.subject}}</dt>\n            <dd>...</dd>\n          </dl>\n        </div>\n      </div> -->\n      <div class=\"container-fluid gedf-wrapper\">\n        <div class=\"row\">\n          <div class=\"col-md-9 gedf-main\">\n\n            <!--- \\\\\\\\\\\\\\Post-->\n            <div class=\"card gedf-card\">\n              <div class=\"card-header\">\n                <ul class=\"nav nav-tabs card-header-tabs\" id=\"myTab\" role=\"tablist\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"posts-tab\" data-toggle=\"tab\" href=\"#posts\" role=\"tab\" aria-controls=\"posts\"\n                      aria-selected=\"true\">Create\n                      new subject</a>\n                  </li>\n                  <!-- <li class=\"nav-item\">\n                                  <a class=\"nav-link\" id=\"images-tab\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"images\" aria-selected=\"false\" href=\"#images\">Images</a>\n                              </li> -->\n                </ul>\n              </div>\n              <div class=\"card-body\">\n                <form (submit)=\"createSubject()\">\n                  <div class=\"tab-content\" id=\"myTabContent\">\n                    <div class=\"tab-pane fade show active\" id=\"posts\" role=\"tabpanel\" aria-labelledby=\"posts-tab\">\n                      <div class=\"form-group\">\n                        <label class=\"sr-only\" for=\"message\">post</label>\n                        <textarea class=\"form-control\" [(ngModel)]=\"newSubject\" name=\"newSubject\" id=\"message\" rows=\"3\" placeholder=\"What are you thinking?\"></textarea>\n                      </div>\n\n                    </div>\n                    <!-- <div class=\"tab-pane fade\" id=\"images\" role=\"tabpanel\" aria-labelledby=\"images-tab\">\n                    <div class=\"form-group\">\n                      <div class=\"custom-file\">\n                        <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\n                        <label class=\"custom-file-label\" for=\"customFile\">Upload image</label>\n                      </div>\n                    </div>\n                    <div class=\"py-4\"></div>\n                  </div> -->\n                  </div>\n                  <div class=\"btn-toolbar justify-content-between\">\n                    <div class=\"btn-group\">\n                      <button type=\"submit\" class=\"btn btn-primary\">share</button>\n                    </div>\n                    <!-- <div class=\"btn-group\">\n                    <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-link dropdown-toggle\" data-toggle=\"dropdown\"\n                      aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <i class=\"fa fa-globe\"></i>\n                    </button>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDrop1\">\n                      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-globe\"></i> Public</a>\n                      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-users\"></i> Friends</a>\n                      <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Just me</a>\n                    </div>\n                  </div> -->\n                  </div>\n                </form>\n              </div>\n            </div>\n            <!-- Post /////-->\n\n            <!--- \\\\\\\\\\\\\\Post-->\n            <div class=\"card gedf-card\" *ngFor=\"let disc of allSubjects\">\n              <div class=\"card-header\">\n                <div class=\"d-flex justify-content-between align-items-center\">\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                    <div class=\"mr-2\">\n                      <img class=\"rounded-circle\" width=\"45\" src=\"https://picsum.photos/50/50\" alt=\"\">\n                    </div>\n                    <div class=\"ml-2\">\n                      <div class=\"h5 m-0\">{{disc.email}}</div>\n                      <div class=\"h7 text-muted\">Miracles Lee Cross</div>\n                    </div>\n                  </div>\n                  <div>\n                    <div class=\"dropdown\">\n                      <button class=\"btn btn-link dropdown-toggle\" type=\"button\" id=\"gedf-drop1\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fa fa-ellipsis-h\"></i>\n                      </button>\n                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"gedf-drop1\">\n                        <div class=\"h6 dropdown-header\">Configuration</div>\n                        <a class=\"dropdown-item\" href=\"#\">Save</a>\n                        <a class=\"dropdown-item\" href=\"#\">Hide</a>\n                        <a class=\"dropdown-item\" href=\"#\">Report</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"card-body\">\n                <div class=\"text-muted h7 mb-2\"> <i class=\"fa fa-clock-o\"></i>10 min ago</div>\n                <a class=\"card-link\" href=\"#\">\n                  <h5 class=\"card-title\">{{disc.subject}}</h5>\n                </a>\n\n                <p class=\"card-text\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa\n                  praesentium esse magnam nemo dolor\n                  sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.\n                </p>\n              </div>\n              <div class=\"card-footer\">\n                <a href=\"#\" class=\"card-link\"><i class=\"fa fa-gittip\"></i> Like</a>\n                <a href=\"#\" class=\"card-link\"><i class=\"fa fa-comment\"></i> Comment</a>\n                <a href=\"#\" class=\"card-link\"><i class=\"fa fa-mail-forward\"></i> Share</a>\n              </div>\n            </div>\n            <!-- Post /////-->\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"h5\">{{userEmail}}</div>\n                <div class=\"h7 text-muted\">Username : {{locStorage.username}}</div>\n                <div class=\"h7\">Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,\n                  etc.\n                </div>\n              </div>\n              <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">\n                  <div class=\"h6 text-muted\">Followers</div>\n                  <div class=\"h5\">5.2342</div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"h6 text-muted\">Following</div>\n                  <div class=\"h5\">6758</div>\n                </li>\n                <li class=\"list-group-item\">Vestibulum at eros</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/discuss/discuss.component.ts":
/*!**********************************************!*\
  !*** ./src/app/discuss/discuss.component.ts ***!
  \**********************************************/
/*! exports provided: DiscussComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussComponent", function() { return DiscussComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_discussion_discusson_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/discussion/discusson.service */ "./src/app/services/discussion/discusson.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscussComponent = /** @class */ (function () {
    function DiscussComponent(service, toast) {
        this.service = service;
        this.toast = toast;
        this.locStorage = JSON.parse(localStorage.getItem('user'));
        this.userEmail = this.locStorage.email;
        this.allSubjects = [];
        this.getAllSubjects();
    }
    DiscussComponent.prototype.ngOnInit = function () {
    };
    DiscussComponent.prototype.createSubject = function () {
        var _this = this;
        var subject = {
            subject: this.newSubject,
            email: this.userEmail
        };
        if (this.newSubject == null || this.newSubject == undefined) {
            this.toast.error("Subject can't be blank", 'Discussion', { positionClass: 'toast-top-right', timeOut: 1000 });
            return false;
        }
        this.service.addNewSubject(subject).subscribe(function (data) {
            if (data.success) {
                _this.toast.success('Successfully created new subject', 'Discussion', { positionClass: 'toast-top-right', timeOut: 1000 });
                _this.getAllSubjects();
                _this.newSubject = null;
            }
            else {
                _this.toast.error('Error found while creating this subject', 'Discussion', { positionClass: 'toast-top-right', timeOut: 1000 });
            }
        });
    };
    DiscussComponent.prototype.getAllSubjects = function () {
        var _this = this;
        this.service.getAllSubjects().subscribe(function (subjects) {
            if (subjects.success) {
                _this.allSubjects = subjects.data;
            }
            else {
                _this.toast.error(subjects.msg, 'Discussion', { positionClass: 'toast-top-right', timeOut: 1000 });
            }
        });
    };
    DiscussComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discuss',
            template: __webpack_require__(/*! ./discuss.component.html */ "./src/app/discuss/discuss.component.html"),
            styles: [__webpack_require__(/*! ./discuss.component.css */ "./src/app/discuss/discuss.component.css")]
        }),
        __metadata("design:paramtypes", [_services_discussion_discusson_service__WEBPACK_IMPORTED_MODULE_1__["DiscussonService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], DiscussComponent);
    return DiscussComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        this.auth.loadToken();
        if (this.auth.loggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  \r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n    <img src=\"{{appLogo}}\" alt=\"\" width=\"90\" height=\"90\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Login</h1>\n    <label for=\"inputUsername\" class=\"sr-only\">Username</label>\n    <input type=\"text\" id=\"inputUsername\" autofocus class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" required>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" required>\n    <div class=\"checkbox mb-3\">\n      <!-- <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label> -->\n      Don't have an account? <a [routerLink]=\"['/register']\">Sign Up</a>\n    </div>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, flashMsg, router, toastr, validate) {
        this.auth = auth;
        this.flashMsg = flashMsg;
        this.router = router;
        this.toastr = toastr;
        this.validate = validate;
        this.appLogo = '/assets/dictologo.png';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.auth.loggedIn();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validate.validateLoginCreds(user)) {
            this.toastr.error('Username and password is required!', 'Login', { positionClass: 'toast-top-center' });
            return;
        }
        this.auth.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.auth.storeUserData(data.token, data.user);
                _this.toastr.success('Now you are logged in!', 'Login', { positionClass: 'toast-top-right', timeOut: 1000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.toastr.error(data.msg, 'Login', { positionClass: 'toast-top-center' });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manage/manage.component.css":
/*!*********************************************!*\
  !*** ./src/app/manage/manage.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-newTag{\r\n    color: #ffffff;\r\n    font-weight: 700;\r\n    font-size: 10px;\r\n    text-decoration: none;\r\n}\r\n.new-tagText{\r\n    text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/manage/manage.component.html":
/*!**********************************************!*\
  !*** ./src/app/manage/manage.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!-- SideBar -->\n    <app-sidebar></app-sidebar>\n    <!-- Sidebar -->\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3\">\n        <!-- <h1 class=\"h2\">Dashboard</h1>\n        <div class=\"btn-toolbar mb-2 mb-md-0\">\n          <div class=\"btn-group mr-2\">\n            <button class=\"btn btn-sm btn-outline-secondary\">Share</button>\n            <button class=\"btn btn-sm btn-outline-secondary\">Export</button>\n          </div>\n          <button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n            <span data-feather=\"calendar\"></span>\n            This week\n          </button>\n        </div> -->\n      </div>\n\n      <!-- <canvas class=\"my-4 w-100\" id=\"myChart\" width=\"900\" height=\"380\"></canvas> -->\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"jumbotron text-center\">\n            <h1 class=\"display-4\">Add Keywords</h1>\n            <flash-messages></flash-messages>\n            <form (submit)=\"onAddWordSubmit()\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWord\" name=\"newWord\" placeholder=\"Enetr New Keyword!\" #nativeElementWord>\n              </div>\n              <div class=\"panel panel-default\">\n                <!-- List group -->\n                <!-- <span>\n                        <a data-href=\"#\" class=\"btn btn-success btn-sm btn-newTag\" (click)=\"addNewTag()\" style=\"float:right;\">New Tag</a>\n                      </span> -->\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item item-copy\" *ngFor=\"let tag of tags;let i = index\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control new-tagText\"  [(ngModel)]=\"tag.word\" name=\"word{{i}}\" #name=\"ngModel\" placeholder=\"New Tag...\">\n                        <span class=\"badge badge-danger ms-pointer\" style=\"float:right;margin-top:5px;\" (click)=\"removeTag(tag)\">Remove</span>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n              <br>\n              <div class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <!-- <div class=\"form-group\"> -->\n                    <input type=\"text\" class=\"form-control new-tagText\" [(ngModel)]=\"newTag\" name=\"newTag\" placeholder=\"New Tag...\">\n                    <br>\n                    <a data-href=\"#\" class=\"btn btn-success btn-sm btn-newTag\" (click)=\"addNewTag()\" style=\"float:right;\">Add\n                      Tag</a>\n                    <!-- </div> -->\n                  </div>\n                </div>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary btn-lg\" *ngIf=\"tags.length>0\" role=\"button\">Submit</button>\n            </form>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h6 class=\"display-4\">All Suggestions</h6>\n          <div class=\"table-responsive\" style=\"overflow: auto; max-height: 300px;\">\n            <table class=\"table table-striped table-sm\">\n              <thead>\n                <th>Word</th>\n                <th>Suggested</th>\n                <th class=\"text-center\">Action</th>\n              </thead>\n              <tbody>\n                <tr *ngIf=\"suggestions.length==0\">\n                  <td colspan=\"3\">\n                    No word suggestions!\n                  </td>\n                </tr>\n                <tr *ngFor=\"let word of suggestions\">\n                  <td>{{word.word}}</td>\n                  <td>{{word.email}}</td>\n                  <td class=\"text-center\">\n                    <span class=\"badge badge-success ms-pointer\" style=\"margin-right:5px;\" (click)=\"acceptSuggestion(word.word)\">Accept</span>\n                    <span class=\"badge badge-danger ms-pointer\" (click)=\"regectSuggestion(word.word)\">Reject</span>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n    </main>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/manage/manage.component.ts":
/*!********************************************!*\
  !*** ./src/app/manage/manage.component.ts ***!
  \********************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_manage_manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/manage/manage.service */ "./src/app/services/manage/manage.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageComponent = /** @class */ (function () {
    // end
    function ManageComponent(auth, service, flashMsg, toast) {
        this.auth = auth;
        this.service = service;
        this.flashMsg = flashMsg;
        this.toast = toast;
        this.tags = [];
        this.suggestions = [];
        this.ifSuggested = false;
    }
    ManageComponent.prototype.ngOnInit = function () {
        this.showAllSuggestedWords();
    };
    ManageComponent.prototype.addNewTag = function () {
        if (this.newTag === undefined || this.newTag === null) {
            this.toast.warning('Tag cannot be blank', 'Word', { positionClass: 'toast-top-right', timeOut: 1000 });
            return false;
        }
        this.nativeElementWord.nativeElement.focus();
        this.tags.push({ 'word': this.newTag });
        this.newTag = '';
    };
    ManageComponent.prototype.onAddWordSubmit = function () {
        var _this = this;
        var newWord = {
            word: this.newWord,
            tags: this.tags
        };
        if (this.newWord == undefined || this.newWord == null) {
            this.toast.error('Please enter a word', 'Word', { positionClass: 'toast-top-right', timeOut: 1000 });
            this.nativeElementWord.nativeElement.focus();
            return false;
        }
        if (this.ifSuggested) {
            this.service.addNewSuggestedWord(newWord).subscribe(function (data) {
                if (data.success) {
                    _this.toast.success('New Word Successfully Added', 'Word', { positionClass: 'toast-top-right', timeOut: 1000 });
                    _this.service.changeSuggestedWordStatus(newWord).subscribe(function (data) {
                        if (data.success) {
                            _this.toast.success('Suggestion updated', 'Word', { positionClass: 'toast-top-right', timeOut: 1000 });
                            _this.showAllSuggestedWords();
                        }
                        else {
                            _this.toast.error('Failed to update the suggestion status', 'Word', { positionClass: 'toast-top-right', timeOut: 1000 });
                        }
                    });
                    _this.newWord = '';
                    _this.tags = [];
                    _this.ifSuggested = false;
                }
                else {
                    _this.toast.error('Error found while adding this word', 'Word', { positionClass: 'toast-top-right', timeOut: 1000 });
                    _this.ifSuggested = false;
                }
            });
        }
        else {
            this.service.addNewWord(newWord).subscribe(function (data) {
                if (data.success) {
                    _this.toast.success('New Word Successfully Added', 'Word', { positionClass: 'toast-top-right', timeOut: 1000 });
                    _this.ifSuggested = false;
                }
                else {
                    _this.toast.error('Error found while adding this word', 'Word', { positionClass: 'toast-top-right', timeOut: 1000 });
                    _this.ifSuggested = false;
                }
            });
        }
    };
    ManageComponent.prototype.showAllSuggestedWords = function () {
        var _this = this;
        this.service.showAllSuggestedWords().subscribe(function (suggestions) {
            _this.suggestions = suggestions;
        });
    };
    ManageComponent.prototype.acceptSuggestion = function (word) {
        this.newWord = word;
        this.ifSuggested = true;
        this.toast.success('Save to accept!', 'Suggestion', { positionClass: 'toast-top-right' });
        this.nativeElementWord.nativeElement.focus();
    };
    ManageComponent.prototype.regectSuggestion = function (word) {
        var _this = this;
        var reject = {
            word: word
        };
        this.service.rejectSuggestion(reject).subscribe(function (data) {
            if (data.success) {
                _this.toast.success(data.msg, 'Suggestion', { positionClass: 'toast-top-right', timeOut: 1000 });
                _this.showAllSuggestedWords();
            }
            else {
                _this.toast.success(data.msg, 'Suggestion', { positionClass: 'toast-top-right', timeOut: 1000 });
            }
        });
    };
    ManageComponent.prototype.removeTag = function (word) {
        this.tags.splice(this.tags.indexOf(word), 1);
    };
    ManageComponent.prototype.trackByFn = function (index, item) {
        return index; // or item.id
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nativeElementWord'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nativeElementWord'),
        __metadata("design:type", Object)
    ], ManageComponent.prototype, "nativeElementWord", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('formArrayName')
        // native elemnts
        // Define
        ,
        __metadata("design:type", String)
    ], ManageComponent.prototype, "newWord", void 0);
    ManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(/*! ./manage.component.html */ "./src/app/manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.css */ "./src/app/manage/manage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_manage_manage_service__WEBPACK_IMPORTED_MODULE_2__["ManageService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".log-out{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/dashboard']\">Dicto</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    \n    <span class=\"navbar-text\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" *ngIf=\"!auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\n        </li>\n\n        <li class=\"nav-item\" *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"auth.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!auth.loggedIn()\">\n          <a class=\"nav-link log-out\"  (click)=\"onLogOutClick()\">Logout </a>\n        </li>\n      </ul>\n    </span>\n  </div>\n</nav> -->\n<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" [routerLink]=\"['/dashboard']\">{{email}}</a>\n  \n  <ul class=\"navbar-nav px-3\">\n    <li class=\"nav-item text-nowrap\">\n      <a class=\"nav-link log-out\" (click)=\"onLogOutClick()\">Sign out</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, flashMsg, router, toast) {
        this.auth = auth;
        this.flashMsg = flashMsg;
        this.router = router;
        this.toast = toast;
        this.locStorage = JSON.parse(localStorage.getItem('user'));
        this.email = this.locStorage.email;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogOutClick = function () {
        this.auth.logOut();
        this.toast.success('Logout Successfull!', 'Logut', { positionClass: 'toast-top-right', timeOut: 1000 });
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!-- SideBar -->\n    <app-sidebar></app-sidebar>\n    <!-- Sidebar -->\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3\">\n      </div>\n      <div class=\"row\" *ngIf=\"user\">\n        <div class=\"col-md-4\">\n          ss\n        </div>\n        <div class=\"col-md-4\" class=\"text-center\">\n          <div class=\"alert alert-primary\" role=\"alert\">\n            <h5>{{user.email}}</h5>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          ss\n        </div>\n      </div>\n    </main>\n  </div>\n</div>\n<!-- <div *ngIf=\"user\">\n  <h1>{{user.name}}</h1>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div> -->"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.loggedIn();
        this.auth.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.error(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"text\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <form class=\"form-signin\" (submit)=\"onRegisterSubmit()\">\n    <img src=\"{{appLogo}}\" alt=\"\" width=\"90\" height=\"90\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Signup</h1>\n    <label for=\"inputFullName\" class=\"sr-only\">Fullname</label>\n    <input type=\"text\" id=\"inputFullName\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Fullname\"\n      required autofocus>\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email address\"\n      required>\n    <label for=\"inputUsername\" class=\"sr-only\">Username</label>\n    <input type=\"email\" id=\"inputUsername\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\"\n      required>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\"\n      required>\n    <div class=\"checkbox mb-3\">\n      <!-- <label>\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n      </label> -->\n      Already registered? <a [routerLink]=\"['/login']\">Login</a>\n\n    </div>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Register</button>\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    // end
    function RegisterComponent(validateService, flashMsg, auth, router, toast) {
        this.validateService = validateService;
        this.flashMsg = flashMsg;
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        this.appLogo = '/assets/dictologo.png';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var newUser = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(newUser)) {
            this.toast.error('Please fill all fields!', 'Signup', { positionClass: 'toast-top-center' });
            return false;
        }
        ;
        if (!this.validateService.validateEmail(newUser.email)) {
            this.toast.error('Email is not valid!', 'Signup', { positionClass: 'toast-top-center' });
            return false;
        }
        this.auth.registerUser(newUser).subscribe(function (data) {
            if (data.success) {
                _this.toast.success('Registration Successful, You can login now!', 'Login', { positionClass: 'toast-top-center' });
                _this.resetForm();
                _this.router.navigate(['/login']);
            }
            else {
                _this.toast.error(data.msg, 'Signup', { positionClass: 'toast-top-center' });
            }
        });
    };
    RegisterComponent.prototype.resetForm = function () {
        this.name = '';
        this.email = '';
        this.username = '';
        this.password = '';
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.0.5:8000/';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + 'users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        this.loadToken();
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        // const decodedToken = helper.decodeToken(this.authToken);
        // const expirationDate = helper.getTokenExpirationDate(this.authToken);
        var isExpired = helper.isTokenExpired(this.authToken);
        return !isExpired;
    };
    AuthService.prototype.logOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/discussion/discusson.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/discussion/discusson.service.ts ***!
  \**********************************************************/
/*! exports provided: DiscussonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussonService", function() { return DiscussonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscussonService = /** @class */ (function () {
    function DiscussonService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.baseUrl = 'http://192.168.0.5:8000/';
    }
    DiscussonService.prototype.addNewSubject = function (subject) {
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'api/discussion/newsubject', subject, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DiscussonService.prototype.getAllSubjects = function () {
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + 'api/discussion/getsubjects', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DiscussonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DiscussonService);
    return DiscussonService;
}());



/***/ }),

/***/ "./src/app/services/manage/manage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/manage/manage.service.ts ***!
  \***************************************************/
/*! exports provided: ManageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageService", function() { return ManageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageService = /** @class */ (function () {
    function ManageService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.baseUrl = 'http://192.168.0.5:8000/';
    }
    ManageService.prototype.addNewWord = function (word) {
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'api/manage/words', word, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ManageService.prototype.findWordByName = function (word) {
        // console.log(word);
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'api/manage/getword', word, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ManageService.prototype.getAllWords = function () {
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + 'api/manage/getwords', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // Suggestions
    ManageService.prototype.makeSuggetion = function (row) {
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'api/suggestions/make', row, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ManageService.prototype.getAllSuggetionsByEmail = function (email) {
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'api/suggestions/getsuggestions', email, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ManageService.prototype.showAllSuggestedWords = function () {
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + 'api/suggestions/getallsuggestions', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ManageService.prototype.addNewSuggestedWord = function (word) {
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + 'api/manage/addnewsuggestedword', word, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ManageService.prototype.changeSuggestedWordStatus = function (word) {
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + 'api/suggestions/updatesuggestedwordstatus', word, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ManageService.prototype.rejectSuggestion = function (word) {
        this.auth.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + 'api/suggestions/rejectsuggestion', word, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ManageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ManageService);
    return ManageService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regEx.test(email);
    };
    ValidateService.prototype.validateLoginCreds = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n  <div class=\"sidebar-sticky\">\n    <ul class=\"nav flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/dashboard']\">\n          <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>\n          Dashboard <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"adminEmail=='admin@dicto.app'\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/manage']\">\n          <i class=\"fa fa-cogs\" aria-hidden=\"true\"></i>\n          Manage\n        </a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/discuss']\">\n          <i class=\"fa fa-comments\" aria-hidden=\"true\"></i>\n          Discuss\n        </a>\n      </li> -->\n      <!--<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <span data-feather=\"shopping-cart\"></span>\n          Products\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <span data-feather=\"users\"></span>\n          Customers\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <span data-feather=\"bar-chart-2\"></span>\n          Reports\n        </a>\n      </li> -->\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <span data-feather=\"layers\"></span>\n          Integrations\n        </a>\n      </li> -->\n    </ul>\n\n    <!-- <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n      <span>Saved reports</span>\n      <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n        <span data-feather=\"plus-circle\"></span>\n      </a>\n    </h6> -->\n    <!-- <ul class=\"nav flex-column mb-2\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <span data-feather=\"file-text\"></span>\n          Current month\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <span data-feather=\"file-text\"></span>\n          Last quarter\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <span data-feather=\"file-text\"></span>\n          Social engagement\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <span data-feather=\"file-text\"></span>\n          Year-end sale\n        </a>\n      </li>\n    </ul> -->\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.locStorage = JSON.parse(localStorage.getItem('user'));
        this.adminEmail = this.locStorage.email;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/suggestions/suggestions.component.css":
/*!*******************************************************!*\
  !*** ./src/app/suggestions/suggestions.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/suggestions/suggestions.component.html":
/*!********************************************************!*\
  !*** ./src/app/suggestions/suggestions.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  suggestions works!\n</p>\n"

/***/ }),

/***/ "./src/app/suggestions/suggestions.component.ts":
/*!******************************************************!*\
  !*** ./src/app/suggestions/suggestions.component.ts ***!
  \******************************************************/
/*! exports provided: SuggestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsComponent", function() { return SuggestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_manage_manage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/manage/manage.service */ "./src/app/services/manage/manage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuggestionsComponent = /** @class */ (function () {
    function SuggestionsComponent(service, auth) {
        this.service = service;
        this.auth = auth;
        // suggestions: [] = [];
        this.locStorage = JSON.parse(localStorage.getItem('user'));
    }
    SuggestionsComponent.prototype.ngOnInit = function () {
        // console.log(this.locStorage.email);
        this.service.getAllSuggetionsByEmail({ email: this.locStorage.email }).subscribe(function (suggestions) {
            // this.suggestions = suggestions;
        });
    };
    SuggestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suggestions',
            template: __webpack_require__(/*! ./suggestions.component.html */ "./src/app/suggestions/suggestions.component.html"),
            styles: [__webpack_require__(/*! ./suggestions.component.css */ "./src/app/suggestions/suggestions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_manage_manage_service__WEBPACK_IMPORTED_MODULE_2__["ManageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SuggestionsComponent);
    return SuggestionsComponent;
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
    production: true
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

module.exports = __webpack_require__(/*! D:\projects\nodejs\dicto\ang-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map