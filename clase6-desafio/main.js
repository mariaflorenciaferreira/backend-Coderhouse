const Contenedor= require('./contenedor')
const express=require('express')

const app=express()

const producto= new Contenedor('./listadoProductos.txt')
const PORT=8080

const server=app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto: ${server.address().port}`)

})
server.on('error',(err)=>{ console.log(err) })


app.get('/productos', (req,res)=>{

    const productosDisponibles=producto.getAll()
    res.send(`${productosDisponibles}` )
})





app.get('/productoRandom', (req,res)=>{

    const numero=(min,max)=>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    console.log(numero)
    
    const productoElegido=producto.getProduct(numero)
    res.send(`${productoElegido}`)
    console.log(productoElegido)
})



