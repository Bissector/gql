import gql from 'graphql-tag';

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
export const listWithoutState = gql`
query listUnitsWithoutState {
  listUnitsWithoutState  {
    items {
      longitude
      latitude
      unitState
      title
      id
    },
	nextToken
  }
}`;

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
export const list = count => gql`
query listUnits {
  listUnits (first: ${count ? count : 10000})  {
    items{
        id
        title
        longitude
        latitude
        unitState
    },
	nextToken
  }
}`;

/**
 * Returns list of units IDs
 *
 * OUTPUT:
 * id
 */
export const listIDs = gql`
query listUnits {
  listUnits {
    items {
      id
    }
  }
}`;
