var assert = require('power-assert')
var getDays = require('./')

describe('getDays', function () {
  it('PT responds 0 days', function () {
    var result = getDays('PT')
    assert(result === 0)
  })

  it('P1D responds 1 day', function () {
    var result = getDays('PT1D')
    assert(result === 1)
  })

  it('P1.1D responds 1.1 days', function () {
    var result = getDays('PT1.1D')
    assert(result === 1.1)
  })

  it.skip('`I\'m invalid` responds `Invalid Duration`', function () {
    var result = getDays('I\'m invalid')
    assert(result === 'Invalid Duration')
  })
})

