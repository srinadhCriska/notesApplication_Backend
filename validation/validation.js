const { response } = require("express");
const { findMissingDataFunc, findNotesFunc } = require("../utilities/findData");

// POST METHOD VALIDATION FUNCTION
const updateDataValidation = async (req, res, next) => {
  console.log("Add newNotes Validation Called");

  const newNotesData = req.body;
  const isValidData = findMissingDataFunc(newNotesData);

  if (isValidData.isDataFieldsMissing || !newNotesData) {
    res.status(400).json({
      code: "0000",
      message: "Provide Valid Data",
      missingField: newNotesData ? isValidData.missingKeys : null,
      missingFieldsData: newNotesData ? isValidData.missingDataFields : null,
    });
  }
  next();
};

// DEL METHOD VALIDATION FUNCTION

const delNotesValidation = async (req, res, next) => {
  console.log("Del Validation Called");
  try{
    const {id}=req.params
    console.log(id);
    
    if (!id || id === "") {
      return res.status(400).json({
        code: "0000",
        message: "Please provide valid input",
      });
    }
    const isNotesFound = await findNotesFunc(id);
    if(!isNotesFound){
      return res.status(400).json({
        code: "0000",
        message: "Item is not available in the Database",
      });
    }
    next()
  }
  catch(err){
    console.log("Error in Del Validation");
    throw err
  }
  
};

// UPDATE VALIDATION FUNCTION

const modifyNotesValidation = (req, res, next) => {
  console.log("Update Notes Validation Called");
  
  const { id, description,title } = req.body;

  if (!description || !id || !title) {
    res.status(400).json({
      code: "0000",
      message: "Please provide valid details to update",
      response:false
    });
  } else {
    next();
  }
};

module.exports = {
  updateDataValidation,
  delNotesValidation,
  modifyNotesValidation,
};
