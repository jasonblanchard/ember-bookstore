json.set! :books do
  json.array!(@books) do |book|
    json.extract! book, :id, :title, :description, :created_at, :updated_at
    json.url book_url(book, format: :json)
  end
end
