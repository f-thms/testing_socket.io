# Implementing socket.io chat

So far the project is just a "copy" of the guide provided by the socket.io team, but with some changes for my use.

## Starting

These instructions will provide a copy of the project running on your local machine for development and testing purposes.
> Do not dare to implement this project without being sure that this is what you want.

### Prerequisites

To develop this project I used some tools, I believe the essential ones are:
[ ] VSCode
[x] Express
[x] TypeScript
[x] Node
[ ] Yarn
[x] Socket.io

### Installing

A simple step by step, starting where a baby would start

If you already have Yarn installed, run on your console:

`` ``
yarn add
`` ``

If you still use Npm, run on your console:

`` ``
npm install
`` ``

All set in your development environment!
Feel free to make changes and tinker with the code as much as you like!

## Testing while Coding

If like me, you also like to test the project while coding, this section is for you!
> If you just want to test what is ready, go to the "To Compile" heading.

### Automating TypeScript compilation for JavaScript when saving files

The process is simple, open a new tab on your console and execute one of the commands below:

If you are using Yarn:
`` ``
yarn run dev:tsc
`` ``

If you are using Npm:
`` ``
npm run dev:tsc
`` ``

### Automating the local server

The process is as simple as the previous one, open a new tab on your console and execute one of the commands below:

If you are using Yarn:
`` ``
yarn run dev:nodemon
`` ``

If you are using Npm:
`` ``
npm run dev:nodemon
`` ``

## To Compile

If you just want to compile the project and test it on your machine, choose the command that best suits you:

If you are using Yarn:
`` ``
yarn run compile
`` ``

If you are using Npm:
`` ``
npm run compile
`` ``

## Time to test!

Open two pages in different browsers, it can be a normal chrome tab and an anonymous tab.

Access the address of your local server, I left it as follows::
`` ``
127.0.0.1:2000
`` ``


## Built with:

* [Express] (https://expressjs.com/) - Web Framework
* [Yarn](https://yarnpkg.com/) - Package Manager
* [TypeScript] (https://www.typescriptlang.org/) - A kind of JavaScript with moderate typing
* [Socket.io] (https://socket.io/) - Real-time, bidirectional and event-based communication
