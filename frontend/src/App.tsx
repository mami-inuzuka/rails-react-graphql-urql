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
          <ul>
            {this.pageState.books.map((book) => {
              return (
                <li key={book.id}>
                  ID: {book.id} タイトル：{book.title}{" "}
                  <button
                    onClick={() => {
                      this.pageState.delete(book.id);
                    }}
                  >
                    🗑
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      );
    }
  }
);

export default App;
