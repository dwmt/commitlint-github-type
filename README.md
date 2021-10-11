# Commitlint GitHub Type

[![Continuous Integration](https://github.com/dwmt/commitlint-github-type/actions/workflows/continuous-integration.yml/badge.svg)](https://github.com/dwmt/commitlint-github-type/actions/workflows/continuous-integration.yml)
[![npm](https://img.shields.io/npm/v/@dwmt/commitlint-plugin-github-type)](https://www.npmjs.com/package/@dwmt/commitlint-plugin-github-type)
[![LICENSE](https://img.shields.io/github/license/dwmt/commitlint-github-type)](LICENSE)

Check if your commit messages start with a valid GitHub issue reference and a type.

Accepts commit messages like:

~~~~
#1/feat: implemented a new message handler
user/repo#729/fix: removed erroneous handling of a key
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
  1. Setup [Husky](https://github.com/typicode/husky/). To lint commits before they are created you can use the `commit-msg` hook
     ~~~~
     mkdir .husky
     npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
     ~~~~

You can find detailed instructions regarding the local setup of Commitlint and Husky at [Commitlint Local Setup](https://commitlint.js.org/#/guides-local-setup).

## Configurable Rules

github-type offers the following configurable rules. By customizing these rules, you can define which messages should be accepted and rejected.

### github-type-type-enum

An enumeration of accepted types. If the type within the message is not included, then the message is rejected. By default, the value of this setting is `undefined`, which means that every type is accepted.

If you want to accept `feat` and `fix` only:

~~~~JavaScript
// commitlint.config.js
module.exports = {
  plugins: ['@dwmt/commitlint-plugin-github-type'],
  extends: ['@dwmt/commitlint-config-github-type'],
  rules: {
     // 2 sets the level of this rule to error.
     // always means that this rule should be applied as is
     // (the other value is "never", which inverts the rule) 
     'github-type-type-enum': [2, 'always', ['feat', 'fix']] 
  }
}
~~~~

## Packages

This is a monorepo containing the following packages:

  * [commitlint-common-github-type](./commitlint-common-github-type)
    * Definitions shared between the packages of the monorepo. For example rule names and rule default values.
  * [commitlint-config-github-type](./commitlint-config-github-type)
    * Default configuration for all the rules supported by github-type.
  * [commitlint-plugin-github-type](./commitlint-plugin-github-type)
    * The actual rule implementations.
