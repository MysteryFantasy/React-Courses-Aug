var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var animals = [{ type: 'turtle', icon: '\uD83D\uDC22' }, { type: 'octopus', icon: '\uD83D\uDC19' }, { type: 'fish', icon: '\uD83D\uDC20' }, { type: 'flamingo', icon: '\uD83E\uDDA9' }, { type: 'penguin', icon: '\uD83D\uDC27' }];

var indexesList = animals.map(function (item, index) {
  return index;
});

var AnimalsList = function (_React$Component) {
  _inherits(AnimalsList, _React$Component);

  function AnimalsList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AnimalsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimalsList.__proto__ || Object.getPrototypeOf(AnimalsList)).call.apply(_ref, [this].concat(args))), _this), _this.state = Object.assign({
      borderWidth: 0
    }, _this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AnimalsList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var addActiveClass = setInterval(function () {

        var randomIndex = Math.floor(Math.random() * indexesList.length);
        var randomIndexValue = indexesList[randomIndex];

        indexesList.splice(randomIndex, 1);

        _this2.setState({
          list: _this2.state.list.map(function (item, index) {
            if (index === randomIndexValue) item.active = true;
            return item;
          })
        }, function () {
          if (!indexesList.length) {
            clearInterval(addActiveClass);
            _this2.setState({
              borderWidth: 20
            });
          }
          if (indexesList.length === Math.floor(_this2.state.list.length / 2)) {
            _this2.setState({
              borderWidth: 10
            });
          }
        });
      }, 2000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          _state$list = _state.list,
          list = _state$list === undefined ? [] : _state$list,
          borderWidth = _state.borderWidth;

      return list.length ? React.createElement(
        'table',
        { style: { borderWidth: borderWidth } },
        React.createElement(
          'tbody',
          null,
          list.map(function (item, index) {
            return React.createElement(
              'tr',
              { key: index, className: item.active && 'item--active' },
              Object.keys(item).filter(function (value) {
                return value !== 'active';
              }).map(function (value, ind) {
                return React.createElement(
                  'td',
                  { key: ind },
                  item[value]
                );
              })
            );
          })
        )
      ) : null;
    }
  }]);

  return AnimalsList;
}(React.Component);

var App = React.createElement(
  React.Fragment,
  null,
  React.createElement(AnimalsList, { list: animals })
);

root.render(App);