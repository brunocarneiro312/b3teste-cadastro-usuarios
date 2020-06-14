(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listagem/listagem.component */ "./src/app/listagem/listagem.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _email_search_email_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-search/email-search.component */ "./src/app/email-search/email-search.component.ts");
/* harmony import */ var _companyid_search_companyid_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companyid-search/companyid-search.component */ "./src/app/companyid-search/companyid-search.component.ts");
/* harmony import */ var _send_file_send_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-file/send-file.component */ "./src/app/send-file/send-file.component.ts");









const routes = [
    { path: '', component: _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_2__["ListagemComponent"] },
    { path: 'listagem', component: _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_2__["ListagemComponent"] },
    { path: 'email', component: _email_search_email_search_component__WEBPACK_IMPORTED_MODULE_4__["EmailSearchComponent"] },
    { path: 'companyid', component: _companyid_search_companyid_search_component__WEBPACK_IMPORTED_MODULE_5__["CompanyidSearchComponent"] },
    { path: 'cadastro', component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["CadastroComponent"] },
    { path: 'importar', component: _send_file_send_file_component__WEBPACK_IMPORTED_MODULE_6__["SendFileComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'B3 Teste - Cadastro de Usuários';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 1, consts: [["id", "root-container"], [1, "header-container"], [1, "brand"], ["id", "aside-container"], [1, "main-container"], [1, "footer-container"], [1, "author"], ["href", "https://brunocarneiro312.github.io/", "target", "_blank"], [1, "media"], ["href", "https://github.com/brunocarneiro312/b3teste-cadastro-usuarios-frontend", "target", "_blank"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Criado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bruno Carneiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Fonte do projeto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#root-container[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 100vh;\n  grid-template-columns: auto 1fr 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas: \"header header header\" \"aside main main\" \"footer footer footer\";\n}\n#root-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  grid-area: header;\n}\n#root-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n#root-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n#root-container[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  grid-area: aside;\n  padding: 15px;\n}\n#root-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  grid-area: main;\n  background: #f5f5f5;\n}\n#root-container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n#root-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  font-family: Verdana;\n  grid-area: footer;\n  font-size: 0.8em;\n}\n#root-container[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydW5vY2FybmVpcm8vZGVzZW52b2x2aW1lbnRvL3Byb2Nlc3NvLXNlbGV0aXZvL2IzL2IzLWZyb250ZW5kL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0ZBQ0U7QUNBSjtBRElFO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FESUk7RUFDRSxhQUFBO0FDRk47QURJTTtFQUNFLGdCQUFBO0FDRlI7QURPRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0xKO0FEUUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ05KO0FEUUk7RUFDRSxhQUFBO0FDTk47QURVRTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEU0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm9vdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImhlYWRlciBoZWFkZXIgaGVhZGVyXCJcbiAgICBcImFzaWRlIG1haW4gbWFpblwiXG4gICAgXCJmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xuXG4gIGhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG5cbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAuYnJhbmQge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzaWRlIHtcbiAgICBncmlkLWFyZWE6IGFzaWRlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICBtYWluIHtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICBncmlkLWFyZWE6IG1haW47XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcblxuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gIH1cbn1cbiIsIiNyb290LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlciBoZWFkZXIgaGVhZGVyXCIgXCJhc2lkZSBtYWluIG1haW5cIiBcImZvb3RlciBmb290ZXIgZm9vdGVyXCI7XG59XG4jcm9vdC1jb250YWluZXIgaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xufVxuI3Jvb3QtY29udGFpbmVyIGhlYWRlciAuaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4jcm9vdC1jb250YWluZXIgaGVhZGVyIC5oZWFkZXItY29udGFpbmVyIC5icmFuZCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4jcm9vdC1jb250YWluZXIgYXNpZGUge1xuICBncmlkLWFyZWE6IGFzaWRlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuI3Jvb3QtY29udGFpbmVyIG1haW4ge1xuICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuI3Jvb3QtY29udGFpbmVyIG1haW4gLm1haW4tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbiNyb290LWNvbnRhaW5lciBmb290ZXIge1xuICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4jcm9vdC1jb250YWluZXIgZm9vdGVyIC5mb290ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listagem/listagem.component */ "./src/app/listagem/listagem.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _email_search_email_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email-search/email-search.component */ "./src/app/email-search/email-search.component.ts");
/* harmony import */ var _companyid_search_companyid_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./companyid-search/companyid-search.component */ "./src/app/companyid-search/companyid-search.component.ts");
/* harmony import */ var _send_file_send_file_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./send-file/send-file.component */ "./src/app/send-file/send-file.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"],
        _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_7__["ListagemComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _email_search_email_search_component__WEBPACK_IMPORTED_MODULE_10__["EmailSearchComponent"],
        _companyid_search_companyid_search_component__WEBPACK_IMPORTED_MODULE_11__["CompanyidSearchComponent"],
        _send_file_send_file_component__WEBPACK_IMPORTED_MODULE_12__["SendFileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"],
                    _listagem_listagem_component__WEBPACK_IMPORTED_MODULE_7__["ListagemComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _email_search_email_search_component__WEBPACK_IMPORTED_MODULE_10__["EmailSearchComponent"],
                    _companyid_search_companyid_search_component__WEBPACK_IMPORTED_MODULE_11__["CompanyidSearchComponent"],
                    _send_file_send_file_component__WEBPACK_IMPORTED_MODULE_12__["SendFileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cadastro/cadastro.component.ts":
/*!************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.ts ***!
  \************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function CadastroComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Usu\u00E1rio cadastrado com sucesso!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CadastroComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Erro ao cadastrar cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CadastroComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CadastroComponent_div_4_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CadastroComponent_div_4_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isFormSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isFormError);
} }
function CadastroComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const companyId_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", companyId_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](companyId_r10);
} }
function CadastroComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.response, " ");
} }
class CadastroComponent {
    constructor(http) {
        this.http = http;
        this.companyIdValues = [1, 2, 5, 7, 10];
        this.requestForm = {
            companyId: undefined,
            email: undefined,
            birthdate: undefined,
        };
        this.response = undefined;
        this.isBtnCadastroDisabled = false;
    }
    ngOnInit() {
    }
    limpar() {
        this.requestForm.companyId = undefined;
        this.requestForm.email = undefined;
        this.requestForm.birthdate = undefined;
    }
    submitForm() {
        const day = this.requestForm.birthdate.toString().substring(0, 2);
        const month = this.requestForm.birthdate.toString().substring(3, 5);
        const year = this.requestForm.birthdate.toString().substring(6);
        this.requestForm.birthdate = `${year}-${month}-${day}`;
        this.http.post('./usuario', this.requestForm)
            .subscribe(responseData => {
            alert('usuário cadastrado com sucesso!');
            this.response = responseData;
            this.limpar();
        });
    }
}
CadastroComponent.ɵfac = function CadastroComponent_Factory(t) { return new (t || CadastroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CadastroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CadastroComponent, selectors: [["app-cadastro"]], decls: 24, vars: 7, consts: [["id", "cadastro-container"], [1, "header"], [1, "form-container"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["for", "cadastro-select-companyid"], ["name", "companyid", "id", "cadastro-select-companyid", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "cadastro-input-email"], ["id", "cadastro-input-email", "type", "email", "name", "email", 3, "ngModel", "ngModelChange"], ["for", "cadastro-input-birthdate"], ["id", "cadastro-input-birthdate", "type", "text", "name", "birthdate", 3, "ngModel", "ngModelChange"], [1, "reset", 3, "click"], [3, "disabled", "click"], ["class", "response-container", 4, "ngIf"], ["class", "message success", 4, "ngIf"], ["class", "message error", 4, "ngIf"], [1, "message", "success"], [1, "message", "error"], [3, "ngValue"], [1, "response-container"]], template: function CadastroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cadastro de Usu\u00E1rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CadastroComponent_div_4_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Company Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CadastroComponent_Template_select_ngModelChange_8_listener($event) { return ctx.requestForm.companyId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CadastroComponent_option_9_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CadastroComponent_Template_input_ngModelChange_13_listener($event) { return ctx.requestForm.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Birth Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CadastroComponent_Template_input_ngModelChange_17_listener($event) { return ctx.requestForm.birthdate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroComponent_Template_button_click_19_listener() { return ctx.limpar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Limpar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroComponent_Template_button_click_21_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CadastroComponent_div_23_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFormSubmited);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.requestForm.companyId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyIdValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.requestForm.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.requestForm.birthdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isBtnCadastroDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.response);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["#cadastro-container[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  background: white;\n  padding: 15px;\n  box-shadow: 0 3px 10px #ddd;\n  margin-bottom: 15px;\n}\n#cadastro-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n#cadastro-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n#cadastro-container[_ngcontent-%COMP%]   .message.success[_ngcontent-%COMP%] {\n  background: #00a200;\n  color: white;\n}\n#cadastro-container[_ngcontent-%COMP%]   .message.error[_ngcontent-%COMP%] {\n  background: #df343a;\n  color: white;\n}\n#cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  display: flex;\n  flex-direction: column;\n}\n#cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 100%;\n  max-width: 500px;\n}\n#cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9em;\n  color: rgba(0, 0, 0, 0.5);\n}\n#cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  padding: 10px 15px;\n  border: 0;\n  background-color: #ececec;\n  margin: 5px 0;\n  border-bottom: 2px solid #ececec;\n  transition: all 0.3s;\n}\n#cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 2px solid #3257bb;\n}\n#cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  margin-right: 15px;\n  background-color: #3257bb;\n  color: white;\n  border: 0;\n  transition: all 0.3s;\n}\n#cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button.reset[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  color: #6b6b6b;\n}\n#cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n#cadastro-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydW5vY2FybmVpcm8vZGVzZW52b2x2aW1lbnRvL3Byb2Nlc3NvLXNlbGV0aXZvL2IzL2IzLWZyb250ZW5kL3NyYy9hcHAvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7QUNBSjtBREVJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQU47QURHSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0ROO0FES0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDSEo7QURLSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNITjtBREtNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNIUjtBRE1NO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0pSO0FETVE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7QUNKVjtBRFFNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQ05SO0FEUVE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNOVjtBRFNRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNQVjtBRFVRO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDUlYiLCJmaWxlIjoic3JjL2FwcC9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYWRhc3Ryby1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAjZGRkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gIC5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cblxuICAubWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgICYuc3VjY2VzcyB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDBhMjAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICYuZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZDogI2RmMzQzYTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KVxuICAgICAgfVxuXG4gICAgICBpbnB1dCwgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VjZWNlYztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzI1N2JiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1N2JiO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcblxuICAgICAgICAmLnJlc2V0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgICAgICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZXNwb25zZS1jb250YWluZXIge1xuXG4gIH1cbn1cbiIsIiNjYWRhc3Ryby1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAjZGRkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuI2NhZGFzdHJvLWNvbnRhaW5lciAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbiNjYWRhc3Ryby1jb250YWluZXIgLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuI2NhZGFzdHJvLWNvbnRhaW5lciAubWVzc2FnZS5zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogIzAwYTIwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2NhZGFzdHJvLWNvbnRhaW5lciAubWVzc2FnZS5lcnJvciB7XG4gIGJhY2tncm91bmQ6ICNkZjM0M2E7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNjYWRhc3Ryby1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI2NhZGFzdHJvLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuI2NhZGFzdHJvLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbiNjYWRhc3Ryby1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWdyb3VwIGlucHV0LCAjY2FkYXN0cm8tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1ncm91cCBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWNlY2VjO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbiNjYWRhc3Ryby1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLCAjY2FkYXN0cm8tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1ncm91cCBzZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMyNTdiYjtcbn1cbiNjYWRhc3Ryby1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWdyb3VwIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1N2JiO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4jY2FkYXN0cm8tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAuZm9ybS1ncm91cCBidXR0b24ucmVzZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBjb2xvcjogIzZiNmI2Yjtcbn1cbiNjYWRhc3Ryby1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWdyb3VwIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC44O1xufVxuI2NhZGFzdHJvLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0tZ3JvdXAgYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC44O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CadastroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cadastro',
                templateUrl: './cadastro.component.html',
                styleUrls: ['./cadastro.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/companyid-search/companyid-search.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/companyid-search/companyid-search.component.ts ***!
  \****************************************************************/
/*! exports provided: CompanyidSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyidSearchComponent", function() { return CompanyidSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CompanyidSearchComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const companyId_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", companyId_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](companyId_r17);
} }
function CompanyidSearchComponent_div_10_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r20 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r19.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r19.companyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r19.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r19.birthdate);
} }
function CompanyidSearchComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UserId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CompanyId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Birth Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CompanyidSearchComponent_div_10_tr_15_Template, 11, 5, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](16, 1, ctx_r16.usuarios, (ctx_r16.page - 1) * ctx_r16.pageSize, (ctx_r16.page - 1) * ctx_r16.pageSize + ctx_r16.pageSize));
} }
class CompanyidSearchComponent {
    constructor(http) {
        this.http = http;
        this.usuarios = [];
        this.companyIdValues = [1, 2, 5, 7, 10];
        this.page = 1;
        this.pageSize = 5;
        this.collectionSize = undefined;
    }
    ngOnInit() {
    }
    buscarPorCompanyId() {
        this.http.get('./usuario/company/' + this.companyId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(responseData => {
            const usuariosArray = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    usuariosArray.push(Object.assign({}, responseData[key]));
                }
            }
            return usuariosArray;
        }))
            .subscribe(usuarios => {
            this.usuarios = usuarios;
        });
    }
}
CompanyidSearchComponent.ɵfac = function CompanyidSearchComponent_Factory(t) { return new (t || CompanyidSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CompanyidSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyidSearchComponent, selectors: [["app-companyid-search"]], decls: 11, vars: 3, consts: [["id", "companyid-search-container"], [1, "header"], [1, "form-group"], ["for", "cadastro-select-companyid"], ["name", "companyid", "id", "cadastro-select-companyid", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngIf"], [3, "ngValue"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function CompanyidSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Buscar Usu\u00E1rios pelo E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Company Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CompanyidSearchComponent_Template_select_ngModelChange_6_listener($event) { return ctx.companyId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CompanyidSearchComponent_option_7_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyidSearchComponent_Template_button_click_8_listener() { return ctx.buscarPorCompanyId(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Pesquisar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CompanyidSearchComponent_div_10_Template, 17, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.companyId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyIdValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuarios.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: ["#companyid-search-container[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  background: white;\n  padding: 15px;\n  box-shadow: 0 3px 10px #ddd;\n  margin-bottom: 15px;\n}\n#companyid-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #companyid-search-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  padding: 10px 15px;\n  border: 0;\n  background-color: #ececec;\n  margin: 5px 25px;\n  border-bottom: 2px solid #ececec;\n  transition: all 0.3s;\n}\n#companyid-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #companyid-search-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 2px solid #3257bb;\n}\n#companyid-search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  margin-right: 15px;\n  background-color: #3257bb;\n  color: white;\n  border: 0;\n  transition: all 0.3s;\n}\n#companyid-search-container[_ngcontent-%COMP%]   button.reset[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  color: #6b6b6b;\n}\n#companyid-search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n#companyid-search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydW5vY2FybmVpcm8vZGVzZW52b2x2aW1lbnRvL3Byb2Nlc3NvLXNlbGV0aXZvL2IzL2IzLWZyb250ZW5kL3NyYy9hcHAvY29tcGFueWlkLXNlYXJjaC9jb21wYW55aWQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wYW55aWQtc2VhcmNoL2NvbXBhbnlpZC1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0FDQ047QURHRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNESjtBREdJO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDRE47QURJSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDRk47QURLSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvY29tcGFueWlkLXNlYXJjaC9jb21wYW55aWQtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbXBhbnlpZC1zZWFyY2gtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICBpbnB1dCwgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICBtYXJnaW46IDVweCAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWNlY2VjO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMyNTdiYjtcbiAgICB9XG4gIH1cblxuICBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNTdiYjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG5cbiAgICAmLnJlc2V0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgICBjb2xvcjogIzZiNmI2YjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG9wYWNpdHk6IC44O1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IC44O1xuICAgIH1cbiAgfVxufVxuIiwiI2NvbXBhbnlpZC1zZWFyY2gtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbiNjb21wYW55aWQtc2VhcmNoLWNvbnRhaW5lciBpbnB1dCwgI2NvbXBhbnlpZC1zZWFyY2gtY29udGFpbmVyIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgbWFyZ2luOiA1cHggMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2VjZWM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuI2NvbXBhbnlpZC1zZWFyY2gtY29udGFpbmVyIGlucHV0OmZvY3VzLCAjY29tcGFueWlkLXNlYXJjaC1jb250YWluZXIgc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMjU3YmI7XG59XG4jY29tcGFueWlkLXNlYXJjaC1jb250YWluZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjU3YmI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbiNjb21wYW55aWQtc2VhcmNoLWNvbnRhaW5lciBidXR0b24ucmVzZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBjb2xvcjogIzZiNmI2Yjtcbn1cbiNjb21wYW55aWQtc2VhcmNoLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbn1cbiNjb21wYW55aWQtc2VhcmNoLWNvbnRhaW5lciBidXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyidSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-companyid-search',
                templateUrl: './companyid-search.component.html',
                styleUrls: ['./companyid-search.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/email-search/email-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/email-search/email-search.component.ts ***!
  \********************************************************/
/*! exports provided: EmailSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSearchComponent", function() { return EmailSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function EmailSearchComponent_div_9_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r13.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r13.companyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r13.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r13.birthdate);
} }
function EmailSearchComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UserId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CompanyId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Birth Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmailSearchComponent_div_9_tr_15_Template, 11, 5, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](16, 1, ctx_r11.usuarios, (ctx_r11.page - 1) * ctx_r11.pageSize, (ctx_r11.page - 1) * ctx_r11.pageSize + ctx_r11.pageSize));
} }
class EmailSearchComponent {
    constructor(http) {
        this.http = http;
        this.usuarios = [];
        this.page = 1;
        this.pageSize = 5;
        this.collectionSize = undefined;
    }
    ngOnInit() {
    }
    buscarPorEmail() {
        this.http.get('./usuario/email?email=' + this.email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(responseData => {
            const usuariosArray = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    usuariosArray.push(Object.assign({}, responseData[key]));
                }
            }
            return usuariosArray;
        }))
            .subscribe(usuarios => {
            this.usuarios = usuarios;
        });
    }
}
EmailSearchComponent.ɵfac = function EmailSearchComponent_Factory(t) { return new (t || EmailSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EmailSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailSearchComponent, selectors: [["app-email-search"]], decls: 10, vars: 2, consts: [["id", "email-search-container"], [1, "header"], [1, "form-group"], ["for", "input-search-email"], ["id", "input-search-email", "type", "email", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngIf"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function EmailSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Buscar Usu\u00E1rios pelo E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailSearchComponent_Template_input_ngModelChange_6_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailSearchComponent_Template_button_click_7_listener() { return ctx.buscarPorEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pesquisar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailSearchComponent_div_9_Template, 17, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuarios.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: ["#email-search-container[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  background: white;\n  padding: 15px;\n  box-shadow: 0 3px 10px #ddd;\n  margin-bottom: 15px;\n}\n#email-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #email-search-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  padding: 10px 15px;\n  border: 0;\n  background-color: #ececec;\n  margin: 5px 25px;\n  border-bottom: 2px solid #ececec;\n  transition: all 0.3s;\n}\n#email-search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #email-search-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 2px solid #3257bb;\n}\n#email-search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  margin-right: 15px;\n  background-color: #3257bb;\n  color: white;\n  border: 0;\n  transition: all 0.3s;\n}\n#email-search-container[_ngcontent-%COMP%]   button.reset[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  color: #6b6b6b;\n}\n#email-search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n#email-search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydW5vY2FybmVpcm8vZGVzZW52b2x2aW1lbnRvL3Byb2Nlc3NvLXNlbGV0aXZvL2IzL2IzLWZyb250ZW5kL3NyYy9hcHAvZW1haWwtc2VhcmNoL2VtYWlsLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW1haWwtc2VhcmNoL2VtYWlsLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7QUNDTjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQ0RKO0FER0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNETjtBRElJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNGTjtBREtJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9lbWFpbC1zZWFyY2gvZW1haWwtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VtYWlsLXNlYXJjaC1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAjZGRkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gIGlucHV0LCBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIG1hcmdpbjogNXB4IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2VjZWM7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzI1N2JiO1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1N2JiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcblxuICAgICYucmVzZXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxuICB9XG59XG4iLCIjZW1haWwtc2VhcmNoLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4ICNkZGQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4jZW1haWwtc2VhcmNoLWNvbnRhaW5lciBpbnB1dCwgI2VtYWlsLXNlYXJjaC1jb250YWluZXIgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBtYXJnaW46IDVweCAyNXB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VjZWNlYztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4jZW1haWwtc2VhcmNoLWNvbnRhaW5lciBpbnB1dDpmb2N1cywgI2VtYWlsLXNlYXJjaC1jb250YWluZXIgc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMjU3YmI7XG59XG4jZW1haWwtc2VhcmNoLWNvbnRhaW5lciBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNTdiYjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuI2VtYWlsLXNlYXJjaC1jb250YWluZXIgYnV0dG9uLnJlc2V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgY29sb3I6ICM2YjZiNmI7XG59XG4jZW1haWwtc2VhcmNoLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbn1cbiNlbWFpbC1zZWFyY2gtY29udGFpbmVyIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuODtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-search',
                templateUrl: './email-search.component.html',
                styleUrls: ['./email-search.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 17, vars: 0, consts: [["id", "home-container"], ["routerLink", "/listagem"], ["routerLink", "/email"], ["routerLink", "/companyid"], ["routerLink", "/cadastro"], ["routerLink", "/importar"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lista de usu\u00E1rios cadastrados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Buscar um usu\u00E1rio pelo email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buscar um usu\u00E1rio pelo companyId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cadastro de usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Importar arquivo de usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#home-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydW5vY2FybmVpcm8vZGVzZW52b2x2aW1lbnRvL3Byb2Nlc3NvLXNlbGV0aXZvL2IzL2IzLWZyb250ZW5kL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtY29udGFpbmVyIHtcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxufVxuIiwiI2hvbWUtY29udGFpbmVyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/listagem/listagem.component.ts":
/*!************************************************!*\
  !*** ./src/app/listagem/listagem.component.ts ***!
  \************************************************/
/*! exports provided: ListagemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListagemComponent", function() { return ListagemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






function ListagemComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListagemComponent_tr_19_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const usuario_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.excluir(usuario_r1.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.companyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.birthdate);
} }
class ListagemComponent {
    constructor(http) {
        this.http = http;
        this.usuarios = [];
        this.page = 1;
        this.pageSize = 5;
        this.collectionSize = undefined;
    }
    ngOnInit() {
        this.listar();
    }
    listar() {
        this.http.get('./usuario')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(responseData => {
            const usuariosArray = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    usuariosArray.push(Object.assign({}, responseData[key]));
                }
            }
            return usuariosArray;
        }))
            .subscribe(usuarios => {
            this.usuarios = usuarios;
        });
    }
    excluir(userId) {
        if (!confirm('Confirma a exclusão do usuário?')) {
            return;
        }
        this.http.delete(`./usuario/${userId}`)
            .subscribe(responseData => {
            this.listar();
        });
    }
}
ListagemComponent.ɵfac = function ListagemComponent_Factory(t) { return new (t || ListagemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ListagemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListagemComponent, selectors: [["app-listagem"]], decls: 22, vars: 8, consts: [["id", "listagem-container"], [1, "header"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "page", "pageSize", "collectionSize", "pageChange"], ["scope", "row"], [1, "btn", "btn-danger", 3, "click"]], template: function ListagemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Lista de Usu\u00E1rios Cadastrados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "UserId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CompanyId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Birth Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "A\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListagemComponent_tr_19_Template, 14, 5, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngb-pagination", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ListagemComponent_Template_ngb_pagination_pageChange_21_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](20, 4, ctx.usuarios, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("pageSize", ctx.pageSize)("collectionSize", ctx.usuarios.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: ["#listagem-container[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  background: white;\n  padding: 15px;\n  box-shadow: 0 3px 10px #ddd;\n}\n#listagem-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydW5vY2FybmVpcm8vZGVzZW52b2x2aW1lbnRvL3Byb2Nlc3NvLXNlbGV0aXZvL2IzL2IzLWZyb250ZW5kL3NyYy9hcHAvbGlzdGFnZW0vbGlzdGFnZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3RhZ2VtL2xpc3RhZ2VtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGFnZW0vbGlzdGFnZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGlzdGFnZW0tY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggI2RkZDtcblxuICAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG4iLCIjbGlzdGFnZW0tY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggI2RkZDtcbn1cbiNsaXN0YWdlbS1jb250YWluZXIgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListagemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listagem',
                templateUrl: './listagem.component.html',
                styleUrls: ['./listagem.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/send-file/send-file.component.ts":
/*!**************************************************!*\
  !*** ./src/app/send-file/send-file.component.ts ***!
  \**************************************************/
/*! exports provided: SendFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFileComponent", function() { return SendFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class SendFileComponent {
    constructor(http) {
        this.http = http;
        this.fileToUpload = null;
    }
    ngOnInit() {
    }
    enviarArquivo() {
        // const file = new Blob([''], {type: 'application/csv'});
        const formData = new FormData();
        formData.append('file', this.fileToUpload, 'usuarios.csv');
        this.http.post('./usuario/file', formData)
            .subscribe(() => {
            alert('Arquivo enviado com sucesso!');
        });
    }
    handleFileInput(files) {
        this.fileToUpload = files.item(0);
    }
}
SendFileComponent.ɵfac = function SendFileComponent_Factory(t) { return new (t || SendFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SendFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendFileComponent, selectors: [["app-send-file"]], decls: 7, vars: 0, consts: [["id", "send-file-container"], [1, "form-group"], ["for", "send-input-file"], ["id", "send-input-file", "type", "file", "name", "file", 3, "change"], [3, "click"]], template: function SendFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Company Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SendFileComponent_Template_input_change_4_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendFileComponent_Template_button_click_5_listener() { return ctx.enviarArquivo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enviar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#send-file-container[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  background: white;\n  padding: 15px;\n  box-shadow: 0 3px 10px #ddd;\n  margin-bottom: 15px;\n}\n#send-file-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #send-file-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  padding: 10px 15px;\n  border: 0;\n  background-color: #ececec;\n  margin: 5px 25px;\n  border-bottom: 2px solid #ececec;\n  transition: all 0.3s;\n}\n#send-file-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #send-file-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-bottom: 2px solid #3257bb;\n}\n#send-file-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  margin-right: 15px;\n  background-color: #3257bb;\n  color: white;\n  border: 0;\n  transition: all 0.3s;\n}\n#send-file-container[_ngcontent-%COMP%]   button.reset[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  color: #6b6b6b;\n}\n#send-file-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n#send-file-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydW5vY2FybmVpcm8vZGVzZW52b2x2aW1lbnRvL3Byb2Nlc3NvLXNlbGV0aXZvL2IzL2IzLWZyb250ZW5kL3NyYy9hcHAvc2VuZC1maWxlL3NlbmQtZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VuZC1maWxlL3NlbmQtZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7QUNDTjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQ0RKO0FER0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNETjtBRElJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNGTjtBREtJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9zZW5kLWZpbGUvc2VuZC1maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlbmQtZmlsZS1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAjZGRkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gIGlucHV0LCBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIG1hcmdpbjogNXB4IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2VjZWM7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzI1N2JiO1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1N2JiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcblxuICAgICYucmVzZXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxuICB9XG59XG4iLCIjc2VuZC1maWxlLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4ICNkZGQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4jc2VuZC1maWxlLWNvbnRhaW5lciBpbnB1dCwgI3NlbmQtZmlsZS1jb250YWluZXIgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBtYXJnaW46IDVweCAyNXB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VjZWNlYztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4jc2VuZC1maWxlLWNvbnRhaW5lciBpbnB1dDpmb2N1cywgI3NlbmQtZmlsZS1jb250YWluZXIgc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMjU3YmI7XG59XG4jc2VuZC1maWxlLWNvbnRhaW5lciBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNTdiYjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuI3NlbmQtZmlsZS1jb250YWluZXIgYnV0dG9uLnJlc2V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgY29sb3I6ICM2YjZiNmI7XG59XG4jc2VuZC1maWxlLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbn1cbiNzZW5kLWZpbGUtY29udGFpbmVyIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuODtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-send-file',
                templateUrl: './send-file.component.html',
                styleUrls: ['./send-file.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brunocarneiro/desenvolvimento/processo-seletivo/b3/b3-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map