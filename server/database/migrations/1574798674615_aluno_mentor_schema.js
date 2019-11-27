'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoMentorSchema extends Schema {
  up() {
    this.create('aluno_mentors', (table) => {
      table.increments()

      table
        .integer('aluno_id')
        .unsigned()
        .references('id')
        .inTable('alunos')
        .onDelete('cascade')

      table
        .integer('mentor_id')
        .unsigned()
        .references('id')
        .inTable('mentores')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down() {
    this.drop('aluno_mentors')
  }
}

module.exports = AlunoMentorSchema
