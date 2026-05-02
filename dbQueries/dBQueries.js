const { db } = require("../database/dbObj");

// GET METHOD QUERY

const getNotesDataQuery = async () => {
  const dBQuery = "SELECT * FROM notes";
  try {
    const [rows] = await db.query(dBQuery);
    return rows;
  } catch (err) {
    console.log("Error in fetch dbQuery", err);
    throw err;
  }
};

// POST METHOD QUERY

const addNewNotesQuery = async (data) => {
  const { id, title, description } = data;

  const updatedBQuery =
    "INSERT INTO notes(id,title,description) values(?,?,?);";

  try {
    await db.query(updatedBQuery, [id, title, description]);
    return { serverResponse: true };
  } catch (err) {
    console.log("Error in update dbQuery", err);
    throw err;
  }
};

// DEL NOTES QUERY

const delNotesQuery = async (notesId) => {
  console.log(notesId,"Called In Query");
  const delQuery = "DELETE FROM notes WHERE id=?";
  try {
    await db.query(delQuery, [notesId]);
    return { serverResponse: true };
  } catch (err) {
    console.log("Error while deleting the Notes");
    throw err;
  }
};

// UPDATE QUERY

const updateNotesQuery = async (id, description, title) => {
  const updateQuery = "UPDATE notes SET description=?,title=? WHERE id=? ;";

  try {
    await db.query(updateQuery, [description, title, id]);
    return { serverResponse: true };
  } catch (error) {
    console.log("Error while updating query", error);
    throw err;
  }
};

module.exports = {
  getNotesDataQuery,
  addNewNotesQuery,
  delNotesQuery,
  updateNotesQuery,
};
