/**
 * Created by argo on 23/05/17.
 */
export class PresentStory {
  contacts = [
    { name: 'Pascal Precht', id: 1 },
    { name: 'Christoph Burgdorf', id: 2 },
    { name: 'Thomas Burleson', id: 3 }
  ];
  getContact(id) {
    return this.contacts.find(contact => contact.id == id);
  }
}
