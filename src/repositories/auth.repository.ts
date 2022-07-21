
import { prisma } from "../configs/database.js";




async function insert(email:string,password:string) {
   return prisma.users.create({data:{email,password}})
}

async function getByEmail(email:string) {
    return prisma.users.findUnique({where:{email}})
}


const authRepository={
    insert,
    getByEmail,
}


export default authRepository