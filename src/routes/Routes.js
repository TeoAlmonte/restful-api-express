import { addNewContact, getContacts, getContactWithId, updateContact, removeContact } from '../controllers/Controller'

const routes = (app) => {
 app.route('/contact')
 .get((req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request from: ${req.method}`)
    next()
  }, getContacts)
 .post(addNewContact)
 app.route('/contact/:contactId')
 .get(getContactWithId)
 .put(updateContact)
 .delete(removeContact)
}

export default routes
