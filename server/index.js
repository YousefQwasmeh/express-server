const PORT = process.env.PORT || 4000;
const app = require("./app.js");

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
