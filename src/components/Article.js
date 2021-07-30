import React from "react";

function Article(props) {
  const defaultDate = "January 1, 1970";
  return (
    <article className="container">
      <h3>{props.title}</h3>
      <small>{props.date ? props.date : defaultDate}</small>
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;
