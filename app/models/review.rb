# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :string           not null
#  author_id   :bigint           not null
#  author_name :string
#  product_id  :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :body, presence: true

  belongs_to :user,
  foreign_key: :author_id,
  class_name: :user
  
  belongs_to :product
end
