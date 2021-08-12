import React from "react";
import { Link } from "react-router-dom";

export const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((b) => (
        <div className="blog-preview" key={b.id}>
          <Link to={`/blogs/${b.id}`}>
            <h2>{b.title}</h2>
            <p>Written by {b.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
