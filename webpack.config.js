const { merge } = require('webpack-merge'); //[1]
const commonConfig = require('./webpack.common'); //[2]

module.exports = (env) => {
    const file = env.dev ? 'development' : 'production'
    const config = require('./webpack.' + file); //[3]
    return merge(commonConfig, config); //[4]
};