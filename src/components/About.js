import React from "react";

function About(props) {
  const defaultImg = "https://via.placeholder.com/215";
  return (
    <aside className="container">
      <img src={props.image ? props.image : defaultImg} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
