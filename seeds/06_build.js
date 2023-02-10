exports.seed = async function(knex) {
  await knex('build').del()
  await knex('build').insert([
    {
      id: '83433026-ca32-4c6d-bd86-a39ee8b7303e',
      champion_id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
      item1: "Divine Sunderer",
      item2: "Duskblade of Draktharr",
      item3: "Iceborn Gauntlet",
      item4: "Imperial Mandate",
      item5: "Prowler's Claw",
      item6: "Sorcerer's Shoes",
      spell1: "Flash",
      spell2: "ignite",
    }
  ]);
};