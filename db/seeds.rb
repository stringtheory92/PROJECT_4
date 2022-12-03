# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "destroying all..."
CartCostume.destroy_all
Cart.destroy_all
Costume.destroy_all
Customer.destroy_all
Favorite.destroy_all
puts "..."

15.times do
    Costume.create(
        name: Faker::DcComics.hero,
        price: rand(19.99...85.98)
    )
end

7.times do
    Customer.create(
        name: Faker::Name.name,
        password: Faker::String.random(length: 3..12)
    )
end

7.times do 
    Cart.create(
        customer_id: Customer.all.ids.sample,
        costume_id: Costume.all.ids.sample
    )
end

20.times do
    CartCostume.create(
        cart_id: Cart.all.ids.sample,
        costume_id: Costume.all.ids.sample
    )
end

10.times do
    Favorite.create(
        customer_id: Customer.all.ids.sample,
        costume_id: Costume.all.ids.sample
    )
end

puts "Done seeding!"

