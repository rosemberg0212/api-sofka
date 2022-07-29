const {Schema, model} = require('mongoose')

const NaveSchema = Schema({
    actividad: {
        type: String,
        required: [true, 'La actividad es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    entidad: {
        type: String,
        required: [true, 'La entidad es obligatorio']
    },
    tipo: {
        type: String,
        required: [true, 'El tipo es obligatorio']
    },
    combustible: {
        type: String,
    },
    
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Nave', NaveSchema);