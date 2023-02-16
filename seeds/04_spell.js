const { data } = require("../seed_data/spell.json");
const spells = Object.values(data);
const spellInput = spells.map((spell) => {
  return {
    id: spell.id,
    name: spell.name,
    blurb: spell.description,
    image: `http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/${spell.image.full}`,
  }
});

exports.seed = async function (knex) {
  await knex('spell').del();
  await knex('spell').insert(spellInput);
}