// define child rescript
module.exports = config => {
  config.target = 'electron-renderer';
  config.externals = {
    "ews-javascript-api": 'require("ews-javascript-api")',
    "@ewsjs/xhr": 'require("@ewsjs/xhr")',

}
  return config;
}