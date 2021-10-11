const common = require('@dwmt/commitlint-common-github-type')

function parseCommitMessage (message) {
  const output = {
    errors: [],
    hasError (error) {
      return this.errors.includes(error)
    }
  }

  if (isEmpty(message)) {
    output.errors.push(ERRORS.emptyMessage)
    return output
  }

  const header = message.split('\n')[0]

  const headerParts = header.split(common.DEFAULTS.commitMessageSeparator)
  if (headerParts.length < 2) {
    output.errors.push(ERRORS.missingCommitSeparator)
    return output
  }

  output.issueReferenceAndType = headerParts[0]
  if (isEmpty(output.issueReferenceAndType)) {
    output.errors.push(ERRORS.missingIssueReferenceAndType)
    return output
  }

  const issueReferenceAndTypeParts = output.issueReferenceAndType.split(common.DEFAULTS.typeSeparator)
  if (issueReferenceAndTypeParts.length !== 2 && issueReferenceAndTypeParts.length !== 3) {
    output.errors.push(ERRORS.invalidIssueReferenceAndType)
    return output
  }

  if (issueReferenceAndTypeParts.length === 2) {
    output.issueReference = issueReferenceAndTypeParts[0]
    output.type = issueReferenceAndTypeParts[1]
  } else {
    output.issueReference = `${issueReferenceAndTypeParts[0]}/${issueReferenceAndTypeParts[1]}`
    output.type = issueReferenceAndTypeParts[2]
  }

  validateIssueReference(output.issueReference, output.errors)

  return output
}

function isEmpty (str) {
  return !str || str.trim() === ''
}

const SIMPLE_ISSUE_NUMBER_PATTERN = /^#[0-9]+$/
const CROSS_REPOSITORY_ISSUE_REFERENCE_PATTERN = /^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+#[0-9]+$/

function validateIssueReference (issueReference, errors) {
  if (!SIMPLE_ISSUE_NUMBER_PATTERN.test(issueReference) && !CROSS_REPOSITORY_ISSUE_REFERENCE_PATTERN.test(issueReference)) {
    errors.push(ERRORS.invalidIssueReference)
  }
}

const ERRORS = {
  emptyMessage: 'emptyMessage',
  missingCommitSeparator: 'missingCommitSeparator',
  missingIssueReferenceAndType: 'missingIssueReferenceAndType',
  invalidIssueReferenceAndType: 'invalidIssueReferenceAndType',
  invalidIssueReference: 'invalidIssueReference'
}

module.exports = {
  parseCommitMessage,
  ERRORS
}
