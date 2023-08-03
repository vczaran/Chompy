# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :bigint           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string
#  name       :string
#
class Review < ApplicationRecord
  validates :body, presence: true

  belongs_to :user,
  foreign_key: :author_id,
  class_name: :User
  
  belongs_to :product
end
