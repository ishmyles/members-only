# Members Only

This repository contains a simple application that demonstrates the concepts of authentication &amp; authorisation.

- Check out the [live preview](https://members-only-production-6cc8.up.railway.app/)

## Technologies Used

- Node
- Express
- PostgreSQL
- JavaScript
- EJS

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ishmyles/members-only.git
   cd members-only
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```env
    PORT=3000
    MEMBER_SECRET= <Enter a password>
    ADMIN_SECRET= <Enter another password>
    DB_CONN="postgres://<DB_USERNAME>:<PASSWORD>@localhost:5432/<DB_NAME>"
    COOKIE_SECRET=<Enter another password>
    SALT_KEY=10

   ```

4. **Start the application**:

   ```bash
   node --watch --env-file .env app.js
   ```

   The app will be accessible at `http://localhost:3000`.

5. **Terminating the application**:

   Press Ctrl + C to terminate app.

## App Design

![](./DESIGN_FILES/MembersOnlyDesign.jpg)
