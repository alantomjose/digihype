const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, "./frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

app.post("/api/form", (req, res) => {
  // console.log(req.body.firstname);
  nodemailer.createTestAccount((err, account) => {
    // console.log("check");
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.firstname} ${req.body.lastname}</li>
    <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>`;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Don’t forget to replace with the SMTP host of your provider
      port: 587,
      auth: {
        user: "digihypecontactus@gmail.com",
        pass: "Yellowlemons@500",
      },
    });

    let mailOptions = {
      from: "hypedigital",
      to: "ashin.laurel@gmail.com",
      subject: "Contact Us Form",
      text: req.body.message,
      html: htmlEmail,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message Sent");
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
