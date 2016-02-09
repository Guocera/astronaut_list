class CreateNauts < ActiveRecord::Migration
  def change
    create_table :nauts do |t|
      t.string :first_name
      t.string :last_name
      t.date :selection_year
      t.timestamps null: false
    end
  end
end
