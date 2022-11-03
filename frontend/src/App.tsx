import React from "react";
import { client } from ".";
import { Book, BooksDocument } from "./generated/graphql";

type State = {
  books: Book[];
};
class App extends React.Component {
  state: State = {
    books: [],
  };
  // @ts-ignore
  constructor(props) {
    super(props);
    this.init();
  }

  async init() {
    const response = await client.query(BooksDocument, {}).toPromise();
    this.setState({
      books: response.data.books,
    });
  }

  render() {
    return (
      <>
        <h1>書籍一覧</h1>
        {this.state.books.map((book) => {
          return <p key={book.id}>本のタイトル：{book.title}</p>;
        })}
      </>
    );
  }
}

export default App;
