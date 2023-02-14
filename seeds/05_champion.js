exports.seed = async function(knex) {
  await knex('champion').del()
  await knex('champion').insert([
    {
      id: 1,
      users_id: '1',
      champion_name: "Yorick"
    },
    {
      id: 2,
      users_id: '2',
      champion_name: "Yasuo"
    }
  ]);
};
