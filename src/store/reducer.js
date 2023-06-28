import { combineReducers } from 'redux'

const reducers = {}

const imports = require.context('.', true, /\.\/.+\/reducer\.js$/)

imports.keys().forEach((key) => {
  const storeName = key.replace(/\.\/(.+)\/.+$/, '$1')
  reducers[storeName] = imports(key).default
})

export default combineReducers({
  ...reducers
})