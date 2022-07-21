import { Request, Response } from "express";
import { test } from "../interfaces/tests.interface.js";
import { insertNewTest } from "../services/test.service.js";


export async function testPOST(req:Request,res:Response) {
    //VER COMO PEGA AS INFOS DO LOCALS
    const {name,pdfUrl,category,teacher,discipline}:test= req.body

    const result = await insertNewTest(name,pdfUrl,category,teacher,discipline)
    res.status(201).send(`Test have been add.`)
}