import { makeObservable, observable } from "mobx";
import { ChangeEvent } from "react";
import { client } from ".";
import {
  BookAttributes,
  BooksDocument,
  CreateBookDocument,
} from "./generated/graphql";

type Book = {
  __typename: "Book";
  id: number;
  title: string;
};
export class AppState {
  books: Book[] = [];
  title: string = "";

  constructor() {
    makeObservable(this, {
      books: observable,
      title: observable,
    });

    this.init();
  }

  async init() {
    const response = await client.query(BooksDocument, {}).toPromise();
    if (response.data) {
      this.books = response.data.books;
    }
  }

  onChange(e: ChangeEvent<HTMLInputElement>) {
    this.title = e.target.value;
  }

  async create(title: BookAttributes) {
    const createdBook = await client
      .mutation(CreateBookDocument, {
        params: title,
      })
      .toPromise();
    if (createdBook) {
      this.books.push(createdBook.data?.createBook?.book);
    }
  }
}
