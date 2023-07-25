# == Schema Information
#
# Table name: products
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  category       :string           not null
#  price          :float            not null
#  rating         :float            not null
#  details        :string
#  flavor_options :string
#  size_options   :string
#  color_options  :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Product < ApplicationRecord
    validates :name, :category, :price, :rating, presence: true

    has_many :reviews
    has_many :ratings

end
