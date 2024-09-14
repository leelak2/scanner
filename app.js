import  express  from "express"; 
import mongoose from "mongoose";

import bodyParser from "body-parser"
import cors from "cors";
import student from "./models/Student.js";
import attendence from "./models/attendence.js";


const app = express(); 

app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

// Mongo db connection
mongoose.connect('mongodb+srv://Ratnasri:yvNLSE01EUASUtGL@cluster0.drsworb.mongodb.net/?retryWrites=true&w=majority')


// app.listen(5000)

.then(() => app.listen(5000))
.then(() =>
console.log("Connected to Database & Listining to localhost 6000")
)
.catch((err) => console.log(err));



// To Test server
// app.use("/api", (req, res, next)=>{ 
//     res.send("hi hello") 
//     }) 



//to add data api
app.post('/api/adddata', (req, res, next)=>{
    console.log(req.body)
 const {name,suc,year,email} = req.body;
 
 const stud = new student({
    name,
    suc,
    year,
    email
 })

 stud.save()
 return res.status(200).json({message: "success"})
});



// to add data api
app.post('/api/addattn', (req, res, next)=>{
   console.log(req.body)
const {dateattn,suc} = req.body;

const stud = new attendence({
   
   dateattn,
   suc
})

stud.save()
return res.status(200).json({message: "success"})
})




// GET data API
app.get('/api/getTrainees',async (req, res, next)=>{
   let students;
   
       students = await student.find();
   
   if(!students){
       return res.status(404).json({message: "No Students Found."})
   }
   return res.status(200).json({students})
});



// GET data API
app.get('/api/getAttn',async (req, res, next)=>{
   let attendances;
   
   attendances = await attendence.find();
   
   if(!attendances){
       return res.status(404).json({message: "No Students Found."})
   }
   return res.status(200).json({attendances})
})



//  delete student
app.delete('/api/deletestudent/:_id',async (req, res, next)=>{

   const id=req.params._id

console.log

   let student_delete;
   try{
       student_delete= await student.findByIdAndDelete({_id:id})
   }
   catch(err)
   {
       return console.log(err)
   }
   
   if(!student_delete){
       return res.status(400).json({message: "unable to delete."})
   }

   return res.status(200).json({message: "deleted."})

})
  


//edit student data
app.get('/api/get_student_data/:id', async (req, res, next)=>{
    const _id = req.params.id
    let student_data;
    try{
        student_data = await student.findById({_id});
    }catch(err){
        return console.log(err)
    }
    if(!student_data){
        return res.status(400).json({message:"No student Found."})
    }
    return res.status(201).json({student_data})
})
