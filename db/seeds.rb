# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

User.destroy_all
Product.destroy_all
Review.destroy_all
CartItem.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('products')
ActiveRecord::Base.connection.reset_pk_sequence!('reviews')
ActiveRecord::Base.connection.reset_pk_sequence!('cart_items')


User.create!([{
  name: "Fido",
  email: "demo@email.com",
  password: "password",
}
])

p "Created #{User.count} users"

product1 = Product.create!(
  name: "Hill's Science Diet Adult Small Bites Dry Dog Food",
  category: "Dog Food",
  price: 45.99,
  rating: 4.6,
  details: "Give your small dog precisely balanced nutrition for a visible difference with the Hill's Science Diet Adult Small Bites Dry Dog Food. Made with an exclusive blend of omega 6 fatty acids and other nourishing nutrients, this recipe promotes a noticeably shiny coat in just 30 days—and the small kibble size is perfect for tiny mouths. The natural, high quality ingredients make it easy to digest, making this food an excellent choice for your fit-minded dog.",
  flavor_options: ["Chicken & Barley", "Lamb Meal & Brown Rice"],
  size_options: ["5-lb bag", "15-lb bag", "35-lb bag"]
)

product1.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product1"), filename: "product1")


product2 = Product.create!(
  name: "Hill's Science Diet Adult Light Dry Dog Food",
  category: "Dog Food",
  price: 45.98,
  rating: 4.7,
  details: "Hill's Science Diet Adult Light Dry Dog Food provides your pup with precise nutrition for a healthy lifestyle. Made with wholesome ingredients, this nourishing recipe is balanced to meet your pet's needs and contains 18% fewer calories than the Adult Advanced Fitness blend. Manufactured in the United States, every ingredient meets strict requirements for purity and nutrient content which exceed industry standards. Formulated for adult dogs 1 to 6 years of age that require fewer calories, this Hill's Science Diet provides your pooch with the nutrition he needs for a lifetime of health and happiness.",
  flavor_options: ["Chicken Meal & Barley"],
  size_options: ["15-lb bag", "30-lb bag"]
)

product2.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product2"), filename: "product2")


product3 = Product.create!(
  name: "Hill's Science Diet Adult Sensitive Stomach & Skin Canned Dog Food",
  category: "Dog Food",
  price: 44.88,
  rating: 4.4,
  details: "Help support your canine companion's health from the inside out with Hill's Science Diet Sensiive Skin and Stomach! This canned dog food is slow-cooked in the USA and is specifically designed to help support adult dogs with sensitive tummies and skin with ingredients like easily digestible turkey, chicken and rice, plus healthy omega-6 fatty acids and vitamin E. Serve it on its own or add it to your companion's favorite kibble!",
  flavor_options: ["Tender Turkey & Rice Stew", "Chicken & Vegetable Entree"],
  size_options: ["12.5-oz can, case of 12"]
)

product3.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product3"), filename: "product3")


product4 = Product.create!(
  name: "Hill's Science Diet Adult Indoor Dry Cat Food",
  category: "Cat Food",
  price: 32.49,
  rating: 4.2,
  details: "Hill's Science Diet Adult Indoor Cat Dry Cat Food provides your four-legged friend with great tasting nutrition for a long, happy life. Made with wholesome ingredients such as savory chicken, this nourishing recipe is balanced to meet your pet's needs, and promote healthy, gentle digestion. Manufactured in the United States, every ingredient meets strict requirements for purity and nutrient content which exceed industry standards. Formulated for adult cats 1 to 6 years of age with an indoor lifestyle, this Hill's Science Diet provides your cat the nutrition she needs for a lifetime of health and happiness.",
  flavor_options: ["Chicken"],
  size_options: ["3.5-lb bag", "7-lb bag", "15.5-lb bag"]
)

product4.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product4"), filename: "product4")


