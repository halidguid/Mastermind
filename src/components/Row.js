import Circles from "./Circles";
import Button from "./Button";
import Hints from "./Hints";

const Row = ({
  key,
  id,
  activeRow,
  currRow,
  prevRows,
  activeColor,
  pegAction,
  checkAction,
  canCheck,
  prevHints,
  hints,
}) => {
  let active = "";
  if (+id.substr(4) === activeRow) {
    active = "active";
  }
  return (
    <div className={"row" + active} id={id}>
      <Circles
        rowID={id}
        activeRow={activeRow}
        pegAction={pegAction}
        currRow={currRow}
        prevRows={prevRows}
        activeColor={activeColor}
      />
      <Hints
        prevHints={prevHints}
        hints={hints}
        activeRow={activeRow}
        rowId={id}
      />
      <Button
        activeRow={activeRow}
        rowId={id}
        checkAction={checkAction}
        canCheck={canCheck}
      />
    </div>
  );
};

export default Row;
