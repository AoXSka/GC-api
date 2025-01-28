import {Model, DataTypes} from 'sequelize'
import {sequelize} from '.'

interface UserAttributes {
    id?: number;
	name: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	departament?: string | null;
	token?: string | null;
	admin?: number | null;
	role?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
    
	public readonly id!: number
	public name!: string
	public lastName!: string
	public username!: string
	public email!: string
	public password!: string
	public departament!: string | null
	public token!: string | null
	public admin!: number | null
	public role!: string | null
	public readonly createdAt!: Date
	public readonly updatedAt!: Date
}

User.init({
	id: {
		type: DataTypes.INTEGER, 
		autoIncrement: true, 
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	username: {
		type: DataTypes.STRING,
		allowNull: true,
	},	
	departament: {
		type: DataTypes.STRING,
		allowNull: true,
	},	
	email: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: true,
	},	
	token: {
		type: DataTypes.STRING,
		allowNull: true,
	},	
	admin: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},	
	role: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	createdAt: DataTypes.DATE,
	updatedAt: DataTypes.DATE,
}, {
	tableName: 'Users',
	sequelize
})

export default User