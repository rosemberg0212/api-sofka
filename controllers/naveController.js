const { body } = require('express-validator');
const {Nave} = require('../models/index');

const crearNave= async(req, res)=>{

	//obtenemos los datos que ingresa el usuario
	const {...body} = req.body

	//creamos un nuebo objeto de tipo nave
	const nave = new Nave({...body});

	//guardar en BD
	await nave.save(); 

	res.json(nave);
}

const obtenerNave = async(req, res)=>{

	//hacemos una busqueda de todos los objetos en la bd 
	const nave = await Nave.find({estado: true})

	res.json(nave)
}


const NaveDelete = async (req, res)=>{  

	//obtenemos el id que del objeto que queremos eliminar
    const {id} = req.params; 

    //borrar fisicamente de la base de datos
    // const nave = await Nave.findByIdAndDelete(id);


	//cambiamos el estado del objeto en la base de datos
    const nave = await Nave.findByIdAndUpdate(id, {estado:false})

    res.json({
        nave
    }); 
}

module.exports = {
	crearNave,
	obtenerNave,
	NaveDelete
}