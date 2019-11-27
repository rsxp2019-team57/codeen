'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EtapaSchema extends Schema {
  up() {
    this.create('etapas', (table) => {
      table.increments()

      table
        .integer('curso_id')
        .unsigned()
        .references('id')
        .inTable('cursos')
        .onDelete('cascade')

      table.string('titulo')
      table.boolean('concluido')

      table.timestamps()
    })
  }

  down() {
    this.drop('etapas')
  }
}

module.exports = EtapaSchema
