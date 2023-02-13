exports.seed = async function(knex) {
  await knex('champion').del()
  await knex('champion').insert([
    {
      id: 'Yorick',
      users_id: '1',
      champion_name: "Yorick"
    }
  ]);
};
