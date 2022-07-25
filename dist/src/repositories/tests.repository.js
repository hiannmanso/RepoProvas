import { prisma } from '../configs/database.js';
async function insert(name, pdfUrl, categoryId, teacherDisciplineId) {
    const result = await prisma.tests.create({
        data: { name, pdfUrl, categoryId, teacherDisciplineId },
    });
    return result;
}
async function findTeacherIDbyName(name) {
    const teacher = await prisma.teachers.findUnique({ where: { name } });
    return teacher;
}
async function findCategoryIDbyName(name) {
    const category = await prisma.categories.findUnique({ where: { name } });
    return category;
}
async function findDisciplinesByName(name) {
    //VERIFICAR A PARTE DE DISCIPLINE NO POST
    const discipline = await prisma.disciplines.findUnique({ where: { name } });
    return discipline;
}
async function findteacherDisciplineId(teacherId, disciplineId) {
    const result = await prisma.teachersDisciplines.findMany({
        where: { teacherId, disciplineId },
    });
    return result;
}
async function findAllTestsGroupByDisciplines() {
    const result = await prisma.terms.findMany({
        orderBy: { number: 'asc' },
        where: {},
        include: {
            disciplines: {
                include: {
                    teachersDisciplines: {
                        include: {
                            disciplines: {},
                            teachers: {},
                            tests: {
                                include: {
                                    categories: {},
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    return result;
}
async function findAllTestsGroupByTeacher() {
    const result = await prisma.teachersDisciplines.findMany({
        where: {},
        include: {
            teachers: {},
            disciplines: { include: { terms: {} } },
            tests: { include: { categories: {} } },
        },
    });
    return result;
}
const testRepository = {
    insert,
    findCategoryIDbyName,
    findDisciplinesByName,
    findTeacherIDbyName,
    findAllTestsGroupByDisciplines,
    findteacherDisciplineId,
    findAllTestsGroupByTeacher,
};
export default testRepository;
