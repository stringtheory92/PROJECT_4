class CartSerializer < ActiveModel::Serializer
  attributes :id, :customer_id

  has_many :cart_costumes

  def costumes_and_quantity
    byebug
  end
end
