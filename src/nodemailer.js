import nodemailer from "nodemailer";

const sendMail = (mailOptions, transportOptions) => {
  return new Promise((resolve, reject) => {
    const transport = nodemailer.createTransport(transportOptions);

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      }

      resolve(info);
    });
  });
};

export default {
  ...nodemailer,
  sendMail,
};
