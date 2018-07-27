import gql from 'graphql-tag';

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
export const unitUpdated = gql`
subscription unitUpdated {
  onUpdateUnit {
    id
    title
    longitude
    latitude
    unitState
  }
}`;

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
export const unitAdded = gql`
    subscription unitAdded {
        onCreateUnit {
            id
            title
            longitude
            latitude
            unitState
        }
    }`;

