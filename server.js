require('babel-core/register')
//process.env.NODE_ENV = 'development'
process.env.MASTER_KEY = '12F2G71AD432F69CB1281F7117B0'
process.env.JWT_SECRET = 'xsmyfapujvD96PijUHfgBare1r5ofEoZKJiGRCg636V42oPlUHIyNveqItJfdqs'
process.env.MONGODB_URI = 'mongodb://quierobesarte:c100markii@ds161041.mlab.com:61041/qbapi'

exports = module.exports = require('./src/app')
