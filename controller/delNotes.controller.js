
const { delNotesQuery } = require("../dbQueries/dBQueries");

const delNotesController = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const dbResponse = await delNotesQuery(id);
    res.status(200).json({
      code: "1111",
      message: "Successfully deleted the Notes",
      serverResponse: dbResponse.serverResponse,
    });
  } catch (err) {
    res.status(400).json({
      error: "0000",
      serverResponse:false,
      message: err.message,
    });
  }
};

module.exports = {
  delNotesController,
};
