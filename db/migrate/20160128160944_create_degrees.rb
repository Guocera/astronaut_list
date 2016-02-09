class CreateDegrees < ActiveRecord::Migration
  def change
    create_table :degrees do |t|
      t.belongs_to :naut, index: true
      t.string :name
      t.string :field
      t.string :university
      t.timestamps null: false
    end
  end
end
