import {users} from '@prisma/client'


export interface user {
    email:string,
    password:string,
    confirmPassword?:string,
}
