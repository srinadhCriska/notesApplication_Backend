const { getNotesDataService } = require("../service/notesData");

const getNotesListController = async (req, res) => {
  try {
    const data = await getNotesDataService();
    // console.log(data)
    if (data && data.length > 0) {
      // console.log(data[0], "getDate");
      res.status(200).json({
        code: "1111",
        serverResponse: true,
        message: "Successfully Fetched the Data",
        notesData:data,
      });
    } else {
      res.status(203).json({
        code: "1111",
        serverResponse: false,
        message: "No data available in the Database",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "0000",
      serverResponse: false,
      message: err.message,
    });
  }
};

module.exports = { getNotesListController };
