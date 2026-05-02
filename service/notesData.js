const { getNotesDataQuery } = require("../dbQueries/dBQueries");

const getNotesDataService = async () => {
  try {
    const notesData = await getNotesDataQuery();
    return notesData;
  } catch (error) {
    console.log("Error while fetching response from db in Service", error);
    throw error;
  }
};

module.exports = { getNotesDataService };
