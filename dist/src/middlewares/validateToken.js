import { decodeToken } from "../utils/token.js";
export async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        throw {
            status: 404,
            message: `Token is required.`
        };
    }
    const infoToken = decodeToken(authorization);
    res.locals.token = infoToken;
    next();
}
