exports.seed = async function(knex) {
  await knex('build').del()
  await knex('build').insert([
    {
      champion_id: 1,
      description: "Warrior's build",
      item1_id: 1,
      item2_id: 5,
      item3_id: 10,
      spell1_id: 'SummonerFlash'

    },
    {
      champion_id: 2,
      description: "Warrior's build 222",
      item1_id: 2,
      item2_id: 3,

      spell1_id: 'SummonerFlash'

    }
  ]);
};