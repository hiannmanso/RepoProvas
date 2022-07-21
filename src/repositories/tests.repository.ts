import { prisma } from "../configs/database.js"



async function insert(name:string,pdfUrl:string,category:string,teacher:string,discipline:string) {
    const teacherId = await findTeacherIDbyName(teacher)
    const categoryId = await findCategoryIDbyName(category)
    const disciplineId = await findDisciplinesByName(discipline)
    const teacherDisciplineId = await findteacherDisciplineId(teacherId,disciplineId)
    
    const result = await prisma.tests.create({data:{name,pdfUrl,categoryId,teacherDisciplineId}})
}

async function findTeacherIDbyName(name:string) {
    const teacher = await prisma.teachers.findUnique({where:{name}})
    if(!teacher){
        throw{
            status:404,
            message:`Teacher don't registered`
        }
    }
    
    return teacher.id
}

async function findCategoryIDbyName(name:string) {
    const category = await prisma.categories.findUnique({where:{name}})
    if(!category){
        throw{
            status:404,
            message:`category don't registered`
        }
    }
    return category.id
}
async function findDisciplinesByName(name:string) {
    //VERIFICAR A PARTE DE DISCIPLINE NO POST
    const discipline = await prisma.disciplines.findUnique({where:{name}}) 
    if(!discipline){
        throw{
            status:404,
            message:`discipline don't registered`
        }
    }
    return discipline.id   
}

async function  findteacherDisciplineId(teacherId:number,disciplineId:number) {
    const result = await prisma.teachersDisciplines.findMany({where:{teacherId,disciplineId}})
    console.log(result)
    if(result.length < 1 ){
        throw{
            status:404,
            message:`Match teacher|discipline don't found`
        }
    }
    return result[0].id
}

const testRepository = {
    insert
}



export default testRepository