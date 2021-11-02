const yup = require('yup');

module.exports.validatePostMessage = async (req, res, next) => {
  const { body } = req;
  const MESSAGE_SCHEMA = yup
    .string()
    .min(2)
    .max(700)
    .required();
  const MESSAGE_VALIDATION_SCHEMA = yup.object().shape({
    text: MESSAGE_SCHEMA,
    email: yup
      .string()
      .email()
      .required(),
    date: yup.date().max(new Date()),
  });

  try {
    const validatedMessage = await MESSAGE_VALIDATION_SCHEMA.validate(body);
    req.body = validatedMessage;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports.validatePatchMessage = async (req, res, next) => {
  const { body } = req;
  const MESSAGE_SCHEMA = yup
    .string()
    .min(2)
    .max(700);
  const MESSAGE_VALIDATION_SCHEMA = yup.object().shape({
    text: MESSAGE_SCHEMA,
    email: yup.string().email(),
    date: yup.date().max(new Date()),
  });

  try {
    const validatedMessage = await MESSAGE_VALIDATION_SCHEMA.validate(body);
    req.body = validatedMessage;
    next();
  } catch (e) {
    next(e);
  }
};
