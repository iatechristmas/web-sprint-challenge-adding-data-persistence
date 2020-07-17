const db = require("../data/db-config");

module.exports = {
  getProjects,
  findProjectsById,
  addProjects,
  getTasks,
  findTasksById,
  addTasks,
  getResources,
  findResourcesById,
  addResources,
};

function getProjects() {
  return db("projects as p").select(
    "p.id",
    "p.name",
    "p.description",
    "p.completed"
  );
}

function findProjectsById(id) {
  return db("projects as p")
    .select("p.id", "p.name", "p.description", "p.completed")
    .where({ id });
}

function addProjects(changes) {
  return db("projects")
    .insert(changes, "id")
    .then((ids) => {
      return findProjectsById(ids[0]);
    });
}

function getTasks() {
  return db("projects as p")
    .select("p.id", "p.name", "p.description", "t.description", "t.notes")
    .join("tasks as t", "t.project_id", "p.id");
}

function findTasksById(id) {
  return db("tasks as t")
    .select("t.id", "t.description", "t.notes", "t.completed")
    .where({ id });
}

function addTasks(changes) {
  return db("tasks")
    .insert(changes, "id")
    .then((ids) => {
      return findTasksById(ids[0]);
    });
}

function getResources() {
  return db("resources as r").select("r.id", "r.name", "r.description");
}

function findResourcesById(id) {
  return db("resources as r")
    .select("r.id", "r.name", "r.description")
    .where({ id });
}

function addResources(changes) {
  return db("resources as r")
    .insert(changes, "id")
    .then((ids) => {
      return findResourcesById(ids[0]);
    });
}
