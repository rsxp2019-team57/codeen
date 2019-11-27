'use strict'

const Aluno = use('App/Models/Aluno')

class AlunoController {


  async store({ request }) {

    const data = request.all()

    const aluno = Aluno.create(data)

    return aluno
  }


  async show({ params, request, response, view }) {
  }

  async update({ params, request, response }) {
  }

}

module.exports = AlunoController
