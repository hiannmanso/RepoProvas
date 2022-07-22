import { prisma } from "../configs/database.js"



async function insert(name:string,pdfUrl:string,categoryId:number,teacherDisciplineId:number) {
    
    
    const result = await prisma.tests.create({data:{name,pdfUrl,categoryId,teacherDisciplineId}})
    return result
}

async function findTeacherIDbyName(name:string) {
    const teacher = await prisma.teachers.findUnique({where:{name}})
    return teacher
}

async function findCategoryIDbyName(name:string) {
    const category = await prisma.categories.findUnique({where:{name}})
    return category
}
async function findDisciplinesByName(name:string) {
    //VERIFICAR A PARTE DE DISCIPLINE NO POST
    const discipline = await prisma.disciplines.findUnique({where:{name}}) 
    return discipline  
}

async function  findteacherDisciplineId(teacherId:number,disciplineId:number) {
    const result = await prisma.teachersDisciplines.findMany({where:{teacherId,disciplineId}})
    return result
}

async function findAllTestsGroupByDisciplines() {
    const result = await prisma.tests.findMany({
        where:{},
        include:{
            categories:true,
            teachersDisciplines:{
                include:{teachers:true,disciplines:true}
            },
        }
        
    })
    

    return result
}

const testRepository = {
    insert, 
    findCategoryIDbyName,
    findDisciplinesByName,
    findTeacherIDbyName,
    findteacherDisciplineId,
    findAllTestsGroupByDisciplines
}



export default testRepository