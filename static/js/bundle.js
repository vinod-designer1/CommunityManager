(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var AddUrlFormActions = (function () {
  function AddUrlFormActions() {
    _classCallCheck(this, AddUrlFormActions);

    this.generateActions('updateNewUrl', 'storeNewUrlSuccess', 'storeNewUrlFail', 'updateCommunityId');
  }

  _createClass(AddUrlFormActions, [{
    key: 'storeNewUrl',
    value: function storeNewUrl(payload) {
      var _this = this;

      var url = payload.url,
          communities = payload.communities;

      $.post('/api/url/add', { url: url, communities: communities }, function () {}).done(function (data) {
        _this.actions.storeNewUrlSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.storeNewUrlFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddUrlFormActions;
})();

exports['default'] = _alt2['default'].createActions(AddUrlFormActions);
module.exports = exports['default'];

},{"../alt":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var CommunityCardActions = (function () {
  function CommunityCardActions() {
    _classCallCheck(this, CommunityCardActions);

    this.generateActions('getCommunityInfoSuccess', 'getCommunityInfoFail', 'setActiveCommunityName', 'removeCommunitySuccess', 'removeCommunityFail');
  }

  _createClass(CommunityCardActions, [{
    key: 'removeCommunity',
    value: function removeCommunity(communityid) {
      var _this = this;

      $.ajax({
        url: '/api/community/' + communityid,
        type: 'DELETE'
      }).done(function (data) {
        _this.actions.removeCommunitySuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.removeCommunityFail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'getCommunityInfo',
    value: function getCommunityInfo(communityid, communityName) {
      var _this2 = this;

      this.actions.setActiveCommunityName(communityName);

      $.ajax({ url: '/api/community/' + communityid }).done(function (data) {
        _this2.actions.getCommunityInfoSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getCommunityInfoFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return CommunityCardActions;
})();

exports['default'] = _alt2['default'].createActions(CommunityCardActions);
module.exports = exports['default'];

},{"../alt":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var CommunityListActions = (function () {
  function CommunityListActions() {
    _classCallCheck(this, CommunityListActions);

    this.generateActions('saveCommunitySuccess', 'saveCommunityFail', 'updateNewCommunityName', 'updateNewCommunityDesc');
  }

  _createClass(CommunityListActions, [{
    key: 'saveCommunity',
    value: function saveCommunity(payload) {
      var _this = this;

      $.post('/api/community/add', payload, function () {}).done(function (data) {
        _this.actions.saveCommunitySuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.saveCommunityFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return CommunityListActions;
})();

exports['default'] = _alt2['default'].createActions(CommunityListActions);
module.exports = exports['default'];

},{"../alt":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var HomeActions = (function () {
  function HomeActions() {
    _classCallCheck(this, HomeActions);

    this.generateActions('getCommunitiesSuccess', 'getCommunitiesFail');
  }

  _createClass(HomeActions, [{
    key: 'getCommunities',
    value: function getCommunities() {
      var _this = this;

      $.ajax({ url: '/api/communities' }).done(function (data) {
        _this.actions.getCommunitiesSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getCommunitiesFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return HomeActions;
})();

exports['default'] = _alt2['default'].createActions(HomeActions);
module.exports = exports['default'];

},{"../alt":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],6:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _actionsAddUrlFormActions = require('../actions/AddUrlFormActions');

var _actionsAddUrlFormActions2 = _interopRequireDefault(_actionsAddUrlFormActions);

var _storesAddUrlFormStore = require('../stores/AddUrlFormStore');

var _storesAddUrlFormStore2 = _interopRequireDefault(_storesAddUrlFormStore);

var AddUrlForm = (function (_React$Component) {
  _inherits(AddUrlForm, _React$Component);

  function AddUrlForm(props) {
    _classCallCheck(this, AddUrlForm);

    _get(Object.getPrototypeOf(AddUrlForm.prototype), 'constructor', this).call(this, props);
    this.state = _storesAddUrlFormStore2['default'].getState();
    this._onChange = this._onChange.bind(this);
  }

  _createClass(AddUrlForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesAddUrlFormStore2['default'].listen(this._onChange);
      $('.modal-trigger').leanModal();
      //$('select').material_select();
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      _storesAddUrlFormStore2['default'].unlisten(this._onChange);
    }
  }, {
    key: '_onChange',
    value: function _onChange(state) {
      this.setState(state);
    }
  }, {
    key: '_addNewUrl',
    value: function _addNewUrl() {
      var newurl = this.state.newurl.trim();
      var communities = [this.state.selectedcommunityId];

      if (newurl) {
        var payload = {
          url: newurl,
          communities: communities
        };

        _actionsAddUrlFormActions2['default'].storeNewUrl(payload);
      }

      this._removeLeanOverlay();
    }
  }, {
    key: '_removeLeanOverlay',
    value: function _removeLeanOverlay() {
      $('.lean-overlay').remove();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'container' },
          _react2['default'].createElement(
            'form',
            { className: 'row' },
            _react2['default'].createElement(
              'div',
              { className: 'input-field col s11' },
              _react2['default'].createElement('input', { id: 'url', type: 'url', value: this.state.newurl, onChange: _actionsAddUrlFormActions2['default'].updateNewUrl, className: 'validate' }),
              _react2['default'].createElement(
                'label',
                { 'for': 'url' },
                'Url'
              )
            ),
            _react2['default'].createElement(
              'a',
              {
                'data-target': 'addcommunitiesmodel',
                className: 'btn btn-large waves-effect col s1 waves-light tooltipped modal-trigger',
                'data-position': 'bottom', 'data-delay': '50', 'data-tooltip': 'Add Url'
              },
              _react2['default'].createElement(
                'i',
                { className: 'material-icons' },
                'add'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { id: 'addcommunitiesmodel', className: 'modal' },
          _react2['default'].createElement(
            'div',
            { className: 'modal-content' },
            _react2['default'].createElement(
              'h4',
              null,
              'Add communities to add to'
            ),
            _react2['default'].createElement(
              'p',
              null,
              _react2['default'].createElement(
                'div',
                { className: 'input-field' },
                _react2['default'].createElement(
                  'select',
                  { className: 'browser-default', onChange: _actionsAddUrlFormActions2['default'].updateCommunityId },
                  _react2['default'].createElement(
                    'option',
                    { value: '', disabled: true, selected: true },
                    'Choose your option'
                  ),
                  this.props.communities.map(function (community) {
                    return _react2['default'].createElement(
                      'option',
                      { value: community._id },
                      community.name
                    );
                  })
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'modal-footer' },
            _react2['default'].createElement(
              'a',
              { href: '#!', onClick: this._addNewUrl.bind(this), className: 'modal-action modal-close waves-effect waves-green btn-flat' },
              'Add New Url'
            ),
            _react2['default'].createElement(
              'a',
              { href: '#!', onClick: this._removeLeanOverlay, className: 'modal-action modal-close waves-effect waves-green btn-flat' },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return AddUrlForm;
})(_react2['default'].Component);

AddUrlForm.propTypes = {
  communities: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.object).isRequired
};

exports['default'] = AddUrlForm;
module.exports = exports['default'];

},{"../actions/AddUrlFormActions":1,"../stores/AddUrlFormStore":15,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Navbar2['default'], null),
        _react2['default'].createElement(_reactRouter.RouteHandler, null),
        _react2['default'].createElement(_Footer2['default'], null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./Footer":10,"./Navbar":12,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsCommunityCardActions = require('../actions/CommunityCardActions');

var _actionsCommunityCardActions2 = _interopRequireDefault(_actionsCommunityCardActions);

var _storesCommunityCardStore = require('../stores/CommunityCardStore');

var _storesCommunityCardStore2 = _interopRequireDefault(_storesCommunityCardStore);

var CommunityCard = (function (_React$Component) {
  _inherits(CommunityCard, _React$Component);

  function CommunityCard(props) {
    _classCallCheck(this, CommunityCard);

    _get(Object.getPrototypeOf(CommunityCard.prototype), 'constructor', this).call(this, props);
    this.state = _storesCommunityCardStore2['default'].getState();
    this._onChange = this._onChange.bind(this);
  }

  _createClass(CommunityCard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesCommunityCardStore2['default'].listen(this._onChange);
      $('.modal-trigger').leanModal();
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      _storesCommunityCardStore2['default'].unlisten(this._onChange);
    }
  }, {
    key: '_onChange',
    value: function _onChange(state) {
      this.setState(state);
    }
  }, {
    key: '_populateCurrentCommunity',
    value: function _populateCurrentCommunity(id) {
      _actionsCommunityCardActions2['default'].getCommunityInfo(this.props.community._id, this.props.community.name);
    }
  }, {
    key: '_removeLeanOverlay',
    value: function _removeLeanOverlay() {
      $('.lean-overlay').remove();
    }
  }, {
    key: '_deleteCommunity',
    value: function _deleteCommunity() {
      _actionsCommunityCardActions2['default'].removeCommunity(this.props.community._id);
    }
  }, {
    key: 'render',
    value: function render() {
      var community = this.props.community;
      var modelid = "showCommunityLinks" + community._id;
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'col s12 m4 l4' },
          _react2['default'].createElement(
            'div',
            { className: 'card blue-grey darken-1' },
            _react2['default'].createElement(
              'div',
              { className: 'card-content white-text modal-trigger', 'data-target': modelid, onClick: this._populateCurrentCommunity.bind(this) },
              _react2['default'].createElement(
                'span',
                { className: 'card-title' },
                community.name
              ),
              _react2['default'].createElement(
                'p',
                null,
                community.desc
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'card-action' },
              _react2['default'].createElement(
                'a',
                { className: 'waves-effect waves-light', onClick: this._deleteCommunity.bind(this), href: '#' },
                'Remove'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { id: modelid, className: 'modal' },
          _react2['default'].createElement(
            'div',
            { className: 'modal-content' },
            _react2['default'].createElement(
              'h4',
              null,
              this.state.activeCommunityName
            ),
            _react2['default'].createElement(
              'p',
              null,
              this.state.activeCommunityLinks.map(function (link) {
                return _react2['default'].createElement(
                  'div',
                  { className: 'row' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'col s12 m12' },
                    _react2['default'].createElement(
                      'div',
                      { className: 'card grey darken-1' },
                      _react2['default'].createElement(
                        'div',
                        { className: 'card-content white-text' },
                        _react2['default'].createElement(
                          'span',
                          { className: 'card-title' },
                          _react2['default'].createElement(
                            'a',
                            { href: link.url, style: { color: '#fff' }, target: '_blank' },
                            link.url
                          )
                        )
                      )
                    )
                  )
                );
              })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'modal-footer' },
            _react2['default'].createElement(
              'a',
              { href: '#!', onClick: this._removeLeanOverlay, className: 'modal-action modal-close waves-effect waves-green btn-flat' },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return CommunityCard;
})(_react2['default'].Component);

CommunityCard.propTypes = {
  community: _react2['default'].PropTypes.object.isRequired
};

exports['default'] = CommunityCard;
module.exports = exports['default'];

},{"../actions/CommunityCardActions":2,"../stores/CommunityCardStore":16,"react":"react"}],9:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CommunityCard = require('./CommunityCard');

var _CommunityCard2 = _interopRequireDefault(_CommunityCard);

var _actionsCommunityListActions = require('../actions/CommunityListActions');

var _actionsCommunityListActions2 = _interopRequireDefault(_actionsCommunityListActions);

var _storesCommunityListStore = require('../stores/CommunityListStore');

var _storesCommunityListStore2 = _interopRequireDefault(_storesCommunityListStore);

var CommunityList = (function (_React$Component) {
  _inherits(CommunityList, _React$Component);

  function CommunityList(props) {
    _classCallCheck(this, CommunityList);

    _get(Object.getPrototypeOf(CommunityList.prototype), 'constructor', this).call(this, props);
    this.state = _storesCommunityListStore2['default'].getState();
    this._onChange = this._onChange.bind(this);
  }

  _createClass(CommunityList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesCommunityListStore2['default'].listen(this._onChange);
      $('.modal-trigger').leanModal();
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      _storesCommunityListStore2['default'].unlisten(this._onChange);
    }
  }, {
    key: '_onChange',
    value: function _onChange(state) {
      this.setState(state);
    }
  }, {
    key: '_addNewCommunity',
    value: function _addNewCommunity() {
      var name = this.state.newCommunityName,
          desc = this.state.newCommunityDesc;

      var payload = {
        name: name,
        desc: desc
      };

      _actionsCommunityListActions2['default'].saveCommunity(payload);

      this._removeLeanOverlay();
    }
  }, {
    key: '_removeLeanOverlay',
    value: function _removeLeanOverlay() {
      $('.lean-overlay').remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var communities = this.props.communities;
      return _react2['default'].createElement(
        'div',
        { className: 'community-container container' },
        _react2['default'].createElement(
          'div',
          { className: 'col s12 m4 l4' },
          _react2['default'].createElement(
            'div',
            { className: 'card blue-grey darken-1 modal-trigger', 'data-target': 'addcommunitymodel' },
            _react2['default'].createElement(
              'div',
              { className: 'card-content white-text' },
              _react2['default'].createElement(
                'i',
                { className: 'material-icons' },
                'add'
              ),
              _react2['default'].createElement(
                'span',
                { className: 'card-title' },
                'Add Community '
              )
            )
          )
        ),
        communities.map(function (community) {
          return _react2['default'].createElement(_CommunityCard2['default'], { key: community.id, community: community });
        }),
        _react2['default'].createElement(
          'div',
          { id: 'addcommunitymodel', className: 'modal' },
          _react2['default'].createElement(
            'div',
            { className: 'modal-content' },
            _react2['default'].createElement(
              'h4',
              null,
              'Add Community'
            ),
            _react2['default'].createElement(
              'p',
              null,
              _react2['default'].createElement(
                'form',
                { className: 'col s12' },
                _react2['default'].createElement(
                  'div',
                  { className: 'row' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'input-field col s12' },
                    _react2['default'].createElement('input', { placeholder: 'Community Name', value: this.state.newCommunityName, onChange: _actionsCommunityListActions2['default'].updateNewCommunityName, id: 'community_name', type: 'text', className: 'validate' }),
                    _react2['default'].createElement(
                      'label',
                      { 'for': 'community_name' },
                      'Community Name'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'row' },
                  _react2['default'].createElement(
                    'div',
                    { className: 'input-field col s12' },
                    _react2['default'].createElement('textarea', { id: 'desc', onChange: _actionsCommunityListActions2['default'].updateNewCommunityDesc, value: this.state.newCommunityDesc, className: 'materialize-textarea' }),
                    _react2['default'].createElement(
                      'label',
                      { 'for': 'desc' },
                      'Description'
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'modal-footer' },
            _react2['default'].createElement(
              'a',
              { href: '#!', onClick: this._addNewCommunity.bind(this), className: 'modal-action modal-close waves-effect waves-green btn-flat' },
              'Create New Community'
            ),
            _react2['default'].createElement(
              'a',
              { href: '#!', onClick: this._removeLeanOverlay, className: 'modal-action modal-close waves-effect waves-green btn-flat' },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return CommunityList;
})(_react2['default'].Component);

CommunityList.propTypes = {
  communities: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.object).isRequired
};

exports['default'] = CommunityList;
module.exports = exports['default'];

},{"../actions/CommunityListActions":3,"../stores/CommunityListStore":17,"./CommunityCard":8,"react":"react"}],10:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Footer = (function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    _get(Object.getPrototypeOf(Footer.prototype), "constructor", this).call(this, props);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "footer",
        { className: "page-footer" },
        _react2["default"].createElement(
          "div",
          { className: "footer-copyright" },
          _react2["default"].createElement(
            "div",
            { className: "container" },
            "© 2014 Copyright Vinod"
          )
        )
      );
    }
  }]);

  return Footer;
})(_react2["default"].Component);

exports["default"] = Footer;
module.exports = exports["default"];

},{"react":"react"}],11:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CommunityList = require('./CommunityList');

var _CommunityList2 = _interopRequireDefault(_CommunityList);

var _AddUrlForm = require('./AddUrlForm');

var _AddUrlForm2 = _interopRequireDefault(_AddUrlForm);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var _storesHomeStore = require('../stores/HomeStore');

var _storesHomeStore2 = _interopRequireDefault(_storesHomeStore);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
    this.state = _storesHomeStore2['default'].getState();
    this._onChange = this._onChange.bind(this);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesHomeStore2['default'].listen(this._onChange);
      _actionsHomeActions2['default'].getCommunities();
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      _storesHomeStore2['default'].unlisten(this._onChange);
    }
  }, {
    key: '_onChange',
    value: function _onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      var communities = this.state.communities;
      console.log(communities);

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { id: 'communities', className: 'col s12' },
            _react2['default'].createElement(_CommunityList2['default'], { communities: communities })
          )
        ),
        _react2['default'].createElement(_AddUrlForm2['default'], { communities: communities })
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"../actions/HomeActions":4,"../stores/HomeStore":18,"./AddUrlForm":6,"./CommunityList":9,"react":"react"}],12:[function(require,module,exports){
/**
 * @jsx React.DOM
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var Navbar = (function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    _get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).call(this, props);
    this._onChange = this._onChange.bind(this);
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {}
  }, {
    key: '_onChange',
    value: function _onChange(state) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'nav',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'nav-wrapper' },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/', className: 'brand-logo' },
            'Community Manager'
          )
        )
      );
    }
  }]);

  return Navbar;
})(_react2['default'].Component);

exports['default'] = Navbar;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":14,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] })
);
module.exports = exports['default'];

},{"./components/App":7,"./components/Home":11,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsAddUrlFormActions = require('../actions/AddUrlFormActions');

var _actionsAddUrlFormActions2 = _interopRequireDefault(_actionsAddUrlFormActions);

var AddUrlFormStore = (function () {
  function AddUrlFormStore() {
    _classCallCheck(this, AddUrlFormStore);

    this.bindActions(_actionsAddUrlFormActions2['default']);
    this.newurl = '';
    this.selectedcommunityId = '';
  }

  _createClass(AddUrlFormStore, [{
    key: 'onUpdateNewUrl',
    value: function onUpdateNewUrl(event) {
      this.newurl = event.target.value;
    }
  }, {
    key: 'onStoreNewUrlSuccess',
    value: function onStoreNewUrlSuccess(data) {
      this.newurl = '';
      this.selectedcommunityId = '';
    }
  }, {
    key: 'onUpdateCommunityId',
    value: function onUpdateCommunityId(event) {
      this.selectedcommunityId = event.target.value;
    }
  }, {
    key: 'onStoreNewUrlFail',
    value: function onStoreNewUrlFail(jqXhr) {
      console.log(jqXhr.responseJSON.message);
    }
  }]);

  return AddUrlFormStore;
})();

exports['default'] = _alt2['default'].createStore(AddUrlFormStore);
module.exports = exports['default'];

},{"../actions/AddUrlFormActions":1,"../alt":5}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsCommunityCardActions = require('../actions/CommunityCardActions');

var _actionsCommunityCardActions2 = _interopRequireDefault(_actionsCommunityCardActions);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var CommunityCardStore = (function () {
  function CommunityCardStore() {
    _classCallCheck(this, CommunityCardStore);

    this.bindActions(_actionsCommunityCardActions2['default']);
    this.activeCommunityName = '';
    this.activeCommunityLinks = [];
  }

  _createClass(CommunityCardStore, [{
    key: 'onSetActiveCommunityName',
    value: function onSetActiveCommunityName(communityName) {
      this.activeCommunityName = communityName;
      console.log(communityName);
    }
  }, {
    key: 'onGetCommunityInfoSuccess',
    value: function onGetCommunityInfoSuccess(data) {
      this.activeCommunityLinks = data;
      console.log(this.activeCommunityLinks);
    }
  }, {
    key: 'onGetCommunityInfoFail',
    value: function onGetCommunityInfoFail(errorMessage) {}
  }, {
    key: 'onRemoveCommunitySuccess',
    value: function onRemoveCommunitySuccess(data) {
      _actionsHomeActions2['default'].getCommunities();
    }
  }, {
    key: 'onRemoveCommunityFail',
    value: function onRemoveCommunityFail(errorMessage) {}
  }]);

  return CommunityCardStore;
})();

exports['default'] = _alt2['default'].createStore(CommunityCardStore);
module.exports = exports['default'];

},{"../actions/CommunityCardActions":2,"../actions/HomeActions":4,"../alt":5}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsCommunityListActions = require('../actions/CommunityListActions');

var _actionsCommunityListActions2 = _interopRequireDefault(_actionsCommunityListActions);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var CommunityListStore = (function () {
  function CommunityListStore() {
    _classCallCheck(this, CommunityListStore);

    this.bindActions(_actionsCommunityListActions2['default']);
    this.newCommunityName = '';
    this.newCommunityDesc = '';
  }

  _createClass(CommunityListStore, [{
    key: 'onUpdateNewCommunityName',
    value: function onUpdateNewCommunityName(event) {
      this.newCommunityName = event.target.value;
    }
  }, {
    key: 'onUpdateNewCommunityDesc',
    value: function onUpdateNewCommunityDesc(event) {
      this.newCommunityDesc = event.target.value;
    }
  }, {
    key: 'onSaveCommunitySuccess',
    value: function onSaveCommunitySuccess(data) {
      _actionsHomeActions2['default'].getCommunities();
    }
  }, {
    key: 'onSaveCommunityFail',
    value: function onSaveCommunityFail(errorMessage) {}
  }]);

  return CommunityListStore;
})();

exports['default'] = _alt2['default'].createStore(CommunityListStore);
module.exports = exports['default'];

},{"../actions/CommunityListActions":3,"../actions/HomeActions":4,"../alt":5}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var HomeStore = (function () {
  function HomeStore() {
    _classCallCheck(this, HomeStore);

    this.bindActions(_actionsHomeActions2['default']);
    this.communities = [];
  }

  _createClass(HomeStore, [{
    key: 'onGetCommunitiesSuccess',
    value: function onGetCommunitiesSuccess(communities) {
      this.communities = communities;
    }
  }, {
    key: 'onGetCommunitiesFail',
    value: function onGetCommunitiesFail(errorMessage) {}
  }]);

  return HomeStore;
})();

exports['default'] = _alt2['default'].createStore(HomeStore);
module.exports = exports['default'];

},{"../actions/HomeActions":4,"../alt":5}]},{},[13]);
