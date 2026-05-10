const express =require("express");
const cors=require("cors");
const { format } = require("date-fns");

const app=express()

// CONTROLLERS
const { getNotesListController } = require("./controller/getData.controller");
const { newNotesDataController } = require("./controller/addNewData.controller");
const { delNotesController } = require("./controller/delNotes.controller");
const { modifyNotesController } = require("./controller/updateData.controller");

// VALIDATIONS
const { updateDataValidation, delNotesValidation, modifyNotesValidation } = require("./validation/validation");

// IN-BUILT MIDDLEWARE 
app.use(express.json())

app.use(cors({
      origin:"http://localhost:5174"
}))

// STARTING SERVER ON PORT NUMBER 3003
app.listen(3003,()=>{
      console.log("Server started running at port number 3003")
})

// GET NOTES API CALL
app.get("/",getNotesListController);

// ADD NEW NOTES API CALL
app.post("/addNewNotes",updateDataValidation,newNotesDataController)

// DEL NOTES API CALL
app.delete("/delNotes/:id",delNotesValidation,delNotesController)

//UPDATE NOTES API CALL
app.patch("/updateNotes",modifyNotesValidation,modifyNotesController);

// let val="2026-04-27T19:43:33.000Z";

// let formatted=format(new Date(val),"yyyy-MM-dd 'at' hh:mm a")
// // console.log(formatted)
//   const now = new Date(); built in method to log the date
//   const formattedDate = format(now, "yyyy-MM-dd hh-mm-ss");
//   console.log(formattedDate)