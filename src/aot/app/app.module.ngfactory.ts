/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/http/src/http_module';
import * as import8 from '../../app/model/model.module';
import * as import9 from '@angular/router/src/router_module';
import * as import10 from '../../app/store/store.module';
import * as import11 from '../../app/admin/admin.module';
import * as import12 from '@angular/common/src/localization';
import * as import13 from '@angular/core/src/application_init';
import * as import14 from '@angular/core/src/testability/testability';
import * as import15 from '@angular/core/src/application_ref';
import * as import16 from '@angular/core/src/linker/compiler';
import * as import17 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import18 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import19 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import20 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import21 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import22 from '@angular/core/src/animation/animation_queue';
import * as import23 from '@angular/core/src/linker/view_utils';
import * as import24 from '@angular/platform-browser/src/browser/title';
import * as import25 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import26 from '@angular/http/src/backends/browser_xhr';
import * as import27 from '@angular/http/src/base_response_options';
import * as import28 from '@angular/http/src/backends/xhr_backend';
import * as import29 from '@angular/http/src/base_request_options';
import * as import30 from '../../app/model/rest.datasource';
import * as import31 from '../../app/model/product.repository';
import * as import32 from '../../app/model/cart.model';
import * as import33 from '../../app/model/order.model';
import * as import34 from '../../app/model/order.repository';
import * as import35 from '../../app/model/auth.service';
import * as import36 from '@angular/router/src/url_tree';
import * as import37 from '@angular/router/src/router_outlet_map';
import * as import38 from '@angular/common/src/location/location';
import * as import39 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import40 from '../../app/admin/auth.guard';
import * as import41 from '@angular/router/src/router_preloader';
import * as import42 from '../../app/storeFirst.guard';
import * as import43 from '@angular/core/src/di/injector';
import * as import44 from './store/store.component.ngfactory';
import * as import45 from './store/cartDetail.component.ngfactory';
import * as import46 from './store/checkout.component.ngfactory';
import * as import47 from './admin/auth.component.ngfactory';
import * as import48 from './admin/admin.component.ngfactory';
import * as import49 from './admin/productEditor.component.ngfactory';
import * as import50 from './admin/productTable.component.ngfactory';
import * as import51 from './admin/orderTable.component.ngfactory';
import * as import52 from './app.component.ngfactory';
import * as import53 from '@angular/core/src/i18n/tokens';
import * as import54 from '@angular/core/src/application_tokens';
import * as import55 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import56 from '@angular/platform-browser/src/dom/events/key_events';
import * as import57 from '@angular/core/src/zone/ng_zone';
import * as import58 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import59 from '@angular/common/src/location/platform_location';
import * as import60 from '@angular/common/src/location/location_strategy';
import * as import61 from '../../app/store/store.component';
import * as import62 from '../../app/store/cartDetail.component';
import * as import63 from '../../app/store/checkout.component';
import * as import64 from '../../app/admin/auth.component';
import * as import65 from '../../app/admin/admin.component';
import * as import66 from '../../app/admin/productEditor.component';
import * as import67 from '../../app/admin/productTable.component';
import * as import68 from '../../app/admin/orderTable.component';
import * as import69 from '@angular/router/src/url_handling_strategy';
import * as import70 from '@angular/router/src/route_reuse_strategy';
import * as import71 from '@angular/router/src/router';
import * as import72 from '@angular/core/src/console';
import * as import73 from '@angular/core/src/error_handler';
import * as import74 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import75 from '@angular/platform-browser/src/dom/animation_driver';
import * as import76 from '@angular/core/src/render/api';
import * as import77 from '@angular/core/src/security';
import * as import78 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import79 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import80 from '@angular/http/src/interfaces';
import * as import81 from '@angular/http/src/http';
import * as import82 from '../../app/model/static.datasource';
import * as import83 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import84 from '@angular/router/src/router_config_loader';
import * as import85 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _InternalFormsSharedModule_3:import5.InternalFormsSharedModule;
  _FormsModule_4:import6.FormsModule;
  _HttpModule_5:import7.HttpModule;
  _ModelModule_6:import8.ModelModule;
  _ROUTER_FORROOT_GUARD_7:any;
  _RouterModule_8:import9.RouterModule;
  _StoreModule_9:import10.StoreModule;
  _AdminModule_10:import11.AdminModule;
  _AppModule_11:import1.AppModule;
  __LOCALE_ID_12:any;
  __NgLocalization_13:import12.NgLocaleLocalization;
  _ErrorHandler_14:any;
  _ApplicationInitStatus_15:import13.ApplicationInitStatus;
  _Testability_16:import14.Testability;
  _ApplicationRef__17:import15.ApplicationRef_;
  __ApplicationRef_18:any;
  __Compiler_19:import16.Compiler;
  __APP_ID_20:any;
  __DOCUMENT_21:any;
  __HAMMER_GESTURE_CONFIG_22:import17.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_23:any[];
  __EventManager_24:import18.EventManager;
  _DomSharedStylesHost_25:import19.DomSharedStylesHost;
  __AnimationDriver_26:any;
  __DomRootRenderer_27:import20.DomRootRenderer_;
  __NgProbeToken_28:any[];
  __RootRenderer_29:any;
  __DomSanitizer_30:import21.DomSanitizerImpl;
  __Sanitizer_31:any;
  __AnimationQueue_32:import22.AnimationQueue;
  __ViewUtils_33:import23.ViewUtils;
  __IterableDiffers_34:any;
  __KeyValueDiffers_35:any;
  __SharedStylesHost_36:any;
  __Title_37:import24.Title;
  __RadioControlRegistry_38:import25.RadioControlRegistry;
  __BrowserXhr_39:import26.BrowserXhr;
  __ResponseOptions_40:import27.BaseResponseOptions;
  __XSRFStrategy_41:any;
  __XHRBackend_42:import28.XHRBackend;
  __RequestOptions_43:import29.BaseRequestOptions;
  __Http_44:any;
  __RestDataSource_45:import30.RestDataSource;
  __ProductRepository_46:import31.ProductRepository;
  __StaticDataSource_47:import30.RestDataSource;
  __Cart_48:import32.Cart;
  __Order_49:import33.Order;
  __OrderRepository_50:import34.OrderRepository;
  __AuthService_51:import35.AuthService;
  __UrlSerializer_52:import36.DefaultUrlSerializer;
  __RouterOutletMap_53:import37.RouterOutletMap;
  __ROUTER_CONFIGURATION_54:any;
  __LocationStrategy_55:any;
  __Location_56:import38.Location;
  __NgModuleFactoryLoader_57:import39.SystemJsNgModuleLoader;
  __ROUTES_58:any[];
  __Router_59:any;
  __AuthGuard_60:import40.AuthGuard;
  __ActivatedRoute_61:any;
  _NoPreloading_62:import41.NoPreloading;
  _PreloadingStrategy_63:any;
  _RouterPreloader_64:import41.RouterPreloader;
  __PreloadAllModules_65:import41.PreloadAllModules;
  __ROUTER_INITIALIZER_66:any;
  __APP_BOOTSTRAP_LISTENER_67:any[];
  __StoreFirstGuard_68:import42.StoreFirstGuard;
  constructor(parent:import43.Injector) {
    super(parent,[
      import44.StoreComponentNgFactory,
      import45.CartDetailComponentNgFactory,
      import46.CheckoutComponentNgFactory,
      import47.AuthComponentNgFactory,
      import48.AdminComponentNgFactory,
      import49.ProductEditorComponentNgFactory,
      import50.ProductTableComponentNgFactory,
      import51.OrderTableComponentNgFactory,
      import52.AppComponentNgFactory
    ]
    ,[import52.AppComponentNgFactory]);
  }
  get _LOCALE_ID_12():any {
    if ((this.__LOCALE_ID_12 == null)) { (this.__LOCALE_ID_12 = import3._localeFactory(this.parent.get(import53.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_12;
  }
  get _NgLocalization_13():import12.NgLocaleLocalization {
    if ((this.__NgLocalization_13 == null)) { (this.__NgLocalization_13 = new import12.NgLocaleLocalization(this._LOCALE_ID_12)); }
    return this.__NgLocalization_13;
  }
  get _ApplicationRef_18():any {
    if ((this.__ApplicationRef_18 == null)) { (this.__ApplicationRef_18 = this._ApplicationRef__17); }
    return this.__ApplicationRef_18;
  }
  get _Compiler_19():import16.Compiler {
    if ((this.__Compiler_19 == null)) { (this.__Compiler_19 = new import16.Compiler()); }
    return this.__Compiler_19;
  }
  get _APP_ID_20():any {
    if ((this.__APP_ID_20 == null)) { (this.__APP_ID_20 = import54._appIdRandomProviderFactory()); }
    return this.__APP_ID_20;
  }
  get _DOCUMENT_21():any {
    if ((this.__DOCUMENT_21 == null)) { (this.__DOCUMENT_21 = import4._document()); }
    return this.__DOCUMENT_21;
  }
  get _HAMMER_GESTURE_CONFIG_22():import17.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_22 == null)) { (this.__HAMMER_GESTURE_CONFIG_22 = new import17.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_22;
  }
  get _EVENT_MANAGER_PLUGINS_23():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_23 == null)) { (this.__EVENT_MANAGER_PLUGINS_23 = [
      new import55.DomEventsPlugin(),
      new import56.KeyEventsPlugin(),
      new import17.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_22)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_23;
  }
  get _EventManager_24():import18.EventManager {
    if ((this.__EventManager_24 == null)) { (this.__EventManager_24 = new import18.EventManager(this._EVENT_MANAGER_PLUGINS_23,this.parent.get(import57.NgZone))); }
    return this.__EventManager_24;
  }
  get _AnimationDriver_26():any {
    if ((this.__AnimationDriver_26 == null)) { (this.__AnimationDriver_26 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_26;
  }
  get _DomRootRenderer_27():import20.DomRootRenderer_ {
    if ((this.__DomRootRenderer_27 == null)) { (this.__DomRootRenderer_27 = new import20.DomRootRenderer_(this._DOCUMENT_21,this._EventManager_24,this._DomSharedStylesHost_25,this._AnimationDriver_26,this._APP_ID_20)); }
    return this.__DomRootRenderer_27;
  }
  get _NgProbeToken_28():any[] {
    if ((this.__NgProbeToken_28 == null)) { (this.__NgProbeToken_28 = [import9.routerNgProbeToken()]); }
    return this.__NgProbeToken_28;
  }
  get _RootRenderer_29():any {
    if ((this.__RootRenderer_29 == null)) { (this.__RootRenderer_29 = import58._createConditionalRootRenderer(this._DomRootRenderer_27,this.parent.get(import58.NgProbeToken,(null as any)),this._NgProbeToken_28)); }
    return this.__RootRenderer_29;
  }
  get _DomSanitizer_30():import21.DomSanitizerImpl {
    if ((this.__DomSanitizer_30 == null)) { (this.__DomSanitizer_30 = new import21.DomSanitizerImpl()); }
    return this.__DomSanitizer_30;
  }
  get _Sanitizer_31():any {
    if ((this.__Sanitizer_31 == null)) { (this.__Sanitizer_31 = this._DomSanitizer_30); }
    return this.__Sanitizer_31;
  }
  get _AnimationQueue_32():import22.AnimationQueue {
    if ((this.__AnimationQueue_32 == null)) { (this.__AnimationQueue_32 = new import22.AnimationQueue(this.parent.get(import57.NgZone))); }
    return this.__AnimationQueue_32;
  }
  get _ViewUtils_33():import23.ViewUtils {
    if ((this.__ViewUtils_33 == null)) { (this.__ViewUtils_33 = new import23.ViewUtils(this._RootRenderer_29,this._Sanitizer_31,this._AnimationQueue_32)); }
    return this.__ViewUtils_33;
  }
  get _IterableDiffers_34():any {
    if ((this.__IterableDiffers_34 == null)) { (this.__IterableDiffers_34 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_34;
  }
  get _KeyValueDiffers_35():any {
    if ((this.__KeyValueDiffers_35 == null)) { (this.__KeyValueDiffers_35 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_35;
  }
  get _SharedStylesHost_36():any {
    if ((this.__SharedStylesHost_36 == null)) { (this.__SharedStylesHost_36 = this._DomSharedStylesHost_25); }
    return this.__SharedStylesHost_36;
  }
  get _Title_37():import24.Title {
    if ((this.__Title_37 == null)) { (this.__Title_37 = new import24.Title()); }
    return this.__Title_37;
  }
  get _RadioControlRegistry_38():import25.RadioControlRegistry {
    if ((this.__RadioControlRegistry_38 == null)) { (this.__RadioControlRegistry_38 = new import25.RadioControlRegistry()); }
    return this.__RadioControlRegistry_38;
  }
  get _BrowserXhr_39():import26.BrowserXhr {
    if ((this.__BrowserXhr_39 == null)) { (this.__BrowserXhr_39 = new import26.BrowserXhr()); }
    return this.__BrowserXhr_39;
  }
  get _ResponseOptions_40():import27.BaseResponseOptions {
    if ((this.__ResponseOptions_40 == null)) { (this.__ResponseOptions_40 = new import27.BaseResponseOptions()); }
    return this.__ResponseOptions_40;
  }
  get _XSRFStrategy_41():any {
    if ((this.__XSRFStrategy_41 == null)) { (this.__XSRFStrategy_41 = import7._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_41;
  }
  get _XHRBackend_42():import28.XHRBackend {
    if ((this.__XHRBackend_42 == null)) { (this.__XHRBackend_42 = new import28.XHRBackend(this._BrowserXhr_39,this._ResponseOptions_40,this._XSRFStrategy_41)); }
    return this.__XHRBackend_42;
  }
  get _RequestOptions_43():import29.BaseRequestOptions {
    if ((this.__RequestOptions_43 == null)) { (this.__RequestOptions_43 = new import29.BaseRequestOptions()); }
    return this.__RequestOptions_43;
  }
  get _Http_44():any {
    if ((this.__Http_44 == null)) { (this.__Http_44 = import7.httpFactory(this._XHRBackend_42,this._RequestOptions_43)); }
    return this.__Http_44;
  }
  get _RestDataSource_45():import30.RestDataSource {
    if ((this.__RestDataSource_45 == null)) { (this.__RestDataSource_45 = new import30.RestDataSource(this._Http_44)); }
    return this.__RestDataSource_45;
  }
  get _ProductRepository_46():import31.ProductRepository {
    if ((this.__ProductRepository_46 == null)) { (this.__ProductRepository_46 = new import31.ProductRepository(this._RestDataSource_45)); }
    return this.__ProductRepository_46;
  }
  get _StaticDataSource_47():import30.RestDataSource {
    if ((this.__StaticDataSource_47 == null)) { (this.__StaticDataSource_47 = new import30.RestDataSource(this._Http_44)); }
    return this.__StaticDataSource_47;
  }
  get _Cart_48():import32.Cart {
    if ((this.__Cart_48 == null)) { (this.__Cart_48 = new import32.Cart()); }
    return this.__Cart_48;
  }
  get _Order_49():import33.Order {
    if ((this.__Order_49 == null)) { (this.__Order_49 = new import33.Order(this._Cart_48)); }
    return this.__Order_49;
  }
  get _OrderRepository_50():import34.OrderRepository {
    if ((this.__OrderRepository_50 == null)) { (this.__OrderRepository_50 = new import34.OrderRepository(this._RestDataSource_45)); }
    return this.__OrderRepository_50;
  }
  get _AuthService_51():import35.AuthService {
    if ((this.__AuthService_51 == null)) { (this.__AuthService_51 = new import35.AuthService(this._RestDataSource_45)); }
    return this.__AuthService_51;
  }
  get _UrlSerializer_52():import36.DefaultUrlSerializer {
    if ((this.__UrlSerializer_52 == null)) { (this.__UrlSerializer_52 = new import36.DefaultUrlSerializer()); }
    return this.__UrlSerializer_52;
  }
  get _RouterOutletMap_53():import37.RouterOutletMap {
    if ((this.__RouterOutletMap_53 == null)) { (this.__RouterOutletMap_53 = new import37.RouterOutletMap()); }
    return this.__RouterOutletMap_53;
  }
  get _ROUTER_CONFIGURATION_54():any {
    if ((this.__ROUTER_CONFIGURATION_54 == null)) { (this.__ROUTER_CONFIGURATION_54 = {}); }
    return this.__ROUTER_CONFIGURATION_54;
  }
  get _LocationStrategy_55():any {
    if ((this.__LocationStrategy_55 == null)) { (this.__LocationStrategy_55 = import9.provideLocationStrategy(this.parent.get(import59.PlatformLocation),this.parent.get(import60.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_54)); }
    return this.__LocationStrategy_55;
  }
  get _Location_56():import38.Location {
    if ((this.__Location_56 == null)) { (this.__Location_56 = new import38.Location(this._LocationStrategy_55)); }
    return this.__Location_56;
  }
  get _NgModuleFactoryLoader_57():import39.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_57 == null)) { (this.__NgModuleFactoryLoader_57 = new import39.SystemJsNgModuleLoader(this._Compiler_19,this.parent.get(import39.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_57;
  }
  get _ROUTES_58():any[] {
      if ((this.__ROUTES_58 == null)) { (this.__ROUTES_58 = [[
        {
          path: 'store',
          component: import61.StoreComponent,
          canActivate: [import42.StoreFirstGuard]
        }
        ,
        {
          path: 'cart',
          component: import62.CartDetailComponent,
          canActivate: [import42.StoreFirstGuard]
        }
        ,
        {
          path: 'checkout',
          component: import63.CheckoutComponent,
          canActivate: [import42.StoreFirstGuard]
        }
        ,
        {
          path: 'admin',
          children: [
            {
              path: 'auth',
              component: import64.AuthComponent
            }
            ,
            {
              path: 'main',
              component: import65.AdminComponent,
              canActivate: [import40.AuthGuard],
              children: [
                {
                  path: 'products/:mode/:id',
                  component: import66.ProductEditorComponent
                }
                ,
                {
                  path: 'products/:mode',
                  component: import66.ProductEditorComponent
                }
                ,
                {
                  path: 'products',
                  component: import67.ProductTableComponent
                }
                ,
                {
                  path: 'orders',
                  component: import68.OrderTableComponent
                }
                ,
                {
                  path: '**',
                  redirectTo: 'products'
                }

              ]

            }
            ,
            {
              path: '**',
              redirectTo: 'auth'
            }

          ]
          ,
          canActivate: [import42.StoreFirstGuard]
        }
        ,
        {
          path: '**',
          redirectTo: '/store'
        }

      ]
    ]); }
    return this.__ROUTES_58;
  }
  get _Router_59():any {
    if ((this.__Router_59 == null)) { (this.__Router_59 = import9.setupRouter(this._ApplicationRef_18,this._UrlSerializer_52,this._RouterOutletMap_53,this._Location_56,this,this._NgModuleFactoryLoader_57,this._Compiler_19,this._ROUTES_58,this._ROUTER_CONFIGURATION_54,this.parent.get(import69.UrlHandlingStrategy,(null as any)),this.parent.get(import70.RouteReuseStrategy,(null as any)))); }
    return this.__Router_59;
  }
  get _AuthGuard_60():import40.AuthGuard {
    if ((this.__AuthGuard_60 == null)) { (this.__AuthGuard_60 = new import40.AuthGuard(this._Router_59,this._AuthService_51)); }
    return this.__AuthGuard_60;
  }
  get _ActivatedRoute_61():any {
    if ((this.__ActivatedRoute_61 == null)) { (this.__ActivatedRoute_61 = import9.rootRoute(this._Router_59)); }
    return this.__ActivatedRoute_61;
  }
  get _PreloadAllModules_65():import41.PreloadAllModules {
    if ((this.__PreloadAllModules_65 == null)) { (this.__PreloadAllModules_65 = new import41.PreloadAllModules()); }
    return this.__PreloadAllModules_65;
  }
  get _ROUTER_INITIALIZER_66():any {
    if ((this.__ROUTER_INITIALIZER_66 == null)) { (this.__ROUTER_INITIALIZER_66 = import9.initialRouterNavigation(this._Router_59,this._ApplicationRef_18,this._RouterPreloader_64,this._ROUTER_CONFIGURATION_54)); }
    return this.__ROUTER_INITIALIZER_66;
  }
  get _APP_BOOTSTRAP_LISTENER_67():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_67 == null)) { (this.__APP_BOOTSTRAP_LISTENER_67 = [this._ROUTER_INITIALIZER_66]); }
    return this.__APP_BOOTSTRAP_LISTENER_67;
  }
  get _StoreFirstGuard_68():import42.StoreFirstGuard {
    if ((this.__StoreFirstGuard_68 == null)) { (this.__StoreFirstGuard_68 = new import42.StoreFirstGuard(this._Router_59)); }
    return this.__StoreFirstGuard_68;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
    this._FormsModule_4 = new import6.FormsModule();
    this._HttpModule_5 = new import7.HttpModule();
    this._ModelModule_6 = new import8.ModelModule();
    this._ROUTER_FORROOT_GUARD_7 = import9.provideForRootGuard(this.parent.get(import71.Router,(null as any)));
    this._RouterModule_8 = new import9.RouterModule(this._ROUTER_FORROOT_GUARD_7);
    this._StoreModule_9 = new import10.StoreModule();
    this._AdminModule_10 = new import11.AdminModule();
    this._AppModule_11 = new import1.AppModule();
    this._ErrorHandler_14 = import4.errorHandler();
    this._ApplicationInitStatus_15 = new import13.ApplicationInitStatus(this.parent.get(import13.APP_INITIALIZER,(null as any)));
    this._Testability_16 = new import14.Testability(this.parent.get(import57.NgZone));
    this._ApplicationRef__17 = new import15.ApplicationRef_(this.parent.get(import57.NgZone),this.parent.get(import72.Console),this,this._ErrorHandler_14,this,this._ApplicationInitStatus_15,this.parent.get(import14.TestabilityRegistry,(null as any)),this._Testability_16);
    this._DomSharedStylesHost_25 = new import19.DomSharedStylesHost(this._DOCUMENT_21);
    this._NoPreloading_62 = new import41.NoPreloading();
    this._PreloadingStrategy_63 = this._NoPreloading_62;
    this._RouterPreloader_64 = new import41.RouterPreloader(this._Router_59,this._NgModuleFactoryLoader_57,this._Compiler_19,this,this._PreloadingStrategy_63);
    return this._AppModule_11;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_3; }
    if ((token === import6.FormsModule)) { return this._FormsModule_4; }
    if ((token === import7.HttpModule)) { return this._HttpModule_5; }
    if ((token === import8.ModelModule)) { return this._ModelModule_6; }
    if ((token === import9.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_7; }
    if ((token === import9.RouterModule)) { return this._RouterModule_8; }
    if ((token === import10.StoreModule)) { return this._StoreModule_9; }
    if ((token === import11.AdminModule)) { return this._AdminModule_10; }
    if ((token === import1.AppModule)) { return this._AppModule_11; }
    if ((token === import53.LOCALE_ID)) { return this._LOCALE_ID_12; }
    if ((token === import12.NgLocalization)) { return this._NgLocalization_13; }
    if ((token === import73.ErrorHandler)) { return this._ErrorHandler_14; }
    if ((token === import13.ApplicationInitStatus)) { return this._ApplicationInitStatus_15; }
    if ((token === import14.Testability)) { return this._Testability_16; }
    if ((token === import15.ApplicationRef_)) { return this._ApplicationRef__17; }
    if ((token === import15.ApplicationRef)) { return this._ApplicationRef_18; }
    if ((token === import16.Compiler)) { return this._Compiler_19; }
    if ((token === import54.APP_ID)) { return this._APP_ID_20; }
    if ((token === import74.DOCUMENT)) { return this._DOCUMENT_21; }
    if ((token === import17.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_22; }
    if ((token === import18.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_23; }
    if ((token === import18.EventManager)) { return this._EventManager_24; }
    if ((token === import19.DomSharedStylesHost)) { return this._DomSharedStylesHost_25; }
    if ((token === import75.AnimationDriver)) { return this._AnimationDriver_26; }
    if ((token === import20.DomRootRenderer)) { return this._DomRootRenderer_27; }
    if ((token === import15.NgProbeToken)) { return this._NgProbeToken_28; }
    if ((token === import76.RootRenderer)) { return this._RootRenderer_29; }
    if ((token === import21.DomSanitizer)) { return this._DomSanitizer_30; }
    if ((token === import77.Sanitizer)) { return this._Sanitizer_31; }
    if ((token === import22.AnimationQueue)) { return this._AnimationQueue_32; }
    if ((token === import23.ViewUtils)) { return this._ViewUtils_33; }
    if ((token === import78.IterableDiffers)) { return this._IterableDiffers_34; }
    if ((token === import79.KeyValueDiffers)) { return this._KeyValueDiffers_35; }
    if ((token === import19.SharedStylesHost)) { return this._SharedStylesHost_36; }
    if ((token === import24.Title)) { return this._Title_37; }
    if ((token === import25.RadioControlRegistry)) { return this._RadioControlRegistry_38; }
    if ((token === import26.BrowserXhr)) { return this._BrowserXhr_39; }
    if ((token === import27.ResponseOptions)) { return this._ResponseOptions_40; }
    if ((token === import80.XSRFStrategy)) { return this._XSRFStrategy_41; }
    if ((token === import28.XHRBackend)) { return this._XHRBackend_42; }
    if ((token === import29.RequestOptions)) { return this._RequestOptions_43; }
    if ((token === import81.Http)) { return this._Http_44; }
    if ((token === import30.RestDataSource)) { return this._RestDataSource_45; }
    if ((token === import31.ProductRepository)) { return this._ProductRepository_46; }
    if ((token === import82.StaticDataSource)) { return this._StaticDataSource_47; }
    if ((token === import32.Cart)) { return this._Cart_48; }
    if ((token === import33.Order)) { return this._Order_49; }
    if ((token === import34.OrderRepository)) { return this._OrderRepository_50; }
    if ((token === import35.AuthService)) { return this._AuthService_51; }
    if ((token === import36.UrlSerializer)) { return this._UrlSerializer_52; }
    if ((token === import37.RouterOutletMap)) { return this._RouterOutletMap_53; }
    if ((token === import9.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_54; }
    if ((token === import60.LocationStrategy)) { return this._LocationStrategy_55; }
    if ((token === import38.Location)) { return this._Location_56; }
    if ((token === import83.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_57; }
    if ((token === import84.ROUTES)) { return this._ROUTES_58; }
    if ((token === import71.Router)) { return this._Router_59; }
    if ((token === import40.AuthGuard)) { return this._AuthGuard_60; }
    if ((token === import85.ActivatedRoute)) { return this._ActivatedRoute_61; }
    if ((token === import41.NoPreloading)) { return this._NoPreloading_62; }
    if ((token === import41.PreloadingStrategy)) { return this._PreloadingStrategy_63; }
    if ((token === import41.RouterPreloader)) { return this._RouterPreloader_64; }
    if ((token === import41.PreloadAllModules)) { return this._PreloadAllModules_65; }
    if ((token === import9.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_66; }
    if ((token === import54.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_67; }
    if ((token === import42.StoreFirstGuard)) { return this._StoreFirstGuard_68; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__17.ngOnDestroy();
    this._DomSharedStylesHost_25.ngOnDestroy();
    this._RouterPreloader_64.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);