webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatindPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatindPage = /** @class */ (function () {
    function ChatindPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.messages = [];
        this.text = "";
    }
    ChatindPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatindPage');
    };
    ChatindPage.prototype.addMessage = function () {
        this.messages.push(this.text);
        this.text = "";
    };
    ChatindPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatind',template:/*ion-inline-start:"C:\proyectosAngular\tinderApp\src\pages\chatind\chatind.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n  <ion-row>\n\n      <ion-col>         \n\n          <img src="images/disha.jpg" style="width:60px;height:60px;border-radius:50%">         \n\n      </ion-col>\n\n      <ion-col style="margin-top:15px">\n\n        Isa Ortiz\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button icon-only clear>\n\n            <ion-icon name="more"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n  </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n\n\n    <ion-scroll scrollY="true" style="width: 100%; height: 100%;">\n\n        <ion-row style="margin-top:5px">\n\n            <ion-col text-left style="    margin-top: 12px">\n\n                <img src="images/disha.jpg" style="width:50px;height:50px;border-radius:50%">\n\n            </ion-col>\n\n            <ion-col col-7  style="background-color:#d3d3d3; min-height:50px;border-radius:10px;" >\n\n              <p style="padding:5px; color:black">Buenos dias Gustavo</p>\n\n            </ion-col>\n\n           \n\n            <ion-col col-3>\n\n                &nbsp;\n\n              </ion-col>\n\n          </ion-row>\n\n\n\n\n\n      <ion-row *ngFor="let sentence of messages" style="margin-top:5px">\n\n          <ion-col col-3>\n\n            &nbsp;\n\n          </ion-col>\n\n          <ion-col col-7 style="background-color:green; min-height:50px;border-radius:10px;" >\n\n            <p style=" padding:5px; color:white">{{sentence}}</p>\n\n          </ion-col>\n\n          <ion-col text-right style="    margin-top: 12px">\n\n              <img src="images/tiger.jpg" style="width:50px;height:50px;border-radius:50%">\n\n          </ion-col>\n\n        </ion-row>\n\n          \n\n    </ion-scroll>\n\n    \n\n        <ion-footer>\n\n            <ion-toolbar>\n\n              <ion-row>\n\n              <ion-col col-1>\n\n                  <p>\n\n                      <button ion-button icon-right icon-only clear color="dark">                  \n\n                        <ion-icon name="camera"></ion-icon>\n\n                      </button>                \n\n                    </p>\n\n              </ion-col>\n\n              <ion-col col-9>\n\n                  <ion-item style="margin-top:15px; margin-left:18px">                    \n\n                      <ion-input type="text" value="" [(ngModel)]="text" ></ion-input>\n\n                    </ion-item>\n\n              </ion-col>\n\n              <ion-col col-1>\n\n                  <p text-right>\n\n                      <button ion-button icon-right icon-only clear color="dark" (click)="addMessage()">                  \n\n                        <ion-icon name="send" ></ion-icon>\n\n                      </button>                \n\n                    </p>\n\n            </ion-col>\n\n          </ion-row>\n\n            </ion-toolbar>\n\n          </ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\proyectosAngular\tinderApp\src\pages\chatind\chatind.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatindPage);
    return ChatindPage;
}());

