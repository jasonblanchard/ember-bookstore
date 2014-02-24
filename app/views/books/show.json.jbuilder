json.set! :book do
  json.extract! @book, :id, :title, :description, :created_at, :updated_at, :featured
  json.reviews @reviewIds
end

json.reviews @book.reviews
