'use strict'


const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('alunos', 'AlunoController.store')

Route.get('alunos', 'AlunoController.index')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


// Home
Route.post('/login', ({ request }) => { return { mentor: (request.input('username') === 'mentor') } })

// Courses
Route.get('/courses', () => {
  return [
    { id: 1, name: 'Lógica Básica', color: '#eeaabb' },
    { id: 2, name: 'Shell', color: '#eebbaa' },
    { id: 3, name: 'Linux', color: '#bbeeaa' },
    { id: 4, name: 'GitHub', color: '#eeaabb' },
    { id: 5, name: 'HTML', color: '#ee99bb' },
    { id: 6, name: 'CSS', color: '#eeaaee' },
  ]
})

// Courses Lessons (ou Etapas e depois Lessons?)
Route.get('/courses/:id', ({ params }) => {
  return [
    { name: 'Lógica Básica 1', finished: true },
    { name: 'Lógica Básica 2', finished: false },
    { name: 'Lógica Básica 3', finished: false }
  ]
})

// Lesson
Route.get('/lessons/:id', ({ params }) => {
  return { name: 'Lógica Básica 1', video_url: 'http://www.youtube.com/watch?v=CkTQUtx818w' }
})

// === ACESSO MENTOR

// Perguntas em aberto
Route.get('/questions/open', ({ params }) => {
  return [
    { id: 1, question: 'O que é um boolean??' },
    { id: 2, question: 'Onde está o tio Phill?' }
  ]
})

// Responder uma pergunta
Route.get('/question/1', ({ params }) => {
  return { ok: true }
})
