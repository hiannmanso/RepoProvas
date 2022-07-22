
import testRepository from "../repositories/tests.repository.js";


export async function insertNewTest(name:string,pdfUrl:string,category:string,teacher:string,discipline:string) {
    const checkTeacher = await testRepository.findTeacherIDbyName(teacher)
    if(!checkTeacher){
        throw{
            status:404,
            message:`Teacher don't registered`
        }
    }
    const checkCategory = await testRepository.findCategoryIDbyName(category)
    if(!checkCategory){
        throw{
            status:404,
            message:`category don't registered`
        }
    }

    const checkdiscipline = await testRepository.findDisciplinesByName(discipline)
    if(!checkdiscipline){
        throw{
            status:404,
            message:`discipline don't registered`
        }
    }
    const checkTeacherDiscipline= await testRepository.findteacherDisciplineId(checkTeacher.id,checkdiscipline.id)
    if(checkTeacherDiscipline.length < 1 ){
        throw{
            status:404,
            message:`Match teacher|discipline don't found`
        }
    }
    const result = await testRepository.insert(name,pdfUrl,checkCategory.id,checkTeacherDiscipline[0].id)
    return result
}


export async function getTestsByDiscipline() {
    const result = await testRepository.findAllTestsGroupByDisciplines()
    return result
}