import userModel from './models'

export const typeDefs = `
  type User {
    id: ID
    name: String
    age: Int
    email: String
  }

  type Query {
    users: [User]
  }

  input CreateUserInput {
    id: Int
    name: String
    age: Int
    email: String
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: Int!, input: CreateUserInput!): User
    deleteUser(id: Int!): User
  }`
  export const resolvers = {
    Query: {
      users() {
        return userModel.list()
      }
    },
    
    Mutation: {
      createUser(source, args) {
        return userModel.create(args.input)
      },
      updateUser(source, args) {
        return userModel.update(args.id, args.input)
      },
      deleteUser(source, args) {
        return userModel.delete(args.id)
      }
    }
  }