webpackJsonp([1,5],{

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 120;


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(141);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    AppComponent.prototype.onNavigation = function (page) {
        // this.loadedPage = page;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(252),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userinfo_userinfo_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobinfo_jobinfo_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__welcome_page_welcome_page_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__jobinfo_jobs_table_jobs_table_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__jobinfo_post_job_post_job_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__jobinfo_jobs_table_job_detail_job_detail_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__callback_callback_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__userinfo_update_users_info_update_users_info_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__jobinfo_updatejob_updatejob_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__userinfo_b_user_form_update_b_user_form_update_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__userinfo_w_user_form_update_w_user_form_update_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__footer_footer_component__ = __webpack_require__(135);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core Import






// Component Import




// Anything else














function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthConfig"]({
        tokenGetter: (function () { return localStorage.getItem('access_token'); })
    }), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__userinfo_userinfo_component__["a" /* UserinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__jobinfo_jobinfo_component__["a" /* JobinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__jobinfo_jobs_table_jobs_table_component__["a" /* JobsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_15__jobinfo_post_job_post_job_component__["a" /* PostJobComponent */],
            __WEBPACK_IMPORTED_MODULE_16__jobinfo_jobs_table_job_detail_job_detail_component__["a" /* JobDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_17__callback_callback_component__["a" /* CallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_18__userinfo_update_users_info_update_users_info_component__["a" /* UpdateUsersInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_19__jobinfo_updatejob_updatejob_component__["a" /* UpdatejobComponent */],
            __WEBPACK_IMPORTED_MODULE_20__userinfo_b_user_form_update_b_user_form_update_component__["a" /* BUserFormUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_21__userinfo_w_user_form_update_w_user_form_update_component__["a" /* WUserFormUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_22__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobinfo_jobinfo_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_page_welcome_page_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jobinfo_post_job_post_job_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jobinfo_jobs_table_job_detail_job_detail_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__callback_callback_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobinfo_updatejob_updatejob_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__userinfo_update_users_info_update_users_info_component__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core import










var appRoutes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_3__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_7__callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__jobinfo_jobinfo_component__["a" /* JobinfoComponent */] },
            { path: 'postjob', component: __WEBPACK_IMPORTED_MODULE_5__jobinfo_post_job_post_job_component__["a" /* PostJobComponent */] },
            { path: 'updatejob', component: __WEBPACK_IMPORTED_MODULE_8__jobinfo_updatejob_updatejob_component__["a" /* UpdatejobComponent */] },
            { path: 'updateinfo', component: __WEBPACK_IMPORTED_MODULE_9__userinfo_update_users_info_update_users_info_component__["a" /* UpdateUsersInfoComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__jobinfo_jobs_table_job_detail_job_detail_component__["a" /* JobDetailComponent */] }
        ] }
    // { path: "dashboard/jobs/:id", component: JobDetailComponent}
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(255),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.submitForm = function (form) {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(256),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobsTableComponent = (function () {
    function JobsTableComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    JobsTableComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.hover').hover(function () {
                $(this).addClass('flip');
            }, function () {
                $(this).removeClass('flip');
            });
            $('.hover').click(function () {
                var thisJobID = $(this).find('#jobID').text();
            });
        });
    };
    JobsTableComponent.prototype.setJquery = function () {
        $(document).ready(function () {
            $('.hover').hover(function () {
                $(this).addClass('flip');
            }, function () {
                $(this).removeClass('flip');
            });
            $('.hover').click(function () {
                var thisJobID = $(this).find('#jobID').text();
            });
        });
    };
    JobsTableComponent.prototype.onClick = function (jobID) {
        this.router.navigate(["dashboard", jobID]);
    };
    JobsTableComponent.prototype.onClickToPostJob = function () {
        this.router.navigate(['postjob'], { relativeTo: this.route });
    };
    return JobsTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], JobsTableComponent.prototype, "jobs", void 0);
JobsTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'jobs-table',
        template: __webpack_require__(259),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], JobsTableComponent);

