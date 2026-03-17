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

//HTML-site we are using in the project
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//HTML-site for homepage
app.get("/start", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "homePage.html"));
});
//HTML-site for weather
app.get("/weather", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "weatherPage.html"));
});
//HTML-page for user
app.get("/user", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "userPage.html"));
});

//Server and what port it should listen to
app.listen(3000, () => console.log("Server runs on http://localhost:3000"));
