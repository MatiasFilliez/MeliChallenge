import { DataTypes } from "sequelize";

export default function (sequelize){
    return sequelize.define('stats', {
        count_mutant_dna:{
            type:DataTypes.INTEGER,
        },
        count_human_dna:{
            type:DataTypes.INTEGER,
        },
        ratio:{
            type: DataTypes.DECIMAL(10,2),
        }
    },
    { timestamps: false }
)
}