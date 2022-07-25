import supertest from 'supertest';
import server from '../app';
import { accountValid } from './factories/auth.factory';
import { newTestInfos, testWithoutCategoryId, testWithoutName, testWithoutteacherDisciplineId, } from './factories/tests.factory';
describe(`tests test`, () => {
    it(`create new test`, async () => {
        const response = await supertest(server)
            .post('/signin')
            .send(accountValid());
        const result = await supertest(server)
            .post('/tests')
            .send(newTestInfos())
            .set('Authorization', `Bearer ${response.text}`);
        expect(result.status).toEqual(201);
    });
    it(`create new test without name`, async () => {
        const response = await supertest(server)
            .post('/signin')
            .send(accountValid());
        const result = await supertest(server)
            .post('/tests')
            .send(testWithoutName())
            .set('Authorization', `Bearer ${response.text}`);
        expect(result.status).toEqual(422);
    });
    it(`create new test with categoryID not found`, async () => {
        const response = await supertest(server)
            .post('/signin')
            .send(accountValid());
        const result = await supertest(server)
            .post('/tests')
            .send(testWithoutCategoryId())
            .set('Authorization', `Bearer ${response.text}`);
        expect(result.status).toEqual(422);
    });
    it(`create new test with teacherDisciplineId not found`, async () => {
        const response = await supertest(server)
            .post('/signin')
            .send(accountValid());
        const result = await supertest(server)
            .post('/tests')
            .send(testWithoutteacherDisciplineId())
            .set('Authorization', `Bearer ${response.text}`);
        expect(result.status).toEqual(422);
    });
    it(`create new test without token`, async () => {
        const result = await supertest(server)
            .post('/tests')
            .send(newTestInfos());
        expect(result.status).toEqual(404);
    });
    it(`get tests by disciplines `, async () => {
        const response = await supertest(server)
            .post('/signin')
            .send(accountValid());
        const result = await supertest(server)
            .get('/tests/disciplines')
            .send()
            .set('Authorization', `Bearer ${response.text}`);
        expect(result.status).toEqual(200);
    });
    it(`get tests by teachers `, async () => {
        const response = await supertest(server)
            .post('/signin')
            .send(accountValid());
        const result = await supertest(server)
            .get('/tests/teachers')
            .send()
            .set('Authorization', `Bearer ${response.text}`);
        expect(result.status).toEqual(200);
    });
    it(`get tests by teachers WITHOUT TOKEN `, async () => {
        const result = await supertest(server).get('/tests/teachers').send();
        expect(result.status).toEqual(404);
    });
    it(`get tests by discipline WITHOUT TOKEN `, async () => {
        const result = await supertest(server).get('/tests/disciplines').send();
        expect(result.status).toEqual(404);
    });
});