product5 = Product.create!(
  name: "Purina Pro Plan Complete Essentials Adult Canned Cat Food",
  category: "Cat Food",
  price: 35.52,
  rating: 4.6,
  details: "Give kitty extraordinary nutrition and exceptional taste with Purina Pro Plan Complete Essentials Adult Wet Cat Food. Each ingredient in this adult cat food serves a purpose. She gets omega-6 fatty acids and vitamin A to nourish her skin and super-soft coat. Antioxidants help maintain her immune system, and vitamin A and taurine help promote her keen vision. Plus, each tasty serving has the optimal protein level for kitties to maintain an ideal body condition, lending a helping hand to her daily adventures. Best of all, the combo of tender texture and yummy flavor creates a sensory adventure that kitties adore.",
  flavor_options: ["Beef & Carrots", "Chicken & Rice", "Turkey & Vegetable", "Grilled Seafood"],
  size_options: ["3-oz can, case of 24", "5.5-oz can, case of 24"]
)

product5.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product5"), filename: "product5")


product6 = Product.create!(
  name: "Royal Canin Breed Health Nutrition Labrador Retriever Adult Dry Dog Food",
  category: "Dog Food",
  price: 79.99,
  rating: 4.5,
  details: "Royal Canin Labrador Retriever Adult dog food is tailor-made nutrition created just for your pure breed dog. Whether you have a Yellow Lab, Chocolate Lab, or Black Lab, this exclusive breed-specific diet is uniquely formulated for your Labrador Retriever with specific nutrients to help them thrive. The unique donut-shaped kibble is specially designed to help your fast eater slow down and actually chew. A precise amount of calories and fat helps maintain your Lab at a healthy weight. Nutrients like EPA, DHA, and glucosamine support bone and joint health. And exclusive nutrients reinforce the skin barrier to maintain skin health and a beautiful coat. Mix in or complement with Royal Canin Labrador Retriever wet dog food for a meal that's sure to please your favorite family dog.",
  size_options: ["17-lb bag", "28-lb bag", "30-lb bag"]
)

product6.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product6"), filename: "product6")


product7 = Product.create!(
  name: "Purina Pro Plan Veterinary Diets FortiFlora Powder Digestive Supplement for Dogs",
  category: "Dog Food Toppings",
  price: 30.99,
  rating: 4.7,
  details: "Help keep your furry buddy's belly healthy with Purina Pro Plan Veterinary Supplements Probiotics Dog Supplement, Fortiflora Canine Nutritional Supplement. This great-tasting probiotic supplement powder is specially formulated to promote normal intestinal microflora in dogs suffering from diarrhea. It is crafted in collaboration with nutritionists, researchers and veterinarians to contain a specific amount of live microorganisms and antioxidants to help support digestive health and reduce gas. This probiotic supplement powder is paw-fect for all breeds of dogs in any stage of life and is developed using a proprietary microencapsulation process for enhanced stability.",
  size_options: ["30 count", "60 count", "90 count"]
)

product7.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product7.webp"), filename: "product7")


product8 = Product.create!(
  name: "Purina Pro Plan Veterinary Diets FortiFlora Powder Digestive Supplement for Cats",
  category: "Cat Food Toppings",
  price: 30.99,
  rating: 4.7,
  details: "Help settle your sidekick's sensitive stomach with Purina Pro Plan Veterinary Supplements FortiFlora Feline Probiotic Supplements. This great-tasting probiotic supplement powder is specially formulated to promote normal intestinal microflora in cats suffering from diarrhea. It is crafted in collaboration with nutritionists, researchers and veterinarians to contain a specific amount of live microorganisms to help support digestive health. This probiotic supplement powder is paw-fect for all breeds of cats in any stage of life and is developed using a proprietary microencapsulation process for enhanced stability.",
  size_options: ["30 count", "60 count", "90 count"]
)

product8.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product8.avif"), filename: "product8")


product9 = Product.create!(
  name: "Simparica Trio Chewable Tablet for Dogs, 22.1-44.0lbs",
  category: "Dog Flea & Tick Medicine",
  price: 175.99,
  rating: 4.4,
  details: "Help your furry friend fight off pests with Simparica Trio Chewable Tablets for Dogs! Every purchase comes with 6 treatments that are specially formulated for canine companions 8 weeks of age and older, weighing between 22.1 and 44 pounds. Simparica Trio is the first and only product that combines sarolaner, moxidectin and pyrantel in each treatment to help prevent heartworm disease, kill fleas before they can lay eggs, kill 5 types of ticks, treat and prevent flea infestations and treat and control roundworms and hookworms. And each monthly chewable tablet has a palatable liver flavor and can be taken with or without food!",
)

