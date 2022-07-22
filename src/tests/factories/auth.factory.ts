import { faker } from '@faker-js/faker'

export function bodySignUP() {
	return {
		email: faker.internet.email(),
		password: 'hiann12345',
	}
}
export function bodySignUPInvalidEmail() {
	return {
		email: faker.internet.ip(),
		password: 'hiann12345',
	}
}
export function accountValid() {
	return { email: 'hiann@hiann.com', password: 'hiann12345' }
}
