'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LicaoSchema extends Schema {
  up() {
    this.create('licaos', (table) => {
      table.increments()

      table
        .integer('etapa_id')
        .unsigned()
        .references('id')
        .inTable('etapas')
        .onDelete('cascade')

      table.string('titulo')
      table.string('video_url')
      table.boolean('concluido')


      table.timestamps()
    })
  }

  down() {
    this.drop('licaos')
  }
}

module.exports = LicaoSchema
