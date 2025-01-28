import {Request, Response} from 'express'
import User from '../models/user'

export const allUsers = async (req: Request, res: Response): Promise<Response> => {
	const users = await User.findAll({attributes: ['id', 'name', 'lastName', 'email', 'role', 'username'], raw: true})
	return res.status(200).json({users})
}