import { makeObservable, observable } from "mobx";
import { client } from ".";
import { BooksDocument } from "./generated/graphql";

type Book = {
  id: number;
  title: string;
};

export class AppState {
  books: Book[] = [];

  constructor() {
    makeObservable(this, {
      books: observable,
    });

    this.init();
  }

  async init() {
    const response = await client.query(BooksDocument, {}).toPromise();
    this.books = response.data.books;
  }
}
