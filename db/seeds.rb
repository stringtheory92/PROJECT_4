<<<<<<< HEAD
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
=======

>>>>>>> origin
puts "destroying all..."
CartCostume.destroy_all
Cart.destroy_all
Costume.destroy_all
Customer.destroy_all
Favorite.destroy_all
puts "seeding..."

<<<<<<< HEAD
15.times do
    costume = Costume.create(
        name: Faker::DcComics.hero,
        price: rand(19.99...85.98).round(2)
    )
end

7.times do
    customer = Customer.create(
        name: Faker::Name.name,
=======
# 15.times do
#     costume = Costume.create(
#         name: Faker::DcComics.hero,
#         price: rand(19.99...85.98).round(2)
#     )
# end

curious_george = Costume.create(name: 'Man in the Yellow Hat set', price: rand(19.99..85.99).round(2))
curious_george.costume_image.attach(
    io: File.open('./public/costumes/curious_george.png'),
    filename: 'curious_george.png',
    content_type: 'application/png'
)

dbz = Costume.create(name: 'Goku', price: rand(19.99..85.99).round(2))
dbz.costume_image.attach(
    io: File.open('./public/costumes/dbz.png'),
    filename: 'dbz.png',
    content_type: 'application/png'
)

green_ranger = Costume.create(name: 'Green Power Ranger', price: rand(19.99..85.99).round(2))
green_ranger.costume_image.attach(
    io: File.open('./public/costumes/green_ranger.png'),
    filename: 'green_ranger.png',
    content_type: 'application/png'
)

karate_kid = Costume.create(name: 'Karate Kid', price: rand(19.99..85.99).round(2))
karate_kid.costume_image.attach(
    io: File.open('./public/costumes/karate_kid.png'),
    filename: 'karate_kid.png',
    content_type: 'application/png'
)

mr_meeseeks = Costume.create(name: 'Mr. Meeseeks', price: rand(19.99..85.99).round(2))
mr_meeseeks.costume_image.attach(
    io: File.open('./public/costumes/mr_meeseeks.png'),
    filename: 'mr_meeseeks.png',
    content_type: 'application/png'
)

mr_myagi = Costume.create(name: 'Mr. Myagi', price: rand(19.99..85.99).round(2))
mr_myagi.costume_image.attach(
    io: File.open('./public/costumes/mr_myagi.png'),
    filename: 'mr_myagi.png',
    content_type: 'application/png'
)

rocky = Costume.create(name: 'Rocky', price: rand(19.99..85.99).round(2))
rocky.costume_image.attach(
    io: File.open('./public/costumes/rocky.png'),
    filename: 'rocky.png',
    content_type: 'application/png'
)

squid_game = Costume.create(name: 'Squid Game', price: rand(19.99..85.99).round(2))
squid_game.costume_image.attach(
    io: File.open('./public/costumes/squid_game.png'),
    filename: 'squid_game.png',
    content_type: 'application/png'
)

tiger_king = Costume.create(name: 'Tiger King', price: rand(19.99..85.99).round(2))
tiger_king.costume_image.attach(
    io: File.open('./public/costumes/tiger_king.png'),
    filename: 'tiger_king.png',
    content_type: 'application/png'
)

waldo = Costume.create(name: 'Waldo', price: rand(19.99..85.99).round(2))
waldo.costume_image.attach(
    io: File.open('./public/costumes/waldo.png'),
    filename: 'waldo.png',
    content_type: 'application/png'
)


7.times do
    customer = Customer.create(
        name: Faker::Name.first_name,
>>>>>>> origin
        password: 'GucciMane'
    )

    cart = Cart.create(customer_id: customer.id)
<<<<<<< HEAD
    rand(2..10).times do
=======
    rand(10..20).times do
>>>>>>> origin
            CartCostume.create(
                cart_id: cart.id,
                costume_id: Costume.all.ids.sample
            )
    end
<<<<<<< HEAD
    rand(1..7).times do
        Favorite.create(
            customer_id: customer.id,
            costume_id: Costume.all.ids.sample
        )
    end
end

puts "Done seeding!"

=======
    1.times do
        # Gets unique costume_id for Favorites since customer can't favorite the same costume twice
        # def unique_id
        #     id = Costume.all.ids.sample
        #     if Favorite.where(costume_id: id)
        #         unique_id()
        #     else
        #         return id
        #     end
        # end
      
        Favorite.create(
            customer_id: customer.id,
            costume_id: Costume.first.id
        )
      
    end
end

puts "Done seeding!"
>>>>>>> origin
