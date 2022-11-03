import { useBooksQuery } from "./graphql/generated";

function App() {
  const { data: { books = [] } = {} } = useBooksQuery();

  return (
    <>
      {books.map((book) => {
        return <div key={book.id}>{book.title}</div>;
      })}
    </>
  );
}

export default App;
