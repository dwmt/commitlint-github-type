const { rules, NotMyJob, Failure } = require('../common')

module.exports = {
  name: rules.names.issueReferenceEmpty,
  rule (parsed, _when) {
    if (parsed.issueReferenceAndType && !parsed.issueReference) {
      return Failure(`The issue reference and type segment "${parsed.issueReferenceAndType}" (the part that precedes ":") contains no valid issue number! Please add an issue reference, such as "#1" or "user/repo#1".`)
    }

    return NotMyJob()
  }
}
