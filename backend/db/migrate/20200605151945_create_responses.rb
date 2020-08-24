class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.integer :result
      t.string :text
      t.integer :scenario_id

      t.timestamps
    end
  end
end
