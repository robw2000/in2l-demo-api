# iN2L Demo API

This is a simple API meant to be easily setup on a developer machine. It is not complicated, it is not meant to be hard to use. There are probably problems in how it is coded. You will be given a task which will require modifying this API. Please familiarize yourself with it before the interview.

# Prerequisites

To build and run this app locally you will need a few things:

- Install [Node.js](https://nodejs.org/en/)

# Getting started

- Clone the repository

```
git clone --depth=1 git@github.com:robw2000/in2l-demo-api.git
```

- Install dependencies

```
cd <project_name>
npm install
npm run tsc
```

- Build and run the project with auto reload (nodemon)

```
npm run server
```

- Build and run the project

```
npm run start
```

Finally, navigate to `http://localhost:5000/` and you should see the API running!

## Project Structure

The most obvious difference in a TypeScript + Node project is the folder structure. In a TypeScript project, it's best to have separate _source_ and _distributable_ files. TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run start`

| Name                              | Description                                                                                                |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| dist\*\*                          | Contains the distributable (or output) from your TypeScript build                                          |
| node_modules\*\*                  | Contains all your npm dependencies                                                                         |
| src\*\*                           | Contains your source code that will be compiled to the dist dir                                            |
| src/models\*\*                    | Models representing document types in the database                                                         |
| src/routes\*\*                    | Routes define the endpoints of your API                                                                    |
| src/types\*\*                     | Contains all your custom types to better handle type checking with TypeScript                              |
| src/services\*\*                  | Data services supporting the routes                                                                        |
| src/services/couchbase.service.ts | Database service which provides mock data via get or get all functions                                     |
| src/config.ts\*\*                 | Config file containing the test data used by CouchbaseService app                                          |
| src/server.ts\*\*                 | Entry point to your express app                                                                            |
| package.json                      | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped) |
| tsconfig.json                     | Config settings for compiling server code written in TypeScript                                            |
| tslint.json                       | Config settings for TSLint code style checking                                                             |

### Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:

| Npm Script     | Description                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------- |
| `tsc`          | Transpiles TypeScript codes to JavaScript.                                                    |
| `watch-tsc`    | Transpiles TypeScript codes to JavaScript, with auto reload.                                  |
| `deploy`       | Runs node on `dist/server.js` which is the app's entry point.                                 |
| `watch-deploy` | Runs node on `dist/server.js` which is the app's entry point, with auto reload.               |
| `server`       | Transpiles TypeScript codes to JavaScript then run node on `dist/server.js` with auto reload. |
| `start`        | Transpiles TypeScript codes to JavaScript then run node on `dist/server.js`.                  |

Since we're developing with TypeScript, it is important for the codes to be transpiled first to JavaScript before running the node server. It is best to deploy the app using: `npm run server` or `npm run start` command.

# Routes

| Route                        | Description                            |
| ---------------------------- | -------------------------------------- |
| GET /                        | Get API status                         |
| GET /api/profiles            | Get all profiles                       |
| GET /api/profiles/:profileId | Universal configurations for your app. |

# Dependencies

Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `dependencies`

| Package           | Description                                     |
| ----------------- | ----------------------------------------------- |
| bcryptjs          | Library for hashing and salting user passwords. |
| config            | Universal configurations for your app.          |
| express           | Node.js web framework.                          |
| express-validator | Easy form validation for Express.               |
| gravatar          | Generate Gravatar URLs based on gravatar specs. |
| http-status-codes | HTTP status codes constants.                    |
| jsonwebtoken      | JsonWebToken implementation for Node.js.        |
| mongoose          | MongoDB modeling tool in an async environment.  |
| request           | Simplified HTTP client for Node.js.             |
| typescript        | Typed superset of JavaScript.                   |

## `devDependencies`

Since TypeScript is used, dependencies should be accompanied with their corresponding DefinitelyTyped @types package.

| Package             | Description                             |
| ------------------- | --------------------------------------- |
| @types/bcryptjs     | DefinitelyTyped for bcryptjs            |
| @types/config       | DefinitelyTyped for config              |
| @types/express      | DefinitelyTyped for express             |
| @types/gravatar     | DefinitelyTyped for gravatar            |
| @types/jsonwebtoken | DefinitelyTyped for jsonwebtoken        |
| @types/mongoose     | DefinitelyTyped for mongoose            |
| @types/node         | DefinitelyTyped for node                |
| concurrently        | Run multiple commands concurrently      |
| nodemon             | Reload node application on code changes |

To install or update these dependencies you can use `npm install` or `npm update`.

```

```
