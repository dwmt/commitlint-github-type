const { parseCommitMessage } = require('../parser')

const rules = (function loadRules () {
  const result = {};

  ['issueReferenceFormat', 'issueReferenceEmpty', 'typeCase', 'typeEmpty', 'typeEnum', 'typeSeparator', 'commitMessageSeparator', 'messageEmpty', 'issueReferenceAndTypeEmpty']
    .map(p => `./rules/${p}.js`)
    .map(require)
    .forEach(ruleObject => {
      result[ruleObject.name] = wrapRule(ruleObject.rule)
    })

  return result
})()

function wrapRule (ruleFn) {
  return function wrappedRule (commitlintParsed, when, value) {
    const ownParsed = parseCommitMessage(commitlintParsed.raw)

    return ruleFn(ownParsed, when, value)
  }
}

module.exports = {
  rules
}
