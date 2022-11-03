import { useState } from "react";
import {
  useBooksQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} from "./graphql/generated";

function App() {
  const { data: { books = [] } = {} } = useBooksQuery();
  // refetchQueries ... mutation完了後に実行したいqueryを指定
  const [createBook] = useCreateBookMutation({ refetchQueries: ["books"] });
  const [deleteBook] = useDeleteBookMutation({ refetchQueries: ["books"] });
  const [updateBook] = useUpdateBookMutation({ refetchQueries: ["books"] });
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
        return (
          <div key={book.id}>
            <input
              value={book.title || ""}
              onChange={(e) =>
                updateBook({
                  variables: { id: book.id, params: { title: e.target.value } },
                })
              }
            />
            <button
              onClick={() => {
                deleteBook({ variables: { id: book.id } });
              }}
            >
              🗑
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
