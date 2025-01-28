// eslint-disable-next-line no-undef
require('dotenv').config()

// eslint-disable-next-line no-undef
module.exports = {
	development: {
		use_env_variable: 'DB_GC',
		logging: false,
		seederStorage: 'sequelize',
		dialect: 'mysql',
	}
}
