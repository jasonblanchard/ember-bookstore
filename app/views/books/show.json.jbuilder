json.set! :book do
  json.extract! @book, :id, :title, :description, :created_at, :updated_at, :featured
end
