const express=require('express')
const Contenedor = require('./contenedor')
const {Router}=express
const producto = new Contenedor ('./productos.txt')

const app=express()
const routerProductos=Router()

app.use(express.json())



// PRODUCTOS

const arrayProductos=[]

routerProductos.get('/',async (req,res)=>{

    const productosDisponibles= await producto.getAllProducts()
    res.json(productosDisponibles)

})


routerProductos.get('/productos/:id', async(req,res)=>{
    
    let producto = producto.productos.find(producto => producto.id === Number(req.params.id));
    if (producto) {
        res.send(producto);
    } else {
        res.status(404).send({ error: 'Producto no encontrado' });
    }
    
    
})






// routerProductos.post('/',(req,res)=>{
//     const {marca} =req.body
    

//     res.json({
//         ok:true,
//         msj:'todo bien en post',
//         productos:[...arrayProductos, {marca}]
//     })
// })





app.use('/api/productos',routerProductos)


const PORT=process.env.PORT||4000

app.listen(PORT,()=>{
    console.log('server on PORT 4000')
})
app.on('error',(err)=>{ console.log(err) })