export const authoriseAdminGet = (req, res) =>
  res.send("<h1>ENTER ADMIN SECRET</h1><p>TODO: Create secretcode form</p>");

export const authoriseAdminPost = (req, res) =>
  res.send(
    "[POST] Form submitted. TODO: Validate user input & authorise user if input equal secret"
  );
