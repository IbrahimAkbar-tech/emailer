const nodemailer = require("nodemailer");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./users.db");

const sql = `SELECT * from curry`;

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
        user: "giscredentials@zohomail.eu",
        pass: "Shahana123!",
      },
    });

    let mailOptions = {
      from: "giscredentials@zohomail.eu",
      to: row.email,
      subject: `Shoplive login details`,
      text: `Hi ${firstName}, please use the below credentials to sign into Shoplive:\n\nUsername: ${username}\nPin: ${pin}\n\nPlease do not reply to this email.\nThanks,\nThe Emplifi Team\n`,
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

/* 
uncomment to add a column

db.run("ALTER TABLE curry ADD COLUMN gisid INT");
*/

/* --------------------------DELETE QUERIES-----------------------------*/

// db.run("DELETE from curry");

/* 
uncomment to delete column

db.run("ALTER TABLE curry DROP COLUMN deleting");
*/

/* 
uncomment to delete row

db.run("DELETE FROM curry WHERE gisid=30843")

*/
