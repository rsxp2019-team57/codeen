'use strict'


const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('alunos', 'AlunoController.store')
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


// Home
Route.post('/login', ({ params }) => { return { mentor: params.username == 'mentor' } })

// Courses
Route.get('/courses', () => {
  return [
    { name: 'Lógica Básica', color: '#eeaabb' },
    { name: 'Shell', color: '#eebbaa' },
    { name: 'Linux', color: '#bbeeaa' },
    { name: 'GitHub', color: '#eeaabb' },
    { name: 'HTML', color: '#ee99bb' },
    { name: 'CSS', color: '#eeaaee' },
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
