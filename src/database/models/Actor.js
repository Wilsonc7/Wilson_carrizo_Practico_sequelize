module.exports = (sequelize, dataTypes) => {
  const alias = "Actor";
  const cols = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    first_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    rating: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    favorite_movie_id: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  };
  const config = {
    tableName: "Actors",
    timestamps: true /* si no tiene marca de tiempo poner false */,
    underscored: true /* por si es snake case, tratar de siempre en camelcase */,
  };
  const Actor = sequelize.define(alias, cols, config);
  return Actor;
};
