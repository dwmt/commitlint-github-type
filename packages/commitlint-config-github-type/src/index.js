const { RULES, DEFAULTS, LEVEL, APPLICABLE } = require('@dwmt/commitlint-common-github-type')

module.exports = {
  rules: {
    [RULES.issueReferenceFormat]: [LEVEL.error, APPLICABLE.always],
    [RULES.issueReferenceAndTypeEmpty]: [LEVEL.error, APPLICABLE.always],
    [RULES.issueReferenceEmpty]: [LEVEL.error, APPLICABLE.always],

    [RULES.typeCase]: [LEVEL.error, APPLICABLE.always, DEFAULTS.typeCase],
    [RULES.typeSeparator]: [LEVEL.error, APPLICABLE.always, DEFAULTS.typeSeparator],
    [RULES.typeEmpty]: [LEVEL.error, APPLICABLE.always],
    [RULES.typeEnum]: [LEVEL.error, APPLICABLE.always, DEFAULTS.typeEnum],

    [RULES.commitMessageSeparator]: [LEVEL.error, APPLICABLE.always, DEFAULTS.commitMessageSeparator],

    [RULES.messageEmpty]: [LEVEL.error, APPLICABLE.always]
  }
}
