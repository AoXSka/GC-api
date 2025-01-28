import {Model, DataTypes} from 'sequelize'
import {sequelize} from '.'

interface CardAttributes {
    id?: number;
    balance: number;
    cardNumber: string;
    cardHolder: string;
    cardDepartment: string;
    status: string;
    expirationDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

class Card extends Model<CardAttributes> implements CardAttributes {

    public readonly id!: number
    public balance!: number
    public cardNumber!: string
    public cardHolder!: string
    public cardDepartment!: string
    public status!: string
    public expirationDate!: Date
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

Card.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    balance: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    cardNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cardHolder: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cardDepartment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expirationDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'cards'
})