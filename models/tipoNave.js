const {Schema, model} = require('mongoose')

const TipoNaveSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true 
    }
});


module.exports = model('TipoNave', TipoNaveSchema);