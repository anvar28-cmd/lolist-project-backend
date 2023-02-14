const { data } = require("../seed_data/hero.json");
const heros = Object.values(data);
const heroInput = heros.map((hero) => {
  return {
    id: hero.id, 
    name: hero.name,
    title: hero.title,
    blurb: hero.blurb,
    image: hero.image.full,
  };
});

exports.seed = async function (knex) {
  await knex("hero").del();
  await knex("hero").insert(heroInput);
};


