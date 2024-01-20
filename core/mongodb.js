/**
 * Mongoose module.
 * @file 数据库模块
 * @module core/mongoose
 * @author  biaochenxuying <https://github.com/biaochenxuying>
 */

const consola = require('consola')
const CONFIG = require('../app.config.js')
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

// mongoose Promise
mongoose.Promise = global.Promise

// mongoose
exports.mongoose = mongoose

// connect
exports.connect = () => {
    // console.log('CONFIG.MONGODB.uri :', CONFIG.MONGODB.uri)
	
	// 连接数据库
	mongoose.connect('mongodb://localhost:27017/blogNode').then(() => {
		consola.ready('数据库连接成功!')
	}).catch(() => {
		consola.warn('数据库连接失败!')
	})

	// 自增 ID 初始化
	autoIncrement.initialize(mongoose.connection)
	
	// 返回实例
	return mongoose
}
