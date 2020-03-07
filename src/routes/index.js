import BoardController from '../controllers/BoardController'

module.exports = (app) => {
  app.post('/board', BoardController.Update)
  app.get('/board', BoardController.Update)
}