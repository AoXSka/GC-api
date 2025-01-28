
export class BusinessError extends Error {
	field?: string
	constructor(message: string, field?: string) {
		super(message)
		this.name = 'BusinessError'
		this.field = field
	}
}