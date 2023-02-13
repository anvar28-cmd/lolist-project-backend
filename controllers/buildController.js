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
      !req.body.description ||
      !req.body.item1 ||
      !req.body.img1 ||
      !req.body.item2 ||
      !req.body.img2 ||
      !req.body.item3 ||
      !req.body.img3 ||
      !req.body.item4 ||
      !req.body.img4 ||
      !req.body.item5 ||
      !req.body.img5 ||
      !req.body.item6 ||
      !req.body.img6 ||
      !req.body.spell1 ||
      !req.body.img7 ||
      !req.body.spell2 ||
      !req.body.img8 
    ) {
      return res
        .status(400)
        .send(
          "Please make sure to provide name, manager, address, phone and email fields in a request"
        );
    }
    const {
      description,
      item1,
      img1,
      item2,
      img2,
      item3,
      img3,
      item4,
      img4,
      item5,
      img5,
      item6,
      img6,
      spell1,
      img7,
      spell2,
      img8,
    } = req.body;
    const postNewBuild = {
        description: description,
        item1: item1,
        img1: img1,
        item2: item2,
        img2: img2,
        item3: item3,
        img3: img3,
        item4: item4,
        img4: img4,
        item5: item5,
        img5: img5,
        item6: item6,
        img6: img6,
        spell1: spell1,
        img7: img7,
        spell2: spell2,
        img8: img8,
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