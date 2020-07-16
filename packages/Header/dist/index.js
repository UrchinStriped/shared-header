
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./shared-header.cjs.production.min.js')
} else {
  module.exports = require('./shared-header.cjs.development.js')
}
