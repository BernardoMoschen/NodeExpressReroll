const { v4 } = require('uuid')

const contacts = [
  {
    id: v4(),
    name: 'Bernardo',
    email: 'bernardo@email.com',
    phone: '12121212',
    category_id: v4(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise(resolve => resolve(contacts))
  }

  findById(id) {
    return new Promise(resolve =>
      resolve(contacts.find(contact => contact.id === id)),
    )
  }
}

module.exports = new ContactsRepository()
