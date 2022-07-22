import { Request, Response } from "express";
import { test } from "../interfaces/tests.interface.js";
import { getTestsByDiscipline, insertNewTest } from "../services/test.service.js";


export async function testPOST(req:Request,res:Response) {
    const {token} = res.locals
    const {name,pdfUrl,category,teacher,discipline}:test= req.body

    await insertNewTest(name,pdfUrl,category,teacher,discipline)
    res.status(201).send(`Test have been add.`)
}

export async function findAllTestsGET(req:Request,res:Response) {
    const result =await getTestsByDiscipline()



    res.status(200).send(result)
}


