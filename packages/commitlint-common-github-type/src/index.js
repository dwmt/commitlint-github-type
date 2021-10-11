const RULES = {
  issueReferenceFormat: 'github-type-issue-format',
  issueReferenceEmpty: 'github-type-issue-reference',
  issueReferenceAndTypeEmpty: 'github-type-issue-reference-and-type-empty',

  typeCase: 'github-type-type-empty',
  typeSeparator: 'github-type-type-separator',
  typeEmpty: 'github-type-type-empty',
  typeEnum: 'github-type-type-enum',

  commitMessageSeparator: 'github-type-commit-message-separator',

  messageEmpty: 'github-type-message-empty'
}

const VALUES = {
  lowercase: 'lowercase',
  uppercase: 'uppercase',
  any: 'any'
}

const DEFAULTS = {
  typeCase: VALUES.lowercase,
  typeSeparator: '/',
  typeEnum: undefined,

  commitMessageSeparator: ':'
}

const LEVEL = {
  disabled: 0,
  warning: 1,
  error: 2
}

const APPLICABLE = {
  always: 'always',
  never: 'never'
}

module.exports = {
  RULES,
  VALUES,
  DEFAULTS,
  LEVEL,
  APPLICABLE
}
