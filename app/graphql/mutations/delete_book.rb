module Mutations
  class DeleteBook < Mutations::BaseMutation
    argument :id, ID, required: true

    # 返却するデータのフィールド、型を指定
    field :id, ID, null: false

    def resolve(id:)
      Book.find(id).delete

      {id: id}
      
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
