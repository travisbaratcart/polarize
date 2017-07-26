webpackHotUpdate(0,{

/***/ 96:
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/sass-loader!../sass/app.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ 449)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i);", ""]);

// module
exports.push([module.i, "html {\n  background-color: #ccc; }\n\nbody {\n  font-family: 'Lato', sans-serif;\n  width: 414px;\n  margin: 0 auto;\n  background-color: white;\n  box-shadow: 0px 0px 10px 0px rgba(34, 34, 34, 0.5);\n  font-weight: 300; }\n\n.app-heading {\n  background: linear-gradient(to right, #1e5799 0%, #0e72f4 0%, #ffffff 54%, #ff2828 100%); }\n  .app-heading h1 {\n    font-size: 20px;\n    font-weight: 400;\n    margin: 0;\n    color: white;\n    padding: 16px 0 16px 16px; }\n    .app-heading h1 a {\n      color: white;\n      text-decoration: none; }\n      .app-heading h1 a:hover {\n        text-decoration: none; }\n  .app-heading ul {\n    list-style-type: none;\n    padding: 3px 16px 0;\n    margin: 0px 0 0 0;\n    background-color: #01057f; }\n  .app-heading li {\n    display: inline-block;\n    color: white;\n    padding: 5px 10px;\n    margin-right: 30px;\n    font-size: 14px; }\n    .app-heading li a,\n    .app-heading li a:hover,\n    .app-heading li a:active {\n      color: white;\n      text-decoration: none; }\n    .app-heading li.selected {\n      border-bottom: 4px solid #1ff8ea; }\n\n.app-footer p {\n  width: 120px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 10px 10px 30px 15px;\n  font-size: 12px;\n  background: url(" + __webpack_require__(/*! ../images/logo.png */ 450) + ") 0 5px no-repeat transparent;\n  background-size: 25px 25px; }\n\n.card-container {\n  margin: 10px;\n  border: 1px solid #eee;\n  box-shadow: 0px 0px 10px 0px rgba(34, 34, 34, 0.5);\n  position: relative; }\n  .card-container:not(:last-child) {\n    margin-bottom: 40px; }\n  .card-container .card-no {\n    position: absolute;\n    top: -15px;\n    left: -15px;\n    background-color: #e20029;\n    border-radius: 20px;\n    text-align: center;\n    padding: 5px;\n    height: 20px;\n    width: 20px;\n    color: white;\n    font-weight: 500;\n    border: 2px solid white;\n    box-shadow: 0px 0px 5px 0px rgba(34, 34, 34, 0.5); }\n  .card-container .heading {\n    background-color: #eee; }\n    .card-container .heading h1 {\n      font-size: 15px;\n      padding: 16px;\n      margin: 0; }\n  .card-container .content {\n    padding: 16px; }\n    .card-container .content p {\n      font-size: 14px;\n      margin: 0; }\n  .card-container .activity-link {\n    background: url(" + __webpack_require__(/*! ../images/activity.png */ 451) + ") no-repeat transparent;\n    background-size: 18px 16px;\n    padding-left: 9px;\n    color: #499bea;\n    text-decoration: none;\n    text-align: center;\n    font-size: 12px;\n    width: 135px;\n    margin: 0 auto;\n    display: block;\n    line-height: 18px; }\n  .card-container .options-list {\n    margin: 10px 0;\n    padding-bottom: 5px; }\n    .card-container .options-list input {\n      float: left;\n      width: 15px;\n      height: 15px; }\n    .card-container .options-list label {\n      margin-left: 5px;\n      display: block;\n      padding-left: 20px; }\n\n.examplecomponent-container {\n  font-weight: 600; }\n\n.survey-content {\n  position: relative; }\n  .survey-content .submit-button {\n    position: fixed;\n    bottom: 0;\n    width: 414px;\n    background-color: white;\n    padding: 13px 0;\n    border-top: 1px solid #eee;\n    margin-left: -20px;\n    box-shadow: 0px 0px 5px 0px rgba(34, 34, 34, 0.1); }\n  .survey-content button {\n    text-align: center;\n    background-color: #499bea;\n    color: white;\n    border: none;\n    padding: 10px 30px;\n    border-radius: 5px;\n    width: 300px;\n    margin: 0 auto;\n    font-size: 14px;\n    display: block; }\n    .survey-content button:hover {\n      cursor: pointer; }\n  .survey-content .author-info {\n    background-color: #d8d8d8;\n    padding: 16px; }\n  .survey-content .constituency-level img {\n    height: 15px;\n    vertical-align: middle;\n    margin-right: 5px; }\n  .survey-content .constituency-level span {\n    vertical-align: middle;\n    text-transform: uppercase;\n    font-size: 14px; }\n  .survey-content .constituency-population {\n    display: inline-block;\n    font-size: 45px;\n    margin-right: 10px; }\n  .survey-content .constituency-location {\n    display: inline-block;\n    font-size: 14px; }\n    .survey-content .constituency-location span {\n      display: block; }\n  .survey-content .author-details {\n    margin: 14px 0; }\n    .survey-content .author-details img {\n      height: 50px;\n      display: inline-block;\n      vertical-align: middle;\n      border-radius: 50%;\n      margin-right: 8px; }\n  .survey-content .author-details-text {\n    display: inline-block;\n    vertical-align: middle; }\n  .survey-content .author-affiliation {\n    display: block; }\n  .survey-content .survey-questions {\n    padding: 20px; }\n\n.surveyanswer-container {\n  margin: 40px 20px 40px 20px; }\n  .surveyanswer-container h1 {\n    padding: 0 25px;\n    font-weight: 400;\n    margin: 0; }\n  .surveyanswer-container h2 {\n    font-weight: 200;\n    color: #999;\n    font-size: 13px;\n    padding: 0 25px; }\n\n.graph-container {\n  text-align: center;\n  margin: 0 auto; }\n\n.splitbar-container {\n  padding: 15px;\n  background-color: #eee;\n  margin: 10px 0; }\n  .splitbar-container p {\n    text-align: center;\n    margin: 5px 0 20px; }\n  .splitbar-container .splitbar-content {\n    width: 100%; }\n    .splitbar-container .splitbar-content div {\n      display: inline-block;\n      background-color: red;\n      height: 10px;\n      text-align: center;\n      font-size: 10px;\n      font-weight: 200;\n      line-height: 40px; }\n    .splitbar-container .splitbar-content span {\n      margin-top: 10px; }\n    .splitbar-container .splitbar-content .democrats {\n      background-color: #4286f4; }\n    .splitbar-container .splitbar-content .republicans {\n      background-color: #e8321e; }\n    .splitbar-container .splitbar-content .independents {\n      background-color: #F3AB30; }\n    .splitbar-container .splitbar-content .unidentified {\n      background-color: #80146C; }\n\n.questiondetail-container {\n  font-weight: 600; }\n\n.counter-element {\n  position: relative;\n  width: 160px;\n  text-align: center;\n  float: left;\n  margin: 1 0 0 0;\n  height: 110px; }\n  .counter-element .content .choiceName {\n    margin: 3px;\n    font-weight: 400;\n    display: -webkit-box;\n    max-width: 400px;\n    margin: 0 auto;\n    font-size: 15px;\n    line-height: 1.4;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .counter-element .content .choiceCount {\n    font-size: 30px;\n    font-weight: 500; }\n\n.counter-container {\n  margin: 0px; }\n\n.counter-container:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.share-container .share-content {\n  text-align: center;\n  padding: 20px; }\n  .share-container .share-content img {\n    width: 29px;\n    height: 29px; }\n  .share-container .share-content .share-btn {\n    text-align: center;\n    display: inline-block;\n    margin: 10px; }\n  .share-container .share-content .share-message {\n    font-weight: bold; }\n\n.take-action-container .take-action-content {\n  text-align: center; }\n  .take-action-container .take-action-content .take-action-message {\n    font-weight: bold; }\n  .take-action-container .take-action-content .actions-container {\n    padding: 10px; }\n  .take-action-container .take-action-content .take-action-icon {\n    margin: 10px; }\n    .take-action-container .take-action-content .take-action-icon img {\n      width: 29px;\n      height: 29px; }\n\n.survey-question {\n  text-align: center;\n  padding: 10px;\n  font-weight: 200;\n  font-size: large; }\n\n.question-container .app-content {\n  padding: 16px; }\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.b1df371e5fa3f519486d.hot-update.js.map