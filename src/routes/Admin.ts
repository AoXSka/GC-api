import {Router} from 'express'
import * as Middleware from '../middleware'
import * as AdminService from '../services/Admin'
export const AdminRouter = Router()

AdminRouter.get('/allUsers',
	[
		Middleware.requiresAuth(),
		Middleware.requiresAdmin(),
	],
	Middleware.handleRequest(AdminService.allUsers)
)