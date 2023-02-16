const { data } = require("../seed_data/item.json");
const items = Object.values(data);
const itemInput = items.map((item, i) => {
  return {
    id: i,
    name: item.name,
    blurb: item.plaintext,
    gold: item.gold.total,
    image: `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${item.image.full}`,
  }
});

exports.seed = async function (knex) {
  await knex("item").del();
  await knex("item").insert(itemInput);
}