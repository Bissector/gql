import gql from 'graphql-tag';

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
export const create = gql(`
  mutation createUnit(
      $id: ID!,
      $title: String
      $longitude: Float
      $latitude: Float
      $unitState: UnitState
    ) {
    createUnit(input: {
      id: $id,
      title: $title,
      longitude: $longitude,
      latitude: $latitude,
      unitState: $unitState
    }) {
      id
      title
    }
  }
`);

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
export const createMultiple = (units) => {
    let result = `mutation createMultiple {`;
    for (let i = 0, l = units.length; i < l; i++) {
        let unit = units[i];
        result = result + `_${i}: createUnit(input: { 
            id:${unit.id}, 
            title:"${unit.title}"
            longitude:${unit.longitude},
            latitude:${unit.latitude},
            unitState:${unit.unitState},
        }) { id }`
    }
    result = result + `}`;
    return gql(result);
}

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
export const update = gql(`
  mutation updateUnit(
      $id: ID!,
      $title: String
      $longitude: Float
      $latitude: Float
      $unitState: UnitState
    ) {
    updateUnit(input: {
      id: $id,
      title: $title,
      longitude: $longitude,
      latitude: $latitude,
      unitState: $unitState
    }) {
      id
    }
  }
`);

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
export const updateMultiple = (units) => {
    let result = `mutation updateMultiple {`;
    for (let i = 0, l = units.length; i < l; i++) {
        let unit = units[i];
        result = result + `_${i}: updateUnit(input: { 
            id:${unit.id}, 
            title:"${unit.title}"
            longitude:${unit.longitude},
            latitude:${unit.latitude},
            unitState:${unit.unitState},
        }) { id }`
    }
    result = result + `}`;
    return gql(result);
}