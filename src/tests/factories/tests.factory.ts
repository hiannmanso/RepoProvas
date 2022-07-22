import { faker } from '@faker-js/faker'

export function newTestInfos() {
	return {
		name: 'hiann',
		pdfUrl: 'https://bootcampra.notion.site/Projeto-20-RepoProvas-27d678dab2584fc980f1686285d1d04c',
		category: 'Projeto',
		teacher: 'Diego Pinho',
		discipline: 'HTML e CSS',
	}
}
export function testWithoutName() {
	return {
		pdfUrl: faker.internet.url(),
		categoryId: 1,
		teacherDisciplineId: 1,
	}
}
export function testWithoutCategoryId() {
	return {
		name: faker.internet.userName(),
		pdfUrl: faker.internet.url(),
		categoryId: Number(faker.random.numeric()),
		teacherDisciplineId: 1,
	}
}
export function testWithoutteacherDisciplineId() {
	return {
		name: faker.internet.userName(),
		pdfUrl: faker.internet.url(),
		categoryId: 1,
		teacherDisciplineId: Number(faker.random.numeric()),
	}
}
export function loginInfos() {
	return { email: 'hiann@hiann.com', password: 'hiann12345' }
}
