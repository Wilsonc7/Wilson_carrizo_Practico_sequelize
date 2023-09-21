const db = require("../database/models");
const { Op } = db.Sequelize;

module.exports = {
  list: (req, res) => {
    db.Movie.findAll().then(function (movies) {
      res.render("moviesList", { movies: movies });
    }).catch(error=> console.log(error));
  },
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id).then(function (movie) {
      res.render("moviesDetail", { movie: movie });
    }).catch(error=> console.log(error));
  },
  new: (req, res) => {
    db.Movie.findAll({
      where: {
        release_date: {
          [Op.gte]: "1999-01-01",
        },
      },
      order: [["release_date", "DESC"]],
    }).then(function (movies) {
      res.render("newestMovies", { movies: movies });
    }).catch(error=> console.log(error));
  },
  recomended: (req, res) => {
    db.Movie.findAll({
      order: [["rating", "DESC"]],
      limit: 5,
    }).then(function (movies) {
      res.render("recommendedMovies", { movies: movies });
    }).catch(error=> console.log(error));
  },
};
