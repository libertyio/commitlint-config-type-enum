Introduction
============

Preferred list of types for use with commitlint.

Each type is either a verb in its bare infinitive form or a singular noun.

Based on [config-angular-type-enum](https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-angular-type-enum/index.js)
with the following changes:

* replaced `feat` with `add`
* replaced `docs` with `doc`
* added `improve`

Development
-----------

How to build:

```
npm run lint
npm run build
```

Commits in this repository are also checked by commitlint. To update the rules,
copy the `types` array from `src/main.js` to the top of `commitlint.config.js`.
