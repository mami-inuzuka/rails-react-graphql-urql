import { observer } from "mobx-react";
import React from "react";
import { AppState } from "./AppState";

const App = observer(
  class App extends React.Component {
    pageState = new AppState();

    render() {
      return (
        <>
          <h1>書籍一覧</h1>
          <input
            value={this.pageState.title}
            onChange={(e) => {
              this.pageState.onChange(e);
            }}
          />
          <button
            onClick={() => {
              this.pageState.create({ title: this.pageState.title });
            }}
          >
            登録
          </button>

          {this.pageState.books.map((book) => {
            return <p key={book.id}>本のタイトル：{book.title}</p>;
          })}
        </>
      );
    }
  }
);

export default App;
