class CreateScenarios < ActiveRecord::Migration[5.2]
  def change
    create_table :scenarios do |t|
      t.string :text

      t.timestamps
    end
  end
end
