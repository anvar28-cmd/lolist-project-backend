const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("champion")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(400).send(`Error retrieving champions: ${error}`)
    );
};

exports.addChampion = async (req, res) => {
    if (
  !req.body.champion_name 
    ) {
      return res.status(400).send("Please return all the needed fields");
    }
    try {
      const championId = await knex("champion")
        .where("champion_name", req.body.champion)
        .select("id");
      await knex("champion").insert({
        champion_name: req.body.champion_name,
        user_id: championId[0].id,
      });
      res.status(201).json({ message: "Champion added successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error adding champion" });
    }
  };
