const random = require('./random')

module.exports = (length) =>
  Array.from({length})
    .map(v => String.fromCharCode(random(65, 90)))
    .join('')
