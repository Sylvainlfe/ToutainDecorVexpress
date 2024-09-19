const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactEmail = async (contactData) => {
  const { firstname, lastname, email, phone, location, comment } = contactData;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'Nouveau message de contact',
    text: `
      Nom: ${firstname} ${lastname}
      Email: ${email}
      Téléphone: ${phone}
      Ville: ${location}
      Commentaire: ${comment}
    `,
  };

  try {
    console.log('Tentative d\'envoi d\'e-mail:', mailOptions);
    await transporter.sendMail(mailOptions);
    console.log('E-mail envoyé avec succès');
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

module.exports = { sendContactEmail };