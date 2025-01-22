export const authoriseUserGet = (req, res) =>
  res.send("<h1>ENTER MEMBER SECRET</h1><p>TODO: Create secretcode form</p>");

export const authoriseUserPost = (req, res) =>
  res.send(
    "[POST] Form submitted. TODO: Validate user input & authorise user if input equal secret"
  );
