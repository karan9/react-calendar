'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mergeClassNames = require('merge-class-names');

var _mergeClassNames2 = _interopRequireDefault(_mergeClassNames);

var _propTypes3 = require('./shared/propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tile = function (_Component) {
  _inherits(Tile, _Component);

  function Tile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tile.__proto__ || Object.getPrototypeOf(Tile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          activeStartDate = _props.activeStartDate,
          children = _props.children,
          classes = _props.classes,
          date = _props.date,
          formatAbbr = _props.formatAbbr,
          locale = _props.locale,
          maxDate = _props.maxDate,
          maxDateTransform = _props.maxDateTransform,
          minDate = _props.minDate,
          minDateTransform = _props.minDateTransform,
          onClick = _props.onClick,
          onMouseOver = _props.onMouseOver,
          style = _props.style,
          tileDisabled = _props.tileDisabled,
          view = _props.view;
      var _state = this.state,
          tileClassName = _state.tileClassName,
          tileContent = _state.tileContent;


      return _react2.default.createElement(
        'button',
        {
          className: (0, _mergeClassNames2.default)(classes, tileClassName),
          disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({ activeStartDate: activeStartDate, date: date, view: view }),
          onClick: onClick && function () {
            return onClick(date);
          },
          onMouseOver: onMouseOver && function () {
            return onMouseOver(date);
          },
          onFocus: onMouseOver && function () {
            return onMouseOver(date);
          },
          style: style,
          type: 'button'
        },
        formatAbbr ? _react2.default.createElement(
          'abbr',
          { 'aria-label': formatAbbr(locale, date) },
          children
        ) : children,
        tileContent
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var date = nextProps.date,
          tileClassName = nextProps.tileClassName,
          tileContent = nextProps.tileContent,
          view = nextProps.view;


      var nextState = {};

      if (tileClassName !== prevState.tileClassNameProps) {
        nextState.tileClassName = typeof tileClassName === 'function' ? tileClassName({ date: date, view: view }) : tileClassName;
        nextState.tileClassNameProps = tileClassName;
      }

      if (tileContent !== prevState.tileContentProps) {
        nextState.tileContent = typeof tileContent === 'function' ? tileContent({ date: date, view: view }) : tileContent;
        nextState.tileContentProps = tileContent;
      }

      return nextState;
    }
  }]);

  return Tile;
}(_react.Component);

exports.default = Tile;


Tile.propTypes = _extends({}, _propTypes3.tileProps, {
  children: _propTypes2.default.node.isRequired,
  formatAbbr: _propTypes2.default.func,
  maxDateTransform: _propTypes2.default.func.isRequired,
  minDateTransform: _propTypes2.default.func.isRequired
});