webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<main class=\"main-container\">\n  \n  <app-main-page></app-main-page>\n  <app-navbar></app-navbar>\n  <div class=\"bottom-panel\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clr_angular__ = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_knob__ = __webpack_require__("./node_modules/angular2-knob/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_audio_service__ = __webpack_require__("./src/app/services/audio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_files_service__ = __webpack_require__("./src/app/services/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_visuals_service__ = __webpack_require__("./src/app/services/visuals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_deck_common_deck_common_component__ = __webpack_require__("./src/app/components/deck-common/deck-common.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_mixer_mixer_component__ = __webpack_require__("./src/app/components/mixer/mixer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sidenav_sidenav_component__ = __webpack_require__("./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pages_main_page_main_page_component__ = __webpack_require__("./src/app/components/pages/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_pages_settings_page_settings_page_component__ = __webpack_require__("./src/app/components/pages/settings-page/settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_pages_playlist_page_playlist_page_component__ = __webpack_require__("./src/app/components/pages/playlist-page/playlist-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pages_effects_page_effects_page_component__ = __webpack_require__("./src/app/components/pages/effects-page/effects-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pages_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/components/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_time_mmss_pipe__ = __webpack_require__("./src/app/pipes/time-mmss.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_num_to_px_pipe__ = __webpack_require__("./src/app/pipes/num-to-px.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_d3_slider_directive__ = __webpack_require__("./src/app/directives/d3-slider.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_keys_pipe__ = __webpack_require__("./src/app/pipes/keys.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ################## Default & 3rd party code imports #########################
// ____________________________________________________Default imports





// ________________________________________________NPM packages imports


// ###################### Program code imports #############################
// _______________________________________________Services imports



// _______________________________________________Components imports









// ________________________________________________Pipes imports


// _______________________________________________Directives imports


var routes = [
    { path: 'playlist', component: __WEBPACK_IMPORTED_MODULE_16__components_pages_playlist_page_playlist_page_component__["a" /* PlaylistPageComponent */] },
    { path: 'effects', component: __WEBPACK_IMPORTED_MODULE_17__components_pages_effects_page_effects_page_component__["a" /* EffectsPageComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_15__components_pages_settings_page_settings_page_component__["a" /* SettingsPageComponent */] },
    { path: '', redirectTo: '/playlist', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_18__components_pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_deck_common_deck_common_component__["a" /* DeckCommonComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_mixer_mixer_component__["a" /* MixerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_time_mmss_pipe__["a" /* TimeMmssPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_num_to_px_pipe__["a" /* NumToPxPipe */],
                __WEBPACK_IMPORTED_MODULE_21__directives_d3_slider_directive__["a" /* D3SliderDirective */],
                __WEBPACK_IMPORTED_MODULE_15__components_pages_settings_page_settings_page_component__["a" /* SettingsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_pages_main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_pages_playlist_page_playlist_page_component__["a" /* PlaylistPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_pages_effects_page_effects_page_component__["a" /* EffectsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_keys_pipe__["a" /* KeysPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__clr_angular__["a" /* ClarityModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_knob__["a" /* KnobModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes, { enableTracing: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_files_service__["a" /* FilesService */],
                __WEBPACK_IMPORTED_MODULE_7__services_audio_service__["a" /* AudioService */],
                __WEBPACK_IMPORTED_MODULE_9__services_visuals_service__["a" /* VisualsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/deck-common/deck-common.component.css":
/***/ (function(module, exports) {

module.exports = ".deck-letter {\r\n  color: rgba(250, 250, 250, 0.3);\r\n  font-size: 2.5em;\r\n  text-align: center;\r\n  line-height: 60px;\r\n  width: 60px;\r\n}\r\n\r\n.active {\r\n  color: #49afd9;\r\n  text-shadow: 1px 0px 10px #49afd9;\r\n}\r\n\r\n.song-window {\r\n  position: relative;\r\n  height: 100px;\r\n  width: 100%;\r\n  margin: 10px 0;\r\n  border-radius: 4px;\r\n  border: 3px inset rgba(0, 0, 0, 0.4);\r\n  background-color: #000;\r\n  overflow: hidden;\r\n}\r\n\r\n.song-window::after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100px;\r\n  width: 8vw;\r\n  background-color: #49afd9;\r\n  -webkit-filter: opacity(0.6);\r\n          filter: opacity(0.6);\r\n  border-right: 2px solid white;\r\n}\r\n\r\n.song-wave {\r\n  height: 100px;\r\n  width: 1;\r\n  padding: 10px 0px;\r\n  background-color: #000;\r\n  -webkit-animation-name: soundWaveMove;\r\n          animation-name: soundWaveMove;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n  -webkit-animation-play-state: paused;\r\n          animation-play-state: paused;\r\n}\r\n\r\n@-webkit-keyframes soundWaveMove {\r\n  from {\r\n    -webkit-transform: translate3d(calc(0% + 8vw), 0, 0);\r\n            transform: translate3d(calc(0% + 8vw), 0, 0)\r\n  }\r\n  to {\r\n    -webkit-transform: translate3d(calc(-100% + 8vw), 0, 0);\r\n            transform: translate3d(calc(-100% + 8vw), 0, 0)\r\n  }\r\n}\r\n\r\n@keyframes soundWaveMove {\r\n  from {\r\n    -webkit-transform: translate3d(calc(0% + 8vw), 0, 0);\r\n            transform: translate3d(calc(0% + 8vw), 0, 0)\r\n  }\r\n  to {\r\n    -webkit-transform: translate3d(calc(-100% + 8vw), 0, 0);\r\n            transform: translate3d(calc(-100% + 8vw), 0, 0)\r\n  }\r\n}\r\n\r\n.time-display {\r\n  margin: 5px 10px;\r\n  text-align: right;\r\n}\r\n\r\n.time-display>div:first-child {\r\n  font-size: 1.5em;\r\n}\r\n\r\n.speed-container {\r\n  padding: 0;\r\n}\r\n\r\n.speed-slider {\r\n  padding: 0;\r\n}\r\n\r\n.btn {\r\n  background-color: #0f171c;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/deck-common/deck-common.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <!-- DECK HEADER -->\r\n  <header class=\"header-2 row\">\r\n    <img class=\"img\" src=\"assets/img/album-art-placeholder.png\" alt=\"album art\" height=\"60px\" width=\"60px\">\r\n\r\n    <div class=\"branding\">\r\n      <span class=\"title\"></span>\r\n    </div>\r\n\r\n    <div class=\"header-actions\">\r\n      <div class=\"time-display\">\r\n        <div>{{ currentTime | timeMmss}}</div>\r\n        <div>{{ duration | timeMmss}}</div>\r\n      </div>\r\n      <div class=\"deck-letter\" [class.active]=\"playState\">\r\n        {{deck | uppercase}}\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- DECK BODY CONTAINER -->\r\n\r\n  <!-- TEMPO SLIDER -->\r\n  <div class=\"row\">\r\n    <div class=\"card speed-container col-xl-1 col-md-1\" *ngIf=\"deck == 'b'\">\r\n      <div d3-slider id='speed-slider-b' class=\"speed-slider\" [vertical]=\"'true'\" [align]=\"'center'\" [length]=\"150\" [direction]=\"'RTL'\"\r\n        [maxValue]=\"1.2\" [minValue]=\"0.8\" [step]=\"0.1\" [initialValue]=\"1\" [lineWidth]=\"14\" [emptyColor]=\"'#000'\" [color]=\"'#000'\"\r\n        [thumbSize]=\"8\" [thumbColor]=\"'#1b2a32'\" [thumbStrokeWidth]=\"2\" [thumbStroke]=\"'#0081A7'\" (selectedValue)=\"onSpeedChange($event)\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- LEFT SECTION -->\r\n    <div class=\"card col-xl-11 col-md-11\">\r\n      <div class=\"row\">\r\n\r\n        <!-- WAVE DISPLAY -->\r\n        <div class=\" col-xl-12\">\r\n          <div #canvasWindow class=\"song-window\">\r\n            <canvas #canvas class=\"song-wave\" [style.animation-duration]=\"duration + 's'\" [style.animation-play-state]=\"playState ? 'running': 'paused'\"></canvas>\r\n          </div>\r\n\r\n          <div class=\"progress\">\r\n            <progress max=\"duration\" value=\"0\" data-displayval=\"currentTime\"></progress>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n      </div>\r\n      <!-- CONTROL BUTTONS -->\r\n      <div class=\"row flex-items-xl-between flex-items-md-between\">\r\n        <div class=\"col-xl-6 col-md-6\">\r\n          <button *ngIf=\"!playState\" class=\"btn\" (click)=\"Play()\">\r\n            <clr-icon shape=\"play\" class=\"is-solid\"></clr-icon>\r\n          </button>\r\n          <button *ngIf=\"playState\" class=\"btn\" (click)=\"Stop()\">\r\n            <clr-icon shape=\"pause\" class=\"is-solid\"></clr-icon>\r\n          </button>\r\n        </div>\r\n        <div>\r\n          <div class=\"btn-group\">\r\n            <button class=\"btn\">in</button>\r\n            <button class=\"btn\">out</button>\r\n          </div>\r\n          <button class=\"btn btn-icon\">\r\n            <clr-icon shape=\"trash\"></clr-icon>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- END LEFT SECTION -->\r\n\r\n    <!-- TEMPO SLIDER -->\r\n    <div class=\"card speed-container col-xl-1 col-md-1\" *ngIf=\"deck == 'a'\">\r\n      <div d3-slider id='speed-slider-a' class=\"speed-slider\" [vertical]=\"'true'\" [align]=\"'center'\" [length]=\"150\" [direction]=\"'RTL'\"\r\n        [maxValue]=\"1.2\" [minValue]=\"0.8\" [step]=\"0.1\" [initialValue]=\"1\" [lineWidth]=\"14\" [emptyColor]=\"'#000'\" [color]=\"'#000'\"\r\n        [thumbSize]=\"8\" [thumbColor]=\"'#1b2a32'\" [thumbStrokeWidth]=\"2\" [thumbStroke]=\"'#0081A7'\" (selectedValue)=\"onSpeedChange($event)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/deck-common/deck-common.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckCommonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_files_service__ = __webpack_require__("./src/app/services/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_audio_service__ = __webpack_require__("./src/app/services/audio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_visuals_service__ = __webpack_require__("./src/app/services/visuals.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Track } from './../../track.interface';
var DeckCommonComponent = /** @class */ (function () {
    function DeckCommonComponent(_audioService, _visualsService, _filesService) {
        this._audioService = _audioService;
        this._visualsService = _visualsService;
        this._filesService = _filesService;
        this.classes = 'col-xl-5 col-md-8';
    }
    Object.defineProperty(DeckCommonComponent.prototype, "volume", {
        set: function (value) { this.Connect('gain', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckCommonComponent.prototype, "eqHi", {
        set: function (value) { this.Connect('eqHi', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckCommonComponent.prototype, "eqMid", {
        set: function (value) { this.Connect('eqMid', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckCommonComponent.prototype, "eqLo", {
        set: function (value) { this.Connect('eqLo', value); },
        enumerable: true,
        configurable: true
    });
    DeckCommonComponent.prototype.onFileLoaded = function (audioData) {
        this.duration = this._audioService.audioDuration;
        this._visualsService.renderWaveForm(audioData, this._soundWaveCanvas);
    };
    DeckCommonComponent.prototype.Play = function () {
        this._audioService.StartAudio();
        this.StartTimer();
    };
    DeckCommonComponent.prototype.Stop = function () {
        this._audioService.StopAudio();
        this.StopTimer();
    };
    DeckCommonComponent.prototype.StartTimer = function () {
        var _this = this;
        this._timer = setInterval(function () { return _this.currentTime = _this._audioService.contextTimer; }, 1000);
    };
    DeckCommonComponent.prototype.StopTimer = function () {
        clearInterval(this._timer);
        this._timer = null;
    };
    DeckCommonComponent.prototype.onSpeedChange = function (value) {
        this._audioService.detune = value;
        this.duration = this._audioService.audioDuration * ((value - 1) * -1 + 1);
    };
    DeckCommonComponent.prototype.Connect = function (destination, value) {
        try {
            this._audioService[destination] = value;
        }
        catch (_a) {
            console.log('No Audio Context To Connect To');
        }
    };
    DeckCommonComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.trackInfo = {
        //   title: 'Song Title',
        //   artist: 'Artist',
        //   album: 'Album',
        //   year: '2018',
        //   duration: 240,
        //   albumCover: 'assets/img/album-art-placeholder.png'
        // };
        this._timer = null;
        this.currentTime = 0;
        this.duration = 0;
        // this.playState = false;
        this._soundWaveCanvas = this.canvasRef.nativeElement;
        // this._audioService.readyState = this.deck === 'a' ? true : false;
        this._filesService.song.subscribe(function (song) {
            if (song.deck === _this.deck) {
                _this._audioService.LoadFile(song.data);
            }
        });
        this._audioService.decodedAudioEmitter
            .subscribe(function (audioData) { return _this.onFileLoaded(audioData); });
        this._audioService.playStateEmitter.subscribe(function (state) { return _this.playState = state; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DeckCommonComponent.prototype, "deck", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DeckCommonComponent.prototype, "volume", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DeckCommonComponent.prototype, "eqHi", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DeckCommonComponent.prototype, "eqMid", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DeckCommonComponent.prototype, "eqLo", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], DeckCommonComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewChild */])('canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], DeckCommonComponent.prototype, "canvasRef", void 0);
    DeckCommonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-deck-common',
            template: __webpack_require__("./src/app/components/deck-common/deck-common.component.html"),
            styles: [__webpack_require__("./src/app/components/deck-common/deck-common.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_audio_service__["a" /* AudioService */], __WEBPACK_IMPORTED_MODULE_3__services_visuals_service__["a" /* VisualsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_audio_service__["a" /* AudioService */],
            __WEBPACK_IMPORTED_MODULE_3__services_visuals_service__["a" /* VisualsService */],
            __WEBPACK_IMPORTED_MODULE_0__services_files_service__["a" /* FilesService */]])
    ], DeckCommonComponent);
    return DeckCommonComponent;
}());



/***/ }),

/***/ "./src/app/components/mixer/mixer.component.css":
/***/ (function(module, exports) {

module.exports = ".mixer-container .btn {\r\n  margin: 0;\r\n}\r\n\r\n.eq {\r\n  text-align: center;\r\n  color: #000;\r\n}\r\n\r\n.volume-slider {\r\n  padding: 5px 0 0 0;\r\n  background-color: #404e60;\r\n  border: 0.2vw solid #0f171c;\r\n}\r\n\r\n.mixer-eq {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  text-align: center;\r\n  color: #bbb;\r\n  background-color: #0f171c;\r\n  padding: 0;\r\n}\r\n\r\n.triangle{\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n}\r\n\r\n.triangle-left {\r\n  border-width: 0 6vw 20px 0px;\r\n  border-color: transparent transparent #31b0d5 transparent;\r\n}\r\n\r\n.triangle-right {\r\n  border-width: 0 0px 20px 6vw;\r\n  border-color: transparent transparent #31b0d5 transparent;\r\n}\r\n\r\n.crossfade {\r\n  text-align: center;\r\n  padding-top: 10px;\r\n  background-color: #6c7a8d;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/mixer/mixer.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <header class=\"header\">Hola</header>\n  <div class=\"card\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-md-3 mixer-eq\">\n        hi\n        <div ui-knob value=\"0\" (valueChange)=\"OnHiBandAChange($event)\" [options]=\"knobOptions\" class=\"eq\"></div>\n        mid\n        <div ui-knob value=\"0\" (valueChange)=\"OnMidBandAChange($event)\" [options]=\"knobOptions\" class=\"eq\"></div>\n        lo\n        <div ui-knob value=\"0\" (valueChange)=\"OnLoBandAChange($event)\" [options]=\"knobOptions\" class=\"eq\"></div>\n      </div>\n      <div class=\"col-xl-3 col-md-3 volume-slider\">\n        <div \n        d3-slider\n        #volumeSliderA\n        id='volume-slider-a'\n        [vertical]=\"'true'\" \n        [align]=\"'center'\"\n        [length]=\"200\"\n        [direction]=\"'RTL'\"\n        [maxValue]=\"1\"\n        [minValue]=\"0\"\n        [step]=\"0.1\"\n        [initialValue]=\"0.5\"\n        [lineWidth]=\"16\"\n        [emptyColor]=\"'#000'\"\n        [color]=\"deckASliderColor\"\n        [thumbSize]=\"9\"\n        [thumbColor]=\"'#1b2a32'\"\n        [thumbStrokeWidth]=\"2\"\n        [thumbStroke]=\"'#0081A7'\"\n        (selectedValue)=\"OnVolumeAChange($event)\"\n        ></div>\n      </div>\n      <div class=\"col-xl-3 col-md-3 volume-slider\">\n        <div \n        d3-slider\n        #volumeSliderB\n        id='volume-slider-b'\n        [vertical]=\"'true'\"\n        [align]=\"'center'\" \n        [length]=\"200\"\n        [direction]=\"'RTL'\"\n        [maxValue]=\"1\"\n        [minValue]=\"0\"\n        [step]=\"0.1\"\n        [initialValue]=\"0.5\"\n        [lineWidth]=\"16\"\n        [emptyColor]=\"'#000'\"\n        [color]=\"deckBSliderColor\"\n        [thumbSize]=\"9\"\n        [thumbColor]=\"'#1b2a32'\"\n        [thumbStrokeWidth]=\"2\"\n        [thumbStroke]=\"'#0081A7'\"\n        (selectedValue)=\"OnVolumeBChange($event)\"\n        ></div>\n      </div>\n      <div class=\"col-xl-3 col-md-3 mixer-eq\">\n        hi\n        <div ui-knob value=\"0\" (valueChange)=\"OnHiBandBChange($event)\"[options]=\"knobOptions\" class=\"eq\"></div>\n        mid\n        <div ui-knob value=\"0\" (valueChange)=\"OnMidBandBChange($event)\" [options]=\"knobOptions\" class=\"eq\"></div>\n        lo\n        <div ui-knob value=\"0\" (valueChange)=\"OnLoBandBChange($event)\"[options]=\"knobOptions\" class=\"eq\"></div>\n      </div>\n    </div>\n    <div class=\"row crossfade\">\n      <div class=\"col-xl-12\">\n        <div class=\"triangle-left triangle\" [style.border-bottom-color]=\"deckASliderColor\"></div>\n        <div class=\"triangle-right triangle\" [style.border-bottom-color]=\"deckBSliderColor\"></div>\n        <div \n        d3-slider \n        id=\"crosssfade-slider\"\n        class=\"crosssfade-slider\"\n        [align]=\"'center'\"\n        [length]=\"180\"\n        [direction]=\"'LTR'\"\n        [maxValue]=\"2\"\n        [minValue]=\"0\"\n        [step]=\"0.1\"\n        [initialValue]=\"1\"\n        [lineWidth]=\"16\"\n        [color]=\"'#000'\"\n        [emptyColor]=\"'#000'\"\n        [thumbSize]=\"12\"\n        [thumbColor]=\"'#1b2a32'\"\n        [thumbStrokeWidth]=\"2\"\n        [thumbStroke]=\"'#0081A7'\"\n        (selectedValue)=\"onCrossFade($event)\"\n        ></div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/mixer/mixer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MixerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MixerComponent = /** @class */ (function () {
    function MixerComponent() {
        this.classes = 'col-xl-2 col-md-4';
        this.OnVolumeAChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.OnVolumeBChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.OnHiBandAChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.OnHiBandBChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._crossFadeAValue = this._crossFadeBValue = this.volumeAValue = this.volumeBValue = 0.5;
    }
    MixerComponent.prototype.OnVolumeAChange = function (value) { this.volumeAValue = value; };
    MixerComponent.prototype.OnVolumeBChange = function (value) { this.volumeBValue = value; };
    MixerComponent.prototype.OnHiBandAChange = function (value) { this.hiBandAValue = value; };
    MixerComponent.prototype.OnMidBandAChange = function (value) { this.midBandAValue = value; };
    MixerComponent.prototype.OnLoBandAChange = function (value) { this.loBandAValue = value; };
    MixerComponent.prototype.OnHiBandBChange = function (value) { this.hiBandBValue = value; };
    MixerComponent.prototype.OnMidBandBChange = function (value) { this.midBandBValue = value; };
    MixerComponent.prototype.OnLoBandBChange = function (value) { this.loBandBValue = value; };
    MixerComponent.prototype.onCrossFade = function (value) {
        this._crossFadeBValue = value;
        this._crossFadeAValue = ((value - 1) * -1 + 1);
        this.deckASliderColor = this.ChangeSliderFillColor(this._crossFadeAValue + 0.1);
        this.deckBSliderColor = this.ChangeSliderFillColor(this._crossFadeBValue + 0.1);
        this.OnVolumeAChange(this.volumeAValue);
        this.OnVolumeBChange(this.volumeBValue);
    };
    MixerComponent.prototype.ChangeSliderFillColor = function (value) {
        var r = 49;
        var g = 176;
        var b = 213;
        return "rgb(" + r * value + ", " + g * value + ", " + b * value + ")";
    };
    MixerComponent.prototype.ngOnInit = function () {
        this.deckASliderColor = this.ChangeSliderFillColor(1);
        this.deckBSliderColor = this.ChangeSliderFillColor(1);
        // if(screen.width == )
        this.knobOptions = {
            readOnly: false,
            displayInput: false,
            size: 45,
            startAngle: -160,
            endAngle: 160,
            unit: '%',
            min: -35,
            max: 35,
            trackWidth: 5,
            barWidth: 5,
            trackColor: '#000',
            barColor: '#49afd9',
            bgColor: '#0F171C',
            bgFull: true,
            scale: {
                enabled: true,
                type: 'dots',
                color: '#49afd9',
                width: 1,
                quantity: 20,
                height: 2,
                spaceWidth: 5
            },
            animate: {
                enabled: true,
                duration: 1000,
                ease: 'linear'
            },
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], MixerComponent.prototype, "classes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], MixerComponent.prototype, "OnVolumeAChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], MixerComponent.prototype, "OnVolumeBChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], MixerComponent.prototype, "OnHiBandAChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], MixerComponent.prototype, "OnHiBandBChanged", void 0);
    MixerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mixer',
            template: __webpack_require__("./src/app/components/mixer/mixer.component.html"),
            styles: [__webpack_require__("./src/app/components/mixer/mixer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MixerComponent);
    return MixerComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Rajdhani');\r\n\r\n .branding__title{\r\n    font-family: 'Rajdhani' !important;\r\n    text-transform: uppercase;\r\n    font-size: 2em !important;\r\n}\r\n\r\n a {\r\n    text-transform: uppercase;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header-3\">\n  <div class=\"branding\">\n    <a href=\"#\" class=\"nav-link\">\n      <clr-icon shape=\"headphones\"></clr-icon>\n      <span class=\"title branding__title\">Project Mix</span>\n    </a>\n  </div>\n  <div class=\"header-nav\">\n    \n    <a class=\"nav-link nav-icon\" routerLink='/playlist' routerLinkActive='active'>\n      <clr-icon shape=\"video-gallery\" class=\"is-solid\"></clr-icon>\n    </a>\n    \n    <a class=\"nav-link nav-icon\" routerLink='/effects' routerLinkActive='active'>\n      <clr-icon shape=\"flame\" class=\"is-solid\"></clr-icon>\n    </a>\n    \n    <a class=\"nav-link nav-icon\" routerLink='/settings' routerLinkActive='active'>\n      <clr-icon shape=\"cog\" class=\"is-solid\"></clr-icon>\n    </a>\n  \n  </div>\n  <div class=\"header-actions\">\n    \n    <a class=\"nav-link nav-icon\">\n      <clr-icon shape=\"user\" class=\"is-solid\"></clr-icon>\n    </a>\n    \n    <a href=\"\" class=\"nav-link nav-text\">log out</a>\n  \n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/effects-page/effects-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/effects-page/effects-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  effects\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/effects-page/effects-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EffectsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EffectsPageComponent = /** @class */ (function () {
    function EffectsPageComponent() {
        this.classes = 'bottom-content';
    }
    EffectsPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], EffectsPageComponent.prototype, "classes", void 0);
    EffectsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-effects-page',
            template: __webpack_require__("./src/app/components/pages/effects-page/effects-page.component.html"),
            styles: [__webpack_require__("./src/app/components/pages/effects-page/effects-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EffectsPageComponent);
    return EffectsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/main-page/main-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n    <section class=\"content-area\">\n      <div class=\"row\">\n        <app-deck-common \n          [deck]=\"leftDeck\" \n          [volume]='this.mixer.volumeAValue'\n          [eqHi]='this.mixer.hiBandAValue'\n          [eqMid]='this.mixer.midBandAValue'\n          [eqLo]='this.mixer.loBandAValue'>\n        </app-deck-common>\n\n        <app-mixer #mixer></app-mixer>\n\n        <app-deck-common \n          [deck]=\"rightDeck\" \n          [volume]='this.mixer.volumeBValue'\n          [eqHi]='this.mixer.hiBandBValue'\n          [eqMid]='this.mixer.midBandBValue'\n          [eqLo]='this.mixer.loBandBValue'>\n        </app-deck-common>\n      </div>\n    </section>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/pages/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
        this.leftDeck = 'a';
        this.rightDeck = 'b';
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-page',
            template: __webpack_require__("./src/app/components/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__("./src/app/components/pages/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pages/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/components/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/components/pages/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/playlist-page/playlist-page.component.css":
/***/ (function(module, exports) {

module.exports = ".section {\r\n    float: left;\r\n    height: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.section__list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n\r\n.title {\r\n    height: 25px;\r\n    background-color: #0f171c;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n}\r\n\r\n.wrapper__half {\r\n    width: 50%;\r\n}\r\n\r\n.list {\r\n    border-style: solid;\r\n    border-color: #0f171c;\r\n    border-width: 0px 0.2vw;\r\n    height: calc(100% - 25px);\r\n}\r\n\r\n.list__songs {\r\n    width: 20vw;\r\n    background-color: #6c7a8d;\r\n}\r\n\r\n.side-panel {\r\n    background-color: #0f171c;\r\n    width: 20vw;\r\n    padding: 0.5vw;\r\n}\r\n\r\n.openFilesBtn {\r\n  background-color: #0f171c;\r\n  cursor: pointer;\r\n}\r\n\r\n.fileInput {\r\n  width: 0.1px;\r\n  height: 0.1px;\r\n  opacity: 0;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n\r\n.fileInput+label {\r\n  cursor: pointer;\r\n}\r\n\r\n.addBtn {\r\n  background-color: #165266;\r\n  color: #fff;\r\n}\r\n\r\n.btn-list{\r\n    margin: 0;\r\n    padding: 0px 10px;\r\n    color: #0f171c;\r\n    border-bottom: 1px solid #165266;\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.evenRow {\r\n    background-color: #bbd;\r\n    \r\n}\r\n\r\n.oddRow{\r\n    background-color: #ddf;\r\n}\r\n\r\n.songList{\r\n  list-style: none;\r\n  color: #000;\r\n}\r\n\r\n.songlist a,\r\n.songlist .btn {\r\n  font-size: 0.7em;\r\n}\r\n\r\n.album-art {\r\n    margin: 0 10px 10px 10px;\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n.song-info__list{\r\n    padding: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/pages/playlist-page/playlist-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section side-panel\">\n  <div class=\"title\">Song info</div>\n  <div>\n    <img src=\"assets/img/album-art-placeholder.png\" alt=\"album art\" class=\"album-art\">\n    <div>\n      <ul class=\"song-info__list\">\n        <li>Artist:</li>\n        <li>Album:</li>\n        <li>Title:</li>\n        <li>Year:</li>\n        <li>Duration:</li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div class=\"section list__songs\">\n  <div class=\"title\">Artists</div>\n  <div class=\"list\">\n    <ul class=\"songList\">\n\n      <li class=\"btn-list\" (click)=\"allArtists()\" [class.oddRow]=\"true\">\n        <a>All Artists</a>\n        <clr-icon shape=\"play\" size=\"16\"></clr-icon>\n      </li>\n\n      <li *ngFor=\"let band of playList; let i = index; let odd = odd; let even = even\"\n        [class.oddRow]=\"odd\"\n        [class.evenRow]=\"even\"> \n        <a class=\"btn-list\" (click)=filterArtist(band.albums)>\n          {{band.name}}\n          <clr-icon shape=\"play\" size=\"16\"></clr-icon>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n\n<div class=\"section list__songs\">\n  <div class=\"title\">Albums</div>\n  <div class=\"list\">\n    <ul class=\"songList\">\n\n      <li class=\"btn-list\" [class.oddRow]=\"true\">\n        <a>All Albums</a>\n        <clr-icon shape=\"play\" size=\"16\"></clr-icon>\n      </li>\n\n        <li *ngFor=\"let album of albumsFiltered; let odd = odd; let even = even\"\n        [class.oddRow]=\"odd\"\n        [class.evenRow]=\"even\"> \n          <a class=\"btn-list\" (click)=filterAlbum(album.songs)>\n            {{album.name}}\n            <clr-icon shape=\"play\" size=\"16\"></clr-icon>\n          </a>\n        </li>\n\n    </ul>\n  </div>\n</div>\n\n<div class=\"section list__songs\">\n  <div class=\"title\">Songs</div>\n  <div class=\"list\">\n    <ul class=\"songList\">\n\n          <li *ngFor=\"let song of songsFiltered; let odd = odd; let even = even\"\n          [class.oddRow]=\"odd\"\n          [class.evenRow]=\"even\"> \n            <a class=\"btn-list\" (click)=\"SelectSong(song)\">\n              {{song.title}}\n              <span>{{song.duration | timeMmss}}</span>\n            </a>\n          </li>\n\n    </ul>\n  </div>\n</div>\n\n<div class=\"section side-panel\">\n  <div class=\"title\">Control</div>\n  <input type=\"file\" name=\"openFiles\" id=\"openFiles\" (change)=\"OpenFiles($event)\" multiple class=\"fileInput\">\n  <label for=\"openFiles\" class=\"btn btn-block\">Open Files</label>\n  <button class=\"btn btn-block addBtn\" [clrLoading]=\"submitLoading\" (click)=\"LoadInDeck('a')\">load in deck A</button>\n  <button class=\"btn btn-block addBtn\" [clrLoading]=\"submitLoading\" (click)=\"LoadInDeck('b')\">load in deck B</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/playlist-page/playlist-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_files_service__ = __webpack_require__("./src/app/services/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsmediatags__ = __webpack_require__("./node_modules/jsmediatags/build2/jsmediatags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsmediatags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsmediatags__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaylistPageComponent = /** @class */ (function () {
    function PlaylistPageComponent(fileService) {
        this.fileService = fileService;
        this.classes = 'bottom-content';
        this.playList = [];
        this.albumsFiltered = [];
        this.songsFiltered = [];
        this.songSelected = null;
    }
    PlaylistPageComponent.prototype.OpenFiles = function (event) {
        var _this = this;
        var filesObject = event.target.files;
        var filesArray = Object.keys(filesObject).map(function (key) { return filesObject[key]; });
        var _loop_1 = function (file) {
            __WEBPACK_IMPORTED_MODULE_2_jsmediatags__["read"](file, {
                onSuccess: function (metadata) {
                    var artistName = metadata.tags.artist || 'Unknown';
                    var albumName = metadata.tags.album || 'Unknown';
                    var bandObject;
                    var albumObject;
                    bandObject = _this.playList.find(function (artist) { return artist.name === artistName; });
                    if (!bandObject) {
                        _this.playList.push({ name: artistName, albums: [] });
                        bandObject = _this.playList[_this.playList.length - 1];
                    }
                    albumObject = bandObject.albums.find(function (album) { return album.name === albumName; });
                    if (!albumObject) {
                        bandObject.albums.push({ name: albumName, songs: [] });
                        albumObject = bandObject.albums[bandObject.albums.length - 1];
                    }
                    albumObject.songs.push({
                        title: metadata.tags.title || file.name,
                        data: file,
                        duration: file.size,
                        year: metadata.tags.year || 'Unknown',
                        albumCover: 'string' || 'assets/img/album-art-placeholder.png'
                    });
                }
            });
        };
        for (var _i = 0, filesArray_1 = filesArray; _i < filesArray_1.length; _i++) {
            var file = filesArray_1[_i];
            _loop_1(file);
        }
        console.log(this.playList);
    };
    PlaylistPageComponent.prototype.allArtists = function () {
        this.albumsFiltered = [];
        this.albumsFiltered = this.playList
            .map(function (band) { return band.albums; })
            .reduce(function (a, b) { return a.concat(b); });
    };
    PlaylistPageComponent.prototype.filterArtist = function (albums) { this.albumsFiltered = albums; this.songsFiltered = []; };
    PlaylistPageComponent.prototype.allAlbums = function () {
        this.albumsFiltered = [];
        this.songsFiltered = this.albumsFiltered
            .map(function (album) { return album.songs; })
            .reduce(function (a, b) { return a.concat(b); });
    };
    PlaylistPageComponent.prototype.filterAlbum = function (songs) { this.songsFiltered = songs; };
    PlaylistPageComponent.prototype.SelectSong = function (song) { this.songSelected = song; };
    PlaylistPageComponent.prototype.LoadInDeck = function (deck) {
        console.log(this.songSelected);
        if (this.songSelected !== null) {
            this.fileService.Read(this.songSelected.data, deck);
        }
    };
    PlaylistPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], PlaylistPageComponent.prototype, "classes", void 0);
    PlaylistPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-playlist-page',
            template: __webpack_require__("./src/app/components/pages/playlist-page/playlist-page.component.html"),
            styles: [__webpack_require__("./src/app/components/pages/playlist-page/playlist-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_files_service__["a" /* FilesService */]])
    ], PlaylistPageComponent);
    return PlaylistPageComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/settings-page/settings-page.component.css":
/***/ (function(module, exports) {

module.exports = ".settings-page-wrapper {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100vw;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    background-color: #bbb;\r\n}"

/***/ }),

/***/ "./src/app/components/pages/settings-page/settings-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button routerLink='' routerLinkActive='active'>Back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/settings-page/settings-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsPageComponent = /** @class */ (function () {
    function SettingsPageComponent() {
        this.classes = 'bottom-content';
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], SettingsPageComponent.prototype, "classes", void 0);
    SettingsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings-page',
            template: __webpack_require__("./src/app/components/pages/settings-page/settings-page.component.html"),
            styles: [__webpack_require__("./src/app/components/pages/settings-page/settings-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsPageComponent);
    return SettingsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.css":
/***/ (function(module, exports) {

module.exports = ".openFilesBtn {\r\n  background-color: #0f171c;\r\n  cursor: pointer;\r\n}\r\n\r\n.fileInput {\r\n  width: 0.1px;\r\n  height: 0.1px;\r\n  opacity: 0;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n\r\n.fileInput+label {\r\n  cursor: pointer;\r\n}\r\n\r\n.songlist {\r\n  list-style: none;\r\n}\r\n\r\n.songlist a, .songlist .btn {\r\n  font-size: 0.7em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<clr-vertical-nav [clrVerticalNavCollapsible]=\"true\" [(clrVerticalNavCollapsed)]=\"collapsed\">\n  <a clrVerticalNavLink routerLink=\"./normal\" routerLinkActive=\"active\" class=\"openFilesBtn\">\n    <clr-icon clrVerticalNavIcon shape=\"folder-open\"></clr-icon>\n    <input type=\"file\" name=\"openFiles\" id=\"openFiles\" (change)=\"OpenFiles($event)\" multiple class=\"fileInput\">\n    <label for=\"openFiles\">Open Files</label>\n  </a>\n  <ul class=\"songlist\">\n    <form class=\"search\">\n      <label for=\"search_input\">\n        <input id=\"search_input\" type=\"text\" placeholder=\"Open or search playlist...\">\n      </label>\n    </form>\n\n    <li class=\"btn-group\">\n        <button class=\"btn \">Sort By</button>\n        <button class=\"btn\">Artist</button>\n        <button class=\"btn\">Duration</button>\n    </li>\n    \n    <li *ngFor=\"let track of playList\">\n      <a clrVerticalNavLink class=\"btn btn-link btn-block\" (click)=\"LoadTrack(track)\">\n        <clr-icon clrVerticalNavIcon shape=\"play\" size=\"16\"></clr-icon>\n        {{track[0]}}\n      </a>\n    </li>\n  </ul>\n</clr-vertical-nav>\n"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_files_service__ = __webpack_require__("./src/app/services/files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(fileHandler) {
        this.fileHandler = fileHandler;
        this.playList = [];
        this.collapsed = true;
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.OpenFiles = function (event) {
        var filesObject = event.target.files;
        var filesArray = Object.keys(filesObject).map(function (key) { return filesObject[key]; });
        // this.playList = filesArray.map(file => this.fileHandler.ReadID3(file));
        console.log(this.playList);
    };
    SidenavComponent.prototype.LoadTrack = function (track) {
        // this.fileHandler.Read(track);
        // this.fileHandler.ReadID3(track);
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__("./src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("./src/app/components/sidenav/sidenav.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_files_service__["a" /* FilesService */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/directives/d3-slider.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3SliderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("./node_modules/d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3SliderDirective = /** @class */ (function () {
    function D3SliderDirective(slider) {
        this.selectedValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.maxValue = 1;
        this.minValue = 0;
        // this.value;
        this.initialValue = null;
        this.step = 1;
        this.color = '#51CB3F';
        this.emptyColor = '#ECECEC';
        this.thumbColor = 'white';
        this.lineWidth = 6;
        this.thumbSize = 6;
        this.thumbStroke = 'black';
        this.thumbStrokeWidth = 1;
        this.direction = 'LTR';
        this.id = slider.element.nativeElement.id;
    }
    D3SliderDirective.prototype.ngOnInit = function () {
    };
    D3SliderDirective.prototype.ngOnChanges = function (changes) {
        var selection;
        if (!this.initialValue && changes['initialValue'] && changes['initialValue'].firstChange) {
            this.initialValue = this.minValue;
        }
        if (!this.value) {
            this.value = this.initialValue;
        }
        __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* select */]("#" + this.id).selectAll('*').remove();
        if (this.vertical === 'true') {
            selection = __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* select */]("#" + this.id)
                .append('svg')
                .attr('height', this.length + 20)
                .attr('viewBox', "-5,-10,30, " + (this.length + 20));
        }
        else {
            selection = __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* select */]('#' + this.id)
                .append('svg')
                .attr('width', this.length + 20)
                .attr('viewBox', "-10, -5, " + (this.length + 20) + ", 30");
        }
        this.createSlider(selection);
    };
    D3SliderDirective.prototype.createSlider = function (selection) {
        var that = this;
        var direction = this.direction;
        var width = this.length;
        var maxValue = this.maxValue;
        var minValue = this.minValue;
        if (minValue > maxValue) {
            maxValue = minValue * 2;
        }
        var value = this.value;
        var color;
        var emptyColor;
        if (direction === 'RTL') {
            emptyColor = this.color;
            color = this.emptyColor;
        }
        else {
            emptyColor = this.emptyColor;
            color = this.color;
        }
        var thumbColor = this.thumbColor;
        var lineWidth = this.lineWidth;
        var thumbSize = this.thumbSize;
        var thumbStroke = this.thumbStroke;
        var thumbStrokeWidth = this.thumbStrokeWidth;
        var normStep = this.step;
        if (normStep > maxValue) {
            normStep = 1;
        }
        var normValue = this.setNormValue(value, minValue, maxValue, direction); // value normalized between 0-1
        var mainAxis;
        var secondaryAxis;
        if (this.vertical === 'true') {
            mainAxis = 'y';
            secondaryAxis = 'x';
        }
        else {
            mainAxis = 'x';
            secondaryAxis = 'y';
        }
        var selectedValue;
        function dragStart() {
            valueCircle.attr('r', thumbSize + 1);
        }
        function drag() {
            selectedValue = __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* event */][mainAxis];
            if (selectedValue < 0) {
                selectedValue = 0;
            }
            else if (selectedValue > width) {
                selectedValue = width;
            }
            selectedValue = selectedValue - (selectedValue % normStep);
            normValue = selectedValue / width;
            valueCircle.attr('c' + mainAxis, selectedValue);
            valueLine.attr(mainAxis + '2', selectedValue);
            emptyLine.attr(mainAxis + '1', selectedValue);
            if (event) {
                event(normValue);
            }
            __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* event */].sourceEvent.stopPropagation();
        }
        function dragEnd() {
            valueCircle.attr('r', thumbSize);
        }
        // Line to represent the current value
        var valueLine = selection.append('line')
            .attr(mainAxis + '1', 0)
            .attr(mainAxis + '2', width * normValue)
            .attr(secondaryAxis + '1', 10)
            .attr(secondaryAxis + '2', 10)
            .style('stroke', color)
            .style('stroke-linecap', 'round')
            .style('stroke-width', lineWidth);
        // Line to show the remaining value
        var emptyLine = selection.append('line')
            .attr(mainAxis + '1', width * normValue)
            .attr(mainAxis + '2', width)
            .attr(secondaryAxis + '1', 10)
            .attr(secondaryAxis + '2', 10)
            .style('stroke', emptyColor)
            .style('stroke-linecap', 'round')
            .style('stroke-width', lineWidth);
        // Draggable circle to represent the current value
        var valueCircle = selection.append('circle')
            .attr('c' + mainAxis, width * normValue)
            .attr('c' + secondaryAxis, 10)
            .attr('r', thumbSize)
            .style('stroke', thumbStroke)
            .style('stroke-width', thumbStrokeWidth)
            .style('fill', thumbColor);
        if (that.disable !== 'disable') {
            valueCircle.call(__WEBPACK_IMPORTED_MODULE_1_d3__["b" /* drag */]()
                .on('start', dragStart)
                .on('drag', drag)
                .on('end', dragEnd))
                .style('cursor', 'hand');
        }
        function event(iNewValue) {
            that.value = that.setDenormValue(iNewValue, minValue, maxValue, direction);
            that.selectedValue.emit(that.value);
        }
    };
    /**
     * Normalizes the values to a range between 0 to 1
     * @param iValue
     * @param iMinValue
     * @param iMaxValue
     * @param iDirection
     * @returns {number}
     */
    D3SliderDirective.prototype.setNormValue = function (iValue, iMinValue, iMaxValue, iDirection) {
        if (iDirection === 'LTR') {
            return (iValue - iMinValue) / (iMaxValue - iMinValue);
        }
        else if (iDirection === 'RTL') {
            return 1 - (iValue - iMinValue) / (iMaxValue - iMinValue);
        }
    };
    /**
     * Converts to normalized value according to the min-max range given
     * @param iValue
     * @param iMinValue
     * @param iMaxValue
     * @param iDirection
     * @returns {Number}
     */
    D3SliderDirective.prototype.setDenormValue = function (iValue, iMinValue, iMaxValue, iDirection) {
        if (iDirection === 'LTR') {
            return Number((iValue * (iMaxValue - iMinValue) + iMinValue).toFixed(2));
        }
        else if (iDirection === 'RTL') {
            return Number(((1 - iValue) * (iMaxValue - iMinValue) + iMinValue).toFixed(2));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], D3SliderDirective.prototype, "disable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], D3SliderDirective.prototype, "length", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], D3SliderDirective.prototype, "maxValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], D3SliderDirective.prototype, "minValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], D3SliderDirective.prototype, "initialValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], D3SliderDirective.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], D3SliderDirective.prototype, "lineWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], D3SliderDirective.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], D3SliderDirective.prototype, "emptyColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], D3SliderDirective.prototype, "thumbColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], D3SliderDirective.prototype, "thumbSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], D3SliderDirective.prototype, "thumbStroke", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], D3SliderDirective.prototype, "thumbStrokeWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], D3SliderDirective.prototype, "direction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], D3SliderDirective.prototype, "vertical", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], D3SliderDirective.prototype, "selectedValue", void 0);
    D3SliderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            // tslint:disable-next-line:directive-selector
            selector: '[d3-slider]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */]])
    ], D3SliderDirective);
    return D3SliderDirective;
}());



/***/ }),

/***/ "./src/app/pipes/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        console.log(keys);
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/pipes/num-to-px.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumToPxPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumToPxPipe = /** @class */ (function () {
    function NumToPxPipe() {
    }
    NumToPxPipe.prototype.transform = function (value) {
        return value + "px";
    };
    NumToPxPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'numToPx'
        })
    ], NumToPxPipe);
    return NumToPxPipe;
}());



/***/ }),

/***/ "./src/app/pipes/time-mmss.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeMmssPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeMmssPipe = /** @class */ (function () {
    function TimeMmssPipe() {
    }
    TimeMmssPipe.prototype.transform = function (seconds) {
        seconds = Math.floor(seconds);
        var minutesFormatted = Math.floor(seconds / 60);
        var secondsFormatted = Math.floor(seconds - minutesFormatted * 60);
        var minuteString = minutesFormatted < 10 ? "0" + minutesFormatted : "" + minutesFormatted;
        var secondString = secondsFormatted < 10 ? "0" + secondsFormatted : "" + secondsFormatted;
        return minuteString + ":" + secondString;
    };
    TimeMmssPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'timeMmss'
        })
    ], TimeMmssPipe);
    return TimeMmssPipe;
}());



