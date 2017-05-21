'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Repeat(props) {
  var times = props.times,
      order = props.order,
      wrapper = props.wrapper,
      rest = _objectWithoutProperties(props, ['times', 'order', 'wrapper']);

  var Wrapper = wrapper;

  var items = [];

  if (order === 'asc') {
    for (var i = 0; i < times; i++) {
      items.push(props.children(i));
    }
  }

  if (order === 'desc') {
    for (var _i = times - 1; _i >= 0; _i--) {
      items.push(props.children(_i));
    }
  }

  return _react2.default.createElement(
    Wrapper,
    rest,
    items
  );
}

Repeat.propTypes = {
  times: _propTypes2.default.number.isRequired,
  order: _propTypes2.default.oneOf(['asc', 'desc']).isRequired,
  wrapper: _propTypes2.default.string.isRequired
};

Repeat.defaultProps = {
  order: 'asc',
  wrapper: 'div'
};

exports.default = Repeat;