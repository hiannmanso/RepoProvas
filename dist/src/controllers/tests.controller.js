import { getTestsByDiscipline, getTestsByTeacher, insertNewTest, } from '../services/test.service.js';
export async function testPOST(req, res) {
    const { token } = res.locals;
    const { name, pdfUrl, category, teacher, discipline } = req.body;
    await insertNewTest(name, pdfUrl, category, teacher, discipline);
    res.status(201).send(`Test have been add.`);
}
export async function findAllTestsByDisciplieGET(req, res) {
    const result = await getTestsByDiscipline();
    res.status(200).send(result);
}
export async function findAllTestsByTeacherGET(req, res) {
    const result = await getTestsByTeacher();
    res.status(200).send(result);
}
