# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do\
  User.destroy_all
  Product.destroy_all

  ActiveRecord::Base.connection.reset_pk_sequence!('users')
  ActiveRecord::Base.connection.reset_pk_sequence!('products')


    User.create!([{
      name: "Fido",
      email: "demo@email.com",
      password: "password",
    }
    ])

    p "Created #{User.count} users"


    Product.create!([{
      name: "Hill's Science Diet Adult Small Bites Dry Dog Food",
      category: "Dog Food",
      price: 45.99,
      rating: 4.6,
      details: "Give your small dog precisely balanced nutrition for a visible difference with the Hill's Science Diet Adult Small Bites Dry Dog Food. Made with an exclusive blend of omega 6 fatty acids and other nourishing nutrients, this recipe promotes a noticeably shiny coat in just 30 days—and the small kibble size is perfect for tiny mouths. The natural, high quality ingredients make it easy to digest, making this food an excellent choice for your fit-minded dog.",
      flavor_options: ["Chicken & Barley", "Lamb Meal & Brown Rice"],
      size_options: ["5-lb bag", "15-lb bag", "35-lb bag"]
    },
    {
        name: "Hill's Science Diet Adult Light Dry Dog Food",
        category: "Dog Food",
        price: 45.98,
        rating: 4.7,
        details: "Hill's Science Diet Adult Light Dry Dog Food provides your pup with precise nutrition for a healthy lifestyle. Made with wholesome ingredients, this nourishing recipe is balanced to meet your pet's needs and contains 18% fewer calories than the Adult Advanced Fitness blend. Manufactured in the United States, every ingredient meets strict requirements for purity and nutrient content which exceed industry standards. Formulated for adult dogs 1 to 6 years of age that require fewer calories, this Hill's Science Diet provides your pooch with the nutrition he needs for a lifetime of health and happiness.",
        flavor_options: ["Chicken Meal & Barley"],
        size_options: ["15-lb bag", "30-lb bag"]
    },
    {
        name: "Hill's Science Diet Adult Sensitive Stomach & Skin Canned Dog Food",
        category: "Dog Food",
        price: 44.88,
        rating: 4.4,
        details: "Help support your canine companion's health from the inside out with Hill's Science Diet Sensiive Skin and Stomach! This canned dog food is slow-cooked in the USA and is specifically designed to help support adult dogs with sensitive tummies and skin with ingredients like easily digestible turkey, chicken and rice, plus healthy omega-6 fatty acids and vitamin E. Serve it on its own or add it to your companion's favorite kibble!",
        flavor_options: ["Tender Turkey & Rice Stew", "Chicken & Vegetable Entree"],
        size_options: ["12.5-oz can, case of 12"]
    },
    {  
        name: "Hill's Science Diet Adult Indoor Dry Cat Food",
        category: "Cat Food",
        price: 32.49,
        rating: 4.2,
        details: "Hill's Science Diet Adult Indoor Cat Dry Cat Food provides your four-legged friend with great tasting nutrition for a long, happy life. Made with wholesome ingredients such as savory chicken, this nourishing recipe is balanced to meet your pet's needs, and promote healthy, gentle digestion. Manufactured in the United States, every ingredient meets strict requirements for purity and nutrient content which exceed industry standards. Formulated for adult cats 1 to 6 years of age with an indoor lifestyle, this Hill's Science Diet provides your cat the nutrition she needs for a lifetime of health and happiness.",
        flavor_options: ["Chicken"],
        size_options: ["3.5-lb bag", "7-lb bag", "15.5-lb bag"]
    },
    {  
        name: "Purina Pro Plan Complete Essentials Adult Canned Cat Food",
        category: "Cat Food",
        price: 35.52,
        rating: 4.6,
        details: "Give kitty extraordinary nutrition and exceptional taste with Purina Pro Plan Complete Essentials Adult Wet Cat Food. Each ingredient in this adult cat food serves a purpose. She gets omega-6 fatty acids and vitamin A to nourish her skin and super-soft coat. Antioxidants help maintain her immune system, and vitamin A and taurine help promote her keen vision. Plus, each tasty serving has the optimal protein level for kitties to maintain an ideal body condition, lending a helping hand to her daily adventures. Best of all, the combo of tender texture and yummy flavor creates a sensory adventure that kitties adore.",
        flavor_options: ["Beef & Carrots", "Chicken & Rice", "Turkey & Vegetable", "Grilled Seafood"],
        size_options: ["3-oz can, case of 24", "5.5-oz can, case of 24"]
        },
        {  
          name: "Royal Canin Breed Health Nutrition Labrador Retriever Adult Dry Dog Food",
          category: "Dog Food",
          price: 79.99,
          rating: 4.5,
          details: "Royal Canin Labrador Retriever Adult dog food is tailor-made nutrition created just for your pure breed dog. Whether you have a Yellow Lab, Chocolate Lab, or Black Lab, this exclusive breed-specific diet is uniquely formulated for your Labrador Retriever with specific nutrients to help them thrive. The unique donut-shaped kibble is specially designed to help your fast eater slow down and actually chew. A precise amount of calories and fat helps maintain your Lab at a healthy weight. Nutrients like EPA, DHA, and glucosamine support bone and joint health. And exclusive nutrients reinforce the skin barrier to maintain skin health and a beautiful coat. Mix in or complement with Royal Canin Labrador Retriever wet dog food for a meal that's sure to please your favorite family dog.",
          size_options: ["17-lb bag", "28-lb bag", "30-lb bag"]
      }])

    p "Created #{Product.count} products"


  end