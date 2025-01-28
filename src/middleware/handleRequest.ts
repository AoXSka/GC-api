import {Request, RequestHandler, Response} from 'express'
import {BusinessError} from '../errors/businessError'
import {getJWTToken} from '../services/User'

export function handleRequest(fn:(req :Request, res :Response) => Promise<Response>):RequestHandler {
	return async (req : Request, res : Response) => {
		try {
			const originalJson = res.json.bind(res)
			res.json = (body) => {
			  if(req.user) res.set('extended-token', getJWTToken(req.user))
			  return originalJson(body)
			}
			const result = await fn(req, res)
			return result
		} catch (e) {
			if(e instanceof BusinessError) {
				return res.status(400).json({success: false, message: e.message, field: e.field})
			}
			console.error(e)
			return res.status(500).json({success: false, message: 'Internal Server Error'})
		}
	}
}