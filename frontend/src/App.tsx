import { gql, useQuery } from "@apollo/client";

const FETCH_BOOKS = gql`
  query {
    books {
      id
      title
    }
  }
`;

type Book = {
  id: string;
  title: string;
};

function App() {
  const { data: { books = [] } = {} } = useQuery(FETCH_BOOKS);

  return (
    <>
      {books.map((book: Book) => {
        return <div key={book.id}>{book.title}</div>;
      })}
    </>
  );
}

export default App;
