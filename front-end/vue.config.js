// vue.config.js
module.exports = {
    chainWebpack: config => {
      config.module
        .rule('ignore')
        .test(/\.d\.ts$/)
        .use('ignore-loader')
        .loader('ignore-loader')
        .end();
    }
  };
  