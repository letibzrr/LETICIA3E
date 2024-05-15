import fs from "node:fs"

const lerDadosUsuarios = (callback) => { // refatoração do codigo fs
    fs.readFile('usuarios.json', 'utf8', (err, data) => { // (arquivo, criptografia, callback)
        if(err){
           callback(err) 
        }
        try{
            const usuarios = JSON.parse(data)
            callback(null, usuarios)
        }catch(error){
            callback(error)
        }
    });
};
export default lerDadosUsuarios;