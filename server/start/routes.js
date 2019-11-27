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
    { id: 1, name: 'Lógica Básica', color: '#A693EB' },
    { id: 2, name: 'Shell', color: '#FF9B9B' },
    { id: 3, name: 'Linux', color: '#93CAEB' },
    { id: 4, name: 'GitHub', color: '#89DD94' },
    { id: 5, name: 'HTML', color: '#A693EB' },
    { id: 6, name: 'CSS', color: '#FF9B9B' },
  ]
})

// Courses Lessons (ou Etapas e depois Lessons?)
Route.get('/courses/:id', ({ params }) => {
  return [
    { name: 'Lógica Básica 1', finished: true, color: '#A693EB' },
    { name: 'Lógica Básica 2', finished: false, color: '#FF9B9B' },
    { name: 'Lógica Básica 3', finished: false, color: '#93CAEB' }
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
