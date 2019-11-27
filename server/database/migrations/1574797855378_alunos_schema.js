'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunosSchema extends Schema {
  up() {
    this.create('alunos', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('cascade')
      table.string('name')
      table.integer('pontos')
      table.string('contato')
      table.timestamps()
    })
  }

  down() {
    this.drop('alunos')
  }
}

module.exports = AlunosSchema
