const exprss = require("express");
const cors = require("cors");

const app = exprss();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(exprss.json());

// Usr
const users = [
  { id: 1, name: "Monir", email: "monir@gmail.com" },
  { id: 2, name: "Saidul", email: "saidul@gmail.com" },
  { id: 3, name: "Mursalin", email: "mursalin@gmail.com" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Hello There!")
});

// Get users
app.get("/users", (req, res) => {
  res.send(users);
});

// Add new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.send({
    status: 200,
    message: "User created successfully!",
    data: users
  })
});

// Delete user by ID
app.delete("/users", (req, res) => {
  const id = parseInt(req.body.id);
  const newUsers = users.filter(user => user.id !== id);

  res.send({
    status: 200,
    message: "User deleted successfully!",
    data: newUsers
  })
})

// Server listener
app.listen(port, () => {
  console.log("Server is running on PORT: ", port);
});