/***/ }),

/***/ "./src/app/services/audio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FilesService } from './files.service';
var AudioService = /** @class */ (function () {
    function AudioService() {
        this._audioSource = null;
        this._context = null;
        this._decodedAudio = null;
        this._gainNode = null;
        this._eqHi = null;
        this._eqMid = null;
        this._eqLo = null;
        this._eqSweep = null;
        // this.readyState = true;
        this.decodedAudioEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.playStateEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // this.filesService.song.subscribe(song =>
        // {
        //   if (song.deck)
        //   {
        //   }
        // });
    }
    AudioService.prototype.CreateContext = function () {
        if (this._context !== null) {
            this._context.close();
            console.log('conext closed');
        }
        this._context = new AudioContext();
        this._context.suspend();
    };
    AudioService.prototype.CreatePlayBuffer = function () {
        this._audioSource = this._context.createBufferSource();
        this._audioSource.connect(this._eqSweep);
        this._audioSource.buffer = this._decodedAudio;
        this._audioSource.onended = function () {
            // this.StopAudio();
            // this._context.close();
        };
    };
    AudioService.prototype.SetConnections = function () {
        if (this._context === null) {
            console.log('There is no active audio context!');
            return;
        }
        // ____________________________________________________Output Gain Connection
        this._gainNode = this._context.createGain();
        this._gainNode.connect(this._context.destination);
        // this._gainNode.gain.setValueAtTime(0.5, 0);
        // ____________________________________________________Equilizer HI Band Connection
        this._eqHi = this._context.createBiquadFilter();
        this._eqHi.type = 'highshelf';
        this._eqHi.frequency.setValueAtTime(2400, 0);
        this._eqHi.connect(this._gainNode);
        // ____________________________________________________Equilizer MID Band Connection
        this._eqMid = this._context.createBiquadFilter();
        this._eqMid.type = 'peaking';
        this._eqMid.frequency.setValueAtTime(800, 0);
        this._eqMid.connect(this._eqHi);
        // ____________________________________________________Equilizer LO Band Connection
        this._eqLo = this._context.createBiquadFilter();
        this._eqLo.type = 'lowshelf';
        this._eqLo.frequency.setValueAtTime(80, 0);
        this._eqLo.connect(this._eqMid);
        // ____________________________________________________Equilizer BAND PASS Connection
        this._eqSweep = this._context.createBiquadFilter();
        this._eqSweep.type = 'bandpass';
        this._eqSweep.frequency.setValueAtTime(1000, 0);
        this._eqSweep.Q.setValueAtTime(0, 0);
        this._eqSweep.connect(this._eqLo);
    };
    // ________________________________________________________Public Methods
    AudioService.prototype.LoadFile = function (file) {
        var _this = this;
        if (this._context !== null && this._context.state === 'running') {
            return;
        }
        this.CreateContext();
        this.SetConnections();
        this._context.decodeAudioData(file)
            .then(function (decodedData) {
            _this._decodedAudio = decodedData;
            _this.CreatePlayBuffer();
            _this.decodedAudioEmitter.emit(_this._decodedAudio);
        });
    };
    AudioService.prototype.StartAudio = function () {
        if (this._context === null) {
            console.log('There is no active audio context!');
            return;
        }
        this._context.resume();
        this._audioSource.start(0, this.contextTimer);
        this.playStateEmitter.emit(true);
    };
    AudioService.prototype.StopAudio = function () {
        this._audioSource.stop();
        this._context.suspend();
        this.CreatePlayBuffer();
        this.playStateEmitter.emit(false);
    };
    Object.defineProperty(AudioService.prototype, "gain", {
        // ________________________________________________________Public Setters
        set: function (inputValue) { this._gainNode.gain.setValueAtTime(inputValue, this._context.currentTime); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "detune", {
        set: function (inputValue) { this._audioSource.playbackRate.setValueAtTime(inputValue, this._context.currentTime); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "eqHi", {
        set: function (inputValue) { this._eqHi.gain.setValueAtTime(inputValue, this._context.currentTime); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "eqMid", {
        set: function (inputValue) { this._eqMid.gain.setValueAtTime(inputValue, this._context.currentTime); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "eqLo", {
        set: function (inputValue) { this._eqLo.gain.setValueAtTime(inputValue, this._context.currentTime); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "eqSweep", {
        set: function (inputValue) {
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "audioDuration", {
        // ________________________________________________________Public Getters
        get: function () { return this._decodedAudio.duration; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioService.prototype, "contextTimer", {
        get: function () { return this._context.currentTime; },
        enumerable: true,
        configurable: true
    });
    AudioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AudioService);
    return AudioService;
}());



/***/ }),

/***/ "./src/app/services/files.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Track } from './../track.interface';

var FilesService = /** @class */ (function () {
    function FilesService() {
        this.song = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    FilesService.prototype.Read = function (file, deck) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = function () { return _this.song.emit({ data: fileReader.result, deck: deck }); };
    };
    FilesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "./src/app/services/visuals.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VisualsService = /** @class */ (function () {
    function VisualsService() {
    }
    VisualsService.prototype.renderWaveForm = function (audioBuffer, canvas) {
        var canvasContext = canvas.getContext('2d');
        var channelData = audioBuffer.getChannelData(0);
        var sampleRate = audioBuffer.sampleRate;
        var step = Math.ceil(sampleRate / 100);
        var songLength = channelData.length / step;
        // ____________________________________________________Pre Render Canvas
        var render = document.createElement('canvas');
        this.canvasWidth = render.width = canvas.width = songLength;
        render.height = canvas.height;
        var renderContext = render.getContext('2d');
        var amplitude = render.height / 2;
        for (var i = 0; i < songLength; i++) {
            var min = 1.5;
            var max = -1.5;
            var datum = void 0;
            for (var j = 0; j < step; j++) {
                datum = channelData[(i * step) + j];
                if (datum < min) {
                    min = datum;
                }
                if (datum > max) {
                    max = datum;
                }
            }
            // renderContext.fillStyle = `rgb(${Math.abs(max) * 255}, ${127}, ${127})`;
            renderContext.fillStyle = '#f39c12';
            renderContext.fillRect(i, (1 + min) * amplitude, 1, Math.max(1, (max - min) * amplitude));
        }
        canvasContext.drawImage(render, 0, 0);
    };
    VisualsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], VisualsService);
    return VisualsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map