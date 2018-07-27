'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listIDs = exports.list = exports.listWithoutState = undefined;

var _templateObject = _taggedTemplateLiteral(['\nquery listUnitsWithoutState {\n  listUnitsWithoutState  {\n    items {\n      longitude\n      latitude\n      unitState\n      title\n      id\n    },\n\tnextToken\n  }\n}'], ['\nquery listUnitsWithoutState {\n  listUnitsWithoutState  {\n    items {\n      longitude\n      latitude\n      unitState\n      title\n      id\n    },\n\tnextToken\n  }\n}']),
    _templateObject2 = _taggedTemplateLiteral(['\nquery listUnits {\n  listUnits (first: ', ')  {\n    items{\n        id\n        title\n        longitude\n        latitude\n        unitState\n    },\n\tnextToken\n  }\n}'], ['\nquery listUnits {\n  listUnits (first: ', ')  {\n    items{\n        id\n        title\n        longitude\n        latitude\n        unitState\n    },\n\tnextToken\n  }\n}']),
    _templateObject3 = _taggedTemplateLiteral(['\nquery listUnits {\n  listUnits {\n    items {\n      id\n    }\n  }\n}'], ['\nquery listUnits {\n  listUnits {\n    items {\n      id\n    }\n  }\n}']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Returns units without state
 *
 * OUTPUT:
 * longitude
 * latitude
 * unitState
 * title
 * id
 */
var listWithoutState = exports.listWithoutState = (0, _graphqlTag2.default)(_templateObject);

/**
 * Returns units without state
 *
 * OUTPUT:
 * longitude
 * latitude
 * unitState
 * title
 * id
 */
var list = exports.list = function list(count) {
  return (0, _graphqlTag2.default)(_templateObject2, count ? count : 10000);
};

/**
 * Returns list of units IDs
 *
 * OUTPUT:
 * id
 */
var listIDs = exports.listIDs = (0, _graphqlTag2.default)(_templateObject3);