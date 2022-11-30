import {Schema} from 'mongoose'
import mongoose from 'mongoose'


const CadModel = new Schema({

    nome: String,
    datanasc: Number,
    telefone: Number,
    email: String,
    escolaridade: String,
    cpf: Number,
    estadocivil: String
        
},
{timestamps:true})

export default mongoose.model('cads',CadModel)