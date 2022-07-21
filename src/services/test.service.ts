
import testRepository from "../repositories/tests.repository.js";


export async function insertNewTest(name:string,pdfUrl:string,category:string,teacher:string,discipline:string) {
    const result = await testRepository.insert(name,pdfUrl,category,teacher,discipline)
    return result
}