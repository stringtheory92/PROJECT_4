class CartSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :costume_id
  has_many :costumes
end
