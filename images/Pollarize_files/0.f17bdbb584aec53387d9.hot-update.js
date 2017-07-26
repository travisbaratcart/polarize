webpackHotUpdate(0,{

/***/ 443:
/*!***************************************!*\
  !*** ./components/SplitBar/index.tsx ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ../node_modules/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ../node_modules/react-hot-loader/RootInstanceProvider.js */ 11), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ 0);
class SplitBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { data } = this.props;
        var d = data.democrats, r = data.republicans, i = data.independents, u = data.unidentified;
        var total = d + r + i + u;
        return (React.createElement("div", { className: "splitbar-container" },
            React.createElement("p", null, "Distribution of voters"),
            React.createElement("div", { className: "splitbar-content" },
                React.createElement("div", { style: { width: (d / total) * 100 + '%' }, className: "democrats" },
                    React.createElement("span", null, "Democrats")),
                React.createElement("div", { style: { width: (r / total) * 100 + '%' }, className: "republicans" },
                    React.createElement("span", null, "Republicans")),
                React.createElement("div", { style: { width: (i / total) * 100 + '%' }, className: "independents" },
                    React.createElement("span", null, "Independents")),
                React.createElement("div", { style: { width: (u / total) * 100 + '%' }, className: "unidentified" },
                    React.createElement("span", null, "\u00A0")))));
    }
}
exports.SplitBar = SplitBar;


/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../node_modules/react-hot-loader/makeExportsHot.js */ 13); if (makeExportsHot(module, __webpack_require__(/*! react */ 0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 7)(module)))

/***/ })

})
//# sourceMappingURL=0.f17bdbb584aec53387d9.hot-update.js.map