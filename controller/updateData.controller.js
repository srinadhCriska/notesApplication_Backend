const { format } = require("date-fns");
const { updateNotesQuery } = require("../dbQueries/dBQueries");

const modifyNotesController = async (req, res) => {
  console.log("Update Notes Controller Called");
  const { id, description,title } = req.body;
  

  try {
    const dbResponse = await updateNotesQuery(id, description,title);
   res.status(200).json({
        code: "1111",
        message: "Updated the notes data successfully",
        serverResponse: dbResponse.serverResponse,
      });
    
  } catch (err) {
    console.log("Error at Update controller");
     res.status(400).json({
        code: "0000",
        serverResponse: false,
        message: "Failed to update the data",
      });
  }
};

module.exports = { modifyNotesController };
