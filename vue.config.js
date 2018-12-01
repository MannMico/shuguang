const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    sourceMap: true
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'));
  }
};
