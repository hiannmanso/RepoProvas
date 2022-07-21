import chalk from "chalk";
import { Request, Response } from "express";
import { user} from "../interfaces/auth.interface.js";
import { signIN, signUp } from "../services/auth.service.js";



export async function signupPOST(req:Request,res:Response) {
    const {email,password}:user = req.body

    await signUp(email,password)
    res.status(201).send(`Your account have been created!`)
}

export async function signinGET(req:Request,res:Response) {
    const {email,password}:user=req.body
    const token = await signIN(email,password)

    res.status(200).send(token)
}