//# sourceMappingURL=chatind.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatmain_chatmain__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatind_chatind__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photo_photo__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.prof = function () {
        {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
        }
    };
    HomePage.prototype.chatm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatmain_chatmain__["a" /* ChatmainPage */]);
    };
    HomePage.prototype.chatid = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chatind_chatind__["a" /* ChatindPage */]);
    };
    HomePage.prototype.pho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__photo_photo__["a" /* PhotoPage */]);
    };
    HomePage.prototype.lgn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\proyectosAngular\tinderApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar style="min-height:80px">\n\n   <ion-grid>\n\n     <ion-row>\n\n        <ion-col>         \n\n            <img src="images/tiger.jpg" (click)="prof()" style="width:60px;height:60px;border-radius:50%">         \n\n        </ion-col>\n\n        <ion-col style="margin-top:10px">\n\n            <div class="can-toggle" >\n\n              <div class="can-toggle demo-rebrand-2" >                 \n\n                    <input id="e" type="checkbox" >                \n\n                    <label for="e">                \n\n                      <div class="can-toggle__switch" data-checked="On" data-unchecked="No" style="max-width:150px; max-height:50px"></div>             \n\n                    </label>\n\n                  </div>\n\n                  </div>\n\n                </ion-col>\n\n        <ion-col text-right style="margin-top:-5px">\n\n          <button ion-button icon-only large clear color="dark" (click)="chatm()">\n\n            <ion-icon name="ios-text"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n     </ion-row>\n\n   </ion-grid>    \n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!---<div >\n\n    <p text-center >\n\n      <img src="images/profile.jpg" style="min-height:100%; max-width:90%;border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">  \n\n    </p>  \n\n    <h3 text-center>Luis Urbina, 24</h3>\n\n  </div>-->\n\n  <ion-slides pager style="height: 455px">\n\n    <ion-slide style="background-color: none">\n\n      <p text-center >\n\n        <img src="images/profile.jpg" style="min-height:100%; max-width:90%;border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">  \n\n      </p>  \n\n      <h5 text-center>Luis Urbina, 18</h5>\n\n      <span>Mate, Estadistica (Q70/h)</span><br>\n\n      <span><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon> </span> \n\n    </ion-slide>\n\n    <ion-slide style="background-color: none">\n\n      <p text-center >\n\n        <img src="images/toledo.jpg" style="min-height:100%; max-width:90%;border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">  \n\n      </p>  \n\n      <h5 text-center>Andree Toledo, 18</h5>\n\n      <span>Progra (Q50/h)</span><br>\n\n      <span><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon> </span> \n\n    </ion-slide>\n\n    \n\n    <ion-slide style="background-color: none">\n\n      <p text-center >\n\n        <img src="images/disha.jpg" style="min-height:100%; max-width:90%;border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">  \n\n      </p>  \n\n      <h5 text-center>Isa Ortiz, 18</h5>\n\n      <span>Quimica (Q50/h)</span><br>\n\n      <span><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon> </span> \n\n    </ion-slide>\n\n    <ion-slide style="background-color: none">\n\n      <p text-center >\n\n        <img src="images/madh.jpg" style="min-height:100%; max-width:90%;border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">  \n\n      </p>  \n\n      <h3 text-center>Diego Estrada, 18</h3>\n\n      <span>Biologia (Q60/h)</span><br>\n\n      <span><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon> </span> \n\n    </ion-slide>\n\n    <ion-slide style="background-color: none">\n\n      <p text-center >\n\n        <img src="images/abril.jpg" style="min-height:100%; max-width:90%;border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">  \n\n      </p>  \n\n      <h3 text-center>Abril Palencia, 18</h3>\n\n      <span>Mate (Q40/h)</span><br>\n\n      <span><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon> </span> \n\n    </ion-slide>\n\n    \n\n    \n\n    <ion-slide style="background-color: none">\n\n      <p text-center >\n\n        <img src="images/huma.jpg" style="min-height:100%; max-width:90%;border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">  \n\n      </p>  \n\n      <h3 text-center>Osmin Josue, 18</h3>\n\n      <span>Progra (Q40/h)</span><br>\n\n      <span><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon><ion-icon name="md-star"></ion-icon> </span> \n\n    </ion-slide>\n\n  \n\n  </ion-slides>\n\n  <div text-center style="width: 90%; bottom:10px;position:fixed; align-content:center">\n\n    <ion-buttons text-center style="align-content:center">\n\n          <button ion-button icon-only outline color="primary" style="height:50px;border-radius:50%" (click)="chatid()">\n\n                <ion-icon name="md-chatboxes"></ion-icon>\n\n          </button>\n\n          <button ion-button icon-only outline color="danger" (click)="lgn()" style="height:50px;border-radius:50%">\n\n                <ion-icon name="md-bulb"></ion-icon>\n\n          </button>\n\n    </ion-buttons>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\proyectosAngular\tinderApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_match__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__match_match__["a" /* MatchPage */]);
        modal.present();
    };
    ProfilePage.prototype.goToHome = function () {
        this.navCtrl.pop();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\proyectosAngular\tinderApp\src\pages\profile\profile.html"*/'<ion-header>\n\n    <ion-navbar style="min-height:80px">\n\n        \n\n     <ion-grid>\n\n       <ion-row>\n\n            <ion-title >Usuario</ion-title>\n\n          <ion-col style="margin-top:10px">\n\n              <div class="can-toggle" >\n\n                <div class="can-toggle demo-rebrand-2" >                 \n\n                      <input id="e" type="checkbox" >                \n\n                      <label for="e">                \n\n                        <div class="can-toggle__switch" data-checked="On" data-unchecked="No" style="max-width:150px; max-height:50px"></div>             \n\n                      </label>\n\n                    </div>\n\n                    </div>\n\n                  </ion-col>\n\n          <ion-col text-right style="margin-top:-5px">\n\n            <button ion-button icon-only large clear color="dark">\n\n              <ion-icon name="ios-text"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n       </ion-row>\n\n     </ion-grid>    \n\n     </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p text-center>\n\n      <img src="images/tiger.jpg" style="width:80px;height:80px;border-radius:50%">  \n\n      \n\n  </p>\n\n  <p text-center>\n\n    Gustavo Méndez <br>\n\n   <span style="color:grey"> Ciencias de la Computación <br>\n\n    UVG</span>\n\n  </p>\n\n  <ion-row text-center>\n\n    <ion-col>\n\n        <button ion-button icon-left outline color="cuspurple">\n\n            <ion-icon style="margin-top:-4px" name="home"></ion-icon>\n\n           Ir a Home\n\n          </button> \n\n    </ion-col>\n\n    <ion-col>\n\n        <button ion-button icon-left outline color="cuspurple">\n\n            <ion-icon style="margin-top:-4px" name="md-cog"></ion-icon>\n\n           Ajustes\n\n          </button> \n\n    </ion-col>\n\n  </ion-row>\n\n  <span style="color:grey">Últimos tutores</span>\n\n  <ion-row>    \n\n    <ion-col>\n\n        <p text-center>\n\n            <img src="images/huma.jpg" style="width:80px;height:80px;border-radius:50%">  \n\n            \n\n        </p>\n\n    </ion-col>\n\n    <ion-col>\n\n        <p text-center>\n\n            <img src="images/disha.jpg" style="width:80px;height:80px;border-radius:50%">  \n\n            \n\n        </p>\n\n    </ion-col>\n\n    <ion-col>\n\n        <p text-center>\n\n            <img src="images/madh.jpg" style="width:80px;height:80px;overflow:hidden; border-radius:50%">  \n\n            \n\n        </p>\n\n    </ion-col>\n\n  </ion-row>\n\n  <h4 text-center>Horas de tutoria: 5.23h</h4>\n\n  <h5 text-center>Puntos esta semana: 500 exp.</h5>\n\n  <p text-center>\n\n  <button ion-button full (click)="goToHome()" style="border-radius:40px; ;\n\n  ">Buscar Tutores</button>\n\n</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\proyectosAngular\tinderApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchPage = /** @class */ (function () {
    function MatchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchPage');
    };
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match',template:/*ion-inline-start:"C:\proyectosAngular\tinderApp\src\pages\match\match.html"*/'<ion-content padding style="background-color:rgba(0,0,0,0.9)">\n\n<h1 style="font-size:60px;font-family: \'Sacramento\', cursive;margin-top:50px" text-center>\n\n  <span style="color:white">It\'s a </span><span style="color:red">Match </span>\n\n</h1>\n\n<h6 style="color:white" text-center>You and Huma liked each other </h6>\n\n<ion-row>\n\n  <ion-col text-center>\n\n      <img src="images/disha.jpg" style="border-radius:50%;width:100px;height:100px">\n\n  </ion-col>\n\n  <ion-col col-2 text-center>\n\n      <button ion-button icon-only clear color="danger" style="margin-top:30px"><ion-icon name="md-heart"></ion-icon></button>\n\n  </ion-col>\n\n  <ion-col text-center>\n\n      <img src="images/tiger.jpg" style="border-radius:50%;width:100px;height:100px; ">\n\n  </ion-col>\n\n</ion-row>\n\n<button ion-button full style="margin-top:20px;border-radius:40px; background: linear-gradient(to right, #3A1C71 , #D76D77, #FFAF7B);\n\n  ">Send Message</button>\n\n  <button ion-button full style="margin-top:20px; border-radius:40px; background: linear-gradient(to right, rgb(65, 64, 64) , grey, rgb(65, 64, 64));\n\n  ">Keep Swiping</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\proyectosAngular\tinderApp\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatmainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatind_chatind__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatmainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatmainPage = /** @class */ (function () {
    function ChatmainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    ChatmainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatmainPage');
    };
    ChatmainPage.prototype.goToChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatind_chatind__["a" /* ChatindPage */]);
    };
    ChatmainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatmain',template:/*ion-inline-start:"C:\proyectosAngular\tinderApp\src\pages\chatmain\chatmain.html"*/'<ion-header>\n\n    <ion-navbar style="min-height:80px">\n\n     <ion-grid>\n\n       <ion-row>\n\n          <ion-col>         \n\n              <img src="images/tiger.jpg" style="width:60px;height:60px;border-radius:50%">         \n\n          </ion-col>\n\n          <ion-col style="margin-top:10px">\n\n              <div class="can-toggle" >\n\n                <div class="can-toggle demo-rebrand-2" >                 \n\n                      <input id="e" type="checkbox" >                \n\n                      <label for="e">                \n\n                        <div class="can-toggle__switch" data-checked="On" data-unchecked="No" style="max-width:150px; max-height:50px"></div>             \n\n                      </label>\n\n                    </div>\n\n                    </div>\n\n                  </ion-col>\n\n          <ion-col text-right style="margin-top:-5px">\n\n            <button ion-button icon-only large clear color="dark" >\n\n              <ion-icon name="ios-text"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n       </ion-row>\n\n     </ion-grid>    \n\n     </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content>\n\n    <div >\n\n        <ion-segment [(ngModel)]="chats" style="background: cornflowerblue">\n\n          <ion-segment-button value="heart" style="color:white">\n\n              <ion-icon name="heart"></ion-icon>\n\n          </ion-segment-button>\n\n          <ion-segment-button value="chat" style="color:white">\n\n              <ion-icon name="chatboxes"></ion-icon>\n\n          </ion-segment-button>\n\n          <ion-segment-button value="star" style="color:white">\n\n              <ion-icon name="star"></ion-icon>\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n      \n\n      <div [ngSwitch]="chats">\n\n        <ion-list *ngSwitchCase="\'heart\'">\n\n          <ion-item (click)="goToChat()">\n\n            <ion-thumbnail item-start>\n\n              <img src="images/disha.jpg" style="border-radius:50%">\n\n            </ion-thumbnail>\n\n            <h2>Isa Ortiz</h2>\n\n            <p>Buenos dias Gustavo</p>\n\n            <ion-badge item-end>1</ion-badge>\n\n\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-thumbnail item-start>\n\n                <img src="images/huma.jpg" style="border-radius:50%">\n\n              </ion-thumbnail>\n\n              <h2>Josue Sagastume</h2>\n\n              <ion-badge item-end>2</ion-badge>\n\n            </ion-item>\n\n            \n\n         \n\n        </ion-list>\n\n      \n\n        <ion-list *ngSwitchCase="\'chat\'">\n\n            <ion-item>\n\n                <ion-thumbnail item-start>\n\n                  <img src="images/profile.jpg" style="border-radius:50%">\n\n                </ion-thumbnail>\n\n                <h2>Luis Urbina</h2>\n\n                <p>Que dice, toro. ¿Como va la mate?</p>\n\n                <ion-badge item-end>2</ion-badge>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-thumbnail item-start>\n\n                    <img src="images/madh.jpg" style="border-radius:50%">\n\n                  </ion-thumbnail>\n\n                  <h2>Diego Estrada</h2>\n\n                  <p>Buenas noshes</p>\n\n                  <ion-badge item-end>2</ion-badge>\n\n                </ion-item>\n\n                \n\n       \n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'star\'">\n\n            <ion-item (click)="goToChat()">\n\n                <ion-thumbnail item-start>\n\n                  <img src="images/disha.jpg" style="border-radius:50%">\n\n                </ion-thumbnail>\n\n                <h2>Isa Ortiz</h2>\n\n                <p>Buenos dias Gustavo</p>\n\n                <ion-badge item-end>2</ion-badge>\n\n              </ion-item>\n\n              \n\n         \n\n          </ion-list>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\proyectosAngular\tinderApp\src\pages\chatmain\chatmain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatmainPage);
    return ChatmainPage;
}());

