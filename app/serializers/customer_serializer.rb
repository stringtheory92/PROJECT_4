class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :cart_contents
  has_one :cart
  has_many :favorites
end
