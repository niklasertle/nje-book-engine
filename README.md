# Book Search Engine

# Table of Contents

[Description](#description) -
[Install](#install) -
[Usage](#usage) - 
[Links](#links) - 
[Contact](#contact) -
[Technologies](#technologies) -
[License](#license)

## Description

This is a book search engine that was converted from using a RESTful API to being built as a GraphQL API using Apollo Server. The most difficult part of the process was developing this using useContext to pass userData to the queries and mutations through context instead of having to pass them in manually. This specifically was a big hold up in figuring out how to change the authentication backend to work with GraphQL. Once this was finished it was a pretty simple process of using the GraphQL playground to write out the queries or mutations and then switching them out in the React scripts. In the end the program maintains the same functionality however it now uses GraphQL API instead of RESTful.

## Install

Please use **'npm i'** in the command line to install the dependencies.

## Usage

When ready use **'npm run develop'** into the command line to run.

## Links

![Screenshot of App](./assets/website-screenshot.jpg) <br>
[Walkthrough Video](https://youtu.be/Hr2tcpIJ_QE) <br>
[Deployed App](https://murmuring-meadow-10149.herokuapp.com/) <br>
[GitHub](https://github.com/niklasertle/nje-book-engine)

## Contact

[GitHub Profile](https://github.com/niklasertle)<br>
[Email Me](mailto:nik.ertle16@gmail.com)

## Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)