const Message = require('./../models/message');

module.exports.getMessages = (req, res) => {
  const foundMessages = Message.getMessages();
  res.status(200).send(foundMessages);
};

module.exports.getMessageById = (req, res) => {
  const {
    params: { messageId },
  } = req;
  const foundMessage = Message.getMessageById(messageId);

  if (foundMessage) {
    res.status(200).send(foundMessage);
  } else {
    res.status(404).send('Message not found');
  }
};

module.exports.createMessage = (req, res) => {
  const { body } = req;

  const createMessage = Message.createMessage(body);

  res.status(201).send(createMessage);
};

module.exports.updateMessage = (req, res) => {
  const {
    body,
    params: { messageId },
  } = req;

  const updatedMessage = Message.updateMessage(messageId, body);
  if (updatedMessage) {
    res.status(202).send(updatedMessage);
  } else {
    res.status(404).send('Message not found');
  }
};

module.exports.deleteMessage = (req, res) => {
  const {
    params: { messageId },
  } = req;
  Message.deleteMessage(messageId);
  res.status(201).send();
};
