function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n<notifier-container></notifier-container>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chamado/chamado-criar/chamado-criar.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chamado/chamado-criar/chamado-criar.component.html ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutChamadoChamadoCriarChamadoCriarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<ol class=\"breadcrumb mb-4\">\n    <li class=\"breadcrumb-item active\">\n        <b>Criação de chamado</b>\n    </li>\n</ol>\n<div [formGroup]=\"formChamado\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <label>Titulo do chamado</label><br>\n            <input class=\"form-control\" formControlName=\"titulo\" type=\"text-area\"/>\n        </div>\n        <div class=\"col-sm-12\">\n            <label>Descrição do chamado</label><br>\n            <textarea class=\"form-control\" maxlength=\"{{maxDescription}}\" class=\"form-control\" formControlName=\"descricao\"></textarea>\n            <div class=\"text-right\">restam {{charsLeft()}} caracteres</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12 text-right\">\n            <button class=\"btn btn-success\" style=\"margin-top: 10px;\" (click)=\"criar()\" \n            [disabled]=\"formChamado.invalid\">\n            <i class=\"fa fa-check\"></i> Criar</button>\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chamado/chamado-editar/chamado-editar.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chamado/chamado-editar/chamado-editar.component.html ***!
    \*******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutChamadoChamadoEditarChamadoEditarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div *ngIf=\"recurso\">\n    <h4>Edição de chamado</h4>\n    <ol class=\"breadcrumb mb-4\">\n        <li class=\"breadcrumb-item active\">\n            Chamado {{recurso.chamadoVO.id}}\n            | Abertura: {{recurso.chamadoVO.dataHoraAbertura | date:'MM/dd/yy hh:mm:ss a'}}\n            <span *ngIf=\"recurso.chamadoVO.dataHoraFechamento\">\n                Encerramento: {{recurso.chamadoVO.dataHoraFechamento}}\n            </span>\n        </li>\n    </ol>\n    <div [formGroup]=\"formChamado\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <label>Status</label>\n                <select class=\"form-control\" formControlName=\"statusId\">\n                    <option *ngFor=\"let s of getStatusList()\" value=\"{{s.codigo}}\">{{s.descricao}}</option>\n                </select>\n            </div>\n            <div class=\"col-sm-6\">\n                <label>Titulo do chamado</label>\n                <input class=\"form-control\" formControlName=\"titulo\" type=\"text-area\"/>\n            </div>\n            <div class=\"col-sm-12\">\n                <label>Descrição do chamado</label><br>\n                <textarea class=\"form-control\" maxlength=\"{{maxDescription}}\" class=\"form-control\" formControlName=\"descricao\"></textarea>\n                <div class=\"text-right\">restam {{charsLeft()}} caracteres</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 text-right\">\n                <button class=\"btn btn-primary\" style=\"margin-top: 10px;\" (click)=\"salvar()\">Salvar</button>\n            </div>\n        </div>\n    </div>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chamado/chamado-listar/chamado-listar.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chamado/chamado-listar/chamado-listar.component.html ***!
    \*******************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutChamadoChamadoListarChamadoListarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div *ngIf=\"chamados\">\n    <ol class=\"breadcrumb mb-4\">\n        <li class=\"breadcrumb-item active\">\n            <b>Chamados cadastrados</b>\n        </li>\n    </ol>\n    <div *ngIf=\"temChamados()\" class=\"table-responsive \">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>Numero</th>\n                    <th>Título</th>\n                    <th>Status</th>\n                    <th>Ações</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let chamado of chamados\">\n                    <td>{{chamado.id}}</td>\n                    <td>{{chamado.titulo}}</td>\n                    <td>\n                        <span class=\"badge\" [ngClass]=\"getClass(chamado.status.codigo)\">{{chamado.status.descricao}}</span>\n                    </td>\n                    <td>\n                        <button class=\"btn btn-sm btn-primary\"\n                            [routerLink]=\"['/chamados/editar',chamado.id]\">\n                            <i class=\"fa fa-pencil\"></i> Editar\n                        </button>\n                    </td>\n                </tr>\n                <div *ngIf=\"!temChamados()\">\n                    Nenhum chamado cadastrado\n                </div>\n            </tbody>\n        </table>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12 text-right\">\n            <button class=\"btn btn-primary\" style=\"margin-top: 10px;\" \n            [routerLink]=\"['/chamados/criar']\">\n            <i class=\"fa fa-plus\"></i> Criar novo chamado</button>\n        </div>\n    </div>\n\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\" style=\"color: white;\">\n    <!-- Brand -->\n    <a class=\"navbar-brand\">\n        <img src=\"assets/logo.png\" width=\"30px\" style=\"margin-right: 10px;\"/> <b>HELP DESK</b>\n    </a>\n\n    <!-- Toggler/collapsibe Button -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <!-- Navbar links -->\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link\" [routerLink]=\"['/chamados/criar']\">Criar</a>\n            </li>\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link\" [routerLink]=\"['/chamados/listar']\">listar</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapsibleNavbar\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n                <a class=\"nav-link\" title=\"email do usuario\"><i class=\"fa fa-user\"></i>\n                    {{userService.getUsername()}}</a>\n            </li>\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n\n                <a class=\"nav-link\" (click)=\"signOut()\"><i class=\"fa fa-power-off\"></i> Sair</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div class=\"linha\">\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/security/cadastro/cadastro.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/security/cadastro/cadastro.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecurityCadastroCadastroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<main>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-7\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Create Account</h3></div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"form-row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputFirstName\">First Name</label><input class=\"form-control py-4\" id=\"inputFirstName\" type=\"text\" placeholder=\"Enter first name\"></div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputLastName\">Last Name</label><input class=\"form-control py-4\" id=\"inputLastName\" type=\"text\" placeholder=\"Enter last name\"></div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputEmailAddress\">Email</label><input class=\"form-control py-4\" id=\"inputEmailAddress\" type=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email address\"></div>\n                            <div class=\"form-row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputPassword\">Password</label><input class=\"form-control py-4\" id=\"inputPassword\" type=\"password\" placeholder=\"Enter password\"></div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputConfirmPassword\">Confirm Password</label><input class=\"form-control py-4\" id=\"inputConfirmPassword\" type=\"password\" placeholder=\"Confirm password\"></div>\n                                </div>\n                            </div>\n                            <div class=\"form-group mt-4 mb-0\"><a class=\"btn btn-primary btn-block\" href=\"#\">Create Account</a></div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"small\"><a href=\"#\">Have an account? Go to login</a></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</main>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/security/login/login.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/security/login/login.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecurityLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<main>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5\">\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\n                    <div class=\"card-header\">\n                        <h3 class=\"text-center font-weight-light my-4\">\n                            <img src=\"assets/logo.png\" width=\"30px\" style=\"margin-right: 10px;\"/> <b>HELP DESK</b>\n                        </h3>\n                    </div>\n                    <div class=\"card-body\" [formGroup]=\"formLogin\">\n\n                        <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputEmailAddress\">Email</label>\n                            <input formControlName=\"email\" class=\"form-control py-4\" id=\"inputEmailAddress\" type=\"email\"\n                                placeholder=\"Enter email address\"></div>\n                        <div class=\"form-group\"><label class=\"small mb-1\" for=\"inputPassword\">Password</label>\n                            <input formControlName=\"password\" class=\"form-control py-4\" id=\"inputPassword\"\n                                type=\"password\" placeholder=\"Enter password\"></div>\n                        <div class=\"form-group\">\n                            <div class=\"custom-control custom-checkbox\"><input class=\"custom-control-input\"\n                                    id=\"rememberPasswordCheck\" type=\"checkbox\">\n                                <label class=\"custom-control-label\" for=\"rememberPasswordCheck\">Remember\n                                    password</label>\n                            </div>\n                        </div>\n                        <div class=\"form-group text-center\">\n                            <button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n                        </div>\n\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <div class=\"btn btn-primary\" (click)=\"setLogin('usuario')\">Login de usuario</div>\n                        <div class=\"btn btn-primary\" (click)=\"setLogin('tecnico')\">Login de tecnico</div>\n                        <div class=\"btn btn-primary\" (click)=\"setLogin('gestor')\">Login de gestor</div>\n                        <div class=\"text-center\" style=\"color: gray; margin-bottom: 10px;\">\n                            by tiagohucs@gmail.com\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</main>\n";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }
      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./layout/layout.component */"./src/app/layout/layout.component.ts");
    /* harmony import */
    var _layout_chamado_chamado_criar_chamado_criar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./layout/chamado/chamado-criar/chamado-criar.component */"./src/app/layout/chamado/chamado-criar/chamado-criar.component.ts");
    /* harmony import */
    var _layout_chamado_chamado_listar_chamado_listar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./layout/chamado/chamado-listar/chamado-listar.component */"./src/app/layout/chamado/chamado-listar/chamado-listar.component.ts");
    /* harmony import */
    var _security_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./security/login/login.component */"./src/app/security/login/login.component.ts");
    /* harmony import */
    var _security_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./security/cadastro/cadastro.component */"./src/app/security/cadastro/cadastro.component.ts");
    /* harmony import */
    var _layout_chamado_chamado_editar_chamado_editar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./layout/chamado/chamado-editar/chamado-editar.component */"./src/app/layout/chamado/chamado-editar/chamado-editar.component.ts");
    /* harmony import */
    var _security_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./security/auth.guard */"./src/app/security/auth.guard.ts");
    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'prefix'
    }, {
      path: 'login',
      component: _security_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'cadastro',
      component: _security_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_7__["CadastroComponent"],
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'chamados',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      children: [{
        path: '',
        redirectTo: 'criar',
        pathMatch: 'prefix',
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
      }, {
        path: 'criar',
        component: _layout_chamado_chamado_criar_chamado_criar_component__WEBPACK_IMPORTED_MODULE_4__["ChamadoCriarComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
      }, {
        path: 'listar',
        component: _layout_chamado_chamado_listar_chamado_listar_component__WEBPACK_IMPORTED_MODULE_5__["ChamadoListarComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
      }, {
        path: 'editar/:id',
        component: _layout_chamado_chamado_editar_chamado_editar_component__WEBPACK_IMPORTED_MODULE_8__["ChamadoEditarComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
      }]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'client';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: tokenGetter, AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _security_security_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./security/security.module */"./src/app/security/security.module.ts");
    /* harmony import */
    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./layout/layout.module */"./src/app/layout/layout.module.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _security_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./security/usuario.service */"./src/app/security/usuario.service.ts");
    /* harmony import */
    var _security_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./security/auth.guard */"./src/app/security/auth.guard.ts");
    /* harmony import */
    var _security_role_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./security/role.guard.service */"./src/app/security/role.guard.service.ts");
    /* harmony import */
    var _security_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./security/auth.service */"./src/app/security/auth.service.ts");
    /* harmony import */
    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! @auth0/angular-jwt */"./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */
    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ngx-cookie-service */"./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */
    var _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./security/auth.interceptor */"./src/app/security/auth.interceptor.ts");
    /* harmony import */
    var angular_notifier__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! angular-notifier */"./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    function tokenGetter() {
      return localStorage.getItem('access_token');
    }
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _security_security_module__WEBPACK_IMPORTED_MODULE_5__["SecurityModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_18__["NotifierModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['example.com'],
          blacklistedRoutes: ['example.com/examplebadroute/']
        }
      })],
      providers: [_security_usuario_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _security_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _security_role_guard_service__WEBPACK_IMPORTED_MODULE_13__["RoleGuardService"], _security_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtHelperService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__["CookieService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
        useValue: "en-US"
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/app.url.dev.ts":
  /*!********************************!*\
    !*** ./src/app/app.url.dev.ts ***!
    \********************************/
  /*! exports provided: API_URL */
  /***/
  function srcAppAppUrlDevTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "API_URL", function () {
      return API_URL;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var API_URL = 'http://localhost:5000/rest/';

    /***/
  },

  /***/"./src/app/layout/chamado/chamado-criar/chamado-criar.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/chamado/chamado-criar/chamado-criar.component.css ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppLayoutChamadoChamadoCriarChamadoCriarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jaGFtYWRvL2NoYW1hZG8tY3JpYXIvY2hhbWFkby1jcmlhci5jb21wb25lbnQuY3NzIn0= */";

    /***/
  },

  /***/"./src/app/layout/chamado/chamado-criar/chamado-criar.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/layout/chamado/chamado-criar/chamado-criar.component.ts ***!
    \*************************************************************************/
  /*! exports provided: ChamadoCriarComponent */
  /***/
  function srcAppLayoutChamadoChamadoCriarChamadoCriarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChamadoCriarComponent", function () {
      return ChamadoCriarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _chamado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../chamado.service */"./src/app/layout/chamado/chamado.service.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! angular-notifier */"./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    var ChamadoCriarComponent = /*#__PURE__*/function () {
      function ChamadoCriarComponent(router, service, formBuilder, notifierService) {
        _classCallCheck(this, ChamadoCriarComponent);
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.notifierService = notifierService;
        this.maxDescription = 250;
      }
      _createClass(ChamadoCriarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.criaFormulario();
        }
      }, {
        key: "criaFormulario",
        value: function criaFormulario() {
          this.formChamado = this.formBuilder.group({
            titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(this.maxDescription)]]
          });
        }
      }, {
        key: "charsLeft",
        value: function charsLeft() {
          return this.maxDescription - this.formChamado.controls['descricao'].value.length;
        }
      }, {
        key: "criar",
        value: function criar() {
          var _this = this;
          this.service.criar(this.formChamado.getRawValue()).subscribe(function (res) {
            _this.router.navigateByUrl('/chamados/listar');
            _this.notifierService.notify("success", "Chamado criado com sucesso");
          }, function (error) {
            _this.notifierService.notify("error", "Erro ao criar chamado");
          });
        }
      }]);
      return ChamadoCriarComponent;
    }();
    ChamadoCriarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _chamado_service__WEBPACK_IMPORTED_MODULE_2__["ChamadoService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]
      }];
    };
    ChamadoCriarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chamado-criar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./chamado-criar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chamado/chamado-criar/chamado-criar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./chamado-criar.component.css */"./src/app/layout/chamado/chamado-criar/chamado-criar.component.css"))["default"]]
    })], ChamadoCriarComponent);

    /***/
  },

  /***/"./src/app/layout/chamado/chamado-editar/chamado-editar.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/chamado/chamado-editar/chamado-editar.component.css ***!
    \****************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppLayoutChamadoChamadoEditarChamadoEditarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jaGFtYWRvL2NoYW1hZG8tZWRpdGFyL2NoYW1hZG8tZWRpdGFyLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  },

  /***/"./src/app/layout/chamado/chamado-editar/chamado-editar.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/chamado/chamado-editar/chamado-editar.component.ts ***!
    \***************************************************************************/
  /*! exports provided: ChamadoEditarComponent */
  /***/
  function srcAppLayoutChamadoChamadoEditarChamadoEditarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChamadoEditarComponent", function () {
      return ChamadoEditarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _chamado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../chamado.service */"./src/app/layout/chamado/chamado.service.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! angular-notifier */"./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    var ChamadoEditarComponent = /*#__PURE__*/function () {
      function ChamadoEditarComponent(route, service, formBuilder, notifierService) {
        _classCallCheck(this, ChamadoEditarComponent);
        this.route = route;
        this.service = service;
        this.formBuilder = formBuilder;
        this.notifierService = notifierService;
        this.maxDescription = 250;
      }
      _createClass(ChamadoEditarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.obterIdDaRota();
        }
      }, {
        key: "obterIdDaRota",
        value: function obterIdDaRota() {
          var _this2 = this;
          this.route.paramMap.subscribe(function (params) {
            _this2.obterChamadoOriginal(params.get('id'));
          });
        }
      }, {
        key: "obterChamadoOriginal",
        value: function obterChamadoOriginal(id) {
          var _this3 = this;
          this.service.obter(id).subscribe(function (res) {
            _this3.recurso = res;
            _this3.criaFormulario(_this3.recurso.chamadoVO);
          }, function (err) {
            console.log(err.error);
            //     this.snotifyService.error(err.error.msg);
          });
        }
      }, {
        key: "getStatusList",
        value: function getStatusList() {
          return this.recurso.statusList;
        }
      }, {
        key: "criaFormulario",
        value: function criaFormulario(chamadoVO) {
          this.formChamado = this.formBuilder.group({
            id: [chamadoVO.id],
            titulo: [chamadoVO.titulo, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            descricao: [chamadoVO.descricao, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(250)]],
            dataHoraAbertura: [chamadoVO.dataHoraAbertura],
            dataHoraFechamento: [chamadoVO.dataHoraFechamento],
            statusId: [chamadoVO.statusId]
          });
        }
      }, {
        key: "salvar",
        value: function salvar() {
          var _this4 = this;
          var vo = this.formChamado.getRawValue();
          this.service.salvar(vo).subscribe(function (res) {
            _this4.notifierService.notify("success", "Chamado alterado com sucesso");
          }, function (error) {
            _this4.notifierService.notify("error", "Erro ao alterar chamado");
          });
        }
      }, {
        key: "charsLeft",
        value: function charsLeft() {
          return this.maxDescription - this.formChamado.controls['descricao'].value.length;
        }
      }]);
      return ChamadoEditarComponent;
    }();
    ChamadoEditarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _chamado_service__WEBPACK_IMPORTED_MODULE_2__["ChamadoService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]
      }];
    };
    ChamadoEditarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chamado-editar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./chamado-editar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chamado/chamado-editar/chamado-editar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./chamado-editar.component.css */"./src/app/layout/chamado/chamado-editar/chamado-editar.component.css"))["default"]]
    })], ChamadoEditarComponent);

    /***/
  },

  /***/"./src/app/layout/chamado/chamado-listar/chamado-listar.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/chamado/chamado-listar/chamado-listar.component.css ***!
    \****************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppLayoutChamadoChamadoListarChamadoListarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".aberto{\n    background-color: gray;\n    color: white;\n}\n\n.fechado{\n    background-color: green;\n    color: white;\n}\n\n.andamento {\n    background-color: yellow;\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NoYW1hZG8vY2hhbWFkby1saXN0YXIvY2hhbWFkby1saXN0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jaGFtYWRvL2NoYW1hZG8tbGlzdGFyL2NoYW1hZG8tbGlzdGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJlcnRve1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmVjaGFkb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbmRhbWVudG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBjb2xvcjogYmxhY2s7XG59Il19 */";

    /***/
  },

  /***/"./src/app/layout/chamado/chamado-listar/chamado-listar.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/chamado/chamado-listar/chamado-listar.component.ts ***!
    \***************************************************************************/
  /*! exports provided: ChamadoListarComponent */
  /***/
  function srcAppLayoutChamadoChamadoListarChamadoListarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChamadoListarComponent", function () {
      return ChamadoListarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _chamado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../chamado.service */"./src/app/layout/chamado/chamado.service.ts");
    var ChamadoListarComponent = /*#__PURE__*/function () {
      function ChamadoListarComponent(service) {
        _classCallCheck(this, ChamadoListarComponent);
        this.service = service;
      }
      _createClass(ChamadoListarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;
          this.service.listar().subscribe(function (res) {
            _this5.chamados = res;
          });
        }
      }, {
        key: "getClass",
        value: function getClass(codigo) {
          return codigo == '1' ? 'aberto' : codigo == '2' ? 'andamento' : 'fechado';
        }
      }, {
        key: "temChamados",
        value: function temChamados() {
          return this.chamados.length > 0;
        }
      }]);
      return ChamadoListarComponent;
    }();
    ChamadoListarComponent.ctorParameters = function () {
      return [{
        type: _chamado_service__WEBPACK_IMPORTED_MODULE_2__["ChamadoService"]
      }];
    };
    ChamadoListarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chamado-listar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./chamado-listar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chamado/chamado-listar/chamado-listar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./chamado-listar.component.css */"./src/app/layout/chamado/chamado-listar/chamado-listar.component.css"))["default"]]
    })], ChamadoListarComponent);

    /***/
  },

  /***/"./src/app/layout/chamado/chamado.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/chamado/chamado.service.ts ***!
    \***************************************************/
  /*! exports provided: ChamadoService */
  /***/
  function srcAppLayoutChamadoChamadoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChamadoService", function () {
      return ChamadoService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var src_app_app_url_dev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/app.url.dev */"./src/app/app.url.dev.ts");
    var ChamadoService = /*#__PURE__*/function () {
      function ChamadoService(http) {
        _classCallCheck(this, ChamadoService);
        this.http = http;
        this.URL = 'chamado/';
      }
      _createClass(ChamadoService, [{
        key: "listar",
        value: function listar() {
          return this.http.get("".concat(src_app_app_url_dev__WEBPACK_IMPORTED_MODULE_3__["API_URL"]).concat(this.URL, "listar"));
        }
      }, {
        key: "criar",
        value: function criar(chamadoVo) {
          return this.http.post("".concat(src_app_app_url_dev__WEBPACK_IMPORTED_MODULE_3__["API_URL"]).concat(this.URL, "criar"), chamadoVo);
        }
      }, {
        key: "obter",
        value: function obter(id) {
          return this.http.get("".concat(src_app_app_url_dev__WEBPACK_IMPORTED_MODULE_3__["API_URL"]).concat(this.URL, "obter/").concat(id));
        }
      }, {
        key: "salvar",
        value: function salvar(chamadoVo) {
          return this.http.post("".concat(src_app_app_url_dev__WEBPACK_IMPORTED_MODULE_3__["API_URL"]).concat(this.URL, "salvar"), chamadoVo);
        }
      }]);
      return ChamadoService;
    }();
    ChamadoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    ChamadoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChamadoService);

    /***/
  },

  /***/"./src/app/layout/layout.component.css":
  /*!*********************************************!*\
    !*** ./src/app/layout/layout.component.css ***!
    \*********************************************/
  /*! exports provided: default */
  /***/
  function srcAppLayoutLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container {\n    margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */";

    /***/
  },

  /***/"./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/
  /*! exports provided: LayoutComponent */
  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }
      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return LayoutComponent;
    }();
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./layout.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./layout.component.css */"./src/app/layout/layout.component.css"))["default"]]
    })], LayoutComponent);

    /***/
  },

  /***/"./src/app/layout/layout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/layout/layout.module.ts ***!
    \*****************************************/
  /*! exports provided: LayoutModule */
  /***/
  function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./layout.component */"./src/app/layout/layout.component.ts");
    /* harmony import */
    var _chamado_chamado_criar_chamado_criar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./chamado/chamado-criar/chamado-criar.component */"./src/app/layout/chamado/chamado-criar/chamado-criar.component.ts");
    /* harmony import */
    var _chamado_chamado_listar_chamado_listar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./chamado/chamado-listar/chamado-listar.component */"./src/app/layout/chamado/chamado-listar/chamado-listar.component.ts");
    /* harmony import */
    var _chamado_chamado_editar_chamado_editar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./chamado/chamado-editar/chamado-editar.component */"./src/app/layout/chamado/chamado-editar/chamado-editar.component.ts");
    /* harmony import */
    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./navbar/navbar.component */"./src/app/layout/navbar/navbar.component.ts");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    var LayoutModule = /*#__PURE__*/_createClass(function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    });
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _chamado_chamado_criar_chamado_criar_component__WEBPACK_IMPORTED_MODULE_4__["ChamadoCriarComponent"], _chamado_chamado_listar_chamado_listar_component__WEBPACK_IMPORTED_MODULE_5__["ChamadoListarComponent"], _chamado_chamado_editar_chamado_editar_component__WEBPACK_IMPORTED_MODULE_6__["ChamadoEditarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]]
    })], LayoutModule);

    /***/
  },

  /***/"./src/app/layout/navbar/navbar.component.css":
  /*!****************************************************!*\
    !*** ./src/app/layout/navbar/navbar.component.css ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppLayoutNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".nav-link{\n    cursor: pointer;\n}\n\n.linha{\n    background-color: rgb(0, 119, 255);\n    height: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGlua3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saW5oYXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTE5LCAyNTUpO1xuICAgIGhlaWdodDogMnB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/layout/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/navbar/navbar.component.ts ***!
    \***************************************************/
  /*! exports provided: NavbarComponent */
  /***/
  function srcAppLayoutNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-cookie-service */"./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */
    var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! jwt-decode */"./node_modules/jwt-decode/lib/index.js");
    /* harmony import */
    var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var _security_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../security/usuario.service */"./src/app/security/usuario.service.ts");
    /* harmony import */
    var _security_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../security/auth.service */"./src/app/security/auth.service.ts");
    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(authService, router, cookieService, userService) {
        _classCallCheck(this, NavbarComponent);
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
        this.userService = userService;
      }
      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var token = this.cookieService.get('token');
          var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
          console.log(tokenPayload);
          this.username = tokenPayload.sub;
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.cookieService["delete"]('token');
          window.location.href = '/login';
          window.location.reload();
        }
      }]);
      return NavbarComponent;
    }();
    NavbarComponent.ctorParameters = function () {
      return [{
        type: _security_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _security_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./navbar.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./navbar.component.css */"./src/app/layout/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);

    /***/
  },

  /***/"./src/app/security/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/security/auth.guard.ts ***!
    \****************************************/
  /*! exports provided: AuthGuard */
  /***/
  function srcAppSecurityAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./auth.service */"./src/app/security/auth.service.ts");
    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);
        this.auth = auth;
        this.router = router;
      }
      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isAuthenticated()) {
            console.log('AuthGuard: não esta autenticado vai pro login');
            this.router.navigate(['login']);
            return false;
          }
          console.log('AuthGuard: esta autenticado');
          return true;
        }
      }]);
      return AuthGuard;
    }();
    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);

    /***/
  },

  /***/"./src/app/security/auth.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/security/auth.interceptor.ts ***!
    \**********************************************/
  /*! exports provided: AuthInterceptor */
  /***/
  function srcAppSecurityAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-cookie-service */"./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(cookieService, router) {
        _classCallCheck(this, AuthInterceptor);
        this.cookieService = cookieService;
        this.router = router;
      }
      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this6 = this;
          //console.log('interceptado: ('+ JSON.stringify(req.url) +')');
          var authRequest;
          var token = this.cookieService.get('token');
          if (token) {
            authRequest = req.clone({
              setHeaders: {
                'Authorization': token
              }
            });
            return next.handle(authRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) {
              //resposta sem erro                     
            }, function (error) {
              if (error.status == 401) {
                // se for erro de autenticação envia para o login
                _this6.router.navigate(['login']);
              }
            }, function () {
              //console.log("completed successfully"); // this runs when you don't get error
              // same as "complete?" parameter of .subscribe
            }));
          } else {
            return next.handle(req);
          }
        }
      }]);
      return AuthInterceptor;
    }();
    AuthInterceptor.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);

    /***/
  },

  /***/"./src/app/security/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/security/auth.service.ts ***!
    \******************************************/
  /*! exports provided: AuthService */
  /***/
  function srcAppSecurityAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @auth0/angular-jwt */"./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */
    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-cookie-service */"./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    var AuthService = /*#__PURE__*/function () {
      function AuthService(jwtHelper, cookieService) {
        _classCallCheck(this, AuthService);
        this.jwtHelper = jwtHelper;
        this.cookieService = cookieService;
      }
      // ...
      _createClass(AuthService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = this.cookieService.get('token');
          console.log('AuthService: token expirado?: ' + this.jwtHelper.isTokenExpired(token));
          return !this.jwtHelper.isTokenExpired(token);
        }
      }]);
      return AuthService;
    }();
    AuthService.ctorParameters = function () {
      return [{
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);

    /***/
  },

  /***/"./src/app/security/cadastro/cadastro.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/security/cadastro/cadastro.component.css ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSecurityCadastroCadastroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5jc3MifQ== */";

    /***/
  },

  /***/"./src/app/security/cadastro/cadastro.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/security/cadastro/cadastro.component.ts ***!
    \*********************************************************/
  /*! exports provided: CadastroComponent */
  /***/
  function srcAppSecurityCadastroCadastroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CadastroComponent", function () {
      return CadastroComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CadastroComponent = /*#__PURE__*/function () {
      function CadastroComponent() {
        _classCallCheck(this, CadastroComponent);
      }
      _createClass(CadastroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return CadastroComponent;
    }();
    CadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cadastro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./cadastro.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/security/cadastro/cadastro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./cadastro.component.css */"./src/app/security/cadastro/cadastro.component.css"))["default"]]
    })], CadastroComponent);

    /***/
  },

  /***/"./src/app/security/login/login.component.css":
  /*!****************************************************!*\
    !*** ./src/app/security/login/login.component.css ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSecurityLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".btn{\n    margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdXJpdHkvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xuICAgIG1hcmdpbjogNXB4O1xufSJdfQ== */";

    /***/
  },

  /***/"./src/app/security/login/login.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/security/login/login.component.ts ***!
    \***************************************************/
  /*! exports provided: LoginComponent */
  /***/
  function srcAppSecurityLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-cookie-service */"./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */
    var _usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../usuario.service */"./src/app/security/usuario.service.ts");
    /* harmony import */
    var _usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./usuario */"./src/app/security/login/usuario.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(userService, router, cookieService, formBuilder) {
        _classCallCheck(this, LoginComponent);
        this.userService = userService;
        this.router = router;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.user = new _usuario__WEBPACK_IMPORTED_MODULE_5__["User"]('', '', '', '');
      }
      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;
          this.criaFormulario();
          var token = this.cookieService.get('token');
          if (token) {
            // refresh de quem ???????????????
            this.userService.refresh(this.user).subscribe(function (userAuthentication) {
              _this7.cookieService.set('token', userAuthentication.token);
              _this7.router.navigate(['/']);
            });
          }
        }
      }, {
        key: "criaFormulario",
        value: function criaFormulario() {
          this.formLogin = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this8 = this;
          console.log('logarrrrrrrrrr');
          this.message = '';
          this.loading = true;
          this.userService.login(this.formLogin.getRawValue()).subscribe(function (userAuthentication) {
            _this8.cookieService.set('token', userAuthentication.token);
            _this8.router.navigate(['/chamados']);
            _this8.loading = false;
          }, function (err) {
            _this8.message = err.error.message;
            _this8.loading = false;
          });
        }
      }, {
        key: "cancelLogin",
        value: function cancelLogin() {
          this.cookieService["delete"]('token');
          this.message = '';
          window.location.href = '/login';
          window.location.reload();
        }
      }, {
        key: "getFormGroupClass",
        value: function getFormGroupClass(isInvalid, isDirty) {
          return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
          };
        }
      }, {
        key: "setLogin",
        value: function setLogin(txt) {
          this.formLogin.controls['email'].setValue(txt + '@gmail.com');
          this.formLogin.controls['password'].setValue('123456');
        }
      }]);
      return LoginComponent;
    }();
    LoginComponent.ctorParameters = function () {
      return [{
        type: _usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./login.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/security/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./login.component.css */"./src/app/security/login/login.component.css"))["default"]]
    })], LoginComponent);

    /***/
  },

  /***/"./src/app/security/login/usuario.ts":
  /*!*******************************************!*\
    !*** ./src/app/security/login/usuario.ts ***!
    \*******************************************/
  /*! exports provided: User, PerfilVO, CurrentUser */
  /***/
  function srcAppSecurityLoginUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PerfilVO", function () {
      return PerfilVO;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CurrentUser", function () {
      return CurrentUser;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var User = /*#__PURE__*/_createClass(function User(id, email, password, profile) {
      _classCallCheck(this, User);
      this.id = id;
      this.email = email;
      this.password = password;
      this.profile = profile;
    });
    var PerfilVO = /*#__PURE__*/_createClass(function PerfilVO() {
      _classCallCheck(this, PerfilVO);
    });
    var CurrentUser = /*#__PURE__*/_createClass(function CurrentUser() {
      _classCallCheck(this, CurrentUser);
    });
    /***/
  },
  /***/"./src/app/security/role.guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/security/role.guard.service.ts ***!
    \************************************************/
  /*! exports provided: RoleGuardService */
  /***/
  function srcAppSecurityRoleGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RoleGuardService", function () {
      return RoleGuardService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./auth.service */"./src/app/security/auth.service.ts");
    /* harmony import */
    var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! jwt-decode */"./node_modules/jwt-decode/lib/index.js");
    /* harmony import */
    var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */
    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-cookie-service */"./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");

    // src/app/auth/role-guard.service.ts

    var RoleGuardService = /*#__PURE__*/function () {
      function RoleGuardService(auth, router, cookieService) {
        _classCallCheck(this, RoleGuardService);
        this.auth = auth;
        this.router = router;
        this.cookieService = cookieService;
      }
      _createClass(RoleGuardService, [{
        key: "canActivate",
        value: function canActivate(route) {
          var expectedRole = route.data.expectedRole;
          var token = this.cookieService.get('token');
          var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
          console.log('tokenPayload:');
          console.log(jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token));
          if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
            this.router.navigate(['login']);
            return false;
          }
          return true;
        }
      }]);
      return RoleGuardService;
    }();
    RoleGuardService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };
    RoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RoleGuardService);

    /***/
  },

  /***/"./src/app/security/security.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/security/security.module.ts ***!
    \*********************************************/
  /*! exports provided: SecurityModule */
  /***/
  function srcAppSecuritySecurityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SecurityModule", function () {
      return SecurityModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./login/login.component */"./src/app/security/login/login.component.ts");
    /* harmony import */
    var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./cadastro/cadastro.component */"./src/app/security/cadastro/cadastro.component.ts");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var SecurityModule = /*#__PURE__*/_createClass(function SecurityModule() {
      _classCallCheck(this, SecurityModule);
    });
    SecurityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["CadastroComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]]
    })], SecurityModule);

    /***/
  },

  /***/"./src/app/security/usuario.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/security/usuario.service.ts ***!
    \*********************************************/
  /*! exports provided: UserService */
  /***/
  function srcAppSecurityUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! jwt-decode */"./node_modules/jwt-decode/lib/index.js");
    /* harmony import */
    var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-cookie-service */"./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */
    var _app_url_dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../app.url.dev */"./src/app/app.url.dev.ts");
    var UserService = /*#__PURE__*/function () {
      function UserService(http, cookieService) {
        _classCallCheck(this, UserService);
        this.http = http;
        this.cookieService = cookieService;
      }
      _createClass(UserService, [{
        key: "getRole",
        value: function getRole() {
          var token = this.cookieService.get('token');
          var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
          return tokenPayload.role;
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          var token = this.cookieService.get('token');
          var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
          return tokenPayload.sub;
        }
      }, {
        key: "getUsername2",
        value: function getUsername2() {
          return this.http.get("".concat(_app_url_dev__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "perfil"));
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.http.post("".concat(_app_url_dev__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "auth"), user);
        }
      }, {
        key: "refresh",
        value: function refresh(user) {
          return this.http.post("".concat(_app_url_dev__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "refresh"), user);
        }
      }, {
        key: "createOrUpdate",
        value: function createOrUpdate(user) {
          if (user.id != null && user.id != '') {
            console.log('user com id vou chamar endpoint de atualizaçaõ');
            return this.http.put("".concat(_app_url_dev__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "user/update"), user);
          } else {
            user.id = null;
            console.log('user sem id vou chamar endpoint de criação');
            return this.http.post("".concat(_app_url_dev__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "user/cadastrar "), user);
          }
        }
      }, {
        key: "findAll",
        value: function findAll(page, count) {
          return this.http.get("".concat(_app_url_dev__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "api/user/").concat(page, "/").concat(count));
        }
      }, {
        key: "findById",
        value: function findById(id) {
          return this.http.get("".concat(_app_url_dev__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "api/user/").concat(id));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(_app_url_dev__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "api/user/").concat(id));
        }
      }]);
      return UserService;
    }();
    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserService);

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
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

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! /workspace/SpringHelpDesk/client/src/main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map