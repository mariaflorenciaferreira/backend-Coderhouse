const express=require('express')
const {Router}=express

const app=express()
const router=Router()



router.get

app.use('/api/usuario',router)








const PORT=process.env.PORT||4000

app.listen(PORT,()=>{
    console.log('server on PORT 4000')
})