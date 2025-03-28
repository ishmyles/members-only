import pool from "./pool.js";
import bcrypt from "bcryptjs";

// USERS
export const getUsernameById = async (id) => {
  const { rows } = await pool.query(
    "SELECT username FROM users WHERE username = $1;",
    [id]
  );
  return rows;
};

export const updateUserMemberType = async (username, memberType) => {
  const sqlQuery = `
        UPDATE users
        SET membertype = $1
        WHERE username = $2;
    `;
  if (memberType === "admin") {
    await pool.query(sqlQuery, [0, username]);
  } else if (memberType === "member") {
    await pool.query(sqlQuery, [2, username]);
  } else {
    await pool.query(sqlQuery, [1, username]);
  }
};

export const createNewUser = async ({
  username,
  firstname,
  lastname,
  password,
}) => {
  const _salt = Number(process.env.SALT_KEY);

  bcrypt.hash(password, _salt, async (err, hashedPassword) => {
    try {
      if (err) throw new Error();

      await pool.query(
        "INSERT INTO Users (username, firstname, lastname, password) VALUES ($1, $2, $3, $4)",
        [username, firstname, lastname, hashedPassword]
      );
    } catch (error) {
      console.log(error);
    }
  });
};

// MESSAGES
export const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM Messages;");
  return rows;
};

export const createNewMessage = async ({ title, text, createdBy }) => {
  await pool.query(
    `
        INSERT INTO Messages (title, text, createdBy)
        VALUES ($1, $2, $3);   
    `,
    [title, text, createdBy]
  );
};

export const deleteMessageById = async (id) => {
  await pool.query("DELETE FROM Messages WHERE id = $1;", [id]);
};
