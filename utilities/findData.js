const { getNotesDataService } = require("../service/notesData");

const findMissingDataFunc = (inputData) => {
  console.log("Missing Function Called");
  const defaultData = ["id", "title", "description"];

  let missingDataFields = [];
  let missingKeys = [];

  defaultData.forEach((eachField) => {
    if (!(eachField in inputData)) {
      missingKeys.push(eachField);
    } else if (inputData[eachField] === "" || inputData[eachField] === null) {
      missingDataFields.push(eachField);
    }
  });

  return {
    isDataFieldsMissing: missingDataFields.length > 0 || missingKeys.length > 0,
    missingDataFields,
    missingKeys,
  };
};

const findNotesFunc = async (inputData) => {
  console.log("Find Notes Function Called For Del Validation")
  const dBNotesData = await getNotesDataService();
  const isNotesAvailable = dBNotesData.filter(
    (eachNotes) => eachNotes.id === inputData,
  );

  if (isNotesAvailable.length > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  findMissingDataFunc,
  findNotesFunc,
};
