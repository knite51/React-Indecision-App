'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      count: props.count
    };
    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.handleMinus = _this.handleMinus.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        var number = this.state.count;
        localStorage.setItem('count', number);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var stringNumber = localStorage.getItem('count');
        var number = parseInt(stringNumber, 10);

        if (!isNaN(number)) {
          this.setState(function () {
            return { count: number };
          });
        }
      } catch (err) {
        // DO NOTHING!
      }
    }
  }, {
    key: 'handleAdd',
    value: function handleAdd() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinus',
    value: function handleMinus() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count,
          ' '
        ),
        React.createElement(
          'button',
          { onClick: this.handleAdd },
          '+'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinus },
          '-'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

;

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
