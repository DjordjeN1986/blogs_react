import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry...</h2>
      <p>That page is unavailable or does not exist</p>
      <Link to="/">Back to Homepage...</Link>
    </div>
  );
};