//# sourceMappingURL=chatmain.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhotoPage = /** @class */ (function () {
    function PhotoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhotoPage');
    };
    PhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-photo',template:/*ion-inline-start:"C:\proyectosAngular\tinderApp\src\pages\photo\photo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Edit Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-row>\n\n  <ion-col col-8 style="width:100%; max-height:300px">\n\n      <img src="images/profile.jpeg" style="border-radius:5%;box-shadow: 2px 3px 5px grey;z-index:-1; position: relative;">\n\n      <p class="imglg" >1</p>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n      <img src="images/profile.jpeg" style="border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">\n\n      <p class="imgsm" >2</p>\n\n      <p class="imgsmb" ><ion-icon style="margin-top:5px" name="cog"></ion-icon></p>\n\n      <br>\n\n      <img src="images/profile.jpeg" style="border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;">  \n\n      <p class="imgsm" >3</p>\n\n      <p class="imgsmb" ><ion-icon style="margin-top:5px" name="cog"></ion-icon></p>\n\n  </ion-col>  \n\n  <ion-col col-4>\n\n      <img src="images/profile.jpeg" style="border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;"> \n\n      <p class="imgsm" >4</p>\n\n      <p class="imgsmb" ><ion-icon style="margin-top:5px" name="cog"></ion-icon></p>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n      <img src="images/profile.jpeg" style="border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;"> \n\n      <p class="imgsm" >5</p>\n\n      <p class="imgsmb" ><ion-icon style="margin-top:5px" name="cog"></ion-icon></p>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n      <img src="images/profile.jpeg" style="border-radius:5%;margin-top:10px;box-shadow: 2px 3px 5px grey;"> \n\n      <p class="imgsm">6</p>\n\n      <p class="imgsmb" ><ion-icon style="margin-top:5px" name="cog"></ion-icon></p>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-item>\n\n    <ion-toggle checked="false"></ion-toggle>\n\n    <ion-label>\n\n      Smart Photos\n\n    </ion-label>\n\n    <ion-icon name=\'photos\' item-start></ion-icon>\n\n  </ion-item>\n\n  <p text-center padding>\n\n  <button ion-button full class="butn">Save</button>\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\proyectosAngular\tinderApp\src\pages\photo\photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PhotoPage);
    return PhotoPage;
}());

