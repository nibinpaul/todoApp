const PriorityBadge = ({ priority }) => {
  let classname = "danger";
  let text = "High Priority";
  console.log(priority, "priority");
  if (+priority === 1) {
    classname = "info";
    text = "Low Priority";
  } else if (+priority === 2) {
    classname = "warning";
    text = "Medium Priority";
  }
  return (
    <div className={`ml-3 alert badge alert-${classname}`} role="alert">
      {text}
    </div>
  );
};
export default PriorityBadge;
