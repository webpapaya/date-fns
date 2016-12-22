var getDateUnit = require('../get_date_unit')
var isValid = require('../is_valid')
var CONSTANTS = require('../constants')

function getWeeks (dirtyDuration) {
  if (!isValid(dirtyDuration)) { return CONSTANTS.INVALID_DURATION }
  return getDateUnit(dirtyDuration, 'W')
}

module.exports = getWeeks