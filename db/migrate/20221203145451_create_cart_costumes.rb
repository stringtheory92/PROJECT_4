class CreateCartCostumes < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_costumes do |t|
      t.integer :cart_id
      t.integer :costume_id

      t.timestamps
    end
  end
end
