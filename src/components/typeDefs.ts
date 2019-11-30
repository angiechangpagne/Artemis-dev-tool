import gql from 'graphql-tag'
 
const typedefs = gql `
type appState {
    isDarkModeEnabled: Boolean
}
`;


export default typeDefs