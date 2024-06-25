const { uuid } = require('uuidv4')

const contacts = [
  {
    id: uuid(),
    name: 'Bernardo',
    email: 'bernardo@email.com',
    phone: '12121212',
    category_id: uuid(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise(resolve => resolve(contacts))
  }
}

module.exports = new ContactsRepository()
