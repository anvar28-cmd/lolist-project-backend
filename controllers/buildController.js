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

  const { hero_id, description, items, spells } = req.body;


  // Validate the request body for required data
  if (!hero_id || !description || items.length < 1 || spells.length < 1) {
    return res
      .status(400)
      .send(
        "Please make sure to provide champion ID, description of build, selected items and spells"
      );
  }

  const sum = [1, 2, 3, 4].reduce((acc, i) => {
    return acc + i;
  }, 0);

  const itemsObj = items.reduce((obj, id, i) => {
    obj[`item${i + 1}_id`] = id;
    return obj;
  }, {});

  const spellsObj = spells.reduce((obj, id, i) => {
    obj[`spell${i + 1}_id`] = id;
    return obj;
  }, {});



  const postNewBuild = {
    users_id: req.payload.id,
    hero_id: hero_id,
    description: description,
    ...itemsObj,
    ...spellsObj,
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
      res.status(204).send(`Build with id: ${_req.params.id} has been deleted`);
    })
    .catch((err) =>
      res.status(400).send(`Error deleting Build ${_req.params.id} ${err}`)
    );
};

exports.getHeroID = (req, res) => {
  knex("build")
    .select(
      "hero.id as id",
      "hero.name as h_name",
      'build.description as description',
      "i1.name as i1_name",
      "i1.image as i1_image",
      "i2.name as i2_name",
      "i2.image as i2_image",
      "i3.name as i3_name",
      "i3.image as i3_image",
      "i4.name as i4_name",
      "i4.image as i4_image",
      "i5.name as i5_name",
      "i5.image as i5_image",
      "i6.name as i6_name",
      "i6.image as i6_image",
      "s1.name as s1_name",
      "s1.image as s1_image",
      "s2.name as s2_name",
      "s2.image as s2_image",
    )
    .innerJoin("hero", "build.hero_id", "=", "hero.id")
    .innerJoin("item as i1", "build.item1_id", "=", "i1.id")
    .leftOuterJoin("item as i2", "build.item2_id", "=", "i2.id")
    .leftOuterJoin("item as i3", "build.item3_id", "=", "i3.id")
    .leftOuterJoin("item as i4", "build.item4_id", "=", "i4.id")
    .leftOuterJoin("item as i5", "build.item5_id", "=", "i5.id")
    .leftOuterJoin("item as i6", "build.item6_id", "=", "i6.id")
    .leftOuterJoin("spell as s1", "build.spell1_id", "=", "s1.id")
    .leftOuterJoin("spell as s2", "build.spell2_id", "=", "s2.id")

    .where({ hero_id: req.params.heroID, users_id: req.payload.id })
    .then((data) => {
    
      res.json(data);
    });
};

exports.deleteHeroID = (req, res) => {
  knex("build")
    .delete()
    .where({ hero_id: req.params.heroID, users_id: req.payload.id })
    .then(() => {
      res
        .status(204)
        .send(`Hero with id: ${req.params.heroID} has been deleted`);
    })
    .catch((err) =>
      res.status(400).send(`Error deleting Warehouse ${req.params.heroID} ${err}`)
    );
};
