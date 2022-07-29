const {TipoNave} = require('../models/index');

const crearTipoNave= async(req, res)=>{

	//obtenemos los datos que ingresa el usuario
	const {nombre} = req.body

	//verificar si el tipo de nave ya existe
	const tipoExis = await TipoNave.findOne({nombre});
	if(tipoExis){
		return res.status(400).json({
			msg: 'el tipo ya exite'
		})
	}

	//creamos un nuebo objeto de tipo nave
	const tipo = new TipoNave({nombre});

	//guardar en BD
	await tipo.save();

	res.json(tipo);
}

const obtenerTipoNave = async(req, res)=>{

	//hacemos una busqueda de todos los objetos en la bd 
	const tipo = await TipoNave.find({estado: true})

	res.json(tipo)
}


const tipoNaveDelete = async (req, res)=>{  

	//obtenemos el id que del objeto que queremos eliminar
    const {id} = req.params; 

    //borrar fisicamente de la base de datos
    // const tipo = await TipoNave.findByIdAndDelete(id);


	//cambiamos el estado del objeto en la base de datos
    const tipo = await TipoNave.findByIdAndUpdate(id, {estado:false})

    res.json({
        tipo
    });
}

module.exports = {
	crearTipoNave,
	obtenerTipoNave,
	tipoNaveDelete
}