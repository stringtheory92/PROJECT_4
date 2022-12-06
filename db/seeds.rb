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
puts "seeding..."

15.times do
    costume = Costume.create(
        name: Faker::DcComics.hero,
        price: rand(19.99...85.98).round(2)
    )
end

7.times do
    customer = Customer.create(
        name: Faker::Name.name,
        password: 'GucciMane'
    )

    cart = Cart.create(customer_id: customer.id)
    rand(2..10).times do
            CartCostume.create(
                cart_id: cart.id,
                costume_id: Costume.all.ids.sample
            )
    end
    rand(1..7).times do
        Favorite.create(
            customer_id: customer.id,
            costume_id: Costume.all.ids.sample
        )
    end
end

puts "Done seeding!"

