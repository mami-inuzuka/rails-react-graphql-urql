module Mutations
  class CreateBook < Mutations::BaseMutation
    # 引数の指定, 引数の型, 必須かどうか
    argument :params, InputTypes::Book, required: true

    field :book, Types::BookType, null: false

    def resolve(params:) # 指定した引数
      book = Book.create!(params.to_h)

      { book: book }
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end

