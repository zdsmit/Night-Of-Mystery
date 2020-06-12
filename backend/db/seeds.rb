# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Scenario.delete_all
Response.delete_all

scenario1 = Scenario.create(id: 1, text: "
  One quiet day, Paul is sitting at home, when he suddenly hears a noise.
  It sounds like it's coming from outside the house. What does he do?
")

response1_1 = Response.create(result: 2, scenario_id: 1, text: "
  Investigate the noise
")

response1_2 = Response.create(result: 2, scenario_id: 1, text: "
  Call the police
")

response1_3 = Response.create(result: 2, scenario_id: 1, text: "
  Shout out the window to see if anyone responds
")

response1_4 = Response.create(result: 2, scenario_id: 1, text: "
  Sit back down and do nothing
")



scenario2 = Scenario.create(id: 2, text: "
  To be continued...
")
response2_1 = Response.create(result: 1, scenario_id: 2, text: "
  Return to start
")
