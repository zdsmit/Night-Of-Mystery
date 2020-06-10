# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Scenario.delete_all
Response.delete_all

scenario1 = Scenario.create(id: 0, text: "
  One quiet day, Paul is sitting at home, when he suddenly hears a noise.
  It sounds like it's coming from outside the house. What does he do?
")

response1 = Response.create(text: "
  Investigate the noise
")

response2 = Response.create(text: "
  Call the police
")

response3 = Response.create(text: "
  Shout out the window to see if anyone responds
")

response4 = Response.create(text: "
  Sit back down and do nothing
")

response1.scenario = scenario1
response2.scenario = scenario1
response3.scenario = scenario1
response4.scenario = scenario1