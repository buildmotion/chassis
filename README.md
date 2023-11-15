# Setup

1. create a plugin workspace
2. add a plugin Generator project (e.g., `create-chassis-workspace`).

```bash
npx create-nx-plugin@latest chassis --create-package-name=create-chassis-workspace
✔ Enable distributed caching to make your CI faster · Yes

 >  NX   Creating an Nx v17.1.2 plugin.

   To make sure the command works reliably in all environments, and that the preset is applied correctly,
   Nx will run "npm install" several times. Please wait.

✔ Installing dependencies with npm
✔ Successfully created the workspace: chassis.
Fetching prettier...
>  NX  We've updated the vscode settings for this repository to ensure that plugin lint checks show up inside your IDE. This created .vscode/settings.json. To read more about this file, check vscode's documentation. It is frequently not committed, so other developers may need to add similar settings if they'd like to see the lint checks in the IDE rather than only during linting.
✔ NxCloud has been set up successfully

 >  NX   Distributed caching via Nx Cloud has been enabled

   In addition to the caching, Nx Cloud provides config-free distributed execution,
   UI for viewing complex runs and GitHub integration. Learn more at https://nx.app
   
   Your workspace is currently unclaimed. Run details from unclaimed workspaces can be viewed on cloud.nx.app by anyone
   with the link. Claim your workspace at the following link to restrict access.
   
   https://cloud.nx.app/orgs/workspace-setup?accessToken=YWU3MjgyYmItOGFhMC00YTBjLTkyMmYtZmE3NmU2ODlmYzg4fHJlYWQtd3JpdGU=
   ```

   ## Local NPM Server

   ```bash
   yarn nx local-registry
yarn run v1.22.19
$ /Users/valencia/work/github/chassis/node_modules/.bin/nx local-registry

> nx run @chassis/source:local-registry

Set npm registry to http://localhost:4873/
Set yarn registry to http://localhost:4873/
(node:3273) [VERWAR002] VerdaccioWarning: The configuration property "logs" has been deprecated, please rename to "log" for future compatibility
(Use `node --trace-warnings ...` to show where the warning was created)
 warn --- http address - http://localhost:4873/ - verdaccio/5.27.0
 ```

 ### Packages

To publish your first package just:

1. Create user

`npm adduser --registry http://localhost:4873/`

2. Publish

`npm publish --registry http://localhost:4873/`

## Publish Packages

```bash
yarn nx run-many -t publish --version 1.0.0 --tag latest
```