# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Scenario.delete_all
Response.delete_all

scenario0 = Scenario.create(id: 0, text: "
  To be continued...
")

response0_1 = Response.create(result: 1, scenario_id: 0, text: "
  Return to start
")

scenario1 = Scenario.create(id: 1, text: "
  One quiet day, Paul is sitting at home, when he suddenly hears a noise.
  It sounds like it's coming from outside the house. What does he do?
")

response1_1 = Response.create(result: 2, scenario_id: 1, text: "
  Investigate the noise
")

response1_2 = Response.create(result: 3, scenario_id: 1, text: "
  Call the police
")

response1_3 = Response.create(result: 4, scenario_id: 1, text: "
  Shout out the window to see if anyone responds
")

response1_4 = Response.create(result: 5, scenario_id: 1, text: "
  Sit back down and do nothing
")



scenario2 = Scenario.create(id: 2, text: "
  Paul walks outside to investigate the noise. He looks around a bit, but finds there is nobody there.
  Upon further inspection, however, he discovers a small object on the ground.
  He picks it up and realizes that it's a ring. There seems to be something strange about the ring, but it's too dark to tell.
  Looking around, he sees there is a street lamp nearby.
")

response2_1 = Response.create(result: 0, scenario_id: 2, text: "
  Walk over to the street lamp to inspect the ring
")
response2_2 = Response.create(result:0, scenario_id: 2, text: "
  Return home to inspect the ring
")



scenario3 = Scenario.create(id: 3, text: "
  He calls the police and tells them about the strange noise. The dispatcher on the line asks if anything like this has happened before.
")

response3_1 = Response.create(result: 1, scenario_id: 3, text: "
  Return to start
")



scenario4 = Scenario.create(id: 4, text: "
  He shouts out the window, but there is no response.
")

response4_1 = Response.create(result: 2, scenario_id: 4, text: "
  Investigate the noise
")

response4_2 = Response.create(result: 3, scenario_id: 4, text: "
  Call the police
")

response4_3 = Response.create(result: 5, scenario_id: 4, text: "
  Sit back down and do nothing
")


scenario5 = Scenario.create(id: 5, text: "
  Paul sits back down on the couch. His favorite show is on.
  The next day, he hears there is some commotion nearby, but it does not concern him.
  
  The End
")
response5_1 = Response.create(result: 1, scenario_id: 5, text: "
  It seems Paul's adventure is over before it began. Return to the start to see how things could have been different.
")