import bcrypt from 'bcrypt'

import authRepository from '../repositories/auth.repository.js'
import { generateToken } from '../utils/token.js'

export async function signUp(email: string, password: string) {
	const checkEmailIsValid = await authRepository.getByEmail(email)
	if (checkEmailIsValid) {
		throw {
			status: 401,
			message: `This email is already in use.`,
		}
	}
	await authRepository.insert(email, bcrypt.hashSync(password, 10))
}

export async function signIN(email: string, password: string) {
	const checkEmailIsValid = await authRepository.getByEmail(email)
	if (!checkEmailIsValid) {
		throw {
			status: 404,
			message: `This email  is not registered.`,
		}
	}
	if (!bcrypt.compareSync(password, checkEmailIsValid.password)) {
		throw {
			status: 406,
			message: `Incorrect password or email.`,
		}
	}
	const token = generateToken(checkEmailIsValid.id)
	return token
}
