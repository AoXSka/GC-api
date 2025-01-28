import * as dotenv from 'dotenv'

/**
 * Load variables from .env.
 */
dotenv.config()

/**
 * HTTP server port.
 */
export const port = parseInt(<string>process.env['API_PORT'])

/**
 * DB_BCF.
 */
export const DBGC = <string>process.env['DB_GC']

/**
 * JWT_KEY.
 */
export const jwtKey = <string>process.env['JWT_KEY']

