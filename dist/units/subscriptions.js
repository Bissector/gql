'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unitAdded = exports.unitUpdated = undefined;

var _templateObject = _taggedTemplateLiteral(['\nsubscription unitUpdated {\n  onUpdateUnit {\n    id\n    title\n    longitude\n    latitude\n    unitState\n  }\n}'], ['\nsubscription unitUpdated {\n  onUpdateUnit {\n    id\n    title\n    longitude\n    latitude\n    unitState\n  }\n}']),
    _templateObject2 = _taggedTemplateLiteral(['\n    subscription unitAdded {\n        onCreateUnit {\n            id\n            title\n            longitude\n            latitude\n            unitState\n        }\n    }'], ['\n    subscription unitAdded {\n        onCreateUnit {\n            id\n            title\n            longitude\n            latitude\n            unitState\n        }\n    }']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Returns GQL subscription to onUpdateUnit event.
 * \n
 * OUTPUT:
 * id
 * title
 * longitude
 * latitude
 * unitState
 */
var unitUpdated = exports.unitUpdated = (0, _graphqlTag2.default)(_templateObject);

/**
 * Returns GQL subscription to onUpdateUnit event.
 * \n
 * OUTPUT:
 * id
 * title
 * longitude
 * latitude
 * unitState
 */
var unitAdded = exports.unitAdded = (0, _graphqlTag2.default)(_templateObject2);