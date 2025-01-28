import {Server} from 'http'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express, {Express, Router} from 'express'
import multer from 'multer'

export class ExpressServer {
	private server!: Express

	public http?: Server

	private router: Router

	constructor(router: Router) {
		this.router = router
	}

	public build(): void {
		this.server = express()
		this.setupSecurity()

		this.server.use(this.router)
	}

	public async start(port: number): Promise<void> {
		return new Promise((resolve, reject) => {
			this.http = this.server?.listen(port, () => {
				console.log(`🚀 App started in port : ${port}`)
				resolve()
			})
		})
	}

	private setupSecurity() {
		this.server.use(
			cors({
				origin: '*',
				credentials: true,
			})
		)
	}
}
