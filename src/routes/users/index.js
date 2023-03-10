const { Router } = require('express')

const UserController = require('../../controllers/UserController')
const TokenController = require('../../controllers/TokenController')
const ForgotPasswordController = require('../../controllers/ForgotPasswordController')
const middlewareAuth = require('../../middleware/auth')

const router = Router()

router.get('/login', function(req, res) {
    res.redirect('/')
    console.log(__dirname)
})

//Rotas dos usuarios abaixo acessadas atualmente somente pelo o insomnia
router.get('/users/list', UserController.listUsers)
router.post('/user/create', UserController.createUser)
router.post('/token/create', TokenController.createToken)
router.get('/user/:id/list', UserController.listOneUser)
router.put('/user/:id/update', UserController.updateUser)

//atualizar seu proprio perfil
router.put('/user/:id/updatemydata', UserController.updateUserMydata)

//Recuperar senha
router.post('/user/forgotpassword/create', ForgotPasswordController.ForgotPassword)

//Resetar senha
router.post('/user/forgotpassword/reset', ForgotPasswordController.ResetPassword)

router.delete('/user/:id/delete', UserController.deleteUser)

module.exports = router