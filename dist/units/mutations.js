'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMultiple = exports.update = exports.createMultiple = exports.create = undefined;

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates single unit
 *
 * INPUT:
 * $id: ID!
 * $title: String
 * $longitude: Float
 * $latitude: Float
 * $unitState: UnitState
 *
 * OUTPUT:
 * id
 * title
 */
var create = exports.create = (0, _graphqlTag2.default)('\n  mutation createUnit(\n      $id: ID!,\n      $title: String\n      $longitude: Float\n      $latitude: Float\n      $unitState: UnitState\n    ) {\n    createUnit(input: {\n      id: $id,\n      title: $title,\n      longitude: $longitude,\n      latitude: $latitude,\n      unitState: $unitState\n    }) {\n      id\n      title\n    }\n  }\n');

/**
 * Returns GQL mutation that creates provided unit(s).
 *
 * INPUT:
 * /generated/
 *
 * OUTPUT:
 * id
 *
 * @param units single Unit or array of Units
 */
var createMultiple = exports.createMultiple = function createMultiple(units) {
  var result = 'mutation createMultiple {';
  for (var i = 0, l = units.length; i < l; i++) {
    var unit = units[i];
    result = result + ('_' + i + ': createUnit(input: { \n            id:' + unit.id + ', \n            title:"' + unit.title + '"\n            longitude:' + unit.longitude + ',\n            latitude:' + unit.latitude + ',\n            unitState:' + unit.unitState + ',\n        }) { id }');
  }
  result = result + '}';
  return (0, _graphqlTag2.default)(result);
};

/**
 * Updates single unit
 *
 * INPUT:
 * $id: ID!
 * $title: String
 * $longitude: Float
 * $latitude: Float
 * $unitState: UnitState
 *
 * OUTPUT:
 * id
 */
var update = exports.update = (0, _graphqlTag2.default)('\n  mutation updateUnit(\n      $id: ID!,\n      $title: String\n      $longitude: Float\n      $latitude: Float\n      $unitState: UnitState\n    ) {\n    updateUnit(input: {\n      id: $id,\n      title: $title,\n      longitude: $longitude,\n      latitude: $latitude,\n      unitState: $unitState\n    }) {\n      id\n    }\n  }\n');

/**
 * Returns GQL mutation that updates provided unit(s).
 *
 * INPUT:
 * /generated/
 *
 * OUTPUT:
 * id
 *
 * @param units single Unit or array of Units
 */
var updateMultiple = exports.updateMultiple = function updateMultiple(units) {
  var result = 'mutation updateMultiple {';
  for (var i = 0, l = units.length; i < l; i++) {
    var unit = units[i];
    result = result + ('_' + i + ': updateUnit(input: { \n            id:' + unit.id + ', \n            title:"' + unit.title + '"\n            longitude:' + unit.longitude + ',\n            latitude:' + unit.latitude + ',\n            unitState:' + unit.unitState + ',\n        }) { id }');
  }
  result = result + '}';
  return (0, _graphqlTag2.default)(result);
};