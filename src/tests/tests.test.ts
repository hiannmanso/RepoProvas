import supertest from 'supertest'
import server from '../app'
import { accountValid } from './factories/auth.factory'
import {
	loginInfos,
	newTestInfos,
	testWithoutCategoryId,
	testWithoutName,
	testWithoutteacherDisciplineId,
} from './factories/tests.factory'

describe(`tests test`, () => {
	it(`create new test`, async () => {
		const response = await supertest(server)
			.post('/signin')
			.send(accountValid())

		const result = await supertest(server)
			.post('/tests')
			.send(newTestInfos())
			.set('Authorization', `Bearer ${response.text}`)
		expect(result.status).toEqual(201)
	})
	it(`create new test without name`, async () => {
		const result = await supertest(server)
			.post('/tests')
			.send(testWithoutName())
		expect(result.status).toEqual(422)
	})
	it(`create new test with categoryID not found`, async () => {
		const result = await supertest(server)
			.post('/tests')
			.send(testWithoutCategoryId())
		expect(result.status).toEqual(422)
	})
	it(`create new test with teacherDisciplineId not found`, async () => {
		const result = await supertest(server)
			.post('/tests')
			.send(testWithoutteacherDisciplineId())
		expect(result.status).toEqual(422)
	})
})
