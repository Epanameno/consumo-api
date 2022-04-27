import React from "react";
import { useState } from "react";
import Contador from "./Contador";
import "./contador.css";
import Post from "./Post";

function App() {
  //return < Contador/>
  const [entradasblog, setEntradasBlog] = useState([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ]);

  const listadepost = entradasblog.map((Element) => {
    return <Post key={Element.id} title={Element.title} body={Element.body} />;
  });

  return (
    <>
      <h1>Lista de Post</h1>
      {listadepost}
    </>
  );
}

export default App;
