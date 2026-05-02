const { addNewNotesQuery } = require("../dbQueries/dBQueries");

const newNotesDataController = async (req, res) => {
  const newNotesData = req.body;

  try {
    const dbResponse = await addNewNotesQuery(newNotesData);
    res.status(200).json({
      code: "1111",
      message: "Successfully added the new notes",
      serverResponse:dbResponse.serverResponse,
    });
  } catch (err) {
    res.status(400).json({
      code: "0000",
      message: "Failed to create a new notes",
      errorMessage: err.message,
      serverResponse:false
    });
  }
};

module.exports = {
  newNotesDataController,
};
