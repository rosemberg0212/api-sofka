const {Router} = require('express');
const {check} = require('express-validator');
const { 
	crearNave,
	obtenerNave,
	NaveDelete
} = require('../controllers/naveController');
const {validarCampos} = require('../middlewares/validar-campos')
const {NaveExiste} = require('../helpers/db-validator')
const router = Router();


router.get('/', obtenerNave);

router.post('/',[
	check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('actividad','La actividad es obligatorio').not().isEmpty(),
    check('entidad','La organizacion es obligatorio').not().isEmpty(),
    check('tipo','El tipo es obligatorio').not().isEmpty(),
	validarCampos
],crearNave);

router.delete('/:id',[
	check('id','No es un ID valido').isMongoId(),
	check('id').custom(NaveExiste),
	validarCampos
], NaveDelete);



module.exports = router;