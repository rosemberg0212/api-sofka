const {TipoNave, Nave} = require('../models/index')

//Verificar si el tipo de nave existe
const TipoExiste = async (nombre = '')=>{
	const TnaveExiste = await TipoNave.findOne({nombre})
    if(TnaveExiste){
        throw new Error(`El tipo de nave ${nombre} ya existe`)
    }
}

//verificar si el id del tipo de nave existe
const TipoExisteid = async (id)=>{
	const TnaveExisteid = await TipoNave.findById(id)
    if(!TnaveExisteid){
        throw new Error(`El id ${id} no existe`)
    }
}

//verificar si el id de la nave existe
const NaveExiste = async (id)=>{
	const exiNave = await Nave.findById(id)
    if(!exiNave){
        throw new Error(`El id ${id} no existe`)
    }
}


module.exports = {
	TipoExiste,
    TipoExisteid,
    NaveExiste
}