
const typeDefs= `
type User {
    _id: ID
    username: String
    email: String
    password: String
    # savedBooks: [bookSchema]
  }

type Query{
    users:[User]
}

type Mutation{
    addUser(username:String!, email:String!, password: String!): User
}

  `;

  module.exports = typeDefs;

