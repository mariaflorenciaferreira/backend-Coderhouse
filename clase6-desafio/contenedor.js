const fs= require('fs');

class Contenedor{
    constructor(ruta){
        this.ruta=ruta
    }

    async getAll(){
        try {
            let data = await fs.promises.readFile(this.ruta, 'utf8')
            let dataParse= JSON.parse(data)
    
            if(dataParse.length){
                console.log(dataParse)
            }else{
                console.log(`no hay productos`)
            }
    
        } catch (error) {
            console.log(error)
        }
    
    }
}

module.exports=Contenedor;
