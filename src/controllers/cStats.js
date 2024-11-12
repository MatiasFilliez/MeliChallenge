import { Stats } from "../db.js"
import { getAllDna } from "./cMutan.js";

export const calculateStats = async ()=>{
    const dataToCalculate = await getAllDna()
    let mutantCount = 0;
    let humantCount = 0;

    dataToCalculate.forEach(dnaData=> {
        if(dnaData.mutant) return ++mutantCount
        ++humantCount
    })

    const calculateResult = (mutantCount /(mutantCount + humantCount)).toFixed(2)

    const getStats = await Stats.findAll()
    
    if(getStats.length < 1){
        
        return await Stats.create({count_mutant_dna:mutantCount,count_human_dna:humantCount, ratio:calculateResult})
    }

    await Stats.update(
        {count_mutant_dna:mutantCount,count_human_dna:humantCount, ratio:calculateResult},
        {where:{id:getStats[0].dataValues.id}}
    )

}

export const getStats = async (req,res)=>{
    const dataStats = await Stats.findAll();
    res.status(200).json(dataStats)
}