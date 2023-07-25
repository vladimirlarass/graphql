const { ApolloServer } = require ('apollo-server');
const fs = require('fs');

const typeDefs = `
type User {
  id: ID!
  name: String
  email: String
  age: Int
}

type Query {
    hello : String
    users: [User!]!
}
`
function getUsers() {
    const data = fs.readFileSync('./data/data.json', 'utf-8');
    const jsonData = JSON.parse(data);
    return jsonData.users;
  }
  console.log(getUsers())
  const resolvers = {
    Query: {
        hello:() => "Hello World",
      users: () => getUsers()
    },
  };
 
    
    const server = new ApolloServer({ typeDefs, resolvers });

    server .listen() .then(({ url }) => console.log(`Server ready at ${url}`));
       