const { rules, parser, Success, Failure } = require('../common')

module.exports = {
  name: rules.names.issueReferenceAndTypeEmpty,
  rule (parsed, _when) {
    if (parsed.hasError(parser.errors.missingIssueReferenceAndType)) {
      return Failure('The commit message contains no issue reference and type!')
    }

    return Success()
  }
}
