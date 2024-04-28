//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({path:'./env'})

connectDB()
.then(()=> {app.listen(process.env.port || 8000, ()=> {console.log(`server i running at port : ${process.env.PORT}`)})})
.catch((err)=> {console.log("Mongo db connection failed !!!", err)})















/*
const app = express()

(async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("errer", error)
        })
        
    app.listen(process.env.PORT, ()=> {
        console.log(`App is listening on port ${process.env.PORT}`)
    })
    } catch(error){
        console.log("ERROR :", error)
        throw err
    }
})()
*/
