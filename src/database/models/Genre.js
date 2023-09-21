module.exports = (sequelize, dataTypes) => {
  const alias = "Genre";
  const cols = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    ranking: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    active: {
      type: dataTypes.BOOLEAN,
      allowNull: false,
    },
  };
  const config = {
    tableName: "Genres",
    timestamps: true /* si no tiene marca de tiempo poner false */,
    underscored: true /* por si es snake case, tratar de siempre en camelcase */,
  };
  const Genre = sequelize.define(alias, cols, config);
  return Genre;
};
