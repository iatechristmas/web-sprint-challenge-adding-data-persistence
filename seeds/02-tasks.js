exports.seed = function (knex) {
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        {
          description: "test1",
          notes: "test1",
          completed: false,
          project_id: 1,
        },
        { description: "test2", completed: true, project_id: 1 },
        {
          description: "test3",
          completed: true,
          project_id: 2,
        },
        {
          description: "test4",
          notes: "test4",
          completed: true,
          project_id: 2,
        },
        {
          description: "test5",
          completed: true,
          project_id: 2,
        },
        {
          description: "test6",
          notes: "test6",
          completed: false,
          project_id: 3,
        },
        { description: "test7", completed: false, project_id: 3 },
      ]);
    });
};
