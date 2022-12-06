class CartSerializer < ActiveModel::Serializer
<<<<<<< HEAD
  attributes :id, :customer_id, :costume_id
  has_many :costumes
=======
  attributes :id, :customer_id

  has_many :cart_costumes

  def costumes_and_quantity
    byebug
  end
>>>>>>> origin
end
