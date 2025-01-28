import {Request, Response, Router} from 'express'
import * as Middleware from '../middleware'
import {_login, _me} from '../services/User'
import * as UserService from '../services/User'
export const UserRouter = Router()

UserRouter.post('/login',
	[],
	Middleware.handleRequest(async (req: Request, res: Response): Promise<Response> => {
		const parameters = {
			email: req.body.email.trim().toLowerCase(),
			password: req.body.password,
		}
		const token = await _login(parameters)
		return res.status(200).json({token:token})
	})
)

UserRouter.get('/me',
	[Middleware.requiresAuth()],
	Middleware.handleRequest(async (req: Request, res: Response): Promise<Response> => {
		const userId = req.user.id
		const me = await _me({userId: userId})
		return res.status(200).json({me})
	})
)

UserRouter.post('/register',
	[],
	Middleware.handleRequest(UserService.register)
)