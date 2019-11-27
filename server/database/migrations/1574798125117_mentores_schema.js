'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MentoresSchema extends Schema {
  up() {
    this.create('mentores', (table) => {
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
    this.drop('mentores')
  }
}

module.exports = MentoresSchema
