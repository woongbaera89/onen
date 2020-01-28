webpackHotUpdate("static\\development\\pages\\brand.js",{

/***/ "./comps/floatmenu.js":
/*!****************************!*\
  !*** ./comps/floatmenu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Develop Work\\onen\\comps\\floatmenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function floatmenu(_ref) {
  var menu = _ref.menu,
      handleClick = _ref.handleClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      selected = _useState[0],
      setselected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      fixed = _useState2[0],
      setfixed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(36),
      right = _useState3[0],
      setright = _useState3[1];

  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var listener = function listener(e) {
    setfixed(menuRef.current.getBoundingClientRect().top <= 0);
    setright(36 + Math.max((document.body.offsetWidth - 1364) / 2, 0));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", listener);
    return function () {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3947194220", [right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    ref: menuRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3947194220", [right]]]) + " " + ('box ' + fixed || false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3947194220", [right]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, menu.map(function (each, idx) {
    return __jsx("li", {
      key: "m" + idx,
      onClick: function onClick() {
        setselected(idx);
        if (handleClick) handleClick(idx);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3947194220", [right]]]) + " " + (selected == idx || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, each);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3947194220",
    dynamic: [right],
    __self: this
  }, ".box.__jsx-style-dynamic-selector{position:relative;margin-top:-3px;}.box.true.__jsx-style-dynamic-selector ul.__jsx-style-dynamic-selector{position:fixed;top:0;right:".concat(right, "px;z-index:1;}ul.__jsx-style-dynamic-selector,li.__jsx-style-dynamic-selector{list-style:none;margin:0;padding:0;}ul.__jsx-style-dynamic-selector{position:absolute;right:36px;}li.__jsx-style-dynamic-selector{cursor:pointer;font-size:23px;font-weight:bold;height:44px;line-height:40px;padding:0 18px;min-width:80px;border:3px solid #000;background:#fff;display:inline-block;text-align:center;margin-left:-3px;}li.true.__jsx-style-dynamic-selector{background:#FF7575;}@media only screen and (max-width:960px){}@media only screen and (max-width:480px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXGNvbXBzXFxmbG9hdG1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQixBQUc2QixBQUlKLEFBTUMsQUFLRSxBQUlILEFBY0ksZUE1QmIsQUFlUyxDQVROLEVBVk8sQUFlTCxDQWtCWixFQTVCc0MsSUFNM0IsSUFLWCxDQUlrQixJQW5CbEIsQ0FXQSxZQVNhLFdBZkQsQ0FnQk0sU0FmbEIsUUFnQmdCLGVBQ0EsZUFDTyxzQkFDTixnQkFDSyxxQkFDSCxrQkFDRCxpQkFDbEIiLCJmaWxlIjoiRDpcXERldmVsb3AgV29ya1xcb25lblxcY29tcHNcXGZsb2F0bWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIGZsb2F0bWVudSh7bWVudSwgaGFuZGxlQ2xpY2t9KSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRzZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZml4ZWQsIHNldGZpeGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmlnaHQsIHNldHJpZ2h0XSA9IHVzZVN0YXRlKDM2KTtcclxuICBjb25zdCBtZW51UmVmID0gdXNlUmVmKCk7XHJcbiAgXHJcblxyXG4gIGNvbnN0IGxpc3RlbmVyID0gZSA9PiB7XHJcbiAgICBzZXRmaXhlZChtZW51UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDApXHJcbiAgICBzZXRyaWdodCgzNitNYXRoLm1heCgoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aC0xMzY0KS8yLCAwKSlcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoIFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiByZWY9e21lbnVSZWZ9IGNsYXNzTmFtZT17J2JveCAnK2ZpeGVkfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bWVudS5tYXAoKGVhY2gsaWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e1wibVwiK2lkeH0gY2xhc3NOYW1lPXtzZWxlY3RlZCA9PSBpZHh9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRzZWxlY3RlZChpZHgpO1xyXG4gICAgICAgICAgICAgIGlmKGhhbmRsZUNsaWNrKSBoYW5kbGVDbGljayhpZHgpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICB7ZWFjaH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmJveHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6LTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC50cnVlIHVsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICByaWdodDoke3JpZ2h0fXB4O1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwsIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OjM2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOjIzcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgaGVpZ2h0OjQ0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzowIDE4cHg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6ODBweDtcclxuICAgICAgICAgIGJvcmRlcjozcHggc29saWQgIzAwMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDotM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaS50cnVlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6I0ZGNzU3NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmbG9hdG1lbnUiXX0= */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\comps\\\\floatmenu.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (floatmenu);

/***/ })

})
//# sourceMappingURL=brand.js.122f71c155e5e89e250c.hot-update.js.map