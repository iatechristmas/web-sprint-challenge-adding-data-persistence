exports.seed = function (knex) {
  return knex("resources")
    .truncate()
    .then(function () {
      return knex("resources").insert([
        { name: "test1", description: "test1" },
        { name: "test2", description: "test2" },
        { name: "test3" },
        { name: "test4", description: "test4" },
        { name: "test5", description: "test5" },
        { name: "test6", description: "test6" },
        { name: "test7" },
      ]);
    });
};
