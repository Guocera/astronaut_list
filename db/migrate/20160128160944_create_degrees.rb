class CreateDegrees < ActiveRecord::Migration
  def change
    create_table :degrees do |t|
      t.belongs_to :naut, index: true
      t.string :level
      t.string :name
      t.timestamps null: false
    end
  end
end
