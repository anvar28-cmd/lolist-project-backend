exports.seed = async function(knex) {
  await knex('champion').del()
  await knex('champion').insert([
    {
      id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
      users_id: '1',
      hero_name: "Yasuo"
    }
  ]);
};
