class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :password
  has_one :cart
end
