import {Router} from 'express'
import {UserRouter} from './User'
import {AdminRouter} from './Admin'

const routes = Router()

routes.use('/user', UserRouter)
routes.use('/admin', AdminRouter)

export {routes}
