const { DEFAULTS, RULES } = require('@dwmt/commitlint-common-github-type')

const checkCase = require('./checkCase')
const result = require('./result')

const { ERRORS } = require('../parser')

module.exports = {
  checkCase,
  NotMyJob: result.NotMyJob,
  Success: result.Success,
  Failure: result.Failure,
  parser: {
    errors: ERRORS
  },
  rules: {
    defaultValues: DEFAULTS,
    names: RULES
  }
}
