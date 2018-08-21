const Either = require('../types/either')

/**
 * Parses a string to the JavaScript representation.
 *
 * @sig String -> {Either}
 * @param {String} text Text to be parsed
 * @return {Either} Result of parse
 */
const safeParseJson = text => {
  try {
    return Either.fromNullable(text).map(JSON.parse)
  } catch (error) {
    return Either.left(`${error.name}: ${error.message}`)
  }
}

module.exports = safeParseJson