product9.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product9.webp"), filename: "product9")


product10 = Product.create!(
  name: "Revolution Plus Topical Solution for Cats, 5.6-11lbs",
  category: "Cat Flea & Tick Medicine",
  price: 76.99,
  rating: 4.6,
  details: "Help protect your four-legged friend from pesky critters with this 6-in-1 broad spectrum monthly Topical Solution for Cats by Revolution Plus. Simply apply the quick-drying, small-volume prescription to help: kill fleas before they lay eggs, kill ticks for a full month, prevent heartworm disease and treat and control roundworms, hookworms and ear mites. This topical medication is suitable for cats and kittens eight weeks of age or older, weighing between 5.6 and 11 pounds.",
)

product10.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product10.webp"), filename: "product10")


product11 = Product.create!(
  name: "Vet's Best Enzymatic Dog Toothpaste, 3.5 oz bottle",
  category: "Dog Dental Care",
  price: 7.02,
  rating: 4.5,
  details: "Help keep your companion's canines clean with Vet's Best Enzymatic Dog Toothpaste. This enzymatic toothpaste is veterinarian formulated with a key mix of natural ingredients. It includes aloe, neem oil, grapefruit seed extract, baking soda and enzymes. This antibacterial and antifungal toothpaste for dogs is designed to fight tartar and plaque, whiten and brighten teeth, promote healthy gums and freshen breath. It is packaged in an easy-to-use squeeze tube that's paw-fect supporting your pupper's dental health between professional cleanings.",
)

product11.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product11.webp"), filename: "product11")


product12 = Product.create!(
  name: "Greenies Petite Dental Dog Treats",
  category: "Dog Treats Dental Treats",
  price: 17.98,
  rating: 4.8,
  details: "Support your furry sidekick's dental health with Greenies Petite Dental Dog Treats! These delicious original flavor dental dog treats are crafted with an irresistibly chewy texture that helps remove plaque and tartar. These natural dog treats are vet recommended for at-home oral health care because they help promote oral hygiene, freshen breath and contain highly soluble ingredients that are safe and easy for your pup to digest. Plus, you can feel extra confident knowing that these whisker-licking treats promote your canine companion's overall health with vitamins, minerals and other nutrients!",
)

product12.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product12.avif"), filename: "product12")


product13 = Product.create!(
  name: "Puppia Polyester Back Clip Dog Harness",
  category: "Dog Harnesses",
  price: 16.57,
  rating: 3.8,
  details: "The Puppia Soft Dog Harness A is an easy-to-use everyday collar that provides ultimate comfort. Made for convenience and function, this lightweight harness features a comfortable neck opening and an adjustable quick-release chest belt with a D-ring for leash attachment. With super-soft air-mesh padding and a practical design, the Soft Dog Harness lets your four-legged friend stroll along with style and comfort on his daily walks.",
  color_options: ["Black", "Green", "Grey", "Pink", "Blue"],
  size_options: ["Small", "Medium", "Large"]
)

product13.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product13.jpg"), filename: "product13")


product14 = Product.create!(
  name: "KONG Classic Dog Toy",
  category: "Dog Toys",
  price: 13.99,
  rating: 4.4,
  details: "Give your furry friend a reliable and fun plaything with the KONG Classic Dog Toy. Offering enrichment by helping satisfy dogs' instinctual needs, the KONG Classic's unique all-natural red rubber formula is ultra-durable, with an erratic bounce that is ideal for dogs that like to chew, while also fulfilling a dog's need to play. Want to extend play time? And to add some extra fun into the mix, this toy can be stuffed with KONG's Stuff'N Easy Treat, Snacks or Ziggies (sold separately) or any of her favorite rewards like peanut butter, yogurt or kibble!",
  size_options: ["Small", "Medium", "Large"]
)

product14.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product14.webp"), filename: "product14")


