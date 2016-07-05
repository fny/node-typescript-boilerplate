# Node TypeScript Boilerplate and Example

Want to write an NPM package or Node application in TypeScript? Either clone this repo  run `npm install; typings install` or do the following to start from scratch:

    # Install TypeScript and Typings
    npm install typescript --save-dev
    npm install typings --save-dev

    # Install the type definitions for Node
    typings install dt~node --global --save

    # Create project folders/files for the application
    mkdir dist
    mkdir src
    echo '/// <reference path="../typings/index.d.ts"/>' > src/index.ts

    # Add TypeScript configuration
    echo '{
      "exclude": [
        "dist",
        "node_modules",
        "typings"
      ],
      "compilerOptions": {
        "declaration": true,
        "module": "commonjs",
        "target": "es6",
        "noImplicitAny": true,
        "outDir": "dist/",
        "sourceMap": true
      }
    }' > tsconfig.json

For more details see TypeScript's [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) and [the manual on `tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

Add the following lines to `package.json`:

    "main": "dist/index.js",
    "typings": "./dist/index.d.ts"
    "test": "tsc; jasmine",

Modify the `test` property to run whatever test suite you choose.
