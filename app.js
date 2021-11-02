const express = require('express');
const messageController = require('./controllers/message.controller');
const validate = require('./middleware/validate.mw');
const app = express();

app.use(express.json());

app.get('/messages/', messageController.getMessages);

app.get('/messages/:messageId', messageController.getMessageById);

app.post(
  '/messages',
  validate.validatePostMessage,
  messageController.createMessage
);

app.patch(
  '/messages/:messageId',
  validate.validatePatchMessage,
  messageController.updateMessage
);

app.delete('/messages/:messageId', messageController.deleteMessage);

app.use((err, req, res, next) => {
  if (headresSent) {
    return;
  }
  res
    .status(err?.status ?? 500)
    .send({ errors: [{ title: err?.message ?? 'Internal server error' }] });
});

module.exports = app;
