# linktree clone api (microservice)

- GraphQL
- Nodejs
- Express
- Auth0 + Jwt
- Mongodb
- AWS
- docker (to add later)

## Development Setup

- This app uses `dotenv-flow`: https://www.npmjs.com/package/dotenv-flow

`.env.development` set for non-sensitive environment variables. To run locally, create a `.env.development.local` with matching variable names to those listed in `./src/config.js`

Commands:

- `yarn && yarn start:dev` - Install and run locally. `NODE_ENV=development` is loaded in order to attach `development` to `dotenv-flow` and load the `env.*.*` environment files
- `yarn clean` clean up lock files, node-modules, and yarn error logs. Avoid running this, or cherry pick git commit of `yarn.lock` to avoid large git noise on merge.