var _a, _b;
//# sourceMappingURL=jobs-table.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BUserFormUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BUserFormUpdateComponent = (function () {
    function BUserFormUpdateComponent(router) {
        this.router = router;
    }
    BUserFormUpdateComponent.prototype.ngOnInit = function () {
    };
    BUserFormUpdateComponent.prototype.submitForm = function (form) {
        this.router.navigate(['dashboard']);
    };
    return BUserFormUpdateComponent;
}());
BUserFormUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-b-user-form-update',
        template: __webpack_require__(262),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], BUserFormUpdateComponent);

var _a;
//# sourceMappingURL=b-user-form-update.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserinfoComponent = (function () {
    function UserinfoComponent(router, route, auth, app$) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.app$ = app$;
        this.isBusiness = false;
    }
    UserinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
                _this.userID = _this.profile.sub;
                var straightDash = _this.userID.indexOf('|') + 1;
                _this.userID = _this.userID.slice(straightDash);
                _this.retrieveInfo();
            });
        }
    };
    UserinfoComponent.prototype.retrieveInfo = function () {
        var _this = this;
        this.app$.getBusinessUser(this.userID)
            .subscribe(function (businessUser) {
            _this.businessObject = businessUser;
            if (_this.businessObject != null) {
                _this.isBusiness = true;
            }
        }, function () { }, function () { });
    };
    UserinfoComponent.prototype.onClickToPostJob = function () {
        this.router.navigate(['postjob'], { relativeTo: this.route });
    };
    UserinfoComponent.prototype.updateInfoFirstTime = function () {
        this.router.navigate(['updateinfo'], { relativeTo: this.route });
    };
    return UserinfoComponent;
}());
UserinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userinfo',
        template: __webpack_require__(264),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]) === "function" && _d || Object])
], UserinfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=userinfo.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WUserFormUpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WUserFormUpdateComponent = (function () {
    function WUserFormUpdateComponent(router) {
        this.router = router;
    }
    WUserFormUpdateComponent.prototype.ngOnInit = function () {
    };
    WUserFormUpdateComponent.prototype.submitForm = function (form) {
        this.router.navigate(['dashboard']);
    };
    return WUserFormUpdateComponent;
}());
WUserFormUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-w-user-form-update',
        template: __webpack_require__(265),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], WUserFormUpdateComponent);

