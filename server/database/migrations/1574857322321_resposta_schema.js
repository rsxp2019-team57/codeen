'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RespostaSchema extends Schema {
  up() {
    this.create('respostas', (table) => {
      table.increments()

      table
        .integer('pergunta_id')
        .unsigned()
        .references('id')
        .inTable('perguntas')
        .onDelete('cascade')

      table.string('resposta')


      table.timestamps()
    })
  }

  down() {
    this.drop('respostas')
  }
}

module.exports = RespostaSchema
