import { addNewContact } from '../controllers/Controller'

const routes = (app) => {
 app.route('/contact')
 .get((req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request from: ${req.method}`)
    res.send('GET request')
  })
 .post(addNewContact)
 app.route('/contact/:contactId')
 .put((req, res) =>
 res.send('PUT request'))
 .delete((req, res) =>
 res.send('DELETE request'))
}

export default routes
