class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :password
  has_one :cart
  has_many :favorites
end
