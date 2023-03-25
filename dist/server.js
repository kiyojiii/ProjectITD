
const cors = require("cors");
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
  })
)