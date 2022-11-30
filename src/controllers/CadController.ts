import { Request, Response } from "express";
import CadModel from "../database/cadModel";

const CadController = {

    async index(req: Request, res: Response): Promise<Response> {

        let cads = await CadModel.find()
        return res.json(cads)
    },

    async findById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params        
        let cad = await CadModel.findById(id)
        return res.json(cad)
    },

    async create(req: Request, res: Response): Promise<Response> {
                               
        let cad = await CadModel.create(req.body)
        return res.json(cad)
    },

    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const { 
            nome,
            datanasc,
            telefone,
            email,
            escolaridade,
            cpf,
            estadocivil } = req.body        
        
        let cad = await CadModel.findByIdAndUpdate(id,{
            nome:nome,
            datanasc:datanasc,
            telefone:telefone,
            email:email,
            escolaridade:escolaridade,
            cpf:cpf,
            estadocivil:estadocivil
        })

        return res.json(cad)
    },

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params        
        let cad = await CadModel.findByIdAndDelete(id)
        return res.json(cad)
    },
}

export default CadController