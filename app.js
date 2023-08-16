const nodemailer = require("nodemailer");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./users.db");

const sql = `SELECT * from TABLE_NAME`;

db.all(sql, (err, rows) => {
  if (err) {
    throw err;
  }

  rows.forEach(function (row) {
    let firstName = row.firstName;
    let username = row.username;
    let pin = row.pin.toString();

    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      auth: {
        user: "YOUR_EMAIL",
        pass: "YOUR_PASSWORD",
      },
    });

    let mailOptions = {
      from: "giscredentials@zohomail.eu",
      to: row.email,
      subject: `Login details`,
      text: `Hi ${firstName}, please use the below credentials to sign into Shoplive:\n\nUsername: ${username}\nPin: ${pin}\n\nPlease do not reply to this email.\nThanks,\nThe Service Team\n`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
});

setTimeout(() => {
  db.run("DELETE from curry");
}, "10000");
