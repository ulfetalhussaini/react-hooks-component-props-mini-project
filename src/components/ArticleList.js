import React from "react";

function ArticleList(props) {
  return (
    <main className="container">
      {props.posts.map((post) => (
        <div key={post.id}>
          {post.title}
          {post.date}
          {post.preview}
        </div>
      ))}
    </main>
  );
}

export default ArticleList;
