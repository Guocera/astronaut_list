class CreateNauts < ActiveRecord::Migration
  def change
    create_table :nauts do |t|
      t.string :first_name
      t.string :last_name
      t.string :country
      t.date :selection_year
      t.string :image

      t.timestamps null: false
    end
  end
end
