import {DataType, Table, Model, Column, PrimaryKey, AllowNull} from 'sequelize-typescript'

@Table({
    timestamps: false,
    tableName: 'users'
})

export class User extends Model {

    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true
    })
    email! :string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    userName! :string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password! :string;
}

const Joi = require('joi')

export const userSchema = Joi.object({
    userName: Joi.string().alphanum()
    .min(2)
    .max(64)
    .required(),

    email: Joi.string().required(),

    password: Joi.string().required(),
})