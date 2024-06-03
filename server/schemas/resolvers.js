const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password });
        //   const token = signToken(user);
          return user;
        },
    }

}

module.exports = resolvers