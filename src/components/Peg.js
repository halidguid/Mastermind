const Peg = ({
  pegAction,
  activeRow,
  key,
  pegID,
  currRow,
  prevRows,
  activeColor,
}) => {
  const pegId = +pegID.substr(pegID.indexOf("-") + 1);
  const rowId = +pegID.substr(1, pegID.indexOf("-") - 1);
  let clase = "";
  if (activeRow === rowId) {
    clase = currRow[pegId];
  } else {
    for (let i in prevRows) {
      if (+i === +rowId) {
        clase = prevRows[rowId][pegId];
      }
    }
  }
  return (
    <span
      id={pegId}
      className={"peg " + clase}
      onClick={() => pegAction(activeColor, pegId)}
    ></span>
  );
};

export default Peg;
