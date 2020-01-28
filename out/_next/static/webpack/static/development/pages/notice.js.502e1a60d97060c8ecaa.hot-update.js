webpackHotUpdate("static\\development\\pages\\notice.js",{

/***/ "./pages/notice.js":
/*!*************************!*\
  !*** ./pages/notice.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Develop Work\\onen\\pages\\notice.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NoticePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("http://onen.co.kr/notices").then(function (response) {
      return response.json();
    }).then(function (data) {
      return setData(data);
    });
  }, []);

  var openNotice = function openNotice(target) {
    var el = document.getElementById("notice" + target);

    if (el) {
      if (el.style.display !== 'block') el.style.display = 'block';else el.style.display = 'none';
    }
  };

  return __jsx("div", {
    className: "jsx-343086068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-343086068" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\uC6D0\uC564\uC758 \uC0C8\uB85C\uC6B4 \uC18C\uC2DD\uC785\uB2C8\uB2E4"), __jsx("ul", {
    className: "jsx-343086068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-343086068" + " " + "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-343086068" + " " + "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-343086068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\uBC88\uD638"), __jsx("div", {
    className: "jsx-343086068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\uC81C\uBAA9"), __jsx("div", {
    className: "jsx-343086068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\uB4F1\uB85D\uC77C"))), data.map(function (each, idx) {
    return __jsx("li", {
      key: 'b' + idx,
      className: "jsx-343086068",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      onClick: openNotice.bind(null, each.id),
      className: "jsx-343086068" + " " + "box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-343086068",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, data.length - idx), __jsx("div", {
      className: "jsx-343086068",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, each.title), __jsx("div", {
      className: "jsx-343086068",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, each.created_at.slice(0, 10))), __jsx("div", {
      id: "notice".concat(each.id),
      dangerouslySetInnerHTML: {
        __html: marked__WEBPACK_IMPORTED_MODULE_2___default()(each.content)
      },
      className: "jsx-343086068" + " " + "fold hide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "343086068",
    __self: this
  }, "ul.jsx-343086068,li.jsx-343086068{list-style:none;margin:0;padding:0;}.title.jsx-343086068{font-size:24px;text-align:center;font-weight:bold;margin:50px 0 20px;}ul.jsx-343086068{padding:30px 30px 60px;}.box.jsx-343086068{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:36px;border-bottom:1px solid #aaa;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.fold.jsx-343086068{display:none;padding:40px;}.box.jsx-343086068 div.jsx-343086068:nth-child(1){text-align:center;width:15%;}.box.jsx-343086068 div.jsx-343086068:nth-child(2){width:50%;}.box.jsx-343086068 div.jsx-343086068:nth-child(3){width:30%;}li.head.jsx-343086068{font-weight:bold;border-top:1px solid #000;border-bottom:1px solid #000;}li.jsx-343086068:last-child{border-bottom:1px solid #000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXHBhZ2VzXFxub3RpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURrQixBQUcwQixBQU9ELEFBTVEsQUFHVixBQVFBLEFBS0ssQUFJUixBQUdBLEFBR08sQUFLWSxVQVY5QixBQUdBLEdBWmMsRUFqQkssQ0FQVCxDQXVDaUIsQ0FWaEIsS0FoQlgsRUFaVyxDQXdCWCxFQUtBLENBY0EsSUFwQ2tCLEVBTmxCLFFBc0M4QixPQS9CVixtQkFDcEIsR0ErQkEsRUF6QitCLG1IQUNsQixZQUNpQiw2QkFDViw2RkFDUixXQUNaIiwiZmlsZSI6IkQ6XFxEZXZlbG9wIFdvcmtcXG9uZW5cXHBhZ2VzXFxub3RpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1ha3JlZCBmcm9tICdtYXJrZWQnXHJcblxyXG5mdW5jdGlvbiBOb3RpY2VQYWdlKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL29uZW4uY28ua3Ivbm90aWNlc1wiKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiBzZXREYXRhKGRhdGEpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5Ob3RpY2UgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90aWNlXCIrdGFyZ2V0KTtcclxuICAgIGlmKGVsKSB7XHJcbiAgICAgIGlmKGVsLnN0eWxlLmRpc3BsYXkgIT09ICdibG9jaycpIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBlbHNlIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKCBcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj7sm5DslaTsnZgg7IOI66Gc7Jq0IOyGjOyLneyeheuLiOuLpDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAg67KI7Zi4XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIOygnOuqqVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICDrk7HroZ3snbxcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIHtkYXRhLm1hcCgoZWFjaCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXsnYicraWR4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiBvbkNsaWNrPXtvcGVuTm90aWNlLmJpbmQobnVsbCwgZWFjaC5pZCl9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5sZW5ndGgtaWR4fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZWFjaC50aXRsZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2VhY2guY3JlYXRlZF9hdC5zbGljZSgwLDEwKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e2Bub3RpY2Uke2VhY2guaWR9YH0gY2xhc3NOYW1lPVwiZm9sZCBoaWRlXCIgXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsge19faHRtbDogTWFrcmVkKGVhY2guY29udGVudCl9IH0vPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIHVsLCBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46MDsgXHJcbiAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgbWFyZ2luOjUwcHggMCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nOjMwcHggMzBweCA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgaGVpZ2h0OjM2cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYWFhO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvbGQge1xyXG4gICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgcGFkZGluZzo0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJveCBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6MTUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94IGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94IGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaS5oZWFkIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpY2VQYWdlIl19 */\n/*@ sourceURL=D:\\\\Develop Work\\\\onen\\\\pages\\\\notice.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (NoticePage);

/***/ })

})
//# sourceMappingURL=notice.js.502e1a60d97060c8ecaa.hot-update.js.map