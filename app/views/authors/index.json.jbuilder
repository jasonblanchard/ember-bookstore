json.array!(@authors) do |author|
  json.extract! author, :first_name, :last_name
end
