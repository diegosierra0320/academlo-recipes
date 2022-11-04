const router = require('express').Router()
const passport = require('passport')
const userServices = require('./users.services')
const adminValidate = require('../middlewares/role.middleware')
const {getUserRecipes} = require('../recipes/recipes.services')

require('../middlewares/auth.middleware')(passport)

// Rutas raiz /users
// Para proteger rutas passport.authenticate('jwt', {session: false}),
router.get('/', userServices.getAllUsers)

// Rutas dinamicas por Id
// router.get('/users/:id', userServices.getUsersById)
// router.patch('/users/:id', userServices.getUsersById)
// router.get('/users/:id', userServices.getUsersById)
// router.get('/users/:id', userServices.getUsersById)

// Ruta de información propia del usuario loggeado
router.route('/me')
.get(passport.authenticate('jwt', {session: false}), userServices.getMyUser)
.patch(passport.authenticate('jwt', {session: false}), userServices.patchMyUser)
.delete(passport.authenticate('jwt', {session: false}), userServices.deleteMyUser)

router.get('/me/my_recipes',
        passport.authenticate('jwt', {session: false}),
        getUserRecipes
)

router.route('/:id')
    .get(userServices.getUsersById)
    .patch(passport.authenticate('jwt', {session: false}), adminValidate, userServices.patchUser)
    .delete(passport.authenticate('jwt', {session: false}), adminValidate, userServices.deleteUser)



module.exports = router