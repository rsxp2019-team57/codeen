'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerguntaSchema extends Schema {
  up() {
    this.create('perguntas', (table) => {
      table.increments()

      table
        .integer('licao_id')
        .unsigned()
        .references('id')
        .inTable('licaos')
        .onDelete('cascade')

      table.string('pergunta')


      table.timestamps()
    })
  }

  down() {
    this.drop('perguntas')
  }
}

module.exports = PerguntaSchema
