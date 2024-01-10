import cors from 'cors'
import express from 'express'
import mongoose, { Schema } from 'mongoose'
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

const serviceSchema = new Schema({
   icon:String,
   title:String,
   text:String
  });

const serviceModel = mongoose.model('Service', serviceSchema);


app.get('/', async (req, res) => {
    const services = await serviceModel.find()
    res.send(services)
  })

  app.get('/:id', async (req, res) => {
    const {id} = req.params
    const services = await serviceModel.findById(id)
    res.send(services)
  })
  
  app.post('/', async (req, res) => {
    const {icon,title,text} =req.body
    const newServices = new serviceModel({icon,title,text})
    await newServices.save()
    res.send(newServices)
  })
  
  app.put('/:id', async (req, res) => {
    const {id} = req.params
    const {icon,title,text} =req.body
    const services = await serviceModel.findByIdAndUpdate(id,{icon,title,text})
    res.send(services)
  })
  
  app.delete('/:id', async (req, res) => {
    const {id} = req.params
    const services = await serviceModel.findByIdAndDelete(id)
    res.send("deleted")
  })

  mongoose.connect('mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})