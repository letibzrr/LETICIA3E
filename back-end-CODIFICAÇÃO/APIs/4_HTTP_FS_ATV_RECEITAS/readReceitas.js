import fs from "node:fs"

const lerDadosReceitas = (callback) => { // refatoração do codigo fs
    fs.readFile('receitas.json', 'utf8', (err, data) => { // (arquivo, criptografia, callback)
        if(err){
           callback(err) 
        }
        try{
            const receitas = JSON.parse(data)
            callback(null, receitas)
        }catch(error){
            callback(error)
        }
    });
};
export default lerDadosReceitas;