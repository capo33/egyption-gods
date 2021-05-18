import React from "react";
function Card(props) {
  return (
    <div>
      <p className="center">{props.name}</p>
      <img src={props.img} alt="god" className="gods" />
      <p>{props.title}</p>
      <a href="Https://www.google.com" target="blank">
        Read Story
      </a>
    </div>
  );
}
export default Card;
