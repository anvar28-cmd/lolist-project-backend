const knex = require("knex")(require("../knexfile"));

exports.index =  async (req, res) => {
  console.log(req.payload)
    const {username } = req.payload;

  //get the prfile data from the database using the username (primary key)
  const profileData = await knex.select('users.username as username',' users.name as u_name', 'hero.name as hero',
  'build.description as b_desc', 
  'build.id as b_id',
  'i1.name as i1_name', 'i1.image as i1_image',
  'i2.name as i2_name', 'i2.image as i2_image',
  'i3.name as i3_name', 'i3.image as i3_image',
  'i4.name as i4_name', 'i4.image as i4_image',
  'i5.name as i5_name', 'i5.image as i5_image',
  'i6.name as i6_name', 'i6.image as i6_image',
  's1.name as s1_name', 's1.image as s1_image',
  's2.name as s2_name', 's2.image as s2_image',
  ).from("users")
  .innerJoin('build', 'build.users_id', '=', 'users.id' )
  .innerJoin('hero', 'build.hero_id', '=', 'hero.id')
  .innerJoin('item as i1', 'build.item1_id', '=', 'i1.id')
  .innerJoin('item as i2', 'build.item2_id', "=", 'i2.id')
  .leftOuterJoin('item as i3', 'build.item3_id', '=', 'i3.id')
  .leftOuterJoin('item as i4', 'build.item4_id', "=", 'i4.id')
  .leftOuterJoin('item as i5', 'build.item5_id', '=', 'i5.id')
  .leftOuterJoin('item as i6', 'build.item6_id', "=", 'i6.id')
  .innerJoin('spell as s1', 'build.spell1_id', '=', 's1.id')
  .leftOuterJoin('spell as s2', 'build.spell2_id', "=", 's2.id')
  .where({ username }).first();

  console.log(profileData)


  //sent the profile data back to the frontend
  res.json(profileData);
};



