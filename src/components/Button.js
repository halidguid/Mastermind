const Button = ({ activeRow, rowId, checkAction, canCheck }) => {
  const row = +rowId.substr(4);
  let disabled = "disabled";
  const doNothing = () => false;
  if (activeRow === row) {
    disabled = canCheck ? "" : "disabled";
  }
  const check = disabled === "disabled" ? doNothing : checkAction;
  return (
    <div className={"ok-button " + disabled} onClick={check}>
      check
    </div>
  );
};

export default Button;
