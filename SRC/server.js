//Server import
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//Routes import
import userRoutes from "../src/routes/authRoutes.js";

// __dirname in ESM(a way of defining dynamic filepaths)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Initiates express as a constant
const app = express();

//basic middleware
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname, "..", "public")));

//API routes, We use false routings from frontend and route to the correct pathways
app.use("/api/auth", userRoutes);

//HTML-site vi use in projects
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

//Server and what port it should listen to
app.listen(3000, () => console.log("Server kjører på http://localhost:3000"));
