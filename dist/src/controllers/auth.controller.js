import { signIN, signUp } from "../services/auth.service.js";
export async function signupPOST(req, res) {
    const { email, password } = req.body;
    await signUp(email, password);
    res.status(201).send(`Your account have been created!`);
}
export async function signinGET(req, res) {
    const { email, password } = req.body;
    const token = await signIN(email, password);
    res.status(200).send(token);
}