var _a;
//# sourceMappingURL=w-user-form-update.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http) {
        this.http = http;
        //ost:string = 'http://localhost:3000';
        this.host = 'http://teamideel.azurewebsites.net';
        this.userId = "";
    }
    AppService.prototype.getAllJobs = function () {
        return this.http.get(this.host + '/api/jobs')
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.getOneJob = function (jobID) {
        return this.http.get(this.host + '/api/jobs/' + jobID)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.getBusinessUser = function (_userID) {
        return this.http.get(this.host + '/api/users/bUsers/' + _userID)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.getWorkerUser = function (_userID) {
        return this.http.get(this.host + '/api/users/wUsers/' + _userID)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.setAppliedJob = function (wUserID, jobID) {
        return this.http.put(this.host + '/api/jobs/' + jobID + "/" + wUserID, "")
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.setAppliedUser = function (wUserID, jobID) {
        return this.http.put(this.host + '/api/users/' + wUserID + "/" + jobID, "")
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.addSaveJob = function (wUserID, jobID) {
        return this.http.put(this.host + '/api/save/' + wUserID + "/" + jobID, "")
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.sendWorkerEmail = function (_workerEmail, _businessEmail) {
        this.body = {
            "workerEmail": _workerEmail,
            "businessEmail": _businessEmail
        };
        this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.host + '/api/sendWorker', this.body, this.options)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.sendBusinessEmail = function (_workerEmail, _businessEmail) {
        this.body = {
            "workerEmail": _workerEmail,
            "businessEmail": _businessEmail
        };
        this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.host + '/api/sendBusiness', this.body, this.options)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.postJob = function (_jobID, _businessID, _title, _description, _companyName, _city, _zipcode, _address, _phoneNo, _salary, _startDate, _endDate, _availability) {
        this.body = {
            "jobID": _jobID,
            "businessID": _businessID,
            "title": _title,
            "description": _description,
            "companyName": _companyName,
            "city": _city,
            "zipcode": _zipcode,
            "address": _address,
            "phoneNo": _phoneNo,
            "salary": _salary,
            "startDate": _startDate,
            "endDate": _endDate,
            "availability": _availability
        };
        console.log(this.body);
        this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.host + '/api/jobs', this.body, this.options)
            .map(function (res) { return res.json(); });
    };
    AppService.prototype.deleteJob = function (_jobID) {
        this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Method': 'DELETE' });
        return this.http.delete(this.host + '/api/jobs/' + _jobID, this.options)
            .subscribe(function (res) {
            if (res.status != 200) {
                console.log("Server Error");
            }
        });
    };
    AppService.prototype.updateJob = function (_jobID, _title, _description, _company, _city, _address, _zipcode, _phoneNo, _salary, _startDate, _endDate) {
        this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Method': 'PUT' });
        this.options.append('Accept', 'application/json');
        this.body = {
            "title": _title,
            "description": _description,
            "companyName": _company,
            "city": _city,
            "address": _address,
            "zipcode": _zipcode,
            "phoneNo": _phoneNo,
            "salary": _salary,
            "startDate": _startDate,
            "endDate": _endDate
        };
        console.log("inside updateJob");
        console.log(this.body);
        return this.http.put(this.host + '/api/jobs/' + _jobID, this.body, this.options)
            .subscribe(function (res) {
            if (res.status != 200) {
                console.log("Server Error");
            }
        });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router, route) {
        this.router = router;
        this.route = route;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js___default.a.WebAuth({
            clientID: 'C0LbLetjlwsNGypHF25et8616cwi4xSM',
            domain: 'rileydu.auth0.com',
            responseType: 'token id_token',
            audience: 'https://rileydu.auth0.com/userinfo',
            //redirectUri: 'http://localhost:4200/callback',
            redirectUri: 'http://teamideel.azurewebsites.net/',
            //redirectUri: 'http://localhost:3000',
            scope: 'openid profile'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/dashboard']);
            }
            else if (err) {
                _this.router.navigate(['/welcome']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/welcome']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".signin:hover{\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#listOfJobs{\n    margin: 4rem 2rem;\n}\n\n.box{\n    margin-top:20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".container {\n    border:1px solid #d2d2e0;\n    margin-top: 2rem;\n}\n\n\n.buttonContainers{\n    text-align: right;\n}\n\n\n.applyButton {\n    margin: 10px;\n    width:15%;\n    background-color: white; \n    color: black; \n    border: 2px solid #4CAF50;\n}\n\n.applyButton:hover {\n    background-color: #4CAF50;\n    color: white;\n    cursor:pointer;\n}\n\n.saveButton{\n    margin:10px;\n    width: 15%;\n    background-color: white; \n    color: black; \n    border: 2px solid #f44336;\n}\n\n.saveButton:hover{\n    background-color: #f44336;\n    color: white;\n    cursor:pointer;\n}\n\n\n\n.deleteButton {\n    margin:10px;\n    width: 15%;\n    background-color: white; \n    color: black; \n    border: 2px solid #f44336;\n}\n\n.deleteButton:hover{\n    background-color: #f44336;\n    color: white;\n    cursor:pointer;\n}\n\n\n.updateButton {\n    margin: 10px;\n    width:15%;\n    background-color: white; \n    color: black; \n    border: 2px solid #4CAF50;\n}\n\n.updateButton:hover {\n    background-color: #4CAF50;\n    color: white;\n    cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".card{\n    margin-top: 10px;    \n    margin-bottom: 10px;\n}\n\n.viewButton{\n    background-color: #33bbff;\n}\n\n.viewButton:hover{\n    cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".submitButton:hover{\n    cursor: pointer;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".updateButton:hover{\n    cursor:pointer;\n}\n\n.jumbotron {\n    margin:25px;\n    width:70%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".btn-info:hover{\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "#wholepage{\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<p>\n  callback works!\n</p>\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"page-content\">\n      <div class=\"container\">\n        <div class=\"sidemenu\">\n          <app-userinfo></app-userinfo>        \n        </div>\n      </div>\n      <div class=\"content\">\n        <router-outlet></router-outlet>\n      </div>\n\n</div>\n<app-footer></app-footer>\n<!--<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-userinfo></app-userinfo>\n    </div>\n    <div class=\"col-md-9\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>-->"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-container\">\n    <div class=\"container\">\n\n      <div class=\"address\">\n      </div>\n      <div class=\"clear\"></div>\n      <div class=\"social\">\n        <a href=\"#\" class=\"social-icons\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n        <a href=\"#\" class=\"social-icons\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\n        <a href=\"#\" class=\"social-icons\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>\n        <a href=\"#\" class=\"social-icons\" target=\"_blank\"><i class=\"fa fa-shopping-cart\"></i></a>\n      </div>\n      <div class=\"row copyrights\">\n        &copy; <span>2017 </span> IDeel Inc. All Rights Reserved.\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"header-container uppermenu\">\n    <div class=\"container\">\n      <div class=\"site-name\"><a routerLink=\"/dashboard\">iDeel</a></div>\n      <ul class=\"header_login\">\n        <li *ngIf=\"auth.isAuthenticated()\" (click)=\"auth.logout()\" class=\"signin\"><a><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log out</a></li>\n        <li *ngIf=\"!auth.isAuthenticated()\" (click)=\"auth.login()\" class=\"signin\"><a><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Sign In</a></li>\n\n      </ul>\n      <div class=\"clear\"></div>\n    </div>\n  </div>\n  <div class=\"header-container main-header\">\n    <div class=\"container\">\n\n      <a class=\"logo\" routerLink=\"/dashboard\"></a>\n\n\n      <form class=\"search\" #form=\"ngForm\" (ngSubmit)=\"submitForm(form.value)\">\n        <input class=\"searchbar\" value=\"\" name=\"search\" type=\"text\" />\n        <button class=\"search-submit\" type=\"submit\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n      </form>\n\n\n      <div class=\"clear\"></div>\n    </div>\n  </div>\n</header>\n<!--<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\">iDeel</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/welcome\">Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link\"  routerLink=\"/dashboard\" ><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> Dashboard</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n    \n  </div>\n</nav>-->"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div class=\"jobs\">\n  <jobs-table [jobs]=\"jobList\"></jobs-table>\n</div>"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\">\n  <div>\n      <h1>Job Title: {{jobInfo?.title}}</h1><br>\n  </div>\n\n  <div>\n      <p>Job ID: {{jobInfo?.jobID}}</p><br>\n  </div>\n\n  <div>\n      <p>Description: {{jobInfo?.description}}</p><br>\n  </div>\n\n  <div>\n      <p>Company: {{jobInfo?.companyName}}</p><br>\n  </div>\n\n  <div>\n      <p>City: {{jobInfo?.city}}</p><br>\n  </div>\n\n  <div>\n      <p>Address: {{jobInfo?.address}}</p><br>\n  </div>\n\n  <div>\n      <p>Zipcode: {{jobInfo?.zipcode}}</p><br>\n  </div>\n\n  <div>\n      <p>Salary: {{jobInfo?.salary}}</p><br>\n  </div>\n\n    <div class=\"btnholder\">\n      <button type=\"button\" class=\"btn\" style=\"width:120px;\" (click)=\"applyJob()\">Apply Job</button>\n      <button type=\"button\" class=\"btn\" style=\"width:120px;\" (click)=\"saveJob(1,1)\">Save Job</button>\n      <button type=\"button\" class=\"btn\" style=\"width:120px;\" (click)=\"updateJob()\">Update Job</button>\n      <button type=\"button\" class=\"btn\" style=\"width:120px;\" (click)=\"deleteJob(jobInfo?.jobID)\">Delete Job</button>\n      <button type=\"button\" class=\"btn\" style=\"width:120px;\" routerLink=\"/dashboard\">Back</button>\n      \n    </div>\n</div>\n"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<div id=posticon>\n<div class=\"col_third\">\n  <div class=\"hover panel\">\n    <div class=\"front\">\n      <div class=\"box1\" (click)=\"onClickToPostJob()\">\n        <i class=\"fa fa-plus-circle fa-4x\" style=\"margin-top:20px;\"></i>\n      </div>\n    </div>\n    <div class=\"back\">\n        <div class=\"box2\" (click)=\"onClickToPostJob()\">\n          <h3 style=\"text-align:center; margin-top:25px;\">Post a New Job</h3>\n        </div>\n      </div>\n  </div>\n</div>\n</div>\n\n<div class=\"cards\" *ngFor=\"let job of jobs\">\n  <div class=\"col_third\" (click)=\"onClick(job.jobID)\" on-mouseover=\"setJquery()\">\n    <div class=\"hover panel\">\n      <div class=\"front\">\n        <div class=\"box1\">\n          <p>{{job.companyName}}</p>\n          <p>{{job.city}}</p>\n          <p>Salary: ${{job.salary}}/hour</p>\n        </div>\n      </div>\n      <div class=\"back\">\n        <div class=\"box2\">\n          <p>{{job.description}}</p>\n          <p></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!--<div class=\"row text-center\">\n  <div class=\"col-sm-5\" *ngFor=\"let result of jobs\" id=\"eachCard\">\n    <div class=\"card\">\n      <div class=\"card-block\" >\n        <h3 class=\"card-title\">{{result.companyName}}</h3>\n        <p class=\"card-text\">\n          Title: {{result.title}}<br>\n          {{result.description}}<br>\n          City: {{result.city}}<br>\n          Salary: {{result.salary}}<br></p>          \n        <a (click)=\"onClick(result.jobID)\" class=\"btn viewButton\">View</a>\n      </div>\n    </div>\n  </div>\n</div>-->"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron\" style=\"margin-top: 70px; margin-left:20px;\">\n    <h2 style=\"margin-bottom:20px; margin-top:-35px;\">Post Job</h2>\n    <form #form=\"ngForm\" (ngSubmit)=\"submitForm(form.value)\">\n      <div class=\"form-group\">\n        <label>Title:</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Storage Cleaner\" name=\"title\" ngModel required>\n      </div>\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"My description\" name=\"description\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Company Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"My Company\" name=\"companyName\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>City</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Seattle\" name=\"city\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Address</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"123 12th Lincoln\" name=\"address\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Zipcode</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"98122\" name=\"zipcode\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Phone</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"123456789\" name=\"phoneNo\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Salary</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"321\" name=\"salary\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Start Date</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"startDate\" ngModel required>\n      </div>\n      \n      <div class=\"form-group\">\n        <label>End Date</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"endDate\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn\" style=\"width:90px;\">Submit</button>\n        <button class=\"btn\" style=\"width:90px;\" routerLink=\"/dashboard\">Cancel</button>\n        \n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron\">\n    <h2 style=\"margin-bottom:20px\">Update Job</h2>\n    <form #form=\"ngForm\" (ngSubmit)=\"submimtUpdateForm(form.value)\">\n      <div class=\"form-group\">\n        <label>Title:</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Storage Cleaner\" name=\"title\" ngModel required>\n      </div>\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"My description\" name=\"description\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Company Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"My Company\" name=\"companyName\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>City</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Seattle\" name=\"city\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Address</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"123 12th Lincoln\" name=\"address\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Zipcode</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"98122\" name=\"zipcode\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Phone</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"123456789\" name=\"phoneNo\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Salary</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"321\" name=\"salary\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Start Date</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"startDate\" ngModel required>\n      </div>\n      \n      <div class=\"form-group\">\n        <label>End Date</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"endDate\" ngModel required>\n      </div>\n\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-default updateButton\">Update Job</button>\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"margin-top: 70px; margin-left:20px;\">\n    <h2 style=\"margin-bottom:20px; margin-top:-35px;\">Business User Info Update</h2>\n    <form #form=\"ngForm\" (ngSubmit)=\"submitForm(form.value)\">\n      <div class=\"form-group\">\n        <label>Address</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"120 12th Lincoln, Seattle WA\" name=\"address\">\n      </div>\n      <div class=\"form-group\">\n        <label>Zipcode</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"98102\" name=\"zipcode\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Company Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"My Company\" name=\"companyName\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Anything\" name=\"description\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Company License Number</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"112233665544\" name=\"license\">\n      </div>\n      \n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        <button class=\"btn\" style=\"width:90px;\" routerLink=\"/dashboard\">Cancel</button>\n\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<app-b-user-form-update *ngIf=\"isBusiness\"></app-b-user-form-update>\n<app-w-user-form-update *ngIf=\"!isBusiness\"></app-w-user-form-update>\n\n\n\n"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"auth.isAuthenticated()\">Profile</h3>\n<div *ngIf=\"auth.isAuthenticated()\">\n  <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n  <div>\n    <br />\n    <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n    <button type=\"button\" class=\"btn\" (click)=\"updateInfoFirstTime()\" style=\"width:150px;\" onClick=\"window.location.reload()\">Update Info</button>\n    <button type=\"button\" class=\"btn\" *ngIf=\"isBusiness\"  (click)=\"onClickToPostJob()\"style=\"margin-top:10px; width:150px;\">Post new job</button>\n  </div>\n  <pre class=\"full-profile\">{{ profile | json }}</pre>\n\n\n  <!--<div class=\"row\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"onClickToPostJob()\">POST</button>\n</div>-->\n  <!--<div class=\"panel panel-default profile-area\">\n  <div class=\"panel-heading\">\n    <h3>Profile</h3>\n  </div>\n  <div class=\"panel-body\">\n    <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n    <div>\n      <label><i class=\"glyphicon glyphicon-user\"></i> Nickname</label>\n      <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n      <button\n        class=\"btn btn-primary btn-margin\"\n        *ngIf=\"auth.isAuthenticated()\"\n        (click)=\"auth.logout()\">\n          Log Out\n      </button>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <button type=\"button\" class=\"btn btn-info\" *ngIf=\"!isBusiness\" (click)=\"onClickToPostJob()\">POST</button>\n</div>\n<div class=\"row\">\n  <button type=\"button\" class=\"btn btn-info\" *ngIf=\"!isExisted\" (click)=\"updateInfoFirstTime()\">UPDATE INFO</button>\n</div>\n    \n\n\n\n\n</div>-->\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"margin-top: 70px; margin-left:20px;\">\n    <h2 style=\"margin-bottom:20px; margin-top:-35px;\">Worker User Info Update</h2>\n    <form #form=\"ngForm\" (ngSubmit)=\"submitForm(form.value)\">\n\n      <div class=\"form-group\">\n        <label>Date of Birth</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"12-24-17\" name=\"dob\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Description</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"My description\" name=\"description\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Zipcode</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"98102\" name=\"companyName\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Address</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"123 12th Lincoln, Seattle WA\" name=\"location\">\n      </div>\n\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        <button class=\"btn\" style=\"width:90px;\" routerLink=\"/dashboard\">Cancel</button>\n\n      </div>\n\n    </form>\n  </div>"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<p id=\"welcome\">Welcome to iDeel</p>\n<div class=\"forms\" id=\"login-box\">\n  <div class=\"error-msg\"><i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i> Please Enter Your Username and Password</div>\n\n  <a class=\"login-logo\" routerLink=\"/dashboard\"></a>\n  \n  <button class=\"btn signin-btn\" (click)=\"auth.login()\">Sign in with your social account</button>\n \n</div>\n<a class=\"google\"></a>\n<div id=\"fbd\"><a class=\"facebook\"></a></div>\n\n<!--<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Auth0 - Angular</a>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        routerLink=\"/dashboard\">\n          Home\n      </button>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        *ngIf=\"!auth.isAuthenticated()\"\n        (click)=\"auth.login()\">\n          Log In\n      </button>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        *ngIf=\"auth.isAuthenticated()\"\n        (click)=\"auth.logout()\">\n          Log Out\n      </button>\n\n    </div>\n  </div>\n</nav>-->"

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-callback',
        template: __webpack_require__(253),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], CallbackComponent);

//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(254),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobinfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobinfoComponent = (function () {
    function JobinfoComponent(route, router, app$) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.app$ = app$;
        app$.getAllJobs()
            .subscribe(function (result) {
            _this.jobList = result;
        }, function () { }, function () { });
    }
    JobinfoComponent.prototype.ngOnInit = function () {
    };
    return JobinfoComponent;
}());
JobinfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-jobinfo',
        template: __webpack_require__(257),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === "function" && _c || Object])
], JobinfoComponent);

var _a, _b, _c;
//# sourceMappingURL=jobinfo.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobDetailComponent = (function () {
    function JobDetailComponent(route, app$, router, auth) {
        var _this = this;
        this.route = route;
        this.app$ = app$;
        this.router = router;
        this.auth = auth;
        this.jobID = this.route.snapshot.params['id'];
        this.app$.getOneJob(this.jobID)
            .subscribe(function (result) {
            _this.jobInfo = result;
        }, function () { }, function () { });
    }
    JobDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.userInfo = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.userInfo = profile;
            });
        }
    };
    JobDetailComponent.prototype.applyJob = function () {
        var wUsersID = this.userInfo.sub;
        var straightDash = wUsersID.indexOf('|') + 1;
        wUsersID = wUsersID.slice(straightDash);
        //console.log(wUsersID);
        //take this out!!!!!!!!!!!!!!!!
        wUsersID = 1;
        //need to get wuser email
        var workerEmail = "lhyroger@gmail.com";
        //need to call to get one bUser to get email
        var businessEmail = "lhyroger@gmail.com";
        this.setAppliedListJob(wUsersID, this.jobID);
        this.setAppliedListUser(wUsersID, this.jobID);
        this.sendEmailWorker(workerEmail, businessEmail);
        this.sendEmailBusiness(workerEmail, businessEmail);
        alert("Thank you for using our service!\n Your application sent to " + businessEmail);
    };
    JobDetailComponent.prototype.sendEmailWorker = function (workerEmail, businessEmail) {
        var _this = this;
        this.app$.sendWorkerEmail(workerEmail, businessEmail)
            .subscribe(function (result) {
            _this.putResponse = JSON.stringify(result);
        }, function () { }, function () { });
    };
    JobDetailComponent.prototype.sendEmailBusiness = function (workerEmail, businessEmail) {
        var _this = this;
        this.app$.sendBusinessEmail(workerEmail, businessEmail)
            .subscribe(function (result) {
            _this.putResponse = JSON.stringify(result);
        }, function () { }, function () { });
    };
    JobDetailComponent.prototype.setAppliedListJob = function (wUsersID, jobID) {
        var _this = this;
        this.app$.setAppliedJob(wUsersID, jobID)
            .subscribe(function (result) {
            _this.putResponse = JSON.stringify(result);
        }, function (err) { return console.log("Error HTTP Put Service"); }, function () { return console.log("userID saved in job's appliedList"); });
    };
    JobDetailComponent.prototype.setAppliedListUser = function (wUsersID, jobID) {
        var _this = this;
        this.app$.setAppliedUser(wUsersID, jobID)
            .subscribe(function (result) {
            _this.putResponse = JSON.stringify(result);
        }, function (err) { return console.log("Error HTTP Put Service"); }, function () { return console.log("jobID saved in user's appliedList"); });
    };
    JobDetailComponent.prototype.saveJob = function (wUsersID, jobID) {
        var _this = this;
        this.app$.addSaveJob(wUsersID, jobID)
            .subscribe(function (result) {
            _this.putResponse = JSON.stringify(result);
        }, function (err) { return console.log("Error HTTP Put Service"); }, function () { return console.log("Job saved"); });
    };
    JobDetailComponent.prototype.updateJob = function () {
        //this.app$.updateJob(_jobID,_title,_description,_company,_city,_address,_zipcode,_salary);
        this.router.navigate(['dashboard/updatejob']);
    };
    JobDetailComponent.prototype.deleteJob = function (_jobID) {
        this.app$.deleteJob(_jobID);
        this.router.navigate(['dashboard']);
    };
    return JobDetailComponent;
}());
JobDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-detail',
        template: __webpack_require__(258),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], JobDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=job-detail.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostJobComponent = (function () {
    function PostJobComponent(app$, router) {
        var _this = this;
        this.app$ = app$;
        this.router = router;
        this.id = 0;
        this.app$.getAllJobs()
            .subscribe(function (result) {
            result.sort(function (a, b) { return (a.jobID > b.jobID) ? 1 : ((b.jobID > a.jobID) ? -1 : 0); });
            _this.id = result[result.length - 1].jobID + 1;
            _this.businessID = result.length + 1000;
            console.log(result);
        }, function () { }, function () { });
    }
    PostJobComponent.prototype.ngOnInit = function () {
    };
    PostJobComponent.prototype.submitForm = function (form) {
        var _this = this;
        this.jobID = this.id;
        this.app$.postJob(this.jobID, this.businessID, form.title, form.description, form.companyName, form.city, form.zipcode, form.address, form.phoneNo, form.salary, form.startDate, form.endDate, true)
            .subscribe(function (result) {
            _this.postResponse = JSON.stringify(result),
                function (err) { return console.log("Error HTTP Post Service"); },
                function () { return console.log("Data has been posted"); };
        });
        this.router.navigate(['dashboard']);
    };
    return PostJobComponent;
}());
PostJobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-job',
        template: __webpack_require__(260),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PostJobComponent);

