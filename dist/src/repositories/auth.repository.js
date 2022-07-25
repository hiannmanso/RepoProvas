import { prisma } from "../configs/database.js";
async function insert(email, password) {
    return prisma.users.create({ data: { email, password } });
}
async function getByEmail(email) {
    return prisma.users.findUnique({ where: { email } });
}
const authRepository = {
    insert,
    getByEmail,
};
export default authRepository;
