import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Djordje");
  const [loading, setIsLoading] = useState(false);

  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    setIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added");
      setIsLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a blog</h2>
      <form onSubmit={onSubmitHandler}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog content</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Djordje">Djordje</option>
          <option value="Gandalf">Gandalf</option>
        </select>
        {!loading && <button>Add Blog</button>}
        {loading && <button disabled>Adding the blog....</button>}
      </form>
    </div>
  );
};
