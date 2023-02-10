exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      id: '1',
      username: "shimazu28",
      password: "gm123456",
      name: "Anvar Gulomov"
    }
  ]);
};