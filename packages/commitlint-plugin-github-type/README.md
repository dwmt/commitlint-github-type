# Commitlint Numbered Type | Plugin

Commitlint plugin to check if your commit messages start with an issue number and a type.

Accepts commit messages like:

~~~~
#1/feat: implemented a new message handler
#729/fix: removed erroneous handling of a key
~~~~

## Getting Started

If you want to lint your commits with github-type, follow along:

  1. Install Commitlint, Husky and the github-type dependencies
     ~~~~
     npm i @commitlint/cli husky @dwmt/commitlint-plugin-github-type @dwmt/commitlint-config-github-type -D
     ~~~~
  1. Configure [commitlint](https://github.com/conventional-changelog/commitlint)
     ~~~~JavaScript
     // commitlint.config.js
     module.exports = {
       plugins: ['@dwmt/commitlint-plugin-github-type'],
       extends: ['@dwmt/commitlint-config-github-type'],
     }
     ~~~~
  1. Setup [Husky](https://github.com/typicode/husky/): to lint commits before they are created you can use Husky's `commit-msg` hook
     ~~~~
     mkdir .husky
     npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
     ~~~~

You can find detailed instructions regarding the local setup of Commitlint and Husky at [Commitlint Local Setup](https://commitlint.js.org/#/guides-local-setup).

## Further Information

Please see the [README of the parent monorepo](https://github.com/dwmt/commitlint-github-type/blob/master/README.md).
