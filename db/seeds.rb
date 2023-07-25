# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


User.destroy_all

User.create!([{
  name: "Fido",
  email: "demo@email.com",
  password: "password",
},
])

p "Created #{User.count} users"

Product.destroy_all

Product.create!([{
  name: "Hill's Science Diet Adult Small Bites Dry Dog Food",
  category: "Food",
  price: 11.99,
  rating: 4.6,
  details: "",
  flavor_options: [""],
  color_options: [""],
  size_options: [""]
},
{
    name: "",
    category: "",
    price: 11.99,
    rating: 4.6,
    details: "",
    flavor_options: [""],
    color_options: [""],
    size_options: [""]
},
{
    name: "",
    category: "",
    price: 11.99,
    rating: 4.6,
    details: "",
    flavor_options: [""],
    color_options: [""],
    size_options: [""]
},
{  
    name: "",
    category: "",
    price: 11.99,
    rating: 4.6,
    details: "",
    flavor_options: [""],
    color_options: [""],
    size_options: [""]
},
{  
    name: "",
    category: "",
    price: 11.99,
    rating: 4.6,
    details: "",
    flavor_options: [""],
    color_options: [""],
    size_options: [""]
    }])

p "Created #{Product.count} products"