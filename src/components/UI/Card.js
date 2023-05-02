import "./Card.css";
function Card(props) {
  console.log(props);
  const classes = "card " + props.className;
  console.log(classes);
  return <div className={classes}>{props.children}</div>;
}

export default Card;
