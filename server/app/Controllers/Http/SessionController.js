'use strict'
const User = use('App/Models/User')

class SessionController {

  async store({ request, auth }) {

    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const user = await User.findBy('email', email)

    user.data_ultimo_acesso = new Date()

    console.log(user)

    return token

  }
}

module.exports = SessionController
