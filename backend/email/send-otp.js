
// const nodemailer = require("nodemailer")
// const dotEnv = require("dotenv")

// dotEnv.config()

// // const transporter = nodemailer.createTransport({
// //   host: "smtp.gmail.com",
// //   port: 587,
// //   secure: false, // Use true for port 465, false for port 587
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASSWORD,
// //   },
// // });
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// // exports.sendOtpEmail = async(email, otp)=>{
//    await transporter.sendMail({
//     from: `"OTP Verification" <${process.env.EMAIL_USER}>`,
//     to: email,
//     subject: "Your OTP code",
  
//     html: `<h2> Your OTP is: ${otp} </h2> <p> Valid for 5 minutes </p> `
//   });
// }

// exports.sendOtpEmail = async (email, otp) => {
//   try {
//     const info = await transporter.sendMail({
//       from: `"OTP Verification" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Your OTP code",
//       html: `<h2>Your OTP is: ${otp}</h2><p>Valid for 5 minutes</p>`
//     });

//     console.log("FULL INFO:", info);
//     console.log("EMAIL_USER =", process.env.EMAIL_USER);
//     console.log(
//       "EMAIL_PASSWORD exists =",
//       !!process.env.EMAIL_PASSWORD
//     );

//   } catch (error) {
//     console.error("FULL ERROR:", error);  
//     throw error;
//   }
// };













// const { Resend } = require("resend");
// const dotenv = require("dotenv");

// dotenv.config();

// const resend = new Resend(process.env.RESEND_API_KEY);

// exports.sendOtpEmail = async (email, otp) => {
//   try {
//     const response = await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: email,
//       subject: "Your OTP Code",
//       html: `
//         <h2>Your OTP is: ${otp}</h2>
//         <p>Valid for 5 minutes</p>
//       `,
//     });

//     console.log("EMAIL SENT:", response);
//   } catch (error) {
//     console.error("EMAIL ERROR:", error);
//     throw error;
//   }
// };












const { google } = require("googleapis");
const MailComposer = require("nodemailer/lib/mail-composer");
const dotEnv = require("dotenv");

dotEnv.config();

const oauth2Client = new google.auth.OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN,
});

const gmail = google.gmail({
  version: "v1",
  auth: oauth2Client,
});

exports.sendOtpEmail = async (email, otp) => {
  try {
    const mail = new MailComposer({
      from: process.env.OAUTH_EMAIL,
      to: email,
      subject: "OTP Verification",
      html: `
        <h2>Your OTP is: ${otp}</h2>
        <p>Valid for 5 minutes</p>
      `,
    });

    const message = await mail.compile().build();

    const raw = Buffer.from(message)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    const result = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw,
      },
    });

    console.log("Email sent:", result.data.id);
  } catch (error) {
    console.error("FULL ERROR:", error);
    throw error;
  }
};