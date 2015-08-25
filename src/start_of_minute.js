/**
 * Returns start of a minute for given date. Date will be in local timezone.
 * @param {date|string} dirtyDate
 * @returns {date}
 */
var startOfMinute = function(dirtyDate) {
  var date = new Date(dirtyDate)
  date.setSeconds(0, 0)
  return date
}

module.exports = startOfMinute
