webpackHotUpdate(0,{

/***/ 447:
/*!***************************************!*\
  !*** ./containers/Question/index.tsx ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ../node_modules/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ../node_modules/react-hot-loader/RootInstanceProvider.js */ 11), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ 0);
const react_redux_1 = __webpack_require__(/*! react-redux */ 62);
const components_1 = __webpack_require__(/*! ../../components */ 95);
const random_1 = __webpack_require__(/*! ../../utils/random */ 180);
const surveys_1 = __webpack_require__(/*! ../../constants/surveys */ 94);
var group1 = random_1.getRandomNumberOfUsers(1000);
var group2 = random_1.getRandomNumberOfUsers(1000);
var group3 = random_1.getRandomNumberOfUsers(1000);
var group4 = random_1.getRandomNumberOfUsers(1000);
var group5 = random_1.getRandomNumberOfUsers(1000);
const graphData = [group1, group2, group3, group4, group5];
var dems = random_1.getRandomNumberOfUsers(1000);
var republicans = random_1.getRandomNumberOfUsers(1000);
var independents = random_1.getRandomNumberOfUsers(1000);
var other = random_1.getRandomNumberOfUsers(1000);
let Question = class Question extends React.Component {
    render() {
        const questionId = this.props.match.params.qid;
        const currentSurvey = surveys_1.getSurveyFromId(this.props.surveyId);
        var surveyQuestion = null;
        for (var i = 0; i < currentSurvey.questions.length; i++) {
            if (currentSurvey.questions[i].id === questionId) {
                surveyQuestion = currentSurvey.questions[i];
            }
        }
        var choiceResults = {
            results: []
        };
        surveyQuestion.options.map((questionOption) => {
            var optionCount = random_1.getRandomNumberOfUsers(1000);
            choiceResults.results.push({ choiceName: questionOption, choiceCount: optionCount });
        });
        return (React.createElement("div", { className: "question-container" },
            React.createElement("div", { className: "app-heading" },
                React.createElement("h1", null, "Pollarize")),
            React.createElement("div", { className: "app-content" },
                React.createElement("div", { className: "survey-question" }, surveyQuestion.title),
                React.createElement(components_1.QuestionDetail, { graphData: graphData, splitBarData: {
                        'democrats': dems,
                        'republicans': republicans,
                        'independents': independents,
                        'unidentified': other
                    } })),
            React.createElement(components_1.CounterContainer, { data: choiceResults }),
            React.createElement(components_1.Share, null),
            React.createElement(components_1.TakeAction, null)));
    }
};
Question = __decorate([
    react_redux_1.connect(mapStateToProps, mapDispatchToProps)
], Question);
exports.Question = Question;
function mapStateToProps(state) {
    return {
        surveyId: state.surveyId
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}


/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ../node_modules/react-hot-loader/makeExportsHot.js */ 13); if (makeExportsHot(module, __webpack_require__(/*! react */ 0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ 7)(module)))

/***/ })

})
//# sourceMappingURL=0.184f43a56f09d756e9b2.hot-update.js.map