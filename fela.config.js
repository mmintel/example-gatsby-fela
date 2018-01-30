const namedKeys = require('fela-plugin-named-keys').default

const namedKeysPlugin = namedKeys({
  fromXS: '@media (min-width: 319px)',
  XS: '@media (max-width: 319px)',
  toS: '@media (max-width: 319px)',
  S: '@media (min-width: 320px) and (max-width: 767px)',
  fromS: '@media (min-width: 320px)',
  toM: '@media (max-width: 768px)',
  M: '@media (min-width: 768px) and (max-width: 1023px)',
  fromM: '@media (min-width: 768px)',
  toL: '@media (max-width: 1024px)',
  L: '@media (min-width: 1024px) and (max-width: 1199px)',
  fromL: '@media (min-width: 1024px)',
  toXL: '@media (max-width: 1200px)',
  XL: '@media (min-width: 1200px) and (max-width: 1599px)',
  fromXL: '@media (min-width: 1200px)',
  toXXL: '@media (max-width: 1599px)',
  XXL: '@media (min-width: 1599px)',
})


module.exports = {
  plugins: [ namedKeysPlugin ]
}
