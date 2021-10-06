const { v4: uuidv4 } = require('uuid');
const format = require('date-fns/format');

const messagesDB = [
  {
    id: uuidv4(),
    text: 'Hello world!',
    email: 'test.test@test',
    date: format(new Date(), 'PPPPpppp'),
  },
  {
    id: uuidv4(),
    text: 'How are you doing?',
    email: 'test2.test@test',
    date: format(new Date(), 'PPPPpppp'),
  },
];

class Message {
  static messages = messagesDB;

  static getMessages () {
    return Message.messages;
  }
  static getMessageById (id) {
    const [foundMessages] = Message.messages.filter(m => m.id == id);
    return foundMessages;
  }
  static createMessage (body) {
    const createdMessage = {
      ...body,
      id: uuidv4(),
      date: format(new Date(), 'PPPPpppp'),
    };
    Message.messages.push(createdMessage);
    return Message.messages[Message.messages.length - 1];
  }
  static updateMessage (id, body) {
    const [updatedMessage] = Message.messages.filter(m => m.id == id);
    updatedMessage.text = body.text;
    updatedMessage.email = body.email;
    return updatedMessage;
  }
  static deleteMessage = messageId => {
    const [foundMessage] = messagesDB.filter(m => m.id == messageId);
    const newMessagesDB = messagesDB.splice(foundMessage, 1);
  };
}

module.exports = Message;
