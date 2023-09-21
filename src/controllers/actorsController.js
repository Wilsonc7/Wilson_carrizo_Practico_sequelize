const db = require("../database/models");
module.exports = {
  list: (req, res) => {
    db.Actor.findAll().then(function (actors) {
      res.render("actorsList", { actors: actors });
    }).catch(error=> console.log(error));
  },
  detail: (req, res) => {
    db.Actor.findByPk(req.params.id).then(function (actor) {
      res.render("actorsDetail", { actor: actor });
    }).catch(error=> console.log(error));
  },
};
