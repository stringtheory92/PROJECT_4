
puts "destroying all..."
CartCostume.destroy_all
Cart.destroy_all
Costume.destroy_all
Customer.destroy_all
Favorite.destroy_all
puts "seeding..."

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