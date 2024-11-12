import { Dna } from "../db.js"
import { calculateStats } from "./cStats.js"

/**
 * Valida si existe secuencia de letras
 * de manera horizontal, vertical y diagonalmente.
 *
 * Devuelve true si encontró mas de una
 * coincidencia
**/

const isMutant = (dna) => {

    const dnaLength = dna.length;

    let isMutantCount = 0;

    for (let i = 0; i < dnaLength; i++) {

        for (let j = 0; j < dnaLength; j++) {

            // Verificar secuencias horizontales
            if (j <= dnaLength - 4 && dna[i][j] === dna[i][j + 1] && dna[i][j] === dna[i][j + 2] && dna[i][j] === dna[i][j + 3]) {
                console.log('horizontal ','posicion',j,i, 'frase',dna[i][j],dna[i][j + 1],dna[i][j + 2],dna[i][j + 3])
                ++isMutantCount
            }

            // Verificar secuencias verticales
            if (i <= dnaLength - 4 && dna[i][j] === dna[i + 1][j] && dna[i][j] === dna[i + 2][j] && dna[i][j] === dna[i + 3][j]) {
                console.log('verticales ','posicion ',i,j, ' frase',dna[i][j],dna[i + 1][j],dna[i + 2][j],dna[i + 3][j])
                ++isMutantCount
            }
            
            // Verificar diagonales descendentes (de izquierda a derecha)
            if (i <= dnaLength - 4 && j <= dnaLength - 4 && dna[i][j] === dna[i + 1][j + 1] && dna[i][j] === dna[i + 2][j + 2] && dna[i][j] === dna[i + 3][j + 3]) {
                console.log('diagonal izquierda a derecha','posicion ',i,j, ' frase',dna[i][j],dna[i + 1][j+1],dna[i + 2][j+2],dna[i + 3][j+3])
                ++isMutantCount
            }

            // Verificar diagonales ascendentes (de derecha a izquierda)
            if (i >= 3 && j <= dnaLength - 4 && dna[i][j] === dna[i - 1][j + 1] && dna[i][j] === dna[i - 2][j + 2] && dna[i][j] === dna[i - 3][j + 3]) {
                console.log('diagonal derecha a izquierda','posicion ',i,j, ' frase',dna[i][j],dna[i - 1][j+1],dna[i - 2][j+2],dna[i - 3][j+3])
                ++isMutantCount
            }

        }
    }

    return isMutantCount > 1
}

export const getAllDna = async ()=>{
    const dataResult = await Dna.findAll()
    return dataResult
}


//POST
export const mutantPost = async (req,res)=>{
        const {dna} = req.body
        const databaseData = await Dna.findOne({where:{dna:dna}});

        if(databaseData){
            return res.send({msg:'dna ya existente',data:databaseData.dna})
        }

        const boolean = isMutant(dna)

        if(boolean){

            await Dna.create({dna:dna, mutant:boolean})

            await calculateStats()

         return res.sendStatus(200)
        }

        await Dna.create({dna:dna, mutant:boolean})

        await calculateStats()

        return res.sendStatus(403)
    }