product15 = Product.create!(
  name: "ARM & HAMMER Super Treadz Tough Dog Chew Toy",
  category: "Dog Toys",
  price: 11.05,
  rating: 3.8,
  details: "The Arm & Hammer Super Treadz Dental Dog Toy helps keep your dog's teeth clean while he plays. These toys are the ultimate, durable dental toy for your pet. They are specifically designed to help freshen breath, stimulate gums, and reduce tartar and plaque buildup while the extremely durable body withstands even the most aggressive of chewers. These adorable and beneficial toys are sure to keep your pup busy for hours while the baking soda infused rubber body works to gently clean and freshen their teeth.",
  size_options: ["Small", "Large"]
)

product15.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product15.webp"), filename: "product15")



product16 = Product.create!(
  name: "Chuckit! Classic Launcher Dog Toy",
  category: "Dog Toys",
  price: 9.95,
  rating: 4.6,
  details: "Go long. No, really long. Really really long! With the Chuckit! Classic Ball Launcher, you'll easily be able to throw three times as far as normal, and without ever bending over or touching a slobbery ball again. Grab the comfortable handle, press down on the ball, and let it fly. You'll wear Fido out in no time! Perfect for the dog park and wide open spaces. Not so great for studio apartments."
)

product16.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product16.webp"), filename: "product16")


product17 = Product.create!(
  name: "Frisco Magic Moon $ Stars Wave Scratcher Cat Toy with Catnip",
  category: "Cat Toys",
  price: 14.97,
  rating: 4.8,
  details: "Scratching is already pretty magical for kitty! The wavy shape is purr-fect for cats to get a good grip and stretch while they scratch. Layers of pressed wavy cardboard shred easily under your cat's claws—instead of your furniture—without catching. Now kitty can scratch to the moon (and stars) and back."
)

product17.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product17.jpg"), filename: "product17")



product18 = Product.create!(
  name: "SmartyKat Loco Laser Cat Toy",
  category: "Cat Toys",
  price: 4.97,
  rating: 4.4,
  details: "Satisfy your feline friend's natural hunting instinct with the pounce-producing SmartyKat Loco Laser Cat Toy. This fun interactive toy delivers endless fun and enjoyment for both you and your four-legged family member. Shining the bug-sized spot of light on the wall replicates the lightning-quick movement of small prey to get your little predator moving in a flash and shifting his activity level into overdrive-purr-fect for the overweight or sedentary indoor cat. Batteries are included, so it's ready for instant play!"
)

product18.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product18.webp"), filename: "product18")
    
  
product19 = Product.create!(
  name: "FurHaven Calming Cuddler Long Fur Donut Bolster Dog Bed",
  category: "Dog Beds",
  price: 53.99,
  rating: 4.3,
  details: "Give your canine companion a peaceful space to rest her head with the FurHaven Calming Cuddler Long Fur Donut Bolster Dog Bed. It is expertly designed to soothe anxiety and promote deeper and more restorative sleep for your pooch. This high-quality donut-shaped pet bed features deep bolstered edges that create cozy pockets of extra warmth, perfect for nest-loving pups to cuddle into, but still comfortable enough for pups who like to sprawl or sleep belly up. Your four-legged friend will love the luxurious and plush long vegan fur that is soft on snouts and paws-and you'll love that it's washable for easy care.",
  size_options: ["Small", "Medium", "Large", "Jumbo"]
)

product19.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product19.avif"), filename: "product19")
  

product20 = Product.create!(
  name: "FurHaven Calming Fleece Covered Cat Bed",
  category: "Cat Beds",
  price: 19.99,
  rating: 4.3,
  details: "Provide your pet with a cozy space to call her own with the FurHaven Calming Fleece Covered Cat Bed. Built with insulating foam walls, this tent delivers the privacy and warmth cats love. This tent-style bed is especially paw-fect for paw-tners who tend to feel anxious and need an enclosed space to feel safe. It's crafted from a warm polar fleece fabric in 100% polyester and for your convenience the included base pad is completely removable and washable! And when this tent is not in use, it folds easily for hassle-free storage and for traveling, too.",
  color_options: ["Lagoon Blue", "Cotton Candy Pink", "Heather Gray", "Beige Buff"]
)

product20.image.attach(io: URI.open("https://chompy-dev.s3.amazonaws.com/product20.jpg"), filename: "product20")


  
p "Created #{Product.count} products"
