import React from "react";
import { BlogList } from "./BlogList";
import useFetch from "../hooks/useFetch";

export const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && <BlogList blogs={data} />}
    </div>
  );
};
