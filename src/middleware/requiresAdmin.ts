import {NextFunction, Request, RequestHandler, Response} from 'express'

export const requiresAdmin = ():RequestHandler => {
	return async (req : Request, res: Response, next : NextFunction) => {
		if(req.user.admin !== 1) {
			return res.status(403).json({success: false, message: 'Access Denied'})
		}
		return next()
	}
}