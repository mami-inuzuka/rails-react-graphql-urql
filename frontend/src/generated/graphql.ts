import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601DateTime: string;
};

export type Book = {
  readonly __typename?: 'Book';
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  readonly title?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

export type BookAttributes = {
  readonly title: Scalars['String'];
};

/** Autogenerated input type of CreateBook */
export type CreateBookInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly params: BookAttributes;
};

/** Autogenerated return type of CreateBook. */
export type CreateBookPayload = {
  readonly __typename?: 'CreateBookPayload';
  readonly book: Book;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteBook */
export type DeleteBookInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly id: Scalars['ID'];
};

/** Autogenerated return type of DeleteBook. */
export type DeleteBookPayload = {
  readonly __typename?: 'DeleteBookPayload';
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createBook?: Maybe<CreateBookPayload>;
  readonly deleteBook?: Maybe<DeleteBookPayload>;
  readonly updateBook?: Maybe<UpdateBookPayload>;
};


export type MutationCreateBookArgs = {
  input: CreateBookInput;
};


export type MutationDeleteBookArgs = {
  input: DeleteBookInput;
};


export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly book: Book;
  readonly books: ReadonlyArray<Book>;
  /** An example field added by the generator */
  readonly testField: Scalars['String'];
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};

/** Autogenerated input type of UpdateBook */
export type UpdateBookInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly params: BookAttributes;
};

/** Autogenerated return type of UpdateBook. */
export type UpdateBookPayload = {
  readonly __typename?: 'UpdateBookPayload';
  readonly book: Book;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBookMutationVariables = Exact<{
  params: BookAttributes;
}>;


export type CreateBookMutation = { readonly __typename?: 'Mutation', readonly createBook?: { readonly __typename?: 'CreateBookPayload', readonly book: { readonly __typename?: 'Book', readonly id: string, readonly title?: string | null } } | null };

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { readonly __typename?: 'Query', readonly books: ReadonlyArray<{ readonly __typename?: 'Book', readonly id: string, readonly title?: string | null }> };


export const CreateBookDocument = gql`
    mutation CreateBook($params: BookAttributes!) {
  createBook(input: {params: $params}) {
    book {
      id
      title
    }
  }
}
    `;

export function useCreateBookMutation() {
  return Urql.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument);
};
export const BooksDocument = gql`
    query books {
  books {
    id
    title
  }
}
    `;

export function useBooksQuery(options?: Omit<Urql.UseQueryArgs<BooksQueryVariables>, 'query'>) {
  return Urql.useQuery<BooksQuery, BooksQueryVariables>({ query: BooksDocument, ...options });
};