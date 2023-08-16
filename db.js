const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./users.db";

function connectToDatabase() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    var db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createTable(db);
      console.log("Connected to the database successfully");
    });
    return db;
  }
}

function createTable(db) {
  db.exec(`
  CREATE TABLE curry
  (
    gisid                       INT,
    dcgid                       INT,
    first_name                  VARCHAR(20),
    last_name                   VARCHAR(20),
    display_name                VARCHAR(20),
    username                    VARCHAR(20),
    alias                       VARCHAR(20),
    pin                         INT
    locationStoreId             INT,
    keys                        VARCHAR(20),
    departmentId                INT,
    directCallOnly              TEXT,
    studioUser                  TEXT,
    moderator                   TEXT,
    broadcastingAllowed         TEXT,
    broadcastRecordingEnabled   TEXT,
    priority                    INT,
    emails                      TEXT,
  )
`);
}

module.exports = connectToDatabase();
