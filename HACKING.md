### Build instructions

#### Pre-requisites

Make sure you have the following installed on your system:

- [Node](https://nodejs.org/en/) v16
- [Yarn](https://yarnpkg.com/)

#### Steps to start dev server

1. Clone the repo.
2. Run `yarn` in the repo to install the dependencies.
3. Run `yarn dev` to start dev server. The dev server also supports live-reload.

#### Steps to build

1. Run `yarn build`. This will create a `dist` directory with the built files.
2. The `dist/client` directory contains pre-rendered markup which can be deployed to static hosting service.
