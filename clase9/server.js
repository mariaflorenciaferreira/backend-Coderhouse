const express=require('express')
const fs = require('fs'); // defino el motor de plantilla

const app=express()

const PORT=process.env.PORT||4000




app.engine('ntl',  (filePath, options, callback) =>{

    fs.readFile(filePath,  (err, archivo)=> {

    if (err) {
        return callback(new Error(err));
    }
    const rendered = archivo.toString()
                            .replace('# title #', ' '+ options.title +'')
                            .replace('# message #', ' '+ options.message +'');
    return callback(null, rendered);
  });
});


app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', 'ntl'); // registra el motor de plantillas

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Hola mundo',
        message:'Bienvenido a mi pagina'
    })
})


app.use(express.static('public'))


app.listen(PORT,()=>{
    console.log('server is running')
})
