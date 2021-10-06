const express = require('express');
const messageController = require('./controllers/message.controller');
const validate = require('./middleware/validate.mw');
const app = express();

app.use(express.json());

app.get('/messages/', messageController.getMessages);

app.get('/messages/:messageId', messageController.getMessageById);

app.post(
  '/messages',
  validate.validateMessage,
  messageController.createMessage
);

app.patch(
  '/messages/:messageId',
  validate.validateMessage,
  messageController.updateMessage
);

app.delete('/messages/:messageId', messageController.deleteMessage);
module.exports = app;
