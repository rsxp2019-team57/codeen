'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CursosSchema extends Schema {
  up() {
    this.create('cursos', (table) => {
      table.increments()
      table
        .integer('aluno_id')
        .unsigned()
        .references('id')
        .inTable('alunos')
        .onDelete('cascade')

      table.string('name')
      table.timestamps()
    })
  }

  down() {
    this.drop('cursos')
  }
}

module.exports = CursosSchema
