const {alias, aliasJest, configPaths} = require('react-app-rewire-alias')

// const aliasMap = {
//   '@components': 'src/components',
// }

const aliasMap = configPaths('./jsconfig.paths.json')


module.exports = alias(aliasMap)
module.exports.jest = aliasJest(aliasMap)