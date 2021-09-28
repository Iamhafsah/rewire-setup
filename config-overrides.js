// const {alias} = require('react-app-rewire-alias')
const {alias, configPaths} = require('react-app-rewire-alias')


// const aliasMap = {
//   '@components': 'src/components',
// }

const aliasMap = configPaths('./jsconfig.paths.json')


module.exports = alias(aliasMap)
