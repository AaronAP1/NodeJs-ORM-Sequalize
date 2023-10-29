const { Person, PersonSchema } = require('./usuario.model');

function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
}

module.exports = setupModels;