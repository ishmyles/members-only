import pg from "pg";
const { Client } = pg;

const sqlQuery = `
DROP TABLE IF EXISTS "UserSessions";
DROP TABLE IF EXISTS Messages;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS MemberTypes;

CREATE TABLE "UserSessions" (
    "sid" VARCHAR NOT NULL COLLATE "default",
    "sess" JSON NOT NULL,
    "expire" TIMESTAMP(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "UserSessions" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "UserSessions" ("expire");

CREATE TABLE MemberTypes (
    id INTEGER PRIMARY KEY, 
    type VARCHAR(25)
);

CREATE TABLE Users (
    username VARCHAR(25) PRIMARY KEY,
    firstname VARCHAR(25),
    lastname VARCHAR(25),
    password VARCHAR,
    membertype INTEGER,
    FOREIGN KEY (membertype) REFERENCES MemberTypes (id)
);

CREATE TABLE Messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(50),
    text VARCHAR(255),
    createdAt TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    createdBy VARCHAR(25),
    FOREIGN KEY (createdBy) REFERENCES Users (username) ON DELETE CASCADE
);

INSERT INTO MemberTypes (id, type) VALUES 
(0, 'Admin'),
(1, 'Guest'),
(2, 'Member');

INSERT INTO Users (username, firstname, lastname, password, membertype)
VALUES 
('ishmyles', 'Myles', 'GG', 'Test', 0);

SELECT * FROM MemberTypes;
`;

const populateData = async () => {
  const client = new Client({
    connectionString: process.env.DB_CONN,
  });

  console.log("SEEDING...");

  await client.connect();
  const result = await client.query(sqlQuery);
  await client.end();
  console.log(result[result.length - 1].rows);

  console.log("DONE!");
};

populateData();
