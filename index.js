//  Import express and axios
import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
// Setup Server
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
// Setup static files
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Main Route
app.get("/", (req, res) => {
  res.render("index", {
    image: null,
    size: null,
  });
});

app.post("/random", async (req, res) => {
  try {
    const result = await axios.get("https://random.dog/woof.json");

    res.render("index", {
      image: result.data.url,
      size: result.data.fileSizeBytes,
    });
  } catch (error) {
    res.render("index", {
      image: null,
      size: "Error fetching data",
    });
  }
});

// Run Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
