const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("build")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(400).send(`Error retrieving builds: ${error}`)
    );
};

exports.addBuild = (req, res) => {
    // Validate the request body for required data
    if (
      !req.body.champion_id ||
      !req.body.description ||
      !req.body.items_id ||
      !req.body.spells_id
    ) {
      return res
        .status(400)
        .send(
          "Please make sure to provide champion ID, description of build, selected items and spells"
        );
    }
    const {
      champion_id,
      description,
      
    } = req.body;
    const postNewBuild = {
        champion_id: champion_id,
        description: description,
        items_id: items_id,
        img1: img1,
    };
    knex("build")
      .insert(postNewBuild)
      .then((data) => {
        // For POST requests we need to respond with 201 and the location of the newly created record
        const newBuildURL = `/build/${data[0]}`;
        res.status(201).location(newBuildURL).send(newBuildURL);
      })
      .catch((err) => res.status(400).send(`Error creating Build: ${err}`));
  };


  exports.deleteBuild = (_req, res) => {
    knex("build")
      .delete()
      .where({ id: _req.params.id })
      .then(() => {
        res
          .status(204)
          .send(`Build with id: ${_req.params.id} has been deleted`);
      })
      .catch((err) =>
        res.status(400).send(`Error deleting Build ${_req.params.id} ${err}`)
      );
  };