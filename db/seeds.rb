10.times do
    Customer.create(name: Faker::Name.first_name, password: '123')
end