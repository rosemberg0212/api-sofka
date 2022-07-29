const {Router} = require('express');
const {check} = require('express-validator');
const { 
	crearTipoNave,
	obtenerTipoNave,
	tipoNaveDelete
} = require('../controllers/tipoController');
const {validarCampos} = require('../middlewares/validar-campos')
const {TipoExiste, TipoExisteid} = require('../helpers/db-validator')
const router = Router();


router.get('/', obtenerTipoNave);

router.post('/',[
	check('nombre','El nombre es obligatorio').not().isEmpty(),
	check('nombre').custom(TipoExiste),
	validarCampos
],crearTipoNave);

router.delete('/:id',[
	check('id','No es un ID valido').isMongoId(),
	check('id').custom(TipoExisteid),
	validarCampos
], tipoNaveDelete);



module.exports = router;