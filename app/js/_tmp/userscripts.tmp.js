"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.$ = function init(selector) {
  var sq = new SmallQuery(selector);
  return sq;
};

var SmallQuery = /*#__PURE__*/function () {
  function SmallQuery(selector) {
    _classCallCheck(this, SmallQuery);

    this.selector = selector;
    this.elemArr = [];

    if (selector) {
      if (_typeof(selector) != 'object') {
        this.elemArr = document.querySelectorAll(selector);
      } else {
        this.elemArr.push(selector);
      }
    } else {
      this.elemArr = document;
    }
  }

  _createClass(SmallQuery, [{
    key: "debug",
    value: function debug() {
      console.log(this.elemArr);
      return this;
    }
  }, {
    key: "onclick",
    value: function onclick(f) {
      this.on("click", f);
      return this;
    }
  }, {
    key: "on",
    value: function on(eventName, f) {
      this.elemArr.forEach(function (item) {
        item.addEventListener(eventName, function (e) {
          for (var target = e.target; target && target != this; target = target.parentNode) {
            if (target.matches(this.selector)) {
              handler.call(target, e);
              break;
            }
          }

          f.bind(this)(); //привязали контекст f к объекту SmallQuery
          //console.log(this);
        }, false);
      });
      return this;
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(cls) {
      this.elemArr.forEach(function (item) {
        item.classList.toggle(cls);
      });
      return this;
    }
  }, {
    key: "addClass",
    value: function addClass(cls) {
      this.elemArr.forEach(function (item) {
        item.classList.add(cls);
      });
      return this;
    }
  }, {
    key: "removeClass",
    value: function removeClass(cls) {
      this.elemArr.forEach(function (item) {
        item.classList.remove(cls);
      });
      return this;
    }
  }]);

  return SmallQuery;
}();

document.addEventListener("DOMContentLoaded", function () {
  $('.burger').onclick(function f() {
    $(this).toggleClass("-active");
    $('.header__slider-menu').toggleClass("-active");
    $('body').toggleClass("no-scroll");
  });
});