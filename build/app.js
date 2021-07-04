(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/normalize.css */ "./assets/styles/normalize.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/form */ "./assets/components/form.jsx");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)




 // Recherche si la page actuelle contient une balise racine React.

var reactRoot = document.getElementById('react-root'); // Est-ce que la balise a été trouvée ?

if (reactRoot !== null) {
  // Oui, démarrage de React.
  react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_form__WEBPACK_IMPORTED_MODULE_4__.default, null), reactRoot);
}

/***/ }),

/***/ "./assets/components/form.jsx":
/*!************************************!*\
  !*** ./assets/components/form.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChangeCountry", function (event) {
      // Récupération de la saisie de l'utilisateur dans le input.
      var keywordCountryValue = event.currentTarget.value;

      if (keywordCountryValue.trim().length == 0) {
        _this.setState({
          keywordCountry: '',
          searchCountry: []
        });

        _this.componentDidMount();

        return;
      }
      /*
       * Au début il n'y a pas de suggestions de pays.
       *
       * C'est un ensemble (classe Set) : cela signifie qu'il n'y aura pas de doublons de pays, etc
       * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set
       */


      var countries = new Set(); // Recherche l'extrait de pays saisi par l'utilisateur (par exemple 'ap' dans 'Japon')

      var _iterator = _createForOfIteratorHelper(_this.state.experiences),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var experience = _step.value;

          // Est ce que le pays de l'expérience contient la saisie de l'utilisateur ?
          if (experience.paysDestination.toLowerCase().includes(keywordCountryValue.toLowerCase()) == true) {
            // Oui, ajout du pays à l'ensemble (le Set).
            countries.add(experience.paysDestination);
          }
        }
        /*
         * 1- Conversion de l'ensemble (le Set) en un tableau avec Array.from
         * 2- Tri des valeurs du tableau (les noms des pays donc) avec .sort
         * 3- Pour chaque pays création d'un JSX <li> pour la liste des suggestions de pays
         */

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var searchCountryValue = Array.from(countries).sort().map(function (country, index) {
        // Quand on clique sur le <li> il est temps de valider la suggestion.
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("li", {
          key: index,
          onClick: function onClick() {
            _this.validateCountrySuggestion(country);
          }
        }, country);
      }); // Mise à jour de la gestion de la saisie du pays.

      _this.setState({
        keywordCountry: keywordCountryValue,
        searchCountry: searchCountryValue
      }, function () {
        // Mise à jour de l'affichage des résultats d'expériences correspondantes.
        _this.filterResults();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeVille", function (event) {
      // Récupération de la saisie de l'utilisateur dans le input.
      var keywordVilleValue = event.currentTarget.value;

      if (keywordVilleValue.trim().length == 0) {
        _this.setState({
          keywordVille: '',
          searchVille: []
        }), _this.componentDidMount();
        return;
      }
      /*
      * Au début il n'y a pas de suggestions de ville.
      *
      * C'est un ensemble (classe Set) : cela signifie qu'il n'y aura pas de doublons de ville
      * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set
      */


      var villes = new Set(); // Recherche l'extrait de ville saisi par l'utilisateur (par exemple 'ap' dans 'Japon')

      var _iterator2 = _createForOfIteratorHelper(_this.state.experiences),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var experience = _step2.value;

          // Est ce que la ville de l'expérience contient la saisie de l'utilisateur ?
          if (experience.villeDestination.toLowerCase().includes(keywordVilleValue.toLowerCase()) == true) {
            // Oui, ajout de la ville à l'ensemble (le Set).
            villes.add(experience.villeDestination);
          }
        }
        /*
        * 1- Conversion de l'ensemble (le Set) en un tableau avec Array.from
        * 2- Tri des valeurs du tableau (les noms des villes donc) avec .sort
        * 3- Pour chaque ville création d'un JSX <li> pour la liste des suggestions de villes
        */

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var searchVilleValue = Array.from(villes).sort().map(function (ville, index) {
        // Quand on clique sur le <li> il est temps de valider la suggestion.
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("li", {
          key: index,
          onClick: function onClick() {
            _this.validateVilleSuggestion(ville);
          }
        }, ville);
      }); // Mise à jour de la gestion de la saisie de la ville.

      _this.setState({
        keywordVille: keywordVilleValue,
        searchVille: searchVilleValue
      }, function () {
        // Mise à jour de l'affichage des résultats d'expériences correspondantes.
        _this.filterResults();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeGenre", function (event) {
      // Récupération de la saisie de l'utilisateur dans le input.
      var keywordGenreValue = event.currentTarget.value;

      if (keywordGenreValue.trim().length == 0) {
        _this.setState({
          keywordGenre: '',
          searchGenre: []
        });

        _this.componentDidMount();

        return;
      }
      /*
       * Au début il n'y a pas de suggestions de genre.
       *
       * C'est un ensemble (classe Set) : cela signifie qu'il n'y aura pas de doublons de genre
       * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set
       */


      var genres = new Set(); // Recherche l'extrait de genre saisi par l'utilisateur (par exemple 'ap' dans 'Japon')

      var _iterator3 = _createForOfIteratorHelper(_this.state.experiences),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var experience = _step3.value;

          // Est ce que le genre de l'expérience contient la saisie de l'utilisateur ?
          if (experience.genreCine.toLowerCase().includes(keywordGenreValue.toLowerCase()) == true) {
            // Oui, ajout du genre à l'ensemble (le Set).
            genres.add(experience.genreCine);
          }
        }
        /*
         * 1- Conversion de l'ensemble (le Set) en un tableau avec Array.from
         * 2- Tri des valeurs du tableau (les noms des genre donc) avec .sort
         * 3- Pour chaque genre création d'un JSX <li> pour la liste des suggestions de genres
         */

      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var searchGenreValue = Array.from(genres).sort().map(function (genre, index) {
        // Quand on clique sur le <li> il est temps de valider la suggestion.
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("li", {
          key: index,
          onClick: function onClick() {
            _this.validateGenreSuggestion(genre);
          }
        }, genre);
      }); // Mise à jour de la gestion de la saisie du genre.

      _this.setState({
        keywordGenre: keywordGenreValue,
        searchGenre: searchGenreValue
      }, function () {
        // Mise à jour de l'affichage des résultats d'expériences correspondantes.
        _this.filterResults();
      });
    });

    _this.state = {
      experiences: [],
      // récupéré de l'API
      genres: [],
      // récupéré de l'API
      images: [],
      keywordCountry: "",
      // saisie du input
      searchCountry: [],
      // liste des pays suggérés suite à la saisie du input
      keywordGenre: "",
      // saisie du input
      searchGenre: [],
      // liste des genres suggérés suite à la saisie du input
      keywordVille: "",
      // saisie du input
      searchVille: [],
      // liste des villes suggérées suite à la saisie du input
      searchResults: [],
      // liste des expériences qui matchent avec pays / ville / genre saisi
      selectedExperiences: null,
      startDate: new Date(),
      endDate: new Date()
    };
    return _this;
  }

  _createClass(Form, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Déclenche une requête HTTP (AJAX) pour récupérer les données de la base SQL
      window.fetch('/backoffice/api').then(function (response) {
        // Récupération de la réponse HTTP, désérialisation du JSON
        return response.json(); // équivalent à JSON.parse()
      }).then(function (result) {
        console.log(result);

        _this2.setState({
          experiences: result.experiences,
          genres: result.genres
        }); // Demande l'affichage des résultats de base


        _this2.filterResults();
      });
    }
    /*
    * Recup des saisies de l'utilisateur dans les champs de recherche
    */

  }, {
    key: "filterResults",
    value: function filterResults() {
      var _this3 = this;

      var experiences = this.state.experiences.filter(function (experience) {
        if (experience.paysDestination.toLowerCase().includes(_this3.state.keywordCountry.toLowerCase()) == true) {
          return true;
        }

        return false;
      });
      experiences = experiences.filter(function (experience) {
        if (experience.genreCine.toLowerCase().includes(_this3.state.keywordGenre.toLowerCase()) == true) {
          return true;
        }

        return false;
      });
      experiences = experiences.filter(function (experience) {
        if (experience.villeDestination.toLowerCase().includes(_this3.state.keywordVille.toLowerCase()) == true) {
          return true;
        }

        return false;
      });
      var searchResults = experiences.map(function (experience, index) {
        var urlId = "experience/" + experience.id; // let urlPhoto = "../img/imgExperience/" + experience.imageExp;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", {
          className: "col-4 mb-4 mt-5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", {
          className: "cardcatalogue card mb-4 ombrage",
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("a", {
          href: urlId,
          className: "card-link"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("img", {
          className: "card-img-top",
          src: experience.imageExp,
          alt: "Card image"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", {
          className: "card-body"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("a", {
          href: urlId,
          className: "card-link"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("h5", {
          className: "card-title"
        }, experience.titreExperience)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("p", {
          className: "card-text "
        }, experience.descriptionExperience.slice(0, 100), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("a", {
          href: urlId,
          className: "card-link"
        }, "En savoir plus..."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("ul", {
          className: "list-group list-group-flush"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("li", {
          className: "list-group-item"
        }, " ", experience.villeDestination, ", ", experience.paysDestination), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("li", {
          className: "list-group-item"
        }, experience.genreCine))));
      }); // Mise à jour de l'affichage des résultats.

      this.setState({
        searchResults: searchResults
      });
    } // Appelé lorsque l'utilisateur a validé une suggestion de pays

  }, {
    key: "validateCountrySuggestion",
    value: function validateCountrySuggestion(country) {
      var _this4 = this;

      // Mise à jour de la gestion de la saisie du pays.
      this.setState({
        keywordCountry: country,
        // Sélection de ce pays
        searchCountry: [] // On repart à zéro (disparition des suggestions de pays)

      }, function () {
        // Mise à jour de l'affichage des résultats d'expériences correspondantes.
        _this4.filterResults();
      });
    } // Gestionnaire d'évènement de la saisie du pays

  }, {
    key: "validateVilleSuggestion",
    value: // Appelé lorsque l'utilisateur a validé une suggestion de ville
    function validateVilleSuggestion(ville) {
      var _this5 = this;

      // Mise à jour de la gestion de la saisie de la ville.
      this.setState({
        keywordVille: ville,
        // Sélection de cette ville
        searchVille: [] // On repart à zéro (disparition des suggestions de villes)

      }, function () {
        // Mise à jour de l'affichage des résultats d'expériences correspondantes.
        _this5.filterResults();
      });
    } // Gestionnaire d'évènement de la saisie de la ville

  }, {
    key: "validateGenreSuggestion",
    value: // Appelé lorsque l'utilisateur a validé une suggestion de genre
    function validateGenreSuggestion(genre) {
      var _this6 = this;

      // Mise à jour de la gestion de la saisie du genre.
      this.setState({
        keywordGenre: genre,
        // Sélection de ce genre
        searchGenre: [] // On repart à zéro (disparition des suggestions de genres)

      }, function () {
        // Mise à jour de l'affichage des résultats d'expériences correspondantes.
        _this6.filterResults();
      });
    } // Gestionnaire d'évènement de la saisie du genre

  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      // Est-ce qu'il n'y a pas d'expérience à afficher ?
      //NON (erreur de saisie)
      if (this.state.searchResults.length == 0) {
        this.state.searchResults = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", {
          className: "mx-auto error-msg my-5"
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("i", {
          "class": "fas fa-sad-tear"
        }), " Aucun r\xE9sultat trouv\xE9 ne correspond \xE0 votre recherche. ");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("section", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("h1", {
        id: "titreCatalogue"
      }, "D\xE9couvrez nos exp\xE9riences cin\xE9philes:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", {
        className: "row mt-3 justify-content-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("label", null, "Du:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("input", {
        className: "searchbar mr-1",
        type: "date",
        value: this.state.startDate,
        onChange: function onChange(e) {
          _this7.setState({
            startDate: e.currentTarget.value
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("label", null, "Au:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("input", {
        type: "date",
        className: "searchbar mr-1",
        value: this.state.endDate,
        onChange: function onChange(e) {
          _this7.setState({
            endDate: e.currentTarget.value
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("input", {
        className: "searchbar mr-1",
        type: "text",
        placeholder: "Pays",
        value: this.state.keywordCountry,
        onChange: this.onChangeCountry
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("ul", {
        className: "xxxxxx"
      }, this.state.searchCountry)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("input", {
        className: "searchbar mr-1",
        type: "text",
        placeholder: "Ville",
        value: this.state.keywordVille,
        onChange: this.onChangeVille
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("ul", {
        className: "xxxxxx"
      }, this.state.searchVille)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("input", {
        className: "searchbar mr-1",
        type: "text",
        placeholder: "Genre cin\xE9matograhique",
        value: this.state.keywordGenre,
        onChange: this.onChangeGenre
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("ul", {
        className: "xxxxxx"
      }, this.state.searchGenre)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("select", {
        className: "searchbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("option", {
        defaultValue: true,
        disabled: true
      }, "Nb de pers:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("option", {
        value: "1"
      }, "1 adulte"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("option", {
        value: "2"
      }, "2 adultes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("option", {
        value: "3"
      }, "3 adultes")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25__.createElement("div", {
        className: "row"
      }, this.state.searchResults));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_25__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/normalize.css":
/*!*************************************!*\
  !*** ./assets/styles/normalize.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-dee54d"], () => (__webpack_exec__("./assets/app.js")));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Zvcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcz8zZTJmIl0sIm5hbWVzIjpbInJlYWN0Um9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsIkZvcm0iLCJwcm9wcyIsImV2ZW50Iiwia2V5d29yZENvdW50cnlWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImtleXdvcmRDb3VudHJ5Iiwic2VhcmNoQ291bnRyeSIsImNvbXBvbmVudERpZE1vdW50IiwiY291bnRyaWVzIiwiU2V0Iiwic3RhdGUiLCJleHBlcmllbmNlcyIsImV4cGVyaWVuY2UiLCJwYXlzRGVzdGluYXRpb24iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiYWRkIiwic2VhcmNoQ291bnRyeVZhbHVlIiwiQXJyYXkiLCJmcm9tIiwic29ydCIsIm1hcCIsImNvdW50cnkiLCJpbmRleCIsInZhbGlkYXRlQ291bnRyeVN1Z2dlc3Rpb24iLCJmaWx0ZXJSZXN1bHRzIiwia2V5d29yZFZpbGxlVmFsdWUiLCJrZXl3b3JkVmlsbGUiLCJzZWFyY2hWaWxsZSIsInZpbGxlcyIsInZpbGxlRGVzdGluYXRpb24iLCJzZWFyY2hWaWxsZVZhbHVlIiwidmlsbGUiLCJ2YWxpZGF0ZVZpbGxlU3VnZ2VzdGlvbiIsImtleXdvcmRHZW5yZVZhbHVlIiwia2V5d29yZEdlbnJlIiwic2VhcmNoR2VucmUiLCJnZW5yZXMiLCJnZW5yZUNpbmUiLCJzZWFyY2hHZW5yZVZhbHVlIiwiZ2VucmUiLCJ2YWxpZGF0ZUdlbnJlU3VnZ2VzdGlvbiIsImltYWdlcyIsInNlYXJjaFJlc3VsdHMiLCJzZWxlY3RlZEV4cGVyaWVuY2VzIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwidXJsSWQiLCJpZCIsImltYWdlRXhwIiwidGl0cmVFeHBlcmllbmNlIiwiZGVzY3JpcHRpb25FeHBlcmllbmNlIiwic2xpY2UiLCJlIiwib25DaGFuZ2VDb3VudHJ5Iiwib25DaGFuZ2VWaWxsZSIsIm9uQ2hhbmdlR2VucmUiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtDQUtBOztBQUNBLElBQUlBLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWhCLEMsQ0FFQTs7QUFDQSxJQUFJRixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFFdEI7QUFDQUcsK0NBQUEsZUFBZ0IsaURBQUMscURBQUQsT0FBaEIsRUFBMEJILFNBQTFCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkQ7O0lBRU1JLEk7Ozs7O0FBRUosZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLHNFQWdIRCxVQUFDQyxLQUFELEVBQVc7QUFFM0I7QUFDQSxVQUFNQyxtQkFBbUIsR0FBR0QsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxLQUFoRDs7QUFFQSxVQUFJRixtQkFBbUIsQ0FBQ0csSUFBcEIsR0FBMkJDLE1BQTNCLElBQXFDLENBQXpDLEVBQTRDO0FBQzFDLGNBQUtDLFFBQUwsQ0FBYztBQUFFQyx3QkFBYyxFQUFFLEVBQWxCO0FBQXNCQyx1QkFBYSxF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LEVBQUM7QUFBZCxTQUF3QixLQUFLdkQsS0FBTCxDQUFXa0IsV0FBbkMsQ0FGRixDQXpCRixlQTZCRSw0RUFDRTtBQUFPLGlCQUFTLEVBQUMsZ0JBQWpCO0FBQWtDLFlBQUksRUFBQyxNQUF2QztBQUE4QyxtQkFBVyxFQUFDLDJCQUExRDtBQUFtRixhQUFLLEVBQUUsS0FBS2xCLEtBQUwsQ0FBV3lCLFlBQXJHO0FBQW1ILGdCQUFRLEVBQUUsS0FBSytCO0FBQWxJLFFBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUF3QixLQUFLeEQsS0FBTCxDQUFXMEIsV0FBbkMsQ0FGRixDQTdCRixlQWlDRSw0RUFDRTtBQUFRLGlCQUFTLEVBQUM7QUFBbEIsc0JBQ0U7QUFBUSxvQkFBWSxNQUFwQjtBQUFxQixnQkFBUTtBQUE3Qix1QkFERixlQUVFO0FBQVEsYUFBSyxFQUFDO0FBQWQsb0JBRkYsZUFHRTtBQUFRLGFBQUssRUFBQztBQUFkLHFCQUhGLGVBSUU7QUFBUSxhQUFLLEVBQUM7QUFBZCxxQkFKRixDQURGLENBakNGLENBRkYsZUErQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLMUIsS0FBTCxDQUFXaUMsYUFEZCxDQS9DRixDQURGO0FBcUREOzs7O0VBOVZnQndCLDZDOztBQWlXbkIsaUVBQWV2RSxJQUFmLEU7Ozs7Ozs7Ozs7OztBQ25XQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9ub3JtYWxpemUuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCBGb3JtIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcclxuXHJcblxyXG4vLyBSZWNoZXJjaGUgc2kgbGEgcGFnZSBhY3R1ZWxsZSBjb250aWVudCB1bmUgYmFsaXNlIHJhY2luZSBSZWFjdC5cclxubGV0IHJlYWN0Um9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1yb290Jyk7XHJcblxyXG4vLyBFc3QtY2UgcXVlIGxhIGJhbGlzZSBhIMOpdMOpIHRyb3V2w6llID9cclxuaWYgKHJlYWN0Um9vdCAhPT0gbnVsbCkge1xyXG5cclxuICAvLyBPdWksIGTDqW1hcnJhZ2UgZGUgUmVhY3QuXHJcbiAgUmVhY3RET00ucmVuZGVyKDxGb3JtIC8+LCByZWFjdFJvb3QpO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZXhwZXJpZW5jZXM6IFtdLCAgICAgIC8vIHLDqWN1cMOpcsOpIGRlIGwnQVBJXHJcbiAgICAgIGdlbnJlczogW10sICAgICAgICAgICAvLyByw6ljdXDDqXLDqSBkZSBsJ0FQSVxyXG4gICAgICBpbWFnZXM6IFtdLFxyXG5cclxuICAgICAga2V5d29yZENvdW50cnk6IFwiXCIsICAgIC8vIHNhaXNpZSBkdSBpbnB1dFxyXG4gICAgICBzZWFyY2hDb3VudHJ5OiBbXSwgICAgLy8gbGlzdGUgZGVzIHBheXMgc3VnZ8OpcsOpcyBzdWl0ZSDDoCBsYSBzYWlzaWUgZHUgaW5wdXRcclxuXHJcbiAgICAgIGtleXdvcmRHZW5yZTogXCJcIiwgICAgLy8gc2Fpc2llIGR1IGlucHV0XHJcbiAgICAgIHNlYXJjaEdlbnJlOiBbXSwgICAgIC8vIGxpc3RlIGRlcyBnZW5yZXMgc3VnZ8OpcsOpcyBzdWl0ZSDDoCBsYSBzYWlzaWUgZHUgaW5wdXRcclxuXHJcbiAgICAgIGtleXdvcmRWaWxsZTogXCJcIiwgICAgLy8gc2Fpc2llIGR1IGlucHV0XHJcbiAgICAgIHNlYXJjaFZpbGxlOiBbXSwgICAgIC8vIGxpc3RlIGRlcyB2aWxsZXMgc3VnZ8OpcsOpZXMgc3VpdGUgw6AgbGEgc2Fpc2llIGR1IGlucHV0XHJcblxyXG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXSwgICAgLy8gbGlzdGUgZGVzIGV4cMOpcmllbmNlcyBxdWkgbWF0Y2hlbnQgYXZlYyBwYXlzIC8gdmlsbGUgLyBnZW5yZSBzYWlzaVxyXG5cclxuICAgICAgc2VsZWN0ZWRFeHBlcmllbmNlczogbnVsbCxcclxuICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICBlbmREYXRlOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgIC8vIETDqWNsZW5jaGUgdW5lIHJlcXXDqnRlIEhUVFAgKEFKQVgpIHBvdXIgcsOpY3Vww6lyZXIgbGVzIGRvbm7DqWVzIGRlIGxhIGJhc2UgU1FMXHJcbiAgICB3aW5kb3cuZmV0Y2goJy9iYWNrb2ZmaWNlL2FwaScpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAvLyBSw6ljdXDDqXJhdGlvbiBkZSBsYSByw6lwb25zZSBIVFRQLCBkw6lzw6lyaWFsaXNhdGlvbiBkdSBKU09OXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIMOpcXVpdmFsZW50IMOgIEpTT04ucGFyc2UoKVxyXG5cclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBlcmllbmNlczogcmVzdWx0LmV4cGVyaWVuY2VzLCBnZW5yZXM6IHJlc3VsdC5nZW5yZXMgfSk7XHJcblxyXG4gICAgICAvLyBEZW1hbmRlIGwnYWZmaWNoYWdlIGRlcyByw6lzdWx0YXRzIGRlIGJhc2VcclxuICAgICAgdGhpcy5maWx0ZXJSZXN1bHRzKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLypcclxuICAqIFJlY3VwIGRlcyBzYWlzaWVzIGRlIGwndXRpbGlzYXRldXIgZGFucyBsZXMgY2hhbXBzIGRlIHJlY2hlcmNoZVxyXG4gICovXHJcbiAgZmlsdGVyUmVzdWx0cygpIHtcclxuXHJcbiAgICBsZXQgZXhwZXJpZW5jZXMgPSB0aGlzLnN0YXRlLmV4cGVyaWVuY2VzLmZpbHRlcigoZXhwZXJpZW5jZSkgPT4ge1xyXG4gICAgICBpZiAoZXhwZXJpZW5jZS5wYXlzRGVzdGluYXRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLmtleXdvcmRDb3VudHJ5LnRvTG93ZXJDYXNlKCkpID09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZXhwZXJpZW5jZXMgPSBleHBlcmllbmNlcy5maWx0ZXIoKGV4cGVyaWVuY2UpID0+IHtcclxuICAgICAgaWYgKGV4cGVyaWVuY2UuZ2VucmVDaW5lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5rZXl3b3JkR2VucmUudG9Mb3dlckNhc2UoKSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBleHBlcmllbmNlcyA9IGV4cGVyaWVuY2VzLmZpbHRlcigoZXhwZXJpZW5jZSkgPT4ge1xyXG4gICAgICBpZiAoZXhwZXJpZW5jZS52aWxsZURlc3RpbmF0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5rZXl3b3JkVmlsbGUudG9Mb3dlckNhc2UoKSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gZXhwZXJpZW5jZXMubWFwKChleHBlcmllbmNlLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgdXJsSWQgPSBcImV4cGVyaWVuY2UvXCIgKyBleHBlcmllbmNlLmlkO1xyXG4gICAgICAvLyBsZXQgdXJsUGhvdG8gPSBcIi4uL2ltZy9pbWdFeHBlcmllbmNlL1wiICsgZXhwZXJpZW5jZS5pbWFnZUV4cDtcclxuXHJcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IG1iLTQgbXQtNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZGNhdGFsb2d1ZSBjYXJkIG1iLTQgb21icmFnZVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPGEgaHJlZj17dXJsSWR9IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPjxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtleHBlcmllbmNlLmltYWdlRXhwfSBhbHQ9XCJDYXJkIGltYWdlXCIgLz48L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPXt1cmxJZH0gY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+PGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57ZXhwZXJpZW5jZS50aXRyZUV4cGVyaWVuY2V9PC9oNT48L2E+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBcIj57ZXhwZXJpZW5jZS5kZXNjcmlwdGlvbkV4cGVyaWVuY2Uuc2xpY2UoMCwgMTAwKX0gPGEgaHJlZj17dXJsSWR9IGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPkVuIHNhdm9pciBwbHVzLi4uPC9hPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+IHtleHBlcmllbmNlLnZpbGxlRGVzdGluYXRpb259LCB7ZXhwZXJpZW5jZS5wYXlzRGVzdGluYXRpb259PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPntleHBlcmllbmNlLmdlbnJlQ2luZX08L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTWlzZSDDoCBqb3VyIGRlIGwnYWZmaWNoYWdlIGRlcyByw6lzdWx0YXRzLlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFJlc3VsdHM6IHNlYXJjaFJlc3VsdHMgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8vIEFwcGVsw6kgbG9yc3F1ZSBsJ3V0aWxpc2F0ZXVyIGEgdmFsaWTDqSB1bmUgc3VnZ2VzdGlvbiBkZSBwYXlzXHJcbiAgdmFsaWRhdGVDb3VudHJ5U3VnZ2VzdGlvbihjb3VudHJ5KSB7XHJcbiAgICAvLyBNaXNlIMOgIGpvdXIgZGUgbGEgZ2VzdGlvbiBkZSBsYSBzYWlzaWUgZHUgcGF5cy5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBrZXl3b3JkQ291bnRyeTogY291bnRyeSwgIC8vIFPDqWxlY3Rpb24gZGUgY2UgcGF5c1xyXG4gICAgICBzZWFyY2hDb3VudHJ5OiBbXSAgICAgICAgIC8vIE9uIHJlcGFydCDDoCB6w6lybyAoZGlzcGFyaXRpb24gZGVzIHN1Z2dlc3Rpb25zIGRlIHBheXMpXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIC8vIE1pc2Ugw6Agam91ciBkZSBsJ2FmZmljaGFnZSBkZXMgcsOpc3VsdGF0cyBkJ2V4cMOpcmllbmNlcyBjb3JyZXNwb25kYW50ZXMuXHJcbiAgICAgIHRoaXMuZmlsdGVyUmVzdWx0cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXN0aW9ubmFpcmUgZCfDqXbDqG5lbWVudCBkZSBsYSBzYWlzaWUgZHUgcGF5c1xyXG4gIG9uQ2hhbmdlQ291bnRyeSA9IChldmVudCkgPT4ge1xyXG5cclxuICAgIC8vIFLDqWN1cMOpcmF0aW9uIGRlIGxhIHNhaXNpZSBkZSBsJ3V0aWxpc2F0ZXVyIGRhbnMgbGUgaW5wdXQuXHJcbiAgICBjb25zdCBrZXl3b3JkQ291bnRyeVZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuXHJcbiAgICBpZiAoa2V5d29yZENvdW50cnlWYWx1ZS50cmltKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGtleXdvcmRDb3VudHJ5OiAnJywgc2VhcmNoQ291bnRyeTogW10gfSlcclxuICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICogQXUgZMOpYnV0IGlsIG4neSBhIHBhcyBkZSBzdWdnZXN0aW9ucyBkZSBwYXlzLlxyXG4gICAgICpcclxuICAgICAqIEMnZXN0IHVuIGVuc2VtYmxlIChjbGFzc2UgU2V0KSA6IGNlbGEgc2lnbmlmaWUgcXUnaWwgbid5IGF1cmEgcGFzIGRlIGRvdWJsb25zIGRlIHBheXMsIGV0Y1xyXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU2V0XHJcbiAgICAgKi9cclxuICAgIGxldCBjb3VudHJpZXMgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgLy8gUmVjaGVyY2hlIGwnZXh0cmFpdCBkZSBwYXlzIHNhaXNpIHBhciBsJ3V0aWxpc2F0ZXVyIChwYXIgZXhlbXBsZSAnYXAnIGRhbnMgJ0phcG9uJylcclxuICAgIGZvciAobGV0IGV4cGVyaWVuY2Ugb2YgdGhpcy5zdGF0ZS5leHBlcmllbmNlcykge1xyXG4gICAgICAvLyBFc3QgY2UgcXVlIGxlIHBheXMgZGUgbCdleHDDqXJpZW5jZSBjb250aWVudCBsYSBzYWlzaWUgZGUgbCd1dGlsaXNhdGV1ciA/XHJcbiAgICAgIGlmIChleHBlcmllbmNlLnBheXNEZXN0aW5hdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmRDb3VudHJ5VmFsdWUudG9Mb3dlckNhc2UoKSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIE91aSwgYWpvdXQgZHUgcGF5cyDDoCBsJ2Vuc2VtYmxlIChsZSBTZXQpLlxyXG4gICAgICAgIGNvdW50cmllcy5hZGQoZXhwZXJpZW5jZS5wYXlzRGVzdGluYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIDEtIENvbnZlcnNpb24gZGUgbCdlbnNlbWJsZSAobGUgU2V0KSBlbiB1biB0YWJsZWF1IGF2ZWMgQXJyYXkuZnJvbVxyXG4gICAgICogMi0gVHJpIGRlcyB2YWxldXJzIGR1IHRhYmxlYXUgKGxlcyBub21zIGRlcyBwYXlzIGRvbmMpIGF2ZWMgLnNvcnRcclxuICAgICAqIDMtIFBvdXIgY2hhcXVlIHBheXMgY3LDqWF0aW9uIGQndW4gSlNYIDxsaT4gcG91ciBsYSBsaXN0ZSBkZXMgc3VnZ2VzdGlvbnMgZGUgcGF5c1xyXG4gICAgICovXHJcbiAgICBjb25zdCBzZWFyY2hDb3VudHJ5VmFsdWUgPSBBcnJheS5mcm9tKGNvdW50cmllcykuc29ydCgpLm1hcCgoY291bnRyeSwgaW5kZXgpID0+IHtcclxuICAgICAgLy8gUXVhbmQgb24gY2xpcXVlIHN1ciBsZSA8bGk+IGlsIGVzdCB0ZW1wcyBkZSB2YWxpZGVyIGxhIHN1Z2dlc3Rpb24uXHJcbiAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4geyB0aGlzLnZhbGlkYXRlQ291bnRyeVN1Z2dlc3Rpb24oY291bnRyeSkgfX0+e2NvdW50cnl9PC9saT5cclxuICAgIH0pXHJcblxyXG4gICAgLy8gTWlzZSDDoCBqb3VyIGRlIGxhIGdlc3Rpb24gZGUgbGEgc2Fpc2llIGR1IHBheXMuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAga2V5d29yZENvdW50cnk6IGtleXdvcmRDb3VudHJ5VmFsdWUsXHJcbiAgICAgIHNlYXJjaENvdW50cnk6IHNlYXJjaENvdW50cnlWYWx1ZVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICAvLyBNaXNlIMOgIGpvdXIgZGUgbCdhZmZpY2hhZ2UgZGVzIHLDqXN1bHRhdHMgZCdleHDDqXJpZW5jZXMgY29ycmVzcG9uZGFudGVzLlxyXG4gICAgICB0aGlzLmZpbHRlclJlc3VsdHMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vIEFwcGVsw6kgbG9yc3F1ZSBsJ3V0aWxpc2F0ZXVyIGEgdmFsaWTDqSB1bmUgc3VnZ2VzdGlvbiBkZSB2aWxsZVxyXG4gIHZhbGlkYXRlVmlsbGVTdWdnZXN0aW9uKHZpbGxlKSB7XHJcbiAgICAvLyBNaXNlIMOgIGpvdXIgZGUgbGEgZ2VzdGlvbiBkZSBsYSBzYWlzaWUgZGUgbGEgdmlsbGUuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAga2V5d29yZFZpbGxlOiB2aWxsZSwgICAgLy8gU8OpbGVjdGlvbiBkZSBjZXR0ZSB2aWxsZVxyXG4gICAgICBzZWFyY2hWaWxsZTogW10gICAgICAgICAvLyBPbiByZXBhcnQgw6AgesOpcm8gKGRpc3Bhcml0aW9uIGRlcyBzdWdnZXN0aW9ucyBkZSB2aWxsZXMpXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIC8vIE1pc2Ugw6Agam91ciBkZSBsJ2FmZmljaGFnZSBkZXMgcsOpc3VsdGF0cyBkJ2V4cMOpcmllbmNlcyBjb3JyZXNwb25kYW50ZXMuXHJcbiAgICAgIHRoaXMuZmlsdGVyUmVzdWx0cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXN0aW9ubmFpcmUgZCfDqXbDqG5lbWVudCBkZSBsYSBzYWlzaWUgZGUgbGEgdmlsbGVcclxuICBvbkNoYW5nZVZpbGxlID0gKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgLy8gUsOpY3Vww6lyYXRpb24gZGUgbGEgc2Fpc2llIGRlIGwndXRpbGlzYXRldXIgZGFucyBsZSBpbnB1dC5cclxuICAgIGNvbnN0IGtleXdvcmRWaWxsZVZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuXHJcbiAgICBpZiAoa2V5d29yZFZpbGxlVmFsdWUudHJpbSgpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBrZXl3b3JkVmlsbGU6ICcnLCBzZWFyY2hWaWxsZTogW10gfSksXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgLypcclxuICAgICogQXUgZMOpYnV0IGlsIG4neSBhIHBhcyBkZSBzdWdnZXN0aW9ucyBkZSB2aWxsZS5cclxuICAgICpcclxuICAgICogQydlc3QgdW4gZW5zZW1ibGUgKGNsYXNzZSBTZXQpIDogY2VsYSBzaWduaWZpZSBxdSdpbCBuJ3kgYXVyYSBwYXMgZGUgZG91YmxvbnMgZGUgdmlsbGVcclxuICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU2V0XHJcbiAgICAqL1xyXG4gICAgbGV0IHZpbGxlcyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvLyBSZWNoZXJjaGUgbCdleHRyYWl0IGRlIHZpbGxlIHNhaXNpIHBhciBsJ3V0aWxpc2F0ZXVyIChwYXIgZXhlbXBsZSAnYXAnIGRhbnMgJ0phcG9uJylcclxuICAgIGZvciAobGV0IGV4cGVyaWVuY2Ugb2YgdGhpcy5zdGF0ZS5leHBlcmllbmNlcykge1xyXG4gICAgICAvLyBFc3QgY2UgcXVlIGxhIHZpbGxlIGRlIGwnZXhww6lyaWVuY2UgY29udGllbnQgbGEgc2Fpc2llIGRlIGwndXRpbGlzYXRldXIgP1xyXG4gICAgICBpZiAoZXhwZXJpZW5jZS52aWxsZURlc3RpbmF0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZFZpbGxlVmFsdWUudG9Mb3dlckNhc2UoKSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIE91aSwgYWpvdXQgZGUgbGEgdmlsbGUgw6AgbCdlbnNlbWJsZSAobGUgU2V0KS5cclxuICAgICAgICB2aWxsZXMuYWRkKGV4cGVyaWVuY2UudmlsbGVEZXN0aW5hdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiAxLSBDb252ZXJzaW9uIGRlIGwnZW5zZW1ibGUgKGxlIFNldCkgZW4gdW4gdGFibGVhdSBhdmVjIEFycmF5LmZyb21cclxuICAgICogMi0gVHJpIGRlcyB2YWxldXJzIGR1IHRhYmxlYXUgKGxlcyBub21zIGRlcyB2aWxsZXMgZG9uYykgYXZlYyAuc29ydFxyXG4gICAgKiAzLSBQb3VyIGNoYXF1ZSB2aWxsZSBjcsOpYXRpb24gZCd1biBKU1ggPGxpPiBwb3VyIGxhIGxpc3RlIGRlcyBzdWdnZXN0aW9ucyBkZSB2aWxsZXNcclxuICAgICovXHJcbiAgICBjb25zdCBzZWFyY2hWaWxsZVZhbHVlID0gQXJyYXkuZnJvbSh2aWxsZXMpLnNvcnQoKS5tYXAoKHZpbGxlLCBpbmRleCkgPT4ge1xyXG4gICAgICAvLyBRdWFuZCBvbiBjbGlxdWUgc3VyIGxlIDxsaT4gaWwgZXN0IHRlbXBzIGRlIHZhbGlkZXIgbGEgc3VnZ2VzdGlvbi5cclxuICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudmFsaWRhdGVWaWxsZVN1Z2dlc3Rpb24odmlsbGUpIH19Pnt2aWxsZX08L2xpPlxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBNaXNlIMOgIGpvdXIgZGUgbGEgZ2VzdGlvbiBkZSBsYSBzYWlzaWUgZGUgbGEgdmlsbGUuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAga2V5d29yZFZpbGxlOiBrZXl3b3JkVmlsbGVWYWx1ZSxcclxuICAgICAgc2VhcmNoVmlsbGU6IHNlYXJjaFZpbGxlVmFsdWVcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgLy8gTWlzZSDDoCBqb3VyIGRlIGwnYWZmaWNoYWdlIGRlcyByw6lzdWx0YXRzIGQnZXhww6lyaWVuY2VzIGNvcnJlc3BvbmRhbnRlcy5cclxuICAgICAgdGhpcy5maWx0ZXJSZXN1bHRzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvLyBBcHBlbMOpIGxvcnNxdWUgbCd1dGlsaXNhdGV1ciBhIHZhbGlkw6kgdW5lIHN1Z2dlc3Rpb24gZGUgZ2VucmVcclxuICB2YWxpZGF0ZUdlbnJlU3VnZ2VzdGlvbihnZW5yZSkge1xyXG4gICAgLy8gTWlzZSDDoCBqb3VyIGRlIGxhIGdlc3Rpb24gZGUgbGEgc2Fpc2llIGR1IGdlbnJlLlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGtleXdvcmRHZW5yZTogZ2VucmUsICAgIC8vIFPDqWxlY3Rpb24gZGUgY2UgZ2VucmVcclxuICAgICAgc2VhcmNoR2VucmU6IFtdICAgICAgICAgLy8gT24gcmVwYXJ0IMOgIHrDqXJvIChkaXNwYXJpdGlvbiBkZXMgc3VnZ2VzdGlvbnMgZGUgZ2VucmVzKVxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICAvLyBNaXNlIMOgIGpvdXIgZGUgbCdhZmZpY2hhZ2UgZGVzIHLDqXN1bHRhdHMgZCdleHDDqXJpZW5jZXMgY29ycmVzcG9uZGFudGVzLlxyXG4gICAgICB0aGlzLmZpbHRlclJlc3VsdHMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gR2VzdGlvbm5haXJlIGQnw6l2w6huZW1lbnQgZGUgbGEgc2Fpc2llIGR1IGdlbnJlXHJcbiAgb25DaGFuZ2VHZW5yZSA9IChldmVudCkgPT4ge1xyXG5cclxuICAgIC8vIFLDqWN1cMOpcmF0aW9uIGRlIGxhIHNhaXNpZSBkZSBsJ3V0aWxpc2F0ZXVyIGRhbnMgbGUgaW5wdXQuXHJcbiAgICBjb25zdCBrZXl3b3JkR2VucmVWYWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcblxyXG4gICAgaWYgKGtleXdvcmRHZW5yZVZhbHVlLnRyaW0oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsga2V5d29yZEdlbnJlOiAnJywgc2VhcmNoR2VucmU6IFtdIH0pXHJcbiAgICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAgKiBBdSBkw6lidXQgaWwgbid5IGEgcGFzIGRlIHN1Z2dlc3Rpb25zIGRlIGdlbnJlLlxyXG4gICAgICpcclxuICAgICAqIEMnZXN0IHVuIGVuc2VtYmxlIChjbGFzc2UgU2V0KSA6IGNlbGEgc2lnbmlmaWUgcXUnaWwgbid5IGF1cmEgcGFzIGRlIGRvdWJsb25zIGRlIGdlbnJlXHJcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TZXRcclxuICAgICAqL1xyXG4gICAgbGV0IGdlbnJlcyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAvLyBSZWNoZXJjaGUgbCdleHRyYWl0IGRlIGdlbnJlIHNhaXNpIHBhciBsJ3V0aWxpc2F0ZXVyIChwYXIgZXhlbXBsZSAnYXAnIGRhbnMgJ0phcG9uJylcclxuICAgIGZvciAobGV0IGV4cGVyaWVuY2Ugb2YgdGhpcy5zdGF0ZS5leHBlcmllbmNlcykge1xyXG4gICAgICAvLyBFc3QgY2UgcXVlIGxlIGdlbnJlIGRlIGwnZXhww6lyaWVuY2UgY29udGllbnQgbGEgc2Fpc2llIGRlIGwndXRpbGlzYXRldXIgP1xyXG4gICAgICBpZiAoZXhwZXJpZW5jZS5nZW5yZUNpbmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkR2VucmVWYWx1ZS50b0xvd2VyQ2FzZSgpKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gT3VpLCBham91dCBkdSBnZW5yZSDDoCBsJ2Vuc2VtYmxlIChsZSBTZXQpLlxyXG4gICAgICAgIGdlbnJlcy5hZGQoZXhwZXJpZW5jZS5nZW5yZUNpbmUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIDEtIENvbnZlcnNpb24gZGUgbCdlbnNlbWJsZSAobGUgU2V0KSBlbiB1biB0YWJsZWF1IGF2ZWMgQXJyYXkuZnJvbVxyXG4gICAgICogMi0gVHJpIGRlcyB2YWxldXJzIGR1IHRhYmxlYXUgKGxlcyBub21zIGRlcyBnZW5yZSBkb25jKSBhdmVjIC5zb3J0XHJcbiAgICAgKiAzLSBQb3VyIGNoYXF1ZSBnZW5yZSBjcsOpYXRpb24gZCd1biBKU1ggPGxpPiBwb3VyIGxhIGxpc3RlIGRlcyBzdWdnZXN0aW9ucyBkZSBnZW5yZXNcclxuICAgICAqL1xyXG4gICAgY29uc3Qgc2VhcmNoR2VucmVWYWx1ZSA9IEFycmF5LmZyb20oZ2VucmVzKS5zb3J0KCkubWFwKChnZW5yZSwgaW5kZXgpID0+IHtcclxuICAgICAgLy8gUXVhbmQgb24gY2xpcXVlIHN1ciBsZSA8bGk+IGlsIGVzdCB0ZW1wcyBkZSB2YWxpZGVyIGxhIHN1Z2dlc3Rpb24uXHJcbiAgICAgIHJldHVybiA8bGkga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4geyB0aGlzLnZhbGlkYXRlR2VucmVTdWdnZXN0aW9uKGdlbnJlKSB9fT57Z2VucmV9PC9saT5cclxuICAgIH0pXHJcblxyXG4gICAgLy8gTWlzZSDDoCBqb3VyIGRlIGxhIGdlc3Rpb24gZGUgbGEgc2Fpc2llIGR1IGdlbnJlLlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGtleXdvcmRHZW5yZToga2V5d29yZEdlbnJlVmFsdWUsXHJcbiAgICAgIHNlYXJjaEdlbnJlOiBzZWFyY2hHZW5yZVZhbHVlXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIC8vIE1pc2Ugw6Agam91ciBkZSBsJ2FmZmljaGFnZSBkZXMgcsOpc3VsdGF0cyBkJ2V4cMOpcmllbmNlcyBjb3JyZXNwb25kYW50ZXMuXHJcbiAgICAgIHRoaXMuZmlsdGVyUmVzdWx0cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgLy8gRXN0LWNlIHF1J2lsIG4neSBhIHBhcyBkJ2V4cMOpcmllbmNlIMOgIGFmZmljaGVyID9cclxuXHJcbiAgICAvL05PTiAoZXJyZXVyIGRlIHNhaXNpZSlcclxuICAgIGlmICh0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoID09IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzID0gPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGVycm9yLW1zZyBteS01XCI+IDxpIGNsYXNzPVwiZmFzIGZhLXNhZC10ZWFyXCI+PC9pPiBBdWN1biByw6lzdWx0YXQgdHJvdXbDqSBuZSBjb3JyZXNwb25kIMOgIHZvdHJlIHJlY2hlcmNoZS4gPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxIGlkPVwidGl0cmVDYXRhbG9ndWVcIj5Ew6ljb3V2cmV6IG5vcyBleHDDqXJpZW5jZXMgY2luw6lwaGlsZXM6PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD5EdTo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoYmFyIG1yLTFcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+QXU6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hiYXIgbXItMVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW5kRGF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoYmFyIG1yLTFcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGF5c1wiIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmRDb3VudHJ5fSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUNvdW50cnl9IC8+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ4eHh4eHhcIj57dGhpcy5zdGF0ZS5zZWFyY2hDb3VudHJ5fTwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hiYXIgbXItMVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJWaWxsZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmRWaWxsZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VWaWxsZX0gLz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInh4eHh4eFwiPnt0aGlzLnN0YXRlLnNlYXJjaFZpbGxlfTwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2hiYXIgbXItMVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJHZW5yZSBjaW7DqW1hdG9ncmFoaXF1ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmtleXdvcmRHZW5yZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VHZW5yZX0gLz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInh4eHh4eFwiPnt0aGlzLnN0YXRlLnNlYXJjaEdlbnJlfTwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwic2VhcmNoYmFyXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWUgZGlzYWJsZWQ+TmIgZGUgcGVyczo8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjEgYWR1bHRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yIGFkdWx0ZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjMgYWR1bHRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgey8qIExpc3RlIGRlcyByw6lzdWx0YXRzIHRyb3V2w6lzIGVuIHRlbXBzIHLDqWVsIGVuIGZvbmN0aW9uIGRlIGxhIHNhaXNpZSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0c31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybSAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9