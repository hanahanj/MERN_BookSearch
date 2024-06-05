
const typeDefs= `
type User {
    _id: ID
    username: String
    email: String
    password: String
    # savedBooks: [bookSchema]
  }

  type Auth {
    token: ID!
    user: User
  }

type Query{
    users:[User]
    me:User
}

type Mutation{
    addUser(username:String!, email:String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}

  `;

  module.exports = typeDefs;

