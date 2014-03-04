json.key_format! camelize: :lower

json.set! :review do
  json.extract! @review, :id, :body, :book_id, :created_at, :updated_at
  json.book @review.book.id
end
