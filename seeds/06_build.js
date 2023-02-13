exports.seed = async function(knex) {
  await knex('build').del()
  await knex('build').insert([
    {
      id: "1",
      champion_id: "Yorick",
      description: "Warrior's build",
      item1: "Divine Sunderer",
      img1: "6632.png",
      item2: "Death's Dance",
      img2: "6333.png",
      item3: "Spirit Visage",
      img3: "3065.png",
      item4: "Hullbreaker",
      img4: "3181.png",
      item5: "Mercury's Treads",
      img5: "3111.png",
      item6: "Sterak's Gage",
      img6: "3053.png",
      spell1: "Flash",
      img7: "SummonerFlash.png",
      spell2: "Ignite",
      img8: "SummonerDot.png",
    }
  ]);
};