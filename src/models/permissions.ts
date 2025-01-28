import {Model, DataTypes} from 'sequelize'
import {sequelize} from '.'

interface PermissionAttributes {
    id?: number;
    name: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

class Permission extends Model<PermissionAttributes> implements PermissionAttributes {

    public readonly id!: number
    public name!: string
    public description!: string
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}


Permission.init({
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },	
}, {
    sequelize,
    modelName: 'Permissions'
})