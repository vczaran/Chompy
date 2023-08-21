# Chompy

[Live link](https://chompy.onrender.com)

# Introduction

Chompy is a clone of Chewy. Chewy is an e-commerce site specializing in pet products and equipment. The technologies implemented are:

* Languages: JavaScript, Ruby, HTML, CSS
* Frontend: React, Redux
* Backend: Rails
* Database: PostgreSQL
* Assets: AWS Simple Cloud Stoage (S3)


# Features

## User Authentication

Users are able to browse all products and view each product's individual show page and reviews without signing up or logging in. If a user attempts to add an item to the cart or write a review without being logged in, they will be automatically redirected to the signin page from where there are links to the create account page. Once a user is logged in, the sign in button will display the user's name and they will be able to add to and interact with the cart.


<img width="1385" alt="Screenshot 2023-08-04 at 3 12 49 PM" src="https://github.com/vczaran/Chompy/assets/131270949/28041b0e-1e16-4ba5-8049-78c4566f8361">

## Products

The main splash page displays all products with their associated images, names, and prices. Clicking on a product will take the user to that product's show page. The show page displays title and image as well as the product details and any flavor/size/color options. These options are conditionally rendered depending on presence.

<img width="1314" alt="Screenshot 2023-08-04 at 3 42 37 PM" src="https://github.com/vczaran/Chompy/assets/131270949/47f38903-f041-4ccb-92db-52dc524144a3">

<img width="402" alt="Screenshot 2023-08-04 at 3 43 29 PM" src="https://github.com/vczaran/Chompy/assets/131270949/b8bd3b91-2741-44e1-a31f-925453120a74">


## Cart

Users can add and remove items from their cart, which is unique to each user and persists between login/logout. The cart icon in the navbar includes an on-hover dropdown that showcases the items in the cart, the subtotal, and quantity of each item. 

<img width="375" alt="Screenshot 2023-08-04 at 3 17 05 PM" src="https://github.com/vczaran/Chompy/assets/131270949/bb9bc505-206e-436c-baab-d23cd0dc454b">

<img width="752" alt="Screenshot 2023-08-04 at 3 19 29 PM" src="https://github.com/vczaran/Chompy/assets/131270949/0bbf9b17-25cc-4e60-be03-22472f5d0f1f">


## Reviews

Users can write reviews for products when logged in. They are able to edit and delete only reviews which they have authored, but can view all reviews for an individual product. 

## Search

Users can filter products by typing keywords into the search bar. A dropdown will populate with products whose names or categories match the keyword. Clicking on any item within the dropdown will take the user to that product's show page.


## Coming Soon:

1. Ratings: Reviews will include a rating feature where users can rate products from 1-5 stars. The average rating displayed for each product will then change based on aggregate user ratings.

2. Categories: The navbar will have a second section that will include on-hover dropdowns that show different catgeories (i.e food, treats, toys etc.). Chompy currently includes only dog and cat products, but will in future include more animal products (birds, reptiles, horses, fish, rabbits and other small mammals)

3. Pharmacy: Chewy includes a pharmacy section where users can electronically send prescription requests to their veterinarian who can then approve it on their end. I would like to inlcude this feature on Chompy as well - when adding a medication to the cart, the user will be prompted to enter their vet's information. A prescription will then be sent to that vet who, when logged in on Chewy under a vet account, can approve prescription requests. The user will then recieve the approval and be able to purchase that item. 







