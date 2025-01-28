import {NextFunction, Request, RequestHandler, Response} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken' 
import User from '../models/user'
import {jwtKey} from '../env'
declare module 'express-serve-static-core' {
    interface Request {
        user: User
    }
}

export const requiresAuth = ():RequestHandler => {
	return async (req : Request, res: Response, next : NextFunction) => {
		const token = req.header('Authorization')
		if (!token) return res.status(403).send({success: false, message: 'Token not present, Access Denied'})
		try {
			const extractedToken = token.replace('Bearer ','')
			let decodedToken: JwtPayload
			try{
				decodedToken = jwt.verify(extractedToken, jwtKey)  as JwtPayload
			}catch(e){
				return res.status(403).send({success: false, message: 'Invalid Token'})
			}
			const user = await User.findByPk(decodedToken.userId)
			if(user === null) {
				return res.status(403).json({success: false, message: 'Invalid Token, Access Denied'})
			}
			req.user = user
			return next()
		}catch (e) {
			console.error(e)
			return res.status(403).json({success: false, message: 'Invalid Token, Access Denied'})
		}
	}
}