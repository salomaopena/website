import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export function sendVerificationEmail(email, token) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verificação de Email',
    html: `<a href="${process.env.BASE_URL}/verify/${token}">Clique para verificar seu email</a>`
  };

  transporter.sendMail(mailOptions);
}
