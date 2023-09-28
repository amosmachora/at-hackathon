const AfricasTalking = require("africastalking");

const africastalking = AfricasTalking({
  apiKey: "03ac257cf3941cbd19223616cbd2cf7c5990257dc2d8a315ef783210adf829cd",
  username: "sandbox",
});

export const sendSMS = async ({ to, message }) => {
  try {
    const result = await africastalking.SMS.send({
      to,
      message,
      from: "45778",
    });
    console.log(result);
  } catch (ex) {
    console.error(ex);
  }
};
