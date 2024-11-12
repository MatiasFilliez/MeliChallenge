import { DataTypes } from "sequelize";

export default function mutanModel (sequelize){
    return sequelize.define('dna',{
        dna:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            unique:true,
            allowNull: false
        },
        mutant:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
    },
    { timestamps: false }
)
}