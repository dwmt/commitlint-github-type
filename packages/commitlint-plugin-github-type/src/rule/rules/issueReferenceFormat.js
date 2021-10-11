const { parser, rules, NotMyJob, Success, Failure } = require('../common')

module.exports = {
  name: rules.names.issueReferenceFormat,
  rule (parsed, _when) {
    if (!parsed.issueReference) {
      return NotMyJob()
    }

    if (parsed.hasError(parser.errors.invalidIssueReference)) {
      return Failure(`The provided issue reference "${parsed.issueReference}" is not a valid GitHub issue reference! Please use a reference such as "#1" or "user/repo#1".`)
    }

    return Success()
  }
}
