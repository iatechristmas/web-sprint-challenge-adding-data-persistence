exports.seed = function (knex) {
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          name: "test1",
          description: "test1",
          completed: false,
        },
        {
          name: "test2",
          description: "test2",
          completed: true,
        },
        {
          name: "test3",
          description: "test3",
          completed: false,
        },
      ]);
    });
};
