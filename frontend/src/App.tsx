import { useState } from "react";
import { useBooksQuery, useCreateBookMutation } from "./graphql/generated";

function App() {
  const { data: { books = [] } = {} } = useBooksQuery();
  // refetchQueries ... mutation完了後に実行したいqueryを指定
  const [createBook] = useCreateBookMutation({ refetchQueries: ["books"] });
  const [title, setTitle] = useState("");

  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          createBook({ variables: { params: { title: title } } });
          setTitle("");
        }}
      >
        保存
      </button>
      {books.map((book) => {
        return <div key={book.id}>{book.title}</div>;
      })}
    </>
  );
}

export default App;
