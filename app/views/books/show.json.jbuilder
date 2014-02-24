json.set! :book do
  json.extract! @book, :id, :title, :description, :created_at, :updated_at, :featured
  json.reviews @reviewIds
end

json.reviews @book.reviews do |json, review|
  json.extract! review, :body, :id
  json.book review.book.id
end
