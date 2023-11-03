const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuarios.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const authController = require('../controllers/auth.controller')

router.get('/login', authController.login)
router.get('/',authMiddleware.verificarJWT, usuariosController.index)
router.get('/:id',authMiddleware.verificarJWT, usuariosController.getById)
router.post('/',authMiddleware.verificarJWT, usuariosController.create)
router.patch('/:id',authMiddleware.verificarJWT, usuariosController.updateParcial)
router.put('/:id',authMiddleware.verificarJWT, usuariosController.updateCompleto)
router.delete('/:id',authMiddleware.verificarJWT, usuariosController.delete)


module.exports = router