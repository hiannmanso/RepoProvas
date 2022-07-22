import supertest from 'supertest'
import expresss from 'express'
import server from './../app.js'
import { prisma } from '../configs/database.js'
import { faker } from '@faker-js/faker'
import {
	accountValid,
	bodySignUP,
	bodySignUPInvalidEmail,
} from './factories/auth.factory.js'

describe('auth tests', () => {
	it(`signUP test `, async () => {
		const result = await supertest(server)
			.post('/signup')
			.send(bodySignUP())
		expect(result.status).toEqual(201)
	})

	it(`signUP test with email Invalid `, async () => {
		const result = await supertest(server)
			.post('/signup')
			.send(bodySignUPInvalidEmail())
		expect(result.status).toEqual(422)
	})
	it(`signUP test with password Invalid `, async () => {
		const body = {
			email: faker.internet.email(),
			password: '~~~~',
		}
		const result = await supertest(server).post('/signup').send(body)
		expect(result.status).toEqual(422)
	})

	it(`signIN test`, async () => {
		const result = await supertest(server)
			.post('/signin')
			.send(accountValid())

		expect(result.status).toEqual(200)
	})
	it(`signIn test in account not exist`, async () => {
		const body = {
			email: faker.internet.email(),
			password: 'hiann12345',
		}
		const result = await supertest(server).get('/signin').send(body)
		expect(result.status).toEqual(404)
	})
})