//# sourceMappingURL=photo.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.llamar = function () {
        console.log('Hola amigos');
        this.callNumber.callNumber("44891647", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\proyectosAngular\tinderApp\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title >Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <h4 text-center padding>Descubre más tutores cerca de tí</h4>\n\n  <p text-center >\n\n    <img src="images/profile.jpg" style="min-height:100%; max-width:90%;border-radius:5%;box-shadow: 2px 3px 5px grey;">  \n\n  </p>  \n\n  <p text-center padding>\n\n      <button ion-button full class="butn" (click)="llamar()">Llamar al usuario</button>\n\n    </p>\n\n  \n\n  <p text-center padding>\n\n    <button ion-button full class="butn">Entrar con Facebook</button>\n\n  </p>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <p text-center>\n\n        No publicamos en Facebook\n\n      </p>   \n\n      <p text-center>Al entrar, estas de acuerdo con los términos y condiciones</p>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"C:\proyectosAngular\tinderApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_match_match__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chatmain_chatmain__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chatind_chatind__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_photo_photo__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatmain_chatmain__["a" /* ChatmainPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chatind_chatind__["a" /* ChatindPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_photo_photo__["a" /* PhotoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatmain_chatmain__["a" /* ChatmainPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chatind_chatind__["a" /* ChatindPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_photo_photo__["a" /* PhotoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\proyectosAngular\tinderApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\proyectosAngular\tinderApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map