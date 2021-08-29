import Peg from "./Peg";

const Circles = ({
  rowID,
  activeRow,
  pegAction,
  currRow,
  prevRows,
  activeColor,
}) => {
  const rowId = rowID.substr(4);
  let pegs = [];
  for (let i = 0; i < 4; i++) {
    pegs.push(
      <Peg
        pegAction={pegAction}
        activeRow={activeRow}
        key={"p" + rowId + "-" + i}
        pegID={"p" + rowId + "-" + i}
        currRow={currRow}
        prevRows={prevRows}
        activeColor={activeColor}
      />
    );
  }
  return <div className="circles">{pegs}</div>;
};

export default Circles;
