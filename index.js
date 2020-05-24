"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iframeResizer = _interopRequireDefault(require("iframe-resizer"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Iframe = function Iframe(_ref) {
  var id = _ref.id,
      src = _ref.src,
      origins = _ref.origins,
      resize = _ref.resize,
      resizeLog = _ref.resizeLog;
  var iframeRef = (0, _react.useRef)();
  var resizeOptions = {
    log: resizeLog,
    warningTimeout: 10000,
    onResized: function onResized(e) {
      e.iframe.parentNode.classList.remove("wpc-iframe-wrapper--loading");
    }
  };

  if (origins.length > 0) {
    resizeOptions.checkOrigin = origins;
  }

  (0, _react.useEffect)(function () {
    resize && _iframeResizer["default"].iframeResizer(resizeOptions, "#" + iframeRef.current.id);
  }, []);
  var wrapperAttr = {
    className: "wpc-iframe-wrapper"
  };
  var iframeAttr = {
    ref: iframeRef,
    id: id,
    src: src,
    className: "wpc-iframe"
  };

  if (resize) {
    wrapperAttr.className += " wpc-iframe-wrapper--loading";
    iframeAttr.className += " wpc-iframe--resize";
  }

  return /*#__PURE__*/_react["default"].createElement("div", wrapperAttr, resize && /*#__PURE__*/_react["default"].createElement("div", {
    className: "wpc-iframe-wrapper__loading"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "The form is loading.")), /*#__PURE__*/_react["default"].createElement("iframe", iframeAttr));
};

Iframe.defaultProps = {
  id: "wpcIframe",
  resize: true,
  origins: [],
  resizeLog: false
};
Iframe.propTypes = {
  id: _propTypes["default"].string,
  src: _propTypes["default"].string.isRequired,
  resize: _propTypes["default"].bool,
  origins: _propTypes["default"].array,
  resizeLog: _propTypes["default"].bool
};
var _default = Iframe;
exports["default"] = _default;
