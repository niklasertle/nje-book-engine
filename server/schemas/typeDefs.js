const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        authors: [String]
        title: String
        description: String
        bookId: String
        image: String
        link: String
    }
    
    type User {
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input SavedBookInput {
        authors: [String]
        title: String
        description: String
        bookId: String
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: SavedBookInput):User
        removeBook(bookId: String!):User
    }
`;

module.exports = typeDefs;