# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Book.create(:title => "Green Eggs and Ham", :description => 'A cerebral book about a cat and his disdain for breakfast')

Book.create(:title => "Head First: HTML5 Programming", :description => 'Thriller about the future of the "net"')

Book.create(:title => "The Very Hungry Cateriller", :description => "Tiny creature goes on an unbelieveable rampage", :featured => true)

Book.create(:title => "Bluberries for Sale", :description => "A monster peddles blueberries in the field", :featured => true)
