import { DataTypes } from "sequelize";
import conn from "../config/conn.js"

export const User = conn.define("users", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true 
        },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
    {tableName: "users",}
);

export default User;