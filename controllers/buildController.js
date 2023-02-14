const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("build")
    .then((data) => {
      console.log(_req.payload)
      res.status(200).json(data);
    })
    .catch((error) =>
      res.status(400).send(`Error retrieving builds: ${error}`)
    );
};

exports.addBuild = (req, res) => {
  console.log(req.payload.id)
  console.log(req.body)
  const {
    hero_id,
    description,
items,
spells

  } = req.body;

  console.log(hero_id, description, items.length, spells.length)

    // Validate the request body for required data
    if (
      !hero_id ||
      !description ||
      items.length < 1 ||
      spells.length < 1
    ) {
      return res
        .status(400)
        .send(
          "Please make sure to provide champion ID, description of build, selected items and spells"
        );
      }

      const sum = [1,2,3,4].reduce((acc, i) => {
return acc + i;
      }, 0)

      const itemsObj = items.reduce((obj, id, i) => {
obj[`item${i+1}_id`] = id
return obj

      }, {})

      const spellsObj = spells.reduce((obj, id, i) => {
        obj[`spell${i+1}_id`] = id
        return obj
        
              }, {})

      console.log(itemsObj)


    const postNewBuild =
     {
users_id: req.payload.id,
        hero_id: hero_id,
        description: description,
        ...itemsObj,
        ...spellsObj

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

  exports.getHeroes = (req, res) => {

    knex("build")
    .where({hero_id: req.params.heroID, users_id: req.payload.id})
    .then((data) => {
     res.json(data)
    })
  }