export const verifyDna = (req,res,next)=>{

    if(!Object.hasOwn(req.body, 'dna')) return res.status(400).json({msg:'No se econtro la propiedad: dna'})

    const {dna} = req.body
    
    if(!dna.length){
       return res.status(400).json({msg:'Recuerde que la estructura del json debe contener la prop dna que va tener dentro el arreglo de strings',status:'invalido'})
    }

    for(let i = 0; i<dna.length; i++){
      
        let esValido = /^[ATGC]+$/.test(dna[i]);
        
        if(dna.length !== dna[i].length)  return res.status(400).json({msg:'Recuerde que el formato de las filas y las columnas debe ser de NxN'})
        
        if(!esValido) return res.status(400).json({msg:'Recuerde que los strings solo pueden contener las siguientes letras: A,T,C y G'})

    }

    next()
}