var _a, _b;
//# sourceMappingURL=post-job.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatejobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatejobComponent = (function () {
    function UpdatejobComponent(app$, router) {
        this.app$ = app$;
        this.router = router;
    }
    UpdatejobComponent.prototype.ngOnInit = function () {
    };
    //Need to figure out how to pass the jobID that is being updated into this function
    UpdatejobComponent.prototype.submimtUpdateForm = function (form, jobID) {
        // console.log(form);
        jobID = 0;
        this.app$.updateJob(jobID, form.title, form.description, form.companyName, form.city, form.address, form.zipcode, form.phoneNo, form.salary, form.startDate, form.endDate);
        this.router.navigate(['dashboard']);
    };
    return UpdatejobComponent;
}());
UpdatejobComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-updatejob',
        template: __webpack_require__(261),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UpdatejobComponent);

var _a, _b;
//# sourceMappingURL=updatejob.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUsersInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateUsersInfoComponent = (function () {
    function UpdateUsersInfoComponent(router, route, app$, auth) {
        this.router = router;
        this.route = route;
        this.app$ = app$;
        this.auth = auth;
    }
    UpdateUsersInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
                _this.userID = _this.profile.sub;
                var straightDash = _this.userID.indexOf('|') + 1;
                _this.userID = _this.userID.slice(straightDash);
                _this.retrieveInfo();
            });
        }
    };
    UpdateUsersInfoComponent.prototype.retrieveInfo = function () {
        var _this = this;
        this.app$.getBusinessUser(this.userID)
            .subscribe(function (businessUser) {
            _this.businessObject = businessUser;
            if (_this.businessObject != null) {
                _this.isBusiness = true;
            }
        }, function () { }, function () { });
    };
    return UpdateUsersInfoComponent;
}());
UpdateUsersInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-users-info',
        template: __webpack_require__(263),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], UpdateUsersInfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=update-users-info.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomePageComponent = (function () {
    function WelcomePageComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    WelcomePageComponent.prototype.ngOnInit = function () {
    };
    return WelcomePageComponent;
}());
WelcomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome-page',
        template: __webpack_require__(266),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], WelcomePageComponent);

var _a;
//# sourceMappingURL=welcome-page.component.js.map

/***/ })

},[312]);
//# sourceMappingURL=main.bundle.js.map