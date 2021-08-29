const Hints = ({ prevHints, hints, activeRow, rowId }) => {
  let allHints = [];
  let hintClass = "";
  const rowID = +rowId.substr(4);
  const hintArr = hints;
  const previousHints = prevHints;

  for (let i = 0; i < hintArr.length; i++) {
    if (rowID === activeRow) {
      hintClass =
        hintArr[i] === 2 ? "exact" : hintArr[i] === 1 ? "partial" : "";
    } else {
      for (let j = 0; j < previousHints.length; j++) {
        if (rowID === j) {
          hintClass =
            previousHints[i][j] === 2
              ? "exact"
              : previousHints[i][j] === 1
              ? "partial"
              : "";
        }
      }
    }
    allHints.push(
      <CheckBox
        hintClass={hintClass}
        key={"h_" + rowID + i}
        id={"h_" + rowID + i}
      />
    );
  }
  return <div className="hints">{allHints}</div>;
};
const CheckBox = ({ hintClass, id }) => (
  <span className={hintClass} id={id}></span>
);

export default Hints;
