const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello onichan!')
})

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})

app.post('/home',(req,res)=>{
    res.send('Hello kinalitos')
})

app.put('/editar/1',(req,res)=>{
    res.send('Id 1 editado')
})

app.delete('/borrar/1',(req,res)=>{
    res.send('Elminando usuario 1')
})

